import type { LessonConfig } from '../../../../types/lesson.ts';
import { CHAPTER_8_METADATA, CH8_NODES } from '../../shared.ts';

export const lessonCh8_1_3: LessonConfig = {
  id: 'lesson-ch8-1-3',
  unitId: 'ch8-unit-1',
  title: 'Diodes in a DC Circuit',
  description: 'Use a diode intentionally in a DC circuit to ensure current reaches the load only in the intended direction.',
  stageLabel: CHAPTER_8_METADATA.stageLabel,
  prerequisites: ['lesson-ch8-1-2'],
  conceptsIntroduced: [
    'diode as a functional design choice',
    'directionality used intentionally',
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
      text: 'You have seen that diodes conduct in one direction and block in the other. This makes them more than just passive parts — they are design tools. By placing a diode in the right orientation, you can enforce a direction constraint on a circuit.',
    },
    {
      id: 'step-2',
      text: 'The goal here is to ensure the load only receives current when current flows in the intended direction. Without the diode, a reversed connection or unexpected reverse current could reach the load. Adding a forward-biased diode between the source and load solves this.',
    },
    {
      id: 'step-3',
      text: 'With the diode placed correctly, current flows from the battery through the diode and to the load. If the source were ever reversed, the diode would block that reverse current before it reached the load. The diode acts as a one-way gate — a deliberate design choice.',
      highlights: ['res-1'],
      showCurrentOverlay: true,
    },
  ],
  challenges: [
    {
      id: 'challenge-1',
      prompt: 'Build a circuit where the diode ensures current reaches the load only in the intended direction. Connect source, diode, and load.',
      type: 'build',
      evaluationCriteria: { topologyCheck: 'complete' },
      hints: [
        'Place the battery, diode, and load resistor in series.',
        'Make sure the diode is oriented in the forward direction — from the positive side of the battery toward the load.',
      ],
      availableComponents: ['battery', 'diode', 'resistor', 'wire'],
    },
    {
      id: 'challenge-2',
      prompt: 'Why would you choose a diode over a switch for direction-based protection in a simple circuit?',
      type: 'choose',
      evaluationCriteria: { correctChoiceId: 'ch2-b' },
      hints: ['Think about what a switch requires versus what a diode does automatically.'],
      choices: [
        {
          id: 'ch2-a',
          label: 'A diode is cheaper to manufacture than a mechanical switch in all cases',
          isCorrect: false,
          explanation: 'Cost is not the defining reason. The functional difference is what matters here.',
        },
        {
          id: 'ch2-b',
          label: 'A diode automatically enforces directionality without needing manual control, making it useful for protection without adding an active control step',
          isCorrect: true,
          explanation: 'Correct. A diode enforces direction automatically. A switch requires someone or something to open or close it — adding an extra control requirement.',
        },
        {
          id: 'ch2-c',
          label: 'A switch can only be used in AC circuits, so a diode is needed for DC',
          isCorrect: false,
          explanation: 'Switches work in both AC and DC circuits. The distinction here is about automatic directionality, not circuit type.',
        },
      ],
    },
  ],
  theoryContent: [
    {
      title: 'Using a Diode Intentionally',
      content: 'A diode can be placed deliberately in a circuit to enforce a direction constraint. By orienting the diode in the forward direction, the designer ensures that current can only reach the load via the intended path. This protects the load from reverse current without requiring any manual intervention.',
    },
    {
      title: 'Diode vs Switch for Direction Protection',
      content: 'A mechanical switch requires external action to open or close. A diode enforces directionality automatically based on the circuit conditions alone. For passive direction-based protection in a simple DC circuit, the diode requires no extra control logic.',
    },
  ],
  sandboxUnlocks: [],
  availableActions: ['inspect', 'drag-to-place', 'connect-wire', 'delete-component'],
  currentOverlayAvailable: true,
  showFormulaPanel: true,
  usesTimeControls: false,
  formulasShown: [],
  theoryPageAdditions: [
    {
      id: 'theory-ch8-diode-dc-use',
      title: 'Using a diode in a simple DC circuit',
      content: 'Placing a forward-biased diode in series between a source and a load ensures that current can only reach the load in the intended direction. If the source polarity is ever reversed, the diode blocks the reverse current automatically. This is a common circuit protection technique that requires no active control.',
      sourceLesson: 'lesson-ch8-1-3',
    },
  ],
  quizzesUnlocked: ['quiz-ch8-diode-use-in-simple-circuits'],
};
