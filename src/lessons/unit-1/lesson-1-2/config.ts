import type { LessonConfig } from '../../../types/lesson.ts';
import { STANDARD_CIRCUIT, STANDARD_NODES } from '../../shared.ts';

/** Circuit with the top wire missing, so the loop is broken. */
const circuitMissingWire = STANDARD_CIRCUIT.filter((c) => c.id !== 'wire-1');

export const lesson1_2: LessonConfig = {
  id: 'lesson-1-2',
  unitId: 'unit-1',
  title: 'A Circuit Is a Loop',
  description: 'Understand that the bulb lights only when the full path from source through load and back is complete.',
  stageLabel: 'Beginner',
  prerequisites: ['lesson-1-1'],
  conceptsIntroduced: ['loop as a full path', 'return path matters', 'broken path means no operation'],
  initialCircuit: circuitMissingWire,
  initialNodes: STANDARD_NODES,
  steps: [
    {
      id: 'step-1',
      text: 'This circuit looks similar to the one you saw before, but something is different. Look carefully at the path between the components. Can you spot what is missing?',
      highlights: ['battery-1', 'bulb-1', 'switch-1'],
    },
    {
      id: 'step-2',
      text: 'The wire connecting the battery to the bulb along the top is missing! Without it, there is no complete path from one side of the battery through the bulb and back. The circuit is broken.',
    },
    {
      id: 'step-3',
      text: 'Even if you close the switch, the bulb will not light because the loop is incomplete. A circuit must form a full loop — electricity leaves the source, travels through every component, and returns to the source.',
      requiredAction: { type: 'toggle-switch', componentId: 'switch-1', targetState: true },
      highlights: ['switch-1'],
    },
    {
      id: 'step-4',
      text: 'Now drag the missing wire into place to complete the loop between the battery and the bulb.',
      requiredAction: { type: 'place-component', componentType: 'wire' },
      highlights: ['n1', 'n2'],
    },
    {
      id: 'step-5',
      text: 'Excellent! The circuit is now a complete loop. The bulb lights because electricity can flow from the battery, through the wire, through the bulb, through the switch, and back to the battery. The return path matters just as much as the path going out.',
      highlights: ['bulb-1'],
    },
    {
      id: 'step-6',
      text: 'Remember: if any single connection in the loop is missing, the entire circuit fails. Every link in the chain matters.',
      theoryCheck: {
        question: 'Which of these diagrams shows a complete loop?',
        choices: [
          { id: 'tc-a', label: 'Battery connected to bulb with a gap on one side', isCorrect: false, explanation: 'A gap on any side breaks the loop. Both the outgoing and return paths must be complete.' },
          { id: 'tc-b', label: 'Battery connected to bulb and switch with all wires forming a full path', isCorrect: true, explanation: 'Correct! All connections are present, forming a complete loop.' },
          { id: 'tc-c', label: 'Battery alone with no connections', isCorrect: false, explanation: 'A battery by itself is not a circuit — there is no path for electricity to travel.' },
        ],
        explanation: 'A complete loop means every component is connected in an unbroken path. If any connection is missing, the loop is broken and the circuit will not work.',
      },
    },
  ],
  challenges: [
    {
      id: 'challenge-1',
      prompt: 'This circuit has a broken connection. Fix it so the bulb can light.',
      type: 'fix',
      initialCircuit: circuitMissingWire,
      initialNodes: STANDARD_NODES,
      evaluationCriteria: { circuitMustBeClosed: true },
      hints: [
        'Look for where the path is broken. Which two nodes are not connected?',
        'The wire between the battery and the bulb is missing. Place it to complete the loop.',
      ],
    },
    {
      id: 'challenge-2',
      prompt: 'Which of these circuits forms a complete loop that allows the bulb to light?',
      type: 'choose',
      evaluationCriteria: { correctChoiceId: 'ch2-b' },
      hints: [
        'Trace the path from the battery through each component and back. Does it form an unbroken loop?',
      ],
      choices: [
        { id: 'ch2-a', label: 'Battery, bulb, and switch connected but with no return wire to the battery', isCorrect: false, explanation: 'Without a return path, the loop is incomplete and no electricity flows.' },
        { id: 'ch2-b', label: 'Battery, wire, bulb, and switch all connected in an unbroken loop', isCorrect: true, explanation: 'Correct! Every component is connected, forming a full loop so electricity can flow.' },
        { id: 'ch2-c', label: 'Bulb and switch connected to each other but not to any battery', isCorrect: false, explanation: 'Without a source of energy, there is nothing to push electricity through the circuit.' },
      ],
    },
  ],
  theoryContent: [
    {
      title: 'Why the return path matters',
      content: 'Electricity must travel in a complete loop. It leaves one side of the battery, passes through the components, and must return to the other side. If the return path is broken, no electricity flows.',
    },
    {
      title: 'Loop structure in a simple circuit',
      content: 'A simple circuit forms a single loop: source to load and back. Every connection in this loop is essential. Even one missing wire prevents the circuit from working.',
    },
  ],
  sandboxUnlocks: [],
  availableActions: ['toggle-switch', 'drag-to-place'],
  currentOverlayAvailable: false,
  showFormulaPanel: false,
  formulasShown: [],
  theoryPageAdditions: [
    {
      id: 'theory-return-path',
      title: 'Why the return path matters',
      content: 'Electricity must travel in a complete loop. It leaves one side of the battery, passes through the components, and must return to the other side. If the return path is broken, no electricity flows.',
      sourceLesson: 'lesson-1-2',
    },
    {
      id: 'theory-loop-structure',
      title: 'Loop structure in a simple circuit',
      content: 'A simple circuit forms a single loop: source to load and back. Every connection in this loop is essential. Even one missing wire prevents the circuit from working.',
      sourceLesson: 'lesson-1-2',
    },
  ],
  quizzesUnlocked: ['quiz-complete-loop'],
};
