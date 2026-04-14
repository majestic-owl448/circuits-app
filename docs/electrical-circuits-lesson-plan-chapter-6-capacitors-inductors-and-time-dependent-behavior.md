# Lesson Plan, Chapter 6: Capacitors, Inductors, and Time-Dependent Behavior

## Purpose of this chapter

This chapter expands the curriculum beyond purely resistive steady-state DC circuits and introduces the first components whose behavior changes over time. The goal is to help learners understand that some circuits cannot be fully understood by looking only at a single steady-state snapshot.

The chapter introduces capacitors and inductors in a beginner-friendly way, focusing on intuition first and controlled simulation behavior rather than advanced derivations. It shows that voltage and current can change over time, that circuits can have transitional behavior before reaching a steady state, and that the learner must sometimes reason about both the starting behavior and the long-term behavior of a circuit.

This chapter remains theoretical and simulation-based. It uses visual change over time as a key teaching tool.

## Chapter metadata

- Chapter title: Capacitors, Inductors, and Time-Dependent Behavior
- Stage label: Intermediate to Late Intermediate
- Chapter goal: Learner can reason about basic capacitor and inductor behavior in simple simulated circuits and can distinguish between immediate behavior and steady-state behavior.
- Primary outcome: Learner understands that not all circuits settle instantly and that some components react differently during circuit changes over time.
- Main simulation model: introductory time-dependent circuit simulation using simple RC and RL-style examples
- Main interaction style: guided observation first, then structured analysis and simple target-based challenges
- Default lesson style: strongly guided when introducing each new component, then mixed guided and analytical
- Main workspace actions available by end of chapter:
  - all previously unlocked actions
  - inspect circuit behavior over time in supported lessons
  - use meters and visual overlays to compare initial and later states
  - reason about initial versus steady-state behavior
- Main conceptual transition in this chapter:
  - circuits can change over time
  - initial behavior and later behavior may differ
  - capacitors and inductors require time-aware reasoning

## ID mapping for implementation

- Lesson IDs in this chapter must map directly from lesson numbering: lesson `U.L` -> `lesson-ch6-U-L`.
- Standalone quiz IDs in this chapter must use `quiz-ch6-topic-name` with stable kebab-case slugs derived from quiz titles.
- Keep slugs stable across revisions to avoid breaking `unlockedBy` and registry references.

## Implementation boundary notes for this chapter

To reduce ambiguity during implementation, this chapter uses the following support contract:

- Lesson mode (required):
  - transient versus steady-state comparisons
  - RC-style and RL-style guided time-dependent lessons
  - time-checkpoint challenges using initial/mid/final lesson-defined windows
  - Time-Visualization UX Specification in `docs/specs/time-visualization-ux-spec.md`
- Sandbox mode (required by chapter end):
  - capacitor and inductor placement
  - RC-style and RL-style exploratory scenarios
  - time inspection controls (scrubber + checkpoint-aware readouts)
- Optional (can be disabled for first ship if clearly labeled):
  - extended timeline plotting options beyond the default one- or two-quantity panel

---

## Unit 1: Circuits Can Change Over Time

### Unit metadata

- Unit title: Circuits Can Change Over Time
- Stage label: Intermediate to Late Intermediate
- Unit goal: Learner understands that some circuits have behavior that unfolds over time rather than appearing instantly in a final state.
- Explicit prerequisites:
  - Chapter 5 complete

---

### Lesson 1.1: Not Every Circuit Settles Instantly

- Stage label: Intermediate to Late Intermediate
- Prerequisites:
  - Chapter 5 complete
- Main goal: Learner understands that some circuits have transitional behavior between switch-on and steady state.
- Concepts introduced:
  - changing circuit behavior over time
  - transient versus steady state
  - the idea of a response after a switch is toggled
- Formulas shown:
  - no heavy new formula requirement yet
  - prior DC formulas remain available as reference when instructionally relevant
- Components used:
  - simple comparison setups
  - one purely resistive reference circuit
  - one time-dependent example circuit preview
