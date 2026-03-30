# Interactive Electrical Circuits Learning App
# Lesson Plan, Chapter 2: First Numerical DC Analysis

## Purpose of this chapter

This chapter begins the transition from purely qualitative circuit understanding to active use of numerical values. The learner starts calculating with source voltage, load resistance, current, and power in simple ideal DC circuits. The chapter is intentionally narrow in circuit complexity so the learner can focus on the meaning of the numbers and the formulas before having to reason about series, parallel, or measurement tools.

This chapter follows the Foundations chapter and assumes the learner already understands:
- open and closed circuits
- source, switch, bulb, and load
- current as flow
- voltage as push
- resistance as opposition to flow
- the formulas `V = IR` and `P = VI` as symbolic relationships

## Chapter metadata

- Chapter title: First Numerical DC Analysis
- Stage label: Beginner to Early Intermediate
- Chapter goal: Learner can use actual numerical values in the simplest ideal DC circuits and manually calculate current and power for one-source, one-load circuits.
- Primary outcome: Learner can move from concept recognition to calculation in a controlled setting.
- Main simulation model: ideal DC circuits with one source and one resistive load at first
- Main interaction style: still guided, but more analytical
- Default lesson style: partially prebuilt circuits with explicit values shown
- Main workspace actions available by end of chapter:
  - click to toggle switch
  - drag to place components
  - connect wires between terminals
  - delete incorrect components or connections
  - inspect final evaluated values after checking solution
  - open optional detailed calculation breakdowns
- Main pedagogical transition in this chapter:
  - formulas move from being visible only
  - to being actively used by the learner

---

## Unit 1: First Numbers in a Circuit

### Unit metadata

- Unit title: First Numbers in a Circuit
- Stage label: Beginner to Early Intermediate
- Unit goal: Learner understands that the source and load can have explicit numerical values and that those values determine what happens in the circuit.
- Explicit prerequisites:
  - Chapter 1 complete

---

### Lesson 1.1: The Source Has a Voltage

- Stage label: Beginner to Early Intermediate
- Prerequisites:
  - Chapter 1 complete
- Main goal: Learner sees a source with an explicit numerical voltage value and understands that the source can be described quantitatively.
- Concepts introduced:
  - source voltage as a numeric value
  - units appear explicitly in the lesson
  - numbers describe the same circuit concepts already learned qualitatively
- Formulas shown:
  - `V = IR`
  - `P = VI`
  - symbol definitions remain visible in the side panel
- Components used:
  - one source with a visible voltage value
  - one switch
  - one bulb modeled as an ideal resistive load
  - wires
- Prebuilt amount:
  - mostly prebuilt
- Learner actions available:
  - click to toggle switch
  - drag to place if needed
- Current-flow overlay:
  - available
- Hint style:
  - full explanation by default
  - explains what the shown voltage value means in plain language
- Completion condition:
  - learner identifies the source voltage correctly and completes 2 short challenges
- Challenge examples:
  1. identify the voltage value shown on the source
  2. choose which quantity the value belongs to: voltage, current, resistance, or power
- Sandbox unlocks after lesson:
  - source components in sandbox can now display numeric voltage values
- Theory page additions:
  - Voltage as a measured quantity
  - Units for voltage
- In-lesson theory check:
  - symbol and units recognition for voltage
- Standalone quiz topics unlocked:
  - voltage values and units

---

### Lesson 1.2: The Load Has a Resistance

- Stage label: Beginner to Early Intermediate
- Prerequisites:
  - Lesson 1.1
- Main goal: Learner sees an explicit resistance value on the load and understands that the load can also be described numerically.
- Concepts introduced:
  - load resistance as a numeric value
  - units for resistance
  - source value and load value are different kinds of quantities
- Formulas shown:
  - `V = IR`
  - `P = VI`
  - `R = resistance` remains defined in the side panel
- Components used:
  - one source with explicit voltage value
  - one switch
  - one bulb or resistive load with explicit resistance value
  - wires
- Prebuilt amount:
  - mostly prebuilt
- Learner actions available:
  - click to toggle switch
  - drag to place
- Current-flow overlay:
  - available
- Hint style:
  - full explanation by default
- Completion condition:
  - learner identifies the resistance value and completes challenge set
- Challenge examples:
  1. identify which value belongs to the load
  2. identify which quantity uses the resistance symbol
