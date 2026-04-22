import type { LessonConfig } from '../../../../types/lesson.ts';
import { CHAPTER_10_METADATA, CH10_SIX_NODES } from '../../shared.ts';

export const lessonCh10_3_3: LessonConfig = {
  id: 'lesson-ch10-3-3',
  unitId: 'ch10-unit-3',
  title: 'AC and Conversion Capstone',
  description: 'Fix an AC source and converter circuit where the converter output is disconnected from the load, then verify correct AC and DC section operation.',
  stageLabel: CHAPTER_10_METADATA.stageLabel,
  prerequisites: ['lesson-ch10-2-2'],
  conceptsIntroduced: [
    'AC source and converter wiring in series',
    'AC-to-DC conversion path verification',
    'distinguishing AC-side and DC-side faults',
  ],
  initialNodes: CH10_SIX_NODES,
  initialCircuit: [
    {
      id: 'ac-src-1',
      type: 'ac-source',
      nodeA: 'n1',
      nodeB: 'n6',
      properties: { amplitude: 9, frequency: 50 },
      name: 'AC Source (9V peak, 50Hz)',
      position: { x: 120, y: 230 },
      rotation: 0,
    },
    {
      id: 'wire-ac-top',
      type: 'wire',
      nodeA: 'n1',
      nodeB: 'n2',
      properties: { wireResistance: 0 },
      name: 'Wire (AC side)',
      position: { x: 220, y: 120 },
      rotation: 0,
    },
    {
      id: 'converter-1',
      type: 'ac-dc-converter',
      nodeA: 'n2',
      nodeB: 'n3',
      properties: {},
      name: 'AC-DC Converter',
      position: { x: 320, y: 120 },
      rotation: 0,
    },
    {
      id: 'res-load',
      type: 'resistor',
      nodeA: 'n3',
      nodeB: 'n4',
      properties: { resistance: 100 },
      name: 'DC Load (100Ω)',
      position: { x: 520, y: 120 },
      rotation: 0,
    },
    {
      id: 'wire-bottom-left',
      type: 'wire',
      nodeA: 'n6',
      nodeB: 'n5',
      properties: { wireResistance: 0 },
      name: 'Wire',
      position: { x: 220, y: 340 },
      rotation: 0,
    },
  ],
  steps: [
    {
      id: 'step-1',
      text: 'This circuit has an AC source (9V peak, 50Hz) wiring through an AC-to-DC converter to a 100Ω resistive load. The AC source and converter are connected on the AC side, but the return path from the DC load back to the circuit is incomplete — the wire from n4 to n5 is missing, so the converter output cannot drive the load.',
      highlights: ['converter-1', 'res-load'],
    },
    {
      id: 'step-2',
      text: 'In an AC-and-converter circuit, there are two distinct sections: the AC section (source to converter input) and the DC section (converter output to load). A fault in either section blocks operation. Here the DC section return path is open. The AC source and converter are working, but the load receives no current.',
      highlights: ['ac-src-1', 'converter-1'],
    },
    {
      id: 'step-3',
      text: 'After adding the missing return wire (n4 to n5), the circuit is complete. The AC source provides sinusoidal voltage; the converter produces DC on its output; the resistive load receives DC current. This is the standard AC-to-DC conversion path. Verify the fix by checking that current flows through the DC load.',
      theoryCheck: {
        question: 'In an AC-to-DC conversion circuit, the load is not receiving current even though the AC source is working. Where is the fault most likely located?',
        choices: [
          {
            id: 'tc-a',
            label: 'The AC source — it must not be producing the correct frequency',
            isCorrect: false,
            explanation: 'The problem states the AC source is working. The fault is elsewhere. An AC frequency error would change the waveform shape but not prevent current flow entirely.',
          },
          {
            id: 'tc-b',
            label: 'The DC section — a broken path between the converter output and the load return prevents current from reaching the load',
            isCorrect: true,
            explanation: 'Correct. If the AC source and converter are working but the load has no current, the fault is in the DC section path. A missing or broken connection between converter output and the load return is the most likely cause.',
          },
          {
            id: 'tc-c',
            label: 'The converter — it must have failed internally',
            isCorrect: false,
            explanation: 'While a failed converter is possible, it is not the most likely cause when the rest of the circuit path is incomplete. Check the wiring first before concluding an internal component failure.',
          },
        ],
        explanation: 'In a multi-section circuit, identify which section contains the open path before concluding a component failure.',
      },
    },
  ],
  challenges: [
    {
      id: 'challenge-1',
      prompt: 'The circuit is missing the return wire from the DC load (n4) back to the circuit common (n5). Add the missing wire to complete the DC load path.',
      type: 'fix',
      evaluationCriteria: { topologyCheck: 'complete' },
      hints: [
        'The AC-to-DC converter output connects to the load at n3. The load connects to n4. The return path from n4 to n5 is missing.',
        'Use the connect-wire action to add a wire from n4 to n5.',
      ],
      availableComponents: ['wire'],
    },
  ],
  theoryContent: [
    {
      title: 'AC-to-DC Conversion Path Structure',
      content: 'An AC-to-DC conversion circuit has two distinct sections. AC section: from the sinusoidal source through to the converter input — analyzed with AC domain tools (peak or RMS voltage). DC section: from the converter output through the load back to the common return — analyzed with DC series/parallel tools. A fault in either section stops the load from receiving power.',
    },
    {
      title: 'Distinguishing AC-Side and DC-Side Faults',
      content: 'If the AC source is verified working but the load has no current: trace the DC section from converter output to load return. A broken path anywhere in the DC section is a topology fault, fixed by restoring the missing connection. If both sections are wired correctly but the load current is wrong, check converter pass-through and load resistance values.',
    },
  ],
  sandboxUnlocks: ['capstone-ac-prompt'],
  availableActions: ['inspect', 'connect-wire'],
  currentOverlayAvailable: true,
  showFormulaPanel: true,
  formulasShown: [],
  theoryPageAdditions: [
    {
      id: 'theory-ch10-ac-conversion-structure',
      title: 'Chapter 10: AC-to-DC circuit structure',
      content: 'AC section (source to converter input): sinusoidal analysis, peak/RMS. DC section (converter output to load): DC topology analysis, series/parallel. Faults in either section stop load operation.',
      sourceLesson: 'lesson-ch10-3-3',
    },
    {
      id: 'theory-ch10-ac-dc-fault-location',
      title: 'Chapter 10: Locating faults in AC-DC conversion circuits',
      content: 'Verify AC source → verify converter wiring → verify DC output path → verify load connection. An open anywhere in this chain stops current. Fix the section with the open path before concluding component failure.',
      sourceLesson: 'lesson-ch10-3-3',
    },
  ],
  quizzesUnlocked: ['quiz-ch10-ac-capstone-basics'],
};
