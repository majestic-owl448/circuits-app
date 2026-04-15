import type { CircuitComponent, SimulationResult } from '../../types/circuit.ts';
import type { EvaluationCriteria } from '../../types/lesson.ts';

export interface EvaluatorFixture {
  id: string;
  description: string;
  criteria: EvaluationCriteria;
  simulation: SimulationResult;
  components: CircuitComponent[];
  expected: {
    passed: boolean;
    messageIncludes?: string;
    hardFailIds?: string[];
    advisoryIds?: string[];
  };
}

function baseSimulation(overrides?: Partial<SimulationResult>): SimulationResult {
  return {
    isComplete: true,
    isShortCircuit: false,
    totalResistance: 45,
    totalCurrent: 0.2,
    componentResults: new Map([
      ['bulb-1', { componentId: 'bulb-1', voltage: 9, current: 0.2, power: 1.8 }],
      ['res-1', { componentId: 'res-1', voltage: 6, current: 0.1, power: 0.6 }],
    ]),
    loopNodes: ['n1', 'n2', 'n3', 'n4', 'n1'],
    diagnostics: ['solver-backend:legacy'],
    ...overrides,
  };
}

function baseComponents(): CircuitComponent[] {
  return [
    {
      id: 'battery-1',
      type: 'battery',
      nodeA: 'n1',
      nodeB: 'n4',
      properties: { voltage: 9 },
      name: 'Battery',
      position: { x: 100, y: 100 },
      rotation: 0,
    },
    {
      id: 'switch-1',
      type: 'switch',
      nodeA: 'n4',
      nodeB: 'n3',
      properties: { isClosed: true },
      name: 'Switch',
      position: { x: 200, y: 100 },
      rotation: 0,
    },
    {
      id: 'bulb-1',
      type: 'bulb',
      nodeA: 'n2',
      nodeB: 'n3',
      properties: { resistance: 45 },
      name: 'Bulb',
      position: { x: 300, y: 100 },
      rotation: 0,
    },
    {
      id: 'wire-1',
      type: 'wire',
      nodeA: 'n1',
      nodeB: 'n2',
      properties: {},
      name: 'Wire',
      position: { x: 250, y: 60 },
      rotation: 0,
    },
  ];
}

export const evaluatorFixtures: EvaluatorFixture[] = [
  {
    id: 'custom-check-pass-has-switch-and-bulb',
    description: 'supports has-switch-and-bulb custom check',
    criteria: { circuitMustBeClosed: true, customCheck: 'has-switch-and-bulb' },
    simulation: baseSimulation(),
    components: baseComponents(),
    expected: {
      passed: true,
      advisoryIds: [],
    },
  },
  {
    id: 'custom-check-fail-series-path-complete',
    description: 'fails series-path-complete when n3->n4 link missing',
    criteria: { circuitMustBeClosed: true, customCheck: 'series-path-complete' },
    simulation: baseSimulation(),
    components: baseComponents(),
    expected: {
      passed: false,
      messageIncludes: 'Connect n3 to n4',
      hardFailIds: ['constraints.custom-check'],
    },
  },
  {
    id: 'multi-criteria-hard-fail-with-advisory',
    description: 'returns hard-pass failure plus advisory outcomes',
    criteria: {
      circuitMustBeClosed: true,
      targetComponent: 'res-1',
      targetProperty: 'current',
      expectedRange: { min: 0.2, max: 0.3 },
      advisoryChecks: ['prefer-finite-current'],
      hardPassChecks: ['no-short-circuit'],
    },
    simulation: baseSimulation(),
    components: baseComponents(),
    expected: {
      passed: false,
      hardFailIds: ['numeric.target.out-of-range'],
      advisoryIds: [],
    },
  },
  {
    id: 'multi-criteria-success-with-advisory-only',
    description: 'passes classify with matching category and evidence',
    criteria: {
      customCheck: 'classify',
      hardPassChecks: ['classification-correct'],
      learnerCategory: 'non-ideal',
      expectedCategory: 'non-ideal',
      requiredEvidenceSignals: ['voltage-drop-under-load'],
      observedEvidenceSignals: ['voltage-drop-under-load', 'current-limited'],
    },
    simulation: baseSimulation(),
    components: baseComponents(),
    expected: {
      passed: true,
      advisoryIds: ['classify.missing-advisory-checks'],
    },
  },
  {
    id: 'diagnose-fails-when-evidence-threshold-not-met',
    description: 'fails diagnose when accepted cause has insufficient evidence',
    criteria: {
      customCheck: 'diagnose',
      hardPassChecks: ['diagnosis-correct'],
      learnerCause: 'internal-resistance-too-high',
      acceptedCauses: ['internal-resistance-too-high', 'wire-loss-dominant'],
      requiredEvidenceSignals: ['voltage-drop-under-load', 'source-recovery-open-circuit'],
      observedEvidenceSignals: ['voltage-drop-under-load'],
      minEvidenceMatches: 2,
    },
    simulation: baseSimulation(),
    components: baseComponents(),
    expected: {
      passed: false,
      hardFailIds: ['diagnose.insufficient-evidence'],
    },
  },
  {
    id: 'diagnose-passes-with-cause-and-evidence',
    description: 'passes diagnose with accepted cause and enough evidence',
    criteria: {
      customCheck: 'diagnose',
      hardPassChecks: ['diagnosis-correct'],
      learnerCause: 'internal-resistance-too-high',
      acceptedCauses: ['internal-resistance-too-high', 'wire-loss-dominant'],
      requiredEvidenceSignals: ['voltage-drop-under-load', 'source-recovery-open-circuit'],
      observedEvidenceSignals: ['voltage-drop-under-load', 'source-recovery-open-circuit'],
      minEvidenceMatches: 2,
    },
    simulation: baseSimulation(),
    components: baseComponents(),
    expected: {
      passed: true,
      advisoryIds: ['diagnose.missing-advisory-checks'],
    },
  },
];
