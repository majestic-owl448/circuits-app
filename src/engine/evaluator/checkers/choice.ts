import type { EvaluationChecker } from './types.ts';

export const choiceChecker: EvaluationChecker = ({ criteria }) => {
  if (!criteria.correctChoiceId) {
    return null;
  }

  if (criteria.customCheck === 'choice-missing') {
    return {
      id: 'choice.missing-answer',
      passed: false,
      severity: 'hard-pass',
      message: 'A choice-based answer is required for this challenge.',
    };
  }

  return null;
};
