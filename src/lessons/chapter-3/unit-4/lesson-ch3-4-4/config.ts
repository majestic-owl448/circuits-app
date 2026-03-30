import type { LessonConfig } from '../../../../types/lesson.ts';
import { PARALLEL_NODES, PARALLEL_TWO_BULBS } from '../../../shared.ts';
import type { CircuitComponent } from '../../../../types/circuit.ts';

const circuit: CircuitComponent[] = PARALLEL_TWO_BULBS.map(c =>
  c.id === 'switch-1' ? { ...c, properties: { isClosed: true } } : c,
);

export const lessonCh3_4_4: LessonConfig = {
  id: 'lesson-ch3-4-4',
  unitId: 'ch3-unit-4',
  title: 'Power and Brightness in Parallel',
  description: 'Compare parallel bulb power and brightness to single-bulb and series cases. Each parallel bulb dissipates 1.8W, the same as a single bulb alone.',
  stageLabel: 'Early Intermediate',
  prerequisites: ['lesson-ch3-4-3'],
  conceptsIntroduced: ['parallel bulb power equals single-bulb power', 'parallel brightness vs series brightness'],
  initialCircuit: circuit,
  initialNodes: PARALLEL_NODES,
  steps: [
    {
      id: 'step-1',
      text: 'Now that we know the voltage and current for each parallel branch, we can calculate the power dissipated by each bulb. Each bulb has 9V across it and carries 0.2A.',
      highlights: ['bulb-1', 'bulb-2'],
      showCurrentOverlay: true,
    },
    {
      id: 'step-2',
      text: 'Using the power formula: P = V \u00d7 I = 9V \u00d7 0.2A = 1.8W. Each parallel bulb dissipates 1.8 watts. That is the same power a single 45\u03A9 bulb would use if connected alone to the 9V battery!',
      highlights: ['bulb-1', 'bulb-2'],
    },
    {
      id: 'step-3',
      text: 'Compare this to series. In a series circuit with two 45\u03A9 bulbs: R_total = 90\u03A9, I = 0.1A, and each bulb gets only 4.5V. Power per series bulb: P = 4.5 \u00d7 0.1 = 0.45W. That is four times less than in parallel!',
      theoryCheck: {
        question: 'Why are parallel bulbs brighter than series bulbs with the same resistances?',
        choices: [
          { id: 'tc-a', label: 'Each parallel branch gets the full source voltage, so more power per bulb', isCorrect: true, explanation: 'Correct! In parallel, each bulb sees the full 9V and draws its own current. In series, the voltage is split among bulbs, reducing power per bulb.' },
          { id: 'tc-b', label: 'Parallel circuits use more efficient wire', isCorrect: false, explanation: 'Wire efficiency has nothing to do with it. The key is that parallel branches each receive the full source voltage.' },
          { id: 'tc-c', label: 'The battery produces more voltage in parallel', isCorrect: false, explanation: 'The battery voltage is always 9V regardless of circuit arrangement. The difference is how that voltage is distributed to the bulbs.' },
        ],
        explanation: 'In parallel, each bulb gets the full source voltage and draws current independently. In series, the voltage divides among bulbs, giving each less power and less brightness.',
      },
    },
    {
      id: 'step-4',
      text: 'Summary: each parallel bulb produces 1.8W (same as a lone bulb), while each series bulb produces only 0.45W. Parallel bulbs shine at full brightness. The trade-off is that the battery must supply more total current (0.4A vs 0.1A), so it drains faster.',
    },
  ],
  challenges: [
    {
      id: 'challenge-1',
      prompt: 'Which arrangement gives brighter identical bulbs: series or parallel?',
      type: 'choose',
      evaluationCriteria: { correctChoiceId: 'ch-b' },
      hints: [
        'Think about which arrangement gives each bulb more voltage.',
        'In parallel, each bulb gets the full 9V. In series, each gets only a fraction.',
      ],
      choices: [
        { id: 'ch-a', label: 'Series', isCorrect: false, explanation: 'In series, the voltage is split among bulbs, so each gets less power and shines dimmer. Parallel gives each bulb the full voltage.' },
        { id: 'ch-b', label: 'Parallel', isCorrect: true, explanation: 'Correct! Each parallel bulb receives the full source voltage, giving it more power (1.8W vs 0.45W for series) and greater brightness.' },
        { id: 'ch-c', label: 'They are equally bright', isCorrect: false, explanation: 'They are not equal. Parallel bulbs each get 9V and 1.8W, while series bulbs each get 4.5V and 0.45W.' },
      ],
    },
    {
      id: 'challenge-2',
      prompt: 'In this parallel circuit, each bulb has 9V across it and carries 0.2A. What is the power dissipated by one bulb?',
      type: 'calculate',
      evaluationCriteria: {},
      calculationTarget: {
        quantity: 'power',
        expectedValue: 1.8,
        tolerance: 0.1,
        unit: 'W',
        formula: 'P = V \u00d7 I = 9 \u00d7 0.2',
      },
      detailedBreakdown: {
        steps: [
          { label: 'Identify branch voltage', formula: 'V_branch = 9V', result: 'Full source voltage' },
          { label: 'Identify branch current', formula: 'I_branch = 0.2A', result: 'From Ohm\'s Law: 9/45' },
          { label: 'Calculate power', formula: 'P = V \u00d7 I = 9 \u00d7 0.2 = 1.8W', result: '1.8W' },
        ],
      },
      hints: [
        'Use the power formula: P = V \u00d7 I.',
        'The voltage across one parallel bulb is 9V and its current is 0.2A.',
      ],
    },
  ],
  theoryContent: [
    {
      title: 'Power and brightness in an ideal parallel circuit',
      content: 'Each parallel bulb receives the full source voltage and draws current independently. For a 45\u03A9 bulb across 9V: I = 9/45 = 0.2A and P = 9 \u00d7 0.2 = 1.8W. This is the same power a single bulb would dissipate alone, so parallel bulbs shine at full brightness.',
    },
    {
      title: 'Series versus parallel brightness comparison',
      content: 'Two 45\u03A9 bulbs in series share the 9V source, giving each only 4.5V and 0.1A for 0.45W per bulb. The same bulbs in parallel each get the full 9V and 0.2A for 1.8W per bulb. Parallel bulbs are four times brighter, but the battery supplies four times the total current.',
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
      id: 'theory-ch3-parallel-power-brightness',
      title: 'Power and brightness in parallel vs series',
      content: 'Each parallel bulb receives the full source voltage, so it dissipates the same power as a single bulb alone (1.8W for a 45\u03A9 bulb across 9V). In contrast, series bulbs share the voltage and each dissipates only 0.45W. Parallel bulbs are brighter, but the battery must supply more total current.',
      sourceLesson: 'lesson-ch3-4-4',
    },
  ],
  quizzesUnlocked: ['quiz-ch3-series-vs-parallel'],
};
