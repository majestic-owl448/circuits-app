import type { LessonConfig } from '../../../../types/lesson.ts';
import { CHAPTER_6_METADATA, CH6_NODES } from '../../shared.ts';

export const lessonCh6_2_2: LessonConfig = {
  id: 'lesson-ch6-2-2',
  unitId: 'ch6-unit-2',
  title: 'Charging Behavior',
  description: 'Observe that a capacitor circuit changes over time after the switch is closed, with current falling and capacitor voltage rising.',
  stageLabel: CHAPTER_6_METADATA.stageLabel,
  prerequisites: ['lesson-ch6-2-1'],
  conceptsIntroduced: [
    'charging in the simplified model',
    'current falls as the capacitor charges',
    'capacitor voltage rises toward the source voltage',
  ],
  initialNodes: CH6_NODES,
  initialCircuit: [
    {
      id: 'bat-1',
      type: 'battery',
      nodeA: 'n1',
      nodeB: 'n3',
      properties: { voltage: 9 },
      name: 'Battery',
      position: { x: 150, y: 250 },
      rotation: 0,
    },
    {
      id: 'cap-1',
      type: 'capacitor',
      nodeA: 'n1',
      nodeB: 'n2',
      properties: { capacitance: 0.001 },
      name: 'Capacitor',
      position: { x: 325, y: 150 },
      rotation: 0,
    },
    {
      id: 'sw-1',
      type: 'switch',
      nodeA: 'n2',
      nodeB: 'n4',
      properties: { isClosed: false },
      name: 'Switch',
      position: { x: 500, y: 250 },
      rotation: 0,
    },
    {
      id: 'res-1',
      type: 'resistor',
      nodeA: 'n3',
      nodeB: 'n4',
      properties: { resistance: 100 },
      name: 'Resistor',
      position: { x: 325, y: 350 },
      rotation: 0,
    },
  ],
  steps: [
    {
      id: 'step-1',
      text: 'When the switch is open, the capacitor is uncharged. No current flows. This is the initial state before anything happens.',
      highlights: ['cap-1', 'sw-1'],
    },
    {
      id: 'step-2',
      text: 'Close the switch to begin charging. Right at the moment of closing, the capacitor acts like a short circuit — the full source voltage appears across the resistor and maximum current flows. Then, as the capacitor charges, the current gradually falls.',
      requiredAction: { type: 'toggle-switch', componentId: 'sw-1', targetState: true },
      highlights: ['sw-1', 'cap-1', 'res-1'],
    },
    {
      id: 'step-3',
      text: 'Use the time slider to scrub through the event. Watch the "Capacitor" voltage line rise in the timeline panel while the current line falls. At the "Late" checkpoint the capacitor is nearly fully charged and current is nearly zero.',
      theoryCheck: {
        question: 'During capacitor charging, what happens to the current over time?',
        choices: [
          { id: 'tc-a', label: 'Current starts high and decreases as the capacitor charges', isCorrect: true, explanation: 'Correct. At first the capacitor looks like a short, allowing maximum current. As it charges, it opposes more of the source voltage and current falls.' },
          { id: 'tc-b', label: 'Current stays constant throughout the charging process', isCorrect: false, explanation: 'Current is not constant during charging. It starts at a maximum and decreases exponentially as the capacitor voltage rises.' },
          { id: 'tc-c', label: 'Current starts at zero and rises as the capacitor charges', isCorrect: false, explanation: 'That describes an inductor circuit (RL). For RC charging, current is highest at the start and falls as charging progresses.' },
        ],
        explanation: 'During RC charging, initial current is I = V/R. As the capacitor charges, it backs up the source voltage and current falls exponentially.',
      },
    },
  ],
  challenges: [
    {
      id: 'challenge-1',
      prompt: 'In an RC charging circuit, right after the switch closes, how does the current compare to the current after a long time?',
      type: 'choose',
      evaluationCriteria: { correctChoiceId: 'ch1-a' },
      hints: ['Think about what the capacitor looks like at the very first instant versus after it is fully charged.'],
      choices: [
        { id: 'ch1-a', label: 'Current is higher right after closing, lower (near zero) after a long time', isCorrect: true, explanation: 'Correct. Initially the capacitor acts like a short, allowing maximum current (I = V/R). Once fully charged it blocks DC, and current falls to zero.' },
        { id: 'ch1-b', label: 'Current is lower right after closing, higher after a long time', isCorrect: false, explanation: 'This describes an RL circuit, not an RC circuit. For RC, initial current is maximum and falls over time.' },
        { id: 'ch1-c', label: 'Current is the same right after closing and after a long time', isCorrect: false, explanation: 'Current changes significantly during RC charging. It is not constant.' },
      ],
    },
    {
      id: 'challenge-2',
      prompt: 'What is the capacitor voltage approaching as it finishes charging in this circuit (9V source)?',
      type: 'choose',
      evaluationCriteria: { correctChoiceId: 'ch2-b' },
      hints: ['Where does the "driving force" for charging come from?'],
      choices: [
        { id: 'ch2-a', label: 'It approaches 0V — the capacitor resets to zero when fully charged', isCorrect: false, explanation: 'A fully charged capacitor has voltage equal to the source. It does not reset to zero.' },
        { id: 'ch2-b', label: 'It approaches the source voltage (9V)', isCorrect: true, explanation: 'Correct. The capacitor charges until its voltage equals the source voltage. At that point, no more current flows.' },
        { id: 'ch2-c', label: 'It approaches half the source voltage (4.5V)', isCorrect: false, explanation: 'The capacitor charges to the full source voltage, not half. Voltage divides only when multiple components share the voltage.' },
      ],
    },
  ],
  theoryContent: [
    {
      title: 'Capacitor Charging in the Simplified Model',
      content: 'When a capacitor charges through a resistor, current starts at a maximum (V/R) and falls exponentially. The capacitor voltage rises from 0V toward the source voltage. Both follow an exponential curve.',
    },
  ],
  sandboxUnlocks: [],
  availableActions: ['toggle-switch'],
  currentOverlayAvailable: true,
  showFormulaPanel: true,
  usesTimeControls: true,
  formulasShown: [],
  theoryPageAdditions: [
    {
      id: 'theory-ch6-cap-charging',
      title: 'Capacitor Charging in the Simplified Model',
      content: 'During RC charging, current starts at V/R and falls exponentially as the capacitor charges. Capacitor voltage rises from 0V toward the source voltage following 1 − e^(−t/τ), where τ = RC.',
      sourceLesson: 'lesson-ch6-2-2',
    },
  ],
  quizzesUnlocked: ['quiz-ch6-capacitor-charging-basics'],
};