- Prebuilt amount:
  - comparison setups prebuilt
- Learner actions available:
  - toggle switch
  - inspect behavior over time
- Current-flow overlay:
  - available
  - may be paired with a simple time-aware visualization in supported lessons
- Hint style:
  - concept-first explanation
- Completion condition:
  - learner identifies which circuit changes over time and completes challenge set
- Challenge examples:
  1. identify which circuit reaches its behavior immediately and which changes over time
  2. identify what “steady state” means in the lesson context
- Challenge type: `choose`
- Sandbox unlocks after lesson:
  - no new component yet
- Theory page additions:
  - Transient behavior
  - Steady state
- In-lesson theory check:
  - identify transient versus steady-state language
- Standalone quiz topics unlocked:
  - transient versus steady-state basics

---

### Lesson 1.2: Initial State Versus Final State

- Stage label: Intermediate to Late Intermediate
- Prerequisites:
  - Lesson 1.1
- Main goal: Learner understands that some circuits must be described in terms of both what happens first and what happens later.
- Concepts introduced:
  - initial state
  - final or steady-state condition
  - same circuit can behave differently at different times
- Formulas shown:
  - no major new formulas yet
- Components used:
  - simple preview circuits showing a clear before-and-after behavior
- Prebuilt amount:
  - prebuilt
- Learner actions available:
  - toggle
  - compare start and end states
- Current-flow overlay:
  - available
- Hint style:
  - full explanation by default
- Completion condition:
  - learner distinguishes initial behavior from final behavior in guided examples
- Challenge examples:
  1. identify the initial condition of the circuit after closing the switch
  2. identify the later steady-state condition
- Challenge type: `choose`
- Sandbox unlocks after lesson:
  - no new component yet
- Theory page additions:
  - Initial versus steady-state reasoning
- In-lesson theory check:
  - identify which statement describes the initial or final state
- Standalone quiz topics unlocked:
  - initial-state versus final-state reasoning

---

## Unit 2: Capacitors

### Unit metadata

- Unit title: Capacitors
- Stage label: Late Intermediate
- Unit goal: Learner is introduced to the capacitor as a component whose behavior changes over time and can be described in terms of storing electrical energy in the simplified instructional model.
- Explicit prerequisites:
  - Unit 1 complete

---

### Lesson 2.1: Meet the Capacitor

- Stage label: Late Intermediate
- Prerequisites:
  - Lesson 1.2
- Main goal: Learner is introduced to the capacitor as a new component.
- Concepts introduced:
  - capacitor
  - storing electrical energy in the simplified model
  - capacitor behavior changes over time
- Formulas shown:
  - symbol definitions and simple conceptual references only
  - no heavy derivation yet
- Components used:
  - source
  - switch
  - capacitor
  - resistor where needed for a meaningful simple circuit
- Prebuilt amount:
  - mostly prebuilt
- Learner actions available:
  - inspect
  - toggle
  - watch time-dependent behavior
- Current-flow overlay:
  - available when instructionally relevant
- Hint style:
  - guided introduction
  - full explanation by default
- Completion condition:
  - learner identifies the capacitor and its basic role and completes challenge set
- Challenge examples:
  1. identify the new component
  2. choose the best beginner-friendly description of what a capacitor does
- Challenge type: `choose`
- Sandbox unlocks after lesson:
  - capacitor available in sandbox
- Theory page additions:
  - What is a capacitor?
- In-lesson theory check:
  - capacitor recognition and definition
- Standalone quiz topics unlocked:
  - capacitor basics

---

### Lesson 2.2: Charging Behavior

- Stage label: Late Intermediate
- Prerequisites:
  - Lesson 2.1
- Main goal: Learner observes that a capacitor-based circuit can change over time after the switch is closed.
- Concepts introduced:
  - charging in the simplified model
  - the circuit behavior changes before reaching a later state
  - not all current behavior is constant through the whole event
- Formulas shown:
  - still mostly conceptual
  - no heavy time-constant math yet
- Components used:
  - source
  - switch
  - resistor
  - capacitor
