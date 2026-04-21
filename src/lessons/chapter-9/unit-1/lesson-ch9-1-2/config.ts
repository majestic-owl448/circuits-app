import type { LessonConfig } from '../../../../types/lesson.ts';
import { CHAPTER_9_METADATA, CH9_GATE_NODES } from '../../shared.ts';

export const lessonCh9_1_2: LessonConfig = {
  id: 'lesson-ch9-1-2',
  unitId: 'ch9-unit-1',
  title: 'One Input Can Control One Output',
  description: 'Explore single-input state mapping and the intuition behind how transistor arrangements give rise to AND-style and OR-style rules.',
  stageLabel: CHAPTER_9_METADATA.stageLabel,
  prerequisites: ['lesson-ch9-1-1'],
  conceptsIntroduced: [
    'single-input control',
    'state mapping',
    'output as a logical result of input',
    'bridge: series transistors → AND-style; parallel → OR-style',
  ],
  initialNodes: CH9_GATE_NODES,
  initialCircuit: [
    {
      id: 'transistor-1',
      type: 'transistor',
      nodeA: 'g1',
      nodeB: 'g2',
      properties: { controlEnabled: true },
      name: 'Input (High) → Output follows',
      position: { x: 325, y: 250 },
      rotation: 0,
    },
  ],
  steps: [
    {
      id: 'step-1',
      text: 'This is the simplest state mapping: one input, one output. When the input is HIGH, the output is HIGH. When the input is LOW, the output is LOW. The output directly mirrors the input. This is not very useful on its own — but it establishes the idea that a circuit can compute a result from its inputs.',
      highlights: ['transistor-1'],
    },
    {
      id: 'step-2',
      text: 'Now consider two transistors in SERIES — both control inputs must be HIGH for current to reach the output. If either is LOW, the path is blocked. This implements an AND rule: output is HIGH only when input A AND input B are both HIGH. Two transistors in PARALLEL instead: either control HIGH allows current through. This implements an OR rule: output is HIGH when input A OR input B (or both) is HIGH.',
    },
    {
      id: 'step-3',
      text: 'This is how gate circuits are built from simpler components — transistor arrangements implement logical rules. In this chapter, we will work with abstracted gate components (NOT, AND, OR, and more) rather than deriving every transistor arrangement. The underlying principle is the same: the output state is a logical result of the input states.',
    },
  ],
  challenges: [
    {
      id: 'challenge-1',
      prompt: 'A single transistor switch is used. The input goes LOW. What happens to the output?',
      type: 'choose',
      evaluationCriteria: { correctChoiceId: 'ch1-b' },
      hints: ['Think about what happens to the transistor\'s path when the control signal is absent.'],
      choices: [
        {
          id: 'ch1-a',
          label: 'The output stays HIGH — the transistor holds its last state',
          isCorrect: false,
          explanation: 'A basic transistor switch does not latch. When the control goes LOW, the transistor immediately blocks the current path.',
        },
        {
          id: 'ch1-b',
          label: 'The output goes LOW — the transistor blocks and the output path is inactive',
          isCorrect: true,
          explanation: 'Correct. When the input goes LOW, the transistor blocks the current path, and the output becomes inactive (LOW).',
        },
        {
          id: 'ch1-c',
          label: 'The output inverts to HIGH — LOW input produces HIGH output in a basic transistor',
          isCorrect: false,
          explanation: 'A basic transistor switch mirrors its input — LOW in produces LOW out. Inversion requires a specific circuit configuration (like a NOT gate).',
        },
      ],
    },
    {
      id: 'challenge-2',
      prompt: 'Two switches in series both need to be closed for the output to activate. What logical rule does this implement?',
      type: 'choose',
      evaluationCriteria: { correctChoiceId: 'ch2-a' },
      hints: ['Consider what "in series" means for the conditions required to complete the path.'],
      choices: [
        {
          id: 'ch2-a',
          label: 'AND — both conditions (switches) must be true simultaneously for the output to activate',
          isCorrect: true,
          explanation: 'Correct. Series switches require all switches to be closed, which is the AND rule: every input condition must be met.',
        },
        {
          id: 'ch2-b',
          label: 'OR — either switch being closed is enough to activate the output',
          isCorrect: false,
          explanation: 'OR applies to parallel switches, where any one closed switch completes the path. Series switches require all to be closed.',
        },
        {
          id: 'ch2-c',
          label: 'NOT — the output activates when the switches are open',
          isCorrect: false,
          explanation: 'NOT describes inversion of a single input. Two series switches both needing to be closed is the AND pattern.',
        },
      ],
    },
  ],
  theoryContent: [
    {
      title: 'Single-Input Control Patterns',
      content: 'The simplest logic pattern is one input controlling one output. When the input is HIGH, the output is HIGH. When the input is LOW, the output is LOW. This direct mapping is the baseline from which more complex gate rules are built.',
    },
    {
      title: 'Conceptual Bridge: From Transistor Switches to Gate Rules',
      content: 'Gate-style logic is built from transistor arrangements. Two transistors in series require both control inputs to be HIGH for current to pass — this is the AND rule. Two transistors in parallel require only one control input to be HIGH — this is the OR rule. In this chapter we work with abstracted gate components, but the underlying principle is that output state is a logical result of input states.',
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
      id: 'theory-ch9-single-input',
      title: 'Single-input control patterns',
      content: 'The simplest logic pattern maps one input directly to one output. HIGH in → HIGH out; LOW in → LOW out. This direct mapping establishes the concept that a circuit computes a result from its inputs.',
      sourceLesson: 'lesson-ch9-1-2',
    },
    {
      id: 'theory-ch9-switch-to-gate',
      title: 'Conceptual bridge from transistor switches to gate rules',
      content: 'Transistors in series implement AND-style behavior (both must be on). Transistors in parallel implement OR-style behavior (either can be on). Gate components are abstracted versions of these transistor arrangements, allowing logical rules to be specified without drawing every transistor.',
      sourceLesson: 'lesson-ch9-1-2',
    },
  ],
  quizzesUnlocked: ['quiz-ch9-single-input-control-basics'],
};
