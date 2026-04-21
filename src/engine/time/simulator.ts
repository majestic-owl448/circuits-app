import type { CircuitComponent, SimulationResult, ComponentResult } from '../../types/circuit.ts';
import type { TimeDomainSnapshot, TimePointResult } from '../../types/circuit.ts';

export interface TimeSnapshot {
  checkpoint: 't0' | 't_mid' | 't_final';
  simulation: SimulationResult;
}

export interface TimeSimulationState {
  sliderValue: number;
  snapshots: TimeSnapshot[];
  checkpoints: TimeDomainSnapshot[];
  timeline: TimePointResult[];
  isPlaying: boolean;
  speed: 'normal' | 'slow';
}

interface TransientConfig {
  type: 'RC' | 'RL';
  sourceVoltage: number;
  resistance: number;
  reactiveComponentId: string;
}

// Checkpoint normalized times: t_norm = 0..1 maps to t = 0..5τ
const TRANSIENT_T_NORM: Record<TimeSnapshot['checkpoint'], number> = {
  t0: 0.1,    // 0.5τ — early transient (~39% of final for RC)
  t_mid: 0.3, // 1.5τ — mid transient (~78% of final)
  t_final: 1.0, // 5τ — essentially settled (~99%)
};

const CHECKPOINT_FACTORS: Record<TimeSnapshot['checkpoint'], number> = {
  t0: 0.2,
  t_mid: 0.6,
  t_final: 1,
};

function detectTransient(components: CircuitComponent[]): TransientConfig | null {
  const capacitor = components.find(c => c.type === 'capacitor');
  const inductor = components.find(c => c.type === 'inductor');
  if (!capacitor && !inductor) return null;

  const sourceVoltage = components
    .filter(c => c.type === 'battery')
    .reduce((sum, c) => sum + (c.properties.voltage ?? 0), 0);
  if (sourceVoltage === 0) return null;

  let resistance = 0;
  for (const c of components) {
    if (c.type === 'resistor' || c.type === 'bulb') {
      resistance += c.properties.resistance ?? 0;
    } else if (c.type === 'battery') {
      resistance += c.properties.internalResistance ?? 0;
    } else if (c.type === 'wire') {
      resistance += c.properties.wireResistance ?? 0;
    }
  }
  if (resistance === 0) return null;

  const reactive = (capacitor ?? inductor)!;
  return {
    type: capacitor ? 'RC' : 'RL',
    sourceVoltage,
    resistance,
    reactiveComponentId: reactive.id,
  };
}

function computeTransientSnapshot(
  config: TransientConfig,
  tNorm: number,
  components: CircuitComponent[],
  baseLoopNodes: string[],
): SimulationResult {
  const t5 = 5 * tNorm;
  let current: number;
  let reactiveVoltage: number;

  if (config.type === 'RC') {
    // Capacitor charging from 0: I decays, V_C rises
    current = (config.sourceVoltage / config.resistance) * Math.exp(-t5);
    reactiveVoltage = config.sourceVoltage * (1 - Math.exp(-t5));
  } else {
    // RL current buildup: I rises, V_L decays
    current = (config.sourceVoltage / config.resistance) * (1 - Math.exp(-t5));
    reactiveVoltage = config.sourceVoltage * Math.exp(-t5);
  }

  const componentResults = new Map<string, ComponentResult>();
  for (const comp of components) {
    let voltage = 0;
    if (comp.id === config.reactiveComponentId) {
      voltage = reactiveVoltage;
    } else if (comp.type === 'resistor' || comp.type === 'bulb') {
      voltage = current * (comp.properties.resistance ?? 0);
    } else if (comp.type === 'battery') {
      const internalDrop = current * (comp.properties.internalResistance ?? 0);
      voltage = (comp.properties.voltage ?? 0) - internalDrop;
    } else if (comp.type === 'wire') {
      voltage = current * (comp.properties.wireResistance ?? 0);
    }
    componentResults.set(comp.id, {
      componentId: comp.id,
      voltage,
      current,
      power: voltage * current,
    });
  }

  return {
    isComplete: true,
    isShortCircuit: false,
    totalResistance: config.resistance,
    totalCurrent: current,
    componentResults,
    diagnostics: ['transient-physics'],
    loopNodes: baseLoopNodes,
  };
}

