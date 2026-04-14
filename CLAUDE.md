# Circuits App

Interactive educational app for learning electrical circuits. Structured as progressive lessons across chapters, with quizzes, a theory reference, and a sandbox mode.

## Current Status

- Chapters 1-3 are implemented and wired into registries.
- Lesson count: 47 total (Chapter 1: 15, Chapter 2: 14, Chapter 3: 18).
- Quiz count: 44 total (Chapter 1-3 coverage).
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

## Tech Stack

- TypeScript 5.9, React 19, Vite 8
- ESLint 9 with React plugins
- CSS modules for component styling, CSS custom properties for theming
- Deployed via GitHub Actions to GitHub Pages

## Commands

```bash
npm run dev      # dev server
npm run build    # tsc --noEmit + vite build
npm run lint     # eslint
npm run preview  # preview production build
```

No test suite configured.

## Project Structure

- `src/components/` — Feature-organized: `lessons/`, `quiz/`, `sandbox/`, `workspace/`, `theory/`, `layout/`, `nav/`, `shared/`
- `src/state/` — React Context + useReducer (`app-context.tsx`), context instances (`app-contexts.ts`), hooks (`app-hooks.ts`), localStorage persistence (`persistence.ts`)
- `src/engine/` — Circuit simulation logic
- `src/hooks/` — Custom hooks (e.g., `useCircuit`)
- `src/lessons/` — Lesson configs organized by chapter/unit:
  - `shared.ts` — Shared circuit definitions (STANDARD_CIRCUIT, SERIES_TWO_BULBS, PARALLEL_TWO_BULBS, etc.)
  - `lesson-registry.ts` — All lessons imported and exported as flat array
  - `units.ts` — Unit definitions with lesson ID lists
  - `chapter-2/`, `chapter-3/` — Each has `unit-N/lesson-chX-N-N/config.ts`
- `src/quizzes/quiz-registry.ts` — All quiz definitions in one file
- `src/types/` — Type definitions (`circuit.ts`, `lesson.ts`, `quiz.ts`)
- `docs/` — PRD, spec, and chapter lesson-plan documents
- `docs/curriculum-progression-qa-checklist.md` — Implementation QA checklist for topic progression, redundancy prevention, and prerequisite clarity across Chapters 4-10
- `docs/future-chapters-implementation-readiness.md` — Gate, dependency, and evaluator readiness constraints for Chapters 4-10
- `docs/ch4-10-implementation-checklist.md` — Phase-based file-by-file implementation plan and acceptance checklist for Chapters 4-10 foundation work
- `src/engine/__fixtures__/` — Deterministic Chapter 1-3 engine behavior fixtures and runner for regression protection during solver refactor
- `docs/specs/` — Reserved for cross-chapter UX specifications when extracted from chapter plans
- `docs/specs/time-visualization-ux-spec.md` — Cross-chapter time-visualization model for Chapters 6-7 (scrubber, timeline panel, AC extension, accessibility)
- `docs/specs/capstone-rubric-panel-ux-spec.md` — Chapter 10 rubric panel interaction model (layout, status semantics, accessibility, QA hooks)
- `docs/specs/sandbox-progressive-unlock-ux-spec.md` — Cross-chapter sandbox progressive-unlock interaction model (grouping, keyboard nav, persistence, locked-state messaging)

## Key Patterns

- **State**: `useAppState()` and `useAppDispatch()` hooks from `src/state/app-hooks.ts`. Actions: `NAVIGATE`, `START_LESSON`, `COMPLETE_LESSON`, `COMPLETE_QUIZ`, etc.
- **Lesson configs**: Each exports a `LessonConfig` with steps, challenges, theory content, formulas, and quiz unlocks. Follow existing patterns exactly when adding new lessons.
- **Lesson IDs**: `lesson-chX-Y-Z` (chapter X, unit Y, lesson Z). Export names: `lessonChX_Y_Z`.
- **Quiz IDs**: `quiz-chX-topic-name`. Each quiz has `unlockedBy` pointing to a lesson ID. Must match the lesson's `quizzesUnlocked` array.
- **Circuit components**: Defined in `shared.ts` or inline in lesson configs. Types: battery, bulb, switch, resistor, wire.
- **Challenge types**: `build`, `fix`, `predict`, `choose`, `drag-place`, `calculate`. Build challenges can specify `availableComponents`.
- **Challenge types roadmap (future chapters)**: adds `classify` and `diagnose` before Chapter 4 implementation.
- **showFormulaPanel**: Controls whether numeric values (voltage, resistance) appear on components. False for early lessons, true from unit 3 onward.

## Content Structure

- **Chapter 1** (Foundations): 5 units, 15 lessons — basic circuit concepts
- **Chapter 2** (Numerical DC Analysis): 5 units, 14 lessons — Ohm's Law, power
- **Chapter 3** (Series & Parallel): 5 units, 18 lessons — series/parallel circuits and calculations
