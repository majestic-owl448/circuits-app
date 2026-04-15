import type { LessonConfig } from '../../../../types/lesson.ts';
import { CH4_MIXED_CIRCUIT, CH4_MIXED_NODES } from '../../shared.ts';

export const lessonCh4_3_1: LessonConfig = {
  id: 'lesson-ch4-3-1',
  unitId: 'ch4-unit-3',
  title: 'More Than Pure Series or Pure Parallel',
  description: 'Introduce mixed circuits containing both series and parallel segments.',
  stageLabel: 'Intermediate',
  prerequisites: ['lesson-ch4-2-3'],
  conceptsIntroduced: ['mixed-circuit structure', 'segment-based reasoning'],
  initialCircuit: CH4_MIXED_CIRCUIT,
  initialNodes: CH4_MIXED_NODES,
  steps: [
    { id: 'step-1', text: 'Some circuits are mixed: one section behaves in series while another branches in parallel.' },
    {
      id: 'step-2',
      text: 'Start analysis by identifying substructures before doing calculations.',
      theoryCheck: {
        question: 'What is the best first step in a mixed-circuit problem?',
        choices: [
          { id: 'tc-a', label: 'Guess total current immediately', isCorrect: false, explanation: 'Structure comes first.' },
          { id: 'tc-b', label: 'Label series/parallel segments first', isCorrect: true, explanation: 'Correct.' },
          { id: 'tc-c', label: 'Ignore branches until the end', isCorrect: false, explanation: 'Branches are central in mixed circuits.' },
        ],
        explanation: 'Mixed-circuit analysis starts with topology decomposition.',
      },
    },
  ],
  challenges: [
    {
      id: 'challenge-1',
      prompt: 'Which statement best describes a mixed circuit?',
      type: 'choose',
      evaluationCriteria: { correctChoiceId: 'c1-b' },
      hints: ['Look for the option that combines structures.'],
      choices: [
        { id: 'c1-a', label: 'A circuit with only one path through all components', isCorrect: false, explanation: 'That is pure series.' },
        { id: 'c1-b', label: 'A circuit with both one-path sections and branching sections', isCorrect: true, explanation: 'Correct.' },
        { id: 'c1-c', label: 'A circuit where meters replace formulas', isCorrect: false, explanation: 'Meters do not define mixed structure.' },
      ],
    },
  ],
  theoryContent: [
    {
      title: 'What is a mixed circuit?',
      content: 'A mixed circuit contains both series and parallel substructures that must be analyzed in parts.',
    },
  ],
  sandboxUnlocks: [],
  availableActions: ['toggle-switch', 'drag-to-place', 'connect-wire', 'delete-component', 'rename-component'],
  currentOverlayAvailable: true,
  showFormulaPanel: true,
  formulasShown: [
    {
      formula: 'R_total = R_series + R_parallel_equiv',
      symbols: [
        { symbol: 'R_total', name: 'Total resistance', unit: 'ohms (ohm)' },
        { symbol: 'R_series', name: 'Series segment resistance', unit: 'ohms (ohm)' },
        { symbol: 'R_parallel_equiv', name: 'Equivalent parallel resistance', unit: 'ohms (ohm)' },
      ],
    },
  ],
  theoryPageAdditions: [
    {
      id: 'theory-ch4-mixed-structure',
      title: 'What is a mixed circuit?',
      content: 'Mixed circuits combine one-path and branching behavior in one network, so decomposition is essential.',
      sourceLesson: 'lesson-ch4-3-1',
    },
  ],
  quizzesUnlocked: ['quiz-ch4-mixed-circuit-structure-basics'],
};
