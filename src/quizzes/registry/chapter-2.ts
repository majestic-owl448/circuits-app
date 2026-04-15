import type { QuizConfig } from '../../types/quiz.ts';

export const quizRegistryChapter2: QuizConfig[] = [
  {
      id: 'quiz-ch2-voltage-values',
      title: 'Voltage Values and Units',
      unlockedBy: 'lesson-ch2-1-1',
      passingScore: 60,
      questions: [
        {
          id: 'vvu1',
          prompt: 'What unit is voltage measured in?',
          choices: [
            { id: 'vvu1-a', label: 'Amperes', isCorrect: false, explanation: 'Amperes are the unit for current, not voltage.' },
            { id: 'vvu1-b', label: 'Volts', isCorrect: true, explanation: 'Correct. Voltage is measured in volts (V).' },
            { id: 'vvu1-c', label: 'Ohms', isCorrect: false, explanation: 'Ohms are the unit for resistance, not voltage.' },
            { id: 'vvu1-d', label: 'Watts', isCorrect: false, explanation: 'Watts are the unit for power, not voltage.' },
          ],
        },
        {
          id: 'vvu2',
          prompt: 'A standard car battery provides approximately:',
          choices: [
            { id: 'vvu2-a', label: '1.5 V', isCorrect: false, explanation: '1.5 V is the voltage of a single AA cell, not a car battery.' },
            { id: 'vvu2-b', label: '9 V', isCorrect: false, explanation: '9 V is the voltage of a rectangular transistor battery.' },
            { id: 'vvu2-c', label: '12 V', isCorrect: true, explanation: 'Correct. A standard car battery provides approximately 12 volts.' },
            { id: 'vvu2-d', label: '120 V', isCorrect: false, explanation: '120 V is a common household outlet voltage in North America, not a car battery.' },
          ],
        },
        {
          id: 'vvu3',
          prompt: 'What does a voltmeter measure?',
          choices: [
            { id: 'vvu3-a', label: 'The current flowing through a wire', isCorrect: false, explanation: 'Current is measured with an ammeter, not a voltmeter.' },
            { id: 'vvu3-b', label: 'The electrical push or potential difference between two points', isCorrect: true, explanation: 'Correct. A voltmeter measures the voltage (potential difference) across a component or source.' },
            { id: 'vvu3-c', label: 'The resistance of a component', isCorrect: false, explanation: 'Resistance is measured with an ohmmeter.' },
          ],
        },
        {
          id: 'vvu4',
          prompt: 'Why is it important to include the unit "V" when writing a voltage value?',
          choices: [
            { id: 'vvu4-a', label: 'It is optional and only used in formal writing', isCorrect: false, explanation: 'Units are essential in circuit analysis to avoid confusion between quantities.' },
            { id: 'vvu4-b', label: 'Because a bare number like "12" could refer to any quantity — volts, ohms, or amps', isCorrect: true, explanation: 'Correct. Without the unit, the number is ambiguous. "12 V" clearly means 12 volts.' },
            { id: 'vvu4-c', label: 'Because the formula will not work without it', isCorrect: false, explanation: 'Formulas work with numbers, but units are needed for clarity and to verify correctness.' },
          ],
        },
        {
          id: 'vvu5',
          prompt: 'A battery is labeled "9 V." This means:',
          choices: [
            { id: 'vvu5-a', label: 'It provides 9 amperes of current', isCorrect: false, explanation: 'The label describes voltage, not current. Amperes depend on the connected load.' },
            { id: 'vvu5-b', label: 'It provides an electrical push of 9 volts', isCorrect: true, explanation: 'Correct. The label tells you the measured voltage — the electrical push the battery provides.' },
            { id: 'vvu5-c', label: 'It has 9 ohms of internal resistance', isCorrect: false, explanation: 'The label indicates voltage, not resistance.' },
          ],
        },
      ],
    },
  {
      id: 'quiz-ch2-resistance-values',
      title: 'Resistance Values and Units',
      unlockedBy: 'lesson-ch2-1-2',
      passingScore: 60,
      questions: [
        {
          id: 'rvu1',
          prompt: 'What symbol represents the ohm?',
          choices: [
            { id: 'rvu1-a', label: '\u03A9 (omega)', isCorrect: true, explanation: 'Correct. The Greek letter omega (\u03A9) is the symbol for ohms.' },
            { id: 'rvu1-b', label: 'V', isCorrect: false, explanation: 'V is the symbol for volts, the unit of voltage.' },
            { id: 'rvu1-c', label: 'A', isCorrect: false, explanation: 'A is the symbol for amperes, the unit of current.' },
          ],
        },
        {
          id: 'rvu2',
          prompt: 'How many ohms are in 1 k\u03A9?',
          choices: [
            { id: 'rvu2-a', label: '10 \u03A9', isCorrect: false, explanation: 'The prefix "k" (kilo) means 1,000, not 10.' },
            { id: 'rvu2-b', label: '100 \u03A9', isCorrect: false, explanation: 'The prefix "k" (kilo) means 1,000, not 100.' },
            { id: 'rvu2-c', label: '1,000 \u03A9', isCorrect: true, explanation: 'Correct. 1 k\u03A9 (kilohm) equals 1,000 ohms.' },
            { id: 'rvu2-d', label: '1,000,000 \u03A9', isCorrect: false, explanation: 'That would be 1 M\u03A9 (megohm), not 1 k\u03A9.' },
          ],
        },
        {
          id: 'rvu3',
          prompt: 'What instrument do you use to measure the resistance of a disconnected component?',
          choices: [
            { id: 'rvu3-a', label: 'A voltmeter', isCorrect: false, explanation: 'A voltmeter measures voltage across a component, not its resistance.' },
            { id: 'rvu3-b', label: 'An ammeter', isCorrect: false, explanation: 'An ammeter measures current, not resistance.' },
            { id: 'rvu3-c', label: 'An ohmmeter', isCorrect: true, explanation: 'Correct. An ohmmeter measures the resistance of a component when it is disconnected from the circuit.' },
          ],
        },
        {
          id: 'rvu4',
          prompt: 'A resistor is labeled 470 \u03A9. What does this tell you?',
          choices: [
            { id: 'rvu4-a', label: 'It allows 470 amperes of current', isCorrect: false, explanation: 'The label indicates resistance, not current. Current depends on voltage too.' },
            { id: 'rvu4-b', label: 'It opposes current flow with 470 ohms of resistance', isCorrect: true, explanation: 'Correct. The 470 \u03A9 value tells you how strongly the resistor opposes current.' },
            { id: 'rvu4-c', label: 'It provides 470 volts', isCorrect: false, explanation: 'Resistors do not provide voltage. The label indicates resistance.' },
          ],
        },
        {
          id: 'rvu5',
          prompt: 'If component A has higher resistance than component B, which allows more current for the same voltage?',
          choices: [
            { id: 'rvu5-a', label: 'Component A', isCorrect: false, explanation: 'Higher resistance means less current for the same voltage.' },
            { id: 'rvu5-b', label: 'Component B', isCorrect: true, explanation: 'Correct. Lower resistance allows more current to flow for the same applied voltage.' },
            { id: 'rvu5-c', label: 'Both allow the same current', isCorrect: false, explanation: 'Different resistances produce different currents when the voltage is the same.' },
          ],
        },
        {
          id: 'rvu6',
          prompt: 'How many ohms are in 1 M\u03A9?',
          choices: [
            { id: 'rvu6-a', label: '1,000 \u03A9', isCorrect: false, explanation: 'That is 1 k\u03A9. The prefix "M" (mega) means one million.' },
            { id: 'rvu6-b', label: '1,000,000 \u03A9', isCorrect: true, explanation: 'Correct. 1 M\u03A9 (megohm) equals 1,000,000 ohms.' },
            { id: 'rvu6-c', label: '10,000 \u03A9', isCorrect: false, explanation: 'That is 10 k\u03A9. 1 M\u03A9 is one million ohms.' },
          ],
        },
      ],
    },
  {
      id: 'quiz-ch2-circuit-reading',
      title: 'Reading a Circuit with Numbers',
      unlockedBy: 'lesson-ch2-1-3',
      passingScore: 60,
      questions: [
        {
          id: 'rcn1',
          prompt: 'Before applying a formula to a circuit, what should you do first?',
          choices: [
            { id: 'rcn1-a', label: 'Guess the answer and check later', isCorrect: false, explanation: 'Reading the circuit to identify known values first is more reliable than guessing.' },
            { id: 'rcn1-b', label: 'Read the circuit: identify the source voltage, load resistance, and whether the circuit is open or closed', isCorrect: true, explanation: 'Correct. Reading the circuit first helps you choose the right formula and avoid errors.' },
            { id: 'rcn1-c', label: 'Start calculating immediately', isCorrect: false, explanation: 'Jumping to calculation without identifying knowns and unknowns leads to mistakes.' },
          ],
        },
        {
          id: 'rcn2',
          prompt: 'A circuit has a 6 V battery and a 30 \u03A9 bulb. Which quantities are known?',
          choices: [
            { id: 'rcn2-a', label: 'Voltage and current', isCorrect: false, explanation: 'Current is not given — it is the unknown you would calculate.' },
            { id: 'rcn2-b', label: 'Voltage and resistance', isCorrect: true, explanation: 'Correct. The battery voltage (6 V) and bulb resistance (30 \u03A9) are the known quantities.' },
            { id: 'rcn2-c', label: 'Current and resistance', isCorrect: false, explanation: 'Current is not given. Voltage and resistance are the known values.' },
          ],
        },
        {
          id: 'rcn3',
          prompt: 'In a simple circuit problem, how many values do you typically need to know to find the third?',
          choices: [
            { id: 'rcn3-a', label: 'One', isCorrect: false, explanation: 'One value is not enough. Ohm\'s Law has three variables; you need two to find the third.' },
            { id: 'rcn3-b', label: 'Two', isCorrect: true, explanation: 'Correct. With two known values in V = IR, you can solve for the third.' },
            { id: 'rcn3-c', label: 'All three must be known', isCorrect: false, explanation: 'If all three are known there is nothing to calculate. You need two to find the third.' },
          ],
        },
        {
          id: 'rcn4',
          prompt: 'Why is identifying known vs. unknown quantities the critical first step?',
          choices: [
            { id: 'rcn4-a', label: 'It tells you which formula rearrangement to use', isCorrect: true, explanation: 'Correct. Knowing which value is missing determines whether you solve for I, V, or R.' },
            { id: 'rcn4-b', label: 'It is not important — any formula works for any problem', isCorrect: false, explanation: 'You must match the unknown to the correct formula rearrangement.' },
            { id: 'rcn4-c', label: 'It only matters for complex circuits', isCorrect: false, explanation: 'Even the simplest one-loop problem requires identifying knowns and unknowns.' },
          ],
        },
        {
          id: 'rcn5',
          prompt: 'A circuit shows a 12 V battery connected to a resistor, and the circuit is open. What can you say about the current?',
          choices: [
            { id: 'rcn5-a', label: 'Current is 12 A', isCorrect: false, explanation: 'An open circuit means no current flows regardless of the voltage.' },
            { id: 'rcn5-b', label: 'Current is zero because the circuit is open', isCorrect: true, explanation: 'Correct. No current flows in an open circuit. The path must be complete for current to flow.' },
            { id: 'rcn5-c', label: 'You cannot determine the current without knowing the resistance', isCorrect: false, explanation: 'The open circuit tells you immediately that current is zero.' },
          ],
        },
      ],
    },
  {
      id: 'quiz-ch2-current-calculation',
      title: 'Current Calculation Basics',
      unlockedBy: 'lesson-ch2-2-1',
      passingScore: 60,
      questions: [
        {
          id: 'cc1',
          prompt: 'A 12 V battery powers a 60 \u03A9 bulb. What is the current?',
          choices: [
            { id: 'cc1-a', label: '0.2 A', isCorrect: true, explanation: 'Correct. I = V / R = 12 / 60 = 0.2 A.' },
            { id: 'cc1-b', label: '0.5 A', isCorrect: false, explanation: 'I = V / R = 12 / 60 = 0.2 A, not 0.5 A.' },
            { id: 'cc1-c', label: '5 A', isCorrect: false, explanation: 'I = V / R = 12 / 60 = 0.2 A, not 5 A.' },
            { id: 'cc1-d', label: '720 A', isCorrect: false, explanation: 'That would be V \u00D7 R, which is incorrect. Use I = V / R.' },
          ],
        },
        {
          id: 'cc2',
          prompt: 'Which formula do you use to find current when you know voltage and resistance?',
          choices: [
            { id: 'cc2-a', label: 'I = V \u00D7 R', isCorrect: false, explanation: 'Multiplying V and R does not give current. The correct formula is I = V / R.' },
            { id: 'cc2-b', label: 'I = V / R', isCorrect: true, explanation: 'Correct. Rearranging Ohm\'s Law V = IR gives I = V / R.' },
            { id: 'cc2-c', label: 'I = R / V', isCorrect: false, explanation: 'That is inverted. The correct formula is I = V / R.' },
          ],
        },
        {
          id: 'cc3',
          prompt: 'A 9 V battery is connected to a 45 \u03A9 resistor. What is the current?',
          choices: [
            { id: 'cc3-a', label: '0.1 A', isCorrect: false, explanation: 'I = 9 / 45 = 0.2 A, not 0.1 A.' },
            { id: 'cc3-b', label: '0.2 A', isCorrect: true, explanation: 'Correct. I = V / R = 9 / 45 = 0.2 A.' },
            { id: 'cc3-c', label: '5 A', isCorrect: false, explanation: 'I = 9 / 45 = 0.2 A. You may have divided in the wrong order.' },
            { id: 'cc3-d', label: '405 A', isCorrect: false, explanation: 'That is V \u00D7 R, which is not how current is calculated.' },
          ],
        },
        {
          id: 'cc4',
          prompt: 'How many milliamperes (mA) are in 1 ampere?',
          choices: [
            { id: 'cc4-a', label: '10 mA', isCorrect: false, explanation: '1 A = 1,000 mA, not 10 mA.' },
            { id: 'cc4-b', label: '100 mA', isCorrect: false, explanation: '1 A = 1,000 mA, not 100 mA.' },
            { id: 'cc4-c', label: '1,000 mA', isCorrect: true, explanation: 'Correct. The prefix "milli" means one-thousandth, so 1 A = 1,000 mA.' },
          ],
        },
        {
          id: 'cc5',
          prompt: 'If you double the resistance in a circuit while keeping voltage the same, the current will:',
          choices: [
            { id: 'cc5-a', label: 'Double', isCorrect: false, explanation: 'Doubling resistance halves the current (I = V / R).' },
            { id: 'cc5-b', label: 'Be cut in half', isCorrect: true, explanation: 'Correct. Since I = V / R, doubling R cuts I in half.' },
            { id: 'cc5-c', label: 'Stay the same', isCorrect: false, explanation: 'Current depends on resistance. Doubling R halves I.' },
          ],
        },
        {
          id: 'cc6',
          prompt: 'A 6 V battery is connected to a 20 \u03A9 resistor. What is the current?',
          choices: [
            { id: 'cc6-a', label: '0.3 A', isCorrect: true, explanation: 'Correct. I = V / R = 6 / 20 = 0.3 A.' },
            { id: 'cc6-b', label: '3.33 A', isCorrect: false, explanation: 'You may have divided R / V. The correct calculation is I = V / R = 6 / 20 = 0.3 A.' },
            { id: 'cc6-c', label: '120 A', isCorrect: false, explanation: 'That is V \u00D7 R. Use I = V / R = 6 / 20 = 0.3 A.' },
            { id: 'cc6-d', label: '0.03 A', isCorrect: false, explanation: 'Check your arithmetic: 6 / 20 = 0.3 A, not 0.03 A.' },
          ],
        },
      ],
    },
  {
      id: 'quiz-ch2-resistance-calculation',
      title: 'Resistance Calculation Basics',
      unlockedBy: 'lesson-ch2-2-2',
      passingScore: 60,
      questions: [
        {
          id: 'rsc1',
          prompt: 'A 10 V source drives 0.5 A of current. What is the resistance?',
          choices: [
            { id: 'rsc1-a', label: '5 \u03A9', isCorrect: false, explanation: 'R = V / I = 10 / 0.5 = 20 \u03A9, not 5 \u03A9.' },
            { id: 'rsc1-b', label: '20 \u03A9', isCorrect: true, explanation: 'Correct. R = V / I = 10 / 0.5 = 20 \u03A9.' },
            { id: 'rsc1-c', label: '0.05 \u03A9', isCorrect: false, explanation: 'That would be I / V. The correct formula is R = V / I.' },
            { id: 'rsc1-d', label: '50 \u03A9', isCorrect: false, explanation: 'Check your arithmetic: R = 10 / 0.5 = 20 \u03A9.' },
          ],
        },
        {
          id: 'rsc2',
          prompt: 'Which formula do you use to find resistance when you know voltage and current?',
          choices: [
            { id: 'rsc2-a', label: 'R = V / I', isCorrect: true, explanation: 'Correct. Rearranging V = IR gives R = V / I.' },
            { id: 'rsc2-b', label: 'R = V \u00D7 I', isCorrect: false, explanation: 'Multiplying voltage by current gives power (P = VI), not resistance.' },
            { id: 'rsc2-c', label: 'R = I / V', isCorrect: false, explanation: 'That is inverted. The correct formula is R = V / I.' },
          ],
        },
        {
          id: 'rsc3',
          prompt: 'A 24 V battery produces 0.4 A in a circuit. What is the resistance?',
          choices: [
            { id: 'rsc3-a', label: '9.6 \u03A9', isCorrect: false, explanation: 'That is V \u00D7 I. Use R = V / I = 24 / 0.4 = 60 \u03A9.' },
            { id: 'rsc3-b', label: '60 \u03A9', isCorrect: true, explanation: 'Correct. R = V / I = 24 / 0.4 = 60 \u03A9.' },
            { id: 'rsc3-c', label: '0.017 \u03A9', isCorrect: false, explanation: 'That would be I / V. The correct formula is R = V / I = 60 \u03A9.' },
          ],
        },
        {
          id: 'rsc4',
          prompt: 'When is using R = V / I most useful?',
          choices: [
            { id: 'rsc4-a', label: 'When you can measure voltage and current but cannot directly measure resistance', isCorrect: true, explanation: 'Correct. If you can read a voltmeter and ammeter, you can compute the resistance indirectly.' },
            { id: 'rsc4-b', label: 'Only when building a circuit from scratch', isCorrect: false, explanation: 'R = V / I is useful anytime you know voltage and current and need resistance.' },
            { id: 'rsc4-c', label: 'It is never useful — just use an ohmmeter', isCorrect: false, explanation: 'An ohmmeter requires disconnecting the component. R = V / I works with a live circuit.' },
          ],
        },
        {
          id: 'rsc5',
          prompt: 'A 5 V source pushes 0.25 A through a component. What is its resistance?',
          choices: [
            { id: 'rsc5-a', label: '1.25 \u03A9', isCorrect: false, explanation: 'That is V \u00D7 I. Use R = V / I = 5 / 0.25 = 20 \u03A9.' },
            { id: 'rsc5-b', label: '20 \u03A9', isCorrect: true, explanation: 'Correct. R = V / I = 5 / 0.25 = 20 \u03A9.' },
            { id: 'rsc5-c', label: '0.05 \u03A9', isCorrect: false, explanation: 'That is I / V. Use R = V / I = 20 \u03A9.' },
          ],
        },
      ],
    },
  {
      id: 'quiz-ch2-voltage-calculation',
      title: 'Voltage Calculation Basics',
      unlockedBy: 'lesson-ch2-2-3',
      passingScore: 60,
      questions: [
        {
          id: 'vc1',
          prompt: 'If 0.3 A flows through a 40 \u03A9 resistor, what is the voltage across it?',
          choices: [
            { id: 'vc1-a', label: '12 V', isCorrect: true, explanation: 'Correct. V = I \u00D7 R = 0.3 \u00D7 40 = 12 V.' },
            { id: 'vc1-b', label: '133.3 V', isCorrect: false, explanation: 'That would be R / I. Use V = I \u00D7 R = 0.3 \u00D7 40 = 12 V.' },
            { id: 'vc1-c', label: '0.0075 V', isCorrect: false, explanation: 'Check your calculation: V = 0.3 \u00D7 40 = 12 V.' },
            { id: 'vc1-d', label: '40.3 V', isCorrect: false, explanation: 'You add I and R, but the formula is V = I \u00D7 R (multiplication, not addition).' },
          ],
        },
        {
          id: 'vc2',
          prompt: 'Which formula do you use to find voltage when you know current and resistance?',
          choices: [
            { id: 'vc2-a', label: 'V = I / R', isCorrect: false, explanation: 'That is not correct. The formula is V = I \u00D7 R.' },
            { id: 'vc2-b', label: 'V = I \u00D7 R', isCorrect: true, explanation: "Correct. This is Ohm's Law in its original form: V = IR." },
            { id: 'vc2-c', label: 'V = R / I', isCorrect: false, explanation: 'That is not a standard rearrangement. The formula is V = I \u00D7 R.' },
          ],
        },
        {
          id: 'vc3',
          prompt: 'A current of 0.5 A flows through a 100 \u03A9 resistor. What is the voltage?',
          choices: [
            { id: 'vc3-a', label: '200 V', isCorrect: false, explanation: 'Check your arithmetic: 0.5 \u00D7 100 = 50 V, not 200 V.' },
            { id: 'vc3-b', label: '50 V', isCorrect: true, explanation: 'Correct. V = I \u00D7 R = 0.5 \u00D7 100 = 50 V.' },
            { id: 'vc3-c', label: '0.005 V', isCorrect: false, explanation: 'That would be I / R. Use V = I \u00D7 R = 50 V.' },
          ],
        },
        {
          id: 'vc4',
          prompt: 'Why might you need to calculate voltage using V = IR?',
          choices: [
            { id: 'vc4-a', label: 'To find the voltage drop across a specific component when you know its current and resistance', isCorrect: true, explanation: 'Correct. V = IR lets you find how much voltage appears across any component.' },
            { id: 'vc4-b', label: 'You never need to — the battery label always tells you', isCorrect: false, explanation: 'The battery label gives the source voltage, but you may need to find the voltage across a specific load.' },
            { id: 'vc4-c', label: 'Only to check if the battery is working', isCorrect: false, explanation: 'V = IR is used for much more than battery checks — it finds voltage across any component.' },
          ],
        },
        {
          id: 'vc5',
          prompt: 'A current of 2 A passes through a 15 \u03A9 resistor. What voltage is across it?',
          choices: [
            { id: 'vc5-a', label: '7.5 V', isCorrect: false, explanation: 'That would be R / I. Use V = I \u00D7 R = 2 \u00D7 15 = 30 V.' },
            { id: 'vc5-b', label: '30 V', isCorrect: true, explanation: 'Correct. V = I \u00D7 R = 2 \u00D7 15 = 30 V.' },
            { id: 'vc5-c', label: '17 V', isCorrect: false, explanation: 'You may have added I + R. The formula is V = I \u00D7 R = 30 V.' },
          ],
        },
        {
          id: 'vc6',
          prompt: 'If you increase the current through a fixed resistor, the voltage across it will:',
          choices: [
            { id: 'vc6-a', label: 'Increase proportionally', isCorrect: true, explanation: 'Correct. V = IR, so if R is constant and I increases, V increases proportionally.' },
            { id: 'vc6-b', label: 'Decrease', isCorrect: false, explanation: 'With fixed resistance, more current means more voltage (V = IR).' },
            { id: 'vc6-c', label: 'Stay the same', isCorrect: false, explanation: 'Voltage depends on current when resistance is fixed: V = IR.' },
          ],
        },
      ],
    },
  {
      id: 'quiz-ch2-power-basics',
      title: 'Power Basics',
      unlockedBy: 'lesson-ch2-3-1',
      passingScore: 60,
      questions: [
        {
          id: 'pb1',
          prompt: 'What does power measure in a circuit?',
          choices: [
            { id: 'pb1-a', label: 'The total amount of energy stored in the battery', isCorrect: false, explanation: 'Power is the rate of energy use per second, not the total energy stored.' },
            { id: 'pb1-b', label: 'The rate at which electrical energy is converted into another form', isCorrect: true, explanation: 'Correct. Power tells you how much energy is converted each second.' },
            { id: 'pb1-c', label: 'The resistance of the load', isCorrect: false, explanation: 'Resistance and power are different quantities. Power is measured in watts.' },
          ],
        },
        {
          id: 'pb2',
          prompt: 'What unit is power measured in?',
          choices: [
            { id: 'pb2-a', label: 'Volts', isCorrect: false, explanation: 'Volts measure voltage, not power.' },
            { id: 'pb2-b', label: 'Ohms', isCorrect: false, explanation: 'Ohms measure resistance, not power.' },
            { id: 'pb2-c', label: 'Watts', isCorrect: true, explanation: 'Correct. Power is measured in watts (W).' },
            { id: 'pb2-d', label: 'Amperes', isCorrect: false, explanation: 'Amperes measure current, not power.' },
          ],
        },
        {
          id: 'pb3',
          prompt: 'How many watts are in 1 kilowatt (kW)?',
          choices: [
            { id: 'pb3-a', label: '100 W', isCorrect: false, explanation: 'The prefix "kilo" means 1,000, not 100.' },
            { id: 'pb3-b', label: '1,000 W', isCorrect: true, explanation: 'Correct. 1 kW = 1,000 watts.' },
            { id: 'pb3-c', label: '10,000 W', isCorrect: false, explanation: '1 kW = 1,000 W, not 10,000 W.' },
          ],
        },
        {
          id: 'pb4',
          prompt: 'If a bulb receives more power, it will:',
          choices: [
            { id: 'pb4-a', label: 'Glow brighter', isCorrect: true, explanation: 'Correct. More power means more energy converted to light and heat each second.' },
            { id: 'pb4-b', label: 'Glow dimmer', isCorrect: false, explanation: 'More power produces more light, not less.' },
            { id: 'pb4-c', label: 'Remain unchanged', isCorrect: false, explanation: 'Brightness is directly related to power. More power means brighter light.' },
          ],
        },
        {
          id: 'pb5',
          prompt: 'What is the symbol for power in circuit formulas?',
          choices: [
            { id: 'pb5-a', label: 'W', isCorrect: false, explanation: 'W is the abbreviation for watts (the unit), but the symbol used in formulas is P.' },
            { id: 'pb5-b', label: 'P', isCorrect: true, explanation: 'Correct. P represents power in formulas like P = VI.' },
            { id: 'pb5-c', label: 'E', isCorrect: false, explanation: 'E sometimes represents energy or EMF, but power is represented by P.' },
          ],
        },
      ],
    },
  {
      id: 'quiz-ch2-power-calculation',
      title: 'Power Calculation Basics',
      unlockedBy: 'lesson-ch2-3-2',
      passingScore: 60,
      questions: [
        {
          id: 'pc1',
          prompt: 'A bulb has 12 V across it and 0.2 A flowing through it. What is the power?',
          choices: [
            { id: 'pc1-a', label: '2.4 W', isCorrect: true, explanation: 'Correct. P = V \u00D7 I = 12 \u00D7 0.2 = 2.4 W.' },
            { id: 'pc1-b', label: '60 W', isCorrect: false, explanation: 'That would be V / I, which gives resistance. P = V \u00D7 I = 2.4 W.' },
            { id: 'pc1-c', label: '14.4 W', isCorrect: false, explanation: 'Check your arithmetic: 12 \u00D7 0.2 = 2.4 W.' },
            { id: 'pc1-d', label: '0.017 W', isCorrect: false, explanation: 'That would be I / V. Use P = V \u00D7 I = 2.4 W.' },
          ],
        },
        {
          id: 'pc2',
          prompt: 'Which formula calculates power from voltage and current?',
          choices: [
            { id: 'pc2-a', label: 'P = V / I', isCorrect: false, explanation: 'V / I gives resistance (R = V / I), not power.' },
            { id: 'pc2-b', label: 'P = V \u00D7 I', isCorrect: true, explanation: 'Correct. Power equals voltage times current.' },
            { id: 'pc2-c', label: 'P = V + I', isCorrect: false, explanation: 'Power is the product of voltage and current, not their sum.' },
          ],
        },
        {
          id: 'pc3',
          prompt: 'A 9 V battery drives 0.3 A through a load. What power does the load receive?',
          choices: [
            { id: 'pc3-a', label: '30 W', isCorrect: false, explanation: 'Check: P = 9 \u00D7 0.3 = 2.7 W, not 30 W.' },
            { id: 'pc3-b', label: '2.7 W', isCorrect: true, explanation: 'Correct. P = V \u00D7 I = 9 \u00D7 0.3 = 2.7 W.' },
            { id: 'pc3-c', label: '0.033 W', isCorrect: false, explanation: 'That would be I / V. P = V \u00D7 I = 2.7 W.' },
          ],
        },
        {
          id: 'pc4',
          prompt: 'If you know the current and resistance but not voltage, which power formula can you use?',
          choices: [
            { id: 'pc4-a', label: 'P = I\u00B2R', isCorrect: true, explanation: 'Correct. Substituting V = IR into P = VI gives P = I\u00B2R.' },
            { id: 'pc4-b', label: 'P = V\u00B2/R', isCorrect: false, explanation: 'This formula requires voltage, which you said is unknown.' },
            { id: 'pc4-c', label: 'P = IR', isCorrect: false, explanation: 'IR equals voltage, not power. Power is P = I\u00B2R when using current and resistance.' },
          ],
        },
        {
          id: 'pc5',
          prompt: 'A 24 V source drives 0.5 A through a circuit. What is the power?',
          choices: [
            { id: 'pc5-a', label: '48 W', isCorrect: false, explanation: 'Check: 24 \u00D7 0.5 = 12 W, not 48 W.' },
            { id: 'pc5-b', label: '12 W', isCorrect: true, explanation: 'Correct. P = V \u00D7 I = 24 \u00D7 0.5 = 12 W.' },
            { id: 'pc5-c', label: '24.5 W', isCorrect: false, explanation: 'Power is V \u00D7 I (multiply), not V + I (add). P = 12 W.' },
          ],
        },
        {
          id: 'pc6',
          prompt: 'Two circuits have the same voltage. Circuit A has more current than Circuit B. Which delivers more power to its load?',
          choices: [
            { id: 'pc6-a', label: 'Circuit A', isCorrect: true, explanation: 'Correct. P = VI, so with the same V, more I means more power.' },
            { id: 'pc6-b', label: 'Circuit B', isCorrect: false, explanation: 'Less current with the same voltage means less power.' },
            { id: 'pc6-c', label: 'Both deliver the same power', isCorrect: false, explanation: 'Different currents with the same voltage produce different power levels.' },
          ],
        },
      ],
    },
  {
      id: 'quiz-ch2-multi-step-calculation',
      title: 'Multi-Step Circuit Calculation',
      unlockedBy: 'lesson-ch2-3-3',
      passingScore: 60,
      questions: [
        {
          id: 'msc1',
          prompt: 'A 9 V battery is connected to a 30 \u03A9 bulb. What is the power delivered to the bulb?',
          choices: [
            { id: 'msc1-a', label: '0.3 W', isCorrect: false, explanation: 'First find I = 9 / 30 = 0.3 A, then P = 9 \u00D7 0.3 = 2.7 W.' },
            { id: 'msc1-b', label: '2.7 W', isCorrect: true, explanation: 'Correct. Step 1: I = V / R = 9 / 30 = 0.3 A. Step 2: P = V \u00D7 I = 9 \u00D7 0.3 = 2.7 W.' },
            { id: 'msc1-c', label: '270 W', isCorrect: false, explanation: 'Check your steps: I = 0.3 A, then P = 9 \u00D7 0.3 = 2.7 W.' },
            { id: 'msc1-d', label: '3.3 W', isCorrect: false, explanation: 'I = 9 / 30 = 0.3 A, then P = 9 \u00D7 0.3 = 2.7 W, not 3.3 W.' },
          ],
        },
        {
          id: 'msc2',
          prompt: 'What are the typical two steps in a multi-step simple-circuit calculation?',
          choices: [
            { id: 'msc2-a', label: 'Find current with I = V / R, then find power with P = V \u00D7 I', isCorrect: true, explanation: 'Correct. First use Ohm\'s Law to find current, then use the power formula.' },
            { id: 'msc2-b', label: 'Find power first, then find current', isCorrect: false, explanation: 'You cannot find power without knowing current first (unless you use P = V\u00B2/R).' },
            { id: 'msc2-c', label: 'Guess and check', isCorrect: false, explanation: 'A systematic two-step calculation is more reliable than guessing.' },
          ],
        },
        {
          id: 'msc3',
          prompt: 'A 12 V battery powers a 40 \u03A9 resistor. What is the current and power?',
          choices: [
            { id: 'msc3-a', label: 'I = 0.3 A, P = 3.6 W', isCorrect: true, explanation: 'Correct. I = 12 / 40 = 0.3 A. P = 12 \u00D7 0.3 = 3.6 W.' },
            { id: 'msc3-b', label: 'I = 3.33 A, P = 40 W', isCorrect: false, explanation: 'I = V / R = 12 / 40 = 0.3 A, not R / V. Then P = 12 \u00D7 0.3 = 3.6 W.' },
            { id: 'msc3-c', label: 'I = 480 A, P = 5,760 W', isCorrect: false, explanation: 'That uses V \u00D7 R instead of V / R. I = 12 / 40 = 0.3 A.' },
          ],
        },
        {
          id: 'msc4',
          prompt: 'Why is breaking a problem into sequential steps helpful?',
          choices: [
            { id: 'msc4-a', label: 'It reduces errors and makes each step easy to verify', isCorrect: true, explanation: 'Correct. Clear steps let you check each calculation before moving to the next.' },
            { id: 'msc4-b', label: 'It is slower and less efficient', isCorrect: false, explanation: 'While it takes a moment to organize, the clarity prevents costly mistakes.' },
            { id: 'msc4-c', label: 'It only helps in exams, not real circuits', isCorrect: false, explanation: 'Systematic problem-solving is essential in all circuit work, not just exams.' },
          ],
        },
        {
          id: 'msc5',
          prompt: 'A 6 V battery is connected to a 12 \u03A9 bulb. Find the power.',
          choices: [
            { id: 'msc5-a', label: '3 W', isCorrect: true, explanation: 'Correct. I = 6 / 12 = 0.5 A. P = 6 \u00D7 0.5 = 3 W.' },
            { id: 'msc5-b', label: '72 W', isCorrect: false, explanation: 'That is V \u00D7 R, not a valid formula. I = 0.5 A, P = 3 W.' },
            { id: 'msc5-c', label: '0.5 W', isCorrect: false, explanation: '0.5 is the current in amps. Power is P = 6 \u00D7 0.5 = 3 W.' },
            { id: 'msc5-d', label: '2 W', isCorrect: false, explanation: 'I = 6 / 12 = 0.5 A, then P = 6 \u00D7 0.5 = 3 W.' },
          ],
        },
        {
          id: 'msc6',
          prompt: 'A 24 V battery is connected to a 120 \u03A9 load. What is the power?',
          choices: [
            { id: 'msc6-a', label: '4.8 W', isCorrect: true, explanation: 'Correct. I = 24 / 120 = 0.2 A. P = 24 \u00D7 0.2 = 4.8 W.' },
            { id: 'msc6-b', label: '2,880 W', isCorrect: false, explanation: 'That is V \u00D7 R. Correctly: I = 0.2 A, P = 24 \u00D7 0.2 = 4.8 W.' },
            { id: 'msc6-c', label: '0.2 W', isCorrect: false, explanation: '0.2 is the current in amps, not the power. P = 24 \u00D7 0.2 = 4.8 W.' },
          ],
        },
      ],
    },
  {
      id: 'quiz-ch2-target-quantity',
      title: 'Target Quantity Evaluation',
      unlockedBy: 'lesson-ch2-4-1',
      passingScore: 60,
      questions: [
        {
          id: 'tq1',
          prompt: 'What does it mean when a challenge says "target current: 0.2A"?',
          choices: [
            { id: 'tq1-a', label: 'The circuit must produce a current of approximately 0.2A to pass', isCorrect: true, explanation: 'Correct. A target quantity is the value your circuit must achieve.' },
            { id: 'tq1-b', label: 'The battery must be set to 0.2A', isCorrect: false, explanation: 'Batteries provide voltage, not current. Current is a result of voltage and resistance.' },
            { id: 'tq1-c', label: 'The resistance must be 0.2 ohms', isCorrect: false, explanation: '0.2A is a current target, not a resistance value.' },
          ],
        },
        {
          id: 'tq2',
          prompt: 'To achieve a target current of 0.3A with a 9V battery, what resistance do you need?',
          choices: [
            { id: 'tq2-a', label: '30 Ω', isCorrect: true, explanation: 'Correct. R = V/I = 9/0.3 = 30 Ω.' },
            { id: 'tq2-b', label: '2.7 Ω', isCorrect: false, explanation: 'R = V/I = 9/0.3 = 30 Ω, not 2.7 Ω.' },
            { id: 'tq2-c', label: '0.033 Ω', isCorrect: false, explanation: 'That is I/V, not V/I. R = 9/0.3 = 30 Ω.' },
          ],
        },
        {
          id: 'tq3',
          prompt: 'What is the target quantity in "build a circuit where the bulb reaches 1.8W"?',
          choices: [
            { id: 'tq3-a', label: 'Power', isCorrect: true, explanation: 'Correct. Watts (W) is the unit of power.' },
            { id: 'tq3-b', label: 'Current', isCorrect: false, explanation: 'Current is measured in amperes, not watts.' },
            { id: 'tq3-c', label: 'Resistance', isCorrect: false, explanation: 'Resistance is measured in ohms, not watts.' },
          ],
        },
        {
          id: 'tq4',
          prompt: 'If a challenge asks for a specific voltage across the load, which formula helps you verify?',
          choices: [
            { id: 'tq4-a', label: 'V = IR', isCorrect: true, explanation: 'Correct. V = IR lets you check the voltage across a load when you know current and resistance.' },
            { id: 'tq4-b', label: 'P = VI', isCorrect: false, explanation: 'P = VI gives power, not voltage directly. V = IR is more direct.' },
            { id: 'tq4-c', label: 'R = V/I', isCorrect: false, explanation: 'This finds resistance, not voltage. V = IR directly gives voltage.' },
          ],
        },
        {
          id: 'tq5',
          prompt: 'Why is it important to verify your calculated values against the target?',
          choices: [
            { id: 'tq5-a', label: 'To confirm the circuit meets the challenge requirements before submitting', isCorrect: true, explanation: 'Correct. Verification catches calculation errors and ensures you meet the target.' },
            { id: 'tq5-b', label: 'Verification is optional and never needed', isCorrect: false, explanation: 'Verification is a key step to avoid errors in circuit design.' },
            { id: 'tq5-c', label: 'Only to practice arithmetic', isCorrect: false, explanation: 'Verification ensures correctness, not just arithmetic practice.' },
          ],
        },
      ],
    },
  {
      id: 'quiz-ch2-reading-worked-solutions',
      title: 'Reading Worked Solutions',
      unlockedBy: 'lesson-ch2-4-2',
      passingScore: 60,
      questions: [
        {
          id: 'rws1',
          prompt: 'A worked solution shows: "I = V/R = 12/60 = 0.2A." What was the first step?',
          choices: [
            { id: 'rws1-a', label: 'Choosing the correct formula (I = V/R)', isCorrect: true, explanation: 'Correct. The first step is selecting the right rearrangement of Ohm\'s Law.' },
            { id: 'rws1-b', label: 'Measuring the current with a tool', isCorrect: false, explanation: 'This is a calculation, not a measurement. The formula was applied first.' },
            { id: 'rws1-c', label: 'Guessing the answer', isCorrect: false, explanation: 'The solution follows a systematic formula approach, not guessing.' },
          ],
        },
        {
          id: 'rws2',
          prompt: 'In a breakdown, "Identify known values: V = 9V, R = 45Ω" is which step?',
          choices: [
            { id: 'rws2-a', label: 'The first step — listing what you know', isCorrect: true, explanation: 'Correct. Identifying knowns is always the first step in solving circuit problems.' },
            { id: 'rws2-b', label: 'The last step — summarizing the answer', isCorrect: false, explanation: 'Identifying knowns comes first, not last.' },
            { id: 'rws2-c', label: 'An optional step that can be skipped', isCorrect: false, explanation: 'Identifying knowns is essential for choosing the right formula.' },
          ],
        },
        {
          id: 'rws3',
          prompt: 'A breakdown shows three steps: Identify → Formula → Substitute. Why is this order important?',
          choices: [
            { id: 'rws3-a', label: 'You need to know the values before choosing a formula, and choose a formula before substituting', isCorrect: true, explanation: 'Correct. Each step depends on the previous one being completed.' },
            { id: 'rws3-b', label: 'The order does not matter', isCorrect: false, explanation: 'Order matters — you cannot substitute values into a formula you have not chosen yet.' },
            { id: 'rws3-c', label: 'It is just a convention with no practical purpose', isCorrect: false, explanation: 'The order reflects logical dependency — each step requires the previous.' },
          ],
        },
        {
          id: 'rws4',
          prompt: 'A worked solution for power shows: "P = VI = 9 × 0.2 = 1.8W." What values were substituted?',
          choices: [
            { id: 'rws4-a', label: 'V = 9 and I = 0.2', isCorrect: true, explanation: 'Correct. The voltage (9V) and current (0.2A) were substituted into P = VI.' },
            { id: 'rws4-b', label: 'P = 1.8 and W = 9', isCorrect: false, explanation: '1.8W is the result, not an input. The inputs were V and I.' },
            { id: 'rws4-c', label: 'R = 9 and I = 0.2', isCorrect: false, explanation: '9 is the voltage, not resistance. The formula used is P = VI.' },
          ],
        },
        {
          id: 'rws5',
          prompt: 'What is the purpose of a detailed breakdown in a challenge?',
          choices: [
            { id: 'rws5-a', label: 'To show the step-by-step reasoning so you can learn the problem-solving process', isCorrect: true, explanation: 'Correct. Breakdowns teach the systematic approach to circuit problem solving.' },
            { id: 'rws5-b', label: 'To make the challenge harder', isCorrect: false, explanation: 'Breakdowns make the solution clearer, not harder.' },
            { id: 'rws5-c', label: 'They serve no purpose and can be ignored', isCorrect: false, explanation: 'Breakdowns are valuable learning tools showing how to approach problems.' },
          ],
        },
      ],
    },
  {
      id: 'quiz-ch2-target-range',
      title: 'Target Range Challenges',
      unlockedBy: 'lesson-ch2-5-1',
      passingScore: 60,
      questions: [
        {
          id: 'tr1',
          prompt: 'A challenge says "keep power between 2W and 4W." What does this mean?',
          choices: [
            { id: 'tr1-a', label: 'Any power value from 2W to 4W is acceptable', isCorrect: true, explanation: 'Correct. A target range defines the acceptable minimum and maximum values.' },
            { id: 'tr1-b', label: 'Power must be exactly 3W', isCorrect: false, explanation: 'The range allows any value between 2W and 4W, not just the midpoint.' },
            { id: 'tr1-c', label: 'Power must be either 2W or 4W, nothing in between', isCorrect: false, explanation: 'The range includes all values between and including the endpoints.' },
          ],
        },
        {
          id: 'tr2',
          prompt: 'With a 12V battery, what resistance gives P = 3W? (Use P = V²/R)',
          choices: [
            { id: 'tr2-a', label: '48 Ω', isCorrect: true, explanation: 'Correct. R = V²/P = 144/3 = 48 Ω.' },
            { id: 'tr2-b', label: '4 Ω', isCorrect: false, explanation: 'R = 144/3 = 48 Ω, not 4 Ω.' },
            { id: 'tr2-c', label: '36 Ω', isCorrect: false, explanation: 'R = 144/3 = 48 Ω, not 36 Ω. At 36 Ω, P would be 4W.' },
          ],
        },
        {
          id: 'tr3',
          prompt: 'Why do some challenges use a range instead of an exact value?',
          choices: [
            { id: 'tr3-a', label: 'Because multiple resistance values can satisfy the condition, allowing design flexibility', isCorrect: true, explanation: 'Correct. Real engineering often involves acceptable ranges rather than exact targets.' },
            { id: 'tr3-b', label: 'Because the simulation cannot calculate exact values', isCorrect: false, explanation: 'The simulation is precise. Ranges reflect intentional design flexibility.' },
            { id: 'tr3-c', label: 'Because exact values are impossible to achieve', isCorrect: false, explanation: 'Exact values are achievable, but ranges allow more design freedom.' },
          ],
        },
        {
          id: 'tr4',
          prompt: 'For a target current of 0.15A to 0.25A with a 9V battery, which resistance is within range?',
          choices: [
            { id: 'tr4-a', label: '45 Ω (gives 0.2A)', isCorrect: true, explanation: 'Correct. I = 9/45 = 0.2A, which is between 0.15A and 0.25A.' },
            { id: 'tr4-b', label: '9 Ω (gives 1A)', isCorrect: false, explanation: '1A is far above the 0.25A maximum.' },
            { id: 'tr4-c', label: '180 Ω (gives 0.05A)', isCorrect: false, explanation: '0.05A is below the 0.15A minimum.' },
          ],
        },
        {
          id: 'tr5',
          prompt: 'If a range is 2W to 4W and your calculation gives 4.5W, what should you do?',
          choices: [
            { id: 'tr5-a', label: 'Increase the resistance to bring the power down into range', isCorrect: true, explanation: 'Correct. Higher resistance means less current and less power (P = V²/R).' },
            { id: 'tr5-b', label: 'Submit it — 4.5W is close enough', isCorrect: false, explanation: '4.5W exceeds the 4W maximum. You need to adjust.' },
            { id: 'tr5-c', label: 'Decrease the resistance to fix it', isCorrect: false, explanation: 'Decreasing resistance would increase power further, making it worse.' },
          ],
        },
      ],
    },
  {
      id: 'quiz-ch2-review',
      title: 'Chapter 2 Review Quiz',
      unlockedBy: 'lesson-ch2-5-2',
      passingScore: 60,
      questions: [
        {
          id: 'cr1',
          prompt: 'A 12 V battery is connected to a 60 \u03A9 bulb. What is the current?',
          choices: [
            { id: 'cr1-a', label: '0.2 A', isCorrect: true, explanation: 'Correct. I = V / R = 12 / 60 = 0.2 A.' },
            { id: 'cr1-b', label: '5 A', isCorrect: false, explanation: 'That would be R / V. Use I = V / R = 0.2 A.' },
            { id: 'cr1-c', label: '720 A', isCorrect: false, explanation: 'That is V \u00D7 R. Use I = V / R = 0.2 A.' },
          ],
        },
        {
          id: 'cr2',
          prompt: 'What are the four key circuit quantities and their units?',
          choices: [
            { id: 'cr2-a', label: 'Voltage (volts), Current (amperes), Resistance (ohms), Power (watts)', isCorrect: true, explanation: 'Correct. V in volts, I in amperes, R in ohms, P in watts.' },
            { id: 'cr2-b', label: 'Voltage (watts), Current (ohms), Resistance (volts), Power (amperes)', isCorrect: false, explanation: 'The units are mixed up. Voltage is in volts, current in amperes, resistance in ohms, power in watts.' },
            { id: 'cr2-c', label: 'Speed (m/s), Force (newtons), Mass (kg), Distance (meters)', isCorrect: false, explanation: 'Those are mechanics quantities, not circuit quantities.' },
          ],
        },
        {
          id: 'cr3',
          prompt: 'A 9 V battery powers a 45 \u03A9 resistor. What is the power?',
          choices: [
            { id: 'cr3-a', label: '1.8 W', isCorrect: true, explanation: 'Correct. I = 9 / 45 = 0.2 A. P = 9 \u00D7 0.2 = 1.8 W.' },
            { id: 'cr3-b', label: '405 W', isCorrect: false, explanation: 'That is V \u00D7 R. First find I = 0.2 A, then P = 9 \u00D7 0.2 = 1.8 W.' },
            { id: 'cr3-c', label: '5 W', isCorrect: false, explanation: 'Check the calculation: I = 0.2 A, P = 1.8 W.' },
          ],
        },
        {
          id: 'cr4',
          prompt: 'If a 15 V source drives 0.5 A, what is the resistance?',
          choices: [
            { id: 'cr4-a', label: '30 \u03A9', isCorrect: true, explanation: 'Correct. R = V / I = 15 / 0.5 = 30 \u03A9.' },
            { id: 'cr4-b', label: '7.5 \u03A9', isCorrect: false, explanation: 'That is V \u00D7 I. Use R = V / I = 30 \u03A9.' },
            { id: 'cr4-c', label: '0.033 \u03A9', isCorrect: false, explanation: 'That is I / V. Use R = V / I = 30 \u03A9.' },
          ],
        },
        {
          id: 'cr5',
          prompt: 'What does "reading a circuit before calculating" mean?',
          choices: [
            { id: 'cr5-a', label: 'Identifying the source voltage, load resistance, and circuit state before applying formulas', isCorrect: true, explanation: 'Correct. Reading the circuit means gathering known values and understanding the setup first.' },
            { id: 'cr5-b', label: 'Reading the textbook chapter before class', isCorrect: false, explanation: 'This refers to examining the circuit diagram, not reading a textbook.' },
            { id: 'cr5-c', label: 'It is not important — just start calculating', isCorrect: false, explanation: 'Reading the circuit first prevents formula selection errors.' },
          ],
        },
        {
          id: 'cr6',
          prompt: 'A current of 0.4 A flows through a 50 \u03A9 resistor. What is the voltage?',
          choices: [
            { id: 'cr6-a', label: '20 V', isCorrect: true, explanation: 'Correct. V = I \u00D7 R = 0.4 \u00D7 50 = 20 V.' },
            { id: 'cr6-b', label: '125 V', isCorrect: false, explanation: 'That is R / I. Use V = I \u00D7 R = 20 V.' },
            { id: 'cr6-c', label: '0.008 V', isCorrect: false, explanation: 'That is I / R. Use V = I \u00D7 R = 20 V.' },
          ],
        },
        {
          id: 'cr7',
          prompt: 'How many milliamperes are in 0.25 A?',
          choices: [
            { id: 'cr7-a', label: '25 mA', isCorrect: false, explanation: '0.25 A \u00D7 1,000 = 250 mA, not 25 mA.' },
            { id: 'cr7-b', label: '250 mA', isCorrect: true, explanation: 'Correct. 0.25 A \u00D7 1,000 mA/A = 250 mA.' },
            { id: 'cr7-c', label: '2,500 mA', isCorrect: false, explanation: '0.25 A = 250 mA, not 2,500 mA.' },
          ],
        },
        {
          id: 'cr8',
          prompt: 'What does operating range mean in a circuit simulation?',
          choices: [
            { id: 'cr8-a', label: 'The min and max values of a quantity within which the circuit functions correctly', isCorrect: true, explanation: 'Correct. Operating range defines the safe and realistic bounds for circuit values.' },
            { id: 'cr8-b', label: 'The distance the circuit can transmit a signal', isCorrect: false, explanation: 'Operating range refers to value limits, not physical distance.' },
            { id: 'cr8-c', label: 'How long the battery lasts', isCorrect: false, explanation: 'Battery life is a separate concept. Operating range is about valid value boundaries.' },
          ],
        },
      ],
    },
];
