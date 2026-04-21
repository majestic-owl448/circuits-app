export type ComponentType = 'battery' | 'resistor' | 'switch' | 'wire' | 'bulb' | 'capacitor' | 'inductor' | 'ac-source' | 'dc-ac-converter' | 'ac-dc-converter' | 'diode' | 'transistor' | 'not-gate' | 'and-gate' | 'or-gate' | 'nand-gate' | 'nor-gate' | 'xor-gate';

export interface OperatingLimit {
  type: 'current' | 'voltage' | 'power';
  max: number;
}

export interface Position {
  x: number;
  y: number;
}

export interface CircuitNode {
  id: string;
  position: Position;
}

export interface ComponentProperties {
  voltage?: number;
  resistance?: number;
  isClosed?: boolean;
  internalResistance?: number;
  wireResistance?: number;
  operatingLimit?: OperatingLimit;
  isFailed?: boolean;
  tolerance?: number;
  capacitance?: number;
  inductance?: number;
  amplitude?: number;
  frequency?: number;
  isForwardBiased?: boolean;
  controlEnabled?: boolean;
  inputA?: boolean;
  inputB?: boolean;
}

export interface CircuitComponent {
  id: string;
  type: ComponentType;
  nodeA: string;
  nodeB: string;
  properties: ComponentProperties;
  name: string;
  position: Position;
  rotation: number;
}

export interface SimulationResult {
  isComplete: boolean;
  isShortCircuit: boolean;
  totalResistance: number;
  totalCurrent: number;
  componentResults: Map<string, ComponentResult>;
  /** Optional solved node potentials keyed by node ID. */
  nodeVoltages?: Map<string, number>;
  /** Optional solved branch currents keyed by component ID. */
  branchCurrents?: Map<string, number>;
  /** Optional non-fatal solver diagnostics. */
  diagnostics?: string[];
  /** Ordered node IDs forming the current loop (first node repeated at end). */
  loopNodes: string[];
  /** Optional updated components (e.g. with failure states). */
  updatedComponents?: CircuitComponent[];
}

export interface ComponentResult {
  componentId: string;
  voltage: number;
  current: number;
  power: number;
}

export interface TimePointResult {
  t: number;
  totalCurrent: number;
  trackedVoltage?: number;
  trackedCurrent?: number;
}

export interface TimeDomainSnapshot {
  checkpoint: 't0' | 't_mid' | 't_final';
  label: 'Early' | 'Middle' | 'Late';
  simulation: SimulationResult;
}
