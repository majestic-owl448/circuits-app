import type { EvaluationChecker } from './types.ts';

export const diagnoseChecker: EvaluationChecker = ({ criteria }) => {
  if (criteria.customCheck !== 'diagnose') {
    return null;
  }

  const learnerCause = criteria.learnerCause?.trim();
  const acceptedCauses = criteria.acceptedCauses ?? [];

  if (!learnerCause || acceptedCauses.length === 0) {
    return {
      id: 'diagnose.missing-cause-selection',
      passed: false,
      severity: 'hard-pass',
      message: 'Diagnose challenge requires learner cause and accepted cause configuration.',
    };
  }

  if (!acceptedCauses.includes(learnerCause)) {
    return {
      id: 'diagnose.cause-mismatch',
      passed: false,
      severity: 'hard-pass',
      message: `Cause "${learnerCause}" does not match accepted causes: ${acceptedCauses.join(', ')}.`,
    };
  }

  const requiredSignals = criteria.requiredEvidenceSignals ?? [];
  const observedSignals = criteria.observedEvidenceSignals ?? [];
  const matches = requiredSignals.filter(signal => observedSignals.includes(signal)).length;
  const minMatches = Math.max(0, criteria.minEvidenceMatches ?? requiredSignals.length);

  if (matches < minMatches) {
    return {
      id: 'diagnose.insufficient-evidence',
      passed: false,
      severity: 'hard-pass',
      message: `Matched ${matches}/${minMatches} required evidence signals.`,
    };
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
