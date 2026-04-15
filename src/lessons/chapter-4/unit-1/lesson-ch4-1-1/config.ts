import type { LessonConfig } from '../../../../types/lesson.ts';
import { SERIES_NODES, SERIES_TWO_BULBS } from '../../../shared.ts';

export const lessonCh4_1_1: LessonConfig = {
  id: 'lesson-ch4-1-1',
  unitId: 'ch4-unit-1',
  title: 'Why Measure If You Can Already Calculate?',
  description: 'Introduce measurement as a verification and debugging tool that complements manual reasoning.',
  stageLabel: 'Early Intermediate to Intermediate',
  prerequisites: ['lesson-ch3-5-3'],
  conceptsIntroduced: ['measurement as verification', 'measurement as inspection', 'reasoning-first workflow'],
  initialCircuit: SERIES_TWO_BULBS,
  initialNodes: SERIES_NODES,
  steps: [
    {
      id: 'step-1',
      text: 'You already know how to calculate current, voltage, and resistance. In this chapter, you will use meters to confirm your reasoning and debug faster.',
    },
    {
      id: 'step-2',
      text: 'Think of measurement as evidence. First predict with formulas, then verify with a tool.',
      theoryCheck: {
        question: 'What is the best use of a meter in this course?',
        choices: [
          { id: 'tc-a', label: 'Replace all manual reasoning', isCorrect: false, explanation: 'Manual reasoning still comes first.' },
          { id: 'tc-b', label: 'Verify and inspect after reasoning', isCorrect: true, explanation: 'Correct. Measurement confirms and refines your reasoning.' },
          { id: 'tc-c', label: 'Only use when a circuit fails to run', isCorrect: false, explanation: 'Meters are useful in both normal and failing circuits.' },
        ],
        explanation: 'The intended workflow is predict first, then verify with measurement evidence.',
      },
    },
  ],
  challenges: [
    {
      id: 'challenge-1',
      prompt: 'Which question is measurement best suited to answer quickly?',
      type: 'choose',
      evaluationCriteria: { correctChoiceId: 'c1-b' },
      hints: ['Pick the option that needs direct circuit evidence.'],
      choices: [
        { id: 'c1-a', label: 'What is the symbol for resistance?', isCorrect: false, explanation: 'That is a recall question, not a measurement task.' },
        { id: 'c1-b', label: 'Is the branch voltage what I expected?', isCorrect: true, explanation: 'Correct. That is exactly where a meter helps.' },
        { id: 'c1-c', label: 'What does KCL stand for?', isCorrect: false, explanation: 'That is terminology, not a meter use case.' },
      ],
    },
  ],
  theoryContent: [
    {
      title: 'Why measurement tools matter',
      content: 'Measurement adds direct evidence to your analysis. In this curriculum, you still reason manually first, then use tools to verify or debug.',
    },
  ],
  sandboxUnlocks: [],
  availableActions: ['toggle-switch', 'drag-to-place', 'connect-wire', 'delete-component', 'rename-component'],
  currentOverlayAvailable: true,
  showFormulaPanel: true,
  formulasShown: [
    {
      formula: 'V = IR',
      symbols: [
        { symbol: 'V', name: 'Voltage', unit: 'volts (V)' },
        { symbol: 'I', name: 'Current', unit: 'amperes (A)' },
        { symbol: 'R', name: 'Resistance', unit: 'ohms (ohm)' },
      ],
    },
  ],
  theoryPageAdditions: [
    {
      id: 'theory-ch4-measurement-role',
      title: 'Why measurement tools matter',
      content: 'Measurement provides evidence for your predictions and helps isolate mistakes in circuit reasoning.',
      sourceLesson: 'lesson-ch4-1-1',
    },
  ],
  quizzesUnlocked: ['quiz-ch4-role-of-measurement-in-circuit-reasoning'],
};
