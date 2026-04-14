# Interactive Electrical Circuits Learning App
# Lesson Plan, Chapter 4: Measurement, Mixed Circuits, and Named Circuit Laws

## Purpose of this chapter

This chapter deepens the learner's circuit-analysis skills after the ideal series and parallel foundation has already been built manually. It introduces virtual measurement tools through guided lessons, beginning only after the learner has already practiced manual calculation. It also expands the learner's understanding from simple pure-series and pure-parallel examples to mixed circuits, stronger source-and-load matching problems, and formal named circuit laws where those names become instructionally useful.

This chapter still stays within theoretical and simulated circuit learning. It remains focused on ideal circuits first, with only limited preview of more realistic behavior where useful. Non-ideal behavior as a larger thread belongs more strongly to the next chapter.

## Chapter metadata

- Chapter title: Measurement, Mixed Circuits, and Named Circuit Laws
- Stage label: Early Intermediate to Intermediate
- Chapter goal: Learner can inspect, analyze, and troubleshoot more complex ideal DC circuits using both manual reasoning and guided virtual measurement tools.
- Primary outcome: Learner can combine calculation, observation, and measurement to reason about mixed circuits and target conditions.
- Main simulation model: ideal DC circuits with mixed series-parallel structure
- Main interaction style: guided introduction, then increasingly independent analysis
- Default lesson style: partially prebuilt at the beginning of the chapter, then progressively less scaffolded
- Main workspace actions available by end of chapter:
  - all previously unlocked actions
  - use at least one virtual meter
  - place and interpret additional virtual meters introduced in the chapter
  - inspect more complex mixed-circuit values
  - reason with circuit descriptions and calculation breakdowns
- Main conceptual transition in this chapter:
  - from calculating simple known patterns
  - to investigating and diagnosing more complex circuits
  - to naming already-learned ideas formally as circuit laws

---

## Unit 1: The First Measurement Tool

### Unit metadata

- Unit title: The First Measurement Tool
- Stage label: Early Intermediate to Intermediate
- Unit goal: Learner is introduced to the first meter only after manual analysis is already familiar.
- Explicit prerequisites:
  - Chapter 3 complete

---

### Lesson 1.1: Why Measure If You Can Already Calculate?

- Stage label: Early Intermediate to Intermediate
- Prerequisites:
  - Chapter 3 complete
- Main goal: Learner understands why measurement tools are useful even after learning manual calculation.
- Concepts introduced:
  - measurement as verification
  - measurement as inspection
  - measurement as debugging support
  - manual reasoning still comes first
- Formulas shown:
  - any relevant previously learned formulas
- Components used:
  - one or more simple circuits already familiar from earlier chapters
- Prebuilt amount:
  - mostly prebuilt comparison examples
- Learner actions available:
  - inspect
  - run
  - compare manual expectations with shown outputs
- Current-flow overlay:
  - available
- Hint style:
  - concept-first explanation
- Completion condition:
  - learner completes interaction and challenge set showing why a meter can be useful
- Challenge examples:
  1. identify whether calculation or measurement would help answer a given question
  2. choose the best reason to inspect a circuit with a meter
- Sandbox unlocks after lesson:
  - no tool unlock yet, lesson is preparatory
- Theory page additions:
  - Why measurement tools matter
- In-lesson theory check:
  - conceptual multiple-choice on calculation versus measurement
- Standalone quiz topics unlocked:
  - role of measurement in circuit reasoning

---

### Lesson 1.2: Meet the Voltmeter

- Stage label: Intermediate
- Prerequisites:
  - Lesson 1.1
- Main goal: Learner is introduced to the voltmeter as the first virtual measurement tool.
- Why this tool appears first:
  - at this point in the curriculum, voltage comparisons across loads and branches are especially useful
  - the learner already has enough manual background to understand what the voltmeter should reveal
- Concepts introduced:
  - voltmeter measures voltage difference
  - voltage is measured across points or across a component
  - the voltmeter is used to inspect, not replace reasoning
- Formulas shown:
  - `V = IR`
  - relevant prior formulas as needed
- Components used:
  - familiar ideal DC circuits
  - virtual voltmeter
- Prebuilt amount:
  - mostly prebuilt with guided meter placement
- Learner actions unlocked:
  - place and use the voltmeter in guided lessons
