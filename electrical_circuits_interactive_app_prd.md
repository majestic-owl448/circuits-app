# Product Requirements Document
## Interactive Electrical Circuits Learning App

## 1. Product Overview

This product is an interactive, gamified app for learning electrical circuits. It is designed to provide an experience similar in spirit to freeCodeCamp: learners progress through guided interactive lessons, complete short challenges, unlock new capabilities, and explore concepts in a sandbox.

The product exists because traditional learning materials such as videos and textbooks are passive. They can explain concepts, but by themselves often do not provide enough engagement, practice, or motivation for learners to persist. This product aims to teach circuit theory through interaction, immediate feedback, experimentation, and progressive challenge.

This version of the PRD covers the product’s learning model, interaction design, progression rules, simulation scope, accessibility requirements, and platform constraints. Detailed curriculum planning and lesson authoring workflow are out of scope for this iteration.

## 2. Target User

The app is aimed at adults with roughly a high school level education in the United States who want to learn circuitry as a new subject.

The product should assume:
- general reading comprehension
- basic arithmetic
- basic algebra
- comfort with simple formulas, proportions, decimals, and unit conversions

The product should not assume:
- prior electronics knowledge
- prior circuit theory knowledge
- prior physics knowledge
- prior programming knowledge
- calculus or advanced math

The app should be approachable for beginners and suitable for self-directed learners starting from zero.

## 3. Educational Scope

The product teaches circuit theory through simulation and interactive lessons.

Included in scope:
- ideal DC circuit behavior in early lessons
- voltage, current, resistance, and power
- open and closed circuits
- sources and loads
- series and parallel circuits
- formulas and symbolic notation
- numerical circuit analysis once introduced
- simulated non-ideal behavior later in the course
- qualitative and quantitative circuit reasoning
- theory review through a reference page and optional quizzes

Out of scope for this PRD iteration:
- detailed lesson plan and unit structure
- physical circuit building
- breadboards and hardware assembly
- electrician training
- household wiring and mains work
- lesson authoring workflow
- analytics and privacy specification
- donation strategy

## 4. Instructional Philosophy

The product should be interaction-first. Learners should learn by doing, observing, modifying, testing, and retrying.

The course should begin with idealized circuit behavior to reduce cognitive load. Later lessons should introduce selected non-ideal effects to narrow the gap between simple textbook circuits and more realistic simulated behavior.

The app should separate:
- **formula exposure** from **formula mastery**
- **guided interaction** from **independent problem solving**
- **theory review** from **lesson progression**

The overall learning progression should move from:
1. simple interaction and observation
2. conceptual understanding
3. symbolic familiarity
4. manual numerical calculation
5. more independent construction and analysis
6. increasingly realistic simulated behavior

## 5. Concept Introduction Principles

### 5.1 Early foundational model
The earliest lessons should focus on the smallest conceptual set needed to understand a simple circuit.

For the earliest one-source, one-bulb circuit, the core ideas are:
- a circuit is a loop
- a circuit can be open or closed
- the source provides electrical energy
- the bulb acts as a load
- current flows when the loop is complete
- resistance opposes flow

### 5.2 Order of core ideas
A natural early conceptual progression is:
1. closed loop
2. current flow
3. voltage as electrical push
4. resistance as opposition to flow
5. formulas become actively used later
6. series and parallel structure later

### 5.3 Analogies
The app may use beginner-friendly analogies in early lessons:
- voltage as pressure or push
- current as flow, like water in a river or pipe
- resistance as something that makes flow harder

These analogies are scaffolding and should not be overextended.

### 5.4 Electrons
Electrons are not required core content.

Electron-level explanation should appear only as optional deeper background content. A learner should be able to complete the main curriculum without needing to understand electron motion.

The core curriculum should use **conventional current direction** to stay aligned with standard textbooks and diagrams.

## 6. Formulas and Symbol Use

The first formulas introduced should be:
- `V = IR`
- `P = VI`

These formulas should appear from the beginning so learners become familiar with the symbols:
- V = voltage
- I = current
- R = resistance
- P = power

However, learners should not be required to apply formulas heavily until numerical lessons begin.

Formula usage model:
- formulas appear early for recognition
- manual use begins later when actual values are introduced
- deeper numerical work expands gradually

