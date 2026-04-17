import type { CircuitComponent } from '../types/circuit.ts';

// Reserved for Chapter 5+ lesson authors: use these helpers in challenge
// evaluationCriteria to check whether a measured value is within tolerance.
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
