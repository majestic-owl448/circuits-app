import { useReducer, useEffect, type ReactNode } from 'react';
import { loadState, saveState, type PersistedState } from './persistence.ts';
import { AppContext, AppDispatchContext } from './app-contexts.ts';

export type View = 'home' | 'lesson' | 'sandbox' | 'theory' | 'quiz';

export interface AppState extends PersistedState {
  view: View;
  activeLessonId: string | null;
  activeLessonStep: number;
  activeQuizId: string | null;
}

export type AppAction =
  | { type: 'NAVIGATE'; view: View }
  | { type: 'START_LESSON'; lessonId: string }
  | { type: 'ADVANCE_STEP' }
  | {
      type: 'COMPLETE_LESSON';
      lessonId: string;
      unlocks: string[];
      unlockedActions?: string[];
      unlockedFeatures?: string[];
      theoryEntries?: string[];
      quizzesUnlocked?: string[];
    }
  | { type: 'TOGGLE_CURRENT_OVERLAY' }
  | { type: 'TOGGLE_THEORY_PANEL' }
  | { type: 'SET_REDUCED_MOTION'; enabled: boolean }
  | { type: 'TOGGLE_SANDBOX_VIEW_MODE' }
  | { type: 'TOGGLE_TIME_PANEL_COLLAPSED' }
  | { type: 'SET_TIME_PLAYBACK_SPEED'; speed: 'normal' | 'slow' }
  | { type: 'START_QUIZ'; quizId: string }
  | { type: 'COMPLETE_QUIZ'; quizId: string; score: number }
  | { type: 'NAVIGATE_THEORY' }
  | { type: 'UNLOCK_FEATURE'; featureId: string }
  | { type: 'UNLOCK_ACTION'; actionId: string }
  | { type: 'ADD_THEORY_ENTRIES'; entryIds: string[] };

function reducer(state: AppState, action: AppAction): AppState {
  switch (action.type) {
    case 'NAVIGATE':
      return { ...state, view: action.view };
    case 'START_LESSON':
      return {
        ...state,
        view: 'lesson',
        activeLessonId: action.lessonId,
        activeLessonStep: 0,
        currentLesson: action.lessonId,
        currentStep: 0,
      };
    case 'ADVANCE_STEP':
      return {
        ...state,
        activeLessonStep: state.activeLessonStep + 1,
        currentStep: state.currentStep + 1,
      };
    case 'COMPLETE_LESSON': {
      const newTheoryEntries = action.theoryEntries ?? [];
      const newActions = action.unlockedActions ?? [];
      const newFeatures = action.unlockedFeatures ?? [];
      return {
        ...state,
        completedLessons: state.completedLessons.includes(action.lessonId)
          ? state.completedLessons
          : [...state.completedLessons, action.lessonId],
        unlockedComponents: [
          ...new Set([...state.unlockedComponents, ...action.unlocks]),
        ],
        unlockedActions: [
          ...new Set([...state.unlockedActions, ...newActions]),
        ],
        unlockedFeatures: [
          ...new Set([...state.unlockedFeatures, ...newFeatures]),
        ],
        theoryEntriesSeen: [
          ...new Set([...state.theoryEntriesSeen, ...newTheoryEntries]),
        ],
        completedQuizzes: state.completedQuizzes,
        quizBestScores: state.quizBestScores,
        currentLesson: null,
        currentStep: 0,
      };
    }
    case 'TOGGLE_CURRENT_OVERLAY':
      return {
        ...state,
        preferences: {
          ...state.preferences,
          showCurrentOverlay: !state.preferences.showCurrentOverlay,
        },
      };
    case 'TOGGLE_THEORY_PANEL':
      return {
        ...state,
        preferences: {
          ...state.preferences,
          theoryPanelPinned: !state.preferences.theoryPanelPinned,
        },
      };
    case 'SET_REDUCED_MOTION':
      return {
        ...state,
        preferences: {
          ...state.preferences,
          reducedMotion: action.enabled,
        },
      };
    case 'TOGGLE_SANDBOX_VIEW_MODE':
      return {
        ...state,
        preferences: {
          ...state.preferences,
          sandboxAllToolsView: !state.preferences.sandboxAllToolsView,
        },
      };
    case 'TOGGLE_TIME_PANEL_COLLAPSED':
      return {
        ...state,
        preferences: {
          ...state.preferences,
          timePanelCollapsed: !state.preferences.timePanelCollapsed,
        },
      };
    case 'SET_TIME_PLAYBACK_SPEED':
      return {
        ...state,
        preferences: {
          ...state.preferences,
          timePlaybackSpeed: action.speed,
        },
      };
    case 'START_QUIZ':
      return {
        ...state,
        view: 'quiz',
        activeQuizId: action.quizId,
      };
    case 'COMPLETE_QUIZ': {
      const prevBest = state.quizBestScores[action.quizId] ?? 0;
      const newBest = Math.max(prevBest, action.score);
      return {
        ...state,
        completedQuizzes: state.completedQuizzes.includes(action.quizId)
          ? state.completedQuizzes
          : [...state.completedQuizzes, action.quizId],
        quizBestScores: {
          ...state.quizBestScores,
          [action.quizId]: newBest,
        },
      };
    }
    case 'NAVIGATE_THEORY':
      return { ...state, view: 'theory' };
    case 'UNLOCK_FEATURE':
      return {
        ...state,
        unlockedFeatures: state.unlockedFeatures.includes(action.featureId)
          ? state.unlockedFeatures
          : [...state.unlockedFeatures, action.featureId],
      };
    case 'UNLOCK_ACTION':
      return {
        ...state,
        unlockedActions: state.unlockedActions.includes(action.actionId)
          ? state.unlockedActions
          : [...state.unlockedActions, action.actionId],
      };
    case 'ADD_THEORY_ENTRIES':
      return {
        ...state,
        theoryEntriesSeen: [
          ...new Set([...state.theoryEntriesSeen, ...action.entryIds]),
        ],
      };
    default:
      return state;
  }
}

export function AppProvider({ children }: { children: ReactNode }) {
  const persisted = loadState();
  const initialState: AppState = {
    ...persisted,
    view: 'home',
    activeLessonId: null,
    activeLessonStep: 0,
    activeQuizId: null,
  };

  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    saveState({
      version: state.version,
      completedLessons: state.completedLessons,
      currentLesson: state.currentLesson,
      currentStep: state.currentStep,
      unlockedComponents: state.unlockedComponents,
      unlockedActions: state.unlockedActions,
      unlockedFeatures: state.unlockedFeatures,
      completedQuizzes: state.completedQuizzes,
      quizBestScores: state.quizBestScores,
      theoryEntriesSeen: state.theoryEntriesSeen,
      preferences: state.preferences,
    });
  }, [
    state.completedLessons,
    state.currentLesson,
    state.currentStep,
    state.unlockedComponents,
    state.unlockedActions,
    state.unlockedFeatures,
    state.completedQuizzes,
    state.quizBestScores,
    state.theoryEntriesSeen,
    state.preferences,
    state.version,
  ]);

  return (
    <AppContext.Provider value={state}>
      <AppDispatchContext.Provider value={dispatch}>
        {children}
      </AppDispatchContext.Provider>
    </AppContext.Provider>
  );
}
