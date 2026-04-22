import type { LessonConfig } from '../../../../types/lesson.ts';
import { CHAPTER_10_METADATA, CH10_SIX_NODES } from '../../shared.ts';

export const lessonCh10_2_2: LessonConfig = {
  id: 'lesson-ch10-2-2',
  unitId: 'ch10-unit-2',
  title: 'Fix the Circuit Step by Step',
  description: 'Repair a multi-fault circuit iteratively: restore the open path to establish current flow, then identify the remaining value-level fault.',
  stageLabel: CHAPTER_10_METADATA.stageLabel,
  prerequisites: ['lesson-ch10-2-1'],
  conceptsIntroduced: [
    'iterative circuit debugging',
    'restoring a broken path as first repair step',
    'verifying operation after each individual fix',
  ],
  initialNodes: CH10_SIX_NODES,
  initialCircuit: [
    {
      id: 'bat-1',
      type: 'battery',
      nodeA: 'n1',
      nodeB: 'n6',
      properties: { voltage: 9 },
      name: 'Battery (9V)',
      position: { x: 120, y: 230 },
      rotation: 0,
    },
    {
      id: 'wire-top',
      type: 'wire',
      nodeA: 'n1',
      nodeB: 'n2',
      properties: { wireResistance: 0 },
      name: 'Wire',
      position: { x: 220, y: 120 },
      rotation: 0,
    },
    {
      id: 'res-series',
      type: 'resistor',
      nodeA: 'n2',
      nodeB: 'n3',
      properties: { resistance: 100 },
      name: 'Series Resistor (100Ω)',
      position: { x: 420, y: 120 },
      rotation: 0,
    },
    {
      id: 'bulb-1',
      type: 'bulb',
      nodeA: 'n3',
      nodeB: 'n4',
      properties: { resistance: 100 },
      name: 'Bulb',
      position: { x: 520, y: 230 },
      rotation: 0,
    },
    {
      id: 'wire-bottom',
      type: 'wire',
      nodeA: 'n4',
      nodeB: 'n5',
      properties: { wireResistance: 0 },
      name: 'Wire',
      position: { x: 420, y: 340 },
      rotation: 0,
    },
  ],
  steps: [
    {
      id: 'step-1',
      text: 'This circuit is broken — the return wire from the bottom of the circuit back to the battery negative terminal is missing. The path from n5 to n6 does not exist. Without this connection, no current can flow regardless of what the battery, resistor, or bulb values are. The circuit is topologically open.',
      highlights: ['bat-1'],
    },
    {
      id: 'step-2',
      text: 'Your first repair is to add the missing wire to close the current path. Once the wire is added, current will flow through battery → wire-top → res-series → bulb-1 → wire-bottom → return wire → battery. You can then evaluate whether the circuit produces the expected current and brightness, and identify any remaining value-level issues.',
      highlights: ['bulb-1', 'res-series'],
    },
    {
      id: 'step-3',
      text: 'After restoring the path and observing operation, compare the observed behavior to the expected behavior. If the bulb is too dim or too bright, there may be a value-level fault (wrong resistance, unexpected voltage drop). Each step of the repair is verified before moving to the next.',
      theoryCheck: {
        question: 'After adding the missing return wire, the bulb lights but is dimmer than expected. What type of fault is still present?',
        choices: [
          {
            id: 'tc-a',
            label: 'A topology fault — another path is still missing',
            isCorrect: false,
            explanation: 'If the bulb lights at all, current is flowing — the topology is closed. Topology faults (open paths) produce no light, not dim light.',
          },
          {
            id: 'tc-b',
            label: 'A value-level fault — the current is lower than expected, suggesting a resistance or voltage parameter is wrong',
            isCorrect: true,
            explanation: 'Correct. Dim but present light means the path is complete (topology OK) but less current flows than expected — a value-level fault such as higher-than-expected resistance or lower-than-expected voltage.',
          },
          {
            id: 'tc-c',
            label: 'No fault — dim light is normal after a repair',
            isCorrect: false,
            explanation: 'Dim light indicates less current than expected. If the designed brightness requires a specific current, dim output means a parameter fault still exists and should be diagnosed.',
          },
        ],
        explanation: 'After restoring topology, remaining symptoms (dim, bright, wrong voltage) point to value-level faults.',
      },
    },
  ],
  challenges: [
    {
      id: 'challenge-1',
      prompt: 'The circuit shown is missing the return wire from n5 to n6. Add the missing wire to complete the circuit path and allow current to flow.',
      type: 'fix',
      evaluationCriteria: { topologyCheck: 'complete' },
      hints: [
        'The circuit needs a wire connecting n5 (bottom-right) back to n6 (bottom-left, battery negative terminal).',
        'Use the connect-wire action to add the missing component to close the current loop.',
      ],
      availableComponents: ['wire'],
    },
  ],
  theoryContent: [
    {
      title: 'Iterative Debugging: One Fix at a Time',
      content: 'Multi-fault circuits require iterative repair. Make one fix, verify the result, then identify the next fault. Attempting multiple simultaneous fixes makes it impossible to know which fix caused which change in behavior. The iterative approach is slower but produces clear, reproducible understanding of each fault.',
    },
    {
      title: 'What to Check After Each Fix',
      content: 'After each repair step, ask: (1) Does current flow now? (answers whether topology is restored), (2) Is the current approximately correct? (answers whether values are correct), and (3) Are all components behaving as expected? (answers whether any secondary faults are now visible). Each affirmative answer moves you one step closer to full operation.',
    },
  ],
  sandboxUnlocks: [],
  availableActions: ['inspect', 'connect-wire'],
  currentOverlayAvailable: true,
  showFormulaPanel: true,
  formulasShown: [],
  theoryPageAdditions: [
    {
      id: 'theory-ch10-iterative-debug',
      title: 'Chapter 10: Iterative debugging discipline',
      content: 'Fix one fault at a time and verify behavior after each fix. This makes the effect of each repair observable and prevents compound confusion from overlapping changes.',
      sourceLesson: 'lesson-ch10-2-2',
    },
    {
      id: 'theory-ch10-verify-after-fix',
      title: 'Chapter 10: Verification checklist after each repair',
      content: 'After each repair: (1) Does current flow? (topology check). (2) Is current approximately correct? (value check). (3) Are all components behaving as expected? (system check). Only move to the next fault after confirming the previous one is resolved.',
      sourceLesson: 'lesson-ch10-2-2',
    },
  ],
  quizzesUnlocked: ['quiz-ch10-iterative-debugging-basics'],
};
