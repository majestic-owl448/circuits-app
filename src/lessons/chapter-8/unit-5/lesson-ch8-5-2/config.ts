import type { LessonConfig } from '../../../../types/lesson.ts';
import { CHAPTER_8_METADATA, CH8_NODES } from '../../shared.ts';

export const lessonCh8_5_2: LessonConfig = {
  id: 'lesson-ch8-5-2',
  unitId: 'ch8-unit-5',
  title: 'Larger Integration Challenge',
  description: 'Design a two-stage system that rectifies AC to pulsed DC and then gates the load through a transistor control — combining directionality and control in a single circuit.',
  stageLabel: CHAPTER_8_METADATA.stageLabel,
  prerequisites: ['lesson-ch8-5-1'],
  conceptsIntroduced: [
    'larger system integration of directionality, conversion, and control',
  ],
  initialNodes: CH8_NODES,
  initialCircuit: [
    {
      id: 'ac-1',
      type: 'ac-source',
      nodeA: 'n1',
      nodeB: 'n3',
      properties: { amplitude: 9, frequency: 60 },
      name: 'AC Source',
      position: { x: 150, y: 250 },
      rotation: 0,
    },
    {
      id: 'res-1',
      type: 'resistor',
      nodeA: 'n2',
      nodeB: 'n4',
      properties: { resistance: 100 },
      name: 'DC Load',
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
      text: 'This is a multi-stage design problem. The circuit has an AC source on the left and a DC load on the right. Two things need to happen: first, the AC signal must be rectified so the load only receives current in one direction (the forward half of each AC cycle). Second, the rectified current should only reach the load when a control condition is met. Two components are missing: a diode for rectification and a transistor for control.',
      highlights: ['ac-1', 'res-1'],
    },
    {
      id: 'step-2',
      text: 'Identify what is missing and what each component contributes. The diode goes between the AC source output and the transistor — it blocks the reverse half of each AC cycle so only pulsed DC continues forward. The transistor goes between the diode output and the load — it gates whether that pulsed DC can reach the load at all. The order matters: rectification first, then control gating. Without both stages, the system is either undirected or uncontrolled.',
      theoryCheck: {
        question: 'In the two-stage system (AC source → diode → transistor → DC load), which component is responsible for each function?',
        choices: [
          {
            id: 'tc-a',
            label: 'Diode: control gating. Transistor: rectification.',
            isCorrect: false,
            explanation: 'The roles are reversed. The diode handles rectification (directional blocking); the transistor handles control gating (switching the load path based on a control condition).',
          },
          {
            id: 'tc-b',
            label: 'Diode: rectification (blocks reverse half of AC). Transistor: control gating (switches load based on control condition).',
            isCorrect: true,
            explanation: 'Correct. The diode\'s directional behavior blocks the reverse half of each AC cycle, producing pulsed DC. The transistor then gates whether that pulsed DC reaches the load based on the control condition.',
          },
          {
            id: 'tc-c',
            label: 'Both the diode and transistor perform rectification together.',
            isCorrect: false,
            explanation: 'Rectification is performed by the diode alone through its directional blocking behavior. The transistor\'s role is control gating, not rectification.',
          },
        ],
        explanation: 'In a two-stage active-component system, each component has a distinct role: the diode rectifies (blocks the reverse half-cycle using its directional behavior) and the transistor gates the load (blocks the forward path unless the control condition is met). Separating these roles makes the system understandable and diagnosable.',
      },
    },
  ],
  challenges: [
    {
      id: 'challenge-1',
      prompt: 'Complete the system: add a diode for rectification between the AC source output and the transistor, and a transistor for control between the diode and the load.',
      type: 'build',
      evaluationCriteria: { topologyCheck: 'complete' },
      hints: [
        'The diode should be placed between the AC source output (n2 side) and the transistor input.',
        'The transistor should be placed between the diode output and the load input.',
        'Both components must be present for the system to be complete.',
      ],
      availableComponents: ['diode', 'transistor', 'wire'],
    },
    {
      id: 'challenge-2',
      prompt: 'In the completed system, what would happen if the diode and transistor positions were swapped — transistor placed before the diode?',
      type: 'choose',
      evaluationCriteria: { correctChoiceId: 'ch2-b' },
      hints: [
        'Think about what each component does and whether the order changes what each component is protecting or operating on.',
        'Would the diode still be rectifying the AC source, or would it now be filtering the transistor output?',
      ],
      choices: [
        {
          id: 'ch2-a',
          label: 'The circuit would be completely non-functional — neither component can operate unless the diode comes first',
          isCorrect: false,
          explanation: 'The circuit can still complete structurally with the components swapped. The issue is not functionality at a basic level but the roles each component plays — and those roles shift when the order changes.',
        },
        {
          id: 'ch2-b',
          label: 'The circuit would still function structurally, but the diode would now be protecting the transistor from reverse current rather than rectifying the AC — the roles would be different even if the circuit completes',
          isCorrect: true,
          explanation: 'Correct. With transistor before diode, the transistor gates the full AC signal. The diode, placed after the transistor, would then block reverse current at the transistor\'s output rather than rectifying the incoming AC. The circuit completes, but the diode is no longer acting as the primary rectification stage.',
        },
        {
          id: 'ch2-c',
          label: 'Nothing would change — the order of series components does not affect circuit behavior',
          isCorrect: false,
          explanation: 'The order of active components in a series path matters because each component operates on whatever signal it receives from the previous stage. Swapping order changes what each component is working with.',
        },
      ],
    },
  ],
  theoryContent: [
    {
      title: 'Multi-Stage Active Component Systems',
      content: 'A circuit can include both a diode and a transistor in series, each performing a distinct function. The diode stage handles rectification — blocking the reverse half of an AC signal. The transistor stage handles control gating — switching whether the rectified signal reaches the load. Each stage has a clear, separable role.',
    },
    {
      title: 'Why Component Order Matters',
      content: 'In a multi-stage series circuit, each component operates on the output of the previous stage. Placing the diode first means it operates on the raw AC signal, rectifying it. Placing the transistor first means it gates the raw AC signal, and the diode then operates on the transistor\'s output. Order determines what each component does, even if the same components are present.',
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
      id: 'theory-ch8-integration',
      title: 'Integrating Directionality, Conversion, and Control',
      content: 'A complete active-component system can include both a diode and a transistor in sequence. The diode provides directional enforcement (rectification), and the transistor provides control gating. Together, they form a two-stage pipeline: the AC input is first shaped by the diode (only forward current passes), and then gated by the transistor (only reaches the load when control is enabled). Understanding this pipeline is the foundation for more advanced active-component design.',
      sourceLesson: 'lesson-ch8-5-2',
    },
  ],
  quizzesUnlocked: ['quiz-ch8-integrated-active-component-reasoning'],
};
