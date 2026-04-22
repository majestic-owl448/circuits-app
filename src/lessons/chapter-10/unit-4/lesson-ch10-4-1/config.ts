import type { LessonConfig } from '../../../../types/lesson.ts';
import { CH10_NODES, CHAPTER_10_METADATA } from '../../shared.ts';

export const lessonCh10_4_1: LessonConfig = {
  id: 'lesson-ch10-4-1',
  unitId: 'ch10-unit-4',
  title: 'Choose the Right Domain, Then Solve',
  description: 'Practice identifying which electrical domain a problem belongs to before selecting a solution strategy — covering DC, transient, AC, active, and logic domains.',
  stageLabel: CHAPTER_10_METADATA.stageLabel,
  prerequisites: ['lesson-ch10-3-1', 'lesson-ch10-3-2', 'lesson-ch10-3-3', 'lesson-ch10-3-4'],
  conceptsIntroduced: [
    'problem domain classification',
    'choosing analysis strategy based on domain',
    'cross-domain problem recognition',
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
      id: 'cap-1',
      type: 'capacitor',
      nodeA: 'n2',
      nodeB: 'n4',
      properties: { capacitance: 0.001 },
      name: 'Capacitor (1mF)',
      position: { x: 500, y: 250 },
      rotation: 0,
    },
    {
      id: 'wire-1',
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
      text: 'Cross-domain problem solving begins with classification: before you calculate anything, identify which domain the problem belongs to. DC problems involve steady-state resistive circuits with constant sources — use Ohm\'s Law and KCL/KVL. Transient problems involve capacitors or inductors changing over time — use exponential charge/discharge models. AC problems involve sinusoidal sources and frequency-dependent behavior. Active problems involve diodes or transistors with switching behavior. Logic problems involve gates and HIGH/LOW state reasoning. The circuit shown mixes a resistor and a capacitor with a DC source — that places it in the transient domain, not the pure DC domain.',
      highlights: ['bat-1', 'res-1', 'cap-1'],
    },
    {
      id: 'step-2',
      text: 'Domain classification determines which tools to apply. A DC circuit with only resistors and batteries: apply Ohm\'s Law directly. A circuit with a capacitor charging through a resistor: use the RC time constant model (V_C = V*(1-e^(-t/τ)), τ = RC). A circuit with an AC source: consider peak voltage and frequency effects. A circuit with a diode: check forward/reverse bias before calculating current paths. A circuit with a logic gate: trace input states through truth tables. Misclassifying the domain leads to applying the wrong analysis tool — the most common error in cross-domain problems. Classify first, solve second.',
      highlights: ['bat-1', 'cap-1'],
      theoryCheck: {
        question: 'A problem describes a circuit with a 12V battery, a 470Ω resistor, and a capacitor in series. Which domain does this problem belong to?',
        choices: [
          {
            id: 'tc-a',
            label: 'DC (steady-state) — the battery provides constant voltage so only Ohm\'s Law is needed',
            isCorrect: false,
            explanation: 'The presence of a capacitor moves this out of the pure DC steady-state domain. A capacitor in a DC circuit charges over time — this is a transient problem requiring the RC model, not just Ohm\'s Law.',
          },
          {
            id: 'tc-b',
            label: 'Transient — the capacitor charges through the resistor over time, requiring the RC exponential model',
            isCorrect: true,
            explanation: 'Correct. Any circuit with a capacitor (or inductor) and a DC source charging or discharging over time is a transient problem. The RC exponential model (V_C = V*(1-e^(-t/τ))) applies here, not simple Ohm\'s Law.',
          },
          {
            id: 'tc-c',
            label: 'AC — the battery could be driving an AC waveform through the capacitor',
            isCorrect: false,
            explanation: 'A battery is a DC source — it does not produce AC waveforms. AC problems require an AC source (sinusoidal generator). The battery + capacitor combination is a transient (RC charging) problem.',
          },
        ],
        explanation: 'The domain classification decision tree: if the circuit has a capacitor or inductor with a DC source, it is transient. If it has an AC source, it is AC. If it has only resistors and batteries in steady state, it is DC.',
      },
    },
    {
      id: 'step-3',
      text: 'The cross-domain challenge: fix a circuit by first classifying the problem correctly and then identifying what went wrong. You are shown a circuit with a diode connected in reverse. The symptom is that no current flows even though the battery and resistor appear intact. The diagnosis requires active-domain reasoning (diode forward/reverse bias) — not Ohm\'s Law or RC models. Applying the wrong tool will lead to a wrong diagnosis.',
      highlights: [],
    },
  ],
  challenges: [
    {
      id: 'challenge-1',
      prompt: 'A circuit is described: "The output stays LOW at all times even when the switch is closed." The circuit has a battery, a resistor, a switch, and a diode. Which domain does the diagnosis belong to, and what is the most likely cause?',
      type: 'choose',
      evaluationCriteria: { correctChoiceId: 'ch1-b' },
      hints: [
        'Diodes are active components — their behavior is governed by forward/reverse bias, not just resistance.',
        'If the diode is reverse-biased, it blocks current even in a closed-switch, intact-battery circuit.',
      ],
      choices: [
        {
          id: 'ch1-a',
          label: 'DC domain — the resistor value is too high, causing the voltage across the output to be too low to register as HIGH',
          isCorrect: false,
          explanation: 'High resistance can reduce voltage and current, but the symptom is output always LOW — not low-but-measurable. More importantly, the presence of a diode makes this an active-domain problem. Applying pure DC analysis ignores the diode\'s directional behavior, which is the most likely cause.',
        },
        {
          id: 'ch1-b',
          label: 'Active domain — the diode is likely reverse-biased, blocking all current regardless of switch position',
          isCorrect: true,
          explanation: 'Correct. The diode is an active component. A reverse-biased diode blocks current completely, producing the "always LOW" symptom. The fix is to reverse the diode orientation so it is forward-biased. This is an active-domain diagnosis: identifying the diode\'s bias state before reasoning about current flow.',
        },
        {
          id: 'ch1-c',
          label: 'Logic domain — the output LOW means the switch is acting as a logic gate input and the gate is outputting LOW',
          isCorrect: false,
          explanation: 'The circuit does not contain logic gates — it is an analog active circuit with a diode. Logic-domain analysis applies to circuits with NOT/AND/OR/NAND/NOR/XOR gates. Applying logic-state reasoning to an analog diode circuit is a domain misclassification.',
        },
      ],
    },
    {
      id: 'challenge-2',
      prompt: 'A circuit has an AC source, a resistor, and a diode in series. The learner expects a sinusoidal output but observes output only during the positive half of the cycle. Which cross-domain explanation is correct?',
      type: 'choose',
      evaluationCriteria: { correctChoiceId: 'ch2-b' },
      hints: [
        'A diode conducts only in one direction — this is its active-domain behavior.',
        'An AC source alternates between positive and negative half-cycles — this is AC-domain behavior.',
        'The combination creates a cross-domain interaction.',
      ],
      choices: [
        {
          id: 'ch2-a',
          label: 'The resistor is blocking the negative half-cycle — reducing resistance will allow full AC throughput',
          isCorrect: false,
          explanation: 'Resistors oppose current in both directions equally — they do not block one half-cycle. The asymmetric behavior is caused by the diode, which conducts only in the forward direction. This is an active-domain effect, not a DC resistor effect.',
        },
        {
          id: 'ch2-b',
          label: 'The diode (active domain) blocks the negative half-cycle of the AC source — it only conducts when forward-biased during the positive half',
          isCorrect: true,
          explanation: 'Correct. This is a cross-domain interaction: the AC source (AC domain) alternates polarity each half-cycle, and the diode (active domain) blocks the negative half-cycle because it is reverse-biased during that phase. The diode conducts only during forward bias (positive half), producing a half-wave rectified output.',
        },
        {
          id: 'ch2-c',
          label: 'The AC source is misconfigured — a DC source would produce full output on both half-cycles',
          isCorrect: false,
          explanation: 'DC sources do not have half-cycles. The circuit is intentionally using an AC source. The asymmetric output is caused by the diode\'s directional behavior interacting with the alternating AC polarity. The source configuration is not the issue.',
        },
      ],
    },
  ],
  theoryContent: [
    {
      title: 'Domain Classification Drives Analysis Strategy',
      content: 'Every circuit problem belongs to a domain determined by the component types present and the source characteristics. The five domains covered in this course are: DC (steady-state resistive circuits with constant sources), Transient (circuits with capacitors or inductors undergoing time-dependent change), AC (circuits with sinusoidal sources and frequency-sensitive components), Active (circuits with diodes and transistors governed by bias states), and Logic (circuits with gates implementing HIGH/LOW state rules). Classifying the domain before solving ensures the correct analytical model is applied.',
    },
    {
      title: 'Cross-Domain Problems Require Sequential Classification',
      content: 'Some circuits span multiple domains simultaneously. An AC source driving a diode bridge is both an AC problem (sinusoidal source) and an active problem (diode bias states). A transistor amplifier with an RC coupling network is both an active problem (transistor) and a transient problem (RC time constants). In these cases, classify each part of the circuit by its components and source, then apply the appropriate analysis to each part. The order of operations: classify all active components first (diodes, transistors), then identify source type (DC vs AC), then apply time-domain reasoning if reactive components (C, L) are present.',
    },
  ],
  sandboxUnlocks: ['cross-domain-prompt-set'],
  availableActions: ['inspect', 'toggle-switch'],
  currentOverlayAvailable: true,
  showFormulaPanel: true,
  usesTimeControls: false,
  formulasShown: [],
  theoryPageAdditions: [
    {
      id: 'theory-ch10-domain-classification',
      title: 'Domain Classification and Cross-Domain Problem Solving',
      content: 'Before solving a circuit problem, classify the domain: DC (resistors + constant source), Transient (capacitor or inductor + DC source), AC (sinusoidal source), Active (diodes or transistors), Logic (gates). Cross-domain circuits require applying each domain\'s analysis tools to its corresponding components. Misclassification leads to applying the wrong model and reaching the wrong conclusion. Domain classification is the first step in any multi-component circuit analysis.',
      sourceLesson: 'lesson-ch10-4-1',
    },
  ],
  quizzesUnlocked: ['quiz-ch10-cross-domain-basics'],
};
