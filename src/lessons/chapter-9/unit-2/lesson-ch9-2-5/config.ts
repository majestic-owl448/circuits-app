import type { LessonConfig } from '../../../../types/lesson.ts';
import { CHAPTER_9_METADATA, CH9_COMPARISON_NODES } from '../../shared.ts';

export const lessonCh9_2_5: LessonConfig = {
  id: 'lesson-ch9-2-5',
  unitId: 'ch9-unit-2',
  title: 'Compare NOT, AND, and OR Using Truth Tables',
  description: 'Place NOT, AND, and OR truth tables side by side to see how the same inputs can produce different outputs depending on gate choice.',
  stageLabel: CHAPTER_9_METADATA.stageLabel,
  prerequisites: ['lesson-ch9-2-4'],
  conceptsIntroduced: [
    'gate comparison using truth tables',
    'same inputs can produce different outputs depending on gate',
    'gate choice is part of design',
  ],
  initialNodes: CH9_COMPARISON_NODES,
  initialCircuit: [
    {
      id: 'and-gate-1',
      type: 'and-gate',
      nodeA: 'n1',
      nodeB: 'n2',
      properties: { inputA: false, inputB: false },
      name: 'AND',
      position: { x: 210, y: 200 },
      rotation: 0,
    },
    {
      id: 'or-gate-1',
      type: 'or-gate',
      nodeA: 'n3',
      nodeB: 'n4',
      properties: { inputA: false, inputB: false },
      name: 'OR',
      position: { x: 590, y: 200 },
      rotation: 0,
    },
  ],
  steps: [
    {
      id: 'step-1',
      text: 'Compare the truth tables for NOT, AND, and OR side by side. NOT (1 input): 0→1, 1→0. AND (2 inputs): 00→0, 10→0, 01→0, 11→1. OR (2 inputs): 00→0, 10→1, 01→1, 11→1. Each gate produces a different output pattern from the same set of inputs. The gate you choose determines what rule your circuit implements.',
      highlights: ['and-gate-1', 'or-gate-1'],
    },
    {
      id: 'step-2',
      text: 'Focus on the A=HIGH, B=LOW case for AND and OR: AND → LOW (B is not HIGH, so the strict rule fails). OR → HIGH (A is HIGH, which is enough). Same inputs, opposite outputs. The gate choice alone determines which result you get. This makes gate selection a design decision, not just a component choice.',
      highlights: ['and-gate-1', 'or-gate-1'],
    },
    {
      id: 'step-3',
      text: 'Truth tables make this comparison systematic and reduce reliance on memory. Rather than asking "which gate do I need?" from intuition alone, you can check the truth tables and identify which gate produces the output pattern your design requires. This approach scales to more complex gates.',
    },
  ],
  challenges: [
    {
      id: 'challenge-1',
      prompt: 'A gate receives inputs A=HIGH, B=LOW. Which gate produces a HIGH output for this combination?',
      type: 'choose',
      evaluationCriteria: { correctChoiceId: 'ch1-b' },
      hints: ['Check each gate\'s rule: which one produces HIGH when at least one input is HIGH?'],
      choices: [
        {
          id: 'ch1-a',
          label: 'AND — because A is HIGH',
          isCorrect: false,
          explanation: 'AND requires BOTH inputs to be HIGH. With B=LOW, AND output is LOW.',
        },
        {
          id: 'ch1-b',
          label: 'OR — the OR gate is HIGH whenever at least one input is HIGH',
          isCorrect: true,
          explanation: 'Correct. OR output is HIGH when any input is HIGH. With A=HIGH, the OR output is HIGH.',
        },
        {
          id: 'ch1-c',
          label: 'Neither AND nor OR produces HIGH — a HIGH and a LOW cancel out',
          isCorrect: false,
          explanation: 'Inputs do not "cancel out" in logic gates. OR produces HIGH when at least one input is HIGH.',
        },
      ],
    },
    {
      id: 'challenge-2',
      prompt: 'Which truth table has exactly one row that produces a HIGH output for a two-input gate?',
      type: 'choose',
      evaluationCriteria: { correctChoiceId: 'ch2-a' },
      hints: ['Review each gate\'s truth table and count how many rows produce a HIGH output.'],
      choices: [
        {
          id: 'ch2-a',
          label: 'AND — only the A=HIGH, B=HIGH row produces HIGH; all other combinations produce LOW',
          isCorrect: true,
          explanation: 'Correct. AND has exactly one HIGH-output row out of four. It is the strictest of the basic two-input gates.',
        },
        {
          id: 'ch2-b',
          label: 'OR — only the A=LOW, B=LOW row produces HIGH',
          isCorrect: false,
          explanation: 'OR produces HIGH in three of four rows — whenever at least one input is HIGH. The only LOW row is A=LOW, B=LOW.',
        },
        {
          id: 'ch2-c',
          label: 'Both AND and OR have exactly one HIGH-output row',
          isCorrect: false,
          explanation: 'AND has one HIGH-output row; OR has three. They are very different in how often they produce HIGH.',
        },
      ],
    },
  ],
  theoryContent: [
    {
      title: 'Comparing Basic Gates Using Truth Tables',
      content: 'NOT, AND, and OR produce distinct output patterns. NOT: always inverts (2 rows, each HIGH flips). AND: HIGH only when all inputs HIGH (1 of 4 combinations). OR: LOW only when all inputs LOW (3 of 4 combinations HIGH). Placing truth tables side by side makes these differences concrete and supports deliberate gate selection during design.',
    },
    {
      title: 'Gate Choice as a Design Decision',
      content: 'Selecting a gate is not arbitrary — it determines what logical rule your circuit implements. The same input signals will produce different outputs depending on which gate processes them. Using truth tables to compare candidate gates ensures the chosen gate implements the intended behavior.',
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
      id: 'theory-ch9-gate-comparison',
      title: 'Comparing basic gates using truth tables',
      content: 'NOT, AND, and OR implement different rules. AND produces HIGH in 1 of 4 input combinations. OR produces HIGH in 3 of 4. NOT inverts a single input. Comparing their truth tables side by side makes gate selection a deliberate design choice rather than guesswork.',
      sourceLesson: 'lesson-ch9-2-5',
    },
  ],
  quizzesUnlocked: ['quiz-ch9-basic-gate-comparison'],
};
