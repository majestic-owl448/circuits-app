import type { LessonConfig } from '../../../../types/lesson.ts';
import { CHAPTER_9_METADATA, CH9_GATE_NODES } from '../../shared.ts';

export const lessonCh9_2_1: LessonConfig = {
  id: 'lesson-ch9-2-1',
  unitId: 'ch9-unit-2',
  title: 'Meet the NOT Gate',
  description: 'Discover the NOT gate — the inverter. One input, one output, and the output is always the opposite of the input.',
  stageLabel: CHAPTER_9_METADATA.stageLabel,
  prerequisites: ['lesson-ch9-1-2'],
  conceptsIntroduced: [
    'NOT gate',
    'inversion',
    'output is opposite of input state',
  ],
  initialNodes: CH9_GATE_NODES,
  initialCircuit: [
    {
      id: 'not-gate-1',
      type: 'not-gate',
      nodeA: 'g1',
      nodeB: 'g2',
      properties: { inputA: false },
      name: 'NOT Gate',
      position: { x: 325, y: 250 },
      rotation: 0,
    },
  ],
  steps: [
    {
      id: 'step-1',
      text: 'This is a NOT gate — also called an inverter. It takes one input and produces one output. The rule is simple: the output is always the opposite of the input. Input HIGH → Output LOW. Input LOW → Output HIGH. There are no exceptions.',
      highlights: ['not-gate-1'],
    },
    {
      id: 'step-2',
      text: 'Currently the input (inputA) is LOW. The NOT gate inverts it, so the output is HIGH. If the input were set to HIGH, the output would flip to LOW. Toggle the input and observe: every time the input changes, the output changes to the opposite state.',
      highlights: ['not-gate-1'],
      theoryCheck: {
        question: 'A NOT gate has its input set to HIGH. What is the output?',
        choices: [
          {
            id: 'tc-a',
            label: 'HIGH — NOT passes the input through unchanged',
            isCorrect: false,
            explanation: 'NOT does not pass the input through. It inverts it. A HIGH input produces a LOW output.',
          },
          {
            id: 'tc-b',
            label: 'LOW — a NOT gate always inverts the input state',
            isCorrect: true,
            explanation: 'Correct. NOT inverts: HIGH input → LOW output, LOW input → HIGH output.',
          },
          {
            id: 'tc-c',
            label: 'The output depends on how many times the input has changed',
            isCorrect: false,
            explanation: 'NOT gate output depends only on the current input state, not on history or how many transitions occurred.',
          },
        ],
        explanation: 'A NOT gate always inverts its input. HIGH becomes LOW; LOW becomes HIGH.',
      },
    },
    {
      id: 'step-3',
      text: 'Inversion is useful when you need to act on the absence of a condition rather than its presence. For example: "turn on the indicator light when the sensor does NOT detect anything." The NOT gate lets you build that logic without redesigning the sensor circuit.',
    },
  ],
  challenges: [
    {
      id: 'challenge-1',
      prompt: 'A NOT gate\'s input is LOW. What is the output?',
      type: 'choose',
      evaluationCriteria: { correctChoiceId: 'ch1-b' },
      hints: ['A NOT gate always inverts. If the input is LOW, the output is the opposite.'],
      choices: [
        {
          id: 'ch1-a',
          label: 'LOW — the NOT gate passes a LOW input through as LOW',
          isCorrect: false,
          explanation: 'NOT does not pass the input through. It inverts. A LOW input produces a HIGH output.',
        },
        {
          id: 'ch1-b',
          label: 'HIGH — NOT inverts the input, so a LOW input gives a HIGH output',
          isCorrect: true,
          explanation: 'Correct. A NOT gate inverts its input. LOW → HIGH.',
        },
        {
          id: 'ch1-c',
          label: 'The output is undefined when the input is LOW',
          isCorrect: false,
          explanation: 'A NOT gate has a defined output for every input. LOW in always produces HIGH out.',
        },
      ],
    },
    {
      id: 'challenge-2',
      prompt: 'A NOT gate\'s input is HIGH. What is the output?',
      type: 'choose',
      evaluationCriteria: { correctChoiceId: 'ch2-b' },
      hints: ['Apply the NOT rule: the output is the opposite of the input.'],
      choices: [
        {
          id: 'ch2-a',
          label: 'HIGH — the output matches a HIGH input',
          isCorrect: false,
          explanation: 'A NOT gate inverts, not mirrors. A HIGH input produces a LOW output.',
        },
        {
          id: 'ch2-b',
          label: 'LOW — NOT inverts the input, so a HIGH input gives a LOW output',
          isCorrect: true,
          explanation: 'Correct. A NOT gate always inverts. HIGH → LOW.',
        },
        {
          id: 'ch2-c',
          label: 'The output alternates between HIGH and LOW',
          isCorrect: false,
          explanation: 'NOT gate output is determined entirely by the current input state. It does not oscillate on its own.',
        },
      ],
    },
  ],
  theoryContent: [
    {
      title: 'What is a NOT Gate?',
      content: 'A NOT gate is a single-input gate that inverts its input. When the input is HIGH, the output is LOW. When the input is LOW, the output is HIGH. It is also called an inverter. NOT gates are useful when you need to act on the absence of a condition — when something should happen precisely when a signal is NOT present.',
    },
  ],
  sandboxUnlocks: ['not-gate'],
  availableActions: ['inspect'],
  currentOverlayAvailable: true,
  showFormulaPanel: true,
  usesTimeControls: false,
  formulasShown: [],
  theoryPageAdditions: [
    {
      id: 'theory-ch9-not-gate',
      title: 'What is a NOT gate?',
      content: 'A NOT gate (inverter) takes one input and produces the opposite state as output. HIGH input → LOW output. LOW input → HIGH output. This inversion behavior is useful whenever logic depends on the absence of a condition.',
      sourceLesson: 'lesson-ch9-2-1',
    },
  ],
  quizzesUnlocked: ['quiz-ch9-not-gate-basics'],
};
