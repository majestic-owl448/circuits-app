import type { LessonConfig } from '../../../../types/lesson.ts';
import { CHAPTER_5_METADATA } from '../../shared.ts';

// Load: 4Ω bulb requiring ≥9.6V delivered
// Source A: 12V / 0.5Ω → I = 12/4.5 ≈ 2.67A, V_load = 2.67×4 ≈ 10.67V ✓
// Source B: 12V / 2Ω  → I = 12/6 = 2.0A,  V_load = 2.0×4 = 8.0V  ✗ (below 9.6V)

export const lessonCh5_2_4: LessonConfig = {
  id: 'lesson-ch5-2-4',
  unitId: 'ch5-unit-2',
  title: 'Matching the Source to the Load With Internal Resistance',
  description: 'Apply source internal resistance to a design problem where nominal voltage alone is not enough to guarantee success.',
  stageLabel: CHAPTER_5_METADATA.stageLabel,
  prerequisites: ['lesson-ch5-2-3'],
  conceptsIntroduced: [
    'source suitability depends on more than nominal voltage',
    'internal resistance as a design constraint',
    'delivered voltage as the quantity that matters for load performance',
  ],
  initialNodes: [
    { id: 'n1', position: { x: 100, y: 150 } },
    { id: 'n2', position: { x: 300, y: 150 } },
    { id: 'n3', position: { x: 100, y: 350 } },
    { id: 'n4', position: { x: 300, y: 350 } },
  ],
  initialCircuit: [
    {
      id: 'battery-1',
      type: 'battery',
      nodeA: 'n1',
      nodeB: 'n3',
      properties: { voltage: 12, internalResistance: 2 },
      name: 'Battery (2\u03a9 internal)',
      position: { x: 100, y: 250 },
      rotation: 0,
    },
    {
      id: 'bulb-1',
      type: 'bulb',
      nodeA: 'n1',
      nodeB: 'n2',
      properties: { resistance: 4 },
      name: 'Load Bulb',
      position: { x: 200, y: 150 },
      rotation: 0,
    },
    {
      id: 'switch-1',
      type: 'switch',
      nodeA: 'n2',
      nodeB: 'n4',
      properties: { isClosed: false },
      name: 'Switch',
      position: { x: 300, y: 250 },
      rotation: 0,
    },
    {
      id: 'wire-1',
      type: 'wire',
      nodeA: 'n3',
      nodeB: 'n4',
      properties: {},
      name: 'Wire',
      position: { x: 200, y: 350 },
      rotation: 0,
    },
  ],
  steps: [
    {
      id: 'step-1',
      text: 'You have a 4\u03a9 load that requires at least 9.6V across it to function correctly. You have two candidate sources, both rated 12V. Source A has 0.5\u03a9 internal resistance. Source B has 2\u03a9 internal resistance. Which source actually delivers enough voltage?',
      highlights: ['bulb-1'],
    },
    {
      id: 'step-2',
      text: 'The circuit shown uses Source B (2\u03a9 internal). Close the switch and check the bulb voltage. I\u00a0=\u00a012\u00a0/\u00a06\u00a0=\u00a02.0A, V_bulb\u00a0=\u00a02.0\u00a0\u00d7\u00a04\u00a0=\u00a08.0V. The load receives only 8.0V \u2014 below the required 9.6V threshold.',
      requiredAction: { type: 'toggle-switch', componentId: 'switch-1', targetState: true },
      highlights: ['battery-1', 'bulb-1'],
    },
    {
      id: 'step-3',
      text: 'With Source A (0.5\u03a9 internal): I\u00a0=\u00a012\u00a0/\u00a04.5\u00a0\u2248\u00a02.67A, V_bulb\u00a0=\u00a02.67\u00a0\u00d7\u00a04\u00a0\u2248\u00a010.67V. That exceeds the 9.6V minimum. Both sources share the same nominal voltage, but only Source A succeeds in this design. The nominal voltage label alone is not enough.',
      theoryCheck: {
        question: 'Two sources are both rated 12V but have different internal resistances. Which quantity determines whether a source can meet a minimum load voltage requirement?',
        choices: [
          {
            id: 'tc-a',
            label: 'The nominal rated voltage, which is the same for both',
            isCorrect: false,
            explanation: 'Nominal voltage is the starting point, but the actual delivered voltage depends on how much is lost to internal resistance under load.',
          },
          {
            id: 'tc-b',
            label: 'The delivered terminal voltage under load, which depends on internal resistance',
            isCorrect: true,
            explanation: 'Correct! V_terminal\u00a0=\u00a0V\u00a0\u2212\u00a0I\u00a0\u00d7\u00a0R_internal. Same nominal voltage with different R_internal gives different terminal voltages.',
          },
          {
            id: 'tc-c',
            label: 'The current capacity, because higher current always means higher voltage',
            isCorrect: false,
            explanation: 'More current means more drop across internal resistance, which actually lowers the terminal voltage. Current capacity and terminal voltage are related but not directly proportional.',
          },
        ],
        explanation: 'The terminal voltage under load is what matters for the load. It equals the rated voltage minus the internal drop, and a source with high internal resistance may fail to meet the minimum even if its label says the right voltage.',
      },
    },
  ],
  challenges: [
    {
      id: 'challenge-1',
      prompt: 'A 4\u03a9 load requires at least 9.6V to function. Source A is 12V with 0.5\u03a9 internal resistance. Source B is 12V with 2\u03a9 internal resistance. Which source should you choose?',
      type: 'choose',
      evaluationCriteria: { correctChoiceId: 'ch1-a' },
      hints: [
        'Calculate V_load for each source: V_load\u00a0=\u00a0I\u00a0\u00d7\u00a0R_load, where I\u00a0=\u00a0V\u00a0/\u00a0(R_load\u00a0+\u00a0R_internal).',
        'Compare each V_load to the 9.6V minimum.',
      ],
      choices: [
        {
          id: 'ch1-a',
          label: 'Source A (0.5\u03a9 internal) \u2014 it delivers \u224810.67V to the load, above the 9.6V minimum',
          isCorrect: true,
          explanation: 'Correct! Source A: I\u00a0=\u00a012/4.5\u00a0\u2248\u00a02.67A, V_load\u00a0\u2248\u00a010.67V \u2714. Source B: I\u00a0=\u00a02.0A, V_load\u00a0=\u00a08.0V \u2717.',
        },
        {
          id: 'ch1-b',
          label: 'Source B (2\u03a9 internal) \u2014 it restricts current which is safer for the load',
          isCorrect: false,
          explanation: 'Restricting current also reduces delivered voltage below the required minimum. Source B delivers only 8.0V, which fails to meet the 9.6V threshold.',
        },
        {
          id: 'ch1-c',
          label: 'Either source works \u2014 both are rated 12V',
          isCorrect: false,
          explanation: 'Nominal voltage is insufficient information. Under load, Source B delivers only 8.0V while Source A delivers ~10.67V. Only Source A meets the design requirement.',
        },
      ],
    },
  ],
  theoryContent: [
    {
      title: 'Source-Load Matching With Internal Resistance',
      content: 'When selecting a source for a load with a minimum voltage requirement, nominal voltage alone is not enough. You must check the delivered terminal voltage under load: V_terminal\u00a0=\u00a0V\u00a0\u2212\u00a0I\u00a0\u00d7\u00a0R_internal.',
    },
    {
      title: 'Extending Source-Load Matching to Non-Ideal Constraints',
      content: 'Chapter 2 introduced source-load matching for ideal sources. Chapter 4 added measurement-guided verification. Now internal resistance becomes a design constraint: two sources with the same nominal voltage but different internal resistances may produce very different results for the same load.',
    },
  ],
  sandboxUnlocks: [],
  availableActions: ['toggle-switch'],
  currentOverlayAvailable: true,
  showFormulaPanel: true,
  formulasShown: [
    {
      formula: 'V\u209c\u2091\u2090\u2098\u1d62\u2099\u2090\u2097 = V \u2212 I \u00d7 R\u1d62\u2099\u209c',
      symbols: [
        { symbol: 'V\u209c\u2091\u2090\u2098\u1d62\u2099\u2090\u2097', name: 'Terminal voltage', unit: 'V' },
        { symbol: 'V', name: 'Rated voltage', unit: 'V' },
        { symbol: 'I', name: 'Current', unit: 'A' },
        { symbol: 'R\u1d62\u2099\u209c', name: 'Internal resistance', unit: '\u03a9' },
      ],
    },
  ],
  theoryPageAdditions: [
    {
      id: 'theory-source-load-matching-internal-r',
      title: 'Source-Load Matching With Internal Resistance',
      content: 'Selecting a source for a given load requires checking the delivered terminal voltage under load, not just the nominal rating. V_terminal\u00a0=\u00a0V_rated\u00a0\u2212\u00a0I\u00a0\u00d7\u00a0R_internal. A source with high internal resistance may fail to meet a load\u2019s minimum voltage requirement even when its rated voltage appears sufficient.',
      sourceLesson: 'lesson-ch5-2-4',
    },
  ],
  quizzesUnlocked: ['quiz-ch5-source-design-reasoning'],
};
