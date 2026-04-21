import type { QuizConfig } from '../../types/quiz.ts';

const quizzes: QuizConfig[] = [
  {
    id: 'quiz-ch9-input-output-state-basics',
    title: 'Input/Output State Basics',
    unlockedBy: 'lesson-ch9-1-1',
    passingScore: 60,
    questions: [
      {
        id: 'ch9io1',
        prompt: 'In the simplified digital model, what does "HIGH" mean for an input?',
        choices: [
          { id: 'ch9io1-a', label: 'The input voltage exceeds 5V', isCorrect: false, explanation: 'HIGH is a state label, not a specific voltage threshold. It means the input condition is active, not that the voltage is above a particular value.' },
          { id: 'ch9io1-b', label: 'The input condition is active or met — the controlling signal is present', isCorrect: true, explanation: 'Correct. HIGH means the condition is met: the controlling signal is present and the input is in its active state.' },
          { id: 'ch9io1-c', label: 'The input is connected to the positive terminal of a battery', isCorrect: false, explanation: 'HIGH is about state, not physical connection location. It describes whether the input condition is active, not which terminal it touches.' },
        ],
      },
      {
        id: 'ch9io2',
        prompt: 'A transistor circuit has its control input LOW. What is the output state?',
        choices: [
          { id: 'ch9io2-a', label: 'HIGH — a LOW input causes the transistor to conduct more strongly', isCorrect: false, explanation: 'A LOW control input disables the transistor, blocking the current path. The output is LOW (inactive), not HIGH.' },
          { id: 'ch9io2-b', label: 'LOW — the transistor blocks the path when the control input is LOW', isCorrect: true, explanation: 'Correct. A LOW input means the control condition is not met. The transistor blocks the current path and the output is LOW (inactive).' },
          { id: 'ch9io2-c', label: 'Indeterminate — the transistor state cannot be determined from input state alone', isCorrect: false, explanation: 'In the simplified model, the transistor state follows directly from the control input state. LOW input → transistor blocks → output LOW.' },
        ],
      },
      {
        id: 'ch9io3',
        prompt: 'How does the digital state language (HIGH/LOW) differ from describing raw voltage values?',
        choices: [
          { id: 'ch9io3-a', label: 'State language is less precise — it provides less information than voltage values', isCorrect: false, explanation: 'State language is not less precise for the purpose of logic reasoning — it abstracts away voltage details to focus on whether conditions are met. For logic design, it is exactly the right level of description.' },
          { id: 'ch9io3-b', label: 'State language describes whether conditions are met rather than specific voltage magnitudes — it enables logical reasoning about circuit behavior', isCorrect: true, explanation: 'Correct. HIGH and LOW describe whether a condition is active, not a voltage number. This abstraction allows reasoning about logic behavior independently of the specific voltages used.' },
          { id: 'ch9io3-c', label: 'State language only applies to digital circuits with transistors — it cannot describe analog circuits', isCorrect: false, explanation: 'While state language is the foundation of digital logic, the concept of describing conditions as active or inactive can be applied to any switching-type circuit, including transistor circuits from Chapter 8.' },
        ],
      },
    ],
  },
  {
    id: 'quiz-ch9-single-input-control-basics',
    title: 'Single-Input Control Basics',
    unlockedBy: 'lesson-ch9-1-2',
    passingScore: 60,
    questions: [
      {
        id: 'ch9si1',
        prompt: 'A single transistor switch has one input and one output. How does this map to digital state language?',
        choices: [
          { id: 'ch9si1-a', label: 'The transistor output state depends on the battery voltage, not the input state', isCorrect: false, explanation: 'The battery provides energy, but the transistor\'s output state is determined by the control input state. Input HIGH → output HIGH; input LOW → output LOW.' },
          { id: 'ch9si1-b', label: 'Input HIGH means the transistor conducts and output is HIGH; input LOW means the transistor blocks and output is LOW', isCorrect: true, explanation: 'Correct. This is the direct input-to-output state mapping for a single transistor switch: input state determines output state.' },
          { id: 'ch9si1-c', label: 'The transistor always inverts the input — input HIGH produces output LOW', isCorrect: false, explanation: 'A basic transistor switch in the simplified model conducts when the input is HIGH (output HIGH) and blocks when the input is LOW (output LOW). Inversion is a NOT gate behavior, not a basic transistor switch.' },
        ],
      },
      {
        id: 'ch9si2',
        prompt: 'Two switches connected in series require BOTH to be closed to allow current. What logic gate does this resemble?',
        choices: [
          { id: 'ch9si2-a', label: 'OR gate — at least one must be closed', isCorrect: false, explanation: 'OR requires any one input to be HIGH. Series switches require ALL to be closed — only current flows when both are closed, which matches AND, not OR.' },
          { id: 'ch9si2-b', label: 'AND gate — all must be closed for current to flow', isCorrect: true, explanation: 'Correct. Series switches implement AND-like logic: both (all) must be closed (HIGH) for the output to be active (HIGH). If any is open (LOW), no current flows (output LOW).' },
          { id: 'ch9si2-c', label: 'NOT gate — one switch inverts the other', isCorrect: false, explanation: 'NOT inverts a single signal. Series switches do not invert anything — they implement an "all must be active" condition, which is AND behavior.' },
        ],
      },
      {
        id: 'ch9si3',
        prompt: 'Two switches connected in parallel allow current when EITHER is closed. What logic gate does this resemble?',
        choices: [
          { id: 'ch9si3-a', label: 'AND gate — both must be closed', isCorrect: false, explanation: 'AND requires all inputs HIGH. Parallel switches let current flow when any one is closed, which is OR behavior, not AND.' },
          { id: 'ch9si3-b', label: 'OR gate — any one being closed allows current to flow', isCorrect: true, explanation: 'Correct. Parallel switches implement OR-like logic: current flows when any one switch is closed (HIGH). Only when all are open (LOW) does no current flow.' },
          { id: 'ch9si3-c', label: 'XOR gate — exactly one must be closed', isCorrect: false, explanation: 'XOR is HIGH when exactly one input is HIGH (inputs differ). Parallel switches still allow current when both are closed — they do not enforce the "exactly one" restriction.' },
        ],
      },
    ],
  },
  {
    id: 'quiz-ch9-not-gate-basics',
    title: 'NOT Gate Basics',
    unlockedBy: 'lesson-ch9-2-1',
    passingScore: 60,
    questions: [
      {
        id: 'ch9ng1',
        prompt: 'What does a NOT gate do to its input?',
        choices: [
          { id: 'ch9ng1-a', label: 'It amplifies the input — HIGH becomes a stronger HIGH', isCorrect: false, explanation: 'NOT does not amplify. It inverts: HIGH becomes LOW, and LOW becomes HIGH.' },
          { id: 'ch9ng1-b', label: 'It inverts the input — HIGH becomes LOW and LOW becomes HIGH', isCorrect: true, explanation: 'Correct. The NOT gate is an inverter. It produces the logical opposite of its input at all times.' },
          { id: 'ch9ng1-c', label: 'It delays the input — the output is the same as the input but arrives later', isCorrect: false, explanation: 'NOT does not delay — it inverts. The output is the logical opposite of the input, not a delayed copy.' },
        ],
      },
      {
        id: 'ch9ng2',
        prompt: 'How many rows are in the truth table for a NOT gate?',
        choices: [
          { id: 'ch9ng2-a', label: 'Four rows — there are four possible input combinations', isCorrect: false, explanation: 'Four rows applies to two-input gates (2² = 4 combinations). NOT has only one input, so there are only two possible input states: HIGH and LOW.' },
          { id: 'ch9ng2-b', label: 'Two rows — the single input can only be HIGH or LOW', isCorrect: true, explanation: 'Correct. With one input that can be either HIGH or LOW, the NOT gate truth table has exactly two rows: one for input HIGH (output LOW) and one for input LOW (output HIGH).' },
          { id: 'ch9ng2-c', label: 'Eight rows — one row for each possible voltage level', isCorrect: false, explanation: 'Truth tables use simplified HIGH/LOW states, not voltage levels. With one binary input, there are only two rows.' },
        ],
      },
      {
        id: 'ch9ng3',
        prompt: 'A NOT gate receives input LOW. What is its output?',
        choices: [
          { id: 'ch9ng3-a', label: 'LOW — the output matches the input', isCorrect: false, explanation: 'NOT inverts its input. If the input is LOW, the output is HIGH — the opposite of the input.' },
          { id: 'ch9ng3-b', label: 'HIGH — the NOT gate inverts LOW to HIGH', isCorrect: true, explanation: 'Correct. NOT inverts its input. Input LOW → output HIGH.' },
          { id: 'ch9ng3-c', label: 'Indeterminate — the output cannot be determined without knowing the voltage', isCorrect: false, explanation: 'In the simplified model, the NOT gate output is fully determined by the input state. LOW → HIGH always.' },
        ],
      },
    ],
  },
  {
    id: 'quiz-ch9-and-gate-basics',
    title: 'AND Gate Basics',
    unlockedBy: 'lesson-ch9-2-2',
    passingScore: 60,
    questions: [
      {
        id: 'ch9ag1',
        prompt: 'What is the output of an AND gate when one input is HIGH and the other is LOW?',
        choices: [
          { id: 'ch9ag1-a', label: 'HIGH — at least one input is HIGH', isCorrect: false, explanation: '"At least one" is the OR rule. AND requires ALL inputs to be HIGH. With one LOW input, the AND output is LOW.' },
          { id: 'ch9ag1-b', label: 'LOW — AND requires all inputs to be HIGH for a HIGH output', isCorrect: true, explanation: 'Correct. AND outputs HIGH only when all inputs are HIGH. If any input is LOW, the output is LOW.' },
          { id: 'ch9ag1-c', label: 'HIGH — the HIGH input dominates', isCorrect: false, explanation: 'No single input dominates in an AND gate. ALL inputs must be HIGH for the output to be HIGH. One LOW input produces LOW output.' },
        ],
      },
      {
        id: 'ch9ag2',
        prompt: 'How many input combinations produce a HIGH output for a two-input AND gate?',
        choices: [
          { id: 'ch9ag2-a', label: 'Three — (HIGH, HIGH), (HIGH, LOW), and (LOW, HIGH) all produce HIGH', isCorrect: false, explanation: 'That describes OR behavior. AND is much more selective: only (HIGH, HIGH) produces HIGH. All other combinations produce LOW.' },
          { id: 'ch9ag2-b', label: 'One — only (HIGH, HIGH) produces HIGH', isCorrect: true, explanation: 'Correct. A two-input AND gate has four possible input combinations, and only one — both inputs HIGH — produces a HIGH output.' },
          { id: 'ch9ag2-c', label: 'Two — (HIGH, HIGH) and (LOW, LOW) both produce HIGH', isCorrect: false, explanation: '(LOW, LOW) produces LOW for AND. Only (HIGH, HIGH) produces HIGH. (LOW, LOW) producing HIGH would describe NOR behavior.' },
        ],
      },
      {
        id: 'ch9ag3',
        prompt: 'Which real-world scenario best matches AND gate logic?',
        choices: [
          { id: 'ch9ag3-a', label: 'A door that opens when either keycard A or keycard B is used', isCorrect: false, explanation: '"Either A or B" is OR logic. AND requires both conditions to be true simultaneously.' },
          { id: 'ch9ag3-b', label: 'A safe that opens only when both the correct code AND the correct fingerprint are provided', isCorrect: true, explanation: 'Correct. Both conditions must be simultaneously true — correct code AND correct fingerprint. This is AND logic: all inputs must be HIGH for the output to be HIGH.' },
          { id: 'ch9ag3-c', label: 'A light that turns on when either switch on the wall is flipped', isCorrect: false, explanation: 'A light controlled by either of two switches is OR logic. AND requires all inputs to be active, not just any one.' },
        ],
      },
    ],
  },
  {
    id: 'quiz-ch9-or-gate-basics',
    title: 'OR Gate Basics',
    unlockedBy: 'lesson-ch9-2-3',
    passingScore: 60,
    questions: [
      {
        id: 'ch9or1',
        prompt: 'When does a two-input OR gate produce a LOW output?',
        choices: [
          { id: 'ch9or1-a', label: 'When both inputs are HIGH', isCorrect: false, explanation: 'OR produces HIGH when both inputs are HIGH (at least one is HIGH). OR produces LOW only when all inputs are LOW.' },
          { id: 'ch9or1-b', label: 'Only when both inputs are LOW', isCorrect: true, explanation: 'Correct. OR is LOW only when all inputs are LOW. Any other combination — at least one HIGH — produces a HIGH output.' },
          { id: 'ch9or1-c', label: 'When exactly one input is HIGH', isCorrect: false, explanation: 'When exactly one input is HIGH, OR outputs HIGH (at least one is HIGH). OR is LOW only when all inputs are LOW.' },
        ],
      },
      {
        id: 'ch9or2',
        prompt: 'How many input combinations produce a HIGH output for a two-input OR gate?',
        choices: [
          { id: 'ch9or2-a', label: 'One — only (HIGH, HIGH) produces HIGH', isCorrect: false, explanation: 'That is AND behavior. OR is more permissive: three out of four combinations produce HIGH — (HIGH, LOW), (LOW, HIGH), and (HIGH, HIGH).' },
          { id: 'ch9or2-b', label: 'Three — (HIGH, LOW), (LOW, HIGH), and (HIGH, HIGH) all produce HIGH', isCorrect: true, explanation: 'Correct. A two-input OR gate has four possible input combinations, and three of them — any combination where at least one input is HIGH — produce a HIGH output.' },
          { id: 'ch9or2-c', label: 'Four — all input combinations produce HIGH', isCorrect: false, explanation: 'Not all four: (LOW, LOW) produces LOW for OR. Three out of four combinations produce HIGH.' },
        ],
      },
      {
        id: 'ch9or3',
        prompt: 'A security system triggers an alert when Sensor A OR Sensor B detects movement. Which gate implements this rule?',
        choices: [
          { id: 'ch9or3-a', label: 'AND gate — both sensors must detect movement to trigger an alert', isCorrect: false, explanation: 'AND requires all inputs active. The rule only needs one sensor to detect movement, which is OR logic.' },
          { id: 'ch9or3-b', label: 'OR gate — at least one sensor detecting movement triggers the alert', isCorrect: true, explanation: 'Correct. OR outputs HIGH when at least one input is HIGH. The alert triggers when either sensor detects movement — that is OR logic.' },
          { id: 'ch9or3-c', label: 'NOT gate — the gate inverts the sensor signal to produce an alert', isCorrect: false, explanation: 'NOT is a single-input inverter. A two-sensor alert system needs a two-input gate, and "either sensor" maps to OR, not NOT.' },
        ],
      },
    ],
  },
  {
    id: 'quiz-ch9-truth-table-basics',
    title: 'Truth-Table Basics',
    unlockedBy: 'lesson-ch9-2-4',
    passingScore: 60,
    questions: [
      {
        id: 'ch9tt1',
        prompt: 'How many rows does a truth table for a two-input gate have?',
        choices: [
          { id: 'ch9tt1-a', label: 'Two rows — one for HIGH input and one for LOW input', isCorrect: false, explanation: 'Two rows applies to a one-input gate. A two-input gate has two binary inputs, giving 2² = 4 possible input combinations.' },
          { id: 'ch9tt1-b', label: 'Four rows — one for each possible combination of two binary inputs', isCorrect: true, explanation: 'Correct. With two inputs, each independently HIGH or LOW, there are 2² = 4 combinations: (LOW, LOW), (LOW, HIGH), (HIGH, LOW), and (HIGH, HIGH).' },
          { id: 'ch9tt1-c', label: 'Eight rows — one for each possible voltage level combination', isCorrect: false, explanation: 'Truth tables use binary HIGH/LOW states, not voltage levels. Two binary inputs produce 4 rows, not 8.' },
        ],
      },
      {
        id: 'ch9tt2',
        prompt: 'A truth table row shows inputs A=HIGH, B=LOW with output LOW. Which gate could this row belong to?',
        choices: [
          { id: 'ch9tt2-a', label: 'OR gate — OR outputs HIGH when A=HIGH even if B=LOW', isCorrect: false, explanation: 'OR outputs HIGH when at least one input is HIGH. With A=HIGH, OR would output HIGH, not LOW. This row does not match OR.' },
          { id: 'ch9tt2-b', label: 'AND gate — AND outputs LOW when any input is LOW', isCorrect: true, explanation: 'Correct. AND outputs LOW whenever any input is LOW. With B=LOW, AND outputs LOW regardless of A. This row matches AND behavior.' },
          { id: 'ch9tt2-c', label: 'NOT gate — NOT inverts A=HIGH to LOW', isCorrect: false, explanation: 'NOT is a one-input gate. A truth table with two inputs (A and B) cannot belong to a NOT gate.' },
        ],
      },
      {
        id: 'ch9tt3',
        prompt: 'What is the purpose of a truth table in logic circuit design?',
        choices: [
          { id: 'ch9tt3-a', label: 'To measure the voltage at each node in the circuit', isCorrect: false, explanation: 'Voltage measurement is done with meters. A truth table is a logical tool that maps all possible input state combinations to their corresponding output states.' },
          { id: 'ch9tt3-b', label: 'To enumerate all possible input combinations and the resulting output state for each — it completely defines a gate\'s behavior', isCorrect: true, explanation: 'Correct. A truth table systematically lists every input combination and the output it produces. Together, the rows define the gate\'s behavior completely.' },
          { id: 'ch9tt3-c', label: 'To show the physical layout of components on the circuit board', isCorrect: false, explanation: 'Physical layout is shown in circuit diagrams. A truth table is a logical abstraction showing input-to-output state mappings.' },
        ],
      },
    ],
  },
  {
    id: 'quiz-ch9-basic-gate-comparison',
    title: 'Basic Gate Comparison',
    unlockedBy: 'lesson-ch9-2-5',
    passingScore: 60,
    questions: [
      {
        id: 'ch9gc1',
        prompt: 'Both AND and OR gates receive inputs (HIGH, LOW). What output does each produce?',
        choices: [
          { id: 'ch9gc1-a', label: 'AND: HIGH. OR: LOW.', isCorrect: false, explanation: 'AND requires all inputs HIGH — with one LOW input, AND outputs LOW. OR requires any input HIGH — with one HIGH input, OR outputs HIGH. The answers are reversed here.' },
          { id: 'ch9gc1-b', label: 'AND: LOW. OR: HIGH.', isCorrect: true, explanation: 'Correct. AND outputs LOW because not all inputs are HIGH (B=LOW fails the "all" requirement). OR outputs HIGH because at least one input is HIGH (A=HIGH satisfies the "any" requirement).' },
          { id: 'ch9gc1-c', label: 'AND: HIGH. OR: HIGH.', isCorrect: false, explanation: 'AND requires ALL inputs HIGH. With one LOW input, AND outputs LOW, not HIGH.' },
        ],
      },
      {
        id: 'ch9gc2',
        prompt: 'Which gate — NOT, AND, or OR — has a truth table with only two rows?',
        choices: [
          { id: 'ch9gc2-a', label: 'AND — it has fewer input combinations', isCorrect: false, explanation: 'AND is a two-input gate with 2² = 4 rows. The gate with two rows is NOT, which has only one input.' },
          { id: 'ch9gc2-b', label: 'NOT — it has only one input, so only two possible states', isCorrect: true, explanation: 'Correct. NOT has one input that is either HIGH or LOW — giving exactly two rows in its truth table. Two-input gates have four rows.' },
          { id: 'ch9gc2-c', label: 'OR — it has fewer output states', isCorrect: false, explanation: 'OR is a two-input gate with 4 rows. The number of rows depends on the number of inputs, not the number of distinct output values.' },
        ],
      },
      {
        id: 'ch9gc3',
        prompt: 'What is the key difference between an AND gate and an OR gate when both inputs are HIGH?',
        choices: [
          { id: 'ch9gc3-a', label: 'AND outputs HIGH; OR outputs LOW when both inputs are HIGH', isCorrect: false, explanation: 'When both inputs are HIGH, AND outputs HIGH (all inputs are HIGH — AND condition met) and OR also outputs HIGH (at least one is HIGH — OR condition met). The outputs agree in this case.' },
          { id: 'ch9gc3-b', label: 'Both AND and OR output HIGH when both inputs are HIGH — the difference appears when inputs differ', isCorrect: true, explanation: 'Correct. When both inputs are HIGH, AND and OR agree (both output HIGH). Their behavior diverges when inputs differ: AND outputs LOW (not all are HIGH) while OR outputs HIGH (at least one is HIGH).' },
          { id: 'ch9gc3-c', label: 'They always produce opposite outputs regardless of inputs', isCorrect: false, explanation: 'AND and OR do not always produce opposite outputs. They agree when both inputs are HIGH (both output HIGH) and when both inputs are LOW (both output LOW).' },
        ],
      },
    ],
  },
  {
    id: 'quiz-ch9-nand-and-nor-basics',
    title: 'NAND and NOR Basics',
    unlockedBy: 'lesson-ch9-3-1',
    passingScore: 60,
    questions: [
      {
        id: 'ch9nn1',
        prompt: 'What is the output of a NAND gate when both inputs are HIGH?',
        choices: [
          { id: 'ch9nn1-a', label: 'HIGH — NAND behaves like AND when both inputs are HIGH', isCorrect: false, explanation: 'NAND is the inverted AND. AND outputs HIGH when both are HIGH, so NAND outputs LOW in that case.' },
          { id: 'ch9nn1-b', label: 'LOW — NAND inverts the AND result, and AND(HIGH, HIGH) = HIGH, so NAND(HIGH, HIGH) = LOW', isCorrect: true, explanation: 'Correct. NAND is the inversion of AND. AND(HIGH, HIGH) = HIGH, so NAND(HIGH, HIGH) = LOW.' },
          { id: 'ch9nn1-c', label: 'Indeterminate — NAND only produces a defined output when one input is LOW', isCorrect: false, explanation: 'NAND produces a defined output for every input combination. It is always the inverse of the AND result.' },
        ],
      },
      {
        id: 'ch9nn2',
        prompt: 'What is the output of a NOR gate when one input is HIGH and the other is LOW?',
        choices: [
          { id: 'ch9nn2-a', label: 'HIGH — NOR outputs HIGH when any input is HIGH', isCorrect: false, explanation: 'NOR inverts OR. OR outputs HIGH when any input is HIGH, so NOR outputs LOW in that case. NOR is HIGH only when all inputs are LOW.' },
          { id: 'ch9nn2-b', label: 'LOW — NOR inverts the OR result, and OR(HIGH, LOW) = HIGH, so NOR(HIGH, LOW) = LOW', isCorrect: true, explanation: 'Correct. NOR is the inversion of OR. OR(HIGH, LOW) = HIGH, so NOR(HIGH, LOW) = LOW.' },
          { id: 'ch9nn2-c', label: 'HIGH — NOR is the same as AND when one input is HIGH', isCorrect: false, explanation: 'NOR is the inversion of OR, not a form of AND. NOR(HIGH, LOW) = LOW, not HIGH.' },
        ],
      },
      {
        id: 'ch9nn3',
        prompt: 'When does a NOR gate produce a HIGH output?',
        choices: [
          { id: 'ch9nn3-a', label: 'When at least one input is HIGH', isCorrect: false, explanation: '"At least one HIGH" produces HIGH for OR, and therefore LOW for NOR (NOR inverts OR). NOR is HIGH only in the opposite case.' },
          { id: 'ch9nn3-b', label: 'Only when all inputs are LOW', isCorrect: true, explanation: 'Correct. NOR is the inversion of OR. OR is LOW only when all inputs are LOW, so NOR is HIGH only when all inputs are LOW.' },
          { id: 'ch9nn3-c', label: 'When exactly one input is HIGH', isCorrect: false, explanation: '"Exactly one input HIGH" is the XOR condition. NOR is HIGH only when all inputs are LOW — a stricter condition.' },
        ],
      },
    ],
  },
  {
    id: 'quiz-ch9-xor-basics',
    title: 'XOR Basics',
    unlockedBy: 'lesson-ch9-3-2',
    passingScore: 60,
    questions: [
      {
        id: 'ch9xo1',
        prompt: 'What is the output of an XOR gate when both inputs are HIGH?',
        choices: [
          { id: 'ch9xo1-a', label: 'HIGH — both inputs being HIGH satisfies the XOR condition', isCorrect: false, explanation: 'XOR is HIGH only when inputs differ. When both are HIGH, inputs are the same — XOR outputs LOW.' },
          { id: 'ch9xo1-b', label: 'LOW — XOR requires inputs to differ, and both HIGH means they are the same', isCorrect: true, explanation: 'Correct. XOR outputs LOW when inputs are the same state. Both HIGH means they are the same, so XOR outputs LOW.' },
          { id: 'ch9xo1-c', label: 'Indeterminate — XOR behavior is undefined when both inputs are the same', isCorrect: false, explanation: 'XOR behavior is fully defined for all input combinations. Same inputs → LOW. Different inputs → HIGH.' },
        ],
      },
      {
        id: 'ch9xo2',
        prompt: 'Which input combination produces HIGH output for an XOR gate?',
        choices: [
          { id: 'ch9xo2-a', label: '(LOW, LOW) — both inputs are LOW, creating the difference condition', isCorrect: false, explanation: 'Both inputs LOW means they are the same, not different. XOR outputs LOW in this case.' },
          { id: 'ch9xo2-b', label: '(HIGH, LOW) — the inputs differ, which is the XOR HIGH condition', isCorrect: true, explanation: 'Correct. XOR outputs HIGH when inputs differ. (HIGH, LOW) has different input states, so XOR outputs HIGH.' },
          { id: 'ch9xo2-c', label: '(HIGH, HIGH) — both inputs being HIGH produces the maximum output', isCorrect: false, explanation: 'Both HIGH means inputs are the same, so XOR outputs LOW. XOR is HIGH only when inputs differ.' },
        ],
      },
      {
        id: 'ch9xo3',
        prompt: 'What makes XOR useful for change-detection scenarios?',
        choices: [
          { id: 'ch9xo3-a', label: 'XOR amplifies the signal when a change occurs, making it easier to detect', isCorrect: false, explanation: 'XOR does not amplify. Its usefulness for change detection comes from its output rule: HIGH when inputs differ and LOW when they are the same.' },
          { id: 'ch9xo3-b', label: 'XOR outputs HIGH specifically when its two inputs are in different states — directly detecting when a change has created a mismatch between two conditions', isCorrect: true, explanation: 'Correct. By comparing two input states and outputting HIGH only when they differ, XOR acts as a natural "are these the same?" comparator. When a change creates a difference between conditions, XOR immediately signals it.' },
          { id: 'ch9xo3-c', label: 'XOR is the only gate that accepts more than two inputs', isCorrect: false, explanation: 'XOR is not uniquely multi-input — other gates can also be extended to multiple inputs. XOR\'s value for change detection comes from its difference-detection behavior, not input count.' },
        ],
      },
    ],
  },
  {
    id: 'quiz-ch9-gate-choice-basics',
    title: 'Gate Choice Basics',
    unlockedBy: 'lesson-ch9-4-1',
    passingScore: 60,
    questions: [
      {
        id: 'ch9gch1',
        prompt: 'A design rule says: "activate only when all three conditions are simultaneously true." Which gate implements this?',
        choices: [
          { id: 'ch9gch1-a', label: 'OR gate — it activates when any condition is true', isCorrect: false, explanation: '"Any condition true" is OR logic. The rule requires all conditions to be simultaneously true, which is AND logic.' },
          { id: 'ch9gch1-b', label: 'AND gate — it outputs HIGH only when all inputs are HIGH', isCorrect: true, explanation: 'Correct. AND requires all inputs to be HIGH for a HIGH output. "All three must be true" maps directly to AND.' },
          { id: 'ch9gch1-c', label: 'NAND gate — it activates when conditions are not all true', isCorrect: false, explanation: 'NAND is LOW when all inputs are HIGH and HIGH otherwise — the opposite of the required behavior. The rule needs AND, not NAND.' },
        ],
      },
      {
        id: 'ch9gch2',
        prompt: 'Which gate should be used when the design rule is: "block this signal unless the control is inactive"?',
        choices: [
          { id: 'ch9gch2-a', label: 'AND gate — it requires both the signal and the control to be HIGH', isCorrect: false, explanation: 'AND would require the control to be HIGH to pass the signal. The rule wants to block the signal unless the control is inactive (LOW), which is an inverted-AND relationship — NAND behavior.' },
          { id: 'ch9gch2-b', label: 'NOT gate followed by AND — NOT inverts the control, then AND gates the signal against the inverted control', isCorrect: true, explanation: 'Correct. Inverting the control first (NOT) and then requiring both the signal and inverted-control to be HIGH (AND) implements "block unless control is inactive": the path is open only when control=LOW (inverted to HIGH) AND signal=HIGH.' },
          { id: 'ch9gch2-c', label: 'OR gate — it passes the signal when either the signal or the control is HIGH', isCorrect: false, explanation: 'OR would pass the signal when either the signal or the control is active. The rule requires the signal to be blocked when the control is active, which OR does not enforce.' },
        ],
      },
      {
        id: 'ch9gch3',
        prompt: 'Two sensors report their states. An alarm should sound only when the sensors report DIFFERENT states. Which gate?',
        choices: [
          { id: 'ch9gch3-a', label: 'AND gate — both must be reporting the same HIGH state', isCorrect: false, explanation: 'AND requires all inputs HIGH — it would alarm only when both sensors are active (same HIGH state). The rule requires alarming when sensors differ.' },
          { id: 'ch9gch3-b', label: 'XOR gate — it outputs HIGH when inputs differ', isCorrect: true, explanation: 'Correct. XOR is HIGH when its inputs are in different states (one HIGH, one LOW). This directly implements the "alarm when sensors differ" rule.' },
          { id: 'ch9gch3-c', label: 'NOR gate — it outputs HIGH when all inputs are LOW', isCorrect: false, explanation: 'NOR is HIGH only when all inputs are LOW — it does not detect a difference between sensor states. XOR is the correct choice for difference detection.' },
        ],
      },
    ],
  },
  {
    id: 'quiz-ch9-multi-gate-basics',
    title: 'Multi-Gate Basics',
    unlockedBy: 'lesson-ch9-4-2',
    passingScore: 60,
    questions: [
      {
        id: 'ch9mg1',
        prompt: 'In a two-stage gate chain, what does the second gate receive as its input?',
        choices: [
          { id: 'ch9mg1-a', label: 'The same original inputs as the first gate', isCorrect: false, explanation: 'In a series chain, each stage receives the output of the previous stage. The second gate receives the output of the first gate, not the original inputs.' },
          { id: 'ch9mg1-b', label: 'The output of the first gate', isCorrect: true, explanation: 'Correct. In a gate chain, each stage transforms the signal from the previous stage. The second gate\'s input is the first gate\'s output.' },
          { id: 'ch9mg1-c', label: 'A separate external signal independent of the first gate', isCorrect: false, explanation: 'In a simple series gate chain, the stages are connected so each feeds the next. The second gate\'s input comes from the first gate\'s output.' },
        ],
      },
      {
        id: 'ch9mg2',
        prompt: 'An AND gate is followed by a NOT gate. What is the combined behavior?',
        choices: [
          { id: 'ch9mg2-a', label: 'OR behavior — the combination activates when any input is HIGH', isCorrect: false, explanation: 'AND followed by NOT is NAND behavior: LOW only when all inputs are HIGH, HIGH otherwise. OR is HIGH when any input is HIGH, which is a different rule.' },
          { id: 'ch9mg2-b', label: 'NAND behavior — LOW only when all inputs are HIGH, HIGH otherwise', isCorrect: true, explanation: 'Correct. AND produces HIGH when all inputs are HIGH; NOT inverts that to LOW. For all other input combinations, AND produces LOW, which NOT inverts to HIGH. This is the NAND truth table.' },
          { id: 'ch9mg2-c', label: 'XOR behavior — HIGH only when inputs differ', isCorrect: false, explanation: 'XOR detects difference between inputs. AND followed by NOT produces NAND behavior, not XOR behavior.' },
        ],
      },
      {
        id: 'ch9mg3',
        prompt: 'Why is gate composition useful in logic design?',
        choices: [
          { id: 'ch9mg3-a', label: 'It reduces the number of wires needed in a circuit', isCorrect: false, explanation: 'Composition does not necessarily reduce wire count. Its value is in enabling complex behavior to be built from simple, well-understood primitive gates.' },
          { id: 'ch9mg3-b', label: 'It allows complex logic behavior to be built from simple primitive gates — any compound behavior can be decomposed into a chain of primitives', isCorrect: true, explanation: 'Correct. The composability of gates means you can always build more complex behavior by chaining simpler gates. This is the foundation of digital logic design: primitives (NOT, AND, OR) compose into any behavior.' },
          { id: 'ch9mg3-c', label: 'It ensures that the circuit will always produce a HIGH output regardless of inputs', isCorrect: false, explanation: 'Composition does not guarantee HIGH output — it enables building the specific behavior defined by the design rule. The output depends on the gates chosen and the inputs applied.' },
        ],
      },
    ],
  },
  {
    id: 'quiz-ch9-small-logic-system-basics',
    title: 'Small Logic-System Basics',
    unlockedBy: 'lesson-ch9-4-3',
    passingScore: 60,
    questions: [
      {
        id: 'ch9sl1',
        prompt: 'What does "tracing inputs through a logic system" mean?',
        choices: [
          { id: 'ch9sl1-a', label: 'Measuring the voltage at each wire in the circuit with a meter', isCorrect: false, explanation: 'Tracing in logic design means applying the gate rules stage by stage in the abstract — not physically measuring voltages. You propagate the input states forward through each gate using its truth table.' },
          { id: 'ch9sl1-b', label: 'Applying each gate\'s rule to the inputs at that stage and propagating the result forward to the next stage', isCorrect: true, explanation: 'Correct. Tracing means at each stage, you apply the gate rule to the inputs arriving there and pass the output forward. This gives you the final output for any given set of inputs.' },
          { id: 'ch9sl1-c', label: 'Replacing each gate with a simpler equivalent to reduce the circuit size', isCorrect: false, explanation: 'Tracing is about understanding the signal flow, not simplifying the circuit. You are following the input states through each existing gate to find the output.' },
        ],
      },
      {
        id: 'ch9sl2',
        prompt: 'A system is supposed to output HIGH only when both inputs are HIGH, but it outputs HIGH when only one input is HIGH. What is the most likely root cause?',
        choices: [
          { id: 'ch9sl2-a', label: 'The NOT gate is inverting one of the inputs', isCorrect: false, explanation: 'If a NOT gate were inverting an input, the output behavior would shift, but the symptom described — HIGH when any input is HIGH — matches OR behavior, not NOT-modified AND.' },
          { id: 'ch9sl2-b', label: 'An OR gate was used instead of AND — OR is HIGH when any input is HIGH, which matches the observed wrong behavior', isCorrect: true, explanation: 'Correct. The symptom is exactly OR behavior: HIGH when any input is HIGH. The rule requires AND behavior: HIGH only when all inputs are HIGH. Replacing OR with AND fixes the bug.' },
          { id: 'ch9sl2-c', label: 'The gate has too many inputs — reducing to one input would fix the behavior', isCorrect: false, explanation: 'Changing the number of inputs does not fix a wrong gate type. The gate type must be corrected to match the required rule.' },
        ],
      },
      {
        id: 'ch9sl3',
        prompt: 'To expose a wrong-gate bug (OR used instead of AND), which test input is most effective?',
        choices: [
          { id: 'ch9sl3-a', label: '(LOW, LOW) — both gates output LOW for this combination', isCorrect: false, explanation: 'Both OR and AND output LOW when all inputs are LOW. This input cannot reveal the difference between them.' },
          { id: 'ch9sl3-b', label: '(HIGH, LOW) — OR outputs HIGH but AND would output LOW, revealing the difference', isCorrect: true, explanation: 'Correct. With A=HIGH and B=LOW: OR outputs HIGH (at least one is HIGH) but AND outputs LOW (not all are HIGH). This is the combination that exposes the behavioral mismatch.' },
          { id: 'ch9sl3-c', label: '(HIGH, HIGH) — both gates output HIGH for this combination', isCorrect: false, explanation: 'Both OR and AND output HIGH when all inputs are HIGH. This input cannot reveal the difference between them.' },
        ],
      },
    ],
  },
  {
    id: 'quiz-ch9-chapter-9-review-quiz',
    title: 'Chapter 9 Review Quiz',
    unlockedBy: 'lesson-ch9-5-1',
    passingScore: 60,
    questions: [
      {
        id: 'ch9rv1',
        prompt: 'Which gate outputs HIGH only when all inputs are HIGH?',
        choices: [
          { id: 'ch9rv1-a', label: 'OR — it is HIGH when any input is HIGH', isCorrect: false, explanation: 'OR is HIGH when at least one input is HIGH, not exclusively when all are HIGH. The gate that requires all inputs HIGH is AND.' },
          { id: 'ch9rv1-b', label: 'AND — it requires all inputs HIGH to produce a HIGH output', isCorrect: true, explanation: 'Correct. AND outputs HIGH only when every input is HIGH. Any LOW input causes AND to output LOW.' },
          { id: 'ch9rv1-c', label: 'XOR — it is HIGH when exactly one input is HIGH', isCorrect: false, explanation: 'XOR is HIGH when inputs differ (exactly one HIGH). "All inputs HIGH" with two inputs produces LOW from XOR, not HIGH.' },
        ],
      },
      {
        id: 'ch9rv2',
        prompt: 'A NAND gate receives inputs (LOW, HIGH). What is the output?',
        choices: [
          { id: 'ch9rv2-a', label: 'LOW — NAND is always LOW when any input is LOW', isCorrect: false, explanation: 'NAND is the inversion of AND. AND(LOW, HIGH) = LOW, so NAND(LOW, HIGH) = HIGH. NAND is LOW only when all inputs are HIGH.' },
          { id: 'ch9rv2-b', label: 'HIGH — NAND inverts AND, and AND(LOW, HIGH) = LOW, so NAND = HIGH', isCorrect: true, explanation: 'Correct. AND(LOW, HIGH) = LOW (not all inputs are HIGH). NAND inverts that result: NAND(LOW, HIGH) = HIGH.' },
          { id: 'ch9rv2-c', label: 'Indeterminate — NAND output cannot be determined when inputs differ', isCorrect: false, explanation: 'NAND behavior is fully determined for all input combinations. (LOW, HIGH) → NAND → HIGH.' },
        ],
      },
      {
        id: 'ch9rv3',
        prompt: 'A two-gate chain uses OR followed by NOT. What is the combined behavior?',
        choices: [
          { id: 'ch9rv3-a', label: 'AND behavior — the combination requires all inputs HIGH', isCorrect: false, explanation: 'OR followed by NOT is NOR behavior: HIGH only when all inputs are LOW. AND requires all inputs HIGH — a different rule entirely.' },
          { id: 'ch9rv3-b', label: 'NOR behavior — HIGH only when all inputs are LOW', isCorrect: true, explanation: 'Correct. OR is LOW only when all inputs are LOW; NOT inverts that to HIGH. For all other combinations, OR is HIGH and NOT inverts that to LOW. This matches the NOR truth table.' },
          { id: 'ch9rv3-c', label: 'XOR behavior — the combination detects when inputs differ', isCorrect: false, explanation: 'OR followed by NOT produces NOR behavior, not XOR. XOR is specifically sensitive to when inputs differ; NOR is specifically sensitive to when all inputs are LOW.' },
        ],
      },
    ],
  },
  {
    id: 'quiz-ch9-integrated-digital-style-reasoning-basics',
    title: 'Integrated Digital-Style Reasoning Basics',
    unlockedBy: 'lesson-ch9-5-2',
    passingScore: 60,
    questions: [
      {
        id: 'ch9id1',
        prompt: 'A system must output HIGH only when A and B differ AND C is HIGH. Which two-gate chain implements this?',
        choices: [
          { id: 'ch9id1-a', label: 'AND(A, B) followed by OR(result, C)', isCorrect: false, explanation: 'AND(A, B) is HIGH only when both A and B are HIGH — it does not detect difference. OR(result, C) would also produce HIGH whenever C is HIGH regardless of stage 1. Neither stage matches the required behavior.' },
          { id: 'ch9id1-b', label: 'XOR(A, B) followed by AND(result, C)', isCorrect: true, explanation: 'Correct. Stage 1: XOR(A, B) is HIGH when A and B differ. Stage 2: AND(XOR result, C) is HIGH only when both the XOR result and C are HIGH. The combined output is HIGH only when A≠B AND C=HIGH.' },
          { id: 'ch9id1-c', label: 'OR(A, B) followed by AND(result, C)', isCorrect: false, explanation: 'OR(A, B) is HIGH when any of A or B is HIGH — not specifically when they differ. The correct first stage for a difference detection rule is XOR, not OR.' },
        ],
      },
      {
        id: 'ch9id2',
        prompt: 'In the XOR → AND chain, what happens when A=HIGH, B=HIGH, C=HIGH?',
        choices: [
          { id: 'ch9id2-a', label: 'The output is HIGH — all inputs are HIGH so all conditions are met', isCorrect: false, explanation: 'XOR(HIGH, HIGH) = LOW (inputs are the same, not different). AND(LOW, HIGH) = LOW. Even though C=HIGH, the XOR stage outputs LOW, so the final output is LOW.' },
          { id: 'ch9id2-b', label: 'The output is LOW — XOR(HIGH, HIGH) = LOW, so AND(LOW, HIGH) = LOW', isCorrect: true, explanation: 'Correct. XOR requires inputs to differ. Both A and B being HIGH means they are the same, so XOR outputs LOW. AND then receives (LOW, HIGH) and outputs LOW. The overall output is LOW.' },
          { id: 'ch9id2-c', label: 'The output is HIGH — C=HIGH overrides the XOR stage result', isCorrect: false, explanation: 'In the XOR → AND chain, both the XOR result and C must be HIGH for the output to be HIGH. C=HIGH alone cannot override the XOR stage — if XOR outputs LOW, the AND output is LOW regardless of C.' },
        ],
      },
      {
        id: 'ch9id3',
        prompt: 'A two-stage system fails when A=LOW, B=LOW, C=HIGH — it outputs HIGH instead of LOW. Tracing shows Stage 1 outputs HIGH for these inputs. Which gate type in Stage 1 explains this failure?',
        choices: [
          { id: 'ch9id3-a', label: 'XOR — XOR(LOW, LOW) = LOW, which would not cause Stage 1 to output HIGH', isCorrect: false, explanation: 'XOR(LOW, LOW) = LOW (inputs are the same). If Stage 1 uses XOR, its output would be LOW, and AND(LOW, HIGH) = LOW — the correct output. XOR in Stage 1 does not explain the failure.' },
          { id: 'ch9id3-b', label: 'NAND — NAND(LOW, LOW) = HIGH, which causes AND(HIGH, C=HIGH) = HIGH — the wrong output', isCorrect: true, explanation: 'Correct. NAND(LOW, LOW) = HIGH (NAND inverts AND, and AND(LOW, LOW) = LOW, so NAND = HIGH). Then AND(HIGH, HIGH) = HIGH — the wrong output. NAND in Stage 1 explains the failure. The fix is to replace NAND with XOR.' },
          { id: 'ch9id3-c', label: 'OR — OR(LOW, LOW) = LOW, which would not cause Stage 1 to output HIGH', isCorrect: false, explanation: 'OR(LOW, LOW) = LOW (no inputs are HIGH). If Stage 1 uses OR, its output would be LOW, and AND(LOW, HIGH) = LOW — the correct output. OR in Stage 1 does not explain the failure.' },
        ],
      },
    ],
  },
];

export default quizzes;
