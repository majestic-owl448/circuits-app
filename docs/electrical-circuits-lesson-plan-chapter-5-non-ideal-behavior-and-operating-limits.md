# Lesson Plan, Chapter 5: Non-Ideal Behavior and Operating Limits

## Purpose of this chapter

This chapter shifts the curriculum from idealized circuit behavior toward selected non-ideal effects that make simulated circuits feel more realistic and more constrained. The goal is not to model all physical reality in depth, but to teach learners why real circuits often behave differently from the simplest textbook examples.

The chapter introduces internal resistance of the source, wire resistance, voltage drop under load, heating, operating limits, and component failure or burnout in a controlled educational way. These ideas are connected back to the ideal models the learner already knows, so that the learner sees ideal analysis not as wrong, but as a useful first approximation.

This chapter remains theoretical and simulation-based. It does not introduce real-world construction or hardware practice.

## Chapter metadata

- Chapter title: Non-Ideal Behavior and Operating Limits
- Stage label: Intermediate
- Chapter goal: Learner can understand and analyze selected non-ideal circuit effects and can reason about operating limits, failure conditions, and more realistic target ranges in simulation.
- Primary outcome: Learner understands why ideal results and realistic results can differ, and can diagnose that difference using the simulation model.
- Main simulation model: gradually less ideal DC circuits with selected non-ideal effects
- Main interaction style: guided explanation first, then target-based design and debugging
- Default lesson style: mixed between guided comparison lessons and more open-ended diagnosis/design challenges
- Main workspace actions available by end of chapter:
  - all previously unlocked actions
  - meter use in more realistic simulation contexts
  - target-based design with non-ideal constraints
  - interpretation of broader acceptable ranges and component limits
- Main conceptual transition in this chapter:
  - ideal analysis remains foundational
  - realistic simulation adds limits, losses, and possible failure

## ID mapping for implementation

- Lesson IDs in this chapter must map directly from lesson numbering: lesson `U.L` -> `lesson-ch5-U-L`.
- Standalone quiz IDs in this chapter must use `quiz-ch5-topic-name` with stable kebab-case slugs derived from quiz titles.
- Keep slugs stable across revisions to avoid breaking `unlockedBy` and registry references.

## Implementation boundary notes for this chapter

To reduce ambiguity during implementation, this chapter uses the following support contract:

- Ohmmeter carry-forward rule (normative for this chapter):
  - Chapter 4 de-energized rule remains unchanged in non-ideal contexts.
  - Internal-resistance and wire-loss modeling do not create exceptions to energized/de-energized validation.
  - If any active source contributes in the same connected graph component as the measurement target, ohmmeter use is treated as energized and invalid unless a scenario explicitly overrides this for instructional reasons.

- Lesson mode (required):
  - internal source resistance scenarios
  - wire-resistance and path-drop scenarios
  - operating-range and operating-limit evaluation
  - failure/burnout feedback in guided and challenge contexts
- Sandbox mode (required by chapter end):
  - internal resistance source parameters
  - non-ideal wire resistance parameters
  - target-range and failure-state inspection in required non-ideal mode
  - ideal vs non-ideal comparison prompts
- Optional (can be disabled for first ship if clearly labeled):
  - tolerance-variation simulation sweeps beyond lesson-defined fixed scenarios

---

## Unit 1: Ideal Models Are Useful, But Not Complete

### Unit metadata

- Unit title: Ideal Models Are Useful, But Not Complete
- Stage label: Intermediate
- Unit goal: Learner understands why the simulation now begins introducing non-ideal behavior.
- Explicit prerequisites:
  - Chapter 4 complete

---

### Lesson 1.1: Why Realistic Behavior Matters

- Stage label: Intermediate
- Prerequisites:
  - Chapter 4 complete
- Main goal: Learner understands that ideal models are still useful, but some circuit outcomes require more realistic simulation behavior.
- Concepts introduced:
  - ideal models simplify
  - real behavior can differ from ideal predictions
  - non-ideal modeling is introduced for instructional value, not physical completeness
- Formulas shown:
  - previously learned ideal formulas remain visible as the starting point