- Prebuilt amount:
  - prebuilt guided RC-style circuit
- Learner actions available:
  - toggle switch
  - observe time-dependent response
  - inspect values over time in supported lesson UI
- Current-flow overlay:
  - available
- Hint style:
  - explanation emphasizes the difference between the moment after switching and the later state
- Completion condition:
  - learner correctly describes the charging behavior qualitatively and completes challenge set
- Challenge examples:
  1. identify whether current is the same at the start and later in the event
  2. identify whether the capacitor is still changing or has reached a later stable condition
- Challenge type: `choose`
- Sandbox unlocks after lesson:
  - RC-style simple charging circuits available in sandbox
- Theory page additions:
  - Capacitor charging in the simplified model
- In-lesson theory check:
  - qualitative charging behavior
- Standalone quiz topics unlocked:
  - capacitor charging basics

---

### Lesson 2.3: Steady State in a Simple Capacitor Circuit

- Stage label: Late Intermediate
- Prerequisites:
  - Lesson 2.2
- Main goal: Learner understands the long-term steady-state behavior of a simple capacitor circuit in the instructional model.
- Concepts introduced:
  - capacitor circuit steady state
  - initial behavior can differ from long-term behavior
  - introductory time constant intuition: larger `R*C` means slower settling, smaller `R*C` means faster settling
- Formulas shown:
  - simple conceptual relations
  - qualitative time-constant relationship `tau = R*C` as an optional instructional aid
  - no advanced exponential treatment required
- Components used:
  - source
  - switch
  - resistor
  - capacitor
  - voltmeter when instructionally relevant
- Prebuilt amount:
  - mostly prebuilt
- Learner actions available:
  - inspect
  - run
  - compare early and late readings
- Current-flow overlay:
  - available
- Hint style:
  - full explanation
- Completion condition:
  - learner identifies the steady-state behavior correctly
- Challenge examples:
  1. identify whether the capacitor branch is still changing after a long time
  2. compare initial and final voltmeter readings in a guided example
- Challenge type: `choose`
- Sandbox unlocks after lesson:
  - no new component type
- Theory page additions:
  - Steady-state behavior of a simple capacitor circuit
- In-lesson theory check:
  - initial-versus-steady-state comparison in an RC-style circuit
- Standalone quiz topics unlocked:
  - capacitor steady-state basics

---

### Lesson 2.4: Discharging Behavior

- Stage label: Late Intermediate
- Prerequisites:
  - Lesson 2.3
- Main goal: Learner understands that a capacitor can also discharge and that the time-dependent behavior can be observed in reverse-like form.
- Concepts introduced:
  - discharging
  - release of stored energy in the simplified model
  - time-dependent decay in behavior
- Formulas shown:
  - still conceptual first
- Components used:
  - capacitor
  - resistor
  - switching arrangement that produces discharge behavior
- Prebuilt amount:
  - guided
- Learner actions available:
  - toggle switch states
  - observe changing behavior over time
  - compare charge and discharge cases
- Current-flow overlay:
  - available
- Hint style:
  - guided comparison
- Completion condition:
  - learner correctly identifies a discharge event and completes challenge set
- Challenge examples:
  1. compare charging and discharging behavior
  2. identify what is happening to the capacitor in a shown event
- Challenge type: `choose`
- Sandbox unlocks after lesson:
  - simple discharge examples available in sandbox
- Theory page additions:
  - Capacitor discharging in the simplified model
- In-lesson theory check:
  - charge versus discharge identification
- Standalone quiz topics unlocked:
  - capacitor discharge basics

---

## Unit 3: Inductors

### Unit metadata

- Unit title: Inductors
- Stage label: Late Intermediate
- Unit goal: Learner is introduced to the inductor as another time-dependent component with behavior that differs from the capacitor.
- Explicit prerequisites:
  - Unit 2 complete

---

### Lesson 3.1: Meet the Inductor

- Stage label: Late Intermediate
- Prerequisites:
  - Lesson 2.4
