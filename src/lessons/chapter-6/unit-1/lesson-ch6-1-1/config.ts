import type { LessonConfig } from '../../../../types/lesson.ts';
import { CHAPTER_6_METADATA, CH6_NODES } from '../../shared.ts';

export const lessonCh6_1_1: LessonConfig = {
  id: 'lesson-ch6-1-1',
  unitId: 'ch6-unit-1',
  title: 'Not Every Circuit Settles Instantly',
  description: 'Discover that some circuits have transitional behavior between switch-on and steady state.',
  stageLabel: CHAPTER_6_METADATA.stageLabel,
  prerequisites: ['chapter-5-complete'],
  conceptsIntroduced: [
    'changing circuit behavior over time',
    'transient versus steady state',
    'response after a switch is toggled',
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
      id: 'res-1',
      type: 'resistor',
      nodeA: 'n1',
      nodeB: 'n2',
      properties: { resistance: 100 },
      name: 'Resistor',
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
      id: 'wire-1',
      type: 'wire',
      nodeA: 'n3',
      nodeB: 'n4',
      properties: { wireResistance: 0 },
      name: 'Wire',
      position: { x: 325, y: 350 },
      rotation: 0,
    },
  ],
  steps: [
    {
      id: 'step-1',
      text: 'So far every circuit you have studied reached its final behavior the moment it was switched on. Current, voltage, and brightness all appeared at once and stayed constant. This is called "steady state."',
    },
    {
      id: 'step-2',
      text: 'This resistive circuit behaves that way too. Close the switch and observe: the values appear instantly and remain constant. The circuit has no transition — it is always in steady state.',
      requiredAction: { type: 'toggle-switch', componentId: 'sw-1', targetState: true },
      highlights: ['sw-1'],
    },
    {
      id: 'step-3',
      text: 'Starting in Unit 2, we will add components whose behavior unfolds over time after a switch is closed. The values will change before settling into a final steady state. This transitional period is called a "transient."',
      theoryCheck: {
        question: 'What is a "transient" in a circuit?',
        choices: [
          { id: 'tc-a', label: 'A brief period where circuit values change before reaching steady state', isCorrect: true, explanation: 'Correct. A transient is the in-between phase where values are still changing.' },
          { id: 'tc-b', label: 'A circuit that never reaches a steady value', isCorrect: false, explanation: 'Transient circuits do eventually settle. The transient is just the temporary changing phase.' },
          { id: 'tc-c', label: 'A broken circuit with inconsistent behavior', isCorrect: false, explanation: 'Transient behavior is normal and predictable, not a sign of failure.' },
        ],
        explanation: 'A transient is the period of changing behavior between the initial state and the final steady state.',
      },
    },
  ],
  challenges: [
    {
      id: 'challenge-1',
      prompt: 'A purely resistive circuit is switched on. What happens to the current?',
      type: 'choose',
      evaluationCriteria: { correctChoiceId: 'ch1-a' },
      hints: ['Think about what you just observed when you closed the switch on this circuit.'],
      choices: [
        { id: 'ch1-a', label: 'It jumps immediately to its steady-state value and stays constant', isCorrect: true, explanation: 'Correct. Resistive circuits have no energy-storage component, so they respond instantly.' },
        { id: 'ch1-b', label: 'It slowly climbs from zero before reaching its final value', isCorrect: false, explanation: 'Gradual buildup is characteristic of circuits with capacitors or inductors. A pure resistive circuit responds instantly.' },
        { id: 'ch1-c', label: 'It briefly overshoots before settling back down', isCorrect: false, explanation: 'Overshoot requires energy-storage elements. A purely resistive circuit goes straight to steady state.' },
      ],
    },
    {
      id: 'challenge-2',
      prompt: 'Which term describes the final, non-changing condition of a circuit after all transitions have ended?',
      type: 'choose',
      evaluationCriteria: { correctChoiceId: 'ch2-b' },
      hints: ['This was introduced in the lesson steps.'],
      choices: [
        { id: 'ch2-a', label: 'Transient state', isCorrect: false, explanation: 'The transient is the changing phase, not the final stable condition.' },
        { id: 'ch2-b', label: 'Steady state', isCorrect: true, explanation: 'Correct. Steady state is the condition where all values have settled and are no longer changing.' },
        { id: 'ch2-c', label: 'Peak state', isCorrect: false, explanation: '"Peak state" is not a standard circuit term. The stable final condition is called steady state.' },
      ],
    },
  ],
  theoryContent: [
    {
      title: 'Transient Behavior',
      content: 'When a circuit is switched on or experiences a sudden change, some circuits go through a transient phase where voltages and currents change before reaching their final values.',
    },
    {
      title: 'Steady State',
      content: 'Steady state is the condition where all circuit values have settled and are no longer changing. Purely resistive circuits reach steady state instantly.',
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
      id: 'theory-ch6-transient',
      title: 'Transient Behavior',
      content: 'A transient is the period of changing circuit behavior between the moment a switch is closed and the final steady state. Circuits with capacitors or inductors exhibit transient behavior.',
      sourceLesson: 'lesson-ch6-1-1',
    },
    {
      id: 'theory-ch6-steady-state',
      title: 'Steady State',
      content: 'Steady state is when all circuit values have settled and are no longer changing. Purely resistive circuits reach steady state instantly. Circuits with reactive components take time.',
      sourceLesson: 'lesson-ch6-1-1',
    },
  ],
  quizzesUnlocked: ['quiz-ch6-transient-versus-steady-state-basics'],
};
