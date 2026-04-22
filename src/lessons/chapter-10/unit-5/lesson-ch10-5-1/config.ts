import type { LessonConfig } from '../../../../types/lesson.ts';
import { CH10_NODES, CHAPTER_10_METADATA } from '../../shared.ts';

export const lessonCh10_5_1: LessonConfig = {
  id: 'lesson-ch10-5-1',
  unitId: 'ch10-unit-5',
  title: 'Final Mastery Challenge',
  description: 'The capstone challenge: diagnose a multi-domain circuit failure by identifying the root cause, gathering evidence, and proposing the correct fix — integrating knowledge from all chapters.',
  stageLabel: CHAPTER_10_METADATA.stageLabel,
  prerequisites: ['lesson-ch10-4-2'],
  conceptsIntroduced: [
    'capstone multi-domain diagnosis',
    'evidence-based root cause identification',
    'curriculum-wide integration',
  ],
  initialNodes: CH10_NODES,
  initialCircuit: [
    {
      id: 'bat-1',
      type: 'battery',
      nodeA: 'n1',
      nodeB: 'n3',
      properties: { voltage: 9 },
      name: 'Battery (9V)',
      position: { x: 150, y: 250 },
      rotation: 0,
    },
    {
      id: 'res-1',
      type: 'resistor',
      nodeA: 'n1',
      nodeB: 'n2',
      properties: { resistance: 100 },
      name: 'Resistor (100Ω)',
      position: { x: 325, y: 150 },
      rotation: 0,
    },
    {
      id: 'sw-1',
      type: 'switch',
      nodeA: 'n2',
      nodeB: 'n4',
      properties: { isClosed: true },
      name: 'Switch (Closed)',
      position: { x: 500, y: 150 },
      rotation: 0,
    },
    {
      id: 'diode-1',
      type: 'diode',
      nodeA: 'n4',
      nodeB: 'n3',
      properties: { isForwardBiased: false },
      name: 'Diode (Reverse-Biased)',
      position: { x: 500, y: 300 },
      rotation: 0,
    },
  ],
  steps: [
    {
      id: 'step-1',
      text: 'Welcome to the final mastery challenge. This circuit integrates components from multiple chapters: a battery (DC fundamentals, Chapter 1-2), a resistor (Ohm\'s Law, Chapter 2), a switch (circuit control, Chapter 1), and a diode (active components, Chapter 8). The circuit is supposed to let current flow when the switch is closed, but no current flows even though the switch is confirmed closed and the battery is providing 9V. Your task is to diagnose the root cause by gathering evidence and identifying which component is responsible for blocking the current path.',
      highlights: ['bat-1', 'res-1', 'sw-1', 'diode-1'],
    },
    {
      id: 'step-2',
      text: 'Systematic diagnosis: check each component. Battery (n1 to n3): provides 9V — confirmed functional. Resistor (n1 to n2): 100Ω — confirmed functional, no break. Switch (n2 to n4): closed — confirmed, not blocking. Diode (n4 to n3): this is the suspect. A diode conducts only when forward-biased — when the anode (positive terminal) is at higher voltage than the cathode. If the diode is oriented in reverse, it is reverse-biased under this battery polarity and blocks all current regardless of the switch state. The diagnosis: the diode is reverse-biased and is the sole component causing the "no current" symptom.',
      highlights: ['diode-1'],
    },
    {
      id: 'step-3',
      text: 'The fix: reverse the diode orientation so that its anode faces n3 (the battery positive return) and its cathode faces n4. With the diode forward-biased, current will flow from battery positive (n1) through the resistor (n1→n2), through the switch (n2→n4), through the diode in the forward direction (n4→n3), and back to the battery negative terminal (n3). Each component is working correctly in its own domain — the fault was a single active-domain orientation error in the diode.',
      highlights: ['diode-1', 'bat-1'],
    },
  ],
  challenges: [
    {
      id: 'challenge-1',
      prompt: 'The circuit has a 9V battery, a 100Ω resistor, a closed switch, and a diode in series. No current flows. Using evidence from each component and your knowledge from across all chapters, diagnose the root cause of the failure.',
      type: 'diagnose',
      evaluationCriteria: { topologyCheck: 'complete' },
      diagnoseConfig: {
        acceptedCauses: [
          'diode-reverse-biased',
          'diode-orientation-wrong',
          'diode-blocking-current',
        ],
        evidenceItems: [
          'battery-voltage-present',
          'switch-confirmed-closed',
          'resistor-intact',
          'diode-reverse-biased',
          'no-current-path-through-diode',
        ],
        minEvidenceMatches: 2,
      },
      hints: [
        'Work through each component systematically: battery, resistor, switch, then diode.',
        'A diode has a direction — it conducts only when its anode is at higher potential than its cathode. Check the diode orientation against the battery polarity.',
      ],
      showRubricPanel: true,
    },
  ],
  theoryContent: [
    {
      title: 'Capstone Diagnosis: Integrating All Domains',
      content: 'A complete circuit diagnosis integrates knowledge from every domain studied: DC fundamentals (battery voltage, Ohm\'s Law), circuit topology (switch state, path continuity), active components (diode bias direction), and component-by-component isolation. The final mastery challenge demonstrates that real-world circuit failures are diagnosed by the same systematic method used in every chapter: gather evidence component by component, rule out functioning components, and identify the first failing element in the signal chain.',
    },
    {
      title: 'Diode Orientation and the Forward-Bias Requirement',
      content: 'A diode inserted in the wrong orientation becomes an open circuit for the given source polarity. The symptom — no current despite a closed switch and functional battery — is the hallmark of a reverse-biased diode. The evidence path: battery OK → resistor OK → switch OK → diode reverse-biased → no current path. The fix is always orientation correction, not component replacement. Recognizing the reverse-bias symptom is a cross-domain diagnostic skill combining DC circuit tracing (Chapters 1-4) with active component behavior (Chapter 8).',
    },
  ],
  sandboxUnlocks: ['final-mastery-prompt-set'],
  availableActions: ['inspect', 'toggle-switch'],
  currentOverlayAvailable: true,
  showFormulaPanel: true,
  usesTimeControls: false,
  formulasShown: [],
  theoryPageAdditions: [
    {
      id: 'theory-ch10-final-mastery',
      title: 'Final Mastery: Whole-Curriculum Integration and Active-Component Diagnosis',
      content: 'The final mastery challenge tests whole-curriculum integration. The core skill: systematic evidence gathering across all component types, applying the correct domain\'s analysis tool to each component (DC analysis for battery/resistor, topology check for switch state, active-domain bias check for the diode), and arriving at the correct diagnosis — reverse-biased diode — from evidence rather than guesswork. This integrates Chapters 1-2 (DC), Chapter 3 (topology), Chapter 8 (active), and the diagnosis methodology from Chapter 5 and Chapter 10.',
      sourceLesson: 'lesson-ch10-5-1',
    },
  ],
  quizzesUnlocked: ['quiz-ch10-final-mastery-review'],
};
