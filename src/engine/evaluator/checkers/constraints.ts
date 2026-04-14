import type { EvaluationChecker } from './types.ts';
import { evaluateCustomCheck, hasClosedSwitchInCircuit } from '../custom-checks.ts';

export const constraintsChecker: EvaluationChecker = ({ criteria, simulation, components }) => {
  if (simulation.isShortCircuit) {
    return {
      id: 'constraints.short-circuit',
      passed: false,
      severity: 'hard-pass',
      message: 'Short circuit detected! There is a path with no resistance. Add a load (like a bulb) to the circuit.',
    };
  }

  const hardChecks = criteria.hardPassChecks ?? [];
  if (hardChecks.includes('no-short-circuit') && simulation.isShortCircuit) {
    return {
      id: 'constraints.hard.no-short-circuit',
      passed: false,
      severity: 'hard-pass',
      message: 'Hard-pass check failed: short-circuit condition must be resolved.',
    };
  }

  const advisoryChecks = criteria.advisoryChecks ?? [];
  if (advisoryChecks.includes('prefer-finite-current') && !Number.isFinite(simulation.totalCurrent)) {
    return {
      id: 'constraints.advisory.finite-current',
      passed: true,
      severity: 'advisory',
      message: 'Advisory: avoid near-zero-resistance paths to keep currents in a realistic range.',
    };
  }

  if (criteria.customCheck) {
    const custom = evaluateCustomCheck(criteria.customCheck, components);
    if (!custom.passed) {
      return {
        id: 'constraints.custom-check',
        passed: false,
        severity: 'hard-pass',
        message: custom.message,
      };
    }
  }

  if (criteria.circuitMustBeClosed && !simulation.isComplete && hasClosedSwitchInCircuit(components)) {
    return {
      id: 'constraints.closed-switch-open-loop',
      passed: false,
      severity: 'hard-pass',
      message: 'A switch is closed, but the loop is still open. Check for missing or misplaced connections.',
    };
  }

  return null;
};