- Sandbox unlocks after lesson:
  - resistive loads in sandbox can now display numeric resistance values
- Theory page additions:
  - Resistance as a measured quantity
  - Units for resistance
- In-lesson theory check:
  - recognize resistance value and unit
- Standalone quiz topics unlocked:
  - resistance values and units

---

### Lesson 1.3: Reading a Simple Circuit With Numbers

- Stage label: Beginner to Early Intermediate
- Prerequisites:
  - Lesson 1.2
- Main goal: Learner can read a simple circuit and identify the known quantities before calculation starts.
- Concepts introduced:
  - known values versus unknown values
  - reading a circuit for information
  - preparing for calculation
- Formulas shown:
  - `V = IR`
  - `P = VI`
- Components used:
  - one source with numeric voltage
  - one switch
  - one resistive bulb or load with numeric resistance
  - wires
- Prebuilt amount:
  - fully or mostly prebuilt
- Learner actions available:
  - click to toggle switch
  - drag to place
- Current-flow overlay:
  - available
- Hint style:
  - strong guidance
  - identifies what information is already given
- Completion condition:
  - learner correctly identifies the known and unknown quantities and completes challenge set
- Challenge examples:
  1. mark which value is known and which quantity must be found
  2. choose which formula might be relevant to this type of problem
- Sandbox unlocks after lesson:
  - no new component type
- Theory page additions:
  - Known and unknown quantities
  - Reading a circuit before calculating
- In-lesson theory check:
  - recognize known versus unknown values
- Standalone quiz topics unlocked:
  - circuit-reading basics with numbers

---

## Unit 2: First Manual Use of Ohm’s Law

### Unit metadata

- Unit title: First Manual Use of Ohm’s Law
- Stage label: Early Intermediate
- Unit goal: Learner begins actively using `V = IR` in one-source, one-load ideal DC circuits.
- Explicit prerequisites:
  - Unit 1 complete

---

### Lesson 2.1: Solving for Current

- Stage label: Early Intermediate
- Prerequisites:
  - Lesson 1.3
- Main goal: Learner manually calculates current in a one-source, one-resistive-load circuit.
- Concepts introduced:
  - current can be solved from source voltage and load resistance
  - active formula use begins here
- Formulas shown:
  - `V = IR`
  - rearranged use for current in worked examples
- Components used:
  - one source with numeric voltage
  - one resistive load with numeric resistance
  - one switch
  - wires
- Prebuilt amount:
  - mostly prebuilt
- Learner actions available:
  - click to toggle switch
  - drag to place
  - connect wires if needed
- Current-flow overlay:
  - available
- Hint style:
  - still explains why by default
  - walks through formula choice in the first examples
- Completion condition:
  - learner solves for current correctly in guided examples and completes challenge set
- Challenge examples:
  1. given voltage and resistance, calculate current
  2. choose the correct current from several candidate values
- Sandbox unlocks after lesson:
  - no new component type
  - sandbox calculations can now show current in evaluation for relevant simple circuits
- Theory page additions:
  - Using Ohm’s Law to find current
  - Units for current
- In-lesson theory check:
  - multiple-choice on selecting the correct formula
- Standalone quiz topics unlocked:
  - current calculation basics

---

### Lesson 2.2: Solving for Resistance

- Stage label: Early Intermediate
- Prerequisites:
  - Lesson 2.1
- Main goal: Learner solves for resistance when voltage and current are known.
- Concepts introduced:
  - a formula can be used to find different unknowns
  - the learner must identify the target quantity first
- Formulas shown:
  - `V = IR`
  - rearranged use for resistance in worked examples
- Components used:
  - simple one-source, one-load ideal circuits with shown values
- Prebuilt amount:
  - mostly prebuilt
- Learner actions available:
  - lesson is more calculation-heavy than construction-heavy
  - circuit inspection still available
- Current-flow overlay:
  - available
- Hint style:
  - full explanation first
  - later hints may be shorter
- Completion condition:
  - learner correctly solves for resistance and completes challenge set
- Challenge examples:
  1. calculate missing resistance
  2. identify which of several resistance values fits the circuit
- Sandbox unlocks after lesson:
  - no new component type
- Theory page additions:
  - Using Ohm’s Law to find resistance
- In-lesson theory check:
  - identify which value is the unknown
- Standalone quiz topics unlocked:
  - resistance calculation basics

---

