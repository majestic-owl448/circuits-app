import type { LessonConfig } from '../../../../types/lesson.ts';
import { CH9_COMPARISON_NODES } from '../../shared.ts';

export const lessonCh9_5_1: LessonConfig = {
  id: 'lesson-ch9-5-1',
  unitId: 'ch9-unit-5',
  title: 'Review Challenge',
  description: 'Consolidate everything from Chapter 9 — gate rules, truth tables, gate choice, and composition — through a focused review challenge.',
  stageLabel: 'Introductory System Design',
  prerequisites: ['lesson-ch9-4-3'],
  conceptsIntroduced: [],
  initialNodes: CH9_COMPARISON_NODES,
  initialCircuit: [
    {
      id: 'and-1',
      type: 'and-gate',
      nodeA: 'n1',
      nodeB: 'n2',
      properties: { inputA: true, inputB: true },
      name: 'AND Gate',
      position: { x: 150, y: 200 },
      rotation: 0,
    },
    {
      id: 'xor-1',
      type: 'xor-gate',
      nodeA: 'n3',
      nodeB: 'n4',
      properties: { inputA: true, inputB: false },
      name: 'XOR Gate',
      position: { x: 530, y: 200 },
      rotation: 0,
    },
  ],
  steps: [
    {
      id: 'step-1',
      text: 'Let\'s consolidate the key ideas from this chapter. NOT inverts a single input — it is the simplest gate and the foundation of inversion logic. AND requires ALL inputs to be HIGH to produce a HIGH output. OR requires ANY input to be HIGH to produce a HIGH output. NAND and NOR are the inverted forms of AND and OR respectively — they produce LOW where AND/OR produce HIGH and vice versa. XOR detects difference — it is HIGH when exactly one input is HIGH. Gate choice drives output behavior: the gate you select determines the rule that governs the output.',
      highlights: ['and-1', 'xor-1'],
    },
    {
      id: 'step-2',
      text: 'Integration challenge: given a set of design rules, identify the correct gate for each. Use the rule-to-gate table: "all must be true" → AND, "any can be true" → OR, "exactly one is true" → XOR, "invert" → NOT, "inverted AND" → NAND, "inverted OR" → NOR. Applying this table systematically is the skill this chapter has been building.',
      highlights: ['and-1', 'xor-1'],
      theoryCheck: {
        question: 'Which gate produces HIGH output when exactly one of two inputs is HIGH?',
        choices: [
          {
            id: 'tc-a',
            label: 'OR gate — it is HIGH when at least one input is HIGH',
            isCorrect: false,
            explanation: 'OR is HIGH when at least one input is HIGH, including when both are HIGH. The rule "exactly one" restricts the HIGH output to the case where inputs differ — that is XOR, not OR.',
          },
          {
            id: 'tc-b',
            label: 'XOR gate — it is HIGH only when inputs differ',
            isCorrect: true,
            explanation: 'Correct. XOR is HIGH when exactly one input is HIGH (inputs differ) and LOW when both are the same state. This matches the rule precisely.',
          },
          {
            id: 'tc-c',
            label: 'AND gate — it is HIGH only when all inputs are HIGH',
            isCorrect: false,
            explanation: 'AND is HIGH only when all inputs are HIGH. When exactly one is HIGH, AND outputs LOW — the opposite of what is required.',
          },
        ],
        explanation: 'XOR is the "difference detector" gate: it outputs HIGH when inputs differ (exactly one is HIGH) and LOW when inputs are the same (both HIGH or both LOW).',
      },
    },
  ],
  challenges: [
    {
      id: 'challenge-1',
      prompt: 'A designer needs a gate that outputs HIGH when A=HIGH OR B=HIGH, but NOT when both are HIGH. Which gate matches this rule?',
      type: 'choose',
      evaluationCriteria: { correctChoiceId: 'ch1-b' },
      hints: [
        'The rule excludes the (HIGH, HIGH) combination from producing a HIGH output.',
        'Which gate is HIGH when inputs differ but LOW when both are the same?',
      ],
      choices: [
        {
          id: 'ch1-a',
          label: 'OR gate — it is HIGH when at least one input is HIGH, including when both are HIGH',
          isCorrect: false,
          explanation: 'OR is HIGH when both are HIGH, but the rule requires LOW in that case. OR does not match the "but NOT when both" restriction.',
        },
        {
          id: 'ch1-b',
          label: 'XOR gate — it is HIGH only when inputs differ, which includes (HIGH, LOW) and (LOW, HIGH) but not (HIGH, HIGH)',
          isCorrect: true,
          explanation: 'Correct. XOR outputs HIGH when exactly one input is HIGH — covering (HIGH, LOW) and (LOW, HIGH) — and LOW when both are HIGH or both are LOW. This matches the rule exactly.',
        },
        {
          id: 'ch1-c',
          label: 'NAND gate — it is LOW only when both inputs are HIGH',
          isCorrect: false,
          explanation: 'NAND is LOW when both are HIGH and HIGH otherwise (including when both are LOW). The rule requires LOW when both are HIGH, but also LOW when both are LOW — NAND does not satisfy the second condition.',
        },
      ],
    },
    {
      id: 'challenge-2',
      prompt: 'A circuit uses an AND gate but needs OR behavior. The system should activate when ANY one input is HIGH. Fix the circuit.',
      type: 'fix',
      evaluationCriteria: { correctChoiceId: 'ch2-a' },
      hints: [
        'OR activates when at least one input is HIGH — that is the "any" rule.',
        'The fix is a direct gate-type replacement.',
      ],
      choices: [
        {
          id: 'ch2-a',
          label: 'Replace AND with OR',
          isCorrect: true,
          explanation: 'Correct. OR outputs HIGH when at least one input is HIGH, which is the "any one input active" rule. Replacing AND with OR directly fixes the behavior.',
        },
        {
          id: 'ch2-b',
          label: 'Add a NOT gate before AND',
          isCorrect: false,
          explanation: 'Adding a NOT gate before AND inverts one input before it reaches the AND gate — this does not produce OR behavior. The gate type must be changed, not augmented.',
        },
        {
          id: 'ch2-c',
          label: 'Connect inputs together into a single wire before AND',
          isCorrect: false,
          explanation: 'Connecting inputs together before a gate reduces the system to a single combined input, which loses the independence of the two input signals. The correct fix is to replace AND with OR.',
        },
      ],
    },
  ],
  theoryContent: [
    {
      title: 'Chapter 9 Gate Summary',
      content: 'Six gate types have been covered: NOT (invert), AND (all must be HIGH), OR (any can be HIGH), NAND (inverted AND), NOR (inverted OR), and XOR (inputs must differ). Each implements a distinct output rule. Gate choice is always driven by the rule, not by convention or guesswork.',
    },
    {
      title: 'Rule-to-Gate Table',
      content: 'A quick reference for gate selection: "all must be true" → AND. "Any can be true" → OR. "Exactly one is true" → XOR. "Invert a single signal" → NOT. "All must be true for LOW output" → NAND. "Any being true produces LOW" → NOR. Consulting this table before building or debugging ensures the correct gate is chosen from the start.',
    },
  ],
  sandboxUnlocks: ['chapter-9-review-prompt'],
  availableActions: ['inspect'],
  currentOverlayAvailable: true,
  showFormulaPanel: true,
  usesTimeControls: false,
  formulasShown: [],
  theoryPageAdditions: [
    {
      id: 'theory-ch9-review',
      title: 'Chapter 9 Review: Logic Gates and Digital-Style Behavior',
      content: 'Chapter 9 covers the foundational vocabulary and tools of digital-style logic. NOT inverts. AND requires all inputs HIGH. OR requires any input HIGH. NAND and NOR invert their respective base gates. XOR detects difference. Gate selection is driven by the output rule, and gates can be composed into multi-stage systems that implement more complex behavior from simple pieces. System-level tracing and wrong-gate debugging complete the toolkit.',
      sourceLesson: 'lesson-ch9-5-1',
    },
  ],
  quizzesUnlocked: ['quiz-ch9-chapter-9-review-quiz'],
};
