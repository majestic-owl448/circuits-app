import type { CircuitComponent, ComponentType } from './circuit.ts';

export interface UnitConfig {
  id: string;
  title: string;
  stageLabel: string;
  description: string;
  lessons: string[];
}

export interface LessonConfig {
  id: string;
  unitId: string;
  title: string;
  description: string;
  stageLabel: string;
  prerequisites: string[];
  conceptsIntroduced: string[];
  initialCircuit: CircuitComponent[];
  initialNodes: { id: string; position: { x: number; y: number } }[];
  steps: LessonStep[];
  challenges: Challenge[];
  theoryContent: TheoryItem[];
  sandboxUnlocks: string[];
  availableActions: LessonAction[];
  currentOverlayAvailable: boolean;
  showFormulaPanel: boolean;
  usesTimeControls?: boolean;
  formulasShown: FormulaRef[];
  theoryPageAdditions: TheoryPageEntry[];
  quizzesUnlocked: string[];
}

export type LessonAction = 'toggle-switch' | 'drag-to-place' | 'connect-wire' | 'delete-component' | 'rename-component' | 'inspect';

export interface FormulaRef {
  formula: string;
  symbols: { symbol: string; name: string; unit?: string }[];
}

export interface TheoryPageEntry {
  id: string;
  title: string;
  content: string;
  sourceLesson: string;
}

export interface LessonStep {
  id: string;
  text: string;
  requiredAction?: UserAction;
  highlights?: string[];
  showCurrentOverlay?: boolean;
  theoryCheck?: InlineTheoryCheck;
}

export interface InlineTheoryCheck {
  question: string;
  choices: ChallengeChoice[];
  explanation: string;
}

export type UserAction =
  | { type: 'toggle-switch'; componentId: string; targetState: boolean }
  | { type: 'connect-wire'; fromNode: string; toNode: string }
  | { type: 'place-component'; componentType: string }
  | { type: 'any' };

export interface Challenge {
  id: string;
  prompt: string;
  type: 'build' | 'fix' | 'predict' | 'choose' | 'drag-place' | 'calculate' | 'classify' | 'diagnose';
  initialCircuit?: CircuitComponent[];
  initialNodes?: { id: string; position: { x: number; y: number } }[];
  evaluationCriteria: EvaluationCriteria;
  hints: string[];
  choices?: ChallengeChoice[];
  availableComponents?: ComponentType[];
  componentToPlace?: ComponentType;
  targetSlotNodeA?: string;
  targetSlotNodeB?: string;
  calculationTarget?: {
    quantity: 'current' | 'voltage' | 'resistance' | 'power';
    expectedValue: number;
    tolerance: number;
    unit: string;
    formula?: string;
  };
  detailedBreakdown?: {
    steps: { label: string; formula: string; result: string }[];
  };
  classifyConfig?: {
    categories: string[];
    correctCategory: string;
    requiredEvidenceSignals?: string[];
  };
  diagnoseConfig?: {
    acceptedCauses: string[];
    evidenceItems: string[];
    minEvidenceMatches?: number;
  };
  showRubricPanel?: boolean;
}

export interface ChallengeChoice {
  id: string;
  label: string;
  isCorrect: boolean;
  explanation?: string;
}

export interface EvaluationCriteria {
  circuitMustBeClosed?: boolean;
  targetComponent?: string;
  targetProperty?: 'power' | 'current' | 'voltage';
  expectedRange?: { min: number; max: number };
  requiredCheckpoint?: 't0' | 't_mid' | 't_final';
  checkpointRanges?: Array<{
    checkpoint: 't0' | 't_mid' | 't_final';
    componentId: string;
    property: 'power' | 'current' | 'voltage';
    min: number;
    max: number;
  }>;
  customCheck?: string;
  correctChoiceId?: string;
  expectedRanges?: Array<{
    componentId: string;
    property: 'power' | 'current' | 'voltage';
    min: number;
    max: number;
  }>;
  hardPassChecks?: string[];
  advisoryChecks?: string[];
  learnerCategory?: string;
  expectedCategory?: string;
  learnerCause?: string;
  acceptedCauses?: string[];
  requiredEvidenceSignals?: string[];
  observedEvidenceSignals?: string[];
  minEvidenceMatches?: number;
  topologyCheck?: string;
}

export interface EvaluationCriterionOutcome {
  id: string;
  passed: boolean;
  message: string;
  severity: 'hard-pass' | 'advisory';
}

export interface MultiCriteriaEvaluationResult {
  passed: boolean;
  outcomes: EvaluationCriterionOutcome[];
}

export interface TheoryItem {
  title: string;
  content: string;
  formula?: string;
}
