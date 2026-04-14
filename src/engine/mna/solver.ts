import type { CircuitComponent, CircuitNode, SimulationResult } from '../../types/circuit.ts';
import { createZeroMatrix, solveLinearSystem } from './matrix.ts';
import { buildMnaTopology } from './topology.ts';
import { buildBranchCurrents, buildComponentResults } from './postprocess.ts';

const IDEAL_LINK_RESISTANCE = 1e-6;

function isResistive(component: CircuitComponent): boolean {
  if (component.type === 'wire') return true;
  if (component.type === 'bulb' || component.type === 'resistor') {
    return (component.properties.resistance ?? 0) > 0;
  }
  return false;
}

function hasClosedPathFromBattery(
  nodes: CircuitNode[],
  components: CircuitComponent[],
): boolean {
  const batteries = components.filter(component => component.type === 'battery');
  if (batteries.length === 0) return false;

  for (const battery of batteries) {
    const adjacency = new Map<string, string[]>();
    for (const node of nodes) {
      adjacency.set(node.id, []);
    }

    for (const component of components) {
      if (component.id === battery.id) continue;
      const listA = adjacency.get(component.nodeA);
      const listB = adjacency.get(component.nodeB);
      if (listA) listA.push(component.nodeB);
      if (listB) listB.push(component.nodeA);
    }

    const start = battery.nodeA;
    const target = battery.nodeB;
    const queue: string[] = [start];
    const seen = new Set<string>([start]);

    while (queue.length > 0) {
      const nodeId = queue.shift()!;
      if (nodeId === target) {
        return true;
      }
      const neighbors = adjacency.get(nodeId) ?? [];
      for (const neighbor of neighbors) {
        if (seen.has(neighbor)) continue;
        seen.add(neighbor);
        queue.push(neighbor);
      }
    }
  }

  return false;
}

export function solveMna(nodes: CircuitNode[], components: CircuitComponent[]): SimulationResult {
  const emptyResult: SimulationResult = {
    isComplete: false,
    isShortCircuit: false,
    totalResistance: 0,
    totalCurrent: 0,
    componentResults: new Map(),
    diagnostics: ['mna-backend', 'empty-or-open-circuit'],
    loopNodes: [],
  };

  if (components.length === 0 || nodes.length === 0) {
    return emptyResult;
  }

  const activeComponents = components.filter(component =>
    component.type !== 'switch' || (component.properties.isClosed ?? false),
  );
  const hasSource = activeComponents.some(component => component.type === 'battery');
  if (!hasSource) return emptyResult;

  if (!hasClosedPathFromBattery(nodes, activeComponents)) {
    return emptyResult;
  }

  const shortCircuit = activeComponents.some(component => {
    if (component.type !== 'battery') return false;

    return !activeComponents.some(other => {
      if (other.id === component.id) return false;
      if (other.type === 'wire') return false;
      if (other.type === 'switch') return false;
      if (other.type === 'bulb' || other.type === 'resistor') {
        return (other.properties.resistance ?? 0) > IDEAL_LINK_RESISTANCE;
      }
      return false;
    });
  });

  if (shortCircuit) {
    return {
      isComplete: true,
      isShortCircuit: true,
      totalResistance: 0,
      totalCurrent: Number.POSITIVE_INFINITY,
      componentResults: new Map(),
      diagnostics: ['mna-backend', 'short-circuit'],
      loopNodes: [],
    };
  }

  const topology = buildMnaTopology(nodes, activeComponents);
  const voltageSources = topology.elements.filter(element => element.type === 'voltage-source');
  const nodeVarCount = topology.nodeIds.length;
  const sourceVarCount = voltageSources.length;
  const systemSize = nodeVarCount + sourceVarCount;

  if (systemSize === 0) {
    return emptyResult;
  }

  const matrix = createZeroMatrix(systemSize, systemSize);
  const rhs = Array(systemSize).fill(0);

  for (const element of topology.elements) {
    if (element.type !== 'resistor') continue;
    if (element.value <= 0) continue;

    const conductance = 1 / element.value;
    const a = topology.nodeIndex.get(element.nodeA);
    const b = topology.nodeIndex.get(element.nodeB);

    if (a !== undefined) matrix[a][a] += conductance;
    if (b !== undefined) matrix[b][b] += conductance;
    if (a !== undefined && b !== undefined) {
      matrix[a][b] -= conductance;
      matrix[b][a] -= conductance;
    }
  }

  voltageSources.forEach((source, sourceIndex) => {
    const row = nodeVarCount + sourceIndex;
    const a = topology.nodeIndex.get(source.nodeA);
    const b = topology.nodeIndex.get(source.nodeB);

    if (a !== undefined) {
      matrix[a][row] += 1;
      matrix[row][a] += 1;
    }
    if (b !== undefined) {
      matrix[b][row] -= 1;
      matrix[row][b] -= 1;
    }

    rhs[row] = source.value;
  });

  let solution: number[];
  try {
    solution = solveLinearSystem(matrix, rhs);
  } catch {
    return emptyResult;
  }

  const nodeVoltages = new Map<string, number>();
  nodeVoltages.set(topology.groundNodeId, 0);
  topology.nodeIds.forEach((nodeId, idx) => {
    nodeVoltages.set(nodeId, solution[idx]);
  });

  const componentResults = buildComponentResults(components, nodeVoltages);
  const branchCurrents = buildBranchCurrents(components, componentResults);
  const sourceCurrents = solution.slice(nodeVarCount);
  const totalCurrent = sourceCurrents.length > 0 ? Math.abs(sourceCurrents.reduce((sum, current) => sum + current, 0)) : 0;
  const totalVoltage = activeComponents
    .filter(component => component.type === 'battery')
    .reduce((sum, component) => sum + (component.properties.voltage ?? 0), 0);
  const totalResistance = totalCurrent > 0 ? totalVoltage / totalCurrent : 0;

  const hasResistivePath = activeComponents.some(isResistive);
  const loopNodes = hasResistivePath
    ? nodes.filter(node => node.id !== topology.groundNodeId).map(node => node.id)
    : [];

  return {
    isComplete: true,
    isShortCircuit: false,
    totalResistance,
    totalCurrent,
    componentResults,
    nodeVoltages,
    branchCurrents,
    diagnostics: ['mna-backend'],
    loopNodes,
  };
}
