import type { CircuitComponent, ComponentResult } from '../../types/circuit.ts';

export function buildComponentResults(
  components: CircuitComponent[],
  nodeVoltages: Map<string, number>,
): Map<string, ComponentResult> {
  const results = new Map<string, ComponentResult>();

  for (const component of components) {
    const vA = nodeVoltages.get(component.nodeA) ?? 0;
    const vB = nodeVoltages.get(component.nodeB) ?? 0;
    const voltage = Math.abs(vA - vB);

    if (component.type === 'bulb' || component.type === 'resistor') {
      const resistance = component.properties.resistance ?? 0;
      const current = resistance > 0 ? voltage / resistance : Number.POSITIVE_INFINITY;
      const power = Number.isFinite(current) ? voltage * current : Number.POSITIVE_INFINITY;
      results.set(component.id, {
        componentId: component.id,
        voltage,
        current,
        power,
      });
      continue;
    }

    if (component.type === 'wire') {
      results.set(component.id, {
        componentId: component.id,
        voltage,
        current: 0,
        power: 0,
      });
      continue;
    }

    if (component.type === 'switch') {
      const isClosed = component.properties.isClosed ?? false;
      results.set(component.id, {
        componentId: component.id,
        voltage,
        current: isClosed ? 0 : 0,
        power: 0,
      });
      continue;
    }

    if (component.type === 'battery') {
      results.set(component.id, {
        componentId: component.id,
        voltage,
        current: 0,
        power: 0,
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
    if (component.type === 'bulb' || component.type === 'resistor') {
      const current = componentResults.get(component.id)?.current ?? 0;
      branchCurrents.set(component.id, current);
      continue;
    }

    if (component.type === 'wire' || component.type === 'switch') {
      branchCurrents.set(component.id, 0);
      continue;
    }

    if (component.type === 'battery') {
      branchCurrents.set(component.id, 0);
    }
  }

  return branchCurrents;
}
