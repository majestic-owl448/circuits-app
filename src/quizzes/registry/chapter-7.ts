import type { QuizConfig } from '../../types/quiz.ts';

const quizzes: QuizConfig[] = [
  {
    id: 'quiz-ch7-ac-versus-dc-basics',
    title: 'AC Versus DC Basics',
    unlockedBy: 'lesson-ch7-1-1',
    passingScore: 60,
    questions: [
      {
        id: 'ch7ad1',
        prompt: 'What does AC stand for, and what makes it different from DC?',
        choices: [
          { id: 'ch7ad1-a', label: 'Alternating Current — it repeatedly reverses direction, unlike DC which flows in one constant direction', isCorrect: true, explanation: 'Correct. AC alternates direction on every half-cycle. DC always flows the same way.' },
          { id: 'ch7ad1-b', label: 'Amplified Current — it carries more energy per cycle than DC', isCorrect: false, explanation: 'AC does not stand for amplified current. The AC/DC distinction is about direction, not energy per cycle.' },
          { id: 'ch7ad1-c', label: 'Alternating Current — it is used only at very high voltages, while DC is used at low voltages', isCorrect: false, explanation: 'Both AC and DC exist at a wide range of voltages. The key distinction is the direction behavior over time, not voltage level.' },
        ],
      },
      {
        id: 'ch7ad2',
        prompt: 'How does the current through a resistor behave differently when driven by a DC source versus an AC source?',
        choices: [
          { id: 'ch7ad2-a', label: 'Under DC: constant current in one direction. Under AC: current alternates direction continuously', isCorrect: true, explanation: 'Correct. A DC source drives steady current in one direction. An AC source drives current that reverses direction on every half-cycle.' },
          { id: 'ch7ad2-b', label: 'Under DC: pulsing current. Under AC: constant current', isCorrect: false, explanation: 'This is reversed. An ideal DC source produces steady current; an AC source produces alternating current.' },
          { id: 'ch7ad2-c', label: 'Both produce alternating current, but DC alternates more slowly', isCorrect: false, explanation: 'DC does not alternate at all. Only AC reverses direction.' },
        ],
      },
      {
        id: 'ch7ad3',
        prompt: 'On a current-vs-time graph, which shape represents steady DC behavior?',
        choices: [
          { id: 'ch7ad3-a', label: 'A repeating wave that crosses zero and reverses', isCorrect: false, explanation: 'A repeating wave crossing zero is AC behavior — current reverses direction each cycle.' },
          { id: 'ch7ad3-b', label: 'A flat horizontal line at a constant value', isCorrect: true, explanation: 'Correct. DC current is constant over time, producing a flat horizontal line on a current-vs-time graph.' },
          { id: 'ch7ad3-c', label: 'A decaying curve that approaches zero', isCorrect: false, explanation: 'A decaying curve describes a transient response (like in an RC circuit), not steady DC behavior.' },
        ],
      },
    ],
  },
  {
    id: 'quiz-ch7-ac-time-pattern-basics',
    title: 'AC Time-Pattern Basics',
    unlockedBy: 'lesson-ch7-1-2',
    passingScore: 60,
    questions: [
      {
        id: 'ch7at1',
        prompt: 'What is the key difference between a transient (like an RC charge-up) and a repeating AC pattern on a timeline?',
        choices: [
          { id: 'ch7at1-a', label: 'A transient changes then settles to a stable value; an AC pattern keeps repeating indefinitely without settling', isCorrect: true, explanation: 'Correct. Transients are temporary — they fade to a steady state. AC patterns are ongoing and never settle to a fixed value.' },
          { id: 'ch7at1-b', label: 'A transient repeats at fixed intervals while AC settles after a few cycles', isCorrect: false, explanation: 'This is reversed. Transients settle; AC patterns keep repeating.' },
          { id: 'ch7at1-c', label: 'There is no meaningful difference — both are just changing values over time', isCorrect: false, explanation: 'The distinction matters for analysis. A transient is a temporary phase; AC is a sustained, repeating steady-state behavior.' },
        ],
      },
      {
        id: 'ch7at2',
        prompt: 'On a timeline display, what does a flat, non-changing line for current indicate?',
        choices: [
          { id: 'ch7at2-a', label: 'The circuit has an AC source and current is at a zero crossing', isCorrect: false, explanation: 'An AC circuit produces a continuously changing wave, not a flat line, unless measured over a very long period where the average approaches zero.' },
          { id: 'ch7at2-b', label: 'The circuit has a DC source and the current is steady', isCorrect: true, explanation: 'Correct. A flat timeline line means the current is constant — consistent with a DC source driving a resistive load at steady state.' },
          { id: 'ch7at2-c', label: 'The circuit is open and no current flows at all', isCorrect: false, explanation: 'An open circuit would show a flat line at zero, but a flat line at any positive or negative value indicates steady DC current, not necessarily zero.' },
        ],
      },
      {
        id: 'ch7at3',
        prompt: 'Why does an AC circuit never reach "steady state" in the same sense that a DC circuit does?',
        choices: [
          { id: 'ch7at3-a', label: 'Because AC circuits always contain capacitors that prevent steady state', isCorrect: false, explanation: 'AC circuits do not require capacitors. The repeating behavior comes from the AC source itself, not from energy-storage components.' },
          { id: 'ch7at3-b', label: 'Because the AC source continuously reverses polarity, so current values keep changing and never settle', isCorrect: true, explanation: 'Correct. The AC source continuously changes direction. There is no fixed final value — the current keeps alternating, so no DC-style steady state occurs.' },
          { id: 'ch7at3-c', label: 'Because AC circuits always have higher resistance than DC circuits', isCorrect: false, explanation: 'Resistance value is independent of whether a circuit uses AC or DC. The repeating behavior is a property of the source, not the resistance.' },
        ],
      },
    ],
  },
  {
    id: 'quiz-ch7-introductory-ac-wave-basics',
    title: 'Introductory AC Wave Basics',
    unlockedBy: 'lesson-ch7-1-3',
    passingScore: 60,
    questions: [
      {
        id: 'ch7wv1',
        prompt: 'What does a wave view of an AC signal show that a single snapshot cannot?',
        choices: [
          { id: 'ch7wv1-a', label: 'The exact resistance of the load at each moment', isCorrect: false, explanation: 'Resistance is a fixed component property and does not change with time in a basic resistive circuit.' },
          { id: 'ch7wv1-b', label: 'How the current value and direction change continuously over time as the AC cycle repeats', isCorrect: true, explanation: 'Correct. A wave view shows the full time behavior — amplitude, direction changes, and periodicity — that a single-moment snapshot cannot capture.' },
          { id: 'ch7wv1-c', label: 'The peak voltage only, which is not visible in a circuit diagram', isCorrect: false, explanation: 'Peak voltage is one piece of information a wave view can show, but the wave view reveals the entire time-varying pattern, not just the peak.' },
        ],
      },
      {
        id: 'ch7wv2',
        prompt: 'What happens at the zero crossing of an AC current wave?',
        choices: [
          { id: 'ch7wv2-a', label: 'The current reaches its maximum value before reversing', isCorrect: false, explanation: 'Maximum current occurs at the peak, not the zero crossing. The zero crossing is where current changes sign.' },
          { id: 'ch7wv2-b', label: 'The current passes through zero as it reverses direction', isCorrect: true, explanation: 'Correct. At a zero crossing, the current momentarily reaches zero and then reverses its direction. This happens twice per AC cycle.' },
          { id: 'ch7wv2-c', label: 'The source turns off briefly to reset before starting the next cycle', isCorrect: false, explanation: 'AC sources do not turn off at zero crossings. The reversal is a continuous, smooth transition.' },
        ],
      },
      {
        id: 'ch7wv3',
        prompt: 'How does the wave view of a DC signal differ from an AC signal?',
        choices: [
          { id: 'ch7wv3-a', label: 'DC shows a flat horizontal line; AC shows a continuously repeating wave that crosses zero', isCorrect: true, explanation: 'Correct. DC is constant, so its wave view is flat. AC alternates, producing a repeating wave that crosses zero and reverses direction.' },
          { id: 'ch7wv3-b', label: 'DC shows a repeating wave; AC shows a flat line because it averages to zero', isCorrect: false, explanation: 'This is reversed. DC is flat (constant); AC produces the repeating wave.' },
          { id: 'ch7wv3-c', label: 'Both look identical in a wave view — only the frequency differs', isCorrect: false, explanation: 'DC and AC wave views look very different. DC is a flat line; AC is a repeating wave.' },
        ],
      },
    ],
  },
  {
    id: 'quiz-ch7-ac-dc-load-comparison-basics',
    title: 'AC/DC Load Comparison Basics',
    unlockedBy: 'lesson-ch7-2-1',
    passingScore: 60,
    questions: [
      {
        id: 'ch7lc1',
        prompt: 'How does the behavior of a resistive load differ when driven by a DC source versus an AC source?',
        choices: [
          { id: 'ch7lc1-a', label: 'Under DC: constant current and power. Under AC: current and instantaneous power change continuously with the AC cycle', isCorrect: true, explanation: 'Correct. DC provides steady, constant operation. AC causes the current and power to vary continuously as the source voltage alternates.' },
          { id: 'ch7lc1-b', label: 'The load behaves identically under both DC and AC since resistance does not change', isCorrect: false, explanation: 'Resistance is constant, but the current and power depend on the source type. DC gives constant current; AC gives alternating current.' },
          { id: 'ch7lc1-c', label: 'Under AC: constant current. Under DC: alternating current', isCorrect: false, explanation: 'This is reversed. DC produces constant current; AC produces alternating current.' },
        ],
      },
      {
        id: 'ch7lc2',
        prompt: 'A 100Ω resistor is connected first to a 9V DC source, then to a 9V AC source. What is different about the current in each case?',
        choices: [
          { id: 'ch7lc2-a', label: 'DC: 90mA constant in one direction. AC: current alternates direction with peak value of 90mA', isCorrect: true, explanation: 'Correct. With DC, I = V/R = 9/100 = 90mA, constant. With AC at 9V amplitude, peak current is also 90mA but the current direction reverses each half-cycle.' },
          { id: 'ch7lc2-b', label: 'DC: 0mA because resistors block DC. AC: 90mA constant', isCorrect: false, explanation: 'Resistors pass both DC and AC. A resistor does not block DC — that is the behavior of a capacitor at steady state.' },
          { id: 'ch7lc2-c', label: 'DC and AC produce identical current behavior through a resistor', isCorrect: false, explanation: 'The magnitude may be equal at the peak, but DC is constant and one-directional while AC alternates direction.' },
        ],
      },
      {
        id: 'ch7lc3',
        prompt: 'Why does the source type (DC vs AC) matter for a load?',
        choices: [
          { id: 'ch7lc3-a', label: 'It does not matter — any load works with any source as long as the voltage is the same', isCorrect: false, explanation: 'Source type matters significantly. Some loads are designed only for DC; others only for AC. Connecting the wrong type can cause incorrect operation or damage.' },
          { id: 'ch7lc3-b', label: 'Because loads may be designed to operate correctly under only one type of current, and the wrong type can cause malfunction', isCorrect: true, explanation: 'Correct. A DC-rated device receiving AC (or vice versa) can behave incorrectly, operate inefficiently, or be damaged. Source type is a fundamental design constraint.' },
          { id: 'ch7lc3-c', label: 'Source type only matters above 100V — at lower voltages DC and AC are interchangeable', isCorrect: false, explanation: 'Source type matters at all voltage levels. The AC vs DC distinction is about current direction, not voltage level.' },
        ],
      },
    ],
  },
  {
    id: 'quiz-ch7-resistive-ac-basics',
    title: 'Resistive AC Basics',
    unlockedBy: 'lesson-ch7-2-2',
    passingScore: 60,
    questions: [
      {
        id: 'ch7ra1',
        prompt: 'In a purely resistive AC circuit, how does the current relate to the voltage at any given moment?',
        choices: [
          { id: 'ch7ra1-a', label: 'Current lags behind voltage by 90 degrees due to the resistance', isCorrect: false, explanation: 'A 90-degree phase lag occurs with reactive components (inductors). In a purely resistive circuit, current and voltage are in phase.' },
          { id: 'ch7ra1-b', label: 'Current and voltage are in phase — they rise, fall, and cross zero together', isCorrect: true, explanation: 'Correct. A resistor follows Ohm\'s Law at every instant: I = V/R. When voltage peaks, current peaks; when voltage crosses zero, current crosses zero.' },
          { id: 'ch7ra1-c', label: 'Current leads voltage by 90 degrees due to the resistive heating effect', isCorrect: false, explanation: 'A 90-degree current lead occurs with capacitors. Resistors produce no phase shift between voltage and current.' },
        ],
      },
      {
        id: 'ch7ra2',
        prompt: 'How does the current waveform through a resistor compare to the AC source voltage waveform?',
        choices: [
          { id: 'ch7ra2-a', label: 'The current waveform is a scaled version of the voltage waveform — same shape, same timing, scaled by 1/R', isCorrect: true, explanation: 'Correct. I = V/R at every instant, so the current waveform has the same shape and timing as the voltage, just scaled down by R.' },
          { id: 'ch7ra2-b', label: 'The current waveform is inverted — it goes negative when voltage goes positive', isCorrect: false, explanation: 'Current direction follows voltage polarity in a resistor. They are in phase, not inverted.' },
          { id: 'ch7ra2-c', label: 'The current waveform is a flat DC line regardless of the AC voltage waveform shape', isCorrect: false, explanation: 'A resistor does not rectify or flatten an AC waveform. Current follows the instantaneous voltage according to Ohm\'s Law.' },
        ],
      },
      {
        id: 'ch7ra3',
        prompt: 'Compare the average current direction through a resistor driven by DC versus AC over one full AC cycle.',
        choices: [
          { id: 'ch7ra3-a', label: 'DC: net positive direction. AC: net current direction averages to zero over a full cycle', isCorrect: true, explanation: 'Correct. DC drives current in one consistent direction. Over a full AC cycle, the current is positive for one half and negative for the other, so the average is zero — though instantaneous current is not zero.' },
          { id: 'ch7ra3-b', label: 'Both DC and AC have the same average current direction over a cycle', isCorrect: false, explanation: 'DC maintains a single direction, giving a non-zero average. AC reverses direction, so the average over a full cycle is zero.' },
          { id: 'ch7ra3-c', label: 'AC has a larger average current than DC because it peaks higher each cycle', isCorrect: false, explanation: 'Averaging AC over a full cycle gives zero net current. DC has a consistent non-zero average current in one direction.' },
        ],
      },
    ],
  },
  {
    id: 'quiz-ch7-introductory-ac-reactive-preview-basics',
    title: 'Introductory AC Reactive Preview Basics',
    unlockedBy: 'lesson-ch7-2-3',
    passingScore: 60,
    questions: [
      {
        id: 'ch7rp1',
        prompt: 'How does a capacitor behave differently from a resistor when connected to an AC source?',
        choices: [
          { id: 'ch7rp1-a', label: 'A capacitor behaves identically to a resistor under AC — both limit current by the same amount', isCorrect: false, explanation: 'Capacitors and resistors behave very differently under AC. A capacitor\'s opposition to current (reactance) depends on frequency, unlike resistance which is constant.' },
          { id: 'ch7rp1-b', label: 'A capacitor introduces a phase difference between voltage and current, and its opposition to current changes with frequency', isCorrect: true, explanation: 'Correct. A capacitor\'s reactance is frequency-dependent, and it shifts the phase relationship between current and voltage — unlike a resistor, which has fixed resistance and no phase shift.' },
          { id: 'ch7rp1-c', label: 'A capacitor blocks AC completely, just as it blocks DC at steady state', isCorrect: false, explanation: 'A capacitor blocks DC at steady state, but it passes AC. The higher the frequency, the lower the opposition to AC current.' },
        ],
      },
      {
        id: 'ch7rp2',
        prompt: 'What do "frequency" and "period" describe about an AC signal?',
        choices: [
          { id: 'ch7rp2-a', label: 'Frequency is how many complete cycles occur per second; period is the duration of one complete cycle', isCorrect: true, explanation: 'Correct. Frequency (in Hz) tells you cycles per second. Period (in seconds) is the time for one full cycle. They are reciprocals of each other.' },
          { id: 'ch7rp2-b', label: 'Frequency is the peak voltage of the AC signal; period is the time to reach that peak', isCorrect: false, explanation: 'Frequency and period describe the timing and repetition rate of the AC cycle, not voltage levels.' },
          { id: 'ch7rp2-c', label: 'Frequency is the phase difference between voltage and current; period is the amplitude', isCorrect: false, explanation: 'Phase difference and amplitude are separate concepts. Frequency and period both describe the repetition rate of the AC cycle.' },
        ],
      },
      {
        id: 'ch7rp3',
        prompt: 'Why is reactive behavior (capacitors and inductors under AC) treated as a preview rather than a full topic in this chapter?',
        choices: [
          { id: 'ch7rp3-a', label: 'Because reactive components do not exist in real circuits and are purely theoretical', isCorrect: false, explanation: 'Reactive components are very real and widely used. They are treated as a preview because the full analysis requires more advanced tools than covered in this chapter.' },
          { id: 'ch7rp3-b', label: 'Because analyzing reactive AC behavior requires additional concepts (reactance, impedance, phase) that are beyond this chapter\'s scope', isCorrect: true, explanation: 'Correct. Full reactive AC analysis involves reactance, impedance, and phase relationships. This chapter introduces the idea conceptually and defers full treatment to a later stage.' },
          { id: 'ch7rp3-c', label: 'Because reactive components are only used at frequencies above 10 kHz, which are outside household AC range', isCorrect: false, explanation: 'Reactive components are used across all frequencies including 50/60 Hz household AC. The preview treatment is about analytical scope, not frequency range.' },
        ],
      },
    ],
  },
  {
    id: 'quiz-ch7-conversion-need-basics',
    title: 'Conversion-Need Basics',
    unlockedBy: 'lesson-ch7-3-1',
    passingScore: 60,
    questions: [
      {
        id: 'ch7cn1',
        prompt: 'When is a conversion stage required between a source and a load?',
        choices: [
          { id: 'ch7cn1-a', label: 'Always — every circuit needs at least one conversion stage', isCorrect: false, explanation: 'Conversion is only needed when there is a type mismatch. If source and load types already match, no conversion is necessary.' },
          { id: 'ch7cn1-b', label: 'When the current type provided by the source does not match the current type required by the load', isCorrect: true, explanation: 'Correct. A conversion stage is required precisely when there is a source-load type mismatch — for example, a DC source and an AC load.' },
          { id: 'ch7cn1-c', label: 'Only when the source voltage exceeds 50V', isCorrect: false, explanation: 'The need for conversion is determined by current type (AC or DC), not by voltage level.' },
        ],
      },
      {
        id: 'ch7cn2',
        prompt: 'What does "source-load type mismatch" mean in the context of AC and DC systems?',
        choices: [
          { id: 'ch7cn2-a', label: 'The source and load have different resistance values', isCorrect: false, explanation: 'Resistance mismatch is a different concept (source-load impedance matching). Type mismatch refers to AC vs DC incompatibility.' },
          { id: 'ch7cn2-b', label: 'The source provides one type of current (AC or DC) but the load requires the other type', isCorrect: true, explanation: 'Correct. A type mismatch occurs when the source provides AC but the load needs DC (or vice versa). Without conversion, the load cannot operate correctly.' },
          { id: 'ch7cn2-c', label: 'The source and load are manufactured by different companies', isCorrect: false, explanation: 'Type mismatch is a purely electrical concept: it refers to incompatibility between source current type and load requirement.' },
        ],
      },
      {
        id: 'ch7cn3',
        prompt: 'A USB charger takes AC from a wall outlet and charges a DC battery inside a phone. Which statement is correct?',
        choices: [
          { id: 'ch7cn3-a', label: 'No conversion is needed since the wall outlet and battery are both power sources', isCorrect: false, explanation: 'The wall outlet is an AC source; the battery requires DC for charging. A conversion stage (AC-to-DC) is essential.' },
          { id: 'ch7cn3-b', label: 'The charger contains an AC-to-DC conversion stage to match the AC source to the DC battery', isCorrect: true, explanation: 'Correct. Inside every USB charger is an AC-to-DC converter (rectifier and regulator) that transforms the AC supply into the DC voltage needed to charge the battery.' },
          { id: 'ch7cn3-c', label: 'The phone battery converts AC to DC internally, so the charger does not need a converter', isCorrect: false, explanation: 'In modern devices, the conversion circuitry is typically in the charger (the plug adapter), not inside the battery itself.' },
        ],
      },
    ],
  },
  {
    id: 'quiz-ch7-dc-to-ac-basics',
    title: 'DC-to-AC Basics',
    unlockedBy: 'lesson-ch7-3-2',
    passingScore: 60,
    questions: [
      {
        id: 'ch7da1',
        prompt: 'What does a DC-to-AC converter (inverter) do?',
        choices: [
          { id: 'ch7da1-a', label: 'It stores DC energy in a capacitor and releases it as pulses', isCorrect: false, explanation: 'Energy storage is a battery function. A DC-to-AC converter transforms the current type from direct to alternating.' },
          { id: 'ch7da1-b', label: 'It accepts DC input and produces AC output, allowing DC systems to power AC loads', isCorrect: true, explanation: 'Correct. A DC-to-AC converter (inverter) transforms direct current into alternating current, bridging DC sources and AC loads.' },
          { id: 'ch7da1-c', label: 'It increases the voltage of a DC source to a higher DC voltage', isCorrect: false, explanation: 'Increasing DC voltage is the function of a DC-DC boost converter. A DC-to-AC converter changes the current type, not just the voltage level.' },
        ],
      },
      {
        id: 'ch7da2',
        prompt: 'In circuit diagrams, a DC-to-AC converter is often shown as an abstract block. Why is this useful at an introductory level?',
        choices: [
          { id: 'ch7da2-a', label: 'Because DC-to-AC converters have no internal components — they are empty boxes', isCorrect: false, explanation: 'Real inverters contain complex circuitry. The abstract block representation is a pedagogical choice to focus on system-level function rather than internal details.' },
          { id: 'ch7da2-b', label: 'Because it allows learners to understand the system role and function without needing to know the complex internal circuitry', isCorrect: true, explanation: 'Correct. Abstract block notation focuses attention on what the converter does (DC in → AC out) rather than how it achieves this internally.' },
          { id: 'ch7da2-c', label: 'Because the internal details of a DC-to-AC converter are irrelevant at all levels of engineering', isCorrect: false, explanation: 'Internal details matter to engineers designing or selecting converters. The abstract representation is specifically useful at an introductory level to focus on system function.' },
        ],
      },
      {
        id: 'ch7da3',
        prompt: 'Which scenario requires a DC-to-AC converter?',
        choices: [
          { id: 'ch7da3-a', label: 'Charging a DC battery from a DC solar panel', isCorrect: false, explanation: 'Both source and load are DC in this scenario. No DC-to-AC conversion is needed — a DC-to-DC converter or direct connection may be used.' },
          { id: 'ch7da3-b', label: 'Powering an AC motor from a battery-based DC system', isCorrect: true, explanation: 'Correct. An AC motor requires alternating current. A battery provides direct current. A DC-to-AC converter is required to bridge this mismatch.' },
          { id: 'ch7da3-c', label: 'Running a DC LED light from a DC battery', isCorrect: false, explanation: 'Both source and load are DC. No conversion is needed for a DC-to-DC direct application.' },
        ],
      },
    ],
  },
  {
    id: 'quiz-ch7-ac-to-dc-basics',
    title: 'AC-to-DC Basics',
    unlockedBy: 'lesson-ch7-3-3',
    passingScore: 60,
    questions: [
      {
        id: 'ch7ad1b',
        prompt: 'What does an AC-to-DC converter do?',
        choices: [
          { id: 'ch7ad1b-a', label: 'It accepts AC input and produces a steady DC output', isCorrect: true, explanation: 'Correct. An AC-to-DC converter (rectifier/power supply) transforms alternating current into direct current suitable for DC loads.' },
          { id: 'ch7ad1b-b', label: 'It amplifies AC signals to higher voltages', isCorrect: false, explanation: 'Amplification is a different function. An AC-to-DC converter changes current type from alternating to direct.' },
          { id: 'ch7ad1b-c', label: 'It converts high-frequency AC to lower-frequency AC', isCorrect: false, explanation: 'Frequency conversion is a different function. AC-to-DC conversion changes the current type, not the frequency.' },
        ],
      },
      {
        id: 'ch7ad2b',
        prompt: 'Which scenario requires an AC-to-DC converter?',
        choices: [
          { id: 'ch7ad2b-a', label: 'Powering an AC light bulb from a household wall outlet', isCorrect: false, explanation: 'Both source and load are AC in this scenario. No AC-to-DC conversion is needed.' },
          { id: 'ch7ad2b-b', label: 'Charging a DC smartphone battery from a household AC outlet', isCorrect: true, explanation: 'Correct. A smartphone battery requires DC to charge. The household outlet provides AC. An AC-to-DC converter in the charger resolves this type mismatch.' },
          { id: 'ch7ad2b-c', label: 'Connecting a DC battery to a DC resistive load', isCorrect: false, explanation: 'Both source and load are DC. No conversion is needed.' },
        ],
      },
      {
        id: 'ch7ad3b',
        prompt: 'Which types of loads typically require DC power?',
        choices: [
          { id: 'ch7ad3b-a', label: 'Large AC motors and fluorescent lighting systems', isCorrect: false, explanation: 'These are AC loads. AC motors and traditional fluorescent lights operate on AC power.' },
          { id: 'ch7ad3b-b', label: 'Digital electronics, batteries, and LED circuits', isCorrect: true, explanation: 'Correct. Digital devices (computers, phones), rechargeable batteries, and most LED drivers require DC power. They typically include or depend on AC-to-DC conversion from the AC supply.' },
          { id: 'ch7ad3b-c', label: 'All loads require DC — AC is only used for transmission, not for actual devices', isCorrect: false, explanation: 'Many loads (motors, incandescent bulbs, heating elements) can operate directly on AC. Not all loads require DC.' },
        ],
      },
    ],
  },
  {
    id: 'quiz-ch7-modern-dc-to-ac-system-basics',
    title: 'Modern DC-to-AC System Basics',
    unlockedBy: 'lesson-ch7-4-1',
    passingScore: 60,
    questions: [
      {
        id: 'ch7ms1',
        prompt: 'In a solar-powered home system, what are the three main stages in the power chain?',
        choices: [
          { id: 'ch7ms1-a', label: 'AC source → DC-to-AC converter → DC load', isCorrect: false, explanation: 'Solar panels produce DC, not AC. The stages are: DC source (solar panel) → DC-to-AC converter (inverter) → AC load.' },
          { id: 'ch7ms1-b', label: 'DC source (solar panel or battery) → DC-to-AC converter (inverter) → AC load (household devices)', isCorrect: true, explanation: 'Correct. Solar panels and batteries produce DC. An inverter converts this to AC. Household appliances are the AC load.' },
          { id: 'ch7ms1-c', label: 'DC source → AC load → DC-to-AC converter', isCorrect: false, explanation: 'The converter must be placed between the source and the load, not after the load.' },
        ],
      },
      {
        id: 'ch7ms2',
        prompt: 'What is the role of an inverter in a solar energy system?',
        choices: [
          { id: 'ch7ms2-a', label: 'It stores excess solar energy when sunlight is abundant', isCorrect: false, explanation: 'Energy storage is the function of a battery, not an inverter. The inverter converts current type.' },
          { id: 'ch7ms2-b', label: 'It converts the DC output of the solar panels into AC power that household appliances can use', isCorrect: true, explanation: 'Correct. The inverter is the DC-to-AC converter that makes the DC solar output compatible with AC household loads.' },
          { id: 'ch7ms2-c', label: 'It boosts the voltage from the solar panels to a higher level for efficiency', isCorrect: false, explanation: 'Voltage boosting is a separate DC-DC function. The inverter\'s primary role is converting DC to AC.' },
        ],
      },
      {
        id: 'ch7ms3',
        prompt: 'Why is a multi-stage system (source → converter → load) necessary in a solar-to-AC-appliance setup?',
        choices: [
          { id: 'ch7ms3-a', label: 'Because solar panels produce too much power for direct connection', isCorrect: false, explanation: 'Power level is a secondary concern. The primary reason is current type: solar panels produce DC but AC appliances require AC.' },
          { id: 'ch7ms3-b', label: 'Because each stage serves a distinct function — the source generates power, the converter transforms current type, and the load consumes power', isCorrect: true, explanation: 'Correct. Each stage is necessary for a specific function. Without the conversion stage, the source type and load type are incompatible.' },
          { id: 'ch7ms3-c', label: 'Because regulations require all solar systems to include three stages for safety', isCorrect: false, explanation: 'The three-stage architecture is driven by electrical requirements (source-load type mismatch), not regulatory requirements.' },
        ],
      },
    ],
  },
  {
    id: 'quiz-ch7-source-type-matching-with-conversion',
    title: 'Source-Type Matching With Conversion',
    unlockedBy: 'lesson-ch7-4-2',
    passingScore: 60,
    questions: [
      {
        id: 'ch7sm1',
        prompt: 'Two systems connect a DC source to an AC load. System A uses a direct connection; System B inserts a DC-to-AC converter. Which is correctly designed?',
        choices: [
          { id: 'ch7sm1-a', label: 'System A — direct connection is simpler and avoids energy losses in the converter', isCorrect: false, explanation: 'Simplicity does not resolve a type mismatch. System A provides DC to an AC load — the load will not operate correctly.' },
          { id: 'ch7sm1-b', label: 'System B — the converter bridges the type mismatch so the AC load receives the alternating current it requires', isCorrect: true, explanation: 'Correct. System B is the correctly designed system. The DC-to-AC converter ensures the AC load receives compatible alternating current.' },
          { id: 'ch7sm1-c', label: 'Both are equivalent if the voltage values match', isCorrect: false, explanation: 'Matching voltage values does not fix a source-type mismatch. The current type must also be compatible.' },
        ],
      },
      {
        id: 'ch7sm2',
        prompt: 'What is the fundamental conceptual error when a DC source is connected directly to an AC load?',
        choices: [
          { id: 'ch7sm2-a', label: 'The wires are too thin for DC current to flow efficiently', isCorrect: false, explanation: 'Wire gauge is a separate concern. The fundamental error is that the source type (DC) does not match the load requirement (AC).' },
          { id: 'ch7sm2-b', label: 'The source delivers only constant, one-directional current, but the AC load requires alternating current', isCorrect: true, explanation: 'Correct. An AC load needs current that alternates direction. A DC source can only supply one-directional current. This is an irreconcilable type mismatch without conversion.' },
          { id: 'ch7sm2-c', label: 'DC sources always have lower voltage than what AC loads require', isCorrect: false, explanation: 'Voltage level is independent of the AC vs DC distinction. The mismatch is about current direction behavior, not voltage.' },
        ],
      },
      {
        id: 'ch7sm3',
        prompt: 'Is conversion an optional optimization in a DC-source-to-AC-load system, or is it a required design element?',
        choices: [
          { id: 'ch7sm3-a', label: 'Optional — the system works without it but performs slightly better with a converter', isCorrect: false, explanation: 'Without a converter, the AC load receives DC current and cannot operate correctly. Conversion is not optional — it is required.' },
          { id: 'ch7sm3-b', label: 'Required — without conversion the source and load types are incompatible and the system cannot function correctly', isCorrect: true, explanation: 'Correct. When source and load types differ, the system fundamentally cannot work without the appropriate conversion stage. It is a design requirement, not an enhancement.' },
          { id: 'ch7sm3-c', label: 'Required only at high power levels, optional at low power', isCorrect: false, explanation: 'The need for conversion is determined by type compatibility, not power level. A type mismatch requires conversion regardless of power.' },
        ],
      },
    ],
  },
  {
    id: 'quiz-ch7-chapter-7-review-quiz',
    title: 'Chapter 7 Review Quiz',
    unlockedBy: 'lesson-ch7-5-1',
    passingScore: 60,
    questions: [
      {
        id: 'ch7rv1',
        prompt: 'Which statement best summarizes the difference between AC and DC?',
        choices: [
          { id: 'ch7rv1-a', label: 'DC current alternates direction; AC current is constant', isCorrect: false, explanation: 'This is reversed. AC alternates direction; DC is constant.' },
          { id: 'ch7rv1-b', label: 'AC current continuously alternates direction; DC current maintains one constant direction', isCorrect: true, explanation: 'Correct. This is the core distinction: AC alternates, DC does not.' },
          { id: 'ch7rv1-c', label: 'AC is for high-power applications and DC is for low-power applications', isCorrect: false, explanation: 'Both AC and DC are used across a wide range of power levels. The distinction is about current direction behavior.' },
        ],
      },
      {
        id: 'ch7rv2',
        prompt: 'A system has an AC source and needs to power both an AC device and a DC device. What is the minimum number of conversion stages needed?',
        choices: [
          { id: 'ch7rv2-a', label: 'Zero — AC sources can power both types directly', isCorrect: false, explanation: 'A DC device cannot be powered directly from an AC source. An AC-to-DC conversion stage is needed for the DC device branch.' },
          { id: 'ch7rv2-b', label: 'One — only the DC device branch needs an AC-to-DC conversion stage', isCorrect: true, explanation: 'Correct. The AC device is already compatible with the AC source. Only the DC device branch requires a conversion stage.' },
          { id: 'ch7rv2-c', label: 'Two — one converter for each device to ensure isolation', isCorrect: false, explanation: 'Only mismatched branches need conversion. The AC device branch requires no converter.' },
        ],
      },
      {
        id: 'ch7rv3',
        prompt: 'Which real-world component is an example of a DC-to-AC converter used in everyday systems?',
        choices: [
          { id: 'ch7rv3-a', label: 'A USB cable', isCorrect: false, explanation: 'A USB cable is a passive conductor. It does not convert current type.' },
          { id: 'ch7rv3-b', label: 'A solar inverter used in home solar systems', isCorrect: true, explanation: 'Correct. A solar inverter converts DC from solar panels into AC suitable for household use. It is the DC-to-AC converter in a typical home solar installation.' },
          { id: 'ch7rv3-c', label: 'A wall outlet', isCorrect: false, explanation: 'A wall outlet is an AC supply point. It does not convert current type — it delivers AC directly from the power grid.' },
        ],
      },
    ],
  },
  {
    id: 'quiz-ch7-mixed-ac-dc-system-design-basics',
    title: 'Mixed AC/DC System Design Basics',
    unlockedBy: 'lesson-ch7-5-2',
    passingScore: 60,
    questions: [
      {
        id: 'ch7mx1',
        prompt: 'A system has an AC source and a DC load connected directly with no conversion stage. What is the result?',
        choices: [
          { id: 'ch7mx1-a', label: 'The system works correctly because voltage levels determine compatibility, not current type', isCorrect: false, explanation: 'Voltage level does not resolve a current type mismatch. The DC load requires steady unidirectional current that the AC source cannot provide directly.' },
          { id: 'ch7mx1-b', label: 'The DC load does not receive compatible current — the system has a source-type mismatch and will not function correctly', isCorrect: true, explanation: 'Correct. The AC source provides alternating current, but the DC load requires direct current. Without a conversion stage, the load cannot operate correctly.' },
          { id: 'ch7mx1-c', label: 'The AC source automatically adjusts its output to match the DC load requirement', isCorrect: false, explanation: 'Sources do not self-adjust current type based on load requirements. A conversion stage must be explicitly included in the design.' },
        ],
      },
      {
        id: 'ch7mx2',
        prompt: 'To fix an AC-source-to-DC-load mismatch, which component must be inserted?',
        choices: [
          { id: 'ch7mx2-a', label: 'A DC-to-AC converter', isCorrect: false, explanation: 'A DC-to-AC converter converts in the wrong direction. To convert AC to DC, an AC-to-DC converter is needed.' },
          { id: 'ch7mx2-b', label: 'An AC-to-DC converter placed between the source and the load', isCorrect: true, explanation: 'Correct. An AC-to-DC converter accepts alternating current from the AC source and delivers steady direct current to the DC load.' },
          { id: 'ch7mx2-c', label: 'A resistor in series to smooth the AC signal into DC', isCorrect: false, explanation: 'A resistor limits current but does not change its type. Adding a series resistor does not convert AC to DC.' },
        ],
      },
      {
        id: 'ch7mx3',
        prompt: 'When is conversion "required for correct operation" rather than just "helpful"?',
        choices: [
          { id: 'ch7mx3-a', label: 'Whenever the source voltage is above 12V', isCorrect: false, explanation: 'The need for conversion depends on current type compatibility, not voltage level.' },
          { id: 'ch7mx3-b', label: 'Whenever source type and load type do not match — the system fundamentally cannot work correctly without it', isCorrect: true, explanation: 'Correct. When source and load types are incompatible (e.g., AC source and DC load), conversion is not optional — it is a requirement for the system to work at all.' },
          { id: 'ch7mx3-c', label: 'Only in industrial systems, not in consumer devices', isCorrect: false, explanation: 'Type mismatch can occur in any system at any scale. Consumer devices (phone chargers, laptop adapters) routinely include conversion stages.' },
        ],
      },
    ],
  },
];

export default quizzes;
