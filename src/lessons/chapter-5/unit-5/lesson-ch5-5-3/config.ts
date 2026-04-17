import type { LessonConfig } from '../../../../types/lesson.ts';
import { CHAPTER_5_METADATA, NON_IDEAL_TOLERANCE } from '../../shared.ts';
import { OPERATING_LIMIT_PRESETS } from '../../../shared.ts';

// Non-ideal review circuit:
// 12V source (internalResistance: 1) + 1Ω wire + 2.5Ω bulb
//   (operatingLimit: beginnerBulb = 2.5W, tolerance: 0.05, isFailed: true)
//
// At nominal (2.5Ω): R_total = 1 + 1 + 2.5 = 4.5Ω
//   I = 12/4.5 ≈ 2.67A
//   P_bulb = 2.67² × 2.5 ≈ 17.8W >> 2.5W limit → fails operating limit
//
// The "ideal" design assumption: if designer only considered R_load = 2.5Ω
// and ignored internal resistance + wire resistance:
//   "ideal" I = 12/2.5 = 4.8A, P = 57.6W (even worse)
// Or if designer thought P = V²/R = 144/2.5 = 57.6W...
// Either way, the operating limit is clearly exceeded.
//
// Root cause: operating-limit exceeded (the bulb's power dissipation exceeds 2.5W)
// Contributing factors: internal resistance and wire resistance raise total current
// Evidence:
//   1. bulb shows isFailed state
//   2. computed power exceeds operatingLimit max
//   3. terminal voltage lower than nominal under load (internal + wire drop reduce effective V)

