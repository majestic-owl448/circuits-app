# Interactive Electrical Circuits Learning App
# Lesson Plan, Chapter 3: Series and Parallel Foundations

## Purpose of this chapter

This chapter introduces the learner to the first genuinely structural differences between circuits. After Chapters 1 and 2 established simple ideal DC circuits with one source and one resistive load, this chapter introduces multiple loads and the idea that circuit arrangement changes behavior.

The chapter begins with two identical bulbs in series, because that keeps the path structure simple while making comparison meaningful. It then moves to two identical bulbs in parallel, which introduces branching, explicit junctions, and the first major contrast between one-path and multi-path circuits.

This chapter continues using ideal DC circuits and introduces both qualitative and numerical reasoning where appropriate. Measurement tools are still not introduced yet. The learner continues to calculate manually first.

## Chapter metadata

- Chapter title: Series and Parallel Foundations
- Stage label: Early Intermediate
- Chapter goal: Learner can understand, build, compare, and calculate the behavior of simple ideal DC series and parallel circuits using identical loads first, then selected unequal-load cases.
- Primary outcome: Learner can reason about how circuit topology changes current, voltage, resistance, power, and bulb behavior.
- Main simulation model: ideal DC circuits with multiple resistive loads
- Main interaction style: guided at first, then more independent
- Default lesson style: partially prebuilt early in the chapter, less prebuilt later
- Main workspace actions available by end of chapter:
  - click to toggle switch
  - drag to place components
  - connect wires between terminals
  - delete incorrect components or connections
  - inspect final evaluated values
  - open optional detailed calculation breakdowns
  - build simple branching structures
- New structural transition in this chapter:
  - learner moves from one-path circuits to branching circuits
  - explicit junctions or nodes become visible only when parallel circuits begin

---

## Unit 1: Two Bulbs in Series

### Unit metadata

- Unit title: Two Bulbs in Series
- Stage label: Early Intermediate
- Unit goal: Learner understands that a series circuit has one path and that identical bulbs in series behave differently from a single-bulb circuit.
- Explicit prerequisites:
  - Chapter 2 complete

---

### Lesson 1.1: Add a Second Bulb

- Stage label: Early Intermediate
- Prerequisites:
  - Chapter 2 complete
- Main goal: Learner sees that a second identical bulb can be added to the same path, creating a series circuit.
- Concepts introduced:
  - multiple loads in one path
  - series as one continuous route through all loads
  - one-path structure
- Formulas shown:
  - previously introduced formulas remain available in the side panel
  - no new active formula requirement yet
- Components used:
  - one source
  - one switch
  - two identical bulbs modeled as ideal resistive loads
  - wires
- Prebuilt amount:
  - mostly prebuilt, with the second bulb shown in position
- Learner actions available:
  - toggle switch
  - inspect the circuit
  - minor drag-to-place if needed
- Current-flow overlay:
  - available
- Hint style:
  - full explanation by default
  - emphasizes that the current has only one path
- Completion condition:
  - learner correctly identifies the series structure and completes challenge set
- Challenge examples:
  1. choose which shown circuit is series
  2. identify the path current must take through both bulbs
- Sandbox unlocks after lesson:
  - second bulb component available in sandbox
- Theory page additions:
  - What is a series circuit?
  - One path through multiple loads
- In-lesson theory check:
  - identify the series arrangement from several options
- Standalone quiz topics unlocked:
  - series identification basics

---

### Lesson 1.2: Brightness in Series

- Stage label: Early Intermediate
- Prerequisites:
  - Lesson 1.1
- Main goal: Learner is introduced to brightness as an explicit comparison concept in a multi-bulb circuit.
- Concepts introduced:
  - identical bulbs in series are dimmer than a single bulb in a comparable simple ideal circuit
  - brightness now becomes an explicit qualitative concept
  - circuit arrangement affects bulb behavior
- Formulas shown:
  - formulas remain visible but are not yet the lesson's main task
