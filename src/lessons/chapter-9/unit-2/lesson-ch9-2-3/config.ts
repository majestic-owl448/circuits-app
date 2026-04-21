import type { LessonConfig } from '../../../../types/lesson.ts';
import { CHAPTER_9_METADATA, CH9_GATE_NODES } from '../../shared.ts';

export const lessonCh9_2_3: LessonConfig = {
  id: 'lesson-ch9-2-3',
  unitId: 'ch9-unit-2',
  title: 'Meet the OR Gate',
  description: 'Discover the OR gate — a two-input gate whose output is HIGH when at least one input is HIGH.',
  stageLabel: CHAPTER_9_METADATA.stageLabel,
  prerequisites: ['lesson-ch9-2-2'],
  conceptsIntroduced: [
    'OR gate',
    'one or more active inputs can produce the output',
    'different gate types implement different rules',
  ],
  initialNodes: CH9_GATE_NODES,
  initialCircuit: [
    {
      id: 'or-gate-1',
      type: 'or-gate',
      nodeA: 'g1',
      nodeB: 'g2',
      properties: { inputA: false, inputB: false },
      name: 'OR Gate',
      position: { x: 325, y: 250 },
      rotation: 0,
    },
  ],
  steps: [
    {
      id: 'step-1',
      text: 'This is an OR gate. Two inputs, one output. The rule: the output is HIGH when AT LEAST ONE input is HIGH. It does not matter which one — either input being HIGH is sufficient. Only when all inputs are LOW does the OR gate produce a LOW output.',
      highlights: ['or-gate-1'],
    },
    {
      id: 'step-2',
      text: 'Walk through the combinations: A=LOW, B=LOW → output LOW (no input is HIGH). A=HIGH, B=LOW → output HIGH (A is HIGH). A=LOW, B=HIGH → output HIGH (B is HIGH). A=HIGH, B=HIGH → output HIGH (both are HIGH). Three out of four combinations produce HIGH — the opposite distribution from AND.',
      highlights: ['or-gate-1'],
    },
    {
      id: 'step-3',
      text: 'Compare OR vs AND: AND needs all inputs HIGH (output HIGH in 1 of 4 combinations). OR needs any one input HIGH (output HIGH in 3 of 4 combinations). The only case where OR is LOW is when every input is LOW. These two gates implement opposite strictness levels for the same kind of question.',
    },
  ],
  challenges: [
    {
      id: 'challenge-1',
      prompt: 'An OR gate has input A=HIGH and input B=LOW. What is the output?',
      type: 'choose',
      evaluationCriteria: { correctChoiceId: 'ch1-b' },
      hints: ['OR output is HIGH whenever at least one input is HIGH.'],
      choices: [
        {
          id: 'ch1-a',
          label: 'LOW — OR requires both inputs to be HIGH',
          isCorrect: false,
          explanation: 'Requiring both inputs HIGH is the AND rule, not OR. OR output is HIGH when any input is HIGH.',
        },
        {
          id: 'ch1-b',
          label: 'HIGH — OR output is HIGH when any input is HIGH',
          isCorrect: true,
          explanation: 'Correct. With A=HIGH, the OR gate output is HIGH. It only needs one HIGH input.',
        },
        {
          id: 'ch1-c',
          label: 'The output depends on which input changed most recently',
          isCorrect: false,
          explanation: 'OR gate output depends on current input states, not on which input changed last.',
        },
      ],
    },
    {
      id: 'challenge-2',
      prompt: 'Under which condition is the OR gate output LOW?',
      type: 'choose',
      evaluationCriteria: { correctChoiceId: 'ch2-c' },
      hints: ['Think about when OR fails to produce a HIGH output — what must be true of all inputs?'],
      choices: [
        {
          id: 'ch2-a',
          label: 'When A=HIGH and B=HIGH — both inputs being HIGH cancels the OR',
          isCorrect: false,
          explanation: 'Both inputs being HIGH produces a HIGH output in OR. OR is only LOW when no inputs are HIGH.',
        },
        {
          id: 'ch2-b',
          label: 'When A=HIGH and B=LOW — the mixed state produces LOW',
          isCorrect: false,
          explanation: 'A=HIGH and B=LOW produces a HIGH output in OR (A is HIGH). OR is only LOW when all inputs are LOW.',
        },
        {
          id: 'ch2-c',
          label: 'Only when ALL inputs are LOW — both A=LOW and B=LOW',
          isCorrect: true,
          explanation: 'Correct. OR output is LOW in exactly one case: all inputs are simultaneously LOW.',
        },
      ],
    },
  ],
  theoryContent: [
    {
      title: 'What is an OR Gate?',
      content: 'An OR gate has two inputs and one output. The output is HIGH when at least one input is HIGH. The output is LOW only when all inputs are LOW. OR gates implement the "at least one condition met" rule and are used when any one of several triggers is sufficient to produce a result.',
    },
    {
      title: 'AND vs OR: Strictness Levels',
      content: 'AND and OR implement opposite strictness levels. AND output is HIGH in only 1 of 4 input combinations (the strictest rule — all inputs required). OR output is HIGH in 3 of 4 combinations (the most permissive rule — any input is sufficient). Choosing between AND and OR is a design decision about what conditions are required.',
    },
  ],
  sandboxUnlocks: ['or-gate'],
  availableActions: ['inspect'],
  currentOverlayAvailable: true,
  showFormulaPanel: true,
  usesTimeControls: false,
  formulasShown: [],
  theoryPageAdditions: [
    {
      id: 'theory-ch9-or-gate',
      title: 'What is an OR gate?',
      content: 'An OR gate takes two inputs and produces one output. The output is HIGH when at least one input is HIGH. The output is LOW only when all inputs are LOW. OR implements the "any one is enough" rule.',
      sourceLesson: 'lesson-ch9-2-3',
    },
  ],
  quizzesUnlocked: ['quiz-ch9-or-gate-basics'],
};
