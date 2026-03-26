import { createContext, useContext, useReducer, useEffect, type ReactNode } from 'react';
import { loadState, saveState, type PersistedState } from './persistence.ts';

export type View = 'home' | 'lesson' | 'sandbox';

export interface AppState extends PersistedState {
  view: View;
  activeLessonId: string | null;
  activeLessonStep: number;
}

export type AppAction =
  | { type: 'NAVIGATE'; view: View }
  | { type: 'START_LESSON'; lessonId: string }
  | { type: 'ADVANCE_STEP' }
  | { type: 'COMPLETE_LESSON'; lessonId: string; unlocks: string[] }
  | { type: 'TOGGLE_CURRENT_OVERLAY' }
  | { type: 'TOGGLE_THEORY_PANEL' }
  | { type: 'SET_REDUCED_MOTION'; enabled: boolean };

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
    case 'COMPLETE_LESSON':
      return {
        ...state,
        completedLessons: state.completedLessons.includes(action.lessonId)
          ? state.completedLessons
          : [...state.completedLessons, action.lessonId],
        unlockedComponents: [
          ...new Set([...state.unlockedComponents, ...action.unlocks]),
        ],
        currentLesson: null,
        currentStep: 0,
      };
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
    default:
      return state;
  }
}

const AppContext = createContext<AppState | null>(null);
const AppDispatchContext = createContext<React.Dispatch<AppAction> | null>(null);

export function AppProvider({ children }: { children: ReactNode }) {
  const persisted = loadState();
  const initialState: AppState = {
    ...persisted,
    view: 'home',
    activeLessonId: null,
    activeLessonStep: 0,
  };

  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    saveState({
      version: state.version,
      completedLessons: state.completedLessons,
      currentLesson: state.currentLesson,
      currentStep: state.currentStep,
      unlockedComponents: state.unlockedComponents,
      preferences: state.preferences,
    });
  }, [
    state.completedLessons,
    state.currentLesson,
    state.currentStep,
    state.unlockedComponents,
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

export function useAppState(): AppState {
  const ctx = useContext(AppContext);
  if (!ctx) throw new Error('useAppState must be used within AppProvider');
  return ctx;
}

export function useAppDispatch(): React.Dispatch<AppAction> {
  const ctx = useContext(AppDispatchContext);
  if (!ctx) throw new Error('useAppDispatch must be used within AppProvider');
  return ctx;
}
