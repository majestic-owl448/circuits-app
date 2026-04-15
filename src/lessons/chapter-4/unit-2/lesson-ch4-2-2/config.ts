import type { LessonConfig } from '../../../../types/lesson.ts';
import { PARALLEL_NODES, PARALLEL_TWO_BULBS } from '../../../shared.ts';

export const lessonCh4_2_2: LessonConfig = {
  id: 'lesson-ch4-2-2',
  unitId: 'ch4-unit-2',
  title: 'Verify Series and Parallel Current With the Ammeter',
  description: 'Use ammeter readings to verify known current relationships in series and parallel circuits.',
  stageLabel: 'Intermediate',
  prerequisites: ['lesson-ch4-2-1'],
  conceptsIntroduced: ['current verification', 'evidence for series and parallel behavior'],
  initialCircuit: PARALLEL_TWO_BULBS,
  initialNodes: PARALLEL_NODES,
  steps: [
    { id: 'step-1', text: 'Use the ammeter to inspect current at key points.' },
    {
      id: 'step-2',
      text: 'Compare readings against known structure rules from previous chapters.',
      theoryCheck: {
        question: 'What is the purpose of these measurements?',
        choices: [
          { id: 'tc-a', label: 'Random data collection only', isCorrect: false, explanation: 'Measurements should test expected relationships.' },
          { id: 'tc-b', label: 'Verify predicted current relationships', isCorrect: true, explanation: 'Correct.' },
          { id: 'tc-c', label: 'Replace all topology reasoning', isCorrect: false, explanation: 'Topology reasoning is still required.' },
        ],
        explanation: 'Use measurements as evidence for or against expected relationships.',
      },
    },
  ],
  challenges: [
    {
      id: 'challenge-1',
      prompt: 'You observe branch current split in a parallel section. Which interpretation is best?',
      type: 'choose',
      evaluationCriteria: { correctChoiceId: 'c1-c' },
      hints: ['Choose the option that matches parallel behavior.'],
      choices: [
        { id: 'c1-a', label: 'Parallel circuits force equal current in all branches', isCorrect: false, explanation: 'Not always equal; it depends on branch resistance.' },
        { id: 'c1-b', label: 'Current can only be measured in series circuits', isCorrect: false, explanation: 'Ammeter measurement applies in both structures.' },
        { id: 'c1-c', label: 'Branch currents can differ while total current is conserved', isCorrect: true, explanation: 'Correct.' },
      ],
    },
  ],
  theoryContent: [
    {
      title: 'Using the ammeter to verify current relationships',
      content: 'Ammeter readings validate expected current patterns in series and parallel sections when interpreted with topology.',
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
      id: 'theory-ch4-ammeter-verification',
      title: 'Using the ammeter to verify current relationships',
      content: 'Use current measurements as evidence for known series and parallel behavior patterns.',
      sourceLesson: 'lesson-ch4-2-2',
    },
  ],
  quizzesUnlocked: ['quiz-ch4-current-verification-with-measurement'],
};
