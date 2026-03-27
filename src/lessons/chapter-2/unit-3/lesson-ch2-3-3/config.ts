import type { LessonConfig } from '../../../../types/lesson.ts';
import { STANDARD_NODES } from '../../../shared.ts';
import type { CircuitComponent } from '../../../../types/circuit.ts';

const circuit: CircuitComponent[] = [
  { id: 'battery-1', type: 'battery', nodeA: 'n1', nodeB: 'n4', properties: { voltage: 12 }, name: 'Battery', position: { x: 100, y: 200 }, rotation: 0 },
  { id: 'wire-1', type: 'wire', nodeA: 'n1', nodeB: 'n2', properties: {}, name: 'Wire', position: { x: 300, y: 100 }, rotation: 0 },
  { id: 'bulb-1', type: 'bulb', nodeA: 'n2', nodeB: 'n3', properties: { resistance: 60 }, name: 'Bulb', position: { x: 500, y: 200 }, rotation: 0 },
  { id: 'switch-1', type: 'switch', nodeA: 'n4', nodeB: 'n3', properties: { isClosed: true }, name: 'Switch', position: { x: 300, y: 400 }, rotation: 0 },
];

export const lessonCh2_3_3: LessonConfig = {
  id: 'lesson-ch2-3-3',
  unitId: 'ch2-unit-3',
  title: 'Combining Ohm\'s Law and the Power Formula',
  description: 'Combine V = IR and P = VI in a multi-step calculation: find current first, then power.',
  stageLabel: 'Early Intermediate',
  prerequisites: ['lesson-ch2-3-2'],
  conceptsIntroduced: ['multi-step calculation', 'current first then power', 'the order of reasoning matters'],
  initialCircuit: circuit,
  initialNodes: STANDARD_NODES,
  steps: [
    {
      id: 'step-1',
      text: 'So far you have used one formula at a time. Now you will combine both. This circuit has a 12V battery and a 60\u03A9 bulb. You need to find the power \u2014 but you do not know the current yet.',
      highlights: ['battery-1', 'bulb-1'],
    },
    {
      id: 'step-2',
      text: 'Step one: find the current. I = V / R = 12 / 60 = 0.2A. Now you know the current.',
    },
    {
      id: 'step-3',
      text: 'Step two: find the power. P = V \u00D7 I = 12 \u00D7 0.2 = 2.4W. The bulb uses 2.4 watts. You needed two formulas in sequence to get the answer.',
      theoryCheck: {
        question: 'When you know V and R but need P, what is the correct order of steps?',
        choices: [
          { id: 'tc-a', label: 'First find I using I = V/R, then find P using P = VI', isCorrect: true, explanation: 'Correct! You need current before you can calculate power.' },
          { id: 'tc-b', label: 'Use P = VI directly with V and R', isCorrect: false, explanation: 'P = VI needs current (I), not resistance (R). You must find I first.' },
          { id: 'tc-c', label: 'First find P, then find I', isCorrect: false, explanation: 'You cannot find P without knowing I. Current must be calculated first.' },
        ],
        explanation: 'When you know V and R, you must first find I = V/R, and then use P = VI. The order matters because each formula depends on the previous result.',
      },
    },
  ],
  challenges: [
    {
      id: 'challenge-1',
      prompt: 'A circuit has a 12V battery and a 60\u03A9 bulb. Calculate the current first, then calculate the power.',
      type: 'calculate',
      evaluationCriteria: {},
      calculationTarget: {
        quantity: 'power',
        expectedValue: 2.4,
        tolerance: 0.05,
        unit: 'W',
        formula: 'I = V/R = 12/60 = 0.2A, then P = VI = 12 \u00D7 0.2',
      },
      detailedBreakdown: {
        steps: [
          { label: 'Identify known values', formula: 'V = 12V, R = 60\u03A9', result: 'Known: V and R' },
          { label: 'Find current first', formula: 'I = V / R = 12 / 60', result: 'I = 0.2A' },
          { label: 'Calculate power', formula: 'P = V \u00D7 I = 12 \u00D7 0.2', result: 'P = 2.4W' },
        ],
      },
      hints: [
        'You need two steps. First find I = V / R, then find P = V \u00D7 I.',
        'I = 12 / 60 = 0.2A. Then P = 12 \u00D7 0.2 = 2.4W.',
      ],
    },
    {
      id: 'challenge-2',
      prompt: 'In a circuit with a 9V battery and a 45\u03A9 load, what are the correct intermediate current and final power values?',
      type: 'choose',
      evaluationCriteria: { correctChoiceId: 'ch2-a' },
      hints: [
        'First calculate I = 9 / 45, then P = 9 \u00D7 I.',
        'I = 0.2A, P = 1.8W.',
      ],
      choices: [
        { id: 'ch2-a', label: 'I = 0.2A, P = 1.8W', isCorrect: true, explanation: 'Correct! I = 9/45 = 0.2A, then P = 9 \u00D7 0.2 = 1.8W.' },
        { id: 'ch2-b', label: 'I = 5A, P = 45W', isCorrect: false, explanation: 'I = 9/45 = 0.2A, not 5A. Check the division.' },
        { id: 'ch2-c', label: 'I = 0.2A, P = 9W', isCorrect: false, explanation: 'The current is correct, but P = 9 \u00D7 0.2 = 1.8W, not 9W.' },
      ],
    },
  ],
  theoryContent: [
    {
      title: 'Multi-step calculation in a simple circuit',
      content: 'When you know V and R but need P, use two steps: first I = V/R, then P = VI. The order matters because the power formula needs current, which must be found first.',
      formula: 'I = V/R, then P = VI',
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
      id: 'theory-ch2-multi-step-calculation',
      title: 'Multi-step calculation in a simple circuit',
      content: 'When you know voltage and resistance but need power, you must calculate in two steps. First, find the current: I = V / R. Then use the current to find power: P = V \u00D7 I. For example, a 12V battery and a 60\u03A9 load give I = 12/60 = 0.2A, then P = 12 \u00D7 0.2 = 2.4W. The order matters because P = VI requires knowing the current.',
      sourceLesson: 'lesson-ch2-3-3',
    },
  ],
  quizzesUnlocked: ['quiz-ch2-multi-step-calculation'],
};
