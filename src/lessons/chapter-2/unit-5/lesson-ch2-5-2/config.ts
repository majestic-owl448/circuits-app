import type { LessonConfig } from '../../../../types/lesson.ts';
import { STANDARD_NODES } from '../../../shared.ts';
import type { CircuitComponent } from '../../../../types/circuit.ts';

const circuit: CircuitComponent[] = [
  { id: 'battery-1', type: 'battery', nodeA: 'n1', nodeB: 'n4', properties: { voltage: 12 }, name: 'Battery', position: { x: 100, y: 200 }, rotation: 0 },
  { id: 'wire-1', type: 'wire', nodeA: 'n1', nodeB: 'n2', properties: {}, name: 'Wire', position: { x: 300, y: 100 }, rotation: 0 },
  { id: 'bulb-1', type: 'bulb', nodeA: 'n2', nodeB: 'n3', properties: { resistance: 60 }, name: 'Bulb', position: { x: 500, y: 200 }, rotation: 0 },
  { id: 'switch-1', type: 'switch', nodeA: 'n4', nodeB: 'n3', properties: { isClosed: false }, name: 'Switch', position: { x: 300, y: 400 }, rotation: 0 },
];

export const lessonCh2_5_2: LessonConfig = {
  id: 'lesson-ch2-5-2',
  unitId: 'ch2-unit-5',
  title: 'Chapter Review Challenge',
  description: 'Integrate the chapter\'s ideas in a larger but still simple ideal DC challenge.',
  stageLabel: 'Early Intermediate',
  prerequisites: ['lesson-ch2-5-1'],
  conceptsIntroduced: ['integration and fluency'],
  initialCircuit: circuit,
  initialNodes: STANDARD_NODES,
  steps: [
    {
      id: 'step-1',
      text: 'This is the chapter review. You have learned to calculate current, resistance, voltage, and power in simple one-source, one-load circuits. Now put it all together.',
    },
    {
      id: 'step-2',
      text: 'You will face two challenges. The first asks you to hit a current target. The second asks you to keep power within a safe range. Use everything you have learned.',
    },
    {
      id: 'step-3',
      text: 'Remember the workflow: identify known values, choose the right formula, calculate the unknown, and verify that the result meets the target. You have all the tools you need.',
      theoryCheck: {
        question: 'What is the correct workflow for solving a circuit challenge?',
        choices: [
          { id: 'tc-a', label: 'Identify knowns, choose formula, calculate, verify against target', isCorrect: true, explanation: 'Correct! This systematic approach works for every simple circuit challenge.' },
          { id: 'tc-b', label: 'Guess values until the circuit works', isCorrect: false, explanation: 'While trial and error can work, the systematic approach is more reliable and teaches proper reasoning.' },
        ],
        explanation: 'The systematic workflow is: identify known values from the circuit, choose the appropriate formula, calculate the unknown, and verify the result meets the challenge target.',
      },
    },
  ],
  challenges: [
    {
      id: 'challenge-1',
      prompt: 'Build a circuit with a current of 0.2A. Use a 12V battery and choose the correct resistance for the bulb.',
      type: 'build',
      evaluationCriteria: {
        circuitMustBeClosed: true,
        targetComponent: 'bulb-1',
        targetProperty: 'current',
        expectedRange: { min: 0.15, max: 0.25 },
      },
      hints: [
        'You need I = 0.2A with V = 12V. Use R = V / I.',
        'R = 12 / 0.2 = 60\u03A9. Set the bulb resistance to 60\u03A9.',
      ],
    },
    {
      id: 'challenge-2',
      prompt: 'Build a circuit where the bulb operates within a power range of 2W to 4W. Use a 12V battery and choose an appropriate resistance.',
      type: 'build',
      evaluationCriteria: {
        circuitMustBeClosed: true,
        targetComponent: 'bulb-1',
        targetProperty: 'power',
        expectedRange: { min: 2.0, max: 4.0 },
      },
      hints: [
        'P = V\u00B2 / R. With V = 12V, what range of R gives P between 2W and 4W?',
        'R = 60\u03A9 gives P = 2.4W (in range). R = 45\u03A9 gives P = 3.2W (in range). R = 30\u03A9 gives P = 4.8W (too high).',
      ],
    },
  ],
  theoryContent: [
    {
      title: 'Chapter 2 review',
      content: 'This chapter covered calculating current (I = V/R), resistance (R = V/I), voltage (V = IR), and power (P = VI) in simple one-source, one-load circuits. You also learned about evaluation, detailed breakdowns, component naming, and operating ranges.',
    },
  ],
  sandboxUnlocks: ['chapter-2-complete'],
  availableActions: ['toggle-switch', 'drag-to-place', 'connect-wire', 'delete-component', 'rename-component'],
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
  ],
  theoryPageAdditions: [
    {
      id: 'theory-ch2-review',
      title: 'Chapter 2 review',
      content: 'Chapter 2 covered the transition from qualitative to quantitative circuit analysis. You learned to calculate current (I = V/R), resistance (R = V/I), voltage (V = IR), and power (P = VI) in simple one-source, one-load ideal DC circuits. You also learned how numerical evaluation works, how to read detailed breakdowns, how component names appear in reasoning, and how to work with acceptable operating ranges.',
      sourceLesson: 'lesson-ch2-5-2',
    },
  ],
  quizzesUnlocked: ['quiz-ch2-review'],
};