- Main goal: Learner is introduced to the inductor as a new component category.
- Concepts introduced:
  - inductor
  - inductor behavior changes over time
  - the inductor must not be treated as “just another resistor”
- Formulas shown:
  - symbol definitions and conceptual references only
- Components used:
  - source
  - switch
  - inductor
  - resistor when instructionally relevant
- Prebuilt amount:
  - mostly prebuilt
- Learner actions available:
  - inspect
  - toggle
  - observe
- Current-flow overlay:
  - available
- Hint style:
  - guided introduction
- Completion condition:
  - learner identifies the inductor and its role as a time-dependent component
- Challenge examples:
  1. identify the inductor among shown components
  2. choose the best beginner-friendly description of how it differs from a simple resistor
- Challenge type: `choose`
- Sandbox unlocks after lesson:
  - inductor available in sandbox
- Theory page additions:
  - What is an inductor?
- In-lesson theory check:
  - inductor recognition and definition
- Standalone quiz topics unlocked:
  - inductor basics

---

### Lesson 3.2: Current Change in an Inductor Circuit

- Stage label: Late Intermediate
- Prerequisites:
  - Lesson 3.1
- Main goal: Learner observes that current in a simple inductor circuit does not jump to its final behavior instantly in the instructional model.
- Concepts introduced:
  - time-dependent current behavior in an inductor circuit
  - initial and later current can differ
- Formulas shown:
  - no heavy new math yet
- Components used:
  - source
  - switch
  - resistor
  - inductor
  - ammeter when instructionally relevant
- Prebuilt amount:
  - guided RL-style circuit
- Learner actions available:
  - toggle
  - observe over time
  - inspect current behavior
- Current-flow overlay:
  - available
- Hint style:
  - explanation emphasizes current change over time
- Completion condition:
  - learner identifies the changing current behavior and completes challenge set
- Challenge examples:
  1. identify whether current is already at final value right after switching
  2. compare current behavior early and later in the event
- Challenge type: `choose`
- Sandbox unlocks after lesson:
  - simple RL-style circuits available in sandbox
- Theory page additions:
  - Inductor current behavior in the simplified model
- In-lesson theory check:
  - early versus later current behavior in an RL-style circuit
- Standalone quiz topics unlocked:
  - inductor current basics

---

### Lesson 3.3: Steady State in a Simple Inductor Circuit

- Stage label: Late Intermediate
- Prerequisites:
  - Lesson 3.2
- Main goal: Learner understands the steady-state behavior of a simple inductor circuit in the instructional model.
- Concepts introduced:
  - long-term inductor behavior
  - initial behavior and steady state are different
  - introductory time constant intuition: larger `L/R` means slower settling, smaller `L/R` means faster settling
- Formulas shown:
  - conceptual focus
  - qualitative time-constant relationship `tau = L/R` as an optional instructional aid
- Components used:
  - source
  - switch
  - resistor
  - inductor
  - ammeter and voltmeter when instructionally relevant
- Prebuilt amount:
  - mostly prebuilt
- Learner actions available:
  - inspect
  - measure
  - compare early and late states
- Current-flow overlay:
  - available
- Hint style:
  - explanatory and comparison-driven
- Completion condition:
  - learner correctly identifies the steady-state behavior in the guided circuit
- Challenge examples:
  1. identify the later stable behavior
  2. compare the inductor circuit’s early and late state
- Challenge type: `choose`
- Sandbox unlocks after lesson:
  - no new component type
- Theory page additions:
  - Steady-state behavior of a simple inductor circuit
- In-lesson theory check:
  - initial-versus-steady-state reasoning in an RL-style circuit
- Standalone quiz topics unlocked:
  - inductor steady-state basics

---

### Lesson 3.4: Inductor Energy Release

- Stage label: Late Intermediate
- Prerequisites:
  - Lesson 3.3
