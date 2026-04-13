import { createContext, type Dispatch } from 'react';
import type { AppAction, AppState } from './app-context.tsx';

export const AppContext = createContext<AppState | null>(null);
export const AppDispatchContext = createContext<Dispatch<AppAction> | null>(null);
