# Implementation Specification
## Interactive Electrical Circuits Learning App

Based on: `electrical_circuits_interactive_app_prd.md`

---

## 1. Platform & Deployment

- **Hosting:** GitHub Pages (static site)
- **URL:** `https://<username>.github.io/<repo-name>/`
- **Build output:** Static files (HTML, CSS, JS, assets)
- **No backend.** All logic runs client-side.

## 2. Tech Stack

| Layer | Choice |
|---|---|
| Framework | React 19 |
| Language | TypeScript (strict mode) |
| Build tool | Vite |
| Styling | CSS Modules |
| State management | React Context + useReducer (escalate to Zustand only if needed) |
| Persistence | LocalStorage (via a thin abstraction layer) |
| Circuit simulation | Custom engine (built in-house) |
| Testing | Vitest + React Testing Library |
| Deployment | GitHub Actions -> GitHub Pages |

## 3. MVP Scope

The first deployment targets the minimal viable slice that proves the core interaction model.

### 3.1 Included in MVP

- **Lesson 1:** Toggle a switch to close a simple DC circuit and light a bulb
- **Lesson 2:** Introduce current, voltage, resistance concepts with the same simple circuit; show formulas `V = IR` and `P = VI` for recognition (not calculation)
- **Lesson 3:** Add a second identical bulb in series; observe brightness change; introduce series circuit concept
- **Sandbox mode:** Unlocks after Lesson 1 with battery, switch, bulb, and wires
- **Linear progression:** Lessons unlock sequentially
- **Lesson completion:** Interaction + at least one follow-up challenge per lesson
- **Feedback & hints:** Progressive hints on incorrect attempts, no fail state
- **Theory side panel:** Collapsible right panel with formulas and definitions relevant to current lesson
- **Current flow overlay:** Optional toggle to visualize current direction
- **Circuit description:** "Describe circuit" button generating a text summary
- **Accessibility foundations:** Full keyboard navigation, reduced-motion support, color-independent meaning, sufficient contrast
- **LocalStorage persistence:** Lesson progress and sandbox state saved locally
- **Responsive:** Desktop-first; functional on tablets if practical

### 3.2 Deferred (post-MVP)

- Lessons beyond 3
- Parallel circuits, numerical analysis, measurement tools
- Full theory reference page
- Quizzes (in-lesson and standalone)
- Non-ideal circuit behavior
- Component renaming
- Multiple sandbox save slots
- Cloud sync / accounts
- Full screen reader support for circuit workspace
- Small-screen mobile layout

## 4. Project Structure

```
/
  index.html
  src/
    main.tsx                    # Entry point
    App.tsx                     # Root component, routing
    types/                      # Shared TypeScript types
      circuit.ts                # Circuit model types
      lesson.ts                 # Lesson/progression types
    engine/                     # Circuit simulation engine
      solver.ts                 # DC circuit solver (KCL/KVL)
      circuit-graph.ts          # Graph representation of circuit
      components.ts             # Component models (battery, resistor, switch, wire)
      evaluator.ts              # Challenge evaluation logic
    state/                      # Application state
      app-context.tsx           # React context provider
      reducers.ts               # State reducers
      persistence.ts            # LocalStorage read/write abstraction
    lessons/                    # Lesson definitions
      lesson-registry.ts        # Ordered list of lessons
      lesson-1/                 # Per-lesson directory
        config.ts               # Lesson metadata, initial circuit, challenges
        steps.ts                # Lesson step sequence
      lesson-2/
        ...
      lesson-3/
        ...
    components/                 # React UI components
      layout/
        AppShell.tsx            # Top-level layout (nav + content area)
        LessonLayout.tsx        # Two/three-panel lesson layout
        TheoryPanel.tsx         # Collapsible right panel
      workspace/
        CircuitWorkspace.tsx    # Main interactive circuit area
        ComponentRenderer.tsx   # Renders individual circuit components
        WireRenderer.tsx        # Renders wire connections
        CurrentOverlay.tsx      # Optional current flow visualization
      lessons/
        LessonText.tsx          # Left panel: instructions, prompts
        ChallengeView.tsx       # Challenge UI and check button
        HintDisplay.tsx         # Progressive hint rendering
        FeedbackDisplay.tsx     # Success/failure feedback
      sandbox/
        SandboxMode.tsx         # Sandbox wrapper
        ComponentPalette.tsx    # Available components to place
      shared/
        Button.tsx
        Switch.tsx              # Toggle switch component
        CircuitDescription.tsx  # Text summary of circuit state
      nav/
        LessonMap.tsx           # Lesson list / progress view
        TopNav.tsx              # Main navigation bar
    hooks/
      useCircuit.ts             # Circuit state and manipulation
      useLesson.ts              # Lesson progression logic
      usePersistence.ts         # Load/save from LocalStorage
    assets/
      components/               # SVG assets for circuit components
  public/
    favicon.ico
  tests/
    engine/                     # Simulation engine tests
    components/                 # Component tests
  vite.config.ts
  tsconfig.json
  package.json
```

