import type { LessonConfig } from '../../../types/lesson.ts';
import { STANDARD_CIRCUIT, STANDARD_NODES } from '../../shared.ts';

export const lesson2_4: LessonConfig = {
  id: 'lesson-2-4',
  unitId: 'unit-2',
  title: 'Current and Voltage Together',
  description: 'See the conceptual relationship between voltage and current without yet doing calculations.',
  stageLabel: 'Beginner',
  prerequisites: ['lesson-2-3'],
  conceptsIntroduced: ['voltage drives current', 'current is flow caused by the source push through a closed loop'],
  initialCircuit: STANDARD_CIRCUIT,
  initialNodes: STANDARD_NODES,
  steps: [
    {
      id: 'step-1',
      text: 'Now you know two important ideas: voltage is the push, and current is the flow. Let\'s put them together. Voltage from the battery pushes current through the circuit. Without the push, there is no flow. Without a complete path, the push cannot move anything.',
      highlights: ['battery-1'],
    },
    {
      id: 'step-2',
      text: 'Close the switch and turn on the current overlay to see both ideas at work.',
      requiredAction: { type: 'toggle-switch', componentId: 'switch-1', targetState: true },
      showCurrentOverlay: true,
      highlights: ['switch-1'],
    },
    {
      id: 'step-3',
      text: 'The battery (V = voltage = push) drives current (I = flow) around the loop. The bulb experiences both: voltage pushes current through it, and the current flowing through it is what produces light.',
      showCurrentOverlay: true,
      highlights: ['battery-1', 'bulb-1'],
    },
    {
      id: 'step-4',
      text: 'Open the switch now. What changes?',
      requiredAction: { type: 'toggle-switch', componentId: 'switch-1', targetState: false },
      showCurrentOverlay: true,
      highlights: ['switch-1'],
    },
    {
      id: 'step-5',
      text: 'The current stops everywhere at once. The battery still has voltage (the push is still there), but with the loop broken, the push cannot create flow. Both voltage and current are needed for the circuit to do useful work.',
      theoryCheck: {
        question: 'What does voltage do in a circuit?',
        choices: [
          { id: 'tc-a', label: 'Voltage is the flow of electricity through the wire', isCorrect: false, explanation: 'That describes current, not voltage. Voltage is the push that causes the flow.' },
          { id: 'tc-b', label: 'Voltage is the push from the source that drives current', isCorrect: true, explanation: 'Correct! Voltage pushes, current flows.' },
          { id: 'tc-c', label: 'Voltage is the brightness of the bulb', isCorrect: false, explanation: 'Brightness is related to energy use, not directly to voltage alone.' },
        ],
        explanation: 'Voltage is the push (from the source) and current is the flow (through the loop). The push drives the flow when the circuit is closed.',
      },
    },
  ],
  challenges: [
    {
      id: 'challenge-1',
      prompt: 'Match the terms: which is the push and which is the flow?',
      type: 'choose',
      evaluationCriteria: { correctChoiceId: 'ch1-b' },
      hints: [
        'V stands for voltage, I stands for current. One pushes, the other flows.',
      ],
      choices: [
        { id: 'ch1-a', label: 'V = flow, I = push', isCorrect: false, explanation: 'It is the other way around. V (voltage) is the push, I (current) is the flow.' },
        { id: 'ch1-b', label: 'V = push, I = flow', isCorrect: true, explanation: 'Correct! Voltage (V) is the push from the source, and current (I) is the resulting flow.' },
      ],
    },
    {
      id: 'challenge-2',
      prompt: 'When the switch opens, what changes: the flow, the push, or both?',
      type: 'choose',
      evaluationCriteria: { correctChoiceId: 'ch2-b' },
      hints: [
        'Does the battery stop providing voltage when the switch opens?',
        'Does current continue to flow when the path is broken?',
      ],
      choices: [
        { id: 'ch2-a', label: 'Both the push and the flow stop', isCorrect: false, explanation: 'The battery still provides voltage (push) even when the switch is open. Only the flow stops.' },
        { id: 'ch2-b', label: 'The flow (current) stops, but the push (voltage) remains', isCorrect: true, explanation: 'Correct! The battery continues to provide voltage, but current cannot flow through an open circuit.' },
        { id: 'ch2-c', label: 'Neither changes — everything stays the same', isCorrect: false, explanation: 'Opening the switch breaks the loop, so current definitely stops.' },
      ],
    },
  ],
  theoryContent: [
    {
      title: 'Relationship between voltage and current',
      content: 'Voltage is the push provided by the source. Current is the flow that results from that push when the circuit is closed. You need both a push (voltage) and a complete path (closed circuit) for current to flow and the load to operate.',
    },
  ],
  sandboxUnlocks: [],
  availableActions: ['toggle-switch', 'drag-to-place'],
  currentOverlayAvailable: true,
  showFormulaPanel: false,
  formulasShown: [],
  theoryPageAdditions: [
    {
      id: 'theory-voltage-current-relationship',
      title: 'Relationship between voltage and current in a simple ideal circuit',
      content: 'Voltage is the push provided by the source. Current is the flow that results from that push when the circuit is closed. You need both a push (voltage) and a complete path (closed circuit) for current to flow and the load to operate.',
      sourceLesson: 'lesson-2-4',
    },
  ],
  quizzesUnlocked: ['quiz-voltage-current-relationship'],
};
