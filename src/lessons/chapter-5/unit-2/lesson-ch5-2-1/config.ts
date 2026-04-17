import type { LessonConfig } from '../../../../types/lesson.ts';
import { CHAPTER_5_METADATA } from '../../shared.ts';

// Ideal (r=0): I = 12V / 4Ω = 3.0A, V_bulb = 12V
// Non-ideal (r=1): I = 12V / (4+1)Ω = 2.4A, V_bulb = 9.6V

export const lessonCh5_2_1: LessonConfig = {
  id: 'lesson-ch5-2-1',
  unitId: 'ch5-unit-2',
  title: 'The Source Is Not Perfect',
  description: 'Understand that a battery has internal resistance that reduces its effective output under load.',
  stageLabel: CHAPTER_5_METADATA.stageLabel,
  prerequisites: ['lesson-ch5-1-2'],
  conceptsIntroduced: [
    'internal resistance of the source',
    'source performance changes under load',
    'delivered current can differ from ideal prediction',
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
      name: 'Battery',
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
      text: 'An ideal 12V battery driving a 4\u03a9 bulb would produce exactly 3.0A of current. But this battery has 1\u03a9 of internal resistance \u2014 hidden resistance inside the source itself.',
      highlights: ['battery-1'],
    },
    {
      id: 'step-2',
      text: 'Close the switch. With 1\u03a9 of internal resistance added to the 4\u03a9 bulb, the total resistance in the loop is 5\u03a9. The current is now 12\u00a0V\u00a0\u00f7\u00a05\u00a0\u03a9\u00a0=\u00a02.4A \u2014 less than the ideal 3.0A.',
      requiredAction: { type: 'toggle-switch', componentId: 'switch-1', targetState: true },
      highlights: ['switch-1', 'bulb-1'],
    },
    {
      id: 'step-3',
      text: 'The voltage across the bulb is also lower: 2.4A \u00d7 4\u03a9 = 9.6V, not 12V. The remaining 2.4V is dropped across the battery\u2019s own internal resistance. The label on the battery says 12V, but under load, it delivers less.',
      highlights: ['battery-1', 'bulb-1'],
    },
    {
      id: 'step-4',
      text: 'This is the key insight: a source with internal resistance does not behave like a perfect voltage source once current starts flowing. The heavier the load, the bigger the internal drop.',
      theoryCheck: {
        question: 'What effect does internal resistance have on the current delivered to a load?',
        choices: [
          {
            id: 'tc-a',
            label: 'It increases current because the battery compensates for the extra resistance',
            isCorrect: false,
            explanation: 'Internal resistance adds to total resistance, which reduces current. Batteries do not compensate for their own losses.',
          },
          {
            id: 'tc-b',
            label: 'It decreases current because it adds to the total resistance in the loop',
            isCorrect: true,
            explanation: 'Correct! I\u00a0=\u00a0V\u00a0/\u00a0(R_load\u00a0+\u00a0R_internal). More total resistance means less current.',
          },
          {
            id: 'tc-c',
            label: 'It has no effect because internal resistance is inside the battery, not in the circuit',
            isCorrect: false,
            explanation: 'Internal resistance is still part of the loop. Current flows through it, so it contributes to total resistance and reduces current.',
          },
        ],
        explanation: 'Internal resistance adds to the total loop resistance, reducing both current and the voltage delivered to the load.',
      },
    },
  ],
  challenges: [
    {
      id: 'challenge-1',
      prompt: 'A 12V battery has 1\u03a9 of internal resistance and drives a 4\u03a9 bulb. Why does the bulb receive less current than a purely ideal 12V source would deliver?',
      type: 'choose',
      evaluationCriteria: { correctChoiceId: 'ch1-b' },
      hints: [
        'Total resistance in the loop includes both the bulb and the internal resistance.',
        'Apply I\u00a0=\u00a0V\u00a0/\u00a0R_total.',
      ],
      choices: [
        {
          id: 'ch1-a',
          label: 'The battery uses some energy internally before any reaches the bulb',
          isCorrect: false,
          explanation: 'Energy is dissipated in the internal resistance, but the reason for less current is increased total resistance, not energy being "used up" first.',
        },
        {
          id: 'ch1-b',
          label: 'The internal resistance adds to the total loop resistance, increasing R_total and reducing current',
          isCorrect: true,
          explanation: 'Correct! With R_load\u00a0=\u00a04\u03a9 and R_internal\u00a0=\u00a01\u03a9, R_total\u00a0=\u00a05\u03a9. Current drops from 3.0A (ideal) to 2.4A (non-ideal).',
        },
        {
          id: 'ch1-c',
          label: 'The battery voltage drops to zero under load because it has internal resistance',
          isCorrect: false,
          explanation: 'Voltage does not drop to zero. Internal resistance causes a partial voltage drop across itself, reducing the voltage delivered to the load but not eliminating it.',
        },
      ],
    },
  ],
  theoryContent: [
    {
      title: 'Internal Resistance of the Source',
      content: 'A real battery behaves as though it has a small resistor connected in series with an ideal voltage source. When current flows, this internal resistance causes a voltage drop inside the battery, reducing the voltage available to the external circuit.',
    },
    {
      title: 'Ideal vs Non-Ideal Source Comparison',
      content: 'An ideal source delivers its full rated voltage regardless of load. A non-ideal source delivers less voltage (and less current) as the load draws more current. The difference is the voltage drop across the internal resistance.',
    },
  ],
  sandboxUnlocks: ['non-ideal'],
  availableActions: ['toggle-switch'],
  currentOverlayAvailable: true,
  showFormulaPanel: true,
  formulasShown: [
    {
      formula: 'I = V \u00f7 (R\u2097\u2092\u2090\u2091 + R\u1d62\u2099\u209c)',
      symbols: [
        { symbol: 'I', name: 'Current', unit: 'A' },
        { symbol: 'V', name: 'Source voltage', unit: 'V' },
        { symbol: 'R\u2097\u2092\u2090\u2091', name: 'Load resistance', unit: '\u03a9' },
        { symbol: 'R\u1d62\u2099\u209c', name: 'Internal resistance', unit: '\u03a9' },
      ],
    },
  ],
  theoryPageAdditions: [
    {
      id: 'theory-internal-resistance',
      title: 'Internal Resistance of the Source',
      content: 'A real battery includes a small internal resistance in series with its ideal voltage. Under load, this internal resistance causes a voltage drop inside the battery, so the terminal voltage delivered to the circuit is less than the nominal rated voltage.',
      sourceLesson: 'lesson-ch5-2-1',
    },
  ],
  quizzesUnlocked: ['quiz-ch5-internal-resistance-basics'],
};