- Main goal: Learner understands that an inductor can release stored energy when the circuit changes, mirroring the capacitor discharge behavior from Lesson 2.4.
- Why this lesson exists:
  - Lesson 2.4 explicitly teaches capacitor discharge as a time-dependent release of stored energy. Without a corresponding inductor lesson, learners miss the parallel: inductors also store energy (in the simplified model) and release it when the driving condition changes.
  - This symmetry is important for the comparison in Unit 4 and for understanding energy flow in time-dependent circuits.
- Concepts introduced:
  - inductor energy release in the simplified model
  - what happens when the current source or path changes in an inductor circuit
  - comparison to capacitor discharge: both components can release stored energy, but in different ways
- Formulas shown:
  - conceptual focus
  - no heavy math required
- Components used:
  - source
  - switch
  - resistor
  - inductor
  - ammeter and voltmeter when instructionally relevant
- Prebuilt amount:
  - guided, with switching arrangement that produces energy-release behavior
- Learner actions available:
  - toggle switch states
  - observe changing behavior over time
  - compare to earlier inductor charging behavior
  - compare to capacitor discharge behavior from Lesson 2.4
- Current-flow overlay:
  - available
- Hint style:
  - guided comparison with explicit parallel to capacitor discharge
- Completion condition:
  - learner correctly identifies an inductor energy-release event and can distinguish it from the charging phase
- Challenge examples:
  1. identify what is happening to the inductor after the switch changes
  2. compare inductor energy release to capacitor discharge at a qualitative level
- Challenge type: `choose`
- Sandbox unlocks after lesson:
  - simple inductor energy-release examples available in sandbox
- Theory page additions:
  - Inductor energy release in the simplified model
- In-lesson theory check:
  - energy-release identification and comparison to capacitor discharge
- Standalone quiz topics unlocked:
  - inductor energy-release basics

---

## Unit 4: Capacitors Versus Inductors

### Unit metadata

- Unit title: Capacitors Versus Inductors
- Stage label: Late Intermediate
- Unit goal: Learner compares capacitor and inductor behavior directly and understands that they are not interchangeable.
- Explicit prerequisites:
  - Unit 3 complete

---

### Lesson 4.1: Two Different Kinds of Time-Dependent Components

- Stage label: Late Intermediate
- Prerequisites:
  - Lesson 3.4
- Main goal: Learner compares capacitors and inductors across similar switching scenarios.
- Concepts introduced:
  - capacitors and inductors behave differently over time
  - both are time-dependent, but not in the same way
  - component type matters to the circuit story
- Formulas shown:
  - conceptual focus, no heavy new math
- Components used:
  - comparison of simple RC-style and RL-style circuits
- Prebuilt amount:
  - comparison setups prebuilt
- Learner actions available:
  - toggle
  - inspect
  - compare over time
- Current-flow overlay:
  - available
- Hint style:
  - explicit side-by-side comparison
- Completion condition:
  - learner correctly distinguishes the two behaviors and completes challenge set
- Challenge examples:
  1. identify which shown response corresponds to a capacitor circuit
  2. identify which shown response corresponds to an inductor circuit
- Challenge type: `choose`
- Sandbox unlocks after lesson:
  - no new component type
- Theory page additions:
  - Capacitors versus inductors
- In-lesson theory check:
  - compare and classify time-dependent behavior
- Standalone quiz topics unlocked:
  - capacitor versus inductor comparison basics

---

### Lesson 4.2: Use the Right Component for the Right Behavior

- Stage label: Late Intermediate
- Prerequisites:
  - Lesson 4.1
- Main goal: Learner chooses between a capacitor and an inductor based on the desired behavior in a simulated design problem.
- Concepts introduced:
  - component choice depends on target behavior
  - time-dependent design is also a form of source-load and goal matching
- Formulas shown:
  - prior relations as needed
- Components used:
  - source
  - resistive elements
  - capacitor
  - inductor
  - switching behavior
- Prebuilt amount:
  - lightly scaffolded
- Learner actions available:
  - choose component
  - build
  - run
  - check solution
- Current-flow overlay:
  - available
- Hint style:
  - issue-first, explanation available
- Completion condition:
  - learner chooses and uses the correct time-dependent component for the goal
