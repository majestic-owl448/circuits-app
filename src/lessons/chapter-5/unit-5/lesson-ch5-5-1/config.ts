import type { LessonConfig } from '../../../../types/lesson.ts';
import { CHAPTER_5_METADATA, NON_IDEAL_TOLERANCE } from '../../shared.ts';

// 12V source + 10Ω resistor (tolerance: 0.05)
// Nominal: I = 12/10 = 1.2A
// Low edge  (−5%): R = 9.5Ω, I = 12/9.5 ≈ 1.263A
// High edge (+5%): R = 10.5Ω, I = 12/10.5 ≈ 1.143A
// Challenge: are both edge values within ±5% of nominal 1.2A?
// Low edge: 1.263A is 5.25% above 1.2A — slightly outside ±5%!
// High edge: 1.143A is 4.75% below 1.2A — within ±5%.
//
// Revise: use symmetric tolerance on current, not R.
// ±5% of nominal current 1.2A → window [1.14A, 1.26A]
// Low-edge current (R=9.5Ω): 1.263A — slightly outside [1.14, 1.26]
// High-edge current (R=10.5Ω): 1.143A — within [1.14, 1.26]
//
// Actually, the challenge in lesson 1.2 already showed the ±5% window for I.
// Here the point is: the *component itself* varies ±5%.
// The concept is tolerance = variation in the component value (R), not in the output.
//
// Lesson 5.1 teaches: "same label doesn't mean same exact value"
// The challenge should be: given two resistors both labeled 10Ω but one measures 9.5Ω
// and one measures 10.5Ω, are both within the ±5% tolerance band?
// Answer: yes, both are within ±5% of 10Ω (9.5 = 10×0.95, 10.5 = 10×1.05)