export const lessonCh5_5_3: LessonConfig = {
  id: 'lesson-ch5-5-3',
  unitId: 'ch5-unit-5',
  title: 'Non-Ideal Review Challenge',
  description: 'Integrate internal resistance, wire losses, heating, operating limits, and tolerance reasoning in one diagnostic challenge.',
  stageLabel: CHAPTER_5_METADATA.stageLabel,
  prerequisites: ['lesson-ch5-5-2'],
  conceptsIntroduced: [
    'integrating multiple non-ideal effects',
    'diagnosing why an apparently correct design fails',
    'root-cause identification using evidence',
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
      properties: { voltage: 12, internalResistance: 1 },
      name: 'Battery (12V, 1\u03a9 internal)',
      position: { x: 100, y: 250 },
      rotation: 0,
    },
    {
      id: 'bulb-1',
      type: 'bulb',
      nodeA: 'n1',
      nodeB: 'n2',
      properties: {
        resistance: 2.5,
        operatingLimit: OPERATING_LIMIT_PRESETS.beginnerBulb,
        tolerance: NON_IDEAL_TOLERANCE,
        isFailed: true,
      },
      name: 'Bulb (failed)',
      position: { x: 200, y: 150 },
      rotation: 0,
    },
    {
      id: 'switch-1',
      type: 'switch',
      nodeA: 'n2',
      nodeB: 'n4',
      properties: { isClosed: true },
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
      text: 'This circuit has a 12V source with 1\u03a9 internal resistance, a 1\u03a9 wire, and a 2.5\u03a9 bulb with a 2.5W operating limit (\u00b15% tolerance). A designer assumed the circuit was safe using ideal analysis. The bulb has failed.',
      highlights: ['bulb-1'],
    },
    {
      id: 'step-2',
      text: 'Let\u2019s review the evidence. Total resistance: 1\u03a9 (internal) + 1\u03a9 (wire) + 2.5\u03a9 (bulb) = 4.5\u03a9. Current: 12/4.5\u00a0\u2248\u00a02.67A. Power in the bulb: 2.67\u00b2\u00a0\u00d7\u00a02.5\u00a0\u2248\u00a017.8W. The operating limit is 2.5W. The bulb received over 7 times its rated power.',
      highlights: ['battery-1', 'wire-1', 'bulb-1'],
    },
    {
      id: 'step-3',
      text: 'The ideal analysis saw only the 2.5\u03a9 load: "P\u00a0=\u00a0V\u00b2/R\u00a0=\u00a0144/2.5\u00a0=\u00a057.6W." Even without wire resistance and internal resistance, the bulb was already massively over its limit. The non-ideal effects made it worse, but the root cause is that the load\u2019s operating limit was never met even in the ideal case.',
      theoryCheck: {
        question: 'The ideal designer calculated P\u00a0=\u00a0V\u00b2/R\u00a0=\u00a057.6W for the bulb with a 2.5W limit. What critical step was missed?',
        choices: [
          {
            id: 'tc-a',
            label: 'Checking whether the computed power stays within the component\u2019s operating limit',
            isCorrect: true,
            explanation: 'Correct! The designer calculated power correctly but never compared it to the 2.5W operating limit. Checking P vs limit before connecting is essential.',
          },
          {
            id: 'tc-b',
            label: 'Using a non-ideal model for the source and wire',
            isCorrect: false,
            explanation: 'Even the ideal analysis gives 57.6W \u2014 vastly over the 2.5W limit. The non-ideal effects are secondary; the fundamental error is ignoring the operating limit entirely.',
          },
          {
            id: 'tc-c',
            label: 'Measuring the circuit voltage before running',
            isCorrect: false,
            explanation: 'Voltage measurement before running would not reveal the problem. The issue is that power dissipation was never checked against the component\u2019s rated limit.',
          },
        ],
        explanation: 'The most critical step is always to verify that expected power dissipation stays within each component\u2019s operating limit.',
      },
    },
  ],
  challenges: [
    {
      id: 'challenge-1',
      prompt: 'The bulb failed. Identify the root cause and select the evidence that best supports your diagnosis.',
      type: 'diagnose',
      diagnoseConfig: {
        acceptedCauses: ['internal-resistance', 'wire-loss', 'operating-limit', 'tolerance'],
        evidenceItems: [
          'bulb shows isFailed state',
          'computed power exceeds operatingLimit max',
          'terminal voltage lower than nominal under load',
        ],
        minEvidenceMatches: 2,
      },
      evaluationCriteria: {
        acceptedCauses: ['operating-limit'],
        requiredEvidenceSignals: [
          'bulb shows isFailed state',
          'computed power exceeds operatingLimit max',
        ],
        minEvidenceMatches: 2,
      },
      hints: [
        'Calculate P_bulb\u00a0=\u00a0I\u00b2\u00a0\u00d7\u00a0R_bulb and compare it to the operating limit.',
        `Internal resistance and wire resistance contribute to current, but what directly causes failure?`,
      ],
    },
  ],
  theoryContent: [
    {
      title: 'Non-Ideal Evidence Patterns and Root-Cause Diagnosis',
      content: 'When diagnosing a non-ideal circuit failure, identify which limit was exceeded (operating limit, voltage minimum, etc.) and which non-ideal effects contributed. The root cause is the violated constraint; contributing factors amplify it but are not themselves the cause.',
    },
    {
      title: 'Integrated Non-Ideal Reasoning',
      content: 'Real circuits can have multiple non-ideal effects acting simultaneously: source internal resistance, wire losses, operating limits, and component tolerances. Each effect is small on its own but together they can push a nominally safe design into failure. Always check worst-case conditions.',
    },
  ],
  sandboxUnlocks: ['chapter-5-complete'],
  availableActions: ['toggle-switch'],
  currentOverlayAvailable: true,
  showFormulaPanel: true,
  formulasShown: [
    {
      formula: 'P = I\u00b2 \u00d7 R',
      symbols: [
        { symbol: 'P', name: 'Power dissipated', unit: 'W' },
        { symbol: 'I', name: 'Current', unit: 'A' },
        { symbol: 'R', name: 'Resistance', unit: '\u03a9' },
      ],
    },
  ],
  theoryPageAdditions: [
    {
      id: 'theory-ch5-review-links',
      title: 'Chapter 5 Review: Non-Ideal Effects Summary',
      content: 'Chapter 5 introduced four main non-ideal effects: (1) source internal resistance reduces terminal voltage under load; (2) wire resistance consumes part of the supply voltage; (3) operating limits define the maximum safe power dissipation; (4) component tolerance means realized values vary from nominal within a specified band. Good design accounts for all four.',
      sourceLesson: 'lesson-ch5-5-3',
    },
    {
      id: 'theory-nonideal-diagnosis',
      title: 'Troubleshooting and Investigation: Non-Ideal Evidence Patterns',
      content: 'When diagnosing a non-ideal circuit failure: (1) check whether any component shows a failed state; (2) calculate power dissipation and compare to operating limits; (3) measure terminal voltage to detect internal drops; (4) verify that design holds at tolerance edges, not just nominal. The root cause is the violated constraint; non-ideal effects are contributing factors.',
      sourceLesson: 'lesson-ch5-5-3',
    },
  ],
  quizzesUnlocked: ['quiz-ch5-review'],
};