- Components used:
  - one source
  - one switch
  - one-bulb reference circuit
  - two-bulb series circuit
- Prebuilt amount:
  - mostly prebuilt for comparison
- Learner actions available:
  - toggle switches
  - compare circuits
  - optionally recreate the series version
- Current-flow overlay:
  - available
- Hint style:
  - full explanation by default
  - brightness treated first as visual cue
- Completion condition:
  - learner compares the circuits and completes challenge set
- Challenge examples:
  1. predict which bulbs are dimmer
  2. identify whether both bulbs will light and how they compare to the one-bulb reference
- Sandbox unlocks after lesson:
  - no new component type
- Theory page additions:
  - Brightness in ideal series comparison
- In-lesson theory check:
  - qualitative brightness comparison
- Standalone quiz topics unlocked:
  - series brightness basics

---

### Lesson 1.3: The Same Current Through the Path

- Stage label: Early Intermediate
- Prerequisites:
  - Lesson 1.2
- Main goal: Learner understands that in a series circuit there is only one path, so the same current goes through both bulbs.
- Concepts introduced:
  - same current through all elements in a series path
  - path continuity and current consistency
- Formulas shown:
  - `V = IR`
  - `P = VI`
  - still mostly conceptual in this lesson
- Components used:
  - one source
  - one switch
  - two identical bulbs in series
- Prebuilt amount:
  - mostly prebuilt
- Learner actions available:
  - inspect
  - toggle
  - minor build correction if needed
- Current-flow overlay:
  - available and useful
- Hint style:
  - why explanation shown by default
- Completion condition:
  - learner identifies that the same current must pass through both bulbs and completes challenge set
- Challenge examples:
  1. choose which statement about current in the series circuit is correct
  2. fix a faulty series circuit so current can pass through both bulbs
- Sandbox unlocks after lesson:
  - no new component type
- Theory page additions:
  - Current in a series path
- In-lesson theory check:
  - same-current concept check
- Standalone quiz topics unlocked:
  - series current basics

---

## Unit 2: Series Calculations

### Unit metadata

- Unit title: Series Calculations
- Stage label: Early Intermediate
- Unit goal: Learner begins calculating simple ideal series-circuit quantities using two identical loads first.
- Explicit prerequisites:
  - Unit 1 complete

---

### Lesson 2.1: Total Resistance in Series

- Stage label: Early Intermediate
- Prerequisites:
  - Lesson 1.3
- Main goal: Learner understands and uses the series-resistance rule.
- Concepts introduced:
  - total resistance in series is the sum of resistances
  - adding another load in series increases total resistance
- Formulas shown:
  - `R_total = R_1 + R_2`
  - previously learned formulas remain available
- Components used:
  - one source with numeric voltage
  - two identical resistive bulbs with numeric resistance
  - one switch
  - wires
- Prebuilt amount:
  - partially prebuilt
- Learner actions available:
  - inspect
  - build simple series circuit
  - run and check solution
- Current-flow overlay:
  - available
- Hint style:
  - structured calculation guidance
- Completion condition:
  - learner calculates total resistance correctly and completes challenge set
- Challenge examples:
  1. calculate total series resistance for two identical bulbs
  2. choose which total resistance value matches the circuit
- Sandbox unlocks after lesson:
  - series evaluation in sandbox can now show total resistance where supported
- Theory page additions:
  - Equivalent resistance in series
- In-lesson theory check:
  - formula recognition and substitution
- Standalone quiz topics unlocked:
  - series resistance calculation basics

---

### Lesson 2.2: Current in a Series Circuit

- Stage label: Early Intermediate
- Prerequisites:
  - Lesson 2.1
- Main goal: Learner calculates current in a simple series circuit using total resistance.
- Concepts introduced:
  - first calculate total resistance
  - then calculate total current
  - same series current applies through both bulbs
- Formulas shown:
  - `R_total = R_1 + R_2`
  - `V = IR`
- Components used:
  - one source with numeric voltage
  - two identical bulbs in series
