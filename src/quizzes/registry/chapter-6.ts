import type { QuizConfig } from '../../types/quiz.ts';

const quizzes: QuizConfig[] = [
  {
    id: 'quiz-ch6-transient-versus-steady-state-basics',
    title: 'Transient Versus Steady-State Basics',
    unlockedBy: 'lesson-ch6-1-1',
    passingScore: 60,
    questions: [
      {
        id: 'ch6ts1',
        prompt: 'What is a transient in a circuit?',
        choices: [
          { id: 'ch6ts1-a', label: 'A brief period where circuit values change before reaching steady state', isCorrect: true, explanation: 'Correct. A transient is the in-between phase where voltages and currents are still changing after a switch event.' },
          { id: 'ch6ts1-b', label: 'A circuit that never reaches a stable value', isCorrect: false, explanation: 'Transient circuits do eventually settle. The transient is only the temporary changing phase before steady state.' },
          { id: 'ch6ts1-c', label: 'A fault condition caused by a short circuit', isCorrect: false, explanation: 'Transient behavior is normal and predictable, not a fault. It occurs in circuits with energy-storage components like capacitors and inductors.' },
        ],
      },
      {
        id: 'ch6ts2',
        prompt: 'Which type of circuit reaches steady state instantly when the switch is closed?',
        choices: [
          { id: 'ch6ts2-a', label: 'A purely resistive circuit — it has no energy-storage components', isCorrect: true, explanation: 'Correct. Resistive circuits respond instantly to voltage and current changes. There is no transient phase.' },
          { id: 'ch6ts2-b', label: 'A circuit with a capacitor — it stores energy for later', isCorrect: false, explanation: 'Capacitors cause transient behavior. Their voltage builds up gradually, not instantly.' },
          { id: 'ch6ts2-c', label: 'A circuit with an inductor — it forces immediate current', isCorrect: false, explanation: 'Inductors cause transient behavior. Current builds up gradually in RL circuits, not instantly.' },
        ],
      },
      {
        id: 'ch6ts3',
        prompt: 'What is steady state in a circuit?',
        choices: [
          { id: 'ch6ts3-a', label: 'The condition where all circuit values have settled and are no longer changing', isCorrect: true, explanation: 'Correct. Steady state is the final stable condition after all transients have ended.' },
          { id: 'ch6ts3-b', label: 'The condition immediately after the switch is closed', isCorrect: false, explanation: 'That is the initial state, not steady state. Steady state comes after the transient phase has ended.' },
          { id: 'ch6ts3-c', label: 'The condition where current is at its maximum value', isCorrect: false, explanation: 'Steady state is about values being stable, not about being at maximum. In an RC circuit, steady-state current is zero (minimum, not maximum).' },
        ],
      },
    ],
  },
  {
    id: 'quiz-ch6-initial-state-versus-final-state-reasoning',
    title: 'Initial-State Versus Final-State Reasoning',
    unlockedBy: 'lesson-ch6-1-2',
    passingScore: 60,
    questions: [
      {
        id: 'ch6if1',
        prompt: 'In a time-dependent circuit, what does "initial state" mean?',
        choices: [
          { id: 'ch6if1-a', label: 'The circuit behavior right after a switch event occurs', isCorrect: true, explanation: 'Correct. The initial state is the snapshot of the circuit immediately after the switch is toggled.' },
          { id: 'ch6if1-b', label: 'The circuit behavior after a long time has passed', isCorrect: false, explanation: 'That describes the final (steady) state. The initial state is the condition right after the switch event.' },
          { id: 'ch6if1-c', label: 'The circuit behavior while the switch is still open', isCorrect: false, explanation: 'The initial state refers to the moment just after the switch closes, not while it remains open.' },
        ],
      },
      {
        id: 'ch6if2',
        prompt: 'A capacitor circuit is switched on. Current is 90mA right after closing, then drops to 0mA after a long time. Identify the initial and final states.',
        choices: [
          { id: 'ch6if2-a', label: 'Initial: 90mA. Final: 0mA.', isCorrect: true, explanation: 'Correct. The initial state (right after switch-on) shows 90mA. The final state (long after) shows 0mA as the capacitor blocks DC.' },
          { id: 'ch6if2-b', label: 'Initial: 0mA. Final: 90mA.', isCorrect: false, explanation: 'This describes an RL circuit, not RC. For RC charging, current starts high and falls to zero.' },
          { id: 'ch6if2-c', label: 'Both initial and final are 90mA.', isCorrect: false, explanation: 'If current drops to 0mA after a long time, initial and final states clearly differ.' },
        ],
      },
      {
        id: 'ch6if3',
        prompt: 'Why must you reason about both initial and final states in a time-dependent circuit?',
        choices: [
          { id: 'ch6if3-a', label: 'Because the initial and final behaviors can differ significantly and both may matter for design goals', isCorrect: true, explanation: 'Correct. A design may need to meet initial surge limits as well as steady-state operating requirements. Both states can be independently important.' },
          { id: 'ch6if3-b', label: 'Because only the initial state is physically meaningful', isCorrect: false, explanation: 'Both states are physically meaningful. The final (steady) state is often the desired operating condition; the initial state can affect component safety.' },
          { id: 'ch6if3-c', label: 'Because the final state always equals the initial state in real circuits', isCorrect: false, explanation: 'In time-dependent circuits with capacitors or inductors, initial and final states can be very different from each other.' },
        ],
      },
    ],
  },
  {
    id: 'quiz-ch6-capacitor-basics',
    title: 'Capacitor Basics',
    unlockedBy: 'lesson-ch6-2-1',
    passingScore: 60,
    questions: [
      {
        id: 'ch6cb1',
        prompt: 'What is the key time-dependent property of a capacitor?',
        choices: [
          { id: 'ch6cb1-a', label: 'Its voltage builds up gradually rather than appearing instantly', isCorrect: true, explanation: 'Correct. A capacitor accepts charge over time. Its voltage rises gradually as charge accumulates.' },
          { id: 'ch6cb1-b', label: 'Its resistance increases as temperature rises', isCorrect: false, explanation: 'That describes a thermistor. A capacitor\'s key property is that its voltage changes over time as it charges or discharges.' },
          { id: 'ch6cb1-c', label: 'It produces a fixed voltage regardless of connected components', isCorrect: false, explanation: 'That describes a battery. A capacitor stores charge and its voltage depends on how much charge it has accumulated.' },
        ],
      },
      {
        id: 'ch6cb2',
        prompt: 'How does a capacitor differ from a resistor in terms of time?',
        choices: [
          { id: 'ch6cb2-a', label: 'A resistor responds instantly; a capacitor\'s behavior changes over time', isCorrect: true, explanation: 'Correct. A resistor follows V = IR with no time dependency. A capacitor\'s voltage builds up gradually as it charges.' },
          { id: 'ch6cb2-b', label: 'A capacitor responds instantly; a resistor takes time to warm up', isCorrect: false, explanation: 'Resistors respond instantly. Capacitors are the time-dependent components.' },
          { id: 'ch6cb2-c', label: 'They behave identically in all DC circuits', isCorrect: false, explanation: 'They behave very differently. A capacitor blocks DC once charged; a resistor always passes current proportional to voltage.' },
        ],
      },
      {
        id: 'ch6cb3',
        prompt: 'What does the capacitor symbol look like in a circuit diagram?',
        choices: [
          { id: 'ch6cb3-a', label: 'Two parallel lines (representing the two conductive plates)', isCorrect: true, explanation: 'Correct. The standard capacitor symbol is two parallel vertical lines, representing the two plates separated by an insulator.' },
          { id: 'ch6cb3-b', label: 'A zigzag line (representing resistance)', isCorrect: false, explanation: 'The zigzag line is the resistor symbol. The capacitor symbol is two parallel lines.' },
          { id: 'ch6cb3-c', label: 'A coil or spiral (representing stored energy)', isCorrect: false, explanation: 'The coil symbol represents an inductor. The capacitor is represented by two parallel lines.' },
        ],
      },
    ],
  },
  {
    id: 'quiz-ch6-capacitor-charging-basics',
    title: 'Capacitor Charging Basics',
    unlockedBy: 'lesson-ch6-2-2',
    passingScore: 60,
    questions: [
      {
        id: 'ch6cc1',
        prompt: 'In an RC charging circuit, what happens to current right after the switch closes?',
        choices: [
          { id: 'ch6cc1-a', label: 'Current is at its maximum value (V/R) because the capacitor acts as a short circuit', isCorrect: true, explanation: 'Correct. At t=0, the uncharged capacitor has zero voltage across it, so it looks like a short. All source voltage drives current through the resistor: I = V/R.' },
          { id: 'ch6cc1-b', label: 'Current is zero because the capacitor blocks current initially', isCorrect: false, explanation: 'That describes an inductor (RL circuit). For a capacitor, current starts at maximum and falls over time.' },
          { id: 'ch6cc1-c', label: 'Current is at half its maximum value', isCorrect: false, explanation: 'At t=0, current is at its full maximum (V/R). Half-current occurs around one time constant later.' },
        ],
      },
      {
        id: 'ch6cc2',
        prompt: 'What is the capacitor voltage approaching as it finishes charging from a 12V source?',
        choices: [
          { id: 'ch6cc2-a', label: '12V — the capacitor charges toward the source voltage', isCorrect: true, explanation: 'Correct. The capacitor charges until its voltage equals the source voltage. At that point, no voltage difference drives further current.' },
          { id: 'ch6cc2-b', label: '0V — the capacitor resets to zero when fully charged', isCorrect: false, explanation: 'A fully charged capacitor holds voltage equal to the source. It does not reset to zero.' },
          { id: 'ch6cc2-c', label: '6V — the voltage is shared equally between capacitor and source', isCorrect: false, explanation: 'At steady state, all source voltage is across the capacitor. The capacitor charges to the full 12V.' },
        ],
      },
      {
        id: 'ch6cc3',
        prompt: 'During RC charging, what happens to current over time?',
        choices: [
          { id: 'ch6cc3-a', label: 'It starts at maximum and falls exponentially toward zero', isCorrect: true, explanation: 'Correct. As the capacitor charges, it backs up the source voltage, reducing the voltage across the resistor and thus reducing current exponentially.' },
          { id: 'ch6cc3-b', label: 'It stays constant throughout charging', isCorrect: false, explanation: 'Current is not constant during charging. As capacitor voltage rises, less voltage drives current through the resistor.' },
          { id: 'ch6cc3-c', label: 'It starts at zero and rises to maximum', isCorrect: false, explanation: 'That describes an RL circuit. For RC charging, current starts at maximum and falls toward zero.' },
        ],
      },
    ],
  },
  {
    id: 'quiz-ch6-capacitor-steady-state-basics',
    title: 'Capacitor Steady-State Basics',
    unlockedBy: 'lesson-ch6-2-3',
    passingScore: 60,
    questions: [
      {
        id: 'ch6cs1',
        prompt: 'At DC steady state, what is the current through a fully charged capacitor?',
        choices: [
          { id: 'ch6cs1-a', label: 'Zero — a fully charged capacitor blocks DC current entirely', isCorrect: true, explanation: 'Correct. Once fully charged, the capacitor voltage equals the source. No voltage difference drives more current, so current is zero.' },
          { id: 'ch6cs1-b', label: 'Maximum — it has stored energy and now releases it as current', isCorrect: false, explanation: 'Maximum current occurs right at switch-on (t=0), not at steady state. A fully charged capacitor blocks further DC current.' },
          { id: 'ch6cs1-c', label: 'Equal to V/R — the same as without the capacitor', isCorrect: false, explanation: 'V/R would apply if the capacitor were a short (t=0). At steady state the capacitor is an open circuit and current is zero.' },
        ],
      },
      {
        id: 'ch6cs2',
        prompt: 'Two RC circuits have the same capacitor but different resistors: 50\u03a9 and 500\u03a9. Which reaches steady state faster?',
        choices: [
          { id: 'ch6cs2-a', label: 'The 50\u03a9 circuit — smaller \u03c4 = RC means faster settling', isCorrect: true, explanation: 'Correct. \u03c4 = RC. With the same C, smaller R gives smaller \u03c4. The 50\u03a9 circuit settles 10\u00d7 faster.' },
          { id: 'ch6cs2-b', label: 'The 500\u03a9 circuit — larger resistance charges the capacitor faster', isCorrect: false, explanation: 'Larger resistance slows charging. \u03c4 = RC increases with R, meaning slower settling, not faster.' },
          { id: 'ch6cs2-c', label: 'Both settle at the same speed because the capacitor is the same', isCorrect: false, explanation: 'The same capacitor with different resistors gives different time constants (\u03c4 = RC). Different R means different settling speed.' },
        ],
      },
      {
        id: 'ch6cs3',
        prompt: 'At DC steady state in a series RC circuit, where does all the source voltage appear?',
        choices: [
          { id: 'ch6cs3-a', label: 'Across the capacitor — it holds the full source voltage when fully charged', isCorrect: true, explanation: 'Correct. At steady state, current is zero so there is no voltage drop across the resistor (V = IR = 0). All source voltage appears across the capacitor.' },
          { id: 'ch6cs3-b', label: 'Across the resistor — it carries the steady-state current', isCorrect: false, explanation: 'At steady state, current is zero. With I = 0, there is no voltage drop across the resistor (V = 0 \u00d7 R = 0).' },
          { id: 'ch6cs3-c', label: 'Split equally between the capacitor and resistor', isCorrect: false, explanation: 'At steady state, no current flows, so the resistor drops zero voltage. The capacitor holds all the source voltage.' },
        ],
      },
    ],
  },
  {
    id: 'quiz-ch6-capacitor-discharge-basics',
    title: 'Capacitor Discharge Basics',
    unlockedBy: 'lesson-ch6-2-4',
    passingScore: 60,
    questions: [
      {
        id: 'ch6cd1',
        prompt: 'During RC discharge, what happens to the capacitor voltage over time?',
        choices: [
          { id: 'ch6cd1-a', label: 'It falls exponentially from its initial charged value toward zero', isCorrect: true, explanation: 'Correct. During discharge, the capacitor releases its stored energy through the resistor. Voltage decays from its initial value toward zero.' },
          { id: 'ch6cd1-b', label: 'It rises toward the source voltage', isCorrect: false, explanation: 'That describes charging. During discharge (with no source), the capacitor voltage falls, not rises.' },
          { id: 'ch6cd1-c', label: 'It stays constant because the capacitor is fully charged', isCorrect: false, explanation: 'Without a discharge path, voltage stays constant. With a resistor connected, voltage falls as the capacitor releases energy.' },
        ],
      },
      {
        id: 'ch6cd2',
        prompt: 'At the start of RC discharge, what is the initial current?',
        choices: [
          { id: 'ch6cd2-a', label: 'V\u2080/R \u2014 the capacitor\'s initial voltage drives the first burst of current', isCorrect: true, explanation: 'Correct. At t=0 of discharge, the capacitor still holds its initial voltage V\u2080. Current = V\u2080/R. This is the maximum discharge current.' },
          { id: 'ch6cd2-b', label: 'Zero \u2014 the capacitor needs to warm up before driving current', isCorrect: false, explanation: 'Current starts at its maximum at the beginning of discharge. The capacitor immediately drives current through the resistor.' },
          { id: 'ch6cd2-c', label: 'The same as the charging current at steady state (zero)', isCorrect: false, explanation: 'At steady state during charging, current is zero. At the start of discharge, current is maximum (V\u2080/R), not zero.' },
        ],
      },
      {
        id: 'ch6cd3',
        prompt: 'How is discharge behavior related to charging behavior in an RC circuit?',
        choices: [
          { id: 'ch6cd3-a', label: 'They are mirror images: charging builds voltage up; discharge lets it fall back toward zero', isCorrect: true, explanation: 'Correct. During charging, voltage rises toward source voltage and current falls. During discharge, voltage falls toward zero and current starts at maximum then falls.' },
          { id: 'ch6cd3-b', label: 'They are identical — both show rising current and voltage', isCorrect: false, explanation: 'They are not identical. Charging shows voltage rising; discharge shows voltage falling. They are in opposite directions.' },
          { id: 'ch6cd3-c', label: 'Discharge is much faster than charging in all RC circuits', isCorrect: false, explanation: 'Charging and discharging both follow the same time constant \u03c4 = RC when the same resistor is used. Neither is inherently faster.' },
        ],
      },
    ],
  },
  {
    id: 'quiz-ch6-inductor-basics',
    title: 'Inductor Basics',
    unlockedBy: 'lesson-ch6-3-1',
    passingScore: 60,
    questions: [
      {
        id: 'ch6ib1',
        prompt: 'What does an inductor resist in a circuit?',
        choices: [
          { id: 'ch6ib1-a', label: 'Sudden changes in current', isCorrect: true, explanation: 'Correct. An inductor opposes abrupt changes in current. Current through an inductor can only change gradually.' },
          { id: 'ch6ib1-b', label: 'Sudden changes in voltage', isCorrect: false, explanation: 'Opposing sudden voltage changes is the behavior of a capacitor. An inductor specifically resists sudden current changes.' },
          { id: 'ch6ib1-c', label: 'Any current flow at all', isCorrect: false, explanation: 'An inductor does not block all current. It only opposes sudden changes in current. At DC steady state it passes current freely.' },
        ],
      },
      {
        id: 'ch6ib2',
        prompt: 'At the moment a switch first closes in an RL circuit, how does the inductor behave?',
        choices: [
          { id: 'ch6ib2-a', label: 'Like an open circuit — current is zero and it opposes the initial surge', isCorrect: true, explanation: 'Correct. At t=0, the inductor holds current at zero. It appears as an open circuit for that first instant.' },
          { id: 'ch6ib2-b', label: 'Like a short circuit — maximum current flows immediately', isCorrect: false, explanation: 'That describes a capacitor at t=0. An inductor does the opposite: it blocks the initial current surge.' },
          { id: 'ch6ib2-c', label: 'Like a resistor — current proportional to voltage flows immediately', isCorrect: false, explanation: 'A resistor responds instantly with V/R current. An inductor blocks initial current, letting it rise gradually.' },
        ],
      },
      {
        id: 'ch6ib3',
        prompt: 'What is the circuit symbol for an inductor?',
        choices: [
          { id: 'ch6ib3-a', label: 'A coil or series of loops, representing the wound wire', isCorrect: true, explanation: 'Correct. The inductor symbol shows a coil or series of arcs/loops, representing the physical coil of wire.' },
          { id: 'ch6ib3-b', label: 'Two parallel lines, representing the two plates', isCorrect: false, explanation: 'Two parallel lines is the capacitor symbol. The inductor uses a coil symbol.' },
          { id: 'ch6ib3-c', label: 'A zigzag line, representing resistance', isCorrect: false, explanation: 'The zigzag is the resistor symbol. The inductor is represented by a coil.' },
        ],
      },
    ],
  },
  {
    id: 'quiz-ch6-inductor-current-basics',
    title: 'Inductor Current Basics',
    unlockedBy: 'lesson-ch6-3-2',
    passingScore: 60,
    questions: [
      {
        id: 'ch6ic1',
        prompt: 'In an RL circuit, what happens to current right after the switch closes?',
        choices: [
          { id: 'ch6ic1-a', label: 'Current is zero — the inductor opposes the initial current surge', isCorrect: true, explanation: 'Correct. At t=0, the inductor acts as an open circuit. Current starts at zero and rises gradually toward V/R.' },
          { id: 'ch6ic1-b', label: 'Current is at maximum — the inductor is fully energized', isCorrect: false, explanation: 'Maximum current (V/R) occurs at DC steady state, not at switch-on. Initially the inductor blocks current.' },
          { id: 'ch6ic1-c', label: 'Current oscillates back and forth', isCorrect: false, explanation: 'In a simple RL circuit, current rises smoothly from zero to V/R. Oscillation requires both L and C (LC circuit).' },
        ],
      },
      {
        id: 'ch6ic2',
        prompt: 'What final current does an inductor circuit approach after a long time (9V source, 100\u03a9 resistor)?',
        choices: [
          { id: 'ch6ic2-a', label: '90mA — the inductor is a short at steady state, so I = V/R', isCorrect: true, explanation: 'Correct. At DC steady state, the inductor acts as a wire (zero resistance). Current = V/R = 9/100 = 90mA.' },
          { id: 'ch6ic2-b', label: 'Zero — the inductor permanently blocks current', isCorrect: false, explanation: 'The inductor blocks current only during the transient. At DC steady state, it passes current freely: I = V/R.' },
          { id: 'ch6ic2-c', label: '45mA — the inductor drops half the source voltage', isCorrect: false, explanation: 'At steady state, the inductor drops zero voltage (it is a short circuit). All voltage drives current through the resistor: I = V/R = 90mA.' },
        ],
      },
      {
        id: 'ch6ic3',
        prompt: 'How does RL current behavior compare to RC current behavior during the transient?',
        choices: [
          { id: 'ch6ic3-a', label: 'RL: current starts zero, rises to V/R. RC: current starts at V/R, falls to zero.', isCorrect: true, explanation: 'Correct. They are mirror images. RL current rises from zero; RC current falls from maximum. Both follow exponential curves.' },
          { id: 'ch6ic3-b', label: 'RL: current starts at V/R, falls to zero. RC: current starts zero, rises to V/R.', isCorrect: false, explanation: 'This is reversed. RL current rises from zero; RC current falls from V/R. They are opposite patterns.' },
          { id: 'ch6ic3-c', label: 'Both rise from zero to V/R in exactly the same way', isCorrect: false, explanation: 'They are mirror images of each other. RL rises from zero; RC falls from maximum. They are opposite, not identical.' },
        ],
      },
    ],
  },
  {
    id: 'quiz-ch6-inductor-steady-state-basics',
    title: 'Inductor Steady-State Basics',
    unlockedBy: 'lesson-ch6-3-3',
    passingScore: 60,
    questions: [
      {
        id: 'ch6is1',
        prompt: 'At DC steady state, what is the voltage across a fully energized inductor?',
        choices: [
          { id: 'ch6is1-a', label: 'Zero — a fully energized inductor passes DC freely with no voltage drop', isCorrect: true, explanation: 'Correct. At DC steady state, current is constant (not changing). Without a current change, there is no inductor voltage. It acts as a short circuit.' },
          { id: 'ch6is1-b', label: 'Equal to the full source voltage', isCorrect: false, explanation: 'That describes the initial state (t=0). At steady state, the inductor drops zero voltage — all source voltage appears across the resistor.' },
          { id: 'ch6is1-c', label: 'Half the source voltage — shared equally with the resistor', isCorrect: false, explanation: 'At steady state, the inductor is a short. It drops zero voltage. All source voltage appears across the resistor.' },
        ],
      },
      {
        id: 'ch6is2',
        prompt: 'Two identical inductors are energized with different resistors: 25\u03a9 and 100\u03a9. Which has a longer time constant?',
        choices: [
          { id: 'ch6is2-a', label: 'The 25\u03a9 circuit — \u03c4 = L/R is larger when R is smaller', isCorrect: true, explanation: 'Correct. \u03c4 = L/R. With the same L, smaller R gives larger \u03c4. The 25\u03a9 circuit settles 4\u00d7 more slowly.' },
          { id: 'ch6is2-b', label: 'The 100\u03a9 circuit — larger resistance means more settling time', isCorrect: false, explanation: 'Larger resistance gives a smaller time constant (\u03c4 = L/R decreases as R increases). The 100\u03a9 circuit settles faster, not slower.' },
          { id: 'ch6is2-c', label: 'Both have the same time constant because the inductor is identical', isCorrect: false, explanation: 'The same inductor with different resistors gives different time constants. \u03c4 = L/R changes with R.' },
        ],
      },
      {
        id: 'ch6is3',
        prompt: 'In a simple RL circuit at DC steady state (9V source, 100\u03a9 resistor), what are the current and inductor voltage?',
        choices: [
          { id: 'ch6is3-a', label: 'I = 90mA, V_inductor = 0V', isCorrect: true, explanation: 'Correct. At steady state: I = V/R = 9/100 = 90mA. The inductor is a short, so V_inductor = 0V.' },
          { id: 'ch6is3-b', label: 'I = 0mA, V_inductor = 9V', isCorrect: false, explanation: 'That describes the initial state (t=0), not steady state. At steady state, current is maximum and inductor voltage is zero.' },
          { id: 'ch6is3-c', label: 'I = 45mA, V_inductor = 4.5V', isCorrect: false, explanation: 'At steady state, the inductor drops zero voltage. All 9V drives current through the 100\u03a9 resistor: I = 90mA, V_inductor = 0V.' },
        ],
      },
    ],
  },
  {
    id: 'quiz-ch6-inductor-energy-release-basics',
    title: 'Inductor Energy-Release Basics',
    unlockedBy: 'lesson-ch6-3-4',
    passingScore: 60,
    questions: [
      {
        id: 'ch6ie1',
        prompt: 'What happens when the current through an inductor is suddenly interrupted?',
        choices: [
          { id: 'ch6ie1-a', label: 'The inductor generates a voltage spike as it tries to maintain current flow', isCorrect: true, explanation: 'Correct. An inductor opposes sudden current changes. When interrupted, it tries to maintain the current by generating a voltage spike.' },
          { id: 'ch6ie1-b', label: 'Current immediately falls to zero with no side effects', isCorrect: false, explanation: 'An inductor cannot let current stop instantly. It fights the change, creating a potentially damaging voltage spike.' },
          { id: 'ch6ie1-c', label: 'The inductor charges up like a capacitor', isCorrect: false, explanation: 'Inductors do not charge up voltage. They try to maintain current flow, which can cause a voltage spike.' },
        ],
      },
      {
        id: 'ch6ie2',
        prompt: 'What does an inductor store that it tries to release when the circuit changes?',
        choices: [
          { id: 'ch6ie2-a', label: 'Current (in a magnetic field)', isCorrect: true, explanation: 'Correct. An inductor stores energy in a magnetic field, associated with the current flowing through it. When the circuit changes, it tries to maintain that current.' },
          { id: 'ch6ie2-b', label: 'Voltage (in an electric field)', isCorrect: false, explanation: 'That describes a capacitor. Capacitors store voltage in an electric field. Inductors store current in a magnetic field.' },
          { id: 'ch6ie2-c', label: 'Heat energy', isCorrect: false, explanation: 'Heat is a dissipated form of energy (from resistors). Inductors store recoverable magnetic energy associated with current.' },
        ],
      },
      {
        id: 'ch6ie3',
        prompt: 'How is inductor energy release similar to capacitor discharge?',
        choices: [
          { id: 'ch6ie3-a', label: 'Both components release stored energy when the circuit changes, but what they store differs', isCorrect: true, explanation: 'Correct. Both are energy-storage components. A capacitor releases stored voltage; an inductor releases stored current. The mechanism is different but the concept — energy release — is parallel.' },
          { id: 'ch6ie3-b', label: 'They are identical — both release voltage in the same way', isCorrect: false, explanation: 'The parallel is conceptual (both release stored energy) but the mechanisms differ. Capacitors release voltage; inductors try to maintain current.' },
          { id: 'ch6ie3-c', label: 'They are completely unrelated phenomena', isCorrect: false, explanation: 'Both phenomena involve stored energy being released when the circuit changes. They are parallel concepts for the two complementary energy-storage components.' },
        ],
      },
    ],
  },
  {
    id: 'quiz-ch6-capacitor-versus-inductor-comparison-basics',
    title: 'Capacitor Versus Inductor Comparison Basics',
    unlockedBy: 'lesson-ch6-4-1',
    passingScore: 60,
    questions: [
      {
        id: 'ch6ci1',
        prompt: 'At DC steady state, a capacitor acts as ___ and an inductor acts as ___.',
        choices: [
          { id: 'ch6ci1-a', label: 'Open circuit; short circuit', isCorrect: true, explanation: 'Correct. At DC steady state: capacitor = open circuit (no current). Inductor = short circuit (full current, no voltage drop).' },
          { id: 'ch6ci1-b', label: 'Short circuit; open circuit', isCorrect: false, explanation: 'This is reversed. A capacitor acts as short at t=0, not steady state. An inductor acts as open at t=0, not steady state.' },
          { id: 'ch6ci1-c', label: 'Both act as open circuits at steady state', isCorrect: false, explanation: 'Only the capacitor becomes an open circuit at DC steady state. The inductor becomes a short circuit.' },
        ],
      },
      {
        id: 'ch6ci2',
        prompt: 'A circuit is switched on. Current immediately jumps to V/R and stays constant. Which component is in the circuit?',
        choices: [
          { id: 'ch6ci2-a', label: 'Neither — a purely resistive circuit responds instantly with constant current', isCorrect: true, explanation: 'Correct. Instant, constant current with no transient indicates a purely resistive circuit. Both capacitors and inductors cause transient behavior.' },
          { id: 'ch6ci2-b', label: 'A capacitor — it passes maximum current at switch-on', isCorrect: false, explanation: 'A capacitor does give maximum initial current, but it then falls to zero. Constant current throughout is not capacitor behavior.' },
          { id: 'ch6ci2-c', label: 'An inductor — it reaches maximum current quickly', isCorrect: false, explanation: 'An inductor starts with zero current and rises gradually. Immediately constant current is resistor behavior, not inductor behavior.' },
        ],
      },
      {
        id: 'ch6ci3',
        prompt: 'RC circuit at t=0: current = V/R, capacitor voltage = 0. RL circuit at t=0: current = 0, inductor voltage = V. What does this show?',
        choices: [
          { id: 'ch6ci3-a', label: 'RC and RL circuits start at opposite extremes — they are mirror images of each other at t=0', isCorrect: true, explanation: 'Correct. At t=0: RC has max current and zero component voltage; RL has zero current and max component voltage. They start at opposite ends.' },
          { id: 'ch6ci3-b', label: 'RC and RL circuits are identical at t=0', isCorrect: false, explanation: 'They start at opposite conditions. RC: max current (V/R), zero capacitor voltage. RL: zero current, max inductor voltage (V).' },
          { id: 'ch6ci3-c', label: 'Both circuits have zero current at t=0', isCorrect: false, explanation: 'Only the RL circuit has zero initial current. The RC circuit has maximum initial current V/R at t=0.' },
        ],
      },
    ],
  },
  {
    id: 'quiz-ch6-time-dependent-component-choice-basics',
    title: 'Time-Dependent Component Choice Basics',
    unlockedBy: 'lesson-ch6-4-2',
    passingScore: 60,
    questions: [
      {
        id: 'ch6tc1',
        prompt: 'You need maximum current the instant a switch closes, falling to zero later. Which component achieves this?',
        choices: [
          { id: 'ch6tc1-a', label: 'A capacitor — short at t=0 (max current), open at steady state (zero current)', isCorrect: true, explanation: 'Correct. An RC circuit: maximum current at t=0, current falls to zero at steady state as the capacitor charges.' },
          { id: 'ch6tc1-b', label: 'An inductor — it allows maximum current immediately', isCorrect: false, explanation: 'An inductor blocks initial current (zero at t=0) and allows it to rise gradually. The opposite of the requirement.' },
          { id: 'ch6tc1-c', label: 'A resistor — it maintains maximum current indefinitely', isCorrect: false, explanation: 'A resistor provides constant current (V/R) forever. It cannot produce current that falls to zero.' },
        ],
      },
      {
        id: 'ch6tc2',
        prompt: 'You need zero current when the switch first closes, with full current after a long time. Which component achieves this?',
        choices: [
          { id: 'ch6tc2-a', label: 'A capacitor — it starts with zero current', isCorrect: false, explanation: 'A capacitor starts with maximum current (short circuit at t=0), not zero. An inductor starts with zero current.' },
          { id: 'ch6tc2-b', label: 'An inductor — open at t=0 (zero current), short at steady state (full current)', isCorrect: true, explanation: 'Correct. An RL circuit: zero current at t=0, current rises to V/R at steady state. This matches the requirement exactly.' },
          { id: 'ch6tc2-c', label: 'A resistor — it gradually allows more current over time', isCorrect: false, explanation: 'Resistors respond instantly with constant current. They cannot produce zero initial current followed by rising current.' },
        ],
      },
      {
        id: 'ch6tc3',
        prompt: 'Why does component choice matter in time-dependent circuit design?',
        choices: [
          { id: 'ch6tc3-a', label: 'Because capacitors and inductors produce opposite time-behavior patterns — the wrong choice fails the design goal', isCorrect: true, explanation: 'Correct. RC and RL circuits are mirror images. Using the wrong component produces the opposite of the required behavior.' },
          { id: 'ch6tc3-b', label: 'Because they cost different amounts', isCorrect: false, explanation: 'Cost considerations aside, the functional reason for choosing between them is their opposite time-behavior patterns.' },
          { id: 'ch6tc3-c', label: 'They are interchangeable — both produce the same behavior given enough time', isCorrect: false, explanation: 'They are not interchangeable. A capacitor blocks DC at steady state; an inductor passes DC at steady state. These are fundamentally opposite outcomes.' },
        ],
      },
    ],
  },
  {
    id: 'quiz-ch6-initial-response-design-basics',
    title: 'Initial-Response Design Basics',
    unlockedBy: 'lesson-ch6-5-1',
    passingScore: 60,
    questions: [
      {
        id: 'ch6ir1',
        prompt: 'A design requires a specific behavior right at switch-on. What determines this initial behavior in an RC circuit?',
        choices: [
          { id: 'ch6ir1-a', label: 'The source voltage and total resistance — I(0) = V/R', isCorrect: true, explanation: 'Correct. At t=0, the uncharged capacitor is a short circuit. Initial current depends only on source voltage and resistance: I(0) = V/R.' },
          { id: 'ch6ir1-b', label: 'The capacitance — larger capacitors allow more initial current', isCorrect: false, explanation: 'Capacitance affects the time constant (how fast the transient evolves) but not the initial current magnitude. I(0) = V/R regardless of capacitance.' },
          { id: 'ch6ir1-c', label: 'The time constant — larger \u03c4 produces higher initial current', isCorrect: false, explanation: 'The time constant controls settling speed, not initial magnitude. Initial current I(0) = V/R is independent of \u03c4.' },
        ],
      },
      {
        id: 'ch6ir2',
        prompt: 'A 12V source drives an RC circuit with 120\u03a9 total resistance. What is the initial current right after switch-on?',
        choices: [
          { id: 'ch6ir2-a', label: '100mA, because I(0) = V/R = 12/120', isCorrect: true, explanation: 'Correct. At t=0, the capacitor is uncharged (short circuit). I(0) = V/R = 12/120 = 100mA.' },
          { id: 'ch6ir2-b', label: 'Zero, because the capacitor blocks current initially', isCorrect: false, explanation: 'That describes an inductor. A capacitor at t=0 is a short circuit, allowing maximum current V/R.' },
          { id: 'ch6ir2-c', label: '50mA, because the capacitor limits initial current to half', isCorrect: false, explanation: 'A capacitor does not limit initial current. At t=0 it is a short and passes the full V/R current.' },
        ],
      },
      {
        id: 'ch6ir3',
        prompt: 'A design must limit initial current to 50mA from a 10V source. What total resistance achieves this?',
        choices: [
          { id: 'ch6ir3-a', label: '200\u03a9, because R = V/I(0) = 10/0.05', isCorrect: true, explanation: 'Correct. I(0) = V/R, so R = V/I(0) = 10/0.05 = 200\u03a9.' },
          { id: 'ch6ir3-b', label: '100\u03a9, because 50mA is half the maximum current', isCorrect: false, explanation: 'Maximum current at 100\u03a9 would be V/R = 10/100 = 100mA. To get 50mA, R = 10/0.05 = 200\u03a9.' },
          { id: 'ch6ir3-c', label: '50\u03a9, because R equals the target current in ohms', isCorrect: false, explanation: 'Current and resistance are not equal. Use I(0) = V/R \u2192 R = V/I(0) = 10/0.05 = 200\u03a9.' },
        ],
      },
    ],
  },
  {
    id: 'quiz-ch6-later-response-design-basics',
    title: 'Later-Response Design Basics',
    unlockedBy: 'lesson-ch6-5-2',
    passingScore: 60,
    questions: [
      {
        id: 'ch6lr1',
        prompt: 'Which component passes DC current freely at steady state, making it suitable for continuous-current designs?',
        choices: [
          { id: 'ch6lr1-a', label: 'An inductor — it acts as a short circuit at DC steady state', isCorrect: true, explanation: 'Correct. At DC steady state, a fully energized inductor is a short circuit. Current = V/R, flowing continuously.' },
          { id: 'ch6lr1-b', label: 'A capacitor — it stores the voltage needed for continuous current', isCorrect: false, explanation: 'A capacitor blocks DC at steady state (open circuit). It cannot sustain continuous DC current.' },
          { id: 'ch6lr1-c', label: 'Either component works for continuous-current designs', isCorrect: false, explanation: 'Only the inductor supports steady-state DC current. The capacitor blocks it entirely at steady state.' },
        ],
      },
      {
        id: 'ch6lr2',
        prompt: 'A design passes its initial check (zero current at t=0) but fails steady-state (requires 80mA but measures 0mA). What is the likely cause?',
        choices: [
          { id: 'ch6lr2-a', label: 'A capacitor was used instead of an inductor — it blocks DC at steady state', isCorrect: true, explanation: 'Correct. Zero initial current + zero steady-state current is consistent with a capacitor: it eventually blocks DC. An inductor would give zero initial current but 80mA at steady state.' },
          { id: 'ch6lr2-b', label: 'The resistor is too large', isCorrect: false, explanation: 'A larger resistor would reduce steady-state current but not to zero (unless R is infinite). Zero steady-state current points to a capacitor blocking DC, not just high resistance.' },
          { id: 'ch6lr2-c', label: 'The source voltage is too low', isCorrect: false, explanation: 'Low source voltage would reduce all currents proportionally but not bring steady-state current to exactly zero. Zero steady-state current indicates a capacitor blocking DC.' },
        ],
      },
      {
        id: 'ch6lr3',
        prompt: 'Why is it important to verify both initial and steady-state behavior separately?',
        choices: [
          { id: 'ch6lr3-a', label: 'Because a design can pass one state and fail the other, making it incomplete', isCorrect: true, explanation: 'Correct. Initial and final states can have very different values. A design must satisfy all specified requirements, not just one of them.' },
          { id: 'ch6lr3-b', label: 'Because steady state is always more important than initial state', isCorrect: false, explanation: 'Neither state is inherently more important. Which matters depends on the design requirements. Both must be checked.' },
          { id: 'ch6lr3-c', label: 'Because both states always have the same values in time-dependent circuits', isCorrect: false, explanation: 'In time-dependent circuits, initial and steady-state values are often very different. The whole point of studying transients is that the two states differ.' },
        ],
      },
    ],
  },
  {
    id: 'quiz-ch6-review',
    title: 'Chapter 6 Review Quiz',
    unlockedBy: 'lesson-ch6-5-3',
    passingScore: 60,
    questions: [
      {
        id: 'ch6rv1',
        prompt: 'A series RC circuit uses a 6V source and 200\u03a9 resistor. What is the initial current (t=0) and the steady-state current?',
        choices: [
          { id: 'ch6rv1-a', label: 'I(0) = 30mA, I(\u221e) = 0mA', isCorrect: true, explanation: 'Correct. At t=0: capacitor is short, I = V/R = 6/200 = 30mA. At steady state: capacitor is open, I = 0mA.' },
          { id: 'ch6rv1-b', label: 'I(0) = 0mA, I(\u221e) = 30mA', isCorrect: false, explanation: 'That describes an RL circuit. For RC: initial current is maximum (V/R = 30mA) and steady-state current is zero.' },
          { id: 'ch6rv1-c', label: 'I(0) = 30mA, I(\u221e) = 30mA', isCorrect: false, explanation: 'Constant current throughout is pure-resistor behavior. In an RC circuit, steady-state current falls to zero as the capacitor blocks DC.' },
        ],
      },
      {
        id: 'ch6rv2',
        prompt: 'A series RL circuit uses a 6V source and 200\u03a9 resistor. What is the initial current (t=0) and the steady-state current?',
        choices: [
          { id: 'ch6rv2-a', label: 'I(0) = 30mA, I(\u221e) = 0mA', isCorrect: false, explanation: 'That describes an RC circuit. For RL: initial current is zero (inductor blocks it) and steady-state current is maximum (V/R = 30mA).' },
          { id: 'ch6rv2-b', label: 'I(0) = 0mA, I(\u221e) = 30mA', isCorrect: true, explanation: 'Correct. At t=0: inductor is open circuit, I = 0mA. At steady state: inductor is short circuit, I = V/R = 6/200 = 30mA.' },
          { id: 'ch6rv2-c', label: 'I(0) = 0mA, I(\u221e) = 0mA', isCorrect: false, explanation: 'Zero steady-state current describes a capacitor blocking DC. An inductor passes DC at steady state: I(\u221e) = V/R = 30mA.' },
        ],
      },
      {
        id: 'ch6rv3',
        prompt: 'A design requirement states: steady-state current = 0mA AND initial current = 50mA. Which component configuration meets both requirements?',
        choices: [
          { id: 'ch6rv3-a', label: 'Capacitor in series with R = V/0.05 \u03a9: I(0) = 50mA, I(\u221e) = 0mA', isCorrect: true, explanation: 'Correct. A capacitor in series: I(0) = V/R = 50mA (choose R = V/0.05). At steady state, the capacitor blocks DC: I(\u221e) = 0mA. Both requirements are met.' },
          { id: 'ch6rv3-b', label: 'Inductor in series: I(0) = 50mA, I(\u221e) = 0mA', isCorrect: false, explanation: 'An inductor gives I(0) = 0mA and I(\u221e) = V/R. This is the opposite of both requirements.' },
          { id: 'ch6rv3-c', label: 'Pure resistor: both requirements are met simultaneously', isCorrect: false, explanation: 'A pure resistor gives constant current V/R at all times. It cannot produce maximum initial current that then falls to zero.' },
        ],
      },
    ],
  },
];

export default quizzes;
