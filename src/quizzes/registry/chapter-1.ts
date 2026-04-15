import type { QuizConfig } from '../../types/quiz.ts';

export const quizRegistryChapter1: QuizConfig[] = [
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
];
