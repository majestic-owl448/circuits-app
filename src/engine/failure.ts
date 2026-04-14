import type { CircuitComponent, SimulationResult } from '../types/circuit.ts';

export function applyFailureStates(
  components: CircuitComponent[],
  simulation: SimulationResult,
): CircuitComponent[] {
  return components.map(component => {
    const limit = component.properties.operatingLimit;
    if (!limit) {
      return component;
    }

    const result = simulation.componentResults.get(component.id);
    if (!result) {
      return component;
    }

    const metric = result[limit.type];
    const failed = metric > limit.max;

    return {
      ...component,
      properties: {
        ...component.properties,
        isFailed: failed,
      },
    };
  });
}
