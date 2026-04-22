The file `/circuits-app/AGENTS.md` must be updated as the app status changes so that the infos in it are based on the current status of the app.

# Circuits App

Interactive educational app for learning electrical circuits. Structured as progressive lessons across chapters, with quizzes, a theory reference, and a sandbox mode.

## Current Status

- Chapters 1-9 are fully implemented and wired into registries. Chapter 9 content authoring complete: all 14 lessons and 14 quizzes authored across 5 units.
- Lesson count: 132 total (Chapter 1: 15, Chapter 2: 14, Chapter 3: 18, Chapter 4: 15, Chapter 5: 15, Chapter 6: 15, Chapter 7: 13, Chapter 8: 13, Chapter 9: 14).
- Quiz count: 129 total (Chapter 1-8: 115, Chapter 9: 14).
- Chapter 7 implementation: added `ac-source`, `dc-ac-converter`, `ac-dc-converter` component types with amplitude/frequency properties; legacy solver handles AC sources (peak voltage) and converter pass-through; time simulator extended with sinusoidal AC waveform mode; ComponentRenderer adds SVG symbols for all three new types; SandboxView wires AC/Conversion domain to `unlockedFeatures.includes('ac')`.
- Chapter 8 implementation: added `diode` (with `isForwardBiased` property) and `transistor` (with `controlEnabled` property) component types; reverse-biased diodes and disabled transistors act as open circuits in legacy solver; DiodeSVG (triangle + cathode bar) and TransistorSVG renderers added; SandboxView wires Active domain to `unlockedFeatures.includes('active')`.
- Chapter 9 implementation: added `not-gate`, `and-gate`, `or-gate`, `nand-gate`, `nor-gate`, `xor-gate` component types with `inputA`/`inputB` boolean properties; gates are excluded from analog solver; `src/engine/gates.ts` provides `computeGateOutput()` for all 6 gate types; gate SVG renderers show live input/output state via colored dots; SandboxView wires Logic domain to `unlockedFeatures.includes('logic')`.
- Build and lint pass.
- Chapters 4-10 planning docs now include clarified challenge-type cardinality, normalized feature-gating wording standards (including Chapters 4-10 phrasing cleanup), deterministic Chapter 10 Dimension 4 capture rules, Unit 5 lesson differentiation guidance, and explicit documentation-boundary rules for defaults/thread dedupe/spec-pointer usage.
- Added implementation execution checklist for Chapters 4-10 at `docs/ch4-10-implementation-checklist.md` with phase-by-phase file-level tasks and acceptance criteria.
- Phase 0 scaffolding started: deterministic engine fixtures and runner added under `src/engine/__fixtures__/`, and `npm run verify:engine` now validates current solver behavior baseline.
- Phase 1 scaffolding started: solver architecture split into orchestrator + legacy backend + initial MNA backend modules (`src/engine/mna/*`) with legacy behavior preserved as default while migration proceeds.
- Phase 1 verification expanded: dedicated mixed-topology MNA fixtures and runner are in place (`src/engine/__fixtures__/phase1-mna.ts`, `src/engine/__fixtures__/run-mna-fixtures.ts`), and both `npm run verify:engine` and `npm run verify:engine:mna` are green.
- Phase 1 data contract update completed: `SimulationResult` now supports optional advanced solver payloads (`nodeVoltages`, `branchCurrents`, `diagnostics`), with MNA emitting these fields while legacy consumers remain compatible.
- Phase 1 backend controls extended: solver backend can now be selected via environment (`legacy`, `mna`, `compare`) and compare-mode parity checks are scripted (`npm run verify:engine:compare`) and currently green for baseline fixtures.
- Phase 2 schema groundwork started: lesson challenge types now include `classify`/`diagnose`, evaluation criteria supports multi-range/multi-check structures, and circuit component properties now include non-ideal/failure fields for Chapter 5+ features.
- Phase 3-7 foundation implementation pass completed: modular evaluator checkers, measurement APIs/UI, non-ideal/failure plumbing, time-controls/timeline scaffolding, and sandbox domain-grouped progressive unlock with persisted view mode are now in code and build/lint green.
- Hardening pass completed on new foundations: evaluator now emits criterion-level outcomes with hard-pass/advisory severities, time module includes checkpoint/slider progression helpers, and ohmmeter validation now checks energized connected-component context rather than global source presence.
- Hardening pass round 2 completed: evaluator custom checks are now wired through a dedicated custom-check module, challenge evaluation receives live component state for structural validation, voltmeter node-pair selection supports explicit two-probe targeting, and reduced-motion time scrubber now snaps to checkpoint anchors.
- Added evaluator regression safety net: `npm run verify:evaluator` now validates deterministic fixtures for custom checks and multi-criteria hard-pass/advisory outcomes, and is included in the standard verification flow.
- Readiness hardening update: Home now supports chapter filtering, collapsible chapter sections, and lesson/quiz search; quizzes are grouped by chapter to support full-curriculum scale navigation.
- Measurement UX hardening update: meter overlay now shows learner-friendly node labels and selected target labels; workspace now renders explicit voltmeter probe markers and meter-target component highlighting.
- Bundle-risk hardening update: non-home views (`Lesson`, `Sandbox`, `Theory`, `Quiz`) now load through lazy imports with suspense fallback to reduce initial bundle pressure.
- Time-check readiness update: challenge evaluation now supports optional checkpoint-targeted evaluation fields (`requiredCheckpoint`, `checkpointRanges`) and lesson wiring provides checkpoint simulation context for Chapter 6 flows.
- Time-check hardening update: Chapter 6 lesson checkpoint simulations now use deterministic staged snapshots and playback progression instead of a single reused simulation object.
- Evaluator hardening update: `classify`/`diagnose` now run deterministic category/cause + evidence-threshold checks suitable for Chapter 5 diagnostics and Chapter 10 Dimension 4 evidence gating.
- Chapter-ready fixture update: added planned Chapter 4/5 classify/diagnose challenge fixture templates at `src/lessons/planned/ch4-ch5/challenge-fixtures.ts` to accelerate first content implementation pass.
- Gate A transient physics complete: time simulator now uses real RC/RL exponential math (V_C = V*(1-e^{-5t}), I_RC = I_max*e^{-5t}, I_RL = I_f*(1-e^{-5t})) when a capacitor or inductor is present in the circuit. Checkpoint snapshots and timeline points use physical transient values rather than smoothstep interpolation. `capacitor` and `inductor` added as `ComponentType` values with `capacitance`/`inductance` properties; legacy solver treats capacitor as DC open circuit and inductor as DC short circuit.
- Wire resistance sandbox editing complete: wires in CircuitWorkspace are now clickable (transparent 12px hit area) and open the PropertyInspector for wireResistance editing; newly added wires initialize with `wireResistance: 0`.
- Chapter 5 quiz unlock linkage validated: all 15 quiz/lesson pairs confirmed bidirectionally correct; checklist item marked done.
- Gate readiness snapshot (future chapters): Gate A (engine) now fully green for Chapter 6. Chapter 6 content authoring can begin.
- Planning docs cleanup update: superseded readiness review snapshots from 2026-04-14 were removed after consolidation into canonical implementation/readiness/spec docs.
- Documentation tracking update: added consolidated accessibility evidence log at `docs/ch4-10-accessibility-evidence.md` and chapter-start checklist templates in readiness/checklist docs to standardize Chapter 4-10 kickoff prep.
- Data loading update: lesson and quiz registries are loaded through dynamic chapter-based loaders (`src/data/loaders.ts`) with map-driven chapter registration. Adding a new chapter requires only a single-line addition to the loader maps. Consumers use centralized `loadLessonRegistry()`/`loadQuizRegistry()` instead of assembling chapter lists. Old monolithic registries (`lesson-registry.ts`, `quiz-registry.ts`) have been removed.
- Pre-Chapter 4 readiness cleanup: time-control gating in `LessonView.tsx` now uses `LessonConfig.usesTimeControls` flag instead of hardcoded `lesson-ch6` string checks; Phase 6 checklist status split into foundation (done) vs full physics (pending); chapter-start checklist deduplicated to single canonical location in implementation checklist; accessibility evidence log updated with methodology and re-verification notes; readiness doc now points to implementation checklist as source of truth for operational checklists.
- Chapter 4 implementation pass completed: added Chapter 4 lesson configs (5 units, 15 lessons), Chapter 4 quiz registry (15 quizzes), Chapter 4 shared circuit fixtures, unit metadata entries, and chapter loader wiring for both lessons and quizzes.
- Chapter 5 prerequisite pass completed: added Chapter 5 registries and unit metadata, wired Chapter 5 into dynamic loaders, and implemented component property editing infrastructure.
- Implementation of PropertyInspector: new `PropertyInspector` component added to `src/components/workspace/` along with `updateComponentProperties` logic in `useCircuit` hook, allowing learners to modify component values (voltage, resistance, internal resistance, wire resistance, tolerance) via inspection (right-click or click on passive components).
- Readiness update: All infrastructure for Chapter 5 is in place, including engine support, evaluation fixtures, and UI for non-ideal parameter adjustments.
- Chapter 5 prerequisites hardening pass completed: fixed build-breaking bug in `CircuitWorkspace.tsx` (missing PropertyInspector import, inspectedComponentId state, and updateComponentProperties destructure); added `src/engine/tolerance.ts` with `computeToleranceBounds` and `applyToleranceOffset` utilities for lesson authors; wired sandbox Non-Ideal domain to `unlockedFeatures.includes('non-ideal')` in addition to showAllTools; added `source-resistance` component default (battery with `internalResistance: 0`) so clicking "source resistance" in sandbox adds a battery whose PropertyInspector shows the internal resistance field. Wire resistance sandbox integration deferred to Chapter 6.
- Chapter 5 readiness pass completed: legacy solver now factors in `internalResistance` (batteries) and `wireResistance` (wires) in resistance and component-result calculations, so Chapter 5 non-ideal lessons produce correct simulation values; added `quiz-ch5-ideal-non-ideal-basics` stub to Chapter 5 quiz registry (resolves broken unlock reference from lesson-ch5-1-1).
- Chapter 5 content authoring complete: all 15 lessons (units 1-5) and 15 quizzes fully authored. Lesson configs in `src/lessons/chapter-5/unit-{1-5}/lesson-ch5-{U-L}/config.ts`. Quiz configs in `src/quizzes/registry/chapter-5.ts`. Covers: ideal vs non-ideal comparison, operating ranges, internal resistance (4 lessons), wire resistance (3 lessons), heating and operating limits (3 lessons), tolerance and variability (3 lessons, including a `diagnose` capstone). All 15 quizzes follow a 3-question 60%-pass pattern. `npm run verify:evaluator` green.