- Components used:
  - familiar ideal circuits shown alongside more realistic simulated variants
- Prebuilt amount:
  - comparison setups prebuilt
- Learner actions available:
  - inspect
  - run
  - compare outcomes
- Current-flow overlay:
  - available
- Hint style:
  - concept-first explanation
- Completion condition:
  - learner identifies why two versions of a similar circuit may behave differently under different simulation assumptions
- Challenge examples:
  1. choose which explanation best describes the difference between ideal and non-ideal simulation
  2. identify whether an observed mismatch is better explained by structure or realism assumptions
- Challenge type: `choose`
- Sandbox unlocks after lesson:
  - no new component type
- Theory page additions:
  - Ideal versus non-ideal behavior
  - Why simplified models still matter
- In-lesson theory check:
  - concept check on the role of modeling assumptions
- Standalone quiz topics unlocked:
  - ideal versus non-ideal basics

---

### Lesson 1.2: Wider Acceptable Ranges

- Stage label: Intermediate
- Prerequisites:
  - Lesson 1.1
- Main goal: Learner understands why challenge success in non-ideal contexts should be based on ranges rather than exact-value expectations.
- Terminology clarification (used throughout this chapter):
  - **Operating range**: the span of values within which a component functions correctly in a given lesson or challenge. Used for evaluation of whether the learner's design succeeds.
  - **Operating limit**: the boundary beyond which a component fails or is damaged (introduced in Unit 4). A limit is the edge of the safe operating range.
  - **Tolerance**: the manufacturing variation in a component's actual value compared to its nominal label (introduced in Unit 5). Tolerance causes the component itself to differ slightly from spec, which can shift results within or outside the operating range.
  - These three concepts are related but distinct. Operating range is about the design goal, operating limit is about the failure boundary, and tolerance is about component variability.
- Concepts introduced:
  - operating range versus exact target
  - non-ideal behavior can shift values slightly or materially
  - wider evaluation ranges can be instructionally appropriate
- Formulas shown:
  - whichever relevant formulas support the lesson examples
- Components used:
  - simple circuits with slightly varied outcomes under non-ideal assumptions
- Prebuilt amount:
  - mostly prebuilt comparison examples
- Learner actions available:
  - inspect
  - run
  - check solution
  - inspect final values
- Current-flow overlay:
  - available
- Hint style:
  - explanatory and comparison-driven
- Completion condition:
  - learner identifies why range-based evaluation is used and completes challenge set
- Challenge examples:
  1. identify whether a target component is within the acceptable range
  2. choose which result is acceptable in a non-ideal lesson context
- Challenge type: `choose`
- Sandbox unlocks after lesson:
  - no new components
- Theory page additions:
  - Operating ranges in non-ideal simulation
- In-lesson theory check:
  - exact target versus acceptable range
- Standalone quiz topics unlocked:
  - target-range reasoning in non-ideal contexts

---

## Unit 2: Internal Resistance of the Source

### Unit metadata

- Unit title: Internal Resistance of the Source
- Stage label: Intermediate
- Unit goal: Learner understands that a source may not behave like a perfect ideal voltage source under load.
- Thread map (source-load matching progression):
  - Ch2 baseline: ideal single-load matching
  - Ch4 extension: mixed-circuit matching with measurement verification
  - Ch5 extension: non-ideal constraints and operating limits
  - canonical reference: `docs/curriculum-progression-qa-checklist.md` -> "Source-load matching progression thread map (canonical)"
- Explicit prerequisites:
  - Unit 1 complete

---

### Lesson 2.1: The Source Is Not Perfect

- Stage label: Intermediate
- Prerequisites:
  - Lesson 1.2
- Main goal: Learner is introduced to internal resistance of the source in a conceptual way.
- Concepts introduced:
  - internal resistance
  - source performance can change under load
  - the delivered behavior can differ from the ideal source assumption
- Formulas shown:
  - ideal formulas remain visible
  - simple internal-resistance modeling may be introduced in plain circuit form before heavy algebra
- Components used:
  - one source with modeled internal resistance
  - one target load
  - optional comparison to an ideal source version
