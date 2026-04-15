import type { LessonConfig } from '../../../../types/lesson.ts';
import { STANDARD_CIRCUIT, STANDARD_NODES } from '../../../shared.ts';

export const lessonCh4_5_2: LessonConfig = {
  id: 'lesson-ch4-5-2',
  unitId: 'ch4-unit-5',
  title: 'Kirchhoff\'s Voltage Law',
  description: 'Name and apply voltage-balance reasoning around loops.',
  stageLabel: 'Intermediate',
  prerequisites: ['lesson-ch4-5-1'],
  conceptsIntroduced: ['KVL naming', 'loop voltage balance'],
  initialCircuit: STANDARD_CIRCUIT,
  initialNodes: STANDARD_NODES,
  steps: [
    { id: 'step-1', text: 'Kirchhoff\'s Voltage Law (KVL): the signed sum of voltage changes around a closed loop is zero.' },
    {
      id: 'step-2',
      text: 'This formalizes loop reasoning you already used in simpler calculations.',
      theoryCheck: {
        question: 'Which statement captures KVL?',
        choices: [
          { id: 'tc-a', label: 'Current is the same in every branch', isCorrect: false, explanation: 'That is not KVL.' },
          { id: 'tc-b', label: 'Loop voltage rises and drops balance', isCorrect: true, explanation: 'Correct.' },
          { id: 'tc-c', label: 'Resistance must be equal in all components', isCorrect: false, explanation: 'KVL does not require equal resistance.' },
        ],
        explanation: 'KVL is a loop-balance law for potential changes.',
      },
    },
  ],
  challenges: [
    {
      id: 'challenge-1',
      prompt: 'A 9 V source loop has one known drop of 4 V. Assuming ideal wires, what remaining drop satisfies KVL?',
      type: 'calculate',
      evaluationCriteria: {},
      hints: ['Voltage rises and drops in a loop must balance.'],
      calculationTarget: {
        quantity: 'voltage',
        expectedValue: 5,
        tolerance: 0.01,
        unit: 'V',
        formula: 'V_remaining = 9 - 4',
      },
    },
  ],
  theoryContent: [
    {
      title: 'Kirchhoff\'s Voltage Law',
      content: 'KVL states that total voltage rise equals total voltage drop around any closed loop.',
    },
  ],
  sandboxUnlocks: [],
  availableActions: ['toggle-switch', 'drag-to-place', 'connect-wire', 'delete-component', 'rename-component'],
  currentOverlayAvailable: true,
  showFormulaPanel: true,
  formulasShown: [
    {
      formula: 'sum(loop voltages) = 0',
      symbols: [
        { symbol: 'sum(loop voltages)', name: 'Signed sum of loop voltage changes', unit: 'volts (V)' },
      ],
    },
  ],
  theoryPageAdditions: [
    {
      id: 'theory-ch4-kvl',
      title: 'Kirchhoff\'s Voltage Law',
      content: 'Around a closed loop, voltage rises and drops must balance to zero.',
      sourceLesson: 'lesson-ch4-5-2',
    },
  ],
  quizzesUnlocked: ['quiz-ch4-kvl-basics'],
};
