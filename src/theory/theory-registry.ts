export interface TheoryEntry {
  id: string;
  title: string;
  content: string;
  sourceLesson: string;
  topic: string;
}

export const theoryRegistry: TheoryEntry[] = [
  // Unit 1 — First Contact With a Circuit
  {
    id: 'theory-what-is-a-circuit',
    title: 'What is a circuit?',
    content:
      'A circuit is a complete path through which electricity can flow. Every circuit needs at least three things: a source of electrical energy (such as a battery), a load that uses the energy (such as a bulb), and conductive connections (wires) that link them together. When all of these elements are connected in a continuous loop with no gaps, electricity flows and the load operates. Without any one of these parts, the circuit cannot function.',
    sourceLesson: 'lesson-1-1',
    topic: 'Circuit Fundamentals',
  },
  {
    id: 'theory-open-closed-circuits',
    title: 'Open and closed circuits',
    content:
      'A closed circuit is one in which the path is complete and unbroken, allowing electricity to flow continuously through the loop. An open circuit has a gap or break somewhere in the path, which prevents any electricity from flowing at all. The distinction is binary: a circuit is either fully closed (electricity flows) or open (no electricity flows). A single break anywhere in the loop is enough to stop the flow entirely.',
    sourceLesson: 'lesson-1-1',
    topic: 'Circuit Fundamentals',
  },
  {
    id: 'theory-source-switch-load',
    title: 'Source, switch, and load',
    content:
      'The source (typically a battery in our circuits) provides the electrical energy that drives the circuit. The load (such as a bulb) is the component that uses the electrical energy, converting it into another form like light or heat. The switch is a control element that can open or close the circuit path. The switch does not generate or consume energy — it simply determines whether the circuit is complete. Together, these three roles form the foundation of every simple circuit.',
    sourceLesson: 'lesson-1-1',
    topic: 'Circuit Fundamentals',
  },
  {
    id: 'theory-return-path',
    title: 'Why the return path matters',
    content:
      'Electricity must travel in a complete loop to flow. It leaves one terminal of the battery, passes through the load and other components, and must return to the other terminal. If the return path is broken or missing, no current flows anywhere in the circuit — not even in the parts that are properly connected. This is why every wire and connection matters: the return path is just as important as the path going out.',
    sourceLesson: 'lesson-1-2',
    topic: 'Circuit Fundamentals',
  },
  {
    id: 'theory-loop-structure',
    title: 'Loop structure in a simple circuit',
    content:
      'A simple circuit forms a single continuous loop. Starting from one terminal of the battery, the path goes through each component in sequence and returns to the other terminal. Every connection in this loop is essential — removing or disconnecting any single wire or component breaks the entire loop and stops the flow of electricity. Understanding this loop structure is the key to reading and building circuits correctly.',
    sourceLesson: 'lesson-1-2',
    topic: 'Circuit Fundamentals',
  },
  {
    id: 'theory-switches-control',
    title: 'Switches as control elements',
    content:
      'A switch is a control element that can make or break the circuit path. When closed, it completes the loop and allows electricity to flow. When open, it creates a gap that stops all current. Switches do not provide energy or consume it — they only control whether the circuit is active. Every light switch, power button, and on/off control you encounter in everyday life operates on this same basic principle.',
    sourceLesson: 'lesson-1-3',
    topic: 'Circuit Fundamentals',
  },

  // Unit 2 — Current, Voltage, and the Bulb as a Load
  {
    id: 'theory-what-is-a-load',
    title: 'What is a load?',
    content:
      'A load is any component that uses electrical energy and converts it into another useful form. A bulb converts electricity into light and heat. A motor converts it into motion. A speaker converts it into sound. Without a load, a circuit has no useful purpose — electricity would flow but do no work. The load is the reason we build circuits in the first place: to deliver energy to a device that does something with it.',
    sourceLesson: 'lesson-2-1',
    topic: 'Loads and Energy',
  },
  {
    id: 'theory-bulb-in-circuit',
    title: 'What the bulb does in the circuit',
    content:
      'In our simple circuits, the bulb serves as the load. When electricity flows through the bulb, electrical energy is converted into visible light and heat. The bulb glows brighter when more electrical energy is delivered to it per second. If the circuit is open and no electricity flows, the bulb remains dark. The bulb is the visible indicator that tells you whether your circuit is working — if the bulb lights up, you know the loop is complete and current is flowing.',
    sourceLesson: 'lesson-2-1',
    topic: 'Loads and Energy',
  },
  {
    id: 'theory-what-is-current',
    title: 'What is current?',
    content:
      'Current (represented by the symbol I) is the flow of electricity through a circuit. You can think of it like water flowing through a pipe — it moves continuously through the loop as long as the path is complete and a source provides the push. Current is measured in amperes (often shortened to amps). In a simple single-loop circuit, the same amount of current flows through every component, because electricity has only one path to follow.',
    sourceLesson: 'lesson-2-2',
    topic: 'Current',
  },
  {
    id: 'theory-current-closed-loop',
    title: 'Current flows only in a closed loop',
    content:
      'If any part of the circuit path is broken — a disconnected wire, an open switch, a missing component — current stops flowing everywhere in the circuit at once. There is no such thing as partial flow in a simple series circuit. Either the entire loop carries current, or none of it does. This all-or-nothing behavior is a direct consequence of the loop structure: current needs a complete path from one battery terminal, through all components, and back to the other terminal.',
    sourceLesson: 'lesson-2-2',
    topic: 'Current',
  },
  {
    id: 'theory-what-is-voltage',
    title: 'What is voltage?',
    content:
      'Voltage (symbol: V) is the electrical push or pressure provided by the source. It is the driving force that causes current to flow through the circuit. You can think of voltage as similar to water pressure in a pipe: higher pressure pushes more water through, and higher voltage pushes more current through. Voltage is measured in volts. The battery in our circuits provides a specific voltage that remains constant regardless of what is connected.',
    sourceLesson: 'lesson-2-3',
    topic: 'Voltage',
  },
  {
    id: 'theory-voltage-ideal-source',
    title: 'Voltage as push in an ideal source',
    content:
      'In our simplified model, the battery is an ideal voltage source. This means it provides a steady, constant voltage (push) regardless of how much current is flowing or what load is connected. The push exists even when the circuit is open — the battery is always ready to drive current. However, current only actually flows when the loop is complete. Real batteries are close to this ideal behavior for most purposes, which is why the simplified model works well for learning.',
    sourceLesson: 'lesson-2-3',
    topic: 'Voltage',
  },
  {
    id: 'theory-voltage-current-relationship',
    title: 'Relationship between voltage and current',
    content:
      'Voltage and current are two distinct but related quantities. Voltage is the push provided by the source — it exists whether or not current is flowing. Current is the flow that results from that push when the circuit is closed. You need both a push (voltage from the battery) and a complete path (closed circuit) for current to flow and the load to operate. If either is missing — no source or a broken path — the load will not work.',
    sourceLesson: 'lesson-2-4',
    topic: 'Voltage',
  },

  // Unit 3 — Resistance and Early Formula Familiarity
  {
    id: 'theory-what-is-resistance',
    title: 'What is resistance?',
    content:
      'Resistance (symbol: R) is the opposition to current flow in a circuit. Every component that current passes through has some resistance. Components with high resistance allow less current to flow for a given voltage, while components with low resistance allow more. Resistance is measured in ohms (symbol: \u03A9). In our simple circuits, the bulb is the main source of resistance, and its resistance determines how much current flows when the battery provides its push.',
    sourceLesson: 'lesson-3-1',
    topic: 'Resistance',
  },
  {
    id: 'theory-bulb-resistive-load',
    title: 'Bulb as an ideal resistive load',
    content:
      'In our early model, we treat the bulb as an ideal resistive load. This means we assume the bulb has a single, fixed resistance value that does not change. In reality, a bulb\'s resistance changes with temperature (it increases as the filament heats up), but this simplified model lets us focus on the core concepts. Treating the bulb as a fixed resistance allows us to predict and calculate circuit behavior using simple formulas.',
    sourceLesson: 'lesson-3-1',
    topic: 'Resistance',
  },
  {
    id: 'theory-ohms-law',
    title: "Ohm's Law",
    content:
      "Ohm's Law is the fundamental relationship connecting voltage, current, and resistance: V = I \u00D7 R. This means that voltage equals current multiplied by resistance. If you know any two of these three quantities, you can calculate the third. For example, if a battery provides 9 volts and the bulb has 45 ohms of resistance, the current is 9 / 45 = 0.2 amperes. Ohm's Law is the single most important formula in basic circuit analysis.",
    sourceLesson: 'lesson-3-2',
    topic: 'Formulas',
  },
  {
    id: 'theory-power-formula',
    title: 'Power formula',
    content:
      'The power formula states that P = V \u00D7 I, where P is power in watts, V is voltage in volts, and I is current in amperes. Power describes the rate at which electrical energy is converted into another form (such as light and heat in a bulb). A higher power means the bulb uses more energy per second and glows more brightly. Power connects the electrical push (voltage) with the electrical flow (current) to tell you how much work the circuit is doing.',
    sourceLesson: 'lesson-3-2',
    topic: 'Formulas',
  },
  {
    id: 'theory-symbol-glossary',
    title: 'Symbol glossary',
    content:
      'The four key symbols in basic circuit analysis are: V for voltage, measured in volts — the electrical push or pressure. I for current, measured in amperes — the flow of electricity. R for resistance, measured in ohms (\u03A9) — the opposition to flow. P for power, measured in watts — the rate of energy use. These symbols appear in the two core formulas: V = IR (Ohm\'s Law) and P = VI (the power formula). Becoming fluent in reading these symbols is essential for working with circuits.',
    sourceLesson: 'lesson-3-2',
    topic: 'Formulas',
  },
  {
    id: 'theory-bulb-brightness-power',
    title: 'Early connection between bulb behavior and power',
    content:
      'The brightness of a bulb is directly related to the power it receives. Power (P = V \u00D7 I) describes how much electrical energy is converted to light and heat each second. More power means a brighter glow, while less power means a dimmer one. This is why changing the voltage or resistance in a circuit visibly affects the bulb — these changes alter the current, which changes the power delivered to the bulb.',
    sourceLesson: 'lesson-3-3',
    topic: 'Formulas',
  },

  // Unit 4 — First Construction Freedom
  {
    id: 'theory-connecting-a-path',
    title: 'Connecting a path',
    content:
      'Wires create the conductive paths that connect components in a circuit. Each wire links two terminals (nodes), and a correct set of wire connections forms the complete loop that allows current to flow. If even one connection is wrong or missing, the loop is broken and no current flows. When building circuits, always trace the path mentally: from one battery terminal, through each component, and back to the other terminal. Every node must be part of this continuous chain.',
    sourceLesson: 'lesson-4-2',
    topic: 'Circuit Construction',
  },
  {
    id: 'theory-trial-and-error',
    title: 'Learning through trial and error',
    content:
      'Building a faulty circuit and then diagnosing the problem is one of the most effective ways to learn. Real engineers routinely build, test, identify problems, and fix them. The circuit simulator will not prevent you from making mistakes — instead, it provides tools like the current overlay to help you figure out what went wrong. Embrace errors as learning opportunities: each mistake deepens your understanding of how circuits work and builds your troubleshooting skills.',
    sourceLesson: 'lesson-4-3',
    topic: 'Circuit Construction',
  },

  // Unit 5 — Readiness for Numbers
  {
    id: 'theory-circuit-quantities',
    title: 'Circuit quantities overview',
    content:
      'Every circuit has four measurable quantities: voltage (V) in volts, current (I) in amperes, resistance (R) in ohms, and power (P) in watts. These are not abstract ideas — they have specific numerical values that can be calculated using the formulas V = IR and P = VI. Understanding what each quantity represents and how they relate to each other is the foundation you need before performing numerical calculations.',
    sourceLesson: 'lesson-5-1',
    topic: 'Quantities and Measurement',
  },
  {
    id: 'theory-transition-numerical',
    title: 'Transition to numerical analysis',
    content:
      'You have built a strong conceptual foundation by learning what circuits are, how current flows, what voltage and resistance mean, and how the formulas connect them. The next stage will introduce actual numerical calculations using V = IR and P = VI. You will compute current, voltage, resistance, and power with real values, predict circuit behavior before running the simulation, and verify your predictions. The qualitative understanding you have gained makes this transition natural and intuitive.',
    sourceLesson: 'lesson-5-2',
    topic: 'Quantities and Measurement',
  },

  // Chapter 2 — Numerical Circuit Analysis
  {
    id: 'voltage-measured-quantity',
    title: 'Voltage as a Measured Quantity',
    content:
      'Voltage is not just a concept — it is a specific, measurable number that describes how much electrical push a source provides. In a real circuit you can measure voltage with a voltmeter placed across the source or across a component. The value you read tells you exactly how much energy per unit charge is available to drive current through the circuit. When you see a battery labeled "12 V," that number is its measured voltage.',
    sourceLesson: 'lesson-ch2-1-1',
    topic: 'Numerical Values',
  },
  {
    id: 'units-for-voltage',
    title: 'Units for Voltage',
    content:
      'Voltage is measured in volts, abbreviated V. One volt means one joule of energy is transferred for every coulomb of charge that passes through. Common battery voltages include 1.5 V for an AA cell, 9 V for a rectangular battery, and 12 V for a car battery. When writing voltage values, always include the unit — "12 V" is clear and complete, while just "12" is ambiguous.',
    sourceLesson: 'lesson-ch2-1-1',
    topic: 'Numerical Values',
  },
  {
    id: 'resistance-measured-quantity',
    title: 'Resistance as a Measured Quantity',
    content:
      'Resistance is a measurable property of every component in a circuit. It tells you how strongly that component opposes current flow. You can measure resistance with an ohmmeter when the component is disconnected from the circuit. A higher resistance value means the component allows less current to pass for any given voltage. Knowing the resistance value of each component is essential for predicting how a circuit will behave.',
    sourceLesson: 'lesson-ch2-1-2',
    topic: 'Numerical Values',
  },
  {
    id: 'units-for-resistance',
    title: 'Units for Resistance',
    content:
      'Resistance is measured in ohms, symbolized by the Greek letter omega (\u03A9). One ohm is the resistance that allows one ampere of current to flow when one volt is applied. Typical resistor values range from a few ohms to millions of ohms. For large values, prefixes are used: 1 k\u03A9 (kilohm) equals 1,000 \u03A9 and 1 M\u03A9 (megohm) equals 1,000,000 \u03A9. Always include the unit when writing resistance values.',
    sourceLesson: 'lesson-ch2-1-2',
    topic: 'Numerical Values',
  },
  {
    id: 'known-unknown-quantities',
    title: 'Known and Unknown Quantities',
    content:
      'In any circuit problem you will have some values that are given (known quantities) and others that you need to find (unknown quantities). A typical simple-circuit problem gives you two of the three values in Ohm\'s Law — voltage, current, or resistance — and asks you to calculate the third. Identifying which quantities are known and which are unknown is the critical first step before applying any formula.',
    sourceLesson: 'lesson-ch2-1-3',
    topic: 'Numerical Values',
  },
  {
    id: 'reading-circuit-before-calculating',
    title: 'Reading a Circuit Before Calculating',
    content:
      'Before you plug numbers into a formula, take a moment to read the circuit. Identify the source and note its voltage. Find the load and note its resistance. Determine whether the circuit is open or closed. This habit of reading before calculating helps you choose the right formula, avoid errors, and build an intuition for what the answer should be before you compute it.',
    sourceLesson: 'lesson-ch2-1-3',
    topic: 'Numerical Values',
  },
  {
    id: 'ohms-law-find-current',
    title: "Using Ohm's Law to Find Current",
    content:
      'When you know the voltage and resistance in a circuit, you can find the current using I = V / R. This rearrangement of Ohm\'s Law tells you how much current flows through the circuit. For example, a 12 V battery connected to a 60 \u03A9 bulb produces a current of 12 / 60 = 0.2 A. The higher the voltage or the lower the resistance, the more current will flow.',
    sourceLesson: 'lesson-ch2-2-1',
    topic: "Ohm's Law Calculations",
  },
  {
    id: 'units-for-current',
    title: 'Units for Current',
    content:
      'Current is measured in amperes, often shortened to amps and abbreviated A. One ampere means one coulomb of charge passes a given point each second. In simple bulb circuits, currents are often fractions of an ampere — values like 0.2 A or 0.5 A are common. For smaller currents, the milliampere (mA) is used: 1 A = 1,000 mA. Always include the unit when reporting a current value.',
    sourceLesson: 'lesson-ch2-2-1',
    topic: "Ohm's Law Calculations",
  },
  {
    id: 'ohms-law-find-resistance',
    title: "Using Ohm's Law to Find Resistance",
    content:
      'When you know the voltage and current, you can find resistance using R = V / I. This tells you how much opposition to current flow exists in the circuit. For example, if a 10 V source drives 0.5 A of current, the resistance is 10 / 0.5 = 20 \u03A9. This form of Ohm\'s Law is useful when you can measure voltage and current but cannot directly measure the resistance of a component.',
    sourceLesson: 'lesson-ch2-2-2',
    topic: "Ohm's Law Calculations",
  },
  {
    id: 'ohms-law-find-voltage',
    title: "Using Ohm's Law to Find Voltage",
    content:
      'When you know the current and resistance, you can find the voltage using V = I \u00D7 R — the original form of Ohm\'s Law. For example, if 0.3 A flows through a 40 \u03A9 resistor, the voltage across it is 0.3 \u00D7 40 = 12 V. This form is especially useful for finding the voltage drop across a specific component when you already know the current flowing through it and its resistance.',
    sourceLesson: 'lesson-ch2-2-3',
    topic: "Ohm's Law Calculations",
  },
  {
    id: 'what-is-power-quantity',
    title: 'What is Power?',
    content:
      'Power is the rate at which electrical energy is converted into another form such as light, heat, or motion. It answers the question: how much energy does this component use every second? A component with higher power converts energy faster and does more work per second. In a bulb, more power means a brighter glow because more electrical energy is being turned into light and heat each second.',
    sourceLesson: 'lesson-ch2-3-1',
    topic: 'Power Calculations',
  },
  {
    id: 'units-for-power',
    title: 'Units for Power',
    content:
      'Power is measured in watts, abbreviated W. One watt equals one joule of energy converted per second. A typical small flashlight bulb might use 1 to 5 watts, a household bulb 40 to 100 watts, and an electric heater 1,000 watts or more. For large values, the kilowatt (kW) is used: 1 kW = 1,000 W. Always attach the unit so your result is unambiguous.',
    sourceLesson: 'lesson-ch2-3-1',
    topic: 'Power Calculations',
  },
  {
    id: 'calculating-power-vi',
    title: 'Calculating Power from Voltage and Current',
    content:
      'The power delivered to a component is calculated with P = V \u00D7 I, where V is the voltage across it and I is the current through it. For example, if a bulb has 12 V across it and 0.2 A flowing through it, the power is 12 \u00D7 0.2 = 2.4 W. You can also combine this with Ohm\'s Law to get alternative forms: P = I\u00B2R or P = V\u00B2/R, but P = VI is the most direct version.',
    sourceLesson: 'lesson-ch2-3-2',
    topic: 'Power Calculations',
  },
  {
    id: 'multi-step-calculation',
    title: 'Multi-Step Calculation in a Simple Circuit',
    content:
      'Many circuit problems require more than one formula. A typical pattern is: use Ohm\'s Law first to find the current (I = V / R), then use the power formula to find the power (P = V \u00D7 I). For example, given a 9 V battery and a 30 \u03A9 bulb, first calculate I = 9 / 30 = 0.3 A, then P = 9 \u00D7 0.3 = 2.7 W. Breaking a problem into clear sequential steps reduces errors and builds confidence.',
    sourceLesson: 'lesson-ch2-3-3',
    topic: 'Power Calculations',
  },
  {
    id: 'numerical-evaluation',
    title: 'How Numerical Evaluation Works',
    content:
      'Numerical evaluation means substituting known values into a formula and computing the result step by step. Write the formula, replace each symbol with its number and unit, then perform the arithmetic. For example: I = V / R becomes I = 12 V / 60 \u03A9 = 0.2 A. Showing your work this way makes it easy to spot errors and demonstrates that you understand which values go where.',
    sourceLesson: 'lesson-ch2-4-1',
    topic: 'Evaluation and Interpretation',
  },
  {
    id: 'reading-detailed-calculation',
    title: 'How to Read a Detailed Circuit Calculation',
    content:
      'A detailed circuit calculation starts by listing the known quantities, identifies the unknowns, selects the appropriate formula, substitutes values, and arrives at a numerical answer with units. Reading such a calculation means following each step and confirming that it makes sense. Check that the correct formula was chosen, that the numbers were substituted in the right places, and that the final answer has reasonable units and magnitude.',
    sourceLesson: 'lesson-ch2-4-2',
    topic: 'Evaluation and Interpretation',
  },
  {
    id: 'operating-range',
    title: 'Operating Range in a Simulated Circuit',
    content:
      'An operating range defines the minimum and maximum values of a circuit quantity — such as voltage or resistance — within which the circuit functions correctly. In a simulation, going outside the operating range might cause unrealistic results like excessive current or negligible power. Understanding operating range helps you choose realistic component values and recognize when a calculation result signals a problem with the circuit design.',
    sourceLesson: 'lesson-ch2-5-1',
    topic: 'Evaluation and Interpretation',
  },
];

/** Get all entries for a given list of entry IDs. */
export function getTheoryEntries(ids: string[]): TheoryEntry[] {
  const idSet = new Set(ids);
  return theoryRegistry.filter(e => idSet.has(e.id));
}

/** Get unique topics from a list of entries, in registry order. */
export function getTopicsInOrder(entries: TheoryEntry[]): string[] {
  const seen = new Set<string>();
  const topics: string[] = [];
  for (const e of entries) {
    if (!seen.has(e.topic)) {
      seen.add(e.topic);
      topics.push(e.topic);
    }
  }
  return topics;
}