## Tech Stack

- TypeScript 5.9, React 19, Vite 8
- ESLint 9 with React plugins
- CSS modules for component styling, CSS custom properties for theming
- Deployed via GitHub Actions to GitHub Pages

## Commands

```bash
npm run dev      # dev server
npm run build    # tsc -b + vite build
npm run lint     # eslint
npm run preview  # preview production build
npm run verify:engine         # baseline engine fixtures
npm run verify:engine:mna     # MNA fixture verification
npm run verify:engine:compare # backend parity fixture verification
npm run verify:evaluator      # evaluator fixture verification
```

No test suite configured.

## Project Structure

- `src/components/` — Feature-organized: `lessons/`, `quiz/`, `sandbox/`, `workspace/`, `theory/`, `layout/`, `nav/`, `shared/`
- `src/state/` — React Context + useReducer (`app-context.tsx`), context instances (`app-contexts.ts`), hooks (`app-hooks.ts`), localStorage persistence (`persistence.ts`)
- `src/engine/` — Circuit simulation logic
- `src/hooks/` — Custom hooks (e.g., `useCircuit`)
- `src/data/loaders.ts` — Dynamic chapter-based lesson/quiz loading with caching (add new chapters here)
- `src/lessons/` — Lesson configs organized by chapter/unit:
  - `shared.ts` — Shared circuit definitions (STANDARD_CIRCUIT, SERIES_TWO_BULBS, PARALLEL_TWO_BULBS, etc.)
  - `registry/` — Per-chapter lesson config default exports (`chapter-1.ts`, `chapter-2.ts`, `chapter-3.ts`, `chapter-4.ts`)
  - `units.ts` — Unit definitions with lesson ID lists
  - `chapter-2/`, `chapter-3/`, `chapter-4/` — Each has `unit-N/lesson-chX-N-N/config.ts`
