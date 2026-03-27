import type { LessonConfig } from '../../../../types/lesson.ts';
import { STANDARD_NODES } from '../../../shared.ts';
import type { CircuitComponent } from '../../../../types/circuit.ts';

const circuit: CircuitComponent[] = [
  { id: 'battery-1', type: 'battery', nodeA: 'n1', nodeB: 'n4', properties: { voltage: 9 }, name: 'Battery', position: { x: 100, y: 200 }, rotation: 0 },
  { id: 'wire-1', type: 'wire', nodeA: 'n1', nodeB: 'n2', properties: {}, name: 'Wire', position: { x: 300, y: 100 }, rotation: 0 },
  { id: 'bulb-1', type: 'bulb', nodeA: 'n2', nodeB: 'n3', properties: { resistance: 45 }, name: 'Bulb', position: { x: 500, y: 200 }, rotation: 0 },
  { id: 'switch-1', type: 'switch', nodeA: 'n4', nodeB: 'n3', properties: { isClosed: true }, name: 'Switch', position: { x: 300, y: 400 }, rotation: 0 },
];

export const lessonCh2_3_2: LessonConfig = {
  id: 'lesson-ch2-3-2',
  unitId: 'ch2-unit-3',
  title: 'Calculating Power With Voltage and Current',
  description: 'Calculate power using P = VI when voltage and current are known.',
  stageLabel: 'Early Intermediate',
  prerequisites: ['lesson-ch2-3-1'],
  conceptsIntroduced: ['direct power calculation', 'one circuit can be described with more than one connected quantity'],
  initialCircuit: circuit,
  initialNodes: STANDARD_NODES,
  steps: [
    {
      id: 'step-1',
      text: 'Now that you know what power means, it is time to calculate it. The formula is P = V \u00D7 I. You need voltage and current to find power.',
    },
    {
      id: 'step-2',
      text: 'This circuit has a 9V battery. If the current is 0.2A, then P = 9 \u00D7 0.2 = 1.8W. The bulb uses 1.8 watts of power.',
      highlights: ['battery-1', 'bulb-1'],
    },
    {
      id: 'step-3',
      text: 'Notice that one circuit can be described by multiple connected quantities: voltage, current, resistance, and power. They are all related through the formulas V = IR and P = VI.',
      theoryCheck: {
        question: 'Which formula do you use to calculate power from voltage and current?',
        choices: [
          { id: 'tc-a', label: 'P = V \u00D7 I', isCorrect: true, explanation: 'Correct! Power equals voltage times current.' },
          { id: 'tc-b', label: 'P = V / I', isCorrect: false, explanation: 'Dividing V by I gives resistance, not power. Power is V times I.' },
          { id: 'tc-c', label: 'P = I / V', isCorrect: false, explanation: 'That is not a standard formula. Power equals voltage times current: P = VI.' },
        ],
        explanation: 'P = VI is the power formula. Multiply voltage by current to find how much energy the load uses per second.',
      },
    },
  ],
  challenges: [
    {
      id: 'challenge-1',
      prompt: 'A circuit has a 9V battery and a current of 0.2A. Calculate the power used by the load.',
      type: 'calculate',
      evaluationCriteria: {},
      calculationTarget: {
        quantity: 'power',
        expectedValue: 1.8,
        tolerance: 0.05,
        unit: 'W',
        formula: 'P = V \u00D7 I = 9 \u00D7 0.2',
      },
      detailedBreakdown: {
        steps: [
          { label: 'Identify known values', formula: 'V = 9V, I = 0.2A', result: 'Known: V and I' },
          { label: 'Choose formula', formula: 'P = V \u00D7 I', result: 'Direct calculation' },
          { label: 'Substitute values', formula: 'P = 9 \u00D7 0.2', result: 'P = 1.8W' },
        ],
      },
      hints: [
        'Use P = V \u00D7 I. You know V = 9 and I = 0.2.',
        'Multiply 9 by 0.2. What do you get?',
      ],
    },
    {
      id: 'challenge-2',
      prompt: 'A 12V battery drives 0.4A of current. Which power value matches this circuit?',
      type: 'choose',
      evaluationCriteria: { correctChoiceId: 'ch2-b' },
      hints: [
        'Use P = V \u00D7 I with V = 12 and I = 0.4.',
        '12 \u00D7 0.4 = 4.8.',
      ],
      choices: [
        { id: 'ch2-a', label: '30W', isCorrect: false, explanation: '30 is the resistance (12 / 0.4), not the power. Power is V \u00D7 I.' },
        { id: 'ch2-b', label: '4.8W', isCorrect: true, explanation: 'Correct! P = 12 \u00D7 0.4 = 4.8W.' },
        { id: 'ch2-c', label: '0.033W', isCorrect: false, explanation: 'That is far too small. P = 12 \u00D7 0.4 = 4.8W.' },
      ],
    },
  ],
  theoryContent: [
    {
      title: 'Calculating power from voltage and current',
      content: 'When you know voltage (V) and current (I), find power with P = V \u00D7 I. For example: 9V \u00D7 0.2A = 1.8W.',
      formula: 'P = VI',
    },
  ],
  sandboxUnlocks: ['power-evaluation'],
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
      id: 'theory-ch2-calculating-power',
      title: 'Calculating power from voltage and current',
      content: 'Power is calculated with P = V \u00D7 I. If a 9V battery drives 0.2A of current, the load uses P = 9 \u00D7 0.2 = 1.8 watts. This tells you the rate of energy conversion in the circuit. A higher power means the load converts more electrical energy per second into light, heat, or other forms.',
      sourceLesson: 'lesson-ch2-3-2',
    },
  ],
  quizzesUnlocked: ['quiz-ch2-power-calculation'],
};