- Current-flow overlay:
  - available
- Hint style:
  - full explanation by default
  - explains where the voltmeter should be placed and why
- Completion condition:
  - learner places the voltmeter correctly and reads the expected value in guided examples
- Challenge examples:
  1. place the voltmeter across the correct component
  2. identify which of several displayed readings makes sense for the shown setup
- Sandbox unlocks after lesson:
  - voltmeter available in sandbox
- Theory page additions:
  - What a voltmeter measures
  - How to place a voltmeter in the simulation
- In-lesson theory check:
  - identify the correct voltmeter placement
- Standalone quiz topics unlocked:
  - voltmeter basics

---

### Lesson 1.3: Use the Voltmeter to Verify a Known Circuit

- Stage label: Intermediate
- Prerequisites:
  - Lesson 1.2
- Main goal: Learner verifies a manually reasoned result using the voltmeter.
- Concepts introduced:
  - measurement confirms reasoning
  - the meter reading should match the ideal circuit logic
- Formulas shown:
  - whichever are relevant to the example circuit
- Components used:
  - simple series and parallel examples already studied
  - voltmeter
- Prebuilt amount:
  - mostly prebuilt
- Learner actions available:
  - place voltmeter
  - run circuit
  - compare expected and observed voltage
- Current-flow overlay:
  - available
- Hint style:
  - structured and verification-focused
- Completion condition:
  - learner predicts the voltage, then measures it correctly
- Challenge examples:
  1. predict a branch voltage, then verify with the voltmeter
  2. identify whether the shown reading is consistent with the circuit
- Sandbox unlocks after lesson:
  - voltmeter fully usable on supported sandbox circuits
- Theory page additions:
  - Using the voltmeter to verify circuit reasoning
- In-lesson theory check:
  - identify whether a reading supports or contradicts the expected result
- Standalone quiz topics unlocked:
  - voltage verification with a voltmeter

---

## Unit 2: More Tools for Inspection

### Unit metadata

- Unit title: More Tools for Inspection
- Stage label: Intermediate
- Unit goal: Learner expands from voltage inspection to current and resistance inspection through guided tool lessons.
- Explicit prerequisites:
  - Unit 1 complete

---

### Lesson 2.1: Meet the Ammeter

- Stage label: Intermediate
- Prerequisites:
  - Lesson 1.3
- Main goal: Learner is introduced to the ammeter as a tool for inspecting current in a branch or path.
- Concepts introduced:
  - ammeter measures current
  - current measurement supports reasoning about series and branch behavior
- Formulas shown:
  - `V = IR`
  - relevant current relationships already learned
- Components used:
  - familiar series and parallel circuits
  - virtual ammeter
- Prebuilt amount:
  - mostly prebuilt with guided placement
- Learner actions unlocked:
  - place and use the ammeter in guided lessons
- Current-flow overlay:
  - available
- Hint style:
  - full explanation by default
- Completion condition:
  - learner places the ammeter correctly and interprets the reading in guided examples
- Challenge examples:
  1. place the ammeter where current through a bulb can be read
  2. identify which of several current readings is plausible for the shown circuit
- Sandbox unlocks after lesson:
  - ammeter available in sandbox
- Theory page additions:
  - What an ammeter measures
  - How the ammeter is used in the simulation
- In-lesson theory check:
  - identify the correct ammeter usage
- Standalone quiz topics unlocked:
  - ammeter basics

---

### Lesson 2.2: Verify Series and Parallel Current With the Ammeter

- Stage label: Intermediate
- Prerequisites:
  - Lesson 2.1
- Main goal: Learner verifies known current relationships in series and parallel circuits using the ammeter.
- Concepts introduced:
  - measurement can confirm same-current series behavior
  - measurement can confirm current splitting in parallel
- Formulas shown:
  - relevant previously learned current formulas and equivalent-resistance formulas
- Components used:
  - ideal series circuits
  - ideal parallel circuits
  - ammeter
- Prebuilt amount:
  - mostly prebuilt
- Learner actions available:
  - place ammeter
  - measure current at selected points
  - compare with expectations
- Current-flow overlay:
  - available
- Hint style:
  - reasoning-first, then measurement
- Completion condition:
  - learner correctly predicts and verifies series and parallel current behavior
