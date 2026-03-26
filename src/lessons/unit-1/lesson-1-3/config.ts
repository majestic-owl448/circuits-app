import type { LessonConfig } from '../../../types/lesson.ts';
import { STANDARD_CIRCUIT, STANDARD_NODES } from '../../shared.ts';

export const lesson1_3: LessonConfig = {
  id: 'lesson-1-3',
  unitId: 'unit-1',
  title: 'Everyday Switching and Circuit Control',
  description: 'Connect simulated switch behavior to familiar real-life light-switch behavior.',
  stageLabel: 'Beginner',
  prerequisites: ['lesson-1-2'],
  conceptsIntroduced: ['switch as circuit control', 'same circuit principle behind everyday on and off behavior'],
  initialCircuit: STANDARD_CIRCUIT,
  initialNodes: STANDARD_NODES,
  steps: [
    {
      id: 'step-1',
      text: 'Every time you flip a light switch at home, you are opening or closing an electrical circuit. The switch in this simulation works the same way: it either completes the loop or breaks it.',
      highlights: ['switch-1'],
    },
    {
      id: 'step-2',
      text: 'Close the switch to turn on the bulb, just like flipping a light switch on.',
      requiredAction: { type: 'toggle-switch', componentId: 'switch-1', targetState: true },
      highlights: ['switch-1'],
    },
    {
      id: 'step-3',
      text: 'The bulb lights up. In your home, closing the wall switch does the same thing — it completes the circuit from the power source, through the wiring, through the light fixture, and back.',
      highlights: ['bulb-1'],
    },
    {
      id: 'step-4',
      text: 'Now open the switch to turn it off.',
      requiredAction: { type: 'toggle-switch', componentId: 'switch-1', targetState: false },
      highlights: ['switch-1'],
    },
    {
      id: 'step-5',
      text: 'The bulb goes dark again. The switch is a control element: it decides whether the circuit is complete or broken. Every on/off action in everyday life relies on this same principle.',
      theoryCheck: {
        question: 'What does the switch change in the circuit?',
        choices: [
          { id: 'tc-a', label: 'It changes the amount of energy in the battery', isCorrect: false, explanation: 'The switch does not affect the battery directly. It controls the path.' },
          { id: 'tc-b', label: 'It opens or closes the circuit path', isCorrect: true, explanation: 'Correct! The switch controls whether the loop is complete or broken.' },
          { id: 'tc-c', label: 'It changes the color of the bulb', isCorrect: false, explanation: 'The switch does not change the bulb itself, only whether electricity reaches it.' },
        ],
        explanation: 'A switch controls the circuit by opening or closing the path. When closed, the circuit is complete and the bulb lights. When open, the path is broken.',
      },
    },
    {
      id: 'step-6',
      text: 'Now try building this same circuit from scratch. You know the components: a battery, a wire, a bulb, and a switch arranged in a loop.',
    },
  ],
  challenges: [
    {
      id: 'challenge-1',
      prompt: 'Build a simple switch circuit: place all components so the bulb can be turned on and off with the switch. A reference diagram is shown.',
      type: 'build',
      evaluationCriteria: { circuitMustBeClosed: true, customCheck: 'has-switch-and-bulb' },
      hints: [
        'You need a battery, a wire, a bulb, and a switch forming a complete loop.',
        'Make sure every component is connected so there are no gaps in the path.',
      ],
    },
    {
      id: 'challenge-2',
      prompt: 'Recreate the light-switch circuit again, this time without the reference diagram visible.',
      type: 'build',
      evaluationCriteria: { circuitMustBeClosed: true, customCheck: 'has-switch-and-bulb' },
      hints: [
        'Remember: battery, wire, bulb, and switch in a loop.',
        'The switch must be part of the loop so it can control whether electricity flows.',
      ],
    },
  ],
  theoryContent: [
    {
      title: 'Switches as control elements',
      content: 'A switch is a control element in a circuit. It does not provide energy or use energy — it simply controls whether the path is complete. Every light switch, power button, and on/off control in everyday devices works on this principle.',
    },
  ],
  sandboxUnlocks: [],
  availableActions: ['toggle-switch', 'drag-to-place'],
  currentOverlayAvailable: false,
  showFormulaPanel: false,
  formulasShown: [],
  theoryPageAdditions: [
    {
      id: 'theory-switches-control',
      title: 'Switches as control elements',
      content: 'A switch is a control element in a circuit. It does not provide energy or use energy — it simply controls whether the path is complete. Every light switch, power button, and on/off control in everyday devices works on this principle.',
      sourceLesson: 'lesson-1-3',
    },
  ],
  quizzesUnlocked: ['quiz-source-switch-load'],
};
