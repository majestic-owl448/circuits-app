import { useAppState } from '../../state/app-context.tsx';
import { TopNav } from '../nav/TopNav.tsx';
import { HomePage } from './HomePage.tsx';
import styles from './AppShell.module.css';

export function AppShell() {
  const { view } = useAppState();

  return (
    <div className={styles.shell}>
      <TopNav />
      <main className={styles.main}>
        {view === 'home' && <HomePage />}
        {view === 'lesson' && <div>Lesson view (coming soon)</div>}
        {view === 'sandbox' && <div>Sandbox view (coming soon)</div>}
      </main>
    </div>
  );
}
