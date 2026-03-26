import type { SimulationResult } from '../types/circuit.ts';
import type { EvaluationCriteria } from '../types/lesson.ts';

export interface EvaluationResult {
  passed: boolean;
  message: string;
}

export function evaluate(
  criteria: EvaluationCriteria,
  simulation: SimulationResult,
): EvaluationResult {
  if (criteria.circuitMustBeClosed && !simulation.isComplete) {
    return {
      passed: false,
      message: 'The circuit is not complete. Make sure all components are connected in a closed loop.',
    };
  }

  if (simulation.isShortCircuit) {
    return {
      passed: false,
      message: 'Short circuit detected! There is a path with no resistance. Add a load (like a bulb) to the circuit.',
    };
  }

  if (criteria.targetComponent && criteria.targetProperty && criteria.expectedRange) {
    const compResult = simulation.componentResults.get(criteria.targetComponent);
    if (!compResult) {
      return {
        passed: false,
        message: `The target component is not part of a complete circuit.`,
      };
    }

    const value = compResult[criteria.targetProperty];
    const { min, max } = criteria.expectedRange;

    if (value < min || value > max) {
      return {
        passed: false,
        message: `The ${criteria.targetProperty} on the target component is ${value.toFixed(2)}, but it needs to be between ${min} and ${max}.`,
      };
    }
  }

  return {
    passed: true,
    message: 'Correct! Well done.',
  };
}
