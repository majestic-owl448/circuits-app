import type { LessonConfig } from '../../../../types/lesson.ts';
import { CH4_SOURCE_LOAD_CIRCUIT, CH4_MIXED_NODES } from '../../shared.ts';

export const lessonCh4_4_1: LessonConfig = {
  id: 'lesson-ch4-4-1',
  unitId: 'ch4-unit-4',
  title: 'Matching a Source to a Target Load',
  description: 'Reason about source-load compatibility using target operating ranges.',
  stageLabel: 'Intermediate',
  prerequisites: ['lesson-ch4-3-4'],
  conceptsIntroduced: ['target ranges', 'source-load compatibility'],
  initialCircuit: CH4_SOURCE_LOAD_CIRCUIT,
  initialNodes: CH4_MIXED_NODES,
  steps: [
    { id: 'step-1', text: 'A good design is not just closed; it keeps the target load within a required range.' },
    {
      id: 'step-2',
      text: 'Use formulas and measurements together to check whether the target load is operating safely.',
      theoryCheck: {
        question: 'What defines a successful source-load match here?',
        choices: [
          { id: 'tc-a', label: 'Any circuit that lights a bulb', isCorrect: false, explanation: 'Lighting alone is not enough.' },
          { id: 'tc-b', label: 'Target component stays inside required range', isCorrect: true, explanation: 'Correct.' },
          { id: 'tc-c', label: 'The highest possible current', isCorrect: false, explanation: 'High current can violate constraints.' },
        ],
        explanation: 'Matching means meeting quantitative target constraints.',
      },
    },
  ],
  challenges: [
    {
      id: 'challenge-1',
      prompt: 'Which outcome best represents a valid source-load match?',
      type: 'choose',
      evaluationCriteria: { correctChoiceId: 'c1-b' },
      hints: ['Choose the option that references target range compliance.'],
      choices: [
        { id: 'c1-a', label: 'Maximum brightness regardless of limits', isCorrect: false, explanation: 'Ignoring limits is not a valid match.' },
        { id: 'c1-b', label: 'Target load values remain within required limits', isCorrect: true, explanation: 'Correct.' },
        { id: 'c1-c', label: 'Any result with a closed switch', isCorrect: false, explanation: 'A closed switch alone does not satisfy targets.' },
      ],
    },
  ],
  theoryContent: [
    {
      title: 'Source and load matching in ideal circuit design',
      content: 'Source-load matching means selecting structure and values so the target component remains in a required operating band.',
    },
  ],
  sandboxUnlocks: [],
  availableActions: ['toggle-switch', 'drag-to-place', 'connect-wire', 'delete-component', 'rename-component'],
  currentOverlayAvailable: true,
  showFormulaPanel: true,
  formulasShown: [
    {
      formula: 'I = V / R',
      symbols: [
        { symbol: 'I', name: 'Current', unit: 'amperes (A)' },
        { symbol: 'V', name: 'Voltage', unit: 'volts (V)' },
        { symbol: 'R', name: 'Resistance', unit: 'ohms (ohm)' },
      ],
    },
  ],
  theoryPageAdditions: [
    {
      id: 'theory-ch4-source-load-matching',
      title: 'Source and load matching in ideal circuit design',
      content: 'Match sources and loads by checking whether target values stay within required bounds.',
      sourceLesson: 'lesson-ch4-4-1',
    },
  ],
  quizzesUnlocked: ['quiz-ch4-source-load-matching-basics'],
};
