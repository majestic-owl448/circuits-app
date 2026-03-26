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
];
