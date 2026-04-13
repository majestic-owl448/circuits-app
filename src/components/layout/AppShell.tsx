import { useAppState } from '../../state/app-hooks.ts';
import { TopNav } from '../nav/TopNav.tsx';
import { HomePage } from './HomePage.tsx';
import { LessonView } from '../lessons/LessonView.tsx';
import { SandboxView } from '../sandbox/SandboxView.tsx';
import { TheoryPageView } from '../theory/TheoryPageView.tsx';
import { QuizView } from '../quiz/QuizView.tsx';
import styles from './AppShell.module.css';

export function AppShell() {
  const { view } = useAppState();

  return (
    <div className={styles.shell}>
      <TopNav />
      <main className={styles.main}>
        {view === 'home' && <HomePage />}
        {view === 'lesson' && <LessonView />}
        {view === 'sandbox' && <SandboxView />}
        {view === 'theory' && <TheoryPageView />}
        {view === 'quiz' && <QuizView />}
      </main>
    </div>
  );
}
