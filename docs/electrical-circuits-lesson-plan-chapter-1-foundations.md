# Interactive Electrical Circuits Learning App
# Lesson Plan, Chapter 1: Foundations

## Purpose of this chapter

This chapter defines the earliest part of the curriculum. It establishes the learner's first mental model of a circuit, introduces the earliest components and actions, begins symbolic familiarity with formulas, and prepares the learner for later numerical reasoning, series and parallel circuits, measurement, and more realistic simulation behavior.

This chapter is desktop-first, interaction-first, and aligned with the PRD. It assumes adult learners with a high school education and no prior background in circuit theory.

## Chapter metadata

- Chapter title: Foundations
- Stage label: Beginner
- Chapter goal: Learner can understand and manipulate the simplest ideal DC circuits conceptually before doing formal numerical analysis.
- Primary outcome: Learner can reason about open versus closed circuits, identify the roles of source, switch, load, voltage, current, and resistance at an introductory level, and complete simple guided circuit challenges.
- Main simulation model: ideal DC circuits, with very limited consequence-based failure simulation only where instructionally useful
- Main interaction style: highly guided
- Default lesson style: mostly prebuilt circuits, limited available actions
- Main workspace actions available by end of chapter:
  - click to toggle switch
  - drag to place components
  - connect wires between terminals
  - delete incorrectly placed components, once incorrect placement becomes possible
- Sandbox philosophy in this chapter: present from the start, but tightly limited and expanded only through lesson completion

---

## Unit 1: First Contact With a Circuit

### Unit metadata

- Unit title: First Contact With a Circuit
- Stage label: Beginner
- Unit goal: Learner discovers that a circuit must form a complete path and that a switch can control whether a bulb turns on.
- Explicit prerequisites: none

---

### Lesson 1.1: Turn On the Light

- Stage label: Beginner
- Prerequisites: none
- Main goal: Learner discovers that closing a switch can turn on a bulb in a simple DC circuit.
- Concepts introduced:
  - source
  - switch
  - bulb as load
  - open circuit
  - closed circuit
  - complete loop
- Formulas shown:
  - none in the main teaching area
  - no formula panel yet
- Components used:
  - one DC source
  - one switch
  - one bulb
  - connecting wires
- Prebuilt amount:
  - almost all of the circuit is prebuilt
  - learner only interacts with the switch
- Learner actions available:
  - click to toggle switch
- Current-flow overlay:
  - not yet introduced
- Hint style:
  - full explanation by default
  - if learner does not toggle correctly, hint explains that the circuit must be closed for the bulb to light
- Completion condition:
  - learner successfully toggles the switch to close the circuit and lights the bulb
  - learner completes 2 short challenges
- Challenge examples:
  1. choose which switch position closes the circuit
  2. identify whether a shown circuit is open or closed
- Sandbox unlocks after lesson:
  - source
  - switch
  - bulb
  - wires
  - ability to recreate the first circuit in sandbox
- Theory page additions:
  - What is a circuit?
  - Open and closed circuits
  - Source, switch, and load
- In-lesson theory check:
  - one multiple-choice check on open versus closed circuit
- Standalone quiz topics unlocked:
  - none yet, or optionally a one-question quiz on open versus closed circuits

---

### Lesson 1.2: A Circuit Is a Loop

- Stage label: Beginner
- Prerequisites:
  - Lesson 1.1
- Main goal: Learner understands that the bulb lights only when the full path from source through load and back is complete.
- Concepts introduced:
  - loop as a full path
  - return path matters
  - broken path means no operation
- Formulas shown:
  - none
- Components used:
  - one DC source
  - one switch
  - one bulb
  - wires
- Prebuilt amount:
  - mostly prebuilt, but with one missing connection in some interactions
- Learner actions available:
  - click to toggle switch
  - drag to place one missing wire or component
- Current-flow overlay:
  - not yet available
- Hint style:
  - full explanation by default
  - visual highlight can indicate the break in the path
- Completion condition:
  - learner completes the required interaction and 2 short challenges
- Challenge examples:
  1. fix a broken circuit so the bulb lights
  2. choose which of several simple circuits forms a complete loop
- Sandbox unlocks after lesson:
  - no new component unlock
  - sandbox now allows disconnecting and reconnecting existing first-unit components more freely
- Theory page additions:
  - Why the return path matters
  - Loop structure in a simple circuit
- In-lesson theory check:
  - multiple-choice question on which diagram is a complete loop
- Standalone quiz topics unlocked:
  - complete loop identification

---

