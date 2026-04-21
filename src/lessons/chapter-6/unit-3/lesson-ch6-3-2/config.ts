import type { LessonConfig } from '../../../../types/lesson.ts';
import { CHAPTER_6_METADATA, CH6_NODES } from '../../shared.ts';

export const lessonCh6_3_2: LessonConfig = {
  id: 'lesson-ch6-3-2',
  unitId: 'ch6-unit-3',
  title: 'Current Change in an Inductor Circuit',
  description: 'Observe that current in a simple inductor circuit rises gradually after the switch closes, in contrast to a purely resistive circuit.',
  stageLabel: CHAPTER_6_METADATA.stageLabel,
  prerequisites: ['lesson-ch6-3-1'],
  conceptsIntroduced: [
    'time-dependent current behavior in an inductor circuit',
    'initial current is zero in an RL circuit',
    'current rises toward its final value over time',
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
      text: 'When the switch is open, no current flows. The inductor is not storing energy. This is the initial state before switching.',
      highlights: ['ind-1', 'sw-1'],
    },
    {
      id: 'step-2',
      text: 'Close the switch. Right at the moment of closing, the inductor blocks current — it acts like an open circuit. No current flows yet. Then, as the inductor builds up its magnetic field, current gradually rises.',
      requiredAction: { type: 'toggle-switch', componentId: 'sw-1', targetState: true },
      highlights: ['sw-1', 'ind-1', 'res-1'],
    },
    {
      id: 'step-3',
      text: 'Use the time slider to scrub through the event. Watch the current line rise in the timeline panel while the inductor voltage falls. At the "Late" checkpoint the inductor is nearly at steady state and current is approaching its maximum value (V/R = 90mA).',
      theoryCheck: {
        question: 'During inductor energization, what happens to the current over time?',
        choices: [
          { id: 'tc-a', label: 'Current starts at zero and rises toward its maximum value as the inductor builds up', isCorrect: true, explanation: 'Correct. At t=0, the inductor opposes current (acts as open circuit). Current then rises gradually toward I_final = V/R as the inductor builds its magnetic field.' },
          { id: 'tc-b', label: 'Current starts at maximum and falls to zero, like a charging capacitor', isCorrect: false, explanation: 'That describes RC charging (current starts high, falls to zero). For RL, it is the opposite: current starts at zero and rises to maximum.' },
          { id: 'tc-c', label: 'Current stays constant throughout', isCorrect: false, explanation: 'Current in an RL circuit is not constant during the transient phase. It rises from zero to its final value.' },
        ],
        explanation: 'In RL energization, current starts at zero (inductor acts as open circuit) and rises exponentially toward V/R as the inductor builds its magnetic field.',
      },
    },
  ],
  challenges: [
    {
      id: 'challenge-1',
      prompt: 'In an RL circuit, right after the switch closes, how does the current compare to the current after a long time?',
      type: 'choose',
      evaluationCriteria: { correctChoiceId: 'ch1-b' },
      hints: ['Think about what the inductor looks like at the very first instant versus after it is fully energized.'],
      choices: [
        { id: 'ch1-a', label: 'Current is higher right after closing, lower (near zero) after a long time', isCorrect: false, explanation: 'That describes RC charging. For RL, current starts at zero (inductor blocks it) and rises to its maximum over time.' },
        { id: 'ch1-b', label: 'Current is lower (near zero) right after closing, higher after a long time', isCorrect: true, explanation: 'Correct. Initially the inductor acts as an open circuit (zero current). Once fully energized, it acts as a wire, allowing maximum current I = V/R.' },
        { id: 'ch1-c', label: 'Current is the same right after closing and after a long time', isCorrect: false, explanation: 'Current changes significantly during RL energization. It starts at zero and rises to V/R.' },
      ],
    },
    {
      id: 'challenge-2',
      prompt: 'What is the current approaching after a long time in this RL circuit (9V source, 100\u03a9 resistor)?',
      type: 'choose',
      evaluationCriteria: { correctChoiceId: 'ch2-b' },
      hints: ['At steady state, the inductor behaves like a wire. What determines the current then?'],
      choices: [
        { id: 'ch2-a', label: 'Zero — the inductor permanently blocks current', isCorrect: false, explanation: 'The inductor only blocks current during the transient. At steady state it acts as a short circuit and current reaches its maximum.' },
        { id: 'ch2-b', label: '90mA — the full V/R value once the inductor reaches steady state', isCorrect: true, explanation: 'Correct. At steady state, the inductor is a wire. Current = V/R = 9/100 = 90mA.' },
        { id: 'ch2-c', label: 'Half the V/R value — the inductor always keeps some back-voltage', isCorrect: false, explanation: 'At true DC steady state, a fully energized inductor has zero voltage across it. All source voltage drives current through the resistor.' },
      ],
    },
  ],
  theoryContent: [
    {
      title: 'Inductor Current Behavior in the Simplified Model',
      content: 'When an inductor energizes through a resistor, current starts at zero and rises exponentially toward V/R. The inductor voltage starts at the full source voltage and falls toward zero. Both follow exponential curves — opposite in direction to RC charging.',
    },
  ],
  sandboxUnlocks: [],
  availableActions: ['toggle-switch'],
  currentOverlayAvailable: true,
  showFormulaPanel: true,
  usesTimeControls: true,
  formulasShown: [],
  theoryPageAdditions: [
    {
      id: 'theory-ch6-inductor-current',
      title: 'Inductor Current Behavior in the Simplified Model',
      content: 'During RL energization, current starts at zero and rises exponentially toward I_f = V/R. Inductor voltage starts at the source voltage and falls toward zero, following 1 \u2212 e^(\u2212t/\u03c4), where \u03c4 = L/R.',
      sourceLesson: 'lesson-ch6-3-2',
    },
  ],
  quizzesUnlocked: ['quiz-ch6-inductor-current-basics'],
};
