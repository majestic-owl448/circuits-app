import type { LessonConfig } from '../../../../types/lesson.ts';
import { STANDARD_NODES } from '../../../shared.ts';
import type { CircuitComponent } from '../../../../types/circuit.ts';

const circuit: CircuitComponent[] = [
  { id: 'battery-1', type: 'battery', nodeA: 'n1', nodeB: 'n4', properties: { voltage: 12 }, name: 'Battery', position: { x: 100, y: 200 }, rotation: 0 },
  { id: 'wire-1', type: 'wire', nodeA: 'n1', nodeB: 'n2', properties: {}, name: 'Wire', position: { x: 300, y: 100 }, rotation: 0 },
  { id: 'bulb-1', type: 'bulb', nodeA: 'n2', nodeB: 'n3', properties: { resistance: 40 }, name: 'Bulb', position: { x: 500, y: 200 }, rotation: 0 },
  { id: 'switch-1', type: 'switch', nodeA: 'n4', nodeB: 'n3', properties: { isClosed: true }, name: 'Switch', position: { x: 300, y: 400 }, rotation: 0 },
];

export const lessonCh2_2_3: LessonConfig = {
  id: 'lesson-ch2-2-3',
  unitId: 'ch2-unit-2',
  title: 'Solving for Voltage From the Circuit',
  description: 'Solve for voltage when current and resistance are known using Ohm\'s Law.',
  stageLabel: 'Early Intermediate',
  prerequisites: ['lesson-ch2-2-2'],
  conceptsIntroduced: ['voltage can also be the unknown', 'same relationship, different target'],
  initialCircuit: circuit,
  initialNodes: STANDARD_NODES,
  steps: [
    {
      id: 'step-1',
      text: 'You have solved for current and for resistance. Now you will solve for voltage. Sometimes the source voltage is the unknown, and you know the current and resistance instead.',
    },
    {
      id: 'step-2',
      text: 'The formula V = IR is already in the right form. If you know I and R, just multiply them to get V. No rearranging needed this time.',
    },
    {
      id: 'step-3',
      text: 'Example: a circuit has I = 0.3A flowing through a 40\u03A9 load. What is the source voltage? V = I \u00D7 R = 0.3 \u00D7 40 = 12V.',
      theoryCheck: {
        question: 'When you know current and resistance, how do you find voltage?',
        choices: [
          { id: 'tc-a', label: 'V = I \u00D7 R', isCorrect: true, explanation: 'Correct! Multiplying current by resistance gives voltage.' },
          { id: 'tc-b', label: 'V = I / R', isCorrect: false, explanation: 'Dividing current by resistance does not give voltage. Voltage equals current times resistance.' },
          { id: 'tc-c', label: 'V = R / I', isCorrect: false, explanation: 'Dividing resistance by current does not give voltage. Use V = IR.' },
        ],
        explanation: 'V = IR is the original form of Ohm\'s Law. When I and R are known, multiply them directly to find V.',
      },
    },
  ],
  challenges: [
    {
      id: 'challenge-1',
      prompt: 'A circuit has a current of 0.3A flowing through a 40\u03A9 load. Calculate the source voltage.',
      type: 'calculate',
      evaluationCriteria: {},
      calculationTarget: {
        quantity: 'voltage',
        expectedValue: 12,
        tolerance: 0.1,
        unit: 'V',
        formula: 'V = I \u00D7 R = 0.3 \u00D7 40',
      },
      detailedBreakdown: {
        steps: [
          { label: 'Identify known values', formula: 'I = 0.3A, R = 40\u03A9', result: 'Known: I and R' },
          { label: 'Choose formula', formula: 'V = IR', result: 'Already in correct form' },
          { label: 'Substitute values', formula: 'V = 0.3 \u00D7 40', result: 'V = 12V' },
        ],
      },
      hints: [
        'Use V = I \u00D7 R. You know I = 0.3 and R = 40.',
        'Multiply 0.3 by 40. What do you get?',
      ],
    },
    {
      id: 'challenge-2',
      prompt: 'A load of 60\u03A9 carries 0.15A of current. What source voltage is needed?',
      type: 'choose',
      evaluationCriteria: { correctChoiceId: 'ch2-b' },
      hints: [
        'Use V = I \u00D7 R with I = 0.15 and R = 60.',
        '0.15 \u00D7 60 = 9.',
      ],
      choices: [
        { id: 'ch2-a', label: '4V', isCorrect: false, explanation: '4 is not the product of 0.15 and 60. Check your multiplication.' },
        { id: 'ch2-b', label: '9V', isCorrect: true, explanation: 'Correct! V = 0.15 \u00D7 60 = 9V.' },
        { id: 'ch2-c', label: '400V', isCorrect: false, explanation: '400 is far too large. V = 0.15 \u00D7 60 = 9V.' },
      ],
    },
  ],
  theoryContent: [
    {
      title: 'Using Ohm\'s Law to find voltage',
      content: 'When you know current (I) and resistance (R), find voltage with V = I \u00D7 R. For example: 0.3A \u00D7 40\u03A9 = 12V.',
      formula: 'V = IR',
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
      id: 'theory-ch2-ohms-law-voltage',
      title: 'Using Ohm\'s Law to find voltage',
      content: 'When you know the current flowing through a circuit and the resistance of the load, you can find the source voltage using V = IR directly. For example, if 0.3A flows through a 40\u03A9 load, V = 0.3 \u00D7 40 = 12V. This form requires no rearrangement because V = IR is already solved for voltage.',
      sourceLesson: 'lesson-ch2-2-3',
    },
  ],
  quizzesUnlocked: ['quiz-ch2-voltage-calculation'],
};
