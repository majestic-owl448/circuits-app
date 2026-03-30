import type { LessonConfig } from '../../../../types/lesson.ts';
import { PARALLEL_NODES } from '../../../shared.ts';
import type { CircuitComponent } from '../../../../types/circuit.ts';

const reviewStarterCircuit: CircuitComponent[] = [
  { id: 'battery-1', type: 'battery', nodeA: 'n1', nodeB: 'n6', properties: { voltage: 9 }, name: 'Battery', position: { x: 50, y: 250 }, rotation: 0 },
];

export const lessonCh3_5_3: LessonConfig = {
  id: 'lesson-ch3-5-3',
  unitId: 'ch3-unit-5',
  title: 'Chapter Review Challenge',
  description: 'Integrate series and parallel reasoning in larger challenges. Apply everything from Chapter 3 with flexible reasoning and no new concepts.',
  stageLabel: 'Early Intermediate',
  prerequisites: ['lesson-ch3-5-2'],
  conceptsIntroduced: ['integration', 'fluency', 'flexible reasoning'],
  initialCircuit: reviewStarterCircuit,
  initialNodes: PARALLEL_NODES,
  steps: [
    {
      id: 'step-1',
      text: 'You have now learned how series and parallel circuits behave, how to calculate voltage drops, current, resistance, and power in both configurations, and how to handle unequal loads. This final challenge brings it all together.',
    },
    {
      id: 'step-2',
      text: 'You will build circuits to meet target conditions, choosing whether to use series, parallel, or mixed configurations. Think about which structure best achieves the goal before you start placing components.',
      highlights: ['battery-1'],
    },
    {
      id: 'step-3',
      text: 'There is no single correct layout. Use the formulas, reason about the trade-offs between series and parallel, and build a circuit that meets the target. Good luck!',
    },
  ],
  challenges: [
    {
      id: 'challenge-1',
      prompt: 'Build a circuit with the 9V battery that achieves a total current between 0.3A and 0.5A. You may use series, parallel, or a combination.',
      type: 'build',
      evaluationCriteria: {
        circuitMustBeClosed: true,
        targetProperty: 'current',
        expectedRange: { min: 0.3, max: 0.5 },
      },
      availableComponents: ['battery', 'bulb', 'switch', 'resistor', 'wire'],
      hints: [
        'For 0.3A with 9V: total R = 30\u03A9. For 0.5A with 9V: total R = 18\u03A9.',
        'A single low-resistance bulb works, or you can use parallel branches to reduce total resistance.',
        'Remember: parallel branches lower total resistance, series components increase it.',
      ],
    },
    {
      id: 'challenge-2',
      prompt: 'A circuit has three bulbs wired in series, but they are all too dim. Which structural change would make all three bulbs brighter?',
      type: 'choose',
      evaluationCriteria: { correctChoiceId: 'ch2-b' },
      hints: [
        'Think about what determines brightness: power dissipation depends on current and voltage.',
        'How does switching from series to parallel change the voltage across each bulb?',
      ],
      choices: [
        { id: 'ch2-a', label: 'Add a fourth bulb in series', isCorrect: false, explanation: 'Adding another series component increases total resistance, reducing current and making all bulbs even dimmer.' },
        { id: 'ch2-b', label: 'Rewire the bulbs in parallel instead of series', isCorrect: true, explanation: 'Correct! In parallel, each bulb gets the full battery voltage instead of sharing it. This dramatically increases the current through each bulb and its brightness.' },
        { id: 'ch2-c', label: 'Remove the switch from the circuit', isCorrect: false, explanation: 'The switch (when closed) has negligible resistance. Removing it does not meaningfully change the current or brightness.' },
        { id: 'ch2-d', label: 'Reverse the battery polarity', isCorrect: false, explanation: 'Reversing polarity changes the direction of current flow but not its magnitude. The bulbs would be equally dim.' },
      ],
    },
  ],
  theoryContent: [
    {
      title: 'Chapter 3 review',
      content: 'Chapter 3 covered series and parallel circuits in depth. In series, components share the same current and divide the source voltage proportionally to their resistance. In parallel, components share the same voltage and divide the total current. Power dissipation depends on both voltage and current (P = VI). Unequal loads require individual calculation rather than equal-split shortcuts. Choosing between series and parallel depends on the target behavior you need.',
    },
  ],
  sandboxUnlocks: ['chapter-3-complete'],
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
      id: 'theory-ch3-review',
      title: 'Chapter 3 review',
      content: 'Chapter 3 covered series and parallel circuits in depth. In series, components share the same current and divide the source voltage proportionally to their resistance. In parallel, components share the same voltage and divide the total current. Power dissipation depends on both voltage and current (P = VI). Unequal loads require individual calculation rather than equal-split shortcuts. Choosing between series and parallel depends on the target behavior you need.',
      sourceLesson: 'lesson-ch3-5-3',
    },
  ],
  quizzesUnlocked: ['quiz-ch3-review'],
};
