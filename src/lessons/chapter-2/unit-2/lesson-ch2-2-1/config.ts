import type { LessonConfig } from '../../../../types/lesson.ts';
import { STANDARD_NODES } from '../../../shared.ts';
import type { CircuitComponent } from '../../../../types/circuit.ts';

const circuit: CircuitComponent[] = [
  { id: 'battery-1', type: 'battery', nodeA: 'n1', nodeB: 'n4', properties: { voltage: 9 }, name: 'Battery', position: { x: 100, y: 200 }, rotation: 0 },
  { id: 'wire-1', type: 'wire', nodeA: 'n1', nodeB: 'n2', properties: {}, name: 'Wire', position: { x: 300, y: 100 }, rotation: 0 },
  { id: 'bulb-1', type: 'bulb', nodeA: 'n2', nodeB: 'n3', properties: { resistance: 45 }, name: 'Bulb', position: { x: 500, y: 200 }, rotation: 0 },
  { id: 'switch-1', type: 'switch', nodeA: 'n4', nodeB: 'n3', properties: { isClosed: true }, name: 'Switch', position: { x: 300, y: 400 }, rotation: 0 },
];

export const lessonCh2_2_1: LessonConfig = {
  id: 'lesson-ch2-2-1',
  unitId: 'ch2-unit-2',
  title: 'Solving for Current',
  description: 'Manually calculate current in a one-source, one-resistive-load circuit using Ohm\'s Law.',
  stageLabel: 'Early Intermediate',
  prerequisites: ['lesson-ch2-1-3'],
  conceptsIntroduced: ['current can be solved from voltage and resistance', 'active formula use begins'],
  initialCircuit: circuit,
  initialNodes: STANDARD_NODES,
  steps: [
    {
      id: 'step-1',
      text: 'Now it is time to use the formula. This circuit has a 9V battery and a 45Ω bulb. The switch is already closed and current is flowing. Your job: calculate exactly how much current.',
      highlights: ['battery-1', 'bulb-1'],
      showCurrentOverlay: true,
    },
    {
      id: 'step-2',
      text: 'You know V = 9V and R = 45Ω. You need to find I (current). Using Ohm\'s Law: V = IR. Rearranging: I = V / R.',
    },
    {
      id: 'step-3',
      text: 'Substitute the values: I = 9V / 45Ω = 0.2A. The current in this circuit is 0.2 amperes (200 milliamperes).',
      theoryCheck: {
        question: 'To find current when you know voltage and resistance, which rearrangement do you use?',
        choices: [
          { id: 'tc-a', label: 'I = V / R', isCorrect: true, explanation: 'Correct! Dividing voltage by resistance gives you the current.' },
          { id: 'tc-b', label: 'I = V × R', isCorrect: false, explanation: 'Multiplying V by R would give the wrong answer. Current equals voltage divided by resistance.' },
          { id: 'tc-c', label: 'I = R / V', isCorrect: false, explanation: 'That is inverted. Current equals voltage divided by resistance, not resistance divided by voltage.' },
        ],
        explanation: 'From V = IR, dividing both sides by R gives I = V/R. This is the formula you use when voltage and resistance are known.',
      },
    },
  ],
  challenges: [
    {
      id: 'challenge-1',
      prompt: 'A circuit has a 9V battery and a 45Ω bulb. Calculate the current flowing through the circuit.',
      type: 'calculate',
      evaluationCriteria: {},
      calculationTarget: {
        quantity: 'current',
        expectedValue: 0.2,
        tolerance: 0.01,
        unit: 'A',
        formula: 'I = V / R = 9 / 45',
      },
      detailedBreakdown: {
        steps: [
          { label: 'Identify known values', formula: 'V = 9V, R = 45Ω', result: 'Known: V and R' },
          { label: 'Choose formula', formula: 'V = IR → I = V / R', result: 'Rearranged for I' },
          { label: 'Substitute values', formula: 'I = 9 / 45', result: 'I = 0.2A' },
        ],
      },
      hints: [
        'Use I = V / R. You know V = 9 and R = 45.',
        'Divide 9 by 45. What do you get?',
      ],
    },
    {
      id: 'challenge-2',
      prompt: 'A different circuit has a 12V battery and a 30Ω resistor. What is the current?',
      type: 'calculate',
      evaluationCriteria: {},
      calculationTarget: {
        quantity: 'current',
        expectedValue: 0.4,
        tolerance: 0.01,
        unit: 'A',
        formula: 'I = V / R = 12 / 30',
      },
      detailedBreakdown: {
        steps: [
          { label: 'Identify known values', formula: 'V = 12V, R = 30Ω', result: 'Known: V and R' },
          { label: 'Choose formula', formula: 'I = V / R', result: 'Rearranged for I' },
          { label: 'Substitute values', formula: 'I = 12 / 30', result: 'I = 0.4A' },
        ],
      },
      hints: [
        'Use I = V / R with V = 12 and R = 30.',
        '12 divided by 30 equals 0.4.',
      ],
    },
  ],
  theoryContent: [
    {
      title: 'Using Ohm\'s Law to find current',
      content: 'When you know voltage (V) and resistance (R), find current with I = V / R. For example: 9V / 45Ω = 0.2A.',
      formula: 'I = V / R',
    },
    {
      title: 'Units for current',
      content: 'Current is measured in amperes (A), often shortened to amps. The symbol in formulas is I.',
    },
  ],
  sandboxUnlocks: ['current-evaluation'],
  availableActions: ['toggle-switch', 'drag-to-place', 'connect-wire'],
  currentOverlayAvailable: true,
  showFormulaPanel: true,
  formulasShown: [
    {
      formula: 'V = IR',
      symbols: [
        { symbol: 'V', name: 'Voltage', unit: 'volts (V)' },
        { symbol: 'I', name: 'Current', unit: 'amperes (A)' },
        { symbol: 'R', name: 'Resistance', unit: 'ohms (Ω)' },
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
      id: 'theory-ch2-ohms-law-current',
      title: 'Using Ohm\'s Law to find current',
      content: 'When you know the voltage of the source and the resistance of the load, you can find the current using Ohm\'s Law rearranged: I = V / R. For example, a 9V battery driving current through a 45Ω bulb produces I = 9 / 45 = 0.2 amperes. This is the most common first calculation in circuit analysis: given the source and the load, find the flow.',
      sourceLesson: 'lesson-ch2-2-1',
    },
    {
      id: 'theory-ch2-current-units',
      title: 'Units for current',
      content: 'Current is measured in amperes (A), often shortened to "amps." Named after Andre-Marie Ampere, the ampere is the standard unit for electrical flow. In formulas, I represents current. Common circuit currents range from milliamperes (mA, thousandths of an amp) for small electronics to several amperes for household appliances.',
      sourceLesson: 'lesson-ch2-2-1',
    },
  ],
  quizzesUnlocked: ['quiz-ch2-current-calculation'],
};
