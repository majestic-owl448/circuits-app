import type { LessonConfig } from '../../../../types/lesson.ts';
import { STANDARD_CIRCUIT, STANDARD_NODES } from '../../../shared.ts';

export const lessonCh4_2_1: LessonConfig = {
  id: 'lesson-ch4-2-1',
  unitId: 'ch4-unit-2',
  title: 'Meet the Ammeter',
  description: 'Introduce the ammeter for measuring current through a branch.',
  stageLabel: 'Intermediate',
  prerequisites: ['lesson-ch4-1-3'],
  conceptsIntroduced: ['ammeter measures current', 'inline placement'],
  initialCircuit: STANDARD_CIRCUIT,
  initialNodes: STANDARD_NODES,
  steps: [
    { id: 'step-1', text: 'An ammeter reads current through a path.' },
    {
      id: 'step-2',
      text: 'Use an ammeter inline with the branch you want to inspect.',
      theoryCheck: {
        question: 'What is correct ammeter placement?',
        choices: [
          { id: 'tc-a', label: 'Inline with branch current', isCorrect: true, explanation: 'Correct.' },
          { id: 'tc-b', label: 'Across a component', isCorrect: false, explanation: 'That is voltmeter-style placement.' },
          { id: 'tc-c', label: 'On any node pair', isCorrect: false, explanation: 'Current measurement needs branch targeting.' },
        ],
        explanation: 'Ammeter placement is inline with the measured branch.',
      },
    },
  ],
  challenges: [
    {
      id: 'challenge-1',
      prompt: 'Which statement is true about ammeters?',
      type: 'choose',
      evaluationCriteria: { correctChoiceId: 'c1-b' },
      hints: ['Select the option about branch current.'],
      choices: [
        { id: 'c1-a', label: 'They measure resistance directly in energized circuits', isCorrect: false, explanation: 'That is not ammeter behavior.' },
        { id: 'c1-b', label: 'They measure current through a branch path', isCorrect: true, explanation: 'Correct.' },
        { id: 'c1-c', label: 'They always read battery voltage', isCorrect: false, explanation: 'That is not what ammeters do.' },
      ],
    },
  ],
  theoryContent: [
    {
      title: 'What an ammeter measures',
      content: 'An ammeter measures current in a selected branch and helps verify current predictions in series and parallel circuits.',
    },
  ],
  sandboxUnlocks: ['ammeter'],
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
      id: 'theory-ch4-ammeter-basics',
      title: 'What an ammeter measures',
      content: 'Use ammeters inline to inspect branch current and compare readings with expected values.',
      sourceLesson: 'lesson-ch4-2-1',
    },
  ],
  quizzesUnlocked: ['quiz-ch4-ammeter-basics'],
};
