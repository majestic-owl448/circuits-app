import type { LessonConfig } from '../../../../types/lesson.ts';
import { CH9_COMPARISON_NODES } from '../../shared.ts';

export const lessonCh9_4_1: LessonConfig = {
  id: 'lesson-ch9-4-1',
  unitId: 'ch9-unit-4',
  title: 'Choose the Right Gate for the Rule',
  description: 'Learn how to start from a desired output rule and select the gate that implements it — gate choice is a design decision, not guesswork.',
  stageLabel: 'Early Digital Logic',
  prerequisites: ['lesson-ch9-3-2'],
  conceptsIntroduced: [
    'output rule drives gate selection',
    'gate choice is a design decision',
  ],
  initialNodes: CH9_COMPARISON_NODES,
  initialCircuit: [
    {
      id: 'and-1',
      type: 'and-gate',
      nodeA: 'n1',
      nodeB: 'n2',
      properties: { inputA: false, inputB: false },
      name: 'AND',
      position: { x: 150, y: 200 },
      rotation: 0,
    },
    {
      id: 'xor-1',
      type: 'xor-gate',
      nodeA: 'n3',
      nodeB: 'n4',
      properties: { inputA: false, inputB: true },
      name: 'XOR',
      position: { x: 530, y: 200 },
      rotation: 0,
    },
  ],
  steps: [
    {
      id: 'step-1',
      text: 'Choosing the right gate begins with the desired output rule — what condition must be true for the output to be HIGH? Once you can state the rule clearly, you can identify which gate implements it. Every gate family (AND, OR, NOT, NAND, NOR, XOR) has a distinct rule it enforces. Gate selection is a design decision: match the rule to the gate, not the other way around.',
      highlights: ['and-1', 'xor-1'],
    },
    {
      id: 'step-2',
      text: 'Two scenarios illustrate this. (a) The rule is: "output must be HIGH only when BOTH inputs are HIGH." This is the AND rule — AND outputs HIGH exclusively when all inputs are HIGH. (b) The rule is: "output must be HIGH only when inputs DIFFER." This is the XOR rule — XOR outputs HIGH when exactly one input is HIGH and the other is LOW. Matching scenario (a) to AND and scenario (b) to XOR is how gate selection works in practice.',
      highlights: ['and-1', 'xor-1'],
    },
    {
      id: 'step-3',
      text: 'A decision table summarizes common rules and their matching gates. If the rule is "all inputs must be true" → AND. "Any input can be true" → OR. "Exactly one input is true" → XOR. "Block one direction of a signal" → NOT. "Inverted AND: output HIGH unless all inputs are HIGH" → NAND. "Inverted OR: output HIGH only when all inputs are LOW" → NOR. Consulting this table first makes gate selection systematic rather than trial-and-error.',
      theoryCheck: {
        question: 'A design rule says: the alarm activates only when both sensors report active. Which gate implements this rule?',
        choices: [
          {
            id: 'tc-a',
            label: 'OR gate — it outputs HIGH when at least one sensor is active',
            isCorrect: false,
            explanation: 'OR would trigger the alarm if only one sensor were active. The rule requires both sensors to be active, which is the AND condition.',
          },
          {
            id: 'tc-b',
            label: 'AND gate — it outputs HIGH only when all inputs are HIGH',
            isCorrect: true,
            explanation: 'Correct. AND outputs HIGH only when every input is HIGH. Because the rule requires both sensors to be active, AND is the exact match.',
          },
          {
            id: 'tc-c',
            label: 'XOR gate — it outputs HIGH when the sensors differ',
            isCorrect: false,
            explanation: 'XOR is HIGH when inputs differ (one HIGH, one LOW). If both sensors are active (both HIGH), XOR would output LOW — the opposite of the desired alarm behavior.',
          },
        ],
        explanation: 'Gate selection starts with the rule. "Both must be active" maps directly to AND, which is the only basic gate that outputs HIGH only when all inputs are HIGH.',
      },
    },
  ],
  challenges: [
    {
      id: 'challenge-1',
      prompt: 'A gate must produce HIGH output when exactly one input is HIGH, and LOW output when both inputs are HIGH or both are LOW. Which gate implements this rule?',
      type: 'choose',
      evaluationCriteria: { correctChoiceId: 'ch1-b' },
      hints: [
        'Think about which gate is specifically sensitive to inputs being different from each other.',
        'If both inputs are the same state (both HIGH or both LOW), the output should be LOW.',
      ],
      choices: [
        {
          id: 'ch1-a',
          label: 'OR gate — it outputs HIGH when at least one input is HIGH',
          isCorrect: false,
          explanation: 'OR is HIGH when at least one input is HIGH, including when both are HIGH. The rule requires LOW when both are HIGH, so OR is not the correct match.',
        },
        {
          id: 'ch1-b',
          label: 'XOR gate — it outputs HIGH when inputs differ',
          isCorrect: true,
          explanation: 'Correct. XOR outputs HIGH when exactly one input is HIGH and the other is LOW — i.e., when inputs differ. When both are HIGH or both are LOW (same state), XOR outputs LOW.',
        },
        {
          id: 'ch1-c',
          label: 'AND gate — it outputs HIGH only when both inputs are HIGH',
          isCorrect: false,
          explanation: 'AND is HIGH only when all inputs are HIGH. The rule requires LOW when both are HIGH, so AND is the wrong choice.',
        },
      ],
    },
    {
      id: 'challenge-2',
      prompt: 'A gate must produce HIGH output whenever ANY one of its two inputs is HIGH. Which gate implements this rule?',
      type: 'choose',
      evaluationCriteria: { correctChoiceId: 'ch2-b' },
      hints: [
        'Consider which gate allows a single active input to drive the output HIGH.',
        'The only case where the output should be LOW is when both inputs are LOW.',
      ],
      choices: [
        {
          id: 'ch2-a',
          label: 'AND gate — it outputs HIGH when both inputs are HIGH',
          isCorrect: false,
          explanation: 'AND requires all inputs to be HIGH. The rule only needs at least one to be HIGH, so AND is too restrictive.',
        },
        {
          id: 'ch2-b',
          label: 'OR gate — it outputs HIGH when at least one input is HIGH',
          isCorrect: true,
          explanation: 'Correct. OR outputs HIGH when at least one input is HIGH. The only time OR is LOW is when all inputs are LOW, which matches the rule exactly.',
        },
        {
          id: 'ch2-c',
          label: 'NOT gate — it inverts a single input',
          isCorrect: false,
          explanation: 'NOT is a single-input gate that inverts its input. It cannot accept two inputs and cannot produce the "any is HIGH → output HIGH" behavior described.',
        },
      ],
    },
  ],
  theoryContent: [
    {
      title: 'Gate Selection Starts with the Rule',
      content: 'Every logic gate implements a specific output rule. Gate selection is not guesswork — it follows from clearly stating the condition under which the output should be HIGH. Once the rule is articulated ("all inputs must be HIGH", "any input can be HIGH", "inputs must differ"), the matching gate is determined.',
    },
    {
      title: 'Gate Decision Table',
      content: 'A simple lookup guides gate choice: "all must be true" → AND. "Any can be true" → OR. "Exactly one is true" → XOR. "Invert a single input" → NOT. "All must be true produces LOW" → NAND. "Any being true produces LOW" → NOR. Applying this table before building ensures the correct component is chosen from the start.',
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
      id: 'theory-ch9-gate-choice',
      title: 'Choosing the right gate for a rule',
      content: 'Gate selection is a design decision driven by the output rule: what condition must be true for the output to be HIGH? AND requires all inputs HIGH. OR requires at least one input HIGH. XOR requires exactly one input HIGH (inputs differ). NOT inverts a single input. NAND and NOR are the inverted forms of AND and OR respectively. Matching the rule to the gate — rather than guessing — is the systematic approach to logic design.',
      sourceLesson: 'lesson-ch9-4-1',
    },
  ],
  quizzesUnlocked: ['quiz-ch9-gate-choice-basics'],
};