- `src/quizzes/registry/` — Per-chapter quiz config default exports (`chapter-1.ts`, `chapter-2.ts`, `chapter-3.ts`, `chapter-4.ts`)
- `src/types/` — Type definitions (`circuit.ts`, `lesson.ts`, `quiz.ts`)
- `docs/` — PRD, spec, and chapter lesson-plan documents
- `docs/curriculum-progression-qa-checklist.md` — Implementation QA checklist for topic progression, redundancy prevention, and prerequisite clarity across Chapters 4-10
- `docs/future-chapters-implementation-readiness.md` — Gate, dependency, and evaluator readiness constraints for Chapters 4-10
- `docs/ch4-10-implementation-checklist.md` — Phase-based file-by-file implementation plan and acceptance checklist for Chapters 4-10 foundation work
- `src/engine/__fixtures__/` — Deterministic Chapter 1-3 engine behavior fixtures and runner for regression protection during solver refactor
- `docs/specs/` — Canonical cross-chapter UX specifications
- `docs/specs/time-visualization-ux-spec.md` — Cross-chapter time-visualization model for Chapters 6-7 (scrubber, timeline panel, AC extension, accessibility)
- `docs/specs/capstone-rubric-panel-ux-spec.md` — Chapter 10 rubric panel interaction model (layout, status semantics, accessibility, QA hooks)
- `docs/specs/sandbox-progressive-unlock-ux-spec.md` — Cross-chapter sandbox progressive-unlock interaction model (grouping, keyboard nav, persistence, locked-state messaging)

