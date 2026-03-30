import type { LessonConfig } from '../../../../types/lesson.ts';
import { PARALLEL_NODES } from '../../../shared.ts';
import type { CircuitComponent } from '../../../../types/circuit.ts';

const starterCircuit: CircuitComponent[] = [
  { id: 'battery-1', type: 'battery', nodeA: 'n1', nodeB: 'n6', properties: { voltage: 12 }, name: 'Battery', position: { x: 50, y: 250 }, rotation: 0 },
];

export const lessonCh3_5_2: LessonConfig = {
  id: 'lesson-ch3-5-2',
  unitId: 'ch3-unit-5',
  title: 'Build Toward a Target',
  description: 'Solve flexible challenges where the target conditions matter more than the exact circuit structure. Multiple correct solutions may exist.',
  stageLabel: 'Early Intermediate',
  prerequisites: ['lesson-ch3-5-1'],
  conceptsIntroduced: ['target-based design', 'flexible solutions', 'evaluation by target quantities'],
  initialCircuit: starterCircuit,
  initialNodes: PARALLEL_NODES,
  steps: [
    {
      id: 'step-1',
      text: 'So far, every challenge had one specific correct answer. Real engineering is different: you are given a target behavior, and there may be many valid ways to achieve it. What matters is whether the circuit meets the requirements, not whether it matches a single template.',
    },
    {
      id: 'step-2',
      text: 'You have a 12V battery and a set of available components. Your job is to build a circuit where the bulb operates within a specific power range. Use what you know about V = IR and P = VI to choose resistance values that hit the target.',
      highlights: ['battery-1'],
    },
    {
      id: 'step-3',
      text: 'There is no single right answer. A 48\u03A9 bulb would give P = 12\u00B2/48 = 3W. A 144\u03A9 bulb would give P = 12\u00B2/144 = 1W. Any resistance that puts the bulb power between 1W and 3W is valid. Think about the relationship between resistance and power, then build your circuit.',
    },
  ],
  challenges: [
    {
      id: 'challenge-1',
      prompt: 'Build a closed circuit using the 12V battery so that a bulb operates between 1W and 3W. You may use any available components.',
      type: 'build',
      evaluationCriteria: {
        circuitMustBeClosed: true,
        targetComponent: 'bulb-1',
        targetProperty: 'power',
        expectedRange: { min: 1.0, max: 3.0 },
      },
      availableComponents: ['battery', 'bulb', 'switch', 'resistor', 'wire'],
      hints: [
        'Use P = V\u00B2/R to figure out what resistance gives power in the 1W to 3W range.',
        'For 1W: R = 144\u03A9. For 3W: R = 48\u03A9. Any resistance between 48\u03A9 and 144\u03A9 works.',
        'Remember to close the circuit with a switch or wire so current can flow.',
      ],
    },
    {
      id: 'challenge-2',
      prompt: 'Build a closed circuit using the 12V battery that achieves a total current between 0.15A and 0.25A.',
      type: 'build',
      evaluationCriteria: {
        circuitMustBeClosed: true,
        targetProperty: 'current',
        expectedRange: { min: 0.15, max: 0.25 },
      },
      availableComponents: ['battery', 'bulb', 'switch', 'resistor', 'wire'],
      hints: [
        'Use I = V/R to determine what total resistance gives current in the target range.',
        'For 0.15A: R = 80\u03A9. For 0.25A: R = 48\u03A9. Any total resistance between 48\u03A9 and 80\u03A9 works.',
        'You can achieve the target resistance with a single component or a combination.',
      ],
    },
  ],
  theoryContent: [
    {
      title: 'Designing toward a target in an ideal circuit',
      content: 'In target-based design, the goal is a specific measurable outcome (a power range, a current range, a voltage across a component) rather than a specific circuit layout. You work backward from the target using Ohm\'s law and the power equation to determine what component values will satisfy the requirement. Multiple valid solutions often exist.',
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
      id: 'theory-ch3-target-design',
      title: 'Designing toward a target in an ideal circuit',
      content: 'In target-based design, the goal is a specific measurable outcome (a power range, a current range, a voltage across a component) rather than a specific circuit layout. You work backward from the target using Ohm\'s law and the power equation to determine what component values will satisfy the requirement. Multiple valid solutions often exist.',
      sourceLesson: 'lesson-ch3-5-2',
    },
  ],
  quizzesUnlocked: ['quiz-ch3-target-design'],
};
