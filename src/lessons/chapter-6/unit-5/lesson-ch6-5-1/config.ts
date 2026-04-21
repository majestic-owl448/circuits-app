import type { LessonConfig } from '../../../../types/lesson.ts';
import { CHAPTER_6_METADATA, CH6_NODES } from '../../shared.ts';

export const lessonCh6_5_1: LessonConfig = {
  id: 'lesson-ch6-5-1',
  unitId: 'ch6-unit-5',
  title: 'Design for the Initial Response',
  description: 'Solve a challenge where the important behavior is what happens immediately after switching — the initial state.',
  stageLabel: CHAPTER_6_METADATA.stageLabel,
  prerequisites: ['lesson-ch6-4-2'],
  conceptsIntroduced: [
    'design goals can focus on initial behavior',
    'initial-state reasoning can matter just as much as long-term reasoning',
    'choosing a component based on its t=0 behavior',
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
      text: 'Not all design goals focus on steady state. Some designs require a specific behavior right after the switch is closed — the initial response. For example, a protective circuit might need to limit current only at the moment of switch-on, before falling to a safe steady-state level.',
    },
    {
      id: 'step-2',
      text: 'Close the switch in this RC circuit and move the slider to "Early." This captures the initial response: maximum current, capacitor voltage near zero. If your goal was to produce a brief high-current pulse at switch-on, this initial behavior is exactly what you would design for.',
      requiredAction: { type: 'toggle-switch', componentId: 'sw-1', targetState: true },
      highlights: ['cap-1', 'res-1'],
    },
    {
      id: 'step-3',
      text: 'A design can fail initial requirements while passing steady-state requirements (or vice versa). Always identify which state your design must satisfy — then choose and configure the time-dependent component accordingly.',
      theoryCheck: {
        question: 'A design requires a current of exactly 90mA only at the moment of switch-on, then falling to zero. What does this mean for the component choice?',
        choices: [
          { id: 'tc-a', label: 'Use a capacitor: it provides maximum current (V/R = 9/100 = 90mA) at t=0, falling to zero at steady state', isCorrect: true, explanation: 'Correct. The RC circuit provides initial current = V/R, then the capacitor blocks DC at steady state. This matches the requirement.' },
          { id: 'tc-b', label: 'Use an inductor: it provides maximum current at t=0', isCorrect: false, explanation: 'An inductor provides zero current at t=0, not maximum. It would fail the initial-response requirement.' },
          { id: 'tc-c', label: 'Use a resistor: it provides steady current throughout', isCorrect: false, explanation: 'A resistor provides constant current throughout. It cannot produce a pulse that falls to zero after switch-on.' },
        ],
        explanation: 'For an initial-maximum, final-zero current requirement, use a capacitor in series. It passes full current at t=0 and blocks DC at steady state.',
      },
    },
  ],
  challenges: [
    {
      id: 'challenge-1',
      prompt: 'A design requires zero current during normal operation (steady state) but maximum current right at switch-on. Which component and behavior achieves this?',
      type: 'choose',
      evaluationCriteria: { correctChoiceId: 'ch1-a' },
      hints: ['Focus on the initial response requirement: what component gives maximum current at t=0?'],
      choices: [
        { id: 'ch1-a', label: 'Capacitor in series: initial current = V/R (maximum), steady-state current = 0 (capacitor blocks DC)', isCorrect: true, explanation: 'Correct. A series capacitor passes maximum current at switch-on, then blocks DC at steady state. This exactly matches the requirement.' },
        { id: 'ch1-b', label: 'Inductor in series: initial current = V/R (maximum), steady-state current = 0', isCorrect: false, explanation: 'An inductor does the opposite: zero current at switch-on, maximum current at steady state. It would fail the initial-response requirement.' },
        { id: 'ch1-c', label: 'Resistor in series: it naturally produces a pulse then falls to zero', isCorrect: false, explanation: 'A resistor produces constant current proportional to voltage. It has no time-dependent behavior in this model.' },
      ],
    },
    {
      id: 'challenge-2',
      prompt: 'A circuit using a 9V source and 100\u03a9 resistor has a capacitor in series. The design goal is an initial current of 90mA. After measuring at t=0, the current reads 45mA instead. What is the most likely problem?',
      type: 'choose',
      evaluationCriteria: { correctChoiceId: 'ch2-b' },
      hints: ['At t=0 in an ideal RC circuit, I_initial = V/R. If current is half the expected value, what must have changed?'],
      choices: [
        { id: 'ch2-a', label: 'The capacitor is the wrong type and needs to be replaced with an inductor', isCorrect: false, explanation: 'The component type (capacitor) is correct for this initial-response design. The issue is with the values, not the component type.' },
        { id: 'ch2-b', label: 'There is additional resistance in the circuit \u2014 perhaps 100\u03a9 more, making total R = 200\u03a9 and I = 9/200 = 45mA', isCorrect: true, explanation: 'Correct. At t=0, I = V/R_total. If I = 45mA instead of 90mA, R_total = 9/0.045 = 200\u03a9. That is 100\u03a9 more than intended.' },
        { id: 'ch2-c', label: 'The capacitor has partially charged before the measurement, reducing the initial current', isCorrect: false, explanation: 'At t=0 (the exact moment of switch-on), a fully discharged capacitor provides maximum current. If you waited before measuring, the reading would be lower \u2014 but the question specifies measuring at t=0.' },
      ],
    },
  ],
  theoryContent: [
    {
      title: 'Designing for Initial Response',
      content: 'Some designs prioritize the initial state right after switch-on. A capacitor in series provides maximum initial current (V/R) that falls to zero at steady state. An inductor in series provides zero initial current that rises to maximum. Choose the component based on which behavior the initial state requires.',
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
        { symbol: '\u03c4', name: 'Time constant', unit: 's' },
        { symbol: 'R', name: 'Resistance', unit: '\u03a9' },
        { symbol: 'C', name: 'Capacitance', unit: 'F' },
      ],
    },
  ],
  theoryPageAdditions: [
    {
      id: 'theory-ch6-initial-response-design',
      title: 'Designing for Initial Response',
      content: 'To design for a specific initial response, choose the component whose t=0 behavior matches your goal. Capacitor: maximum initial current. Inductor: zero initial current. Verify at the "Early" checkpoint, not just at steady state.',
      sourceLesson: 'lesson-ch6-5-1',
    },
  ],
  quizzesUnlocked: ['quiz-ch6-initial-response-design-basics'],
};
