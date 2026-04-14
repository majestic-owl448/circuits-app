import type { EvaluationChecker } from './types.ts';

export const diagnoseChecker: EvaluationChecker = ({ criteria }) => {
  if (criteria.customCheck !== 'diagnose') {
    return null;
  }

  if (!criteria.hardPassChecks || criteria.hardPassChecks.length === 0) {
    return {
      id: 'diagnose.missing-hard-checks',
      passed: false,
      severity: 'hard-pass',
      message: 'Diagnose challenge is missing required evidence/hard-pass configuration.',
    };
  }

  if (!criteria.advisoryChecks || criteria.advisoryChecks.length === 0) {
    return {
      id: 'diagnose.missing-advisory-checks',
      passed: true,
      severity: 'advisory',
      message: 'Advisory: add alternative-cause advisory checks for richer diagnosis feedback.',
    };
  }

  return null;
};
