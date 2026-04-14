import type { EvaluationChecker } from './types.ts';

export const classifyChecker: EvaluationChecker = ({ criteria }) => {
  if (criteria.customCheck !== 'classify') {
    return null;
  }

  if (!criteria.hardPassChecks || criteria.hardPassChecks.length === 0) {
    return {
      id: 'classify.missing-hard-checks',
      passed: false,
      severity: 'hard-pass',
      message: 'Classify challenge is missing required hard-pass configuration.',
    };
  }

  if (!criteria.advisoryChecks || criteria.advisoryChecks.length === 0) {
    return {
      id: 'classify.missing-advisory-checks',
      passed: true,
      severity: 'advisory',
      message: 'Advisory: add evidence-guided advisory checks to strengthen classify feedback.',
    };
  }

  return null;
};