- Challenge examples:
  1. identify whether two measured points in a series path should match
  2. compare source current and branch current in a parallel circuit
- Sandbox unlocks after lesson:
  - no new components
- Theory page additions:
  - Using the ammeter to verify current relationships
- In-lesson theory check:
  - identify which reading pattern matches series versus parallel
- Standalone quiz topics unlocked:
  - current verification with measurement

---

### Lesson 2.3: Meet the Ohmmeter

- Stage label: Intermediate
- Prerequisites:
  - Lesson 2.2
- Main goal: Learner is introduced to the ohmmeter as a way to inspect resistance values in the simulation model where that makes sense.
- Concepts introduced:
  - ohmmeter measures resistance
  - resistance inspection supports reasoning and checking in supported contexts
- Formulas shown:
  - resistance-related formulas remain available
- Components used:
  - resistive loads
  - supported circuit states for ohmmeter use in the simulation
  - virtual ohmmeter
- Prebuilt amount:
  - guided, mostly prebuilt
- Learner actions unlocked:
  - place and use the ohmmeter in supported contexts
- Current-flow overlay:
  - not central
- Hint style:
  - careful explanation because tool meaning is less visually obvious than the voltmeter
- Completion condition:
  - learner places or applies the ohmmeter correctly in guided examples
- Challenge examples:
  1. identify the resistance of a shown load
  2. identify when an ohmmeter reading is useful for the lesson's goal
- Sandbox unlocks after lesson:
  - ohmmeter available in supported sandbox contexts
- Theory page additions:
  - What an ohmmeter measures
  - How the ohmmeter is used in this simulation model
- In-lesson theory check:
  - choose which meter is appropriate for resistance
- Standalone quiz topics unlocked:
  - ohmmeter basics

---

## Unit 3: Mixed Circuits

### Unit metadata

- Unit title: Mixed Circuits
- Stage label: Intermediate
- Unit goal: Learner begins analyzing circuits that combine series and parallel structure together.
- Explicit prerequisites:
  - Unit 2 complete

---

### Lesson 3.1: More Than Pure Series or Pure Parallel

- Stage label: Intermediate
- Prerequisites:
  - Lesson 2.3
- Main goal: Learner sees that some circuits combine both one-path segments and branching segments.
- Concepts introduced:
  - mixed circuits
  - circuit segments can behave differently within the same larger circuit
  - the learner must analyze structure piece by piece
- Formulas shown:
  - all relevant earlier formulas
- Components used:
  - mixed ideal circuits using resistive loads
- Prebuilt amount:
  - reference circuits shown and partially built examples
- Learner actions available:
  - inspect
  - build
  - run
  - check solution
- Current-flow overlay:
  - available
- Hint style:
  - explanation by substructure
- Completion condition:
  - learner correctly identifies the series and parallel parts of a mixed circuit
- Challenge examples:
  1. mark which segment is series and which is parallel
  2. choose which analysis step should happen first
- Sandbox unlocks after lesson:
  - no new components
- Theory page additions:
  - What is a mixed circuit?
  - Breaking a circuit into simpler parts
- In-lesson theory check:
  - structural identification in mixed circuits
- Standalone quiz topics unlocked:
  - mixed-circuit structure basics

---

### Lesson 3.2: Reduce the Circuit Step by Step

- Stage label: Intermediate
- Prerequisites:
  - Lesson 3.1
- Main goal: Learner analyzes a mixed circuit by reducing simpler subparts step by step.
- Concepts introduced:
  - equivalent resistance can be found recursively
  - subpart reduction is a valid strategy
  - order of simplification matters
- Formulas shown:
  - series and parallel equivalent-resistance formulas
  - `V = IR`
  - `P = VI` as needed
- Components used:
  - ideal mixed circuits with manageable complexity
- Prebuilt amount:
  - partially prebuilt
- Learner actions available:
  - inspect
  - calculate
  - run
  - check solution
- Current-flow overlay:
  - available
- Hint style:
  - human-style derivation by steps
- Completion condition:
  - learner reduces a mixed circuit correctly and reaches the final result
- Challenge examples:
  1. simplify the parallel part first, then continue
  2. identify the correct intermediate equivalent resistance
- Sandbox unlocks after lesson:
  - mixed-circuit reduction supported in detailed evaluations where available
