import type { LessonConfig } from '../../../types/lesson.ts';
import { STANDARD_CIRCUIT, STANDARD_NODES } from '../../shared.ts';

export const lesson5_2: LessonConfig = {
  id: 'lesson-5-2',
  unitId: 'unit-5',
  title: 'Before the Math Starts',
  description: 'Understand that the next chapter will begin active calculation using actual values.',
  stageLabel: 'Beginner to Early Intermediate',
  prerequisites: ['lesson-5-1'],
  conceptsIntroduced: ['transition point from formula recognition to formula use', 'numerical values are coming next'],
  initialCircuit: STANDARD_CIRCUIT,
  initialNodes: STANDARD_NODES,
  steps: [
    {
      id: 'step-1',
      text: 'This is the final lesson of the Foundations chapter. You have come a long way: from turning on a bulb for the first time to understanding voltage, current, resistance, and power as connected quantities.',
    },
    {
      id: 'step-2',
      text: 'Close the switch one more time and look at the circuit with everything you know.',
      requiredAction: { type: 'toggle-switch', componentId: 'switch-1', targetState: true },
      showCurrentOverlay: true,
      highlights: ['switch-1'],
    },
    {
      id: 'step-3',
      text: 'The battery provides voltage (V = 9 volts). The bulb has resistance (R = 45 ohms). Current (I) flows through the closed loop. The bulb uses power (P). You know what each of these means conceptually.',
      highlights: ['battery-1', 'bulb-1'],
    },
    {
      id: 'step-4',
      text: 'In the next chapter, you will start using V = IR and P = VI with actual numbers. You will calculate current from voltage and resistance, and calculate power from voltage and current. The formulas will become active tools, not just reference items.',
      theoryCheck: {
        question: 'Which formula would you use to find current if you know voltage and resistance?',
        choices: [
          { id: 'tc-a', label: 'P = VI', isCorrect: false, explanation: 'P = VI relates power to voltage and current, not directly to resistance.' },
          { id: 'tc-b', label: 'V = IR (rearranged to I = V/R)', isCorrect: true, explanation: 'Correct! V = IR can be rearranged to I = V/R, letting you find current from voltage and resistance.' },
        ],
        explanation: 'V = IR is Ohm\'s Law. To find current, rearrange it to I = V/R. This will be one of the first calculations you do in the next chapter.',
      },
    },
    {
      id: 'step-5',
      text: 'Open the switch. You have completed the Foundations chapter. You are ready for numbers.',
      requiredAction: { type: 'toggle-switch', componentId: 'switch-1', targetState: false },
      highlights: ['switch-1'],
    },
  ],
  challenges: [
    {
      id: 'challenge-1',
      prompt: 'Which formula would you use to relate voltage, current, and resistance?',
      type: 'choose',
      evaluationCriteria: { correctChoiceId: 'ch1-a' },
      hints: [
        'Which formula has V, I, and R?',
      ],
      choices: [
        { id: 'ch1-a', label: 'V = IR', isCorrect: true, explanation: 'Correct! Ohm\'s Law (V = IR) connects voltage, current, and resistance.' },
        { id: 'ch1-b', label: 'P = VI', isCorrect: false, explanation: 'P = VI relates power, voltage, and current — not resistance directly.' },
      ],
    },
    {
      id: 'challenge-2',
      prompt: 'Which formula relates power to voltage and current?',
      type: 'choose',
      evaluationCriteria: { correctChoiceId: 'ch2-b' },
      hints: [
        'Which formula has P, V, and I?',
      ],
      choices: [
        { id: 'ch2-a', label: 'V = IR', isCorrect: false, explanation: 'V = IR relates voltage, current, and resistance. It does not include power.' },
        { id: 'ch2-b', label: 'P = VI', isCorrect: true, explanation: 'Correct! P = VI is the power formula, relating power to voltage and current.' },
      ],
    },
  ],
  theoryContent: [
    {
      title: 'Transition to numerical analysis',
      content: 'You have built a strong conceptual foundation. The next chapter will introduce actual numerical calculations using V = IR and P = VI. You will compute current, voltage, resistance, and power with real values.',
    },
  ],
  sandboxUnlocks: [],
  availableActions: ['toggle-switch', 'drag-to-place', 'connect-wire', 'delete-component'],
  currentOverlayAvailable: true,
  showFormulaPanel: true,
  formulasShown: [
    {
      formula: 'V = IR',
      symbols: [
        { symbol: 'V', name: 'Voltage', unit: 'volts (V)' },
        { symbol: 'I', name: 'Current', unit: 'amperes (A)' },
        { symbol: 'R', name: 'Resistance', unit: 'ohms (\u03A9)' },
      ],
    },
    {
      formula: 'P = VI',
      symbols: [
        { symbol: 'P', name: 'Power', unit: 'watts (W)' },
        { symbol: 'V', name: 'Voltage', unit: 'volts (V)' },
        { symbol: 'I', name: 'Current', unit: 'amperes (A)' },
      ],
    },
  ],
  theoryPageAdditions: [
    {
      id: 'theory-transition-numerical',
      title: 'Transition to numerical analysis',
      content: 'You have built a strong conceptual foundation. The next chapter will introduce actual numerical calculations using V = IR and P = VI. You will compute current, voltage, resistance, and power with real values.',
      sourceLesson: 'lesson-5-2',
    },
  ],
  quizzesUnlocked: ['quiz-foundations-chapter-review'],
};