### Lesson 1.3: Everyday Switching and Circuit Control

- Stage label: Beginner
- Prerequisites:
  - Lesson 1.2
- Main goal: Learner connects the simulated switch behavior to familiar real-life light-switch behavior without moving into physical construction.
- Concepts introduced:
  - switch as circuit control
  - same circuit principle behind everyday on and off behavior
- Formulas shown:
  - none
- Components used:
  - one DC source
  - one switch
  - one bulb
  - wires
- Prebuilt amount:
  - mostly prebuilt
- Learner actions available:
  - click to toggle switch
  - drag to place a simple missing component if needed
- Current-flow overlay:
  - not yet available
- Hint style:
  - full explanation by default
- Completion condition:
  - learner uses the switch correctly and completes a follow-up challenge
- Challenge examples:
  1. rebuild the shown simple switch circuit while the reference remains visible
  2. in a follow-up challenge, recreate the same structure with less support
- Sandbox unlocks after lesson:
  - no new component type
  - learner gains confidence-oriented sandbox prompt to rebuild the light-switch circuit independently
- Theory page additions:
  - Switches as control elements
- In-lesson theory check:
  - quick check on what the switch changes in the circuit
- Standalone quiz topics unlocked:
  - source, switch, and load roles

---

## Unit 2: Current, Voltage, and the Bulb as a Load

### Unit metadata

- Unit title: Current, Voltage, and the Bulb as a Load
- Stage label: Beginner
- Unit goal: Learner gains the first conceptual model of what flows, what pushes, and what the bulb does in the circuit.
- Explicit prerequisites:
  - Unit 1 complete

---

### Lesson 2.1: Meet the Load

- Stage label: Beginner
- Prerequisites:
  - Lesson 1.3
- Main goal: Learner understands that the bulb is not just "the thing that lights," but a load that uses electrical energy.
- Concepts introduced:
  - load
  - energy use in the bulb
  - light and heat as outputs of a load
- Formulas shown:
  - side panel not yet needed
- Components used:
  - one source
  - one switch
  - one bulb
  - wires
- Prebuilt amount:
  - mostly prebuilt
- Learner actions available:
  - click to toggle switch
  - drag to place components
- Current-flow overlay:
  - not yet available
- Hint style:
  - full conceptual explanation
- Completion condition:
  - complete interaction and 2 short concept challenges
- Challenge examples:
  1. select which component is the load
  2. fix a circuit where the load is missing from the loop
- Sandbox unlocks after lesson:
  - no new component type
  - sandbox prompt encourages building a circuit with one source and one load
- Theory page additions:
  - What is a load?
  - What the bulb is doing in the circuit
- In-lesson theory check:
  - multiple-choice question on identifying the load
- Standalone quiz topics unlocked:
  - source versus load

---

### Lesson 2.2: Current as Flow

- Stage label: Beginner
- Prerequisites:
  - Lesson 2.1
- Main goal: Learner is introduced to current as electrical flow through a closed circuit.
- Concepts introduced:
  - current
  - flow requires a complete path
  - current stops when the loop is open
- Formulas shown:
  - symbol only: I = current
  - shown in lesson context, not yet emphasized as formula work
- Components used:
  - one source
  - one switch
  - one bulb
  - wires
- Prebuilt amount:
  - mostly prebuilt
- Learner actions available:
  - click to toggle switch
  - drag to place
- Current-flow overlay:
  - introduced now as optional overlay
  - described as current flow, not electrons
- Hint style:
  - full explanation by default
  - can use current-flow overlay to illustrate no flow in an open circuit
- Completion condition:
  - learner uses the overlay at least once and completes the lesson interaction and challenge
- Challenge examples:
  1. identify whether current is flowing in a shown circuit state
  2. fix a circuit so current can flow
- Sandbox unlocks after lesson:
  - current-flow overlay available in sandbox
- Theory page additions:
  - What is current?
  - Current flows only in a closed loop
- In-lesson theory check:
  - quick check on whether current flows in open and closed circuits
- Standalone quiz topics unlocked:
  - current basics

---

### Lesson 2.3: Voltage as Push

- Stage label: Beginner
- Prerequisites:
  - Lesson 2.2
- Main goal: Learner is introduced to voltage as the source's electrical push that drives current.
- Concepts introduced:
  - voltage
  - voltage as push or pressure
  - source provides the push behind current flow
- Formulas shown:
  - symbol only: V = voltage
  - possibly shown next to I in a side panel entry
- Components used:
  - one source
  - one switch
  - one bulb
  - wires
