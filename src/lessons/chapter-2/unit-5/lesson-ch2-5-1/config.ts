import type { LessonConfig } from '../../../../types/lesson.ts';
import { STANDARD_NODES } from '../../../shared.ts';
import type { CircuitComponent } from '../../../../types/circuit.ts';

const circuit: CircuitComponent[] = [
  { id: 'battery-1', type: 'battery', nodeA: 'n1', nodeB: 'n4', properties: { voltage: 12 }, name: 'Battery', position: { x: 100, y: 200 }, rotation: 0 },
  { id: 'wire-1', type: 'wire', nodeA: 'n1', nodeB: 'n2', properties: {}, name: 'Wire', position: { x: 300, y: 100 }, rotation: 0 },
  { id: 'bulb-1', type: 'bulb', nodeA: 'n2', nodeB: 'n3', properties: { resistance: 60 }, name: 'Bulb', position: { x: 500, y: 200 }, rotation: 0 },
  { id: 'switch-1', type: 'switch', nodeA: 'n4', nodeB: 'n3', properties: { isClosed: false }, name: 'Switch', position: { x: 300, y: 400 }, rotation: 0 },
];

export const lessonCh2_5_1: LessonConfig = {
  id: 'lesson-ch2-5-1',
  unitId: 'ch2-unit-5',
  title: 'Enough to Work, Not Enough to Damage',
  description: 'See that a useful challenge target can be based on keeping the target component in an acceptable range.',
  stageLabel: 'Early Intermediate',
  prerequisites: ['lesson-ch2-4-3'],
  conceptsIntroduced: ['target ranges', 'working versus non-working versus damaging conditions'],
  initialCircuit: circuit,
  initialNodes: STANDARD_NODES,
  steps: [
    {
      id: 'step-1',
      text: 'In real circuits, components have limits. A bulb needs enough power to light up, but too much power could damage it. This lesson introduces the idea of acceptable ranges.',
    },
    {
      id: 'step-2',
      text: 'Imagine this bulb works properly between 1.5W and 3W. Below 1.5W, it is too dim. Above 3W, it could overheat. Your job is to choose circuit values that land in the safe range.',
      highlights: ['bulb-1'],
    },
    {
      id: 'step-3',
      text: 'With a 12V battery and a 60\u03A9 bulb: I = 12/60 = 0.2A, P = 12 \u00D7 0.2 = 2.4W. That is within the 1.5W to 3W range \u2014 the bulb works safely.',
      highlights: ['battery-1', 'bulb-1'],
    },
    {
      id: 'step-4',
      text: 'Close the switch to see it in action. The evaluation will confirm whether the power falls in the acceptable range.',
      requiredAction: { type: 'toggle-switch', componentId: 'switch-1', targetState: true },
      highlights: ['switch-1'],
      showCurrentOverlay: true,
      theoryCheck: {
        question: 'Why does an acceptable range matter for a challenge target?',
        choices: [
          { id: 'tc-a', label: 'The component must receive enough energy to work but not so much that it is damaged', isCorrect: true, explanation: 'Correct! The range defines safe and functional operating conditions.' },
          { id: 'tc-b', label: 'All circuits must use the exact same power', isCorrect: false, explanation: 'Different circuits have different requirements. The range defines what is acceptable for a specific component.' },
        ],
        explanation: 'Acceptable ranges model real-world constraints. A bulb must receive enough power to light but not so much that it overheats. Your circuit values must produce results within the specified range.',
      },
    },
  ],
  challenges: [
    {
      id: 'challenge-1',
      prompt: 'Make the bulb light within its acceptable power range of 1.5W to 3W. The circuit has a 12V battery. Choose a resistance that keeps power in range.',
      type: 'build',
      evaluationCriteria: {
        circuitMustBeClosed: true,
        targetComponent: 'bulb-1',
        targetProperty: 'power',
        expectedRange: { min: 1.5, max: 3.0 },
      },
      hints: [
        'P = V\u00B2 / R for this circuit. With V = 12V, try different R values.',
        'R = 60\u03A9 gives P = 2.4W (in range). R = 30\u03A9 gives P = 4.8W (too high).',
      ],
    },
    {
      id: 'challenge-2',
      prompt: 'A circuit has a 9V battery and a 30\u03A9 bulb. The acceptable power range is 1W to 2W. Is the power in range, too low, or too high?',
      type: 'choose',
      evaluationCriteria: { correctChoiceId: 'ch2-c' },
      hints: [
        'Calculate P: I = 9/30 = 0.3A, P = 9 \u00D7 0.3 = 2.7W.',
        'Compare 2.7W to the range 1W\u20132W.',
      ],
      choices: [
        { id: 'ch2-a', label: 'In range (between 1W and 2W)', isCorrect: false, explanation: 'P = 2.7W, which exceeds the maximum of 2W.' },
        { id: 'ch2-b', label: 'Too low (below 1W)', isCorrect: false, explanation: 'P = 2.7W is above the range, not below it.' },
        { id: 'ch2-c', label: 'Too high (above 2W)', isCorrect: true, explanation: 'Correct! P = 9 \u00D7 0.3 = 2.7W, which is above the 2W maximum. The resistance would need to be higher.' },
      ],
    },
  ],
  theoryContent: [
    {
      title: 'Operating range in a simulated circuit',
      content: 'Components have acceptable operating ranges. A bulb may need between 1.5W and 3W to work properly. Below the minimum, it is too dim; above the maximum, it risks damage. Your circuit values must produce results within the target range.',
    },
  ],
  sandboxUnlocks: [],
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
      id: 'theory-ch2-operating-range',
      title: 'Operating range in a simulated circuit',
      content: 'In real and simulated circuits, components have acceptable operating ranges. A bulb might work properly between 1.5W and 3W of power. Below that range, it is too dim to be useful. Above it, the component risks overheating or damage. When a challenge specifies a target range, you must choose circuit values that produce results within those limits.',
      sourceLesson: 'lesson-ch2-5-1',
    },
  ],
  quizzesUnlocked: ['quiz-ch2-target-range'],
};
