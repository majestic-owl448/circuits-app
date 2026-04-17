import type { LessonConfig } from '../../../../types/lesson.ts';
import { CHAPTER_5_METADATA } from '../../shared.ts';

// 12V / 1Ω internal + 4Ω bulb
// I = 12 / 5 = 2.4A
// V_bulb = 2.4 × 4 = 9.6V (not 12V)
// V_internal = 2.4 × 1 = 2.4V

export const lessonCh5_2_2: LessonConfig = {
  id: 'lesson-ch5-2-2',
  unitId: 'ch5-unit-2',
  title: 'Voltage Drop Under Load',
  description: 'Understand that internal resistance causes the voltage delivered to the load to drop below the battery\u2019s rated value when current is flowing.',
  stageLabel: CHAPTER_5_METADATA.stageLabel,
  prerequisites: ['lesson-ch5-2-1'],
  conceptsIntroduced: [
    'terminal voltage versus rated voltage',
    'voltage drop across internal resistance',
    'load voltage decreases as current increases',
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
      properties: { voltage: 12, internalResistance: 1 },
      name: 'Battery (12V, 1\u03a9 internal)',
      position: { x: 100, y: 250 },
      rotation: 0,
    },
    {
      id: 'bulb-1',
      type: 'bulb',
      nodeA: 'n1',
      nodeB: 'n2',
      properties: { resistance: 4 },
      name: 'Bulb',
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
      text: 'The battery here is rated at 12V, but it has 1\u03a9 of internal resistance. Before closing the switch, no current flows, so no voltage is dropped internally. A voltmeter across the terminals would read the full 12V.',
      highlights: ['battery-1'],
    },
    {
      id: 'step-2',
      text: 'Close the switch. Now current flows: I\u00a0=\u00a012\u00a0V\u00a0\u00f7\u00a05\u00a0\u03a9\u00a0=\u00a02.4A. The internal resistance drops 2.4A\u00a0\u00d7\u00a01\u00a0\u03a9\u00a0=\u00a02.4V inside the battery, leaving only 9.6V across the bulb.',
      requiredAction: { type: 'toggle-switch', componentId: 'switch-1', targetState: true },
      highlights: ['battery-1', 'bulb-1'],
    },
    {
      id: 'step-3',
      text: 'If you placed a voltmeter directly across the bulb, it would read 9.6V \u2014 not 12V. The 2.4V difference is the drop inside the source. This is called the terminal voltage: the voltage actually available at the battery\u2019s output under load.',
      highlights: ['bulb-1'],
    },
    {
      id: 'step-4',
      text: 'The larger the current draw, the bigger the internal drop. A heavier load means more current, which means more voltage lost inside the source, leaving even less for the load.',
      theoryCheck: {
        question: 'A 12V battery has 1\u03a9 internal resistance and drives a 4\u03a9 bulb. What voltage does a meter across the bulb read?',
        choices: [
          {
            id: 'tc-a',
            label: '12V \u2014 the battery maintains its full rated voltage',
            isCorrect: false,
            explanation: 'Under load, the internal resistance causes a voltage drop inside the battery. The full 12V is only available with zero current flowing.',
          },
          {
            id: 'tc-b',
            label: '9.6V \u2014 because 2.4V is dropped across the internal resistance',
            isCorrect: true,
            explanation: 'Correct! I\u00a0=\u00a02.4A, V_internal\u00a0=\u00a02.4V, V_bulb\u00a0=\u00a012\u00a0\u2212\u00a02.4\u00a0=\u00a09.6V.',
          },
          {
            id: 'tc-c',
            label: '0V \u2014 all voltage is consumed by the internal resistance',
            isCorrect: false,
            explanation: 'Only a fraction of the voltage is dropped internally. With R_load much larger than R_internal, most voltage reaches the load.',
          },
        ],
        explanation: 'Terminal voltage under load equals the rated voltage minus the drop across the internal resistance: V_terminal\u00a0=\u00a0V\u00a0\u2212\u00a0I\u00a0\u00d7\u00a0R_internal.',
      },
    },
  ],
  challenges: [
    {
      id: 'challenge-1',
      prompt: 'A voltmeter is placed across the bulb in a circuit with a 12V / 1\u03a9 internal-resistance source and a 4\u03a9 bulb. Which reading indicates that the source is dropping voltage under load?',
      type: 'choose',
      evaluationCriteria: { correctChoiceId: 'ch1-b' },
      hints: [
        'Calculate the current first: I\u00a0=\u00a0V\u00a0/\u00a0R_total.',
        'Then find V_bulb\u00a0=\u00a0I\u00a0\u00d7\u00a0R_bulb.',
      ],
      choices: [
        {
          id: 'ch1-a',
          label: '12.0V \u2014 the source maintains its rated voltage at all loads',
          isCorrect: false,
          explanation: 'An ideal source with zero internal resistance would read 12V. With internal resistance present, the terminal voltage is lower under load.',
        },
        {
          id: 'ch1-b',
          label: '9.6V \u2014 the internal resistance has dropped 2.4V inside the source',
          isCorrect: true,
          explanation: 'Correct! I\u00a0=\u00a02.4A, so V_internal\u00a0=\u00a02.4\u00a0V. The bulb receives V_bulb\u00a0=\u00a012\u00a0\u2212\u00a02.4\u00a0=\u00a09.6V.',
        },
        {
          id: 'ch1-c',
          label: '4.8V \u2014 half the source voltage is always lost to internal resistance',
          isCorrect: false,
          explanation: 'The internal drop is not always half. It depends on the ratio of R_internal to R_load. Here R_internal\u00a0(1\u03a9) is much smaller than R_load\u00a0(4\u03a9), so less than half is dropped internally.',
        },
      ],
    },
  ],
  theoryContent: [
    {
      title: 'Voltage Drop Under Load',
      content: 'When current flows through a source\u2019s internal resistance, a voltage drop occurs inside the battery itself. The voltage at the battery terminals under load is less than the rated voltage: V_terminal\u00a0=\u00a0V_rated\u00a0\u2212\u00a0I\u00a0\u00d7\u00a0R_internal.',
    },
    {
      title: 'No-Load vs Under-Load Voltage',
      content: 'With no current flowing (open circuit), the full rated voltage appears at the terminals. Once a load draws current, the terminal voltage drops in proportion to the current and the internal resistance.',
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
      id: 'theory-voltage-drop-under-load',
      title: 'Voltage Drop Under Load',
      content: 'When current flows through a source, internal resistance causes a voltage drop inside the battery itself. Terminal voltage under load equals the rated voltage minus the internal drop: V_terminal\u00a0=\u00a0V_rated\u00a0\u2212\u00a0I\u00a0\u00d7\u00a0R_internal.',
      sourceLesson: 'lesson-ch5-2-2',
    },
  ],
  quizzesUnlocked: ['quiz-ch5-source-drop-basics'],
};
