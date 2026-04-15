import type { LessonConfig } from '../../../../types/lesson.ts';
import { CH4_SOURCE_LOAD_CIRCUIT, CH4_MIXED_NODES } from '../../shared.ts';

export const lessonCh4_4_2: LessonConfig = {
  id: 'lesson-ch4-4-2',
  unitId: 'ch4-unit-4',
  title: 'Debug the Failing Design',
  description: 'Diagnose and fix source-load mismatch issues using measurement evidence.',
  stageLabel: 'Intermediate',
  prerequisites: ['lesson-ch4-4-1'],
  conceptsIntroduced: ['issue-first debugging', 'evidence-backed diagnosis'],
  initialCircuit: CH4_SOURCE_LOAD_CIRCUIT,
  initialNodes: CH4_MIXED_NODES,
  steps: [
    { id: 'step-1', text: 'When a target is out of range, isolate the first blocking issue using structure and measurements.' },
    {
      id: 'step-2',
      text: 'State the likely cause and then apply a focused correction.',
      theoryCheck: {
        question: 'What is the best first debugging move?',
        choices: [
          { id: 'tc-a', label: 'Change everything at once', isCorrect: false, explanation: 'That hides cause-and-effect.' },
          { id: 'tc-b', label: 'Identify the primary blocking cause', isCorrect: true, explanation: 'Correct.' },
          { id: 'tc-c', label: 'Skip measurement and guess', isCorrect: false, explanation: 'Evidence is essential in diagnosis.' },
        ],
        explanation: 'Diagnose before making broad changes.',
      },
    },
  ],
  challenges: [
    {
      id: 'challenge-1',
      prompt: 'Select the likely root cause when target load current is below required range and meter evidence shows high total resistance.',
      type: 'diagnose',
      evaluationCriteria: {
        hardPassChecks: ['diagnose-cause-selection'],
        advisoryChecks: ['diagnose-alternative-causes'],
        requiredEvidenceSignals: ['high-total-resistance'],
        observedEvidenceSignals: ['high-total-resistance'],
      },
      hints: ['High resistance tends to reduce current for fixed source voltage.'],
      diagnoseConfig: {
        acceptedCauses: ['Series resistance is too high for the target range'],
        evidenceItems: ['Measured current is below target range', 'Equivalent resistance is higher than expected'],
        minEvidenceMatches: 1,
      },
    },
  ],
  theoryContent: [
    {
      title: 'Troubleshooting by measured evidence',
      content: 'Good debugging isolates one likely cause from evidence, then applies the smallest corrective change and rechecks results.',
    },
  ],
  sandboxUnlocks: [],
  availableActions: ['toggle-switch', 'drag-to-place', 'connect-wire', 'delete-component', 'rename-component'],
  currentOverlayAvailable: true,
  showFormulaPanel: true,
  formulasShown: [
    {
      formula: 'I = V / R',
      symbols: [
        { symbol: 'I', name: 'Current', unit: 'amperes (A)' },
        { symbol: 'V', name: 'Voltage', unit: 'volts (V)' },
        { symbol: 'R', name: 'Resistance', unit: 'ohms (ohm)' },
      ],
    },
  ],
  theoryPageAdditions: [
    {
      id: 'theory-ch4-debugging-evidence',
      title: 'Troubleshooting and investigation: debugging by measured evidence',
      content: 'Use measurements to identify the most likely failure cause, then apply targeted corrections.',
      sourceLesson: 'lesson-ch4-4-2',
    },
  ],
  quizzesUnlocked: ['quiz-ch4-debugging-strategy-basics'],
};
