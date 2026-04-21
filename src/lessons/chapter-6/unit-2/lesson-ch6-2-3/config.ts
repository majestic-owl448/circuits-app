import type { LessonConfig } from '../../../../types/lesson.ts';
import { CHAPTER_6_METADATA, CH6_NODES } from '../../shared.ts';

export const lessonCh6_2_3: LessonConfig = {
  id: 'lesson-ch6-2-3',
  unitId: 'ch6-unit-2',
  title: 'Steady State in a Simple Capacitor Circuit',
  description: 'Understand the long-term steady-state behavior of a capacitor circuit and develop intuition for the RC time constant.',
  stageLabel: CHAPTER_6_METADATA.stageLabel,
  prerequisites: ['lesson-ch6-2-2'],
  conceptsIntroduced: [
    'capacitor circuit steady state',
    'capacitor blocks DC at steady state',
    'time constant intuition: larger RC means slower settling',
  ],
  initialNodes: CH6_NODES,
  initialCircuit: [
    {
      id: 'bat-1',
      type: 'battery',
      nodeA: 'n1',
      nodeB: 'n3',
      properties: { voltage: 9 },
      name: 'Battery',
      position: { x: 150, y: 250 },
      rotation: 0,
    },
    {
      id: 'cap-1',
      type: 'capacitor',
      nodeA: 'n1',
      nodeB: 'n2',
      properties: { capacitance: 0.001 },
      name: 'Capacitor',
      position: { x: 325, y: 150 },
      rotation: 0,
    },
    {
      id: 'sw-1',
      type: 'switch',
      nodeA: 'n2',
      nodeB: 'n4',
      properties: { isClosed: true },
      name: 'Switch',
      position: { x: 500, y: 250 },
      rotation: 0,
    },
    {
      id: 'res-1',
      type: 'resistor',
      nodeA: 'n3',
      nodeB: 'n4',
      properties: { resistance: 100 },
      name: 'Resistor',
      position: { x: 325, y: 350 },
      rotation: 0,
    },
  ],
  steps: [
    {
      id: 'step-1',
      text: 'The switch is already closed in this circuit. Move the time slider all the way to the right to the "Late" position. At steady state, the capacitor has fully charged to the source voltage (9V) and current has fallen to zero.',
      highlights: ['cap-1'],
    },
    {
      id: 'step-2',
      text: 'At steady state, the capacitor behaves like an open circuit — it blocks DC current entirely. All source voltage appears across the capacitor, and none across the resistor (no current means no voltage drop across it).',
      highlights: ['cap-1', 'res-1'],
    },
    {
      id: 'step-3',
      text: 'How quickly a capacitor circuit reaches steady state depends on the time constant τ = R × C. A larger resistor or larger capacitor means a longer settling time. This is just an intuitive pattern for now — no calculation required.',
      theoryCheck: {
        question: 'In a capacitor circuit at DC steady state, what is the current through the capacitor?',
        choices: [
          { id: 'tc-a', label: 'Zero — a fully charged capacitor blocks DC current', isCorrect: true, explanation: 'Correct. Once fully charged, the capacitor voltage equals the source. No voltage difference drives more current, so current is zero.' },
          { id: 'tc-b', label: 'Maximum — it has fully charged so it now conducts freely', isCorrect: false, explanation: 'A fully charged capacitor does not conduct. It stores charge and blocks further DC current flow.' },
          { id: 'tc-c', label: 'Equal to V/R — the same as in a purely resistive circuit', isCorrect: false, explanation: 'V/R would apply if the capacitor were not in the circuit. At steady state the capacitor holds the full voltage and current is zero.' },
        ],
        explanation: 'At DC steady state, a fully charged capacitor blocks current entirely — it acts as an open circuit.',
      },
    },
  ],
  challenges: [
    {
      id: 'challenge-1',
      prompt: 'In a simple RC circuit at DC steady state (long after the switch closes), which statement is correct?',
      type: 'choose',
      evaluationCriteria: { correctChoiceId: 'ch1-c' },
      hints: ['Think about what blocks DC current at steady state.'],
      choices: [
        { id: 'ch1-a', label: 'Current through the resistor is at its maximum value', isCorrect: false, explanation: 'Current is actually at its minimum (zero) at steady state. Maximum current occurs right at the start of charging.' },
        { id: 'ch1-b', label: 'Capacitor voltage is zero and all voltage is across the resistor', isCorrect: false, explanation: 'At steady state the capacitor holds the full source voltage. Resistor voltage is zero because no current flows through it.' },
        { id: 'ch1-c', label: 'Capacitor voltage equals the source voltage and current is zero', isCorrect: true, explanation: 'Correct. The fully charged capacitor holds the source voltage. No current flows because the capacitor blocks DC.' },
      ],
    },
    {
      id: 'challenge-2',
      prompt: 'Two identical capacitors are charged through different resistors: one through 50Ω and one through 500Ω. Which settles to steady state faster?',
      type: 'choose',
      evaluationCriteria: { correctChoiceId: 'ch2-a' },
      hints: ['Larger R × C means a longer settling time.'],
      choices: [
        { id: 'ch2-a', label: 'The circuit with 50Ω — smaller resistance means a faster time constant', isCorrect: true, explanation: 'Correct. τ = RC. Smaller R means smaller τ, which means faster settling. 50Ω gives a 10× faster time constant than 500Ω.' },
        { id: 'ch2-b', label: 'The circuit with 500Ω — larger resistance drives more voltage and charges faster', isCorrect: false, explanation: 'Larger resistance actually slows charging. More resistance limits the charging current, making the capacitor charge more slowly.' },
        { id: 'ch2-c', label: 'Both settle at the same speed since the capacitor is identical', isCorrect: false, explanation: 'The capacitor value is the same, but the resistor controls how fast current can flow to charge it. Different R means different τ and different settling times.' },
      ],
    },
  ],
  theoryContent: [
    {
      title: 'Steady-State Behavior of a Simple Capacitor Circuit',
      content: 'At DC steady state, a fully charged capacitor holds the source voltage and passes zero current — it acts as an open circuit. The time to reach steady state is determined by the time constant τ = R × C.',
    },
  ],
  sandboxUnlocks: [],
  availableActions: ['toggle-switch'],
  currentOverlayAvailable: true,
  showFormulaPanel: true,
  usesTimeControls: true,
  formulasShown: [
    {
      formula: '\u03c4 = R \u00d7 C',
      symbols: [
        { symbol: '\u03c4', name: 'Time constant', unit: 's' },
        { symbol: 'R', name: 'Resistance', unit: '\u03a9' },
        { symbol: 'C', name: 'Capacitance', unit: 'F' },
      ],
    },
  ],
  theoryPageAdditions: [
    {
      id: 'theory-ch6-cap-steady-state',
      title: 'Steady-State Behavior of a Simple Capacitor Circuit',
      content: 'At DC steady state, a fully charged capacitor blocks current (acts as open circuit) and holds voltage equal to the source. Time to reach steady state follows τ = R × C.',
      sourceLesson: 'lesson-ch6-2-3',
    },
  ],
  quizzesUnlocked: ['quiz-ch6-capacitor-steady-state-basics'],
};
