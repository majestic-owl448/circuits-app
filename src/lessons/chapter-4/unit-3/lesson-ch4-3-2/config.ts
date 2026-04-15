import type { LessonConfig } from '../../../../types/lesson.ts';
import { CH4_MIXED_CIRCUIT, CH4_MIXED_NODES } from '../../shared.ts';

export const lessonCh4_3_2: LessonConfig = {
  id: 'lesson-ch4-3-2',
  unitId: 'ch4-unit-3',
  title: 'Reduce the Circuit Step by Step',
  description: 'Practice reduction order and intermediate equivalents in mixed circuits.',
  stageLabel: 'Intermediate',
  prerequisites: ['lesson-ch4-3-1'],
  conceptsIntroduced: ['recursive reduction', 'order of simplification'],
  initialCircuit: CH4_MIXED_CIRCUIT,
  initialNodes: CH4_MIXED_NODES,
  steps: [
    { id: 'step-1', text: 'Replace substructures with equivalent resistance one step at a time.' },
    {
      id: 'step-2',
      text: 'Check intermediate values before moving to final totals.',
      theoryCheck: {
        question: 'Why keep intermediate equivalent values?',
        choices: [
          { id: 'tc-a', label: 'They are required to finish accurately', isCorrect: true, explanation: 'Correct.' },
          { id: 'tc-b', label: 'They are optional decoration', isCorrect: false, explanation: 'Intermediate values drive the final solution.' },
          { id: 'tc-c', label: 'They matter only in AC circuits', isCorrect: false, explanation: 'They matter in DC mixed circuits too.' },
        ],
        explanation: 'Mixed-circuit reduction depends on correct intermediate equivalents.',
      },
    },
  ],
  challenges: [
    {
      id: 'challenge-1',
      prompt: 'Choose the best reduction sequence for a mixed circuit with one clear parallel block and one series segment.',
      type: 'choose',
      evaluationCriteria: { correctChoiceId: 'c1-c' },
      hints: ['Reduce identifiable sub-blocks first.'],
      choices: [
        { id: 'c1-a', label: 'Compute power first, then infer resistance', isCorrect: false, explanation: 'Reduction should start from topology, not power.' },
        { id: 'c1-b', label: 'Treat all components as one series chain', isCorrect: false, explanation: 'That ignores branching structure.' },
        { id: 'c1-c', label: 'Reduce the parallel block, then add series segment', isCorrect: true, explanation: 'Correct.' },
      ],
    },
  ],
  theoryContent: [
    {
      title: 'Step-by-step mixed-circuit reduction',
      content: 'Reduce mixed circuits by replacing clear substructures with equivalents, then continuing until a single equivalent remains.',
    },
  ],
  sandboxUnlocks: [],
  availableActions: ['toggle-switch', 'drag-to-place', 'connect-wire', 'delete-component', 'rename-component'],
  currentOverlayAvailable: true,
  showFormulaPanel: true,
  formulasShown: [
    {
      formula: '1/R_parallel = 1/R1 + 1/R2',
      symbols: [
        { symbol: 'R_parallel', name: 'Equivalent parallel resistance', unit: 'ohms (ohm)' },
        { symbol: 'R1', name: 'Resistance 1', unit: 'ohms (ohm)' },
        { symbol: 'R2', name: 'Resistance 2', unit: 'ohms (ohm)' },
      ],
    },
    {
      formula: 'R_series = R1 + R2',
      symbols: [
        { symbol: 'R_series', name: 'Equivalent series resistance', unit: 'ohms (ohm)' },
        { symbol: 'R1', name: 'Resistance 1', unit: 'ohms (ohm)' },
        { symbol: 'R2', name: 'Resistance 2', unit: 'ohms (ohm)' },
      ],
    },
  ],
  theoryPageAdditions: [
    {
      id: 'theory-ch4-mixed-reduction',
      title: 'Step-by-step mixed-circuit reduction',
      content: 'Topological decomposition plus intermediate checks leads to reliable mixed-circuit solutions.',
      sourceLesson: 'lesson-ch4-3-2',
    },
  ],
  quizzesUnlocked: ['quiz-ch4-mixed-circuit-reduction-basics'],
};
