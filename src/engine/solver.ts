import type { CircuitComponent, CircuitNode, SimulationResult, ComponentResult } from '../types/circuit.ts';
import { buildGraph, findLoops } from './circuit-graph.ts';

export function solve(
  nodes: CircuitNode[],
  components: CircuitComponent[],
): SimulationResult {
  const emptyResult: SimulationResult = {
    isComplete: false,
    isShortCircuit: false,
    totalResistance: 0,
    totalCurrent: 0,
    componentResults: new Map(),
  };

  if (components.length === 0) return emptyResult;

  const graph = buildGraph(nodes, components);
  const loops = findLoops(graph);

  if (loops.length === 0) {
    return emptyResult;
  }

  // Use the first valid loop found
  const loop = loops[0];
  const loopComponents = loop.map(id => graph.components.get(id)!);

  // Calculate total voltage from sources
  let totalVoltage = 0;
  for (const comp of loopComponents) {
    if (comp.type === 'battery') {
      totalVoltage += comp.properties.voltage ?? 0;
    }
  }

  // Calculate total resistance from loads
  let totalResistance = 0;
  for (const comp of loopComponents) {
    if (comp.type === 'bulb' || comp.type === 'resistor') {
      totalResistance += comp.properties.resistance ?? 0;
    }
  }

  // Short circuit detection: voltage source with no resistance
  if (totalResistance === 0 && totalVoltage > 0) {
    return {
      isComplete: true,
      isShortCircuit: true,
      totalResistance: 0,
      totalCurrent: Infinity,
      componentResults: new Map(),
    };
  }

  if (totalVoltage === 0) {
    return emptyResult;
  }

  // I = V / R
  const totalCurrent = totalVoltage / totalResistance;

  // Calculate per-component results
  const componentResults = new Map<string, ComponentResult>();
  for (const comp of loopComponents) {
    const resistance = (comp.type === 'bulb' || comp.type === 'resistor')
      ? (comp.properties.resistance ?? 0)
      : 0;
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
  };
}
