const STORAGE_KEY = 'circuits-app-state';
const CURRENT_VERSION = 2;

export interface PersistedState {
  version: number;
  completedLessons: string[];
  currentLesson: string | null;
  currentStep: number;
  unlockedComponents: string[];
  unlockedActions: string[];
  unlockedFeatures: string[];
  completedQuizzes: string[];
  quizBestScores: Record<string, number>;
  theoryEntriesSeen: string[];
  preferences: {
    showCurrentOverlay: boolean;
    theoryPanelPinned: boolean;
    reducedMotion: boolean;
  };
}

const DEFAULT_STATE: PersistedState = {
  version: CURRENT_VERSION,
  completedLessons: [],
  currentLesson: null,
  currentStep: 0,
  unlockedComponents: [],
  unlockedActions: [],
  unlockedFeatures: [],
  completedQuizzes: [],
  quizBestScores: {},
  theoryEntriesSeen: [],
  preferences: {
    showCurrentOverlay: false,
    theoryPanelPinned: false,
    reducedMotion: false,
  },
};

export function loadState(): PersistedState {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return { ...DEFAULT_STATE };
    const parsed = JSON.parse(raw) as PersistedState;
    if (parsed.version !== CURRENT_VERSION) {
      return { ...DEFAULT_STATE };
    }
    return parsed;
  } catch {
    return { ...DEFAULT_STATE };
  }
}

export function saveState(state: PersistedState): void {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
  } catch {
    // Storage full or unavailable — silently fail
  }
}
