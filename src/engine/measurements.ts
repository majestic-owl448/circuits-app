import type { CircuitComponent, CircuitNode, SimulationResult } from '../types/circuit.ts';

export interface MeasurementResult {
  value: number | null;
  unit: 'V' | 'A' | 'ohm';
  valid: boolean;
  message: string;
}

export function measureVoltage(
  nodeAId: string,
  nodeBId: string,
  simulation: SimulationResult,
): MeasurementResult {
  const voltages = simulation.nodeVoltages;
  if (!voltages) {
    return {
      value: null,
      unit: 'V',
      valid: false,
      message: 'Voltage data is unavailable for the current solver result.',
    };
  }

  const a = voltages.get(nodeAId);
  const b = voltages.get(nodeBId);
  if (a === undefined || b === undefined) {
    return {
      value: null,
      unit: 'V',
      valid: false,
      message: 'Select two valid nodes to read voltage.',
    };
  }

  return {
    value: Math.abs(a - b),
    unit: 'V',
    valid: true,
    message: 'Voltage measured successfully.',
  };
}

export function measureCurrent(
  componentId: string,
  simulation: SimulationResult,
): MeasurementResult {
  const currents = simulation.branchCurrents;
  if (!currents) {
    return {
      value: null,
      unit: 'A',
      valid: false,
      message: 'Branch-current data is unavailable for the current solver result.',
    };
  }

  const value = currents.get(componentId);
  if (value === undefined) {
    return {
      value: null,
      unit: 'A',
      valid: false,
      message: 'Select a valid branch component to read current.',
    };
  }

  return {
    value,
    unit: 'A',
    valid: true,
    message: 'Current measured successfully.',
  };
}

function hasActiveSource(components: CircuitComponent[]): boolean {
  return components.some(component => component.type === 'battery' && (component.properties.voltage ?? 0) > 0);
}

function connectedToActiveSource(
  componentId: string,
  components: CircuitComponent[],
): boolean {
  const target = components.find(component => component.id === componentId);
  if (!target) return false;

  const adjacency = new Map<string, string[]>();
  for (const component of components) {
    const listA = adjacency.get(component.nodeA) ?? [];
    listA.push(component.nodeB);
    adjacency.set(component.nodeA, listA);

    const listB = adjacency.get(component.nodeB) ?? [];
    listB.push(component.nodeA);
    adjacency.set(component.nodeB, listB);
  }

  const startNodes = [target.nodeA, target.nodeB];
  const queue = [...startNodes];
  const visited = new Set(startNodes);

  while (queue.length > 0) {
    const nodeId = queue.shift()!;
    const neighbors = adjacency.get(nodeId) ?? [];
    for (const neighbor of neighbors) {
      if (visited.has(neighbor)) continue;
      visited.add(neighbor);
      queue.push(neighbor);
    }
  }

  return components.some(component =>
    component.type === 'battery'
    && (component.properties.voltage ?? 0) > 0
    && (visited.has(component.nodeA) || visited.has(component.nodeB)),
  );
}

export function measureResistance(
  componentId: string,
  components: CircuitComponent[],
  simulation: SimulationResult,
): MeasurementResult {
  if (hasActiveSource(components) && connectedToActiveSource(componentId, components) && simulation.isComplete) {
    return {
      value: null,
      unit: 'ohm',
      valid: false,
      message: 'Ohmmeter requires a de-energized circuit. Remove or disable active sources first.',
    };
  }

  const component = components.find(item => item.id === componentId);
  if (!component) {
    return {
      value: null,
      unit: 'ohm',
      valid: false,
      message: 'Select a valid component to measure resistance.',
    };
  }

  const resistance = component.properties.resistance;
  if (resistance === undefined) {
    return {
      value: null,
      unit: 'ohm',
      valid: false,
      message: 'Selected component does not expose a resistance value.',
    };
  }

  return {
    value: resistance,
    unit: 'ohm',
    valid: true,
    message: 'Resistance measured successfully.',
  };
}

export function estimateNodePair(nodes: CircuitNode[]): { nodeAId: string; nodeBId: string } | null {
  if (nodes.length < 2) return null;
  return { nodeAId: nodes[0].id, nodeBId: nodes[1].id };
}
