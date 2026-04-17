import type { QuizConfig } from '../../types/quiz.ts';

const quizzes: QuizConfig[] = [
  {
    id: 'quiz-ch5-target-range',
    title: 'Target-Range Reasoning in Non-Ideal Contexts',
    unlockedBy: 'lesson-ch5-1-2',
    passingScore: 60,
    questions: [
      {
        id: 'ch5tr1',
        prompt: 'What does "operating range" mean in the context of non-ideal simulation?',
        choices: [
          { id: 'ch5tr1-a', label: 'The span of acceptable values within which a design is considered successful', isCorrect: true, explanation: 'Correct. An operating range defines what counts as good enough, not just a single exact target.' },
          { id: 'ch5tr1-b', label: 'The maximum voltage a component can handle before breaking', isCorrect: false, explanation: 'That describes an operating limit, not an operating range. A range is about the acceptable span of outcomes.' },
          { id: 'ch5tr1-c', label: 'The range of voltage settings available on a power supply', isCorrect: false, explanation: 'Operating range refers to acceptable simulation outcomes, not power-supply settings.' },
        ],
      },
      {
        id: 'ch5tr2',
        prompt: 'A circuit has an ideal current target of 2.4A. The non-ideal simulation produces 2.35A. The acceptable window is \u00b15% of the ideal value. Is 2.35A acceptable?',
        choices: [
          { id: 'ch5tr2-a', label: 'Yes \u2014 2.35A falls within the \u00b15% window of [2.28A, 2.52A]', isCorrect: true, explanation: 'Correct. \u00b15% of 2.4A gives [2.28A, 2.52A]. At 2.35A, the result is within range.' },
          { id: 'ch5tr2-b', label: 'No \u2014 the result differs from the ideal 2.4A so it fails', isCorrect: false, explanation: 'Non-ideal effects intentionally shift results slightly. What matters is whether the result falls within the acceptable range.' },
          { id: 'ch5tr2-c', label: 'No \u2014 only results above the ideal target are acceptable', isCorrect: false, explanation: 'Operating ranges extend in both directions from the target. Results slightly above or below the ideal can both be acceptable.' },
        ],
      },
      {
        id: 'ch5tr3',
        prompt: 'Why is range-based evaluation more appropriate than exact-value matching when non-ideal components are present?',
        choices: [
          { id: 'ch5tr3-a', label: 'Because non-ideal effects introduce realistic variation that would cause exact-value checks to reject working designs', isCorrect: true, explanation: 'Correct. A circuit may function correctly even if its output differs slightly from the ideal prediction due to internal resistance or other losses.' },
          { id: 'ch5tr3-b', label: 'Because non-ideal simulators are less accurate than ideal ones', isCorrect: false, explanation: 'Both models are deterministic. The difference is that non-ideal models include more realistic effects, not less accuracy.' },
          { id: 'ch5tr3-c', label: 'Because engineers always prefer approximate answers', isCorrect: false, explanation: 'Engineers use ranges to reflect acceptable performance windows, not out of preference for approximation.' },
        ],
      },
    ],
  },
  {
    id: 'quiz-ch5-internal-resistance-basics',
    title: 'Internal Resistance Basics',
    unlockedBy: 'lesson-ch5-2-1',
    passingScore: 60,
    questions: [
      {
        id: 'ch5ir1',
        prompt: 'What does internal resistance model about a real battery?',
        choices: [
          { id: 'ch5ir1-a', label: 'A small resistance in series inside the source that causes a voltage drop under load', isCorrect: true, explanation: 'Correct. Internal resistance acts like a resistor in series with the ideal voltage source, causing a voltage drop when current flows.' },
          { id: 'ch5ir1-b', label: 'The resistance of the wires connecting the battery to the circuit', isCorrect: false, explanation: 'Wire resistance is a separate non-ideal effect. Internal resistance is specifically inside the battery itself.' },
          { id: 'ch5ir1-c', label: 'The resistance of the load as measured from the battery terminals', isCorrect: false, explanation: 'Load resistance is external to the battery. Internal resistance is an intrinsic property of the battery itself.' },
        ],
      },
      {
        id: 'ch5ir2',
        prompt: 'A 9V battery with 1.5\u03a9 internal resistance drives a 6\u03a9 load. What is the current?',
        choices: [
          { id: 'ch5ir2-a', label: '1.2A, because I\u00a0=\u00a09\u00a0/\u00a0(6\u00a0+\u00a01.5)', isCorrect: true, explanation: 'Correct! R_total\u00a0=\u00a07.5\u03a9, I\u00a0=\u00a09\u00a0/\u00a07.5\u00a0=\u00a01.2A.' },
          { id: 'ch5ir2-b', label: '1.5A, because I\u00a0=\u00a09\u00a0/\u00a06', isCorrect: false, explanation: 'This ignores the internal resistance. The total loop resistance includes both R_load and R_internal.' },
          { id: 'ch5ir2-c', label: '6.0A, because I\u00a0=\u00a09\u00a0/\u00a01.5', isCorrect: false, explanation: 'Dividing by R_internal alone is not correct. The full loop resistance includes the load resistance as well.' },
        ],
      },
      {
        id: 'ch5ir3',
        prompt: 'What happens to the terminal voltage of a source as the load draws more current?',
        choices: [
          { id: 'ch5ir3-a', label: 'It decreases, because more current means a larger internal voltage drop', isCorrect: true, explanation: 'Correct. V_terminal\u00a0=\u00a0V\u00a0\u2212\u00a0I\u00a0\u00d7\u00a0R_internal. Increasing I increases the internal drop and lowers the terminal voltage.' },
          { id: 'ch5ir3-b', label: 'It increases, because more current means more energy delivered', isCorrect: false, explanation: 'More current actually increases the internal drop, reducing the terminal voltage. The two are inversely related for a non-ideal source.' },
          { id: 'ch5ir3-c', label: 'It stays constant, because the source maintains its rated voltage', isCorrect: false, explanation: 'Only an ideal source maintains constant terminal voltage regardless of load. A real source has internal resistance that causes the terminal voltage to drop under heavier loads.' },
        ],
      },
    ],
  },
  {
    id: 'quiz-ch5-source-drop-basics',
    title: 'Source-Drop Basics',
    unlockedBy: 'lesson-ch5-2-2',
    passingScore: 60,
    questions: [
      {
        id: 'ch5sd1',
        prompt: 'A 12V source with 2\u03a9 internal resistance drives a 10\u03a9 load. How much voltage is dropped inside the source?',
        choices: [
          { id: 'ch5sd1-a', label: '2V, because I\u00a0=\u00a01A and V_internal\u00a0=\u00a01A\u00a0\u00d7\u00a02\u03a9', isCorrect: true, explanation: 'Correct! I\u00a0=\u00a012\u00a0/\u00a012\u00a0=\u00a01A. V_internal\u00a0=\u00a01\u00a0\u00d7\u00a02\u00a0=\u00a02V.' },
          { id: 'ch5sd1-b', label: '12V, because all voltage is dropped internally', isCorrect: false, explanation: 'Only the internal fraction is dropped inside. Here only 2V is dropped internally; the remaining 10V reaches the load.' },
          { id: 'ch5sd1-c', label: '0V, because internal resistance does not consume voltage', isCorrect: false, explanation: 'Any resistance that carries current produces a voltage drop. V\u00a0=\u00a0I\u00a0\u00d7\u00a0R applies to internal resistance just as it does to any resistor.' },
        ],
      },
      {
        id: 'ch5sd2',
        prompt: 'What voltage does the load receive in the previous scenario (12V source, 2\u03a9 internal, 10\u03a9 load)?',
        choices: [
          { id: 'ch5sd2-a', label: '10V, because V_load\u00a0=\u00a012\u00a0\u2212\u00a02', isCorrect: true, explanation: 'Correct! V_load\u00a0=\u00a0V\u00a0\u2212\u00a0V_internal\u00a0=\u00a012\u00a0\u2212\u00a02\u00a0=\u00a010V. Equivalently, V_load\u00a0=\u00a0I\u00a0\u00d7\u00a0R_load\u00a0=\u00a01\u00a0\u00d7\u00a010\u00a0=\u00a010V.' },
          { id: 'ch5sd2-b', label: '12V, because the source maintains its rated voltage', isCorrect: false, explanation: 'Under load, the terminal voltage drops below the rated value. Only 10V reaches the load here.' },
          { id: 'ch5sd2-c', label: '2V, because the internal resistance keeps most of the voltage', isCorrect: false, explanation: 'The internal resistance only holds its proportional share: 2V. The larger load resistance holds 10V.' },
        ],
      },
      {
        id: 'ch5sd3',
        prompt: 'An open-circuit test reads 9V. With a load connected, the terminal voltage drops to 7.5V and the current is 0.5A. What is the internal resistance?',
        choices: [
          { id: 'ch5sd3-a', label: '3\u03a9, because R_internal\u00a0=\u00a0(9\u00a0\u2212\u00a07.5)\u00a0/\u00a00.5', isCorrect: true, explanation: 'Correct! \u0394V\u00a0=\u00a01.5V, I\u00a0=\u00a00.5A, R_internal\u00a0=\u00a01.5\u00a0/\u00a00.5\u00a0=\u00a03\u03a9.' },
          { id: 'ch5sd3-b', label: '15\u03a9, because R_internal\u00a0=\u00a07.5\u00a0/\u00a00.5', isCorrect: false, explanation: 'That calculation gives the load resistance, not the internal resistance. Use the voltage difference (\u0394V) divided by current.' },
          { id: 'ch5sd3-c', label: '18\u03a9, because R_internal\u00a0=\u00a09\u00a0/\u00a00.5', isCorrect: false, explanation: 'Dividing the full open-circuit voltage by the current overestimates R_internal. Use only the voltage drop that occurs internally (\u0394V).' },
        ],
      },
    ],
  },
  {
    id: 'quiz-ch5-meter-source-diagnosis',
    title: 'Meter-Based Source Diagnosis',
    unlockedBy: 'lesson-ch5-2-3',
    passingScore: 60,
    questions: [
      {
        id: 'ch5ms1',
        prompt: 'How can a voltmeter help diagnose internal resistance in a source?',
        choices: [
          { id: 'ch5ms1-a', label: 'By comparing the open-circuit reading to the terminal voltage under load \u2014 a larger difference indicates higher internal resistance', isCorrect: true, explanation: 'Correct. The voltage drop from open-circuit to under-load equals I\u00a0\u00d7\u00a0R_internal, so a bigger drop means higher internal resistance.' },
          { id: 'ch5ms1-b', label: 'By placing it in series with the source to measure current flow', isCorrect: false, explanation: 'A voltmeter is placed in parallel, not series. Ammeters go in series. Voltmeters measure voltage difference across two points.' },
          { id: 'ch5ms1-c', label: 'By measuring the source voltage before the source is connected to anything', isCorrect: false, explanation: 'Open-circuit voltage alone cannot reveal internal resistance. You need to compare open-circuit with loaded terminal voltage to see the difference.' },
        ],
      },
      {
        id: 'ch5ms2',
        prompt: 'Source X shows 6V open-circuit and 5.4V under 0.6A load. Source Y shows 6V open-circuit and 4.8V under 0.6A load. Which source has higher internal resistance?',
        choices: [
          { id: 'ch5ms2-a', label: 'Source Y \u2014 it drops 1.2V internally vs 0.6V for Source X at the same current', isCorrect: true, explanation: 'Correct. R_int(X)\u00a0=\u00a00.6\u00a0/\u00a00.6\u00a0=\u00a01\u03a9. R_int(Y)\u00a0=\u00a01.2\u00a0/\u00a00.6\u00a0=\u00a02\u03a9. Source Y has higher internal resistance.' },
          { id: 'ch5ms2-b', label: 'Source X \u2014 it delivers a higher terminal voltage', isCorrect: false, explanation: 'Higher terminal voltage means less internal drop, indicating lower internal resistance, not higher.' },
          { id: 'ch5ms2-c', label: 'Both are equal because both show 6V open-circuit', isCorrect: false, explanation: 'Open-circuit voltage reveals the EMF, not internal resistance. You need to observe the drop under load to distinguish them.' },
        ],
      },
      {
        id: 'ch5ms3',
        prompt: 'Why is it useful to correlate ammeter readings with voltmeter readings when diagnosing a source?',
        choices: [
          { id: 'ch5ms3-a', label: 'Because the voltage drop across internal resistance equals I\u00a0\u00d7\u00a0R_internal, so knowing both I and \u0394V lets you calculate R_internal', isCorrect: true, explanation: 'Correct. R_internal\u00a0=\u00a0\u0394V\u00a0/\u00a0I. Both measurements together allow you to quantify the internal resistance directly.' },
          { id: 'ch5ms3-b', label: 'Because ammeters measure resistance directly when placed in parallel', isCorrect: false, explanation: 'Ammeters measure current, not resistance, and they go in series. Resistance is inferred from voltage and current together.' },
          { id: 'ch5ms3-c', label: 'Because higher current always means lower voltage regardless of internal resistance', isCorrect: false, explanation: 'Current and terminal voltage are related through internal resistance specifically. Higher current lowers terminal voltage only because of the internal drop V\u00a0=\u00a0I\u00a0\u00d7\u00a0R_internal.' },
        ],
      },
    ],
  },
  {
    id: 'quiz-ch5-source-design-reasoning',
    title: 'Source Internal Resistance and Design Reasoning',
    unlockedBy: 'lesson-ch5-2-4',
    passingScore: 60,
    questions: [
      {
        id: 'ch5dr1',
        prompt: 'A load requires at least 8V across it. You have two 10V sources: one with 1\u03a9 internal resistance and one with 4\u03a9 internal resistance. The load is 4\u03a9. Which source works?',
        choices: [
          { id: 'ch5dr1-a', label: 'The 1\u03a9 source: V_load\u00a0=\u00a010\u00a0\u00d7\u00a04\u00a0/\u00a05\u00a0=\u00a08V \u2714', isCorrect: true, explanation: 'Correct! I\u00a0=\u00a010/5\u00a0=\u00a02A, V_load\u00a0=\u00a02\u00a0\u00d7\u00a04\u00a0=\u00a08V. The 4\u03a9 source gives V_load\u00a0=\u00a010\u00a0\u00d7\u00a04\u00a0/\u00a08\u00a0=\u00a05V \u2717 (below 8V).' },
          { id: 'ch5dr1-b', label: 'The 4\u03a9 source, because higher internal resistance means the source is more powerful', isCorrect: false, explanation: 'Higher internal resistance means more voltage is lost internally, leaving less for the load. It makes the source less effective, not more powerful.' },
          { id: 'ch5dr1-c', label: 'Either source works because both are rated 10V', isCorrect: false, explanation: 'Rated voltage is the same, but the delivered voltage to the load depends on internal resistance. They produce different terminal voltages under the same load.' },
        ],
      },
      {
        id: 'ch5dr2',
        prompt: 'Why is nominal voltage alone insufficient when selecting a source for a load with a minimum voltage requirement?',
        choices: [
          { id: 'ch5dr2-a', label: 'Because internal resistance causes the actual delivered voltage to be lower than the nominal rating under load', isCorrect: true, explanation: 'Correct. V_terminal\u00a0=\u00a0V_nominal\u00a0\u2212\u00a0I\u00a0\u00d7\u00a0R_internal. Two sources with the same nominal voltage but different R_internal deliver different terminal voltages.' },
          { id: 'ch5dr2-b', label: 'Because nominal voltage is just an estimate and cannot be relied upon', isCorrect: false, explanation: 'Nominal voltage is accurate for the open-circuit case. The issue is that under load, internal resistance reduces it.' },
          { id: 'ch5dr2-c', label: 'Because loads always reduce the source voltage by a fixed percentage', isCorrect: false, explanation: 'The voltage reduction depends on the ratio of internal resistance to load resistance, not a fixed percentage for all loads.' },
        ],
      },
      {
        id: 'ch5dr3',
        prompt: 'You need to maximize delivered voltage to a load from a fixed EMF source. What should you minimize?',
        choices: [
          { id: 'ch5dr3-a', label: 'The internal resistance of the source', isCorrect: true, explanation: 'Correct. Lower R_internal means less internal drop and more voltage delivered to the load.' },
          { id: 'ch5dr3-b', label: 'The resistance of the load', isCorrect: false, explanation: 'Reducing load resistance increases current, which actually increases the internal drop and lowers terminal voltage.' },
          { id: 'ch5dr3-c', label: 'The nominal EMF of the source', isCorrect: false, explanation: 'Lowering the EMF reduces the available voltage. You want to maximize EMF and minimize internal resistance.' },
        ],
      },
    ],
  },
  {
    id: 'quiz-ch5-wire-resistance-basics',
    title: 'Wire-Resistance Basics',
    unlockedBy: 'lesson-ch5-3-1',
    passingScore: 60,
    questions: [
      {
        id: 'ch5wr1',
        prompt: 'What does wire resistance model in a circuit simulation?',
        choices: [
          { id: 'ch5wr1-a', label: 'A series resistance in the wire segment that consumes some of the supply voltage when current flows', isCorrect: true, explanation: 'Correct. Wire resistance is modeled as a series resistor in the wire path. It causes a voltage drop and reduces current available to the load.' },
          { id: 'ch5wr1-b', label: 'The maximum current a wire can carry before overheating', isCorrect: false, explanation: 'That describes a current rating or operating limit. Wire resistance models the resistive drop in the wire, not its current capacity.' },
          { id: 'ch5wr1-c', label: 'The insulation resistance around the outside of the wire', isCorrect: false, explanation: 'Insulation resistance is a separate property. Wire resistance here refers to the conductor resistance that opposes current flow along the wire.' },
        ],
      },
      {
        id: 'ch5wr2',
        prompt: 'A circuit has a 9V battery, a 6\u03a9 bulb, and a wire with 3\u03a9 resistance. What is the current?',
        choices: [
          { id: 'ch5wr2-a', label: '1A, because I\u00a0=\u00a09\u00a0/\u00a0(6\u00a0+\u00a03)', isCorrect: true, explanation: 'Correct! R_total\u00a0=\u00a09\u03a9, I\u00a0=\u00a09\u00a0/\u00a09\u00a0=\u00a01A.' },
          { id: 'ch5wr2-b', label: '1.5A, because I\u00a0=\u00a09\u00a0/\u00a06', isCorrect: false, explanation: 'This ignores the wire resistance. Total resistance is 9\u03a9, not 6\u03a9.' },
          { id: 'ch5wr2-c', label: '3A, because I\u00a0=\u00a09\u00a0/\u00a03', isCorrect: false, explanation: 'Dividing by only the wire resistance ignores the load. Total resistance includes both.' },
        ],
      },
      {
        id: 'ch5wr3',
        prompt: 'When does wire resistance have a significant impact on circuit performance?',
        choices: [
          { id: 'ch5wr3-a', label: 'When the wire resistance is large relative to the load resistance', isCorrect: true, explanation: 'Correct. If R_wire is comparable to R_load, it claims a large share of the voltage budget. If R_wire is much smaller than R_load, its effect is negligible.' },
          { id: 'ch5wr3-b', label: 'Always, because any resistance reduces current', isCorrect: false, explanation: 'Wire resistance only causes noticeable effects when it is significant compared to the load. A 0.01\u03a9 wire with a 1000\u03a9 load has no measurable effect.' },
          { id: 'ch5wr3-c', label: 'Only in parallel circuits, not series circuits', isCorrect: false, explanation: 'Wire resistance appears in series with the load. It affects both series and parallel circuits by increasing total series resistance.' },
        ],
      },
    ],
  },
  {
    id: 'quiz-ch5-wire-voltage-drop',
    title: 'Voltage Drop Along Wires',
    unlockedBy: 'lesson-ch5-3-2',
    passingScore: 60,
    questions: [
      {
        id: 'ch5wv1',
        prompt: 'A wire has 2\u03a9 resistance and carries 1.5A. What voltage is dropped across the wire?',
        choices: [
          { id: 'ch5wv1-a', label: '3V, because V\u00a0=\u00a01.5A\u00a0\u00d7\u00a02\u03a9', isCorrect: true, explanation: 'Correct. V_wire\u00a0=\u00a0I\u00a0\u00d7\u00a0R_wire\u00a0=\u00a01.5\u00a0\u00d7\u00a02\u00a0=\u00a03V.' },
          { id: 'ch5wv1-b', label: '0.75V, because V\u00a0=\u00a01.5\u00a0/\u00a02', isCorrect: false, explanation: 'Dividing current by resistance does not give voltage. Use V\u00a0=\u00a0I\u00a0\u00d7\u00a0R.' },
          { id: 'ch5wv1-c', label: '0V, because wires do not drop voltage', isCorrect: false, explanation: 'Any resistance carrying current drops voltage. A 2\u03a9 wire carrying 1.5A drops 3V.' },
        ],
      },
      {
        id: 'ch5wv2',
        prompt: 'A 12V source drives a series circuit: 1\u03a9 wire and 3\u03a9 bulb. How much voltage reaches the bulb?',
        choices: [
          { id: 'ch5wv2-a', label: '9V, because V_bulb\u00a0=\u00a012\u00a0\u00d7\u00a03\u00a0/\u00a04', isCorrect: true, explanation: 'Correct! I\u00a0=\u00a012/4\u00a0=\u00a03A, V_bulb\u00a0=\u00a03\u00a0\u00d7\u00a03\u00a0=\u00a09V. Alternatively, V_wire\u00a0=\u00a03V, leaving 9V for the bulb.' },
          { id: 'ch5wv2-b', label: '12V, because the source maintains its voltage', isCorrect: false, explanation: 'The source is ideal here, but the wire still consumes its share. The 12V is split between the wire and the bulb according to their resistances.' },
          { id: 'ch5wv2-c', label: '4V, because the wire gets 1V and the bulb gets 3V out of 4V', isCorrect: false, explanation: 'This would only be correct if the total voltage were 4V. Here the source is 12V, so the bulb gets 12\u00a0\u00d7\u00a0(3/4)\u00a0=\u00a09V.' },
        ],
      },
      {
        id: 'ch5wv3',
        prompt: 'You expect a bulb to receive 10V but your measurement reads 7V. A separate measurement across the connecting wire reads 3V. What does this tell you?',
        choices: [
          { id: 'ch5wv3-a', label: 'The wire is consuming 3V that should have reached the bulb, explaining the shortfall', isCorrect: true, explanation: 'Correct. V_wire\u00a0=\u00a03V is direct evidence that the wire is the source of the voltage shortfall. KVL: V_source\u00a0=\u00a0V_wire\u00a0+\u00a0V_bulb\u00a0=\u00a03\u00a0+\u00a07\u00a0=\u00a010V.' },
          { id: 'ch5wv3-b', label: 'The source voltage has dropped to 7V', isCorrect: false, explanation: 'If the wire reads 3V and the bulb reads 7V, the source is 10V (KVL). The source is performing correctly; the wire is the issue.' },
          { id: 'ch5wv3-c', label: 'The bulb has failed and is no longer conducting properly', isCorrect: false, explanation: 'If the bulb had failed open, no current would flow and no voltage would appear across the wire. The wire reading confirms current is flowing and the wire is the cause of the shortfall.' },
        ],
      },
    ],
  },
  {
    id: 'quiz-ch5-wire-loss-design',
    title: 'Wire-Loss Design Reasoning',
    unlockedBy: 'lesson-ch5-3-3',
    passingScore: 60,
    questions: [
      {
        id: 'ch5wl1',
        prompt: 'A 12V circuit has a 1\u03a9 wire and a 1\u03a9 bulb. The bulb only receives 6V. What is the simplest fix to deliver more voltage to the bulb?',
        choices: [
          { id: 'ch5wl1-a', label: 'Replace the bulb with a higher-resistance one so it draws less current and loses less in the wire', isCorrect: true, explanation: 'Correct. A higher R_load reduces current, which reduces V_wire\u00a0=\u00a0I\u00a0\u00d7\u00a0R_wire, leaving more voltage for the load.' },
          { id: 'ch5wl1-b', label: 'Replace the bulb with a lower-resistance one to increase current', isCorrect: false, explanation: 'Lower load resistance increases current, which increases the wire drop. More current through R_wire means more voltage lost in the wire.' },
          { id: 'ch5wl1-c', label: 'Add another wire in parallel with the existing wire', isCorrect: false, explanation: 'Adding a parallel wire would reduce wire resistance, which helps but is less straightforward. The simpler answer is to change the load-to-wire resistance ratio.' },
        ],
      },
      {
        id: 'ch5wl2',
        prompt: 'In a circuit where wire resistance consumes 40% of the supply voltage, which describes the main limiting factor?',
        choices: [
          { id: 'ch5wl2-a', label: 'The wire path is the main limiting factor because it dominates the voltage budget', isCorrect: true, explanation: 'Correct. If the wire consumes 40% of supply voltage, it is the primary constraint on load performance.' },
          { id: 'ch5wl2-b', label: 'The source is the main limiting factor because it sets the total voltage', isCorrect: false, explanation: 'The source sets the voltage budget, but if it is adequate for the load alone, the wire is the constraint that prevents the load from being met.' },
          { id: 'ch5wl2-c', label: 'The load is the main limiting factor because it determines how much current flows', isCorrect: false, explanation: 'Load resistance does affect current, but when the wire consumes 40% of supply voltage, the wire itself is the dominant factor limiting load performance.' },
        ],
      },
      {
        id: 'ch5wl3',
        prompt: 'What happens to the voltage delivered to a load if the wire resistance is reduced while everything else stays the same?',
        choices: [
          { id: 'ch5wl3-a', label: 'The load voltage increases because less voltage is lost in the wire', isCorrect: true, explanation: 'Correct. Lower R_wire reduces V_wire\u00a0=\u00a0I\u00a0\u00d7\u00a0R_wire, leaving more of the supply for the load.' },
          { id: 'ch5wl3-b', label: 'The load voltage decreases because total resistance drops and more current flows', isCorrect: false, explanation: 'More current does flow, but the voltage divider ratio shifts in favor of the load when R_wire drops. The load voltage increases.' },
          { id: 'ch5wl3-c', label: 'The load voltage stays the same because the source voltage is unchanged', isCorrect: false, explanation: 'Load voltage depends on how the supply is divided between wire and load. Reducing wire resistance shifts more of the supply voltage to the load.' },
        ],
      },
    ],
  },
  {
    id: 'quiz-ch5-ideal-non-ideal-basics',
    title: 'Ideal vs Non-Ideal Behavior',
    unlockedBy: 'lesson-ch5-1-1',
    passingScore: 60,
    questions: [
      {
        id: 'ch5ini1',
        prompt: 'Why do we use ideal models if real components are not perfectly ideal?',
        choices: [
          { id: 'ch5ini1-a', label: 'They are easier to calculate and provide a useful starting point', isCorrect: true, explanation: 'Correct. Ideal models simplify analysis so you can learn the fundamentals first.' },
          { id: 'ch5ini1-b', label: 'Real components are actually ideal in most cases', isCorrect: false, explanation: 'All real components have non-ideal effects, even if they are small.' },
          { id: 'ch5ini1-c', label: 'Ideal models produce more accurate simulations', isCorrect: false, explanation: 'Non-ideal models are more accurate; ideal models trade accuracy for simplicity.' },
        ],
      },
      {
        id: 'ch5ini2',
        prompt: 'A real battery has internal resistance. How does this affect the current in a simple circuit compared to an ideal battery with the same label voltage?',
        choices: [
          { id: 'ch5ini2-a', label: 'Current increases because the battery works harder', isCorrect: false, explanation: 'Internal resistance adds to total resistance, which reduces current.' },
          { id: 'ch5ini2-b', label: 'Current decreases because total resistance is higher', isCorrect: true, explanation: 'Correct. I = V / (R_load + R_internal), so more resistance means less current.' },
          { id: 'ch5ini2-c', label: 'Current stays exactly the same', isCorrect: false, explanation: 'Only an ideal battery (zero internal resistance) would give the same current.' },
        ],
      },
      {
        id: 'ch5ini3',
        prompt: 'Which component property introduces non-ideal behavior in a battery?',
        choices: [
          { id: 'ch5ini3-a', label: 'Terminal voltage', isCorrect: false, explanation: 'Terminal voltage is the output; internal resistance is the non-ideal property.' },
          { id: 'ch5ini3-b', label: 'Internal resistance', isCorrect: true, explanation: 'Correct. Internal resistance causes a voltage drop inside the battery itself.' },
          { id: 'ch5ini3-c', label: 'Switch state', isCorrect: false, explanation: 'Switch state controls circuit continuity, not non-ideal battery behavior.' },
        ],
      },
    ],
  },
];

export default quizzes;