- Prebuilt amount:
  - mostly prebuilt
- Learner actions available:
  - click to toggle switch
  - drag to place
- Current-flow overlay:
  - available
- Hint style:
  - explicit conceptual explanation with pressure and river analogies
- Completion condition:
  - complete guided interaction and challenge set
- Challenge examples:
  1. choose the best explanation of voltage in a beginner-friendly context
  2. identify which component provides voltage in a simple circuit
- Sandbox unlocks after lesson:
  - no new components
- Theory page additions:
  - What is voltage?
  - Voltage as push in an ideal source
- In-lesson theory check:
  - multiple-choice formula-symbol recognition for V
- Standalone quiz topics unlocked:
  - voltage basics

---

### Lesson 2.4: Current and Voltage Together

- Stage label: Beginner
- Prerequisites:
  - Lesson 2.3
- Main goal: Learner sees the conceptual relationship between voltage and current without yet doing calculations.
- Concepts introduced:
  - voltage drives current
  - current is flow caused by the source push through a closed loop
- Formulas shown:
  - side panel may now show:
    - V = voltage
    - I = current
  - still no algebraic manipulation
- Components used:
  - one source
  - one switch
  - one bulb
  - wires
- Prebuilt amount:
  - mostly prebuilt, with one small correction or placement task
- Learner actions available:
  - click to toggle switch
  - drag to place
- Current-flow overlay:
  - available and useful
- Hint style:
  - full explanation by default
- Completion condition:
  - successful interaction plus challenge set
- Challenge examples:
  1. match the term to the role: voltage, current
  2. explain through selection which changes when the switch opens: flow, push, or both
- Sandbox unlocks after lesson:
  - no new component type
- Theory page additions:
  - Relationship between voltage and current in a simple ideal circuit
- In-lesson theory check:
  - concept check on what voltage does and what current is
- Standalone quiz topics unlocked:
  - voltage and current relationship

---

## Unit 3: Resistance and Early Formula Familiarity

### Unit metadata

- Unit title: Resistance and Early Formula Familiarity
- Stage label: Beginner
- Unit goal: Learner understands resistance conceptually, is introduced to the earliest formulas and symbols, and becomes familiar with the idea that formulas describe relationships even before active calculation begins.
- Explicit prerequisites:
  - Unit 2 complete

---

### Lesson 3.1: Resistance Opposes Flow

- Stage label: Beginner
- Prerequisites:
  - Lesson 2.4
- Main goal: Learner understands resistance as opposition to current flow.
- Concepts introduced:
  - resistance
  - resistance opposes flow
  - the bulb is currently being modeled as an ideal resistive load
- Formulas shown:
  - symbol: R = resistance
- Components used:
  - one source
  - one switch
  - one bulb
  - wires
- Prebuilt amount:
  - mostly prebuilt
- Learner actions available:
  - click to toggle switch
  - drag to place
- Current-flow overlay:
  - available
- Hint style:
  - full conceptual explanation
- Completion condition:
  - complete guided interaction and challenge set
- Challenge examples:
  1. identify which concept makes flow harder
  2. pick the best definition of resistance
- Sandbox unlocks after lesson:
  - no new component type
- Theory page additions:
  - What is resistance?
  - Bulb as an ideal resistive load in the early model
- In-lesson theory check:
  - multiple-choice on resistance meaning
- Standalone quiz topics unlocked:
  - resistance basics

---

### Lesson 3.2: The First Formula Pair

- Stage label: Beginner
- Prerequisites:
  - Lesson 3.1
- Main goal: Learner is introduced to the first formal equations as named relationships, not yet as heavy calculation tools.
- Concepts introduced:
  - formulas as relationships between circuit quantities
  - notation familiarity
- Formulas shown:
  - V = IR
  - P = VI
  - symbol definitions:
    - V = voltage
    - I = current
    - R = resistance
    - P = power
- Components used:
  - one source
  - one bulb
  - one switch
  - wires
- Prebuilt amount:
  - mostly prebuilt
- Learner actions available:
  - click to toggle switch
  - drag to place
- Current-flow overlay:
  - available
- Hint style:
  - formula meaning explained in plain language
- Completion condition:
  - complete interaction and theory checks
- Challenge examples:
  1. choose which symbol means current
  2. choose which formula includes power
  3. identify which formula connects voltage, current, and resistance
- Sandbox unlocks after lesson:
  - formula side panel becomes available in lessons and sandbox reference mode
- Theory page additions:
  - Ohm's Law
  - Power formula
  - Symbol glossary