## Key Patterns

- **State**: `useAppState()` and `useAppDispatch()` hooks from `src/state/app-hooks.ts`. Actions: `NAVIGATE`, `START_LESSON`, `COMPLETE_LESSON`, `COMPLETE_QUIZ`, etc.
- **Lesson configs**: Each exports a `LessonConfig` with steps, challenges, theory content, formulas, and quiz unlocks. Follow existing patterns exactly when adding new lessons.
- **Lesson IDs**: `lesson-chX-Y-Z` (chapter X, unit Y, lesson Z). Export names: `lessonChX_Y_Z`.
- **Quiz IDs**: `quiz-chX-topic-name`. Each quiz has `unlockedBy` pointing to a lesson ID. Must match the lesson's `quizzesUnlocked` array.
- **Circuit components**: Defined in `shared.ts` or inline in lesson configs. Types: battery, bulb, switch, resistor, wire.
- **Challenge types**: `build`, `fix`, `predict`, `choose`, `drag-place`, `calculate`, `classify`, `diagnose`. Build challenges can specify `availableComponents`.
- **showFormulaPanel**: Controls whether numeric values (voltage, resistance) appear on components. False for early lessons, true from unit 3 onward.

## Content Structure

- **Chapter 1** (Foundations): 5 units, 15 lessons — basic circuit concepts
- **Chapter 2** (Numerical DC Analysis): 5 units, 14 lessons — Ohm's Law, power
- **Chapter 3** (Series & Parallel): 5 units, 18 lessons — series/parallel circuits and calculations
- **Chapter 4** (Measurement, Mixed Circuits, and Named Circuit Laws): 5 units, 15 lessons — meter workflows, mixed-circuit analysis, source-load matching, KCL/KVL naming
