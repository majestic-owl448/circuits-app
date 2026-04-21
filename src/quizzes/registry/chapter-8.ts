import type { QuizConfig } from '../../types/quiz.ts';

const quizzes: QuizConfig[] = [
  {
    id: 'quiz-ch8-diode-basics',
    title: 'Diode Basics',
    unlockedBy: 'lesson-ch8-1-1',
    passingScore: 60,
    questions: [
      {
        id: 'ch8db1',
        prompt: 'What is a diode and what makes it fundamentally different from a resistor?',
        choices: [
          { id: 'ch8db1-a', label: 'A diode stores charge like a capacitor, while a resistor dissipates energy as heat', isCorrect: false, explanation: 'Diodes do not store charge. Energy storage is the role of capacitors. The key distinction between a diode and a resistor is directional behavior.' },
          { id: 'ch8db1-b', label: 'A diode has directional behavior — it allows current in one orientation and blocks it in the other — while a resistor impedes current equally in both directions', isCorrect: true, explanation: 'Correct. The diode\'s defining feature is its orientation-dependent behavior. A resistor has no preferred direction; a diode does.' },
          { id: 'ch8db1-c', label: 'A diode increases voltage for components downstream of it, while a resistor decreases it', isCorrect: false, explanation: 'A diode does not boost voltage. It controls the direction of current flow, not the voltage level.' },
        ],
      },
      {
        id: 'ch8db2',
        prompt: 'In the simplified instructional model, what is the diode\'s role in a circuit?',
        choices: [
          { id: 'ch8db2-a', label: 'It limits the maximum current that can flow through the circuit', isCorrect: false, explanation: 'Limiting maximum current is the role of a resistor or a fuse. The diode\'s role is directional gating.' },
          { id: 'ch8db2-b', label: 'It acts as a one-way gate for current — allowing flow in one direction and blocking it in the other', isCorrect: true, explanation: 'Correct. In the simplified model, the diode is a one-way valve for current. Forward-biased: conducts. Reverse-biased: blocks.' },
          { id: 'ch8db2-c', label: 'It converts DC into pulsed AC automatically', isCorrect: false, explanation: 'A diode does not convert DC to AC. It enforces directional behavior on whatever current is present.' },
        ],
      },
      {
        id: 'ch8db3',
        prompt: 'Why is the diode categorized as an "active component" in this course\'s instructional model?',
        choices: [
          { id: 'ch8db3-a', label: 'Because it requires an external power supply to operate', isCorrect: false, explanation: 'Diodes do not require a separate power supply. They are called active components because they control or shape circuit behavior, not because they need their own supply.' },
          { id: 'ch8db3-b', label: 'Because it controls or shapes circuit behavior — going beyond simply impeding or storing energy', isCorrect: true, explanation: 'Correct. Active components, as used in this course, are those that control or shape behavior. A diode controls current direction, which is more than simple impedance or storage.' },
          { id: 'ch8db3-c', label: 'Because it produces electrical energy from light or heat', isCorrect: false, explanation: 'Energy generation from light or heat describes photovoltaic or thermoelectric effects, not the standard diode role covered in this chapter.' },
        ],
      },
    ],
  },
  {
    id: 'quiz-ch8-diode-orientation-basics',
    title: 'Diode Orientation Basics',
    unlockedBy: 'lesson-ch8-1-2',
    passingScore: 60,
    questions: [
      {
        id: 'ch8do1',
        prompt: 'What does "forward-biased" mean for a diode?',
        choices: [
          { id: 'ch8do1-a', label: 'The diode is oriented so that it blocks current — the reverse orientation', isCorrect: false, explanation: 'Blocking orientation is reverse-biased, not forward-biased. Forward-biased means the diode is in the conducting orientation.' },
          { id: 'ch8do1-b', label: 'The diode is oriented to allow current to flow — it is in the conducting orientation', isCorrect: true, explanation: 'Correct. A forward-biased diode is oriented in the direction that allows current to conduct through it.' },
          { id: 'ch8do1-c', label: 'The diode is connected to a higher voltage than its rated maximum', isCorrect: false, explanation: 'Forward bias is about orientation relative to current direction, not about exceeding a voltage rating.' },
        ],
      },
      {
        id: 'ch8do2',
        prompt: 'What happens when a diode is reverse-biased?',
        choices: [
          { id: 'ch8do2-a', label: 'The diode conducts at double the normal current', isCorrect: false, explanation: 'Reverse bias does not increase current — it blocks current. The diode prevents flow in the reverse orientation.' },
          { id: 'ch8do2-b', label: 'The diode blocks current — no current flows through the diode', isCorrect: true, explanation: 'Correct. In the simplified model, a reverse-biased diode blocks current entirely. The path through the diode is open.' },
          { id: 'ch8do2-c', label: 'The diode converts the reverse current into heat and dissipates it', isCorrect: false, explanation: 'In the simplified model, a reverse-biased diode blocks current — it does not convert or dissipate it.' },
        ],
      },
      {
        id: 'ch8do3',
        prompt: 'How can you identify whether a diode is forward-biased or reverse-biased in a circuit?',
        choices: [
          { id: 'ch8do3-a', label: 'By measuring the resistance across the diode — forward-biased diodes have higher resistance', isCorrect: false, explanation: 'Forward-biased diodes have lower effective resistance (they conduct). Reverse-biased diodes have very high resistance. But the orientation is determined by the circuit, not just resistance measurement.' },
          { id: 'ch8do3-b', label: 'By examining the diode\'s orientation relative to the intended direction of current flow in the circuit', isCorrect: true, explanation: 'Correct. Forward bias means the diode is oriented so that the intended current direction aligns with its conducting orientation. Reverse bias means the diode faces the opposite way relative to intended current flow.' },
          { id: 'ch8do3-c', label: 'By counting how many components are connected before the diode in the circuit', isCorrect: false, explanation: 'The number of components before the diode does not determine its bias. Bias is about orientation relative to current direction.' },
        ],
      },
    ],
  },
  {
    id: 'quiz-ch8-diode-use-in-simple-circuits',
    title: 'Diode Use in Simple Circuits',
    unlockedBy: 'lesson-ch8-1-3',
    passingScore: 60,
    questions: [
      {
        id: 'ch8ds1',
        prompt: 'When is a diode the appropriate component to add to a DC circuit?',
        choices: [
          { id: 'ch8ds1-a', label: 'When you want to increase the voltage available to the load', isCorrect: false, explanation: 'A diode does not boost voltage. Voltage boosting requires a separate type of converter circuit.' },
          { id: 'ch8ds1-b', label: 'When the design goal is to ensure current can only flow in one specific direction', isCorrect: true, explanation: 'Correct. A diode is the right choice when directional enforcement is the goal — preventing reverse current or ensuring a one-way path.' },
          { id: 'ch8ds1-c', label: 'When you need to store energy between bursts of current from the source', isCorrect: false, explanation: 'Energy storage is the role of capacitors (for electrical energy) or inductors (for magnetic energy). A diode does not store energy.' },
        ],
      },
      {
        id: 'ch8ds2',
        prompt: 'How does a diode compare to a switch for enforcing one-directional current flow?',
        choices: [
          { id: 'ch8ds2-a', label: 'A switch is better — it can block current in both directions when open', isCorrect: false, explanation: 'While a switch can block all current, it cannot enforce directionality automatically. A diode blocks only reverse current while automatically passing forward current.' },
          { id: 'ch8ds2-b', label: 'A diode is better for direction enforcement — it automatically passes forward current and blocks reverse current without needing to be manually operated', isCorrect: true, explanation: 'Correct. A diode enforces direction automatically and passively. A switch is manually operated and does not differentiate by direction — it either blocks all or passes all.' },
          { id: 'ch8ds2-c', label: 'They are functionally identical for direction enforcement', isCorrect: false, explanation: 'They are not identical. A switch blocks or passes all current. A diode specifically allows one direction and blocks the other, automatically.' },
        ],
      },
      {
        id: 'ch8ds3',
        prompt: 'A circuit designer wants to protect a battery from current that might flow back into it from other parts of the circuit. What is the most direct solution?',
        choices: [
          { id: 'ch8ds3-a', label: 'Add a resistor in series with the battery to limit any reverse current', isCorrect: false, explanation: 'A resistor limits the magnitude of reverse current but does not block it. The battery would still receive some reverse current.' },
          { id: 'ch8ds3-b', label: 'Add a diode in series with the battery, oriented to allow normal current flow and block reverse flow', isCorrect: true, explanation: 'Correct. Placing a forward-biased diode in series with the battery allows the intended current out but blocks any reverse current from flowing back in.' },
          { id: 'ch8ds3-c', label: 'Add a transistor in series, keeping its control permanently enabled', isCorrect: false, explanation: 'A transistor with a permanently enabled control conducts in both directions and does not provide directional protection.' },
        ],
      },
    ],
  },
  {
    id: 'quiz-ch8-diode-and-ac-basics',
    title: 'Diode and AC Basics',
    unlockedBy: 'lesson-ch8-2-1',
    passingScore: 60,
    questions: [
      {
        id: 'ch8ac1',
        prompt: 'What does a diode do when an AC signal is applied to a circuit containing it?',
        choices: [
          { id: 'ch8ac1-a', label: 'It passes both halves of the AC cycle equally, just with reduced amplitude', isCorrect: false, explanation: 'A diode does not reduce amplitude equally on both halves. It blocks one half entirely based on its orientation.' },
          { id: 'ch8ac1-b', label: 'It passes only the half of the AC cycle that matches its forward orientation and blocks the reverse half', isCorrect: true, explanation: 'Correct. A diode conducts during the half-cycle when current tries to flow in the forward direction, and blocks during the half-cycle when current tries to flow in reverse.' },
          { id: 'ch8ac1-c', label: 'It converts the AC signal to a constant DC voltage by averaging the waveform', isCorrect: false, explanation: 'A single diode does not produce constant DC — it produces pulsed DC by passing only the forward half-cycles. Smoothing to constant DC requires additional components.' },
        ],
      },
      {
        id: 'ch8ac2',
        prompt: 'How does the diode\'s behavior with AC connect to the concept of rectification introduced in Chapter 7?',
        choices: [
          { id: 'ch8ac2-a', label: 'Rectification uses a transformer, which is a different component from the diode', isCorrect: false, explanation: 'Rectification is specifically achieved by diodes (or diode-based circuits). A transformer changes voltage levels, not current type.' },
          { id: 'ch8ac2-b', label: 'The diode\'s directional blocking is the mechanism that enables rectification — it removes the reverse half of each AC cycle', isCorrect: true, explanation: 'Correct. Rectification is possible precisely because the diode blocks the reverse half of the AC cycle. The diode is the core component that implements the rectification function.' },
          { id: 'ch8ac2-c', label: 'Rectification and diode behavior are unrelated — rectification uses capacitors, not diodes', isCorrect: false, explanation: 'Rectification is achieved using diodes. Capacitors can smooth the result but are not the rectifying element.' },
        ],
      },
      {
        id: 'ch8ac3',
        prompt: 'After a diode processes an AC signal, what type of signal remains at the output?',
        choices: [
          { id: 'ch8ac3-a', label: 'True DC — a perfectly constant and smooth voltage', isCorrect: false, explanation: 'A single diode produces pulsed DC, not smooth DC. Only the forward half-cycles are present, creating pulses rather than a constant level.' },
          { id: 'ch8ac3-b', label: 'Pulsed DC — only the forward half-cycles are present, and they all point in one direction', isCorrect: true, explanation: 'Correct. After the diode blocks the reverse half-cycles, the output contains only the forward half-cycles — a series of pulses all in one direction. This is pulsed DC.' },
          { id: 'ch8ac3-c', label: 'The original AC signal unchanged — a diode does not affect AC', isCorrect: false, explanation: 'A diode significantly affects AC by blocking the reverse half-cycles. The AC input and the diode output are very different signals.' },
        ],
      },
    ],
  },
  {
    id: 'quiz-ch8-rectification-basics',
    title: 'Rectification Basics',
    unlockedBy: 'lesson-ch8-2-2',
    passingScore: 60,
    questions: [
      {
        id: 'ch8rc1',
        prompt: 'What is rectification?',
        choices: [
          { id: 'ch8rc1-a', label: 'The process of increasing the voltage of an AC signal', isCorrect: false, explanation: 'Voltage boosting is a different process. Rectification specifically converts alternating current into one-directional (pulsed) current.' },
          { id: 'ch8rc1-b', label: 'The process of converting AC into pulsed DC by blocking the reverse half of each cycle', isCorrect: true, explanation: 'Correct. Rectification uses the diode\'s directional behavior to block one half of the AC cycle, leaving only the forward half-cycles — producing pulsed DC.' },
          { id: 'ch8rc1-c', label: 'The process of smoothing pulsed DC into perfectly constant DC', isCorrect: false, explanation: 'Smoothing pulsed DC into constant DC (filtering) is a second step that follows rectification. Rectification itself only removes the reverse half-cycles.' },
        ],
      },
      {
        id: 'ch8rc2',
        prompt: 'How is pulsed DC different from true (smooth) DC?',
        choices: [
          { id: 'ch8rc2-a', label: 'Pulsed DC flows in both directions, alternating between positive and negative', isCorrect: false, explanation: 'Pulsed DC flows in one direction only — it still has directionality. The difference from smooth DC is that it varies in magnitude (pulses) rather than being constant.' },
          { id: 'ch8rc2-b', label: 'Pulsed DC flows only in one direction but varies in magnitude — it has pulses rather than a constant level', isCorrect: true, explanation: 'Correct. Pulsed DC is unidirectional (never reverses) but not constant — it goes from zero to peak and back, creating a pulsing pattern rather than a flat line.' },
          { id: 'ch8rc2-c', label: 'Pulsed DC and smooth DC are identical — both are constant unidirectional current', isCorrect: false, explanation: 'Smooth DC is constant and flat. Pulsed DC varies in magnitude over time, even though both flow in only one direction.' },
        ],
      },
      {
        id: 'ch8rc3',
        prompt: 'Why does a diode enable rectification?',
        choices: [
          { id: 'ch8rc3-a', label: 'Because the diode adds resistance that slows down the reverse half-cycles', isCorrect: false, explanation: 'Rectification is not about slowing down reverse current — it is about blocking it entirely. The diode blocks the reverse half-cycles based on its directional property.' },
          { id: 'ch8rc3-b', label: 'Because the diode\'s directional behavior blocks the reverse half of each AC cycle, leaving only the forward half-cycles — pulsed DC', isCorrect: true, explanation: 'Correct. Rectification relies entirely on the diode\'s directional blocking. By blocking the reverse half-cycles, the diode converts the bidirectional AC signal into a unidirectional pulsed output.' },
          { id: 'ch8rc3-c', label: 'Because the diode stores one half-cycle and releases it to combine with the other half-cycle', isCorrect: false, explanation: 'Diodes do not store energy. Rectification is purely a blocking function: the diode passes forward half-cycles and blocks reverse half-cycles.' },
        ],
      },
    ],
  },
  {
    id: 'quiz-ch8-rectified-versus-unrectified-basics',
    title: 'Rectified Versus Unrectified Basics',
    unlockedBy: 'lesson-ch8-2-3',
    passingScore: 60,
    questions: [
      {
        id: 'ch8ru1',
        prompt: 'Compare the output waveform of a rectified circuit to an unrectified AC circuit. What is the key difference?',
        choices: [
          { id: 'ch8ru1-a', label: 'The rectified output has higher peak amplitude than the unrectified AC', isCorrect: false, explanation: 'Rectification does not increase amplitude — it removes the reverse half-cycles. The peak value of the forward half-cycles is the same as the AC source.' },
          { id: 'ch8ru1-b', label: 'The unrectified AC output alternates between positive and negative; the rectified output contains only the forward (positive) half-cycles as pulses', isCorrect: true, explanation: 'Correct. Unrectified AC has equal positive and negative half-cycles. Rectified output eliminates the negative half-cycles, leaving only the positive pulses.' },
          { id: 'ch8ru1-c', label: 'They are identical — the diode does not change the output waveform', isCorrect: false, explanation: 'The diode significantly changes the waveform by blocking the reverse half-cycles. The rectified output is clearly different from the original AC.' },
        ],
      },
      {
        id: 'ch8ru2',
        prompt: 'Why is pulsed DC from a rectifier better suited for a DC load than the original AC signal?',
        choices: [
          { id: 'ch8ru2-a', label: 'Because pulsed DC has higher average power than AC', isCorrect: false, explanation: 'Pulsed DC from a half-wave rectifier actually has lower average power than the original AC. The advantage is directionality, not power level.' },
          { id: 'ch8ru2-b', label: 'Because pulsed DC flows in only one direction, which is what a DC load requires — it does not try to push current the wrong way through the load', isCorrect: true, explanation: 'Correct. DC loads require unidirectional current. Pulsed DC satisfies this requirement: even though it is not perfectly constant, it never reverses direction.' },
          { id: 'ch8ru2-c', label: 'Because pulsed DC is exactly what all loads require — there is no such thing as a load that benefits from smooth DC', isCorrect: false, explanation: 'Many loads benefit from smooth, constant DC. Pulsed DC is a step toward DC compatibility but smoothing is often needed for sensitive electronics.' },
        ],
      },
      {
        id: 'ch8ru3',
        prompt: 'What is the role of the diode stage in an AC-to-DC power conversion system?',
        choices: [
          { id: 'ch8ru3-a', label: 'To regulate the output voltage to a precise constant value', isCorrect: false, explanation: 'Voltage regulation is a separate function handled by voltage regulator circuits, not the diode stage alone.' },
          { id: 'ch8ru3-b', label: 'To convert the bidirectional AC signal into a unidirectional pulsed DC signal by blocking the reverse half-cycles', isCorrect: true, explanation: 'Correct. The diode stage is the rectification stage: it transforms AC (bidirectional) into pulsed DC (unidirectional) by blocking the reverse half-cycles.' },
          { id: 'ch8ru3-c', label: 'To increase the frequency of the AC signal before the load', isCorrect: false, explanation: 'Frequency conversion is a separate function. The diode stage in a rectifier changes the direction characteristic of the signal, not its frequency.' },
        ],
      },
    ],
  },
  {
    id: 'quiz-ch8-transistor-basics',
    title: 'Transistor Basics',
    unlockedBy: 'lesson-ch8-3-1',
    passingScore: 60,
    questions: [
      {
        id: 'ch8tb1',
        prompt: 'What is a transistor in the simplified instructional model?',
        choices: [
          { id: 'ch8tb1-a', label: 'A component that stores charge and releases it when the circuit needs extra current', isCorrect: false, explanation: 'Charge storage is the role of a capacitor. A transistor is a controlled switch.' },
          { id: 'ch8tb1-b', label: 'A controlled switch — a separate control signal determines whether current can flow through the main circuit path', isCorrect: true, explanation: 'Correct. In the simplified model, a transistor is a switch controlled by an external signal. The control determines whether the main path conducts or blocks.' },
          { id: 'ch8tb1-c', label: 'A component that converts AC to DC like a diode', isCorrect: false, explanation: 'Rectification is a diode function. The transistor\'s role is controlled switching, not current-type conversion.' },
        ],
      },
      {
        id: 'ch8tb2',
        prompt: 'What is the "control signal" in a transistor circuit?',
        choices: [
          { id: 'ch8tb2-a', label: 'The voltage of the battery that powers the main load', isCorrect: false, explanation: 'The battery powers the main (controlled) path. The control signal is a separate input that determines the transistor\'s state — it is distinct from the load power supply.' },
          { id: 'ch8tb2-b', label: 'A separate signal that tells the transistor whether to conduct or block — enabling or disabling the main current path', isCorrect: true, explanation: 'Correct. The control signal is separate from the main circuit. It governs the transistor\'s state: enabled → transistor conducts; disabled → transistor blocks.' },
          { id: 'ch8tb2-c', label: 'The resistance of the load connected to the transistor output', isCorrect: false, explanation: 'Load resistance is a property of the controlled path. The control signal is a separate input to the transistor.' },
        ],
      },
      {
        id: 'ch8tb3',
        prompt: 'How does a transistor differ from a diode in terms of what determines its behavior?',
        choices: [
          { id: 'ch8tb3-a', label: 'Both are controlled by the same thing — the direction of current in the circuit', isCorrect: false, explanation: 'A diode responds to current direction. A transistor responds to a separate control signal. They are controlled by fundamentally different inputs.' },
          { id: 'ch8tb3-b', label: 'A diode responds to its orientation relative to current direction; a transistor responds to a separate external control signal', isCorrect: true, explanation: 'Correct. The diode\'s behavior is determined by its orientation and current direction. The transistor\'s behavior is determined by an external control signal — they respond to different inputs.' },
          { id: 'ch8tb3-c', label: 'A transistor responds to current direction; a diode responds to an external control signal', isCorrect: false, explanation: 'This is reversed. The diode is orientation/direction-based; the transistor is control-signal-based.' },
        ],
      },
    ],
  },
  {
    id: 'quiz-ch8-transistor-switch-basics',
    title: 'Transistor Switch Basics',
    unlockedBy: 'lesson-ch8-3-2',
    passingScore: 60,
    questions: [
      {
        id: 'ch8ts1',
        prompt: 'A transistor in its ON state (control enabled) is in a series circuit with a battery and a load. What is the circuit behavior?',
        choices: [
          { id: 'ch8ts1-a', label: 'The transistor blocks current — ON state means the transistor is preventing flow', isCorrect: false, explanation: 'ON state means the control is enabled and the transistor is conducting. The load receives current when the transistor is ON.' },
          { id: 'ch8ts1-b', label: 'Current flows from the battery through the transistor to the load — the transistor is conducting like a closed switch', isCorrect: true, explanation: 'Correct. An enabled transistor (ON state) conducts, just like a closed switch. The load receives current.' },
          { id: 'ch8ts1-c', label: 'The transistor partially reduces current — it acts as a variable resistor in the ON state', isCorrect: false, explanation: 'In the simplified model, the transistor is fully conducting when ON. It does not act as a variable resistor.' },
        ],
      },
      {
        id: 'ch8ts2',
        prompt: 'What is the load behavior when the transistor switches to its OFF state (control disabled)?',
        choices: [
          { id: 'ch8ts2-a', label: 'The load operates at half its normal power', isCorrect: false, explanation: 'In the OFF state, the transistor blocks the path entirely. The load receives no current — not reduced current.' },
          { id: 'ch8ts2-b', label: 'The load is completely inactive — the transistor blocks the path and no current reaches the load', isCorrect: true, explanation: 'Correct. In the OFF state the transistor acts like an open switch. The current path is broken and the load receives no current.' },
          { id: 'ch8ts2-c', label: 'The load continues operating because the battery is still connected', isCorrect: false, explanation: 'Battery connection alone does not ensure load operation. The transistor in the OFF state breaks the path between the battery and the load.' },
        ],
      },
      {
        id: 'ch8ts3',
        prompt: 'What is the primary advantage of a transistor switch over a mechanical switch in electronic systems?',
        choices: [
          { id: 'ch8ts3-a', label: 'A transistor switch uses more power, making circuits run faster', isCorrect: false, explanation: 'Power consumption is not the distinguishing advantage. Transistors can actually be very power-efficient.' },
          { id: 'ch8ts3-b', label: 'A transistor can be switched by a small electronic signal, has no moving parts, and can switch millions of times per second — enabling automation and digital logic', isCorrect: true, explanation: 'Correct. Electronic control, no moving parts, and extremely high switching speed are the key advantages of transistor switches over mechanical switches.' },
          { id: 'ch8ts3-c', label: 'A transistor switch is always preferred at lower voltages; a mechanical switch is always preferred at higher voltages', isCorrect: false, explanation: 'The choice between transistor and mechanical switch depends on the application requirements (automation, speed, signal-based control), not simply on voltage level.' },
        ],
      },
    ],
  },
  {
    id: 'quiz-ch8-transistor-control-basics',
    title: 'Transistor Control Basics',
    unlockedBy: 'lesson-ch8-3-3',
    passingScore: 60,
    questions: [
      {
        id: 'ch8tc1',
        prompt: 'In a transistor circuit, what is the distinction between the "control path" and the "controlled path"?',
        choices: [
          { id: 'ch8tc1-a', label: 'The control path carries the main load current; the controlled path carries only the small control signal', isCorrect: false, explanation: 'This is reversed. The control path carries the small control signal. The controlled path carries the main current and contains the load.' },
          { id: 'ch8tc1-b', label: 'The control path carries the signal that determines the transistor\'s state; the controlled path is the main circuit containing the load that the transistor switches', isCorrect: true, explanation: 'Correct. The control path determines what the transistor does. The controlled path is what the transistor switches on or off.' },
          { id: 'ch8tc1-c', label: 'They are the same path — control and controlled signals flow through the same wire', isCorrect: false, explanation: 'The control path and controlled path are distinct. Their separation is what makes the transistor a flexible isolation element between logic and power.' },
        ],
      },
      {
        id: 'ch8tc2',
        prompt: 'A small sensor signal cannot directly power a large motor. How does a transistor solve this problem?',
        choices: [
          { id: 'ch8tc2-a', label: 'The transistor amplifies the sensor signal until it is large enough to power the motor directly', isCorrect: false, explanation: 'In the simplified model, the transistor is a switch, not an amplifier. The sensor signal controls the transistor\'s state; the motor is powered by a separate supply through the controlled path.' },
          { id: 'ch8tc2-b', label: 'The transistor uses the sensor signal as the control input to switch the motor\'s power path on or off — the sensor does not need to power the motor directly', isCorrect: true, explanation: 'Correct. The transistor separates the control from the controlled. The small sensor signal tells the transistor what state to be in; the motor is powered through a separate path that the transistor switches.' },
          { id: 'ch8tc2-c', label: 'The transistor stores energy from the sensor signal and combines it with battery energy to drive the motor', isCorrect: false, explanation: 'Transistors do not store energy. The transistor is a switch: the sensor signal controls the switch state, and a separate power supply drives the motor.' },
        ],
      },
      {
        id: 'ch8tc3',
        prompt: 'Why is the separation of the control path from the controlled path valuable in circuit design?',
        choices: [
          { id: 'ch8tc3-a', label: 'It has no practical value — combining the paths would produce the same result with less complexity', isCorrect: false, explanation: 'Path separation is essential. It allows low-power logic to control high-power loads safely and without requiring the logic circuit to carry load currents.' },
          { id: 'ch8tc3-b', label: 'It allows low-power control logic to switch high-power load paths without direct connection, enabling flexible and safe circuit design', isCorrect: true, explanation: 'Correct. Separating control and controlled paths means the logic circuit never handles the large currents of the load path, improving safety, flexibility, and scalability.' },
          { id: 'ch8tc3-c', label: 'It reduces the total voltage required by the circuit', isCorrect: false, explanation: 'Path separation does not reduce voltage requirements. Its value is in the functional separation between control logic and load power circuits.' },
        ],
      },
    ],
  },
  {
    id: 'quiz-ch8-component-choice-basics',
    title: 'Component Choice Basics',
    unlockedBy: 'lesson-ch8-4-1',
    passingScore: 60,
    questions: [
      {
        id: 'ch8cc1',
        prompt: 'A design requires that current only flows in one direction regardless of the source polarity. Which component should be used?',
        choices: [
          { id: 'ch8cc1-a', label: 'A transistor — it can be configured to block reverse current', isCorrect: false, explanation: 'A transistor blocks based on a control signal, not based on current direction. It cannot enforce directionality automatically.' },
          { id: 'ch8cc1-b', label: 'A diode — it enforces directionality automatically based on its orientation', isCorrect: true, explanation: 'Correct. The diode\'s directional behavior is intrinsic. It passes forward current and blocks reverse current automatically, without any control signal.' },
          { id: 'ch8cc1-c', label: 'Either component can enforce directionality equally well', isCorrect: false, explanation: 'Only the diode enforces directionality by its orientation. A transistor\'s blocking depends on a control condition, not on current direction.' },
        ],
      },
      {
        id: 'ch8cc2',
        prompt: 'A circuit needs to allow a small electronic signal from a sensor to turn a large load on or off. Which component is correct?',
        choices: [
          { id: 'ch8cc2-a', label: 'A diode — it can be oriented to pass only signals from the sensor', isCorrect: false, explanation: 'A diode cannot respond to a separate signal. It operates based on its orientation relative to current direction, not on external signal commands.' },
          { id: 'ch8cc2-b', label: 'A transistor — it uses a separate control input to switch the load path based on the sensor signal', isCorrect: true, explanation: 'Correct. The transistor is designed for exactly this: a small control signal from the sensor governs whether the transistor conducts, which determines whether the load is active.' },
          { id: 'ch8cc2-c', label: 'A resistor — adding resistance limits the sensor signal to a safe level for the load', isCorrect: false, explanation: 'A resistor limits current but does not switch the load path based on a signal. The problem requires a controlled switch, which is the transistor.' },
        ],
      },
      {
        id: 'ch8cc3',
        prompt: 'What is the decision rule for choosing between a diode and a transistor?',
        choices: [
          { id: 'ch8cc3-a', label: 'Use a diode at high voltages; use a transistor at low voltages', isCorrect: false, explanation: 'The choice is not based on voltage level. It is based on design goal: directionality vs control.' },
          { id: 'ch8cc3-b', label: 'If the design goal is directional enforcement, use a diode. If the design goal is electronic control, use a transistor', isCorrect: true, explanation: 'Correct. The design goal determines the component. Directionality → diode. Control (switching by signal) → transistor.' },
          { id: 'ch8cc3-c', label: 'Always use a transistor — it can do everything a diode can do and more', isCorrect: false, explanation: 'A transistor cannot enforce directionality automatically. It requires a separate control signal to block, and cannot distinguish forward from reverse current. The diode is the correct component for directional goals.' },
        ],
      },
    ],
  },
  {
    id: 'quiz-ch8-simple-control-circuit-basics',
    title: 'Simple Control-Circuit Basics',
    unlockedBy: 'lesson-ch8-4-2',
    passingScore: 60,
    questions: [
      {
        id: 'ch8sc1',
        prompt: 'In a transistor control circuit, the load should only operate when a specific condition is met. What enables this behavior?',
        choices: [
          { id: 'ch8sc1-a', label: 'The battery — it only supplies power when the condition is met', isCorrect: false, explanation: 'The battery supplies power continuously. It is the transistor\'s control state that determines whether that power reaches the load.' },
          { id: 'ch8sc1-b', label: 'The transistor acting as a condition gate — the load path is open only when the transistor\'s control is enabled', isCorrect: true, explanation: 'Correct. The transistor acts as a condition gate: when the control condition is met (enabled), the transistor opens the path; when not met, it closes the path.' },
          { id: 'ch8sc1-c', label: 'The wires — they only carry current when the circuit has the correct conditions', isCorrect: false, explanation: 'Wires are passive conductors. The conditional behavior comes from the transistor, not the wires.' },
        ],
      },
      {
        id: 'ch8sc2',
        prompt: 'The transistor in a control circuit is disabled. The battery is still connected and the wires are intact. What is the load doing?',
        choices: [
          { id: 'ch8sc2-a', label: 'The load is operating at full power because the battery is connected', isCorrect: false, explanation: 'Battery connection alone does not guarantee load operation. The disabled transistor blocks the path between the battery and the load.' },
          { id: 'ch8sc2-b', label: 'The load is completely inactive because the disabled transistor blocks the current path', isCorrect: true, explanation: 'Correct. A disabled transistor blocks the path entirely. Even with the battery connected and wires intact, no current reaches the load.' },
          { id: 'ch8sc2-c', label: 'The load operates intermittently because the transistor partially passes current when disabled', isCorrect: false, explanation: 'In the simplified model, a disabled transistor fully blocks — it does not partially pass current.' },
        ],
      },
      {
        id: 'ch8sc3',
        prompt: 'Why is a transistor-controlled circuit more suitable for automation than a circuit with only a manual mechanical switch?',
        choices: [
          { id: 'ch8sc3-a', label: 'Because transistors consume less power than mechanical switches at all times', isCorrect: false, explanation: 'Power consumption is not the primary automation advantage. The key is that transistors can be switched by electronic signals without physical human action.' },
          { id: 'ch8sc3-b', label: 'Because the transistor\'s control can be driven by electronic signals — from sensors, logic circuits, or microcontrollers — without physical human intervention', isCorrect: true, explanation: 'Correct. The transistor\'s control input accepts electronic signals, enabling automated systems where sensors or logic determine when loads operate without human intervention.' },
          { id: 'ch8sc3-c', label: 'Because mechanical switches are prohibited in modern circuits by safety standards', isCorrect: false, explanation: 'Mechanical switches are widely used in modern circuits. The choice between transistor and mechanical switch is functional, not regulatory.' },
        ],
      },
    ],
  },
  {
    id: 'quiz-ch8-chapter-8-review-quiz',
    title: 'Chapter 8 Review Quiz',
    unlockedBy: 'lesson-ch8-5-1',
    passingScore: 60,
    questions: [
      {
        id: 'ch8rv1',
        prompt: 'Which statement best summarizes the difference between a diode and a transistor?',
        choices: [
          { id: 'ch8rv1-a', label: 'A diode is controlled by an external signal; a transistor responds to its orientation', isCorrect: false, explanation: 'This is reversed. The diode responds to its orientation relative to current direction; the transistor is controlled by an external signal.' },
          { id: 'ch8rv1-b', label: 'A diode enforces current directionality automatically based on orientation; a transistor enables one part of a circuit to control another via a separate control signal', isCorrect: true, explanation: 'Correct. This captures the core distinction: directionality (diode) vs. control (transistor).' },
          { id: 'ch8rv1-c', label: 'Both components are functionally identical — either can be used in any situation', isCorrect: false, explanation: 'Diodes and transistors serve distinct design goals. Using the wrong one for a given goal results in a non-functional design.' },
        ],
      },
      {
        id: 'ch8rv2',
        prompt: 'A diode is used in a circuit where a transistor is needed (the design goal requires a controllable switch). What will happen?',
        choices: [
          { id: 'ch8rv2-a', label: 'The diode will function as a switch because its forward-biased state acts like a closed switch', isCorrect: false, explanation: 'While a forward-biased diode does conduct, it cannot be switched on or off by a separate control signal. It will always conduct in the forward direction, regardless of any control condition.' },
          { id: 'ch8rv2-b', label: 'The control path will have no effect — a diode has no control input and cannot respond to a control signal', isCorrect: true, explanation: 'Correct. A diode has no control input. If the goal requires a controllable switch, a diode cannot fulfill this role regardless of the control signal present.' },
          { id: 'ch8rv2-c', label: 'The circuit will work correctly because all active components are interchangeable', isCorrect: false, explanation: 'Active components are not interchangeable. Each has a specific function. Using a diode where a transistor is needed means the control goal cannot be achieved.' },
        ],
      },
      {
        id: 'ch8rv3',
        prompt: 'What makes the diode the correct choice for rectification in an AC-to-DC conversion system?',
        choices: [
          { id: 'ch8rv3-a', label: 'The diode regulates the output voltage to a constant level', isCorrect: false, explanation: 'Voltage regulation requires a separate regulator circuit. The diode\'s role in rectification is directional blocking, not voltage regulation.' },
          { id: 'ch8rv3-b', label: 'The diode\'s directional behavior automatically blocks the reverse half of each AC cycle, producing pulsed DC', isCorrect: true, explanation: 'Correct. Rectification requires a component that automatically blocks reverse current. The diode does this inherently through its orientation, without needing any external control.' },
          { id: 'ch8rv3-c', label: 'The diode amplifies the forward half of the AC cycle to compensate for the blocked reverse half', isCorrect: false, explanation: 'Diodes do not amplify. Rectification only removes the reverse half-cycles — the forward half-cycles remain at their original amplitude.' },
        ],
      },
    ],
  },
  {
    id: 'quiz-ch8-integrated-active-component-reasoning',
    title: 'Integrated Active-Component Reasoning',
    unlockedBy: 'lesson-ch8-5-2',
    passingScore: 60,
    questions: [
      {
        id: 'ch8ia1',
        prompt: 'In a two-stage system (AC source → diode → transistor → DC load), what role does each active component play?',
        choices: [
          { id: 'ch8ia1-a', label: 'Diode: switches the load based on a control signal. Transistor: blocks the reverse AC half-cycles.', isCorrect: false, explanation: 'The roles are swapped. The diode handles rectification (blocking reverse cycles); the transistor handles controlled switching.' },
          { id: 'ch8ia1-b', label: 'Diode: rectification (blocks the reverse half of each AC cycle). Transistor: control gating (switches the load based on a control condition).', isCorrect: true, explanation: 'Correct. In this two-stage pipeline, the diode rectifies first, then the transistor gates whether the rectified signal reaches the load.' },
          { id: 'ch8ia1-c', label: 'Both components perform rectification together and the load is switched by a separate switch.', isCorrect: false, explanation: 'Only the diode rectifies. The transistor\'s role is control gating, not rectification.' },
        ],
      },
      {
        id: 'ch8ia2',
        prompt: 'In the two-stage system, what happens if the transistor\'s control is disabled?',
        choices: [
          { id: 'ch8ia2-a', label: 'The diode compensates and the load continues to operate at reduced power', isCorrect: false, explanation: 'The diode has no awareness of the transistor\'s state. If the transistor blocks the path, the load receives no current — the diode cannot compensate for this.' },
          { id: 'ch8ia2-b', label: 'The load receives no current even though the diode is still rectifying — the transistor blocks the path before the load', isCorrect: true, explanation: 'Correct. The transistor blocks the path between the diode output and the load. Even though the diode is producing pulsed DC, the load is isolated from it when the transistor is disabled.' },
          { id: 'ch8ia2-c', label: 'The AC source stops producing current because the transistor blocks the entire circuit', isCorrect: false, explanation: 'The AC source continues operating regardless of the transistor state. The transistor only affects what happens between the diode output and the load.' },
        ],
      },
      {
        id: 'ch8ia3',
        prompt: 'If the diode and transistor are swapped (transistor before diode), how does the function of the diode change?',
        choices: [
          { id: 'ch8ia3-a', label: 'The diode continues to rectify the AC source output because its function is independent of position', isCorrect: false, explanation: 'Each component operates on what it receives from the previous stage. If the transistor comes first, the diode receives the transistor\'s output — not the raw AC — so its role changes.' },
          { id: 'ch8ia3-b', label: 'The diode now operates on the transistor\'s output rather than the raw AC, so it acts as a reverse-current protector rather than a rectifier', isCorrect: true, explanation: 'Correct. Swapping the order changes what each component processes. The diode now receives the transistor\'s switched output and its primary function becomes protecting against reverse current at that point, not rectifying the AC source.' },
          { id: 'ch8ia3-c', label: 'Swapping the order has no effect on the system behavior', isCorrect: false, explanation: 'Order matters in a multi-stage active-component pipeline. Each stage operates on the output of the previous one, so changing the order changes each component\'s effective role.' },
        ],
      },
    ],
  },
];

export default quizzes;