When relevant later, additional useful power identities may appear, such as:
- `P = V^2 / R`
- `P = I^2 R`

## 7. Circuit Behavior Progression

### 7.1 Series and parallel introduction
Series and parallel should not be introduced immediately after the very first lesson. The app should establish the bulb as a load and introduce current, voltage, resistance, and later simple numeric reasoning before moving into series and parallel.

Multiple bulbs should first be introduced as identical bulbs. Later lessons can introduce bulbs with different resistance values.

### 7.2 Brightness
Brightness should first be introduced explicitly in the context of comparing multiple bulbs, especially series circuits, not in the very first single-bulb lesson.

At first, brightness should be treated as a visual cue. Later, once resistance and power are understood, brightness can be connected to power dissipated in the bulb.

## 8. Simulation Scope

The app should begin with ideal circuit behavior and later introduce selected non-ideal effects that improve conceptual understanding without turning the product into advanced physical modeling.

Non-ideal behavior that may be included later:
- wire resistance
- internal resistance of the source
- voltage drop under load
- component heating
- bulb or load burnout
- source current limits
- basic component tolerances

The product should not attempt full advanced physical simulation. Non-ideal behavior should only be included when it meaningfully improves understanding.

## 9. Core Interaction Model

### 9.1 First interaction
The first interaction should be toggling a switch to close a simple DC circuit and light a bulb.

The learner should be allowed to play freely with the switch first. This connects theory to everyday behavior, since switching on a light is familiar.

### 9.2 Visual style
The early lessons should use a hybrid visual approach:
- recognizable real-world components where helpful
- simplified symbolic representation where useful

The visuals should help learners connect physical-looking components with abstract circuit concepts.

### 9.3 Current visualization
Current flow visualization should be available as an optional overlay, not always on by default.

This overlay should be described in simple terms early on as current flow or electrical flow. It should not require electron-level explanation.

## 10. Workspace Interaction Progression

Workspace actions should unlock gradually through lesson progression.

Early available actions:
- click to toggle a switch
- drag to place components

Next major action to unlock:
- connecting wires between terminals

Other actions should unlock when instructionally needed:
- delete components when learners can place wrong components
- edit component values when numerical component properties are introduced
- rotate components only when geometry or layout makes it necessary

The editor should only gain complexity when that complexity supports learning.

## 11. Circuit Construction Model

The workspace should use a structured connection model. Wires should connect between valid connection points, not be drawn arbitrarily.

The editor should allow electrically meaningful mistakes, including:
- open circuits
- incorrect component order
- faulty wiring
- short circuits

Short circuits should be allowed and represented through the simulation. The app should surface their consequences through behavior, evaluation, and hints rather than preventing them outright.

Explicit junctions or nodes should only become visible once parallel circuits are introduced.

## 12. Lesson Structure

Lessons should prioritize the interactive circuit area as the main focus.

Text should support the interaction, not compete with it. The amount of text may vary based on:
- how much theory is being introduced
- the complexity of the circuit
- the complexity of the challenge

### 12.1 Main layout
The default lesson layout should be a two-section layout:
- left: lesson text, instructions, prompts
- center/main: interactive circuit workspace

A right-side theory and formula panel should exist and be:
- collapsible
- openable on demand
- pinnable

Behavior:
- default is a two-section layout
- if the right panel is opened temporarily, it may overlay or reduce part of the layout
- if pinned, the layout becomes a three-section layout

### 12.2 How much is prebuilt
Early lessons should provide mostly or partially prebuilt circuits.
Later lessons should provide less prebuilt structure and require more independent assembly.

General progression:
- early lessons: most of the circuit already built
- middle lessons: some structure provided, learner adds key parts
- later lessons: learner builds more independently

## 13. Lesson Completion

A lesson is completed when the learner:
1. successfully performs the required interaction
2. completes one or more small follow-up challenges

Challenges may include:
- rebuilding a circuit
- fixing a broken circuit
- predicting a result
- choosing the correct circuit or component

Early on, challenges should be straightforward. Later, component choice can become less obvious and may involve choosing from a small set of options.

## 14. Challenge Design

### 14.1 Multiple solutions
Later challenges may allow more than one correct circuit, as long as the goal is precise and unambiguous.

