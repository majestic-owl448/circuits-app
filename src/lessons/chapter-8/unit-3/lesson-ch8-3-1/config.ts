import type { LessonConfig } from '../../../../types/lesson.ts';
import { CHAPTER_8_METADATA, CH8_NODES } from '../../shared.ts';

export const lessonCh8_3_1: LessonConfig = {
  id: 'lesson-ch8-3-1',
  unitId: 'ch8-unit-3',
  title: 'Meet the Transistor',
  description: 'Discover the transistor — an active component that uses a separate control signal to allow or block a circuit path.',
  stageLabel: CHAPTER_8_METADATA.stageLabel,
  prerequisites: ['lesson-ch8-2-3'],
  conceptsIntroduced: [
    'transistor',
    'simplified switching/control role',
    'one part of a circuit can influence another',
  ],
  initialNodes: CH8_NODES,
  initialCircuit: [
    {
      id: 'bat-1',
      type: 'battery',
      nodeA: 'n1',
      nodeB: 'n3',
      properties: { voltage: 9 },
      name: 'Battery (9V)',
      position: { x: 150, y: 250 },
      rotation: 0,
    },
    {
      id: 'transistor-1',
      type: 'transistor',
      nodeA: 'n1',
      nodeB: 'n2',
      properties: { controlEnabled: true },
      name: 'Transistor',
      position: { x: 325, y: 150 },
      rotation: 0,
    },
    {
      id: 'res-1',
      type: 'resistor',
      nodeA: 'n2',
      nodeB: 'n4',
      properties: { resistance: 100 },
      name: 'Load',
      position: { x: 500, y: 250 },
      rotation: 0,
    },
    {
      id: 'wire-1',
      type: 'wire',
      nodeA: 'n3',
      nodeB: 'n4',
      properties: { wireResistance: 0 },
      name: 'Wire',
      position: { x: 325, y: 350 },
      rotation: 0,
    },
  ],
  steps: [
    {
      id: 'step-1',
      text: 'This is a transistor — a second type of active component. The diode responds to the direction of current in the circuit itself. The transistor is different: it responds to a separate control signal to decide whether to allow or block the main circuit path. One part of a circuit can influence another.',
      highlights: ['transistor-1'],
    },
    {
      id: 'step-2',
      text: 'In this circuit the transistor\'s control is enabled. The transistor conducts, and current flows from the battery through the transistor to the load. The load is receiving current and operating. The control signal is "on," so the transistor acts like a closed switch.',
      highlights: ['transistor-1', 'res-1'],
      showCurrentOverlay: true,
      theoryCheck: {
        question: 'What does a transistor do in the simplified instructional model?',
        choices: [
          {
            id: 'tc-a',
            label: 'It stores energy in a magnetic field, like an inductor',
            isCorrect: false,
            explanation: 'Energy storage in a magnetic field is the role of an inductor, not a transistor.',
          },
          {
            id: 'tc-b',
            label: 'It acts as a controlled switch — a separate control signal determines whether current can flow through the main circuit path',
            isCorrect: true,
            explanation: 'Correct. In the simplified model, the transistor is a controlled switch: the control signal decides whether the main path conducts or blocks.',
          },
          {
            id: 'tc-c',
            label: 'It converts AC to DC like a diode rectifier',
            isCorrect: false,
            explanation: 'AC-to-DC conversion is the role of rectifier circuits using diodes. The transistor\'s role is controlled switching.',
          },
        ],
        explanation: 'In the simplified model, a transistor is a controlled switch. A separate control signal turns the transistor on (conducting) or off (blocking).',
      },
    },
    {
      id: 'step-3',
      text: 'If the control signal were disabled, the transistor would block the current path — just like an open switch. The load would receive no current. The transistor gives you electronic control over whether the load operates, without needing to physically open or close a mechanical switch.',
    },
  ],
  challenges: [
    {
      id: 'challenge-1',
      prompt: 'Which component can control whether a load operates based on a separate control signal rather than its own orientation?',
      type: 'choose',
      evaluationCriteria: { correctChoiceId: 'ch1-b' },
      hints: ['Think about which component responds to an external control signal rather than to circuit direction.'],
      choices: [
        {
          id: 'ch1-a',
          label: 'A diode',
          isCorrect: false,
          explanation: 'A diode responds to its orientation relative to current direction — not to a separate control signal.',
        },
        {
          id: 'ch1-b',
          label: 'A transistor',
          isCorrect: true,
          explanation: 'Correct. The transistor uses a separate control signal to determine whether the main circuit path conducts.',
        },
        {
          id: 'ch1-c',
          label: 'A resistor',
          isCorrect: false,
          explanation: 'A resistor impedes current passively. It does not respond to control signals.',
        },
      ],
    },
    {
      id: 'challenge-2',
      prompt: 'What is the best beginner-friendly description of a transistor in the simplified model?',
      type: 'choose',
      evaluationCriteria: { correctChoiceId: 'ch2-b' },
      hints: ['Think about what the transistor has in common with a switch, and what makes it different.'],
      choices: [
        {
          id: 'ch2-a',
          label: 'A component that converts voltage into current automatically',
          isCorrect: false,
          explanation: 'Voltage-to-current conversion describes Ohm\'s Law in a resistor, not the transistor\'s role.',
        },
        {
          id: 'ch2-b',
          label: 'A switch that can be turned on or off by a separate control signal, allowing one part of the circuit to control another',
          isCorrect: true,
          explanation: 'Correct. In the simplified model, the transistor is a controlled switch — its state is determined by an external control, not by manual contact.',
        },
        {
          id: 'ch2-c',
          label: 'A component that blocks current in one direction, like a diode',
          isCorrect: false,
          explanation: 'That describes a diode. A transistor is controlled by a separate signal, not by current direction.',
        },
      ],
    },
  ],
  theoryContent: [
    {
      title: 'What is a Transistor?',
      content: 'A transistor is an active component that uses a separate control signal to open or close a circuit path. In the simplified model, when the control is enabled the transistor conducts (path is closed); when the control is disabled the transistor blocks (path is open). One part of the circuit influences another through the transistor.',
    },
    {
      title: 'Transistor vs Diode',
      content: 'Both are active components, but they work differently. A diode responds to its orientation relative to the direction of current in the circuit. A transistor responds to a separate control signal. The diode is passive in the sense that it cannot be externally switched on and off; the transistor can.',
    },
  ],
  sandboxUnlocks: ['transistor'],
  availableActions: ['inspect', 'toggle-switch'],
  currentOverlayAvailable: true,
  showFormulaPanel: true,
  usesTimeControls: false,
  formulasShown: [],
  theoryPageAdditions: [
    {
      id: 'theory-ch8-what-is-transistor',
      title: 'What is a transistor?',
      content: 'A transistor is an active component controlled by a separate signal. In the simplified instructional model, an enabled control signal causes the transistor to conduct (like a closed switch), and a disabled control signal causes it to block (like an open switch). This allows one part of a circuit to control another.',
      sourceLesson: 'lesson-ch8-3-1',
    },
  ],
  quizzesUnlocked: ['quiz-ch8-transistor-basics'],
};
