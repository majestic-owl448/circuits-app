import type { LessonConfig } from '../../../../types/lesson.ts';
import { CHAPTER_10_METADATA, CH10_NODES } from '../../shared.ts';

export const lessonCh10_1_2: LessonConfig = {
  id: 'lesson-ch10-1-2',
  unitId: 'ch10-unit-1',
  title: 'Classify the Problem Domain',
  description: 'Practice classifying circuits into their primary reasoning domain before any calculation, using circuit evidence to support the classification.',
  stageLabel: CHAPTER_10_METADATA.stageLabel,
  prerequisites: ['lesson-ch10-1-1'],
  conceptsIntroduced: [
    'domain classification from circuit evidence',
    'using component inventory as domain signals',
    'classification as a pre-analysis discipline',
  ],
  initialNodes: CH10_NODES,
  initialCircuit: [
    {
      id: 'ac-src-1',
      type: 'ac-source',
      nodeA: 'n1',
      nodeB: 'n3',
      properties: { amplitude: 9, frequency: 50 },
      name: 'AC Source (9V, 50Hz)',
      position: { x: 150, y: 250 },
      rotation: 0,
    },
    {
      id: 'res-1',
      type: 'resistor',
      nodeA: 'n1',
      nodeB: 'n2',
      properties: { resistance: 100 },
      name: 'Resistor',
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
      text: 'Classification is not a formal calculation — it is a quick triage that selects the right toolbox before you start. The key evidence comes from the component inventory: what source drives the circuit? What non-resistive components are present? What is the precision requirement? Each answer points to one or more domains.',
    },
    {
      id: 'step-2',
      text: 'Domain signals to check: (1) Battery or DC source only → DC topology domain. (2) AC source present → AC/conversion domain applies to the source. (3) Capacitor or inductor present → time-dependent domain governs transients. (4) Diode, transistor → active-components domain. (5) Logic gates → digital domain. (6) Wire resistance or internalResistance specified → non-ideal DC. These signals can co-occur.',
      highlights: ['ac-src-1'],
    },
    {
      id: 'step-3',
      text: 'In this circuit an AC source drives a single resistor. Component inventory: AC source (signal: AC domain), resistor (signal: DC-compatible load, no time-storage). Classification: primary domain is AC. The resistor\'s behavior is the same in AC as in DC (purely resistive), so the DC series formula still applies at peak values. The domain label does not change the formula — it tells you to use peak or RMS voltage as appropriate.',
      theoryCheck: {
        question: 'You see a circuit with a battery, three resistors in a mix of series and parallel connections, and wires with non-zero resistance values. What domains apply?',
        choices: [
          {
            id: 'tc-a',
            label: 'DC topology only — three resistors means only one domain',
            isCorrect: false,
            explanation: 'The number of resistors does not limit the number of domains. The presence of wires with non-zero resistance values is a non-ideal DC signal, so both DC topology and non-ideal DC apply.',
          },
          {
            id: 'tc-b',
            label: 'DC topology and non-ideal DC — the mixed resistor network sets topology; wire resistance adds non-ideal effects',
            isCorrect: true,
            explanation: 'Correct. The mixed resistor network is classified by DC topology (series/parallel analysis). Wires with specified resistance values require non-ideal DC corrections on top of the ideal topology calculation.',
          },
          {
            id: 'tc-c',
            label: 'Non-ideal DC only — wire resistance dominates and makes the topology irrelevant',
            isCorrect: false,
            explanation: 'Non-ideal effects are corrections on top of the topology analysis. You still need DC topology to determine the current paths and equivalent resistance before applying wire resistance corrections.',
          },
        ],
        explanation: 'Domain signals co-occur. Identify all signals from the component inventory and label every active domain before starting any calculation.',
      },
    },
  ],
  challenges: [
    {
      id: 'challenge-1',
      prompt: 'A circuit contains: a 9V battery, two resistors in series, and a capacitor in parallel with one of the resistors. The circuit has just been connected. What is the primary domain for the transient analysis?',
      type: 'classify',
      classifyConfig: {
        categories: ['DC series/parallel', 'Time-dependent (RC/RL)', 'AC/Conversion', 'Active components', 'Digital logic'],
        correctCategory: 'Time-dependent (RC/RL)',
        requiredEvidenceSignals: ['capacitor present', 'just-connected transient condition'],
      },
      evaluationCriteria: {},
      hints: [
        'The battery is DC, but the circuit has just been connected — what component creates time-varying behavior?',
        'A capacitor in parallel with a resistor forms an RC circuit when the circuit is first energized.',
      ],
    },
    {
      id: 'challenge-2',
      prompt: 'A circuit contains: an AC source, an AC-to-DC converter, and a resistive load. What domain governs the output side of the converter?',
      type: 'choose',
      evaluationCriteria: { correctChoiceId: 'ch2-b' },
      hints: ['Think about what an AC-to-DC converter produces on its output terminals.'],
      choices: [
        {
          id: 'ch2-a',
          label: 'AC/Conversion — the AC source drives the whole circuit including the output',
          isCorrect: false,
          explanation: 'The AC domain governs the input side of the converter. The output side receives DC, so DC series/parallel analysis applies to the load.',
        },
        {
          id: 'ch2-b',
          label: 'DC series/parallel — the converter output is DC, so the load is analyzed as a DC resistive circuit',
          isCorrect: true,
          explanation: 'Correct. An AC-to-DC converter produces a DC output. The load side sees a DC voltage and is analyzed with DC series/parallel tools.',
        },
        {
          id: 'ch2-c',
          label: 'Non-ideal DC — converter output always has ripple that requires non-ideal analysis',
          isCorrect: false,
          explanation: 'In the simplified model, converter output is treated as clean DC. Non-ideal effects apply if you have specific internal resistance or wire loss values, not simply because a converter is present.',
        },
      ],
    },
  ],
  theoryContent: [
    {
      title: 'Domain Classification from Component Inventory',
      content: 'Before calculating, scan the component inventory for domain signals. Each component type carries a signal: AC source → AC domain; capacitor/inductor → time-dependent domain; diode/transistor → active-components domain; logic gates → digital domain; wire resistance / internalResistance specified → non-ideal DC. Multiple signals mean multiple active domains; you must layer the analyses.',
    },
    {
      title: 'Classification as a Pre-Analysis Discipline',
      content: 'Classification is not redundant — it prevents two common errors: (1) applying DC steady-state formulas to a circuit that has not yet reached steady state (missing time-dependent domain), and (2) using ideal formulas when non-ideal parameters are specified. A quick classification before any calculation is the professional habit that prevents these errors.',
    },
  ],
  sandboxUnlocks: [],
  availableActions: ['inspect'],
  currentOverlayAvailable: true,
  showFormulaPanel: true,
  formulasShown: [],
  theoryPageAdditions: [
    {
      id: 'theory-ch10-classification-signals',
      title: 'Chapter 10: Domain classification signals by component type',
      content: 'Each component type is a domain signal: AC source → AC/conversion; capacitor/inductor → time-dependent; diode/transistor → active components; logic gates → digital logic; wire/internalResistance values → non-ideal DC; battery + resistors → DC topology. Read the inventory before calculating.',
      sourceLesson: 'lesson-ch10-1-2',
    },
    {
      id: 'theory-ch10-layered-domains',
      title: 'Chapter 10: Layering multiple active domains',
      content: 'When more than one domain signal is present, each domain adds a layer to the analysis. Start with the source domain, then add energy-storage or active-component layers, then apply non-ideal corrections. Never skip a domain that a component signals.',
      sourceLesson: 'lesson-ch10-1-2',
    },
  ],
  quizzesUnlocked: ['quiz-ch10-domain-classification-basics'],
};
