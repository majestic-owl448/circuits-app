export type ComponentType = 'battery' | 'resistor' | 'switch' | 'wire' | 'bulb';

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
  /** Ordered node IDs forming the current loop (first node repeated at end). */
  loopNodes: string[];
}

export interface ComponentResult {
  componentId: string;
  voltage: number;
  current: number;
  power: number;
}
