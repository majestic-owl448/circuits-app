import type { LessonConfig } from '../../../../types/lesson.ts';
import { CHAPTER_5_METADATA } from '../../shared.ts';

export const lessonCh5_1_1: LessonConfig = {
  id: 'lesson-ch5-1-1',
  unitId: 'ch5-unit-1',
  title: 'Why Realistic Behavior Matters',
  description: 'Understand that ideal models simplify reality and that the simulation now introduces realistic non-ideal effects.',
  stageLabel: CHAPTER_5_METADATA.stageLabel,
  prerequisites: ['chapter-4-complete'],
  conceptsIntroduced: [
    'ideal models simplify',
    'real behavior can differ from ideal predictions',
    'non-ideal modeling introduction',
  ],
  initialNodes: [
    { id: 'n1', position: { x: 100, y: 150 } },
    { id: 'n2', position: { x: 300, y: 150 } },
    { id: 'n3', position: { x: 100, y: 350 } },
    { id: 'n4', position: { x: 300, y: 350 } },
  ],
  initialCircuit: [
    {
      id: 'battery-ideal',
      type: 'battery',
      nodeA: 'n1',
      nodeB: 'n3',
      properties: { voltage: 12 },
      name: 'Ideal Battery',
      position: { x: 100, y: 250 },
      rotation: 0,
    },
    {
      id: 'bulb-ideal',
      type: 'bulb',
      nodeA: 'n1',
      nodeB: 'n2',
      properties: { resistance: 6 },
      name: 'Ideal Load',
      position: { x: 200, y: 150 },
      rotation: 0,
    },
    {
      id: 'switch-ideal',
      type: 'switch',
      nodeA: 'n2',
      nodeB: 'n4',
      properties: { isClosed: false },
      name: 'Ideal Switch',
      position: { x: 300, y: 250 },
      rotation: 0,
    },
    {
      id: 'wire-ideal',
      type: 'wire',
      nodeA: 'n3',
      nodeB: 'n4',
      properties: {},
      name: 'Ideal Wire',
      position: { x: 200, y: 350 },
      rotation: 0,
    },
  ],
  steps: [
    {
      id: 'step-1',
      text: 'Up until now, we have treated components like batteries and wires as "ideal." This means they perform exactly as their labels say, without any losses or hidden resistance.',
      highlights: ['battery-ideal'],
    },
    {
      id: 'step-2',
      text: 'In this chapter, we introduce "non-ideal" behavior. Real-world components have internal losses, heat up, and can even fail if pushed too hard. Understanding these effects helps bridge the gap between textbook theory and real circuits.',
    },
    {
      id: 'step-3',
      text: 'Close the switch on this "ideal" circuit and observe the values. With a 12V battery and a 6Ω bulb, we expect exactly 2A of current.',
      requiredAction: { type: 'toggle-switch', componentId: 'switch-ideal', targetState: true },
      highlights: ['switch-ideal'],
    },
    {
      id: 'step-4',
      text: 'Perfect! 2A exactly. Now, let\'s look at a "realistic" version of the same circuit where the battery has internal resistance.',
      theoryCheck: {
        question: 'Why do we use ideal models if they aren\'t perfectly realistic?',
        choices: [
          { id: 'tc-a', label: 'They are easier to calculate and provide a good starting point', isCorrect: true, explanation: 'Correct! Ideal models simplify the core concepts so you can learn the fundamentals first.' },
          { id: 'tc-b', label: 'Real components actually are ideal most of the time', isCorrect: false, explanation: 'All real components have some non-ideal effects, though they are often small.' },
          { id: 'tc-c', label: 'Ideal models are required by law in circuit design', isCorrect: false, explanation: 'Ideal models are a tool, not a legal requirement!' },
        ],
        explanation: 'Ideal models are useful simplifications that help us understand the main behavior of a circuit without getting bogged down in every tiny detail.',
      },
    },
  ],
  challenges: [
    {
      id: 'challenge-1',
      prompt: 'If a "real" battery has internal resistance, how will the current in a simple circuit compare to an "ideal" battery with the same voltage label?',
      type: 'choose',
      evaluationCriteria: { correctChoiceId: 'ch1-b' },
      hints: ['Internal resistance adds more total resistance to the circuit loop.'],
      choices: [
        { id: 'ch1-a', label: 'The real battery will provide MORE current', isCorrect: false, explanation: 'Extra resistance reduces current, it doesn\'t increase it.' },
        { id: 'ch1-b', label: 'The real battery will provide LESS current', isCorrect: true, explanation: 'Correct! The internal resistance adds to the total resistance, which reduces the current (I = V / R_total).' },
        { id: 'ch1-c', label: 'The current will be exactly the same', isCorrect: false, explanation: 'Only if the internal resistance was zero (ideal) would the current be the same.' },
      ],
    },
  ],
  theoryContent: [
    {
      title: 'Ideal versus Non-Ideal Behavior',
      content: 'Ideal models assume components have no hidden losses (like internal resistance). Non-ideal models include these effects to simulate more realistic behavior.',
    },
    {
      title: 'Why Simplified Models Matter',
      content: 'Even though they aren\'t perfectly realistic, ideal models are powerful for predicting the main behavior of a circuit and are much easier to use for initial design.',
    },
  ],
  sandboxUnlocks: [],
  availableActions: ['toggle-switch'],
  currentOverlayAvailable: true,
  showFormulaPanel: true,
  formulasShown: [
    {
      formula: 'V = I \u00d7 R',
      symbols: [
        { symbol: 'V', name: 'Voltage', unit: 'V' },
        { symbol: 'I', name: 'Current', unit: 'A' },
        { symbol: 'R', name: 'Resistance', unit: '\u03a9' },
      ],
    },
  ],
  theoryPageAdditions: [
    {
      id: 'theory-ideal-vs-non-ideal',
      title: 'Ideal versus Non-Ideal Behavior',
      content: 'Ideal models assume components have no hidden losses (like internal resistance). Non-ideal models include these effects to simulate more realistic behavior.',
      sourceLesson: 'lesson-ch5-1-1',
    },
  ],
  quizzesUnlocked: ['quiz-ch5-ideal-non-ideal-basics'],
};