- In-lesson theory check:
  - multiple-choice symbol and formula recognition
- Standalone quiz topics unlocked:
  - symbol recognition
  - formula recognition

---

### Lesson 3.3: Why Brightness Will Matter Later

- Stage label: Beginner
- Prerequisites:
  - Lesson 3.2
- Main goal: Learner is prepared for later brightness comparisons by understanding that bulb behavior can be discussed in terms of energy use and later power, without yet focusing on multiple-bulb comparisons.
- Concepts introduced:
  - a bulb's visible behavior relates to what is happening electrically
  - later lessons will connect brightness more directly to power
- Formulas shown:
  - P = VI remains visible in context
- Components used:
  - one source
  - one bulb
  - one switch
- Prebuilt amount:
  - mostly prebuilt
- Learner actions available:
  - click to toggle switch
  - drag to place
- Current-flow overlay:
  - available
- Hint style:
  - conceptual only
- Completion condition:
  - complete short lesson and concept checks
- Challenge examples:
  1. identify which quantity later helps explain bulb output
  2. select the best summary of why formulas matter even before calculation
- Sandbox unlocks after lesson:
  - no new component type
- Theory page additions:
  - Early connection between bulb behavior and power
- In-lesson theory check:
  - conceptual multiple-choice
- Standalone quiz topics unlocked:
  - formulas as relationships

---

## Unit 4: First Construction Freedom

### Unit metadata

- Unit title: First Construction Freedom
- Stage label: Beginner
- Unit goal: Learner begins taking more responsibility for circuit assembly, including making and correcting mistakes.
- Explicit prerequisites:
  - Unit 3 complete

---

### Lesson 4.1: Place the Missing Piece

- Stage label: Beginner
- Prerequisites:
  - Lesson 3.3
- Main goal: Learner builds confidence placing a missing component into an otherwise simple circuit.
- Concepts introduced:
  - partial construction
  - one missing part can prevent success
- Formulas shown:
  - side panel may still show symbol definitions and formulas, but not as the main focus
- Components used:
  - one source
  - one switch
  - one bulb
  - wires
- Prebuilt amount:
  - partially prebuilt with one missing component
- Learner actions available:
  - drag to place
  - click to toggle switch
- Current-flow overlay:
  - available
- Hint style:
  - progressive hints with full why explanation by default
- Completion condition:
  - learner places the missing component and runs the circuit successfully
  - learner completes 2 short challenges
- Challenge examples:
  1. choose the correct missing component
  2. place the missing component in the correct location
- Sandbox unlocks after lesson:
  - no new components
- Theory page additions:
  - none required beyond lesson linkage
- In-lesson theory check:
  - optional check on roles of source, load, and switch
- Standalone quiz topics unlocked:
  - none new required

---

### Lesson 4.2: Wiring the Loop

- Stage label: Beginner
- Prerequisites:
  - Lesson 4.1
- Main goal: Learner unlocks and uses wire connection between valid terminals.
- Concepts introduced:
  - making a connection directly
  - wiring as the action that completes or breaks the path
- Formulas shown:
  - not central
- Components used:
  - one source
  - one switch
  - one bulb
  - wires
- Prebuilt amount:
  - partially prebuilt
  - learner must connect one or more wires
- Learner actions unlocked:
  - connect wires between terminals
- Current-flow overlay:
  - available
- Hint style:
  - full why explanation by default
  - highlight wrong or missing connection area progressively
- Completion condition:
  - learner wires the circuit so it works
  - completes challenge set
- Challenge examples:
  1. connect the missing wire
  2. fix a circuit with one wrong connection
- Sandbox unlocks after lesson:
  - wiring action unlocked in sandbox
- Theory page additions:
  - Connecting a path
- In-lesson theory check:
  - which connection completes the loop
- Standalone quiz topics unlocked:
  - simple connection logic

---

### Lesson 4.3: Wrong Circuits Are Allowed

- Stage label: Beginner
- Prerequisites:
  - Lesson 4.2
- Main goal: Learner understands that faulty circuits are allowed and can be debugged, rather than being prevented by the editor.
- Concepts introduced:
  - meaningful mistakes
  - open circuits as build mistakes
  - wrong order or wrong connection can stop the circuit from working
- Formulas shown:
  - not central
- Components used:
  - one source
  - one switch
  - one bulb
  - wires
- Prebuilt amount:
  - partially prebuilt or minimally guided
- Learner actions available:
  - click to toggle switch
  - drag to place
  - connect wires
  - delete component if wrong placement is now possible
- Current-flow overlay:
  - available
