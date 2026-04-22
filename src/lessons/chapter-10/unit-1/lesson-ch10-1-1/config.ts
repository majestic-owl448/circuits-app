import type { LessonConfig } from '../../../../types/lesson.ts';
import { CHAPTER_10_METADATA, CH10_NODES } from '../../shared.ts';

export const lessonCh10_1_1: LessonConfig = {
  id: 'lesson-ch10-1-1',
  unitId: 'ch10-unit-1',
  title: 'The Circuit Map So Far',
  description: 'Survey the full landscape of reasoning domains covered across Chapters 1–9, and identify which domain applies to a given circuit scenario.',
  stageLabel: CHAPTER_10_METADATA.stageLabel,
  prerequisites: ['chapter-9-complete'],
  conceptsIntroduced: [
    'curriculum domain map',
    'identifying reasoning domains: series/parallel, non-ideal, AC/DC, digital logic',
    'choosing the right analysis framework before calculating',
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
      name: 'Resistor',
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
      text: 'Over the past nine chapters you have built a toolkit of circuit reasoning domains. Each domain has a signature: DC series/parallel (topology governs current paths), non-ideal DC (losses and limits modify ideal values), capacitors/inductors (energy storage creates time-dependent behavior), AC sources (sinusoidal waveforms and converters), active components (diodes, transistors gate current), and digital logic (gates compute output states from input conditions). Recognizing which domain applies is the first step in any analysis.',
    },
    {
      id: 'step-2',
      text: 'A domain is not exclusive. A real circuit can involve multiple domains simultaneously — for example, a transistor switch (active domain) powered by an AC-converted DC rail (AC/conversion domain) driving a resistive load (DC series/parallel domain). When several domains overlap, you start with the domain that governs the first constraint (usually the source and path topology), then layer in the others.',
      highlights: ['bat-1', 'res-1'],
    },
    {
      id: 'step-3',
      text: 'Before solving any circuit problem, ask three questions: (1) What type of source drives the circuit? (2) Are there energy-storage or active components that change behavior over time or with a control input? (3) Are there non-ideal parameters (internal resistance, wire resistance, operating limits) that matter at the required precision? Your answers narrow the domain and tell you which formulas apply.',
      theoryCheck: {
        question: 'A friend shows you a circuit with a battery, two resistors in parallel, and a wire with measurable resistance. Which domains are in play?',
        choices: [
          {
            id: 'tc-a',
            label: 'DC series/parallel only — the parallel resistors define the analysis',
            isCorrect: false,
            explanation: 'The parallel resistors do make this a DC parallel circuit, but the wire resistance introduces a non-ideal effect that will modify the ideal current distribution. Both domains are relevant.',
          },
          {
            id: 'tc-b',
            label: 'DC series/parallel and non-ideal DC — the parallel topology governs paths, wire resistance adds a non-ideal loss',
            isCorrect: true,
            explanation: 'Correct. The parallel topology is the primary domain. Wire resistance is a non-ideal DC effect that must be included for accurate results.',
          },
          {
            id: 'tc-c',
            label: 'Non-ideal DC only — the wire resistance overrides the topology analysis',
            isCorrect: false,
            explanation: 'Non-ideal effects modify the ideal analysis; they do not replace it. You still need the series/parallel topology to determine current paths before applying non-ideal corrections.',
          },
        ],
        explanation: 'Recognizing all active domains before starting prevents missed effects and wasted calculation effort.',
      },
    },
  ],
  challenges: [
    {
      id: 'challenge-1',
      prompt: 'A circuit uses a sinusoidal voltage source, a diode, and a resistive load. Which primary domain governs the first analysis step?',
      type: 'choose',
      evaluationCriteria: { correctChoiceId: 'ch1-b' },
      hints: ['The source type sets the primary domain — what kind of source is this?'],
      choices: [
        {
          id: 'ch1-a',
          label: 'DC series/parallel — the resistive load makes this a DC circuit',
          isCorrect: false,
          explanation: 'The resistive load is DC-compatible, but the source is sinusoidal (AC). The source type determines the primary domain, so AC analysis governs the source behavior first.',
        },
        {
          id: 'ch1-b',
          label: 'AC/conversion — the sinusoidal source drives the circuit; the diode then rectifies to DC',
          isCorrect: true,
          explanation: 'Correct. A sinusoidal source places the circuit in the AC domain. The diode then acts as a half-wave rectifier, bridging to DC. Start with AC, then trace through the active component.',
        },
        {
          id: 'ch1-c',
          label: 'Active components — the diode is the first thing to analyze',
          isCorrect: false,
          explanation: 'Active components operate in response to the source. You must first establish what the source supplies (AC in this case) before analyzing how the diode responds to it.',
        },
      ],
    },
    {
      id: 'challenge-2',
      prompt: 'A circuit with a capacitor, a battery, and a resistor is first turned on. Which domain determines how the output voltage changes over time?',
      type: 'choose',
      evaluationCriteria: { correctChoiceId: 'ch2-c' },
      hints: ['The capacitor does not behave as a simple resistor — it stores charge and its voltage changes with time.'],
      choices: [
        {
          id: 'ch2-a',
          label: 'DC series/parallel — the battery and resistor dominate the analysis',
          isCorrect: false,
          explanation: 'DC series/parallel applies at steady state, after the capacitor is fully charged. At turn-on, the capacitor charges exponentially and the time-dependent domain governs.',
        },
        {
          id: 'ch2-b',
          label: 'Non-ideal DC — internal resistance of the battery causes the change',
          isCorrect: false,
          explanation: 'Internal resistance would cause a static voltage drop, not a changing waveform over time. The exponential charging behavior is due to the capacitor, not a non-ideal source.',
        },
        {
          id: 'ch2-c',
          label: 'Time-dependent — the RC charging curve governs the transient behavior',
          isCorrect: true,
          explanation: 'Correct. When a capacitor charges through a resistor, the voltage follows an exponential RC curve. This is the time-dependent domain, distinct from steady-state DC analysis.',
        },
      ],
    },
  ],
  theoryContent: [
    {
      title: 'The Curriculum Domain Map',
      content: 'The nine chapters build a layered toolkit. Chapter 1–3 cover DC circuit fundamentals (topology, Ohm\'s Law, series/parallel). Chapter 4 adds measurement, mixed circuits, and KCL/KVL. Chapter 5 introduces non-ideal effects (internal resistance, wire losses, operating limits, tolerance). Chapter 6 adds time-dependent behavior (capacitors, inductors, RC/RL transients). Chapter 7 covers AC sources and conversion. Chapter 8 introduces active components (diodes, transistors). Chapter 9 introduces digital logic gates. Chapter 10 integrates all of these.',
    },
    {
      title: 'Choosing the Right Domain Before Calculating',
      content: 'Every circuit problem has a primary domain that sets the analysis framework. Identify the source type (DC, AC, pulsed), note whether energy-storage or active components are present, and check whether non-ideal parameters are significant. Then layer the domains from primary to secondary. Starting in the wrong domain leads to correct formulas applied to the wrong model.',
    },
  ],
  sandboxUnlocks: [],
  availableActions: ['inspect'],
  currentOverlayAvailable: true,
  showFormulaPanel: true,
  formulasShown: [],
  theoryPageAdditions: [
    {
      id: 'theory-ch10-domain-map',
      title: 'Chapter 10: Curriculum domain map',
      content: 'The nine prior chapters cover six reasoning domains: DC topology (Ch1–4), non-ideal DC (Ch5), time-dependent RC/RL (Ch6), AC and conversion (Ch7), active components (Ch8), and digital logic (Ch9). Chapter 10 integrates these domains into multi-step analysis and capstone challenges.',
      sourceLesson: 'lesson-ch10-1-1',
    },
    {
      id: 'theory-ch10-domain-first',
      title: 'Chapter 10: Identify the domain before calculating',
      content: 'Before applying any formula, identify which domain governs the circuit: source type, presence of energy-storage or active components, and significance of non-ideal parameters. This prevents applying correct formulas to the wrong model.',
      sourceLesson: 'lesson-ch10-1-1',
    },
  ],
  quizzesUnlocked: ['quiz-ch10-concept-map-review'],
};
