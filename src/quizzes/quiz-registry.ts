import type { QuizConfig } from '../types/quiz.ts';

export const quizRegistry: QuizConfig[] = [
  {
    id: 'quiz-complete-loop',
    title: 'Open and Closed Circuits',
    unlockedBy: 'lesson-1-2',
    passingScore: 60,
    questions: [
      {
        id: 'ocq1',
        prompt: 'What is the difference between an open circuit and a closed circuit?',
        choices: [
          { id: 'ocq1-a', label: 'An open circuit has a complete path; a closed circuit has a break', isCorrect: false, explanation: 'It is the other way around. A closed circuit has a complete path.' },
          { id: 'ocq1-b', label: 'A closed circuit forms a complete loop; an open circuit has a gap', isCorrect: true, explanation: 'Correct. A closed circuit has no gaps, so electricity flows. An open circuit has a break that stops all flow.' },
          { id: 'ocq1-c', label: 'Both allow electricity to flow, just at different speeds', isCorrect: false, explanation: 'An open circuit does not allow any electricity to flow at all.' },
        ],
      },
      {
        id: 'ocq2',
        prompt: 'A circuit has a battery, a bulb, and a switch. The switch is open. What happens?',
        choices: [
          { id: 'ocq2-a', label: 'The bulb lights up normally', isCorrect: false, explanation: 'An open switch creates a gap, so no current flows and the bulb stays dark.' },
          { id: 'ocq2-b', label: 'The bulb lights up dimly', isCorrect: false, explanation: 'No current flows through an open circuit, not even a small amount.' },
          { id: 'ocq2-c', label: 'The bulb stays off because the circuit is open', isCorrect: true, explanation: 'Correct. The open switch breaks the loop, preventing any current from flowing.' },
        ],
      },
      {
        id: 'ocq3',
        prompt: 'Why must electricity travel in a complete loop?',
        choices: [
          { id: 'ocq3-a', label: 'Because electrons need to return to their starting point for current to be sustained', isCorrect: true, explanation: 'Correct. Current is a continuous flow that requires a complete return path back to the source.' },
          { id: 'ocq3-b', label: 'Because the battery only works in one direction', isCorrect: false, explanation: 'While current direction matters, the fundamental reason is that a complete path is needed for sustained flow.' },
          { id: 'ocq3-c', label: 'It does not need to be a loop; a straight path works too', isCorrect: false, explanation: 'Electricity requires a closed loop. A dead-end path cannot sustain current flow.' },
        ],
      },
      {
        id: 'ocq4',
        prompt: 'If you remove one wire from a simple circuit, what happens to the current everywhere else?',
        choices: [
          { id: 'ocq4-a', label: 'Current stops everywhere in the circuit', isCorrect: true, explanation: 'Correct. In a series circuit, breaking the path at any point stops current flow through the entire loop.' },
          { id: 'ocq4-b', label: 'Current continues in the remaining wires', isCorrect: false, explanation: 'A single break stops all current flow because the loop is incomplete.' },
          { id: 'ocq4-c', label: 'Current flows in the opposite direction', isCorrect: false, explanation: 'Removing a wire does not reverse current — it stops all current.' },
        ],
      },
      {
        id: 'ocq5',
        prompt: 'Which statement about a return path is true?',
        choices: [
          { id: 'ocq5-a', label: 'The return path is optional as long as the source is strong enough', isCorrect: false, explanation: 'No source can force current through an incomplete path. The return path is always required.' },
          { id: 'ocq5-b', label: 'The return path carries current back to the source and is essential for the circuit to work', isCorrect: true, explanation: 'Correct. Without a return path, the loop is incomplete and no current flows.' },
          { id: 'ocq5-c', label: 'The return path only matters in complex circuits', isCorrect: false, explanation: 'Even the simplest single-loop circuit requires a return path.' },
        ],
      },
    ],
  },
  {
    id: 'quiz-source-switch-load',
    title: 'Source, Switch, and Load',
    unlockedBy: 'lesson-1-3',
    passingScore: 60,
    questions: [
      {
        id: 'sslq1',
        prompt: 'What role does the battery play in a circuit?',
        choices: [
          { id: 'sslq1-a', label: 'It uses electrical energy', isCorrect: false, explanation: 'The battery provides energy. The load is what uses it.' },
          { id: 'sslq1-b', label: 'It provides the electrical energy that drives the circuit', isCorrect: true, explanation: 'Correct. The battery is the source — it supplies the push (voltage) that drives current through the circuit.' },
          { id: 'sslq1-c', label: 'It controls whether the circuit is on or off', isCorrect: false, explanation: 'That is the role of the switch, not the battery.' },
        ],
      },
      {
        id: 'sslq2',
        prompt: 'What does a switch do in a circuit?',
        choices: [
          { id: 'sslq2-a', label: 'It stores energy for later use', isCorrect: false, explanation: 'A switch does not store energy. It controls the circuit path.' },
          { id: 'sslq2-b', label: 'It converts electricity into light', isCorrect: false, explanation: 'That is what a bulb does. The switch only controls whether the path is complete.' },
          { id: 'sslq2-c', label: 'It opens or closes the circuit path without using or providing energy', isCorrect: true, explanation: 'Correct. The switch is a control element that makes or breaks the circuit path.' },
        ],
      },
      {
        id: 'sslq3',
        prompt: 'What is the load in a simple circuit with a battery, switch, and bulb?',
        choices: [
          { id: 'sslq3-a', label: 'The battery', isCorrect: false, explanation: 'The battery is the source. The load is the component that uses the energy.' },
          { id: 'sslq3-b', label: 'The switch', isCorrect: false, explanation: 'The switch is a control element. It does not use energy.' },
          { id: 'sslq3-c', label: 'The bulb', isCorrect: true, explanation: 'Correct. The bulb is the load — it converts electrical energy into light and heat.' },
        ],
      },
      {
        id: 'sslq4',
        prompt: 'Can a circuit work without a load?',
        choices: [
          { id: 'sslq4-a', label: 'Yes, current will flow normally', isCorrect: false, explanation: 'While current might flow, a circuit without a load has no useful purpose and could damage the source.' },
          { id: 'sslq4-b', label: 'No, every circuit must have a load to serve a useful purpose', isCorrect: true, explanation: 'Correct. The load is what gives the circuit its purpose — converting electrical energy into useful work.' },
          { id: 'sslq4-c', label: 'A load is only needed in complex circuits', isCorrect: false, explanation: 'Even the simplest useful circuit has a load.' },
        ],
      },
      {
        id: 'sslq5',
        prompt: 'A closed switch in a circuit means:',
        choices: [
          { id: 'sslq5-a', label: 'The circuit path is broken and no current flows', isCorrect: false, explanation: 'A closed switch completes the path. An open switch breaks it.' },
          { id: 'sslq5-b', label: 'The circuit path is complete and current can flow', isCorrect: true, explanation: 'Correct. Closing a switch removes the gap and allows electricity to flow through the complete loop.' },
          { id: 'sslq5-c', label: 'The battery is disconnected', isCorrect: false, explanation: 'Closing a switch has nothing to do with disconnecting the battery.' },
        ],
      },
    ],
  },
  {
    id: 'quiz-current-basics',
    title: 'Current Basics',
    unlockedBy: 'lesson-2-2',
    passingScore: 60,
    questions: [
      {
        id: 'cbq1',
        prompt: 'What symbol represents current?',
        choices: [
          { id: 'cbq1-a', label: 'V', isCorrect: false, explanation: 'V stands for voltage. Current is represented by I.' },
          { id: 'cbq1-b', label: 'I', isCorrect: true, explanation: 'Correct. I is the symbol for current, measured in amperes.' },
          { id: 'cbq1-c', label: 'R', isCorrect: false, explanation: 'R stands for resistance. Current is represented by I.' },
        ],
      },
      {
        id: 'cbq2',
        prompt: 'What unit is current measured in?',
        choices: [
          { id: 'cbq2-a', label: 'Volts', isCorrect: false, explanation: 'Volts measure voltage, not current.' },
          { id: 'cbq2-b', label: 'Ohms', isCorrect: false, explanation: 'Ohms measure resistance, not current.' },
          { id: 'cbq2-c', label: 'Amperes', isCorrect: true, explanation: 'Correct. Current is measured in amperes (often shortened to amps).' },
        ],
      },
      {
        id: 'cbq3',
        prompt: 'In a simple series circuit, what happens to current when you open the switch?',
        choices: [
          { id: 'cbq3-a', label: 'Current stops everywhere at once', isCorrect: true, explanation: 'Correct. Opening the switch breaks the loop, so current stops flowing through the entire circuit simultaneously.' },
          { id: 'cbq3-b', label: 'Current continues to flow but slowly decreases', isCorrect: false, explanation: 'Current stops immediately when the loop is broken — there is no gradual decrease.' },
          { id: 'cbq3-c', label: 'Current flows only through the battery', isCorrect: false, explanation: 'When the switch is open, no current flows through any part of the circuit.' },
        ],
      },
      {
        id: 'cbq4',
        prompt: 'Why is current the same in every component of a simple series circuit?',
        choices: [
          { id: 'cbq4-a', label: 'Because there is only one path for electricity to follow', isCorrect: true, explanation: 'Correct. In a series circuit, all current must pass through every component because there is only one loop.' },
          { id: 'cbq4-b', label: 'Because the battery distributes current equally', isCorrect: false, explanation: 'The battery does not distribute current. The single-path structure ensures equal current everywhere.' },
          { id: 'cbq4-c', label: 'It is not the same — each component gets different current', isCorrect: false, explanation: 'In a simple series loop, the same current flows through every component.' },
        ],
      },
      {
        id: 'cbq5',
        prompt: 'Which analogy best describes current?',
        choices: [
          { id: 'cbq5-a', label: 'The height of water in a tank', isCorrect: false, explanation: 'The height or pressure of water is more like voltage (the push). Current is the flow.' },
          { id: 'cbq5-b', label: 'Water flowing through a pipe', isCorrect: true, explanation: 'Correct. Current is like water flowing through a pipe — it is the continuous movement of electricity through the circuit.' },
          { id: 'cbq5-c', label: 'The width of the pipe', isCorrect: false, explanation: 'The width of the pipe is more like the inverse of resistance. Current is the actual flow.' },
        ],
      },
    ],
  },
  {
    id: 'quiz-voltage-basics',
    title: 'Voltage Basics',
    unlockedBy: 'lesson-2-3',
    passingScore: 60,
    questions: [
      {
        id: 'vbq1',
        prompt: 'What does voltage represent in a circuit?',
        choices: [
          { id: 'vbq1-a', label: 'The flow of electricity', isCorrect: false, explanation: 'Flow is current (I). Voltage (V) is the push or pressure that drives that flow.' },
          { id: 'vbq1-b', label: 'The electrical push or pressure provided by the source', isCorrect: true, explanation: 'Correct. Voltage is the driving force that pushes current through the circuit.' },
          { id: 'vbq1-c', label: 'The opposition to current flow', isCorrect: false, explanation: 'Opposition to flow is resistance (R). Voltage is the push.' },
        ],
      },
      {
        id: 'vbq2',
        prompt: 'What unit is voltage measured in?',
        choices: [
          { id: 'vbq2-a', label: 'Amperes', isCorrect: false, explanation: 'Amperes measure current, not voltage.' },
          { id: 'vbq2-b', label: 'Volts', isCorrect: true, explanation: 'Correct. Voltage is measured in volts, named after Alessandro Volta.' },
          { id: 'vbq2-c', label: 'Watts', isCorrect: false, explanation: 'Watts measure power, not voltage.' },
        ],
      },
      {
        id: 'vbq3',
        prompt: 'Does a battery have voltage when the circuit is open?',
        choices: [
          { id: 'vbq3-a', label: 'No, voltage only exists when current flows', isCorrect: false, explanation: 'Voltage exists even in an open circuit. It is the potential to push current.' },
          { id: 'vbq3-b', label: 'Yes, the battery always provides voltage whether the circuit is open or closed', isCorrect: true, explanation: 'Correct. An ideal voltage source maintains its voltage at all times. Current only flows when the loop is closed, but the push is always there.' },
          { id: 'vbq3-c', label: 'Only if the switch is in a special position', isCorrect: false, explanation: 'The battery voltage is independent of switch position.' },
        ],
      },
      {
        id: 'vbq4',
        prompt: 'What is needed for current to actually flow?',
        choices: [
          { id: 'vbq4-a', label: 'Only voltage from a source', isCorrect: false, explanation: 'Voltage alone is not enough. The circuit path must also be complete.' },
          { id: 'vbq4-b', label: 'Only a complete path', isCorrect: false, explanation: 'A complete path alone is not enough. There must also be a source providing voltage.' },
          { id: 'vbq4-c', label: 'Both voltage from a source and a complete circuit path', isCorrect: true, explanation: 'Correct. You need the push (voltage) and a closed loop for current to flow.' },
        ],
      },
      {
        id: 'vbq5',
        prompt: 'In an ideal voltage source, the voltage:',
        choices: [
          { id: 'vbq5-a', label: 'Changes depending on the load connected', isCorrect: false, explanation: 'An ideal source provides constant voltage regardless of load.' },
          { id: 'vbq5-b', label: 'Stays constant regardless of what is connected', isCorrect: true, explanation: 'Correct. An ideal voltage source provides a steady, unchanging voltage.' },
          { id: 'vbq5-c', label: 'Is zero when no load is connected', isCorrect: false, explanation: 'The voltage is maintained even with no load. Only current is zero when the circuit is open.' },
        ],
      },
    ],
  },
  {
    id: 'quiz-resistance-basics',
    title: 'Resistance Basics',
    unlockedBy: 'lesson-3-1',
    passingScore: 60,
    questions: [
      {
        id: 'rbq1',
        prompt: 'What does resistance do in a circuit?',
        choices: [
          { id: 'rbq1-a', label: 'It provides the push that drives current', isCorrect: false, explanation: 'That is voltage. Resistance opposes the flow of current.' },
          { id: 'rbq1-b', label: 'It opposes the flow of current', isCorrect: true, explanation: 'Correct. Resistance limits how much current flows for a given voltage.' },
          { id: 'rbq1-c', label: 'It stores energy for later use', isCorrect: false, explanation: 'Resistance does not store energy. It converts electrical energy into heat.' },
        ],
      },
      {
        id: 'rbq2',
        prompt: 'What symbol represents resistance?',
        choices: [
          { id: 'rbq2-a', label: 'I', isCorrect: false, explanation: 'I represents current.' },
          { id: 'rbq2-b', label: 'V', isCorrect: false, explanation: 'V represents voltage.' },
          { id: 'rbq2-c', label: 'R', isCorrect: true, explanation: 'Correct. R is the symbol for resistance, measured in ohms.' },
        ],
      },
      {
        id: 'rbq3',
        prompt: 'If a bulb has high resistance, what happens to the current (assuming the same voltage)?',
        choices: [
          { id: 'rbq3-a', label: 'Current increases', isCorrect: false, explanation: 'Higher resistance means less current for the same voltage, not more.' },
          { id: 'rbq3-b', label: 'Current decreases', isCorrect: true, explanation: 'Correct. More resistance opposes the flow more strongly, so less current gets through.' },
          { id: 'rbq3-c', label: 'Current stays the same', isCorrect: false, explanation: 'Current depends on resistance. Changing resistance changes the current.' },
        ],
      },
      {
        id: 'rbq4',
        prompt: 'What unit is resistance measured in?',
        choices: [
          { id: 'rbq4-a', label: 'Ohms', isCorrect: true, explanation: 'Correct. Resistance is measured in ohms, symbolized by the Greek letter omega (\u03A9).' },
          { id: 'rbq4-b', label: 'Volts', isCorrect: false, explanation: 'Volts measure voltage, not resistance.' },
          { id: 'rbq4-c', label: 'Watts', isCorrect: false, explanation: 'Watts measure power, not resistance.' },
        ],
      },
      {
        id: 'rbq5',
        prompt: 'Why do we treat the bulb as having a fixed resistance in our early model?',
        choices: [
          { id: 'rbq5-a', label: 'Because real bulbs actually have constant resistance', isCorrect: false, explanation: 'Real bulbs change resistance with temperature, but the simplified model ignores this.' },
          { id: 'rbq5-b', label: 'To simplify learning and make calculations predictable', isCorrect: true, explanation: 'Correct. Treating the bulb as an ideal resistive load with fixed resistance lets us focus on core concepts without added complexity.' },
          { id: 'rbq5-c', label: 'Because resistance does not matter for bulbs', isCorrect: false, explanation: 'Resistance matters greatly — it determines how much current flows and how bright the bulb glows.' },
        ],
      },
    ],
  },
  {
    id: 'quiz-formula-recognition',
    title: 'Formula and Symbol Recognition',
    unlockedBy: 'lesson-3-2',
    passingScore: 60,
    questions: [
      {
        id: 'frq1',
        prompt: 'What does V = IR express?',
        choices: [
          { id: 'frq1-a', label: 'Power equals voltage times current', isCorrect: false, explanation: 'That is P = VI, the power formula.' },
          { id: 'frq1-b', label: 'Voltage equals current times resistance', isCorrect: true, explanation: "Correct. V = IR is Ohm's Law, relating voltage, current, and resistance." },
          { id: 'frq1-c', label: 'Current equals voltage times resistance', isCorrect: false, explanation: 'V = IR means V equals I times R. To find I, you would rearrange to I = V/R.' },
        ],
      },
      {
        id: 'frq2',
        prompt: 'In the formula P = VI, what does P stand for?',
        choices: [
          { id: 'frq2-a', label: 'Pressure', isCorrect: false, explanation: 'P stands for power in circuit formulas, not pressure.' },
          { id: 'frq2-b', label: 'Power', isCorrect: true, explanation: 'Correct. P represents power, the rate at which energy is used, measured in watts.' },
          { id: 'frq2-c', label: 'Potential', isCorrect: false, explanation: 'While voltage is sometimes called potential difference, P specifically represents power.' },
        ],
      },
      {
        id: 'frq3',
        prompt: 'Which symbol represents current?',
        choices: [
          { id: 'frq3-a', label: 'C', isCorrect: false, explanation: 'C is not used for current in standard notation. Current is I.' },
          { id: 'frq3-b', label: 'I', isCorrect: true, explanation: 'Correct. I is the standard symbol for current, measured in amperes.' },
          { id: 'frq3-c', label: 'A', isCorrect: false, explanation: 'A (ampere) is the unit of current, but the symbol used in formulas is I.' },
        ],
      },
      {
        id: 'frq4',
        prompt: 'What unit is power measured in?',
        choices: [
          { id: 'frq4-a', label: 'Ohms', isCorrect: false, explanation: 'Ohms measure resistance.' },
          { id: 'frq4-b', label: 'Amperes', isCorrect: false, explanation: 'Amperes measure current.' },
          { id: 'frq4-c', label: 'Watts', isCorrect: true, explanation: 'Correct. Power is measured in watts (W).' },
        ],
      },
      {
        id: 'frq5',
        prompt: 'Which formula includes resistance?',
        choices: [
          { id: 'frq5-a', label: 'P = VI', isCorrect: false, explanation: 'P = VI relates power, voltage, and current. It does not directly include resistance.' },
          { id: 'frq5-b', label: 'V = IR', isCorrect: true, explanation: "Correct. V = IR (Ohm's Law) is the formula that directly includes resistance." },
          { id: 'frq5-c', label: 'Both formulas include resistance', isCorrect: false, explanation: 'Only V = IR directly includes R. P = VI can be combined with V = IR, but on its own it does not contain R.' },
        ],
      },
      {
        id: 'frq6',
        prompt: 'Match the quantity to its unit: Voltage is measured in:',
        choices: [
          { id: 'frq6-a', label: 'Volts', isCorrect: true, explanation: 'Correct. Voltage is measured in volts (V).' },
          { id: 'frq6-b', label: 'Amperes', isCorrect: false, explanation: 'Amperes measure current, not voltage.' },
          { id: 'frq6-c', label: 'Ohms', isCorrect: false, explanation: 'Ohms measure resistance, not voltage.' },
        ],
      },
    ],
  },
  {
    id: 'quiz-foundations-chapter-review',
    title: 'Foundations Review',
    unlockedBy: 'lesson-5-2',
    passingScore: 60,
    questions: [
      {
        id: 'fcrq1',
        prompt: 'What three things does every circuit need?',
        choices: [
          { id: 'fcrq1-a', label: 'A source, a load, and a complete conductive path', isCorrect: true, explanation: 'Correct. Every circuit requires a source of energy, something that uses it, and a complete path connecting them.' },
          { id: 'fcrq1-b', label: 'A battery, a switch, and a wire', isCorrect: false, explanation: 'While these are common components, the fundamental requirements are a source, a load, and a complete path.' },
          { id: 'fcrq1-c', label: 'Voltage, current, and power', isCorrect: false, explanation: 'These are circuit quantities, not physical requirements for a circuit.' },
        ],
      },
      {
        id: 'fcrq2',
        prompt: 'What happens when you open a switch in a series circuit?',
        choices: [
          { id: 'fcrq2-a', label: 'Current stops everywhere at once because the loop is broken', isCorrect: true, explanation: 'Correct. An open switch breaks the complete path, stopping all current flow immediately.' },
          { id: 'fcrq2-b', label: 'Current slowly decreases to zero', isCorrect: false, explanation: 'Current stops immediately, not gradually.' },
          { id: 'fcrq2-c', label: 'Only the current near the switch stops', isCorrect: false, explanation: 'In a series circuit, current is the same everywhere. It all stops at once.' },
        ],
      },
      {
        id: 'fcrq3',
        prompt: "According to Ohm's Law (V = IR), if voltage stays the same and resistance increases, what happens to current?",
        choices: [
          { id: 'fcrq3-a', label: 'Current increases', isCorrect: false, explanation: 'With constant voltage, more resistance means less current (I = V/R).' },
          { id: 'fcrq3-b', label: 'Current decreases', isCorrect: true, explanation: 'Correct. I = V/R, so increasing R while V stays constant means I goes down.' },
          { id: 'fcrq3-c', label: 'Current stays the same', isCorrect: false, explanation: 'Current depends on both voltage and resistance. Changing R changes I.' },
        ],
      },
      {
        id: 'fcrq4',
        prompt: 'Which quantity describes the rate at which electrical energy is used?',
        choices: [
          { id: 'fcrq4-a', label: 'Voltage', isCorrect: false, explanation: 'Voltage is the push, not the rate of energy use.' },
          { id: 'fcrq4-b', label: 'Current', isCorrect: false, explanation: 'Current is the flow, not the rate of energy use.' },
          { id: 'fcrq4-c', label: 'Power', isCorrect: true, explanation: 'Correct. Power (P) describes how much energy is converted per second, measured in watts.' },
        ],
      },
      {
        id: 'fcrq5',
        prompt: 'A bulb in a circuit glows brighter. This means:',
        choices: [
          { id: 'fcrq5-a', label: 'The bulb is receiving more power', isCorrect: true, explanation: 'Correct. Brightness is directly related to power. More power (P = VI) means a brighter bulb.' },
          { id: 'fcrq5-b', label: 'The voltage is lower', isCorrect: false, explanation: 'Lower voltage would typically mean less current and less power, making the bulb dimmer.' },
          { id: 'fcrq5-c', label: 'The resistance is higher', isCorrect: false, explanation: 'Higher resistance with constant voltage would reduce current and power, making the bulb dimmer.' },
        ],
      },
      {
        id: 'fcrq6',
        prompt: 'What is the purpose of the load in a circuit?',
        choices: [
          { id: 'fcrq6-a', label: 'To store electrical energy', isCorrect: false, explanation: 'A load converts energy, it does not store it (that would be a capacitor or battery).' },
          { id: 'fcrq6-b', label: 'To convert electrical energy into a useful form', isCorrect: true, explanation: 'Correct. The load converts electrical energy into light, heat, motion, sound, or other useful forms.' },
          { id: 'fcrq6-c', label: 'To increase the voltage', isCorrect: false, explanation: 'Loads do not increase voltage. They use the energy provided by the source.' },
        ],
      },
      {
        id: 'fcrq7',
        prompt: 'Which pair of formulas forms the foundation of basic circuit analysis?',
        choices: [
          { id: 'fcrq7-a', label: 'E = mc\u00B2 and F = ma', isCorrect: false, explanation: 'Those are physics formulas, but not for circuits. The circuit formulas are V = IR and P = VI.' },
          { id: 'fcrq7-b', label: 'V = IR and P = VI', isCorrect: true, explanation: "Correct. Ohm's Law (V = IR) and the power formula (P = VI) are the two foundational circuit equations." },
          { id: 'fcrq7-c', label: 'A = V/R and W = P/T', isCorrect: false, explanation: 'While I = V/R is a rearrangement of Ohm\'s Law, the standard forms are V = IR and P = VI.' },
        ],
      },
      {
        id: 'fcrq8',
        prompt: 'What does it mean when we say the battery is an "ideal voltage source"?',
        choices: [
          { id: 'fcrq8-a', label: 'It provides unlimited current', isCorrect: false, explanation: 'Ideal voltage source means constant voltage, not unlimited current.' },
          { id: 'fcrq8-b', label: 'It provides a constant voltage regardless of what is connected', isCorrect: true, explanation: 'Correct. An ideal voltage source maintains the same voltage whether the circuit is open, closed, or connected to different loads.' },
          { id: 'fcrq8-c', label: 'It never runs out of energy', isCorrect: false, explanation: 'Ideal refers to constant voltage output, not infinite energy capacity.' },
        ],
      },
    ],
  },
  {
    id: 'quiz-source-vs-load',
    title: 'Source vs Load',
    unlockedBy: 'lesson-2-1',
    passingScore: 60,
    questions: [
      {
        id: 'svl1',
        prompt: 'What is the role of the source in a circuit?',
        choices: [
          { id: 'svl1-a', label: 'It provides electrical energy that drives current', isCorrect: true, explanation: 'Correct. The source provides the push (voltage) that drives current through the circuit.' },
          { id: 'svl1-b', label: 'It uses electrical energy to do useful work', isCorrect: false, explanation: 'That describes the load, not the source.' },
          { id: 'svl1-c', label: 'It controls whether the circuit is on or off', isCorrect: false, explanation: 'That describes a switch, not the source.' },
        ],
      },
      {
        id: 'svl2',
        prompt: 'What is the role of the load in a circuit?',
        choices: [
          { id: 'svl2-a', label: 'It converts electrical energy into another form like light or heat', isCorrect: true, explanation: 'Correct. The load uses the energy provided by the source.' },
          { id: 'svl2-b', label: 'It provides the voltage that pushes current', isCorrect: false, explanation: 'That describes the source, not the load.' },
          { id: 'svl2-c', label: 'It stores energy for later use', isCorrect: false, explanation: 'A load consumes energy; it does not store it.' },
        ],
      },
      {
        id: 'svl3',
        prompt: 'In a simple circuit with a battery and a bulb, which is the source and which is the load?',
        choices: [
          { id: 'svl3-a', label: 'The battery is the source; the bulb is the load', isCorrect: true, explanation: 'Correct. The battery provides energy and the bulb converts it to light and heat.' },
          { id: 'svl3-b', label: 'The bulb is the source; the battery is the load', isCorrect: false, explanation: 'The battery provides energy (source) and the bulb uses it (load), not the reverse.' },
          { id: 'svl3-c', label: 'Both are sources', isCorrect: false, explanation: 'Only the battery provides energy. The bulb consumes it.' },
        ],
      },
      {
        id: 'svl4',
        prompt: 'Can a circuit work without a load?',
        choices: [
          { id: 'svl4-a', label: 'Current can flow but there is nothing to use the energy', isCorrect: true, explanation: 'Correct. Without a load, current may flow but no useful work is done. In practice this can be dangerous (short circuit).' },
          { id: 'svl4-b', label: 'No, the circuit cannot be complete without a load', isCorrect: false, explanation: 'A circuit can technically be complete with just a source and wire, though this creates a short circuit.' },
          { id: 'svl4-c', label: 'The circuit works exactly the same with or without a load', isCorrect: false, explanation: 'Without a load the circuit behavior changes dramatically — there is no resistance to limit current.' },
        ],
      },
      {
        id: 'svl5',
        prompt: 'What happens if you remove the source from a circuit?',
        choices: [
          { id: 'svl5-a', label: 'No current flows because there is no push', isCorrect: true, explanation: 'Correct. Without a source there is no voltage to drive current through the circuit.' },
          { id: 'svl5-b', label: 'Current continues flowing from the load', isCorrect: false, explanation: 'The load does not generate current. It needs a source to drive the flow.' },
          { id: 'svl5-c', label: 'The load becomes the new source', isCorrect: false, explanation: 'A load cannot become a source. Without a source, the circuit is inactive.' },
        ],
      },
    ],
  },
  {
    id: 'quiz-voltage-current-relationship',
    title: 'Voltage and Current Relationship',
    unlockedBy: 'lesson-2-4',
    passingScore: 60,
    questions: [
      {
        id: 'vcr1',
        prompt: 'What is the relationship between voltage and current in a simple circuit?',
        choices: [
          { id: 'vcr1-a', label: 'Higher voltage drives more current through the same load', isCorrect: true, explanation: 'Correct. Voltage is the push — more push means more current for the same resistance.' },
          { id: 'vcr1-b', label: 'Voltage and current are unrelated', isCorrect: false, explanation: 'They are directly related. Voltage drives current through the circuit.' },
          { id: 'vcr1-c', label: 'Higher voltage always means less current', isCorrect: false, explanation: 'The opposite is true for the same load. More voltage means more current.' },
        ],
      },
      {
        id: 'vcr2',
        prompt: 'If you increase the resistance in a circuit while keeping voltage the same, what happens to current?',
        choices: [
          { id: 'vcr2-a', label: 'Current decreases', isCorrect: true, explanation: 'Correct. More resistance opposes current flow, so current decreases.' },
          { id: 'vcr2-b', label: 'Current increases', isCorrect: false, explanation: 'More resistance means more opposition to current, so current decreases.' },
          { id: 'vcr2-c', label: 'Current stays the same', isCorrect: false, explanation: 'Current depends on both voltage and resistance. Changing resistance changes current.' },
        ],
      },
      {
        id: 'vcr3',
        prompt: 'A battery pushes current through a bulb. What determines how much current flows?',
        choices: [
          { id: 'vcr3-a', label: 'Both the voltage of the battery and the resistance of the bulb', isCorrect: true, explanation: 'Correct. Current depends on the push (voltage) and the opposition (resistance).' },
          { id: 'vcr3-b', label: 'Only the voltage of the battery', isCorrect: false, explanation: 'Resistance also matters. A higher-resistance bulb allows less current at the same voltage.' },
          { id: 'vcr3-c', label: 'Only the resistance of the bulb', isCorrect: false, explanation: 'Voltage also matters. A higher voltage drives more current through the same bulb.' },
        ],
      },
      {
        id: 'vcr4',
        prompt: 'Which analogy best describes voltage in a circuit?',
        choices: [
          { id: 'vcr4-a', label: 'Pressure that pushes water through a pipe', isCorrect: true, explanation: 'Correct. Voltage is like pressure — it is the force that drives flow.' },
          { id: 'vcr4-b', label: 'The width of the pipe', isCorrect: false, explanation: 'Pipe width is more like conductance (inverse of resistance), not voltage.' },
          { id: 'vcr4-c', label: 'The amount of water in the pipe', isCorrect: false, explanation: 'The amount of flow is more like current, not voltage.' },
        ],
      },
      {
        id: 'vcr5',
        prompt: 'Two identical bulbs are connected to two different batteries. Bulb A has a 6V battery and Bulb B has a 12V battery. Which bulb has more current?',
        choices: [
          { id: 'vcr5-a', label: 'Bulb B, because the voltage is higher', isCorrect: true, explanation: 'Correct. With identical resistance, the higher voltage drives more current.' },
          { id: 'vcr5-b', label: 'Bulb A, because the voltage is lower', isCorrect: false, explanation: 'Lower voltage means less push, which means less current, not more.' },
          { id: 'vcr5-c', label: 'Both have the same current', isCorrect: false, explanation: 'Since the bulbs are identical but voltages differ, the currents differ too.' },
        ],
      },
    ],
  },
  {
    id: 'quiz-symbol-recognition',
    title: 'Circuit Symbol Recognition',
    unlockedBy: 'lesson-3-2',
    passingScore: 60,
    questions: [
      {
        id: 'sr1',
        prompt: 'What does the symbol V represent in circuit analysis?',
        choices: [
          { id: 'sr1-a', label: 'Voltage, measured in volts', isCorrect: true, explanation: 'Correct. V stands for voltage and is measured in volts.' },
          { id: 'sr1-b', label: 'Volume, measured in liters', isCorrect: false, explanation: 'V in circuits stands for voltage, not volume.' },
          { id: 'sr1-c', label: 'Velocity, measured in meters per second', isCorrect: false, explanation: 'V in circuits stands for voltage, not velocity.' },
        ],
      },
      {
        id: 'sr2',
        prompt: 'What does the symbol I represent?',
        choices: [
          { id: 'sr2-a', label: 'Current, measured in amperes', isCorrect: true, explanation: 'Correct. I represents current and is measured in amperes (A).' },
          { id: 'sr2-b', label: 'Impedance, measured in ohms', isCorrect: false, explanation: 'Impedance uses the symbol Z. I represents current.' },
          { id: 'sr2-c', label: 'Intensity, measured in watts', isCorrect: false, explanation: 'I in circuit analysis specifically represents current.' },
        ],
      },
      {
        id: 'sr3',
        prompt: 'What does the symbol R represent?',
        choices: [
          { id: 'sr3-a', label: 'Resistance, measured in ohms', isCorrect: true, explanation: 'Correct. R represents resistance and is measured in ohms (Ω).' },
          { id: 'sr3-b', label: 'Reactance, measured in volts', isCorrect: false, explanation: 'R in basic DC circuits represents resistance. Reactance is an AC concept.' },
          { id: 'sr3-c', label: 'Rate, measured in amperes', isCorrect: false, explanation: 'R represents resistance, not a rate.' },
        ],
      },
      {
        id: 'sr4',
        prompt: 'What unit does the symbol Ω represent?',
        choices: [
          { id: 'sr4-a', label: 'Ohms, the unit of resistance', isCorrect: true, explanation: 'Correct. Ω (omega) is the symbol for ohms, the unit of resistance.' },
          { id: 'sr4-b', label: 'Amperes, the unit of current', isCorrect: false, explanation: 'Amperes use the symbol A. Ω represents ohms.' },
          { id: 'sr4-c', label: 'Watts, the unit of power', isCorrect: false, explanation: 'Watts use the symbol W. Ω represents ohms.' },
        ],
      },
      {
        id: 'sr5',
        prompt: 'Which symbol represents power?',
        choices: [
          { id: 'sr5-a', label: 'P', isCorrect: true, explanation: 'Correct. P represents power, measured in watts (W).' },
          { id: 'sr5-b', label: 'W', isCorrect: false, explanation: 'W is the unit (watts), not the symbol. The symbol for power is P.' },
          { id: 'sr5-c', label: 'E', isCorrect: false, explanation: 'E sometimes represents voltage (EMF) but not power. Power uses P.' },
        ],
      },
    ],
  },
  {
    id: 'quiz-formulas-as-relationships',
    title: 'Formulas as Relationships',
    unlockedBy: 'lesson-3-3',
    passingScore: 60,
    questions: [
      {
        id: 'far1',
        prompt: 'The formula V = IR tells you that voltage equals:',
        choices: [
          { id: 'far1-a', label: 'Current multiplied by resistance', isCorrect: true, explanation: 'Correct. V = I × R means voltage is the product of current and resistance.' },
          { id: 'far1-b', label: 'Current divided by resistance', isCorrect: false, explanation: 'That would be I/R. The formula says V = I × R (multiplication).' },
          { id: 'far1-c', label: 'Current plus resistance', isCorrect: false, explanation: 'The formula uses multiplication, not addition.' },
        ],
      },
      {
        id: 'far2',
        prompt: 'If V = IR, what happens to voltage when current increases but resistance stays the same?',
        choices: [
          { id: 'far2-a', label: 'Voltage increases', isCorrect: true, explanation: 'Correct. If I goes up and R stays the same, V = I × R increases.' },
          { id: 'far2-b', label: 'Voltage decreases', isCorrect: false, explanation: 'With constant R, increasing I increases V.' },
          { id: 'far2-c', label: 'Voltage stays the same', isCorrect: false, explanation: 'V depends on I, so changing I changes V when R is constant.' },
        ],
      },
      {
        id: 'far3',
        prompt: 'The formula P = VI tells you that power equals:',
        choices: [
          { id: 'far3-a', label: 'Voltage multiplied by current', isCorrect: true, explanation: 'Correct. Power is the product of voltage and current.' },
          { id: 'far3-b', label: 'Voltage divided by current', isCorrect: false, explanation: 'That would give resistance (V/I = R), not power.' },
          { id: 'far3-c', label: 'Voltage plus current', isCorrect: false, explanation: 'The formula uses multiplication, not addition.' },
        ],
      },
      {
        id: 'far4',
        prompt: 'Why are formulas useful in circuit analysis?',
        choices: [
          { id: 'far4-a', label: 'They show how quantities relate, letting you calculate unknowns from knowns', isCorrect: true, explanation: 'Correct. Formulas express relationships that let you find unknown values from known ones.' },
          { id: 'far4-b', label: 'They are just for memorization and have no practical use', isCorrect: false, explanation: 'Formulas are practical tools for calculation and reasoning, not just memorization.' },
          { id: 'far4-c', label: 'They only work for very complex circuits', isCorrect: false, explanation: 'Formulas work for all circuits, including the simplest ones.' },
        ],
      },
      {
        id: 'far5',
        prompt: 'From V = IR, if you know V and R, which quantity can you calculate?',
        choices: [
          { id: 'far5-a', label: 'Current (I = V/R)', isCorrect: true, explanation: 'Correct. Rearranging V = IR gives I = V/R.' },
          { id: 'far5-b', label: 'Power', isCorrect: false, explanation: 'You would need a different formula (P = VI) and would first need to find I.' },
          { id: 'far5-c', label: 'Nothing — you need all three to use the formula', isCorrect: false, explanation: 'You only need two of the three quantities. The formula lets you find the third.' },
        ],
      },
    ],
  },
  {
    id: 'quiz-simple-connection-logic',
    title: 'Simple Connection Logic',
    unlockedBy: 'lesson-4-2',
    passingScore: 60,
    questions: [
      {
        id: 'scl1',
        prompt: 'What must be true for current to flow in a circuit?',
        choices: [
          { id: 'scl1-a', label: 'There must be a complete, unbroken path from source through load and back', isCorrect: true, explanation: 'Correct. Current requires a complete loop with no gaps.' },
          { id: 'scl1-b', label: 'The wires must be arranged in a straight line', isCorrect: false, explanation: 'Physical arrangement does not matter. Electrical connectivity does.' },
          { id: 'scl1-c', label: 'There must be at least two batteries', isCorrect: false, explanation: 'One battery is sufficient as long as the path is complete.' },
        ],
      },
      {
        id: 'scl2',
        prompt: 'If a wire is disconnected from one terminal of a bulb, what happens?',
        choices: [
          { id: 'scl2-a', label: 'The circuit is broken and no current flows', isCorrect: true, explanation: 'Correct. A disconnected wire creates a gap, stopping all current flow.' },
          { id: 'scl2-b', label: 'Current flows through the air gap', isCorrect: false, explanation: 'In normal circuits, current does not jump across gaps.' },
          { id: 'scl2-c', label: 'The bulb still lights but dimmer', isCorrect: false, explanation: 'No current flows through an open circuit, so the bulb stays dark.' },
        ],
      },
      {
        id: 'scl3',
        prompt: 'You are building a circuit and the bulb does not light. What is the most likely problem?',
        choices: [
          { id: 'scl3-a', label: 'There is a gap somewhere in the circuit path', isCorrect: true, explanation: 'Correct. The most common reason a circuit fails is an incomplete path.' },
          { id: 'scl3-b', label: 'The battery is too powerful', isCorrect: false, explanation: 'A more powerful battery would drive more current, not prevent flow.' },
          { id: 'scl3-c', label: 'The wires are the wrong color', isCorrect: false, explanation: 'Wire color has no effect on electrical behavior.' },
        ],
      },
      {
        id: 'scl4',
        prompt: 'When connecting components, each component must connect to:',
        choices: [
          { id: 'scl4-a', label: 'Two nodes, forming part of the continuous circuit path', isCorrect: true, explanation: 'Correct. Each component bridges two nodes to maintain path continuity.' },
          { id: 'scl4-b', label: 'Only one node — the other end floats freely', isCorrect: false, explanation: 'A floating terminal breaks the path. Both terminals must connect.' },
          { id: 'scl4-c', label: 'As many nodes as possible for better performance', isCorrect: false, explanation: 'Each component needs exactly two connection points to function properly.' },
        ],
      },
      {
        id: 'scl5',
        prompt: 'What does it mean to "close" a circuit?',
        choices: [
          { id: 'scl5-a', label: 'Complete the path so current can flow continuously', isCorrect: true, explanation: 'Correct. Closing a circuit means creating a complete loop for current.' },
          { id: 'scl5-b', label: 'Turn off the power supply', isCorrect: false, explanation: 'Closing a circuit means completing it, which allows current to flow — the opposite of turning it off.' },
          { id: 'scl5-c', label: 'Remove all the components', isCorrect: false, explanation: 'Removing components would open (break) the circuit, not close it.' },
        ],
      },
    ],
  },
  {
    id: 'quiz-quantity-symbol-review',
    title: 'Quantity and Symbol Review',
    unlockedBy: 'lesson-5-1',
    passingScore: 60,
    questions: [
      {
        id: 'qsr1',
        prompt: 'Match the quantity to its correct symbol and unit: Voltage',
        choices: [
          { id: 'qsr1-a', label: 'Symbol: V, Unit: volts (V)', isCorrect: true, explanation: 'Correct. Voltage uses the symbol V and is measured in volts.' },
          { id: 'qsr1-b', label: 'Symbol: I, Unit: amperes (A)', isCorrect: false, explanation: 'That describes current, not voltage.' },
          { id: 'qsr1-c', label: 'Symbol: R, Unit: ohms (Ω)', isCorrect: false, explanation: 'That describes resistance, not voltage.' },
        ],
      },
      {
        id: 'qsr2',
        prompt: 'Match the quantity to its correct symbol and unit: Current',
        choices: [
          { id: 'qsr2-a', label: 'Symbol: I, Unit: amperes (A)', isCorrect: true, explanation: 'Correct. Current uses the symbol I and is measured in amperes.' },
          { id: 'qsr2-b', label: 'Symbol: V, Unit: volts (V)', isCorrect: false, explanation: 'That describes voltage, not current.' },
          { id: 'qsr2-c', label: 'Symbol: P, Unit: watts (W)', isCorrect: false, explanation: 'That describes power, not current.' },
        ],
      },
      {
        id: 'qsr3',
        prompt: 'Match the quantity to its correct symbol and unit: Resistance',
        choices: [
          { id: 'qsr3-a', label: 'Symbol: R, Unit: ohms (Ω)', isCorrect: true, explanation: 'Correct. Resistance uses the symbol R and is measured in ohms.' },
          { id: 'qsr3-b', label: 'Symbol: V, Unit: volts (V)', isCorrect: false, explanation: 'That describes voltage, not resistance.' },
          { id: 'qsr3-c', label: 'Symbol: I, Unit: amperes (A)', isCorrect: false, explanation: 'That describes current, not resistance.' },
        ],
      },
      {
        id: 'qsr4',
        prompt: 'Match the quantity to its correct symbol and unit: Power',
        choices: [
          { id: 'qsr4-a', label: 'Symbol: P, Unit: watts (W)', isCorrect: true, explanation: 'Correct. Power uses the symbol P and is measured in watts.' },
          { id: 'qsr4-b', label: 'Symbol: R, Unit: ohms (Ω)', isCorrect: false, explanation: 'That describes resistance, not power.' },
          { id: 'qsr4-c', label: 'Symbol: V, Unit: volts (V)', isCorrect: false, explanation: 'That describes voltage, not power.' },
        ],
      },
      {
        id: 'qsr5',
        prompt: 'Which formula connects voltage, current, and resistance?',
        choices: [
          { id: 'qsr5-a', label: 'V = IR (Ohm\'s Law)', isCorrect: true, explanation: 'Correct. Ohm\'s Law relates all three fundamental circuit quantities.' },
          { id: 'qsr5-b', label: 'P = VI', isCorrect: false, explanation: 'P = VI relates power, voltage, and current — but not resistance directly.' },
          { id: 'qsr5-c', label: 'E = mc²', isCorrect: false, explanation: 'That is Einstein\'s mass-energy equivalence, not a circuit formula.' },
        ],
      },
    ],
  },

  // Chapter 2 — Numerical Circuit Analysis
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
  // Chapter 3 Quizzes
  {
    id: 'quiz-ch3-series-identification',
    title: 'Series Circuit Identification',
    unlockedBy: 'lesson-ch3-1-1',
    passingScore: 60,
    questions: [
      {
        id: 'ch3si1',
        prompt: 'What is the defining characteristic of a series circuit?',
        choices: [
          { id: 'ch3si1-a', label: 'There is only one path for current to flow through all components', isCorrect: true, explanation: 'Correct. In a series circuit, all components share a single path, so current flows through each one in turn.' },
          { id: 'ch3si1-b', label: 'Each component has its own separate path from the battery', isCorrect: false, explanation: 'That describes a parallel circuit, not a series circuit.' },
          { id: 'ch3si1-c', label: 'Components can be removed without affecting the rest of the circuit', isCorrect: false, explanation: 'In a series circuit, removing a component breaks the only path and stops all current flow.' },
        ],
      },
      {
        id: 'ch3si2',
        prompt: 'Which diagram represents a series circuit?',
        choices: [
          { id: 'ch3si2-a', label: 'Two bulbs connected one after the other along a single loop', isCorrect: true, explanation: 'Correct. Components arranged along a single loop form a series circuit.' },
          { id: 'ch3si2-b', label: 'Two bulbs each on their own branch between the same two nodes', isCorrect: false, explanation: 'That is a parallel arrangement, not series.' },
          { id: 'ch3si2-c', label: 'Two bulbs with a switch that selects one or the other', isCorrect: false, explanation: 'A selector switch does not create a series circuit; it routes current to one path at a time.' },
        ],
      },
      {
        id: 'ch3si3',
        prompt: 'How many paths does current have in a series circuit with three loads?',
        choices: [
          { id: 'ch3si3-a', label: 'One path through all three loads', isCorrect: true, explanation: 'Correct. Regardless of the number of loads, a series circuit has exactly one path.' },
          { id: 'ch3si3-b', label: 'Three separate paths, one per load', isCorrect: false, explanation: 'Multiple separate paths would make it a parallel circuit.' },
          { id: 'ch3si3-c', label: 'It depends on the resistance of each load', isCorrect: false, explanation: 'The number of paths is determined by the circuit topology, not by resistance values.' },
        ],
      },
      {
        id: 'ch3si4',
        prompt: 'If you trace the wire from one battery terminal to the other in a series circuit, how many times do you pass through each component?',
        choices: [
          { id: 'ch3si4-a', label: 'Exactly once', isCorrect: true, explanation: 'Correct. In a single-loop series circuit, each component is visited exactly once on the path from one terminal to the other.' },
          { id: 'ch3si4-b', label: 'Twice — once on the way out and once on the way back', isCorrect: false, explanation: 'You do not loop back through the same component in a series circuit.' },
          { id: 'ch3si4-c', label: 'It varies depending on the component type', isCorrect: false, explanation: 'The number of passes depends on circuit topology, not component type. In series it is always once.' },
        ],
      },
      {
        id: 'ch3si5',
        prompt: 'A circuit has a battery, a switch, and two resistors all connected end-to-end in a single loop. What type of circuit is this?',
        choices: [
          { id: 'ch3si5-a', label: 'A series circuit', isCorrect: true, explanation: 'Correct. All components connected end-to-end in one loop is the definition of a series circuit.' },
          { id: 'ch3si5-b', label: 'A parallel circuit', isCorrect: false, explanation: 'A parallel circuit would require multiple branches, not a single loop.' },
          { id: 'ch3si5-c', label: 'A short circuit', isCorrect: false, explanation: 'A short circuit bypasses a load entirely. This circuit has loads properly in the loop.' },
        ],
      },
    ],
  },
  {
    id: 'quiz-ch3-series-brightness',
    title: 'Series Brightness',
    unlockedBy: 'lesson-ch3-1-2',
    passingScore: 60,
    questions: [
      {
        id: 'ch3sb1',
        prompt: 'How does the brightness of two identical bulbs in series compare to a single bulb connected to the same battery?',
        choices: [
          { id: 'ch3sb1-a', label: 'Each series bulb is dimmer than the single bulb', isCorrect: true, explanation: 'Correct. Adding a second bulb in series increases total resistance, reducing current and making each bulb dimmer.' },
          { id: 'ch3sb1-b', label: 'Each series bulb is the same brightness as the single bulb', isCorrect: false, explanation: 'The extra resistance in series reduces the current, so each bulb receives less power and is dimmer.' },
          { id: 'ch3sb1-c', label: 'Each series bulb is brighter than the single bulb', isCorrect: false, explanation: 'More resistance means less current and less brightness, not more.' },
        ],
      },
      {
        id: 'ch3sb2',
        prompt: 'Two identical bulbs are connected in series. How do their brightnesses compare to each other?',
        choices: [
          { id: 'ch3sb2-a', label: 'They are equally bright', isCorrect: true, explanation: 'Correct. Identical bulbs in series carry the same current, so they produce the same brightness.' },
          { id: 'ch3sb2-b', label: 'The bulb closer to the positive terminal is brighter', isCorrect: false, explanation: 'Current is the same everywhere in a series circuit, so position does not affect brightness.' },
          { id: 'ch3sb2-c', label: 'The bulb closer to the negative terminal is brighter', isCorrect: false, explanation: 'Position in a series loop does not change the current through each bulb.' },
        ],
      },
      {
        id: 'ch3sb3',
        prompt: 'Why are series bulbs dimmer than a single bulb on the same battery?',
        choices: [
          { id: 'ch3sb3-a', label: 'The total resistance is higher, so less current flows', isCorrect: true, explanation: 'Correct. Each additional series resistor adds to the total, reducing the current from the battery.' },
          { id: 'ch3sb3-b', label: 'The battery provides less voltage when more bulbs are connected', isCorrect: false, explanation: 'An ideal battery supplies the same voltage regardless of the load. It is the increased resistance that reduces current.' },
          { id: 'ch3sb3-c', label: 'The bulbs share electrons so each gets fewer', isCorrect: false, explanation: 'Electrons are not "shared" between bulbs. The same current flows through every series element.' },
        ],
      },
      {
        id: 'ch3sb4',
        prompt: 'If you swap the positions of two identical bulbs in a series circuit, what happens to their brightness?',
        choices: [
          { id: 'ch3sb4-a', label: 'Nothing changes — the brightness stays the same', isCorrect: true, explanation: 'Correct. Rearranging identical components in series does not change total resistance or current.' },
          { id: 'ch3sb4-b', label: 'The bulb now closer to the battery gets brighter', isCorrect: false, explanation: 'In a series circuit, every element carries the same current regardless of position.' },
          { id: 'ch3sb4-c', label: 'Both bulbs get dimmer because the circuit was disturbed', isCorrect: false, explanation: 'Swapping identical components does not change the circuit electrically.' },
        ],
      },
      {
        id: 'ch3sb5',
        prompt: 'Adding a third identical bulb in series to a two-bulb series circuit will:',
        choices: [
          { id: 'ch3sb5-a', label: 'Make all three bulbs dimmer than the original two were', isCorrect: true, explanation: 'Correct. More series resistance means less current, so every bulb becomes dimmer.' },
          { id: 'ch3sb5-b', label: 'Not change the brightness of the original two bulbs', isCorrect: false, explanation: 'Adding resistance reduces the current through the entire series loop, dimming all bulbs.' },
          { id: 'ch3sb5-c', label: 'Make the third bulb dim but the first two stay the same', isCorrect: false, explanation: 'All bulbs share the same reduced current, so all get dimmer equally.' },
        ],
      },
    ],
  },
  {
    id: 'quiz-ch3-series-current',
    title: 'Current in Series',
    unlockedBy: 'lesson-ch3-1-3',
    passingScore: 60,
    questions: [
      {
        id: 'ch3sc1',
        prompt: 'In a series circuit with three resistors, how does the current through the first resistor compare to the current through the third?',
        choices: [
          { id: 'ch3sc1-a', label: 'They are exactly the same', isCorrect: true, explanation: 'Correct. In a series circuit there is only one path, so the same current flows through every component.' },
          { id: 'ch3sc1-b', label: 'The first resistor gets more current because it is closer to the battery', isCorrect: false, explanation: 'Current does not diminish as it passes through components in a series loop.' },
          { id: 'ch3sc1-c', label: 'It depends on the resistance values', isCorrect: false, explanation: 'Resistance values affect the total current, but every series element carries that same total current.' },
        ],
      },
      {
        id: 'ch3sc2',
        prompt: 'Why is the current the same everywhere in a series circuit?',
        choices: [
          { id: 'ch3sc2-a', label: 'Because there is only one path, so charge cannot accumulate or be lost', isCorrect: true, explanation: 'Correct. Conservation of charge in a single path means the same amount of charge per second passes every point.' },
          { id: 'ch3sc2-b', label: 'Because the battery pushes harder near the end of the circuit', isCorrect: false, explanation: 'The battery provides a fixed voltage; it does not push harder at different points.' },
          { id: 'ch3sc2-c', label: 'Because resistors generate extra current to compensate for losses', isCorrect: false, explanation: 'Resistors do not generate current. They impede it equally throughout the single path.' },
        ],
      },
      {
        id: 'ch3sc3',
        prompt: 'An ammeter reads 0.5 A at one point in a series circuit. What will a second ammeter read at another point in the same circuit?',
        choices: [
          { id: 'ch3sc3-a', label: '0.5 A', isCorrect: true, explanation: 'Correct. Current is the same at every point in a series circuit.' },
          { id: 'ch3sc3-b', label: 'Less than 0.5 A, because some current was used by the components', isCorrect: false, explanation: 'Current is not "used up" by components. The same current flows throughout.' },
          { id: 'ch3sc3-c', label: 'More than 0.5 A, because current builds up', isCorrect: false, explanation: 'Current does not accumulate. It remains constant in a series path.' },
        ],
      },
      {
        id: 'ch3sc4',
        prompt: 'If you break the circuit at any point in a series path, what happens to the current?',
        choices: [
          { id: 'ch3sc4-a', label: 'Current stops everywhere in the circuit', isCorrect: true, explanation: 'Correct. A break anywhere in the single path stops all current flow.' },
          { id: 'ch3sc4-b', label: 'Current continues in the portion before the break', isCorrect: false, explanation: 'Without a complete loop, no sustained current can flow anywhere.' },
          { id: 'ch3sc4-c', label: 'Current reroutes around the break', isCorrect: false, explanation: 'There is no alternative path in a series circuit, so current cannot reroute.' },
        ],
      },
      {
        id: 'ch3sc5',
        prompt: 'Which statement about current in a series circuit is true?',
        choices: [
          { id: 'ch3sc5-a', label: 'The current entering a component equals the current leaving it', isCorrect: true, explanation: 'Correct. Charge is conserved, so the same current enters and exits each component.' },
          { id: 'ch3sc5-b', label: 'A resistor absorbs some current, so less comes out', isCorrect: false, explanation: 'Resistors convert electrical energy to heat; they do not absorb current.' },
          { id: 'ch3sc5-c', label: 'Current increases after passing through a battery', isCorrect: false, explanation: 'The battery sets the overall current via its voltage, but current is the same throughout the loop.' },
        ],
      },
    ],
  },
  {
    id: 'quiz-ch3-series-resistance-calc',
    title: 'Series Resistance Calculation',
    unlockedBy: 'lesson-ch3-2-1',
    passingScore: 60,
    questions: [
      {
        id: 'ch3sr1',
        prompt: 'What is the total resistance of two 45 Ω resistors connected in series?',
        choices: [
          { id: 'ch3sr1-a', label: '90 Ω', isCorrect: true, explanation: 'Correct. In series, R_total = R1 + R2 = 45 + 45 = 90 Ω.' },
          { id: 'ch3sr1-b', label: '22.5 Ω', isCorrect: false, explanation: '22.5 Ω would be the result of two 45 Ω resistors in parallel, not series.' },
          { id: 'ch3sr1-c', label: '45 Ω', isCorrect: false, explanation: 'You must add both resistances in series: 45 + 45 = 90 Ω.' },
        ],
      },
      {
        id: 'ch3sr2',
        prompt: 'Two 30 Ω resistors are in series. What is the total resistance?',
        choices: [
          { id: 'ch3sr2-a', label: '60 Ω', isCorrect: true, explanation: 'Correct. R_total = 30 + 30 = 60 Ω.' },
          { id: 'ch3sr2-b', label: '15 Ω', isCorrect: false, explanation: '15 Ω would result from two 30 Ω in parallel. In series, you add them.' },
          { id: 'ch3sr2-c', label: '30 Ω', isCorrect: false, explanation: 'Both resistors contribute to total resistance: 30 + 30 = 60 Ω.' },
        ],
      },
      {
        id: 'ch3sr3',
        prompt: 'A 20 Ω resistor and a 40 Ω resistor are connected in series. What is the total resistance?',
        choices: [
          { id: 'ch3sr3-a', label: '60 Ω', isCorrect: true, explanation: 'Correct. R_total = 20 + 40 = 60 Ω.' },
          { id: 'ch3sr3-b', label: '30 Ω', isCorrect: false, explanation: 'That would be the average. In series you add: 20 + 40 = 60 Ω.' },
          { id: 'ch3sr3-c', label: '13.3 Ω', isCorrect: false, explanation: 'That is close to the parallel equivalent. Series resistance is the sum: 60 Ω.' },
        ],
      },
      {
        id: 'ch3sr4',
        prompt: 'What is the formula for total resistance in a series circuit?',
        choices: [
          { id: 'ch3sr4-a', label: 'R_total = R1 + R2 + R3 + …', isCorrect: true, explanation: 'Correct. Series resistances simply add together.' },
          { id: 'ch3sr4-b', label: '1/R_total = 1/R1 + 1/R2 + …', isCorrect: false, explanation: 'That is the formula for parallel resistance, not series.' },
          { id: 'ch3sr4-c', label: 'R_total = R1 × R2 / (R1 + R2)', isCorrect: false, explanation: 'That is the product-over-sum shortcut for two parallel resistors.' },
        ],
      },
      {
        id: 'ch3sr5',
        prompt: 'Adding a resistor in series to an existing circuit will:',
        choices: [
          { id: 'ch3sr5-a', label: 'Increase the total resistance', isCorrect: true, explanation: 'Correct. Every resistor added in series adds its value to the total.' },
          { id: 'ch3sr5-b', label: 'Decrease the total resistance', isCorrect: false, explanation: 'Decreasing resistance occurs when adding in parallel, not series.' },
          { id: 'ch3sr5-c', label: 'Not change the total resistance', isCorrect: false, explanation: 'Any non-zero resistor added in series increases the total.' },
        ],
      },
    ],
  },
  {
    id: 'quiz-ch3-series-current-calc',
    title: 'Series Current Calculation',
    unlockedBy: 'lesson-ch3-2-2',
    passingScore: 60,
    questions: [
      {
        id: 'ch3scc1',
        prompt: 'A 9 V battery is connected to two 45 Ω resistors in series. What is the current?',
        choices: [
          { id: 'ch3scc1-a', label: '0.1 A', isCorrect: true, explanation: 'Correct. R_total = 90 Ω, so I = 9 V / 90 Ω = 0.1 A.' },
          { id: 'ch3scc1-b', label: '0.2 A', isCorrect: false, explanation: 'R_total = 45 + 45 = 90 Ω. I = 9 / 90 = 0.1 A, not 0.2 A.' },
          { id: 'ch3scc1-c', label: '4.5 A', isCorrect: false, explanation: 'That would be 9 V / 2 Ω. The total resistance is 90 Ω, giving 0.1 A.' },
        ],
      },
      {
        id: 'ch3scc2',
        prompt: 'A 12 V battery powers two 30 Ω resistors in series. What current flows?',
        choices: [
          { id: 'ch3scc2-a', label: '0.2 A', isCorrect: true, explanation: 'Correct. R_total = 60 Ω, so I = 12 V / 60 Ω = 0.2 A.' },
          { id: 'ch3scc2-b', label: '0.4 A', isCorrect: false, explanation: 'That would be 12 / 30, using only one resistor. Both are in series: R = 60 Ω.' },
          { id: 'ch3scc2-c', label: '360 A', isCorrect: false, explanation: 'You must divide voltage by resistance, not multiply. I = 12 / 60 = 0.2 A.' },
        ],
      },
      {
        id: 'ch3scc3',
        prompt: 'What formula gives the current in a series circuit?',
        choices: [
          { id: 'ch3scc3-a', label: 'I = V / R_total', isCorrect: true, explanation: 'Correct. Ohm\'s law: current equals voltage divided by total resistance.' },
          { id: 'ch3scc3-b', label: 'I = V × R_total', isCorrect: false, explanation: 'Multiplying voltage by resistance does not give current. Use I = V / R.' },
          { id: 'ch3scc3-c', label: 'I = R_total / V', isCorrect: false, explanation: 'That inverts the relationship. Current equals voltage divided by resistance.' },
        ],
      },
      {
        id: 'ch3scc4',
        prompt: 'If the total resistance in a series circuit doubles while voltage stays the same, the current will:',
        choices: [
          { id: 'ch3scc4-a', label: 'Be cut in half', isCorrect: true, explanation: 'Correct. I = V / R. Doubling R halves I.' },
          { id: 'ch3scc4-b', label: 'Double', isCorrect: false, explanation: 'Current is inversely proportional to resistance. Doubling R halves I.' },
          { id: 'ch3scc4-c', label: 'Stay the same', isCorrect: false, explanation: 'Current depends on resistance. Changing R changes I.' },
        ],
      },
      {
        id: 'ch3scc5',
        prompt: 'A 6 V battery is connected to a single 30 Ω resistor. What is the current?',
        choices: [
          { id: 'ch3scc5-a', label: '0.2 A', isCorrect: true, explanation: 'Correct. I = 6 V / 30 Ω = 0.2 A.' },
          { id: 'ch3scc5-b', label: '5 A', isCorrect: false, explanation: 'I = V / R = 6 / 30 = 0.2 A, not 5 A.' },
          { id: 'ch3scc5-c', label: '180 A', isCorrect: false, explanation: 'You should divide, not multiply: I = 6 / 30 = 0.2 A.' },
        ],
      },
    ],
  },
  {
    id: 'quiz-ch3-series-power',
    title: 'Series Power Reasoning',
    unlockedBy: 'lesson-ch3-2-3',
    passingScore: 60,
    questions: [
      {
        id: 'ch3sp1',
        prompt: 'Why do bulbs in a series circuit use less power than a single bulb on the same battery?',
        choices: [
          { id: 'ch3sp1-a', label: 'Higher total resistance means less current, and power depends on current', isCorrect: true, explanation: 'Correct. P = V × I. With more resistance, I decreases, so total power decreases.' },
          { id: 'ch3sp1-b', label: 'The battery provides less voltage to each bulb', isCorrect: false, explanation: 'The battery voltage is fixed. Each bulb gets a share of that voltage because of voltage division, but the root cause is increased resistance reducing current.' },
          { id: 'ch3sp1-c', label: 'Series bulbs are wired to use less electricity by design', isCorrect: false, explanation: 'It is not a design feature but a consequence of Ohm\'s law and the power equation.' },
        ],
      },
      {
        id: 'ch3sp2',
        prompt: 'Which formula relates power to voltage and current?',
        choices: [
          { id: 'ch3sp2-a', label: 'P = V × I', isCorrect: true, explanation: 'Correct. Power in watts equals voltage in volts times current in amps.' },
          { id: 'ch3sp2-b', label: 'P = V / I', isCorrect: false, explanation: 'Dividing voltage by current gives resistance (Ohm\'s law), not power.' },
          { id: 'ch3sp2-c', label: 'P = I / V', isCorrect: false, explanation: 'That inverts the relationship. Power is the product of voltage and current.' },
        ],
      },
      {
        id: 'ch3sp3',
        prompt: 'If the current in a series circuit is 0.1 A and the battery voltage is 9 V, what is the total power?',
        choices: [
          { id: 'ch3sp3-a', label: '0.9 W', isCorrect: true, explanation: 'Correct. P = V × I = 9 × 0.1 = 0.9 W.' },
          { id: 'ch3sp3-b', label: '90 W', isCorrect: false, explanation: 'P = 9 × 0.1 = 0.9 W, not 90 W.' },
          { id: 'ch3sp3-c', label: '9.1 W', isCorrect: false, explanation: 'You multiply, not add: P = 9 × 0.1 = 0.9 W.' },
        ],
      },
      {
        id: 'ch3sp4',
        prompt: 'In a series circuit with two identical resistors, how is the total power distributed?',
        choices: [
          { id: 'ch3sp4-a', label: 'Each resistor dissipates half the total power', isCorrect: true, explanation: 'Correct. Identical resistors in series carry the same current and have the same resistance, so each dissipates equal power.' },
          { id: 'ch3sp4-b', label: 'The first resistor uses most of the power', isCorrect: false, explanation: 'Position does not matter. Both carry the same current and have the same resistance.' },
          { id: 'ch3sp4-c', label: 'All power is used by the battery, not the resistors', isCorrect: false, explanation: 'The battery supplies power; the resistors dissipate it.' },
        ],
      },
      {
        id: 'ch3sp5',
        prompt: 'What happens to total power if you add another identical resistor in series?',
        choices: [
          { id: 'ch3sp5-a', label: 'Total power decreases because current decreases', isCorrect: true, explanation: 'Correct. More resistance means less current, and P = V × I, so power drops.' },
          { id: 'ch3sp5-b', label: 'Total power increases because there are more resistors', isCorrect: false, explanation: 'More resistors in series reduce current, which reduces total power despite more components.' },
          { id: 'ch3sp5-c', label: 'Total power stays the same', isCorrect: false, explanation: 'Power depends on current, which changes when resistance changes.' },
        ],
      },
    ],
  },
  {
    id: 'quiz-ch3-series-fault',
    title: 'Series Fault Behavior',
    unlockedBy: 'lesson-ch3-2-4',
    passingScore: 60,
    questions: [
      {
        id: 'ch3sf1',
        prompt: 'What happens if one bulb burns out in a series circuit with three bulbs?',
        choices: [
          { id: 'ch3sf1-a', label: 'All bulbs go out because the single path is broken', isCorrect: true, explanation: 'Correct. A break anywhere in a series circuit stops current flow to all components.' },
          { id: 'ch3sf1-b', label: 'Only the burned-out bulb goes dark; the others stay lit', isCorrect: false, explanation: 'In series, all components share one path. A break stops everything.' },
          { id: 'ch3sf1-c', label: 'The remaining bulbs get brighter', isCorrect: false, explanation: 'No current flows at all when the path is broken, so no bulb can light up.' },
        ],
      },
      {
        id: 'ch3sf2',
        prompt: 'Why is a series circuit vulnerable to a single point of failure?',
        choices: [
          { id: 'ch3sf2-a', label: 'Because there is only one current path, and any break stops all flow', isCorrect: true, explanation: 'Correct. The single-path nature of series circuits means one failure affects everything.' },
          { id: 'ch3sf2-b', label: 'Because the battery cannot sense which component failed', isCorrect: false, explanation: 'The issue is the topology, not the battery\'s ability to detect failures.' },
          { id: 'ch3sf2-c', label: 'Because series components are weaker than parallel ones', isCorrect: false, explanation: 'Component strength is the same. It is the circuit arrangement that creates vulnerability.' },
        ],
      },
      {
        id: 'ch3sf3',
        prompt: 'A string of old holiday lights goes completely dark when one bulb is removed. What type of circuit is it?',
        choices: [
          { id: 'ch3sf3-a', label: 'Series', isCorrect: true, explanation: 'Correct. In a series circuit, removing one element breaks the only path and all lights go out.' },
          { id: 'ch3sf3-b', label: 'Parallel', isCorrect: false, explanation: 'In a parallel circuit, removing one bulb would leave the others still working.' },
          { id: 'ch3sf3-c', label: 'It could be either type', isCorrect: false, explanation: 'The all-or-nothing behavior is a clear sign of a series circuit.' },
        ],
      },
      {
        id: 'ch3sf4',
        prompt: 'If a wire breaks in a series circuit, what is the current at points before the break?',
        choices: [
          { id: 'ch3sf4-a', label: 'Zero — no current flows anywhere', isCorrect: true, explanation: 'Correct. Without a complete loop, no sustained current can flow at any point.' },
          { id: 'ch3sf4-b', label: 'The same current as before the break', isCorrect: false, explanation: 'Current requires a complete path. A break stops all current flow.' },
          { id: 'ch3sf4-c', label: 'Current flows up to the break and stops there', isCorrect: false, explanation: 'Current does not flow partway and stop. It either flows through the complete loop or not at all.' },
        ],
      },
      {
        id: 'ch3sf5',
        prompt: 'What is a practical disadvantage of wiring household devices in series?',
        choices: [
          { id: 'ch3sf5-a', label: 'If one device fails, all devices lose power', isCorrect: true, explanation: 'Correct. This single point of failure makes series impractical for most household wiring.' },
          { id: 'ch3sf5-b', label: 'Each device would receive too much current', isCorrect: false, explanation: 'Series actually reduces current. The problem is that a single failure shuts down everything.' },
          { id: 'ch3sf5-c', label: 'Series wiring uses more wire', isCorrect: false, explanation: 'Wire length is not the main disadvantage. The fault vulnerability is the key issue.' },
        ],
      },
    ],
  },
  {
    id: 'quiz-ch3-parallel-identification',
    title: 'Parallel Circuit Identification',
    unlockedBy: 'lesson-ch3-3-1',
    passingScore: 60,
    questions: [
      {
        id: 'ch3pi1',
        prompt: 'What is the defining characteristic of a parallel circuit?',
        choices: [
          { id: 'ch3pi1-a', label: 'Components are connected across the same two nodes, providing multiple current paths', isCorrect: true, explanation: 'Correct. In a parallel circuit, each component has its own branch between the same two connection points.' },
          { id: 'ch3pi1-b', label: 'All components are connected end-to-end in a single loop', isCorrect: false, explanation: 'That describes a series circuit, not parallel.' },
          { id: 'ch3pi1-c', label: 'Components must all have the same resistance', isCorrect: false, explanation: 'Parallel circuits can have any combination of resistance values.' },
        ],
      },
      {
        id: 'ch3pi2',
        prompt: 'How many paths does current have in a parallel circuit with three branches?',
        choices: [
          { id: 'ch3pi2-a', label: 'Three paths, one through each branch', isCorrect: true, explanation: 'Correct. Each branch provides an independent path for current.' },
          { id: 'ch3pi2-b', label: 'One path through all three components', isCorrect: false, explanation: 'A single path describes a series circuit. Parallel has multiple independent paths.' },
          { id: 'ch3pi2-c', label: 'Current chooses only one path, the one with least resistance', isCorrect: false, explanation: 'Current flows through all available paths simultaneously, not just the easiest one.' },
        ],
      },
      {
        id: 'ch3pi3',
        prompt: 'Which scenario describes a parallel circuit?',
        choices: [
          { id: 'ch3pi3-a', label: 'Two bulbs each connected directly across the battery terminals', isCorrect: true, explanation: 'Correct. Each bulb has its own direct path from one terminal to the other, forming parallel branches.' },
          { id: 'ch3pi3-b', label: 'Two bulbs connected one after the other in a single loop', isCorrect: false, explanation: 'That is a series arrangement.' },
          { id: 'ch3pi3-c', label: 'Two bulbs controlled by the same switch with no other connections', isCorrect: false, explanation: 'A shared switch does not determine whether the circuit is parallel; the branch structure does.' },
        ],
      },
      {
        id: 'ch3pi4',
        prompt: 'In your home, appliances are typically wired in:',
        choices: [
          { id: 'ch3pi4-a', label: 'Parallel, so each can operate independently', isCorrect: true, explanation: 'Correct. Household wiring is parallel so that turning off one appliance does not affect others.' },
          { id: 'ch3pi4-b', label: 'Series, to save wiring costs', isCorrect: false, explanation: 'Series wiring would mean one device failure shuts off everything on the circuit.' },
          { id: 'ch3pi4-c', label: 'A combination that changes depending on the room', isCorrect: false, explanation: 'Standard household outlets on a circuit are wired in parallel.' },
        ],
      },
      {
        id: 'ch3pi5',
        prompt: 'Which visual clue helps identify a parallel circuit in a diagram?',
        choices: [
          { id: 'ch3pi5-a', label: 'Multiple branches connecting between the same two junction points', isCorrect: true, explanation: 'Correct. Parallel circuits have branches that split from and rejoin at common junctions.' },
          { id: 'ch3pi5-b', label: 'Components arranged in a straight line', isCorrect: false, explanation: 'A straight line of components suggests series, not parallel.' },
          { id: 'ch3pi5-c', label: 'Only one wire leaving the battery', isCorrect: false, explanation: 'All circuits have wires leaving the battery. The branching structure identifies parallel.' },
        ],
      },
    ],
  },
  {
    id: 'quiz-ch3-branch-structure',
    title: 'Branch Structure Recognition',
    unlockedBy: 'lesson-ch3-3-2',
    passingScore: 60,
    questions: [
      {
        id: 'ch3bs1',
        prompt: 'What is a junction in a parallel circuit?',
        choices: [
          { id: 'ch3bs1-a', label: 'A point where current splits into or merges from multiple branches', isCorrect: true, explanation: 'Correct. Junctions are the nodes where the parallel paths diverge or converge.' },
          { id: 'ch3bs1-b', label: 'The point where a resistor connects to a wire', isCorrect: false, explanation: 'Any component-wire connection is just a terminal, not necessarily a junction.' },
          { id: 'ch3bs1-c', label: 'The location of the switch', isCorrect: false, explanation: 'A switch can be anywhere. A junction specifically is where paths split or merge.' },
        ],
      },
      {
        id: 'ch3bs2',
        prompt: 'How many junctions does a simple parallel circuit with two branches have?',
        choices: [
          { id: 'ch3bs2-a', label: 'Two — one where paths split and one where they rejoin', isCorrect: true, explanation: 'Correct. Current diverges at one junction and converges at the other.' },
          { id: 'ch3bs2-b', label: 'One — where all wires meet', isCorrect: false, explanation: 'A parallel circuit needs at least two junctions: one for splitting and one for merging.' },
          { id: 'ch3bs2-c', label: 'None — junctions only exist in series circuits', isCorrect: false, explanation: 'Junctions are a key feature of parallel circuits, not series.' },
        ],
      },
      {
        id: 'ch3bs3',
        prompt: 'What happens at the junction where current splits in a parallel circuit?',
        choices: [
          { id: 'ch3bs3-a', label: 'The total incoming current divides among the available branches', isCorrect: true, explanation: 'Correct. At a splitting junction, current is distributed into each branch.' },
          { id: 'ch3bs3-b', label: 'Current is duplicated so each branch gets the full amount', isCorrect: false, explanation: 'Current is conserved. It divides, not duplicates.' },
          { id: 'ch3bs3-c', label: 'Voltage is split among the branches', isCorrect: false, explanation: 'Voltage across parallel branches stays the same. It is current that splits.' },
        ],
      },
      {
        id: 'ch3bs4',
        prompt: 'A circuit has a battery and three resistors. Each resistor connects directly between the same two nodes. How many branches are there?',
        choices: [
          { id: 'ch3bs4-a', label: 'Three branches', isCorrect: true, explanation: 'Correct. Each resistor on its own path between the two nodes forms one branch.' },
          { id: 'ch3bs4-b', label: 'One branch with three resistors', isCorrect: false, explanation: 'If each resistor has its own path, each is a separate branch.' },
          { id: 'ch3bs4-c', label: 'Six branches — two per resistor', isCorrect: false, explanation: 'Each resistor creates one branch, not two.' },
        ],
      },
      {
        id: 'ch3bs5',
        prompt: 'Adding a new branch to a parallel circuit:',
        choices: [
          { id: 'ch3bs5-a', label: 'Creates an additional path for current without affecting existing branches', isCorrect: true, explanation: 'Correct. Each parallel branch operates independently, so adding one does not disturb the others.' },
          { id: 'ch3bs5-b', label: 'Forces all existing branches to share their current with the new one', isCorrect: false, explanation: 'Existing branch currents remain the same. The battery supplies additional current for the new branch.' },
          { id: 'ch3bs5-c', label: 'Requires removing an existing branch first', isCorrect: false, explanation: 'You can add branches freely in parallel without removing anything.' },
        ],
      },
    ],
  },
  {
    id: 'quiz-ch3-parallel-current',
    title: 'Current in Parallel',
    unlockedBy: 'lesson-ch3-3-3',
    passingScore: 60,
    questions: [
      {
        id: 'ch3pc1',
        prompt: 'At a junction in a parallel circuit, the total current entering equals:',
        choices: [
          { id: 'ch3pc1-a', label: 'The sum of the currents leaving through each branch', isCorrect: true, explanation: 'Correct. By conservation of charge, current in equals total current out at any junction.' },
          { id: 'ch3pc1-b', label: 'The current in the branch with the lowest resistance', isCorrect: false, explanation: 'The total current is the sum of all branch currents, not just one branch.' },
          { id: 'ch3pc1-c', label: 'Zero, because the currents cancel out', isCorrect: false, explanation: 'Currents in branches do not cancel. They add up to the total.' },
        ],
      },
      {
        id: 'ch3pc2',
        prompt: 'Two identical resistors are in parallel. How does the current split?',
        choices: [
          { id: 'ch3pc2-a', label: 'Equally — half the total current goes through each branch', isCorrect: true, explanation: 'Correct. Identical resistors under the same voltage draw equal currents.' },
          { id: 'ch3pc2-b', label: 'All current goes through the first resistor', isCorrect: false, explanation: 'Current flows through both branches simultaneously.' },
          { id: 'ch3pc2-c', label: 'It is impossible to predict without knowing the wire length', isCorrect: false, explanation: 'For ideal conductors, wire length does not matter. Equal resistors split current equally.' },
        ],
      },
      {
        id: 'ch3pc3',
        prompt: 'After current flows through separate parallel branches, what happens at the merging junction?',
        choices: [
          { id: 'ch3pc3-a', label: 'Branch currents recombine into the total current', isCorrect: true, explanation: 'Correct. The individual branch currents merge back into the full current returning to the battery.' },
          { id: 'ch3pc3-b', label: 'Only the largest branch current continues', isCorrect: false, explanation: 'All branch currents contribute. They sum together at the junction.' },
          { id: 'ch3pc3-c', label: 'The currents collide and some energy is lost', isCorrect: false, explanation: 'Currents merge smoothly. Charge is conserved at junctions.' },
        ],
      },
      {
        id: 'ch3pc4',
        prompt: 'If a parallel circuit has branches carrying 0.3 A, 0.2 A, and 0.1 A, what is the total current from the battery?',
        choices: [
          { id: 'ch3pc4-a', label: '0.6 A', isCorrect: true, explanation: 'Correct. Total current = 0.3 + 0.2 + 0.1 = 0.6 A.' },
          { id: 'ch3pc4-b', label: '0.3 A (the largest branch)', isCorrect: false, explanation: 'Total current is the sum of all branches, not just the largest.' },
          { id: 'ch3pc4-c', label: '0.2 A (the average)', isCorrect: false, explanation: 'You add branch currents, not average them.' },
        ],
      },
      {
        id: 'ch3pc5',
        prompt: 'Why does adding a parallel branch increase the total current from the battery?',
        choices: [
          { id: 'ch3pc5-a', label: 'The new branch provides an additional path, and the battery supplies current for it', isCorrect: true, explanation: 'Correct. Each branch draws its own current, so the total increases.' },
          { id: 'ch3pc5-b', label: 'The battery voltage increases to accommodate the new branch', isCorrect: false, explanation: 'Battery voltage stays constant. It is the total current that increases.' },
          { id: 'ch3pc5-c', label: 'Current is pulled from the other branches into the new one', isCorrect: false, explanation: 'Existing branch currents remain the same. The new branch adds to the total.' },
        ],
      },
    ],
  },
  {
    id: 'quiz-ch3-parallel-fault',
    title: 'Parallel Fault Behavior',
    unlockedBy: 'lesson-ch3-3-4',
    passingScore: 60,
    questions: [
      {
        id: 'ch3pf1',
        prompt: 'What happens if one bulb burns out in a parallel circuit with three bulbs?',
        choices: [
          { id: 'ch3pf1-a', label: 'The other two bulbs continue to work normally', isCorrect: true, explanation: 'Correct. Each parallel branch is independent, so a failure in one does not affect the others.' },
          { id: 'ch3pf1-b', label: 'All bulbs go out', isCorrect: false, explanation: 'That would happen in a series circuit. Parallel branches are independent.' },
          { id: 'ch3pf1-c', label: 'The remaining bulbs get dimmer', isCorrect: false, explanation: 'Each branch still has the same voltage and resistance, so brightness is unchanged.' },
        ],
      },
      {
        id: 'ch3pf2',
        prompt: 'Why can parallel circuits tolerate individual branch failures?',
        choices: [
          { id: 'ch3pf2-a', label: 'Because each branch has its own independent path for current', isCorrect: true, explanation: 'Correct. A break in one branch does not interrupt the paths of other branches.' },
          { id: 'ch3pf2-b', label: 'Because the battery reroutes current around the failure', isCorrect: false, explanation: 'The battery does not actively reroute. The other paths simply remain intact.' },
          { id: 'ch3pf2-c', label: 'Because parallel components are more durable', isCorrect: false, explanation: 'Durability of components is the same. It is the multi-path topology that provides fault tolerance.' },
        ],
      },
      {
        id: 'ch3pf3',
        prompt: 'If one branch of a parallel circuit is removed, what happens to the current in the remaining branches?',
        choices: [
          { id: 'ch3pf3-a', label: 'It stays the same in each remaining branch', isCorrect: true, explanation: 'Correct. Each branch has the same voltage across it, so its current is unchanged.' },
          { id: 'ch3pf3-b', label: 'It increases to compensate for the lost branch', isCorrect: false, explanation: 'The voltage across each branch remains the same, so individual branch currents do not change.' },
          { id: 'ch3pf3-c', label: 'It decreases because the circuit has lost a path', isCorrect: false, explanation: 'Individual branch currents are determined by their own resistance and the voltage, which are unchanged.' },
        ],
      },
      {
        id: 'ch3pf4',
        prompt: 'What changes when a parallel branch is removed?',
        choices: [
          { id: 'ch3pf4-a', label: 'Total current from the battery decreases', isCorrect: true, explanation: 'Correct. With one fewer branch drawing current, the total current is reduced.' },
          { id: 'ch3pf4-b', label: 'The battery voltage drops', isCorrect: false, explanation: 'An ideal battery maintains constant voltage regardless of the load.' },
          { id: 'ch3pf4-c', label: 'Nothing changes at all', isCorrect: false, explanation: 'While remaining branches are unaffected, the total current from the battery does decrease.' },
        ],
      },
      {
        id: 'ch3pf5',
        prompt: 'Which wiring type is preferred for hospital equipment and why?',
        choices: [
          { id: 'ch3pf5-a', label: 'Parallel, because one device failing does not shut down the others', isCorrect: true, explanation: 'Correct. The fault tolerance of parallel circuits is critical for life-saving equipment.' },
          { id: 'ch3pf5-b', label: 'Series, because it uses less wire', isCorrect: false, explanation: 'Wire savings are not worth the risk. A series failure would shut down all connected equipment.' },
          { id: 'ch3pf5-c', label: 'Series, because it ensures equal current to all devices', isCorrect: false, explanation: 'Equal current is not useful if one failure shuts everything down.' },
        ],
      },
    ],
  },
  {
    id: 'quiz-ch3-parallel-voltage',
    title: 'Parallel Voltage',
    unlockedBy: 'lesson-ch3-4-1',
    passingScore: 60,
    questions: [
      {
        id: 'ch3pv1',
        prompt: 'In a parallel circuit, the voltage across each branch is:',
        choices: [
          { id: 'ch3pv1-a', label: 'The same, equal to the source voltage', isCorrect: true, explanation: 'Correct. All parallel branches connect across the same two nodes, so they all have the same voltage.' },
          { id: 'ch3pv1-b', label: 'Divided equally among the branches', isCorrect: false, explanation: 'Voltage division occurs in series, not parallel. Parallel branches each get the full voltage.' },
          { id: 'ch3pv1-c', label: 'Different for each branch, depending on resistance', isCorrect: false, explanation: 'Resistance affects current in each branch, not voltage. Voltage is the same across all parallel branches.' },
        ],
      },
      {
        id: 'ch3pv2',
        prompt: 'A 12 V battery is connected to three parallel resistors. What is the voltage across the second resistor?',
        choices: [
          { id: 'ch3pv2-a', label: '12 V', isCorrect: true, explanation: 'Correct. Each parallel branch has the full battery voltage across it.' },
          { id: 'ch3pv2-b', label: '4 V (12 divided by 3)', isCorrect: false, explanation: 'Voltage is not divided in parallel. Each branch gets the full 12 V.' },
          { id: 'ch3pv2-c', label: 'It depends on the resistance of the second resistor', isCorrect: false, explanation: 'In parallel, every branch has the same voltage regardless of its resistance.' },
        ],
      },
      {
        id: 'ch3pv3',
        prompt: 'Why is the voltage the same across all parallel branches?',
        choices: [
          { id: 'ch3pv3-a', label: 'Because they all connect between the same two nodes', isCorrect: true, explanation: 'Correct. Voltage is a property of the two endpoints, and all parallel branches share the same endpoints.' },
          { id: 'ch3pv3-b', label: 'Because the battery sends equal voltage to each branch', isCorrect: false, explanation: 'The battery does not "send" voltage selectively. All branches share the same nodes and therefore the same potential difference.' },
          { id: 'ch3pv3-c', label: 'Because the resistors regulate voltage equally', isCorrect: false, explanation: 'Resistors do not regulate voltage. The shared connection points ensure equal voltage.' },
        ],
      },
      {
        id: 'ch3pv4',
        prompt: 'If you add a fourth branch in parallel to a 9 V source, what voltage does the new branch get?',
        choices: [
          { id: 'ch3pv4-a', label: '9 V', isCorrect: true, explanation: 'Correct. Any branch added in parallel receives the full source voltage.' },
          { id: 'ch3pv4-b', label: '2.25 V (9 V divided among 4 branches)', isCorrect: false, explanation: 'Voltage does not divide in parallel. The new branch gets the full 9 V.' },
          { id: 'ch3pv4-c', label: 'Less than 9 V because the battery must share', isCorrect: false, explanation: 'The battery voltage is applied across every parallel branch equally.' },
        ],
      },
      {
        id: 'ch3pv5',
        prompt: 'How does parallel voltage behavior differ from series voltage behavior?',
        choices: [
          { id: 'ch3pv5-a', label: 'In parallel, each branch gets the full voltage; in series, voltage is divided among components', isCorrect: true, explanation: 'Correct. This is a key distinction: parallel shares voltage equally, series divides it.' },
          { id: 'ch3pv5-b', label: 'In parallel, voltage is divided; in series, each component gets the full voltage', isCorrect: false, explanation: 'This is backwards. Parallel branches share full voltage; series components divide it.' },
          { id: 'ch3pv5-c', label: 'There is no difference — voltage behaves the same in both', isCorrect: false, explanation: 'Voltage distribution is fundamentally different between series and parallel circuits.' },
        ],
      },
    ],
  },
  {
    id: 'quiz-ch3-parallel-resistance-calc',
    title: 'Parallel Resistance Calculation',
    unlockedBy: 'lesson-ch3-4-2',
    passingScore: 60,
    questions: [
      {
        id: 'ch3pr1',
        prompt: 'What is the equivalent resistance of two 45 Ω resistors in parallel?',
        choices: [
          { id: 'ch3pr1-a', label: '22.5 Ω', isCorrect: true, explanation: 'Correct. For two identical resistors in parallel, R_eq = R / 2 = 45 / 2 = 22.5 Ω.' },
          { id: 'ch3pr1-b', label: '90 Ω', isCorrect: false, explanation: '90 Ω would be the series total. In parallel, the equivalent is less than either individual resistor.' },
          { id: 'ch3pr1-c', label: '45 Ω', isCorrect: false, explanation: 'Two identical resistors in parallel give half the value of one: 22.5 Ω.' },
        ],
      },
      {
        id: 'ch3pr2',
        prompt: 'Two 30 Ω resistors are connected in parallel. What is the equivalent resistance?',
        choices: [
          { id: 'ch3pr2-a', label: '15 Ω', isCorrect: true, explanation: 'Correct. R_eq = 30 / 2 = 15 Ω.' },
          { id: 'ch3pr2-b', label: '60 Ω', isCorrect: false, explanation: '60 Ω is the series sum. Parallel equivalent is 15 Ω.' },
          { id: 'ch3pr2-c', label: '30 Ω', isCorrect: false, explanation: 'Two 30 Ω in parallel give 15 Ω, not 30 Ω.' },
        ],
      },
      {
        id: 'ch3pr3',
        prompt: 'What is the formula for equivalent resistance of two resistors in parallel?',
        choices: [
          { id: 'ch3pr3-a', label: '1/R_eq = 1/R1 + 1/R2', isCorrect: true, explanation: 'Correct. The reciprocal of the equivalent resistance equals the sum of the reciprocals.' },
          { id: 'ch3pr3-b', label: 'R_eq = R1 + R2', isCorrect: false, explanation: 'That is the series formula. Parallel uses reciprocals.' },
          { id: 'ch3pr3-c', label: 'R_eq = R1 − R2', isCorrect: false, explanation: 'Subtraction is not used in resistance calculations for parallel or series.' },
        ],
      },
      {
        id: 'ch3pr4',
        prompt: 'The equivalent resistance of a parallel combination is always:',
        choices: [
          { id: 'ch3pr4-a', label: 'Less than the smallest individual resistor', isCorrect: true, explanation: 'Correct. Adding parallel paths always reduces the total resistance below the smallest branch.' },
          { id: 'ch3pr4-b', label: 'Greater than the largest individual resistor', isCorrect: false, explanation: 'That describes series. Parallel equivalent is always less than the smallest resistor.' },
          { id: 'ch3pr4-c', label: 'Equal to the average of all resistors', isCorrect: false, explanation: 'Parallel equivalent resistance is not a simple average.' },
        ],
      },
      {
        id: 'ch3pr5',
        prompt: 'Adding a third resistor in parallel to an existing pair will:',
        choices: [
          { id: 'ch3pr5-a', label: 'Decrease the equivalent resistance further', isCorrect: true, explanation: 'Correct. Each additional parallel path reduces the overall resistance.' },
          { id: 'ch3pr5-b', label: 'Increase the equivalent resistance', isCorrect: false, explanation: 'More parallel paths means less total resistance, not more.' },
          { id: 'ch3pr5-c', label: 'Keep the equivalent resistance the same', isCorrect: false, explanation: 'Adding a parallel resistor always changes the equivalent resistance, reducing it.' },
        ],
      },
    ],
  },
  {
    id: 'quiz-ch3-parallel-source-current',
    title: 'Parallel Source Current',
    unlockedBy: 'lesson-ch3-4-3',
    passingScore: 60,
    questions: [
      {
        id: 'ch3psc1',
        prompt: 'A 9 V battery is connected to two 45 Ω resistors in parallel. What is the total current from the battery?',
        choices: [
          { id: 'ch3psc1-a', label: '0.4 A', isCorrect: true, explanation: 'Correct. R_eq = 22.5 Ω. I = 9 V / 22.5 Ω = 0.4 A.' },
          { id: 'ch3psc1-b', label: '0.2 A', isCorrect: false, explanation: '0.2 A is the current through one branch. Total is 0.4 A from both branches.' },
          { id: 'ch3psc1-c', label: '0.1 A', isCorrect: false, explanation: 'That would be the current if 90 Ω total (series). Parallel gives R_eq = 22.5 Ω and I = 0.4 A.' },
        ],
      },
      {
        id: 'ch3psc2',
        prompt: 'How can you calculate total current in a parallel circuit?',
        choices: [
          { id: 'ch3psc2-a', label: 'Either sum the branch currents or use I = V / R_eq', isCorrect: true, explanation: 'Correct. Both methods give the same answer for total current.' },
          { id: 'ch3psc2-b', label: 'Only by measuring with an ammeter', isCorrect: false, explanation: 'You can calculate it using Ohm\'s law and the equivalent resistance.' },
          { id: 'ch3psc2-c', label: 'Divide the voltage by the sum of all resistances', isCorrect: false, explanation: 'Dividing by the sum of resistances is the series approach. For parallel, use R_eq from the reciprocal formula.' },
        ],
      },
      {
        id: 'ch3psc3',
        prompt: 'Each branch in a parallel circuit with two identical 30 Ω resistors and a 12 V battery carries:',
        choices: [
          { id: 'ch3psc3-a', label: '0.4 A', isCorrect: true, explanation: 'Correct. Each branch: I = 12 V / 30 Ω = 0.4 A.' },
          { id: 'ch3psc3-b', label: '0.8 A', isCorrect: false, explanation: '0.8 A is the total current. Each branch carries half: 0.4 A.' },
          { id: 'ch3psc3-c', label: '0.2 A', isCorrect: false, explanation: 'I = V / R = 12 / 30 = 0.4 A per branch.' },
        ],
      },
      {
        id: 'ch3psc4',
        prompt: 'The total current from the battery in a parallel circuit is always:',
        choices: [
          { id: 'ch3psc4-a', label: 'Greater than the current in any single branch', isCorrect: true, explanation: 'Correct. Total current is the sum of all branch currents, so it exceeds any individual branch.' },
          { id: 'ch3psc4-b', label: 'Equal to the current in the branch with the most resistance', isCorrect: false, explanation: 'Total current is the sum of all branches, not equal to any one branch.' },
          { id: 'ch3psc4-c', label: 'Less than the current in the smallest branch', isCorrect: false, explanation: 'Total is the sum, which is always more than any single branch.' },
        ],
      },
      {
        id: 'ch3psc5',
        prompt: 'Adding a parallel branch to an existing circuit causes the battery to supply:',
        choices: [
          { id: 'ch3psc5-a', label: 'More total current', isCorrect: true, explanation: 'Correct. A new branch adds its own current demand, increasing the total.' },
          { id: 'ch3psc5-b', label: 'Less total current', isCorrect: false, explanation: 'More paths means more current, not less.' },
          { id: 'ch3psc5-c', label: 'The same total current', isCorrect: false, explanation: 'Each branch draws current, so adding one increases the total drawn from the battery.' },
        ],
      },
    ],
  },
  {
    id: 'quiz-ch3-series-vs-parallel',
    title: 'Series vs Parallel Comparison',
    unlockedBy: 'lesson-ch3-4-4',
    passingScore: 60,
    questions: [
      {
        id: 'ch3svp1',
        prompt: 'Compared to a series circuit with the same components and battery, a parallel circuit has:',
        choices: [
          { id: 'ch3svp1-a', label: 'Lower total resistance and higher total current', isCorrect: true, explanation: 'Correct. Parallel resistance is always less than the smallest branch, leading to more current.' },
          { id: 'ch3svp1-b', label: 'Higher total resistance and lower total current', isCorrect: false, explanation: 'That describes adding components in series, not parallel.' },
          { id: 'ch3svp1-c', label: 'The same total resistance and current', isCorrect: false, explanation: 'Series and parallel arrangements produce very different total resistances and currents.' },
        ],
      },
      {
        id: 'ch3svp2',
        prompt: 'Two identical bulbs in parallel will be _______ compared to the same two bulbs in series.',
        choices: [
          { id: 'ch3svp2-a', label: 'Brighter', isCorrect: true, explanation: 'Correct. Parallel provides full voltage to each bulb and lower total resistance, resulting in more current and brighter bulbs.' },
          { id: 'ch3svp2-b', label: 'Dimmer', isCorrect: false, explanation: 'Series bulbs are dimmer because they share voltage and have higher total resistance.' },
          { id: 'ch3svp2-c', label: 'The same brightness', isCorrect: false, explanation: 'The circuit type significantly affects current and brightness.' },
        ],
      },
      {
        id: 'ch3svp3',
        prompt: 'Which circuit type is more fault-tolerant?',
        choices: [
          { id: 'ch3svp3-a', label: 'Parallel — one branch failing does not affect others', isCorrect: true, explanation: 'Correct. Independent paths mean a single failure does not bring down the whole circuit.' },
          { id: 'ch3svp3-b', label: 'Series — the single path is simpler and more reliable', isCorrect: false, explanation: 'Simplicity does not equal fault tolerance. One break kills the entire series circuit.' },
          { id: 'ch3svp3-c', label: 'Both are equally fault-tolerant', isCorrect: false, explanation: 'Parallel is clearly more fault-tolerant due to its independent branches.' },
        ],
      },
      {
        id: 'ch3svp4',
        prompt: 'In which circuit type is current the same through every component?',
        choices: [
          { id: 'ch3svp4-a', label: 'Series', isCorrect: true, explanation: 'Correct. The single path in series means every component carries the same current.' },
          { id: 'ch3svp4-b', label: 'Parallel', isCorrect: false, explanation: 'In parallel, each branch can carry a different current depending on its resistance.' },
          { id: 'ch3svp4-c', label: 'Both', isCorrect: false, explanation: 'Only series guarantees the same current through all components.' },
        ],
      },
      {
        id: 'ch3svp5',
        prompt: 'In which circuit type is the voltage the same across every component?',
        choices: [
          { id: 'ch3svp5-a', label: 'Parallel', isCorrect: true, explanation: 'Correct. All parallel branches share the same two nodes and therefore the same voltage.' },
          { id: 'ch3svp5-b', label: 'Series', isCorrect: false, explanation: 'In series, voltage is divided among components based on their resistance.' },
          { id: 'ch3svp5-c', label: 'Both', isCorrect: false, explanation: 'Only parallel guarantees the same voltage across all components.' },
        ],
      },
    ],
  },
  {
    id: 'quiz-ch3-unequal-loads',
    title: 'Unequal Load Reasoning',
    unlockedBy: 'lesson-ch3-5-1',
    passingScore: 60,
    questions: [
      {
        id: 'ch3ul1',
        prompt: 'In a series circuit with a 20 Ω and a 40 Ω resistor, which resistor has more voltage across it?',
        choices: [
          { id: 'ch3ul1-a', label: 'The 40 Ω resistor', isCorrect: true, explanation: 'Correct. In series, voltage divides proportionally to resistance. The larger resistor gets more voltage.' },
          { id: 'ch3ul1-b', label: 'The 20 Ω resistor', isCorrect: false, explanation: 'The smaller resistor gets less of the voltage drop in a series circuit.' },
          { id: 'ch3ul1-c', label: 'Both have the same voltage', isCorrect: false, explanation: 'Equal voltage only applies in parallel. In series with unequal resistors, voltage divides proportionally.' },
        ],
      },
      {
        id: 'ch3ul2',
        prompt: 'Two resistors of different values are connected in parallel. Which one carries more current?',
        choices: [
          { id: 'ch3ul2-a', label: 'The one with lower resistance', isCorrect: true, explanation: 'Correct. With the same voltage across both, I = V/R gives more current through the smaller resistor.' },
          { id: 'ch3ul2-b', label: 'The one with higher resistance', isCorrect: false, explanation: 'Higher resistance means less current for the same voltage.' },
          { id: 'ch3ul2-c', label: 'Both carry the same current', isCorrect: false, explanation: 'Equal current only occurs with equal resistances. Different resistances mean different currents.' },
        ],
      },
      {
        id: 'ch3ul3',
        prompt: 'In a series circuit, two resistors with different values carry:',
        choices: [
          { id: 'ch3ul3-a', label: 'The same current', isCorrect: true, explanation: 'Correct. In series, there is only one path, so the same current flows through both resistors regardless of their values.' },
          { id: 'ch3ul3-b', label: 'Different currents — more through the smaller resistor', isCorrect: false, explanation: 'In series, current is the same everywhere. Resistance values do not change this.' },
          { id: 'ch3ul3-c', label: 'Different currents — more through the larger resistor', isCorrect: false, explanation: 'Series current is identical through all components.' },
        ],
      },
      {
        id: 'ch3ul4',
        prompt: 'A 10 Ω and a 30 Ω resistor are in parallel across a 9 V battery. What is the current through the 30 Ω resistor?',
        choices: [
          { id: 'ch3ul4-a', label: '0.3 A', isCorrect: true, explanation: 'Correct. I = V / R = 9 / 30 = 0.3 A.' },
          { id: 'ch3ul4-b', label: '0.9 A', isCorrect: false, explanation: '0.9 A is the current through the 10 Ω resistor (9/10). The 30 Ω branch carries 0.3 A.' },
          { id: 'ch3ul4-c', label: '0.6 A', isCorrect: false, explanation: 'I = 9 / 30 = 0.3 A for the 30 Ω branch.' },
        ],
      },
      {
        id: 'ch3ul5',
        prompt: 'In a parallel circuit with unequal resistors, which resistor dissipates more power?',
        choices: [
          { id: 'ch3ul5-a', label: 'The one with lower resistance, because it carries more current', isCorrect: true, explanation: 'Correct. With the same voltage, P = V²/R, so the smaller resistor dissipates more power.' },
          { id: 'ch3ul5-b', label: 'The one with higher resistance, because it resists more', isCorrect: false, explanation: 'Higher resistance means less current and less power at the same voltage.' },
          { id: 'ch3ul5-c', label: 'Both dissipate the same power', isCorrect: false, explanation: 'Unequal resistors at the same voltage dissipate unequal power.' },
        ],
      },
    ],
  },
  {
    id: 'quiz-ch3-target-design',
    title: 'Target-Based Circuit Design',
    unlockedBy: 'lesson-ch3-5-2',
    passingScore: 60,
    questions: [
      {
        id: 'ch3td1',
        prompt: 'A challenge asks you to build a circuit where the bulb operates between 1W and 3W using a 12V battery. Which quantity do you need to control?',
        choices: [
          { id: 'ch3td1-a', label: 'The resistance of the load', isCorrect: true, explanation: 'Correct. With a fixed voltage, changing resistance changes current and therefore power.' },
          { id: 'ch3td1-b', label: 'The voltage of the battery', isCorrect: false, explanation: 'The challenge fixes the battery at 12V. You control the load, not the source.' },
          { id: 'ch3td1-c', label: 'The number of wires', isCorrect: false, explanation: 'Adding wires does not change the electrical behavior in an ideal circuit.' },
        ],
      },
      {
        id: 'ch3td2',
        prompt: 'With a 12V battery, what resistance gives exactly 2W of power? (Use P = V²/R)',
        choices: [
          { id: 'ch3td2-a', label: '72 Ω', isCorrect: true, explanation: 'Correct. R = V²/P = 144/2 = 72 Ω.' },
          { id: 'ch3td2-b', label: '24 Ω', isCorrect: false, explanation: 'R = 144/2 = 72 Ω, not 24 Ω. That would give 6W.' },
          { id: 'ch3td2-c', label: '6 Ω', isCorrect: false, explanation: 'R = 144/2 = 72 Ω, not 6 Ω. That would give 24W.' },
        ],
      },
      {
        id: 'ch3td3',
        prompt: 'A target says current must be between 0.15A and 0.25A with a 9V battery. Which resistance achieves 0.2A?',
        choices: [
          { id: 'ch3td3-a', label: '45 Ω', isCorrect: true, explanation: 'Correct. R = V/I = 9/0.2 = 45 Ω.' },
          { id: 'ch3td3-b', label: '1.8 Ω', isCorrect: false, explanation: 'That would give I = 9/1.8 = 5A, far above the target.' },
          { id: 'ch3td3-c', label: '90 Ω', isCorrect: false, explanation: 'That gives I = 9/90 = 0.1A, below the target range.' },
        ],
      },
      {
        id: 'ch3td4',
        prompt: 'Why can a target-based challenge have more than one correct answer?',
        choices: [
          { id: 'ch3td4-a', label: 'Because any resistance within a range that satisfies the target condition is valid', isCorrect: true, explanation: 'Correct. A range of values can meet the target, so multiple designs work.' },
          { id: 'ch3td4-b', label: 'Because the simulation is imprecise', isCorrect: false, explanation: 'The simulation is precise. The range exists because the challenge intentionally allows flexibility.' },
          { id: 'ch3td4-c', label: 'Because there is no correct answer', isCorrect: false, explanation: 'There are correct answers — any value within the specified range satisfies the target.' },
        ],
      },
      {
        id: 'ch3td5',
        prompt: 'When designing toward a power target, which formula helps you find the required resistance directly?',
        choices: [
          { id: 'ch3td5-a', label: 'R = V² / P', isCorrect: true, explanation: 'Correct. Rearranging P = V²/R gives R = V²/P, letting you find resistance from voltage and target power.' },
          { id: 'ch3td5-b', label: 'R = P / I', isCorrect: false, explanation: 'That is not a standard rearrangement. Use R = V²/P when voltage and power are known.' },
          { id: 'ch3td5-c', label: 'R = V × I', isCorrect: false, explanation: 'V × I gives power, not resistance.' },
        ],
      },
    ],
  },
  {
    id: 'quiz-ch3-review',
    title: 'Chapter 3 Review',
    unlockedBy: 'lesson-ch3-5-3',
    passingScore: 60,
    questions: [
      {
        id: 'ch3rv1',
        prompt: 'What defines a series circuit?',
        choices: [
          { id: 'ch3rv1-a', label: 'All components are connected in a single path with no branches', isCorrect: true, explanation: 'Correct. A single loop with no junctions is the hallmark of a series circuit.' },
          { id: 'ch3rv1-b', label: 'Components are arranged on multiple independent branches', isCorrect: false, explanation: 'Multiple branches describe a parallel circuit.' },
          { id: 'ch3rv1-c', label: 'The circuit has more than one battery', isCorrect: false, explanation: 'The number of batteries does not determine whether a circuit is series or parallel.' },
        ],
      },
      {
        id: 'ch3rv2',
        prompt: 'What defines a parallel circuit?',
        choices: [
          { id: 'ch3rv2-a', label: 'Components are connected across the same two nodes, forming multiple paths', isCorrect: true, explanation: 'Correct. Multiple branches between shared nodes is the definition of parallel.' },
          { id: 'ch3rv2-b', label: 'All components share a single current path', isCorrect: false, explanation: 'A single path describes series, not parallel.' },
          { id: 'ch3rv2-c', label: 'Components are arranged in a straight physical line', isCorrect: false, explanation: 'Physical arrangement does not determine circuit type. Electrical connections do.' },
        ],
      },
      {
        id: 'ch3rv3',
        prompt: 'The total resistance of three 30 Ω resistors in series is:',
        choices: [
          { id: 'ch3rv3-a', label: '90 Ω', isCorrect: true, explanation: 'Correct. R_total = 30 + 30 + 30 = 90 Ω.' },
          { id: 'ch3rv3-b', label: '10 Ω', isCorrect: false, explanation: '10 Ω would be the parallel equivalent. Series adds: 90 Ω.' },
          { id: 'ch3rv3-c', label: '30 Ω', isCorrect: false, explanation: 'All three contribute: 30 + 30 + 30 = 90 Ω.' },
        ],
      },
      {
        id: 'ch3rv4',
        prompt: 'The equivalent resistance of two 50 Ω resistors in parallel is:',
        choices: [
          { id: 'ch3rv4-a', label: '25 Ω', isCorrect: true, explanation: 'Correct. Two identical resistors in parallel: R_eq = 50 / 2 = 25 Ω.' },
          { id: 'ch3rv4-b', label: '100 Ω', isCorrect: false, explanation: '100 Ω is the series total. Parallel gives 25 Ω.' },
          { id: 'ch3rv4-c', label: '50 Ω', isCorrect: false, explanation: 'Two 50 Ω in parallel give half: 25 Ω.' },
        ],
      },
      {
        id: 'ch3rv5',
        prompt: 'In a series circuit, the current is:',
        choices: [
          { id: 'ch3rv5-a', label: 'The same through every component', isCorrect: true, explanation: 'Correct. A single path means the same current everywhere.' },
          { id: 'ch3rv5-b', label: 'Different through each component', isCorrect: false, explanation: 'Current varies by component in parallel, not series.' },
          { id: 'ch3rv5-c', label: 'Zero unless all components have equal resistance', isCorrect: false, explanation: 'Current flows in series regardless of whether resistances are equal.' },
        ],
      },
      {
        id: 'ch3rv6',
        prompt: 'Power in a circuit is calculated using:',
        choices: [
          { id: 'ch3rv6-a', label: 'P = V × I', isCorrect: true, explanation: 'Correct. Power equals voltage times current.' },
          { id: 'ch3rv6-b', label: 'P = V + I', isCorrect: false, explanation: 'Power is the product of voltage and current, not the sum.' },
          { id: 'ch3rv6-c', label: 'P = V − I', isCorrect: false, explanation: 'Subtraction does not apply here. P = V × I.' },
        ],
      },
      {
        id: 'ch3rv7',
        prompt: 'When one component fails in a series circuit:',
        choices: [
          { id: 'ch3rv7-a', label: 'The entire circuit stops working', isCorrect: true, explanation: 'Correct. A break in the single path halts all current flow.' },
          { id: 'ch3rv7-b', label: 'Only that component stops working', isCorrect: false, explanation: 'That describes parallel behavior. In series, one failure stops everything.' },
          { id: 'ch3rv7-c', label: 'The other components get more current', isCorrect: false, explanation: 'No current flows when the only path is broken.' },
        ],
      },
      {
        id: 'ch3rv8',
        prompt: 'Which is a key advantage of parallel circuits over series circuits?',
        choices: [
          { id: 'ch3rv8-a', label: 'Each component operates independently, so one failure does not affect others', isCorrect: true, explanation: 'Correct. Fault tolerance is the main practical advantage of parallel wiring.' },
          { id: 'ch3rv8-b', label: 'Parallel circuits use less total current', isCorrect: false, explanation: 'Parallel circuits actually draw more total current than series for the same components.' },
          { id: 'ch3rv8-c', label: 'Parallel circuits are simpler to wire', isCorrect: false, explanation: 'Parallel wiring is often more complex. The advantage is independent operation of branches.' },
        ],
      },
    ],
  },
];
