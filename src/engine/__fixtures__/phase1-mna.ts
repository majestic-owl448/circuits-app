import type { CircuitComponent, CircuitNode } from '../../types/circuit.ts';

export interface MnaFixture {
  id: string;
  description: string;
  nodes: CircuitNode[];
  components: CircuitComponent[];
  expected: {
    isComplete: boolean;
    isShortCircuit: boolean;
    totalResistance: number;
    totalCurrent: number;
    componentExpectations?: Array<{
      componentId: string;
      voltage?: number;
      current?: number;
      power?: number;
      isFailed?: boolean;
    }>;
  };
}

function cloneNodes(nodes: ReadonlyArray<CircuitNode>): CircuitNode[] {
  return nodes.map(node => ({ ...node, position: { ...node.position } }));
}

function cloneComponents(components: ReadonlyArray<CircuitComponent>): CircuitComponent[] {
  return components.map(component => ({
    ...component,
    properties: { ...component.properties },
    position: { ...component.position },
  }));
}

const MIXED_NODES: CircuitNode[] = [
  { id: 'n0', position: { x: 120, y: 220 } },
  { id: 'n1', position: { x: 260, y: 220 } },
  { id: 'n2', position: { x: 420, y: 140 } },
  { id: 'n3', position: { x: 420, y: 300 } },
  { id: 'n4', position: { x: 560, y: 220 } },
  { id: 'n5', position: { x: 120, y: 360 } },
];

const MIXED_SERIES_PARALLEL: CircuitComponent[] = [
  { id: 'battery-1', type: 'battery', nodeA: 'n0', nodeB: 'n5', properties: { voltage: 12 }, name: 'Battery', position: { x: 80, y: 290 }, rotation: 0 },
  { id: 'switch-series', type: 'switch', nodeA: 'n0', nodeB: 'n1', properties: { isClosed: true }, name: 'Switch', position: { x: 190, y: 220 }, rotation: 0 },
  { id: 'resistor-series', type: 'resistor', nodeA: 'n1', nodeB: 'n4', properties: { resistance: 30 }, name: 'R1', position: { x: 420, y: 220 }, rotation: 0 },
  { id: 'resistor-branch-a', type: 'resistor', nodeA: 'n4', nodeB: 'n2', properties: { resistance: 60 }, name: 'R2', position: { x: 500, y: 160 }, rotation: 0 },
  { id: 'resistor-branch-b', type: 'resistor', nodeA: 'n4', nodeB: 'n3', properties: { resistance: 60 }, name: 'R3', position: { x: 500, y: 280 }, rotation: 0 },
  { id: 'wire-2', type: 'wire', nodeA: 'n2', nodeB: 'n5', properties: {}, name: 'Wire 2', position: { x: 270, y: 250 }, rotation: 0 },
  { id: 'wire-3', type: 'wire', nodeA: 'n3', nodeB: 'n5', properties: {}, name: 'Wire 3', position: { x: 270, y: 320 }, rotation: 0 },
];

const MIXED_SERIES_PARALLEL_OPEN: CircuitComponent[] = MIXED_SERIES_PARALLEL.map(component =>
  component.id === 'switch-series'
    ? {
        ...component,
        properties: {
          ...component.properties,
          isClosed: false,
        },
      }
    : {
        ...component,
        properties: { ...component.properties },
      },
);

const PARALLEL_NODES: CircuitNode[] = [
  { id: 'p0', position: { x: 120, y: 220 } },
  { id: 'p1', position: { x: 260, y: 220 } },
  { id: 'p2', position: { x: 420, y: 140 } },
  { id: 'p3', position: { x: 420, y: 300 } },
  { id: 'p4', position: { x: 120, y: 360 } },
];

const PARALLEL_MULTI_BRANCH: CircuitComponent[] = [
  { id: 'battery-parallel', type: 'battery', nodeA: 'p0', nodeB: 'p4', properties: { voltage: 12 }, name: 'Battery', position: { x: 80, y: 290 }, rotation: 0 },
  { id: 'switch-entry', type: 'switch', nodeA: 'p0', nodeB: 'p1', properties: { isClosed: true }, name: 'Switch', position: { x: 190, y: 220 }, rotation: 0 },
  { id: 'r-top', type: 'resistor', nodeA: 'p1', nodeB: 'p2', properties: { resistance: 60 }, name: 'Rtop', position: { x: 360, y: 150 }, rotation: 0 },
  { id: 'r-bottom', type: 'resistor', nodeA: 'p1', nodeB: 'p3', properties: { resistance: 30 }, name: 'Rbottom', position: { x: 360, y: 280 }, rotation: 0 },
  { id: 'wire-top-return', type: 'wire', nodeA: 'p2', nodeB: 'p4', properties: {}, name: 'Wire top', position: { x: 250, y: 250 }, rotation: 0 },
  { id: 'wire-bottom-return', type: 'wire', nodeA: 'p3', nodeB: 'p4', properties: {}, name: 'Wire bottom', position: { x: 250, y: 320 }, rotation: 0 },
];

const NON_IDEAL_NODES: CircuitNode[] = [
  { id: 'ni0', position: { x: 100, y: 100 } },
  { id: 'ni1', position: { x: 300, y: 100 } },
];

const INTERNAL_RESISTANCE_CIRCUIT: CircuitComponent[] = [
  { id: 'battery-ni', type: 'battery', nodeA: 'ni0', nodeB: 'ni1', properties: { voltage: 10, internalResistance: 10 }, name: 'Real Battery', position: { x: 100, y: 100 }, rotation: 0 },
  { id: 'resistor-ni', type: 'resistor', nodeA: 'ni0', nodeB: 'ni1', properties: { resistance: 10 }, name: 'Load', position: { x: 300, y: 100 }, rotation: 0 },
];

