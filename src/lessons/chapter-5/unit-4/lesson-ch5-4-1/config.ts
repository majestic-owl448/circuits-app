import type { LessonConfig } from '../../../../types/lesson.ts';
import { CHAPTER_5_METADATA } from '../../shared.ts';

// 6V source + two resistive loads to compare heating:
// Load A (3Ω): P = 6²/3 = 12W → more heat
// Load B (6Ω): P = 6²/6 = 6W  → less heat
// Challenge: identify which dissipates more power

export const lessonCh5_4_1: LessonConfig = {
  id: 'lesson-ch5-4-1',
  unitId: 'ch5-unit-4',
  title: 'Heat as a Circuit Consequence',
  description: 'Understand that resistive elements dissipate power as heat and that higher power dissipation means more heating.',
  stageLabel: CHAPTER_5_METADATA.stageLabel,
  prerequisites: ['lesson-ch5-3-3'],
  conceptsIntroduced: [
    'resistive elements dissipate energy as heat',
    'heating as a design constraint, not just a side effect',
    'power dissipation depends on current and resistance',
  ],
  initialNodes: [
    { id: 'n1', position: { x: 100, y: 150 } },
    { id: 'n2', position: { x: 300, y: 150 } },
    { id: 'n3', position: { x: 100, y: 350 } },
    { id: 'n4', position: { x: 300, y: 350 } },
  ],
  initialCircuit: [
    {
      id: 'battery-1',
      type: 'battery',
      nodeA: 'n1',
      nodeB: 'n3',
      properties: { voltage: 6 },
      name: 'Battery (6V)',
      position: { x: 100, y: 250 },
      rotation: 0,
    },
    {
      id: 'bulb-1',
      type: 'bulb',
      nodeA: 'n1',
      nodeB: 'n2',
      properties: { resistance: 3 },
      name: 'Bulb (3\u03a9)',
      position: { x: 200, y: 150 },
      rotation: 0,
    },
    {
      id: 'switch-1',
      type: 'switch',
      nodeA: 'n2',
      nodeB: 'n4',
      properties: { isClosed: false },
      name: 'Switch',
      position: { x: 300, y: 250 },
      rotation: 0,
    },
    {
      id: 'wire-1',
      type: 'wire',
      nodeA: 'n3',
      nodeB: 'n4',
      properties: {},
      name: 'Wire',
      position: { x: 200, y: 350 },
      rotation: 0,
    },
  ],
  steps: [
    {
      id: 'step-1',
      text: 'Any resistor carrying current dissipates power as heat. The power formula P\u00a0=\u00a0V\u00a0\u00d7\u00a0I also equals P\u00a0=\u00a0I\u00b2\u00a0\u00d7\u00a0R or P\u00a0=\u00a0V\u00b2\u00a0/\u00a0R. This circuit uses a 6V source and a 3\u03a9 bulb.',
      highlights: ['battery-1', 'bulb-1'],
    },
    {
      id: 'step-2',
      text: 'Close the switch. I\u00a0=\u00a06\u00a0/\u00a03\u00a0=\u00a02A. Power in the bulb: P\u00a0=\u00a0I\u00b2\u00a0\u00d7\u00a0R\u00a0=\u00a04\u00a0\u00d7\u00a03\u00a0=\u00a012W. Alternatively P\u00a0=\u00a0V\u00b2\u00a0/\u00a0R\u00a0=\u00a036\u00a0/\u00a03\u00a0=\u00a012W. All 12W is released as heat and light.',
      requiredAction: { type: 'toggle-switch', componentId: 'switch-1', targetState: true },
      highlights: ['bulb-1'],
    },
    {
      id: 'step-3',
      text: 'Now consider a 6\u03a9 bulb instead. P\u00a0=\u00a0V\u00b2\u00a0/\u00a0R\u00a0=\u00a036\u00a0/\u00a06\u00a0=\u00a06W \u2014 half as much heat and light. Lower resistance draws more current and dissipates more power from the same source. This is why choosing the right resistance matters for thermal reasons, not just for brightness.',
      theoryCheck: {
        question: 'Two resistors are connected to the same 6V source: a 3\u03a9 resistor and a 6\u03a9 resistor (not at the same time). Which one dissipates more power as heat?',
        choices: [
          {
            id: 'tc-a',
            label: 'The 6\u03a9 resistor, because higher resistance means more heating',
            isCorrect: false,
            explanation: 'Higher resistance reduces current more than it increases power per unit current. P\u00a0=\u00a0V\u00b2/R: with fixed voltage, higher resistance means lower power.',
          },
          {
            id: 'tc-b',
            label: 'The 3\u03a9 resistor, because P\u00a0=\u00a0V\u00b2/R and lower resistance gives higher power',
            isCorrect: true,
            explanation: 'Correct! P(3\u03a9)\u00a0=\u00a036/3\u00a0=\u00a012W. P(6\u03a9)\u00a0=\u00a036/6\u00a0=\u00a06W. With a fixed source voltage, lower resistance gives higher power.',
          },
          {
            id: 'tc-c',
            label: 'Both dissipate the same power because they use the same source voltage',
            isCorrect: false,
            explanation: 'Same source voltage does not mean same power. Power depends on the resistance: P\u00a0=\u00a0V\u00b2/R. Different R values give different P values.',
          },
        ],
        explanation: 'With a fixed supply voltage, P\u00a0=\u00a0V\u00b2/R shows that lower resistance means higher power dissipation.',
      },
    },
  ],
  challenges: [
    {
      id: 'challenge-1',
      prompt: 'A 6V source drives one component at a time. Component A is 3\u03a9; Component B is 6\u03a9. Which component dissipates more power as heat?',
      type: 'choose',
      evaluationCriteria: { correctChoiceId: 'ch1-a' },
      hints: [
        'Use P\u00a0=\u00a0V\u00b2\u00a0/\u00a0R for each component.',
        'Compare the results: which is larger?',
      ],
      choices: [
        {
          id: 'ch1-a',
          label: 'Component A (3\u03a9) \u2014 P\u00a0=\u00a036\u00a0/\u00a03\u00a0=\u00a012W',
          isCorrect: true,
          explanation: 'Correct! P_A\u00a0=\u00a012W, P_B\u00a0=\u00a06W. Lower resistance means higher current and more power dissipated from the same voltage source.',
        },
        {
          id: 'ch1-b',
          label: 'Component B (6\u03a9) \u2014 higher resistance stores more heat',
          isCorrect: false,
          explanation: 'Resistance does not "store" heat. Higher resistance reduces current more than it increases the per-unit power formula. P\u00a0=\u00a0V\u00b2/R decreases as R increases.',
        },
        {
          id: 'ch1-c',
          label: 'Both dissipate the same power because both use the same 6V source',
          isCorrect: false,
          explanation: 'Same voltage does not mean same power. P\u00a0=\u00a0V\u00b2/R gives 12W for 3\u03a9 and 6W for 6\u03a9.',
        },
      ],
    },
  ],
  theoryContent: [
    {
      title: 'Heating in Resistive Loads',
      content: 'Every resistive component dissipates electrical energy as heat when current flows through it. The power dissipated is P\u00a0=\u00a0I\u00b2\u00a0\u00d7\u00a0R\u00a0=\u00a0V\u00b2\u00a0/\u00a0R\u00a0=\u00a0V\u00a0\u00d7\u00a0I. With a fixed source voltage, lower resistance means more current and more heat.',
    },
    {
      title: 'Heat as a Design Constraint',
      content: 'Heating is not just a side effect \u2014 it can damage components or require cooling. Designing for power dissipation means choosing component values that keep heating within acceptable limits while still meeting the circuit\u2019s functional goals.',
    },
  ],
  sandboxUnlocks: [],
  availableActions: ['toggle-switch'],
  currentOverlayAvailable: true,
  showFormulaPanel: true,
  formulasShown: [
    {
      formula: 'P = V\u00b2 \u00f7 R = I\u00b2 \u00d7 R = V \u00d7 I',
      symbols: [
        { symbol: 'P', name: 'Power', unit: 'W' },
        { symbol: 'V', name: 'Voltage', unit: 'V' },
        { symbol: 'I', name: 'Current', unit: 'A' },
        { symbol: 'R', name: 'Resistance', unit: '\u03a9' },
      ],
    },
  ],
  theoryPageAdditions: [
    {
      id: 'theory-heating-resistive-loads',
      title: 'Heating in Resistive Loads',
      content: 'Every resistive component dissipates power as heat when carrying current. P\u00a0=\u00a0V\u00b2/R\u00a0=\u00a0I\u00b2R\u00a0=\u00a0VI. With a fixed supply voltage, lower resistance dissipates more power. This makes heating a design constraint alongside function.',
      sourceLesson: 'lesson-ch5-4-1',
    },
  ],
  quizzesUnlocked: ['quiz-ch5-heating-basics'],
};
