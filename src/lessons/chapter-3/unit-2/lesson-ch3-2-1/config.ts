import type { LessonConfig } from '../../../../types/lesson.ts';
import { SERIES_NODES, SERIES_TWO_BULBS } from '../../../shared.ts';
import type { CircuitComponent } from '../../../../types/circuit.ts';

const circuit: CircuitComponent[] = SERIES_TWO_BULBS.map(c =>
  c.id === 'switch-1' ? { ...c, properties: { isClosed: true } } : c,
);

export const lessonCh3_2_1: LessonConfig = {
  id: 'lesson-ch3-2-1',
  unitId: 'ch3-unit-2',
  title: 'Total Resistance in Series',
  description: 'Series resistance is the sum of individual resistances. Calculate R_total = R1 + R2 for a two-bulb series circuit.',
  stageLabel: 'Early Intermediate',
  prerequisites: ['lesson-ch3-1-3'],
  conceptsIntroduced: ['total resistance in series is the sum', 'adding load increases total resistance'],
  initialCircuit: circuit,
  initialNodes: SERIES_NODES,
  steps: [
    {
      id: 'step-1',
      text: 'This circuit has two 45\u03A9 bulbs connected in series. The switch is closed and current flows through both bulbs one after the other. How much total resistance does the current face?',
      highlights: ['bulb-1', 'bulb-2'],
      showCurrentOverlay: true,
    },
    {
      id: 'step-2',
      text: 'In a series circuit, the total resistance is the sum of all individual resistances. The formula is: R_total = R\u2081 + R\u2082.',
    },
    {
      id: 'step-3',
      text: 'Substitute the values: R_total = 45\u03A9 + 45\u03A9 = 90\u03A9. The battery sees a total resistance of 90 ohms.',
      theoryCheck: {
        question: 'How do you find total resistance in a series circuit?',
        choices: [
          { id: 'tc-a', label: 'Add the individual resistances', isCorrect: true, explanation: 'Correct! In series, R_total = R\u2081 + R\u2082. The resistances add up.' },
          { id: 'tc-b', label: 'Multiply the individual resistances', isCorrect: false, explanation: 'Multiplying resistances is not how series resistance works. You add them together.' },
          { id: 'tc-c', label: 'Take the average of the resistances', isCorrect: false, explanation: 'Averaging would give a smaller value. In series, you add them: R_total = R\u2081 + R\u2082.' },
        ],
        explanation: 'In a series circuit, current must pass through every resistor in sequence, so the total resistance is the sum of all individual resistances.',
      },
    },
    {
      id: 'step-4',
      text: 'Notice that adding a second bulb increased the total resistance from 45\u03A9 (one bulb) to 90\u03A9 (two bulbs). Every component you add in series increases the total resistance the source must push current through.',
    },
  ],
  challenges: [
    {
      id: 'challenge-1',
      prompt: 'Two 45\u03A9 bulbs are connected in series. What is the total resistance of the circuit?',
      type: 'calculate',
      evaluationCriteria: {},
      calculationTarget: {
        quantity: 'resistance',
        expectedValue: 90,
        tolerance: 1,
        unit: '\u03A9',
        formula: 'R_total = R\u2081 + R\u2082 = 45 + 45',
      },
      detailedBreakdown: {
        steps: [
          { label: 'Identify resistances', formula: 'R\u2081 = 45\u03A9, R\u2082 = 45\u03A9', result: 'Two resistances in series' },
          { label: 'Apply series formula', formula: 'R_total = R\u2081 + R\u2082', result: 'R_total = 45 + 45' },
          { label: 'Calculate', formula: 'R_total = 90\u03A9', result: '90\u03A9' },
        ],
      },
      hints: [
        'In series, total resistance is the sum of individual resistances.',
        'Add 45 + 45. What do you get?',
      ],
    },
    {
      id: 'challenge-2',
      prompt: 'A series circuit has two 30\u03A9 bulbs. What is the total resistance?',
      type: 'choose',
      evaluationCriteria: { correctChoiceId: 'ch-b' },
      hints: [
        'Use R_total = R\u2081 + R\u2082 with both resistances equal to 30\u03A9.',
        '30 + 30 = ?',
      ],
      choices: [
        { id: 'ch-a', label: '30\u03A9', isCorrect: false, explanation: '30\u03A9 is the resistance of just one bulb. In series, you add both: 30 + 30 = 60\u03A9.' },
        { id: 'ch-b', label: '60\u03A9', isCorrect: true, explanation: 'Correct! R_total = 30 + 30 = 60\u03A9.' },
        { id: 'ch-c', label: '15\u03A9', isCorrect: false, explanation: '15\u03A9 would result from a parallel formula, not series. In series, resistances add: 30 + 30 = 60\u03A9.' },
      ],
    },
  ],
  theoryContent: [
    {
      title: 'Equivalent resistance in series',
      content: 'When resistors are connected in series, the total resistance is the sum of all individual resistances: R_total = R\u2081 + R\u2082 + ... For two 45\u03A9 bulbs in series, R_total = 45 + 45 = 90\u03A9.',
      formula: 'R_total = R\u2081 + R\u2082',
    },
    {
      title: 'Adding loads increases total resistance',
      content: 'Each component added in series increases the total resistance the source must drive current through. More series resistance means less current for a given voltage.',
    },
  ],
  sandboxUnlocks: ['series-total-resistance'],
  availableActions: ['toggle-switch', 'drag-to-place', 'connect-wire'],
  currentOverlayAvailable: true,
  showFormulaPanel: true,
  formulasShown: [
    {
      formula: 'V = IR',
      symbols: [
        { symbol: 'V', name: 'Voltage', unit: 'volts (V)' },
        { symbol: 'I', name: 'Current', unit: 'amperes (A)' },
        { symbol: 'R', name: 'Resistance', unit: 'ohms (\u03A9)' },
      ],
    },
    {
      formula: 'P = VI',
      symbols: [
        { symbol: 'P', name: 'Power', unit: 'watts (W)' },
        { symbol: 'V', name: 'Voltage', unit: 'volts (V)' },
        { symbol: 'I', name: 'Current', unit: 'amperes (A)' },
      ],
    },
    {
      formula: 'R_total = R\u2081 + R\u2082',
      symbols: [
        { symbol: 'R_total', name: 'Total resistance', unit: 'ohms (\u03A9)' },
        { symbol: 'R\u2081', name: 'Resistance 1', unit: 'ohms (\u03A9)' },
        { symbol: 'R\u2082', name: 'Resistance 2', unit: 'ohms (\u03A9)' },
      ],
    },
  ],
  theoryPageAdditions: [
    {
      id: 'theory-ch3-series-resistance-sum',
      title: 'Equivalent resistance in series',
      content: 'When resistors are connected in series, each one adds to the total resistance the current must overcome. The total (or equivalent) resistance is simply the sum: R_total = R\u2081 + R\u2082. For example, two 45\u03A9 bulbs in series produce R_total = 90\u03A9. This is why adding more loads in series reduces current for a fixed voltage source.',
      sourceLesson: 'lesson-ch3-2-1',
    },
  ],
  quizzesUnlocked: ['quiz-ch3-series-resistance-calc'],
};
