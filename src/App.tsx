import { AppProvider } from './state/app-context.tsx'
import { AppShell } from './components/layout/AppShell.tsx'

export default function App() {
  return (
    <AppProvider>
      <AppShell />
    </AppProvider>
  )
}
