import type { CircuitComponent, ComponentResult } from '../../types/circuit.ts';
import type { MnaTopology } from './topology.ts';

export function buildComponentResults(
  components: CircuitComponent[],
  nodeVoltages: Map<string, number>,
  sourceCurrents: number[],
  topology: MnaTopology,
): Map<string, ComponentResult> {
  const results = new Map<string, ComponentResult>();

  // Map source component IDs to their current from the MNA solution
  const sourceIdToCurrent = new Map<string, number>();
  const voltageSources = topology.elements.filter(e => e.type === 'voltage-source');
  voltageSources.forEach((source, idx) => {
    if (source.sourceComponentId) {
      sourceIdToCurrent.set(source.sourceComponentId, sourceCurrents[idx]);
    }
  });

  for (const component of components) {
    const vA = nodeVoltages.get(component.nodeA) ?? 0;
    const vB = nodeVoltages.get(component.nodeB) ?? 0;
    const voltage = Math.abs(vA - vB);

    if (component.type === 'bulb' || component.type === 'resistor') {
      const resistance = component.properties.resistance ?? 0;
      const current = resistance > 0 ? voltage / resistance : 0;
      const power = voltage * current;
      results.set(component.id, {
        componentId: component.id,
        voltage,
        current,
        power,
      });
      continue;
    }

    if (component.type === 'wire') {
      const resistance = component.properties.wireResistance ?? 1e-6;
      const current = resistance > 0 ? voltage / resistance : 0;
      results.set(component.id, {
        componentId: component.id,
        voltage,
        current,
        power: voltage * current,
      });
      continue;
    }

    if (component.type === 'switch') {
      const isClosed = component.properties.isClosed ?? false;
      const current = isClosed ? voltage / 1e-6 : 0;
      results.set(component.id, {
        componentId: component.id,
        voltage,
        current,
        power: voltage * current,
      });
      continue;
    }

    if (component.type === 'battery') {
      let current = Math.abs(sourceIdToCurrent.get(component.id) ?? 0);

      results.set(component.id, {
        componentId: component.id,
        voltage, // Delivered voltage (at terminals)
        current,
        power: voltage * current,
      });
    }
  }

  return results;
}

export function buildBranchCurrents(
  components: CircuitComponent[],
  componentResults: Map<string, ComponentResult>,
): Map<string, number> {
  const branchCurrents = new Map<string, number>();

  for (const component of components) {
    const current = componentResults.get(component.id)?.current ?? 0;
    branchCurrents.set(component.id, current);
  }

  return branchCurrents;
}
