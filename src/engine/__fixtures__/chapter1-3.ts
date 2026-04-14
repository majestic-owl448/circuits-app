import type { CircuitComponent, CircuitNode, SimulationResult } from '../../types/circuit.ts';
import { PARALLEL_NODES, PARALLEL_TWO_BULBS, SERIES_NODES, SERIES_TWO_BULBS, STANDARD_CIRCUIT, STANDARD_NODES } from '../../lessons/shared.ts';

export interface EngineFixture {
  id: string;
  description: string;
  nodes: CircuitNode[];
  components: CircuitComponent[];
  expected: {
    isComplete: boolean;
    isShortCircuit: boolean;
    totalResistance: number;
    totalCurrent: number;
    loopNodesMinLength?: number;
    componentExpectations?: Array<{
      componentId: string;
      voltage?: number;
      current?: number;
      power?: number;
    }>;
  };
}

function cloneNodes(nodes: ReadonlyArray<CircuitNode>): CircuitNode[] {
  return nodes.map(node => ({
    ...node,
    position: { ...node.position },
  }));
}

function cloneComponents(components: ReadonlyArray<CircuitComponent>): CircuitComponent[] {
  return components.map(component => ({
    ...component,
    properties: { ...component.properties },
    position: { ...component.position },
  }));
}

function withSwitchState(
  components: ReadonlyArray<CircuitComponent>,
  isClosed: boolean,
): CircuitComponent[] {
  return cloneComponents(components).map(component =>
    component.type === 'switch'
      ? {
          ...component,
          properties: {
            ...component.properties,
            isClosed,
          },
        }
      : component,
  );
}

function withComponentResistance(
  components: ReadonlyArray<CircuitComponent>,
  componentId: string,
  resistance: number,
): CircuitComponent[] {
  return cloneComponents(components).map(component =>
    component.id === componentId
      ? {
          ...component,
          properties: {
            ...component.properties,
            resistance,
          },
        }
      : component,
  );
}

export const chapterOneToThreeFixtures: EngineFixture[] = [
  {
    id: 'ch1-standard-open-switch',
    description: 'Standard starter circuit with open switch stays incomplete',
    nodes: cloneNodes(STANDARD_NODES),
    components: cloneComponents(STANDARD_CIRCUIT),
    expected: {
      isComplete: false,
      isShortCircuit: false,
      totalResistance: 0,
      totalCurrent: 0,
      loopNodesMinLength: 0,
    },
  },
  {
    id: 'ch1-standard-closed-switch',
    description: 'Standard starter circuit with closed switch produces expected single-load values',
    nodes: cloneNodes(STANDARD_NODES),
    components: withSwitchState(STANDARD_CIRCUIT, true),
    expected: {
      isComplete: true,
      isShortCircuit: false,
      totalResistance: 45,
      totalCurrent: 0.2,
      loopNodesMinLength: 4,
      componentExpectations: [
        { componentId: 'bulb-1', voltage: 9, current: 0.2, power: 1.8 },
      ],
    },
  },
  {
    id: 'ch2-series-two-bulbs-closed-switch',
    description: 'Two equal bulbs in series split voltage and share current',
    nodes: cloneNodes(SERIES_NODES),
    components: withSwitchState(SERIES_TWO_BULBS, true),
    expected: {
      isComplete: true,
      isShortCircuit: false,
      totalResistance: 90,
      totalCurrent: 0.1,
      loopNodesMinLength: 6,
      componentExpectations: [
        { componentId: 'bulb-1', voltage: 4.5, current: 0.1, power: 0.45 },
        { componentId: 'bulb-2', voltage: 4.5, current: 0.1, power: 0.45 },
      ],
    },
  },
  {
    id: 'ch3-parallel-two-bulbs-closed-switch-current-model',
    description: 'Current loop model picks one branch and matches current engine behavior baseline',
    nodes: cloneNodes(PARALLEL_NODES),
    components: withSwitchState(PARALLEL_TWO_BULBS, true),
    expected: {
      isComplete: true,
      isShortCircuit: false,
      totalResistance: 45,
      totalCurrent: 0.2,
      loopNodesMinLength: 4,
    },
  },
  {
    id: 'ch3-short-circuit-detection',
    description: 'Battery with only wires and closed switch is detected as short circuit',
    nodes: cloneNodes(STANDARD_NODES),
    components: withComponentResistance(withSwitchState(STANDARD_CIRCUIT, true), 'bulb-1', 0),
    expected: {
      isComplete: true,
      isShortCircuit: true,
      totalResistance: 0,
      totalCurrent: Number.POSITIVE_INFINITY,
      loopNodesMinLength: 4,
    },
  },
];

export function summarizeSimulation(result: SimulationResult): string {
  return `isComplete=${result.isComplete} isShortCircuit=${result.isShortCircuit} totalResistance=${result.totalResistance} totalCurrent=${result.totalCurrent}`;
}
