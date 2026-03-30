import type { LessonConfig } from '../../../../types/lesson.ts';
import { SERIES_NODES } from '../../../shared.ts';
import type { CircuitComponent } from '../../../../types/circuit.ts';

const circuit: CircuitComponent[] = [
  { id: 'battery-1', type: 'battery', nodeA: 'n1', nodeB: 'n6', properties: { voltage: 9 }, name: 'Battery', position: { x: 80, y: 225 }, rotation: 0 },
  { id: 'wire-1', type: 'wire', nodeA: 'n1', nodeB: 'n2', properties: {}, name: 'Wire', position: { x: 250, y: 100 }, rotation: 0 },
  { id: 'bulb-1', type: 'bulb', nodeA: 'n2', nodeB: 'n3', properties: { resistance: 45 }, name: 'Bulb 1', position: { x: 440, y: 150 }, rotation: 0 },
  { id: 'bulb-2', type: 'bulb', nodeA: 'n3', nodeB: 'n4', properties: { resistance: 45 }, name: 'Bulb 2', position: { x: 540, y: 275 }, rotation: 0 },
  { id: 'wire-2', type: 'wire', nodeA: 'n4', nodeB: 'n5', properties: {}, name: 'Wire', position: { x: 425, y: 400 }, rotation: 0 },
  { id: 'switch-1', type: 'switch', nodeA: 'n6', nodeB: 'n5', properties: { isClosed: true }, name: 'Switch', position: { x: 250, y: 400 }, rotation: 0 },
];

export const lessonCh3_1_3: LessonConfig = {
  id: 'lesson-ch3-1-3',
  unitId: 'ch3-unit-1',
  title: 'The Same Current Through the Path',
  description: 'See that the same current flows through both bulbs in a series circuit.',
  stageLabel: 'Early Intermediate',
  prerequisites: ['lesson-ch3-1-2'],
  conceptsIntroduced: ['same current through all elements', 'path continuity', 'current consistency'],
  initialCircuit: circuit,
  initialNodes: SERIES_NODES,
  steps: [
    {
      id: 'step-1',
      text: 'You know that series bulbs are dimmer. But here is the deeper reason: in a series circuit, the same current flows through every component. Let us verify this with the current overlay.',
      showCurrentOverlay: true,
    },
    {
      id: 'step-2',
      text: 'Look at the current overlay. The flow through Bulb 1 and Bulb 2 is identical. With a 9V battery and 90\u03A9 total resistance, the current everywhere in this loop is 0.1A.',
      highlights: ['bulb-1', 'bulb-2'],
      showCurrentOverlay: true,
    },
    {
      id: 'step-3',
      text: 'This is not a coincidence. There is only one path, so the same charges flow through every component in sequence. The current at the battery, at Bulb 1, at Bulb 2, and at the switch is the same 0.1A.',
      highlights: ['battery-1', 'bulb-1', 'bulb-2', 'switch-1'],
      showCurrentOverlay: true,
      theoryCheck: {
        question: 'In a series circuit, the current through Bulb 1 is 0.1A. What is the current through Bulb 2?',
        choices: [
          { id: 'tc-a', label: '0.1A \u2014 the same as Bulb 1', isCorrect: true, explanation: 'Correct! In a series circuit, the current is the same through every component because there is only one path.' },
          { id: 'tc-b', label: '0.05A \u2014 half of the current, split between the two bulbs', isCorrect: false, explanation: 'Current does not split in a series circuit. There is only one path, so all the current flows through both bulbs.' },
          { id: 'tc-c', label: '0.2A \u2014 each bulb gets the full single-bulb current', isCorrect: false, explanation: 'The current in this series circuit is 0.1A (9V / 90\u03A9), not 0.2A. Both bulbs share the same 0.1A.' },
        ],
        explanation: 'In a series circuit, there is only one path for current. The same 0.1A flows through the battery, Bulb 1, Bulb 2, the switch, and all connecting wires.',
      },
    },
    {
      id: 'step-4',
      text: 'This is the fundamental rule of series circuits: the current is the same everywhere in the loop. No matter how many components you add in series, they all carry the same current.',
    },
  ],
  challenges: [
    {
      id: 'challenge-1',
      prompt: 'Three identical bulbs are connected in series with a battery. The current through the first bulb is 0.08A. Which statement is correct?',
      type: 'choose',
      evaluationCriteria: { correctChoiceId: 'ch1-a' },
      hints: [
        'In a series circuit, there is only one path for current.',
        'If the current through one component is 0.08A, what must it be through the others?',
      ],
      choices: [
        { id: 'ch1-a', label: 'The current through all three bulbs is 0.08A', isCorrect: true, explanation: 'Correct! In series, every component carries the same current. All three bulbs have 0.08A flowing through them.' },
        { id: 'ch1-b', label: 'Each bulb gets one-third of the current (about 0.027A)', isCorrect: false, explanation: 'Current does not divide in a series circuit. There is only one path, so the full 0.08A passes through each bulb.' },
        { id: 'ch1-c', label: 'The last bulb gets less current because the first bulbs use some up', isCorrect: false, explanation: 'Current is not "used up" as it passes through components. The same amount of charge flows through every part of the series loop.' },
      ],
    },
    {
      id: 'challenge-2',
      prompt: 'This series circuit is broken \u2014 the wire between Bulb 1 and Bulb 2 is missing. Fix it so that current flows through both bulbs.',
      type: 'fix',
      initialCircuit: [
        { id: 'battery-1', type: 'battery', nodeA: 'n1', nodeB: 'n6', properties: { voltage: 9 }, name: 'Battery', position: { x: 80, y: 225 }, rotation: 0 },
        { id: 'wire-1', type: 'wire', nodeA: 'n1', nodeB: 'n2', properties: {}, name: 'Wire', position: { x: 250, y: 100 }, rotation: 0 },
        { id: 'bulb-1', type: 'bulb', nodeA: 'n2', nodeB: 'n3', properties: { resistance: 45 }, name: 'Bulb 1', position: { x: 440, y: 150 }, rotation: 0 },
        { id: 'bulb-2', type: 'bulb', nodeA: 'n4', nodeB: 'n5', properties: { resistance: 45 }, name: 'Bulb 2', position: { x: 540, y: 275 }, rotation: 0 },
        { id: 'switch-1', type: 'switch', nodeA: 'n6', nodeB: 'n5', properties: { isClosed: true }, name: 'Switch', position: { x: 250, y: 400 }, rotation: 0 },
      ],
      initialNodes: SERIES_NODES,
      evaluationCriteria: {
        circuitMustBeClosed: true,
        customCheck: 'series-path-complete',
      },
      hints: [
        'Look for the gap in the circuit. Bulb 1 ends at n3 but Bulb 2 starts at n4.',
        'Connect a wire from n3 to n4 to complete the series path.',
      ],
    },
  ],
  theoryContent: [
    {
      title: 'Current in a series path',
      content: 'In a series circuit, the current is the same through every component. Because there is only one path, the same charge flows through the battery, every bulb, every wire, and the switch. Current is not "used up" by components \u2014 what enters one side of a bulb exits the other side.',
    },
  ],
  sandboxUnlocks: [],
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
      id: 'theory-ch3-series-current',
      title: 'Current in a series path',
      content: 'In a series circuit, the current is identical through every component. Because there is only one path, the same charge passes through the battery, each bulb, each wire, and the switch in sequence. Current is never "used up" by a component \u2014 what flows in one side flows out the other.',
      sourceLesson: 'lesson-ch3-1-3',
    },
  ],
  quizzesUnlocked: ['quiz-ch3-series-current'],
};