function scaleSimulation(base: SimulationResult, factor: number): SimulationResult {
  const clampedFactor = Math.max(0, Math.min(1, factor));
  const scaledComponentResults = new Map(
    [...base.componentResults.entries()].map(([componentId, result]) => [
      componentId,
      {
        componentId,
        voltage: result.voltage * clampedFactor,
        current: result.current * clampedFactor,
        power: result.power * clampedFactor * clampedFactor,
      },
    ]),
  );

  return {
    ...base,
    totalCurrent: base.totalCurrent * clampedFactor,
    componentResults: scaledComponentResults,
  };
}

function trackedVoltageFor(simulation: SimulationResult): number {
  return simulation.totalResistance > 0 ? simulation.totalCurrent * simulation.totalResistance : 0;
}

export function createInitialTimeState(
  base: SimulationResult,
  components: CircuitComponent[] = [],
): TimeSimulationState {
  const checkpoints = createCheckpointSnapshots(base, components);
  const timeline = createTimelinePoints(base, components);

  return {
    sliderValue: 0,
    snapshots: checkpoints.map(checkpoint => ({ checkpoint: checkpoint.checkpoint, simulation: checkpoint.simulation })),
    checkpoints,
    timeline,
    isPlaying: false,
    speed: 'normal',
  };
}

export function createCheckpointSnapshots(
  base: SimulationResult,
  components: CircuitComponent[] = [],
): TimeDomainSnapshot[] {
  const transient = detectTransient(components);

  if (transient) {
    return [
      { checkpoint: 't0', label: 'Early', simulation: computeTransientSnapshot(transient, TRANSIENT_T_NORM.t0, components, base.loopNodes) },
      { checkpoint: 't_mid', label: 'Middle', simulation: computeTransientSnapshot(transient, TRANSIENT_T_NORM.t_mid, components, base.loopNodes) },
      { checkpoint: 't_final', label: 'Late', simulation: computeTransientSnapshot(transient, TRANSIENT_T_NORM.t_final, components, base.loopNodes) },
    ];
  }

  return [
    { checkpoint: 't0', label: 'Early', simulation: scaleSimulation(base, CHECKPOINT_FACTORS.t0) },
    { checkpoint: 't_mid', label: 'Middle', simulation: scaleSimulation(base, CHECKPOINT_FACTORS.t_mid) },
    { checkpoint: 't_final', label: 'Late', simulation: scaleSimulation(base, CHECKPOINT_FACTORS.t_final) },
  ];
}

export function createTimelinePoints(
  base: SimulationResult,
  components: CircuitComponent[] = [],
): TimePointResult[] {
  const points = [0, 0.25, 0.5, 0.75, 1];
  const transient = detectTransient(components);

  if (transient) {
    return points.map(tNorm => {
      const snapshot = computeTransientSnapshot(transient, tNorm, components, base.loopNodes);
      const reactiveVoltage = snapshot.componentResults.get(transient.reactiveComponentId)?.voltage ?? 0;
      return {
        t: tNorm,
        totalCurrent: snapshot.totalCurrent,
        trackedVoltage: reactiveVoltage,
        trackedCurrent: snapshot.totalCurrent,
      };
    });
  }

  return points.map(t => {
    const eased = t * t * (3 - 2 * t);
    const sample = scaleSimulation(base, eased);

    return {
      t,
      totalCurrent: sample.totalCurrent,
      trackedVoltage: trackedVoltageFor(sample),
      trackedCurrent: sample.totalCurrent,
    };
  });
}

export function advanceTimeSlider(
  current: number,
  speed: 'normal' | 'slow',
  reducedMotion: boolean,
): number {
  if (reducedMotion) {
    const checkpoints = [0, 50, 100];
    const next = checkpoints.find(value => value > current);
    return next ?? 100;
  }

  const step = speed === 'slow' ? 5 : 10;
  return Math.min(100, current + step);
}

export function checkpointForSlider(value: number): TimeSnapshot['checkpoint'] {
  if (value < 34) return 't0';
  if (value < 67) return 't_mid';
  return 't_final';
}

export function snapSliderToCheckpoint(value: number): number {
  const checkpoint = checkpointForSlider(value);
  if (checkpoint === 't0') return 0;
  if (checkpoint === 't_mid') return 50;
  return 100;
}

export function describeTimePosition(value: number): 'Early' | 'Middle' | 'Late' {
  if (value < 33) return 'Early';
  if (value < 67) return 'Middle';
  return 'Late';
}
