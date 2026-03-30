import type { LessonConfig } from '../../../../types/lesson.ts';
import { SERIES_NODES } from '../../../shared.ts';
import type { CircuitComponent } from '../../../../types/circuit.ts';

const circuit: CircuitComponent[] = [
  { id: 'battery-1', type: 'battery', nodeA: 'n1', nodeB: 'n6', properties: { voltage: 9 }, name: 'Battery', position: { x: 80, y: 225 }, rotation: 0 },
  { id: 'wire-1', type: 'wire', nodeA: 'n1', nodeB: 'n2', properties: {}, name: 'Wire', position: { x: 250, y: 100 }, rotation: 0 },
  { id: 'bulb-1', type: 'bulb', nodeA: 'n2', nodeB: 'n3', properties: { resistance: 45 }, name: 'Bulb 1', position: { x: 440, y: 150 }, rotation: 0 },
  { id: 'bulb-2', type: 'bulb', nodeA: 'n3', nodeB: 'n4', properties: { resistance: 45 }, name: 'Bulb 2', position: { x: 540, y: 275 }, rotation: 0 },
  { id: 'wire-2', type: 'wire', nodeA: 'n4', nodeB: 'n5', properties: {}, name: 'Wire', position: { x: 425, y: 400 }, rotation: 0 },
  { id: 'switch-1', type: 'switch', nodeA: 'n6', nodeB: 'n5', properties: { isClosed: true }, name: 'Switch', position: { x: 250, y: 400 }, rotation: 0 },
];

export const lessonCh3_1_2: LessonConfig = {
  id: 'lesson-ch3-1-2',
  unitId: 'ch3-unit-1',
  title: 'Brightness in Series',
  description: 'See that identical bulbs in series are dimmer than a single bulb powered by the same battery.',
  stageLabel: 'Early Intermediate',
  prerequisites: ['lesson-ch3-1-1'],
  conceptsIntroduced: ['identical bulbs in series are dimmer', 'brightness as comparison concept', 'arrangement affects behavior'],
  initialCircuit: circuit,
  initialNodes: SERIES_NODES,
  steps: [
    {
      id: 'step-1',
      text: 'This circuit has two identical 45\u03A9 bulbs in series with a 9V battery. The switch is already closed, so both bulbs are lit. Look at their brightness.',
      highlights: ['bulb-1', 'bulb-2'],
      showCurrentOverlay: true,
    },
    {
      id: 'step-2',
      text: 'In the previous chapter, a single 45\u03A9 bulb on a 9V battery drew 0.2A and consumed 1.8W. Now there are two 45\u03A9 bulbs in series, giving a total resistance of 90\u03A9. The current drops to 9/90 = 0.1A.',
      highlights: ['battery-1'],
    },
    {
      id: 'step-3',
      text: 'Each bulb now receives only 0.1A instead of 0.2A. That means each bulb uses less power and glows dimmer than a single bulb would. Adding a second bulb in series made both bulbs dimmer.',
      highlights: ['bulb-1', 'bulb-2'],
      theoryCheck: {
        question: 'Why are two identical bulbs in series dimmer than one bulb alone?',
        choices: [
          { id: 'tc-a', label: 'The total resistance is higher, so less current flows through each bulb', isCorrect: true, explanation: 'Correct! Two 45\u03A9 bulbs in series create 90\u03A9 total resistance, halving the current compared to one bulb.' },
          { id: 'tc-b', label: 'The battery provides less voltage when there are two bulbs', isCorrect: false, explanation: 'The battery still provides 9V regardless of how many bulbs are connected. The voltage is shared across the bulbs, but the battery output stays the same.' },
          { id: 'tc-c', label: 'One bulb steals brightness from the other', isCorrect: false, explanation: 'Bulbs do not steal from each other. Both are dimmer because the increased total resistance reduces the current for the entire circuit.' },
        ],
        explanation: 'In a series circuit, resistances add up. Two 45\u03A9 bulbs give 90\u03A9 total. With the same 9V battery, the current is halved (0.1A instead of 0.2A), so each bulb is dimmer.',
      },
    },
    {
      id: 'step-4',
      text: 'This is a key consequence of the series arrangement: adding more loads reduces the current through all of them. Each bulb gets dimmer because the total resistance of the path increases while the battery voltage stays the same.',
    },
  ],
  challenges: [
    {
      id: 'challenge-1',
      prompt: 'You have two identical bulbs in series and one bulb alone, both circuits powered by the same 9V battery. Which bulbs are dimmer?',
      type: 'choose',
      evaluationCriteria: { correctChoiceId: 'ch1-a' },
      hints: [
        'Think about total resistance in each circuit.',
        'More total resistance means less current, which means less brightness.',
      ],
      choices: [
        { id: 'ch1-a', label: 'The two bulbs in series are dimmer than the single bulb', isCorrect: true, explanation: 'Correct! The series pair has double the total resistance, so the current is halved and each bulb is dimmer.' },
        { id: 'ch1-b', label: 'The single bulb is dimmer because it has to do all the work alone', isCorrect: false, explanation: 'The single bulb actually gets more current because the total resistance is lower. It is brighter, not dimmer.' },
        { id: 'ch1-c', label: 'All three bulbs are equally bright', isCorrect: false, explanation: 'The circuits have different total resistances, so the current differs. The series bulbs are dimmer.' },
      ],
    },
    {
      id: 'challenge-2',
      prompt: 'Two identical 45\u03A9 bulbs are in series with a 9V battery. Both bulbs light up. How does each bulb compare to a single 45\u03A9 bulb on the same battery?',
      type: 'choose',
      evaluationCriteria: { correctChoiceId: 'ch2-a' },
      hints: [
        'Calculate the current in each scenario: single bulb (45\u03A9) vs. two in series (90\u03A9).',
        'Single bulb: I = 9/45 = 0.2A. Series pair: I = 9/90 = 0.1A.',
      ],
      choices: [
        { id: 'ch2-a', label: 'Each series bulb is dimmer because it receives 0.1A instead of 0.2A', isCorrect: true, explanation: 'Correct! The series pair doubles the total resistance, cutting the current in half. Each bulb is dimmer.' },
        { id: 'ch2-b', label: 'Each series bulb is brighter because two bulbs produce more light', isCorrect: false, explanation: 'More bulbs in series do not produce more light per bulb. The increased resistance reduces current and dims each one.' },
      ],
    },
  ],
  theoryContent: [
    {
      title: 'Brightness in ideal series comparison',
      content: 'When identical bulbs are placed in series, each one is dimmer than a single bulb on the same battery. The total resistance increases (resistances add in series), so the current decreases. Since each bulb carries less current, each one dissipates less power and glows dimmer.',
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
  ],
  theoryPageAdditions: [
    {
      id: 'theory-ch3-series-brightness',
      title: 'Brightness in ideal series comparison',
      content: 'When identical bulbs are placed in series, each one is dimmer than a single bulb powered by the same battery. This happens because resistances add in series, increasing the total resistance and reducing the current. Since brightness depends on power (P = VI), less current means less power per bulb and a dimmer glow.',
      sourceLesson: 'lesson-ch3-1-2',
    },
  ],
  quizzesUnlocked: ['quiz-ch3-series-brightness'],
};
