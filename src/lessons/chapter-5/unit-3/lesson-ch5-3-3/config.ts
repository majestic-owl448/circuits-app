import type { LessonConfig } from '../../../../types/lesson.ts';
import { CHAPTER_5_METADATA } from '../../shared.ts';

// 12V ideal battery + 1.5Ω wire + 3Ω bulb (target: ≥7.5V across bulb)
// I = 12 / (3+1.5) = 12/4.5 ≈ 2.67A
// V_bulb = 2.67 × 3 = 8.0V  (above 7.5V — actually passes!)
//
// Wait, let me recalculate to ensure a "failing" circuit:
// Use 12V + 1.5Ω wire + 2Ω bulb, target ≥7.5V
// I = 12/(2+1.5) = 12/3.5 ≈ 3.43A, V_bulb = 3.43×2 ≈ 6.86V  < 7.5V ✗
//
// The challenge asks: is the main limitation the source, the wire path, or the load choice?
// Wire path: 1.5Ω wire dropping 3.43×1.5 ≈ 5.14V — that's 43% of supply lost to wire.
// Answer: wire path is the main limitation.

export const lessonCh5_3_3: LessonConfig = {
  id: 'lesson-ch5-3-3',
  unitId: 'ch5-unit-3',
  title: 'Design Around Wire Losses',
  description: 'Identify and reason about wire resistance as a design constraint when the wire path is the main limiting factor.',
  stageLabel: CHAPTER_5_METADATA.stageLabel,
  prerequisites: ['lesson-ch5-3-2'],
  conceptsIntroduced: [
    'the wire path as a design problem',
    'identifying the main limiting factor in a circuit',
    'multiple variables can constrain design outcomes',
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
      name: 'Battery (12V)',
      position: { x: 100, y: 250 },
      rotation: 0,
    },
    {
      id: 'bulb-1',
      type: 'bulb',
      nodeA: 'n1',
      nodeB: 'n2',
      properties: { resistance: 2 },
      name: 'Bulb (2\u03a9)',
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
      properties: { wireResistance: 1.5 },
      name: 'Wire (1.5\u03a9)',
      position: { x: 200, y: 350 },
      rotation: 0,
    },
  ],
  steps: [
    {
      id: 'step-1',
      text: 'This circuit has a 12V battery, a 2\u03a9 bulb, and a wire with 1.5\u03a9 resistance. The bulb requires at least 7.5V across it to light up acceptably. Let\u2019s see if this design meets that target.',
      highlights: ['bulb-1', 'wire-1'],
    },
    {
      id: 'step-2',
      text: 'Close the switch. I\u00a0=\u00a012\u00a0/\u00a03.5\u00a0\u2248\u00a03.43A. V_bulb\u00a0=\u00a03.43\u00a0\u00d7\u00a02\u00a0\u2248\u00a06.86V \u2014 below the 7.5V target. The wire claims 3.43\u00a0\u00d7\u00a01.5\u00a0\u2248\u00a05.14V of the supply. Over 40% of the available voltage is lost in the wire.',
      requiredAction: { type: 'toggle-switch', componentId: 'switch-1', targetState: true },
      highlights: ['wire-1', 'bulb-1'],
    },
    {
      id: 'step-3',
      text: 'To fix this, you have three options: increase the source voltage, reduce the wire resistance, or use a higher-resistance bulb (which draws less current, so the wire loses less). The key insight is that the wire path is the main limiting factor here \u2014 it consumes the majority of the voltage budget.',
      theoryCheck: {
        question: 'In the circuit above, the wire uses 5.14V of the 12V supply while the bulb only receives 6.86V. What is the main limiting factor preventing the bulb from meeting its 7.5V target?',
        choices: [
          {
            id: 'tc-a',
            label: 'The source voltage is too low',
            isCorrect: false,
            explanation: 'The source provides 12V, which should be sufficient for a 7.5V target load. The problem is not the source level but how much is lost in the wire.',
          },
          {
            id: 'tc-b',
            label: 'The wire resistance is too high relative to the load, consuming too much of the supply voltage',
            isCorrect: true,
            explanation: 'Correct! R_wire\u00a0=\u00a01.5\u03a9 vs R_load\u00a0=\u00a02\u03a9. The wire claims 43% of total voltage. Reducing wire resistance or increasing load resistance would shift more voltage to the bulb.',
          },
          {
            id: 'tc-c',
            label: 'The bulb resistance is too high for the available source',
            isCorrect: false,
            explanation: 'Higher bulb resistance would actually help here \u2014 it would draw less current, reducing the wire drop and leaving more voltage for the bulb.',
          },
        ],
        explanation: 'When wire resistance is comparable to load resistance, it can become the main limiter. The design goal is to keep wire resistance small relative to the load to preserve the voltage delivered.',
      },
    },
  ],
  challenges: [
    {
      id: 'challenge-1',
      prompt: 'A 12V source drives a 2\u03a9 bulb through a 1.5\u03a9 wire. The bulb receives only 6.86V, falling short of the 7.5V target. What is the main limiting factor in this design?',
      type: 'choose',
      evaluationCriteria: { correctChoiceId: 'ch1-b' },
      hints: [
        'Calculate V_wire\u00a0=\u00a0I\u00a0\u00d7\u00a0R_wire and V_bulb\u00a0=\u00a0I\u00a0\u00d7\u00a0R_bulb.',
        'Which segment consumes the larger fraction of the 12V supply?',
      ],
      choices: [
        {
          id: 'ch1-a',
          label: 'The source \u2014 12V is not high enough for this load',
          isCorrect: false,
          explanation: '12V would be more than enough if the wire were ideal. The problem is that 5.14V is consumed by the wire before reaching the bulb.',
        },
        {
          id: 'ch1-b',
          label: 'The wire path \u2014 its resistance consumes over 40% of the supply voltage',
          isCorrect: true,
          explanation: 'Correct! V_wire\u00a0\u2248\u00a05.14V vs V_bulb\u00a0\u2248\u00a06.86V. The wire resistance is large relative to the load, making the wire path the dominant constraint.',
        },
        {
          id: 'ch1-c',
          label: 'The load choice \u2014 the 2\u03a9 bulb has too much resistance for this source',
          isCorrect: false,
          explanation: 'A higher-resistance bulb would actually help, not hurt. It would draw less current, reducing the wire drop and delivering more voltage to the bulb.',
        },
      ],
    },
  ],
  theoryContent: [
    {
      title: 'Designing Around Wire Losses',
      content: 'When wire resistance consumes a significant fraction of the supply voltage, it becomes a design constraint just like source internal resistance. To improve load performance, you can reduce wire resistance (shorter or thicker wire in a real circuit), increase load resistance (draws less current), or increase source voltage.',
    },
    {
      title: 'Identifying the Main Limiting Factor',
      content: 'In a circuit with multiple non-ideal elements (source internal resistance, wire resistance, operating limits), the main limiting factor is the one consuming the largest fraction of the voltage or current budget. Measuring across each segment reveals which is dominant.',
    },
  ],
  sandboxUnlocks: [],
  availableActions: ['toggle-switch'],
  currentOverlayAvailable: true,
  showFormulaPanel: true,
  formulasShown: [
    {
      formula: 'V\u2097\u2092\u2090\u2091 = V \u00d7 R\u2097\u2092\u2090\u2091 \u00f7 R\u209c\u2092\u209c\u2090\u2097',
      symbols: [
        { symbol: 'V\u2097\u2092\u2090\u2091', name: 'Load voltage', unit: 'V' },
        { symbol: 'V', name: 'Source voltage', unit: 'V' },
        { symbol: 'R\u2097\u2092\u2090\u2091', name: 'Load resistance', unit: '\u03a9' },
        { symbol: 'R\u209c\u2092\u209c\u2090\u2097', name: 'Total resistance', unit: '\u03a9' },
      ],
    },
  ],
  theoryPageAdditions: [
    {
      id: 'theory-designing-around-wire-losses',
      title: 'Designing Around Wire Losses',
      content: 'Wire resistance can become the dominant constraint when it is large relative to the load resistance. Strategies to reduce its impact include reducing wire resistance, increasing load resistance to draw less current, or increasing source voltage to compensate for the lost voltage.',
      sourceLesson: 'lesson-ch5-3-3',
    },
  ],
  quizzesUnlocked: ['quiz-ch5-wire-loss-design'],
};
