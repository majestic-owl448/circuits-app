import type { LessonConfig } from '../../../../types/lesson.ts';
import { SERIES_NODES, SERIES_TWO_BULBS } from '../../../shared.ts';
import type { CircuitComponent } from '../../../../types/circuit.ts';

const circuit: CircuitComponent[] = SERIES_TWO_BULBS.map(c =>
  c.id === 'switch-1' ? { ...c, properties: { isClosed: true } } : c,
);

export const lessonCh3_2_2: LessonConfig = {
  id: 'lesson-ch3-2-2',
  unitId: 'ch3-unit-2',
  title: 'Current in a Series Circuit',
  description: 'Calculate current using total resistance and Ohm\'s Law. I = V / R_total, and the same current flows through every component.',
  stageLabel: 'Early Intermediate',
  prerequisites: ['lesson-ch3-2-1'],
  conceptsIntroduced: ['first calculate total R, then calculate total I', 'same current through both bulbs'],
  initialCircuit: circuit,
  initialNodes: SERIES_NODES,
  steps: [
    {
      id: 'step-1',
      text: 'You already know how to find total resistance in series. Now use that to find the current. This circuit has a 9V battery and two 45\u03A9 bulbs in series. Start by finding R_total.',
      highlights: ['battery-1', 'bulb-1', 'bulb-2'],
      showCurrentOverlay: true,
    },
    {
      id: 'step-2',
      text: 'R_total = 45\u03A9 + 45\u03A9 = 90\u03A9. Now apply Ohm\'s Law: I = V / R_total = 9V / 90\u03A9 = 0.1A. The circuit draws 0.1 amperes (100 milliamperes).',
    },
    {
      id: 'step-3',
      text: 'A key property of series circuits: the same current flows through every component. Both Bulb 1 and Bulb 2 carry exactly 0.1A. There is only one path, so the current cannot split.',
      theoryCheck: {
        question: 'What is the correct order of steps to find current in a series circuit?',
        choices: [
          { id: 'tc-a', label: 'Find R_total first, then use I = V / R_total', isCorrect: true, explanation: 'Correct! First sum the resistances, then divide voltage by total resistance to get current.' },
          { id: 'tc-b', label: 'Divide voltage by one resistor only', isCorrect: false, explanation: 'You must use the total resistance, not just one resistor. The battery sees all resistors in the path.' },
          { id: 'tc-c', label: 'Multiply voltage by total resistance', isCorrect: false, explanation: 'Multiplying V by R does not give current. Current is V divided by R.' },
        ],
        explanation: 'In a series circuit, first calculate R_total = R\u2081 + R\u2082, then find current with I = V / R_total.',
      },
    },
    {
      id: 'step-4',
      text: 'Compare this to a single-bulb circuit: 9V / 45\u03A9 = 0.2A. Adding the second bulb doubled the resistance and halved the current. Same current through both bulbs, but less than a single bulb alone would draw.',
    },
  ],
  challenges: [
    {
      id: 'challenge-1',
      prompt: 'A 9V battery is connected to two 45\u03A9 bulbs in series. First find the total resistance, then calculate the current.',
      type: 'calculate',
      evaluationCriteria: {},
      calculationTarget: {
        quantity: 'current',
        expectedValue: 0.1,
        tolerance: 0.01,
        unit: 'A',
        formula: 'I = V / R_total = 9 / 90',
      },
      detailedBreakdown: {
        steps: [
          { label: 'Find total resistance', formula: 'R_total = 45 + 45 = 90\u03A9', result: 'R_total = 90\u03A9' },
          { label: 'Apply Ohm\'s Law', formula: 'I = V / R_total = 9 / 90', result: 'I = 0.1A' },
        ],
      },
      hints: [
        'First add the two resistances: 45 + 45 = 90\u03A9.',
        'Then divide: I = 9 / 90 = 0.1A.',
      ],
    },
    {
      id: 'challenge-2',
      prompt: 'In this series circuit with two identical bulbs carrying 0.1A, how much current flows through each individual bulb?',
      type: 'choose',
      evaluationCriteria: { correctChoiceId: 'ch-b' },
      hints: [
        'In a series circuit, there is only one path for current.',
        'If the total current is 0.1A, what must each bulb carry?',
      ],
      choices: [
        { id: 'ch-a', label: '0.05A through each (current splits)', isCorrect: false, explanation: 'Current does not split in a series circuit. There is only one path, so each component carries the full current.' },
        { id: 'ch-b', label: '0.1A through each (same current)', isCorrect: true, explanation: 'Correct! In series, every component carries the same current. Both bulbs have 0.1A flowing through them.' },
        { id: 'ch-c', label: '0.2A through each (current doubles)', isCorrect: false, explanation: 'Current does not increase as it passes through components. The same 0.1A flows through every part of the series path.' },
      ],
    },
  ],
  theoryContent: [
    {
      title: 'Finding current in a series circuit',
      content: 'To find current in a series circuit: (1) calculate total resistance R_total = R\u2081 + R\u2082, then (2) apply Ohm\'s Law I = V / R_total. For a 9V battery with two 45\u03A9 bulbs: R_total = 90\u03A9, I = 9/90 = 0.1A.',
      formula: 'I = V / R_total',
    },
    {
      title: 'Same current everywhere in series',
      content: 'In a series circuit there is only one path, so the same current flows through every component. If the circuit current is 0.1A, each bulb, wire, and switch carries exactly 0.1A.',
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
      id: 'theory-ch3-series-current-calculation',
      title: 'Finding current in a series circuit',
      content: 'To find the current in a series circuit, first calculate the total resistance by summing all individual resistances, then apply Ohm\'s Law: I = V / R_total. For example, a 9V battery driving two 45\u03A9 bulbs in series yields R_total = 90\u03A9 and I = 9/90 = 0.1A. This same 0.1A flows through every component because there is only one path.',
      sourceLesson: 'lesson-ch3-2-2',
    },
  ],
  quizzesUnlocked: ['quiz-ch3-series-current-calc'],
};
