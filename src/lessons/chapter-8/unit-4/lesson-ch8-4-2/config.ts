import type { LessonConfig } from '../../../../types/lesson.ts';
import { CHAPTER_8_METADATA, CH8_NODES } from '../../shared.ts';

export const lessonCh8_4_2: LessonConfig = {
  id: 'lesson-ch8-4-2',
  unitId: 'ch8-unit-4',
  title: 'A Simple Control Circuit',
  description: 'See how a transistor acts as a condition gate: the load only operates when the transistor\'s control is enabled, making the circuit\'s behavior state-dependent.',
  stageLabel: CHAPTER_8_METADATA.stageLabel,
  prerequisites: ['lesson-ch8-4-1'],
  conceptsIntroduced: [
    'control logic in a circuit-like form',
    'state-dependent operation',
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
      properties: { controlEnabled: false },
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
      text: 'In many real systems, a load should not simply run all the time — it should only operate when a specific condition is met. A sensor detects an event, a processor determines a response, and a component is activated as a result. The transistor models this concept in circuit form. It is a condition gate: the load path is only open when the transistor\'s control condition is satisfied.',
    },
    {
      id: 'step-2',
      text: 'Look at the circuit now. The transistor\'s control is currently disabled (controlEnabled: false). The transistor is blocking the current path, so no current reaches the load. The load is inactive. The battery is present, the wires are connected, but the condition has not been met. The circuit is structurally complete but functionally waiting.',
      highlights: ['transistor-1', 'res-1'],
      showCurrentOverlay: true,
    },
    {
      id: 'step-3',
      text: 'Now consider what changes when the control condition is met (controlEnabled: true). The transistor opens the path. Current flows from the battery through the transistor and through the load. The load is now active. Nothing else in the circuit changed — only the control state of the transistor. This is state-dependent operation: the circuit behaves differently depending on the state of the control condition.',
      highlights: ['transistor-1', 'res-1'],
      theoryCheck: {
        question: 'In the circuit shown, the transistor\'s control is currently disabled. What does that mean for the load?',
        choices: [
          {
            id: 'tc-a',
            label: 'The load operates at reduced power because the transistor partially limits current',
            isCorrect: false,
            explanation: 'In the simplified model, a disabled transistor fully blocks the path — it does not partially limit current. The load receives no current at all.',
          },
          {
            id: 'tc-b',
            label: 'The load is completely inactive because the transistor is blocking the current path',
            isCorrect: true,
            explanation: 'Correct. With the transistor\'s control disabled, the path through the transistor is blocked. No current reaches the load, so the load is completely inactive.',
          },
          {
            id: 'tc-c',
            label: 'The load operates normally because the battery is still connected',
            isCorrect: false,
            explanation: 'Battery connection alone does not guarantee load operation. The transistor sits in the path between the battery and the load. A blocked transistor breaks the path regardless of battery presence.',
          },
        ],
        explanation: 'A transistor with its control disabled blocks the current path. Even though the battery and wires are in place, the load is inactive. The transistor acts as a gate: only when the control condition is met does current flow through to the load.',
      },
    },
  ],
  challenges: [
    {
      id: 'challenge-1',
      prompt: 'The transistor in the circuit has its control disabled. What happens to the load?',
      type: 'choose',
      evaluationCriteria: { correctChoiceId: 'ch1-b' },
      hints: [
        'A disabled transistor blocks the path between the battery and the load.',
        'Consider whether current can reach the load when the transistor is blocking.',
      ],
      choices: [
        {
          id: 'ch1-a',
          label: 'The load receives reduced current — the transistor acts like a high-resistance element when disabled',
          isCorrect: false,
          explanation: 'In the simplified model used in this course, a disabled transistor fully blocks the path. It does not act as a high-resistance element — it blocks the path entirely.',
        },
        {
          id: 'ch1-b',
          label: 'The load receives no current — the transistor blocks the path when control is disabled',
          isCorrect: true,
          explanation: 'Correct. A disabled transistor blocks the current path. The load is completely inactive because no current can travel through the blocked transistor.',
        },
        {
          id: 'ch1-c',
          label: 'The load operates normally because the circuit is otherwise complete',
          isCorrect: false,
          explanation: 'A complete structural circuit does not guarantee operation. The transistor is in the path — if the transistor blocks, the load is inactive regardless of everything else.',
        },
      ],
    },
    {
      id: 'challenge-2',
      prompt: 'Why is a transistor-controlled circuit more flexible than a simple switch for automated systems?',
      type: 'choose',
      evaluationCriteria: { correctChoiceId: 'ch2-b' },
      hints: [
        'Think about what controls a mechanical switch versus what controls a transistor.',
        'Consider how automation works in systems without physical human intervention.',
      ],
      choices: [
        {
          id: 'ch2-a',
          label: 'Because transistors carry more current than mechanical switches at the same voltage',
          isCorrect: false,
          explanation: 'Current capacity is a separate concern. The flexibility advantage of a transistor is about how it is controlled, not how much current it can handle.',
        },
        {
          id: 'ch2-b',
          label: 'The transistor can be switched on or off by electronic signals from other parts of a larger system, enabling automation without physical intervention',
          isCorrect: true,
          explanation: 'Correct. A mechanical switch requires physical action. A transistor responds to an electronic control signal, which can come from a sensor, a microcontroller, or another circuit stage. This makes it suitable for automated systems.',
        },
        {
          id: 'ch2-c',
          label: 'Because transistors consume no power when operating, unlike mechanical switches',
          isCorrect: false,
          explanation: 'Transistors do consume power when conducting. The flexibility advantage is in how they are controlled — electronically rather than physically.',
        },
      ],
    },
  ],
  theoryContent: [
    {
      title: 'State-Dependent Circuit Operation',
      content: 'A transistor-controlled circuit has two distinct operating states: the transistor enabled (load active) and the transistor disabled (load inactive). The circuit\'s behavior depends on the state of the control condition. This is the fundamental concept behind digital logic, automated systems, and signal-controlled switching.',
    },
    {
      title: 'Transistor as a Condition Gate',
      content: 'Think of a transistor as a gate that is opened by a condition. When the condition is met — the control is enabled — the gate opens and current flows. When the condition is not met, the gate remains closed and no current flows. This is the simplest form of control logic expressed as a circuit element.',
    },
  ],
  sandboxUnlocks: ['transistor-control-prompt'],
  availableActions: ['inspect', 'toggle-switch'],
  currentOverlayAvailable: true,
  showFormulaPanel: true,
  usesTimeControls: false,
  formulasShown: [],
  theoryPageAdditions: [
    {
      id: 'theory-ch8-simple-control',
      title: 'Simple Transistor-Controlled Circuits',
      content: 'In a simple transistor control circuit, the transistor sits in the path between the source and the load. When the transistor\'s control is enabled, current flows and the load operates. When disabled, the path is blocked. This pattern is the foundation of all electronic switching, automation, and digital logic.',
      sourceLesson: 'lesson-ch8-4-2',
    },
  ],
  quizzesUnlocked: ['quiz-ch8-simple-control-circuit-basics'],
};
