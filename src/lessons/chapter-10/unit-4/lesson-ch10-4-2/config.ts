import type { LessonConfig } from '../../../../types/lesson.ts';
import { CH10_NODES, CHAPTER_10_METADATA } from '../../shared.ts';

export const lessonCh10_4_2: LessonConfig = {
  id: 'lesson-ch10-4-2',
  unitId: 'ch10-unit-4',
  title: 'Multi-Stage System Challenge',
  description: 'Build and debug a multi-stage circuit system that integrates components from different domains — combining power supply, active switching, and load stages.',
  stageLabel: CHAPTER_10_METADATA.stageLabel,
  prerequisites: ['lesson-ch10-4-1'],
  conceptsIntroduced: [
    'multi-stage system reasoning',
    'stage isolation in troubleshooting',
    'cross-stage dependency analysis',
  ],
  initialNodes: CH10_NODES,
  initialCircuit: [
    {
      id: 'bat-1',
      type: 'battery',
      nodeA: 'n1',
      nodeB: 'n3',
      properties: { voltage: 12 },
      name: 'Battery (12V)',
      position: { x: 150, y: 250 },
      rotation: 0,
    },
    {
      id: 'res-1',
      type: 'resistor',
      nodeA: 'n1',
      nodeB: 'n2',
      properties: { resistance: 220 },
      name: 'Resistor (220Ω)',
      position: { x: 325, y: 150 },
      rotation: 0,
    },
    {
      id: 'transistor-1',
      type: 'transistor',
      nodeA: 'n2',
      nodeB: 'n4',
      properties: { controlEnabled: false },
      name: 'Transistor (Disabled)',
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
      text: 'Multi-stage systems have a clear structure: Stage 1 is the power supply (the battery providing the source voltage), Stage 2 is the control/switching stage (the transistor gating the current path), and Stage 3 is the load stage (the resistor consuming power). Each stage has a specific role, and the output of each stage feeds the next. In this circuit, the transistor acts as a controllable switch in Stage 2 — when its control input is disabled, the entire current path from Stage 1 to the load in Stage 3 is blocked. This is the key behavior of a multi-stage active system: a failure in any intermediate stage breaks the whole chain.',
      highlights: ['bat-1', 'transistor-1', 'res-1'],
    },
    {
      id: 'step-2',
      text: 'Troubleshooting a multi-stage system follows a systematic strategy: test each stage in isolation before diagnosing cross-stage interactions. Start at the source (Stage 1): is the battery providing voltage? Then check the intermediate stage (Stage 2): is the transistor in the correct state? Finally verify the load stage (Stage 3): is the load drawing current when it should? In the challenge below, a multi-stage system fails and you must identify which stage contains the fault. Stage isolation prevents misdiagnosing a Stage 2 fault as a Stage 1 or Stage 3 fault.',
      highlights: ['transistor-1'],
    },
  ],
  challenges: [
    {
      id: 'challenge-1',
      prompt: 'Fix the multi-stage circuit. The battery (Stage 1) is functional at 12V. The transistor (Stage 2) has its control input disabled, blocking all current. The resistor (Stage 3) receives no current as a result. Enable the current path by enabling the transistor\'s control input and complete the circuit.',
      type: 'fix',
      evaluationCriteria: { topologyCheck: 'complete' },
      hints: [
        'The battery and resistor are functioning correctly — the fault is in the transistor control stage.',
        'Enable the transistor control input to allow current to flow through the complete path from Stage 1 through Stage 2 to Stage 3.',
        'A complete path requires: battery → resistor → transistor (enabled) → back to battery.',
      ],
    },
    {
      id: 'challenge-2',
      prompt: 'A three-stage system (power supply → transistor switch → bulb) shows no light. Stage testing reveals: the battery measures 9V (Stage 1 OK). The bulb resistance checks out (Stage 3 OK). Which stage is faulty and what is the most likely root cause?',
      type: 'choose',
      evaluationCriteria: { correctChoiceId: 'ch2-b' },
      hints: [
        'Stage isolation means testing each stage independently.',
        'If Stage 1 and Stage 3 both pass their individual tests, the fault is in the remaining stage.',
        'What controls whether current flows through the transistor in Stage 2?',
      ],
      choices: [
        {
          id: 'ch2-a',
          label: 'Stage 1 (power supply) — the battery voltage must have dropped under load even though it read 9V',
          isCorrect: false,
          explanation: 'Stage 1 was tested and read 9V — it passes the isolation test. A passing stage test means that stage is not the cause. The fault has been isolated to the remaining untested stage, which is Stage 2.',
        },
        {
          id: 'ch2-b',
          label: 'Stage 2 (transistor switch) — the transistor control input is likely disabled or disconnected, blocking the current path between Stage 1 and Stage 3',
          isCorrect: true,
          explanation: 'Correct. Stage 1 tested OK (9V present) and Stage 3 tested OK (bulb resistance normal). By elimination, the fault is in Stage 2. The transistor in the switching stage is the only element that can block current between a working source and a working load. A disabled or disconnected control input is the most likely cause.',
        },
        {
          id: 'ch2-c',
          label: 'Stage 3 (bulb) — the bulb filament must be broken even though resistance measured correctly',
          isCorrect: false,
          explanation: 'Stage 3 was tested and passed — the bulb resistance checked out. A passing resistance test means the filament is intact. Stage 3 is not the fault location. Stage isolation rules out both Stage 1 and Stage 3, leaving Stage 2 as the confirmed fault stage.',
        },
      ],
    },
  ],
  theoryContent: [
    {
      title: 'Multi-Stage System Architecture',
      content: 'A multi-stage circuit system has three typical stages: (1) Power supply — the source providing voltage and current, (2) Control/switching — the component that gates or regulates the flow of current (often a transistor or switch), and (3) Load — the component that consumes the power (resistor, bulb, or other device). Each stage depends on the previous stage to pass its output forward. A fault in any stage breaks the signal chain from that point onward, causing all downstream stages to fail even if they are functioning correctly.',
    },
    {
      title: 'Stage Isolation Troubleshooting Strategy',
      content: 'When a multi-stage system fails, use stage isolation to locate the fault: test each stage independently in sequence, starting at the source. A stage that passes its individual test (correct voltage, expected resistance, functioning logic) is not the fault location — mark it as OK and proceed to the next stage. The first stage that fails its test is the fault location. This strategy prevents misattributing a downstream symptom (no current in Stage 3) to a passing stage (Stage 1 or Stage 2 that is functioning normally).',
    },
  ],
  sandboxUnlocks: [],
  availableActions: ['inspect', 'toggle-switch'],
  currentOverlayAvailable: true,
  showFormulaPanel: true,
  usesTimeControls: false,
  formulasShown: [],
  theoryPageAdditions: [
    {
      id: 'theory-ch10-multi-stage',
      title: 'Multi-Stage System Design and Stage Isolation',
      content: 'Multi-stage circuits have a power stage, a control/switching stage, and a load stage. Faults in intermediate stages break the signal chain to all downstream stages. Stage isolation testing — verifying each stage independently before concluding about system behavior — is the systematic troubleshooting strategy. A passing individual stage test rules that stage out as the fault location, narrowing the search to the remaining untested stages.',
      sourceLesson: 'lesson-ch10-4-2',
    },
  ],
  quizzesUnlocked: ['quiz-ch10-multi-stage-basics'],
};
