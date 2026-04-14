# Circuit Lab

An interactive educational web app that teaches electrical circuits through hands-on building, experimentation, and guided lessons.

## Features

- **47 structured lessons** across 3 chapters, progressing from basic circuit concepts to numerical DC analysis and series/parallel reasoning
- **Interactive circuit editor** — drag-and-drop components (batteries, bulbs, resistors, switches, wires), draw connections, and simulate in real time
- **Circuit simulation engine** — calculates current, voltage, resistance, and power with visual current-flow overlay
- **Sandbox mode** — free-form circuit building unlocked as you progress through lessons
- **Quizzes** — multiple-choice assessments with scoring, feedback, and retry
- **Theory reference** — accumulated reference entries from completed lessons
- **Progress tracking** — lessons, unlocks, quiz scores, and preferences persisted to localStorage

## Tech Stack

- React 19, TypeScript, Vite
- CSS Modules for component-scoped styling
- React Context + useReducer for state management

## Getting Started

```bash
npm install
npm run dev
```

## Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start the Vite dev server |
| `npm run build` | Type-check and build for production |
| `npm run lint` | Run ESLint |
| `npm run preview` | Preview the production build locally |
| `npm run verify:engine` | Run baseline engine fixtures |
| `npm run verify:engine:mna` | Run mixed-topology MNA fixtures |
| `npm run verify:engine:compare` | Run backend parity fixture checks |
| `npm run verify:evaluator` | Run evaluator behavior fixtures |

## Docs

- Core planning and product documents live in `docs/`.
- Future implementation gates and risk rubric: `docs/future-chapters-implementation-readiness.md`.
- Curriculum progression QA checklist for Chapters 4-10: `docs/curriculum-progression-qa-checklist.md`.
