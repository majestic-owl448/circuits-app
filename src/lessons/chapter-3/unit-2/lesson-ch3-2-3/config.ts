import type { LessonConfig } from '../../../../types/lesson.ts';
import { SERIES_NODES, SERIES_TWO_BULBS } from '../../../shared.ts';
import type { CircuitComponent } from '../../../../types/circuit.ts';

const circuit: CircuitComponent[] = SERIES_TWO_BULBS.map(c =>
  c.id === 'switch-1' ? { ...c, properties: { isClosed: true } } : c,
);

export const lessonCh3_2_3: LessonConfig = {
  id: 'lesson-ch3-2-3',
  unitId: 'ch3-unit-2',
  title: 'Power and Brightness in Series',
  description: 'Connect series calculations to bulb power and brightness. Use P = VI to see why series bulbs are dimmer than a single bulb.',
  stageLabel: 'Early Intermediate',
  prerequisites: ['lesson-ch3-2-2'],
  conceptsIntroduced: ['lower current changes load power', 'brightness linked to power'],
  initialCircuit: circuit,
  initialNodes: SERIES_NODES,
  steps: [
    {
      id: 'step-1',
      text: 'You know the series current is 0.1A. Now calculate how much power each bulb actually uses. First, find the voltage across one bulb: V_bulb = I \u00D7 R = 0.1A \u00D7 45\u03A9 = 4.5V.',
      highlights: ['bulb-1', 'bulb-2'],
      showCurrentOverlay: true,
    },
    {
      id: 'step-2',
      text: 'Each bulb gets 4.5V (half the battery voltage, since the two equal bulbs share it equally). Now find power: P = V \u00D7 I = 4.5V \u00D7 0.1A = 0.45W per bulb.',
    },
    {
      id: 'step-3',
      text: 'Compare this to a single bulb connected alone: I = 9V / 45\u03A9 = 0.2A, and P = 9V \u00D7 0.2A = 1.8W. That single bulb uses 4 times the power of each series bulb (1.8W vs 0.45W).',
      theoryCheck: {
        question: 'Which quantity most directly explains why series bulbs are dimmer?',
        choices: [
          { id: 'tc-a', label: 'Power (watts delivered to each bulb)', isCorrect: true, explanation: 'Correct! Brightness is determined by power. Less power means a dimmer bulb.' },
          { id: 'tc-b', label: 'Total resistance of the circuit', isCorrect: false, explanation: 'Resistance affects current, which affects power, but brightness is most directly linked to power at the bulb.' },
          { id: 'tc-c', label: 'Battery voltage', isCorrect: false, explanation: 'The battery voltage is the same regardless. What changes is how that voltage is shared among the bulbs, affecting power.' },
        ],
        explanation: 'Brightness is directly linked to power. In series, each bulb receives less voltage and current, so each bulb\'s power (and brightness) is lower.',
      },
    },
    {
      id: 'step-4',
      text: 'Key insight: adding bulbs in series reduces current, reduces voltage per bulb, and dramatically reduces power per bulb. Each series bulb is dimmer than it would be on its own.',
    },
  ],
  challenges: [
    {
      id: 'challenge-1',
      prompt: 'Each series bulb has 0.1A flowing through it and 45\u03A9 resistance. Calculate the power consumed by one bulb. (Hint: first find voltage across the bulb, then use P = VI.)',
      type: 'calculate',
      evaluationCriteria: {},
      calculationTarget: {
        quantity: 'power',
        expectedValue: 0.45,
        tolerance: 0.05,
        unit: 'W',
        formula: 'P = V \u00D7 I = (I \u00D7 R) \u00D7 I = 4.5 \u00D7 0.1',
      },
      detailedBreakdown: {
        steps: [
          { label: 'Find voltage across bulb', formula: 'V_bulb = I \u00D7 R = 0.1 \u00D7 45 = 4.5V', result: 'V_bulb = 4.5V' },
          { label: 'Calculate power', formula: 'P = V \u00D7 I = 4.5 \u00D7 0.1', result: 'P = 0.45W' },
        ],
      },
      hints: [
        'First find V across the bulb: V = I \u00D7 R = 0.1 \u00D7 45 = 4.5V.',
        'Then P = V \u00D7 I = 4.5 \u00D7 0.1 = 0.45W.',
      ],
    },
    {
      id: 'challenge-2',
      prompt: 'Why are series bulbs dimmer than a single bulb connected to the same battery?',
      type: 'choose',
      evaluationCriteria: { correctChoiceId: 'ch-b' },
      hints: [
        'Think about what happens to current and voltage per bulb when you add more bulbs in series.',
        'Less current and less voltage per bulb means less power.',
      ],
      choices: [
        { id: 'ch-a', label: 'The battery provides less voltage in a series circuit', isCorrect: false, explanation: 'The battery voltage stays the same. It is shared across more components, so each bulb gets less voltage.' },
        { id: 'ch-b', label: 'Each bulb receives less power because current and voltage per bulb are both lower', isCorrect: true, explanation: 'Correct! More series resistance means less current, and the voltage is split among bulbs. Both effects reduce each bulb\'s power.' },
        { id: 'ch-c', label: 'The bulbs have higher resistance in series', isCorrect: false, explanation: 'Each bulb\'s own resistance does not change. The total circuit resistance increases, which reduces current and therefore power per bulb.' },
      ],
    },
  ],
  theoryContent: [
    {
      title: 'Power and brightness in an ideal series circuit',
      content: 'Each series bulb gets a fraction of the source voltage. With two equal bulbs: V_bulb = V_source / 2. Power per bulb is P = V_bulb \u00D7 I. For 0.1A through a 45\u03A9 bulb: V = 4.5V, P = 0.45W. A single bulb alone would get 1.8W.',
      formula: 'P = V \u00D7 I',
    },
    {
      title: 'Brightness is linked to power',
      content: 'A bulb\'s brightness is determined by the power it dissipates. Less power means a dimmer bulb. In series, the reduced current and shared voltage both contribute to lower power per bulb.',
    },
  ],
  sandboxUnlocks: ['series-power-evaluation'],
  availableActions: ['toggle-switch', 'drag-to-place'],
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
        { symbol: 'R_total', name: 'Total resistance', unit: 'ohms (\u03A9)' },
        { symbol: 'R\u2081', name: 'Resistance 1', unit: 'ohms (\u03A9)' },
        { symbol: 'R\u2082', name: 'Resistance 2', unit: 'ohms (\u03A9)' },
      ],
    },
  ],
  theoryPageAdditions: [
    {
      id: 'theory-ch3-series-power-brightness',
      title: 'Power and brightness in an ideal series circuit',
      content: 'In a series circuit, each bulb receives only a fraction of the source voltage. For two identical bulbs, each gets half. Combined with the lower current, each bulb dissipates much less power than it would alone. For example, two 45\u03A9 bulbs on a 9V source each get 4.5V and 0.1A, yielding 0.45W per bulb\u2014compared to 1.8W for a single bulb. Brightness is directly proportional to power, so series bulbs appear noticeably dimmer.',
      sourceLesson: 'lesson-ch3-2-3',
    },
  ],
  quizzesUnlocked: ['quiz-ch3-series-power'],
};
