import type { LessonConfig } from '../../../../types/lesson.ts';
import { CHAPTER_10_METADATA, CH10_NODES } from '../../shared.ts';

export const lessonCh10_1_3: LessonConfig = {
  id: 'lesson-ch10-1-3',
  unitId: 'ch10-unit-1',
  title: 'Choose the Right Reasoning First',
  description: 'Practice picking the correct first analytical move for a given circuit scenario, based on domain classification and the type of unknown to solve for.',
  stageLabel: CHAPTER_10_METADATA.stageLabel,
  prerequisites: ['lesson-ch10-1-2'],
  conceptsIntroduced: [
    'first analytical move selection',
    'matching unknown type to analysis approach',
    'analysis order for multi-domain circuits',
  ],
  initialNodes: CH10_NODES,
  initialCircuit: [
    {
      id: 'bat-1',
      type: 'battery',
      nodeA: 'n1',
      nodeB: 'n3',
      properties: { voltage: 9 },
      name: 'Battery (9V)',
      position: { x: 150, y: 250 },
      rotation: 0,
    },
    {
      id: 'res-1',
      type: 'resistor',
      nodeA: 'n1',
      nodeB: 'n2',
      properties: { resistance: 100 },
      name: 'Resistor (100Ω)',
      position: { x: 325, y: 150 },
      rotation: 0,
    },
    {
      id: 'wire-1',
      type: 'wire',
      nodeA: 'n2',
      nodeB: 'n4',
      properties: { wireResistance: 0 },
      name: 'Wire',
      position: { x: 500, y: 250 },
      rotation: 0,
    },
    {
      id: 'wire-2',
      type: 'wire',
      nodeA: 'n3',
      nodeB: 'n4',
      properties: { wireResistance: 0 },
      name: 'Wire',
      position: { x: 325, y: 350 },
      rotation: 0,
    },
  ],
  steps: [
    {
      id: 'step-1',
      text: 'Knowing which domain applies tells you the toolbox. But within a domain, you also need to choose the first analytical move: what do you calculate first? The answer depends on what you know and what you are solving for. In DC topology, the first move is almost always simplifying the resistance network (combine series/parallel) to find total resistance, then apply Ohm\'s Law. In non-ideal DC, the first move is adding internal and wire resistances to the equivalent before applying Ohm\'s Law.',
    },
    {
      id: 'step-2',
      text: 'For time-dependent circuits, the first move is identifying the time constant: τ = RC for capacitor circuits, τ = L/R for inductor circuits. This tells you how fast the transient evolves. For AC circuits, the first move is establishing the RMS or peak voltage at the component of interest. For active components, the first move is determining the control state (forward-biased, control-enabled) before applying the DC sub-circuit analysis.',
    },
    {
      id: 'step-3',
      text: 'The correct first move avoids dead ends. If you start calculating current in a time-dependent circuit without the time constant, you have no model for how current changes. If you start with AC waveform math when the circuit is a purely DC-biased active component, you are solving the wrong problem. The first move is a strategic choice, not just the first formula that comes to mind.',
      theoryCheck: {
        question: 'A circuit has a transistor whose control input is driven by a separate DC voltage. The transistor controls a resistive load powered by a 9V battery. What is the correct first analytical move?',
        choices: [
          {
            id: 'tc-a',
            label: 'Apply Ohm\'s Law to the load resistor using the full 9V',
            isCorrect: false,
            explanation: 'Applying Ohm\'s Law to the load first ignores whether the transistor conducts. If the transistor is off (control input LOW), no current flows regardless of the 9V supply.',
          },
          {
            id: 'tc-b',
            label: 'Determine the transistor\'s control state (HIGH or LOW) before analyzing the load',
            isCorrect: true,
            explanation: 'Correct. The transistor is an active component that gates current. The first move in an active-component circuit is always to determine the control state, which tells you whether the load path is open or closed.',
          },
          {
            id: 'tc-c',
            label: 'Measure the time constant of the circuit',
            isCorrect: false,
            explanation: 'A time constant is relevant for RC or RL circuits with energy-storage components. This circuit has a transistor and a resistor — no capacitor or inductor — so time-constant analysis does not apply.',
          },
        ],
        explanation: 'For active-component circuits, the first move is always to determine the control state of the active element before analyzing the rest of the circuit.',
      },
    },
  ],
  challenges: [
    {
      id: 'challenge-1',
      prompt: 'A circuit has a 12V battery, a 30Ω resistor and a 60Ω resistor in parallel, then a 20Ω resistor in series with the parallel combination. You need to find the current through the 60Ω resistor. What is the correct first analytical move?',
      type: 'choose',
      evaluationCriteria: { correctChoiceId: 'ch1-b' },
      hints: ['You cannot find a branch current until you know the total current entering the parallel section.'],
      choices: [
        {
          id: 'ch1-a',
          label: 'Apply the current-divider formula directly with 12V and 60Ω',
          isCorrect: false,
          explanation: 'The current divider requires the current entering the parallel section, not the source voltage. You cannot apply the divider until you know the total current from the source.',
        },
        {
          id: 'ch1-b',
          label: 'Combine the 30Ω and 60Ω into their parallel equivalent, then add the 20Ω in series to find total resistance and total current',
          isCorrect: true,
          explanation: 'Correct. The first move is to reduce the network: R_parallel = (30 × 60)/(30 + 60) = 20Ω, then R_total = 20 + 20 = 40Ω. Total current = 12/40 = 0.3A. Then the current divider gives I_60 = 0.3 × (30/(30+60)) = 0.1A.',
        },
        {
          id: 'ch1-c',
          label: 'Apply KVL to find the voltage across the parallel section first',
          isCorrect: false,
          explanation: 'KVL would also work, but requires knowing the total current (for the voltage drop across the 20Ω series resistor) before you can find the parallel voltage. Reducing the network first is the more direct first move.',
        },
      ],
    },
    {
      id: 'challenge-2',
      prompt: 'An inductor and a resistor are in series with a battery. The circuit has just been connected. You need to find the initial current at t = 0. What is the correct first analytical move?',
      type: 'choose',
      evaluationCriteria: { correctChoiceId: 'ch2-a' },
      hints: ['What does an inductor look like at the instant of connection (t = 0)?'],
      choices: [
        {
          id: 'ch2-a',
          label: 'Recognize that the inductor acts as an open circuit at t = 0, so initial current is zero',
          isCorrect: true,
          explanation: 'Correct. At t = 0, an inductor opposes any sudden change in current. It acts as an open circuit, so the initial current is zero regardless of the applied voltage.',
        },
        {
          id: 'ch2-b',
          label: 'Apply Ohm\'s Law with V_battery and the inductor\'s DC resistance',
          isCorrect: false,
          explanation: 'Applying Ohm\'s Law gives the steady-state current (after the transient ends), not the initial current at t = 0. The inductor blocks instantaneous current changes.',
        },
        {
          id: 'ch2-c',
          label: 'Calculate the time constant τ = L/R to find the initial current',
          isCorrect: false,
          explanation: 'The time constant tells you how fast the transient evolves, not the initial value. For an inductor, the initial current is always zero at t = 0 regardless of τ.',
        },
      ],
    },
  ],
  theoryContent: [
    {
      title: 'Matching the First Move to the Domain',
      content: 'Each domain has a canonical first move. DC topology: simplify the resistance network (series/parallel combination) to find R_total, then apply Ohm\'s Law. Non-ideal DC: add non-ideal resistances to R_total before applying Ohm\'s Law. Time-dependent: identify τ (RC or L/R), then determine initial and final values. AC: establish RMS or peak voltage at the component. Active components: determine control state first. Digital logic: trace input states through each gate stage.',
    },
    {
      title: 'Why First-Move Selection Matters',
      content: 'Starting with the wrong calculation does not usually produce an error — it produces an answer for the wrong question. For instance, calculating steady-state current in a circuit that is mid-transient gives a mathematically correct steady-state answer, but is irrelevant to the question asked. The first move frames what all subsequent calculations mean, so choosing it correctly is as important as the calculations themselves.',
    },
  ],
  sandboxUnlocks: [],
  availableActions: ['inspect'],
  currentOverlayAvailable: true,
  showFormulaPanel: true,
  formulasShown: [
    {
      formula: 'R_parallel = (R₁ × R₂) / (R₁ + R₂)',
      symbols: [
        { symbol: 'R_parallel', name: 'Parallel equivalent resistance', unit: 'Ω' },
        { symbol: 'R₁', name: 'First parallel branch resistance', unit: 'Ω' },
        { symbol: 'R₂', name: 'Second parallel branch resistance', unit: 'Ω' },
      ],
    },
  ],
  theoryPageAdditions: [
    {
      id: 'theory-ch10-first-move',
      title: 'Chapter 10: First analytical move by domain',
      content: 'DC topology: combine resistances, then Ohm\'s Law. Non-ideal DC: add non-ideal terms first. Time-dependent: find τ, then initial and final values. AC: establish peak or RMS values. Active components: determine control state. Digital logic: trace input states gate by gate.',
      sourceLesson: 'lesson-ch10-1-3',
    },
    {
      id: 'theory-ch10-wrong-first-move',
      title: 'Chapter 10: Consequences of wrong first-move selection',
      content: 'Applying steady-state formulas during a transient, or ignoring an active component\'s control state before calculating load current, produces a valid answer to the wrong question. First-move selection is strategic, not mechanical.',
      sourceLesson: 'lesson-ch10-1-3',
    },
  ],
  quizzesUnlocked: ['quiz-ch10-analysis-strategy-basics'],
};
