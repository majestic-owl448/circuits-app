import type { LessonConfig } from '../../../types/lesson.ts';
import { STANDARD_CIRCUIT, STANDARD_NODES } from '../../shared.ts';

export const lesson2_3: LessonConfig = {
  id: 'lesson-2-3',
  unitId: 'unit-2',
  title: 'Voltage as Push',
  description: 'Learn that voltage is the source\'s electrical push that drives current.',
  stageLabel: 'Beginner',
  prerequisites: ['lesson-2-2'],
  conceptsIntroduced: ['voltage', 'voltage as push or pressure', 'source provides the push behind current flow'],
  initialCircuit: STANDARD_CIRCUIT,
  initialNodes: STANDARD_NODES,
  steps: [
    {
      id: 'step-1',
      text: 'You now know that current is the flow of electricity through a circuit. But what causes that flow? Something has to push the electricity along. That push is called voltage.',
      highlights: ['battery-1'],
    },
    {
      id: 'step-2',
      text: 'Think of voltage like water pressure in a pipe. The higher the pressure, the stronger the push. In a circuit, the battery provides the voltage — the electrical push that drives current through the loop.',
      highlights: ['battery-1'],
    },
    {
      id: 'step-3',
      text: 'Close the switch to let current flow. The battery\'s voltage is what makes the current move.',
      requiredAction: { type: 'toggle-switch', componentId: 'switch-1', targetState: true },
      showCurrentOverlay: true,
      highlights: ['switch-1'],
    },
    {
      id: 'step-4',
      text: 'With the circuit closed, the battery pushes current through the entire loop. Without voltage from the source, there would be no push and no flow — even if the path were complete.',
      showCurrentOverlay: true,
      highlights: ['battery-1'],
    },
    {
      id: 'step-5',
      text: 'The symbol for voltage is V. It measures how strong the push from the source is. This battery provides 9 volts of push.',
      highlights: ['battery-1'],
      theoryCheck: {
        question: 'What does the symbol V represent in a circuit?',
        choices: [
          { id: 'tc-a', label: 'Volume — how much space the circuit takes up', isCorrect: false, explanation: 'V stands for voltage, not volume.' },
          { id: 'tc-b', label: 'Voltage — the electrical push from the source', isCorrect: true, explanation: 'Correct! V represents voltage, the push that drives current through the circuit.' },
          { id: 'tc-c', label: 'Velocity — how fast the current moves', isCorrect: false, explanation: 'V stands for voltage, not velocity. Voltage is a push, not a speed.' },
        ],
        explanation: 'V stands for voltage, the electrical push or pressure provided by the source that drives current through the circuit.',
      },
    },
    {
      id: 'step-6',
      text: 'Open the switch again. The voltage still exists across the battery terminals, but with the loop broken, it cannot push current through.',
      requiredAction: { type: 'toggle-switch', componentId: 'switch-1', targetState: false },
      highlights: ['switch-1'],
    },
  ],
  challenges: [
    {
      id: 'challenge-1',
      prompt: 'Which is the best beginner explanation of voltage?',
      type: 'choose',
      evaluationCriteria: { correctChoiceId: 'ch1-b' },
      hints: [
        'Think of the water-pipe analogy. What role does pressure play?',
      ],
      choices: [
        { id: 'ch1-a', label: 'Voltage is the speed at which electrons travel', isCorrect: false, explanation: 'Voltage is not about speed. It is the push or pressure that drives flow.' },
        { id: 'ch1-b', label: 'Voltage is the electrical push from the source that drives current', isCorrect: true, explanation: 'Correct! Voltage is like pressure — it pushes current through the circuit.' },
        { id: 'ch1-c', label: 'Voltage is the total energy stored in the battery', isCorrect: false, explanation: 'Voltage is not stored energy. It is the strength of the push at any moment.' },
      ],
    },
    {
      id: 'challenge-2',
      prompt: 'Which component in this simple circuit provides voltage?',
      type: 'choose',
      evaluationCriteria: { correctChoiceId: 'ch2-a' },
      hints: [
        'Which component is the source of energy?',
      ],
      choices: [
        { id: 'ch2-a', label: 'The battery', isCorrect: true, explanation: 'Correct! The battery is the source that provides voltage to push current through the circuit.' },
        { id: 'ch2-b', label: 'The bulb', isCorrect: false, explanation: 'The bulb is the load — it uses energy, not provides the push.' },
        { id: 'ch2-c', label: 'The wire', isCorrect: false, explanation: 'Wires carry current but do not provide the push.' },
      ],
    },
  ],
  theoryContent: [
    {
      title: 'What is voltage?',
      content: 'Voltage (symbol: V) is the electrical push or pressure provided by the source. It is what drives current through the circuit, similar to how water pressure pushes water through a pipe.',
    },
    {
      title: 'Voltage as push in an ideal source',
      content: 'In our simple model, the battery provides a steady voltage (push) regardless of what is connected. This is called an ideal voltage source. The push exists even when the circuit is open, but current only flows when the loop is complete.',
    },
  ],
  sandboxUnlocks: [],
  availableActions: ['toggle-switch', 'drag-to-place'],
  currentOverlayAvailable: true,
  showFormulaPanel: false,
  formulasShown: [],
  theoryPageAdditions: [
    {
      id: 'theory-what-is-voltage',
      title: 'What is voltage?',
      content: 'Voltage (symbol: V) is the electrical push or pressure provided by the source. It is what drives current through the circuit, similar to how water pressure pushes water through a pipe.',
      sourceLesson: 'lesson-2-3',
    },
    {
      id: 'theory-voltage-ideal-source',
      title: 'Voltage as push in an ideal source',
      content: 'In our simple model, the battery provides a steady voltage (push) regardless of what is connected. This is called an ideal voltage source. The push exists even when the circuit is open, but current only flows when the loop is complete.',
      sourceLesson: 'lesson-2-3',
    },
  ],
  quizzesUnlocked: ['quiz-voltage-basics'],
};
