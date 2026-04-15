import type { LessonConfig } from '../../../../types/lesson.ts';
import { STANDARD_CIRCUIT, STANDARD_NODES } from '../../../shared.ts';

export const lessonCh4_1_3: LessonConfig = {
  id: 'lesson-ch4-1-3',
  unitId: 'ch4-unit-1',
  title: 'Use the Voltmeter to Verify a Known Circuit',
  description: 'Use voltage measurement to verify a predicted value in a familiar circuit.',
  stageLabel: 'Intermediate',
  prerequisites: ['lesson-ch4-1-2'],
  conceptsIntroduced: ['prediction then verification', 'evidence-backed conclusions'],
  initialCircuit: STANDARD_CIRCUIT,
  initialNodes: STANDARD_NODES,
  steps: [
    { id: 'step-1', text: 'First predict a voltage value using known formulas and structure.' },
    {
      id: 'step-2',
      text: 'Then measure and compare. A matching result increases confidence in your model.',
      theoryCheck: {
        question: 'What should happen after a prediction?',
        choices: [
          { id: 'tc-a', label: 'Ignore measurement', isCorrect: false, explanation: 'Verification is the point of this lesson.' },
          { id: 'tc-b', label: 'Verify with a voltmeter', isCorrect: true, explanation: 'Correct.' },
          { id: 'tc-c', label: 'Rewire immediately', isCorrect: false, explanation: 'Only if evidence says the design is wrong.' },
        ],
        explanation: 'Prediction and measurement should support each other.',
      },
    },
  ],
  challenges: [
    {
      id: 'challenge-1',
      prompt: 'Predict what relationship you expect between your calculated voltage and a correct voltmeter reading on the same two points.',
      type: 'predict',
      evaluationCriteria: { correctChoiceId: 'p1-a' },
      hints: ['Prediction should connect model and measurement.'],
      choices: [
        { id: 'p1-a', label: 'They should be close if the model and target points are correct', isCorrect: true, explanation: 'Correct. Agreement supports the model and setup.' },
        { id: 'p1-b', label: 'They should always differ by at least 50%', isCorrect: false, explanation: 'Large mismatch is not expected in a correct setup.' },
        { id: 'p1-c', label: 'Prediction does not matter once you can measure', isCorrect: false, explanation: 'Prediction is still essential for reasoning.' },
      ],
    },
    {
      id: 'challenge-2',
      prompt: 'A reading matches your prediction. What is the best interpretation?',
      type: 'choose',
      evaluationCriteria: { correctChoiceId: 'c2-a' },
      hints: ['Choose the reasoning-focused answer.'],
      choices: [
        { id: 'c2-a', label: 'The model is supported by measurement evidence', isCorrect: true, explanation: 'Correct.' },
        { id: 'c2-b', label: 'The circuit is always perfect in all conditions', isCorrect: false, explanation: 'One measurement does not prove all conditions.' },
        { id: 'c2-c', label: 'Formulas are no longer needed', isCorrect: false, explanation: 'Formulas still guide prediction.' },
      ],
    },
  ],
  theoryContent: [
    {
      title: 'Using the voltmeter to verify reasoning',
      content: 'Use manual reasoning first, then verify with measurement to validate your expected circuit behavior.',
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
      id: 'theory-ch4-voltage-verification',
      title: 'Using the voltmeter to verify circuit reasoning',
      content: 'Prediction-first measurement makes voltage conclusions testable and transparent.',
      sourceLesson: 'lesson-ch4-1-3',
    },
  ],
  quizzesUnlocked: ['quiz-ch4-voltage-verification-with-a-voltmeter'],
};
