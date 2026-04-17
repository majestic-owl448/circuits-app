import type { LessonConfig } from '../../../../types/lesson.ts';
import { CHAPTER_5_METADATA } from '../../shared.ts';

// Source A: 12V / 2Ω internal + 4Ω bulb
// I_A = 12 / 6 = 2.0A, V_terminal = 12 - 2.0×2 = 8.0V
//
// Source B (reference): 12V / 0.5Ω internal + 4Ω bulb
// I_B = 12 / 4.5 ≈ 2.67A, V_terminal = 12 - 2.67×0.5 ≈ 10.7V
//
// Challenge: given no-load=12V vs loaded readings, identify which source has greater internal resistance.
// Source with bigger drop (A) has higher R_internal.

export const lessonCh5_2_3: LessonConfig = {
  id: 'lesson-ch5-2-3',
  unitId: 'ch5-unit-2',
  title: 'Diagnose Source Behavior With Meters',
  description: 'Use no-load and under-load voltage readings to detect and identify significant internal resistance in a source.',
  stageLabel: CHAPTER_5_METADATA.stageLabel,
  prerequisites: ['lesson-ch5-2-2'],
  conceptsIntroduced: [
    'comparing no-load and loaded voltage to detect internal resistance',
    'ammeter correlation with voltage drop',
    'measurement as a diagnostic tool for non-ideal source behavior',
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
      text: 'This battery is rated 12V but has a significant internal resistance (2\u03a9). With the switch open, no current flows. A voltmeter across the battery reads 12V \u2014 the full rated voltage, because no internal drop occurs yet.',
      highlights: ['battery-1'],
    },
    {
      id: 'step-2',
      text: 'Now close the switch. Current flows and an ammeter in the loop reads 2.0A (I\u00a0=\u00a012\u00a0/\u00a06\u00a0=\u00a02.0A). At the same time, a voltmeter across the bulb reads only 8.0V \u2014 a drop of 4V from the no-load reading.',
      requiredAction: { type: 'toggle-switch', componentId: 'switch-1', targetState: true },
      highlights: ['battery-1', 'bulb-1'],
    },
    {
      id: 'step-3',
      text: 'The 4V drop tells us exactly what happened inside: V_internal\u00a0=\u00a0I\u00a0\u00d7\u00a0R_internal\u00a0=\u00a02.0A\u00a0\u00d7\u00a02\u00a0\u03a9\u00a0=\u00a04V. The larger the difference between no-load and loaded voltage, the higher the internal resistance.',
      highlights: ['battery-1'],
    },
    {
      id: 'step-4',
      text: 'This technique \u2014 comparing no-load voltage with loaded voltage \u2014 is a practical diagnostic method. If two sources show different voltage drops for the same current draw, the one with the larger drop has higher internal resistance.',
      theoryCheck: {
        question: 'Source X reads 12V open-circuit and 11V under 2A load. Source Y reads 12V open-circuit and 8V under 2A load. Which source has higher internal resistance?',
        choices: [
          {
            id: 'tc-a',
            label: 'Source X, because it delivers more voltage to the load',
            isCorrect: false,
            explanation: 'Higher delivered voltage means less internal drop, so Source X actually has lower internal resistance.',
          },
          {
            id: 'tc-b',
            label: 'Source Y, because it shows a larger voltage drop under load',
            isCorrect: true,
            explanation: 'Correct! Source Y drops 4V under 2A, giving R_internal\u00a0=\u00a04V\u00a0/\u00a02A\u00a0=\u00a02\u03a9. Source X drops only 1V, giving R_internal\u00a0=\u00a00.5\u03a9.',
          },
          {
            id: 'tc-c',
            label: 'Both are the same because both read 12V open-circuit',
            isCorrect: false,
            explanation: 'No-load voltage tells you the rated EMF, not the internal resistance. Internal resistance is revealed only when current flows and a voltage drop appears.',
          },
        ],
        explanation: 'Internal resistance can be estimated as: R_internal\u00a0=\u00a0(V_open\u00a0\u2212\u00a0V_loaded)\u00a0/\u00a0I.',
      },
    },
  ],
  challenges: [
    {
      id: 'challenge-1',
      prompt: 'Two 12V sources are tested with the same 4\u03a9 load. Source A: ammeter reads 2.0A, voltmeter across load reads 8.0V. Source B: ammeter reads 2.67A, voltmeter across load reads 10.7V. Which source has greater internal resistance?',
      type: 'choose',
      evaluationCriteria: { correctChoiceId: 'ch1-a' },
      hints: [
        'Calculate the internal drop: V_internal\u00a0=\u00a0V_rated\u00a0\u2212\u00a0V_load.',
        'Then R_internal\u00a0=\u00a0V_internal\u00a0/\u00a0I.',
      ],
      choices: [
        {
          id: 'ch1-a',
          label: 'Source A \u2014 its load voltage (8.0V) is much lower, indicating a larger internal drop',
          isCorrect: true,
          explanation: 'Correct! Source A: V_internal\u00a0=\u00a04V, I\u00a0=\u00a02.0A \u2192 R_int\u00a0=\u00a02\u03a9. Source B: V_internal\u00a0\u2248\u00a01.3V, I\u00a0\u2248\u00a02.67A \u2192 R_int\u00a0\u2248\u00a00.5\u03a9.',
        },
        {
          id: 'ch1-b',
          label: 'Source B \u2014 it delivers more current so it must have higher internal resistance',
          isCorrect: false,
          explanation: 'More current delivered actually means less internal resistance is impeding the flow. Source B has lower R_internal, which is why it delivers more current.',
        },
        {
          id: 'ch1-c',
          label: 'Both are equal because both are rated 12V',
          isCorrect: false,
          explanation: 'Rated voltage tells you the EMF, not the internal resistance. Sources with the same EMF can have very different internal resistances.',
        },
      ],
    },
  ],
  theoryContent: [
    {
      title: 'Diagnosing Source Internal Resistance With Meters',
      content: 'To detect internal resistance, compare the open-circuit voltage (no load, switch open) with the terminal voltage under load. The difference is the internal drop. Dividing by the current gives: R_internal\u00a0=\u00a0(V_open\u00a0\u2212\u00a0V_loaded)\u00a0/\u00a0I.',
    },
    {
      title: 'Measurement as Diagnostic Evidence',
      content: 'Meters do more than verify expected values. They can reveal hidden properties like internal resistance that are not directly labeled on a component. A larger no-load to loaded voltage difference is direct evidence of higher internal resistance.',
    },
  ],
  sandboxUnlocks: [],
  availableActions: ['toggle-switch'],
  currentOverlayAvailable: true,
  showFormulaPanel: true,
  formulasShown: [
    {
      formula: 'R\u1d62\u2099\u209c = (V\u2092\u209a\u2091\u2099 \u2212 V\u2097\u2092\u2090\u2091) \u00f7 I',
      symbols: [
        { symbol: 'R\u1d62\u2099\u209c', name: 'Internal resistance', unit: '\u03a9' },
        { symbol: 'V\u2092\u209a\u2091\u2099', name: 'Open-circuit voltage', unit: 'V' },
        { symbol: 'V\u2097\u2092\u2090\u2091', name: 'Voltage across load', unit: 'V' },
        { symbol: 'I', name: 'Current', unit: 'A' },
      ],
    },
  ],
  theoryPageAdditions: [
    {
      id: 'theory-source-diagnosis-meters',
      title: 'Troubleshooting and Investigation: Diagnosing Source Behavior With Meters',
      content: 'Comparing open-circuit voltage with loaded terminal voltage reveals internal resistance. The voltage difference under a known current gives R_internal\u00a0=\u00a0\u0394V\u00a0/\u00a0I. A larger drop for the same current indicates higher internal resistance.',
      sourceLesson: 'lesson-ch5-2-3',
    },
  ],
  quizzesUnlocked: ['quiz-ch5-meter-source-diagnosis'],
};
