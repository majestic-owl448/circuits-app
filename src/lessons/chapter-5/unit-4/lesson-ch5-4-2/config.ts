import type { LessonConfig } from '../../../../types/lesson.ts';
import { CHAPTER_5_METADATA } from '../../shared.ts';
import { OPERATING_LIMIT_PRESETS } from '../../../shared.ts';

// 6V source + 2Ω bulb with operatingLimit: {type:'power', max:2.5}
// I = 6/2 = 3A
// P = 3² × 2 = 18W >> 2.5W limit → component shown as isFailed:true
// Lesson shows the failed state and explains why it happened

export const lessonCh5_4_2: LessonConfig = {
  id: 'lesson-ch5-4-2',
  unitId: 'ch5-unit-4',
  title: 'Burnout and Operating Limits',
  description: 'Understand that components have operating limits and can enter a failure state when those limits are exceeded.',
  stageLabel: CHAPTER_5_METADATA.stageLabel,
  prerequisites: ['lesson-ch5-4-1'],
  conceptsIntroduced: [
    'operating limits',
    'failure state from exceeding power limits',
    'working range versus damaging range',
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
      properties: { voltage: 6 },
      name: 'Battery (6V)',
      position: { x: 100, y: 250 },
      rotation: 0,
    },
    {
      id: 'bulb-1',
      type: 'bulb',
      nodeA: 'n1',
      nodeB: 'n2',
      properties: {
        resistance: 2,
        operatingLimit: OPERATING_LIMIT_PRESETS.beginnerBulb,
        isFailed: true,
      },
      name: 'Bulb (failed)',
      position: { x: 200, y: 150 },
      rotation: 0,
    },
    {
      id: 'switch-1',
      type: 'switch',
      nodeA: 'n2',
      nodeB: 'n4',
      properties: { isClosed: true },
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
      text: 'The bulb in this circuit has already failed. Its operating limit is 2.5W \u2014 meaning it can safely dissipate up to 2.5W. When connected to 6V through its 2\u03a9 resistance, the actual power was 18W \u2014 over 7 times its limit.',
      highlights: ['bulb-1'],
    },
    {
      id: 'step-2',
      text: 'Let\u2019s verify: I\u00a0=\u00a06\u00a0/\u00a02\u00a0=\u00a03A. P\u00a0=\u00a0I\u00b2\u00a0\u00d7\u00a0R\u00a0=\u00a09\u00a0\u00d7\u00a02\u00a0=\u00a018W. The limit is 2.5W. 18W\u00a0>>\u00a02.5W \u2014 the bulb was operating far outside its safe range. Once it failed, the circuit no longer functions as intended.',
      highlights: ['bulb-1', 'battery-1'],
    },
    {
      id: 'step-3',
      text: 'To prevent burnout, you must ensure the component never operates beyond its rated limit. This means checking power dissipation before applying a circuit, not just after it fails.',
      theoryCheck: {
        question: 'A component has a 2.5W power limit. The circuit delivers 18W to it. What happens?',
        choices: [
          {
            id: 'tc-a',
            label: 'The component operates normally because it adjusts its resistance',
            isCorrect: false,
            explanation: 'Components in this model do not auto-adjust. If operating power exceeds the limit, the component enters a failure state.',
          },
          {
            id: 'tc-b',
            label: 'The component fails (burns out) because the operating limit is exceeded',
            isCorrect: true,
            explanation: 'Correct! 18W\u00a0>>\u00a02.5W. The component enters a failed (burned out) state. Operating limits define the maximum safe power, not just a warning threshold.',
          },
          {
            id: 'tc-c',
            label: 'The source reduces its output to protect the component',
            isCorrect: false,
            explanation: 'The source in this model provides its rated voltage without any automatic protection. Safety must be engineered into the design, not assumed from the source.',
          },
        ],
        explanation: 'Operating limits define the maximum safe power dissipation. Exceeding them causes the component to fail in the simulation, just as it would in a real circuit.',
      },
    },
  ],
  challenges: [
    {
      id: 'challenge-1',
      prompt: 'A bulb has a 2.5W operating limit. It has 2\u03a9 resistance and is connected to a 6V source. Which modification prevents burnout while still keeping the circuit closed?',
      type: 'choose',
      evaluationCriteria: { correctChoiceId: 'ch1-b' },
      hints: [
        'Calculate P\u00a0=\u00a0V\u00b2\u00a0/\u00a0R_total for each option.',
        'The bulb\u2019s power is P_bulb\u00a0=\u00a0I\u00b2\u00a0\u00d7\u00a0R_bulb. You need P_bulb\u00a0<\u00a02.5W.',
      ],
      choices: [
        {
          id: 'ch1-a',
          label: 'Leave the circuit as-is; the bulb will adjust over time',
          isCorrect: false,
          explanation: 'Components in this model do not self-adjust. The 18W dissipation exceeds the 2.5W limit and causes failure immediately.',
        },
        {
          id: 'ch1-b',
          label: 'Add a 4\u03a9 series resistor so I\u00a0=\u00a01A and P_bulb\u00a0=\u00a01\u00b2\u00a0\u00d7\u00a02\u00a0=\u00a02W \u2014 within limit',
          isCorrect: true,
          explanation: 'Correct! With 4\u03a9 in series: R_total\u00a0=\u00a06\u03a9, I\u00a0=\u00a01A, P_bulb\u00a0=\u00a02W. This is below the 2.5W limit.',
        },
        {
          id: 'ch1-c',
          label: 'Replace the 6V source with a 12V source to increase power headroom',
          isCorrect: false,
          explanation: 'Increasing source voltage increases current and power dissipation in the bulb, making the situation worse, not better.',
        },
      ],
    },
  ],
  theoryContent: [
    {
      title: 'Operating Limits and Burnout',
      content: 'Components have maximum power ratings. Exceeding this limit causes the component to fail (burn out) in the simulation. The working range is the set of operating conditions that keep power dissipation below the limit. The damaging range is anything above it.',
    },
    {
      title: 'Checking Power Before Connecting',
      content: 'To prevent burnout, calculate expected power dissipation before running the circuit: P\u00a0=\u00a0V\u00b2/R or P\u00a0=\u00a0I\u00b2R. If the result exceeds the component\u2019s rating, add series resistance, use a lower supply voltage, or choose a higher-rated component.',
    },
  ],
  sandboxUnlocks: ['failure-states'],
  availableActions: ['toggle-switch'],
  currentOverlayAvailable: true,
  showFormulaPanel: true,
  formulasShown: [
    {
      formula: 'P = I\u00b2 \u00d7 R',
      symbols: [
        { symbol: 'P', name: 'Power dissipated', unit: 'W' },
        { symbol: 'I', name: 'Current', unit: 'A' },
        { symbol: 'R', name: 'Resistance', unit: '\u03a9' },
      ],
    },
  ],
  theoryPageAdditions: [
    {
      id: 'theory-operating-limits-burnout',
      title: 'Operating Limits and Burnout',
      content: 'Components have a maximum safe power rating. Exceeding it causes failure. Calculate expected power dissipation (P\u00a0=\u00a0I\u00b2R) before running a circuit and ensure it remains within the component\u2019s rated limit.',
      sourceLesson: 'lesson-ch5-4-2',
    },
  ],
  quizzesUnlocked: ['quiz-ch5-burnout-limits-basics'],
};
