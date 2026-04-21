import type { LessonConfig } from '../../../../types/lesson.ts';
import { CH9_NODES } from '../../shared.ts';

export const lessonCh9_1_1: LessonConfig = {
  id: 'lesson-ch9-1-1',
  unitId: 'ch9-unit-1',
  title: 'A Circuit Can Represent a Condition',
  description: 'Reframe the transistor-switch from Chapter 8 using input/output state language — the foundation of digital-style thinking.',
  stageLabel: 'Advanced Beginner Electronics to Early Digital Logic',
  prerequisites: ['chapter-8-complete'],
  conceptsIntroduced: [
    'input state',
    'output state',
    'a circuit can represent a condition not only raw energy transfer',
    'high/low simplified language',
    'Chapter 8 transistor-switch reframed as input-high → output-high',
  ],
  initialNodes: CH9_NODES,
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
      id: 'transistor-1',
      type: 'transistor',
      nodeA: 'n1',
      nodeB: 'n2',
      properties: { controlEnabled: true },
      name: 'Control Input (High)',
      position: { x: 325, y: 150 },
      rotation: 0,
    },
    {
      id: 'res-1',
      type: 'resistor',
      nodeA: 'n2',
      nodeB: 'n4',
      properties: { resistance: 100 },
      name: 'Output (Active)',
      position: { x: 500, y: 250 },
      rotation: 0,
    },
    {
      id: 'wire-1',
      type: 'wire',
      nodeA: 'n3',
      nodeB: 'n4',
      properties: { wireResistance: 0 },
      name: 'Wire',
      position: { x: 325, y: 350 },
      rotation: 0,
    },
  ],
  steps: [
    {
      id: 'step-1',
      text: 'In Chapter 8, you used transistors as switches — a control input turns a load on or off. Now we describe the same behavior using state language: the input is "high" or "low", and the output is "active" or "inactive". The circuit has not changed. The vocabulary has.',
      highlights: ['transistor-1'],
    },
    {
      id: 'step-2',
      text: 'Look at this circuit: the transistor\'s control is enabled — we say the input is HIGH. Because the input is HIGH, the transistor conducts and the load operates — we say the output is HIGH (active). If the control were disabled (input LOW), the transistor would block and the load would be inactive (output LOW).',
      highlights: ['transistor-1', 'res-1'],
      showCurrentOverlay: true,
    },
    {
      id: 'step-3',
      text: 'In this simplified digital model, HIGH means the condition is met — the controlling signal is present, the switch is on, voltage is applied. LOW means the condition is not met. The output state follows from the input state. This input-to-output relationship is the core idea behind all gate-style logic.',
      theoryCheck: {
        question: 'In the simplified model, what does "input HIGH" mean?',
        choices: [
          {
            id: 'tc-a',
            label: 'The input voltage is being measured with a meter',
            isCorrect: false,
            explanation: 'Measuring voltage is a separate action. HIGH is a state that describes whether the input condition is active, not a measurement event.',
          },
          {
            id: 'tc-b',
            label: 'The input condition is active or met — the controlling signal is present',
            isCorrect: true,
            explanation: 'Correct. HIGH means the input condition is active: the controlling signal is present and the input is in its "on" state.',
          },
          {
            id: 'tc-c',
            label: 'The voltage in the circuit is higher than 5V',
            isCorrect: false,
            explanation: 'HIGH is a simplified state label, not a specific voltage threshold. In this model, HIGH means "the condition is met," not a particular numeric value.',
          },
        ],
        explanation: 'In the simplified digital model, HIGH means the input condition is met — the controlling signal is present and the input is active.',
      },
    },
  ],
  challenges: [
    {
      id: 'challenge-1',
      prompt: 'In the shown circuit, the transistor\'s control input is HIGH. What is the output state?',
      type: 'choose',
      evaluationCriteria: { correctChoiceId: 'ch1-b' },
      hints: ['When the control input is HIGH, the transistor conducts — think about what that means for the load.'],
      choices: [
        {
          id: 'ch1-a',
          label: 'The output is LOW (inactive) — the transistor does not respond to a HIGH input',
          isCorrect: false,
          explanation: 'A HIGH input causes the transistor to conduct, which activates the load. The output would be LOW only when the input is LOW.',
        },
        {
          id: 'ch1-b',
          label: 'The output is HIGH (active) — the transistor conducts when its control is high',
          isCorrect: true,
          explanation: 'Correct. When the input is HIGH, the transistor conducts and the load operates — the output is HIGH.',
        },
        {
          id: 'ch1-c',
          label: 'The output depends only on the battery voltage, not the input state',
          isCorrect: false,
          explanation: 'The transistor\'s control state determines whether current reaches the load. The battery provides the energy, but the input state gates it.',
        },
      ],
    },
    {
      id: 'challenge-2',
      prompt: 'A circuit produces a LOW output when its input is HIGH, and a HIGH output when its input is LOW. What is this behavior called?',
      type: 'choose',
      evaluationCriteria: { correctChoiceId: 'ch2-b' },
      hints: ['The output is always the opposite of the input — there is a specific name for this relationship.'],
      choices: [
        {
          id: 'ch2-a',
          label: 'Amplification — the output signal is boosted relative to the input',
          isCorrect: false,
          explanation: 'Amplification means increasing the magnitude of a signal. Flipping HIGH to LOW and LOW to HIGH is not amplification.',
        },
        {
          id: 'ch2-b',
          label: 'Inversion — the output is the opposite of the input state',
          isCorrect: true,
          explanation: 'Correct. When the output is always the opposite of the input (HIGH→LOW, LOW→HIGH), the behavior is called inversion.',
        },
        {
          id: 'ch2-c',
          label: 'Switching — the output turns on and off rapidly',
          isCorrect: false,
          explanation: 'Switching refers to changing states, but does not describe the specific relationship where the output is always opposite the input.',
        },
      ],
    },
  ],
  theoryContent: [
    {
      title: 'Input States and Output States',
      content: 'In the simplified digital model, circuits are described using state language rather than raw voltage values. An input is either HIGH (condition met, signal present) or LOW (condition not met, signal absent). The output is likewise HIGH (active) or LOW (inactive). The relationship between input and output states is what defines the behavior of a logic circuit.',
    },
    {
      title: 'High and Low in the Simplified Model',
      content: 'HIGH and LOW are simplified labels that describe whether a condition is active. HIGH means the controlling signal is present — the transistor conducts, the switch is closed, the output is on. LOW means the condition is absent. These labels let you reason about circuit behavior without tracking specific voltages.',
    },
  ],
  sandboxUnlocks: [],
  availableActions: ['inspect', 'toggle-switch'],
  currentOverlayAvailable: true,
  showFormulaPanel: true,
  usesTimeControls: false,
  formulasShown: [],
  theoryPageAdditions: [
    {
      id: 'theory-ch9-input-output-states',
      title: 'Input states and output states',
      content: 'In the simplified digital model, circuits are described using state language. An input is either HIGH (condition met) or LOW (condition not met). The output follows from the input state. This framing moves from energy transfer to logical relationships between conditions.',
      sourceLesson: 'lesson-ch9-1-1',
    },
    {
      id: 'theory-ch9-high-low',
      title: 'High and low in the simplified model',
      content: 'HIGH means the input or output condition is active — the signal is present, the switch is on. LOW means the condition is absent. These are simplified labels, not specific voltage measurements. They allow reasoning about circuit behavior in terms of logical states.',
      sourceLesson: 'lesson-ch9-1-1',
    },
  ],
  quizzesUnlocked: ['quiz-ch9-input-output-state-basics'],
};
