import { Suspense, lazy } from 'react';
import { useAppState } from '../../state/app-hooks.ts';
import { TopNav } from '../nav/TopNav.tsx';
import { HomePage } from './HomePage.tsx';
import styles from './AppShell.module.css';

const LessonView = lazy(() => import('../lessons/LessonView.tsx').then(module => ({ default: module.LessonView })));
const SandboxView = lazy(() => import('../sandbox/SandboxView.tsx').then(module => ({ default: module.SandboxView })));
const TheoryPageView = lazy(() => import('../theory/TheoryPageView.tsx').then(module => ({ default: module.TheoryPageView })));
const QuizView = lazy(() => import('../quiz/QuizView.tsx').then(module => ({ default: module.QuizView })));

export function AppShell() {
  const { view } = useAppState();

  return (
    <div className={styles.shell}>
      <TopNav />
      <main className={styles.main}>
        {view === 'home' && <HomePage />}
        {view !== 'home' && (
          <Suspense fallback={<div className={styles.loading}>Loading view...</div>}>
            {view === 'lesson' && <LessonView />}
            {view === 'sandbox' && <SandboxView />}
            {view === 'theory' && <TheoryPageView />}
            {view === 'quiz' && <QuizView />}
          </Suspense>
        )}
      </main>
    </div>
  );
}
