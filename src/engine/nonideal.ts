import type { CircuitComponent } from '../types/circuit.ts';

export function applyNonIdealProperties(components: CircuitComponent[]): CircuitComponent[] {
  return components.map(component => {
    if (component.type === 'battery') {
      const internalResistance = component.properties.internalResistance ?? 0;
      if (internalResistance <= 0) return component;

      return {
        ...component,
        properties: {
          ...component.properties,
          internalResistance,
        },
      };
    }

    if (component.type === 'wire') {
      const wireResistance = component.properties.wireResistance ?? 0;
      if (wireResistance <= 0) return component;

      return {
        ...component,
        properties: {
          ...component.properties,
          wireResistance,
        },
      };
    }

    return component;
  });
}
