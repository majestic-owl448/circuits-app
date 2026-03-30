import type { LessonConfig } from '../../../../types/lesson.ts';
import { PARALLEL_NODES, PARALLEL_TWO_BULBS } from '../../../shared.ts';
import type { CircuitComponent } from '../../../../types/circuit.ts';

const circuit: CircuitComponent[] = PARALLEL_TWO_BULBS.map(c =>
  c.id === 'switch-1' ? { ...c, properties: { isClosed: true } } : c,
);

export const lessonCh3_4_2: LessonConfig = {
  id: 'lesson-ch3-4-2',
  unitId: 'ch3-unit-4',
  title: 'Equivalent Resistance in Parallel',
  description: 'Learn the parallel resistance formula: 1/R_total = 1/R\u2081 + 1/R\u2082. For two equal 45\u03A9 bulbs, R_total = 22.5\u03A9.',
  stageLabel: 'Early Intermediate',
  prerequisites: ['lesson-ch3-4-1'],
  conceptsIntroduced: ['parallel resistance reciprocal formula', 'equivalent resistance less than smallest branch', 'product-over-sum shortcut'],
  initialCircuit: circuit,
  initialNodes: PARALLEL_NODES,
  steps: [
    {
      id: 'step-1',
      text: 'We know each parallel branch sees the full 9V. But what total resistance does the battery see? In parallel, finding the equivalent resistance uses a different formula than series.',
      highlights: ['bulb-1', 'bulb-2'],
      showCurrentOverlay: true,
    },
    {
      id: 'step-2',
      text: 'The parallel resistance formula uses reciprocals: 1/R_total = 1/R\u2081 + 1/R\u2082. This is fundamentally different from the series formula where you simply add resistances.',
    },
    {
      id: 'step-3',
      text: 'Let us work through the calculation. Both bulbs have 45\u03A9. Substituting: 1/R_total = 1/45 + 1/45 = 2/45. Flipping the fraction: R_total = 45/2 = 22.5\u03A9.',
    },
    {
      id: 'step-4',
      text: 'There is a handy shortcut for two resistors in parallel: the product-over-sum method. R_total = (R\u2081 \u00d7 R\u2082) / (R\u2081 + R\u2082) = (45 \u00d7 45) / (45 + 45) = 2025 / 90 = 22.5\u03A9. Same answer!',
      theoryCheck: {
        question: 'Which formula gives the equivalent resistance of two resistors in parallel?',
        choices: [
          { id: 'tc-a', label: '1/R_total = 1/R\u2081 + 1/R\u2082', isCorrect: true, explanation: 'Correct! The parallel resistance formula uses reciprocals. The equivalent resistance is always less than the smallest individual resistance.' },
          { id: 'tc-b', label: 'R_total = R\u2081 + R\u2082', isCorrect: false, explanation: 'That is the series formula. In parallel, you add the reciprocals, not the resistances directly.' },
          { id: 'tc-c', label: 'R_total = R\u2081 \u00d7 R\u2082', isCorrect: false, explanation: 'Simply multiplying the resistances is not correct for either series or parallel combinations.' },
        ],
        explanation: 'For parallel resistors, the reciprocals of individual resistances add up to the reciprocal of the total: 1/R_total = 1/R\u2081 + 1/R\u2082. This always gives a total resistance smaller than any individual branch.',
      },
    },
    {
      id: 'step-5',
      text: 'Notice something important: the equivalent resistance (22.5\u03A9) is less than either individual bulb (45\u03A9). Adding parallel branches always reduces the total resistance, because you are giving current more paths to flow through.',
    },
  ],
  challenges: [
    {
      id: 'challenge-1',
      prompt: 'Two 45\u03A9 bulbs are connected in parallel. What is the equivalent resistance of the circuit?',
      type: 'calculate',
      evaluationCriteria: {},
      calculationTarget: {
        quantity: 'resistance',
        expectedValue: 22.5,
        tolerance: 0.5,
        unit: '\u03A9',
        formula: '1/R_total = 1/R\u2081 + 1/R\u2082 = 1/45 + 1/45',
      },
      detailedBreakdown: {
        steps: [
          { label: 'Identify values', formula: 'R\u2081 = 45\u03A9, R\u2082 = 45\u03A9', result: 'Two equal resistances' },
          { label: 'Apply formula', formula: '1/R = 1/45 + 1/45 = 2/45', result: 'R = 45/2' },
          { label: 'Calculate', formula: 'R_total = 22.5\u03A9', result: 'R_total = 22.5\u03A9' },
        ],
      },
      hints: [
        'Use the parallel formula: 1/R_total = 1/R\u2081 + 1/R\u2082.',
        'Substitute: 1/R_total = 1/45 + 1/45 = 2/45. Now flip the fraction.',
      ],
    },
    {
      id: 'challenge-2',
      prompt: 'Two 30\u03A9 resistors are connected in parallel. What is the equivalent resistance?',
      type: 'choose',
      evaluationCriteria: { correctChoiceId: 'ch-b' },
      hints: [
        'Apply 1/R_total = 1/30 + 1/30.',
        'For two equal resistors in parallel, the equivalent resistance is half of one resistor.',
      ],
      choices: [
        { id: 'ch-a', label: '60\u03A9', isCorrect: false, explanation: '60\u03A9 is the series total (30 + 30). Parallel resistance is always less than the smallest branch.' },
        { id: 'ch-b', label: '15\u03A9', isCorrect: true, explanation: 'Correct! 1/R = 1/30 + 1/30 = 2/30, so R = 15\u03A9. For two equal resistors in parallel, R_total = R/2.' },
        { id: 'ch-c', label: '30\u03A9', isCorrect: false, explanation: '30\u03A9 is the resistance of a single branch. The parallel combination must be less than either individual resistance.' },
      ],
    },
  ],
  theoryContent: [
    {
      title: 'Equivalent resistance in parallel',
      content: 'When resistors are connected in parallel, the equivalent resistance is found using reciprocals: 1/R_total = 1/R\u2081 + 1/R\u2082. For two 45\u03A9 bulbs: 1/R = 1/45 + 1/45 = 2/45, giving R_total = 22.5\u03A9. The equivalent resistance is always less than the smallest individual branch resistance.',
      formula: '1/R_total = 1/R\u2081 + 1/R\u2082',
    },
    {
      title: 'Product-over-sum shortcut',
      content: 'For exactly two resistors in parallel, you can use R_total = (R\u2081 \u00d7 R\u2082) / (R\u2081 + R\u2082). For two equal resistors, this simplifies to R_total = R/2.',
      formula: 'R_total = (R\u2081 \u00d7 R\u2082) / (R\u2081 + R\u2082)',
    },
  ],
  sandboxUnlocks: ['parallel-equivalent-resistance'],
  availableActions: ['toggle-switch', 'drag-to-place'],
  currentOverlayAvailable: true,
  showFormulaPanel: true,
  formulasShown: [
    {
      formula: 'V = IR',
      symbols: [
        { symbol: 'V', name: 'Voltage', unit: 'volts (V)' },
        { symbol: 'I', name: 'Current', unit: 'amperes (A)' },
        { symbol: 'R', name: 'Resistance', unit: 'ohms (\u03A9)' },
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
    {
      formula: 'R_total = R\u2081 + R\u2082',
      symbols: [
        { symbol: 'R_total', name: 'Total resistance (series)', unit: 'ohms (\u03A9)' },
        { symbol: 'R\u2081', name: 'Resistance 1', unit: 'ohms (\u03A9)' },
        { symbol: 'R\u2082', name: 'Resistance 2', unit: 'ohms (\u03A9)' },
      ],
    },
    {
      formula: '1/R_total = 1/R\u2081 + 1/R\u2082',
      symbols: [
        { symbol: 'R_total', name: 'Total resistance (parallel)', unit: 'ohms (\u03A9)' },
        { symbol: 'R\u2081', name: 'Resistance 1', unit: 'ohms (\u03A9)' },
        { symbol: 'R\u2082', name: 'Resistance 2', unit: 'ohms (\u03A9)' },
      ],
    },
  ],
  theoryPageAdditions: [
    {
      id: 'theory-ch3-parallel-equivalent-resistance',
      title: 'Equivalent resistance in parallel',
      content: 'When resistors are connected in parallel, the equivalent resistance is found using reciprocals: 1/R_total = 1/R\u2081 + 1/R\u2082. For two 45\u03A9 bulbs: 1/R = 1/45 + 1/45 = 2/45, giving R_total = 22.5\u03A9. The equivalent resistance is always less than the smallest individual branch. A shortcut for two resistors: R_total = (R\u2081 \u00d7 R\u2082) / (R\u2081 + R\u2082).',
      sourceLesson: 'lesson-ch3-4-2',
    },
  ],
  quizzesUnlocked: ['quiz-ch3-parallel-resistance-calc'],
};
