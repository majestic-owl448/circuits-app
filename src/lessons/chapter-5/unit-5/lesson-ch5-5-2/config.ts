import type { LessonConfig } from '../../../../types/lesson.ts';
import { CHAPTER_5_METADATA, NON_IDEAL_TOLERANCE } from '../../shared.ts';

// Design A (failing): 12V + 10Ω resistor (tolerance: 0.05), operatingLimit: 2.5W
//   Nominal: I = 12/10 = 1.2A, P = 1.44×10 = 14.4W → already fails limit!
//
// Let's use smaller values to make the edge-failure meaningful.
// 6V source + 6Ω resistor (tol: 0.05), limit 4W
//   Nominal: I = 1A, P = 1×6 = 6W → over limit
//
// Need the nominal to pass but high-edge to fail.
// 6V source + 6Ω resistor (tol: 0.05)
//   Nominal (6Ω): I = 1A, P = 6W — this is already too high for a 4W limit.
//
// Let's use: 6V + 10Ω nominal, limit 3.5W
//   Nominal (10Ω): I = 0.6A, P = 0.6²×10 = 3.6W — over 3.5W
// Still fails at nominal.
//
// Key insight: we need a case that passes at nominal but fails at tolerance edge.
// 9V + 12Ω nominal (tol: 0.05), limit 7W
//   Nominal (12Ω): I = 9/12 = 0.75A, P = 0.75²×12 = 6.75W ✓ (< 7W)
//   Low edge (11.4Ω): I = 9/11.4 ≈ 0.789A, P = 0.789²×11.4 ≈ 7.10W ✗ (> 7W)
//   High edge (12.6Ω): I = 9/12.6 ≈ 0.714A, P = 0.714²×12.6 ≈ 6.43W ✓
//
// This works! Nominal passes, low tolerance edge fails.
// Design A: 12Ω nominal → passes at nominal, fails at low edge
// Design B: 14Ω nominal → let's check:
//   Nominal (14Ω): I = 9/14 ≈ 0.643A, P = 0.643²×14 ≈ 5.78W ✓
//   Low edge (13.3Ω): I = 9/13.3 ≈ 0.677A, P = 0.677²×13.3 ≈ 6.09W ✓
//   High edge (14.7Ω): I = 9/14.7 ≈ 0.612A, P = 0.612²×14.7 ≈ 5.51W ✓
// Design B: passes both edges ✓ — this is the correct answer.

