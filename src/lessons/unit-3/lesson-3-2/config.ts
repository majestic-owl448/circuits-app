import type { LessonConfig } from '../../../types/lesson.ts';
import { STANDARD_CIRCUIT, STANDARD_NODES } from '../../shared.ts';

export const lesson3_2: LessonConfig = {
  id: 'lesson-3-2',
  unitId: 'unit-3',
  title: 'The First Formula Pair',
  description: 'Meet the first formal equations as named relationships between circuit quantities.',
  stageLabel: 'Beginner',
  prerequisites: ['lesson-3-1'],
  conceptsIntroduced: ['formulas as relationships between circuit quantities', 'notation familiarity'],
  initialCircuit: STANDARD_CIRCUIT,
  initialNodes: STANDARD_NODES,
  steps: [
    {
      id: 'step-1',
      text: 'You now know three important quantities: voltage (V), current (I), and resistance (R). These quantities are not independent — they are connected by a relationship called a formula.',
    },
    {
      id: 'step-2',
      text: 'The first formula is Ohm\'s Law: V = I x R. This says that voltage equals current multiplied by resistance. It describes how these three quantities relate to each other in any circuit.',
    },
    {
      id: 'step-3',
      text: 'The formula panel is now available on the side of your screen. It shows V = IR and the symbols that make up the formula. You do not need to calculate anything yet — just become familiar with what each symbol means.',
    },
    {
      id: 'step-4',
      text: 'There is a second formula: P = V x I. P stands for power, which describes how much energy the circuit uses per second. Power is what determines how brightly the bulb glows.',
      theoryCheck: {
        question: 'Which symbol represents current?',
        choices: [
          { id: 'tc-a', label: 'V', isCorrect: false, explanation: 'V stands for voltage, the push.' },
          { id: 'tc-b', label: 'I', isCorrect: true, explanation: 'Correct! I is the symbol for current.' },
          { id: 'tc-c', label: 'R', isCorrect: false, explanation: 'R stands for resistance, the opposition to flow.' },
          { id: 'tc-d', label: 'P', isCorrect: false, explanation: 'P stands for power, the rate of energy use.' },
        ],
        explanation: 'I is the symbol for current. V = voltage, R = resistance, P = power.',
      },
    },
    {
      id: 'step-5',
      text: 'Close the switch and look at the circuit with the formulas in mind. The battery provides V, the current I flows through the loop, and the bulb\'s resistance R limits how much current flows. The bulb uses power P.',
      requiredAction: { type: 'toggle-switch', componentId: 'switch-1', targetState: true },
      showCurrentOverlay: true,
      highlights: ['battery-1', 'bulb-1'],
    },
    {
      id: 'step-6',
      text: 'You do not need to memorize the formulas right now. They will appear in the formula panel whenever you need them. For now, just recognize that V = IR connects voltage, current, and resistance, and P = VI connects power, voltage, and current.',
    },
  ],
  challenges: [
    {
      id: 'challenge-1',
      prompt: 'Which symbol represents current?',
      type: 'choose',
      evaluationCriteria: { correctChoiceId: 'ch1-b' },
      hints: [
        'Look at the formula V = IR. Which letter is not V or R?',
      ],
      choices: [
        { id: 'ch1-a', label: 'V', isCorrect: false, explanation: 'V is voltage, the push from the source.' },
        { id: 'ch1-b', label: 'I', isCorrect: true, explanation: 'Correct! I represents current, the flow of electricity.' },
        { id: 'ch1-c', label: 'R', isCorrect: false, explanation: 'R is resistance, the opposition to flow.' },
        { id: 'ch1-d', label: 'P', isCorrect: false, explanation: 'P is power, the rate of energy use.' },
      ],
    },
    {
      id: 'challenge-2',
      prompt: 'Which formula includes power (P)?',
      type: 'choose',
      evaluationCriteria: { correctChoiceId: 'ch2-b' },
      hints: [
        'Look at the two formulas: V = IR and P = VI. Which one has P?',
      ],
      choices: [
        { id: 'ch2-a', label: 'V = IR', isCorrect: false, explanation: 'V = IR relates voltage, current, and resistance. It does not include power.' },
        { id: 'ch2-b', label: 'P = VI', isCorrect: true, explanation: 'Correct! P = VI is the power formula, relating power to voltage and current.' },
      ],
    },
    {
      id: 'challenge-3',
      prompt: 'Which formula connects voltage, current, and resistance?',
      type: 'choose',
      evaluationCriteria: { correctChoiceId: 'ch3-a' },
      hints: [
        'Which formula has all three: V, I, and R?',
      ],
      choices: [
        { id: 'ch3-a', label: 'V = IR (Ohm\'s Law)', isCorrect: true, explanation: 'Correct! V = IR is Ohm\'s Law, connecting voltage, current, and resistance.' },
        { id: 'ch3-b', label: 'P = VI', isCorrect: false, explanation: 'P = VI includes power and relates it to voltage and current, but does not include resistance directly.' },
      ],
    },
  ],
  theoryContent: [
    {
      title: 'Ohm\'s Law',
      content: 'Ohm\'s Law states that V = I x R. Voltage (V) equals current (I) multiplied by resistance (R). This fundamental relationship connects the three core circuit quantities.',
      formula: 'V = IR',
    },
    {
      title: 'Power formula',
      content: 'The power formula states that P = V x I. Power (P) equals voltage (V) multiplied by current (I). Power describes how much energy the circuit uses per second.',
      formula: 'P = VI',
    },
    {
      title: 'Symbol glossary',
      content: 'V = voltage (push), measured in volts. I = current (flow), measured in amperes. R = resistance (opposition), measured in ohms. P = power (energy use rate), measured in watts.',
    },
  ],
  sandboxUnlocks: ['formula-panel'],
  availableActions: ['toggle-switch', 'drag-to-place'],
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
      id: 'theory-ohms-law',
      title: "Ohm's Law",
      content: "Ohm's Law states that V = I x R. Voltage (V) equals current (I) multiplied by resistance (R). This fundamental relationship connects the three core circuit quantities.",
      sourceLesson: 'lesson-3-2',
    },
    {
      id: 'theory-power-formula',
      title: 'Power formula',
      content: 'The power formula states that P = V x I. Power (P) equals voltage (V) multiplied by current (I). Power describes how much energy the circuit uses per second.',
      sourceLesson: 'lesson-3-2',
    },
    {
      id: 'theory-symbol-glossary',
      title: 'Symbol glossary',
      content: 'V = voltage (push), measured in volts. I = current (flow), measured in amperes. R = resistance (opposition), measured in ohms. P = power (energy use rate), measured in watts.',
      sourceLesson: 'lesson-3-2',
    },
  ],
  quizzesUnlocked: ['quiz-symbol-recognition', 'quiz-formula-recognition'],
};