- Challenge examples:
  1. choose which component best fits the required behavior
  2. explain through selection which design better matches the target
- Challenge type: `choose`
- Sandbox unlocks after lesson:
  - no new component type
- Theory page additions:
  - Choosing between capacitor and inductor behavior
- In-lesson theory check:
  - component-choice reasoning
- Standalone quiz topics unlocked:
  - time-dependent component choice basics

---

## Unit 5: First Time-Aware Design Challenges

### Unit metadata

- Unit title: First Time-Aware Design Challenges
- Stage label: Late Intermediate
- Unit goal: Learner applies time-dependent reasoning in guided and semi-open-ended challenges.
- Explicit prerequisites:
  - Unit 4 complete

---

### Lesson 5.1: Design for the Initial Response

- Stage label: Late Intermediate
- Prerequisites:
  - Lesson 4.2
- Main goal: Learner solves a challenge where the important behavior is what happens immediately after switching.
- Concepts introduced:
  - design goals can focus on initial behavior
  - initial-state reasoning can matter just as much as long-term reasoning
- Formulas shown:
  - prior formulas as relevant
  - conceptual time-dependent reasoning emphasized
- Components used:
  - source
  - resistor
  - capacitor or inductor depending on challenge
- Prebuilt amount:
  - lightly scaffolded
- Learner actions available:
  - build
  - run
  - inspect over time
  - use meters
  - check solution
- Current-flow overlay:
  - available
- Hint style:
  - progressive
- Completion condition:
  - learner produces the required initial response behavior
- Challenge examples:
  1. design for a target initial effect right after switching
  2. identify why a circuit fails the initial-response requirement even if the long-term state looks acceptable
- Challenge type: `choose`
- Sandbox unlocks after lesson:
  - no new component type
- Theory page additions:
  - Designing for initial response
- In-lesson theory check:
  - initial-response goal reasoning
- Standalone quiz topics unlocked:
  - initial-response design basics

---

### Lesson 5.2: Design for the Later Response

- Stage label: Late Intermediate
- Prerequisites:
  - Lesson 5.1
- Main goal: Learner solves a challenge where the important behavior is the later steady-state condition.
- Concepts introduced:
  - different design goals may prioritize the later state
  - initial and final goals may conflict
- Formulas shown:
  - as relevant
- Components used:
  - source
  - resistor
  - capacitor or inductor depending on challenge
- Prebuilt amount:
  - lightly scaffolded
- Learner actions available:
  - build
  - run
  - inspect over time
  - use meters
  - check solution
- Current-flow overlay:
  - available
- Hint style:
  - concise initial hint
  - explanation available on request
- Completion condition:
  - learner produces the required later-state behavior
- Challenge examples:
  1. design for a target steady-state behavior
  2. identify why a design with a good initial response still fails the later requirement
- Challenge type: `choose`
- Sandbox unlocks after lesson:
  - no new component type
- Theory page additions:
  - Designing for steady-state response
- Troubleshooting and investigation checkpoint: transient-versus-steady-state diagnosis
- In-lesson theory check:
  - steady-state design reasoning
- Standalone quiz topics unlocked:
  - later-response design basics

---

### Lesson 5.3: Chapter Review Challenge

- Stage label: Late Intermediate
- Prerequisites:
  - Lesson 5.2
- Main goal: Learner integrates capacitor, inductor, initial-state, and steady-state reasoning in one chapter review challenge.
- Concepts introduced:
  - no major new concept
  - integration and fluency
- Formulas shown:
  - all relevant prior relations
- Components used:
  - source
  - resistive elements
  - capacitor and/or inductor
  - meters
- Prebuilt amount:
  - limited prebuilt structure
- Learner actions available:
  - build
  - run
  - inspect over time
  - measure
  - check solution
  - inspect detailed explanations
- Current-flow overlay:
  - available
- Hint style:
  - progressive and target-oriented
- Completion condition:
  - learner solves a time-dependent challenge using the correct component and reasoning about both early and later behavior
