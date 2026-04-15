import type { LessonConfig } from '../../../../types/lesson.ts';
import { CH4_MIXED_CIRCUIT, CH4_MIXED_NODES } from '../../shared.ts';

export const lessonCh4_3_3: LessonConfig = {
  id: 'lesson-ch4-3-3',
  unitId: 'ch4-unit-3',
  title: 'Calculate the Full Mixed Circuit',
  description: 'Compute key voltage, current, and power values for a mixed circuit before measuring.',
  stageLabel: 'Intermediate',
  prerequisites: ['lesson-ch4-3-2'],
  conceptsIntroduced: ['full mixed-circuit calculation', 'targeted numeric reasoning'],
  initialCircuit: CH4_MIXED_CIRCUIT,
  initialNodes: CH4_MIXED_NODES,
  steps: [
    { id: 'step-1', text: 'Use reduction plus Ohm\'s law to calculate full-circuit values.' },
    {
      id: 'step-2',
      text: 'Record intermediate and final values before any meter verification.',
      theoryCheck: {
        question: 'What is the key goal of this lesson?',
        choices: [
          { id: 'tc-a', label: 'Measure first, calculate later', isCorrect: false, explanation: 'This lesson emphasizes pre-measurement calculation.' },
          { id: 'tc-b', label: 'Produce expected values before measuring', isCorrect: true, explanation: 'Correct.' },
          { id: 'tc-c', label: 'Skip branch-level values', isCorrect: false, explanation: 'Branch-level values are part of full analysis.' },
        ],
        explanation: 'You should build a complete expected numeric picture before measuring.',
      },
    },
  ],
  challenges: [
    {
      id: 'challenge-1',
      prompt: 'Calculate total current for a 12 V source with 40 ohm equivalent resistance.',
      type: 'calculate',
      evaluationCriteria: {},
      hints: ['Use I = V / R.'],
      calculationTarget: {
        quantity: 'current',
        expectedValue: 0.3,
        tolerance: 0.02,
        unit: 'A',
        formula: 'I = V / R = 12 / 40',
      },
      detailedBreakdown: {
        steps: [
          { label: 'Given', formula: 'V = 12 V, R_eq = 40 ohm', result: '' },
          { label: 'Compute current', formula: 'I = V / R', result: '0.3 A' },
        ],
      },
    },
  ],
  theoryContent: [
    {
      title: 'Calculating values in a mixed circuit',
      content: 'Mixed-circuit calculation combines reduction, Ohm\'s law, and branch interpretation to produce expected values.',
    },
  ],
  sandboxUnlocks: [],
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
    {
      formula: 'P = VI',
      symbols: [
        { symbol: 'P', name: 'Power', unit: 'watts (W)' },
        { symbol: 'V', name: 'Voltage', unit: 'volts (V)' },
        { symbol: 'I', name: 'Current', unit: 'amperes (A)' },
      ],
    },
  ],
  theoryPageAdditions: [
    {
      id: 'theory-ch4-mixed-calculation',
      title: 'Calculating values in a mixed circuit',
      content: 'Compute expected mixed-circuit values first, then use meters to verify and debug.',
      sourceLesson: 'lesson-ch4-3-3',
    },
  ],
  quizzesUnlocked: ['quiz-ch4-mixed-circuit-calculation-basics'],
};