- Theory page additions:
  - Step-by-step mixed-circuit reduction
- In-lesson theory check:
  - identify correct reduction order
- Standalone quiz topics unlocked:
  - mixed-circuit reduction basics

---

### Lesson 3.3: Calculate the Full Mixed Circuit

- Stage label: Intermediate
- Prerequisites:
  - Lesson 3.2
- Main goal: Learner manually calculates all key values in a mixed circuit before any meter is used, bridging the numerical reasoning of Chapters 2-3 with the more complex mixed structures introduced in this unit.
- Why this lesson exists:
  - Chapters 2-3 build numerical skills on simple series or parallel circuits, and Lesson 3.2 teaches structural reduction, but no prior lesson asks the learner to compute full voltage, current, and power values across a mixed circuit using reduction plus Ohm's Law together
  - this explicit calculation step prevents a gap where learners jump from structural reduction to meter verification without ever producing their own expected values for a mixed circuit
- Concepts introduced:
  - applying reduction results to compute branch voltages, currents, and power in a mixed circuit
  - producing expected values before measurement
  - building a complete numerical picture of a more complex circuit
- Formulas shown:
  - series and parallel equivalent-resistance formulas
  - `V = IR`
  - `P = VI` and related power formulas as needed
- Components used:
  - ideal mixed circuits with manageable complexity (2-3 reduction steps)
- Prebuilt amount:
  - partially prebuilt with structure already visible
- Learner actions available:
  - inspect
  - calculate step by step
  - check intermediate and final values
- Current-flow overlay:
  - available
- Hint style:
  - human-style derivation by steps, building on the reduction approach from Lesson 3.2
- Completion condition:
  - learner correctly calculates at least two key values (e.g., branch current and load voltage) in a mixed circuit
- Challenge examples:
  1. reduce the circuit, then calculate the voltage across a specific load
  2. calculate the current through each branch of a mixed circuit
- Sandbox unlocks after lesson:
  - no new components
- Theory page additions:
  - Calculating values in a mixed circuit
- In-lesson theory check:
  - identify which formula to apply after a reduction step
- Standalone quiz topics unlocked:
  - mixed-circuit calculation basics

---

### Lesson 3.4: Use Meters to Check a Mixed Circuit

- Stage label: Intermediate
- Prerequisites:
  - Lesson 3.3
- Main goal: Learner combines manual reasoning and meter use in a mixed circuit.
- Concepts introduced:
  - calculation and measurement support each other
  - mixed circuits can be investigated rather than guessed
- Formulas shown:
  - whatever is relevant to the example
- Components used:
  - mixed circuits
  - voltmeter
  - ammeter
  - ohmmeter where supported and useful
- Prebuilt amount:
  - partially prebuilt
- Learner actions available:
  - calculate
  - place meters
  - run
  - compare readings to reasoning
- Current-flow overlay:
  - available
- Hint style:
  - first asks learner to reason manually, then points toward measurement
- Completion condition:
  - learner correctly predicts at least one key value and then verifies it with a meter
- Challenge examples:
  1. predict and verify the voltage across a selected load
  2. predict and verify the current in a selected branch
- Sandbox unlocks after lesson:
  - no new components
- Theory page additions:
  - Investigating a mixed circuit
- In-lesson theory check:
  - choose the best meter for the stated question
- Standalone quiz topics unlocked:
  - mixed-circuit inspection basics

---

## Unit 4: Source and Load Matching Becomes Stronger

### Unit metadata

- Unit title: Source and Load Matching Becomes Stronger
- Stage label: Intermediate
- Unit goal: Learner works more deliberately with challenges where the circuit must keep a target component inside a required operating range.
- Progression note (source-load matching across chapters):
  - Chapter 2 introduced source-load matching in simple ideal circuits with basic voltage/resistance reasoning. The learner could identify whether a single load receives the right conditions.
  - This unit extends matching to mixed circuits with multiple loads, where the learner must reason about how series and parallel structure distributes voltage and current. The new capability is analyzing compatibility in circuits with more than one path or stage.
  - Chapter 5 will further extend matching by introducing non-ideal constraints (internal resistance, wire losses, operating limits) where the source itself becomes part of the design problem.
- Explicit prerequisites:
  - Unit 3 complete

---

