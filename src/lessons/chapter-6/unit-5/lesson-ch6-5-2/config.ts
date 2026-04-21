import type { LessonConfig } from '../../../../types/lesson.ts';
import { CHAPTER_6_METADATA, CH6_NODES } from '../../shared.ts';

export const lessonCh6_5_2: LessonConfig = {
  id: 'lesson-ch6-5-2',
  unitId: 'ch6-unit-5',
  title: 'Design for the Later Response',
  description: 'Solve a challenge where the important behavior is the later steady-state condition rather than the initial response.',
  stageLabel: CHAPTER_6_METADATA.stageLabel,
  prerequisites: ['lesson-ch6-5-1'],
  conceptsIntroduced: [
    'different design goals may prioritize the later state',
    'initial and final goals may conflict',
    'verifying steady-state behavior separately from initial behavior',
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
      id: 'ind-1',
      type: 'inductor',
      nodeA: 'n1',
      nodeB: 'n2',
      properties: { inductance: 1 },
      name: 'Inductor',
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
      text: 'Other design goals focus on steady state — what the circuit does after the transient is over. A circuit meant to continuously power a load must reach and hold a stable operating current at steady state. Transient behavior matters less; the steady-state result is what counts.',
    },
    {
      id: 'step-2',
      text: 'Close the switch in this RL circuit and move the slider to "Late." At steady state, the inductor passes maximum current freely. If your goal is steady-state current of 90mA through the resistor, this RL circuit achieves it — even though initial current was zero.',
      requiredAction: { type: 'toggle-switch', componentId: 'sw-1', targetState: true },
      highlights: ['ind-1', 'res-1'],
    },
    {
      id: 'step-3',
      text: 'A common trap: a design with a good initial response may still fail a steady-state requirement. Always verify both states separately. A design that passes only one of them is incomplete.',
      theoryCheck: {
        question: 'A design passes its initial-response test but fails the steady-state requirement. What does this mean?',
        choices: [
          { id: 'tc-a', label: 'The design is acceptable \u2014 initial behavior is always more important', isCorrect: false, explanation: 'Neither state is inherently more important. Which matters depends on the design goal. A design must satisfy its specified requirements.' },
          { id: 'tc-b', label: 'The design is incomplete \u2014 it must satisfy both the initial and final state requirements', isCorrect: true, explanation: 'Correct. A design must satisfy all specified requirements. Passing one state but failing another means the design does not fully meet its goals.' },
          { id: 'tc-c', label: 'The design has a broken component that should be replaced', isCorrect: false, explanation: 'The component may be working correctly but wrong for the job. Component choice or value selection may need to change to meet both requirements.' },
        ],
        explanation: 'A complete design must satisfy all specified requirements. Passing only the initial test or only the steady-state test is not sufficient.',
      },
    },
  ],
  challenges: [
    {
      id: 'challenge-1',
      prompt: 'A load requires a continuous steady current of 90mA. The circuit uses a 9V source and 100\u03a9 resistor. Which configuration achieves this steady-state goal?',
      type: 'choose',
      evaluationCriteria: { correctChoiceId: 'ch1-b' },
      hints: ['Which component passes DC freely at steady state?'],
      choices: [
        { id: 'ch1-a', label: 'Add a capacitor in series with the load \u2014 it provides high initial current that becomes the steady-state value', isCorrect: false, explanation: 'A capacitor blocks DC at steady state. It would produce high initial current but drop to zero \u2014 not 90mA steady state.' },
        { id: 'ch1-b', label: 'Add an inductor in series \u2014 at steady state it passes full current (V/R = 90mA)', isCorrect: true, explanation: 'Correct. An inductor at DC steady state is a short circuit. Current = V/R = 9/100 = 90mA. The transient (zero to 90mA) occurs before reaching this steady state.' },
        { id: 'ch1-c', label: 'Remove all reactive components \u2014 a pure resistor circuit gives steady 90mA immediately', isCorrect: false, explanation: 'This is technically correct for this specific case (and would also work), but the question asks about which reactive-component configuration achieves the steady-state goal. An inductor achieves it after the transient.' },
      ],
    },
    {
      id: 'challenge-2',
      prompt: 'A circuit uses an inductor in series with the load. The initial current is 0mA. The design requirement states "90mA steady-state current AND zero current right after switch-on." Does this design satisfy both requirements?',
      type: 'choose',
      evaluationCriteria: { correctChoiceId: 'ch2-a' },
      hints: ['Check each requirement separately: initial state and steady state.'],
      choices: [
        { id: 'ch2-a', label: 'Yes \u2014 an RL circuit produces zero current at t=0 and 90mA at steady state, satisfying both requirements', isCorrect: true, explanation: 'Correct. An inductor gives I(0) = 0 (satisfies zero initial current) and I(\u221e) = V/R = 90mA (satisfies steady-state requirement). Both requirements pass.' },
        { id: 'ch2-b', label: 'No \u2014 the initial current is not exactly zero, it starts at some small value', isCorrect: false, explanation: 'In the RL model, at t=0 the inductor acts as an open circuit and current is exactly zero. The requirement for zero initial current is satisfied.' },
        { id: 'ch2-c', label: 'No \u2014 an inductor cannot achieve 90mA at steady state', isCorrect: false, explanation: 'At DC steady state, an inductor is a short circuit. Current = V/R = 9/100 = 90mA. The steady-state requirement is satisfied.' },
      ],
    },
  ],
  theoryContent: [
    {
      title: 'Designing for Steady-State Response',
      content: 'Some designs prioritize the later steady-state condition. Use an inductor when steady-state requires maximum DC current (inductor passes DC freely). Use a capacitor when steady-state requires zero current (capacitor blocks DC). Always verify both initial and final states before accepting a design.',
    },
  ],
  sandboxUnlocks: [],
  availableActions: ['toggle-switch'],
  currentOverlayAvailable: true,
  showFormulaPanel: true,
  usesTimeControls: true,
  formulasShown: [
    {
      formula: '\u03c4 = L / R',
      symbols: [
        { symbol: '\u03c4', name: 'Time constant', unit: 's' },
        { symbol: 'L', name: 'Inductance', unit: 'H' },
        { symbol: 'R', name: 'Resistance', unit: '\u03a9' },
      ],
    },
  ],
  theoryPageAdditions: [
    {
      id: 'theory-ch6-steady-state-design',
      title: 'Designing for Steady-State Response',
      content: 'For steady-state maximum current, use an inductor (acts as short at DC steady state). For steady-state zero current, use a capacitor (acts as open at DC steady state). Always verify both initial and final behavior against the design requirements.',
      sourceLesson: 'lesson-ch6-5-2',
    },
  ],
  quizzesUnlocked: ['quiz-ch6-later-response-design-basics'],
};