- Prebuilt amount:
  - partially prebuilt
- Learner actions available:
  - inspect
  - run
  - check solution
- Current-flow overlay:
  - available
- Hint style:
  - human-style step ordering
- Completion condition:
  - learner calculates current correctly and completes follow-up challenge
- Challenge examples:
  1. compute total resistance, then total current
  2. identify the correct current value through each bulb
- Sandbox unlocks after lesson:
  - no new component type
- Theory page additions:
  - Finding current in a series circuit
- In-lesson theory check:
  - correct step order check
- Standalone quiz topics unlocked:
  - series current calculation basics

---

### Lesson 2.3: Power and Brightness in Series

- Stage label: Early Intermediate
- Prerequisites:
  - Lesson 2.2
- Main goal: Learner connects series-circuit calculation to bulb power and brightness.
- Concepts introduced:
  - lower current changes load power
  - brightness can now be linked more explicitly to power in the ideal model
- Formulas shown:
  - `P = VI`
  - optionally combined with previously calculated current
- Components used:
  - one source
  - two identical bulbs in series
- Prebuilt amount:
  - partially prebuilt
- Learner actions available:
  - inspect
  - calculate
  - run and check
- Current-flow overlay:
  - available
- Hint style:
  - step-by-step reasoning
- Completion condition:
  - learner calculates and compares power in the series bulbs
- Challenge examples:
  1. calculate the power for one bulb in the series circuit
  2. identify why the bulbs are dimmer than the one-bulb reference case
- Sandbox unlocks after lesson:
  - series power values available in numerical evaluation where supported
- Theory page additions:
  - Power and brightness in an ideal series circuit
- In-lesson theory check:
  - identify which quantity most directly explains brightness in the current model
- Standalone quiz topics unlocked:
  - series power reasoning

---

### Lesson 2.4: If One Breaks, All Stop

- Stage label: Early Intermediate
- Prerequisites:
  - Lesson 2.3
- Main goal: Learner understands the fault behavior of a simple series path.
- Concepts introduced:
  - if one series bulb fails open, the whole path stops conducting
  - one broken element can stop all operation in a one-path circuit
- Formulas shown:
  - not central
- Components used:
  - one source
  - one switch
  - two bulbs in series
  - simulated broken-bulb variant
- Prebuilt amount:
  - comparison setups shown
- Learner actions available:
  - run and observe
  - fix if needed
- Current-flow overlay:
  - available
- Hint style:
  - full why explanation by default
- Completion condition:
  - learner identifies and explains the effect of a broken bulb in series through interaction and challenge completion
- Challenge examples:
  1. predict what happens if one series bulb breaks
  2. identify which structural feature causes both bulbs to go out
- Sandbox unlocks after lesson:
  - failure behavior can be represented in supported lesson-like sandbox prompts if the system supports it
- Theory page additions:
  - Series fault behavior
- In-lesson theory check:
  - one-path fault reasoning
- Standalone quiz topics unlocked:
  - series fault basics

---

## Unit 3: First Parallel Circuit

### Unit metadata

- Unit title: First Parallel Circuit
- Stage label: Early Intermediate
- Unit goal: Learner sees and replicates a parallel structure before reasoning deeply about its behavior.
- Explicit prerequisites:
  - Unit 2 complete

---

### Lesson 3.1: See a Parallel Structure

- Stage label: Early Intermediate
- Prerequisites:
  - Lesson 2.4
- Main goal: Learner sees the first explicit parallel circuit and recognizes it as a different arrangement from series.
- Concepts introduced:
  - parallel means multiple paths
  - branch structure
  - same source, separate routes through loads
- Formulas shown:
  - no new formula required yet
- Components used:
  - one source
  - one switch
  - two identical bulbs in parallel
  - wires
  - explicit junctions or nodes now visible
- Prebuilt amount:
  - reference circuit shown clearly in lesson text or visual panel
  - learner studies before building
- Learner actions available:
  - inspect
  - toggle
  - compare to series visually
