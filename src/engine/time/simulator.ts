import type { SimulationResult } from '../../types/circuit.ts';
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

const CHECKPOINT_FACTORS: Record<TimeSnapshot['checkpoint'], number> = {
  t0: 0.2,
  t_mid: 0.6,
  t_final: 1,
};

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

export function createInitialTimeState(base: SimulationResult): TimeSimulationState {
  const checkpoints = createCheckpointSnapshots(base);
  const timeline = createTimelinePoints(base);

  return {
    sliderValue: 0,
    snapshots: checkpoints.map(checkpoint => ({ checkpoint: checkpoint.checkpoint, simulation: checkpoint.simulation })),
    checkpoints,
    timeline,
    isPlaying: false,
    speed: 'normal',
  };
}

export function createCheckpointSnapshots(base: SimulationResult): TimeDomainSnapshot[] {
  return [
    { checkpoint: 't0', label: 'Early', simulation: scaleSimulation(base, CHECKPOINT_FACTORS.t0) },
    { checkpoint: 't_mid', label: 'Middle', simulation: scaleSimulation(base, CHECKPOINT_FACTORS.t_mid) },
    { checkpoint: 't_final', label: 'Late', simulation: scaleSimulation(base, CHECKPOINT_FACTORS.t_final) },
  ];
}

export function createTimelinePoints(base: SimulationResult): TimePointResult[] {
  const points = [0, 0.25, 0.5, 0.75, 1];

  return [
    ...points.map(t => {
      const eased = t * t * (3 - 2 * t);
      const sample = scaleSimulation(base, eased);

      return {
        t,
        totalCurrent: sample.totalCurrent,
        trackedVoltage: trackedVoltageFor(sample),
        trackedCurrent: sample.totalCurrent,
      };
    }),
  ];
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
