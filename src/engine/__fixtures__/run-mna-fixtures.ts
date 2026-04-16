import { solve } from '../solver.ts';
import { phaseOneMnaFixtures, type MnaFixture } from './phase1-mna.ts';

const EPSILON = 1e-3;

(globalThis as { process?: { env?: Record<string, string | undefined> } }).process!.env!['CIRCUITS_SOLVER_BACKEND'] = 'mna';

interface FixtureFailure {
  fixtureId: string;
  reasons: string[];
}

function approxEqual(actual: number, expected: number, epsilon = EPSILON): boolean {
  if (Number.isNaN(actual) || Number.isNaN(expected)) {
    return false;
  }

  if (!Number.isFinite(actual) || !Number.isFinite(expected)) {
    return actual === expected;
  }

  return Math.abs(actual - expected) <= epsilon;
}

function evaluateFixture(fixture: MnaFixture): FixtureFailure | null {
  const reasons: string[] = [];
  const result = solve(fixture.nodes, fixture.components);
  const { expected } = fixture;

  if (result.isComplete !== expected.isComplete) {
    reasons.push(`isComplete expected ${expected.isComplete} but got ${result.isComplete}`);
  }

  if (result.isShortCircuit !== expected.isShortCircuit) {
    reasons.push(`isShortCircuit expected ${expected.isShortCircuit} but got ${result.isShortCircuit}`);
  }

  if (!approxEqual(result.totalResistance, expected.totalResistance)) {
    reasons.push(`totalResistance expected ${expected.totalResistance} but got ${result.totalResistance}`);
  }

  if (!approxEqual(result.totalCurrent, expected.totalCurrent)) {
    reasons.push(`totalCurrent expected ${expected.totalCurrent} but got ${result.totalCurrent}`);
  }

  for (const expectation of expected.componentExpectations ?? []) {
    const compResult = result.componentResults.get(expectation.componentId);
    if (!compResult) {
      reasons.push(`componentResults missing ${expectation.componentId}`);
      continue;
    }

    if (expectation.voltage !== undefined && !approxEqual(compResult.voltage, expectation.voltage)) {
      reasons.push(`component ${expectation.componentId} voltage expected ${expectation.voltage} but got ${compResult.voltage}`);
    }

    if (expectation.current !== undefined && !approxEqual(compResult.current, expectation.current)) {
      reasons.push(`component ${expectation.componentId} current expected ${expectation.current} but got ${compResult.current}`);
    }

    if (expectation.power !== undefined && !approxEqual(compResult.power, expectation.power)) {
      reasons.push(`component ${expectation.componentId} power expected ${expectation.power} but got ${compResult.power}`);
    }

    if (expectation.isFailed !== undefined) {
      const updatedComp = result.updatedComponents?.find(c => c.id === expectation.componentId);
      const actualFailed = updatedComp?.properties.isFailed ?? false;
      if (actualFailed !== expectation.isFailed) {
        reasons.push(`component ${expectation.componentId} isFailed expected ${expectation.isFailed} but got ${actualFailed}`);
      }
    }
  }

  const expectsSolvedPayload = expected.isComplete && !expected.isShortCircuit;

  if (expectsSolvedPayload && (!result.nodeVoltages || result.nodeVoltages.size === 0)) {
    reasons.push('nodeVoltages missing from solved MNA result');
  }

  if (expectsSolvedPayload && (!result.branchCurrents || result.branchCurrents.size === 0)) {
    reasons.push('branchCurrents missing from solved MNA result');
  }

  if (!result.diagnostics || !result.diagnostics.includes('mna-backend')) {
    reasons.push('diagnostics missing mna-backend marker');
  }

  if (reasons.length === 0) {
    return null;
  }

  return { fixtureId: fixture.id, reasons };
}

function run(): void {
  const failures = phaseOneMnaFixtures
    .map(evaluateFixture)
    .filter((failure): failure is FixtureFailure => failure !== null);

  if (failures.length === 0) {
    console.log(`MNA fixtures passed: ${phaseOneMnaFixtures.length}/${phaseOneMnaFixtures.length}`);
    return;
  }

  console.error(`MNA fixtures failed: ${failures.length}/${phaseOneMnaFixtures.length}`);
  for (const failure of failures) {
    console.error(`- ${failure.fixtureId}`);
    for (const reason of failure.reasons) {
      console.error(`  - ${reason}`);
    }
  }

  throw new Error('MNA fixture verification failed');
}

run();
