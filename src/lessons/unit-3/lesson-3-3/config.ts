import type { LessonConfig } from '../../../types/lesson.ts';
import { STANDARD_CIRCUIT, STANDARD_NODES } from '../../shared.ts';

export const lesson3_3: LessonConfig = {
  id: 'lesson-3-3',
  unitId: 'unit-3',
  title: 'Why Brightness Will Matter Later',
  description: 'Understand that bulb behavior relates to electrical quantities and that later lessons will connect brightness to power.',
  stageLabel: 'Beginner',
  prerequisites: ['lesson-3-2'],
  conceptsIntroduced: [
    "a bulb's visible behavior relates to what is happening electrically",
    'later lessons will connect brightness more directly to power',
  ],
  initialCircuit: STANDARD_CIRCUIT,
  initialNodes: STANDARD_NODES,
  steps: [
    {
      id: 'step-1',
      text: 'You have learned about voltage, current, resistance, and power. Now let\'s connect those ideas to something you can see: the bulb\'s brightness.',
    },
    {
      id: 'step-2',
      text: 'Close the switch to light the bulb.',
      requiredAction: { type: 'toggle-switch', componentId: 'switch-1', targetState: true },
      showCurrentOverlay: true,
      highlights: ['switch-1'],
    },
    {
      id: 'step-3',
      text: 'The bulb glows at a certain brightness. That brightness is not random — it is directly related to how much electrical energy the bulb is using. The quantity that describes this energy use rate is power (P).',
      highlights: ['bulb-1'],
    },
    {
      id: 'step-4',
      text: 'Remember the formula P = V x I. The power used by the bulb depends on the voltage across it and the current flowing through it. More power means a brighter bulb. In later lessons, you will compare circuits with different power levels and see the brightness change.',
      theoryCheck: {
        question: 'Which quantity will help explain how bright a bulb glows?',
        choices: [
          { id: 'tc-a', label: 'Resistance alone', isCorrect: false, explanation: 'Resistance affects current, but brightness is most directly related to power.' },
          { id: 'tc-b', label: 'Power (P)', isCorrect: true, explanation: 'Correct! Power describes the rate of energy use, which determines brightness.' },
          { id: 'tc-c', label: 'The number of wires', isCorrect: false, explanation: 'The number of wires does not determine brightness.' },
        ],
        explanation: 'Power (P = VI) is the quantity that most directly explains bulb brightness. More power means more energy converted to light per second.',
      },
    },
    {
      id: 'step-5',
      text: 'You do not need to calculate power yet. The important idea is that formulas like V = IR and P = VI describe real relationships. They are not just abstract symbols — they explain what is physically happening in the circuit.',
    },
    {
      id: 'step-6',
      text: 'Open the switch. In the next unit, you will start building circuits more independently and applying these concepts hands-on.',
      requiredAction: { type: 'toggle-switch', componentId: 'switch-1', targetState: false },
      highlights: ['switch-1'],
    },
  ],
  challenges: [
    {
      id: 'challenge-1',
      prompt: 'Which quantity will later help explain the bulb\'s output (brightness)?',
      type: 'choose',
      evaluationCriteria: { correctChoiceId: 'ch1-c' },
      hints: [
        'Think about what describes the rate of energy use in a circuit.',
      ],
      choices: [
        { id: 'ch1-a', label: 'Voltage alone', isCorrect: false, explanation: 'Voltage is the push, but brightness depends on power, which combines voltage and current.' },
        { id: 'ch1-b', label: 'Resistance alone', isCorrect: false, explanation: 'Resistance opposes flow but does not directly describe energy output.' },
        { id: 'ch1-c', label: 'Power (P = VI)', isCorrect: true, explanation: 'Correct! Power determines how much energy the bulb converts to light per second.' },
      ],
    },
    {
      id: 'challenge-2',
      prompt: 'Why do formulas matter even before you start calculating?',
      type: 'choose',
      evaluationCriteria: { correctChoiceId: 'ch2-b' },
      hints: [
        'Formulas describe how quantities relate to each other.',
      ],
      choices: [
        { id: 'ch2-a', label: 'They do not matter until you use numbers', isCorrect: false, explanation: 'Even without numbers, formulas show which quantities are connected and how.' },
        { id: 'ch2-b', label: 'They describe real relationships between circuit quantities, helping you understand what affects what', isCorrect: true, explanation: 'Correct! Formulas are a map of how voltage, current, resistance, and power relate.' },
        { id: 'ch2-c', label: 'They are only useful for exams', isCorrect: false, explanation: 'Formulas describe real physical relationships, not just test material.' },
      ],
    },
  ],
  theoryContent: [
    {
      title: 'Early connection between bulb behavior and power',
      content: 'The brightness of a bulb is related to the power it uses. Power (P = VI) describes the rate at which electrical energy is converted to light and heat. More power means a brighter bulb.',
    },
  ],
  sandboxUnlocks: [],
  availableActions: ['toggle-switch', 'drag-to-place'],
  currentOverlayAvailable: true,
  showFormulaPanel: true,
  formulasShown: [
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
      id: 'theory-bulb-brightness-power',
      title: 'Early connection between bulb behavior and power',
      content: 'The brightness of a bulb is related to the power it uses. Power (P = VI) describes the rate at which electrical energy is converted to light and heat. More power means a brighter bulb.',
      sourceLesson: 'lesson-3-3',
    },
  ],
  quizzesUnlocked: ['quiz-formulas-as-relationships'],
};
