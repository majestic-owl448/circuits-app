import type { LessonConfig } from '../../../../types/lesson.ts';
import { CHAPTER_10_METADATA, CH10_SIX_NODES } from '../../shared.ts';

export const lessonCh10_3_1: LessonConfig = {
  id: 'lesson-ch10-3-1',
  unitId: 'ch10-unit-3',
  title: 'Ideal and Non-Ideal DC Capstone',
  description: 'Diagnose a DC circuit failure that requires integrating series/parallel topology analysis, source-load matching, and internal resistance effects simultaneously.',
  stageLabel: CHAPTER_10_METADATA.stageLabel,
  prerequisites: ['lesson-ch10-2-2'],
  conceptsIntroduced: [
    'integrated DC and non-ideal analysis',
    'source-load mismatch as a root cause',
    'combined internal resistance and topology reasoning',
  ],
  initialNodes: CH10_SIX_NODES,
  initialCircuit: [
    {
      id: 'bat-1',
      type: 'battery',
      nodeA: 'n1',
      nodeB: 'n6',
      properties: { voltage: 9, internalResistance: 5 },
      name: 'Battery (9V, 5Ω internal)',
      position: { x: 120, y: 230 },
      rotation: 0,
    },
    {
      id: 'wire-top',
      type: 'wire',
      nodeA: 'n1',
      nodeB: 'n2',
      properties: { wireResistance: 0 },
      name: 'Wire',
      position: { x: 220, y: 120 },
      rotation: 0,
    },
    {
      id: 'res-a',
      type: 'resistor',
      nodeA: 'n2',
      nodeB: 'n3',
      properties: { resistance: 100 },
      name: 'Load A (100Ω)',
      position: { x: 320, y: 120 },
      rotation: 0,
    },
    {
      id: 'res-b',
      type: 'resistor',
      nodeA: 'n3',
      nodeB: 'n4',
      properties: { resistance: 100 },
      name: 'Load B (100Ω)',
      position: { x: 520, y: 120 },
      rotation: 0,
    },
    {
      id: 'wire-return-right',
      type: 'wire',
      nodeA: 'n4',
      nodeB: 'n5',
      properties: { wireResistance: 0 },
      name: 'Wire',
      position: { x: 420, y: 340 },
      rotation: 0,
    },
    {
      id: 'wire-return-left',
      type: 'wire',
      nodeA: 'n5',
      nodeB: 'n6',
      properties: { wireResistance: 0 },
      name: 'Wire',
      position: { x: 220, y: 340 },
      rotation: 0,
    },
  ],
  steps: [
    {
      id: 'step-1',
      text: 'This circuit has a 9V battery with a 5Ω internal resistance driving two 100Ω loads in series. On paper, total external resistance is 200Ω, and ideal voltage across the loads is 9V. But what does the internal resistance do? It forms a voltage divider with the load: V_terminal = V_source × R_load / (R_internal + R_load).',
      highlights: ['bat-1', 'res-a', 'res-b'],
    },
    {
      id: 'step-2',
      text: 'With R_internal = 5Ω and R_load = 200Ω: V_terminal = 9 × 200/205 ≈ 8.78V. Current I = 9/205 ≈ 43.9mA. Each 100Ω load drops I × 100 ≈ 4.39V. For maximum power transfer, load resistance should equal source resistance. Here R_load (200Ω) >> R_internal (5Ω), so we are far from max-transfer, but that is by design for efficiency — not a fault. The battery operates normally.',
      highlights: ['bat-1'],
    },
    {
      id: 'step-3',
      text: 'Now consider a diagnostic scenario: the same circuit, but the reported current is 20mA instead of the expected 43.9mA. With V=9V and expected I≈43.9mA, something has increased total resistance. R_apparent = 9/0.020 = 450Ω, but R_expected = 205Ω. Extra resistance ≈ 245Ω. This suggests an additional series resistance — possibly a degraded connection, a wire fault, or a component value error.',
      theoryCheck: {
        question: 'A DC series circuit reports 20mA instead of the expected 43.9mA. The source is 9V. What is the most likely type of fault?',
        choices: [
          {
            id: 'tc-a',
            label: 'Open circuit — zero current would flow if the path were broken',
            isCorrect: false,
            explanation: 'An open circuit produces zero current, not 20mA. Since current is flowing (20mA), the path is complete — this is a value-level fault, not a topology fault.',
          },
          {
            id: 'tc-b',
            label: 'Extra series resistance — an additional resistance has increased total circuit resistance and reduced current',
            isCorrect: true,
            explanation: 'Correct. If current is lower than expected but non-zero, total resistance is higher than expected. In a series circuit, extra resistance could be a degraded wire connection, a component with higher-than-rated resistance, or an unexpected internal resistance increase.',
          },
          {
            id: 'tc-c',
            label: 'Source voltage drop — the battery must have discharged to about 4V',
            isCorrect: false,
            explanation: 'If the battery had dropped to 4V with the same 205Ω, current would be 4/205 ≈ 19.5mA — plausible, but the first diagnostic step is to measure the terminal voltage before concluding source degradation.',
          },
        ],
        explanation: 'In a series circuit, unexpectedly low current with a non-zero value indicates extra series resistance or a reduced source voltage. Measure V_terminal first to distinguish between the two.',
      },
    },
  ],
  challenges: [
    {
      id: 'challenge-1',
      prompt: 'A 9V battery (5Ω internal resistance) drives a series circuit. The measured terminal voltage under load is 7.5V instead of the expected ~8.78V. What does this indicate about the internal resistance?',
      type: 'diagnose',
      diagnoseConfig: {
        acceptedCauses: ['internal-resistance-increased', 'source-degraded', 'load-changed', 'extra-series-resistance'],
        evidenceItems: [
          'terminal voltage lower than expected (7.5V vs 8.78V)',
          'current implied by V_terminal drop is consistent with higher internal resistance',
          'external load resistance unchanged',
        ],
        minEvidenceMatches: 2,
      },
      evaluationCriteria: {
        hardPassChecks: ['diagnose-cause-selection'],
        advisoryChecks: ['diagnose-alternative-causes'],
        acceptedCauses: ['internal-resistance-increased', 'source-degraded'],
        requiredEvidenceSignals: [
          'terminal voltage lower than expected (7.5V vs 8.78V)',
          'external load resistance unchanged',
        ],
        minEvidenceMatches: 2,
      },
      hints: [
        'Terminal voltage = V_source × R_load / (R_internal + R_load). What change to R_internal would drop V_terminal to 7.5V?',
        'If the load is unchanged, a lower terminal voltage means more voltage is being dropped inside the source — consistent with higher internal resistance.',
      ],
    },
  ],
  theoryContent: [
    {
      title: 'Integrated DC and Non-Ideal Analysis',
      content: 'A complete DC circuit analysis in Chapter 5–10 territory must account for: (1) topology (series, parallel, or mixed — determines current paths), (2) source parameters (voltage, internal resistance — determines available power), (3) load matching (R_load vs R_source — determines efficiency), and (4) operating limits (maximum safe power for each component). Skipping any of these gives an incomplete model.',
    },
    {
      title: 'Diagnosing DC Faults with Evidence',
      content: 'Evidence-based DC diagnosis: (1) Zero current → topology fault (open path). (2) Current present but lower than expected → extra series resistance or reduced source voltage. (3) Voltage at a component lower than calculated → verify current direction and check for unexpected internal drops. (4) Component failed state → check whether power dissipation exceeds operating limit. Collect at least two pieces of consistent evidence before stating a root cause.',
    },
  ],
  sandboxUnlocks: ['capstone-dc-prompt'],
  availableActions: ['inspect'],
  currentOverlayAvailable: true,
  showFormulaPanel: true,
  formulasShown: [
    {
      formula: 'V_terminal = V_source × R_load / (R_internal + R_load)',
      symbols: [
        { symbol: 'V_terminal', name: 'Terminal voltage under load', unit: 'V' },
        { symbol: 'V_source', name: 'Open-circuit source voltage', unit: 'V' },
        { symbol: 'R_load', name: 'External load resistance', unit: 'Ω' },
        { symbol: 'R_internal', name: 'Source internal resistance', unit: 'Ω' },
      ],
    },
  ],
  theoryPageAdditions: [
    {
      id: 'theory-ch10-dc-capstone-evidence',
      title: 'Chapter 10: DC capstone — evidence-based fault diagnosis',
      content: 'Zero current → open path. Low current (non-zero) → extra series resistance or reduced V_source. Low terminal voltage → internal drop too high. Component failed → power exceeded operating limit. Require at least two consistent evidence items before concluding a root cause.',
      sourceLesson: 'lesson-ch10-3-1',
    },
    {
      id: 'theory-ch10-source-load-matching',
      title: 'Chapter 10: Source-load matching in DC circuits',
      content: 'Maximum power transfer occurs when R_load = R_source. For efficiency (maximum V_load), design R_load >> R_source. For the learner model: the practical design goal is usually high R_load/R_source ratio, not matched impedance. Internal resistance reduces terminal voltage under load proportionally to the R_internal/R_total fraction.',
      sourceLesson: 'lesson-ch10-3-1',
    },
  ],
  quizzesUnlocked: ['quiz-ch10-dc-capstone-basics'],
};