### Lesson 2.3: Solving for Voltage From the Circuit

- Stage label: Early Intermediate
- Prerequisites:
  - Lesson 2.2
- Main goal: Learner solves for voltage from current and resistance in a simple ideal circuit.
- Concepts introduced:
  - voltage can also be the unknown
  - same relationship, different target
- Formulas shown:
  - `V = IR`
- Components used:
  - one-source, one-load ideal examples
- Prebuilt amount:
  - mostly prebuilt
- Learner actions available:
  - inspection and checking
  - limited building if useful
- Current-flow overlay:
  - available
- Hint style:
  - structured guidance
- Completion condition:
  - learner solves voltage correctly in guided and short challenge settings
- Challenge examples:
  1. calculate missing voltage
  2. choose the correct source voltage for a desired current through a known load
- Sandbox unlocks after lesson:
  - no new components
- Theory page additions:
  - Using Ohm’s Law to find voltage
- In-lesson theory check:
  - choose the correct unknown and formula
- Standalone quiz topics unlocked:
  - voltage calculation basics

---

## Unit 3: Power Enters the Picture

### Unit metadata

- Unit title: Power Enters the Picture
- Stage label: Early Intermediate
- Unit goal: Learner understands power as a quantitative description of what the load is doing and begins calculating it in simple ideal circuits.
- Explicit prerequisites:
  - Unit 2 complete

---

### Lesson 3.1: What Power Describes

- Stage label: Early Intermediate
- Prerequisites:
  - Lesson 2.3
- Main goal: Learner understands that power describes how much electrical energy is being transferred or used in the circuit.
- Concepts introduced:
  - power as quantity
  - power connected to bulb behavior
  - power as a reason circuit values matter
- Formulas shown:
  - `P = VI`
- Components used:
  - one source
  - one resistive load
  - one switch
- Prebuilt amount:
  - mostly prebuilt
- Learner actions available:
  - toggle and inspect
- Current-flow overlay:
  - available
- Hint style:
  - concept-first explanation
- Completion condition:
  - learner identifies what power means and completes challenge set
- Challenge examples:
  1. identify which quantity describes electrical use in the load
  2. choose the correct symbol for power
- Sandbox unlocks after lesson:
  - no new components
- Theory page additions:
  - What is power?
  - Units for power
- In-lesson theory check:
  - power symbol and units
- Standalone quiz topics unlocked:
  - power basics

---

### Lesson 3.2: Calculating Power With Voltage and Current

- Stage label: Early Intermediate
- Prerequisites:
  - Lesson 3.1
- Main goal: Learner calculates power using `P = VI`.
- Concepts introduced:
  - direct power calculation
  - one circuit can be described with more than one connected quantity
- Formulas shown:
  - `P = VI`
  - previously learned `V = IR` remains available
- Components used:
  - one source with numeric voltage
  - one load
  - shown current in problems where appropriate
- Prebuilt amount:
  - mostly prebuilt
- Learner actions available:
  - inspection and checking
- Current-flow overlay:
  - available
- Hint style:
  - structured calculation guidance
- Completion condition:
  - learner solves for power correctly and completes challenge set
- Challenge examples:
  1. given V and I, calculate P
  2. identify which power value matches the circuit
- Sandbox unlocks after lesson:
  - evaluation can now show power for simple circuits after check
- Theory page additions:
  - Calculating power from voltage and current
- In-lesson theory check:
  - formula selection for power
- Standalone quiz topics unlocked:
  - power calculation basics

---

### Lesson 3.3: Combining Ohm’s Law and the Power Formula

- Stage label: Early Intermediate
- Prerequisites:
  - Lesson 3.2
- Main goal: Learner combines `V = IR` and `P = VI` in one simple circuit workflow.
- Concepts introduced:
  - multi-step calculation
  - current first, then power
  - the order of reasoning matters
- Formulas shown:
  - `V = IR`
  - `P = VI`
- Components used:
  - one source with numeric voltage
  - one load with numeric resistance
  - one switch
- Prebuilt amount:
  - mostly prebuilt
- Learner actions available:
  - inspection, testing, and calculation
- Current-flow overlay:
  - available
- Hint style:
  - human-style worked examples
  - explicit ordering of steps
- Completion condition:
  - learner calculates current first and then power correctly
  - completes follow-up challenge
- Challenge examples:
  1. calculate current, then calculate power
  2. identify the correct intermediate and final values
