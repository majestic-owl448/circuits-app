import type { LessonConfig } from '../../../../types/lesson.ts';
import { CH4_SOURCE_LOAD_CIRCUIT, CH4_MIXED_NODES } from '../../shared.ts';

export const lessonCh4_5_3: LessonConfig = {
  id: 'lesson-ch4-5-3',
  unitId: 'ch4-unit-5',
  title: 'Chapter Review Challenge',
  description: 'Integrate measurement, mixed-circuit reasoning, source-load matching, and named laws.',
  stageLabel: 'Intermediate',
  prerequisites: ['lesson-ch4-5-2'],
  conceptsIntroduced: ['integration and fluency'],
  initialCircuit: CH4_SOURCE_LOAD_CIRCUIT,
  initialNodes: CH4_MIXED_NODES,
  steps: [
    { id: 'step-1', text: 'This review combines calculation, meter interpretation, and source-load reasoning.' },
    {
      id: 'step-2',
      text: 'Use KCL and KVL naming where it helps explain your decisions.',
      theoryCheck: {
        question: 'What makes a strong Chapter 4 solution?',
        choices: [
          { id: 'tc-a', label: 'A guess that appears plausible', isCorrect: false, explanation: 'Chapter review expects explicit reasoning.' },
          { id: 'tc-b', label: 'Integrated reasoning plus measurement evidence', isCorrect: true, explanation: 'Correct.' },
          { id: 'tc-c', label: 'Only naming laws without verification', isCorrect: false, explanation: 'Law names should support evidence-based reasoning.' },
        ],
        explanation: 'Fluency means connecting concepts, calculations, and observations.',
      },
    },
  ],
  challenges: [
    {
      id: 'challenge-1',
      prompt: 'Given low target-load current and measured high equivalent resistance, choose the most likely cause.',
      type: 'diagnose',
      evaluationCriteria: {
        hardPassChecks: ['diagnose-cause-selection'],
        advisoryChecks: ['diagnose-alternative-causes'],
        acceptedCauses: ['Source-to-load path has too much series resistance'],
        requiredEvidenceSignals: ['Measured total current is below target', 'Equivalent resistance exceeds expected range'],
        minEvidenceMatches: 2,
      },
      hints: ['Use the evidence signals explicitly.'],
      diagnoseConfig: {
        acceptedCauses: ['Source-to-load path has too much series resistance'],
        evidenceItems: ['Measured total current is below target', 'Equivalent resistance exceeds expected range'],
        minEvidenceMatches: 2,
      },
    },
  ],
  theoryContent: [
    {
      title: 'Chapter 4 review topic links',
      content: 'Chapter 4 ties together measurement tools, mixed-circuit methods, source-load matching, and formal law naming (KCL/KVL).',
    },
  ],
  sandboxUnlocks: ['chapter-4-complete'],
  availableActions: ['toggle-switch', 'drag-to-place', 'connect-wire', 'delete-component', 'rename-component'],
  currentOverlayAvailable: true,
  showFormulaPanel: true,
  formulasShown: [
    {
      formula: 'V = IR',
      symbols: [
        { symbol: 'V', name: 'Voltage', unit: 'volts (V)' },
        { symbol: 'I', name: 'Current', unit: 'amperes (A)' },
        { symbol: 'R', name: 'Resistance', unit: 'ohms (ohm)' },
      ],
    },
    {
      formula: 'sum(loop voltages) = 0',
      symbols: [
        { symbol: 'sum(loop voltages)', name: 'KVL balance', unit: 'volts (V)' },
      ],
    },
    {
      formula: 'I_in = I_out_total',
      symbols: [
        { symbol: 'I_in', name: 'Current into node', unit: 'amperes (A)' },
        { symbol: 'I_out_total', name: 'Current out of node', unit: 'amperes (A)' },
      ],
    },
  ],
  theoryPageAdditions: [
    {
      id: 'theory-ch4-review',
      title: 'Chapter 4 review topic links',
      content: 'Integrate meter usage, mixed-circuit decomposition, and source-load range reasoning with named law references.',
      sourceLesson: 'lesson-ch4-5-3',
    },
  ],
  quizzesUnlocked: ['quiz-ch4-chapter-4-review-quiz'],
};
