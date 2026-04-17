import type { CircuitComponent, CircuitNode, SimulationResult, ComponentResult } from '../types/circuit.ts';
import { buildGraph, findLoops } from './circuit-graph.ts';

export function solveLegacy(
  nodes: CircuitNode[],
  components: CircuitComponent[],
): SimulationResult {
  const emptyResult: SimulationResult = {
    isComplete: false,
    isShortCircuit: false,
    totalResistance: 0,
    totalCurrent: 0,
    componentResults: new Map(),
    diagnostics: ['legacy-backend'],
    loopNodes: [],
  };

  if (components.length === 0) return emptyResult;

  const graph = buildGraph(nodes, components);
  const loops = findLoops(graph);

  if (loops.length === 0) {
    return emptyResult;
  }

  const loop = loops[0];
  const loopComponents = loop.componentIds.map(id => graph.components.get(id)!);

  let totalVoltage = 0;
  for (const comp of loopComponents) {
    if (comp.type === 'battery') {
      totalVoltage += comp.properties.voltage ?? 0;
    }
  }

  let totalResistance = 0;
  for (const comp of loopComponents) {
    if (comp.type === 'bulb' || comp.type === 'resistor') {
      totalResistance += comp.properties.resistance ?? 0;
    } else if (comp.type === 'battery') {
      totalResistance += comp.properties.internalResistance ?? 0;
    } else if (comp.type === 'wire') {
      totalResistance += comp.properties.wireResistance ?? 0;
    }
  }

  if (totalResistance === 0 && totalVoltage > 0) {
    return {
      isComplete: true,
      isShortCircuit: true,
      totalResistance: 0,
      totalCurrent: Infinity,
      componentResults: new Map(),
      diagnostics: ['legacy-backend', 'short-circuit'],
      loopNodes: loop.nodeIds,
    };
  }

  if (totalVoltage === 0) {
    return emptyResult;
  }

  const totalCurrent = totalVoltage / totalResistance;

  const componentResults = new Map<string, ComponentResult>();
  for (const comp of loopComponents) {
    let resistance = 0;
    if (comp.type === 'bulb' || comp.type === 'resistor') {
      resistance = comp.properties.resistance ?? 0;
    } else if (comp.type === 'battery') {
      resistance = comp.properties.internalResistance ?? 0;
    } else if (comp.type === 'wire') {
      resistance = comp.properties.wireResistance ?? 0;
    }
    const voltage = totalCurrent * resistance;
    const power = voltage * totalCurrent;

    componentResults.set(comp.id, {
      componentId: comp.id,
      voltage,
      current: totalCurrent,
      power,
    });
  }

  return {
    isComplete: true,
    isShortCircuit: false,
    totalResistance,
    totalCurrent,
    componentResults,
    diagnostics: ['legacy-backend'],
    loopNodes: loop.nodeIds,
  };
}
