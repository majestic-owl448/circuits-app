import { evaluate, evaluateMultiCriteria } from '../evaluator.ts';
import { evaluatorFixtures, type EvaluatorFixture } from './evaluator-fixtures.ts';

interface FixtureFailure {
  fixtureId: string;
  reasons: string[];
}

function evaluateFixture(fixture: EvaluatorFixture): FixtureFailure | null {
  const reasons: string[] = [];

  const single = evaluate(fixture.criteria, fixture.simulation, fixture.components);
  const multi = evaluateMultiCriteria(fixture.criteria, fixture.simulation, fixture.components);

  if (single.passed !== fixture.expected.passed) {
    reasons.push(`evaluate().passed expected ${fixture.expected.passed} but got ${single.passed}`);
  }

  if (multi.passed !== fixture.expected.passed) {
    reasons.push(`evaluateMultiCriteria().passed expected ${fixture.expected.passed} but got ${multi.passed}`);
  }

  if (fixture.expected.messageIncludes && !single.message.includes(fixture.expected.messageIncludes)) {
    reasons.push(`message expected to include "${fixture.expected.messageIncludes}" but got "${single.message}"`);
  }

  for (const expectedHardFail of fixture.expected.hardFailIds ?? []) {
    const found = multi.outcomes.some(outcome => outcome.id === expectedHardFail && !outcome.passed && outcome.severity === 'hard-pass');
    if (!found) {
      reasons.push(`missing hard-fail outcome ${expectedHardFail}`);
    }
  }

  for (const expectedAdvisory of fixture.expected.advisoryIds ?? []) {
    const found = multi.outcomes.some(outcome => outcome.id === expectedAdvisory && outcome.severity === 'advisory');
    if (!found) {
      reasons.push(`missing advisory outcome ${expectedAdvisory}`);
    }
  }

  if (reasons.length === 0) {
    return null;
  }

  return {
    fixtureId: fixture.id,
    reasons,
  };
}

function run(): void {
  const failures = evaluatorFixtures
    .map(evaluateFixture)
    .filter((failure): failure is FixtureFailure => failure !== null);

  if (failures.length === 0) {
    console.log(`Evaluator fixtures passed: ${evaluatorFixtures.length}/${evaluatorFixtures.length}`);
    return;
  }

  console.error(`Evaluator fixtures failed: ${failures.length}/${evaluatorFixtures.length}`);
  for (const failure of failures) {
    console.error(`- ${failure.fixtureId}`);
    for (const reason of failure.reasons) {
      console.error(`  - ${reason}`);
    }
  }

  throw new Error('Evaluator fixture verification failed');
}

run();
