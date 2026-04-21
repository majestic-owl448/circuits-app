import type { LessonConfig } from '../../../../types/lesson.ts';
import { CHAPTER_9_METADATA, CH9_COMPARISON_NODES } from '../../shared.ts';

export const lessonCh9_2_4: LessonConfig = {
  id: 'lesson-ch9-2-4',
  unitId: 'ch9-unit-2',
  title: 'Truth Tables as a Tool for Understanding Gates',
  description: 'Learn to read and use truth tables — structured summaries of every possible input combination and its resulting output for a logic gate.',
  stageLabel: CHAPTER_9_METADATA.stageLabel,
  prerequisites: ['lesson-ch9-2-3'],
  conceptsIntroduced: [
    'truth table',
    'input combinations and output result table',
    'structured summary of gate behavior',
    'truth tables as a reasoning tool',
  ],
  initialNodes: CH9_COMPARISON_NODES,
  initialCircuit: [
    {
      id: 'not-gate-1',
      type: 'not-gate',
      nodeA: 'n1',
      nodeB: 'n2',
      properties: { inputA: false },
      name: 'NOT',
      position: { x: 210, y: 200 },
      rotation: 0,
    },
    {
      id: 'and-gate-1',
      type: 'and-gate',
      nodeA: 'n3',
      nodeB: 'n4',
      properties: { inputA: false, inputB: false },
      name: 'AND',
      position: { x: 590, y: 200 },
      rotation: 0,
    },
  ],
  steps: [
    {
      id: 'step-1',
      text: 'A truth table is a systematic list of every possible input combination and the output that results from each. For a gate with one input (like NOT), there are 2 rows — one for each input value (LOW and HIGH). For a gate with two inputs (like AND or OR), there are 4 rows — one for each combination of the two inputs.',
      highlights: ['not-gate-1', 'and-gate-1'],
    },
    {
      id: 'step-2',
      text: 'Here is the AND gate truth table: A=0,B=0 → Output=0 | A=1,B=0 → Output=0 | A=0,B=1 → Output=0 | A=1,B=1 → Output=1. Each row is one specific scenario. Reading across a row tells you exactly what output to expect for those particular inputs. The table is complete — no guessing needed.',
      highlights: ['and-gate-1'],
      theoryCheck: {
        question: 'How many rows does a truth table for a two-input gate need?',
        choices: [
          {
            id: 'tc-a',
            label: 'Two rows — one for each input',
            isCorrect: false,
            explanation: 'Two rows covers one-input gates. A two-input gate has four possible combinations of two binary values.',
          },
          {
            id: 'tc-b',
            label: 'Four rows — one for each combination of the two input values (LOW/LOW, HIGH/LOW, LOW/HIGH, HIGH/HIGH)',
            isCorrect: true,
            explanation: 'Correct. Two binary inputs produce four distinct combinations, so the truth table needs four rows to be complete.',
          },
          {
            id: 'tc-c',
            label: 'Eight rows — one for each possible output',
            isCorrect: false,
            explanation: 'The number of rows is determined by input combinations, not outputs. Two binary inputs produce four combinations.',
          },
        ],
        explanation: 'A two-input gate has 4 possible input combinations (2 × 2), so its truth table needs exactly 4 rows.',
      },
    },
    {
      id: 'step-3',
      text: 'The NOT gate truth table has only 2 rows: A=0 → Output=1 | A=1 → Output=0. Both rows together fully describe every possible behavior of the NOT gate. Truth tables are useful as a reference when reasoning about gate behavior — you can look up the output for any input without having to remember the rule.',
      highlights: ['not-gate-1'],
    },
  ],
  challenges: [
    {
      id: 'challenge-1',
      prompt: 'Which truth table correctly describes an AND gate for the A=HIGH, B=HIGH row?',
      type: 'choose',
      evaluationCriteria: { correctChoiceId: 'ch1-b' },
      hints: ['Recall the AND rule: what is the only input combination that produces a HIGH output?'],
      choices: [
        {
          id: 'ch1-a',
          label: 'A=HIGH, B=HIGH → Output=LOW (both inputs HIGH cancels each other)',
          isCorrect: false,
          explanation: 'AND output is HIGH when both inputs are HIGH — not LOW. Both HIGH is the one case where AND produces HIGH.',
        },
        {
          id: 'ch1-b',
          label: 'A=HIGH, B=HIGH → Output=HIGH (the only combination that produces a HIGH output)',
          isCorrect: true,
          explanation: 'Correct. AND output is HIGH only when both inputs are HIGH simultaneously.',
        },
        {
          id: 'ch1-c',
          label: 'A=HIGH, B=HIGH → Output depends on which input changed first',
          isCorrect: false,
          explanation: 'AND gate output is determined by current states only, not by input transition order.',
        },
      ],
    },
    {
      id: 'challenge-2',
      prompt: 'Complete the missing output entries in the OR gate truth table shown.',
      type: 'build',
      evaluationCriteria: { topologyCheck: 'complete' },
      hints: [
        'OR output is HIGH when at least one input is HIGH.',
        'Only the A=LOW, B=LOW combination produces a LOW output in OR.',
      ],
    },
  ],
  theoryContent: [
    {
      title: 'What is a Truth Table?',
      content: 'A truth table is a structured table that lists every possible input combination for a logic gate and the output that results from each combination. For a single-input gate, the table has 2 rows. For a two-input gate, it has 4 rows. Truth tables are a complete description of gate behavior — they leave nothing ambiguous.',
    },
    {
      title: 'Using Truth Tables as a Reasoning Tool',
      content: 'Truth tables let you determine the output for any input scenario without memorizing rules. Look up the input combination in the table and read the output. For unfamiliar gates, the truth table is the authoritative reference. Building truth table intuition also helps when comparing gates side by side.',
    },
  ],
  sandboxUnlocks: ['truth-table-reference'],
  availableActions: ['inspect'],
  currentOverlayAvailable: true,
  showFormulaPanel: true,
  usesTimeControls: false,
  formulasShown: [],
  theoryPageAdditions: [
    {
      id: 'theory-ch9-truth-table',
      title: 'What is a truth table?',
      content: 'A truth table lists every possible input combination for a logic gate and its resulting output. One-input gates have 2 rows; two-input gates have 4 rows. Truth tables are a complete, unambiguous description of gate behavior and a practical reference for reasoning about logic circuits.',
      sourceLesson: 'lesson-ch9-2-4',
    },
  ],
  quizzesUnlocked: ['quiz-ch9-truth-table-basics'],
};
