import type { LessonConfig } from '../../../../types/lesson.ts';
import { CHAPTER_5_METADATA } from '../../shared.ts';
import { OPERATING_LIMIT_PRESETS } from '../../../shared.ts';

// 6V source + 2Ω target bulb (limit: 2.5W)
// Goal: bulb must be in [0.5W, 2.5W]
//
// No series resistor (0Ω extra): P = 6²/2 = 18W → fails (> 2.5W)
// Series 4Ω resistor:  I = 6/6 = 1A, P_bulb = 1²×2 = 2W → ✓ in [0.5, 2.5]
// Series 20Ω resistor: I = 6/22 ≈ 0.27A, P_bulb = 0.27²×2 ≈ 0.15W → fails (< 0.5W, too dim)

export const lessonCh5_4_3: LessonConfig = {
  id: 'lesson-ch5-4-3',
  unitId: 'ch5-unit-4',
  title: 'Make It Work Without Breaking It',
  description: 'Design a circuit that meets a brightness target while keeping a component\u2019s power dissipation within its safe operating limit.',
  stageLabel: CHAPTER_5_METADATA.stageLabel,
  prerequisites: ['lesson-ch5-4-2'],
  conceptsIntroduced: [
    'functional and safety constraints as a combined design goal',
    'series resistance as a protection strategy',
    'balancing minimum performance with maximum safe dissipation',
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
      properties: {
        resistance: 2,
        operatingLimit: OPERATING_LIMIT_PRESETS.beginnerBulb,
      },
      name: 'Bulb (2\u03a9, limit: 2.5W)',
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
      text: 'This 2\u03a9 bulb has a 2.5W operating limit. It needs at least 0.5W to light up visibly. Connected directly to 6V, it would dissipate 18W \u2014 far over the limit. Your goal: find a series resistor value that keeps the bulb in the safe range [0.5W, 2.5W].',
      highlights: ['bulb-1', 'battery-1'],
    },
    {
      id: 'step-2',
      text: 'Three candidate series resistors: 0\u03a9 (no extra resistor), 4\u03a9, or 20\u03a9. The correct resistor keeps P_bulb between 0.5W and 2.5W.',
      highlights: ['bulb-1'],
    },
    {
      id: 'step-3',
      text: 'With 4\u03a9 in series: R_total\u00a0=\u00a06\u03a9, I\u00a0=\u00a01A, P_bulb\u00a0=\u00a01\u00b2\u00a0\u00d7\u00a02\u00a0=\u00a02W. This is within [0.5W, 2.5W]. The circuit functions correctly and the bulb stays safe.',
      theoryCheck: {
        question: 'A 2\u03a9 bulb with a 2.5W limit is connected to a 6V source with a 20\u03a9 series resistor. Does this design work?',
        choices: [
          {
            id: 'tc-a',
            label: 'No \u2014 the bulb receives only 0.15W, below the 0.5W minimum brightness target',
            isCorrect: true,
            explanation: 'Correct! I\u00a0=\u00a06/22\u00a0\u2248\u00a00.27A, P_bulb\u00a0=\u00a00.27\u00b2\u00a0\u00d7\u00a02\u00a0\u2248\u00a00.15W. Under the 0.5W minimum, so too dim.',
          },
          {
            id: 'tc-b',
            label: 'Yes \u2014 the power is below the 2.5W limit so it\u2019s safe',
            isCorrect: false,
            explanation: 'Safe from burnout, yes \u2014 but not functional. A design must satisfy both the minimum (0.5W) and the maximum (2.5W). Here 0.15W is too dim.',
          },
          {
            id: 'tc-c',
            label: 'Yes \u2014 more resistance always means better protection',
            isCorrect: false,
            explanation: 'More resistance reduces power dissipation, but if it drops below the functional minimum, the design fails. Safety and function must both be satisfied.',
          },
        ],
        explanation: 'A valid design must keep P_bulb within [0.5W, 2.5W]. Both too little power (too dim) and too much power (burnout) are failures.',
      },
    },
  ],
  challenges: [
    {
      id: 'challenge-1',
      prompt: 'A 2\u03a9 bulb (limit: 2.5W, minimum useful: 0.5W) is powered by a 6V source. Which series resistor value produces a working, safe circuit?',
      type: 'choose',
      evaluationCriteria: { correctChoiceId: 'ch1-b' },
      hints: [
        'For each option, calculate I\u00a0=\u00a06\u00a0/\u00a0(2\u00a0+\u00a0R_series), then P_bulb\u00a0=\u00a0I\u00b2\u00a0\u00d7\u00a02.',
        'Check whether P_bulb is in [0.5W, 2.5W].',
      ],
      choices: [
        {
          id: 'ch1-a',
          label: '0\u03a9 (no series resistor) \u2014 P_bulb\u00a0=\u00a018W',
          isCorrect: false,
          explanation: '18W\u00a0>>\u00a02.5W limit. The bulb burns out.',
        },
        {
          id: 'ch1-b',
          label: '4\u03a9 series resistor \u2014 P_bulb\u00a0=\u00a02W \u2714',
          isCorrect: true,
          explanation: 'Correct! I\u00a0=\u00a06/6\u00a0=\u00a01A, P_bulb\u00a0=\u00a01\u00b2\u00a0\u00d7\u00a02\u00a0=\u00a02W. Within [0.5W, 2.5W]. Circuit works and component is safe.',
        },
        {
          id: 'ch1-c',
          label: '20\u03a9 series resistor \u2014 P_bulb\u00a0\u22480.15W',
          isCorrect: false,
          explanation: '0.15W\u00a0<\u00a00.5W minimum. The bulb is too dim to be useful.',
        },
      ],
    },
  ],
  theoryContent: [
    {
      title: 'Designing Within Operating Limits',
      content: 'A well-designed circuit must satisfy two criteria simultaneously: the component must receive enough power to function (minimum threshold) and must not exceed its maximum rated power (operating limit). Series resistance is one way to limit power dissipation in a load.',
    },
    {
      title: 'Series Resistance as Protection',
      content: 'Adding a series resistor reduces total current, which reduces power dissipation in the target component. This works when the load\u2019s power rating is lower than what the source would naturally deliver. The series resistor absorbs the excess to keep the load within its safe range.',
    },
  ],
  sandboxUnlocks: [],
  availableActions: ['toggle-switch'],
  currentOverlayAvailable: true,
  showFormulaPanel: true,
  formulasShown: [
    {
      formula: 'P\u2097\u2092\u2090\u2091 = I\u00b2 \u00d7 R\u2097\u2092\u2090\u2091',
      symbols: [
        { symbol: 'P\u2097\u2092\u2090\u2091', name: 'Load power', unit: 'W' },
        { symbol: 'I', name: 'Current', unit: 'A' },
        { symbol: 'R\u2097\u2092\u2090\u2091', name: 'Load resistance', unit: '\u03a9' },
      ],
    },
  ],
  theoryPageAdditions: [
    {
      id: 'theory-designing-within-limits',
      title: 'Designing Within Operating Limits',
      content: 'A valid circuit design must satisfy both a functional minimum and a safety maximum for power dissipation. Adding series resistance is a common way to protect a load from burnout while still keeping it operational.',
      sourceLesson: 'lesson-ch5-4-3',
    },
  ],
  quizzesUnlocked: ['quiz-ch5-operating-limit-design'],
};
