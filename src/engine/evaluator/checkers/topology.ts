import type { EvaluationChecker } from './types.ts';

export const topologyChecker: EvaluationChecker = ({ criteria, simulation }) => {
  if (!criteria.circuitMustBeClosed) {
    return null;
  }

  if (!simulation.isComplete) {
    return {
      id: 'topology.circuit-closed',
      passed: false,
      severity: 'hard-pass',
      message: 'The circuit is not complete. Make sure all components are connected in a closed loop.',
    };
  }

  return null;
};