- Prebuilt amount:
  - comparison circuits prebuilt
- Learner actions available:
  - inspect
  - run
  - compare
- Current-flow overlay:
  - available
- Hint style:
  - full conceptual explanation
- Completion condition:
  - learner explains why a source with internal resistance behaves differently from an ideal source in the same circuit
- Challenge examples:
  1. choose which source is ideal and which is non-ideal in a comparison
  2. identify why the target load performs differently under the two source models
- Challenge type: `choose`
- Sandbox unlocks after lesson:
  - sources can now have an internal-resistance parameter in sandbox when non-ideal mode is enabled
- Theory page additions:
  - Internal resistance of the source
- In-lesson theory check:
  - identify what internal resistance changes
- Standalone quiz topics unlocked:
  - internal resistance basics

---

### Lesson 2.2: Voltage Drop Under Load

- Stage label: Intermediate
- Prerequisites:
  - Lesson 2.1
- Main goal: Learner understands that internal resistance can cause the effective delivered voltage at the load to drop under load.
- Concepts introduced:
  - voltage drop under load
  - source voltage at the load can differ from nominal source value in a non-ideal model
- Formulas shown:
  - relevant source-plus-load relationships
  - ideal formulas remain the reference point
- Components used:
  - one source with internal resistance
  - one resistive load
  - voltmeter
- Prebuilt amount:
  - partially prebuilt
- Learner actions available:
  - inspect
  - measure voltage
  - compare expected versus measured values
- Current-flow overlay:
  - available
- Hint style:
  - explanation plus meter-assisted verification
- Completion condition:
  - learner identifies and verifies the voltage drop at the load
- Challenge examples:
  1. compare ideal delivered voltage and non-ideal delivered voltage
  2. identify which reading suggests a source is dropping voltage under load
- Challenge type: `choose`
- Sandbox unlocks after lesson:
  - voltmeter becomes useful for source-drop inspection in sandbox
- Theory page additions:
  - Voltage drop under load
- In-lesson theory check:
  - interpret voltage readings under load
- Standalone quiz topics unlocked:
  - source-drop basics

---

### Lesson 2.3: Diagnose Source Behavior With Meters

- Stage label: Intermediate
- Prerequisites:
  - Lesson 2.2
- Main goal: Learner uses meters to diagnose whether a source has significant internal resistance, bridging Chapter 4's measurement skills with Chapter 5's non-ideal concepts.
- Why this lesson exists:
  - Chapter 4 taught meter use for verification of known ideal circuits, and Lessons 2.1-2.2 introduced internal resistance conceptually. But no lesson yet teaches the diagnostic technique of using meters to detect and quantify non-ideal source behavior.
  - Without this lesson, learners move directly from observing voltage drop to designing around it, skipping the critical skill of identifying internal resistance through measurement evidence.
- Concepts introduced:
  - comparing no-load and loaded voltage readings to detect internal resistance
  - using ammeter readings to correlate current draw with voltage drop
  - measurement as a diagnostic tool for non-ideal effects, not just verification of ideal predictions
- Formulas shown:
  - `V = IR` applied to source internal resistance context
  - voltage-drop relationship under load
- Components used:
  - source with internal resistance
  - resistive load (swappable between light and heavy loads)
  - voltmeter
  - ammeter
- Prebuilt amount:
  - mostly prebuilt with guided meter placement
- Learner actions available:
  - place meters
  - run circuit with no load and with load
  - compare readings across conditions
  - identify evidence of internal resistance
- Current-flow overlay:
  - available
- Hint style:
  - measurement-guided explanation
  - first asks learner to predict what readings would look like if there were no internal resistance
- Completion condition:
  - learner correctly identifies internal resistance as the cause of observed voltage difference and uses meter readings as evidence
- Challenge examples:
  1. compare voltmeter readings at no load and under load, then explain the difference
  2. identify which of two sources has greater internal resistance based on meter evidence
- Challenge type: `choose`
- Sandbox unlocks after lesson:
  - no new component type
- Theory page additions:
  - Troubleshooting and investigation: diagnosing source behavior with meters
