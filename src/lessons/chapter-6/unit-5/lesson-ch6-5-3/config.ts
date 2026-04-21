import type { LessonConfig } from '../../../../types/lesson.ts';
import { CHAPTER_6_METADATA, CH6_NODES } from '../../shared.ts';

export const lessonCh6_5_3: LessonConfig = {
  id: 'lesson-ch6-5-3',
  unitId: 'ch6-unit-5',
  title: 'Chapter Review Challenge',
  description: 'Integrate capacitor, inductor, initial-state, and steady-state reasoning in one chapter review challenge.',
  stageLabel: CHAPTER_6_METADATA.stageLabel,
  prerequisites: ['lesson-ch6-5-2'],
  conceptsIntroduced: [],
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
      text: 'Chapter 6 introduced two time-dependent components: capacitors and inductors. Let\'s review the key patterns. Close the switch on this RC circuit and move through "Early" to "Late" using the time slider.',
      requiredAction: { type: 'toggle-switch', componentId: 'sw-1', targetState: true },
      highlights: ['cap-1', 'res-1'],
    },
    {
      id: 'step-2',
      text: 'Review the RC pattern you observed: current starts at maximum (V/R) and falls to zero; capacitor voltage starts at zero and rises to the source voltage. RC steady state: capacitor is an open circuit. RL steady state (from Unit 3): inductor is a short circuit.',
      highlights: ['cap-1'],
    },
    {
      id: 'step-3',
      text: 'The core skill from this chapter: identify which state (initial or final) matters for your design goal, choose the correct time-dependent component, and verify both states against requirements.',
      theoryCheck: {
        question: 'Which of the following correctly summarizes the steady-state behavior difference between a capacitor and an inductor?',
        choices: [
          { id: 'tc-a', label: 'Capacitor: open circuit (blocks DC). Inductor: short circuit (passes DC).', isCorrect: true, explanation: 'Correct. At DC steady state: a fully charged capacitor blocks current entirely; a fully energized inductor passes current freely with no voltage drop.' },
          { id: 'tc-b', label: 'Capacitor: short circuit. Inductor: open circuit.', isCorrect: false, explanation: 'This is reversed. A capacitor at t=0 acts as a short, but at steady state it is open. An inductor at t=0 acts as an open, but at steady state it is short.' },
          { id: 'tc-c', label: 'Both act as open circuits at steady state', isCorrect: false, explanation: 'Only the capacitor becomes an open circuit at steady state. The inductor becomes a short circuit.' },
        ],
        explanation: 'At DC steady state: capacitor \u2192 open circuit (no current). Inductor \u2192 short circuit (full current). This is a key pattern to remember.',
      },
    },
  ],
  challenges: [
    {
      id: 'challenge-1',
      prompt: 'A circuit requirement says: "Right after switch-on: 0mA. After a long time: 45mA." The source is 9V. What component and resistor value satisfies both requirements?',
      type: 'choose',
      evaluationCriteria: { correctChoiceId: 'ch1-b' },
      hints: ['Zero initial current points to an inductor. 45mA at steady state gives R = V/I = 9/0.045 = 200\u03a9.'],
      choices: [
        { id: 'ch1-a', label: 'Capacitor in series with 200\u03a9 resistor: I(0) = 45mA, I(\u221e) = 0mA', isCorrect: false, explanation: 'A capacitor in series gives maximum current at t=0 and zero at steady state. This is the opposite of what is required.' },
        { id: 'ch1-b', label: 'Inductor in series with 200\u03a9 resistor: I(0) = 0mA, I(\u221e) = V/R = 9/200 = 45mA', isCorrect: true, explanation: 'Correct. An inductor gives zero initial current and maximum steady-state current. R = V/I = 9/0.045 = 200\u03a9.' },
        { id: 'ch1-c', label: 'Resistor only: I(0) = I(\u221e) = 45mA', isCorrect: false, explanation: 'A pure resistor responds instantly and produces constant current. It cannot satisfy the zero-initial-current requirement.' },
      ],
    },
    {
      id: 'challenge-2',
      prompt: 'A designer uses a capacitor in series with a load, expecting steady-state current of 90mA. After testing, steady-state current is 0mA. What is the cause?',
      type: 'choose',
      evaluationCriteria: { correctChoiceId: 'ch2-b' },
      hints: ['What does a capacitor do at DC steady state?'],
      choices: [
        { id: 'ch2-a', label: 'The capacitor is too small and needs a larger value to allow more steady-state current', isCorrect: false, explanation: 'Capacitor value affects the time constant, not the steady-state current. At DC steady state, a capacitor blocks all current regardless of its capacitance.' },
        { id: 'ch2-b', label: 'A capacitor blocks DC at steady state \u2014 using a capacitor was the wrong choice for this requirement', isCorrect: true, explanation: 'Correct. At DC steady state, any capacitor is an open circuit. Zero steady-state current is the expected behavior. The designer should have used an inductor instead.' },
        { id: 'ch2-c', label: 'The resistor is too large and needs to be replaced with a smaller one', isCorrect: false, explanation: 'Resistor value affects the current magnitude, but the fundamental problem is using a capacitor, which always blocks DC at steady state regardless of resistor value.' },
      ],
    },
  ],
  theoryContent: [
    {
      title: 'Chapter 6 Review: Time-Dependent Behavior',
      content: 'RC circuits: current starts at V/R (max), falls to zero; capacitor voltage rises to source. RL circuits: current starts at zero, rises to V/R (max); inductor voltage falls to zero. At DC steady state: capacitor = open circuit, inductor = short circuit. Choose components based on required initial and final behavior.',
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
  theoryPageAdditions: [],
  quizzesUnlocked: ['quiz-ch6-review'],
};
