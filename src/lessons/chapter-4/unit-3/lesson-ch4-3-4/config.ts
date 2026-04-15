import type { LessonConfig } from '../../../../types/lesson.ts';
import { CH4_MIXED_CIRCUIT, CH4_MIXED_NODES } from '../../shared.ts';

export const lessonCh4_3_4: LessonConfig = {
  id: 'lesson-ch4-3-4',
  unitId: 'ch4-unit-3',
  title: 'Use Meters to Check a Mixed Circuit',
  description: 'Combine manual predictions and meter readings in mixed-circuit analysis.',
  stageLabel: 'Intermediate',
  prerequisites: ['lesson-ch4-3-3'],
  conceptsIntroduced: ['measurement-backed mixed analysis'],
  initialCircuit: CH4_MIXED_CIRCUIT,
  initialNodes: CH4_MIXED_NODES,
  steps: [
    { id: 'step-1', text: 'Predict first, then verify selected values with meters.' },
    {
      id: 'step-2',
      text: 'Mismatch between prediction and reading indicates a reasoning or setup issue to inspect.',
      theoryCheck: {
        question: 'What should you do if a meter reading contradicts prediction?',
        choices: [
          { id: 'tc-a', label: 'Ignore the reading', isCorrect: false, explanation: 'Readings are evidence to inspect.' },
          { id: 'tc-b', label: 'Recheck assumptions and circuit state', isCorrect: true, explanation: 'Correct.' },
          { id: 'tc-c', label: 'Delete formulas from your workflow', isCorrect: false, explanation: 'Formulas remain essential.' },
        ],
        explanation: 'Contradictions are debugging opportunities, not failures.',
      },
    },
  ],
  challenges: [
    {
      id: 'challenge-1',
      prompt: 'A predicted branch voltage and measured branch voltage differ significantly. What is the best next step?',
      type: 'predict',
      evaluationCriteria: { correctChoiceId: 'c1-a' },
      hints: ['Choose the option that uses evidence-driven debugging.'],
      choices: [
        { id: 'c1-a', label: 'Recheck equivalent reduction and meter target points', isCorrect: true, explanation: 'Correct.' },
        { id: 'c1-b', label: 'Assume the meter is always wrong', isCorrect: false, explanation: 'Measurement should be evaluated, not dismissed.' },
        { id: 'c1-c', label: 'Skip directly to final answer submission', isCorrect: false, explanation: 'Investigation comes before submission.' },
      ],
    },
  ],
  theoryContent: [
    {
      title: 'Investigating a mixed circuit',
      content: 'In mixed circuits, prediction plus measurement supports reliable diagnosis and correction.',
    },
  ],
  sandboxUnlocks: ['voltmeter', 'ammeter', 'ohmmeter'],
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
      id: 'theory-ch4-mixed-investigation',
      title: 'Investigating a mixed circuit',
      content: 'Prediction and measurement together support mixed-circuit verification and troubleshooting.',
      sourceLesson: 'lesson-ch4-3-4',
    },
  ],
  quizzesUnlocked: ['quiz-ch4-mixed-circuit-inspection-basics'],
};