- Challenge examples:
  1. choose and configure the correct time-dependent component for the required behavior
  2. diagnose why a near-correct solution fails either the initial or the later condition
- Challenge type: `choose`, `diagnose`
- Sandbox unlocks after lesson:
  - chapter-complete prompt encouraging experimentation with RC-style and RL-style circuits
- Theory page additions:
  - Chapter 6 review topic links
- In-lesson theory check:
  - mixed quick checks
- Standalone quiz topics unlocked:
  - Chapter 6 review quiz

---

## Chapter 6 theory review items

By the end of this chapter, the theory reference should include topic-group entries for:
- Transient behavior
- Steady state
- Initial versus steady-state reasoning
- What is a capacitor?
- Capacitor charging in the simplified model
- Steady-state behavior of a simple capacitor circuit
- Capacitor discharging in the simplified model
- What is an inductor?
- Inductor current behavior in the simplified model
- Steady-state behavior of a simple inductor circuit
- Inductor energy release in the simplified model
- Capacitors versus inductors
- Choosing between capacitor and inductor behavior
- Designing for initial response
- Designing for steady-state response

Each entry should link back to the lesson or lessons where it was introduced.

## Chapter 6 standalone quizzes

Suggested quizzes unlocked by the end of the chapter:
1. Transient versus steady-state basics
2. Initial-state versus final-state reasoning
3. Capacitor basics
4. Capacitor charging basics
5. Capacitor steady-state basics
6. Capacitor discharge basics
7. Inductor basics
8. Inductor current basics
9. Inductor steady-state basics
10. Inductor energy-release basics
11. Capacitor versus inductor comparison basics
12. Time-dependent component choice basics
13. Initial-response design basics
14. Later-response design basics
15. Chapter 6 review quiz

These are optional and replayable.

## Chapter 6 sandbox state by the end

By the end of Chapter 6, sandbox should support in required time-dependent mode:
- capacitor placement and use
- inductor placement and use
- RC-style and RL-style simple circuits
- visual inspection of changing behavior over time
- meter-assisted comparison of initial and later states
- target-based challenges centered on early versus later behavior

## Forward note: frequency and period as prerequisites for Chapter 7

Chapter 7 (AC Fundamentals) will rely on learners understanding that capacitors and inductors can respond differently depending on how quickly conditions change. While this chapter focuses on single-event transients (switch on, observe, reach steady state), the concept of "how fast" a change happens is relevant.

To prepare for this transition:
- Lessons in this chapter should use language like "how quickly the circuit responds" and "faster or slower settling" when describing RC and RL behavior, even though formal frequency/period terminology is not introduced here.
- The handoff to Chapter 7 should note that AC introduces the idea of continuous, repeating changes rather than one-time events, and that the speed of repetition (frequency) will matter for how capacitors and inductors behave under AC.
- Chapter 7, Lesson 2.3 (AC reactive preview) builds directly on this foundation.

## Time-Visualization UX Specification

The full cross-chapter Time-Visualization UX Specification has been migrated to:

- `docs/specs/time-visualization-ux-spec.md`

This chapter and Chapter 7 should treat that spec as authoritative for:

- scrubber behavior and checkpoints,
- playback controls and reduced-motion behavior,
- timeline panel semantics,
- accessibility requirements,
- AC repeating-cycle extension behavior.

## Handoff to Chapter 7

Chapter 7 should begin introducing alternating current and circuits that convert between DC and AC in a conceptual and simulation-first way.

Learners should already be able to:
- distinguish transient behavior from steady-state behavior in time-dependent lessons
- use scrubber checkpoints to inspect and compare initial, middle, and final states
- interpret time-aware meter and timeline readings for simple RC/RL instructional cases

That chapter should include:
- what AC is
- how AC differs from DC
- simple AC wave behavior at an introductory level
- loads under AC versus DC where instructionally useful
- conceptual conversion stages between DC and AC
- modern examples such as a DC source feeding an AC load through a conversion stage
- explicit connection between Chapter 6's time-dependent reasoning (single-event transients) and AC's repeating time-dependent behavior