### Lesson 4.1: Matching a Source to a Target Load

- Stage label: Intermediate
- Prerequisites:
  - Lesson 3.4
- Main goal: Learner reasons more explicitly about whether a source and target load are compatible in the simulation.
- Concepts introduced:
  - source-and-load matching as a recurring design problem
  - acceptable target ranges
  - successful operation versus excessive operating conditions
- Formulas shown:
  - whichever formulas are relevant to the challenge
- Components used:
  - one source
  - one target load
  - one or more additional resistive components
- Prebuilt amount:
  - partially prebuilt or lightly scaffolded
- Learner actions available:
  - build
  - run
  - check solution
  - inspect final values
  - open more details
  - use meters where useful
- Current-flow overlay:
  - available
- Hint style:
  - progressive
  - first issue surfaced clearly
- Completion condition:
  - learner builds a circuit that lets the target load operate within the required range
- Challenge examples:
  1. adapt the circuit so the bulb lights without exceeding the allowed target condition
  2. compare two circuits and identify which better matches the source to the load
- Sandbox unlocks after lesson:
  - no new components
- Theory page additions:
  - Source and load matching in ideal circuit design
- In-lesson theory check:
  - identify which value matters most to the target condition
- Standalone quiz topics unlocked:
  - source-load matching basics

---

### Lesson 4.2: Debug the Failing Design

- Stage label: Intermediate
- Prerequisites:
  - Lesson 4.1
- Main goal: Learner debugs a design that fails its target condition by combining structure, values, and tool use.
- Concepts introduced:
  - diagnosing the first blocking issue
  - using evaluation plus measurement to correct a circuit
  - debugging remains distributed through the curriculum
- Formulas shown:
  - as relevant to the challenge
- Components used:
  - mixed circuits with a target load
- Prebuilt amount:
  - faulty circuit given with partial support
- Learner actions available:
  - inspect
  - run
  - check solution
  - use meters
  - revise structure and values
- Current-flow overlay:
  - available
- Hint style:
  - concise issue-first hint
  - Explain why available on request
- Completion condition:
  - learner identifies the main fault and corrects the circuit to satisfy the challenge goal
- Challenge examples:
  1. diagnose why the target load is not operating in range
  2. fix a circuit with both structural and numeric problems
- Sandbox unlocks after lesson:
  - no new components
- Theory page additions:
  - Debugging by measured evidence
- In-lesson theory check:
  - choose the best first debugging step
- Standalone quiz topics unlocked:
  - debugging strategy basics

---

## Unit 5: The Laws Get Their Names

### Unit metadata

- Unit title: The Laws Get Their Names
- Stage label: Intermediate
- Unit goal: Learner is formally introduced to named circuit laws after already working with the ideas informally.
- Explicit prerequisites:
  - Unit 4 complete

---

### Lesson 5.1: Kirchhoff’s Current Law

- Stage label: Intermediate
- Prerequisites:
  - Lesson 4.2
- Main goal: Learner formally names the already-used idea that current is conserved at a junction.
- Concepts introduced:
  - Kirchhoff’s Current Law by name
  - current into a junction and current out of a junction
  - the law names a pattern the learner has already seen in parallel circuits
- Formulas shown:
  - symbolic statement of KCL in learner-friendly form
  - branch-current relationships in context
- Components used:
  - parallel and mixed circuits with junctions
- Prebuilt amount:
  - partially prebuilt
- Learner actions available:
  - inspect
  - calculate
  - measure
  - check solution
- Current-flow overlay:
  - available
- Hint style:
  - bridges old understanding and formal naming
- Completion condition:
  - learner uses KCL by name in a guided and short challenge context
- Challenge examples:
  1. use branch currents to find the missing current at a junction
  2. identify which current relationship satisfies KCL
- Sandbox unlocks after lesson:
  - no new components
- Theory page additions:
  - Kirchhoff’s Current Law
- In-lesson theory check:
  - KCL recognition and application
- Standalone quiz topics unlocked:
  - KCL basics

---

### Lesson 5.2: Kirchhoff’s Voltage Law

- Stage label: Intermediate
- Prerequisites:
  - Lesson 5.1
- Main goal: Learner formally names the already-used idea that voltage changes around a loop must balance.
- Concepts introduced:
  - Kirchhoff’s Voltage Law by name
  - loop reasoning now gets a formal name
  - the learner has already used the underlying idea informally in loop calculations
