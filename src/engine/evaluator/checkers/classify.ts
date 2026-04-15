import type { EvaluationChecker } from './types.ts';

export const classifyChecker: EvaluationChecker = ({ criteria }) => {
  if (criteria.customCheck !== 'classify') {
    return null;
  }

  if (!criteria.learnerCategory || !criteria.expectedCategory) {
    return {
      id: 'classify.missing-category-selection',
      passed: false,
      severity: 'hard-pass',
      message: 'Classify challenge requires both learner and expected category values.',
    };
  }

  if (criteria.learnerCategory !== criteria.expectedCategory) {
    return {
      id: 'classify.category-mismatch',
      passed: false,
      severity: 'hard-pass',
      message: `Expected category "${criteria.expectedCategory}" but received "${criteria.learnerCategory}".`,
    };
  }

  const requiredSignals = criteria.requiredEvidenceSignals ?? [];
  if (requiredSignals.length > 0) {
    const observedSignals = criteria.observedEvidenceSignals ?? [];
    const missingSignals = requiredSignals.filter(signal => !observedSignals.includes(signal));
    if (missingSignals.length > 0) {
      return {
        id: 'classify.evidence-missing',
        passed: false,
        severity: 'hard-pass',
        message: `Missing evidence signals for classification: ${missingSignals.join(', ')}.`,
      };
    }
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
