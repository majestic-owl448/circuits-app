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

  // Chapter 2 — Numerical Circuit Analysis
  {
    id: 'ch2-voltage-values-units',
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
    id: 'ch2-resistance-values-units',
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
    id: 'ch2-reading-circuits-numbers',
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
    id: 'ch2-current-calculation',
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
    id: 'ch2-resistance-calculation',
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
    id: 'ch2-voltage-calculation',
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
    id: 'ch2-power-basics',
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
    id: 'ch2-power-calculation',
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
    id: 'ch2-multi-step-calc',
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
    id: 'ch2-review',
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
