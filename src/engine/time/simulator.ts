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

export function createInitialTimeState(base: SimulationResult): TimeSimulationState {
  const checkpoints = createCheckpointSnapshots(base);
  const timeline = createTimelinePoints(base);

  return {
    sliderValue: 0,
    snapshots: [
      { checkpoint: 't0', simulation: base },
      { checkpoint: 't_mid', simulation: base },
      { checkpoint: 't_final', simulation: base },
    ],
    checkpoints,
    timeline,
    isPlaying: false,
    speed: 'normal',
  };
}

export function createCheckpointSnapshots(base: SimulationResult): TimeDomainSnapshot[] {
  return [
    { checkpoint: 't0', label: 'Early', simulation: base },
    { checkpoint: 't_mid', label: 'Middle', simulation: base },
    { checkpoint: 't_final', label: 'Late', simulation: base },
  ];
}

export function createTimelinePoints(base: SimulationResult): TimePointResult[] {
  return [
    { t: 0, totalCurrent: base.totalCurrent, trackedVoltage: base.totalResistance > 0 ? base.totalCurrent * base.totalResistance : 0, trackedCurrent: base.totalCurrent },
    { t: 0.5, totalCurrent: base.totalCurrent, trackedVoltage: base.totalResistance > 0 ? base.totalCurrent * base.totalResistance : 0, trackedCurrent: base.totalCurrent },
    { t: 1, totalCurrent: base.totalCurrent, trackedVoltage: base.totalResistance > 0 ? base.totalCurrent * base.totalResistance : 0, trackedCurrent: base.totalCurrent },
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
