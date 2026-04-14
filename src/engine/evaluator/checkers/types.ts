import type { SimulationResult } from '../../../types/circuit.ts';
import type { CircuitComponent } from '../../../types/circuit.ts';
import type { EvaluationCriteria } from '../../../types/lesson.ts';

export interface CheckerContext {
  criteria: EvaluationCriteria;
  simulation: SimulationResult;
  components: CircuitComponent[];
}

export interface CheckerResult {
  id: string;
  passed: boolean;
  message: string;
  severity: 'hard-pass' | 'advisory';
}

export type EvaluationChecker = (context: CheckerContext) => CheckerResult | null;