- Current-flow overlay:
  - available
- Hint style:
  - full explanation by default
  - explains that parallel is the first case where branching becomes explicit
- Completion condition:
  - learner identifies the parallel structure and completes challenge set
- Challenge examples:
  1. choose which shown circuit is parallel
  2. identify where the path splits and where it rejoins
- Sandbox unlocks after lesson:
  - explicit junction or branching support becomes visible in sandbox
- Theory page additions:
  - What is a parallel circuit?
  - Branching and junctions
- In-lesson theory check:
  - identify parallel arrangement
- Standalone quiz topics unlocked:
  - parallel identification basics

---

### Lesson 3.2: Replicate the Parallel Circuit

- Stage label: Early Intermediate
- Prerequisites:
  - Lesson 3.1
- Main goal: Learner builds the first parallel structure by copying a visible reference.
- Concepts introduced:
  - parallel replication
  - structural pattern recognition
- Formulas shown:
  - not central
- Components used:
  - one source
  - one switch
  - two identical bulbs
  - visible junctions
  - wires
- Prebuilt amount:
  - learner is given a reference circuit that remains visible while building
- Learner actions available:
  - place components
  - wire them
  - run the circuit
  - check solution
- Current-flow overlay:
  - available
- Hint style:
  - progressive support
  - easiest reliably detectable issue first
- Completion condition:
  - learner successfully replicates the shown parallel circuit
  - then completes a short follow-up challenge with slightly less support
- Challenge examples:
  1. replicate the visible parallel circuit
  2. recreate the same type of structure with fewer prompts
- Sandbox unlocks after lesson:
  - free parallel branching construction available in sandbox
- Theory page additions:
  - none required beyond linkage
- In-lesson theory check:
  - recognize correct branch placement
- Standalone quiz topics unlocked:
  - branch-structure recognition

---

### Lesson 3.3: Current Splits, Then Rejoins

- Stage label: Early Intermediate
- Prerequisites:
  - Lesson 3.2
- Main goal: Learner understands that in a parallel circuit the current can split between branches and then rejoin.
- Concepts introduced:
  - current splits at a junction
  - current rejoins later in the circuit
  - multiple paths change how current behaves
- Formulas shown:
  - not yet the main focus
- Components used:
  - one source
  - one switch
  - two identical bulbs in parallel
- Prebuilt amount:
  - partially prebuilt or reference-based
- Learner actions available:
  - inspect
  - build
  - run
- Current-flow overlay:
  - especially useful here
- Hint style:
  - why explanation shown by default
- Completion condition:
  - learner correctly reasons about branch current behavior and completes challenge set
- Challenge examples:
  1. identify where current splits
  2. identify where current rejoins
  3. choose the best description of current in the two branches
- Sandbox unlocks after lesson:
  - no new component type
- Theory page additions:
  - Current splitting and rejoining
- In-lesson theory check:
  - branch current concept check
- Standalone quiz topics unlocked:
  - current in parallel basics

---

### Lesson 3.4: If One Breaks, the Other Can Stay On

- Stage label: Early Intermediate
- Prerequisites:
  - Lesson 3.3
- Main goal: Learner understands the basic fault behavior of a parallel circuit.
- Concepts introduced:
  - separate branches can function independently
  - one failed bulb does not necessarily stop the other branch
- Formulas shown:
  - not central
- Components used:
  - one source
  - one switch
  - two bulbs in parallel
  - simulated broken-bulb comparison
- Prebuilt amount:
  - comparison setups shown
- Learner actions available:
  - inspect
  - run
  - compare
- Current-flow overlay:
  - available
- Hint style:
  - full explanation by default
- Completion condition:
  - learner correctly predicts and explains the result of one parallel bulb failing
- Challenge examples:
  1. predict what happens when one branch opens
  2. identify why the second bulb can remain on
- Sandbox unlocks after lesson:
  - no new component type
- Theory page additions:
  - Parallel fault behavior