- In-lesson theory check:
  - interpret meter readings to distinguish ideal from non-ideal source behavior
- Standalone quiz topics unlocked:
  - meter-based source diagnosis

---

### Lesson 2.4: Matching the Source to the Load With Internal Resistance

- Stage label: Intermediate
- Prerequisites:
  - Lesson 2.3
- Main goal: Learner applies source internal resistance to a target-based design problem.
- Concepts introduced:
  - source suitability now depends on more than nominal voltage
  - the source itself can become part of the design constraint
- Formulas shown:
  - whichever formulas are relevant to the structured example
- Components used:
  - source with internal resistance
  - target load
  - optional support components
  - voltmeter and ammeter when instructionally relevant
- Prebuilt amount:
  - partially prebuilt or lightly scaffolded
- Learner actions available:
  - build
  - run
  - measure
  - check solution
- Current-flow overlay:
  - available
- Hint style:
  - progressive, issue-first
- Completion condition:
  - learner adapts the circuit so the target load operates acceptably despite source internal resistance
- Challenge examples:
  1. choose a better configuration for a source with internal resistance
  2. identify why the nominal source value alone is not enough to guarantee success
- Challenge type: `choose`
- Sandbox unlocks after lesson:
  - no new component type
- Theory page additions:
  - Source-load matching with internal resistance
  - Extending source-load matching from Chapter 2 (ideal numerical) and Chapter 4 (measurement-guided) into non-ideal constraints
- In-lesson theory check:
  - identify which quantity matters most to the target outcome
- Standalone quiz topics unlocked:
  - source internal resistance and design reasoning

---

## Unit 3: Wire Resistance

### Unit metadata

- Unit title: Wire Resistance
- Stage label: Intermediate
- Unit goal: Learner understands that wires themselves can affect circuit behavior when they are not treated as ideal.
- Explicit prerequisites:
  - Unit 2 complete

---

### Lesson 3.1: Wires Are Not Always Perfect

- Stage label: Intermediate
- Prerequisites:
  - Lesson 2.4
- Main goal: Learner is introduced to wire resistance conceptually.
- Concepts introduced:
  - wires can have resistance
  - wire effects can matter in some circuits and not much in others
  - ideal wires are a useful simplification, but not always enough
- Formulas shown:
  - resistance-related formulas remain visible
- Components used:
  - source
  - load
  - wire segments with modeled resistance
  - comparison to ideal wire case
- Prebuilt amount:
  - comparison setups prebuilt
- Learner actions available:
  - inspect
  - run
  - compare
- Current-flow overlay:
  - available
- Hint style:
  - full explanation by default
- Completion condition:
  - learner identifies when wire resistance changes the result and completes challenge set
- Challenge examples:
  1. compare a circuit with ideal wires to one with non-ideal wires
  2. identify which part of the circuit is adding the extra resistance
- Challenge type: `choose`
- Sandbox unlocks after lesson:
  - wire resistance available as a sandbox parameter in non-ideal mode
- Theory page additions:
  - Wire resistance
- In-lesson theory check:
  - concept check on non-ideal wires
- Standalone quiz topics unlocked:
  - wire-resistance basics

---

### Lesson 3.2: Voltage Drop Along the Path

- Stage label: Intermediate
- Prerequisites:
  - Lesson 3.1
- Main goal: Learner understands that non-ideal wires can create voltage drops along the path.
- Concepts introduced:
  - part of the source effect can be lost before reaching the target load
  - wire voltage drop can reduce target performance
- Formulas shown:
  - relevant relationships in a guided setting
- Components used:
  - source
  - load
  - non-ideal wire segments
  - voltmeter
- Prebuilt amount:
  - partially prebuilt
- Learner actions available:
  - measure across selected parts of the path
  - compare the readings
- Current-flow overlay:
  - available
- Hint style:
  - measurement-guided explanation
- Completion condition:
  - learner uses the voltmeter to identify a drop along a non-ideal wire path
- Challenge examples:
  1. find where the voltage is being lost
  2. identify which measured difference explains the weaker target-load behavior
- Challenge type: `choose`
- Sandbox unlocks after lesson:
  - no new component type
