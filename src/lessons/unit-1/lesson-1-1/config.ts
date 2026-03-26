import type { LessonConfig } from '../../../types/lesson.ts';
import { STANDARD_CIRCUIT, STANDARD_NODES } from '../../shared.ts';

export const lesson1_1: LessonConfig = {
  id: 'lesson-1-1',
  unitId: 'unit-1',
  title: 'Turn On the Light',
  description: 'Discover that closing a switch can turn on a bulb in a simple DC circuit.',
  stageLabel: 'Beginner',
  prerequisites: [],
  conceptsIntroduced: ['source', 'switch', 'bulb as load', 'open circuit', 'closed circuit', 'complete loop'],
  initialCircuit: STANDARD_CIRCUIT,
  initialNodes: STANDARD_NODES,
  steps: [
    {
      id: 'step-1',
      text: 'Welcome to your first circuit! In front of you is a simple electrical circuit. It has a battery (the source of energy), a bulb (the load that uses energy), and a switch. Right now, the switch is open and no electricity can flow.',
      highlights: ['battery-1', 'bulb-1', 'switch-1'],
    },
    {
      id: 'step-2',
      text: 'Notice that the bulb is off. When a circuit has a gap or break in it, we call it an open circuit. No electricity flows through an open circuit, so the bulb stays dark.',
      highlights: ['switch-1', 'bulb-1'],
    },
    {
      id: 'step-3',
      text: 'Now, click on the switch to close it. Closing the switch removes the gap and creates a complete path for electricity to flow.',
      requiredAction: { type: 'toggle-switch', componentId: 'switch-1', targetState: true },
      highlights: ['switch-1'],
    },
    {
      id: 'step-4',
      text: 'The bulb lights up! When the switch is closed, electricity can flow from the battery, through the wire, through the bulb, through the switch, and back to the battery. This complete path is called a closed circuit.',
      highlights: ['bulb-1'],
    },
    {
      id: 'step-5',
      text: 'Try opening the switch again by clicking it. Watch what happens to the bulb.',
      requiredAction: { type: 'toggle-switch', componentId: 'switch-1', targetState: false },
      highlights: ['switch-1'],
    },
    {
      id: 'step-6',
      text: 'The bulb turns off again. The circuit is open once more. A circuit must form a complete loop for electricity to flow and the bulb to light.',
      theoryCheck: {
        question: 'What must be true for a bulb to light in a circuit?',
        choices: [
          { id: 'tc-a', label: 'The switch must be open', isCorrect: false, explanation: 'An open switch creates a gap, preventing electricity from flowing.' },
          { id: 'tc-b', label: 'The circuit must form a complete closed loop', isCorrect: true, explanation: 'Correct! Electricity needs a complete path to flow and light the bulb.' },
          { id: 'tc-c', label: 'The bulb must be removed', isCorrect: false, explanation: 'Removing the bulb would break the circuit and there would be nothing to light.' },
        ],
        explanation: 'A circuit must be a complete closed loop for electricity to flow. The switch must be closed so there are no gaps in the path.',
      },
    },
  ],
  challenges: [
    {
      id: 'challenge-1',
      prompt: 'Which switch position allows electricity to flow through the circuit?',
      type: 'choose',
      evaluationCriteria: { correctChoiceId: 'ch1-b' },
      hints: [
        'Think about what "closed" means for a switch. Does it create a gap or remove one?',
      ],
      choices: [
        { id: 'ch1-a', label: 'Open (switch up, gap visible)', isCorrect: false, explanation: 'An open switch creates a gap in the circuit, so electricity cannot flow.' },
        { id: 'ch1-b', label: 'Closed (switch down, no gap)', isCorrect: true, explanation: 'Correct! A closed switch completes the path, allowing electricity to flow.' },
      ],
    },
    {
      id: 'challenge-2',
      prompt: 'Look at this circuit: the battery is connected to a bulb and a switch, but the switch is open. Is this circuit open or closed?',
      type: 'choose',
      evaluationCriteria: { correctChoiceId: 'ch2-a' },
      hints: [
        'An open switch creates a break in the circuit path.',
      ],
      choices: [
        { id: 'ch2-a', label: 'Open circuit — no electricity flows', isCorrect: true, explanation: 'Correct! The open switch breaks the loop, so it is an open circuit.' },
        { id: 'ch2-b', label: 'Closed circuit — electricity flows', isCorrect: false, explanation: 'The switch is open, which means the path is broken. No electricity can flow.' },
      ],
    },
  ],
  theoryContent: [
    {
      title: 'What is a circuit?',
      content: 'A circuit is a path that electricity can flow through. It needs a source of energy (like a battery), something that uses the energy (like a bulb), and a complete path connecting them.',
    },
    {
      title: 'Open and closed circuits',
      content: 'An open circuit has a gap or break, so electricity cannot flow. A closed circuit forms a complete loop with no gaps, allowing electricity to flow.',
    },
    {
      title: 'Source, switch, and load',
      content: 'The source (battery) provides energy. The switch controls whether the circuit is open or closed. The load (bulb) uses the electrical energy, converting it into light and heat.',
    },
  ],
  sandboxUnlocks: ['battery', 'switch', 'bulb', 'wire'],
  availableActions: ['toggle-switch'],
  currentOverlayAvailable: false,
  showFormulaPanel: false,
  formulasShown: [],
  theoryPageAdditions: [
    {
      id: 'theory-what-is-a-circuit',
      title: 'What is a circuit?',
      content: 'A circuit is a path that electricity can flow through. It needs a source of energy (like a battery), something that uses the energy (like a bulb), and a complete path connecting them.',
      sourceLesson: 'lesson-1-1',
    },
    {
      id: 'theory-open-closed-circuits',
      title: 'Open and closed circuits',
      content: 'An open circuit has a gap or break, so electricity cannot flow. A closed circuit forms a complete loop with no gaps, allowing electricity to flow.',
      sourceLesson: 'lesson-1-1',
    },
    {
      id: 'theory-source-switch-load',
      title: 'Source, switch, and load',
      content: 'The source (battery) provides energy. The switch controls whether the circuit is open or closed. The load (bulb) uses the electrical energy, converting it into light and heat.',
      sourceLesson: 'lesson-1-1',
    },
  ],
  quizzesUnlocked: [],
};