### 14.2 Evaluation method
Open-ended challenge success should be based on simulated electrical behavior and calculated values, not exact structural matching alone.

The app should calculate relevant quantities and determine whether the values affecting the target component fall within the required range.

### 14.3 Numeric tolerance
The app should not rely on exact equality checks.

It should use acceptable ranges or tolerances. Tight tolerances may be used in ideal situations, while wider tolerances may be used later for non-ideal behavior.

## 15. Feedback and Hints

The app should support trial and error with gentle feedback. Lessons and challenges should not have a fail state.

Incorrect attempts should lead to supportive feedback and retries until success is reached.

### 15.1 Hint progression
Feedback may use:
- short text hints
- visual highlights
- current-flow visualization overlay

Hints should be progressive rather than fully revealing everything at once.

### 15.2 Issue prioritization
When multiple issues are present, the system should surface the easiest reliably detectable issue first.

### 15.3 Explaining why
In early lessons, hints should explain both what is wrong and why.
Later, the “why” explanation should be available through an explicit **Explain why** action.

## 16. Running and Checking Circuits

Learners should always be able to switch current on in their built circuit and observe behavior before asking the app to evaluate success.

Challenge checking should be triggered only through a separate user action:
- **Check solution**

The app should not automatically mark success just because a circuit is currently running correctly.

This keeps testing and formal checking separate.

## 17. Sandbox Mode

A sandbox mode should be available from the beginning.

The sandbox should expand through progression. As learners complete lessons, they unlock new components and capabilities in the sandbox.

After the first lesson, the sandbox should unlock at least:
- battery
- switch
- one lightbulb
- wires
- freedom to connect and disconnect them

### 17.1 Saved sandbox builds
Sandbox builds should be for personal use only in V1.

Learners should have at least one save slot. The eventual number of save slots can be determined later based on storage efficiency and account storage policy.

## 18. Progression Model

The lesson path should be primarily linear.

New lessons should normally unlock only after the previous lesson is completed. The only exception is where lessons genuinely cover independent concepts and can be completed in any order.

Previously unlocked lessons should always remain available and replayable.

When a learner returns after a long break, the app should suggest a short sandbox refresher using already unlocked concepts.

## 19. Accounts and Persistence

The app should allow anonymous learners to start immediately without creating an account.

Anonymous users:
- can access lessons
- can store progress locally

Logged-in users:
- can save progress to the server
- can save sandbox builds to the server

When the learner first uses a feature that requires server-side persistence, the app should explain the difference between local and server-backed saving.

That message should:
- be dismissible
- include a “Don’t tell me again” option
- store that preference locally

## 20. Rewards and Celebration

The app should not use:
- points
- XP
- hearts
- lives
- other abstract scoring systems

Progression should instead be visible through:
- lesson completion
- lesson unlocks
- sandbox unlocks
- increased capability

Light celebratory feedback such as confetti may be used, but only for larger milestones such as:
- lesson completion
- component unlocks
- larger progression moments

## 21. Theory Support

### 21.1 Side panel
The lesson side panel should include:
- relevant formulas
- symbol definitions
- only the theory needed for the current lesson

If a formula is being actively taught in the lesson, it should also be visible directly in the main lesson area.

### 21.2 Full theory page
The app should also include a separate theory reference page containing all unlocked theory so far.

This page should:
- be organized by topic groups, not lesson order
- show only content already unlocked
- contain no placeholders for future topics
- include links back to the lesson(s) where each topic was introduced

### 21.3 Theory content style
The theory page should use short summaries by default.

Where useful, it may also include:
- diagrams
- visual aids
- short worked examples

Worked examples should be summary examples only, with links back to the lesson for full walkthroughs.

## 22. Quizzes

The app may include multiple-choice questions where that format fits the learning goal.

Best uses:
- formula recognition
- symbol recognition
- definitions
- concept discrimination

Multiple-choice questions should appear both:
- inside lessons as quick checks
- as standalone theory quizzes

Standalone theory quizzes should be:
- optional review tools
- not required for progression
- replayable after completion
- lightly tracked with completion status only

Quiz feedback should be shown at the end of the quiz, except for one-question quizzes where it can be shown immediately.

Quiz feedback should include:
- correct answers
- short theory refreshers
- links back to theory topics and lessons where useful

## 23. Measurement Tools

