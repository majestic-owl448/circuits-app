import type { CircuitComponent } from '../types/circuit.ts';

export function computeToleranceBounds(
  nominal: number,
  tolerance: number,
): { min: number; max: number } {
  return { min: nominal * (1 - tolerance), max: nominal * (1 + tolerance) };
}

export function applyToleranceOffset(
  components: CircuitComponent[],
  fraction: number,
): CircuitComponent[] {
  return components.map(c => {
    if ((c.type === 'resistor' || c.type === 'bulb') && c.properties.resistance !== undefined) {
      return {
        ...c,
        properties: { ...c.properties, resistance: c.properties.resistance * (1 + fraction) },
      };
    }
    return c;
  });
}