## 5. Circuit Simulation Engine

### 5.1 Scope

The engine solves ideal DC circuits. It must handle:
- Single voltage source
- Resistive loads (bulbs modeled as fixed resistors)
- Switches (open = infinite resistance, closed = zero resistance)
- Wires (zero resistance in MVP)
- Series connections
- Open and closed circuit detection
- Short circuit detection

### 5.2 Circuit Graph Model

The circuit is represented as a graph:
- **Nodes:** Connection points (terminals of components)
- **Edges:** Components connecting two nodes, each with a type and properties

```typescript
interface CircuitNode {
  id: string;
  position: { x: number; y: number }; // For rendering
}

interface CircuitComponent {
  id: string;
  type: 'battery' | 'resistor' | 'switch' | 'wire' | 'bulb';
  nodeA: string; // Connected node IDs
  nodeB: string;
  properties: ComponentProperties;
  name: string; // Display name, e.g. "Bulb 1"
}

interface ComponentProperties {
  voltage?: number;      // For batteries (V)
  resistance?: number;   // For resistors/bulbs (ohms)
  isClosed?: boolean;    // For switches
}
```

### 5.3 Solver

For MVP (series-only circuits), the solver:
1. Builds the circuit graph from components
2. Detects if the circuit is closed (complete loop from source back to source)
3. Detects short circuits (path with zero total resistance across source)
4. If closed and valid: calculates total resistance, current (I = V/R), voltage drops across each component, power dissipated per component
5. Exposes results per-component for rendering (e.g., bulb brightness proportional to power)

The solver does NOT need full nodal analysis (KCL/KVL matrix) for MVP since only series circuits exist. A loop-traversal approach is sufficient. The architecture should allow replacing the solver with a full nodal analysis solver later when parallel circuits are added.

### 5.4 Evaluation

Challenge evaluation compares simulation results against goal criteria:
- Is the circuit closed?
- Is the target component receiving current?
- Are values within tolerance? (tight tolerance for ideal MVP circuits: +/- 1%)

## 6. Workspace Interaction

### 6.1 Rendering

Circuit components are rendered as SVG elements within the `CircuitWorkspace` component. Each component type has a dedicated SVG asset.

### 6.2 Interaction model (MVP)

| Action | Input | Available from |
|---|---|---|
| Toggle switch | Click on switch / Enter or Space when focused | Lesson 1 |
| Place component | Drag from palette to workspace | Lesson 1 (guided), Sandbox |
| Connect wire | Click source terminal, click target terminal | Lesson 1 (guided), Sandbox |
| Delete component | Select + Delete key / button | Sandbox only in MVP |

### 6.3 Connection model

Wires connect between defined terminal points on components (structured connection model per PRD). Freeform wire drawing is not supported. Snap-to-terminal behavior guides the user.

