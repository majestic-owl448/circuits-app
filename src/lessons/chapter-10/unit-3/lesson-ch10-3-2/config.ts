import type { LessonConfig } from '../../../../types/lesson.ts';
import { CHAPTER_10_METADATA, CH10_NODES } from '../../shared.ts';

export const lessonCh10_3_2: LessonConfig = {
  id: 'lesson-ch10-3-2',
  unitId: 'ch10-unit-3',
  title: 'Time-Dependent Capstone',
  description: 'Apply time-dependent reasoning to distinguish capacitor vs inductor behavior, initial vs steady-state conditions, and RC vs RL time constants.',
  stageLabel: CHAPTER_10_METADATA.stageLabel,
  prerequisites: ['lesson-ch10-2-2'],
  conceptsIntroduced: [
    'capacitor vs inductor behavior at t=0 and t=∞',
    'RC vs RL time-constant comparison',
    'selecting the right energy-storage model for a given circuit',
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
      id: 'cap-1',
      type: 'capacitor',
      nodeA: 'n1',
      nodeB: 'n2',
      properties: { capacitance: 0.001 },
      name: 'Capacitor (1mF)',
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
  usesTimeControls: true,
  steps: [
    {
      id: 'step-1',
      text: 'Two energy-storage components: the capacitor and the inductor. Their key behaviors are mirror images. At t = 0 (instant of connection): the capacitor acts as a short circuit (zero volts, maximum current). The inductor acts as an open circuit (zero current, maximum voltage across it). At steady state (t → ∞): the capacitor acts as an open circuit (fully charged, no current). The inductor acts as a short circuit (fully magnetized, zero voltage drop).',
      highlights: ['cap-1'],
    },
    {
      id: 'step-2',
      text: 'Time constants: τ_RC = R × C (units: Ω × F = seconds). τ_RL = L / R (units: H / Ω = seconds). After one time constant, the stored quantity (voltage for capacitor, current for inductor) has reached about 63% of its final value. After five time constants, the circuit is effectively at steady state (>99% of final value).',
    },
    {
      id: 'step-3',
      text: 'Choosing the right model: if the question asks about behavior immediately at turn-on, use the initial conditions (capacitor = short, inductor = open). If the question asks about long-run steady-state behavior, use the DC model (capacitor = open, inductor = short). If the question asks about the transition period, use the exponential equations with the time constant.',
      theoryCheck: {
        question: 'A 100Ω resistor and a capacitor are in series with a 9V battery. At the moment of connection (t = 0), what is the current through the circuit?',
        choices: [
          {
            id: 'tc-a',
            label: '0A — the capacitor blocks DC current even at t = 0',
            isCorrect: false,
            explanation: 'At t = 0, the capacitor has zero stored charge and acts as a short circuit, not an open. Maximum current flows at this instant.',
          },
          {
            id: 'tc-b',
            label: '9/100 = 90mA — the capacitor acts as a short circuit at t = 0, so only the resistor limits current',
            isCorrect: true,
            explanation: 'Correct. At t = 0, an uncharged capacitor is equivalent to a short circuit (zero volts). The only impedance is the series resistor: I = 9/100 = 90mA.',
          },
          {
            id: 'tc-c',
            label: 'Cannot be determined without knowing the capacitance',
            isCorrect: false,
            explanation: 'At t = 0, the capacitor\'s initial current does not depend on capacitance — only on the applied voltage and series resistance. Capacitance affects τ and therefore how quickly current decays, not the initial value.',
          },
        ],
        explanation: 'At t = 0, a capacitor starting from zero charge behaves as a short circuit. Initial current = V / R_series.',
      },
    },
  ],
  challenges: [
    {
      id: 'challenge-1',
      prompt: 'A circuit has a battery, a resistor, and an inductor in series. After a very long time, what does the inductor look like in the DC steady-state model?',
      type: 'choose',
      evaluationCriteria: { correctChoiceId: 'ch1-b' },
      hints: ['At steady state, the magnetic field in the inductor is fully established — no change in current means no voltage is induced across it.'],
      choices: [
        {
          id: 'ch1-a',
          label: 'An open circuit — the inductor blocks DC current at steady state',
          isCorrect: false,
          explanation: 'An inductor blocks only changing current. At steady state, current is constant, so the inductor presents no opposition and is equivalent to a short circuit (zero resistance wire).',
        },
        {
          id: 'ch1-b',
          label: 'A short circuit (wire) — the inductor passes constant DC current with zero voltage drop at steady state',
          isCorrect: true,
          explanation: 'Correct. At steady state, the inductor carries constant DC current with no changing magnetic field, so it produces no back-EMF. It is equivalent to a short circuit with only its DC winding resistance (which is zero in the ideal model).',
        },
        {
          id: 'ch1-c',
          label: 'A resistor with value L/R — the time constant defines the steady-state resistance',
          isCorrect: false,
          explanation: 'L/R is the time constant τ, measured in seconds — not an equivalent resistance at steady state. At steady state, the inductor is a short circuit, not a resistor of value L/R.',
        },
      ],
    },
    {
      id: 'challenge-2',
      prompt: 'Two circuits: (A) R = 500Ω, C = 2μF. (B) R = 1000Ω, C = 1μF. Which has the longer time constant, and what does that mean for how quickly it reaches steady state?',
      type: 'choose',
      evaluationCriteria: { correctChoiceId: 'ch2-a' },
      hints: ['Calculate τ = R × C for each circuit.'],
      choices: [
        {
          id: 'ch2-a',
          label: 'Circuit A: τ_A = 500 × 2×10⁻⁶ = 1ms; Circuit B: τ_B = 1000 × 1×10⁻⁶ = 1ms. They are equal.',
          isCorrect: true,
          explanation: 'Correct. τ_A = 500 × 2×10⁻⁶ = 1×10⁻³s = 1ms. τ_B = 1000 × 1×10⁻⁶ = 1×10⁻³s = 1ms. Both circuits have the same time constant and reach steady state at the same rate.',
        },
        {
          id: 'ch2-b',
          label: 'Circuit B has the longer time constant because its resistance is larger',
          isCorrect: false,
          explanation: 'Larger R increases τ, but circuit B also has smaller C, which decreases τ. Both factors must be multiplied: τ = R × C. Circuit B: 1000 × 1×10⁻⁶ = 1ms, same as circuit A.',
        },
        {
          id: 'ch2-c',
          label: 'Circuit A has the longer time constant because its capacitance is larger',
          isCorrect: false,
          explanation: 'Larger C increases τ, but circuit A also has smaller R. τ = R × C must be calculated for both. The result is τ_A = τ_B = 1ms.',
        },
      ],
    },
  ],
  theoryContent: [
    {
      title: 'Capacitor vs Inductor: Behavioral Summary',
      content: 'At t = 0: capacitor is a short circuit (V = 0, I = V_source/R); inductor is an open circuit (I = 0, V = V_source). At steady state: capacitor is an open circuit (I = 0, V = V_source); inductor is a short circuit (V = 0, I = V_source/R). The two components are behavioral mirrors of each other across the transition from t = 0 to t = ∞.',
    },
    {
      title: 'Time Constants: RC and RL',
      content: 'RC time constant: τ = R × C (seconds). RL time constant: τ = L / R (seconds). After 1τ the variable has reached 63.2% of its final value. After 5τ it is at 99.3% — treated as steady state. A larger time constant means a slower transition. The time constant does not change the initial or final values, only the speed of the transition between them.',
    },
  ],
  sandboxUnlocks: ['capstone-time-prompt'],
  availableActions: ['inspect'],
  currentOverlayAvailable: true,
  showFormulaPanel: true,
  formulasShown: [
    {
      formula: 'τ_RC = R × C',
      symbols: [
        { symbol: 'τ_RC', name: 'RC time constant', unit: 's' },
        { symbol: 'R', name: 'Series resistance', unit: 'Ω' },
        { symbol: 'C', name: 'Capacitance', unit: 'F' },
      ],
    },
    {
      formula: 'τ_RL = L / R',
      symbols: [
        { symbol: 'τ_RL', name: 'RL time constant', unit: 's' },
        { symbol: 'L', name: 'Inductance', unit: 'H' },
        { symbol: 'R', name: 'Series resistance', unit: 'Ω' },
      ],
    },
  ],
  theoryPageAdditions: [
    {
      id: 'theory-ch10-cap-vs-ind',
      title: 'Chapter 10: Capacitor vs inductor — initial and steady-state models',
      content: 'Capacitor: t=0 → short circuit; t→∞ → open circuit. Inductor: t=0 → open circuit; t→∞ → short circuit. These behavioral mirrors are the foundation of time-dependent circuit analysis.',
      sourceLesson: 'lesson-ch10-3-2',
    },
    {
      id: 'theory-ch10-time-constant',
      title: 'Chapter 10: Time-constant summary',
      content: 'τ_RC = R × C. τ_RL = L / R. After 5τ the circuit is at steady state (>99%). The time constant affects transition speed only — not initial or final values.',
      sourceLesson: 'lesson-ch10-3-2',
    },
  ],
  quizzesUnlocked: ['quiz-ch10-time-capstone-basics'],
};
