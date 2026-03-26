import type { LessonConfig } from '../../../types/lesson.ts';
import { STANDARD_CIRCUIT, STANDARD_NODES } from '../../shared.ts';

/** Circuit with the switch open and wire missing for the fix challenge. */
const circuitBrokenWire = STANDARD_CIRCUIT.filter((c) => c.id !== 'wire-1');

export const lesson2_2: LessonConfig = {
  id: 'lesson-2-2',
  unitId: 'unit-2',
  title: 'Current as Flow',
  description: 'Learn that current is electrical flow through a closed circuit.',
  stageLabel: 'Beginner',
  prerequisites: ['lesson-2-1'],
  conceptsIntroduced: ['current', 'flow requires a complete path', 'current stops when the loop is open'],
  initialCircuit: STANDARD_CIRCUIT,
  initialNodes: STANDARD_NODES,
  steps: [
    {
      id: 'step-1',
      text: 'You have seen that closing a circuit lets the bulb light up. But what exactly is happening inside the wires? When the circuit is closed, something flows through it. That flow is called current.',
    },
    {
      id: 'step-2',
      text: 'Current is the flow of electricity through a circuit. It only exists when the path is complete — when the circuit is closed. If the circuit is open, current stops immediately.',
    },
    {
      id: 'step-3',
      text: 'Close the switch and watch for the current-flow overlay, which is now available for the first time. It will show you the direction of current in the circuit.',
      requiredAction: { type: 'toggle-switch', componentId: 'switch-1', targetState: true },
      showCurrentOverlay: true,
      highlights: ['switch-1'],
    },
    {
      id: 'step-4',
      text: 'See the animated arrows? They represent current flowing through the loop. Current leaves the battery, travels through the wire, through the bulb, through the switch, and returns to the battery.',
      showCurrentOverlay: true,
      highlights: ['battery-1', 'wire-1', 'bulb-1', 'switch-1'],
    },
    {
      id: 'step-5',
      text: 'Now open the switch. Watch what happens to the current-flow overlay.',
      requiredAction: { type: 'toggle-switch', componentId: 'switch-1', targetState: false },
      showCurrentOverlay: true,
      highlights: ['switch-1'],
    },
    {
      id: 'step-6',
      text: 'The arrows disappear. When the circuit is open, there is no complete path, so no current flows. The symbol for current is I.',
      theoryCheck: {
        question: 'Does current flow in an open circuit?',
        choices: [
          { id: 'tc-a', label: 'Yes, current always flows as long as there is a battery', isCorrect: false, explanation: 'A battery provides the push, but current cannot flow if the path is broken.' },
          { id: 'tc-b', label: 'No, current only flows in a closed circuit', isCorrect: true, explanation: 'Correct! Current requires a complete, unbroken loop to flow.' },
        ],
        explanation: 'Current flows only when the circuit is closed and forms a complete loop. An open circuit stops all current flow.',
      },
    },
  ],
  challenges: [
    {
      id: 'challenge-1',
      prompt: 'Is current flowing in this circuit? The switch is closed and all connections are complete.',
      type: 'choose',
      evaluationCriteria: { correctChoiceId: 'ch1-a' },
      hints: [
        'Check if the circuit forms a complete loop with no gaps.',
      ],
      choices: [
        { id: 'ch1-a', label: 'Yes — the circuit is closed, so current flows', isCorrect: true, explanation: 'Correct! A closed circuit with a complete loop allows current to flow.' },
        { id: 'ch1-b', label: 'No — there is no current', isCorrect: false, explanation: 'The circuit is closed and complete, so current does flow.' },
      ],
    },
    {
      id: 'challenge-2',
      prompt: 'This circuit has a missing wire, so current cannot flow. Fix it so that current can flow through the bulb.',
      type: 'fix',
      initialCircuit: circuitBrokenWire,
      initialNodes: STANDARD_NODES,
      evaluationCriteria: { circuitMustBeClosed: true },
      hints: [
        'Find the gap in the loop and place the missing wire.',
        'Connect node n1 to node n2 with a wire to complete the path.',
      ],
    },
  ],
  theoryContent: [
    {
      title: 'What is current?',
      content: 'Current (symbol: I) is the flow of electricity through a circuit. It is like water flowing through a pipe — it moves continuously through the loop as long as the path is complete.',
    },
    {
      title: 'Current flows only in a closed loop',
      content: 'If any part of the circuit path is broken, current stops everywhere in the circuit at once. There is no partial flow — either the whole loop carries current, or none of it does.',
    },
  ],
  sandboxUnlocks: ['current-overlay'],
  availableActions: ['toggle-switch', 'drag-to-place'],
  currentOverlayAvailable: true,
  showFormulaPanel: false,
  formulasShown: [],
  theoryPageAdditions: [
    {
      id: 'theory-what-is-current',
      title: 'What is current?',
      content: 'Current (symbol: I) is the flow of electricity through a circuit. It is like water flowing through a pipe — it moves continuously through the loop as long as the path is complete.',
      sourceLesson: 'lesson-2-2',
    },
    {
      id: 'theory-current-closed-loop',
      title: 'Current flows only in a closed loop',
      content: 'If any part of the circuit path is broken, current stops everywhere in the circuit at once. There is no partial flow — either the whole loop carries current, or none of it does.',
      sourceLesson: 'lesson-2-2',
    },
  ],
  quizzesUnlocked: ['quiz-current-basics'],
};
