import type { LessonConfig } from '../../../../types/lesson.ts';
import { CHAPTER_5_METADATA, NON_IDEAL_TOLERANCE } from '../../shared.ts';

// 12V / 0.5Ω internal + 10Ω bulb
// Ideal (r=0): I = 12/10 = 1.2A
// Non-ideal (r=0.5): I = 12/10.5 ≈ 1.143A
// ±5% of 1.2A → [1.14A, 1.26A]; 1.14A is within range

export const lessonCh5_1_2: LessonConfig = {
  id: 'lesson-ch5-1-2',
  unitId: 'ch5-unit-1',
  title: 'Wider Acceptable Ranges',
  description: 'Understand why non-ideal simulation uses range-based evaluation instead of exact-value targets.',
  stageLabel: CHAPTER_5_METADATA.stageLabel,
  prerequisites: ['lesson-ch5-1-1'],
  conceptsIntroduced: [
    'operating range versus exact target',
    'non-ideal behavior can shift values within an acceptable window',
    'range-based evaluation is appropriate for non-ideal simulation',
  ],
  initialNodes: [
    { id: 'n1', position: { x: 100, y: 150 } },
    { id: 'n2', position: { x: 300, y: 150 } },
    { id: 'n3', position: { x: 100, y: 350 } },
    { id: 'n4', position: { x: 300, y: 350 } },
  ],
  initialCircuit: [
    {
      id: 'battery-1',
      type: 'battery',
      nodeA: 'n1',
      nodeB: 'n3',
      properties: { voltage: 12, internalResistance: 0.5 },
      name: 'Battery',
      position: { x: 100, y: 250 },
      rotation: 0,
    },
    {
      id: 'bulb-1',
      type: 'bulb',
      nodeA: 'n1',
      nodeB: 'n2',
      properties: { resistance: 10 },
      name: 'Bulb',
      position: { x: 200, y: 150 },
      rotation: 0,
    },
    {
      id: 'switch-1',
      type: 'switch',
      nodeA: 'n2',
      nodeB: 'n4',
      properties: { isClosed: false },
      name: 'Switch',
      position: { x: 300, y: 250 },
      rotation: 0,
    },
    {
      id: 'wire-1',
      type: 'wire',
      nodeA: 'n3',
      nodeB: 'n4',
      properties: {},
      name: 'Wire',
      position: { x: 200, y: 350 },
      rotation: 0,
    },
  ],
  steps: [
    {
      id: 'step-1',
      text: 'This circuit has a 12V battery with a small amount of internal resistance (0.5\u03a9) and a 10\u03a9 bulb. If the battery were perfectly ideal, we would expect exactly 1.2A of current (I\u00a0=\u00a012\u00a0V\u00a0/\u00a010\u00a0\u03a9).',
      highlights: ['battery-1', 'bulb-1'],
    },
    {
      id: 'step-2',
      text: 'Close the switch. Because the battery has 0.5\u03a9 of internal resistance, the total resistance in the loop is 10.5\u03a9. The actual current is about 1.14A \u2014 slightly lower than the ideal 1.2A.',
      requiredAction: { type: 'toggle-switch', componentId: 'switch-1', targetState: true },
      highlights: ['switch-1'],
    },
    {
      id: 'step-3',
      text: 'Is 1.14A a failure? Not necessarily. In non-ideal simulation, we evaluate success against an operating range rather than a single exact target. A \u00b15% window around 1.2A spans from 1.14A to 1.26A. Our result of 1.14A sits right at the lower edge \u2014 still acceptable.',
      theoryCheck: {
        question: 'Why do we use a range instead of an exact target when evaluating non-ideal circuits?',
        choices: [
          {
            id: 'tc-a',
            label: 'Because the simulator is not precise enough for exact values',
            isCorrect: false,
            explanation: 'The simulation is deterministic. Ranges are a design choice to reflect realistic variation, not a limitation of the simulator.',
          },
          {
            id: 'tc-b',
            label: 'Because non-ideal effects shift values slightly, so exact targets would unfairly reject good designs',
            isCorrect: true,
            explanation: 'Correct! Non-ideal modeling introduces realistic deviations. Range-based evaluation lets a circuit succeed when it performs well enough for its purpose.',
          },
          {
            id: 'tc-c',
            label: 'Because all circuit challenges use ranges regardless of whether the model is ideal or non-ideal',
            isCorrect: false,
            explanation: 'Ideal challenges often use exact targets. Ranges become important specifically when non-ideal effects introduce realistic variation.',
          },
        ],
        explanation: 'Range-based evaluation reflects the reality that non-ideal components may shift outcomes slightly while the circuit still performs its intended function.',
      },
    },
  ],
  challenges: [
    {
      id: 'challenge-1',
      prompt: `A 12V battery with 0.5\u03a9 internal resistance drives a 10\u03a9 bulb. The ideal prediction is 1.2A. The non-ideal simulation produces 1.14A. The acceptable operating range is \u00b1${NON_IDEAL_TOLERANCE * 100}% of the ideal value. Is 1.14A an acceptable result?`,
      type: 'choose',
      evaluationCriteria: { correctChoiceId: 'ch1-b' },
      hints: [
        `Calculate \u00b1${NON_IDEAL_TOLERANCE * 100}% of 1.2A: the window spans from 1.14A to 1.26A.`,
        'Check whether 1.14A falls inside or outside that window.',
      ],
      choices: [
        {
          id: 'ch1-a',
          label: 'No \u2014 1.14A differs from the ideal 1.2A, so the circuit fails',
          isCorrect: false,
          explanation: 'Any deviation from ideal is not automatically a failure. The question is whether the result falls within the acceptable operating range.',
        },
        {
          id: 'ch1-b',
          label: 'Yes \u2014 1.14A is within the \u00b15% operating range of 1.2A',
          isCorrect: true,
          explanation: 'Correct! \u00b15% of 1.2A gives a window of [1.14A, 1.26A]. A result of 1.14A sits at the lower edge but is still acceptable.',
        },
        {
          id: 'ch1-c',
          label: 'Yes \u2014 any closed circuit produces an acceptable result',
          isCorrect: false,
          explanation: 'Simply closing the circuit does not guarantee an acceptable result. We still check whether the outcome falls within the operating range.',
        },
      ],
    },
  ],
  theoryContent: [
    {
      title: 'Operating Range vs Exact Target',
      content: 'In ideal circuit analysis, challenges often specify a single exact value. In non-ideal simulation, a small amount of realistic loss means results may vary slightly from the ideal prediction. An operating range defines the span of values that are still considered acceptable.',
    },
    {
      title: 'Why \u00b15%?',
      content: 'A \u00b15% tolerance band is a common engineering benchmark. It reflects the idea that a circuit performing within 5% of its intended value is still functioning correctly for most practical purposes.',
    },
  ],
  sandboxUnlocks: [],
  availableActions: ['toggle-switch'],
  currentOverlayAvailable: true,
  showFormulaPanel: true,
  formulasShown: [
    {
      formula: 'I = V \u00f7 (R\u2097\u2092\u2090\u2091 + R\u1d62\u2099\u209c)',
      symbols: [
        { symbol: 'I', name: 'Current', unit: 'A' },
        { symbol: 'V', name: 'Voltage', unit: 'V' },
        { symbol: 'R\u2097\u2092\u2090\u2091', name: 'Load resistance', unit: '\u03a9' },
        { symbol: 'R\u1d62\u2099\u209c', name: 'Internal resistance', unit: '\u03a9' },
      ],
    },
  ],
  theoryPageAdditions: [
    {
      id: 'theory-operating-ranges',
      title: 'Operating Ranges in Non-Ideal Simulation',
      content: 'When a circuit includes non-ideal components, realistic loss shifts results away from ideal predictions. Operating ranges define an acceptable span of values so that a circuit can succeed even when it performs slightly below the ideal expectation.',
      sourceLesson: 'lesson-ch5-1-2',
    },
  ],
  quizzesUnlocked: ['quiz-ch5-target-range'],
};
