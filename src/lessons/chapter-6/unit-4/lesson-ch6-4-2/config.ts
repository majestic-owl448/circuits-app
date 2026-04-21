import type { LessonConfig } from '../../../../types/lesson.ts';
import { CHAPTER_6_METADATA, CH6_NODES } from '../../shared.ts';

export const lessonCh6_4_2: LessonConfig = {
  id: 'lesson-ch6-4-2',
  unitId: 'ch6-unit-4',
  title: 'Use the Right Component for the Right Behavior',
  description: 'Choose between a capacitor and an inductor based on the desired behavior in a time-dependent design scenario.',
  stageLabel: CHAPTER_6_METADATA.stageLabel,
  prerequisites: ['lesson-ch6-4-1'],
  conceptsIntroduced: [
    'component choice depends on target behavior',
    'time-dependent design requires matching component to goal',
    'initial and final behavior differ between RC and RL circuits',
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
      text: 'Design goals can focus on either initial behavior or long-term behavior. If you need maximum current immediately when the switch closes — choose a capacitor (it acts as a short at t=0). If you need zero current immediately and maximum current later — choose an inductor (it acts as an open at t=0).',
      highlights: ['cap-1'],
    },
    {
      id: 'step-2',
      text: 'Close the switch on this RC circuit and use the time slider. Observe that current is highest at the start. If your design goal requires high initial current followed by settling to zero, this RC configuration works. If you needed the reverse, you would choose an inductor instead.',
      requiredAction: { type: 'toggle-switch', componentId: 'sw-1', targetState: true },
      highlights: ['cap-1', 'res-1'],
    },
    {
      id: 'step-3',
      text: 'The right component for a job depends on which condition matters: initial or final, current or voltage, charging or blocking. Time-dependent design is about matching the component\'s natural behavior to the circuit\'s required behavior.',
      theoryCheck: {
        question: 'A design requires zero current immediately after switch-on, with current rising to a maximum later. Which component produces this behavior?',
        choices: [
          { id: 'tc-a', label: 'A capacitor \u2014 it starts with zero current and rises', isCorrect: false, explanation: 'A capacitor does the opposite: it starts with maximum current (short circuit) and current falls to zero as it charges.' },
          { id: 'tc-b', label: 'An inductor \u2014 it starts as an open circuit (zero current) and current rises to V/R', isCorrect: true, explanation: 'Correct. An inductor at t=0 acts as an open circuit. Current then rises gradually to its final value V/R.' },
          { id: 'tc-c', label: 'A resistor \u2014 it naturally delays current buildup', isCorrect: false, explanation: 'A resistor responds instantly to voltage with constant current (V/R). It has no time-dependent behavior.' },
        ],
        explanation: 'For zero-to-max current behavior, use an inductor. For max-to-zero current behavior, use a capacitor.',
      },
    },
  ],
  challenges: [
    {
      id: 'challenge-1',
      prompt: 'You need a circuit where, right after switch-on, NO current flows through the load — but after a long time, FULL current flows. Which time-dependent component should you put in series with the load?',
      type: 'choose',
      evaluationCriteria: { correctChoiceId: 'ch1-b' },
      hints: ['Which component acts as an open circuit at t=0 and a short circuit at steady state?'],
      choices: [
        { id: 'ch1-a', label: 'A capacitor \u2014 it blocks current at steady state, which is what we want long-term', isCorrect: false, explanation: 'A capacitor blocks current at steady state. You need something that allows full current at steady state \u2014 that is the inductor.' },
        { id: 'ch1-b', label: 'An inductor \u2014 open circuit at t=0, short circuit at steady state', isCorrect: true, explanation: 'Correct. An inductor starts as open (zero current) and transitions to short (full current). This matches the requirement exactly.' },
        { id: 'ch1-c', label: 'A resistor \u2014 it gradually allows more current as it warms up', isCorrect: false, explanation: 'Resistors respond instantly and have constant behavior. They do not warm up to allow more current in this model.' },
      ],
    },
    {
      id: 'challenge-2',
      prompt: 'A design needs maximum current at switch-on, tapering to zero at steady state. Which component in series achieves this?',
      type: 'choose',
      evaluationCriteria: { correctChoiceId: 'ch2-a' },
      hints: ['Which component starts as a short circuit and ends as an open circuit?'],
      choices: [
        { id: 'ch2-a', label: 'A capacitor \u2014 short circuit at t=0 (max current), open circuit at steady state (zero current)', isCorrect: true, explanation: 'Correct. At t=0 the capacitor passes maximum current (V/R). At steady state it is fully charged and blocks DC entirely.' },
        { id: 'ch2-b', label: 'An inductor \u2014 it starts with high current', isCorrect: false, explanation: 'An inductor starts with zero current, not maximum. This is the opposite of what is needed.' },
        { id: 'ch2-c', label: 'A resistor \u2014 high initial current, then falls as resistance increases', isCorrect: false, explanation: 'Resistor current is constant (V/R) and does not change over time in this model.' },
      ],
    },
  ],
  theoryContent: [
    {
      title: 'Choosing Between Capacitor and Inductor Behavior',
      content: 'Capacitor in series: maximum current at switch-on, falling to zero at steady state. Inductor in series: zero current at switch-on, rising to maximum at steady state. Choose based on which behavior (initial or final, rising or falling) your design requires.',
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
      id: 'theory-ch6-choosing-component',
      title: 'Choosing Between Capacitor and Inductor Behavior',
      content: 'Use a capacitor when you need maximum current at switch-on tapering to zero. Use an inductor when you need zero current at switch-on rising to maximum. Match the component to the required time-behavior pattern.',
      sourceLesson: 'lesson-ch6-4-2',
    },
  ],
  quizzesUnlocked: ['quiz-ch6-time-dependent-component-choice-basics'],
};
