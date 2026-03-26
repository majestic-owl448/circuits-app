import type { CircuitComponent } from '../types/circuit.ts';

export const STANDARD_NODES = [
  { id: 'n1', position: { x: 200, y: 100 } },
  { id: 'n2', position: { x: 400, y: 100 } },
  { id: 'n3', position: { x: 400, y: 300 } },
  { id: 'n4', position: { x: 200, y: 300 } },
];

export const STANDARD_CIRCUIT: CircuitComponent[] = [
  { id: 'battery-1', type: 'battery', nodeA: 'n1', nodeB: 'n4', properties: { voltage: 9 }, name: 'Battery', position: { x: 100, y: 200 }, rotation: 0 },
  { id: 'wire-1', type: 'wire', nodeA: 'n1', nodeB: 'n2', properties: {}, name: 'Wire', position: { x: 300, y: 100 }, rotation: 0 },
  { id: 'bulb-1', type: 'bulb', nodeA: 'n2', nodeB: 'n3', properties: { resistance: 45 }, name: 'Bulb', position: { x: 500, y: 200 }, rotation: 0 },
  { id: 'switch-1', type: 'switch', nodeA: 'n4', nodeB: 'n3', properties: { isClosed: false }, name: 'Switch', position: { x: 300, y: 400 }, rotation: 0 },
];
