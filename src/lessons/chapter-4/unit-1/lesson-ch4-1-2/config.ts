import type { LessonConfig } from '../../../../types/lesson.ts';
import { STANDARD_CIRCUIT, STANDARD_NODES } from '../../../shared.ts';

export const lessonCh4_1_2: LessonConfig = {
  id: 'lesson-ch4-1-2',
  unitId: 'ch4-unit-1',
  title: 'Meet the Voltmeter',
  description: 'Introduce voltmeter usage for measuring potential difference across two nodes or a component.',
  stageLabel: 'Intermediate',
  prerequisites: ['lesson-ch4-1-1'],
  conceptsIntroduced: ['voltage difference measurement', 'across-not-inline placement'],
  initialCircuit: STANDARD_CIRCUIT,
  initialNodes: STANDARD_NODES,
  steps: [
    {
      id: 'step-1',
      text: 'A voltmeter measures voltage difference between two points. Use it across a component or between nodes.',
    },
    {
      id: 'step-2',
      text: 'Do not place a voltmeter inline as part of the current path. It is a probe tool, not a path element.',
      theoryCheck: {
        question: 'Where is a voltmeter used correctly?',
        choices: [
          { id: 'tc-a', label: 'Across two points', isCorrect: true, explanation: 'Correct. Voltmeter measurements are across points.' },
          { id: 'tc-b', label: 'Inline with branch current', isCorrect: false, explanation: 'Inline placement is for an ammeter.' },
          { id: 'tc-c', label: 'Anywhere on the wire is identical', isCorrect: false, explanation: 'Measurement targets still matter.' },
        ],
        explanation: 'A voltmeter reads potential difference between two locations.',
      },
    },
  ],
  challenges: [
    {
      id: 'challenge-1',
      prompt: 'Which statement best describes voltmeter use?',
      type: 'choose',
      evaluationCriteria: { correctChoiceId: 'c1-a' },
      hints: ['Find the option that says voltage difference across points.'],
      choices: [
        { id: 'c1-a', label: 'Measure across two nodes to read potential difference', isCorrect: true, explanation: 'Correct.' },
        { id: 'c1-b', label: 'Insert in series to read branch current', isCorrect: false, explanation: 'That is ammeter behavior.' },
        { id: 'c1-c', label: 'Use only when the switch is open', isCorrect: false, explanation: 'Voltmeter use is not limited to open-switch states.' },
      ],
    },
  ],
  theoryContent: [
    {
      title: 'What a voltmeter measures',
      content: 'A voltmeter measures the voltage difference between two points in a circuit. It is applied across a target, not inline with current flow.',
    },
  ],
  sandboxUnlocks: ['voltmeter'],
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
      id: 'theory-ch4-voltmeter-basics',
      title: 'What a voltmeter measures',
      content: 'Use a voltmeter across two nodes to read potential difference and verify predicted voltage values.',
      sourceLesson: 'lesson-ch4-1-2',
    },
  ],
  quizzesUnlocked: ['quiz-ch4-voltmeter-basics'],
};
