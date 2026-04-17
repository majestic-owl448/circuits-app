import type { LessonConfig } from '../../../../types/lesson.ts';
import { CHAPTER_5_METADATA } from '../../shared.ts';

// 12V ideal battery + 1Ω wire + 4Ω bulb + switch
// I = 12 / (4+1) = 2.4A
// V_wire = 2.4 × 1 = 2.4V  (drop in wire path)
// V_bulb = 2.4 × 4 = 9.6V

export const lessonCh5_3_2: LessonConfig = {
  id: 'lesson-ch5-3-2',
  unitId: 'ch5-unit-3',
  title: 'Voltage Drop Along the Path',
  description: 'Use voltage readings across different parts of the path to identify where voltage is being lost to wire resistance.',
  stageLabel: CHAPTER_5_METADATA.stageLabel,
  prerequisites: ['lesson-ch5-3-1'],
  conceptsIntroduced: [
    'voltage drop along the wire path',
    'voltage lost before reaching the load',
    'path-segment voltage measurement as diagnostic evidence',
  ],
  initialNodes: [
    { id: 'n1', position: { x: 100, y: 150 } },
    { id: 'n2', position: { x: 300, y: 150 } },
    { id: 'n3', position: { x: 100, y: 350 } },
    { id: 'n4', position: { x: 300, y: 350 } },
  ],
  initialCircuit: [
    {
      id: 'battery-1',
      type: 'battery',
      nodeA: 'n1',
      nodeB: 'n3',
      properties: { voltage: 12 },
      name: 'Battery',
      position: { x: 100, y: 250 },
      rotation: 0,
    },
    {
      id: 'bulb-1',
      type: 'bulb',
      nodeA: 'n1',
      nodeB: 'n2',
      properties: { resistance: 4 },
      name: 'Bulb',
      position: { x: 200, y: 150 },
      rotation: 0,
    },
    {
      id: 'switch-1',
      type: 'switch',
      nodeA: 'n2',
      nodeB: 'n4',
      properties: { isClosed: false },
      name: 'Switch',
      position: { x: 300, y: 250 },
      rotation: 0,
    },
    {
      id: 'wire-1',
      type: 'wire',
      nodeA: 'n3',
      nodeB: 'n4',
      properties: { wireResistance: 1 },
      name: 'Wire (1\u03a9)',
      position: { x: 200, y: 350 },
      rotation: 0,
    },
  ],
  steps: [
    {
      id: 'step-1',
      text: 'This circuit has a 12V ideal battery, a 1\u03a9 wire on the return path, and a 4\u03a9 bulb. Total loop resistance is 5\u03a9. Close the switch and let the simulation run.',
      requiredAction: { type: 'toggle-switch', componentId: 'switch-1', targetState: true },
      highlights: ['wire-1', 'bulb-1'],
    },
    {
      id: 'step-2',
      text: 'Current is 2.4A. Now think about where the voltage goes. A voltmeter across the bulb reads V_bulb\u00a0=\u00a02.4A\u00a0\u00d7\u00a04\u03a9\u00a0=\u00a09.6V. A voltmeter across the wire reads V_wire\u00a0=\u00a02.4A\u00a0\u00d7\u00a01\u03a9\u00a0=\u00a02.4V. The 2.4V is lost in the wire before the current returns to the battery.',
      highlights: ['wire-1', 'bulb-1'],
    },
    {
      id: 'step-3',
      text: 'If you expected the bulb to receive 12V and instead it receives only 9.6V, measuring across the wire reveals why: 2.4V is consumed by the wire itself. This is the diagnostic value of path-segment voltage measurement.',
      highlights: ['wire-1'],
    },
    {
      id: 'step-4',
      text: 'Notice how the total voltage budget adds up: V_bulb\u00a0+\u00a0V_wire\u00a0=\u00a09.6\u00a0+\u00a02.4\u00a0=\u00a012V. This is KVL at work \u2014 all voltage drops in the loop must sum to the source voltage.',
      theoryCheck: {
        question: 'A voltmeter across a wire reads 2.4V while a voltmeter across the load reads 9.6V. The source is 12V. What does the wire reading tell you?',
        choices: [
          {
            id: 'tc-a',
            label: 'The wire is carrying 2.4V of voltage to the load',
            isCorrect: false,
            explanation: 'Voltage is not "carried" through the wire like a package. The 2.4V is dropped across the wire, meaning that much energy is dissipated in it.',
          },
          {
            id: 'tc-b',
            label: 'The wire is consuming 2.4V of the available supply voltage, leaving 9.6V for the load',
            isCorrect: true,
            explanation: 'Correct! V_wire\u00a0=\u00a02.4V is lost in the wire. V_bulb\u00a0=\u00a09.6V remains for the load. The two sum to the 12V source (KVL).',
          },
          {
            id: 'tc-c',
            label: 'The circuit has a short circuit because voltage appears across the wire',
            isCorrect: false,
            explanation: 'A voltage drop across a wire is expected when the wire has resistance and carries current. A short circuit would show near-zero voltage across all components except the wire.',
          },
        ],
        explanation: 'Each resistive element in a series loop claims a share of the supply voltage proportional to its resistance. The wire\u2019s voltage drop is the share it claims from the total 12V.',
      },
    },
  ],
  challenges: [
    {
      id: 'challenge-1',
      prompt: 'In the circuit above (12V battery, 1\u03a9 wire, 4\u03a9 bulb, 2.4A current), which measured value most directly confirms that voltage is being lost in the wire path?',
      type: 'choose',
      evaluationCriteria: { correctChoiceId: 'ch1-b' },
      hints: [
        'Which measurement tells you directly what the wire is consuming?',
        'V_wire\u00a0=\u00a0I\u00a0\u00d7\u00a0R_wire.',
      ],
      choices: [
        {
          id: 'ch1-a',
          label: 'The ammeter reading of 2.4A (less than the ideal 3.0A)',
          isCorrect: false,
          explanation: 'The reduced current is a consequence of wire resistance, but it doesn\u2019t directly tell you how much voltage is lost in the wire specifically. It could also be caused by source internal resistance.',
        },
        {
          id: 'ch1-b',
          label: 'A voltmeter across the wire reading 2.4V',
          isCorrect: true,
          explanation: 'Correct! A non-zero voltage across the wire is direct evidence of a voltage drop in the wire path. V_wire\u00a0=\u00a02.4A\u00a0\u00d7\u00a01\u03a9\u00a0=\u00a02.4V.',
        },
        {
          id: 'ch1-c',
          label: 'A voltmeter across the battery reading 12V',
          isCorrect: false,
          explanation: 'The battery reading (12V) simply confirms the source EMF. It does not reveal where the voltage is being dropped in the rest of the circuit.',
        },
      ],
    },
  ],
  theoryContent: [
    {
      title: 'Voltage Drop in Non-Ideal Wires',
      content: 'When a wire has resistance, current flowing through it causes a voltage drop across that wire. This voltage is consumed by the wire and is not available to the load. Measuring across the wire segment reveals how much supply voltage it claims.',
    },
    {
      title: 'Path Voltage Budget',
      content: 'In any series loop, all voltage drops must sum to the source voltage (Kirchhoff\u2019s Voltage Law). If the wire claims some voltage, the load receives what\u2019s left. Measuring each segment tells you exactly how the voltage budget is distributed.',
    },
  ],
  sandboxUnlocks: [],
  availableActions: ['toggle-switch'],
  currentOverlayAvailable: true,
  showFormulaPanel: true,
  formulasShown: [
    {
      formula: 'V\u1d61\u1d62\u1d63\u2091 = I \u00d7 R\u1d61\u1d62\u1d63\u2091',
      symbols: [
        { symbol: 'V\u1d61\u1d62\u1d63\u2091', name: 'Wire voltage drop', unit: 'V' },
        { symbol: 'I', name: 'Current', unit: 'A' },
        { symbol: 'R\u1d61\u1d62\u1d63\u2091', name: 'Wire resistance', unit: '\u03a9' },
      ],
    },
  ],
  theoryPageAdditions: [
    {
      id: 'theory-wire-voltage-drop',
      title: 'Voltage Drop in Non-Ideal Wires',
      content: 'A wire with resistance consumes a share of the supply voltage when current flows through it. The voltage claimed by the wire is V_wire\u00a0=\u00a0I\u00a0\u00d7\u00a0R_wire. Measuring directly across the wire segment reveals how much of the total supply is lost in the path before reaching the load.',
      sourceLesson: 'lesson-ch5-3-2',
    },
  ],
  quizzesUnlocked: ['quiz-ch5-wire-voltage-drop'],
};
