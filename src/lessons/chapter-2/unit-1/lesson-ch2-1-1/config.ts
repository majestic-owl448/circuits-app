import type { LessonConfig } from '../../../../types/lesson.ts';
import { STANDARD_NODES } from '../../../shared.ts';
import type { CircuitComponent } from '../../../../types/circuit.ts';

const circuit: CircuitComponent[] = [
  { id: 'battery-1', type: 'battery', nodeA: 'n1', nodeB: 'n4', properties: { voltage: 9 }, name: 'Battery', position: { x: 100, y: 200 }, rotation: 0 },
  { id: 'wire-1', type: 'wire', nodeA: 'n1', nodeB: 'n2', properties: {}, name: 'Wire', position: { x: 300, y: 100 }, rotation: 0 },
  { id: 'bulb-1', type: 'bulb', nodeA: 'n2', nodeB: 'n3', properties: { resistance: 45 }, name: 'Bulb', position: { x: 500, y: 200 }, rotation: 0 },
  { id: 'switch-1', type: 'switch', nodeA: 'n4', nodeB: 'n3', properties: { isClosed: false }, name: 'Switch', position: { x: 300, y: 400 }, rotation: 0 },
];

export const lessonCh2_1_1: LessonConfig = {
  id: 'lesson-ch2-1-1',
  unitId: 'ch2-unit-1',
  title: 'The Source Has a Voltage',
  description: 'See a source with an explicit numerical voltage value and understand that the source can be described quantitatively.',
  stageLabel: 'Beginner to Early Intermediate',
  prerequisites: ['lesson-5-2'],
  conceptsIntroduced: ['source voltage as a numeric value', 'units appear explicitly', 'numbers describe the same circuit concepts'],
  initialCircuit: circuit,
  initialNodes: STANDARD_NODES,
  steps: [
    {
      id: 'step-1',
      text: 'Welcome to Chapter 2! In the Foundations chapter, you learned that the battery provides voltage — the push that drives current. Now it is time to put numbers on that push.',
    },
    {
      id: 'step-2',
      text: 'Look at the battery. You can see "9V" displayed below its name. This means the battery provides exactly 9 volts of electrical push. Voltage is measured in volts, and the symbol is V.',
      highlights: ['battery-1'],
    },
    {
      id: 'step-3',
      text: 'Close the switch to complete the circuit. The battery still provides 9 volts whether the circuit is open or closed — but current only flows when the loop is complete.',
      requiredAction: { type: 'toggle-switch', componentId: 'switch-1', targetState: true },
      highlights: ['switch-1'],
      showCurrentOverlay: true,
    },
    {
      id: 'step-4',
      text: 'The bulb lights up. The 9-volt push from the battery drives current through the circuit. Every circuit you work with from now on will show explicit values like this.',
      highlights: ['battery-1', 'bulb-1'],
      theoryCheck: {
        question: 'What does the "9V" label on the battery tell you?',
        choices: [
          { id: 'tc-a', label: 'The battery provides 9 volts of electrical push', isCorrect: true, explanation: 'Correct! The number tells you the exact voltage the battery provides.' },
          { id: 'tc-b', label: 'The battery has 9 amperes of current', isCorrect: false, explanation: 'Volts measure voltage (push), not current. Current is measured in amperes.' },
          { id: 'tc-c', label: 'The battery has 9 ohms of resistance', isCorrect: false, explanation: 'Ohms measure resistance. The battery provides voltage, measured in volts.' },
        ],
        explanation: 'The "9V" label means the battery provides 9 volts. Voltage is the electrical push from the source, measured in volts (V).',
      },
    },
    {
      id: 'step-5',
      text: 'Open the switch again. The voltage label stays — the battery always has 9 volts, even when the circuit is open.',
      requiredAction: { type: 'toggle-switch', componentId: 'switch-1', targetState: false },
      highlights: ['switch-1'],
    },
  ],
  challenges: [
    {
      id: 'challenge-1',
      prompt: 'What is the voltage value shown on the battery in this circuit?',
      type: 'choose',
      evaluationCriteria: { correctChoiceId: 'ch1-b' },
      hints: ['Look at the number displayed below the battery name.'],
      choices: [
        { id: 'ch1-a', label: '45V', isCorrect: false, explanation: '45 is the resistance of the bulb in ohms, not the battery voltage.' },
        { id: 'ch1-b', label: '9V', isCorrect: true, explanation: 'Correct! The battery provides 9 volts.' },
        { id: 'ch1-c', label: '0.2V', isCorrect: false, explanation: '0.2 is the current that would flow (in amperes), not the voltage.' },
      ],
    },
    {
      id: 'challenge-2',
      prompt: 'The value "9V" shown on the battery tells you which electrical quantity?',
      type: 'choose',
      evaluationCriteria: { correctChoiceId: 'ch2-a' },
      hints: ['V stands for volts. Which quantity is measured in volts?'],
      choices: [
        { id: 'ch2-a', label: 'Voltage', isCorrect: true, explanation: 'Correct! Voltage is measured in volts (V). It is the electrical push provided by the source.' },
        { id: 'ch2-b', label: 'Current', isCorrect: false, explanation: 'Current is measured in amperes (A), not volts.' },
        { id: 'ch2-c', label: 'Resistance', isCorrect: false, explanation: 'Resistance is measured in ohms (Ω), not volts.' },
        { id: 'ch2-d', label: 'Power', isCorrect: false, explanation: 'Power is measured in watts (W), not volts.' },
      ],
    },
  ],
  theoryContent: [
    {
      title: 'Voltage as a measured quantity',
      content: 'Voltage is the electrical push provided by the source. When we write "9V" on a battery, it means the battery provides exactly 9 volts of push. This number stays the same whether the circuit is open or closed.',
    },
    {
      title: 'Units for voltage',
      content: 'Voltage is measured in volts, abbreviated V. The symbol used in formulas is also V. So "V = 9" means the voltage is 9 volts.',
    },
  ],
  sandboxUnlocks: ['numeric-voltage-display'],
  availableActions: ['toggle-switch', 'drag-to-place'],
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
      id: 'theory-ch2-voltage-measured',
      title: 'Voltage as a measured quantity',
      content: 'Voltage is the electrical push provided by the source. When we write "9V" on a battery, it means the battery provides exactly 9 volts of push. This is not just a concept — it is a specific number that you can use in calculations. The battery maintains this voltage regardless of whether the circuit is open or closed.',
      sourceLesson: 'lesson-ch2-1-1',
    },
    {
      id: 'theory-ch2-voltage-units',
      title: 'Units for voltage',
      content: 'Voltage is measured in volts, abbreviated V. Named after Alessandro Volta, the volt is the standard unit for electrical push or potential difference. In formulas, the symbol V represents both the quantity and its unit. When you see "9V" on a battery, you know the source provides nine volts of electrical pressure to drive current through the circuit.',
      sourceLesson: 'lesson-ch2-1-1',
    },
  ],
  quizzesUnlocked: ['quiz-ch2-voltage-values'],
};