- Sandbox unlocks after lesson:
  - no new components
- Theory page additions:
  - Multi-step calculation in a simple circuit
- In-lesson theory check:
  - select the correct order of operations
- Standalone quiz topics unlocked:
  - multi-step simple circuit calculation

---

## Unit 4: Numerical Challenge Structure

### Unit metadata

- Unit title: Numerical Challenge Structure
- Stage label: Early Intermediate
- Unit goal: Learner applies numerical reasoning inside challenges and sees transparent evaluation results.
- Explicit prerequisites:
  - Unit 3 complete

---

### Lesson 4.1: Checking a Numerical Solution

- Stage label: Early Intermediate
- Prerequisites:
  - Lesson 3.3
- Main goal: Learner sees how numerical challenge evaluation works once numbers are part of the curriculum.
- Concepts introduced:
  - evaluation can display relevant final values
  - correctness is based on the circuit and its quantities
- Formulas shown:
  - whichever of `V = IR` and `P = VI` are relevant
- Components used:
  - simple one-source, one-load circuits
- Prebuilt amount:
  - partially prebuilt
- Learner actions available:
  - build or edit simple circuit
  - run circuit
  - click **Check solution**
- Current-flow overlay:
  - available
- Hint style:
  - progressive
  - full why explanation still common here
- Completion condition:
  - learner submits a circuit, reviews final values, and fixes it if needed
- Challenge examples:
  1. build a simple circuit that matches a current target
  2. build a simple circuit that stays within a power target
- Sandbox unlocks after lesson:
  - final values shown by default in numerical evaluation
- Theory page additions:
  - How numerical evaluation works
- In-lesson theory check:
  - choose which values matter for a given goal
- Standalone quiz topics unlocked:
  - target quantity selection

---

### Lesson 4.2: Opening More Details

- Stage label: Early Intermediate
- Prerequisites:
  - Lesson 4.1
- Main goal: Learner uses the optional detailed breakdown and understands it as a teaching aid.
- Concepts introduced:
  - final values by default
  - optional detailed derivation
  - circuit-specific labels in the explanation
- Formulas shown:
  - according to the example circuit
- Components used:
  - one-source, one-load circuits with component labels
- Prebuilt amount:
  - mostly prebuilt
- Learner actions available:
  - click **Check solution**
  - open **More details**
- Current-flow overlay:
  - available
- Hint style:
  - minimal because the lesson itself is explanatory
- Completion condition:
  - learner opens the detailed breakdown and uses it to understand or verify a result
- Challenge examples:
  1. identify the first step in the detailed breakdown
  2. identify which circuit label is used in the derivation
- Sandbox unlocks after lesson:
  - detailed breakdown available for supported numerical evaluations
- Theory page additions:
  - How to read a detailed circuit calculation
- In-lesson theory check:
  - recognize the purpose of the detailed view
- Standalone quiz topics unlocked:
  - reading worked solutions

---

### Lesson 4.3: Rename and Reason

- Stage label: Early Intermediate
- Prerequisites:
  - Lesson 4.2
- Main goal: Learner sees that the circuit's own labels can be used in reasoning and evaluation.
- Concepts introduced:
  - custom component naming in lessons
  - circuit-specific reasoning language
- Formulas shown:
  - as relevant to the example circuit
- Components used:
  - one source
  - one load
  - optional second load only if useful for naming demonstration, but not yet as a true series/parallel concept lesson
- Prebuilt amount:
  - partially prebuilt
- Learner actions available:
  - rename component
  - inspect evaluation details
  - build or edit simple circuit
- Current-flow overlay:
  - available
- Hint style:
  - concise first, explanation available
- Completion condition:
  - learner renames at least one component and sees that evaluation updates accordingly
- Challenge examples:
  1. rename the target component and verify the explanation reflects the new name
  2. identify which component the calculation is referring to after renaming
- Sandbox unlocks after lesson:
  - custom naming more clearly surfaced in sandbox
- Theory page additions:
  - none required, but lesson link may be added under circuit interpretation
- In-lesson theory check:
  - none required beyond interaction
- Standalone quiz topics unlocked:
  - none required

---

## Unit 5: Source and Load Matching Begins

### Unit metadata

- Unit title: Source and Load Matching Begins
- Stage label: Early Intermediate
- Unit goal: Learner starts reasoning about whether a simple source and simple load fit together numerically.
- Explicit prerequisites:
  - Unit 4 complete

