import type { LessonConfig } from '../../../types/lesson.ts';
import { STANDARD_NODES } from '../../shared.ts';
import type { CircuitComponent } from '../../../types/circuit.ts';

/** Circuit missing the top wire — learner must connect it. */
const circuitMissingTopWire: CircuitComponent[] = [
  { id: 'battery-1', type: 'battery', nodeA: 'n1', nodeB: 'n4', properties: { voltage: 9 }, name: 'Battery', position: { x: 100, y: 200 }, rotation: 0 },
  { id: 'bulb-1', type: 'bulb', nodeA: 'n2', nodeB: 'n3', properties: { resistance: 45 }, name: 'Bulb', position: { x: 500, y: 200 }, rotation: 0 },
  { id: 'switch-1', type: 'switch', nodeA: 'n4', nodeB: 'n3', properties: { isClosed: false }, name: 'Switch', position: { x: 300, y: 400 }, rotation: 0 },
];

/** Circuit with a wire connected to the wrong node (n1 to n3 instead of n1 to n2). */
const circuitWrongWire: CircuitComponent[] = [
  { id: 'battery-1', type: 'battery', nodeA: 'n1', nodeB: 'n4', properties: { voltage: 9 }, name: 'Battery', position: { x: 100, y: 200 }, rotation: 0 },
  { id: 'wire-wrong', type: 'wire', nodeA: 'n1', nodeB: 'n3', properties: {}, name: 'Wire', position: { x: 300, y: 200 }, rotation: 0 },
  { id: 'bulb-1', type: 'bulb', nodeA: 'n2', nodeB: 'n3', properties: { resistance: 45 }, name: 'Bulb', position: { x: 500, y: 200 }, rotation: 0 },
  { id: 'switch-1', type: 'switch', nodeA: 'n4', nodeB: 'n3', properties: { isClosed: false }, name: 'Switch', position: { x: 300, y: 400 }, rotation: 0 },
];

export const lesson4_2: LessonConfig = {
  id: 'lesson-4-2',
  unitId: 'unit-4',
  title: 'Wiring the Loop',
  description: 'Unlock and use wire connections between valid terminals to complete circuits.',
  stageLabel: 'Beginner',
  prerequisites: ['lesson-4-1'],
  conceptsIntroduced: ['making a connection directly', 'wiring as the action that completes or breaks the path'],
  initialCircuit: circuitMissingTopWire,
  initialNodes: STANDARD_NODES,
  steps: [
    {
      id: 'step-1',
      text: 'So far, you have placed components. Now you will learn to connect wires directly between terminals. Wiring is how you create the paths that electricity flows through.',
      highlights: ['battery-1', 'bulb-1', 'switch-1'],
    },
    {
      id: 'step-2',
      text: 'This circuit is missing a wire between the battery and the bulb (from node n1 to node n2). You need to draw this connection yourself.',
      highlights: ['n1', 'n2'],
    },
    {
      id: 'step-3',
      text: 'Connect a wire from node n1 to node n2 to complete the top path of the circuit.',
      requiredAction: { type: 'connect-wire', fromNode: 'n1', toNode: 'n2' },
      highlights: ['n1', 'n2'],
    },
    {
      id: 'step-4',
      text: 'Now close the switch to test the circuit.',
      requiredAction: { type: 'toggle-switch', componentId: 'switch-1', targetState: true },
      highlights: ['switch-1'],
    },
    {
      id: 'step-5',
      text: 'The bulb lights up! You have wired the loop yourself. Every wire in a circuit is a link in the chain — if one is missing or wrong, the circuit fails.',
      showCurrentOverlay: true,
      highlights: ['bulb-1'],
      theoryCheck: {
        question: 'Which connection completes this circuit loop?',
        choices: [
          { id: 'tc-a', label: 'A wire from n1 to n3', isCorrect: false, explanation: 'That connection would bypass the bulb, not complete the intended loop.' },
          { id: 'tc-b', label: 'A wire from n1 to n2', isCorrect: true, explanation: 'Correct! This connects the battery to the bulb, completing the loop.' },
          { id: 'tc-c', label: 'A wire from n2 to n4', isCorrect: false, explanation: 'That does not connect the battery to the bulb along the correct path.' },
        ],
        explanation: 'The wire from n1 to n2 connects the battery output to the bulb input, completing the path for current to flow through the loop.',
      },
    },
  ],
  challenges: [
    {
      id: 'challenge-1',
      prompt: 'This circuit has no wire connecting the battery to the bulb. Connect the missing wire so the circuit works.',
      type: 'fix',
      initialCircuit: circuitMissingTopWire,
      initialNodes: STANDARD_NODES,
      evaluationCriteria: { circuitMustBeClosed: true },
      hints: [
        'You need to connect node n1 to node n2 with a wire.',
        'Use the connect-wire tool to draw a connection between the two terminals.',
      ],
    },
    {
      id: 'challenge-2',
      prompt: 'This circuit has a wire connected to the wrong terminal. Fix the wiring so the bulb lights when the switch is closed.',
      type: 'fix',
      initialCircuit: circuitWrongWire,
      initialNodes: STANDARD_NODES,
      evaluationCriteria: { circuitMustBeClosed: true, customCheck: 'correct-loop-path' },
      hints: [
        'Trace the path from the battery. Does the current pass through the bulb?',
        'The wire should go from n1 to n2, not from n1 to n3.',
      ],
    },
  ],
  theoryContent: [
    {
      title: 'Connecting a path',
      content: 'Wires create the paths that connect components. Each wire links two terminals (nodes). A correct set of connections forms the loop that allows current to flow. A wrong or missing connection breaks the loop.',
    },
  ],
  sandboxUnlocks: ['connect-wire'],
  availableActions: ['toggle-switch', 'drag-to-place', 'connect-wire'],
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
      id: 'theory-connecting-a-path',
      title: 'Connecting a path',
      content: 'Wires create the paths that connect components. Each wire links two terminals (nodes). A correct set of connections forms the loop that allows current to flow. A wrong or missing connection breaks the loop.',
      sourceLesson: 'lesson-4-2',
    },
  ],
  quizzesUnlocked: ['quiz-simple-connection-logic'],
};
