import type { LessonConfig } from '../../../../types/lesson.ts';
import { SERIES_NODES } from '../../../shared.ts';
import type { CircuitComponent } from '../../../../types/circuit.ts';

const unequalSeriesCircuit: CircuitComponent[] = [
  { id: 'battery-1', type: 'battery', nodeA: 'n1', nodeB: 'n6', properties: { voltage: 9 }, name: 'Battery', position: { x: 80, y: 225 }, rotation: 0 },
  { id: 'wire-1', type: 'wire', nodeA: 'n1', nodeB: 'n2', properties: {}, name: 'Wire', position: { x: 250, y: 100 }, rotation: 0 },
  { id: 'bulb-1', type: 'bulb', nodeA: 'n2', nodeB: 'n3', properties: { resistance: 30 }, name: 'Bulb A', position: { x: 440, y: 150 }, rotation: 0 },
  { id: 'bulb-2', type: 'bulb', nodeA: 'n3', nodeB: 'n4', properties: { resistance: 60 }, name: 'Bulb B', position: { x: 540, y: 275 }, rotation: 0 },
  { id: 'wire-2', type: 'wire', nodeA: 'n4', nodeB: 'n5', properties: {}, name: 'Wire', position: { x: 425, y: 400 }, rotation: 0 },
  { id: 'switch-1', type: 'switch', nodeA: 'n6', nodeB: 'n5', properties: { isClosed: true }, name: 'Switch', position: { x: 250, y: 400 }, rotation: 0 },
];

export const lessonCh3_5_1: LessonConfig = {
  id: 'lesson-ch3-5-1',
  unitId: 'ch3-unit-5',
  title: 'When the Bulbs Are Not Equal',
  description: 'Unequal resistance values create unequal behavior. Different R values mean different voltage drops, currents, and power dissipation across each component.',
  stageLabel: 'Early Intermediate',
  prerequisites: ['lesson-ch3-4-4'],
  conceptsIntroduced: ['unequal loads', 'different resistance creates different results', 'equal-load intuition limits'],
  initialCircuit: unequalSeriesCircuit,
  initialNodes: SERIES_NODES,
  steps: [
    {
      id: 'step-1',
      text: 'Until now, every circuit we have built used identical bulbs. Both bulbs had the same resistance, so they shared voltage and power equally. But real circuits rarely have identical loads.',
      highlights: ['bulb-1', 'bulb-2'],
    },
    {
      id: 'step-2',
      text: 'This series circuit has two bulbs with different resistances: Bulb A is 30\u03A9 and Bulb B is 60\u03A9. The total resistance is 30 + 60 = 90\u03A9. With a 9V battery, the current through the entire series path is I = V / R = 9 / 90 = 0.1A.',
      highlights: ['bulb-1', 'bulb-2', 'battery-1'],
      showCurrentOverlay: true,
    },
    {
      id: 'step-3',
      text: 'Because the current is the same through both bulbs (0.1A), each bulb drops a different voltage. Bulb A: V = IR = 0.1 \u00D7 30 = 3V. Bulb B: V = IR = 0.1 \u00D7 60 = 6V. The higher-resistance bulb drops more voltage.',
      highlights: ['bulb-1', 'bulb-2'],
      theoryCheck: {
        question: 'Why does the equal-bulb shortcut (splitting voltage evenly) no longer apply here?',
        choices: [
          { id: 'tc-a', label: 'Because the bulbs have different resistances, so V = IR gives different voltage drops for the same current', isCorrect: true, explanation: 'Correct! When resistances differ, V = IR produces different voltage drops even though the current is the same through both.' },
          { id: 'tc-b', label: 'Because the battery voltage changed', isCorrect: false, explanation: 'The battery is still 9V. The difference comes from the unequal resistances, not the source.' },
          { id: 'tc-c', label: 'Because one bulb is broken', isCorrect: false, explanation: 'Both bulbs are working. They simply have different resistance values, which leads to different voltage drops.' },
        ],
        explanation: 'The equal-voltage shortcut only works when all series components have identical resistance. With unequal R values, you must use V = IR for each component individually.',
      },
    },
    {
      id: 'step-4',
      text: 'The power also differs. Bulb A: P = VI = 3 \u00D7 0.1 = 0.3W. Bulb B: P = VI = 6 \u00D7 0.1 = 0.6W. Bulb B consumes twice the power because it has twice the resistance and therefore twice the voltage drop.',
      highlights: ['bulb-1', 'bulb-2'],
    },
  ],
  challenges: [
    {
      id: 'challenge-1',
      prompt: 'In this circuit with a 30\u03A9 bulb and a 60\u03A9 bulb in series, which bulb behaves differently from what you might expect with equal bulbs?',
      type: 'choose',
      evaluationCriteria: { correctChoiceId: 'ch-c' },
      hints: [
        'Think about what happens when the resistances are not the same.',
        'With equal bulbs, each would drop 4.5V. What happens now?',
      ],
      choices: [
        { id: 'ch-a', label: 'Only Bulb A behaves differently', isCorrect: false, explanation: 'Both bulbs behave differently from the equal-resistance case. Bulb A drops 3V instead of 4.5V, and Bulb B drops 6V instead of 4.5V.' },
        { id: 'ch-b', label: 'Only Bulb B behaves differently', isCorrect: false, explanation: 'Both bulbs behave differently from the equal-resistance case. Each gets a voltage proportional to its own resistance.' },
        { id: 'ch-c', label: 'Both bulbs behave differently because R differs', isCorrect: true, explanation: 'Correct! When resistance values differ, both components get voltage drops proportional to their individual resistance. Neither matches the equal-split shortcut.' },
      ],
    },
    {
      id: 'challenge-2',
      prompt: 'Calculate the total (equivalent) resistance of this series circuit with a 30\u03A9 and a 60\u03A9 bulb.',
      type: 'calculate',
      evaluationCriteria: {},
      hints: [
        'In a series circuit, total resistance is the sum of all individual resistances.',
        'R_total = R\u2081 + R\u2082',
      ],
      calculationTarget: {
        quantity: 'resistance',
        expectedValue: 90,
        tolerance: 1,
        unit: '\u03A9',
        formula: 'R_total = R\u2081 + R\u2082 = 30 + 60',
      },
      detailedBreakdown: {
        steps: [
          { label: 'Identify resistances', formula: 'R\u2081 = 30\u03A9, R\u2082 = 60\u03A9', result: '' },
          { label: 'Apply series formula', formula: 'R_total = R\u2081 + R\u2082', result: '30 + 60 = 90\u03A9' },
        ],
      },
    },
  ],
  theoryContent: [
    {
      title: 'Equal versus unequal loads',
      content: 'When series components have equal resistance, the source voltage splits evenly among them. This shortcut breaks down when resistances differ. With unequal loads, you must calculate each voltage drop individually using V = IR. The component with higher resistance always drops more voltage and dissipates more power in a series circuit.',
    },
  ],
  sandboxUnlocks: ['unequal-loads'],
  availableActions: ['toggle-switch', 'drag-to-place', 'connect-wire'],
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
      id: 'theory-ch3-unequal-loads',
      title: 'Equal versus unequal loads',
      content: 'When series components have equal resistance, the source voltage splits evenly among them. This shortcut breaks down when resistances differ. With unequal loads, you must calculate each voltage drop individually using V = IR. The component with higher resistance always drops more voltage and dissipates more power in a series circuit.',
      sourceLesson: 'lesson-ch3-5-1',
    },
  ],
  quizzesUnlocked: ['quiz-ch3-unequal-loads'],
};
