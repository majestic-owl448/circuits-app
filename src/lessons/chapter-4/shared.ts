import type { CircuitComponent } from '../../types/circuit.ts';

export const CH4_MIXED_NODES = [
  { id: 'n1', position: { x: 120, y: 120 } },
  { id: 'n2', position: { x: 300, y: 120 } },
  { id: 'n3', position: { x: 470, y: 120 } },
  { id: 'n4', position: { x: 470, y: 290 } },
  { id: 'n5', position: { x: 300, y: 290 } },
  { id: 'n6', position: { x: 300, y: 420 } },
  { id: 'n7', position: { x: 120, y: 420 } },
];

export const CH4_MIXED_CIRCUIT: CircuitComponent[] = [
  { id: 'battery-1', type: 'battery', nodeA: 'n1', nodeB: 'n7', properties: { voltage: 12 }, name: 'Battery', position: { x: 70, y: 270 }, rotation: 0 },
  { id: 'wire-top', type: 'wire', nodeA: 'n1', nodeB: 'n2', properties: {}, name: 'Wire', position: { x: 210, y: 120 }, rotation: 0 },
  { id: 'resistor-series', type: 'resistor', nodeA: 'n2', nodeB: 'n3', properties: { resistance: 30 }, name: 'Series Resistor', position: { x: 385, y: 120 }, rotation: 0 },
  { id: 'bulb-branch-a', type: 'bulb', nodeA: 'n3', nodeB: 'n5', properties: { resistance: 30 }, name: 'Bulb A', position: { x: 385, y: 205 }, rotation: 0 },
  { id: 'resistor-branch-b', type: 'resistor', nodeA: 'n3', nodeB: 'n4', properties: { resistance: 60 }, name: 'Branch Resistor', position: { x: 470, y: 205 }, rotation: 0 },
  { id: 'wire-branch-b', type: 'wire', nodeA: 'n4', nodeB: 'n5', properties: {}, name: 'Wire', position: { x: 385, y: 290 }, rotation: 0 },
  { id: 'switch-1', type: 'switch', nodeA: 'n7', nodeB: 'n6', properties: { isClosed: true }, name: 'Switch', position: { x: 210, y: 420 }, rotation: 0 },
  { id: 'wire-bottom', type: 'wire', nodeA: 'n6', nodeB: 'n5', properties: {}, name: 'Wire', position: { x: 300, y: 355 }, rotation: 0 },
];

export const CH4_SOURCE_LOAD_CIRCUIT: CircuitComponent[] = [
  { id: 'battery-1', type: 'battery', nodeA: 'n1', nodeB: 'n7', properties: { voltage: 9 }, name: 'Battery', position: { x: 70, y: 270 }, rotation: 0 },
  { id: 'wire-top', type: 'wire', nodeA: 'n1', nodeB: 'n2', properties: {}, name: 'Wire', position: { x: 210, y: 120 }, rotation: 0 },
  { id: 'resistor-limit', type: 'resistor', nodeA: 'n2', nodeB: 'n3', properties: { resistance: 18 }, name: 'Limiter', position: { x: 385, y: 120 }, rotation: 0 },
  { id: 'bulb-target', type: 'bulb', nodeA: 'n3', nodeB: 'n5', properties: { resistance: 45 }, name: 'Target Bulb', position: { x: 385, y: 205 }, rotation: 0 },
  { id: 'switch-1', type: 'switch', nodeA: 'n7', nodeB: 'n6', properties: { isClosed: true }, name: 'Switch', position: { x: 210, y: 420 }, rotation: 0 },
  { id: 'wire-bottom-a', type: 'wire', nodeA: 'n6', nodeB: 'n5', properties: {}, name: 'Wire', position: { x: 300, y: 355 }, rotation: 0 },
  { id: 'wire-bottom-b', type: 'wire', nodeA: 'n5', nodeB: 'n7', properties: {}, name: 'Wire', position: { x: 210, y: 355 }, rotation: 0 },
];
