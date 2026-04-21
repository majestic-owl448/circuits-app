import type { LessonConfig } from '../../../../types/lesson.ts';
import { CHAPTER_6_METADATA, CH6_NODES } from '../../shared.ts';

export const lessonCh6_3_3: LessonConfig = {
  id: 'lesson-ch6-3-3',
  unitId: 'ch6-unit-3',
  title: 'Steady State in a Simple Inductor Circuit',
  description: 'Understand the long-term steady-state behavior of an inductor circuit and develop intuition for the RL time constant.',
  stageLabel: CHAPTER_6_METADATA.stageLabel,
  prerequisites: ['lesson-ch6-3-2'],
  conceptsIntroduced: [
    'inductor circuit steady state',
    'inductor conducts freely at DC steady state',
    'time constant intuition: larger L/R means slower settling',
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
      properties: { isClosed: true },
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
      text: 'The switch is already closed. Move the time slider all the way to the "Late" position. At steady state, the inductor has fully energized — current has reached its maximum value (V/R = 90mA) and the voltage across the inductor has fallen to zero.',
      highlights: ['ind-1'],
    },
    {
      id: 'step-2',
      text: 'At steady state, the inductor behaves like a short circuit — it passes DC current freely with no voltage drop. All source voltage appears across the resistor (V = IR). Unlike a capacitor, which blocks DC at steady state, an inductor allows it freely.',
      highlights: ['ind-1', 'res-1'],
    },
    {
      id: 'step-3',
      text: 'How quickly an inductor circuit reaches steady state depends on the time constant \u03c4 = L / R. A larger inductor or smaller resistor means a longer settling time. This is the RL parallel to the RC time constant you saw with capacitors.',
      theoryCheck: {
        question: 'In an inductor circuit at DC steady state, what is the voltage across the inductor?',
        choices: [
          { id: 'tc-a', label: 'Zero \u2014 a fully energized inductor passes DC freely with no voltage drop', isCorrect: true, explanation: 'Correct. At DC steady state, there is no change in current. Without a change in current, the inductor produces no back-voltage. It acts as a short circuit.' },
          { id: 'tc-b', label: 'Equal to the full source voltage \u2014 all voltage appears across the inductor', isCorrect: false, explanation: 'That describes the initial state (t=0), not steady state. At steady state, all source voltage is across the resistor, not the inductor.' },
          { id: 'tc-c', label: 'Half the source voltage \u2014 the inductor and resistor share it equally', isCorrect: false, explanation: 'At steady state, the inductor acts as a wire (zero resistance). It drops zero voltage. All voltage appears across the resistor.' },
        ],
        explanation: 'At DC steady state, a fully energized inductor acts as a short circuit — zero voltage, maximum current.',
      },
    },
  ],
  challenges: [
    {
      id: 'challenge-1',
      prompt: 'In a simple RL circuit at DC steady state (long after the switch closes), which statement is correct?',
      type: 'choose',
      evaluationCriteria: { correctChoiceId: 'ch1-c' },
      hints: ['Think about what passes DC freely at steady state \u2014 a wire or an open circuit?'],
      choices: [
        { id: 'ch1-a', label: 'Current through the resistor is zero and all voltage is across the inductor', isCorrect: false, explanation: 'That would describe a capacitor circuit at steady state (no current). In an RL circuit, current is at its maximum at steady state.' },
        { id: 'ch1-b', label: 'Current is still rising and has not yet reached its final value', isCorrect: false, explanation: 'At DC steady state (long after the switch closes), the transient is over and current has fully settled at V/R.' },
        { id: 'ch1-c', label: 'Current equals V/R and the inductor voltage is zero', isCorrect: true, explanation: 'Correct. At steady state, the inductor is a short circuit. Current = V/R = 9/100 = 90mA. Inductor voltage = 0.' },
      ],
    },
    {
      id: 'challenge-2',
      prompt: 'Two identical inductors are energized through different resistors: one through 50\u03a9 and one through 200\u03a9. Which settles to steady state faster?',
      type: 'choose',
      evaluationCriteria: { correctChoiceId: 'ch2-b' },
      hints: ['Larger L/R means longer settling time.'],
      choices: [
        { id: 'ch2-a', label: 'The circuit with 200\u03a9 \u2014 larger resistance means more driving force', isCorrect: false, explanation: 'Larger resistance gives a shorter time constant (\u03c4 = L/R), so it settles faster, not slower.' },
        { id: 'ch2-b', label: 'The circuit with 200\u03a9 \u2014 larger R means smaller \u03c4 = L/R and faster settling', isCorrect: true, explanation: 'Correct. \u03c4 = L/R. Larger R means smaller \u03c4, which means faster settling. 200\u03a9 gives a 4\u00d7 faster time constant than 50\u03a9.' },
        { id: 'ch2-c', label: 'Both settle at the same speed since the inductors are identical', isCorrect: false, explanation: 'The inductor value is the same, but the resistor controls how fast the time constant is. Different R means different \u03c4 = L/R and different settling times.' },
      ],
    },
  ],
  theoryContent: [
    {
      title: 'Steady-State Behavior of a Simple Inductor Circuit',
      content: 'At DC steady state, a fully energized inductor passes current freely with no voltage drop — it acts as a short circuit. Current equals V/R. The time to reach steady state is determined by the time constant \u03c4 = L / R.',
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
      id: 'theory-ch6-inductor-steady-state',
      title: 'Steady-State Behavior of a Simple Inductor Circuit',
      content: 'At DC steady state, a fully energized inductor acts as a short circuit \u2014 zero voltage, maximum current (I = V/R). Time to reach steady state follows \u03c4 = L/R.',
      sourceLesson: 'lesson-ch6-3-3',
    },
  ],
  quizzesUnlocked: ['quiz-ch6-inductor-steady-state-basics'],
};
