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

  // Capacitors: open circuits in DC steady state — remove.
  // Reverse-biased diodes: open circuits — remove.
  // Disabled transistors: open circuits (like open switch) — remove.
  // Logic gates: not circuit elements — remove from analog solver.
  // Everything else remains; ac-source provides amplitude as voltage.
  const dcComponents = components.filter(c => {
    if (c.type === 'capacitor') return false;
    if (c.type === 'diode' && !(c.properties.isForwardBiased ?? true)) return false;
    if (c.type === 'transistor' && !(c.properties.controlEnabled ?? true)) return false;
    if (['not-gate', 'and-gate', 'or-gate', 'nand-gate', 'nor-gate', 'xor-gate'].includes(c.type)) return false;
    return true;
  });

  const graph = buildGraph(nodes, dcComponents);
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
    } else if (comp.type === 'ac-source') {
      totalVoltage += comp.properties.amplitude ?? 0;
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
    // inductors, ac-source, dc-ac-converter, ac-dc-converter: zero resistance in this model
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
    // inductors, ac-source, converters: resistance = 0, voltage = 0 in this model
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
