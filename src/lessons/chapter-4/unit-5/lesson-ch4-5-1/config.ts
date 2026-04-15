import type { LessonConfig } from '../../../../types/lesson.ts';
import { PARALLEL_NODES, PARALLEL_TWO_BULBS } from '../../../shared.ts';

export const lessonCh4_5_1: LessonConfig = {
  id: 'lesson-ch4-5-1',
  unitId: 'ch4-unit-5',
  title: 'Kirchhoff\'s Current Law',
  description: 'Name and apply current conservation at junctions in mixed and parallel circuits.',
  stageLabel: 'Intermediate',
  prerequisites: ['lesson-ch4-4-2'],
  conceptsIntroduced: ['KCL naming', 'junction current conservation'],
  initialCircuit: PARALLEL_TWO_BULBS,
  initialNodes: PARALLEL_NODES,
  steps: [
    { id: 'step-1', text: 'Kirchhoff\'s Current Law (KCL): total current into a junction equals total current out.' },
    {
      id: 'step-2',
      text: 'This names a pattern you already used in parallel reasoning.',
      theoryCheck: {
        question: 'Which statement matches KCL?',
        choices: [
          { id: 'tc-a', label: 'Voltage in equals voltage out', isCorrect: false, explanation: 'That is not KCL.' },
          { id: 'tc-b', label: 'Current in equals current out at a node', isCorrect: true, explanation: 'Correct.' },
          { id: 'tc-c', label: 'Resistance in equals resistance out', isCorrect: false, explanation: 'Resistance is not conserved this way.' },
        ],
        explanation: 'KCL describes current conservation at junctions.',
      },
    },
  ],
  challenges: [
    {
      id: 'challenge-1',
      prompt: 'Which expression correctly applies KCL at a node with two outgoing branch currents I1 and I2?',
      type: 'choose',
      evaluationCriteria: { correctChoiceId: 'c1-b' },
      hints: ['KCL matches incoming and outgoing totals.'],
      choices: [
        { id: 'c1-a', label: 'I_in = I1 - I2', isCorrect: false, explanation: 'Subtraction is not the general KCL relationship for outgoing sums.' },
        { id: 'c1-b', label: 'I_in = I1 + I2', isCorrect: true, explanation: 'Correct. Incoming current equals total outgoing current.' },
        { id: 'c1-c', label: 'I_in = V_source / R_total only', isCorrect: false, explanation: 'That is an Ohm\'s law relationship, not the KCL node equation itself.' },
      ],
    },
  ],
  theoryContent: [
    {
      title: 'Kirchhoff\'s Current Law',
      content: 'KCL states that current is conserved at a node: incoming current equals outgoing current.',
    },
  ],
  sandboxUnlocks: [],
  availableActions: ['toggle-switch', 'drag-to-place', 'connect-wire', 'delete-component', 'rename-component'],
  currentOverlayAvailable: true,
  showFormulaPanel: true,
  formulasShown: [
    {
      formula: 'I_in = I_out_total',
      symbols: [
        { symbol: 'I_in', name: 'Incoming current', unit: 'amperes (A)' },
        { symbol: 'I_out_total', name: 'Total outgoing current', unit: 'amperes (A)' },
      ],
    },
  ],
  theoryPageAdditions: [
    {
      id: 'theory-ch4-kcl',
      title: 'Kirchhoff\'s Current Law',
      content: 'At any node, the sum of incoming current equals the sum of outgoing current.',
      sourceLesson: 'lesson-ch4-5-1',
    },
  ],
  quizzesUnlocked: ['quiz-ch4-kcl-basics'],
};
