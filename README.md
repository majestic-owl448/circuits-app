# Circuit Lab

An interactive educational web app that teaches electrical circuits through hands-on building, experimentation, and guided lessons.

## Features

- **145 structured lessons** across 10 chapters, progressing from basic circuit concepts through numerical DC analysis, series/parallel circuits, measurement, non-ideal components, transient behavior, AC circuits, semiconductors, logic gates, and a capstone review
- **Interactive circuit editor** — drag-and-drop components (batteries, bulbs, resistors, switches, wires, capacitors, inductors, diodes, transistors, logic gates), draw connections, and simulate in real time
- **Circuit simulation engine** — calculates current, voltage, resistance, and power with visual current-flow overlay; supports RC/RL transient physics and AC waveforms
- **Sandbox mode** — free-form circuit building with progressively unlocked component domains
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
