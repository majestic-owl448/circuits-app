import type { LessonConfig } from '../../../../types/lesson.ts';
import { CHAPTER_6_METADATA, CH6_NODES } from '../../shared.ts';

export const lessonCh6_4_1: LessonConfig = {
  id: 'lesson-ch6-4-1',
  unitId: 'ch6-unit-4',
  title: 'Two Different Kinds of Time-Dependent Components',
  description: 'Compare capacitor and inductor behavior directly and understand that they are not interchangeable.',
  stageLabel: CHAPTER_6_METADATA.stageLabel,
  prerequisites: ['lesson-ch6-3-4'],
  conceptsIntroduced: [
    'capacitors and inductors behave differently over time',
    'both are time-dependent but in opposite ways',
    'component type determines the circuit story',
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
      properties: { isClosed: false },
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
      text: 'You have now seen both capacitors and inductors. Both are time-dependent, but they behave in opposite ways. Close the switch in this RC circuit and use the time slider to observe the pattern: current starts high and falls; capacitor voltage starts low and rises.',
      requiredAction: { type: 'toggle-switch', componentId: 'sw-1', targetState: true },
      highlights: ['cap-1', 'res-1'],
    },
    {
      id: 'step-2',
      text: 'Recall the RL circuit pattern from Unit 3: current starts at zero and rises; inductor voltage starts high and falls. Compare these two patterns side by side in your mind. RC and RL are mirror images of each other.',
      highlights: ['cap-1'],
    },
    {
      id: 'step-3',
      text: 'At DC steady state, the two components also behave oppositely. A capacitor blocks DC (open circuit, zero current). An inductor passes DC freely (short circuit, full current). They are the same category of component — time-dependent energy storage — but they respond in opposite ways.',
      theoryCheck: {
        question: 'At DC steady state, how do a capacitor and an inductor in series circuits behave differently?',
        choices: [
          { id: 'tc-a', label: 'A capacitor acts as an open circuit (blocks DC); an inductor acts as a short circuit (passes DC)', isCorrect: true, explanation: 'Correct. At steady state, a fully charged capacitor blocks DC completely. A fully energized inductor passes DC freely with no voltage drop.' },
          { id: 'tc-b', label: 'Both block DC at steady state', isCorrect: false, explanation: 'Only the capacitor blocks DC at steady state. The inductor passes DC freely at steady state.' },
          { id: 'tc-c', label: 'Both pass DC freely at steady state', isCorrect: false, explanation: 'Only the inductor passes DC freely at steady state. The capacitor blocks DC once fully charged.' },
        ],
        explanation: 'Capacitor: blocks DC at steady state (open circuit). Inductor: passes DC at steady state (short circuit). They are opposites.',
      },
    },
  ],
  challenges: [
    {
      id: 'challenge-1',
      prompt: 'A circuit is switched on. Right after the switch closes, a large current flows and gradually falls to zero. Which component is in the circuit?',
      type: 'choose',
      evaluationCriteria: { correctChoiceId: 'ch1-a' },
      hints: ['Which component starts with high current and ends with zero current?'],
      choices: [
        { id: 'ch1-a', label: 'A capacitor \u2014 it starts as a short (high current) and ends as an open (zero current)', isCorrect: true, explanation: 'Correct. RC charging shows current starting at V/R and falling to zero as the capacitor charges to the source voltage.' },
        { id: 'ch1-b', label: 'An inductor \u2014 it starts with high current and gradually loses it', isCorrect: false, explanation: 'An inductor starts with zero current and rises to V/R. The described behavior (high to zero) is characteristic of an RC circuit, not RL.' },
        { id: 'ch1-c', label: 'A resistor \u2014 it immediately produces maximum current', isCorrect: false, explanation: 'A resistor produces constant current (V/R) instantly and it stays constant. The described behavior shows changing current, which means a reactive component.' },
      ],
    },
    {
      id: 'challenge-2',
      prompt: 'After a very long time with the switch closed, which component has zero voltage across it?',
      type: 'choose',
      evaluationCriteria: { correctChoiceId: 'ch2-b' },
      hints: ['Which component passes DC freely at steady state \u2014 meaning no voltage drop across it?'],
      choices: [
        { id: 'ch2-a', label: 'The capacitor \u2014 it holds zero voltage at steady state', isCorrect: false, explanation: 'The capacitor holds the full source voltage at steady state. It has maximum voltage across it, not zero.' },
        { id: 'ch2-b', label: 'The inductor \u2014 it acts as a wire at DC steady state', isCorrect: true, explanation: 'Correct. At DC steady state, the inductor is a short circuit \u2014 no voltage drop, full current. The voltage across it falls to zero.' },
        { id: 'ch2-c', label: 'The resistor \u2014 it stores no energy so it has no voltage', isCorrect: false, explanation: 'The resistor always has voltage proportional to the current through it (V = IR). At steady state it carries the full circuit current.' },
      ],
    },
  ],
  theoryContent: [
    {
      title: 'Capacitors Versus Inductors',
      content: 'Both capacitors and inductors are time-dependent energy-storage components, but they behave in opposite ways. RC: current starts high, falls to zero. RL: current starts zero, rises to maximum. At DC steady state: capacitor blocks (open); inductor passes (short).',
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
        { symbol: '\u03c4', name: 'RC time constant', unit: 's' },
        { symbol: 'R', name: 'Resistance', unit: '\u03a9' },
        { symbol: 'C', name: 'Capacitance', unit: 'F' },
      ],
    },
    {
      formula: '\u03c4 = L / R',
      symbols: [
        { symbol: '\u03c4', name: 'RL time constant', unit: 's' },
        { symbol: 'L', name: 'Inductance', unit: 'H' },
        { symbol: 'R', name: 'Resistance', unit: '\u03a9' },
      ],
    },
  ],
  theoryPageAdditions: [
    {
      id: 'theory-ch6-cap-vs-ind',
      title: 'Capacitors Versus Inductors',
      content: 'RC circuits: current starts high (V/R), falls to zero; capacitor voltage rises to source voltage. RL circuits: current starts zero, rises to V/R; inductor voltage falls to zero. At DC steady state: capacitor \u2192 open circuit; inductor \u2192 short circuit.',
      sourceLesson: 'lesson-ch6-4-1',
    },
  ],
  quizzesUnlocked: ['quiz-ch6-capacitor-versus-inductor-comparison-basics'],
};