- Theory page additions:
  - Voltage drop in non-ideal wires
- In-lesson theory check:
  - interpret path-voltage readings
- Standalone quiz topics unlocked:
  - voltage drop along wires

---

### Lesson 3.3: Design Around Wire Losses

- Stage label: Intermediate
- Prerequisites:
  - Lesson 3.2
- Main goal: Learner solves a design problem where wire resistance contributes meaningfully to the outcome.
- Concepts introduced:
  - the path itself can be part of the design problem
  - improving the result may require changing more than the obvious target component
- Formulas shown:
  - as relevant to the challenge
- Components used:
  - source
  - target load
  - non-ideal wire paths
  - optional support components
- Prebuilt amount:
  - lightly scaffolded
- Learner actions available:
  - build
  - run
  - measure
  - check solution
- Current-flow overlay:
  - available
- Hint style:
  - progressive
- Completion condition:
  - learner achieves the target condition despite non-ideal wire effects
- Challenge examples:
  1. modify the circuit so the target still works even with wire losses
  2. identify whether the main limitation is the source, the wire path, or the load choice
- Challenge type: `choose`
- Sandbox unlocks after lesson:
  - no new component type
- Theory page additions:
  - Designing around wire losses
- In-lesson theory check:
  - identify the main limiting factor in a given example
- Standalone quiz topics unlocked:
  - wire-loss design reasoning

---

## Unit 4: Heating and Failure

### Unit metadata

- Unit title: Heating and Failure
- Stage label: Intermediate
- Unit goal: Learner understands that excessive operating conditions can create heat and can damage or destroy components in the simulation.
- Explicit prerequisites:
  - Unit 3 complete

---

### Lesson 4.1: Heat as a Circuit Consequence

- Stage label: Intermediate
- Prerequisites:
  - Lesson 3.3
- Main goal: Learner understands that resistive behavior can be associated with heat in the simulation.
- Concepts introduced:
  - resistive elements can dissipate energy as heat
  - heating can be an important constraint, not just a side note
  - some circuit examples are better understood as heat-focused loads
- Formulas shown:
  - power relationships are emphasized again
- Components used:
  - resistive loads such as bulb-like loads and heat-focused examples such as a toaster-like model
- Prebuilt amount:
  - mostly prebuilt comparison examples
- Learner actions available:
  - run
  - inspect
  - compare outcomes
- Current-flow overlay:
  - available
- Hint style:
  - concept-first, then formula-linked
- Completion condition:
  - learner identifies which circuit condition leads to more heating
- Challenge examples:
  1. choose which setup dissipates more power in a heat-focused load
  2. identify which quantity most directly relates to heating in this model
- Challenge type: `choose`
- Sandbox unlocks after lesson:
  - no new component type
- Theory page additions:
  - Heating in resistive loads
- In-lesson theory check:
  - power and heat reasoning
- Standalone quiz topics unlocked:
  - heating basics

---

### Lesson 4.2: Burnout and Operating Limits

- Stage label: Intermediate
- Prerequisites:
  - Lesson 4.1
- Main goal: Learner understands that the simulation can represent component failure when operating limits are exceeded.
- Concepts introduced:
  - burnout
  - damaged component state
  - successful operation is not only about turning on
  - working range versus damaging range
- Formulas shown:
  - whichever formulas are needed to explain the example
- Components used:
  - target loads with operating limits
  - source and support components
- Prebuilt amount:
  - comparison setups and guided failure examples
- Learner actions available:
  - run
  - observe failure
  - inspect final values
  - use meters when instructionally relevant
- Current-flow overlay:
  - available
- Hint style:
  - full why explanation shown by default
- Completion condition:
  - learner correctly identifies why a target component failed and how to avoid that condition
- Challenge examples:
  1. identify which value exceeded the acceptable limit
  2. choose a modification that prevents burnout
- Challenge type: `choose`
- Sandbox unlocks after lesson:
  - supported components can now display failure states where the sandbox mode allows it
- Theory page additions:
  - Operating limits and burnout
- In-lesson theory check:
  - identify the cause of failure
- Standalone quiz topics unlocked:
  - burnout and limits basics

