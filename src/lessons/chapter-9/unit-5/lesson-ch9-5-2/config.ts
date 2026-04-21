import type { LessonConfig } from '../../../../types/lesson.ts';
import { CH9_GATE_NODES } from '../../shared.ts';

export const lessonCh9_5_2: LessonConfig = {
  id: 'lesson-ch9-5-2',
  unitId: 'ch9-unit-5',
  title: 'Larger Integration Challenge',
  description: 'Design a two-gate logic system that combines XOR and AND stages to produce a specific compound output rule — integrating gate selection, composition, and diagnosis.',
  stageLabel: 'Introductory System Design',
  prerequisites: ['lesson-ch9-5-1'],
  conceptsIntroduced: [
    'integration across switching/control and logic behavior',
  ],
  initialNodes: CH9_GATE_NODES,
  initialCircuit: [
    {
      id: 'or-1',
      type: 'or-gate',
      nodeA: 'g1',
      nodeB: 'g2',
      properties: { inputA: false, inputB: false },
      name: 'Stage 1: OR',
      position: { x: 300, y: 250 },
      rotation: 0,
    },
  ],
  steps: [
    {
      id: 'step-1',
      text: 'This integration challenge builds a small digital-style system from scratch. The required behavior: the output must be HIGH only when inputs A and B differ AND input C is also HIGH. This rule cannot be implemented by a single gate — it requires two stages. Stage 1: XOR(A, B) — produces HIGH when A and B differ. Stage 2: AND(Stage 1 output, C) — produces HIGH only when both the XOR result and C are HIGH. The partially built circuit shows Stage 1 using an OR gate, which is incorrect and will need to be identified in the diagnosis challenge.',
      highlights: ['or-1'],
    },
    {
      id: 'step-2',
      text: 'Identify and build the correct two-gate chain. Stage 1 must be XOR — it detects when A and B differ. Stage 2 must be AND — it gates the XOR result against input C. The connection between stages is critical: the output node of the XOR gate must be the input node of the AND gate. With the correct gates in the correct order, the system outputs HIGH for exactly the input combinations (A≠B AND C=HIGH).',
    },
  ],
  challenges: [
    {
      id: 'challenge-1',
      prompt: 'Build a logic system where the output is HIGH only when A and B differ AND C is HIGH. Use two gates: an XOR gate for Stage 1 (A, B inputs) followed by an AND gate for Stage 2 (XOR output and C).',
      type: 'build',
      evaluationCriteria: { topologyCheck: 'complete' },
      hints: [
        'Stage 1 is XOR — place it to accept inputs A and B.',
        'Stage 2 is AND — its two inputs are the XOR output and input C.',
        'Connect the output of the XOR gate to one input of the AND gate.',
      ],
      availableComponents: ['xor-gate', 'and-gate', 'wire'],
    },
    {
      id: 'challenge-2',
      prompt: 'A logic system almost works but fails when A=LOW, B=LOW, C=HIGH — it produces HIGH instead of LOW. What is the root cause?',
      type: 'diagnose',
      evaluationCriteria: { correctChoiceId: 'ch2-b' },
      hints: [
        'Trace Stage 1 for inputs A=LOW, B=LOW. What does each gate type produce?',
        'XOR(LOW, LOW) = LOW. NAND(LOW, LOW) = HIGH. Which result would cause AND(result, HIGH) = HIGH?',
      ],
      choices: [
        {
          id: 'ch2-a',
          label: 'The AND gate is missing — there is nothing gating on C, so the Stage 1 output passes directly to the output',
          isCorrect: false,
          explanation: 'If the AND gate were missing, the system would just produce the Stage 1 output directly. The system does have two stages — the issue is the wrong gate type in Stage 1, not a missing AND gate.',
        },
        {
          id: 'ch2-b',
          label: 'The first stage uses NAND instead of XOR — NAND(LOW, LOW) = HIGH, then AND(HIGH, C=HIGH) = HIGH, which is wrong because A=LOW and B=LOW means they do not differ',
          isCorrect: true,
          explanation: 'Correct. XOR(LOW, LOW) = LOW, so AND(LOW, HIGH) = LOW — the correct output. But NAND(LOW, LOW) = HIGH, so AND(HIGH, HIGH) = HIGH — the wrong output. The root cause is NAND in Stage 1 instead of XOR. Replacing Stage 1 with XOR fixes the failure.',
        },
        {
          id: 'ch2-c',
          label: 'The two stages are connected in the wrong order — AND must come before XOR for this rule',
          isCorrect: false,
          explanation: 'The order is correct: XOR detects difference first, then AND gates the result against C. Reversing the order (AND first, then XOR) would change the logic entirely. The issue is not the order but the wrong gate type in Stage 1.',
        },
      ],
    },
  ],
  theoryContent: [
    {
      title: 'Two-Stage Logic System Design',
      content: 'Some output rules require two gates working in sequence. The design process: (1) identify the sub-rule that the first stage must implement, (2) identify the sub-rule that combines the first stage output with remaining inputs, (3) select the matching gate for each stage, (4) connect the stages so the output of Stage 1 feeds into Stage 2. For the rule "A and B differ AND C is HIGH", Stage 1 is XOR(A, B) and Stage 2 is AND(XOR output, C).',
    },
    {
      title: 'Diagnosing Stage-Level Errors',
      content: 'In a multi-stage system, bugs are often isolated to a single stage. To diagnose, find a test input where the actual output diverges from the expected output, then trace through each stage to find where the divergence originates. If Stage 1 uses NAND instead of XOR, inputs (LOW, LOW) will produce HIGH from Stage 1 (because NAND(LOW, LOW) = HIGH) — a traceable error. Fixing the stage type restores correct behavior.',
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
      id: 'theory-ch9-integration',
      title: 'Integrating switching and logic behavior',
      content: 'A complete digital-style system may require multiple gate stages, each implementing part of a compound output rule. The design process maps sub-rules to gate types and connects the stages in sequence. Diagnosis in multi-stage systems follows the same tracing method: find the input combination that reveals the error, then locate the stage where the wrong gate type is causing the divergence. This integration of design, composition, and diagnosis is the full digital-style reasoning toolkit.',
      sourceLesson: 'lesson-ch9-5-2',
    },
  ],
  quizzesUnlocked: ['quiz-ch9-integrated-digital-style-reasoning-basics'],
};
