import type { LessonConfig } from '../../../../types/lesson.ts';
import { STANDARD_NODES } from '../../../shared.ts';
import type { CircuitComponent } from '../../../../types/circuit.ts';

const circuit: CircuitComponent[] = [
  { id: 'battery-1', type: 'battery', nodeA: 'n1', nodeB: 'n4', properties: { voltage: 12 }, name: 'Battery', position: { x: 100, y: 200 }, rotation: 0 },
  { id: 'wire-1', type: 'wire', nodeA: 'n1', nodeB: 'n2', properties: {}, name: 'Wire', position: { x: 300, y: 100 }, rotation: 0 },
  { id: 'bulb-1', type: 'bulb', nodeA: 'n2', nodeB: 'n3', properties: { resistance: 30 }, name: 'Bulb', position: { x: 500, y: 200 }, rotation: 0 },
  { id: 'switch-1', type: 'switch', nodeA: 'n4', nodeB: 'n3', properties: { isClosed: false }, name: 'Switch', position: { x: 300, y: 400 }, rotation: 0 },
];

export const lessonCh2_4_1: LessonConfig = {
  id: 'lesson-ch2-4-1',
  unitId: 'ch2-unit-4',
  title: 'Checking a Numerical Solution',
  description: 'See how numerical challenge evaluation works: build a circuit, check the solution, and review the evaluated values.',
  stageLabel: 'Early Intermediate',
  prerequisites: ['lesson-ch2-3-3'],
  conceptsIntroduced: ['evaluation can display relevant final values', 'correctness is based on the circuit and its quantities'],
  initialCircuit: circuit,
  initialNodes: STANDARD_NODES,
  steps: [
    {
      id: 'step-1',
      text: 'Now that you can calculate circuit values, it is time to see how challenges check your work. When you build a circuit and click Check Solution, the app evaluates the circuit and shows the resulting values.',
    },
    {
      id: 'step-2',
      text: 'For example, if a challenge asks you to achieve a specific current, the evaluation will show the actual current your circuit produces. If it matches the target, you pass.',
      highlights: ['battery-1', 'bulb-1'],
    },
    {
      id: 'step-3',
      text: 'Close the switch and observe the circuit. This 12V battery with a 30\u03A9 bulb produces I = 12/30 = 0.4A and P = 12 \u00D7 0.4 = 4.8W. These are the values the evaluation would display.',
      requiredAction: { type: 'toggle-switch', componentId: 'switch-1', targetState: true },
      highlights: ['switch-1'],
      showCurrentOverlay: true,
      theoryCheck: {
        question: 'What determines whether your circuit passes a numerical challenge?',
        choices: [
          { id: 'tc-a', label: 'The evaluated circuit values must match the target', isCorrect: true, explanation: 'Correct! The evaluation computes the circuit values and compares them to the challenge target.' },
          { id: 'tc-b', label: 'The circuit must look exactly like a reference diagram', isCorrect: false, explanation: 'Challenges check the resulting values, not the exact layout. Different circuits can produce the same values.' },
        ],
        explanation: 'Numerical challenges evaluate the actual circuit quantities (current, power, etc.) and compare them to the required target. The values must fall within the acceptable range.',
      },
    },
  ],
  challenges: [
    {
      id: 'challenge-1',
      prompt: 'Build a circuit that produces exactly 0.4A of current. Use a 12V battery and choose the correct resistance.',
      type: 'build',
      evaluationCriteria: {
        circuitMustBeClosed: true,
        targetComponent: 'bulb-1',
        targetProperty: 'current',
        expectedRange: { min: 0.35, max: 0.45 },
      },
      hints: [
        'You need I = 0.4A with V = 12V. What resistance gives that current?',
        'R = V / I = 12 / 0.4 = 30\u03A9. Use a 30\u03A9 bulb.',
      ],
    },
    {
      id: 'challenge-2',
      prompt: 'Build a circuit where the bulb uses approximately 1.8W of power. Use a 9V battery.',
      type: 'build',
      evaluationCriteria: {
        circuitMustBeClosed: true,
        targetComponent: 'bulb-1',
        targetProperty: 'power',
        expectedRange: { min: 1.6, max: 2.0 },
      },
      hints: [
        'P = V \u00D7 I. With V = 9V, what current gives about 1.8W?',
        'I = P / V = 1.8 / 9 = 0.2A. Then R = V / I = 9 / 0.2 = 45\u03A9.',
      ],
    },
  ],
  theoryContent: [
    {
      title: 'How numerical evaluation works',
      content: 'When you submit a circuit, the app calculates all the values (current, voltage, resistance, power) and compares them to the challenge target. If the values fall within the acceptable range, you pass.',
    },
  ],
  sandboxUnlocks: ['final-values-display'],
  availableActions: ['toggle-switch', 'drag-to-place', 'connect-wire', 'delete-component'],
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
      id: 'theory-ch2-numerical-evaluation',
      title: 'How numerical evaluation works',
      content: 'When you check a solution, the app evaluates your circuit by computing all relevant quantities: current, voltage across each component, resistance, and power. These computed values are compared to the challenge target. If your values fall within the acceptable range, the solution is correct. This gives you immediate, transparent feedback on your circuit design.',
      sourceLesson: 'lesson-ch2-4-1',
    },
  ],
  quizzesUnlocked: ['quiz-ch2-target-quantity'],
};
