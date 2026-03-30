import type { LessonConfig } from '../../../../types/lesson.ts';
import { PARALLEL_NODES, PARALLEL_TWO_BULBS } from '../../../shared.ts';
import type { CircuitComponent } from '../../../../types/circuit.ts';

const circuit: CircuitComponent[] = PARALLEL_TWO_BULBS.map(c =>
  c.id === 'switch-1' ? { ...c, properties: { isClosed: true } } : c,
);

export const lessonCh3_4_3: LessonConfig = {
  id: 'lesson-ch3-4-3',
  unitId: 'ch3-unit-4',
  title: 'Source Current in Parallel',
  description: 'Calculate the total source current using the equivalent resistance. I = V / R_total = 9 / 22.5 = 0.4A.',
  stageLabel: 'Early Intermediate',
  prerequisites: ['lesson-ch3-4-2'],
  conceptsIntroduced: ['source current from equivalent resistance', 'total current is sum of branch currents'],
  initialCircuit: circuit,
  initialNodes: PARALLEL_NODES,
  steps: [
    {
      id: 'step-1',
      text: 'We know the equivalent resistance of our two parallel 45\u03A9 bulbs is 22.5\u03A9. Now we can find the total current the battery supplies using Ohm\'s Law.',
      highlights: ['battery-1'],
      showCurrentOverlay: true,
    },
    {
      id: 'step-2',
      text: 'Applying Ohm\'s Law with the equivalent resistance: I = V / R_total = 9V / 22.5\u03A9 = 0.4A. The battery delivers a total of 0.4 amperes to the circuit.',
    },
    {
      id: 'step-3',
      text: 'We can verify this by calculating each branch current separately. Each branch has 9V across 45\u03A9, so I_branch = 9 / 45 = 0.2A. The total current is the sum: 0.2A + 0.2A = 0.4A. It matches!',
      highlights: ['bulb-1', 'bulb-2'],
      theoryCheck: {
        question: 'What is the correct order of steps to find total source current in a parallel circuit?',
        choices: [
          { id: 'tc-a', label: 'Find R_total first, then apply I = V / R_total', isCorrect: true, explanation: 'Correct! First calculate the equivalent parallel resistance, then use Ohm\'s Law to find total current.' },
          { id: 'tc-b', label: 'Divide the voltage by the number of branches', isCorrect: false, explanation: 'Dividing voltage by the number of branches does not give you the current. You need to use resistance in Ohm\'s Law.' },
          { id: 'tc-c', label: 'Add the branch voltages together', isCorrect: false, explanation: 'Branch voltages are all equal in parallel (they do not add up). You need to find R_total and apply Ohm\'s Law.' },
        ],
        explanation: 'To find total source current: first compute the equivalent parallel resistance, then apply I = V / R_total. Alternatively, calculate each branch current and add them together.',
      },
    },
    {
      id: 'step-4',
      text: 'Compare this to a series circuit with the same bulbs. In series, R_total = 90\u03A9 and I = 9/90 = 0.1A. In parallel, R_total = 22.5\u03A9 and I = 0.4A. The parallel circuit draws four times as much current from the battery because the total resistance is much lower.',
    },
  ],
  challenges: [
    {
      id: 'challenge-1',
      prompt: 'Two 45\u03A9 bulbs are connected in parallel across a 9V battery. What is the total current supplied by the battery?',
      type: 'calculate',
      evaluationCriteria: {},
      calculationTarget: {
        quantity: 'current',
        expectedValue: 0.4,
        tolerance: 0.01,
        unit: 'A',
        formula: 'I = V / R_total = 9 / 22.5',
      },
      detailedBreakdown: {
        steps: [
          { label: 'Find R_total', formula: 'R_total = 22.5\u03A9', result: 'From previous lesson' },
          { label: 'Apply Ohm\'s Law', formula: 'I = V / R_total = 9 / 22.5', result: 'I = 0.4A' },
        ],
      },
      hints: [
        'First recall the equivalent resistance from the previous lesson: R_total = 22.5\u03A9.',
        'Then apply Ohm\'s Law: I = V / R_total = 9 / 22.5.',
      ],
    },
    {
      id: 'challenge-2',
      prompt: 'What is the total current from the battery in this parallel circuit?',
      type: 'choose',
      evaluationCriteria: { correctChoiceId: 'ch-b' },
      hints: [
        'Use I = V / R_total with V = 9V and R_total = 22.5\u03A9.',
        'Or add the two branch currents: each branch carries 0.2A.',
      ],
      choices: [
        { id: 'ch-a', label: '0.2A', isCorrect: false, explanation: '0.2A is the current through one branch. The total source current is the sum of all branch currents: 0.2 + 0.2 = 0.4A.' },
        { id: 'ch-b', label: '0.4A', isCorrect: true, explanation: 'Correct! I = 9V / 22.5\u03A9 = 0.4A. This also equals the sum of the two branch currents (0.2A + 0.2A).' },
        { id: 'ch-c', label: '0.1A', isCorrect: false, explanation: '0.1A would be the current in a series circuit with these bulbs (I = 9/90). The parallel circuit has lower resistance and higher current.' },
      ],
    },
  ],
  theoryContent: [
    {
      title: 'Finding total current in a parallel circuit',
      content: 'To find the total current from the source, first calculate the equivalent parallel resistance, then apply Ohm\'s Law: I = V / R_total. For two 45\u03A9 bulbs in parallel with a 9V source: R_total = 22.5\u03A9, so I = 9 / 22.5 = 0.4A. You can verify by adding branch currents: each branch carries 9/45 = 0.2A, and 0.2 + 0.2 = 0.4A.',
    },
  ],
  sandboxUnlocks: [],
  availableActions: ['toggle-switch'],
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
      id: 'theory-ch3-parallel-source-current',
      title: 'Finding total current in a parallel circuit',
      content: 'To find total source current, calculate the equivalent parallel resistance first, then apply Ohm\'s Law: I = V / R_total. For two 45\u03A9 bulbs in parallel across 9V: R_total = 22.5\u03A9, I = 9/22.5 = 0.4A. You can verify by summing branch currents: each branch carries 9/45 = 0.2A, and 0.2 + 0.2 = 0.4A.',
      sourceLesson: 'lesson-ch3-4-3',
    },
  ],
  quizzesUnlocked: ['quiz-ch3-parallel-source-current'],
};
