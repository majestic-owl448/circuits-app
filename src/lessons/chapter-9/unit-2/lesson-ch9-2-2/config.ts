import type { LessonConfig } from '../../../../types/lesson.ts';
import { CHAPTER_9_METADATA, CH9_GATE_NODES } from '../../shared.ts';

export const lessonCh9_2_2: LessonConfig = {
  id: 'lesson-ch9-2-2',
  unitId: 'ch9-unit-2',
  title: 'Meet the AND Gate',
  description: 'Discover the AND gate — a two-input gate whose output is HIGH only when both inputs are HIGH simultaneously.',
  stageLabel: CHAPTER_9_METADATA.stageLabel,
  prerequisites: ['lesson-ch9-2-1'],
  conceptsIntroduced: [
    'AND gate',
    'multiple inputs',
    'both conditions must be true for output to activate',
  ],
  initialNodes: CH9_GATE_NODES,
  initialCircuit: [
    {
      id: 'and-gate-1',
      type: 'and-gate',
      nodeA: 'g1',
      nodeB: 'g2',
      properties: { inputA: false, inputB: false },
      name: 'AND Gate',
      position: { x: 325, y: 250 },
      rotation: 0,
    },
  ],
  steps: [
    {
      id: 'step-1',
      text: 'This is an AND gate. It takes two inputs (A and B) and produces one output. The rule: the output is HIGH only when BOTH input A AND input B are HIGH at the same time. If either input is LOW, the output is LOW. Both conditions must be met simultaneously.',
      highlights: ['and-gate-1'],
    },
    {
      id: 'step-2',
      text: 'Let\'s walk through all four combinations. A=LOW, B=LOW → output LOW. A=HIGH, B=LOW → output LOW. A=LOW, B=HIGH → output LOW. A=HIGH, B=HIGH → output HIGH. Only the last combination produces a HIGH output. Three out of four combinations produce LOW.',
      highlights: ['and-gate-1'],
    },
    {
      id: 'step-3',
      text: 'AND gates are useful when you need two independent conditions to both be satisfied before taking an action. Example: a system should only activate when the power switch is on AND the safety interlock is engaged. Either condition alone is not enough.',
    },
  ],
  challenges: [
    {
      id: 'challenge-1',
      prompt: 'An AND gate has input A=HIGH and input B=LOW. What is the output?',
      type: 'choose',
      evaluationCriteria: { correctChoiceId: 'ch1-b' },
      hints: ['AND requires BOTH inputs to be HIGH. One LOW input is enough to make the output LOW.'],
      choices: [
        {
          id: 'ch1-a',
          label: 'HIGH — one HIGH input is enough for an AND gate',
          isCorrect: false,
          explanation: 'One HIGH input is enough for an OR gate, not AND. AND requires both inputs to be HIGH simultaneously.',
        },
        {
          id: 'ch1-b',
          label: 'LOW — AND requires BOTH inputs to be HIGH; one LOW input makes the output LOW',
          isCorrect: true,
          explanation: 'Correct. AND output is only HIGH when both A and B are HIGH. With B=LOW, the output is LOW.',
        },
        {
          id: 'ch1-c',
          label: 'The output mirrors whichever input is HIGH',
          isCorrect: false,
          explanation: 'AND gate output does not mirror individual inputs. It only produces HIGH when all inputs are simultaneously HIGH.',
        },
      ],
    },
    {
      id: 'challenge-2',
      prompt: 'Under which input combination is the AND gate output HIGH?',
      type: 'choose',
      evaluationCriteria: { correctChoiceId: 'ch2-c' },
      hints: ['Go through each combination — there is only one that produces a HIGH output.'],
      choices: [
        {
          id: 'ch2-a',
          label: 'A=LOW and B=HIGH',
          isCorrect: false,
          explanation: 'With A=LOW, the AND output is LOW regardless of B. Both inputs must be HIGH.',
        },
        {
          id: 'ch2-b',
          label: 'A=HIGH and B=LOW',
          isCorrect: false,
          explanation: 'With B=LOW, the AND output is LOW regardless of A. Both inputs must be HIGH.',
        },
        {
          id: 'ch2-c',
          label: 'Both A=HIGH and B=HIGH — AND output is only HIGH when all inputs are HIGH',
          isCorrect: true,
          explanation: 'Correct. AND output is HIGH in exactly one combination: both inputs HIGH simultaneously.',
        },
      ],
    },
  ],
  theoryContent: [
    {
      title: 'What is an AND Gate?',
      content: 'An AND gate has two inputs and one output. The output is HIGH only when both input A and input B are simultaneously HIGH. For any combination where at least one input is LOW, the output is LOW. AND gates implement the "both conditions must be met" rule and are used when multiple requirements must all be satisfied together.',
    },
  ],
  sandboxUnlocks: ['and-gate'],
  availableActions: ['inspect'],
  currentOverlayAvailable: true,
  showFormulaPanel: true,
  usesTimeControls: false,
  formulasShown: [],
  theoryPageAdditions: [
    {
      id: 'theory-ch9-and-gate',
      title: 'What is an AND gate?',
      content: 'An AND gate takes two inputs and produces one output. The output is HIGH only when both input A and input B are HIGH simultaneously. All other combinations produce a LOW output. AND implements the "both required" rule.',
      sourceLesson: 'lesson-ch9-2-2',
    },
  ],
  quizzesUnlocked: ['quiz-ch9-and-gate-basics'],
};