---

### Lesson 4.3: Make It Work Without Breaking It

- Stage label: Intermediate
- Prerequisites:
  - Lesson 4.2
- Main goal: Learner solves a target-based circuit challenge where non-ideal limits and failure states matter.
- Concepts introduced:
  - good design means both function and safe operation within the simulation model
  - the learner must consider target range, losses, and failure conditions together
- Formulas shown:
  - as required by the challenge
- Components used:
  - source
  - target load
  - support components
  - realistic simulation constraints already introduced
- Prebuilt amount:
  - lightly scaffolded
- Learner actions available:
  - build
  - run
  - measure
  - check solution
  - inspect details
- Current-flow overlay:
  - available
- Hint style:
  - issue-by-issue progressive hints
  - explanation available when requested
- Completion condition:
  - learner produces a working circuit that achieves the target behavior without causing failure
- Challenge examples:
  1. make the bulb light acceptably without burning it out
  2. make the heat-focused load work without exceeding its allowed range
- Challenge type: `choose`
- Sandbox unlocks after lesson:
  - no new component type
- Theory page additions:
  - Designing within operating limits
- In-lesson theory check:
  - choose the best design change to prevent damage
- Standalone quiz topics unlocked:
  - operating-limit design reasoning

---

## Unit 5: Tolerances and Variability

### Unit metadata

- Unit title: Tolerances and Variability
- Stage label: Intermediate
- Unit goal: Learner understands that not all component values must be treated as perfectly exact in a more realistic simulation.
- Explicit prerequisites:
  - Unit 4 complete

---

### Lesson 5.1: The Same Label Does Not Always Mean the Same Exact Value

- Stage label: Intermediate
- Prerequisites:
  - Lesson 4.3
- Main goal: Learner is introduced to basic component tolerance as a realistic source of variation.
- Concepts introduced:
  - tolerance
  - nominal value versus exact realized value
  - small variation can still be acceptable
- Formulas shown:
  - prior formulas remain available
- Components used:
  - loads or resistors with nominal values and tolerance-aware simulation behavior
- Prebuilt amount:
  - mostly prebuilt comparison examples
- Learner actions available:
  - inspect
  - compare
  - run
- Current-flow overlay:
  - available
- Hint style:
  - conceptual and range-focused
- Completion condition:
  - learner explains why slightly different results can still be consistent with the same intended design
- Challenge examples:
  1. identify whether two close values are both acceptable
  2. identify what nominal value means in the lesson's context
- Challenge type: `choose`
- Sandbox unlocks after lesson:
  - tolerance-aware components available in required non-ideal mode
- Theory page additions:
  - Component tolerance
- In-lesson theory check:
  - tolerance and nominal-value recognition
- Standalone quiz topics unlocked:
  - tolerance basics

---

### Lesson 5.2: Design for Tolerance, Not Just Nominal Values

- Stage label: Intermediate
- Prerequisites:
  - Lesson 5.1
- Main goal: Learner designs a circuit that remains acceptable across lesson-defined tolerance variation, not only at nominal values.
- Concepts introduced:
  - tolerance-aware design
  - robustness across acceptable value spread
  - nominal success can still fail at tolerance edges
- Formulas shown:
  - prior formulas remain available
  - optional min/max check framing where instructionally relevant
- Components used:
  - source with previously introduced non-ideal options
  - tolerance-aware load or resistor set
  - optional support components
  - meters
- Prebuilt amount:
  - partially prebuilt with one failing nominal-only example
- Learner actions available:
  - build or adjust circuit
  - run nominal case and tolerance-edge cases
  - measure and compare outcomes
  - check solution
- Current-flow overlay:
  - available
- Hint style:
  - robustness-first guidance
  - prompts learner to verify more than one configuration case
- Completion condition:
  - learner produces a design that passes all lesson-defined tolerance cases for the target criterion
- Challenge examples:
  1. redesign a nominally correct circuit so it stays in range when the target component varies within tolerance
  2. identify which candidate design is robust across the provided tolerance cases
- Challenge type: `choose`
- Sandbox unlocks after lesson:
  - tolerance-variation prompt set available in required non-ideal mode