### 6.4 Keyboard navigation

All workspace interactions must be keyboard-accessible:
- Tab/Shift+Tab to navigate between components
- Arrow keys to move selected component
- Enter/Space to interact (toggle switch, start wire connection)
- Delete to remove (when allowed)
- Escape to cancel current action

Focus indicators must be clearly visible.

## 7. Layout

### 7.1 Lesson layout

```
+-------------------+-------------------------------+
|                   |                               |
|   Lesson Text     |     Circuit Workspace         |
|   Instructions    |                               |
|   Hints           |                               |
|   Challenge       |                               |
|                   |                               |
+-------------------+-------------------------------+
```

- Left panel: ~300px wide, scrollable
- Center: Remaining space, min 600px
- Right panel (theory): Hidden by default, slides in as overlay or pins to create 3-column layout

### 7.2 Responsive behavior

- Desktop (>1024px): Full two/three-panel layout
- Tablet (768-1024px): Left panel collapses to a top section or toggle drawer
- Below 768px: Not a priority for MVP; basic stacking layout as fallback

## 8. Lesson Data Model

Each lesson is defined as a configuration object:

```typescript
interface LessonConfig {
  id: string;
  title: string;
  description: string;
  initialCircuit: CircuitComponent[];  // Prebuilt circuit state
  steps: LessonStep[];
  challenges: Challenge[];
  theoryContent: TheoryItem[];
  sandboxUnlocks: string[];           // Component types unlocked after completion
}

interface LessonStep {
  id: string;
  text: string;                       // Instruction/explanation (supports markdown)
  requiredAction?: UserAction;        // What the user must do to advance
  highlights?: string[];              // Component IDs to highlight
  showCurrentOverlay?: boolean;
}

interface Challenge {
  id: string;
  prompt: string;
  type: 'build' | 'fix' | 'predict' | 'choose';
  initialCircuit?: CircuitComponent[];
  evaluationCriteria: EvaluationCriteria;
  hints: string[];                    // Progressive hints
}

interface EvaluationCriteria {
  circuitMustBeClosed?: boolean;
  targetComponent?: string;
  targetProperty?: string;            // e.g. 'power', 'current'
  expectedRange?: { min: number; max: number };
  customCheck?: (results: SimulationResults) => boolean;
}
```

## 9. Persistence (LocalStorage)

### 9.1 Data stored

```typescript
interface AppState {
  completedLessons: string[];         // Lesson IDs
  currentLesson: string | null;       // Active lesson ID
  currentStep: number;                // Step index within lesson
  sandboxCircuit: CircuitComponent[]; // Saved sandbox state
  unlockedComponents: string[];       // Component types available in sandbox
  preferences: {
    showCurrentOverlay: boolean;
    theoryPanelPinned: boolean;
    reducedMotion: boolean;
  };
}
```

### 9.2 Storage key

All data under a single namespaced key: `circuits-app-state`

### 9.3 Read/write

A thin abstraction layer (`persistence.ts`) wraps `localStorage.getItem/setItem` with:
- JSON serialization/deserialization
- Schema versioning (a `version` field in stored data for future migrations)
- Graceful fallback if storage is unavailable or corrupt

## 10. Accessibility

### 10.1 MVP requirements

- Semantic HTML throughout
- ARIA roles and labels on interactive workspace elements
- `prefers-reduced-motion` media query respected: disable animations, current flow overlay becomes static arrows
- All interactive elements reachable and operable via keyboard (see 6.4)
- Minimum 4.5:1 contrast ratio for text, 3:1 for large text and UI components
- Focus-visible outlines on all interactive elements
- No meaning conveyed by color alone (e.g., circuit status uses icons + text, not just color)

### 10.2 Circuit description

The "Describe circuit" feature generates a structured text summary:
- Components and their names
- Connection topology
- Circuit status (open/closed)
- Switch state
- Fault detection (short circuit, open circuit)