- In-lesson theory check:
  - one-branch-fails reasoning
- Standalone quiz topics unlocked:
  - parallel fault basics

---

## Unit 4: Parallel Calculations

### Unit metadata

- Unit title: Parallel Calculations
- Stage label: Early Intermediate
- Unit goal: Learner manually calculates simple ideal parallel-circuit quantities using two identical loads first, then selected unequal-load cases.
- Explicit prerequisites:
  - Unit 3 complete

---

### Lesson 4.1: The Same Voltage Across Each Branch

- Stage label: Early Intermediate
- Prerequisites:
  - Lesson 3.4
- Main goal: Learner understands that in this ideal parallel model each branch sees the full source voltage.
- Concepts introduced:
  - branch voltage equality in ideal parallel circuits
  - same source voltage across each branch
- Formulas shown:
  - `V = IR` remains available
- Components used:
  - one source with numeric voltage
  - two identical bulbs in parallel
- Prebuilt amount:
  - partially prebuilt
- Learner actions available:
  - inspect
  - run
  - calculate
- Current-flow overlay:
  - available
- Hint style:
  - strong explanation because this is a major concept
- Completion condition:
  - learner correctly identifies branch voltage and completes challenge set
- Challenge examples:
  1. choose the voltage across one branch
  2. identify whether the two branches have the same or different voltage
- Sandbox unlocks after lesson:
  - no new component type
- Theory page additions:
  - Voltage in a parallel circuit
- In-lesson theory check:
  - branch-voltage recognition
- Standalone quiz topics unlocked:
  - parallel voltage basics

---

### Lesson 4.2: Equivalent Resistance in Parallel

- Stage label: Early Intermediate
- Prerequisites:
  - Lesson 4.1
- Main goal: Learner learns the first explicit equivalent-resistance rule for two resistive branches in parallel.
- Concepts introduced:
  - reciprocal form of parallel resistance
  - equivalent resistance of two parallel branches is less than either individual branch resistance
- Formulas shown:
  - `1 / R_total = 1 / R_1 + 1 / R_2`
  - `R_total = (R_1 * R_2) / (R_1 + R_2)` for two branches
  - equal-resistor special case may be shown for intuition
- Components used:
  - one source
  - two parallel resistive bulbs
- Prebuilt amount:
  - partially prebuilt
- Learner actions available:
  - inspect
  - calculate
  - run and check
- Current-flow overlay:
  - available
- Hint style:
  - careful step-by-step guidance
  - emphasizes that exact-equality evaluation is not the goal, acceptable numeric ranges are used in challenge checking
- Completion condition:
  - learner calculates equivalent resistance correctly in guided examples and challenge set
- Challenge examples:
  1. calculate equivalent resistance for two identical bulbs in parallel
  2. identify which equivalent resistance value fits the circuit
- Sandbox unlocks after lesson:
  - parallel evaluation can show equivalent resistance where supported
- Theory page additions:
  - Equivalent resistance in parallel
- In-lesson theory check:
  - formula recognition and substitution
- Standalone quiz topics unlocked:
  - parallel resistance calculation basics

---

### Lesson 4.3: Source Current in Parallel

- Stage label: Early Intermediate
- Prerequisites:
  - Lesson 4.2
- Main goal: Learner calculates total source current in a simple parallel circuit.
- Concepts introduced:
  - source current depends on equivalent resistance
  - total source current is the sum needed by the branches in the ideal model
- Formulas shown:
  - parallel equivalent resistance formulas
  - `V = IR`
- Components used:
  - one source with numeric voltage
  - two identical bulbs in parallel
- Prebuilt amount:
  - partially prebuilt
- Learner actions available:
  - inspect
  - calculate
  - run and check
- Current-flow overlay:
  - available
- Hint style:
  - ordered, human-style derivation
- Completion condition:
  - learner correctly computes source current and completes follow-up challenge
- Challenge examples:
  1. calculate total current from source voltage and equivalent resistance
  2. identify which current value matches the parallel circuit
