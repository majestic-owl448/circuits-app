import type { LessonConfig } from '../../../../types/lesson.ts';
import { CH4_MIXED_NODES } from '../../shared.ts';
import type { CircuitComponent } from '../../../../types/circuit.ts';

const failingOpenCircuit: CircuitComponent[] = [
  { id: 'battery-1', type: 'battery', nodeA: 'n1', nodeB: 'n7', properties: { voltage: 9 }, name: 'Battery', position: { x: 70, y: 270 }, rotation: 0 },
  { id: 'wire-top', type: 'wire', nodeA: 'n1', nodeB: 'n2', properties: {}, name: 'Wire', position: { x: 210, y: 120 }, rotation: 0 },
  { id: 'resistor-limit', type: 'resistor', nodeA: 'n2', nodeB: 'n3', properties: { resistance: 18 }, name: 'Limiter', position: { x: 385, y: 120 }, rotation: 0 },
  { id: 'bulb-target', type: 'bulb', nodeA: 'n3', nodeB: 'n5', properties: { resistance: 45 }, name: 'Target Bulb', position: { x: 385, y: 205 }, rotation: 0 },
  { id: 'switch-1', type: 'switch', nodeA: 'n7', nodeB: 'n6', properties: { isClosed: true }, name: 'Switch', position: { x: 210, y: 420 }, rotation: 0 },
  { id: 'wire-bottom-a', type: 'wire', nodeA: 'n6', nodeB: 'n5', properties: {}, name: 'Wire', position: { x: 300, y: 355 }, rotation: 0 },
];

export const lessonCh4_4_2: LessonConfig = {
  id: 'lesson-ch4-4-2',
  unitId: 'ch4-unit-4',
  title: 'Debug the Failing Design',
  description: 'Diagnose and fix source-load mismatch issues using measurement evidence.',
  stageLabel: 'Intermediate',
  prerequisites: ['lesson-ch4-4-1'],
  conceptsIntroduced: ['issue-first debugging', 'evidence-backed diagnosis'],
  initialCircuit: failingOpenCircuit,
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
      prompt: 'Fix the circuit so target-load current can increase toward range by reducing excessive series resistance in the source-to-load path.',
      type: 'fix',
      initialCircuit: failingOpenCircuit,
      initialNodes: CH4_MIXED_NODES,
      evaluationCriteria: {
        circuitMustBeClosed: true,
      },
      hints: [
        'You need a closed loop first.',
        'Find and restore the missing connection in the source-to-load return path.',
      ],
      availableComponents: ['battery', 'bulb', 'switch', 'resistor', 'wire'],
    },
    {
      id: 'challenge-2',
      prompt: 'Select the likely root cause when target load current is below required range and meter evidence shows high total resistance.',
      type: 'diagnose',
      evaluationCriteria: {
        hardPassChecks: ['diagnose-cause-selection'],
        advisoryChecks: ['diagnose-alternative-causes'],
        acceptedCauses: ['Series resistance is too high for the target range'],
        requiredEvidenceSignals: ['Measured current is below target range', 'Equivalent resistance is higher than expected'],
        minEvidenceMatches: 1,
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
    {
      id: 'theory-ch4-ohmmeter-placement-simulation',
      title: 'How to place an ohmmeter in the simulation',
      content: 'Select the ohmmeter tool and target a component path in a de-energized context to inspect resistance safely.',
      sourceLesson: 'lesson-ch4-4-2',
    },
  ],
  quizzesUnlocked: ['quiz-ch4-debugging-strategy-basics'],
};