export const lessonCh5_5_1: LessonConfig = {
  id: 'lesson-ch5-5-1',
  unitId: 'ch5-unit-5',
  title: 'Same Label \u2260 Same Exact Value',
  description: 'Understand that real components vary from their nominal value within a tolerance band, and that this variation can be acceptable.',
  stageLabel: CHAPTER_5_METADATA.stageLabel,
  prerequisites: ['lesson-ch5-4-3'],
  conceptsIntroduced: [
    'component tolerance',
    'nominal value versus realized value',
    'acceptable variation within a tolerance band',
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
      id: 'resistor-1',
      type: 'resistor',
      nodeA: 'n1',
      nodeB: 'n2',
      properties: { resistance: 10, tolerance: NON_IDEAL_TOLERANCE },
      name: 'Resistor (10\u03a9 \u00b15%)',
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
      text: 'This resistor is labeled 10\u03a9 with \u00b15% tolerance. That means its actual resistance can be anywhere from 9.5\u03a9 to 10.5\u03a9. The label gives the nominal value; the tolerance gives the allowed spread around that nominal.',
      highlights: ['resistor-1'],
    },
    {
      id: 'step-2',
      text: 'Close the switch. At the nominal 10\u03a9, current is 1.2A. If this particular unit happens to be 9.5\u03a9 (the low edge), current rises to \u22481.26A. If it\u2019s 10.5\u03a9 (the high edge), current falls to \u22481.14A. All three outcomes are valid for a component labeled "10\u03a9 \u00b15%."',
      requiredAction: { type: 'toggle-switch', componentId: 'switch-1', targetState: true },
      highlights: ['resistor-1'],
    },
    {
      id: 'step-3',
      text: 'Both edge values (9.5\u03a9 and 10.5\u03a9) are within 5% of the nominal 10\u03a9. A component is not defective just because it isn\u2019t exactly at its nominal value \u2014 it\u2019s working as specified as long as it stays within its tolerance band.',
      theoryCheck: {
        question: 'Two resistors are both labeled 100\u03a9 \u00b15%. One measures 97\u03a9 and another measures 104\u03a9. Are both within tolerance?',
        choices: [
          {
            id: 'tc-a',
            label: 'Yes \u2014 both 97\u03a9 and 104\u03a9 are within \u00b15% of 100\u03a9',
            isCorrect: true,
            explanation: 'Correct! \u00b15% of 100\u03a9 spans [95\u03a9, 105\u03a9]. Both 97\u03a9 and 104\u03a9 fall within this band.',
          },
          {
            id: 'tc-b',
            label: 'No \u2014 neither is exactly 100\u03a9, so both are defective',
            isCorrect: false,
            explanation: 'Tolerance exists precisely because exact values are practically impossible to manufacture. Any value within the tolerance band is a specification-compliant part.',
          },
          {
            id: 'tc-c',
            label: 'Only 97\u03a9 is within tolerance; 104\u03a9 is too high',
            isCorrect: false,
            explanation: '104\u03a9 is 4% above nominal, which is within the \u00b15% band. The allowed range is [95\u03a9, 105\u03a9].',
          },
        ],
        explanation: 'The tolerance band defines the full acceptable range: nominal \u00d7 (1\u00a0\u00b1\u00a0tolerance). Both 97\u03a9 and 104\u03a9 are within [95\u03a9, 105\u03a9].',
      },
    },
  ],
  challenges: [
    {
      id: 'challenge-1',
      prompt: `Two resistors are both labeled 10\u03a9 with \u00b1${NON_IDEAL_TOLERANCE * 100}% tolerance. One measures 9.5\u03a9; the other measures 10.5\u03a9. Are both within the tolerance specification?`,
      type: 'choose',
      evaluationCriteria: { correctChoiceId: 'ch1-a' },
      hints: [
        `Calculate the tolerance band: \u00b1${NON_IDEAL_TOLERANCE * 100}% of 10\u03a9 spans from 9.5\u03a9 to 10.5\u03a9.`,
        'Check whether each measured value falls inside that range.',
      ],
      choices: [
        {
          id: 'ch1-a',
          label: 'Yes \u2014 both 9.5\u03a9 and 10.5\u03a9 sit at the exact edges of the \u00b15% band, so both are within specification',
          isCorrect: true,
          explanation: `Correct! \u00b1${NON_IDEAL_TOLERANCE * 100}% of 10\u03a9 spans [9.5\u03a9, 10.5\u03a9]. Both values are valid, specification-compliant components.`,
        },
        {
          id: 'ch1-b',
          label: 'No \u2014 neither is exactly 10\u03a9, so both fail the tolerance check',
          isCorrect: false,
          explanation: 'Tolerance means variation from nominal is expected and acceptable. A component does not need to be exactly at nominal to pass specification.',
        },
        {
          id: 'ch1-c',
          label: 'Only 10.5\u03a9 is within tolerance; 9.5\u03a9 is too far below nominal',
          isCorrect: false,
          explanation: '9.5\u03a9 is exactly 5% below 10\u03a9, which sits at the lower boundary of the \u00b15% band. It is within specification.',
        },
      ],
    },
  ],
  theoryContent: [
    {
      title: 'Component Tolerance',
      content: 'Tolerance describes the permitted variation from a component\u2019s nominal value. A 10\u03a9 \u00b15% resistor may have an actual resistance anywhere between 9.5\u03a9 and 10.5\u03a9 and still be within specification. This is not a defect \u2014 it is a design property.',
    },
    {
      title: 'Nominal vs Realized Value',
      content: 'The nominal value on a component label is the intended center of the tolerance range. The realized value is what the component actually measures. Any realized value within the tolerance band is valid and expected.',
    },
  ],
  sandboxUnlocks: ['tolerance'],
  availableActions: ['toggle-switch'],
  currentOverlayAvailable: true,
  showFormulaPanel: true,
  formulasShown: [
    {
      formula: 'R\u2098\u1d62\u2099 = R\u2099\u2092\u2098\u1d62\u2099\u2090\u2097 \u00d7 (1 \u2212 \u03b5)',
      symbols: [
        { symbol: 'R\u2098\u1d62\u2099', name: 'Minimum resistance', unit: '\u03a9' },
        { symbol: 'R\u2099\u2092\u2098\u1d62\u2099\u2090\u2097', name: 'Nominal resistance', unit: '\u03a9' },
        { symbol: '\u03b5', name: 'Tolerance fraction', unit: '' },
      ],
    },
  ],
  theoryPageAdditions: [
    {
      id: 'theory-component-tolerance',
      title: 'Component Tolerance',
      content: 'Tolerance is the allowed variation from a component\u2019s nominal value. A \u00b15% tolerance means the realized value can range from 95% to 105% of the nominal. This variation is a normal manufacturing property, not a defect.',
      sourceLesson: 'lesson-ch5-5-1',
    },
  ],
  quizzesUnlocked: ['quiz-ch5-tolerance-basics'],
};