---

### Lesson 5.1: Enough to Work, Not Enough to Damage

- Stage label: Early Intermediate
- Prerequisites:
  - Lesson 4.3
- Main goal: Learner sees that a useful challenge target can be based on keeping the target component in an acceptable range.
- Concepts introduced:
  - target ranges
  - working versus non-working versus damaging conditions in the simulation model
- Formulas shown:
  - whichever are needed for the example circuit
- Components used:
  - one source
  - one target load
  - optional additional simple resistor if needed for the challenge logic
- Prebuilt amount:
  - partially prebuilt
- Learner actions available:
  - build simple circuit
  - run it
  - check solution
  - inspect final values
- Current-flow overlay:
  - available
- Hint style:
  - progressive, issue-by-issue
- Completion condition:
  - learner builds a circuit that makes the target operate within the required range
- Challenge examples:
  1. make the bulb light without damaging it
  2. identify which evaluated value is outside the acceptable range in a failing example
- Sandbox unlocks after lesson:
  - no new component type necessarily
- Theory page additions:
  - Operating range in a simulated circuit
- In-lesson theory check:
  - choose which quantity matters most for the stated goal
- Standalone quiz topics unlocked:
  - simple target-range reasoning

---

### Lesson 5.2: Chapter Review Challenge

- Stage label: Early Intermediate
- Prerequisites:
  - Lesson 5.1
- Main goal: Learner integrates the chapter's ideas in a larger but still simple ideal DC challenge.
- Concepts introduced:
  - no major new concept
  - integration and fluency
- Formulas shown:
  - `V = IR`
  - `P = VI`
- Components used:
  - source
  - switch
  - resistive load
  - optional simple extra resistor only if needed to create a meaningful target
- Prebuilt amount:
  - less prebuilt than before
- Learner actions available:
  - all chapter actions
- Current-flow overlay:
  - available
- Hint style:
  - first issue surfaced progressively
  - why explanation available and still common
- Completion condition:
  - learner completes a mixed numerical challenge and passes the chapter review lesson
- Challenge examples:
  1. build a simple circuit with the required current target
  2. build a simple circuit whose target load stays within a required power range
- Sandbox unlocks after lesson:
  - chapter-complete sandbox prompt encouraging free experimentation with simple numeric one-load circuits
- Theory page additions:
  - Chapter 2 review topic links
- In-lesson theory check:
  - mixed quick checks
- Standalone quiz topics unlocked:
  - Chapter 2 review quiz

---

## Chapter 2 theory review items

By the end of this chapter, the theory reference should include topic-group entries for:
- Voltage as a measured quantity
- Resistance as a measured quantity
- Known and unknown values in a circuit
- Using Ohm’s Law to find current
- Using Ohm’s Law to find resistance
- Using Ohm’s Law to find voltage
- What is power?
- Calculating power from voltage and current
- Multi-step calculation in a simple circuit
- Numerical challenge evaluation
- Reading a detailed circuit calculation
- Operating ranges in simple simulated circuits

Each entry should link back to the lesson or lessons where it was introduced.

## Chapter 2 standalone quizzes

Suggested quizzes unlocked by the end of the chapter:
1. Voltage values and units
2. Resistance values and units
3. Reading a circuit with known and unknown values
4. Current calculation basics
5. Resistance calculation basics
6. Voltage calculation basics
7. Power basics
8. Power calculation basics
9. Multi-step simple circuit calculation
10. Chapter 2 review quiz

These are optional and replayable.

## Chapter 2 sandbox state by the end

By the end of Chapter 2, sandbox should support:
- source components with explicit numeric voltage values
- resistive loads with explicit numeric resistance values
- numerical evaluation results for supported simple circuits
- default final-value display in supported numerical evaluations
- optional detailed calculation breakdowns for supported numerical evaluations
- clearer support for component renaming in numeric reasoning

## Handoff to Chapter 3

Chapter 3 should move beyond single-load numerical circuits and introduce the first structured comparison cases that make multi-component behavior meaningful.

That chapter should include:
- two identical bulbs in series
- qualitative brightness comparison in series
- later transition to two identical bulbs in parallel
- first explicit branching structure
- explicit junction or node visibility only when parallel circuits begin
- continued use of numbers where instructionally appropriate, but still before measurement tools are introduced
