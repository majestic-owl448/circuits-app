import type { LessonConfig } from '../../../../types/lesson.ts';
import { CHAPTER_6_METADATA, CH6_NODES } from '../../shared.ts';

export const lessonCh6_2_4: LessonConfig = {
  id: 'lesson-ch6-2-4',
  unitId: 'ch6-unit-2',
  title: 'Discharging Behavior',
  description: 'Understand that a capacitor can release its stored energy and that the discharge process mirrors charging in reverse.',
  stageLabel: CHAPTER_6_METADATA.stageLabel,
  prerequisites: ['lesson-ch6-2-3'],
  conceptsIntroduced: [
    'discharging',
    'release of stored energy in the simplified model',
    'time-dependent decay in discharge behavior',
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
      properties: { isClosed: true },
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
      text: 'Move the time slider to the "Late" position. The capacitor is fully charged — it holds 9V and current has dropped to zero. This is the steady state you saw in the previous lesson.',
      highlights: ['cap-1'],
    },
    {
      id: 'step-2',
      text: 'Open the switch to disconnect the battery. The capacitor holds its charge because there is no complete path for current to flow. To discharge, a capacitor needs a resistive path — once one is provided, the stored voltage drives current through the resistor and the capacitor voltage falls.',
      requiredAction: { type: 'toggle-switch', componentId: 'sw-1', targetState: false },
      highlights: ['cap-1', 'sw-1'],
    },
    {
      id: 'step-3',
      text: 'In a discharge event, the roles reverse: the capacitor acts as the energy source, driving current through the resistor. The capacitor voltage falls exponentially from its initial charged value toward zero — the exact mirror of the charging curve.',
      theoryCheck: {
        question: 'During capacitor discharge, what happens to the capacitor voltage over time?',
        choices: [
          { id: 'tc-a', label: 'It falls from its initial charged value toward zero', isCorrect: true, explanation: 'Correct. The capacitor releases its stored energy through the resistor. Voltage decays exponentially from its initial value toward zero.' },
          { id: 'tc-b', label: 'It rises toward the source voltage', isCorrect: false, explanation: 'That describes charging. During discharge (with no source), the capacitor voltage falls, not rises.' },
          { id: 'tc-c', label: 'It stays constant because the capacitor is fully charged', isCorrect: false, explanation: 'A fully charged capacitor holds its voltage only if there is no discharge path. Once a resistive path is provided, the voltage falls.' },
        ],
        explanation: 'During discharge, the capacitor voltage falls from its initial value toward zero as stored energy is released through the resistor.',
      },
    },
  ],
  challenges: [
    {
      id: 'challenge-1',
      prompt: 'How does discharge behavior compare to charging behavior in an RC circuit?',
      type: 'choose',
      evaluationCriteria: { correctChoiceId: 'ch1-b' },
      hints: ['Think about the direction of the voltage change in each case.'],
      choices: [
        { id: 'ch1-a', label: 'They are identical — both show current rising and capacitor voltage rising', isCorrect: false, explanation: 'Charging shows current falling and capacitor voltage rising. Discharge is the reverse: capacitor voltage falls as it releases energy.' },
        { id: 'ch1-b', label: 'They are mirror images — charging builds voltage up; discharge lets it fall back toward zero', isCorrect: true, explanation: 'Correct. In charging, voltage rises toward the source. In discharge (with no source), voltage falls exponentially toward zero.' },
        { id: 'ch1-c', label: 'They are unrelated — discharge only happens in different component types', isCorrect: false, explanation: 'The same capacitor and resistor are involved in both processes. The direction of energy flow is simply reversed.' },
      ],
    },
    {
      id: 'challenge-2',
      prompt: 'A capacitor charged to 9V is connected to a 100Ω resistor with no battery. What happens to the current right at the moment of connection?',
      type: 'choose',
      evaluationCriteria: { correctChoiceId: 'ch2-a' },
      hints: ['At the first instant, the capacitor voltage is still 9V — treat it like a 9V source momentarily.'],
      choices: [
        { id: 'ch2-a', label: 'Current is at its maximum (90mA), driven by the capacitor\'s initial voltage', isCorrect: true, explanation: 'Correct. At the start of discharge, the capacitor still holds 9V. I = V/R = 9/100 = 90mA. Current then falls as the capacitor discharges.' },
        { id: 'ch2-b', label: 'Current is zero because there is no battery providing voltage', isCorrect: false, explanation: 'The capacitor acts as the voltage source during discharge. Its stored voltage drives the initial current through the resistor.' },
        { id: 'ch2-c', label: 'Current builds up slowly from zero, just like during charging', isCorrect: false, explanation: 'That describes inductor behavior. During RC discharge, current starts at its maximum and falls — the opposite of charging.' },
      ],
    },
  ],
  theoryContent: [
    {
      title: 'Capacitor Discharging in the Simplified Model',
      content: 'When a charged capacitor is connected to a resistor without a source, it discharges — driving current through the resistor as its voltage falls exponentially from its initial value toward zero. This mirrors the charging process in reverse.',
    },
  ],
  sandboxUnlocks: [],
  availableActions: ['toggle-switch'],
  currentOverlayAvailable: true,
  showFormulaPanel: true,
  usesTimeControls: true,
  formulasShown: [
    {
      formula: '\u03c4 = R \u00d7 C',
      symbols: [
        { symbol: '\u03c4', name: 'Time constant', unit: 's' },
        { symbol: 'R', name: 'Resistance', unit: '\u03a9' },
        { symbol: 'C', name: 'Capacitance', unit: 'F' },
      ],
    },
  ],
  theoryPageAdditions: [
    {
      id: 'theory-ch6-cap-discharge',
      title: 'Capacitor Discharging in the Simplified Model',
      content: 'During RC discharge, the capacitor acts as the energy source. Its voltage falls exponentially from the initial charged value toward zero, following V_C = V_0 \u00d7 e^(\u2212t/\u03c4). Current starts at maximum and falls as the capacitor empties.',
      sourceLesson: 'lesson-ch6-2-4',
    },
  ],
  quizzesUnlocked: ['quiz-ch6-capacitor-discharge-basics'],
};
