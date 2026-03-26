import type { LessonConfig } from '../../../types/lesson.ts';
import { STANDARD_CIRCUIT, STANDARD_NODES } from '../../shared.ts';

export const lesson5_1: LessonConfig = {
  id: 'lesson-5-1',
  unitId: 'unit-5',
  title: 'Quantities in a Circuit',
  description: 'Understand that voltage, current, resistance, and power are measurable quantities that can be given numerical values.',
  stageLabel: 'Beginner to Early Intermediate',
  prerequisites: ['lesson-4-3'],
  conceptsIntroduced: ['circuit quantities can be represented numerically', 'formulas will soon be used actively'],
  initialCircuit: STANDARD_CIRCUIT,
  initialNodes: STANDARD_NODES,
  steps: [
    {
      id: 'step-1',
      text: 'Throughout this chapter, you have learned about voltage, current, resistance, and power as concepts. Now let\'s think about them as measurable quantities with actual numbers.',
    },
    {
      id: 'step-2',
      text: 'In this circuit, the battery provides 9 volts of voltage. The bulb has 45 ohms of resistance. These are real numbers that describe the circuit. In the next chapter, you will use these numbers with formulas to calculate other values.',
      highlights: ['battery-1', 'bulb-1'],
    },
    {
      id: 'step-3',
      text: 'Close the switch. When current flows, every quantity in the circuit has a specific value: voltage in volts, current in amperes, resistance in ohms, and power in watts.',
      requiredAction: { type: 'toggle-switch', componentId: 'switch-1', targetState: true },
      showCurrentOverlay: true,
      highlights: ['switch-1'],
    },
    {
      id: 'step-4',
      text: 'Look at the formula panel. V = IR tells us that if we know voltage and resistance, we can find current. P = VI tells us that if we know voltage and current, we can find power. Soon you will do exactly that.',
      theoryCheck: {
        question: 'Which of these can describe a circuit numerically?',
        choices: [
          { id: 'tc-a', label: 'Only voltage', isCorrect: false, explanation: 'Voltage is one quantity, but current, resistance, and power are also numerical quantities.' },
          { id: 'tc-b', label: 'Voltage, current, resistance, and power', isCorrect: true, explanation: 'Correct! All four are measurable quantities with specific numerical values in any circuit.' },
          { id: 'tc-c', label: 'Only the number of components', isCorrect: false, explanation: 'The number of components is a count, not an electrical quantity.' },
        ],
        explanation: 'Voltage (V), current (I), resistance (R), and power (P) are all numerical quantities that describe what is happening in a circuit.',
      },
    },
    {
      id: 'step-5',
      text: 'Open the switch. You are almost ready to start working with numbers. The concepts you have built up — loop, source, load, voltage, current, resistance, power — are the foundation for everything that comes next.',
      requiredAction: { type: 'toggle-switch', componentId: 'switch-1', targetState: false },
      highlights: ['switch-1'],
    },
  ],
  challenges: [
    {
      id: 'challenge-1',
      prompt: 'Which quantities can describe a circuit numerically?',
      type: 'choose',
      evaluationCriteria: { correctChoiceId: 'ch1-c' },
      hints: [
        'Think about all the quantities you have learned about in this chapter.',
      ],
      choices: [
        { id: 'ch1-a', label: 'Only voltage and current', isCorrect: false, explanation: 'Resistance and power are also measurable numerical quantities.' },
        { id: 'ch1-b', label: 'Only resistance', isCorrect: false, explanation: 'Resistance is one, but voltage, current, and power are also numerical.' },
        { id: 'ch1-c', label: 'Voltage, current, resistance, and power', isCorrect: true, explanation: 'Correct! V, I, R, and P are all quantities with numerical values in a circuit.' },
      ],
    },
    {
      id: 'challenge-2',
      prompt: 'Match the symbols to their quantities: V, I, R, P.',
      type: 'choose',
      evaluationCriteria: { correctChoiceId: 'ch2-b' },
      hints: [
        'V = voltage, I = current, R = resistance, P = power.',
      ],
      choices: [
        { id: 'ch2-a', label: 'V = current, I = voltage, R = power, P = resistance', isCorrect: false, explanation: 'That mapping is incorrect. V = voltage, I = current, R = resistance, P = power.' },
        { id: 'ch2-b', label: 'V = voltage, I = current, R = resistance, P = power', isCorrect: true, explanation: 'Correct! These are the standard symbols for the four circuit quantities.' },
        { id: 'ch2-c', label: 'V = resistance, I = power, R = voltage, P = current', isCorrect: false, explanation: 'That mapping is incorrect. V = voltage, I = current, R = resistance, P = power.' },
      ],
    },
  ],
  theoryContent: [
    {
      title: 'Circuit quantities overview',
      content: 'Every circuit has measurable quantities: voltage (V) in volts, current (I) in amperes, resistance (R) in ohms, and power (P) in watts. These are not abstract ideas — they have specific numerical values that can be calculated using formulas.',
    },
  ],
  sandboxUnlocks: [],
  availableActions: ['toggle-switch', 'drag-to-place', 'connect-wire', 'delete-component'],
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
      id: 'theory-circuit-quantities',
      title: 'Circuit quantities overview',
      content: 'Every circuit has measurable quantities: voltage (V) in volts, current (I) in amperes, resistance (R) in ohms, and power (P) in watts. These are not abstract ideas — they have specific numerical values that can be calculated using formulas.',
      sourceLesson: 'lesson-5-1',
    },
  ],
  quizzesUnlocked: ['quiz-quantity-symbol-review'],
};
