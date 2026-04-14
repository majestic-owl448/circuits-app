import { solve } from '../solver.ts';
import { chapterOneToThreeFixtures, summarizeSimulation, type EngineFixture } from './chapter1-3.ts';

const EPSILON = 1e-6;

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

function evaluateFixture(fixture: EngineFixture): FixtureFailure | null {
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

  if ((expected.loopNodesMinLength ?? 0) > 0 && result.loopNodes.length < (expected.loopNodesMinLength ?? 0)) {
    reasons.push(`loopNodes length expected >= ${expected.loopNodesMinLength} but got ${result.loopNodes.length}`);
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
  }

  if (!result.diagnostics || !result.diagnostics.some(d => d.startsWith('solver-'))) {
    reasons.push('diagnostics missing solver backend marker');
  }

  if (reasons.length === 0) {
    return null;
  }

  reasons.push(`simulation summary: ${summarizeSimulation(result)}`);
  return { fixtureId: fixture.id, reasons };
}

function run(): void {
  const failures = chapterOneToThreeFixtures
    .map(evaluateFixture)
    .filter((failure): failure is FixtureFailure => failure !== null);

  if (failures.length === 0) {
    console.log(`Engine fixtures passed: ${chapterOneToThreeFixtures.length}/${chapterOneToThreeFixtures.length}`);
    return;
  }

  console.error(`Engine fixtures failed: ${failures.length}/${chapterOneToThreeFixtures.length}`);
  for (const failure of failures) {
    console.error(`- ${failure.fixtureId}`);
    for (const reason of failure.reasons) {
      console.error(`  - ${reason}`);
    }
  }

  throw new Error('Engine fixture verification failed');
}

run();
