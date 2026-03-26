import type { LessonConfig } from '../../../types/lesson.ts';
import { STANDARD_CIRCUIT, STANDARD_NODES } from '../../shared.ts';

export const lesson3_1: LessonConfig = {
  id: 'lesson-3-1',
  unitId: 'unit-3',
  title: 'Resistance Opposes Flow',
  description: 'Understand resistance as opposition to current flow.',
  stageLabel: 'Beginner',
  prerequisites: ['lesson-2-4'],
  conceptsIntroduced: ['resistance', 'resistance opposes flow', 'the bulb is currently being modeled as an ideal resistive load'],
  initialCircuit: STANDARD_CIRCUIT,
  initialNodes: STANDARD_NODES,
  steps: [
    {
      id: 'step-1',
      text: 'You know that voltage pushes and current flows. But something in the circuit opposes that flow — it makes it harder for current to move. That opposition is called resistance.',
      highlights: ['bulb-1'],
    },
    {
      id: 'step-2',
      text: 'Think of resistance like a narrow section in a water pipe. Water can still flow through, but the narrow section slows it down. In a circuit, the bulb provides resistance — it opposes the flow of current.',
      highlights: ['bulb-1'],
    },
    {
      id: 'step-3',
      text: 'Close the switch and observe the current flow. The bulb\'s resistance is what prevents the current from being infinitely large. It limits how much current the battery\'s voltage can push through.',
      requiredAction: { type: 'toggle-switch', componentId: 'switch-1', targetState: true },
      showCurrentOverlay: true,
      highlights: ['switch-1', 'bulb-1'],
    },
    {
      id: 'step-4',
      text: 'The symbol for resistance is R. In our model, the bulb acts as an ideal resistive load. This means we treat the bulb as if its only electrical property is its resistance. Real bulbs are more complex, but this simple model works well for learning.',
      highlights: ['bulb-1'],
      theoryCheck: {
        question: 'What does resistance do in a circuit?',
        choices: [
          { id: 'tc-a', label: 'Resistance increases the flow of current', isCorrect: false, explanation: 'Resistance does the opposite — it opposes and limits current flow.' },
          { id: 'tc-b', label: 'Resistance opposes the flow of current', isCorrect: true, explanation: 'Correct! Resistance makes it harder for current to flow, limiting how much current passes through.' },
          { id: 'tc-c', label: 'Resistance provides the push in a circuit', isCorrect: false, explanation: 'The push comes from voltage. Resistance opposes that push.' },
        ],
        explanation: 'Resistance (R) opposes the flow of current. Higher resistance means less current for the same voltage push.',
      },
    },
    {
      id: 'step-5',
      text: 'Open the switch to finish this exploration. You now know the three core quantities: voltage (V) is the push, current (I) is the flow, and resistance (R) opposes the flow.',
      requiredAction: { type: 'toggle-switch', componentId: 'switch-1', targetState: false },
      highlights: ['switch-1'],
    },
  ],
  challenges: [
    {
      id: 'challenge-1',
      prompt: 'Which concept makes it harder for current to flow?',
      type: 'choose',
      evaluationCriteria: { correctChoiceId: 'ch1-c' },
      hints: [
        'One of the three quantities opposes current. Which one?',
      ],
      choices: [
        { id: 'ch1-a', label: 'Voltage', isCorrect: false, explanation: 'Voltage is the push that drives current — it helps flow, not opposes it.' },
        { id: 'ch1-b', label: 'Current', isCorrect: false, explanation: 'Current is the flow itself. It does not oppose itself.' },
        { id: 'ch1-c', label: 'Resistance', isCorrect: true, explanation: 'Correct! Resistance opposes the flow of current.' },
      ],
    },
    {
      id: 'challenge-2',
      prompt: 'What is the best definition of resistance?',
      type: 'choose',
      evaluationCriteria: { correctChoiceId: 'ch2-b' },
      hints: [
        'Think about what resistance does to current flow.',
      ],
      choices: [
        { id: 'ch2-a', label: 'The energy stored in the battery', isCorrect: false, explanation: 'That is not resistance. The battery provides voltage, not resistance.' },
        { id: 'ch2-b', label: 'The opposition to the flow of current in a circuit', isCorrect: true, explanation: 'Correct! Resistance is the opposition to current flow, measured in ohms.' },
        { id: 'ch2-c', label: 'The brightness of the bulb', isCorrect: false, explanation: 'Brightness is related to power use, not a definition of resistance.' },
      ],
    },
  ],
  theoryContent: [
    {
      title: 'What is resistance?',
      content: 'Resistance (symbol: R) is the opposition to current flow in a circuit. Components with high resistance allow less current through for a given voltage. The unit of resistance is the ohm.',
    },
    {
      title: 'Bulb as an ideal resistive load',
      content: 'In our early model, we treat the bulb as an ideal resistive load. This means the bulb\'s only electrical property is a fixed resistance. Real bulbs change resistance with temperature, but this simplified model helps us learn the basics.',
    },
  ],
  sandboxUnlocks: [],
  availableActions: ['toggle-switch', 'drag-to-place'],
  currentOverlayAvailable: true,
  showFormulaPanel: false,
  formulasShown: [],
  theoryPageAdditions: [
    {
      id: 'theory-what-is-resistance',
      title: 'What is resistance?',
      content: 'Resistance (symbol: R) is the opposition to current flow in a circuit. Components with high resistance allow less current through for a given voltage. The unit of resistance is the ohm.',
      sourceLesson: 'lesson-3-1',
    },
    {
      id: 'theory-bulb-resistive-load',
      title: 'Bulb as an ideal resistive load in the early model',
      content: 'In our early model, we treat the bulb as an ideal resistive load. This means the bulb\'s only electrical property is a fixed resistance. Real bulbs change resistance with temperature, but this simplified model helps us learn the basics.',
      sourceLesson: 'lesson-3-1',
    },
  ],
  quizzesUnlocked: ['quiz-resistance-basics'],
};
