import type { QuizConfig } from '../../types/quiz.ts';

const quizzes: QuizConfig[] = [
  {
    id: 'quiz-ch10-concept-map-review',
    title: 'Concept Map Review',
    unlockedBy: 'lesson-ch10-1-1',
    passingScore: 60,
    questions: [
      {
        id: 'ch10cmr1',
        prompt: 'Which chapter group introduced the foundational DC analysis tools — Ohm\'s Law, series/parallel resistance, and KCL/KVL?',
        choices: [
          { id: 'ch10cmr1-a', label: 'Chapters 1-4 — these cover DC fundamentals, numerical analysis, series/parallel circuits, and measurement', isCorrect: true, explanation: 'Correct. Chapters 1-4 build the complete DC analysis toolkit: basic circuit concepts (Ch1), Ohm\'s Law and power (Ch2), series and parallel analysis (Ch3), and measurement with KCL/KVL (Ch4).' },
          { id: 'ch10cmr1-b', label: 'Chapters 6-7 — these cover time-dependent and AC analysis', isCorrect: false, explanation: 'Chapters 6-7 cover transient (time-dependent) and AC circuits — they extend beyond DC. The DC foundations come from Chapters 1-4.' },
          { id: 'ch10cmr1-c', label: 'Chapters 8-9 — these cover active components and digital logic', isCorrect: false, explanation: 'Chapters 8-9 introduce diodes, transistors, and logic gates — a separate domain from DC circuit analysis. DC fundamentals are covered in Chapters 1-4.' },
        ],
      },
      {
        id: 'ch10cmr2',
        prompt: 'Which chapter introduced the concept of a component operating in a non-ideal way — with internal resistance, wire resistance, and tolerance variability?',
        choices: [
          { id: 'ch10cmr2-a', label: 'Chapter 3 — series and parallel circuit analysis', isCorrect: false, explanation: 'Chapter 3 covers series and parallel circuit topology using ideal components. Non-ideal component behavior was introduced later.' },
          { id: 'ch10cmr2-b', label: 'Chapter 5 — non-ideal components, internal resistance, wire resistance, and tolerance', isCorrect: true, explanation: 'Correct. Chapter 5 introduced non-ideal component modeling: battery internal resistance, wire resistance, and tolerance variability. These factors explain why real circuits deviate from ideal calculations.' },
          { id: 'ch10cmr2-c', label: 'Chapter 7 — AC circuits with frequency-dependent behavior', isCorrect: false, explanation: 'Chapter 7 covers AC circuit analysis. Non-ideal component properties (internal resistance, wire resistance, tolerance) were introduced in Chapter 5.' },
        ],
      },
      {
        id: 'ch10cmr3',
        prompt: 'Which two chapters together cover the complete active component domain — from diodes and transistors to logic gates?',
        choices: [
          { id: 'ch10cmr3-a', label: 'Chapters 6-7 — transient and AC circuits use active-like behavior', isCorrect: false, explanation: 'Chapters 6-7 cover time-dependent and AC behavior in passive component circuits (RC, RL, AC sources). Active components — diodes, transistors, and logic gates — are covered in Chapters 8 and 9.' },
          { id: 'ch10cmr3-b', label: 'Chapters 8-9 — Chapter 8 introduces diodes and transistors; Chapter 9 introduces logic gates', isCorrect: true, explanation: 'Correct. Chapter 8 covers diodes (forward/reverse bias) and transistors (controlled switching). Chapter 9 builds on transistor switching to introduce logic gates (NOT, AND, OR, NAND, NOR, XOR) and digital-style reasoning.' },
          { id: 'ch10cmr3-c', label: 'Chapters 4-5 — measurement and non-ideal components involve active-component concepts', isCorrect: false, explanation: 'Chapters 4-5 cover measurement workflows and non-ideal passive component behavior. Active components (diodes, transistors) are introduced in Chapter 8, and logic gates in Chapter 9.' },
        ],
      },
    ],
  },
  {
    id: 'quiz-ch10-domain-classification-basics',
    title: 'Domain Classification Basics',
    unlockedBy: 'lesson-ch10-1-2',
    passingScore: 60,
    questions: [
      {
        id: 'ch10dcb1',
        prompt: 'A circuit has a 9V battery, two resistors in parallel, and a switch. No capacitors, inductors, or diodes are present. Which analysis domain applies?',
        choices: [
          { id: 'ch10dcb1-a', label: 'Transient — the switch creates a time-dependent behavior', isCorrect: false, explanation: 'Transient analysis requires reactive components (capacitors or inductors). A switch changes the topology when toggled but does not introduce time-dependent exponential behavior. With only a battery, resistors, and a switch, this is a DC steady-state circuit.' },
          { id: 'ch10dcb1-b', label: 'DC (steady-state) — constant source, resistive components, apply Ohm\'s Law and parallel resistance rules', isCorrect: true, explanation: 'Correct. No reactive components (no C, no L), no diodes, no AC source. This is a DC steady-state circuit: analyze using Ohm\'s Law and the parallel resistance formula (1/R_total = 1/R1 + 1/R2).' },
          { id: 'ch10dcb1-c', label: 'Active — the switch has two states so it behaves like an active component', isCorrect: false, explanation: 'Active domain refers to diodes and transistors — components with nonlinear state-dependent behavior. A mechanical switch is a passive switching element. Without diodes or transistors, this remains a DC circuit.' },
        ],
      },
      {
        id: 'ch10dcb2',
        prompt: 'A problem asks: "Find the output voltage 2 seconds after the switch closes, given a 5V source, 1kΩ resistor, and 470µF capacitor in series." Which domain applies?',
        choices: [
          { id: 'ch10dcb2-a', label: 'DC — the source is a constant 5V battery, so DC analysis applies', isCorrect: false, explanation: 'DC steady-state analysis cannot answer "after 2 seconds" — it gives the final equilibrium value only. The presence of a capacitor and a time-after-close question places this in the transient domain, requiring the RC exponential model.' },
          { id: 'ch10dcb2-b', label: 'Transient — the capacitor charges over time through the resistor; use V_C = V*(1-e^(-t/τ)) with τ = RC', isCorrect: true, explanation: 'Correct. A capacitor charging through a resistor from a DC source is a classic RC transient problem. The time constant τ = RC = 1000 × 470×10⁻⁶ ≈ 0.47 s. Use V_C = 5*(1-e^(-2/0.47)) to find the voltage at t=2s.' },
          { id: 'ch10dcb2-c', label: 'AC — a capacitor in a circuit means AC analysis is required', isCorrect: false, explanation: 'Capacitors appear in both transient DC circuits and AC circuits. The key differentiator is the source type: a constant (DC) source with a capacitor is a transient problem; a sinusoidal (AC) source with a capacitor is an AC problem. This problem has a 5V battery (DC), so it is transient.' },
        ],
      },
      {
        id: 'ch10dcb3',
        prompt: 'A logic circuit problem describes: "Gate A receives HIGH; Gate B receives LOW. Trace the output of an AND gate followed by a NOT gate." Which domain applies?',
        choices: [
          { id: 'ch10dcb3-a', label: 'Active — transistors implement logic gates so this is an active-domain problem', isCorrect: false, explanation: 'While transistors underlie physical gate implementations, logic-domain analysis works entirely at the HIGH/LOW abstraction level using truth tables. Transistor physics are abstracted away. This is a logic-domain problem.' },
          { id: 'ch10dcb3-b', label: 'Logic — trace input states through gate truth tables: AND(HIGH, LOW) = LOW; NOT(LOW) = HIGH', isCorrect: true, explanation: 'Correct. This is a logic-domain problem. AND(HIGH, LOW) = LOW (AND requires all inputs HIGH). NOT(LOW) = HIGH (NOT inverts). The combined output is HIGH. Logic analysis uses truth-table tracing, not voltage calculations.' },
          { id: 'ch10dcb3-c', label: 'DC — voltage is ultimately what determines HIGH and LOW states', isCorrect: false, explanation: 'In logic-domain analysis, HIGH and LOW are abstract state labels — not voltage values. The analysis proceeds entirely using gate truth tables without any voltage calculations. This is the logic domain, not the DC domain.' },
        ],
      },
    ],
  },
  {
    id: 'quiz-ch10-analysis-strategy-basics',
    title: 'Analysis Strategy Basics',
    unlockedBy: 'lesson-ch10-1-3',
    passingScore: 60,
    questions: [
      {
        id: 'ch10asb1',
        prompt: 'When starting analysis on an unfamiliar circuit, what should be the very first step?',
        choices: [
          { id: 'ch10asb1-a', label: 'Apply Ohm\'s Law immediately to find the total current', isCorrect: false, explanation: 'Applying Ohm\'s Law before identifying the domain may be wrong — if the circuit has capacitors, diodes, or AC sources, Ohm\'s Law alone is not sufficient. Domain classification must come first to determine which analytical tools apply.' },
          { id: 'ch10asb1-b', label: 'Classify the domain by examining component types and source characteristics before choosing an analysis method', isCorrect: true, explanation: 'Correct. Domain classification is always the first step. Identify all component types (resistor, capacitor, inductor, diode, transistor, gate) and the source type (DC battery, AC sinusoidal, none). The domain determines which analytical framework to use.' },
          { id: 'ch10asb1-c', label: 'Measure the voltage at every node using a voltmeter', isCorrect: false, explanation: 'Measuring before understanding the circuit structure wastes time and may not reveal the root cause of a problem. The first step is always to classify the domain and understand what the circuit is supposed to do.' },
        ],
      },
      {
        id: 'ch10asb2',
        prompt: 'A DC circuit analysis is complete — all currents and voltages match expected values. But the physical circuit still does not work. What analytical step was likely skipped?',
        choices: [
          { id: 'ch10asb2-a', label: 'Topology verification — checking that the circuit path is actually complete (no open wires, disconnected nodes, or broken connections)', isCorrect: true, explanation: 'Correct. DC calculations assume a complete connected circuit. If the topology has an open path (disconnected wire, open switch, or broken component), no current flows regardless of what the calculations predict. Topology verification — checking path continuity — is a required step alongside numerical analysis.' },
          { id: 'ch10asb2-b', label: 'KVL recalculation — the voltage loop equations must have been solved incorrectly', isCorrect: false, explanation: 'The problem states that all calculated values match expected values, so the KVL equations are likely correct. A calculation-correct but physically failing circuit points to a topology issue (open path) or component state issue (diode bias, switch state), not a calculation error.' },
          { id: 'ch10asb2-c', label: 'Power calculation — power dissipation in resistors was not computed', isCorrect: false, explanation: 'Power calculations tell you how much energy is consumed — they do not explain why a circuit fails to operate. The issue here is likely a topology fault (open path) that makes the calculated current flow impossible, not a missing power calculation.' },
        ],
      },
      {
        id: 'ch10asb3',
        prompt: 'A resistor circuit and a transistor circuit both show "no current" as a symptom. Why does the same symptom require different diagnostic strategies for each circuit?',
        choices: [
          { id: 'ch10asb3-a', label: 'They do not require different strategies — "no current" always means a broken wire regardless of component type', isCorrect: false, explanation: 'The cause of "no current" depends on the circuit type. In a resistor-only circuit, a broken wire (open topology) is the primary suspect. In a transistor circuit, a disabled control input blocking the transistor is an equally likely cause — and must be checked using active-domain reasoning.' },
          { id: 'ch10asb3-b', label: 'The domain differs: resistor circuits are diagnosed by checking for open paths (DC topology); transistor circuits require also checking control input state (active domain) — the same symptom can have different root causes in different domains', isCorrect: true, explanation: 'Correct. "No current" in a resistor circuit → check for open path (topology fault). "No current" in a transistor circuit → check for open path AND check the transistor control input state (active-domain fault). The domain determines which diagnostic steps are required beyond the basic topology check.' },
          { id: 'ch10asb3-c', label: 'Transistor circuits are more complex so they always require more diagnostic steps than resistor circuits', isCorrect: false, explanation: 'Complexity is not the differentiating factor — domain membership is. The diagnostic steps are determined by the component types present. A transistor circuit requires an active-domain check (control input state) that has no equivalent in a resistor-only circuit.' },
        ],
      },
    ],
  },
  {
    id: 'quiz-ch10-mixed-troubleshooting-basics',
    title: 'Mixed Troubleshooting Basics',
    unlockedBy: 'lesson-ch10-2-1',
    passingScore: 60,
    questions: [
      {
        id: 'ch10mtb1',
        prompt: 'A circuit has three simultaneously failing components: an open switch, a reversed diode, and a wire with high resistance. Which fault should be diagnosed and fixed first?',
        choices: [
          { id: 'ch10mtb1-a', label: 'The high-resistance wire — it affects all current paths in the circuit', isCorrect: false, explanation: 'High wire resistance degrades current but does not completely block it. An open switch blocks all current through that path entirely. Prioritize total-blocking faults before degradation faults — fix the switch first.' },
          { id: 'ch10mtb1-b', label: 'The open switch — it completely blocks the current path, causing total failure regardless of the other faults', isCorrect: true, explanation: 'Correct. Prioritize total-blocking faults first. An open switch prevents any current from flowing through its branch — no other measurements or fixes are meaningful until the current path is restored. Fix the open switch first, then address the reverse-biased diode, then the wire resistance.' },
          { id: 'ch10mtb1-c', label: 'The reversed diode — active components take priority over passive components', isCorrect: false, explanation: 'There is no rule that active components always take diagnostic priority. Priority is determined by which fault most completely blocks the circuit. An open switch is a total path blockage; a reversed diode also blocks current but only in its branch. Either could be prioritized, but the open switch creates the clearest total failure.' },
        ],
      },
      {
        id: 'ch10mtb2',
        prompt: 'After fixing the highest-priority fault in a multi-fault circuit, a new symptom appears that was not visible before. What does this indicate?',
        choices: [
          { id: 'ch10mtb2-a', label: 'The fix was incorrect — a correct fix should never reveal new symptoms', isCorrect: false, explanation: 'Revealing a new symptom after fixing a masking fault is expected and normal. The first fault (open switch) was masking the second fault (reversed diode) because no current could flow at all. Restoring current flow makes the second fault visible for the first time.' },
          { id: 'ch10mtb2-b', label: 'The first fault was masking a second fault — restoring partial function revealed the next fault in the chain', isCorrect: true, explanation: 'Correct. In a multi-fault circuit, the most severe fault can mask all other faults. When the first fault is fixed and current flows again, the previously hidden second fault becomes the new bottleneck and shows its symptom. This is expected behavior in iterative multi-fault diagnosis.' },
          { id: 'ch10mtb2-c', label: 'The circuit has been permanently damaged by the first fix', isCorrect: false, explanation: 'Correctly fixing a fault (like closing an open switch) does not damage the circuit. The appearance of a new symptom means a previously hidden fault is now visible — not that the circuit was harmed by the fix.' },
        ],
      },
      {
        id: 'ch10mtb3',
        prompt: 'What is the correct order for prioritizing fixes in a circuit that has both a complete path break and a component with degraded (not zero) performance?',
        choices: [
          { id: 'ch10mtb3-a', label: 'Fix the degraded component first — performance degradation is easier to characterize and diagnose', isCorrect: false, explanation: 'Ease of diagnosis does not determine fix priority. A complete path break prevents any circuit operation and hides the impact of all other faults. Restoring the complete path first allows the remaining degraded-performance fault to be properly characterized.' },
          { id: 'ch10mtb3-b', label: 'Fix the complete path break first — no meaningful measurements or performance checks are possible while the circuit cannot operate at all', isCorrect: true, explanation: 'Correct. A complete path break is a total-blocking fault — no current flows anywhere in the affected path, making performance measurements meaningless. Fix the total blockage first to restore basic operation, then address the degraded-performance fault in a functioning circuit.' },
          { id: 'ch10mtb3-c', label: 'Fix both simultaneously — there is no reason to sequence repairs in a broken circuit', isCorrect: false, explanation: 'Fixing multiple faults simultaneously makes it impossible to know which fix resolved which symptom. Iterative single-fault fixing with verification after each fix is the correct diagnostic strategy — it maintains traceability between fixes and their effects.' },
        ],
      },
    ],
  },
  {
    id: 'quiz-ch10-iterative-debugging-basics',
    title: 'Iterative Debugging Basics',
    unlockedBy: 'lesson-ch10-2-2',
    passingScore: 60,
    questions: [
      {
        id: 'ch10idb1',
        prompt: 'What is the core principle of iterative debugging?',
        choices: [
          { id: 'ch10idb1-a', label: 'Fix all visible faults at once to restore the circuit to full operation as quickly as possible', isCorrect: false, explanation: 'Fixing all faults at once sacrifices diagnostic traceability. If multiple faults are fixed simultaneously and the circuit still fails, it is impossible to know which fix resolved which fault — or whether any of them worked. Iterative debugging fixes and verifies one fault at a time.' },
          { id: 'ch10idb1-b', label: 'Fix one fault, verify the result, then identify and fix the next fault — one change per iteration with verification', isCorrect: true, explanation: 'Correct. Iterative debugging proceeds in clearly separated fix-then-verify cycles. One change is made, its effect is observed, and the next problem (if any) is identified from the new circuit state. This maintains a clear causal chain between fixes and outcomes.' },
          { id: 'ch10idb1-c', label: 'Replace components in the order they appear in the circuit from left to right until the circuit works', isCorrect: false, explanation: 'Physical order in the circuit diagram has no diagnostic meaning. Iterative debugging is guided by evidence and fault priority, not by spatial position. Replacing components without evidence-based reasoning is trial-and-error, not iterative debugging.' },
        ],
      },
      {
        id: 'ch10idb2',
        prompt: 'After fixing a fault and verifying the result, the circuit still shows a different symptom than expected. What is the correct next step?',
        choices: [
          { id: 'ch10idb2-a', label: 'Undo the previous fix — the circuit was better before the change', isCorrect: false, explanation: 'If the previous fix resolved the first fault but a new symptom appears, undoing it reintroduces the first fault without resolving the second. The correct step is to begin a new diagnosis cycle on the new symptom, not to undo confirmed fixes.' },
          { id: 'ch10idb2-b', label: 'Begin a new diagnosis iteration using the new symptom as the starting evidence for identifying the next fault', isCorrect: true, explanation: 'Correct. Each iteration ends with a fix and verification. If the verification reveals a new symptom, that symptom becomes the starting evidence for the next iteration. The previous fix is confirmed and left in place; the new symptom is the new problem to solve.' },
          { id: 'ch10idb2-c', label: 'Restart the entire circuit from scratch — the iterative approach has failed', isCorrect: false, explanation: 'Iterative debugging has not failed if a new symptom appears — it is working correctly. The first fix resolved the first fault and revealed a previously hidden second fault. Starting over wastes the progress made and risks reintroducing confirmed fixes.' },
        ],
      },
      {
        id: 'ch10idb3',
        prompt: 'An iterative debugging session requires five fix-verify cycles to fully restore a circuit. What does this tell you about the original fault set?',
        choices: [
          { id: 'ch10idb3-a', label: 'The circuit had exactly five independent faults, each of which was masking the next', isCorrect: true, explanation: 'Correct. Five fix-verify cycles means five faults were found and fixed in sequence. Each fault was the most prominent problem at that point, masking the existence of subsequent faults. This is the characteristic pattern of cascading masked faults resolved by iterative debugging.' },
          { id: 'ch10idb3-b', label: 'The debugging process was inefficient — a skilled engineer would have found all faults in one cycle', isCorrect: false, explanation: 'The number of cycles required is determined by the number of faults and their masking relationships, not by debugger skill. Five cycles for five sequentially masked faults is correct and expected behavior for iterative debugging, not a sign of inefficiency.' },
          { id: 'ch10idb3-c', label: 'The circuit has a fundamental design flaw that cannot be fixed by replacing components', isCorrect: false, explanation: 'Five fix-verify cycles resulting in a restored circuit confirms that the faults were component-level issues that were successfully fixed. A fundamental design flaw would prevent the circuit from working even after all component faults were fixed.' },
        ],
      },
    ],
  },
  {
    id: 'quiz-ch10-dc-capstone-basics',
    title: 'DC Capstone Basics',
    unlockedBy: 'lesson-ch10-3-1',
    passingScore: 60,
    questions: [
      {
        id: 'ch10dcc1',
        prompt: 'A 12V battery with 2Ω internal resistance drives a 10Ω external load. What is the terminal voltage (voltage across the load)?',
        choices: [
          { id: 'ch10dcc1-a', label: '12V — the full battery voltage appears across the load', isCorrect: false, explanation: 'The internal resistance causes a voltage drop inside the battery. Total resistance is 2 + 10 = 12Ω. Current I = 12/12 = 1A. Voltage drop across internal resistance: 1A × 2Ω = 2V. Terminal voltage: 12V - 2V = 10V.' },
          { id: 'ch10dcc1-b', label: '10V — the internal resistance drops 2V, leaving 10V across the 10Ω load', isCorrect: true, explanation: 'Correct. Total resistance = 2Ω (internal) + 10Ω (external) = 12Ω. Current I = 12V / 12Ω = 1A. Internal voltage drop = 1A × 2Ω = 2V. Terminal voltage = 12V - 2V = 10V.' },
          { id: 'ch10dcc1-c', label: '6V — internal and external resistance split the voltage equally', isCorrect: false, explanation: 'Equal voltage splitting only occurs when internal and external resistance are equal. Here the internal resistance is 2Ω and the external is 10Ω — not equal. The 2V internal drop leaves 10V across the load, not 6V.' },
        ],
      },
      {
        id: 'ch10dcc2',
        prompt: 'In a mixed series-parallel circuit, which resistors are in series and which are in parallel with each other?',
        choices: [
          { id: 'ch10dcc2-a', label: 'Resistors are in series if they share a single node exclusively with each other, and in parallel if they share both the same two nodes', isCorrect: true, explanation: 'Correct. The topology determines the relationship: two components sharing the same two terminal nodes are in parallel (same voltage). Two components sharing a single intermediate node with nothing else connected are in series (same current). This node-based definition applies universally.' },
          { id: 'ch10dcc2-b', label: 'Resistors are in series if they are physically close in the schematic, and in parallel if they are drawn side by side', isCorrect: false, explanation: 'Physical proximity and drawing layout have nothing to do with electrical series/parallel relationships. The relationship is determined by the topology — which nodes each component connects to — not by schematic appearance.' },
          { id: 'ch10dcc2-c', label: 'Resistors are always in series in a DC circuit if they are connected to the same battery', isCorrect: false, explanation: 'Being connected to the same battery does not determine series/parallel. Multiple branches connected between the same battery terminals are in parallel. Series/parallel is determined by node topology, not by the common source.' },
        ],
      },
      {
        id: 'ch10dcc3',
        prompt: 'KCL states that the sum of currents at a node equals zero. What does this mean physically?',
        choices: [
          { id: 'ch10dcc3-a', label: 'The voltage at every node is zero when the circuit is in steady state', isCorrect: false, explanation: 'KCL is about current, not voltage. KVL (Kirchhoff\'s Voltage Law) deals with voltages around a loop. KCL states that charge cannot accumulate at a node — current flowing in must equal current flowing out.' },
          { id: 'ch10dcc3-b', label: 'Charge cannot accumulate at a node — all current entering a node must leave through other branches, so input and output currents sum to zero', isCorrect: true, explanation: 'Correct. KCL is a statement of charge conservation. In steady state, charge does not pile up at a node. The algebraic sum of all branch currents at a node is zero: the total current entering equals the total current leaving.' },
          { id: 'ch10dcc3-c', label: 'The resistance at each node must be equal for the circuit to be in balance', isCorrect: false, explanation: 'Nodes do not have resistance — components have resistance. KCL is not about balancing resistances. It is about current conservation: whatever current enters a node through one branch must exit through other branches.' },
        ],
      },
    ],
  },
  {
    id: 'quiz-ch10-time-capstone-basics',
    title: 'Time Capstone Basics',
    unlockedBy: 'lesson-ch10-3-2',
    passingScore: 60,
    questions: [
      {
        id: 'ch10tcb1',
        prompt: 'An RC circuit has R = 2kΩ and C = 500µF. What is the time constant τ?',
        choices: [
          { id: 'ch10tcb1-a', label: 'τ = 1 second', isCorrect: true, explanation: 'Correct. τ = RC = 2000Ω × 500×10⁻⁶ F = 2000 × 0.0005 = 1 second. The time constant represents the time for the capacitor to charge to approximately 63.2% of the final voltage.' },
          { id: 'ch10tcb1-b', label: 'τ = 0.5 seconds', isCorrect: false, explanation: 'τ = RC = 2000 × 500×10⁻⁶ = 1 second, not 0.5 seconds. Check the unit conversion: 500µF = 500 × 10⁻⁶ F = 0.0005 F. 2000 × 0.0005 = 1.' },
          { id: 'ch10tcb1-c', label: 'τ = 2 seconds', isCorrect: false, explanation: 'τ = RC = 2000 × 500×10⁻⁶ = 1 second. This might arise from doubling R or C, but the calculation gives exactly 1 second with the given values.' },
        ],
      },
      {
        id: 'ch10tcb2',
        prompt: 'A capacitor has charged to approximately 63.2% of the source voltage after one time constant. What percentage has it reached after two time constants?',
        choices: [
          { id: 'ch10tcb2-a', label: 'About 86.5% — the capacitor follows V_C = V*(1-e^(-t/τ)) and at t=2τ: 1-e^(-2) ≈ 0.865', isCorrect: true, explanation: 'Correct. V_C(2τ) = V*(1-e^(-2)) = V*(1-0.135) = V*0.865, or about 86.5% of the final voltage. The exponential charging slows with each time constant — the rate of change decreases as the capacitor approaches full charge.' },
          { id: 'ch10tcb2-b', label: 'About 100% — two time constants is long enough for full charge', isCorrect: false, explanation: 'The RC exponential model asymptotically approaches the final voltage — it never mathematically reaches 100%. At t=2τ, V_C ≈ 86.5%. It takes approximately 5τ to reach 99.3%, which is considered "fully charged" for practical purposes.' },
          { id: 'ch10tcb2-c', label: 'About 63.2% — the percentage per time constant is constant', isCorrect: false, explanation: 'The charging percentage per time constant is not constant. At t=τ: 63.2%. At t=2τ: 86.5%. At t=3τ: 95.0%. The exponential model means each successive time constant charges the capacitor by a smaller absolute percentage because it starts closer to the final value.' },
        ],
      },
      {
        id: 'ch10tcb3',
        prompt: 'What does the inductor\'s behavior in a DC circuit differ from the capacitor\'s behavior?',
        choices: [
          { id: 'ch10tcb3-a', label: 'An inductor behaves as a short circuit (zero resistance) in DC steady state; a capacitor behaves as an open circuit (infinite resistance) in DC steady state', isCorrect: true, explanation: 'Correct. In DC steady state, an inductor\'s voltage across it goes to zero (it appears as a wire with only its wire resistance), while a capacitor\'s current through it goes to zero (it appears as a gap with no DC path). Inductor: DC short. Capacitor: DC open.' },
          { id: 'ch10tcb3-b', label: 'An inductor stores charge; a capacitor stores current', isCorrect: false, explanation: 'These descriptions are reversed. A capacitor stores charge (electric field between plates). An inductor stores energy in its magnetic field, which is associated with current flow. In DC steady state: inductor → wire (DC short), capacitor → open gap (DC open).' },
          { id: 'ch10tcb3-c', label: 'Inductors and capacitors behave identically in DC circuits', isCorrect: false, explanation: 'They behave oppositely in DC circuits. A capacitor blocks DC in steady state (open circuit), while an inductor passes DC in steady state (short circuit). Their time-domain behaviors also differ: capacitors build voltage exponentially while inductors build current exponentially.' },
        ],
      },
    ],
  },
  {
    id: 'quiz-ch10-ac-capstone-basics',
    title: 'AC Capstone Basics',
    unlockedBy: 'lesson-ch10-3-3',
    passingScore: 60,
    questions: [
      {
        id: 'ch10acb1',
        prompt: 'An AC source produces 120V peak. What is the RMS voltage?',
        choices: [
          { id: 'ch10acb1-a', label: 'About 84.9V — V_rms = V_peak / √2', isCorrect: true, explanation: 'Correct. For a sinusoidal waveform, V_rms = V_peak / √2 ≈ V_peak / 1.414. 120 / 1.414 ≈ 84.9V. RMS voltage is the equivalent DC voltage that delivers the same average power.' },
          { id: 'ch10acb1-b', label: '120V — peak and RMS voltages are equal for AC signals', isCorrect: false, explanation: 'Peak and RMS voltages are not equal. RMS is always less than peak for a sinusoidal waveform. V_rms = V_peak / √2 ≈ 0.707 × V_peak. For 120V peak: V_rms ≈ 84.9V.' },
          { id: 'ch10acb1-c', label: '60V — RMS is half of peak voltage', isCorrect: false, explanation: 'RMS is not half of peak. For a sinusoidal signal, V_rms = V_peak / √2 ≈ 0.707 × V_peak. Half of peak would be 60V, but the correct divisor is √2 ≈ 1.414, not 2.' },
        ],
      },
      {
        id: 'ch10acb2',
        prompt: 'What does a DC-AC converter (inverter) do in a circuit?',
        choices: [
          { id: 'ch10acb2-a', label: 'It converts AC current into DC current by blocking one half of the AC cycle', isCorrect: false, explanation: 'Converting AC to DC is the role of a DC-AC converter run in the AC-to-DC direction, which is called a rectifier or AC-DC converter. A DC-AC converter (inverter) works in the opposite direction: it takes DC input and produces AC output.' },
          { id: 'ch10acb2-b', label: 'It converts DC input into a sinusoidal AC output — enabling DC sources to drive AC loads or feed into AC distribution systems', isCorrect: true, explanation: 'Correct. A DC-AC converter (inverter) takes constant DC input (such as from a battery or solar panel) and produces a sinusoidal AC output. This is used in solar inverters, UPS systems, and variable-frequency drives.' },
          { id: 'ch10acb2-c', label: 'It stores DC energy and releases it as AC at a higher frequency', isCorrect: false, explanation: 'DC-AC converters do not store energy in the way a capacitor does — they actively switch the DC input to create an alternating output. While some converters include energy storage for smoothing, the defining function is DC-to-AC waveform conversion.' },
        ],
      },
      {
        id: 'ch10acb3',
        prompt: 'What is the key difference between analyzing a resistive AC circuit and analyzing a capacitive AC circuit?',
        choices: [
          { id: 'ch10acb3-a', label: 'There is no difference — Ohm\'s Law applies identically to both', isCorrect: false, explanation: 'Ohm\'s Law (V=IR) applies to resistors, but capacitors in AC circuits have reactance (X_C = 1/(2πfC)) that depends on frequency. At DC (f=0), a capacitor blocks completely. At AC, it passes current with a frequency-dependent opposition. This is fundamentally different from a resistor.' },
          { id: 'ch10acb3-b', label: 'A capacitor\'s opposition to AC current (reactance) depends on frequency — higher frequency means lower reactance — while a resistor\'s opposition is constant regardless of frequency', isCorrect: true, explanation: 'Correct. Capacitive reactance X_C = 1/(2πfC) decreases as frequency increases. At high frequencies, a capacitor passes AC readily; at low frequencies or DC, it blocks. A resistor has constant resistance regardless of frequency. This frequency dependence is the key distinction.' },
          { id: 'ch10acb3-c', label: 'A resistive AC circuit requires RMS voltage; a capacitive AC circuit uses peak voltage exclusively', isCorrect: false, explanation: 'Both circuit types use RMS voltage for power calculations. The distinction is not which voltage representation is used but that capacitors introduce frequency-dependent reactance while resistors do not.' },
        ],
      },
    ],
  },
  {
    id: 'quiz-ch10-active-capstone-basics',
    title: 'Active Capstone Basics',
    unlockedBy: 'lesson-ch10-3-4',
    passingScore: 60,
    questions: [
      {
        id: 'ch10acap1',
        prompt: 'A diode is connected in a circuit but no current flows even with a closed switch and a functional battery. What is the most likely cause?',
        choices: [
          { id: 'ch10acap1-a', label: 'The battery voltage is too low to overcome the diode\'s threshold', isCorrect: false, explanation: 'In the simplified model used throughout this course, diodes are treated as ideal — they either conduct (forward-biased) or block (reverse-biased) regardless of a threshold voltage. The more likely cause of complete current blockage is reversed orientation (reverse bias), not an insufficient voltage.' },
          { id: 'ch10acap1-b', label: 'The diode is reverse-biased — it is oriented so the cathode is at higher potential than the anode, blocking all current', isCorrect: true, explanation: 'Correct. A reverse-biased diode blocks current completely. If the diode\'s cathode is connected toward the positive battery terminal and the anode toward the negative terminal, the diode is reverse-biased and no current flows. The fix is to reverse the diode orientation.' },
          { id: 'ch10acap1-c', label: 'The diode cannot work in series with a resistor — it requires a parallel configuration', isCorrect: false, explanation: 'Diodes function correctly in series configurations — series is in fact the most common way to include a diode in a current path. The circuit topology is not the issue. The cause of no current through a correctly built series diode circuit is reverse-bias orientation.' },
        ],
      },
      {
        id: 'ch10acap2',
        prompt: 'A transistor in a circuit has its control input set to HIGH. What state is the transistor in and what does this mean for the current path?',
        choices: [
          { id: 'ch10acap2-a', label: 'The transistor is disabled — control HIGH causes it to block current', isCorrect: false, explanation: 'In the simplified model, a HIGH control input enables the transistor — it conducts and allows current to flow through it. A LOW control input disables the transistor and blocks current. HIGH → conducting (enabled), LOW → blocking (disabled).' },
          { id: 'ch10acap2-b', label: 'The transistor is enabled — control HIGH causes it to conduct, completing the current path', isCorrect: true, explanation: 'Correct. In the simplified transistor model, HIGH control input → transistor conducts → current path through the transistor is complete. LOW control input → transistor blocks → current path is broken. This is the fundamental switching behavior of a transistor.' },
          { id: 'ch10acap2-c', label: 'The transistor state depends on the voltage, not the control input state', isCorrect: false, explanation: 'In the simplified model used throughout this course, the transistor state is determined entirely by the control input state (HIGH or LOW). HIGH → enabled/conducting. LOW → disabled/blocking. Voltage magnitudes are abstracted away.' },
        ],
      },
      {
        id: 'ch10acap3',
        prompt: 'Why is a logic gate considered an active component rather than a passive component?',
        choices: [
          { id: 'ch10acap3-a', label: 'Logic gates consume more power than passive components', isCorrect: false, explanation: 'Power consumption is not the defining distinction between active and passive components. The distinction is whether the component can control or switch current based on an input signal. Logic gates implement state-dependent output rules, which is active behavior.' },
          { id: 'ch10acap3-b', label: 'A logic gate\'s output state is determined by its input state — it implements a switching/control rule (truth table) rather than simply passing or opposing current', isCorrect: true, explanation: 'Correct. Passive components (resistors, capacitors, inductors) modify current or voltage by fixed properties. Active components (diodes, transistors, gates) have state-dependent behavior: their output is controlled by an input condition. A logic gate\'s output is determined by applying its truth table to its inputs — that is active, state-controlled behavior.' },
          { id: 'ch10acap3-c', label: 'Logic gates are passive because they do not have moving parts', isCorrect: false, explanation: 'Having no moving parts does not make a component passive. Capacitors and inductors also have no moving parts but are classified as passive reactive components. The active/passive distinction is based on state-dependent switching behavior, not physical construction.' },
        ],
      },
    ],
  },
  {
    id: 'quiz-ch10-cross-domain-basics',
    title: 'Cross-Domain Basics',
    unlockedBy: 'lesson-ch10-4-1',
    passingScore: 60,
    questions: [
      {
        id: 'ch10cdb1',
        prompt: 'A circuit with an AC source and a diode bridge shows output only during the positive half-cycle. Which two domains are interacting to produce this behavior?',
        choices: [
          { id: 'ch10cdb1-a', label: 'DC and Transient — the capacitor smoothing the half-wave signal creates a time-dependent response', isCorrect: false, explanation: 'This circuit does not contain a capacitor in the described configuration. The two interacting domains are AC (sinusoidal source producing positive and negative half-cycles) and Active (diodes blocking the negative half-cycle due to reverse bias). DC and Transient are not the primary domains here.' },
          { id: 'ch10cdb1-b', label: 'AC and Active — the AC source produces alternating half-cycles; the diode\'s active behavior (forward/reverse bias) blocks one of them', isCorrect: true, explanation: 'Correct. The AC source (AC domain) alternates polarity each half-cycle. The diode (Active domain) conducts during forward bias (positive half) and blocks during reverse bias (negative half). The combined behavior — output only on positive half-cycles — is a cross-domain AC + Active interaction.' },
          { id: 'ch10cdb1-c', label: 'Transient and Logic — the switching between half-cycles is a time-dependent state-change event', isCorrect: false, explanation: 'Half-cycle switching is an AC phenomenon, not a transient RC/RL phenomenon. There are no logic gates in this circuit. The interaction is between AC (sinusoidal source) and Active (diode bias direction), not Transient and Logic.' },
        ],
      },
      {
        id: 'ch10cdb2',
        prompt: 'When solving a circuit that spans two domains, what is the correct analysis order?',
        choices: [
          { id: 'ch10cdb2-a', label: 'Always solve the passive (resistive) part first, then the active part', isCorrect: false, explanation: 'The correct order is not passive-before-active universally. The recommended sequence is: classify active components first (check diode bias, transistor state), then identify source type (DC vs AC), then apply time-domain analysis if reactive components (C, L) are present. Active component state determines whether certain paths even exist.' },
          { id: 'ch10cdb2-b', label: 'Classify active component states first (diode bias, transistor on/off), then identify source type, then apply time-domain analysis if reactive components are present', isCorrect: true, explanation: 'Correct. This is the recommended cross-domain analysis sequence. Active components determine which current paths exist — a reverse-biased diode removes an entire branch from the circuit. Once the active states are resolved, the source type determines whether AC or DC analysis applies. Reactive components (C, L) are considered last for time-domain effects.' },
          { id: 'ch10cdb2-c', label: 'Solve all domains simultaneously using a single combined equation', isCorrect: false, explanation: 'Cross-domain analysis does not have a single unified equation spanning all domains. Each domain has its own analysis framework. The correct approach is sequential: resolve active component states, then apply source-type analysis, then add time-domain effects if reactive components are present.' },
        ],
      },
      {
        id: 'ch10cdb3',
        prompt: 'A transistor circuit with a capacitor shows different behavior when the control input is HIGH versus LOW. Why is this a cross-domain problem?',
        choices: [
          { id: 'ch10cdb3-a', label: 'It is not cross-domain — transistors and capacitors are both electronic components so they belong to the same domain', isCorrect: false, explanation: 'Component category ("electronic") does not determine domain membership. Domain membership is determined by the type of analysis required. Transistors require active-domain analysis (control input state). Capacitors require transient-domain analysis (RC time constants). Using both in one circuit creates a cross-domain problem.' },
          { id: 'ch10cdb3-b', label: 'The transistor (Active domain) controls whether the capacitor (Transient domain) can charge or discharge — the active state determines whether the transient behavior even occurs', isCorrect: true, explanation: 'Correct. This is an Active + Transient cross-domain problem. When the transistor is enabled (control HIGH), the current path allows the capacitor to charge. When the transistor is disabled (control LOW), the path is broken and no charging occurs. The active state gates the transient behavior.' },
          { id: 'ch10cdb3-c', label: 'Cross-domain problems only occur when AC sources are involved — DC circuits with transistors and capacitors are single-domain problems', isCorrect: false, explanation: 'Cross-domain problems occur whenever components from different analysis domains interact, regardless of whether an AC source is present. A transistor (Active domain) gating a capacitor charging circuit (Transient domain) is a cross-domain problem even with a DC source.' },
        ],
      },
    ],
  },
  {
    id: 'quiz-ch10-multi-stage-basics',
    title: 'Multi-Stage System Basics',
    unlockedBy: 'lesson-ch10-4-2',
    passingScore: 60,
    questions: [
      {
        id: 'ch10msb1',
        prompt: 'A three-stage system (battery → transistor switch → bulb) has a fault. Testing shows the battery reads 9V. The transistor control input is HIGH. But the bulb does not light. Which stage contains the fault?',
        choices: [
          { id: 'ch10msb1-a', label: 'Stage 1 (battery) — the battery may have insufficient current capacity despite correct voltage', isCorrect: false, explanation: 'Stage 1 tested at 9V — it passes the voltage test. While current capacity can be a concern in real circuits, the problem states the battery reads correct voltage. With Stage 1 passing and Stage 2 (transistor) apparently enabled (control HIGH), the fault is most likely in Stage 3 or in the connection between stages.' },
          { id: 'ch10msb1-b', label: 'Stage 3 (bulb) or the connection to it — Stage 1 tested OK and Stage 2 control input is HIGH, so the path through Stage 2 should be complete; the remaining location is Stage 3', isCorrect: true, explanation: 'Correct. Stage 1 passes (9V present). Stage 2 has its control input HIGH, meaning the transistor should be conducting. By elimination, the fault is in Stage 3 (bulb may be open-circuited, filament broken) or in the wiring between Stage 2 and Stage 3.' },
          { id: 'ch10msb1-c', label: 'Stage 2 (transistor) — the control input is HIGH but the transistor itself may be defective', isCorrect: false, explanation: 'While a defective transistor is possible, the problem has already isolated Stage 1 and noted that Stage 2\'s control input is correct. Stage isolation requires testing more directly before concluding Stage 2 is at fault. The standard elimination approach points to Stage 3 as the next location to test.' },
        ],
      },
      {
        id: 'ch10msb2',
        prompt: 'Why is stage isolation more efficient than testing every component individually in a multi-stage system?',
        choices: [
          { id: 'ch10msb2-a', label: 'Stage isolation tests fewer components by narrowing to the fault-containing stage before testing individual components within it', isCorrect: true, explanation: 'Correct. In a 10-component multi-stage system, testing each component individually requires up to 10 tests. Stage isolation first identifies which of three stages contains the fault (3 tests), then tests only the components within that stage (3-4 tests). This staged approach reduces worst-case testing effort significantly.' },
          { id: 'ch10msb2-b', label: 'Stage isolation is always faster because it only requires one test per stage', isCorrect: false, explanation: 'Stage isolation may require more than one test per stage to fully characterize it. The efficiency comes from narrowing the search space — ruling out entire passing stages before diving into individual component tests. The total number of tests depends on which stage contains the fault and how many components it has.' },
          { id: 'ch10msb2-c', label: 'Stage isolation is not actually more efficient — it is just a different organizational approach with the same number of tests', isCorrect: false, explanation: 'Stage isolation is more efficient because it eliminates passing stages from the search space. If Stage 1 and Stage 3 each pass their stage-level tests, all components in those stages are implicitly cleared without individual testing. This is a genuine reduction in effort, not just a reorganization.' },
        ],
      },
      {
        id: 'ch10msb3',
        prompt: 'In a multi-stage system, a fault in Stage 2 causes Stage 3 to show a failure symptom. What is the correct diagnosis?',
        choices: [
          { id: 'ch10msb3-a', label: 'Stage 3 is the fault location because the symptom appears there', isCorrect: false, explanation: 'Symptoms appear at the first downstream stage affected by the fault — they are not reliable indicators of fault location. A Stage 2 fault blocks the signal before it reaches Stage 3, causing Stage 3 to show the symptom even though Stage 3 is functioning correctly.' },
          { id: 'ch10msb3-b', label: 'Stage 2 is the fault location — downstream stages show the symptom of upstream faults when the fault blocks the signal from reaching those stages', isCorrect: true, explanation: 'Correct. In a series signal chain, an upstream fault (Stage 2) starves all downstream stages (Stage 3) of input. Stage 3 shows a failure symptom not because Stage 3 is broken, but because it receives no valid input. Always trace symptoms back to the earliest stage that fails its test.' },
          { id: 'ch10msb3-c', label: 'Both Stage 2 and Stage 3 are fault locations — a fault in Stage 2 always damages Stage 3', isCorrect: false, explanation: 'A Stage 2 fault does not damage Stage 3. Stage 3 is functioning correctly but shows a failure symptom because it receives no input from the broken Stage 2. Diagnosing and fixing Stage 2 alone will restore Stage 3\'s correct output without any Stage 3 repair.' },
        ],
      },
    ],
  },
  {
    id: 'quiz-ch10-final-mastery-review',
    title: 'Final Mastery Review',
    unlockedBy: 'lesson-ch10-5-1',
    passingScore: 60,
    questions: [
      {
        id: 'ch10fmr1',
        prompt: 'A series circuit has a 9V battery, a 100Ω resistor, a closed switch, and a reverse-biased diode. What current flows in the circuit?',
        choices: [
          { id: 'ch10fmr1-a', label: '90mA — calculated using Ohm\'s Law: I = V/R = 9/100', isCorrect: false, explanation: 'Ohm\'s Law gives the current only if the path is complete. A reverse-biased diode is an open circuit — it blocks all current regardless of the battery voltage or resistor value. With the diode blocking, I = 0, not 90mA.' },
          { id: 'ch10fmr1-b', label: '0A — the reverse-biased diode blocks all current regardless of the other components', isCorrect: true, explanation: 'Correct. A reverse-biased diode acts as an open circuit. In a series circuit, an open circuit in any element stops current flow throughout the entire circuit. Despite the functional battery, correct resistor, and closed switch, the reverse-biased diode prevents any current from flowing. I = 0A.' },
          { id: 'ch10fmr1-c', label: '45mA — the diode halves the current because it only passes one half-cycle', isCorrect: false, explanation: 'Half-cycle blocking applies to AC circuits where the diode alternates between forward and reverse bias. In this DC circuit, the diode is permanently reverse-biased — it does not pass any current at all, not half. I = 0A.' },
        ],
      },
      {
        id: 'ch10fmr2',
        prompt: 'A symptom of "no current flows" is observed in each of four circuits: (A) series resistors with an open wire, (B) RC circuit with uncharged capacitor at t=0, (C) diode circuit with reversed diode, (D) transistor circuit with disabled control. Which circuit requires active-domain diagnosis?',
        choices: [
          { id: 'ch10fmr2-a', label: 'Circuit A — open wire faults require active-domain tracing to locate', isCorrect: false, explanation: 'An open wire in a resistive circuit is a DC topology fault — it is diagnosed by continuity checking (DC domain). No active component analysis is needed. Active-domain diagnosis applies to circuits C and D which contain diodes and transistors.' },
          { id: 'ch10fmr2-b', label: 'Circuits C and D — the diode\'s bias state (C) and the transistor\'s control state (D) are active-domain properties that require active-domain diagnosis', isCorrect: true, explanation: 'Correct. Circuit C (reversed diode) requires checking the diode orientation relative to the source polarity — an active-domain analysis. Circuit D (disabled transistor) requires checking the transistor control input state — also an active-domain analysis. Circuits A and B are DC topology and transient domain problems respectively.' },
          { id: 'ch10fmr2-c', label: 'Circuit B — the uncharged capacitor at t=0 is in an active transitional state', isCorrect: false, explanation: 'An uncharged capacitor at t=0 is a transient-domain condition, not an active-domain one. Active domain refers specifically to the bias state of diodes and the control state of transistors. The capacitor at t=0 is at V_C=0 — that is an initial condition for transient analysis, not an active component diagnosis.' },
        ],
      },
      {
        id: 'ch10fmr3',
        prompt: 'Which statement best summarizes the diagnostic strategy that applies across all ten chapters of this curriculum?',
        choices: [
          { id: 'ch10fmr3-a', label: 'Always apply Ohm\'s Law first — it is the foundational formula that governs all circuit behavior', isCorrect: false, explanation: 'Ohm\'s Law applies only in the DC (steady-state resistive) domain. Applying it to capacitive, active, or logic circuits leads to incorrect conclusions. The correct first step is domain classification, not formula application.' },
          { id: 'ch10fmr3-b', label: 'Classify the domain from the component types and source, apply the matching analysis framework, gather evidence component by component, and identify the first failing element in the signal chain', isCorrect: true, explanation: 'Correct. This four-step diagnostic strategy is the common thread across all ten chapters: (1) domain classification from components + source, (2) applying the correct domain\'s analysis framework, (3) evidence-based component-by-component isolation, and (4) identifying the fault at the first element that fails its domain-appropriate test.' },
          { id: 'ch10fmr3-c', label: 'Replace components one at a time starting from the most expensive until the circuit works', isCorrect: false, explanation: 'Component replacement without diagnosis is trial-and-error, not systematic fault isolation. The curriculum teaches evidence-based analysis: classify the domain, apply the correct framework, gather evidence, and identify the fault before making any changes.' },
        ],
      },
    ],
  },
];

export default quizzes;