- Hint style:
  - progressive issue surfacing
  - easiest reliably detectable issue first
- Completion condition:
  - learner builds a faulty circuit, tests it, then fixes it
- Challenge examples:
  1. build the circuit and intentionally test it before checking the solution
  2. repair a broken setup after observing failure
- Sandbox unlocks after lesson:
  - deletion of misplaced component or connection where applicable
- Theory page additions:
  - Learning through trial and error
- In-lesson theory check:
  - why a non-working circuit may still be useful for learning
- Standalone quiz topics unlocked:
  - none new required

---

## Unit 5: Readiness for Numbers

### Unit metadata

- Unit title: Readiness for Numbers
- Stage label: Beginner to Early Intermediate
- Unit goal: Learner is prepared to transition from purely qualitative understanding to active use of numerical values in the next chapter.
- Explicit prerequisites:
  - Unit 4 complete

---

### Lesson 5.1: Quantities in a Circuit

- Stage label: Beginner to Early Intermediate
- Prerequisites:
  - Lesson 4.3
- Main goal: Learner understands that voltage, current, resistance, and power are measurable quantities that can later be given numerical values.
- Concepts introduced:
  - circuit quantities can be represented numerically
  - formulas will soon be used actively
- Formulas shown:
  - V = IR
  - P = VI
  - symbol definitions remain visible in the side panel
- Components used:
  - one source
  - one bulb
  - one switch
  - wires
- Prebuilt amount:
  - partially prebuilt
- Learner actions available:
  - click to toggle switch
  - drag to place
  - connect wires
  - delete if needed
- Current-flow overlay:
  - available
- Hint style:
  - conceptual and forward-looking
- Completion condition:
  - learner completes interaction and theory checks
- Challenge examples:
  1. identify which quantities can describe a circuit numerically
  2. identify which symbols go with which quantities
- Sandbox unlocks after lesson:
  - no new components
- Theory page additions:
  - Circuit quantities overview
- In-lesson theory check:
  - multiple-choice symbol matching
- Standalone quiz topics unlocked:
  - quantity and symbol review

---

### Lesson 5.2: Before the Math Starts

- Stage label: Beginner to Early Intermediate
- Prerequisites:
  - Lesson 5.1
- Main goal: Learner understands that the next chapter will begin active calculation using actual values.
- Concepts introduced:
  - transition point from formula recognition to formula use
  - numerical values are coming next
- Formulas shown:
  - V = IR
  - P = VI
- Components used:
  - one source
  - one bulb
  - one switch
- Prebuilt amount:
  - simple, mostly prebuilt
- Learner actions available:
  - all unlocked chapter actions so far
- Current-flow overlay:
  - available
- Hint style:
  - light conceptual guidance
- Completion condition:
  - learner completes lesson and readiness checks
- Challenge examples:
  1. identify which formula would be used to relate voltage, current, and resistance
  2. identify which formula relates power to voltage and current
- Sandbox unlocks after lesson:
  - no new component type
- Theory page additions:
  - Transition to numerical analysis
- In-lesson theory check:
  - final formula recognition check before numbers
- Standalone quiz topics unlocked:
  - Foundations chapter review quiz

---

## Foundations chapter theory review items

By the end of this chapter, the theory reference should include topic-group entries for:
- What is a circuit?
- Open and closed circuits
- Complete loop
- Source, switch, and load
- What is current?
- What is voltage?
- What is resistance?
- Early relationship between voltage and current
- Bulb as an ideal resistive load
- Ohm's Law
- Power formula
- Symbol glossary
- Learning through trial and error
- Transition to numerical analysis

Each entry should link back to the lesson or lessons where it was introduced.

## Foundations chapter standalone quizzes

Suggested quizzes unlocked by the end of the chapter:
1. Open and closed circuits review
2. Source, switch, and load review
3. Current basics
4. Voltage basics
5. Resistance basics
6. Formula and symbol recognition
7. Foundations chapter review quiz

These are optional and replayable.

## Foundations chapter sandbox state by the end

By the end of Chapter 1, sandbox should support:
- source
- switch
- bulb
- wires
- drag-to-place
- wire connection
- deletion where needed
- current-flow overlay
- at least one save slot for logged-in users, according to overall product rules

## Handoff to Chapter 2

Chapter 2 should begin the first true numerical lessons.

That chapter should include:
- first actual numeric values for source voltage and load resistance
- first manual use of V = IR and P = VI
- first explicit calculation-based challenges
- later introduction of the first measurement tool only after manual calculation practice has occurred
