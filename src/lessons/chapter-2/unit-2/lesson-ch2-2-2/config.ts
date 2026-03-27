import type { LessonConfig } from '../../../../types/lesson.ts';
import { STANDARD_NODES } from '../../../shared.ts';
import type { CircuitComponent } from '../../../../types/circuit.ts';

const circuit: CircuitComponent[] = [
  { id: 'battery-1', type: 'battery', nodeA: 'n1', nodeB: 'n4', properties: { voltage: 12 }, name: 'Battery', position: { x: 100, y: 200 }, rotation: 0 },
  { id: 'wire-1', type: 'wire', nodeA: 'n1', nodeB: 'n2', properties: {}, name: 'Wire', position: { x: 300, y: 100 }, rotation: 0 },
  { id: 'bulb-1', type: 'bulb', nodeA: 'n2', nodeB: 'n3', properties: { resistance: 30 }, name: 'Bulb', position: { x: 500, y: 200 }, rotation: 0 },
  { id: 'switch-1', type: 'switch', nodeA: 'n4', nodeB: 'n3', properties: { isClosed: true }, name: 'Switch', position: { x: 300, y: 400 }, rotation: 0 },
];

export const lessonCh2_2_2: LessonConfig = {
  id: 'lesson-ch2-2-2',
  unitId: 'ch2-unit-2',
  title: 'Solving for Resistance',
  description: 'Solve for resistance when voltage and current are known using Ohm\'s Law.',
  stageLabel: 'Early Intermediate',
  prerequisites: ['lesson-ch2-2-1'],
  conceptsIntroduced: ['a formula can be used to find different unknowns', 'the learner must identify the target quantity first'],
  initialCircuit: circuit,
  initialNodes: STANDARD_NODES,
  steps: [
    {
      id: 'step-1',
      text: 'In the previous lesson you solved for current. Now you will solve for the other unknown: resistance. Sometimes you know the voltage and the current, and you need to find what resistance would produce that current.',
      highlights: ['bulb-1'],
    },
    {
      id: 'step-2',
      text: 'Start with V = IR. If you know V and I, rearrange to find R: divide both sides by I to get R = V / I.',
    },
    {
      id: 'step-3',
      text: 'Example: a 12V battery drives 0.4A of current. What is the resistance? R = V / I = 12 / 0.4 = 30\u03A9. The load has 30 ohms of resistance.',
      theoryCheck: {
        question: 'To find resistance when you know voltage and current, which rearrangement do you use?',
        choices: [
          { id: 'tc-a', label: 'R = V / I', isCorrect: true, explanation: 'Correct! Dividing voltage by current gives you the resistance.' },
          { id: 'tc-b', label: 'R = V \u00D7 I', isCorrect: false, explanation: 'Multiplying V by I gives power, not resistance. Resistance equals voltage divided by current.' },
          { id: 'tc-c', label: 'R = I / V', isCorrect: false, explanation: 'That is inverted. Resistance equals voltage divided by current, not current divided by voltage.' },
        ],
        explanation: 'From V = IR, dividing both sides by I gives R = V / I. This is the formula you use when voltage and current are known.',
      },
    },
  ],
  challenges: [
    {
      id: 'challenge-1',
      prompt: 'A circuit has a 12V battery and a current of 0.4A. Calculate the resistance of the load.',
      type: 'calculate',
      evaluationCriteria: {},
      calculationTarget: {
        quantity: 'resistance',
        expectedValue: 30,
        tolerance: 0.1,
        unit: '\u03A9',
        formula: 'R = V / I = 12 / 0.4',
      },
      detailedBreakdown: {
        steps: [
          { label: 'Identify known values', formula: 'V = 12V, I = 0.4A', result: 'Known: V and I' },
          { label: 'Choose formula', formula: 'V = IR \u2192 R = V / I', result: 'Rearranged for R' },
          { label: 'Substitute values', formula: 'R = 12 / 0.4', result: 'R = 30\u03A9' },
        ],
      },
      hints: [
        'Use R = V / I. You know V = 12 and I = 0.4.',
        'Divide 12 by 0.4. What do you get?',
      ],
    },
    {
      id: 'challenge-2',
      prompt: 'A 9V battery drives 0.3A through a load. Which resistance value fits this circuit?',
      type: 'choose',
      evaluationCriteria: { correctChoiceId: 'ch2-b' },
      hints: [
        'Use R = V / I with V = 9 and I = 0.3.',
        '9 divided by 0.3 equals 30.',
      ],
      choices: [
        { id: 'ch2-a', label: '3\u03A9', isCorrect: false, explanation: '3 would be 9 \u00D7 0.3, which is power (in a different formula), not resistance.' },
        { id: 'ch2-b', label: '30\u03A9', isCorrect: true, explanation: 'Correct! R = 9 / 0.3 = 30\u03A9.' },
        { id: 'ch2-c', label: '2.7\u03A9', isCorrect: false, explanation: '2.7 would be 9 \u00D7 0.3, which gives power in watts. Resistance is V / I.' },
      ],
    },
  ],
  theoryContent: [
    {
      title: 'Using Ohm\'s Law to find resistance',
      content: 'When you know voltage (V) and current (I), find resistance with R = V / I. For example: 12V / 0.4A = 30\u03A9.',
      formula: 'R = V / I',
    },
  ],
  sandboxUnlocks: [],
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
  ],
  theoryPageAdditions: [
    {
      id: 'theory-ch2-ohms-law-resistance',
      title: 'Using Ohm\'s Law to find resistance',
      content: 'When you know the voltage of the source and the current flowing through the circuit, you can find the resistance using Ohm\'s Law rearranged: R = V / I. For example, a 12V battery driving 0.4A of current means the load has R = 12 / 0.4 = 30 ohms. This is useful when you know the electrical conditions and need to identify or verify the load.',
      sourceLesson: 'lesson-ch2-2-2',
    },
  ],
  quizzesUnlocked: ['quiz-ch2-resistance-calculation'],
};