export const lessonCh5_5_2: LessonConfig = {
  id: 'lesson-ch5-5-2',
  unitId: 'ch5-unit-5',
  title: 'Design for Tolerance, Not Just Nominal Values',
  description: 'Learn to verify a design at the tolerance edges, not only at the nominal component value.',
  stageLabel: CHAPTER_5_METADATA.stageLabel,
  prerequisites: ['lesson-ch5-5-1'],
  conceptsIntroduced: [
    'tolerance-aware design',
    'robustness across acceptable value spread',
    'nominal success can fail at tolerance edges',
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
      properties: { voltage: 9 },
      name: 'Battery (9V)',
      position: { x: 100, y: 250 },
      rotation: 0,
    },
    {
      id: 'resistor-1',
      type: 'resistor',
      nodeA: 'n1',
      nodeB: 'n2',
      properties: {
        resistance: 12,
        tolerance: NON_IDEAL_TOLERANCE,
        operatingLimit: { type: 'power', max: 7 },
      },
      name: 'Resistor (12\u03a9 \u00b15%, limit 7W)',
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
      text: 'This resistor is 12\u03a9 nominal with \u00b15% tolerance and a 7W operating limit. Close the switch. At exactly 12\u03a9, current is 0.75A and power is 6.75W \u2014 within the 7W limit. Nominal passes.',
      requiredAction: { type: 'toggle-switch', componentId: 'switch-1', targetState: true },
      highlights: ['resistor-1'],
    },
    {
      id: 'step-2',
      text: 'But tolerance means the actual resistance could be as low as 11.4\u03a9. At 11.4\u03a9: I\u00a0\u2248\u00a00.789A, P\u00a0\u2248\u00a07.10W \u2014 over the 7W limit! The same component from a different batch could cause failure, even though the nominal design looked fine.',
      highlights: ['resistor-1'],
    },
    {
      id: 'step-3',
      text: 'A tolerance-aware design checks both edges, not just nominal. Choosing a 14\u03a9 nominal resistor (same tolerance) gives power of 5.78W at nominal, 6.09W at the low edge, and 5.51W at the high edge \u2014 all safely below 7W. The design is robust.',
      theoryCheck: {
        question: 'A design uses a 12\u03a9 \u00b15% resistor with a 7W limit and passes at 12\u03a9 but fails at 11.4\u03a9 (low edge). What does this mean for the design?',
        choices: [
          {
            id: 'tc-a',
            label: 'The design is unreliable because some manufactured parts may fail in circuit',
            isCorrect: true,
            explanation: 'Correct! If the low-tolerance edge exceeds the limit, some real components of the same part number will cause failure. The design is only nominally safe.',
          },
          {
            id: 'tc-b',
            label: 'The design is fine because the nominal case passes',
            isCorrect: false,
            explanation: 'Nominal-only verification is insufficient. Real components span the full tolerance range. A design must pass at all points within that range.',
          },
          {
            id: 'tc-c',
            label: 'The design needs a higher voltage source to compensate',
            isCorrect: false,
            explanation: 'Increasing voltage would increase power, making the low-edge failure even worse. The fix is to use a higher nominal resistance so that even the low edge stays within the limit.',
          },
        ],
        explanation: 'Tolerance-aware design requires verifying the design at both the low and high tolerance edges, not just at the nominal value.',
      },
    },
  ],
  challenges: [
    {
      id: 'challenge-1',
      prompt: `A 9V circuit uses a resistor with a 7W operating limit. Design A uses a 12\u03a9 nominal (\u00b1${NON_IDEAL_TOLERANCE * 100}%). Design B uses a 14\u03a9 nominal (\u00b1${NON_IDEAL_TOLERANCE * 100}%). Which design remains within the 7W limit across the full tolerance range?`,
      type: 'choose',
      evaluationCriteria: { correctChoiceId: 'ch1-b' },
      hints: [
        'For Design A: check power at the low edge (11.4\u03a9). P\u00a0=\u00a09\u00b2\u00a0/\u00a011.4\u00a0\u2248\u00a07.1W.',
        'For Design B: check power at the low edge (13.3\u03a9). P\u00a0=\u00a09\u00b2\u00a0/\u00a013.3\u00a0\u2248\u00a06.1W.',
      ],
      choices: [
        {
          id: 'ch1-a',
          label: 'Design A (12\u03a9) \u2014 it passes at nominal and that\u2019s enough',
          isCorrect: false,
          explanation: 'Design A passes at nominal (6.75W) but fails at the low tolerance edge (7.10W\u00a0>\u00a07W). Nominal-only verification is not sufficient.',
        },
        {
          id: 'ch1-b',
          label: 'Design B (14\u03a9) \u2014 its highest power case (low edge, 13.3\u03a9) is 6.1W, safely below 7W',
          isCorrect: true,
          explanation: 'Correct! Design B: P_max\u00a0\u2248\u00a06.1W at the low edge \u2014 within 7W. Design B is robust across the full tolerance range.',
        },
        {
          id: 'ch1-c',
          label: 'Neither \u2014 both fail because of tolerance',
          isCorrect: false,
          explanation: 'Design B stays within the 7W limit at all tolerance cases. Only Design A fails at the low edge.',
        },
      ],
    },
  ],
  theoryContent: [
    {
      title: 'Designing for Tolerance Instead of a Single Nominal Value',
      content: 'A circuit that passes at nominal but fails at a tolerance edge will fail in production. Robust design requires verification at both the low edge (nominal\u00a0\u00d7\u00a0(1\u00a0\u2212\u00a0tolerance)) and the high edge (nominal\u00a0\u00d7\u00a0(1\u00a0+\u00a0tolerance)). Both must stay within operating limits.',
    },
    {
      title: 'Worst-Case Analysis',
      content: 'In tolerance-aware design, the worst case for power dissipation is usually the low-tolerance edge (lowest resistance = highest current = highest power). Checking the worst case guarantees the design is safe for any part in the tolerance band.',
    },
  ],
  sandboxUnlocks: [],
  availableActions: ['toggle-switch'],
  currentOverlayAvailable: true,
  showFormulaPanel: true,
  formulasShown: [
    {
      formula: 'P\u2098\u2090\u02e3 = V\u00b2 \u00f7 R\u2098\u1d62\u2099',
      symbols: [
        { symbol: 'P\u2098\u2090\u02e3', name: 'Worst-case power', unit: 'W' },
        { symbol: 'V', name: 'Source voltage', unit: 'V' },
        { symbol: 'R\u2098\u1d62\u2099', name: 'Minimum (low-edge) resistance', unit: '\u03a9' },
      ],
    },
  ],
  theoryPageAdditions: [
    {
      id: 'theory-tolerance-aware-design',
      title: 'Designing for Tolerance Instead of a Single Nominal Value',
      content: 'Nominal-only verification is insufficient. A robust design must also pass at the low and high tolerance edges: R_min\u00a0=\u00a0R_nom\u00a0\u00d7\u00a00.95 and R_max\u00a0=\u00a0R_nom\u00a0\u00d7\u00a01.05 (for \u00b15%). The worst-case power is at R_min (highest current).',
      sourceLesson: 'lesson-ch5-5-2',
    },
  ],
  quizzesUnlocked: ['quiz-ch5-tolerance-design-basics'],
};