After learners have first practiced manual calculation, the app should introduce virtual measurement tools through guided lessons.

These tools should behave similarly to familiar instruments such as:
- voltmeter
- ammeter
- ohmmeter

They should not simply unlock without explanation.

Each tool should be taught through a lesson covering:
- what it measures
- how it is used
- how to read it
- how it relates to previously learned formulas

The order in which measurement tools are introduced should be decided later during detailed lesson planning based on instructional need.

## 24. Numerical Feedback

Before numerical analysis is introduced, evaluation feedback should remain qualitative.

After numerical work begins, challenge evaluation should show final relevant values by default.

A **more details** action should reveal a deeper, human-readable step-by-step derivation.

That derivation should:
- use the actual labels and values from the learner’s circuit
- explain the order of reasoning step by step
- function as teaching support, not just debug output

## 25. Component Naming

Components should receive sensible default names when placed, such as:
- Bulb 1
- Source 1
- Resistor 1
- Switch 1

Learners should be able to rename components both:
- in the sandbox
- during lessons

Lesson text, hints, and calculations should update dynamically to reflect current component names.

## 26. Accessibility

Accessibility should be part of the product from the start.

### 26.1 Required from the start
The product should include:
- full keyboard navigation
- reduced-motion support
- color-independent meaning
- readable labels
- sufficient contrast
- scalable and readable interface elements

### 26.2 Keyboard support scope
Keyboard support should extend through the full core interaction model, including:
- navigating components and controls
- selecting components
- placing components
- moving components
- wiring connections
- toggling switches
- deleting components when allowed
- renaming components
- opening panels
- activating circuits
- checking solutions
- opening details and hints

### 26.3 Screen reader support
Full screen reader support for the circuit workspace is a long-term goal, but may fall outside the MVP if a usable verbal model for complex circuits is not yet defined.

The MVP should still provide:
- screen-reader support for standard UI elements
- strong keyboard support
- structured textual summaries of circuit state where possible

## 27. Textual Circuit Description

The app should be able to generate a structured textual summary of the current circuit state.

This summary should include:
- components present
- current names of components
- how they are connected
- whether the circuit is open or closed
- whether branching is present
- whether the target component is receiving current
- whether the target is within required range
- faults such as short circuits, open circuits, or damaged components
- switch state
- later, relevant numerical values where appropriate

This description should be available both:
- on demand through a **Describe circuit** action
- automatically when useful for accessibility or evaluation feedback

## 28. Platform Scope

The MVP should be desktop-first.

If touch support is not difficult to include, it should be included for the MVP where practical, especially on larger touch devices.

Full responsive small-screen mobile support may come after the MVP.

The MVP should require internet access during use.

## 29. Simulation Architecture

The product should aim to run circuit simulation and challenge evaluation in the browser.

For the MVP:
- browser simulation is the source of truth
- browser evaluation is sufficient for **Check solution**
- server-side revalidation is out of scope

This supports fast interaction, lower server cost, and smoother experimentation.

## 30. Narration and Teaching Voice

The app should not include a narrator or guide character.

Instruction should come through:
- lesson text
- labels
- hints
- panel content
- evaluation feedback

The interface itself should teach.

## 31. Time Pressure

The app should never use timed lessons or timed challenges.

The product should support experimentation, reflection, and retrying without pressure.

## 32. Product Success Metrics

Primary success metric:
- lesson completion

Secondary metrics:
- account creation
- donations

Account creation prompts are already defined as appearing when the learner reaches a feature that requires server-side saving.

Donation strategy remains TBD and is out of scope for this PRD iteration.

## 33. Scope Boundaries for This PRD Iteration

Still out of scope for this iteration:
- detailed lesson plan
- full curriculum endpoint definition
- content production workflow
- analytics and privacy specification
- donation strategy details
- explicit MVP non-goals section

## 34. Summary of Product Direction

This app should teach electrical circuits through a freeCodeCamp-like interactive model centered on:
- guided lessons
- short challenges
- sandbox experimentation
- progressive unlocks
- qualitative and later quantitative reasoning
- ideal behavior first, then selected non-ideal behavior
- strong accessibility foundations
- desktop-first execution

The product should make learners feel that they are learning circuitry by building, testing, observing, and understanding circuits, not by passively consuming explanation alone.