- Formulas shown:
  - learner-friendly KVL statement in context
- Components used:
  - simple loops and manageable mixed circuits
- Prebuilt amount:
  - partially prebuilt
- Learner actions available:
  - inspect
  - calculate
  - verify with voltmeter
- Current-flow overlay:
  - available
- Hint style:
  - bridges old understanding and formal naming
- Completion condition:
  - learner uses KVL by name in a guided challenge
- Challenge examples:
  1. identify the missing voltage in a loop
  2. identify which loop statement satisfies KVL
- Sandbox unlocks after lesson:
  - no new components
- Theory page additions:
  - Kirchhoff’s Voltage Law
- In-lesson theory check:
  - KVL recognition and application
- Standalone quiz topics unlocked:
  - KVL basics

---

### Lesson 5.3: Chapter Review Challenge

- Stage label: Intermediate
- Prerequisites:
  - Lesson 5.2
- Main goal: Learner integrates measurement, mixed-circuit reasoning, source-load matching, and named circuit laws in a larger challenge.
- Concepts introduced:
  - no major new concept
  - integration and fluency
- Formulas shown:
  - all relevant prior formulas and laws
- Components used:
  - mixed circuits with resistive loads
  - one or more virtual meters
- Prebuilt amount:
  - limited prebuilt structure
- Learner actions available:
  - build
  - run
  - measure
  - check solution
  - inspect details
- Current-flow overlay:
  - available
- Hint style:
  - progressive, concise first
- Completion condition:
  - learner solves a mixed-circuit challenge using both reasoning and at least one measurement tool
- Challenge examples:
  1. diagnose and correct a mixed circuit so the target load operates within range
  2. verify the corrected circuit using one or more meters
- Sandbox unlocks after lesson:
  - chapter-complete prompt encouraging meter-assisted analysis
- Theory page additions:
  - Chapter 4 review topic links
- In-lesson theory check:
  - mixed quick checks
- Standalone quiz topics unlocked:
  - Chapter 4 review quiz

---

## Chapter 4 theory review items

By the end of this chapter, the theory reference should include topic-group entries for:
- Why measurement tools matter
- What a voltmeter measures
- How to place a voltmeter in the simulation
- Using the voltmeter to verify circuit reasoning
- What an ammeter measures
- How the ammeter is used in the simulation
- Using the ammeter to verify current relationships
- What an ohmmeter measures
- How the ohmmeter is used in this simulation model
- What is a mixed circuit?
- Breaking a circuit into simpler parts
- Step-by-step mixed-circuit reduction
- Calculating values in a mixed circuit
- Investigating a mixed circuit
- Source and load matching in ideal circuit design
- Debugging by measured evidence
- Kirchhoff’s Current Law
- Kirchhoff’s Voltage Law

Each entry should link back to the lesson or lessons where it was introduced.

## Chapter 4 standalone quizzes

Suggested quizzes unlocked by the end of the chapter:
1. Role of measurement in circuit reasoning
2. Voltmeter basics
3. Voltage verification with a voltmeter
4. Ammeter basics
5. Current verification with measurement
6. Ohmmeter basics
7. Mixed-circuit structure basics
8. Mixed-circuit reduction basics
9. Mixed-circuit calculation basics
10. Mixed-circuit inspection basics
11. Source-load matching basics
12. Debugging strategy basics
13. KCL basics
14. KVL basics
15. Chapter 4 review quiz

These are optional and replayable.

## Chapter 4 sandbox state by the end

By the end of Chapter 4, sandbox should support:
- voltmeter
- ammeter
- ohmmeter in supported contexts
- mixed-circuit analysis with detailed evaluation on supported structures
- meter-assisted debugging
- stronger target-based design experimentation
- circuit descriptions that can assist inspection and accessibility workflows

## Handoff to Chapter 5

Chapter 5 should begin the stronger shift from ideal circuit behavior to selected non-ideal behavior.

That chapter should include:
- internal resistance of the source
- wire resistance
- voltage drop under load
- heating effects
- component failure or burnout in clearer instructional form
- wider target ranges where appropriate
- the idea that ideal analysis is still useful, but reality introduces additional constraints