Available via a button and also fed to `aria-live` region on circuit state changes.

## 11. Visual Design Principles

- Clean, minimal UI with clear visual hierarchy
- Light theme as default
- Circuit components: hybrid style — recognizable shapes with simplified symbolic elements
- Bulb brightness: opacity/glow intensity proportional to power dissipated
- Current flow overlay: animated dots moving along wires in conventional current direction (respects reduced-motion)
- Celebratory feedback: subtle confetti on lesson completion only (respects reduced-motion)

## 12. Build & Deployment

### 12.1 Build

```bash
npm run build    # Vite production build -> dist/
```

Vite config:
- `base: '/<repo-name>/'` for GitHub Pages subpath
- Output to `dist/`

### 12.2 GitHub Actions workflow

On push to `main`:
1. Checkout
2. Install dependencies (`npm ci`)
3. Run tests (`npm test`)
4. Build (`npm run build`)
5. Deploy `dist/` to GitHub Pages via `actions/deploy-pages`

### 12.3 Local development

```bash
npm install
npm run dev      # Vite dev server with HMR
npm test         # Run Vitest
```

## 13. MVP Lesson Outlines

### Lesson 1: "Close the Circuit"
- **Goal:** Understand that a circuit is a loop; toggling a switch closes it and lights a bulb.
- **Prebuilt circuit:** Battery, wire, switch (open), bulb, wire back to battery.
- **Interaction:** Click/press the switch to close the circuit.
- **Observation:** Bulb lights up when switch is closed, goes dark when opened.
- **Challenge:** Given a circuit with a disconnected wire, connect it to light the bulb.
- **Sandbox unlock:** Battery, switch, bulb, wires.

### Lesson 2: "What Makes It Flow?"
- **Goal:** Introduce voltage (push), current (flow), and resistance (opposition). Show formulas V = IR and P = VI for recognition.
- **Prebuilt circuit:** Same simple circuit from Lesson 1.
- **Interaction:** Toggle switch on; observe current flow overlay (prompted to enable it). Side panel shows V, I, R, P labels.
- **Challenge:** Identify which component is the source and which is the load (choose-type challenge).
- **Sandbox unlock:** No new components; overlay now available in sandbox.

### Lesson 3: "Two Bulbs in a Row"
- **Goal:** Introduce series circuits. Observe that adding a second identical bulb dims both.
- **Prebuilt circuit:** Battery, switch, Bulb 1, Bulb 2 in series.
- **Interaction:** Toggle on, observe both bulbs are dimmer than the single-bulb circuit. Theory panel explains shared current and voltage division.
- **Challenge:** Build a series circuit with two bulbs from scratch (build-type challenge).
- **Sandbox unlock:** Second bulb slot (can now place 2+ bulbs).

## 14. Testing Strategy

- **Engine tests:** Unit tests for solver (closed/open detection, current calculation, series circuits, short circuit detection)
- **Evaluation tests:** Unit tests for challenge criteria checking
- **Component tests:** React Testing Library for key UI interactions (switch toggle, hint display, challenge check)
- **Accessibility tests:** Automated checks with `vitest-axe` for ARIA compliance
- **Manual testing:** Keyboard-only navigation walkthrough for each lesson

## 15. Future Expansion Notes

These are not commitments, just architectural considerations for the MVP:

- **Solver upgrade:** When parallel circuits are added, replace the loop-traversal solver with Modified Nodal Analysis (MNA). The `solver.ts` interface should be designed so the solver is swappable.
- **Persistence upgrade:** The `persistence.ts` abstraction can be extended to support IndexedDB or a remote backend without changing consuming code.
- **Lesson authoring:** Lesson configs are plain TypeScript objects. A future JSON/YAML schema + editor could generate them.
- **Component library:** New component types (resistor, ammeter, voltmeter) plug into the existing `CircuitComponent` type via new `type` values and corresponding SVG assets + property definitions.
