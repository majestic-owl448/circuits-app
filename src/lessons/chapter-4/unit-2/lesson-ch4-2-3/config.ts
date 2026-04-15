import type { LessonConfig } from '../../../../types/lesson.ts';
import { STANDARD_CIRCUIT, STANDARD_NODES } from '../../../shared.ts';

export const lessonCh4_2_3: LessonConfig = {
  id: 'lesson-ch4-2-3',
  unitId: 'ch4-unit-2',
  title: 'Meet the Ohmmeter',
  description: 'Introduce ohmmeter use for resistance inspection in de-energized contexts.',
  stageLabel: 'Intermediate',
  prerequisites: ['lesson-ch4-2-2'],
  conceptsIntroduced: ['resistance measurement', 'de-energized context rule'],
  initialCircuit: STANDARD_CIRCUIT,
  initialNodes: STANDARD_NODES,
  steps: [
    { id: 'step-1', text: 'An ohmmeter is used to inspect resistance in de-energized contexts.' },
    {
      id: 'step-2',
      text: 'If an active source contributes in the same connected component, the circuit is energized and ohmmeter use is invalid.',
      theoryCheck: {
        question: 'When is ohmmeter use valid in this app?',
        choices: [
          { id: 'tc-a', label: 'When the measurement context is de-energized', isCorrect: true, explanation: 'Correct.' },
          { id: 'tc-b', label: 'Whenever current is high enough', isCorrect: false, explanation: 'Current level is not the validation rule.' },
          { id: 'tc-c', label: 'Only in parallel branches', isCorrect: false, explanation: 'Topology alone does not define validity.' },
        ],
        explanation: 'The key rule is energized vs de-energized context.',
      },
    },
  ],
  challenges: [
    {
      id: 'challenge-1',
      prompt: 'Which meter is appropriate for checking resistance?',
      type: 'choose',
      evaluationCriteria: { correctChoiceId: 'c1-c' },
      hints: ['Pick the meter specifically for resistance.'],
      choices: [
        { id: 'c1-a', label: 'Voltmeter', isCorrect: false, explanation: 'Voltmeter measures voltage difference.' },
        { id: 'c1-b', label: 'Ammeter', isCorrect: false, explanation: 'Ammeter measures branch current.' },
        { id: 'c1-c', label: 'Ohmmeter', isCorrect: true, explanation: 'Correct.' },
      ],
    },
  ],
  theoryContent: [
    {
      title: 'What an ohmmeter measures',
      content: 'An ohmmeter measures resistance and is valid only in de-energized measurement contexts in this simulation model.',
    },
  ],
  sandboxUnlocks: ['ohmmeter'],
  availableActions: ['toggle-switch', 'drag-to-place', 'connect-wire', 'delete-component', 'rename-component'],
  currentOverlayAvailable: true,
  showFormulaPanel: true,
  formulasShown: [
    {
      formula: 'R = V / I',
      symbols: [
        { symbol: 'R', name: 'Resistance', unit: 'ohms (ohm)' },
        { symbol: 'V', name: 'Voltage', unit: 'volts (V)' },
        { symbol: 'I', name: 'Current', unit: 'amperes (A)' },
      ],
    },
  ],
  theoryPageAdditions: [
    {
      id: 'theory-ch4-ohmmeter-basics',
      title: 'What an ohmmeter measures',
      content: 'Use ohmmeters to inspect resistance values in valid de-energized contexts.',
      sourceLesson: 'lesson-ch4-2-3',
    },
  ],
  quizzesUnlocked: ['quiz-ch4-ohmmeter-basics'],
};
