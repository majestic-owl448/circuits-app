import { useContext, type Dispatch } from 'react';
import type { AppAction, AppState } from './app-context.tsx';
import { AppContext, AppDispatchContext } from './app-contexts.ts';

export function useAppState(): AppState {
  const ctx = useContext(AppContext);
  if (!ctx) throw new Error('useAppState must be used within AppProvider');
  return ctx;
}

export function useAppDispatch(): Dispatch<AppAction> {
  const ctx = useContext(AppDispatchContext);
  if (!ctx) throw new Error('useAppDispatch must be used within AppProvider');
  return ctx;
}
