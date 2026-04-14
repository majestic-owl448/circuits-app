import type { CircuitComponent, CircuitNode, SimulationResult } from '../types/circuit.ts';
import { solveLegacy } from './legacy-solver.ts';
import { solveMna } from './mna/solver.ts';
import { applyNonIdealProperties } from './nonideal.ts';

type SolverBackend = 'legacy' | 'mna' | 'compare';

function getConfiguredBackend(): SolverBackend {
  const runtimeEnv = (globalThis as { process?: { env?: Record<string, string | undefined> } }).process?.env;
  const runtimeValue = runtimeEnv?.CIRCUITS_SOLVER_BACKEND;
  const viteValue = (import.meta as { env?: Record<string, string | undefined> }).env?.VITE_SOLVER_BACKEND;
  const raw = (runtimeValue ?? viteValue ?? 'legacy').toLowerCase();

  if (raw === 'mna' || raw === 'compare') {
    return raw;
  }

  return 'legacy';
}

function withDiagnostic(result: SimulationResult, diagnostic: string): SimulationResult {
  return {
    ...result,
    diagnostics: [...(result.diagnostics ?? []), diagnostic],
  };
}

function differs(lhs: SimulationResult, rhs: SimulationResult): boolean {
  if (lhs.isComplete !== rhs.isComplete) return true;
  if (lhs.isShortCircuit !== rhs.isShortCircuit) return true;
  if (Math.abs(lhs.totalCurrent - rhs.totalCurrent) > 1e-3) return true;
  if (Math.abs(lhs.totalResistance - rhs.totalResistance) > 1e-3) return true;
  return false;
}

export function solve(
  nodes: CircuitNode[],
  components: CircuitComponent[],
): SimulationResult {
  const preparedComponents = applyNonIdealProperties(components);
  const backend = getConfiguredBackend();

  if (backend === 'mna') {
    return withDiagnostic(solveMna(nodes, preparedComponents), 'solver-backend:mna');
  }

  if (backend === 'compare') {
    const legacyResult = solveLegacy(nodes, preparedComponents);
    const mnaResult = solveMna(nodes, preparedComponents);
    if (differs(legacyResult, mnaResult)) {
      return withDiagnostic(legacyResult, 'solver-compare:mismatch');
    }

    return withDiagnostic(legacyResult, 'solver-compare:match');
  }

  return withDiagnostic(solveLegacy(nodes, preparedComponents), 'solver-backend:legacy');
}
