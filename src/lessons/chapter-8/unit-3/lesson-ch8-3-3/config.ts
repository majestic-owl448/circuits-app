import type { LessonConfig } from '../../../../types/lesson.ts';
import { CHAPTER_8_METADATA, CH8_NODES } from '../../shared.ts';

export const lessonCh8_3_3: LessonConfig = {
  id: 'lesson-ch8-3-3',
  unitId: 'ch8-unit-3',
  title: 'Use a Small Control to Affect a Larger Path',
  description: 'Understand the control path and controlled path in a transistor circuit, and see why small-signal control of a larger load is valuable.',
  stageLabel: CHAPTER_8_METADATA.stageLabel,
  prerequisites: ['lesson-ch8-3-2'],
  conceptsIntroduced: [
    'control path versus controlled path',
    'transistor makes circuit control more flexible',
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
      name: 'Controlled Load',
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
      text: 'A transistor circuit has two conceptually distinct paths. The control path carries the signal that tells the transistor what to do — on or off. The controlled path is the main circuit: battery, transistor, and load. The two paths are separate — the control does not directly power the load.',
      highlights: ['transistor-1'],
    },
    {
      id: 'step-2',
      text: 'When the control path signals "on," the transistor connects the controlled path and the load receives current. When the control signals "off," the transistor disconnects the controlled path. The load\'s operating state depends entirely on what happens in the control path — even though the two paths carry different amounts of energy.',
      highlights: ['transistor-1', 'res-1'],
      showCurrentOverlay: true,
    },
    {
      id: 'step-3',
      text: 'This is the design value of the transistor: a small, low-energy control signal can switch a larger, higher-power load path on and off. The transistor bridges the gap between the control logic and the power circuit, without the two needing to be directly connected. This makes circuit design more flexible and scalable.',
      highlights: ['transistor-1', 'res-1'],
    },
  ],
  challenges: [
    {
      id: 'challenge-1',
      prompt: 'In a transistor circuit with a control path and a controlled path, which path contains the load that the transistor switches?',
      type: 'choose',
      evaluationCriteria: { correctChoiceId: 'ch1-b' },
      hints: ['Think about which path the load is part of and which path the transistor\'s switching decision comes from.'],
      choices: [
        {
          id: 'ch1-a',
          label: 'The control path — the transistor and the load share the same signal path',
          isCorrect: false,
          explanation: 'The control path carries the signal that determines the transistor state. The load is in the controlled path, which is a separate circuit.',
        },
        {
          id: 'ch1-b',
          label: 'The controlled path — the transistor turns the load on or off based on what happens in the control path',
          isCorrect: true,
          explanation: 'Correct. The controlled path contains the load. The control path carries the signal that determines whether the transistor conducts or blocks.',
        },
        {
          id: 'ch1-c',
          label: 'Both paths share the load equally',
          isCorrect: false,
          explanation: 'The control path and the controlled path are distinct. The load is only in the controlled path.',
        },
      ],
    },
    {
      id: 'challenge-2',
      prompt: 'Why is the transistor useful when you need a small signal to control a larger load?',
      type: 'choose',
      evaluationCriteria: { correctChoiceId: 'ch2-b' },
      hints: ['Think about what would happen if the control signal had to directly power the load instead of just switching the transistor.'],
      choices: [
        {
          id: 'ch2-a',
          label: 'The transistor amplifies the control signal so it becomes powerful enough to drive the load directly',
          isCorrect: false,
          explanation: 'In the simplified model, the transistor is a switch, not an amplifier. The control signal does not directly drive the load — it only determines the transistor\'s state.',
        },
        {
          id: 'ch2-b',
          label: 'It allows a low-power control signal to switch a higher-power load path without direct connection between the two, providing circuit isolation and flexibility',
          isCorrect: true,
          explanation: 'Correct. The transistor bridges the gap between a low-energy control signal and a higher-power load path. The two are not directly connected — the transistor mediates between them.',
        },
        {
          id: 'ch2-c',
          label: 'The transistor stores energy from the control signal and releases it to the load later',
          isCorrect: false,
          explanation: 'Energy storage is the role of capacitors and inductors. The transistor is a switch — it connects or disconnects the path based on the control signal.',
        },
      ],
    },
  ],
  theoryContent: [
    {
      title: 'Control Path and Controlled Path',
      content: 'In a transistor circuit, the control path carries the signal that determines the transistor\'s state. The controlled path is the main load circuit that the transistor switches. The two paths are separate — the control signal does not directly power the load. This separation is what makes the transistor a flexible circuit element.',
    },
    {
      title: 'Small-Signal Control of a Larger Load',
      content: 'A key property of the transistor is that a small control signal can switch a larger load path. The control path and the controlled path operate at different power levels. The transistor mediates between them without requiring a direct connection, enabling circuit designs where low-power logic controls high-power loads.',
    },
  ],
  sandboxUnlocks: [],
  availableActions: ['inspect'],
  currentOverlayAvailable: true,
  showFormulaPanel: true,
  usesTimeControls: false,
  formulasShown: [],
  theoryPageAdditions: [
    {
      id: 'theory-ch8-control-path',
      title: 'Control path and controlled path',
      content: 'A transistor circuit has two distinct paths: the control path (carries the signal that sets the transistor state) and the controlled path (contains the load that the transistor switches). A small low-energy control signal in the control path determines the state of the higher-power controlled path. The transistor bridges them without requiring a direct connection.',
      sourceLesson: 'lesson-ch8-3-3',
    },
  ],
  quizzesUnlocked: ['quiz-ch8-transistor-control-basics'],
};
