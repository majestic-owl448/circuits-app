import type { CircuitComponent } from '../types/circuit.ts';

export const TOLERANCE_DEFAULTS = {
  idealNumericPercent: 0.01,
  nonIdealNumericPercent: 0.05,
};

export const OPERATING_LIMIT_PRESETS = {
  beginnerBulb: { type: 'power', max: 2.5 },
  standardBulb: { type: 'power', max: 5 },
  introResistor: { type: 'power', max: 1 },
} as const;

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

/**
 * Series circuit: battery → wire → bulb-1 → bulb-2 → switch → back to battery.
 * Uses 6 nodes in a hexagonal-ish layout to fit two bulbs in one path.
 */
export const SERIES_NODES = [
  { id: 'n1', position: { x: 150, y: 100 } },
  { id: 'n2', position: { x: 350, y: 100 } },
  { id: 'n3', position: { x: 500, y: 200 } },
  { id: 'n4', position: { x: 500, y: 350 } },
  { id: 'n5', position: { x: 350, y: 450 } },
  { id: 'n6', position: { x: 150, y: 350 } },
];

export const SERIES_TWO_BULBS: CircuitComponent[] = [
  { id: 'battery-1', type: 'battery', nodeA: 'n1', nodeB: 'n6', properties: { voltage: 9 }, name: 'Battery', position: { x: 80, y: 225 }, rotation: 0 },
  { id: 'wire-1', type: 'wire', nodeA: 'n1', nodeB: 'n2', properties: {}, name: 'Wire', position: { x: 250, y: 100 }, rotation: 0 },
  { id: 'bulb-1', type: 'bulb', nodeA: 'n2', nodeB: 'n3', properties: { resistance: 45 }, name: 'Bulb 1', position: { x: 440, y: 150 }, rotation: 0 },
  { id: 'bulb-2', type: 'bulb', nodeA: 'n3', nodeB: 'n4', properties: { resistance: 45 }, name: 'Bulb 2', position: { x: 540, y: 275 }, rotation: 0 },
  { id: 'wire-2', type: 'wire', nodeA: 'n4', nodeB: 'n5', properties: {}, name: 'Wire', position: { x: 425, y: 400 }, rotation: 0 },
  { id: 'switch-1', type: 'switch', nodeA: 'n6', nodeB: 'n5', properties: { isClosed: false }, name: 'Switch', position: { x: 250, y: 400 }, rotation: 0 },
];

/**
 * Parallel circuit: battery → junction → two branches (bulb each) → junction → switch → battery.
 * Uses 6 nodes: 2 junctions where branches split/rejoin, plus source and switch nodes.
 */
export const PARALLEL_NODES = [
  { id: 'n1', position: { x: 100, y: 100 } },
  { id: 'n2', position: { x: 300, y: 100 } },
  { id: 'n3', position: { x: 500, y: 100 } },
  { id: 'n4', position: { x: 500, y: 400 } },
  { id: 'n5', position: { x: 300, y: 400 } },
  { id: 'n6', position: { x: 100, y: 400 } },
];

export const PARALLEL_TWO_BULBS: CircuitComponent[] = [
  { id: 'battery-1', type: 'battery', nodeA: 'n1', nodeB: 'n6', properties: { voltage: 9 }, name: 'Battery', position: { x: 50, y: 250 }, rotation: 0 },
  { id: 'wire-1', type: 'wire', nodeA: 'n1', nodeB: 'n2', properties: {}, name: 'Wire', position: { x: 200, y: 100 }, rotation: 0 },
  { id: 'bulb-1', type: 'bulb', nodeA: 'n2', nodeB: 'n5', properties: { resistance: 45 }, name: 'Bulb 1', position: { x: 250, y: 250 }, rotation: 0 },
  { id: 'bulb-2', type: 'bulb', nodeA: 'n3', nodeB: 'n4', properties: { resistance: 45 }, name: 'Bulb 2', position: { x: 450, y: 250 }, rotation: 0 },
  { id: 'wire-2', type: 'wire', nodeA: 'n2', nodeB: 'n3', properties: {}, name: 'Wire', position: { x: 400, y: 100 }, rotation: 0 },
  { id: 'wire-3', type: 'wire', nodeA: 'n5', nodeB: 'n4', properties: {}, name: 'Wire', position: { x: 400, y: 400 }, rotation: 0 },
  { id: 'switch-1', type: 'switch', nodeA: 'n6', nodeB: 'n5', properties: { isClosed: false }, name: 'Switch', position: { x: 200, y: 400 }, rotation: 0 },
];
