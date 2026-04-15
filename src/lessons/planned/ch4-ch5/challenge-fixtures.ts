import type { Challenge } from '../../../types/lesson.ts';

export const chapter4MeasurementClassifyFixture: Challenge = {
  id: 'fixture-ch4-measurement-domain-classify',
  prompt: 'Classify this circuit before solving: pure series, pure parallel, or mixed?',
  type: 'classify',
  evaluationCriteria: {
    customCheck: 'classify',
    hardPassChecks: ['classification-correct'],
    learnerCategory: 'mixed',
    expectedCategory: 'mixed',
    requiredEvidenceSignals: ['has-junction-node', 'contains-series-segment', 'contains-parallel-branch'],
    observedEvidenceSignals: ['has-junction-node', 'contains-series-segment', 'contains-parallel-branch'],
  },
  hints: [
    'Look for at least one split current path and at least one non-splitting segment.',
    'If some elements share current while others do not, it is mixed.',
  ],
  classifyConfig: {
    categories: ['series', 'parallel', 'mixed'],
    correctCategory: 'mixed',
    requiredEvidenceSignals: ['has-junction-node', 'contains-series-segment', 'contains-parallel-branch'],
  },
};

export const chapter5NonIdealDiagnoseFixture: Challenge = {
  id: 'fixture-ch5-non-ideal-root-cause-diagnose',
  prompt: 'Diagnose why load voltage drops strongly under demand.',
  type: 'diagnose',
  evaluationCriteria: {
    customCheck: 'diagnose',
    hardPassChecks: ['diagnosis-correct'],
    learnerCause: 'source-internal-resistance-high',
    acceptedCauses: ['source-internal-resistance-high', 'wire-loss-dominant'],
    requiredEvidenceSignals: ['open-circuit-voltage-normal', 'loaded-terminal-voltage-drops', 'load-current-limited'],
    observedEvidenceSignals: ['open-circuit-voltage-normal', 'loaded-terminal-voltage-drops', 'load-current-limited'],
    minEvidenceMatches: 3,
  },
  hints: [
    'Compare open-circuit and loaded source voltage before replacing parts.',
    'Use evidence patterns, not a single reading, to select the root cause.',
  ],
  diagnoseConfig: {
    acceptedCauses: ['source-internal-resistance-high', 'wire-loss-dominant'],
    evidenceItems: [
      'Open-circuit source voltage is near nominal.',
      'Loaded source voltage drops below target range.',
      'Load current is lower than expected despite proper topology.',
    ],
    minEvidenceMatches: 3,
  },
};

export const chapter4to5ChallengeFixtures: Challenge[] = [
  chapter4MeasurementClassifyFixture,
  chapter5NonIdealDiagnoseFixture,
];