- Sandbox unlocks after lesson:
  - no new component type
- Theory page additions:
  - Finding total current in a parallel circuit
- In-lesson theory check:
  - identify the correct step order
- Standalone quiz topics unlocked:
  - parallel source-current basics

---

### Lesson 4.4: Power and Brightness in Parallel

- Stage label: Early Intermediate
- Prerequisites:
  - Lesson 4.3
- Main goal: Learner connects ideal parallel-circuit power reasoning to bulb brightness.
- Concepts introduced:
  - identical parallel bulbs can be compared to the single-bulb case
  - brightness in parallel differs from brightness in series
- Formulas shown:
  - `P = VI`
  - relevant earlier formulas as needed
- Components used:
  - one source
  - one-bulb reference circuit
  - two-bulb parallel circuit
  - optional two-bulb series comparison
- Prebuilt amount:
  - comparison setups partially prebuilt
- Learner actions available:
  - inspect
  - calculate
  - compare
  - run and check
- Current-flow overlay:
  - available
- Hint style:
  - conceptual plus numerical explanation
- Completion condition:
  - learner explains and calculates why identical bulbs in parallel behave differently from identical bulbs in series
- Challenge examples:
  1. identify which arrangement gives brighter identical bulbs
  2. calculate or compare the power of a branch bulb in the parallel case
- Sandbox unlocks after lesson:
  - no new component type
- Theory page additions:
  - Power and brightness in an ideal parallel circuit
  - Series versus parallel brightness comparison
- In-lesson theory check:
  - concept comparison question
- Standalone quiz topics unlocked:
  - series versus parallel comparison basics

---

## Unit 5: Unequal Loads and Flexible Solutions

### Unit metadata

- Unit title: Unequal Loads and Flexible Solutions
- Stage label: Early Intermediate
- Unit goal: Learner begins reasoning about circuits where the loads are not identical and where more than one correct design can satisfy the challenge goal.
- Explicit prerequisites:
  - Unit 4 complete

---

### Lesson 5.1: When the Bulbs Are Not Equal

- Stage label: Early Intermediate
- Prerequisites:
  - Lesson 4.4
- Main goal: Learner sees that unequal resistance values create unequal behavior and require more careful reasoning.
- Concepts introduced:
  - equal-load intuition does not always generalize
  - different resistance values can create different results
- Formulas shown:
  - all relevant prior formulas remain available
- Components used:
  - one source
  - two bulbs or resistive loads with different resistance values
  - both series and parallel examples as needed
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
  - more selective
  - issue surfaced first, explanation available
- Completion condition:
  - learner correctly identifies how unequal resistances change the result and completes challenge set
- Challenge examples:
  1. identify which bulb will behave differently because resistances are unequal
  2. calculate equivalent resistance or branch behavior in a simple unequal case
- Sandbox unlocks after lesson:
  - loads with different numeric values can be used more deliberately in sandbox
- Theory page additions:
  - Equal versus unequal loads
- In-lesson theory check:
  - identify why the equal-bulb shortcut no longer applies
- Standalone quiz topics unlocked:
  - unequal-load reasoning basics

---

### Lesson 5.2: Build Toward a Target

- Stage label: Early Intermediate
- Prerequisites:
  - Lesson 5.1
- Main goal: Learner solves a flexible challenge with more than one possible correct circuit.
- Concepts introduced:
  - target conditions matter more than one exact structure
  - evaluation is based on the quantities affecting the target component
- Formulas shown:
  - whichever are needed for the challenge
- Components used:
  - source
  - bulb or target load
  - one or more additional resistive components
  - series or parallel arrangement as appropriate
- Prebuilt amount:
  - less prebuilt than previous lessons
- Learner actions available:
  - build
  - run
  - check solution
  - inspect final values
  - open more details
- Current-flow overlay:
  - available
- Hint style:
  - progressive
  - easiest detectable blocking issue first
- Completion condition:
  - learner builds a circuit that satisfies the stated target range for the target component