- Theory page additions:
  - Designing for tolerance instead of a single nominal value
- In-lesson theory check:
  - robustness-versus-nominal reasoning
- Standalone quiz topics unlocked:
  - tolerance-aware design basics

---

### Lesson 5.3: Non-Ideal Review Challenge

- Stage label: Intermediate
- Prerequisites:
  - Lesson 5.2
- Main goal: Learner integrates internal resistance, wire losses, heating, operating limits, and tolerance-aware thinking in one larger challenge.
- Concepts introduced:
  - no major new concept
  - integration and realistic reasoning
- Formulas shown:
  - all relevant prior formulas
- Components used:
  - source with internal resistance
  - non-ideal wire path
  - target load with operating range
  - optional support components
  - meters
- Prebuilt amount:
  - limited prebuilt structure
- Learner actions available:
  - build
  - run
  - measure
  - check solution
  - inspect final values
  - inspect detailed derivation
- Current-flow overlay:
  - available
- Hint style:
  - concise first issue
  - deeper why explanation on request
- Completion condition:
  - learner solves a realistic-simulation challenge and keeps the target component within an acceptable operating range
- Challenge examples:
  1. diagnose why an apparently correct ideal design fails in the non-ideal model
  2. redesign the circuit to meet the target despite realistic losses and limits
- Challenge type: `diagnose`
- Sandbox unlocks after lesson:
  - chapter-complete prompt encouraging experimentation with ideal versus non-ideal versions of the same circuit
- Theory page additions:
  - Chapter 5 review topic links
  - Troubleshooting and investigation thread map (non-ideal diagnosis focus)
- In-lesson theory check:
  - mixed quick checks
- Standalone quiz topics unlocked:
  - Chapter 5 review quiz

---

## Chapter 5 theory review items

By the end of this chapter, the theory reference should include topic-group entries for:
- Ideal versus non-ideal behavior
- Why simplified models still matter
- Operating ranges in non-ideal simulation
- Internal resistance of the source
- Voltage drop under load
- Troubleshooting and investigation: diagnosing source behavior with meters
- Source-load matching with internal resistance
- Wire resistance
- Voltage drop in non-ideal wires
- Designing around wire losses
- Heating in resistive loads
- Operating limits and burnout
- Designing within operating limits
- Component tolerance
- Designing for tolerance instead of a single nominal value
- Troubleshooting and investigation: non-ideal evidence patterns and root-cause diagnosis

Each entry should link back to the lesson or lessons where it was introduced.

## Chapter 5 standalone quizzes

Suggested quizzes unlocked by the end of the chapter:
1. Ideal versus non-ideal basics
2. Target-range reasoning in non-ideal contexts
3. Internal resistance basics
4. Source-drop basics
5. Meter-based source diagnosis
6. Source internal resistance and design reasoning
7. Wire-resistance basics
8. Voltage drop along wires
9. Wire-loss design reasoning
10. Heating basics
11. Burnout and limits basics
12. Operating-limit design reasoning
13. Tolerance basics
14. Tolerance-aware design basics
15. Chapter 5 review quiz

These are optional and replayable.

## Chapter 5 sandbox state by the end

By the end of Chapter 5, sandbox should support in required non-ideal mode:
- sources with internal resistance
- non-ideal wire resistance
- voltage-drop inspection using meters
- target-load operating ranges
- failure or burnout states in required non-ideal mode
- tolerance-aware components in required non-ideal mode
- direct comparison between ideal and non-ideal configurations of similar circuits

## Handoff to Chapter 6

Chapter 6 should expand beyond purely resistive steady-state DC circuits and begin introducing time-dependent circuit behavior through new component categories.

Learners should already be able to:
- distinguish ideal versus non-ideal outcomes and explain common causes of mismatch
- use meters to diagnose internal resistance and path-loss effects in guided scenarios
- evaluate success against operating ranges and basic limit/failure constraints

That chapter should include:
- capacitors
- inductors
- first time-dependent circuit behavior
- how voltage and current can change over time
- new kinds of comparison between steady-state reasoning and changing-state reasoning
