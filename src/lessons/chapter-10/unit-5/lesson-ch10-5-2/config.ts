import type { LessonConfig } from '../../../../types/lesson.ts';
import { CH10_NODES, CHAPTER_10_METADATA } from '../../shared.ts';

export const lessonCh10_5_2: LessonConfig = {
  id: 'lesson-ch10-5-2',
  unitId: 'ch10-unit-5',
  title: 'Optional Mastery Review',
  description: 'A short optional review that tests cross-curriculum domain recognition — classify circuit problems by domain using knowledge from all ten chapters.',
  stageLabel: CHAPTER_10_METADATA.stageLabel,
  prerequisites: ['lesson-ch10-4-2'],
  conceptsIntroduced: [],
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
      id: 'wire-1',
      type: 'wire',
      nodeA: 'n2',
      nodeB: 'n4',
      properties: { wireResistance: 0 },
      name: 'Wire',
      position: { x: 500, y: 250 },
      rotation: 0,
    },
    {
      id: 'wire-2',
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
      text: 'This optional review covers the whole curriculum through domain classification. Every circuit problem you have solved across ten chapters belongs to one of five domains: DC (steady-state circuits with batteries and resistors), Transient (capacitors and inductors charging or discharging over time), AC (sinusoidal sources with frequency-dependent components), Active (diodes and transistors with state-dependent switching), or Logic (gates implementing HIGH/LOW state rules). Recognizing the domain from the component list is the first and most important step in any circuit analysis.',
      highlights: ['bat-1', 'res-1'],
    },
    {
      id: 'step-2',
      text: 'Classify the following problems: "A 9V battery, a 100Ω resistor, and a 47Ω resistor in series — find the total current." This is DC: no reactive components, constant source, apply Ohm\'s Law. "A sinusoidal 120V source driving a capacitor — find the current at 60Hz." This is AC: sinusoidal source, frequency matters. "A transistor switch controlling a bulb — enable it when the control input is HIGH." This is Active: the transistor bias state determines behavior. "Two NAND gates chained in series — trace the output for all input combinations." This is Logic: gate truth-table analysis applies. Domain classification is the master skill that organizes all chapter content into a unified framework.',
      highlights: [],
    },
  ],
  challenges: [
    {
      id: 'challenge-1',
      prompt: 'A circuit problem is described: "A 5V battery charges a 100µF capacitor through a 1kΩ resistor. How long does it take for the capacitor to reach 3.16V?" Classify this problem into its correct domain.',
      type: 'classify',
      evaluationCriteria: {},
      classifyConfig: {
        categories: ['DC (steady-state)', 'Transient (RC/RL)', 'AC (sinusoidal)', 'Active (diode/transistor)', 'Logic (gates)'],
        correctCategory: 'Transient (RC/RL)',
        requiredEvidenceSignals: [
          'capacitor-present',
          'dc-source-present',
          'time-dependent-voltage-question',
        ],
      },
      hints: [
        'Look at the components: a capacitor is a reactive element that changes state over time when connected to a DC source.',
        'The question asks "how long" — time-dependent questions in circuits with capacitors or inductors belong to the transient domain.',
      ],
    },
  ],
  theoryContent: [
    {
      title: 'The Five Domains: A Curriculum Summary',
      content: 'Ten chapters of circuit theory map to five analysis domains. DC (Chapters 1-4): batteries, resistors, switches — use Ohm\'s Law, KCL/KVL. Transient (Chapter 6): capacitors, inductors with DC sources — use exponential charge/discharge models (τ = RC or L/R). AC (Chapter 7): AC sources, frequency-dependent behavior — consider peak voltage and phase. Active (Chapter 8): diodes and transistors — check forward/reverse bias or control input state first. Logic (Chapter 9): gates — trace HIGH/LOW states using truth tables. Correctly classifying a problem into its domain determines which of these five analytical approaches to apply.',
    },
    {
      title: 'Domain Recognition as a Meta-Skill',
      content: 'Domain recognition is not a separate topic — it is the meta-skill that connects every chapter. A learner who can look at any circuit problem, identify its domain from the component list and source type, and then apply the correct analytical framework has mastered the full curriculum. The final review challenge tests this directly: given a problem statement, identify the domain before attempting any calculation. Getting the domain wrong guarantees the wrong approach and the wrong answer, no matter how correctly the selected approach is applied.',
    },
  ],
  sandboxUnlocks: [],
  availableActions: ['inspect'],
  currentOverlayAvailable: true,
  showFormulaPanel: true,
  usesTimeControls: false,
  formulasShown: [],
  theoryPageAdditions: [
    {
      id: 'theory-ch10-mastery-review',
      title: 'Optional Mastery Review: Five-Domain Classification',
      content: 'The five circuit analysis domains — DC, Transient, AC, Active, and Logic — represent the full scope of the Chapter 1-10 curriculum. Classifying a problem into the correct domain before applying any analytical tools is the master meta-skill that ties the curriculum together. Domain recognition drives all subsequent choices: which formulas apply, which component behaviors matter, and which kinds of faults are possible.',
      sourceLesson: 'lesson-ch10-5-2',
    },
  ],
  quizzesUnlocked: [],
};