- Challenge examples:
  1. make the source light the bulb without damaging it using available components
  2. reach a required target behavior using more than one valid arrangement
- Sandbox unlocks after lesson:
  - no new component type, but this lesson explicitly encourages exploratory build strategies
- Theory page additions:
  - Designing toward a target in an ideal circuit
- In-lesson theory check:
  - choose which evaluated value matters most for the goal
- Standalone quiz topics unlocked:
  - target-based design reasoning

---

### Lesson 5.3: Chapter Review Challenge

- Stage label: Early Intermediate
- Prerequisites:
  - Lesson 5.2
- Main goal: Learner integrates series and parallel reasoning in a larger challenge.
- Concepts introduced:
  - no major new concept
  - integration, fluency, and flexible reasoning
- Formulas shown:
  - all chapter formulas and earlier formulas as relevant
- Components used:
  - source
  - switch
  - multiple resistive bulbs or loads
  - branching where needed
- Prebuilt amount:
  - limited prebuilt structure
- Learner actions available:
  - full chapter interaction set
- Current-flow overlay:
  - available
- Hint style:
  - concise initial hint
  - deeper reasoning available on demand
- Completion condition:
  - learner completes a mixed series-parallel challenge and passes the chapter review lesson
- Challenge examples:
  1. build a circuit that matches a target behavior using either series, parallel, or mixed structure
  2. identify and fix a multi-bulb circuit that is structurally wrong
- Sandbox unlocks after lesson:
  - chapter-complete prompt encouraging free experimentation with series and parallel circuits
- Theory page additions:
  - Chapter 3 review topic links
- In-lesson theory check:
  - mixed quick checks
- Standalone quiz topics unlocked:
  - Chapter 3 review quiz

---

## Chapter 3 theory review items

By the end of this chapter, the theory reference should include topic-group entries for:
- What is a series circuit?
- One path through multiple loads
- Brightness in ideal series comparison
- Current in a series path
- Equivalent resistance in series
- Finding current in a series circuit
- Power and brightness in an ideal series circuit
- Series fault behavior
- What is a parallel circuit?
- Branching and junctions
- Current splitting and rejoining
- Parallel fault behavior
- Voltage in a parallel circuit
- Equivalent resistance in parallel
- Finding total current in a parallel circuit
- Power and brightness in an ideal parallel circuit
- Series versus parallel brightness comparison
- Equal versus unequal loads
- Designing toward a target in an ideal circuit

Each entry should link back to the lesson or lessons where it was introduced.

## Chapter 3 standalone quizzes

Suggested quizzes unlocked by the end of the chapter:
1. Series identification basics
2. Series brightness basics
3. Series current basics
4. Series resistance calculation basics
5. Series current calculation basics
6. Series power reasoning
7. Series fault basics
8. Parallel identification basics
9. Branch-structure recognition
10. Current in parallel basics
11. Parallel fault basics
12. Parallel voltage basics
13. Parallel resistance calculation basics
14. Parallel source-current basics
15. Series versus parallel comparison basics
16. Unequal-load reasoning basics
17. Chapter 3 review quiz

These are optional and replayable.

## Chapter 3 sandbox state by the end

By the end of Chapter 3, sandbox should support:
- multiple bulbs or resistive loads
- deliberate series construction
- explicit branching and junction visibility for parallel construction
- numerical evaluation for supported series and parallel circuits
- challenge-style experimentation with target-based goals
- flexible component naming and circuit-specific evaluation language
- detailed numerical breakdowns where supported

## Handoff to Chapter 4

Chapter 4 should deepen circuit analysis and begin teaching learners how to inspect circuits more deliberately once manual reasoning is already established.

That chapter should include:
- first guided lesson introducing a virtual measurement tool when it becomes instructionally useful
- continued manual calculation first, then measurement as verification
- source-and-load matching as a stronger recurring thread
- more complex mixed circuits
- explicit named introduction of Kirchhoff’s laws at the point where formal naming becomes useful
