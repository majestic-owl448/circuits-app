import type { LessonConfig } from '../../../types/lesson.ts';
import { STANDARD_NODES } from '../../shared.ts';
import type { CircuitComponent } from '../../../types/circuit.ts';

/** Circuit missing the bulb — learner must place it. */
const circuitMissingBulb: CircuitComponent[] = [
  { id: 'battery-1', type: 'battery', nodeA: 'n1', nodeB: 'n4', properties: { voltage: 9 }, name: 'Battery', position: { x: 100, y: 200 }, rotation: 0 },
  { id: 'wire-1', type: 'wire', nodeA: 'n1', nodeB: 'n2', properties: {}, name: 'Wire', position: { x: 300, y: 100 }, rotation: 0 },
  { id: 'switch-1', type: 'switch', nodeA: 'n4', nodeB: 'n3', properties: { isClosed: false }, name: 'Switch', position: { x: 300, y: 400 }, rotation: 0 },
];

export const lesson4_1: LessonConfig = {
  id: 'lesson-4-1',
  unitId: 'unit-4',
  title: 'Place the Missing Piece',
  description: 'Build confidence by placing a missing component into an otherwise complete circuit.',
  stageLabel: 'Beginner',
  prerequisites: ['lesson-3-3'],
  conceptsIntroduced: ['partial construction', 'one missing part can prevent success'],
  initialCircuit: circuitMissingBulb,
  initialNodes: STANDARD_NODES,
  steps: [
    {
      id: 'step-1',
      text: 'This circuit is almost complete, but one component is missing. Without it, the circuit cannot do useful work even if the loop is closed. Can you tell what is missing?',
      highlights: ['battery-1', 'wire-1', 'switch-1'],
    },
    {
      id: 'step-2',
      text: 'The bulb (load) is missing! Without a load, the circuit has no component to use the electrical energy. You need to place the bulb in the correct position to complete the circuit.',
    },
    {
      id: 'step-3',
      text: 'Drag the bulb into the gap between nodes n2 and n3 to complete the circuit.',
      requiredAction: { type: 'place-component', componentType: 'bulb' },
      highlights: ['n2', 'n3'],
    },
    {
      id: 'step-4',
      text: 'Now close the switch to test your circuit.',
      requiredAction: { type: 'toggle-switch', componentId: 'switch-1', targetState: true },
      highlights: ['switch-1'],
    },
    {
      id: 'step-5',
      text: 'The bulb lights up! You successfully identified and placed the missing component. Even one missing piece can prevent an entire circuit from working.',
      showCurrentOverlay: true,
      highlights: ['bulb-1'],
      theoryCheck: {
        question: 'If a circuit has a battery, wires, and a switch but no load, what happens when the switch is closed?',
        choices: [
          { id: 'tc-a', label: 'The circuit works normally', isCorrect: false, explanation: 'Without a load, there is nothing to use the energy in a useful way.' },
          { id: 'tc-b', label: 'Nothing useful happens because there is no load', isCorrect: true, explanation: 'Correct! A circuit needs a load to do useful work like producing light.' },
          { id: 'tc-c', label: 'The battery provides extra voltage', isCorrect: false, explanation: 'The battery provides the same voltage regardless. The issue is the missing load.' },
        ],
        explanation: 'Every functional circuit needs a load. The source provides energy, the path carries it, and the load uses it.',
      },
    },
  ],
  challenges: [
    {
      id: 'challenge-1',
      prompt: 'What is the correct missing component for this circuit?',
      type: 'choose',
      evaluationCriteria: { correctChoiceId: 'ch1-b' },
      hints: [
        'The circuit has a battery, a wire, and a switch. What is missing for it to do useful work?',
      ],
      choices: [
        { id: 'ch1-a', label: 'Another battery', isCorrect: false, explanation: 'There is already a source. The circuit needs a load to use the energy.' },
        { id: 'ch1-b', label: 'A bulb (load)', isCorrect: true, explanation: 'Correct! The bulb is the missing load that will use the energy from the battery.' },
        { id: 'ch1-c', label: 'Another switch', isCorrect: false, explanation: 'Another switch would not give the circuit a useful function. It needs a load.' },
      ],
    },
    {
      id: 'challenge-2',
      prompt: 'Place the missing bulb into the correct position in the circuit so that closing the switch lights the bulb.',
      type: 'drag-place',
      initialCircuit: circuitMissingBulb,
      initialNodes: STANDARD_NODES,
      componentToPlace: 'bulb',
      targetSlotNodeA: 'n2',
      targetSlotNodeB: 'n3',
      evaluationCriteria: { circuitMustBeClosed: true, customCheck: 'has-bulb-in-loop' },
      hints: [
        'The bulb needs to connect two nodes to be part of the loop.',
        'Place it between nodes n2 and n3 where the gap is.',
      ],
    },
  ],
  theoryContent: [
    {
      title: 'Partial construction',
      content: 'A circuit with even one missing component will not work. Learning to identify what is missing is an important skill for understanding and building circuits.',
    },
  ],
  sandboxUnlocks: [],
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
  ],
  theoryPageAdditions: [],
  quizzesUnlocked: [],
};
