import type { LessonConfig } from '../../../../types/lesson.ts';
import { CHAPTER_8_METADATA, CH8_NODES } from '../../shared.ts';

export const lessonCh8_1_1: LessonConfig = {
  id: 'lesson-ch8-1-1',
  unitId: 'ch8-unit-1',
  title: 'Meet the Diode',
  description: 'Discover the diode — a directional component that allows current in one orientation and blocks it in the other.',
  stageLabel: CHAPTER_8_METADATA.stageLabel,
  prerequisites: ['chapter-7-complete'],
  conceptsIntroduced: [
    'diode',
    'active component',
    'directional behavior',
    'a component can allow one behavior in one orientation and a different result in the opposite',
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
      id: 'diode-1',
      type: 'diode',
      nodeA: 'n1',
      nodeB: 'n2',
      properties: { isForwardBiased: true },
      name: 'Diode',
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
      text: 'This is a diode — a new kind of component. Unlike a resistor or capacitor, the diode cares about direction. It allows current to pass when oriented one way, and blocks current when oriented the other way. Orientation is everything for a diode.',
      highlights: ['diode-1'],
    },
    {
      id: 'step-2',
      text: 'In this circuit the diode is forward-biased, meaning it is oriented in the direction that allows current to flow. Current travels from the battery through the diode and through the load. The load is receiving current and operating normally.',
      highlights: ['diode-1', 'res-1'],
      showCurrentOverlay: true,
    },
    {
      id: 'step-3',
      text: 'Components like the diode that control or shape circuit behavior — rather than simply impeding or storing energy — are called active components in the instructional model used in this course. Transistors, which you will meet in Unit 3, are also active components.',
      theoryCheck: {
        question: 'What makes a diode different from a resistor?',
        choices: [
          {
            id: 'tc-a',
            label: 'A diode stores energy while a resistor dissipates it',
            isCorrect: false,
            explanation: 'Diodes do not store energy. Energy storage is the role of capacitors and inductors.',
          },
          {
            id: 'tc-b',
            label: 'A diode has directional behavior — it conducts in one orientation and blocks in the other, while a resistor impedes current equally in both directions',
            isCorrect: true,
            explanation: 'Correct. The defining feature of a diode is its directionality. A resistor has no preferred direction.',
          },
          {
            id: 'tc-c',
            label: 'A diode produces voltage while a resistor consumes it',
            isCorrect: false,
            explanation: 'A diode does not produce voltage. It controls the direction of current flow.',
          },
        ],
        explanation: 'A diode is a directional component — it conducts in one orientation and blocks in the other. A resistor impedes current equally regardless of direction.',
      },
    },
  ],
  challenges: [
    {
      id: 'challenge-1',
      prompt: 'A component is placed in a circuit and allows current to flow in one orientation but not the other. What kind of component is this?',
      type: 'choose',
      evaluationCriteria: { correctChoiceId: 'ch1-b' },
      hints: ['Think about which component has directional behavior as its defining characteristic.'],
      choices: [
        {
          id: 'ch1-a',
          label: 'A resistor',
          isCorrect: false,
          explanation: 'A resistor impedes current equally in both directions. It does not have directional behavior.',
        },
        {
          id: 'ch1-b',
          label: 'A diode',
          isCorrect: true,
          explanation: 'Correct. A diode is the component defined by its directional behavior — it conducts in one orientation and blocks in the other.',
        },
        {
          id: 'ch1-c',
          label: 'A capacitor',
          isCorrect: false,
          explanation: 'A capacitor stores charge and blocks DC current. Its defining behavior is energy storage, not one-way directionality.',
        },
      ],
    },
    {
      id: 'challenge-2',
      prompt: 'Which best describes the diode\'s role in the simplified instructional model?',
      type: 'choose',
      evaluationCriteria: { correctChoiceId: 'ch2-b' },
      hints: ['Consider what the diode does to the direction of current flow through a circuit.'],
      choices: [
        {
          id: 'ch2-a',
          label: 'It increases voltage for components downstream of it',
          isCorrect: false,
          explanation: 'A diode does not boost voltage. It controls whether current can pass based on orientation.',
        },
        {
          id: 'ch2-b',
          label: 'It allows current to flow only in one direction',
          isCorrect: true,
          explanation: 'Correct. In the simplified model, the diode is a one-way gate for current.',
        },
        {
          id: 'ch2-c',
          label: 'It limits the maximum current that can flow through the circuit',
          isCorrect: false,
          explanation: 'Limiting maximum current is the role of a resistor or a fuse. The diode\'s role is directional gating.',
        },
      ],
    },
  ],
  theoryContent: [
    {
      title: 'What is a Diode?',
      content: 'A diode is a component with directional behavior. In the simplified model used in this course, a diode in the forward orientation (forward-biased) allows current to flow. A diode in the reverse orientation blocks current. This makes the diode fundamentally different from passive components like resistors.',
    },
    {
      title: 'Active Components',
      content: 'Components that control or shape circuit behavior — rather than simply impeding or storing energy — are called active components. Diodes and transistors are the two active components introduced in this chapter.',
    },
  ],
  sandboxUnlocks: ['diode'],
  availableActions: ['inspect', 'toggle-switch'],
  currentOverlayAvailable: true,
  showFormulaPanel: true,
  usesTimeControls: false,
  formulasShown: [],
  theoryPageAdditions: [
    {
      id: 'theory-ch8-what-is-diode',
      title: 'What is a diode?',
      content: 'A diode is a directional component. It conducts current in one orientation (forward-biased) and blocks current in the other (reverse-biased). This one-way behavior makes diodes useful for protecting circuits, shaping signals, and converting AC to DC.',
      sourceLesson: 'lesson-ch8-1-1',
    },
  ],
  quizzesUnlocked: ['quiz-ch8-diode-basics'],
};
