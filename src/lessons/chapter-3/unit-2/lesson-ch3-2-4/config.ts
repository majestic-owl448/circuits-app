import type { LessonConfig } from '../../../../types/lesson.ts';
import { SERIES_NODES, SERIES_TWO_BULBS } from '../../../shared.ts';
import type { CircuitComponent } from '../../../../types/circuit.ts';

const workingCircuit: CircuitComponent[] = SERIES_TWO_BULBS.map(c =>
  c.id === 'switch-1' ? { ...c, properties: { isClosed: true } } : c,
);

export const lessonCh3_2_4: LessonConfig = {
  id: 'lesson-ch3-2-4',
  unitId: 'ch3-unit-2',
  title: 'If One Breaks, All Stop',
  description: 'When one series component fails open, the entire circuit stops. A single broken element breaks the only path for current.',
  stageLabel: 'Early Intermediate',
  prerequisites: ['lesson-ch3-2-3'],
  conceptsIntroduced: ['broken element stops all in one-path circuit'],
  initialCircuit: workingCircuit,
  initialNodes: SERIES_NODES,
  steps: [
    {
      id: 'step-1',
      text: 'Here is the working series circuit: 9V battery, two 45\u03A9 bulbs, switch closed. Current flows through both bulbs and they both glow.',
      highlights: ['bulb-1', 'bulb-2'],
      showCurrentOverlay: true,
    },
    {
      id: 'step-2',
      text: 'Now imagine Bulb 2 fails\u2014its filament breaks, creating an open gap in the circuit. With no path through Bulb 2, there is no complete loop.',
      highlights: ['bulb-2'],
    },
    {
      id: 'step-3',
      text: 'When the path is broken, current drops to zero everywhere. Bulb 1 also goes dark, even though it is perfectly fine. In a series circuit, every component depends on every other component to maintain the single path.',
      theoryCheck: {
        question: 'Why does Bulb 1 go out when Bulb 2 breaks?',
        choices: [
          { id: 'tc-a', label: 'There is only one path, and the break stops all current', isCorrect: true, explanation: 'Correct! In series there is one path. A break anywhere stops current everywhere.' },
          { id: 'tc-b', label: 'Bulb 1 also broke at the same time', isCorrect: false, explanation: 'Bulb 1 is fine. It goes dark because the broken path prevents any current from flowing through it.' },
          { id: 'tc-c', label: 'The battery turned off', isCorrect: false, explanation: 'The battery still provides voltage. But without a complete path, no current can flow.' },
        ],
        explanation: 'A series circuit has only one path. If any component fails open, the entire path is broken and no current flows through any component.',
      },
    },
    {
      id: 'step-4',
      text: 'This is the fundamental vulnerability of series circuits: one failure anywhere shuts down everything. Old-style string lights worked this way\u2014one burned-out bulb made the whole string go dark.',
    },
  ],
  challenges: [
    {
      id: 'challenge-1',
      prompt: 'Two bulbs are connected in series. If one bulb breaks (its filament opens), what happens?',
      type: 'choose',
      evaluationCriteria: { correctChoiceId: 'ch-a' },
      hints: [
        'Think about how many paths current has in a series circuit.',
        'If the only path is broken, where can current flow?',
      ],
      choices: [
        { id: 'ch-a', label: 'Both bulbs go out', isCorrect: true, explanation: 'Correct! The broken bulb creates a gap in the only path. No current flows, so both bulbs go dark.' },
        { id: 'ch-b', label: 'Only the broken bulb goes out', isCorrect: false, explanation: 'In series, there is only one path. A break in that path stops current to all components, not just the broken one.' },
        { id: 'ch-c', label: 'The other bulb gets brighter', isCorrect: false, explanation: 'With the path broken, no current flows at all. The remaining bulb cannot get brighter with zero current.' },
      ],
    },
    {
      id: 'challenge-2',
      prompt: 'Which structural feature of a series circuit causes all components to fail when one breaks?',
      type: 'choose',
      evaluationCriteria: { correctChoiceId: 'ch-b' },
      hints: [
        'Consider how many paths current can take in a series circuit.',
        'What makes series different from other circuit configurations?',
      ],
      choices: [
        { id: 'ch-a', label: 'The components share the same voltage', isCorrect: false, explanation: 'Voltage sharing is a property of series circuits, but it is not what causes total failure. The issue is the single path.' },
        { id: 'ch-b', label: 'There is only one path for current (one-path structure)', isCorrect: true, explanation: 'Correct! Series circuits have a single path. Any break in that path stops all current flow to every component.' },
        { id: 'ch-c', label: 'The battery cannot supply enough power', isCorrect: false, explanation: 'The battery is fine. The problem is structural: one path means one break stops everything.' },
      ],
    },
  ],
  theoryContent: [
    {
      title: 'Series fault behavior',
      content: 'In a series circuit, all components share a single current path. If any component fails open (breaks), the path is interrupted and current drops to zero through every component. This is the key vulnerability of series wiring.',
    },
    {
      title: 'One-path dependency',
      content: 'Every component in a series circuit depends on every other component to maintain the path. A single open failure anywhere shuts down the entire circuit, regardless of which component failed.',
    },
  ],
  sandboxUnlocks: [],
  availableActions: ['toggle-switch', 'drag-to-place', 'connect-wire'],
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
    {
      formula: 'R_total = R\u2081 + R\u2082',
      symbols: [
        { symbol: 'R_total', name: 'Total resistance', unit: 'ohms (\u03A9)' },
        { symbol: 'R\u2081', name: 'Resistance 1', unit: 'ohms (\u03A9)' },
        { symbol: 'R\u2082', name: 'Resistance 2', unit: 'ohms (\u03A9)' },
      ],
    },
  ],
  theoryPageAdditions: [
    {
      id: 'theory-ch3-series-fault-behavior',
      title: 'Series fault behavior',
      content: 'A series circuit has a single path for current. If any component in that path fails open\u2014a burned filament, a loose wire, a tripped switch\u2014the entire path is broken and current drops to zero everywhere. Every other component stops working, even if they are perfectly functional. This one-path dependency is the fundamental trade-off of series wiring: simple design, but no fault tolerance.',
      sourceLesson: 'lesson-ch3-2-4',
    },
  ],
  quizzesUnlocked: ['quiz-ch3-series-fault'],
};
