import type { SimulationResult } from '../types/circuit.ts';
import type { CircuitComponent } from '../types/circuit.ts';
import type { EvaluationCriteria } from '../types/lesson.ts';
import { topologyChecker } from './evaluator/checkers/topology.ts';
import { constraintsChecker } from './evaluator/checkers/constraints.ts';
import { numericRangeChecker } from './evaluator/checkers/numeric-range.ts';
import { choiceChecker } from './evaluator/checkers/choice.ts';
import { classifyChecker } from './evaluator/checkers/classify.ts';
import { diagnoseChecker } from './evaluator/checkers/diagnose.ts';
import type { CheckerResult, EvaluationChecker } from './evaluator/checkers/types.ts';
import type { MultiCriteriaEvaluationResult } from '../types/lesson.ts';

export interface EvaluationResult {
  passed: boolean;
  message: string;
  outcomes?: CheckerResult[];
}

export function evaluate(
  criteria: EvaluationCriteria,
  simulation: SimulationResult,
  components: CircuitComponent[] = [],
): EvaluationResult {
  const checkers: EvaluationChecker[] = [
    topologyChecker,
    constraintsChecker,
    numericRangeChecker,
    choiceChecker,
    classifyChecker,
    diagnoseChecker,
  ];

  const outcomes: CheckerResult[] = [];

  for (const checker of checkers) {
    const result = checker({ criteria, simulation, components });
    if (result) {
      outcomes.push(result);
    }
    if (result && !result.passed) {
      return {
        passed: false,
        message: result.message ?? 'Try again.',
        outcomes,
      };
    }
  }

  return {
    passed: true,
    message: 'Correct! Well done.',
    outcomes,
  };
}

export function evaluateMultiCriteria(
  criteria: EvaluationCriteria,
  simulation: SimulationResult,
  components: CircuitComponent[] = [],
): MultiCriteriaEvaluationResult {
  const result = evaluate(criteria, simulation, components);
  const outcomes = (result.outcomes ?? []).map(outcome => ({
    id: outcome.id,
    passed: outcome.passed,
    message: outcome.message,
    severity: outcome.severity,
  }));

  const failedHardPass = outcomes.some(outcome => !outcome.passed && outcome.severity === 'hard-pass');

  return {
    passed: !failedHardPass,
    outcomes,
  };
}
