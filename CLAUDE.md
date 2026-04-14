# Circuits App

Interactive educational app for learning electrical circuits. Structured as progressive lessons across chapters, with quizzes, a theory reference, and a sandbox mode.

## Current Status

- Chapters 1-3 are implemented and wired into registries.
- Lesson count: 47 total (Chapter 1: 15, Chapter 2: 14, Chapter 3: 18).
- Quiz count: 44 total (Chapter 1-3 coverage).
- Build and lint pass.

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
