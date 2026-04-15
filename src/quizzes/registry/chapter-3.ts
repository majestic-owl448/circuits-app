import type { QuizConfig } from '../../types/quiz.ts';

export const quizRegistryChapter3: QuizConfig[] = [
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
