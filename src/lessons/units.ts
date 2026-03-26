import type { UnitConfig } from '../types/lesson.ts';

export const unitRegistry: UnitConfig[] = [
  {
    id: 'unit-1',
    title: 'First Contact With a Circuit',
    stageLabel: 'Beginner',
    description: 'Discover that a circuit must form a complete path and that a switch can control whether a bulb turns on.',
    lessons: ['lesson-1-1', 'lesson-1-2', 'lesson-1-3'],
  },
  {
    id: 'unit-2',
    title: 'Current, Voltage, and the Bulb as a Load',
    stageLabel: 'Beginner',
    description: 'Gain the first conceptual model of what flows, what pushes, and what the bulb does.',
    lessons: ['lesson-2-1', 'lesson-2-2', 'lesson-2-3', 'lesson-2-4'],
  },
  {
    id: 'unit-3',
    title: 'Resistance and Early Formula Familiarity',
    stageLabel: 'Beginner',
    description: 'Understand resistance and become familiar with the earliest formulas.',
    lessons: ['lesson-3-1', 'lesson-3-2', 'lesson-3-3'],
  },
  {
    id: 'unit-4',
    title: 'First Construction Freedom',
    stageLabel: 'Beginner',
    description: 'Take more responsibility for circuit assembly, including making and correcting mistakes.',
    lessons: ['lesson-4-1', 'lesson-4-2', 'lesson-4-3'],
  },
  {
    id: 'unit-5',
    title: 'Readiness for Numbers',
    stageLabel: 'Beginner to Early Intermediate',
    description: 'Prepare to transition from qualitative understanding to numerical analysis.',
    lessons: ['lesson-5-1', 'lesson-5-2'],
  },
];
