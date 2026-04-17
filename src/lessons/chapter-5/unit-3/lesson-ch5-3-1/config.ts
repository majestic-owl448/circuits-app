import type { LessonConfig } from '../../../../types/lesson.ts';
import { CHAPTER_5_METADATA } from '../../shared.ts';

// Ideal wire (wireResistance: 0): I = 12/4 = 3.0A, V_bulb = 12V
// Non-ideal wire (wireResistance: 1): I = 12/(4+1) = 2.4A, V_bulb = 9.6V

export const lessonCh5_3_1: LessonConfig = {
  id: 'lesson-ch5-3-1',
  unitId: 'ch5-unit-3',
  title: 'Wires Are Not Always Perfect',
  description: 'Understand that wires can have resistance and that wire resistance can affect circuit behavior.',
  stageLabel: CHAPTER_5_METADATA.stageLabel,
  prerequisites: ['lesson-ch5-2-4'],
  conceptsIntroduced: [
    'wire resistance',
    'wire effects depend on context and length',
    'ideal wires are a useful simplification but not always sufficient',
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
      properties: { voltage: 12 },
      name: 'Battery',
      position: { x: 100, y: 250 },
      rotation: 0,
    },
    {
      id: 'bulb-1',
      type: 'bulb',
      nodeA: 'n1',
      nodeB: 'n2',
      properties: { resistance: 4 },
      name: 'Bulb',
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
      properties: { wireResistance: 1 },
      name: 'Wire (1\u03a9)',
      position: { x: 200, y: 350 },
      rotation: 0,
    },
  ],
  steps: [
    {
      id: 'step-1',
      text: 'Until now, every wire in the simulation has been treated as ideal: zero resistance, perfect conductor. In this circuit, the return wire has 1\u03a9 of resistance. In real systems, wire resistance depends on the wire\u2019s material, length, and thickness.',
      highlights: ['wire-1'],
    },
    {
      id: 'step-2',
      text: 'Close the switch. With 1\u03a9 of wire resistance added to the 4\u03a9 bulb, the total loop resistance is 5\u03a9. Current drops from the ideal 3.0A to 2.4A, and the bulb receives less power.',
      requiredAction: { type: 'toggle-switch', componentId: 'switch-1', targetState: true },
      highlights: ['wire-1', 'bulb-1'],
    },
    {
      id: 'step-3',
      text: 'Wire resistance matters most when it is significant compared to the load. A 1\u03a9 wire in series with a 4\u03a9 bulb causes a 20% increase in total resistance. In a circuit with a 100\u03a9 load, the same wire would change total resistance by only 1% \u2014 often negligible.',
      theoryCheck: {
        question: 'When does wire resistance have the largest effect on circuit behavior?',
        choices: [
          {
            id: 'tc-a',
            label: 'When the wire resistance is large relative to the load resistance',
            isCorrect: true,
            explanation: 'Correct! If R_wire is comparable to R_load, it significantly changes total resistance and current. If R_wire is much smaller, its effect is negligible.',
          },
          {
            id: 'tc-b',
            label: 'Always, regardless of load resistance',
            isCorrect: false,
            explanation: 'Wire resistance only matters significantly when it is comparable to or larger than the load resistance. A 1\u03a9 wire with a 1000\u03a9 load has almost no effect.',
          },
          {
            id: 'tc-c',
            label: 'Only when the wire is longer than one meter',
            isCorrect: false,
            explanation: 'Length is one factor that affects wire resistance, but what matters for circuit behavior is the ratio of wire resistance to load resistance, not length alone.',
          },
        ],
        explanation: 'Wire resistance is part of the total loop resistance. Its impact depends on how large it is compared to the rest of the circuit.',
      },
    },
  ],
  challenges: [
    {
      id: 'challenge-1',
      prompt: 'A circuit has a 12V ideal battery, a 4\u03a9 bulb, and a wire with 1\u03a9 resistance. Which part of the circuit contributes the extra resistance compared to an ideal-wire version?',
      type: 'choose',
      evaluationCriteria: { correctChoiceId: 'ch1-b' },
      hints: [
        'In the ideal-wire version, only the bulb contributes resistance.',
        'In this version, total resistance is 5\u03a9 instead of 4\u03a9. Where did the extra 1\u03a9 come from?',
      ],
      choices: [
        {
          id: 'ch1-a',
          label: 'The battery \u2014 it has developed internal resistance',
          isCorrect: false,
          explanation: 'The battery in this lesson is ideal (no internal resistance). The extra resistance comes from the wire, not the source.',
        },
        {
          id: 'ch1-b',
          label: 'The wire \u2014 it has 1\u03a9 of resistance in series with the bulb',
          isCorrect: true,
          explanation: 'Correct! The wire\u2019s 1\u03a9 adds to the bulb\u2019s 4\u03a9, giving 5\u03a9 total. This reduces current from 3.0A to 2.4A.',
        },
        {
          id: 'ch1-c',
          label: 'The switch \u2014 its contact resistance adds to the total',
          isCorrect: false,
          explanation: 'The switch in this model is ideal when closed. The labeled wire resistance is the specified source of extra resistance here.',
        },
      ],
    },
  ],
  theoryContent: [
    {
      title: 'Wire Resistance',
      content: 'Real wires are not perfect conductors. Their resistance depends on the material, cross-sectional area, and length. In most short-wire, high-load-resistance circuits, wire resistance is negligible. In long-run or low-resistance circuits, it can matter significantly.',
    },
    {
      title: 'When Wire Resistance Matters',
      content: 'Wire resistance has a noticeable effect when it is comparable to the load resistance. A 1\u03a9 wire with a 4\u03a9 load changes total resistance by 25%. The same wire with a 1000\u03a9 load changes it by only 0.1%.',
    },
  ],
  sandboxUnlocks: [],
  availableActions: ['toggle-switch'],
  currentOverlayAvailable: true,
  showFormulaPanel: true,
  formulasShown: [
    {
      formula: 'R\u209c\u2092\u209c\u2090\u2097 = R\u2097\u2092\u2090\u2091 + R\u1d61\u1d62\u1d63\u2091',
      symbols: [
        { symbol: 'R\u209c\u2092\u209c\u2090\u2097', name: 'Total resistance', unit: '\u03a9' },
        { symbol: 'R\u2097\u2092\u2090\u2091', name: 'Load resistance', unit: '\u03a9' },
        { symbol: 'R\u1d61\u1d62\u1d63\u2091', name: 'Wire resistance', unit: '\u03a9' },
      ],
    },
  ],
  theoryPageAdditions: [
    {
      id: 'theory-wire-resistance',
      title: 'Wire Resistance',
      content: 'Real wires have resistance that depends on material, length, and thickness. In simulation, wire resistance is modeled as a series resistance in the circuit path. Its effect on behavior depends on how large it is relative to the other resistances in the loop.',
      sourceLesson: 'lesson-ch5-3-1',
    },
  ],
  quizzesUnlocked: ['quiz-ch5-wire-resistance-basics'],
};
