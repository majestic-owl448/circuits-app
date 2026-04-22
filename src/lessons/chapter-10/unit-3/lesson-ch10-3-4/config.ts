import type { LessonConfig } from '../../../../types/lesson.ts';
import { CHAPTER_10_METADATA, CH10_GATE_NODES } from '../../shared.ts';

export const lessonCh10_3_4: LessonConfig = {
  id: 'lesson-ch10-3-4',
  unitId: 'ch10-unit-3',
  title: 'Active Components and Logic Capstone',
  description: 'Fix and analyze a circuit that uses a diode, a transistor, and a logic gate — applying active-component and digital-logic reasoning together.',
  stageLabel: CHAPTER_10_METADATA.stageLabel,
  prerequisites: ['lesson-ch10-2-2'],
  conceptsIntroduced: [
    'active components in a capstone context',
    'diode polarity and forward-bias condition',
    'transistor control state and gate output integration',
  ],
  initialNodes: CH10_GATE_NODES,
  initialCircuit: [
    {
      id: 'and-gate-1',
      type: 'and-gate',
      nodeA: 'g1',
      nodeB: 'g2',
      properties: { inputA: true, inputB: true },
      name: 'AND Gate (A=HIGH, B=HIGH)',
      position: { x: 325, y: 250 },
      rotation: 0,
    },
  ],
  steps: [
    {
      id: 'step-1',
      text: 'Active components require control-state reasoning before DC analysis. Diodes are either forward-biased (anode more positive than cathode → conducts, low resistance path) or reverse-biased (anode less positive → blocks, open circuit). Transistors are either control-enabled (conducts, closes load path) or control-disabled (blocks, opens load path). You must determine the control state before applying Ohm\'s Law to the rest of the circuit.',
      highlights: ['and-gate-1'],
    },
    {
      id: 'step-2',
      text: 'Logic gates compute output states from input states. An AND gate with both inputs HIGH produces a HIGH output. That HIGH output can then serve as the control input to a transistor in the same circuit. This is the chain: gate output state → transistor control state → load current on/off. The gate does not interact with the DC power circuit directly — it only sets the transistor\'s control input.',
    },
    {
      id: 'step-3',
      text: 'When diagnosing a circuit with both active components and logic gates, trace the logic path first (gate inputs → gate output → transistor control state), then trace the power path (source → load, with the transistor as a gate). The logic path and power path are analyzed separately but the transistor is the link between them.',
      theoryCheck: {
        question: 'An AND gate has inputs A = HIGH and B = LOW. Its output drives a transistor\'s control input. Is the transistor conducting?',
        choices: [
          {
            id: 'tc-a',
            label: 'Yes — input A being HIGH is enough to activate the transistor',
            isCorrect: false,
            explanation: 'The transistor is controlled by the AND gate\'s output, not directly by input A. AND requires both inputs HIGH. With B = LOW, the AND output is LOW, and the transistor does not conduct.',
          },
          {
            id: 'tc-b',
            label: 'No — AND output is LOW when any input is LOW, so the transistor control is LOW and it blocks',
            isCorrect: true,
            explanation: 'Correct. AND gate: A=HIGH, B=LOW → output = LOW. The transistor control input is LOW, so the transistor is disabled and the load path is open.',
          },
          {
            id: 'tc-c',
            label: 'It depends on the transistor type and the supply voltage',
            isCorrect: false,
            explanation: 'In the simplified model, a transistor conducts when its control input is HIGH and blocks when LOW, regardless of supply voltage specifics. The AND gate output determines the control state here.',
          },
        ],
        explanation: 'Trace the logic path first (gate output), then determine the transistor state from the gate output, then analyze the power path.',
      },
    },
  ],
  challenges: [
    {
      id: 'challenge-1',
      prompt: 'An AND gate has both inputs HIGH, so its output is HIGH. The output connects to a transistor control input. The transistor connects a battery to a resistive load. A diode is in the load path but is installed in reverse (cathode toward battery positive). What is the correct fix?',
      type: 'fix',
      evaluationCriteria: { correctChoiceId: 'ch1-b' },
      hints: [
        'A diode blocks current when reverse-biased. "Cathode toward battery positive" means the anode is at lower potential — reverse biased.',
        'The transistor is on (AND output HIGH), but no current flows. The diode is the remaining fault.',
      ],
      choices: [
        {
          id: 'ch1-a',
          label: 'Change the AND gate to an OR gate — the OR output will be different and fix the diode issue',
          isCorrect: false,
          explanation: 'The AND gate output is already HIGH (both inputs HIGH), which correctly enables the transistor. Changing the gate type does not affect the diode orientation.',
        },
        {
          id: 'ch1-b',
          label: 'Reverse the diode so its anode faces battery positive — this forward-biases it and allows current through the load',
          isCorrect: true,
          explanation: 'Correct. The transistor is enabled (AND output HIGH), so the load path is open only because the diode is reverse-biased. Reversing the diode (anode toward positive) forward-biases it and restores current through the load.',
        },
        {
          id: 'ch1-c',
          label: 'Disable the transistor — the transistor conducting too much current is causing the diode to fail',
          isCorrect: false,
          explanation: 'No current flows because the diode is reverse-biased, not because the transistor is conducting too much. Disabling the transistor would also stop the load path — not a fix.',
        },
      ],
    },
    {
      id: 'challenge-2',
      prompt: 'In a system where a NAND gate drives a transistor: the gate has inputs A=HIGH, B=HIGH. The transistor controls a load. Is the load active?',
      type: 'choose',
      evaluationCriteria: { correctChoiceId: 'ch2-b' },
      hints: ['What does a NAND gate output when both inputs are HIGH?'],
      choices: [
        {
          id: 'ch2-a',
          label: 'Yes — NAND with both inputs HIGH outputs HIGH, enabling the transistor and activating the load',
          isCorrect: false,
          explanation: 'NAND is NOT-AND. When both inputs are HIGH, AND would output HIGH, so NAND outputs the complement: LOW. The transistor control is LOW, and the load is inactive.',
        },
        {
          id: 'ch2-b',
          label: 'No — NAND with both inputs HIGH outputs LOW, the transistor is disabled and the load is inactive',
          isCorrect: true,
          explanation: 'Correct. NAND truth table: A=HIGH, B=HIGH → output = LOW (the inverse of AND). The transistor control is LOW, so the transistor blocks and the load is inactive.',
        },
        {
          id: 'ch2-c',
          label: 'Cannot determine without knowing the transistor\'s threshold voltage',
          isCorrect: false,
          explanation: 'In the simplified digital model, HIGH input enables the transistor and LOW input disables it. The NAND output is definitively LOW when both inputs are HIGH, so the transistor state is deterministic.',
        },
      ],
    },
  ],
  theoryContent: [
    {
      title: 'Active Component Reasoning in Capstone Circuits',
      content: 'In circuits combining active components and logic gates, always trace the logic path before the power path. The logic path determines gate outputs, which determine transistor control states. The power path (battery, wires, loads) is then analyzed with the transistor as either a closed or open switch depending on its control state. Diodes in the power path also require polarity checks before completing the power-path analysis.',
    },
    {
      title: 'Diode, Transistor, and Gate Interaction Summary',
      content: 'Gate output (HIGH/LOW) → transistor control state (enabled/disabled) → load path (closed/open) → load current (flows/blocked). Diodes in the load path: if forward-biased (anode at higher potential), they pass current with near-zero drop; if reverse-biased, they block. Any reversed diode in the load path prevents current regardless of the transistor state.',
    },
  ],
  sandboxUnlocks: ['capstone-active-prompt'],
  availableActions: ['inspect'],
  currentOverlayAvailable: true,
  showFormulaPanel: true,
  formulasShown: [],
  theoryPageAdditions: [
    {
      id: 'theory-ch10-active-logic-chain',
      title: 'Chapter 10: Logic-to-power chain with active components',
      content: 'Analysis order for circuits combining gates and active components: (1) determine gate inputs, (2) compute gate outputs, (3) set transistor control state from gate output, (4) check diode polarity in power path, (5) apply DC analysis to the now-defined power path.',
      sourceLesson: 'lesson-ch10-3-4',
    },
    {
      id: 'theory-ch10-diode-transistor-capstone',
      title: 'Chapter 10: Diode polarity and transistor state in capstone circuits',
      content: 'A reversed diode blocks current even when the transistor is on. A transistor with a LOW control input blocks current even when the diode is correctly oriented. Both the transistor control state and the diode polarity must be verified for the load to receive current.',
      sourceLesson: 'lesson-ch10-3-4',
    },
  ],
  quizzesUnlocked: ['quiz-ch10-active-capstone-basics'],
};
