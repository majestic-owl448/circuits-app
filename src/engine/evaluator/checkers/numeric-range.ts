import type { EvaluationChecker } from './types.ts';

export const numericRangeChecker: EvaluationChecker = ({ criteria, simulation }) => {
  if (criteria.targetComponent && criteria.targetProperty && criteria.expectedRange) {
    const compResult = simulation.componentResults.get(criteria.targetComponent);
    if (!compResult) {
      return {
        id: 'numeric.target.missing-component',
        passed: false,
        severity: 'hard-pass',
        message: 'The target component is not part of a complete circuit.',
      };
    }

    const value = compResult[criteria.targetProperty];
    const { min, max } = criteria.expectedRange;

    if (value < min || value > max) {
      return {
        id: 'numeric.target.out-of-range',
        passed: false,
        severity: 'hard-pass',
        message: `The ${criteria.targetProperty} on the target component is ${value.toFixed(2)}, but it needs to be between ${min} and ${max}.`,
      };
    }
  }

  if (criteria.expectedRanges && criteria.expectedRanges.length > 0) {
    for (const expected of criteria.expectedRanges) {
      const compResult = simulation.componentResults.get(expected.componentId);
      if (!compResult) {
        return {
          id: 'numeric.multi.missing-component',
          passed: false,
          severity: 'hard-pass',
          message: `The component ${expected.componentId} is missing from the solved circuit.`,
        };
      }

      const value = compResult[expected.property];
      if (value < expected.min || value > expected.max) {
        return {
          id: 'numeric.multi.out-of-range',
          passed: false,
          severity: 'hard-pass',
          message: `${expected.componentId} ${expected.property} is ${value.toFixed(2)} and must be between ${expected.min} and ${expected.max}.`,
        };
      }
    }
  }

  return null;
};