// Current should be 10V / (10 + 10) = 0.5A
// Terminal voltage should be 10V - 0.5A * 10 = 5V

const WIRE_RESISTANCE_CIRCUIT: CircuitComponent[] = [
  { id: 'battery-wire', type: 'battery', nodeA: 'ni0', nodeB: 'ni1', properties: { voltage: 12 }, name: 'Battery', position: { x: 100, y: 100 }, rotation: 0 },
  { id: 'wire-res', type: 'wire', nodeA: 'ni0', nodeB: 'ni1', properties: { wireResistance: 2 }, name: 'Lossy Wire', position: { x: 300, y: 100 }, rotation: 0 },
  { id: 'load-wire', type: 'resistor', nodeA: 'ni0', nodeB: 'ni1', properties: { resistance: 4 }, name: 'Load', position: { x: 300, y: 100 }, rotation: 0 },
];
// Parallel: Wire (2 ohm) and Load (4 ohm)
// Req = (2 * 4) / (2 + 4) = 8 / 6 = 1.333 ohm
// Total Current = 12 / 1.333 = 9 A
// Current in wire = 12 / 2 = 6 A
// Current in load = 12 / 4 = 3 A

const BURNOUT_CIRCUIT: CircuitComponent[] = [
  { id: 'battery-burn', type: 'battery', nodeA: 'ni0', nodeB: 'ni1', properties: { voltage: 12 }, name: 'Battery', position: { x: 100, y: 100 }, rotation: 0 },
  { id: 'resistor-burn', type: 'resistor', nodeA: 'ni0', nodeB: 'ni1', properties: { resistance: 4, operatingLimit: { type: 'current', max: 2 } }, name: 'Overloaded Resistor', position: { x: 300, y: 100 }, rotation: 0 },
];
// Current = 12 / 4 = 3 A. Limit is 2 A. Should fail.

export const phaseOneMnaFixtures: MnaFixture[] = [
  {
    id: 'mna-burnout',
    description: '12V source with 4 ohm resistor (2A limit). Current is 3A, so it should fail.',
    nodes: cloneNodes(NON_IDEAL_NODES),
    components: cloneComponents(BURNOUT_CIRCUIT),
    expected: {
      isComplete: true,
      isShortCircuit: false,
      totalResistance: 4,
      totalCurrent: 3,
      componentExpectations: [
        { componentId: 'resistor-burn', voltage: 12, current: 3, power: 36, isFailed: true },
      ],
    },
  },
  {
    id: 'mna-internal-resistance',
    description: '10V source with 10 ohm internal resistance and 10 ohm load',
    nodes: cloneNodes(NON_IDEAL_NODES),
    components: cloneComponents(INTERNAL_RESISTANCE_CIRCUIT),
    expected: {
      isComplete: true,
      isShortCircuit: false,
      totalResistance: 20,
      totalCurrent: 0.5,
      componentExpectations: [
        { componentId: 'battery-ni', voltage: 5, current: 0.5, power: 2.5 },
        { componentId: 'resistor-ni', voltage: 5, current: 0.5, power: 2.5 },
      ],
    },
  },
  {
    id: 'mna-wire-resistance',
    description: '12V source with parallel wire resistance (2 ohm) and load (4 ohm)',
    nodes: cloneNodes(NON_IDEAL_NODES),
    components: cloneComponents(WIRE_RESISTANCE_CIRCUIT),
    expected: {
      isComplete: true,
      isShortCircuit: false,
      totalResistance: 1.3333,
      totalCurrent: 9,
      componentExpectations: [
        { componentId: 'wire-res', voltage: 12, current: 6, power: 72 },
        { componentId: 'load-wire', voltage: 12, current: 3, power: 36 },
      ],
    },
  },
  {
    id: 'mna-mixed-series-parallel',
    description: '12V source with series resistor plus two equal parallel branches',
    nodes: cloneNodes(MIXED_NODES),
    components: cloneComponents(MIXED_SERIES_PARALLEL),
    expected: {
      isComplete: true,
      isShortCircuit: false,
      totalResistance: 60,
      totalCurrent: 0.2,
      componentExpectations: [
        { componentId: 'resistor-series', voltage: 6, current: 0.2, power: 1.2 },
        { componentId: 'resistor-branch-a', voltage: 6, current: 0.1, power: 0.6 },
        { componentId: 'resistor-branch-b', voltage: 6, current: 0.1, power: 0.6 },
      ],
    },
  },
  {
    id: 'mna-parallel-multi-branch',
    description: 'Parallel multi-branch network validates branch current split',
    nodes: cloneNodes(PARALLEL_NODES),
    components: cloneComponents(PARALLEL_MULTI_BRANCH),
    expected: {
      isComplete: true,
      isShortCircuit: false,
      totalResistance: 20,
      totalCurrent: 0.6,
      componentExpectations: [
        { componentId: 'r-top', voltage: 12, current: 0.2, power: 2.4 },
        { componentId: 'r-bottom', voltage: 12, current: 0.4, power: 4.8 },
      ],
    },
  },
  {
    id: 'mna-open-switch-no-closure',
    description: 'Open return switch leaves source without complete path',
    nodes: cloneNodes(MIXED_NODES),
    components: cloneComponents(MIXED_SERIES_PARALLEL_OPEN),
    expected: {
      isComplete: false,
      isShortCircuit: false,
      totalResistance: 0,
      totalCurrent: 0,
    },
  },
];
