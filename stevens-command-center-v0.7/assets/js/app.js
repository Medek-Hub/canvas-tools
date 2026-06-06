(function () {
  "use strict";

  const $ = (id) => document.getElementById(id);

  const icons = {
    monitor: '<svg class="icon" viewBox="0 0 24 24"><rect x="3" y="4" width="18" height="13" rx="2"></rect><path d="M8 21h8"></path><path d="M12 17v4"></path></svg>',
    users: '<svg class="icon" viewBox="0 0 24 24"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M22 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path></svg>',
    calendar: '<svg class="icon" viewBox="0 0 24 24"><path d="M8 2v4"></path><path d="M16 2v4"></path><rect x="3" y="4" width="18" height="18" rx="2"></rect><path d="M3 10h18"></path></svg>',
    printer: '<svg class="icon" viewBox="0 0 24 24"><path d="M6 9V2h12v7"></path><path d="M6 18H4a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2"></path><path d="M6 14h12v8H6z"></path></svg>',
    gamepad: '<svg class="icon" viewBox="0 0 24 24"><path d="M6 12h4"></path><path d="M8 10v4"></path><path d="M15 13h.01"></path><path d="M18 11h.01"></path><path d="M17.3 6H6.7A4.7 4.7 0 0 0 2 10.7v3.6A3.7 3.7 0 0 0 5.7 18c1.1 0 1.9-.5 2.5-1.3l1-1.4h5.6l1 1.4A3 3 0 0 0 18.3 18a3.7 3.7 0 0 0 3.7-3.7v-3.6A4.7 4.7 0 0 0 17.3 6Z"></path></svg>',
    shuffle: '<svg class="icon" viewBox="0 0 24 24"><path d="M16 3h5v5"></path><path d="M4 20 21 3"></path><path d="M21 16v5h-5"></path><path d="M15 15l6 6"></path><path d="M4 4l5 5"></path></svg>',
    book: '<svg class="icon" viewBox="0 0 24 24"><path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"></path><path d="M4 4.5A2.5 2.5 0 0 1 6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5z"></path></svg>',
    clipboard: '<svg class="icon" viewBox="0 0 24 24"><rect x="8" y="2" width="8" height="4" rx="1"></rect><path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"></path><path d="M8 12h8"></path><path d="M8 16h8"></path></svg>',
    volume: '<svg class="icon" viewBox="0 0 24 24"><path d="M11 5 6 9H2v6h4l5 4V5Z"></path><path d="M15.5 8.5a5 5 0 0 1 0 7"></path><path d="M19 5a10 10 0 0 1 0 14"></path></svg>',
    volumeOff: '<svg class="icon" viewBox="0 0 24 24"><path d="M11 5 6 9H2v6h4l5 4V5Z"></path><path d="M22 9 16 15"></path><path d="m16 9 6 6"></path></svg>',
    expand: '<svg class="icon" viewBox="0 0 24 24"><path d="M8 3H3v5"></path><path d="M16 3h5v5"></path><path d="M21 16v5h-5"></path><path d="M3 16v5h5"></path></svg>',
    lightbulb: '<svg class="icon" viewBox="0 0 24 24"><path d="M9 18h6"></path><path d="M10 22h4"></path><path d="M12 2a7 7 0 0 0-4 12.7c.7.5 1 1.2 1 2.1V17h6v-.2c0-.9.4-1.6 1-2.1A7 7 0 0 0 12 2Z"></path></svg>',
    play: '<svg class="icon" viewBox="0 0 24 24"><path d="m8 5 11 7-11 7V5Z"></path></svg>',
    pause: '<svg class="icon" viewBox="0 0 24 24"><path d="M8 5v14"></path><path d="M16 5v14"></path></svg>',
    reset: '<svg class="icon" viewBox="0 0 24 24"><path d="M3 12a9 9 0 1 0 3-6.7"></path><path d="M3 3v6h6"></path></svg>',
    left: '<svg class="icon" viewBox="0 0 24 24"><path d="m15 18-6-6 6-6"></path></svg>',
    right: '<svg class="icon" viewBox="0 0 24 24"><path d="m9 18 6-6-6-6"></path></svg>',
    check: '<svg class="icon" viewBox="0 0 24 24"><path d="M20 6 9 17l-5-5"></path></svg>',
    target: '<svg class="icon" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"></circle><circle cx="12" cy="12" r="6"></circle><circle cx="12" cy="12" r="2"></circle></svg>',
    cap: '<svg class="icon" viewBox="0 0 24 24"><path d="m22 10-10-5-10 5 10 5 10-5Z"></path><path d="M6 12v5c3 2 9 2 12 0v-5"></path></svg>',
    stethoscope: '<svg class="icon" viewBox="0 0 24 24"><path d="M6 3v4a6 6 0 0 0 12 0V3"></path><path d="M12 13v3a4 4 0 0 0 8 0v-2"></path><circle cx="20" cy="12" r="2"></circle></svg>',
    message: '<svg class="icon" viewBox="0 0 24 24"><path d="M21 15a4 4 0 0 1-4 4H7l-4 4V7a4 4 0 0 1 4-4h10a4 4 0 0 1 4 4Z"></path></svg>',
    sparkle: '<svg class="icon" viewBox="0 0 24 24"><path d="M12 3 9.7 8.3 4 10l5.7 1.7L12 17l2.3-5.3L20 10l-5.7-1.7L12 3Z"></path><path d="M5 17l-1 2-2 1 2 1 1 2 1-2 2-1-2-1-1-2Z"></path></svg>',
    info: '<svg class="icon" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"></circle><path d="M12 16v-4"></path><path d="M12 8h.01"></path></svg>',
    flame: '<svg class="icon" viewBox="0 0 24 24"><path d="M12 22a7 7 0 0 0 7-7c0-4-3-6-5-9-.5 2-2 3-3.5 4.5C9 8 8 6 8 4c-2 2-4 5-4 9a8 8 0 0 0 8 9Z"></path></svg>',
    clock: '<svg class="icon" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"></circle><path d="M12 6v6l4 2"></path></svg>',
    download: '<svg class="icon" viewBox="0 0 24 24"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><path d="M7 10l5 5 5-5"></path><path d="M12 15V3"></path></svg>',
    route: '<svg class="icon" viewBox="0 0 24 24"><circle cx="6" cy="19" r="3"></circle><circle cx="18" cy="5" r="3"></circle><path d="M8.6 17.4 15.4 6.6"></path></svg>',
    star: '<svg class="icon" viewBox="0 0 24 24"><path d="m12 2 3 6 6.5.9-4.7 4.6 1.1 6.5L12 17l-5.9 3 1.1-6.5L2.5 8.9 9 8l3-6Z"></path></svg>',
    heart: '<svg class="icon" viewBox="0 0 24 24"><path d="M20.8 4.6a5.5 5.5 0 0 0-7.8 0L12 5.6l-1-1a5.5 5.5 0 0 0-7.8 7.8l1 1L12 21l7.8-7.6 1-1a5.5 5.5 0 0 0 0-7.8Z"></path></svg>',
    student: '<svg class="icon" viewBox="0 0 24 24"><path d="m22 10-10-5-10 5 10 5 10-5Z"></path><path d="M6 12v5c3 2 9 2 12 0v-5"></path><path d="M22 10v6"></path></svg>',
    pen: '<svg class="icon" viewBox="0 0 24 24"><path d="M12 20h9"></path><path d="M16.5 3.5a2.1 2.1 0 0 1 3 3L7 19l-4 1 1-4Z"></path></svg>',
    lungs: '<svg class="icon" viewBox="0 0 24 24"><path d="M12 3v8"></path><path d="M12 11c-3-5-7-5-8-1v8c0 2 2 3 4 2 3-1 4-4 4-9Z"></path><path d="M12 11c3-5 7-5 8-1v8c0 2-2 3-4 2-3-1-4-4-4-9Z"></path></svg>',
    dna: '<svg class="icon" viewBox="0 0 24 24"><path d="M7 3c6 3 10 8 10 18"></path><path d="M17 3C11 6 7 11 7 21"></path><path d="M8 7h8"></path><path d="M7 12h10"></path><path d="M8 17h8"></path></svg>',
    tree: '<svg class="icon" viewBox="0 0 24 24"><path d="M12 22V8"></path><path d="M12 8 5 15"></path><path d="M12 8l7 7"></path><path d="M5 15h14"></path><path d="M8 5a4 4 0 0 1 8 0c0 2-2 3-4 3S8 7 8 5Z"></path></svg>',
    ticket: '<svg class="icon" viewBox="0 0 24 24"><path d="M3 9a3 3 0 1 0 0 6v4h18v-4a3 3 0 1 0 0-6V5H3Z"></path><path d="M13 5v14"></path></svg>',
    bolt: '<svg class="icon" viewBox="0 0 24 24"><path d="M13 2 3 14h8l-1 8 11-14h-8l1-6Z"></path></svg>',
    syringe: '<svg class="icon" viewBox="0 0 24 24"><path d="m18 2 4 4"></path><path d="m17 7 3-3"></path><path d="M19 9 8.7 19.3a2.4 2.4 0 0 1-3.4 0l-.6-.6a2.4 2.4 0 0 1 0-3.4L15 5Z"></path><path d="m9 11 4 4"></path><path d="m5 19-3 3"></path></svg>',
    ambulance: '<svg class="icon" viewBox="0 0 24 24"><path d="M10 17H5a2 2 0 0 1-2-2V6h11v11"></path><path d="M14 9h4l3 4v2a2 2 0 0 1-2 2h-1"></path><circle cx="7" cy="17" r="2"></circle><circle cx="17" cy="17" r="2"></circle><path d="M7 9h4"></path><path d="M9 7v4"></path></svg>',
    boss: '<svg class="icon" viewBox="0 0 24 24"><rect x="4" y="6" width="16" height="12" rx="3"></rect><path d="M8 10h.01"></path><path d="M16 10h.01"></path><path d="M9 15h6"></path><path d="M12 6V3"></path><path d="M6 18v3"></path><path d="M18 18v3"></path></svg>',
    coffee: '<svg class="icon" viewBox="0 0 24 24"><path d="M17 8h1a4 4 0 0 1 0 8h-1"></path><path d="M3 8h14v6a6 6 0 0 1-6 6H9a6 6 0 0 1-6-6Z"></path><path d="M6 2v3"></path><path d="M10 2v3"></path><path d="M14 2v3"></path></svg>'
  };

  const flows = {
    1: [
      {
        minutes: 10,
        type: "task",
        title: "Entry Ticket + Receptor Warm-Up",
        sub: "Physical writing before talking",
        icon: "pen",
        handout: "entry",
        task: [
          "Students write one question from respiratory/allergic readings.",
          "Underline one receptor term: beta-2, alpha-1, beta-1, H1, or muscarinic.",
          "Squads share one uncertainty Steven can use to frame the day."
        ],
        say: "Before we name a medication, write what body system you think is failing. Then write one receptor that might matter.",
        kai: "Do not answer every question now. Capture patterns and use them to anchor later activities.",
        stuck: [
          "Ask: Is this airway, breathing, circulation, or immune response?",
          "Have them circle one word they are least confident about."
        ],
        materials: ["Entry Ticket cards", "Pencils", "Receptor mini-card set"],
        targets: ["Activate prior knowledge", "Surface confusion early", "Start with paper-first thinking"]
      },
      {
        minutes: 20,
        type: "task",
        title: "Asthma or Anaphylaxis? Differentiation Challenge",
        sub: "Respiratory distress without obvious clues",
        icon: "lungs",
        handout: "diff",
        task: [
          "Squads analyze short patient cards.",
          "Decide: asthma, anaphylaxis risk, mixed presentation, or not enough evidence.",
          "Write the single clue that sealed the decision."
        ],
        say: "Okay team, do not let wheezing trick you. Tell me what finding pushes you toward asthma, and what finding pushes you toward anaphylaxis.",
        kai: "Listen for students anchoring on wheeze. Redirect to skin, exposure, airway swelling, blood pressure, GI symptoms, and rapid onset.",
        stuck: [
          "Ask: What other body systems are involved?",
          "Ask: What would kill the patient first?",
          "Offer the hint card only after 3 minutes."
        ],
        materials: ["Differentiation handout", "Scenario cards", "Hint cards"],
        targets: ["Differentiate asthma vs anaphylaxis", "Avoid single-symptom anchoring", "Justify medication selection"]
      },
      {
        minutes: 10,
        type: "break",
        title: "Reset Break",
        sub: "Large center timer + calm sound",
        icon: "coffee",
        handout: "break",
        task: ["Students reset and move.", "Steven reviews next activity."],
        say: "Break started. Be back before the chime so we can run the medication map.",
        kai: "Use the break to check materials for the next table activity.",
        stuck: ["None. Let them reset."],
        materials: ["Timer visible"],
        targets: ["Adult learner reset"]
      },
      {
        minutes: 25,
        type: "task",
        title: "Medication Mechanism Map",
        sub: "Drug action to physiology to patient outcome",
        icon: "dna",
        handout: "map",
        task: [
          "Squads place medication cards next to receptor/action cards.",
          "Connect to the expected patient outcome.",
          "Add one predictable adverse effect."
        ],
        say: "You are not matching trivia. You are building a chain: medication, receptor or action, physiology change, patient outcome.",
        kai: "Keep them writing. Physical card placement plus handwritten reasoning is the goal.",
        stuck: [
          "Ask: What receptor does this touch?",
          "Ask: What should improve if it works?",
          "Ask: What side effect makes sense from the same mechanism?"
        ],
        materials: ["Medication cards", "Receptor cards", "Outcome cards", "Glue/tape optional"],
        targets: ["Link mechanism to physiology", "Explain adverse effects logically", "Reassess after medication"]
      },
      {
        minutes: 25,
        type: "task",
        title: "Respiratory Medication Family Tree",
        sub: "Keep assignment look consistent",
        icon: "tree",
        handout: "family",
        task: [
          "Students complete the respiratory/allergic family preview.",
          "Compare albuterol, ipratropium, epinephrine, corticosteroids, magnesium, diphenhydramine.",
          "Write one reassessment priority for each family."
        ],
        say: "Learn the family first. Once you know the family pattern, each drug becomes easier to understand.",
        kai: "This matches the already printed Medication Family Tree assignment. Emphasize comparison, not copying drug cards.",
        stuck: [
          "Ask: Which drugs open tubes?",
          "Ask: Which drug rescues shock risk?",
          "Ask: Which drugs are adjuncts, not first rescue?"
        ],
        materials: ["Medication Family Tree worksheet", "Drug card reference", "Colored pencils"],
        targets: ["Organize meds into families", "Compare risks and indications", "Build assignment routine"]
      },
      {
        minutes: 10,
        type: "task",
        title: "Exit Ticket: Think DRUGS",
        sub: "Physical recall before dismissal",
        icon: "ticket",
        handout: "exit",
        task: [
          "Students complete a DRUGS exit ticket.",
          "Choose one medication and link it to patient physiology.",
          "Submit before leaving."
        ],
        say: "Before you leave, show me the medication as a physiology tool. What did it change inside the patient?",
        kai: "Use this to identify tomorrow's review point. Do not grade deeply in the moment.",
        stuck: ["Give them albuterol or epinephrine as the default medication."],
        materials: ["DRUGS Exit Ticket"],
        targets: ["Close the loop", "Identify weak points", "Prepare for case day"]
      }
    ],
    2: [
      {
        minutes: 10,
        type: "task",
        title: "Rapid Recall: Same Disease? Different Failure?",
        sub: "Asthma vs anaphylaxis opener",
        icon: "bolt",
        handout: "recall",
        task: [
          "Students stand with a partner.",
          "Each pair names one asthma clue and one anaphylaxis clue.",
          "Pairs trade cards and challenge each other."
        ],
        say: "Today we apply it. Same shortness of breath, different failure inside the patient.",
        kai: "Start kinetic. Make them stand and speak before sitting into cases.",
        stuck: ["Write two columns on the board: Airway resistance vs systemic allergic response."],
        materials: ["Rapid recall cards", "Board/markers"],
        targets: ["Warm up clinical reasoning", "Prime differentiation"]
      },
      {
        minutes: 25,
        type: "task",
        title: "Skill Lab: Neb Setup + Epi Route Comparison",
        sub: "Hands on medication decision points",
        icon: "syringe",
        handout: "lab",
        task: [
          "Set up nebulized medication equipment.",
          "Compare IM, IV/IO, nebulized, and adjunct medication routes.",
          "Document reassessment findings after simulated medication."
        ],
        say: "The route is part of the reasoning. What route gets the medication where it needs to go, fast enough to matter?",
        kai: "Keep route comparison tied to physiology and urgency. Avoid drifting into protocol-only teaching.",
        stuck: ["Ask: Is this rescue or support?", "Ask: Where does the medication need to act?"],
        materials: ["Neb setup kit", "Epi route cards", "Reassessment sheet"],
        targets: ["Practice setup", "Compare route logic", "Document reassessment"]
      },
      {
        minutes: 10,
        type: "break",
        title: "Reset Break",
        sub: "Large center timer + pharm flag animation",
        icon: "coffee",
        handout: "break",
        task: ["Students reset and move.", "Steven checks scenario cards and boss battle game."],
        say: "Break started. When the timer ends, we run the case challenge.",
        kai: "Cue the next screen before students return.",
        stuck: ["None."],
        materials: ["Timer visible"],
        targets: ["Reset attention"]
      },
      {
        minutes: 30,
        type: "task",
        title: "Scenario Reasoning Sheet",
        sub: "Case application: asthma, anaphylaxis, or mixed?",
        icon: "ambulance",
        handout: "scenario",
        task: [
          "Squads complete one full case sheet.",
          "Choose medication priority and reassessment plan.",
          "Defend why not the other medication first."
        ],
        say: "Your answer is not complete until you explain why your medication comes first and what reassessment proves it helped.",
        kai: "Push them to defend against tempting wrong choices: albuterol-only, Benadryl-first, steroid-first, waiting for hives.",
        stuck: ["Ask: What is the most time-sensitive failure?", "Ask: What finding would change your plan?"],
        materials: ["Scenario Reasoning Sheet", "Vital sign strips", "Breath sound audio optional"],
        targets: ["Select medication priority", "Defend reassessment", "Differentiate look-alike presentations"]
      },
      {
        minutes: 20,
        type: "game",
        title: "Boss Battle: The Wheeze Is Not Enough",
        sub: "Whole-class collaborative game",
        icon: "boss",
        handout: "boss",
        task: [
          "Whole class must defeat 4 case stages.",
          "Each squad gets one vote and must defend with physiology.",
          "Steven records topics needing review."
        ],
        say: "This is the boss battle. You win only if the class can explain the why, not just pick the drug.",
        kai: "Use the Clear Touch for energy and metrics. Keep the paper score sheet active so students still write.",
        stuck: ["Use a 50/50 hint.", "Ask one squad to argue the opposite choice."],
        materials: ["Boss Battle game screen", "Score sheet", "Markers"],
        targets: ["Team collaboration", "High-energy review", "Collect weak points"]
      },
      {
        minutes: 10,
        type: "task",
        title: "Debrief + Exit Reflection",
        sub: "What needs review before Week 3?",
        icon: "message",
        handout: "debrief",
        task: [
          "Students write one thing they can now explain and one thing still unclear.",
          "Steven completes instructor debrief for Mauro."
        ],
        say: "Write what changed in your thinking this week. Not what drug you memorized - what clinical decision feels clearer?",
        kai: "Capture patterns for Mauro. This is the bridge into future refinements and new instructor training.",
        stuck: ["Prompt: I used to think ___, now I think ___."],
        materials: ["Exit reflection", "Instructor debrief panel"],
        targets: ["Synthesize", "Send feedback", "Improve the next group"]
      }
    ]
  };

  const handoutOrder = ["entry", "diff", "map", "family", "exit", "recall", "lab", "scenario", "boss", "debrief"];

  const handoutNames = {
    entry: "Entry Ticket - Receptor Warm-Up",
    diff: "Differentiation Challenge Scenario Card",
    map: "Medication Mechanism Map",
    family: "Medication Family Tree Assignment",
    exit: "DRUGS Exit Ticket",
    recall: "Rapid Recall Cards",
    lab: "Skill Lab Route Comparison",
    scenario: "Scenario Reasoning Sheet",
    boss: "Boss Battle Score Sheet",
    debrief: "Exit Reflection + Debrief",
    break: "Break Screen"
  };

  const classStartMinutes = (9 * 60) + 30;
  const classEndMinutes = 12 * 60;
  const layoutTuningKey = "stevens-command-center-layout-tuning-v0.7";
  const layoutControls = [
    { key: "sidebarWidth", label: "Sidebar", variable: "--sidebar-width", min: 200, max: 280, defaultValue: 224 },
    { key: "logoBox", label: "Logo box", variable: "--logo-box", min: 78, max: 150, defaultValue: 112 },
    { key: "logoImage", label: "Logo image", variable: "--logo-img", min: 74, max: 146, defaultValue: 108 },
    { key: "previewWidth", label: "Preview", variable: "--preview-column-width", min: 260, max: 360, defaultValue: 302 },
    { key: "rightRail", label: "Right rail", variable: "--right-column-width", min: 285, max: 380, defaultValue: 330 },
    { key: "timerButtons", label: "Timer buttons", variable: "--timer-controls-width", min: 118, max: 210, defaultValue: 154 },
    { key: "appGap", label: "Main gap", variable: "--app-gap", min: 8, max: 28, defaultValue: 18 }
  ];

  const resources = [
    ["Clinical Reference", "NCBI Bookshelf: Anaphylaxis", "https://www.ncbi.nlm.nih.gov/books/NBK482124/"],
    ["Clinical Reference", "NCBI Bookshelf: Albuterol", "https://www.ncbi.nlm.nih.gov/books/NBK482272/"],
    ["Instructor Search", "YouTube search: EMS anaphylaxis epinephrine education", "https://www.youtube.com/results?search_query=EMS+anaphylaxis+epinephrine+education"],
    ["Instructor Search", "YouTube search: beta-2 agonist bronchodilation", "https://www.youtube.com/results?search_query=beta+2+agonist+mechanism+bronchodilation"],
    ["Teaching Ideas", "MERLOT health sciences learning materials", "https://www.merlot.org/merlot/materials.htm?category=2601"],
    ["Research Search", "PubMed search: prehospital anaphylaxis epinephrine", "https://pubmed.ncbi.nlm.nih.gov/?term=prehospital+anaphylaxis+epinephrine"]
  ];

  const energyModes = {
    green: {
      label: "Good",
      summary: "Keep the momentum going.",
      helpTitle: "Momentum",
      help: "Stay on plan. Keep squads writing and let the timer carry pace."
    },
    yellow: {
      label: "Watch",
      summary: "Energy is drifting.",
      helpTitle: "Adjust",
      help: "Shorten the task or ask one squad to defend a finding."
    },
    red: {
      label: "Reset",
      summary: "Pause and recover the room.",
      helpTitle: "Recover",
      help: "Pause, name the confusion, then use a reset pivot."
    }
  };

  const gameStages = [
    {
      mode: "A - Absorb",
      title: "Neb Route Lock-In",
      prompt: "A bronchospasm patient can move air and follow commands. Which medication-route pairing gets the rescue drug to the target tissue fastest?",
      choices: [
        ["Nebulized albuterol to reach airway beta-2 receptors", true, "route and beta-2 target"],
        ["Oral diphenhydramine because it is easy to give", false, "route mismatch"],
        ["Steroid first because inflammation exists", false, "delayed onset"],
        ["Wait for transport before treatment", false, "missed urgency"]
      ],
      points: 180,
      feedback: "Correct route logic: inhaled bronchodilator, target airway smooth muscle, reassess work of breathing."
    },
    {
      mode: "D - Distribute",
      title: "Shock Risk Split",
      prompt: "Food exposure, wheeze, throat tightness, swelling lips, BP 86/50. Which priority best protects airway and perfusion?",
      choices: [
        ["IM epinephrine because this is systemic allergic shock risk", true, "epinephrine priority"],
        ["Albuterol only because the patient is wheezing", false, "single-symptom anchoring"],
        ["Diphenhydramine first to stop hives", false, "adjunct-first error"],
        ["Wait until rash is visible", false, "delayed anaphylaxis recognition"]
      ],
      points: 220,
      feedback: "Wheeze is not enough. Systemic findings and perfusion risk make epinephrine the first rescue move."
    },
    {
      mode: "M - Mechanism",
      title: "Receptor Chain",
      prompt: "After albuterol, the patient is tremulous and tachycardic but moving air better. Which explanation connects effect and side effect?",
      choices: [
        ["Beta activity can improve bronchodilation and also increase heart rate/tremor", true, "mechanism and adverse effect"],
        ["The medication failed because heart rate increased", false, "reassessment interpretation"],
        ["The patient must be allergic to albuterol", false, "unsupported adverse effect"],
        ["Only oxygen can explain the improvement", false, "missed medication action"]
      ],
      points: 220,
      feedback: "Mechanism thinking links expected improvement and predictable side effects instead of treating them as random facts."
    },
    {
      mode: "E - Evaluate",
      title: "Reassessment Gate",
      prompt: "Five minutes after treatment, which reassessment set best tells the squad whether therapy changed the patient problem?",
      choices: [
        ["Work of breathing, breath sounds, SpO2 trend, BP, mental status", true, "reassessment bundle"],
        ["Only pain score", false, "wrong reassessment focus"],
        ["Only medication name and dose", false, "documentation without evaluation"],
        ["Only whether students feel confident", false, "confidence is not patient data"]
      ],
      points: 200,
      feedback: "The win condition is patient response: breathing, perfusion, oxygenation, mentation, and trend."
    },
    {
      mode: "Boss Battle",
      title: "The Wheeze Is Not Enough",
      prompt: "Final case: no hives, severe wheeze, voice change, hypotension after a sting. Choose the class decision and defend why.",
      choices: [
        ["Treat as anaphylaxis risk with epinephrine and reassess airway/perfusion", true, "boss differentiation"],
        ["Treat as asthma only because hives are absent", false, "requires hives misconception"],
        ["Give antihistamine first because exposure caused it", false, "adjunct-first error"],
        ["Delay medication until the patient cannot speak", false, "unsafe delay"]
      ],
      points: 400,
      feedback: "Boss cleared when the class explains systemic allergic risk without waiting for classic skin findings."
    }
  ];

  const state = {
    group: "A",
    day: 1,
    tab: "instructor",
    activityIndex: 1,
    selectedSheet: "diff",
    running: false,
    timerId: null,
    totalSeconds: 20 * 60,
    remainingSeconds: (9 * 60) + 34,
    sound: true,
    roomEnergy: "green",
    agendaOpen: false,
    usedPrompts: new Set(),
    debriefText: "",
    game: {
      stageIndex: 0,
      activeSquad: "Alpha",
      squads: { Alpha: 0, Bravo: 0, Charlie: 0, Delta: 0 },
      bossHealth: 100,
      confidence: 3,
      locked: false,
      selectedChoice: null,
      lastCorrect: null,
      feedback: "Choose a squad, set confidence, and tap a large answer tile. Metrics are captured automatically.",
      metrics: [],
      stageStartedAt: Date.now()
    }
  };

  function hydrateIcons(root) {
    root.querySelectorAll("[data-icon]").forEach((node) => {
      const name = node.getAttribute("data-icon");
      node.innerHTML = icons[name] || "";
    });
  }

  function escapeHTML(value) {
    return String(value)
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;")
      .replace(/'/g, "&#039;");
  }

  function currentFlow() {
    return flows[state.day];
  }

  function currentActivity() {
    const dayFlow = currentFlow();
    if (state.activityIndex >= dayFlow.length) {
      state.activityIndex = dayFlow.length - 1;
    }
    return dayFlow[state.activityIndex];
  }

  function dayLabels() {
    return state.group === "A" ? ["Mon", "Tue"] : ["Wed", "Thu"];
  }

  function groupLabel() {
    return state.group === "A" ? "Mon-Tue" : "Wed-Thu";
  }

  function formatTime(seconds) {
    const safe = Math.max(0, seconds);
    const mins = String(Math.floor(safe / 60)).padStart(2, "0");
    const secs = String(safe % 60).padStart(2, "0");
    return `${mins}:${secs}`;
  }

  function formatClockTime(totalMinutes) {
    const normalized = ((totalMinutes % (24 * 60)) + (24 * 60)) % (24 * 60);
    const hour24 = Math.floor(normalized / 60);
    const mins = normalized % 60;
    const suffix = hour24 >= 12 ? "PM" : "AM";
    const hour12 = hour24 % 12 || 12;
    return `${hour12}:${String(mins).padStart(2, "0")} ${suffix}`;
  }

  function scheduleEntries() {
    let elapsed = 0;
    return currentFlow().map((item, index) => {
      const start = classStartMinutes + elapsed;
      const end = start + item.minutes;
      elapsed += item.minutes;
      return {
        item,
        index,
        start,
        end,
        startLabel: formatClockTime(start),
        endLabel: formatClockTime(end),
        label: item.type === "break" ? `10 min break at ${formatClockTime(start)}` : formatClockTime(start)
      };
    });
  }

  function syncTimerDisplay() {
    document.querySelectorAll("[data-timer]").forEach((node) => {
      node.textContent = formatTime(state.remainingSeconds);
    });
  }

  function setTimer(seconds, remaining) {
    state.totalSeconds = seconds;
    state.remainingSeconds = typeof remaining === "number" ? remaining : seconds;
    syncTimerDisplay();
  }

  function updateChrome() {
    const labels = dayLabels();
    $("subtitle").textContent = `Week 2: Respiratory + Anaphylaxis | Group ${state.group} (${groupLabel()})`;
    $("dayOneLabel").textContent = labels[0];
    $("dayTwoLabel").textContent = labels[1];

    document.querySelectorAll("[data-group]").forEach((button) => {
      button.classList.toggle("active", button.dataset.group === state.group);
    });
    document.querySelectorAll("[data-day]").forEach((button) => {
      button.classList.toggle("active", Number(button.dataset.day) === state.day);
      button.classList.toggle("teal", Number(button.dataset.day) === 1);
    });
    document.querySelectorAll("[data-tab]").forEach((button) => {
      if (button.classList.contains("nav-button")) {
        button.classList.toggle("active", button.dataset.tab === state.tab);
      }
    });

    const soundButton = $("soundButton");
    if (soundButton) {
      soundButton.innerHTML = `<span data-icon="${state.sound ? "volume" : "volumeOff"}"></span>${state.sound ? "Sound On" : "Sound Off"}`;
      hydrateIcons(soundButton);
    }
  }

  function render() {
    updateChrome();
    const content = $("content");
    content.className = `content view-${state.tab}`;
    if (state.tab === "instructor") {
      content.innerHTML = renderInstructor();
    } else if (state.tab === "student") {
      content.innerHTML = renderStudent();
    } else if (state.tab === "prep") {
      content.innerHTML = renderPrep();
    } else if (state.tab === "games") {
      content.innerHTML = renderGames();
    } else if (state.tab === "pivot") {
      content.innerHTML = renderPivot();
    } else if (state.tab === "resources") {
      content.innerHTML = renderResources();
    } else if (state.tab === "debrief") {
      content.innerHTML = renderDebrief();
    }
    if (state.agendaOpen) {
      content.insertAdjacentHTML("beforeend", fullAgendaHTML());
    }
    hydrateIcons(content);
    syncTimerDisplay();
  }

  function listItems(items, withChecks) {
    const cls = withChecks ? ' class="check-list"' : "";
    return `<ul${cls}>${items.map((item) => {
      if (withChecks) {
        return `<li><span class="check-dot">&#10003;</span><span>${escapeHTML(item)}</span></li>`;
      }
      return `<li>${escapeHTML(item)}</li>`;
    }).join("")}</ul>`;
  }

  function renderInstructor() {
    const activity = currentActivity();
    const key = `${state.day}-${state.activityIndex}`;
    const used = state.usedPrompts.has(key);
    return `
      <div class="dashboard-grid">
        <section class="left-stack" aria-label="Instructor command center">
          <div class="top-grid">
            <article class="command-card activity-card">
              <div class="activity-pane">
                <p class="eyebrow">Current Activity</p>
                <div class="activity-head">
                  <div class="activity-icon"><span data-icon="${activity.icon}"></span></div>
                  <div>
                    <h2>${escapeHTML(activity.title)}</h2>
                    <p>${escapeHTML(activity.sub)}</p>
                  </div>
                </div>

                <div class="timer-card">
                  <div class="timer-face">
                    <div class="clock-ring" aria-hidden="true"></div>
                    <div>
                      <div class="timer-value" data-timer>00:00</div>
                      <div class="timer-label">TIME REMAINING</div>
                    </div>
                  </div>
                  <div class="timer-controls">
                    <button class="btn btn-teal" type="button" data-action="${state.running ? "timer-pause" : "timer-start"}"><span data-icon="${state.running ? "pause" : "play"}"></span>${state.running ? "Pause Timer" : "Start Timer"}</button>
                    <button class="btn btn-ghost" type="button" data-action="timer-reset"><span data-icon="reset"></span>Reset Timer</button>
                  </div>
                </div>

                <div class="task-panel">
                  <div class="panel-strip"><p class="panel-kicker">Current Task</p></div>
                  <div class="task-body">
                    <p>Students are working in teams to analyze the scenario and determine: <strong>${escapeHTML(activity.title.replace("Asthma or Anaphylaxis? ", ""))}</strong></p>
                    ${listItems(activity.task, false)}
                  </div>
                </div>

                <div class="coach-grid">
                  <article class="coach-card">
                    <h3><span data-icon="message"></span> What Steven Says Next</h3>
                    <p>"${escapeHTML(activity.say)}"</p>
                    <button class="btn ${used ? "btn-teal" : "btn-ghost"}" type="button" data-action="mark-used">${used ? '<span data-icon="check"></span>Marked as Used' : '<span data-icon="check"></span>Mark as Used'}</button>
                  </article>
                  <article class="coach-card kai">
                    <h3><span data-icon="sparkle"></span> Kai Coach Tip</h3>
                    <p>${escapeHTML(activity.kai)}</p>
                  </article>
                  <article class="coach-card stuck">
                    <div>
                      <h3><span data-icon="lightbulb"></span> If Students Get Stuck</h3>
                      ${listItems(activity.stuck, false)}
                    </div>
                    <button class="btn btn-warning" type="button" data-action="show-hint"><span data-icon="lightbulb"></span>Show Hint Prompt</button>
                  </article>
                </div>
              </div>
            </article>

            <aside class="command-card preview-card" aria-label="Handout preview">
              <div class="preview-pane">
                <div class="preview-title">
                  <p class="panel-kicker">Handout / Activity</p>
                  <h2>${escapeHTML(handoutNames[activity.handout] || "Activity Sheet")}</h2>
                </div>
                <div class="preview-frame">
                  ${dashboardPreviewHTML(activity)}
                </div>
                <div class="preview-actions">
                  <div class="pager">
                    <button class="btn btn-ghost" type="button" data-action="prev-activity" aria-label="Previous activity"><span data-icon="left"></span></button>
                    <span>${state.activityIndex + 1} of ${currentFlow().length}</span>
                    <button class="btn btn-ghost" type="button" data-action="next-activity" aria-label="Next activity"><span data-icon="right"></span></button>
                  </div>
                  <button class="btn btn-primary btn-block" type="button" data-action="open-sheet" data-sheet="${activity.handout}"><span data-icon="expand"></span>Open Full Size</button>
                </div>
              </div>
            </aside>
          </div>
          ${renderInfoGrid(activity)}
        </section>
        ${renderRightColumn()}
      </div>
    `;
  }

  function renderInfoGrid(activity) {
    return `
      <div class="info-grid">
        <section class="mini-panel">
          <h3><span data-icon="target"></span> Today's Learning Targets</h3>
          ${listItems(activity.targets, true)}
        </section>
        <section class="mini-panel">
          <h3><span data-icon="cap"></span> Teaching Focus</h3>
          <p>Help students connect assessment findings to pathophysiology so they can justify treatment decisions in the field.</p>
          <button class="btn btn-ghost btn-block" type="button" data-action="set-tab" data-tab="resources">View Focus Details</button>
        </section>
        <section class="mini-panel">
          <h3><span data-icon="clipboard"></span> Materials Needed</h3>
          ${listItems(activity.materials, false)}
          <button class="btn btn-ghost btn-block" type="button" data-action="set-tab" data-tab="prep">View Full List</button>
        </section>
      </div>
    `;
  }

  function renderRightColumn() {
    const activity = currentActivity();
    const energy = energyModes[state.roomEnergy] || energyModes.green;
    return `
      <aside class="right-column" data-energy="${state.roomEnergy}" aria-label="Dashboard widgets">
        <section class="widget">
          <div class="widget-head">
            <h3><span data-icon="users"></span>Room Energy</h3>
            <span data-icon="info"></span>
          </div>
          <div class="energy-gauge" aria-hidden="true">
            <div class="gauge-arc"></div>
            <div class="gauge-needle"></div>
          </div>
          <p class="energy-label">${escapeHTML(energy.label)}</p>
          <p class="energy-sub">${escapeHTML(energy.summary)}</p>
          <div class="energy-selector" role="group" aria-label="Select room energy color">
            ${Object.keys(energyModes).map((key) => `<button class="energy-choice ${state.roomEnergy === key ? "active" : ""}" type="button" data-action="set-energy" data-energy="${key}">${escapeHTML(energyModes[key].label)}</button>`).join("")}
          </div>
          <div class="energy-help ${state.roomEnergy}">
            <strong>${escapeHTML(energy.helpTitle)}</strong>
            ${escapeHTML(energy.help)}
          </div>
          ${state.roomEnergy === "red" ? '<button class="btn btn-warning btn-block" type="button" data-action="set-tab" data-tab="pivot">Open Pivot Help</button>' : ""}
        </section>

        <section class="widget">
          <div class="widget-head"><h3><span data-icon="student"></span>Upcoming Agenda</h3></div>
          <div class="agenda-list">${agendaHTML()}</div>
          <button class="btn btn-ghost btn-block" type="button" data-action="show-agenda">View Full Agenda<span data-icon="right"></span></button>
        </section>

        <section class="widget">
          <div class="widget-head"><h3><span data-icon="shuffle"></span>Quick Pivot</h3></div>
          <div class="quick-pivot-grid">
            <button class="btn btn-ghost" type="button" data-action="shorten-activity"><span data-icon="clock"></span>Shorten Activity</button>
            <button class="btn btn-ghost" type="button" data-action="set-tab" data-tab="games"><span data-icon="flame"></span>Add Challenge</button>
            <button class="btn btn-ghost" type="button" data-action="set-tab" data-tab="resources"><span data-icon="book"></span>Review Core</button>
            <button class="btn btn-ghost" type="button" data-action="set-tab" data-tab="pivot"><span data-icon="users"></span>Change Format</button>
          </div>
        </section>

        <section class="widget">
          <div class="widget-head"><h3><span data-icon="printer"></span>Printable Materials</h3></div>
          <div class="materials-list">
            ${materialRow(handoutNames[activity.handout] || "Activity Sheet")}
            ${materialRow("Scenario Cards (Set 1)")}
            ${materialRow("Medication Cards")}
            ${materialRow("Route Cards")}
            ${materialRow("Answer Key")}
          </div>
          <button class="btn btn-primary btn-block" type="button" data-action="print-all"><span data-icon="printer"></span>Print All</button>
        </section>

        <section class="widget">
          <div class="widget-head"><h3><span data-icon="star"></span>Encouragement</h3></div>
          <div class="encouragement-list">
            <div class="encouragement-card"><span data-icon="star"></span><div><b>For You</b><br>You're building future paramedics. Keep leading with purpose.</div></div>
            <div class="encouragement-card heart"><span data-icon="heart"></span><div><b>For Students</b><br>Think critically. Ask questions. Defend your decision.</div></div>
          </div>
        </section>
      </aside>
    `;
  }

  function materialRow(label) {
    return `<div class="material-item"><strong>${escapeHTML(label)}</strong><span class="ready">Ready</span></div>`;
  }

  function agendaHTML() {
    const entries = scheduleEntries();
    const start = Math.min(state.activityIndex, Math.max(0, entries.length - 4));
    return entries.slice(start, start + 4).map(({ item, index, label }) => `
        <div class="agenda-item">
          <time>${label}</time>
          <strong title="${escapeHTML(item.title)}">${escapeHTML(item.title)}</strong>
          ${index === state.activityIndex ? '<span class="pill">Live</span>' : "<span></span>"}
        </div>
      `).join("");
  }

  function fullAgendaHTML() {
    const entries = scheduleEntries();
    const usedMinutes = entries.length ? entries[entries.length - 1].end - classStartMinutes : 0;
    const bufferMinutes = Math.max(0, classEndMinutes - classStartMinutes - usedMinutes);
    return `
      <div class="modal-backdrop" role="presentation" data-action="hide-agenda">
        <section class="agenda-modal" role="dialog" aria-modal="true" aria-labelledby="agendaTitle">
          <header class="agenda-modal-head">
            <div>
              <p class="panel-kicker">Full Agenda</p>
              <h2 id="agendaTitle">Week 2 Class Schedule</h2>
              <p>Group ${escapeHTML(state.group)} (${escapeHTML(groupLabel())}) | ${formatClockTime(classStartMinutes)} - ${formatClockTime(classEndMinutes)}</p>
            </div>
            <button class="btn btn-ghost" type="button" data-action="hide-agenda" aria-label="Close full agenda">Close</button>
          </header>
          <div class="agenda-full-list">
            ${entries.map(({ item, index, startLabel, endLabel, label }) => `
              <article class="agenda-full-item ${index === state.activityIndex ? "live" : ""}">
                <time>${escapeHTML(label)}</time>
                <div>
                  <strong>${escapeHTML(item.title)}</strong>
                  <span>${escapeHTML(item.sub)} | ${escapeHTML(startLabel)} - ${escapeHTML(endLabel)}</span>
                </div>
                ${index === state.activityIndex ? '<span class="pill">Live</span>' : ""}
              </article>
            `).join("")}
            <article class="agenda-full-item buffer">
              <time>${formatClockTime(entries.length ? entries[entries.length - 1].end : classStartMinutes)}</time>
              <div>
                <strong>Instructor buffer / transition</strong>
                <span>${bufferMinutes} minutes available before noon for discussion, cleanup, or remediation.</span>
              </div>
            </article>
          </div>
        </section>
      </div>
    `;
  }

  function dashboardPreviewHTML(activity) {
    if (activity.handout === "diff") {
      return `
        <article class="scenario-card-preview">
          <header class="scenario-preview-head">
            <strong>Asthma or Anaphylaxis?<br>Differentiation Challenge</strong>
            <span data-icon="stethoscope"></span>
          </header>
          <section class="scenario-preview-body">
            <h4>Scenario</h4>
            <p>A 27-year-old female presents with shortness of breath, wheezing, and hives after eating a granola bar 10 minutes ago.</p>
            <h4>Vitals</h4>
            <ul>
              <li>BP: 122/68</li>
              <li>HR: 128</li>
              <li>RR: 28</li>
              <li>SpO2: 96% RA</li>
            </ul>
            <h4>Assessment Findings</h4>
            <ul>
              <li>Diffuse wheezing and chest tightness</li>
              <li>Urticaria on arms and chest</li>
              <li>Swelling of lips</li>
              <li>Patient anxious, restless</li>
            </ul>
          </section>
          <footer class="scenario-preview-foot">Determine: Asthma exacerbation or anaphylaxis?</footer>
        </article>
      `;
    }

    return `
      <article class="scenario-card-preview">
        <header class="scenario-preview-head">
          <strong>${escapeHTML(handoutNames[activity.handout] || activity.title)}</strong>
          <span data-icon="${activity.icon}"></span>
        </header>
        <section class="scenario-preview-body">
          <h4>Student Task</h4>
          ${listItems(activity.task.slice(0, 4), false)}
          <h4>Instructor Focus</h4>
          <p>${escapeHTML(activity.kai)}</p>
        </section>
        <footer class="scenario-preview-foot">${escapeHTML(activity.sub)}</footer>
      </article>
    `;
  }

  function renderStudent() {
    const activity = currentActivity();
    return `
      <section class="student-display" aria-label="Classroom display">
        <div class="student-card">
          <p class="eyebrow">Classroom Display</p>
          <h2>${escapeHTML(activity.title)}</h2>
          <p class="muted">${escapeHTML(activity.sub)}</p>
          <div class="timer-value" data-timer>00:00</div>
          <div class="timer-label">TIME REMAINING</div>
          <div class="student-task">
            ${listItems(activity.task, false)}
          </div>
        </div>
      </section>
    `;
  }

  function renderPrep() {
    const active = state.selectedSheet || currentActivity().handout;
    return `
      <section class="page-view">
        <div class="page-header">
          <div>
            <p class="eyebrow">Print & Prep</p>
            <h2>Printable Materials</h2>
            <p>Handout previews use the same paper-first structure as the existing course materials: name/date fields, clinical reasoning boxes, and clear printable tables.</p>
          </div>
          <div class="button-row">
            <button class="btn btn-primary" type="button" data-action="print-all"><span data-icon="printer"></span>Print All</button>
            <button class="btn btn-ghost" type="button" data-action="set-tab" data-tab="instructor"><span data-icon="monitor"></span>Back to Instructor View</button>
          </div>
        </div>
        <div class="prep-layout">
          <aside class="prep-card">
            <h3>Material Set</h3>
            <div class="sheet-list">
              ${handoutOrder.map((key) => `<button class="sheet-button ${key === active ? "active" : ""}" type="button" data-action="select-sheet" data-sheet="${key}">${escapeHTML(handoutNames[key])}</button>`).join("")}
            </div>
          </aside>
          <div class="prep-preview">
            <div>${handoutHTML(active)}</div>
            <aside class="prep-tools">
              <div class="page-card">
                <h3>Selected Preview</h3>
                <p>${escapeHTML(handoutNames[active])}</p>
                <button class="btn btn-primary btn-block" type="button" data-action="print-all"><span data-icon="printer"></span>Print Packet</button>
              </div>
              <div class="page-card">
                <h3>Prep Checklist</h3>
                ${listItems(["Print one worksheet per student.", "Keep scenario and route cards separated by table.", "Use answer key as instructor-only material.", "Keep paper score sheet active during games."], true)}
              </div>
              <div class="page-card">
                <h3>Course Style</h3>
                <p>Clean assignment header, compact clinical tables, lined response boxes, and blue clinical section markers.</p>
              </div>
            </aside>
          </div>
        </div>
      </section>
    `;
  }

  function renderPivot() {
    const cards = [
      ["Students are quiet", "Use a standing card sort. Every student physically moves one clue card to Asthma, Anaphylaxis, Mixed, or Need More Info.", ["Set a 90-second timer.", "Require one verbal defense per squad."]],
      ["Students are confused", "Reset the room around physiology instead of protocol memorization.", ["Finding to failure.", "Failure to medication.", "Medication to reassessment."]],
      ["Students finish early", "Add challenge by asking them to defend why the tempting medication is not first-line.", ["Why not Benadryl first?", "Why not albuterol only?", "What finding changes the plan?"]],
      ["Room energy is low", "Move into a rapid-fire squad defense or the boss battle game.", ["Answers must be short.", "Students must write before voting.", "Reward reasoning, not speed alone."]]
    ];
    return `
      <section class="page-view">
        <div class="page-header">
          <div>
            <p class="eyebrow">Pivot Menu</p>
            <h2>Room Reset Options</h2>
            <p>Use these when the class needs a faster, clearer, or more physical version of the current activity.</p>
          </div>
        </div>
        <div class="pivot-grid">
          ${cards.map(([title, body, bullets]) => `
            <article class="pivot-card">
              <h3>${escapeHTML(title)}</h3>
              <p>${escapeHTML(body)}</p>
              ${listItems(bullets, false)}
              <div class="button-row"><button class="btn btn-primary" type="button" data-action="set-tab" data-tab="instructor">Return to Activity</button></div>
            </article>
          `).join("")}
        </div>
      </section>
    `;
  }

  function renderResources() {
    return `
      <section class="page-view">
        <div class="page-header">
          <div>
            <p class="eyebrow">Resources</p>
            <h2>Instructor Backup Materials</h2>
            <p>Reference links remain separate from the paper-first student workflow so Steven can pivot without turning the dashboard into a browser tab farm.</p>
          </div>
        </div>
        <div class="resource-grid">
          ${resources.map((resource) => `
            <article class="resource-card">
              <h3>${escapeHTML(resource[0])}</h3>
              <p><a href="${escapeHTML(resource[2])}" target="_blank" rel="noopener">${escapeHTML(resource[1])}</a></p>
              <p>Use as instructor backup, quick clarification, or a post-class refinement source.</p>
            </article>
          `).join("")}
        </div>
      </section>
    `;
  }

  function defaultDebriefText() {
    return `Mauro,

Week 2 Group ${state.group} Day ${state.day} debrief:

1. What students understood:

2. What confused students:

3. Medication/receptor needing review:

4. Best activity today:

5. Suggested adjustment before next group:

- Steven`;
  }

  function renderDebrief() {
    const text = state.debriefText || defaultDebriefText();
    return `
      <section class="page-view">
        <div class="page-header">
          <div>
            <p class="eyebrow">Debrief</p>
            <h2>Steven Debrief to Mauro</h2>
            <p>Capture what happened while the class is fresh. The export stays local in this v0.7 prototype.</p>
          </div>
        </div>
        <div class="debrief-layout">
          <article class="debrief-card">
            <textarea class="debrief-area" data-role="debrief">${escapeHTML(text)}</textarea>
            <div class="button-row">
              <button class="btn btn-primary" type="button" data-action="copy-debrief"><span data-icon="clipboard"></span>Copy Summary</button>
              <button class="btn btn-ghost" type="button" data-action="download-debrief"><span data-icon="download"></span>Download Notes</button>
              <a class="btn btn-teal" href="mailto:mauror023@gmail.com?subject=Week%202%20Steven%20Debrief&body=${encodeURIComponent(text)}">Open Email Draft</a>
            </div>
          </article>
          <aside class="debrief-card">
            <h3>Instructor Prompts</h3>
            ${listItems(["What did students justify well?", "Where did they anchor on one symptom?", "Which handout needs clarification?", "Which group needs more route/mechanism practice?"], false)}
          </aside>
        </div>
      </section>
    `;
  }

  function renderGames() {
    const game = state.game;
    const stage = gameStages[game.stageIndex];
    return `
      <section class="game-view" aria-label="ADME game mode">
        <div class="game-shell">
          <div class="game-top">
            <div>
              <p class="eyebrow">ADME-Inspired Arcade Mode</p>
              <h2>Respiratory + Anaphylaxis Boss Run</h2>
            </div>
            <div class="score-board">
              <div class="squad-scores">
                ${Object.entries(game.squads).map(([name, score]) => `<div class="squad-score">${escapeHTML(name)}<span>${score}</span></div>`).join("")}
              </div>
            </div>
          </div>

          <div class="game-main">
            <aside class="game-panel">
              <h3>Stages</h3>
              <div class="stage-track">
                ${gameStages.map((item, index) => `
                  <button class="stage-pill ${index === game.stageIndex ? "active" : ""}" type="button" data-action="set-game-stage" data-stage="${index}">
                    ${escapeHTML(item.mode)}
                    <small>${escapeHTML(item.title)}</small>
                  </button>
                `).join("")}
              </div>
              <div class="boss-meter">
                <label><span>Boss Health</span><span>${game.bossHealth}%</span></label>
                <div class="boss-track"><span style="width:${game.bossHealth}%"></span></div>
              </div>
            </aside>

            <div class="game-question">
              <div class="question-card">
                <div class="stage-name">${escapeHTML(stage.mode)}</div>
                <h3>${escapeHTML(stage.title)}</h3>
                <p>${escapeHTML(stage.prompt)}</p>
              </div>
              <div class="choice-grid">
                ${stage.choices.map((choice, index) => {
                  let cls = "";
                  if (game.locked && index === game.selectedChoice) {
                    cls = game.lastCorrect ? " correct" : " wrong";
                  } else if (game.locked && choice[1]) {
                    cls = " correct";
                  }
                  return `<button class="choice-button${cls}" type="button" data-action="game-choice" data-choice="${index}" ${game.locked ? "disabled" : ""}>${escapeHTML(choice[0])}</button>`;
                }).join("")}
              </div>
              <div class="game-feedback">${game.feedback}</div>
            </div>

            <aside class="game-panel">
              <h3>Squad Control</h3>
              <div class="squad-picker">
                ${Object.keys(game.squads).map((name) => `<button class="squad-button ${name === game.activeSquad ? "active" : ""}" type="button" data-action="set-squad" data-squad="${name}">${escapeHTML(name)}</button>`).join("")}
              </div>
              <div class="confidence">
                <label><span>Confidence</span><span id="confidenceValue">${game.confidence}/5</span></label>
                <input type="range" min="1" max="5" value="${game.confidence}" data-action="confidence">
              </div>
              <div class="retro-actions">
                <button class="btn btn-primary" type="button" data-action="next-game-stage"><span data-icon="right"></span>Next Stage</button>
                <button class="btn btn-ghost" type="button" data-action="download-metrics"><span data-icon="download"></span>Download Metrics JSON</button>
                <button class="btn btn-ghost" type="button" data-action="restart-game"><span data-icon="reset"></span>Restart Run</button>
              </div>
              <div class="metric-list">
                ${game.metrics.length ? game.metrics.slice(-5).reverse().map((metric) => `
                  <div class="metric-row">
                    <b>${escapeHTML(metric.squad)}</b> - ${metric.correct ? "correct" : "review"}<br>
                    ${escapeHTML(metric.stage)} / ${metric.topic}<br>
                    ${metric.elapsedSeconds}s, confidence ${metric.confidence}/5
                  </div>
                `).join("") : '<div class="metric-row">No metrics yet. Answer a stage to begin capture.</div>'}
              </div>
            </aside>
          </div>
        </div>
      </section>
    `;
  }

  function handoutHTML(type) {
    if (type === "family") {
      return `
        <article class="handout-paper">
          ${paperHeader("Medication Family Tree Assignment", "Learn the family. Understand the patient. Treat with purpose.")}
          ${fieldRow(["Name", "Date", "Course"])}
          <div class="two-column">
            <div class="paper-box"><b>Purpose</b>Organize medications into families to predict mechanisms, indications, risks, and reassessment priorities.</div>
            <div class="paper-box"><b>Think Like a Paramedic</b>What problem am I treating? Why this family? What receptor/pathway matters?</div>
          </div>
          <table class="micro-table">
            <tr><th>Family</th><th>Prototype</th><th>Indications</th><th>Major Risks</th></tr>
            <tr><td>Beta-2 agonist</td><td>Albuterol</td><td>Bronchospasm, asthma/COPD</td><td>Tachycardia, tremor</td></tr>
            <tr><td>Alpha/Beta rescue</td><td>Epinephrine</td><td>Anaphylaxis, airway/perfusion risk</td><td>Increased HR/BP, anxiety</td></tr>
            <tr><td>Adjunct families</td><td>Ipratropium, steroid, antihistamine</td><td>Support after primary rescue</td><td>Delayed benefit if used first</td></tr>
          </table>
          <div class="write-box"><b>Clinical Thinking Loop</b>Patient problem to family to mechanism to reassessment priority.</div>
          <div class="write-box"><b>Reflection</b>How will you know treatment helped?</div>
        </article>
      `;
    }

    if (type === "diff") {
      return `
        <article class="handout-paper">
          ${paperHeader("Asthma or Anaphylaxis?", "Differentiation Challenge")}
          ${fieldRow(["Name", "Squad", "Date"])}
          <div class="paper-box"><b>Scenario</b>A 27-year-old female presents with shortness of breath, wheezing, and hives after eating a granola bar 10 minutes ago.</div>
          <div class="two-column">
            <div class="paper-box"><b>Vitals</b>BP: 122/68<br>HR: 128<br>RR: 28<br>SpO2: 96% RA</div>
            <div class="paper-box"><b>Assessment Findings</b>Diffuse wheezing, urticaria on arms/chest, swelling of lips, anxious/restless.</div>
          </div>
          <table class="micro-table">
            <tr><th>Most Likely</th><th>Key Findings</th><th>First-Line Treatment</th></tr>
            <tr><td>Asthma / Anaphylaxis / Mixed</td><td></td><td></td></tr>
            <tr><td>Need more info?</td><td></td><td></td></tr>
          </table>
          <div class="write-box"><b>Determine</b>Asthma exacerbation or anaphylaxis? Defend with at least two findings.</div>
        </article>
      `;
    }

    if (type === "map") {
      return `
        <article class="handout-paper">
          ${paperHeader("Medication Mechanism Map", "Drug action to physiology to outcome")}
          ${fieldRow(["Name", "Date", "Squad"])}
          <div class="three-column">
            <div class="paper-box"><b>Medication Cards</b><span class="tag">Albuterol</span><span class="tag">Ipratropium</span><span class="tag">Epinephrine</span><span class="tag">Diphenhydramine</span></div>
            <div class="paper-box"><b>Action / Receptor</b><span class="tag">Beta-2</span><span class="tag">Alpha-1</span><span class="tag">H1</span><span class="tag">Muscarinic</span></div>
            <div class="paper-box"><b>Patient Outcome</b><span class="tag">Bronchodilation</span><span class="tag">Less edema</span><span class="tag">Improved BP</span></div>
          </div>
          <div class="write-box"><b>Chain 1</b>Drug to receptor/action to physiology to improvement to reassessment.</div>
          <div class="write-box"><b>Predictable adverse effect</b></div>
        </article>
      `;
    }

    if (type === "exit") {
      return `
        <article class="handout-paper">
          ${paperHeader("Exit Ticket", "Think DRUGS before you give drugs")}
          ${fieldRow(["Name", "Date", "Medication"])}
          <div class="two-column">
            <div class="paper-box"><b>D - Disease/Defect</b><div class="write-box"></div></div>
            <div class="paper-box"><b>R - Receptor/Route</b><div class="write-box"></div></div>
            <div class="paper-box"><b>U - Use</b><div class="write-box"></div></div>
            <div class="paper-box"><b>G - Goal</b><div class="write-box"></div></div>
          </div>
          <div class="paper-box"><b>S - Safety / Surveillance</b><div class="write-box"></div></div>
        </article>
      `;
    }

    if (type === "recall") {
      return `
        <article class="handout-paper">
          ${paperHeader("Rapid Recall Cards", "Same symptom. Different failure.")}
          ${fieldRow(["Name", "Partner", "Date"])}
          <table class="micro-table">
            <tr><th>Asthma clue</th><th>Anaphylaxis clue</th><th>Why it matters</th></tr>
            <tr><td></td><td></td><td></td></tr>
            <tr><td></td><td></td><td></td></tr>
            <tr><td></td><td></td><td></td></tr>
          </table>
          <div class="write-box"><b>Partner challenge</b>One finding I would not ignore:</div>
        </article>
      `;
    }

    if (type === "lab") {
      return `
        <article class="handout-paper">
          ${paperHeader("Skill Lab Route Comparison", "Neb setup + epinephrine route logic")}
          ${fieldRow(["Name", "Squad", "Date"])}
          <table class="micro-table">
            <tr><th>Route</th><th>When it makes sense</th><th>What to reassess</th></tr>
            <tr><td>Nebulized</td><td></td><td></td></tr>
            <tr><td>IM</td><td></td><td></td></tr>
            <tr><td>IV/IO</td><td></td><td></td></tr>
          </table>
          <div class="write-box"><b>Route decision</b>Where does the medication need to act, and how fast?</div>
        </article>
      `;
    }

    if (type === "scenario") {
      return `
        <article class="handout-paper">
          ${paperHeader("Scenario Reasoning Sheet", "Respiratory vs anaphylaxis medication selection")}
          ${fieldRow(["Name", "Squad", "Date"])}
          <table class="micro-table">
            <tr><th>Assessment clue</th><th>Asthma/COPD?</th><th>Anaphylaxis?</th><th>Why?</th></tr>
            <tr><td>Wheezing</td><td></td><td></td><td></td></tr>
            <tr><td>Throat tightness</td><td></td><td></td><td></td></tr>
            <tr><td>Hypotension</td><td></td><td></td><td></td></tr>
            <tr><td>Exposure history</td><td></td><td></td><td></td></tr>
          </table>
          <div class="write-box"><b>Medication priority</b></div>
          <div class="write-box"><b>Reassessment plan</b></div>
        </article>
      `;
    }

    if (type === "boss") {
      return `
        <article class="handout-paper">
          ${paperHeader("Boss Battle Score Sheet", "The Wheeze Is Not Enough")}
          ${fieldRow(["Squad", "Date", "Scorekeeper"])}
          <table class="micro-table">
            <tr><th>Stage</th><th>Class decision</th><th>Physiology defense</th><th>Review topic</th></tr>
            <tr><td>1</td><td></td><td></td><td></td></tr>
            <tr><td>2</td><td></td><td></td><td></td></tr>
            <tr><td>3</td><td></td><td></td><td></td></tr>
            <tr><td>Boss</td><td></td><td></td><td></td></tr>
          </table>
          <div class="write-box"><b>Final class win condition</b>Defend medication timing with physiology.</div>
        </article>
      `;
    }

    if (type === "debrief") {
      return `
        <article class="handout-paper">
          ${paperHeader("Exit Reflection + Debrief", "What needs review before Week 3?")}
          ${fieldRow(["Name", "Date", "Squad"])}
          <div class="write-box"><b>I used to think...</b></div>
          <div class="write-box"><b>Now I think...</b></div>
          <div class="write-box"><b>One thing I still need to practice...</b></div>
        </article>
      `;
    }

    if (type === "break") {
      return `
        <article class="handout-paper">
          ${paperHeader("Break Screen", "Reset, hydrate, return ready")}
          <div class="paper-box"><b>Instructor note</b>Use this time to prepare the next material set, check timer status, and cue the next display.</div>
          <div class="write-box"><b>Next activity setup</b></div>
        </article>
      `;
    }

    return `
      <article class="handout-paper">
        ${paperHeader(handoutNames[type] || "Activity Sheet", "Week 2 Respiratory + Anaphylaxis")}
        ${fieldRow(["Name", "Date", "Squad"])}
        <div class="write-box"><b>Student response</b></div>
        <div class="write-box"><b>What did you learn?</b></div>
      </article>
    `;
  }

  function paperHeader(title, subtitle) {
    return `<div class="paper-header"><h4>${escapeHTML(title)}</h4><p>${escapeHTML(subtitle)}</p></div>`;
  }

  function fieldRow(fields) {
    return `<div class="field-row">${fields.map((field) => `<div class="field">${escapeHTML(field)}<div class="line"></div></div>`).join("")}</div>`;
  }

  function layoutTuningEnabled() {
    const params = new URLSearchParams(window.location.search);
    return params.has("tune") || window.location.hash.toLowerCase().includes("tune");
  }

  function defaultLayoutTuning() {
    return Object.fromEntries(layoutControls.map((control) => [control.key, control.defaultValue]));
  }

  function readLayoutTuning() {
    try {
      return { ...defaultLayoutTuning(), ...JSON.parse(localStorage.getItem(layoutTuningKey) || "{}") };
    } catch {
      return defaultLayoutTuning();
    }
  }

  function applyLayoutTuning(values) {
    layoutControls.forEach((control) => {
      const value = Number(values[control.key]);
      if (Number.isFinite(value)) {
        document.documentElement.style.setProperty(control.variable, `${value}px`);
      }
    });
  }

  function updateLayoutTunerOutput(values) {
    const textarea = document.querySelector("[data-tuner-json]");
    if (textarea) {
      textarea.value = JSON.stringify(values, null, 2);
    }
    layoutControls.forEach((control) => {
      const output = document.querySelector(`[data-tuner-output="${control.key}"]`);
      if (output) {
        output.textContent = `${values[control.key]}px`;
      }
    });
  }

  function writeLayoutTuning(values) {
    localStorage.setItem(layoutTuningKey, JSON.stringify(values));
    applyLayoutTuning(values);
    updateLayoutTunerOutput(values);
  }

  function renderLayoutTuner() {
    if (!layoutTuningEnabled()) {
      return;
    }
    const values = readLayoutTuning();
    applyLayoutTuning(values);
    const panel = document.createElement("aside");
    panel.className = "layout-tuner";
    panel.setAttribute("aria-label", "Layout tuning controls");
    panel.innerHTML = `
      <p class="panel-kicker">Layout Tuner</p>
      <h2>Dashboard Proportions</h2>
      <p>Temporary browser-only controls. Copy the JSON and send it back so I can hard-code the winning layout.</p>
      ${layoutControls.map((control) => `
        <div class="tuner-row">
          <label for="tune-${control.key}">${escapeHTML(control.label)}</label>
          <input id="tune-${control.key}" type="range" min="${control.min}" max="${control.max}" value="${values[control.key]}" data-tuner="${control.key}">
          <output data-tuner-output="${control.key}">${values[control.key]}px</output>
        </div>
      `).join("")}
      <div class="layout-tuner-actions">
        <button class="btn btn-primary" type="button" data-tuner-action="copy">Copy JSON</button>
        <button class="btn btn-ghost" type="button" data-tuner-action="reset">Reset</button>
        <button class="btn btn-ghost" type="button" data-tuner-action="hide">Hide</button>
      </div>
      <textarea readonly data-tuner-json>${escapeHTML(JSON.stringify(values, null, 2))}</textarea>
    `;
    document.body.appendChild(panel);
  }

  function handleLayoutTunerInput(target) {
    const values = readLayoutTuning();
    values[target.dataset.tuner] = Number(target.value);
    writeLayoutTuning(values);
  }

  function handleLayoutTunerAction(action) {
    if (action === "copy") {
      const values = readLayoutTuning();
      const text = JSON.stringify(values, null, 2);
      navigator.clipboard?.writeText(text);
      updateLayoutTunerOutput(values);
    } else if (action === "reset") {
      const values = defaultLayoutTuning();
      writeLayoutTuning(values);
      document.querySelectorAll("[data-tuner]").forEach((input) => {
        input.value = values[input.dataset.tuner];
      });
    } else if (action === "hide") {
      document.querySelector(".layout-tuner")?.remove();
    }
  }

  function resetTimerForActivity(remainingOverride) {
    const seconds = currentActivity().minutes * 60;
    setTimer(seconds, remainingOverride);
  }

  function stopTimer() {
    state.running = false;
    clearInterval(state.timerId);
    state.timerId = null;
  }

  function startTimer() {
    if (state.running) {
      return;
    }
    state.running = true;
    playTone(660, 0.05, "square", 0.035);
    if (currentActivity().type === "break") {
      showBreak();
    }
    state.timerId = window.setInterval(() => {
      state.remainingSeconds = Math.max(0, state.remainingSeconds - 1);
      syncTimerDisplay();
      if (state.remainingSeconds === 60) {
        playTone(880, 0.1, "square", 0.04);
      }
      if (state.remainingSeconds === 0) {
        stopTimer();
        fanfare();
        render();
      }
    }, 1000);
    render();
  }

  function showBreak() {
    const overlay = $("breakOverlay");
    overlay.classList.add("show");
    overlay.setAttribute("aria-hidden", "false");
  }

  function hideBreak() {
    const overlay = $("breakOverlay");
    overlay.classList.remove("show");
    overlay.setAttribute("aria-hidden", "true");
  }

  function playTone(freq, duration, type, volume) {
    if (!state.sound) {
      return;
    }
    const AudioContext = window.AudioContext || window.webkitAudioContext;
    if (!AudioContext) {
      return;
    }
    const ctx = new AudioContext();
    const osc = ctx.createOscillator();
    const gain = ctx.createGain();
    osc.type = type || "square";
    osc.frequency.value = freq;
    gain.gain.value = volume || 0.04;
    osc.connect(gain);
    gain.connect(ctx.destination);
    osc.start();
    osc.stop(ctx.currentTime + duration);
    window.setTimeout(() => ctx.close(), 280);
  }

  function fanfare() {
    [520, 660, 780, 1040].forEach((freq, index) => {
      window.setTimeout(() => playTone(freq, 0.08, "square", 0.04), index * 90);
    });
  }

  function errorBuzz() {
    [180, 150].forEach((freq, index) => {
      window.setTimeout(() => playTone(freq, 0.11, "sawtooth", 0.045), index * 105);
    });
  }

  function setActivity(index) {
    stopTimer();
    const flow = currentFlow();
    state.activityIndex = Math.max(0, Math.min(flow.length - 1, index));
    state.selectedSheet = currentActivity().handout;
    resetTimerForActivity();
    render();
  }

  function setDay(day) {
    stopTimer();
    state.day = day;
    state.activityIndex = day === 1 ? 1 : 0;
    state.selectedSheet = currentActivity().handout;
    resetTimerForActivity(day === 1 ? (9 * 60) + 34 : undefined);
    render();
  }

  function showHint() {
    const activity = currentActivity();
    const hint = activity.stuck[0] || "Ask students to defend the patient problem before naming a medication.";
    window.alert(`Hint prompt: ${hint}`);
  }

  function handleGameChoice(index) {
    const game = state.game;
    if (game.locked) {
      return;
    }
    const stage = gameStages[game.stageIndex];
    const choice = stage.choices[index];
    const correct = Boolean(choice[1]);
    const elapsedSeconds = Math.max(1, Math.round((Date.now() - game.stageStartedAt) / 1000));
    const earned = correct ? stage.points + (game.confidence * 10) : 0;

    if (correct) {
      game.squads[game.activeSquad] += earned;
      game.bossHealth = Math.max(0, game.bossHealth - (stage.mode === "Boss Battle" ? 34 : 18));
      fanfare();
    } else {
      game.bossHealth = Math.max(0, game.bossHealth - 5);
      errorBuzz();
    }

    game.locked = true;
    game.selectedChoice = index;
    game.lastCorrect = correct;
    game.feedback = correct
      ? `<strong>Correct.</strong> ${escapeHTML(stage.feedback)} ${earned} points to ${escapeHTML(game.activeSquad)}.`
      : `<strong>Review.</strong> The target issue is ${escapeHTML(choice[2])}. ${escapeHTML(stage.feedback)}`;

    game.metrics.push({
      exportedFrom: "Steven Instructor Command Center v0.7",
      timestamp: new Date().toISOString(),
      group: state.group,
      day: state.day,
      squad: game.activeSquad,
      stage: stage.mode,
      stageTitle: stage.title,
      prompt: stage.prompt,
      selectedAnswer: choice[0],
      correct,
      topic: choice[2],
      confidence: game.confidence,
      elapsedSeconds,
      pointsEarned: earned,
      squadScores: { ...game.squads },
      bossHealth: game.bossHealth
    });

    render();
  }

  function nextGameStage() {
    const game = state.game;
    game.stageIndex = Math.min(gameStages.length - 1, game.stageIndex + 1);
    game.locked = false;
    game.selectedChoice = null;
    game.lastCorrect = null;
    game.feedback = game.stageIndex === gameStages.length - 1
      ? "Boss battle armed. Require a class defense before the answer tile is tapped."
      : "New stage loaded. Choose a squad and capture confidence before answering.";
    game.stageStartedAt = Date.now();
    playTone(420, 0.08, "square", 0.035);
    render();
  }

  function setGameStage(index) {
    const game = state.game;
    game.stageIndex = Math.max(0, Math.min(gameStages.length - 1, index));
    game.locked = false;
    game.selectedChoice = null;
    game.lastCorrect = null;
    game.feedback = "Stage selected. Choose a squad, set confidence, and tap a large answer tile.";
    game.stageStartedAt = Date.now();
    render();
  }

  function restartGame() {
    state.game = {
      stageIndex: 0,
      activeSquad: "Alpha",
      squads: { Alpha: 0, Bravo: 0, Charlie: 0, Delta: 0 },
      bossHealth: 100,
      confidence: 3,
      locked: false,
      selectedChoice: null,
      lastCorrect: null,
      feedback: "Run restarted. Choose a squad, set confidence, and tap a large answer tile.",
      metrics: [],
      stageStartedAt: Date.now()
    };
    render();
  }

  function downloadJSON(filename, payload) {
    const blob = new Blob([JSON.stringify(payload, null, 2)], { type: "application/json" });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.download = filename;
    document.body.appendChild(link);
    link.click();
    link.remove();
    URL.revokeObjectURL(url);
  }

  function downloadMetrics() {
    downloadJSON(`steven_week2_game_metrics_group_${state.group}_day_${state.day}.json`, {
      prototype: "Steven Instructor Command Center v0.7",
      exportedAt: new Date().toISOString(),
      group: state.group,
      day: state.day,
      activeStage: gameStages[state.game.stageIndex].title,
      squadScores: state.game.squads,
      bossHealth: state.game.bossHealth,
      metrics: state.game.metrics
    });
  }

  function downloadText(filename, text) {
    const blob = new Blob([text], { type: "text/plain" });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.download = filename;
    document.body.appendChild(link);
    link.click();
    link.remove();
    URL.revokeObjectURL(url);
  }

  function buildPrintArea() {
    $("printArea").innerHTML = handoutOrder
      .map((key) => `<div class="print-page">${handoutHTML(key)}</div>`)
      .join("");
  }

  function handleAction(target) {
    const action = target.dataset.action;
    if (action === "set-group") {
      state.group = target.dataset.group;
      render();
    } else if (action === "set-day") {
      setDay(Number(target.dataset.day));
    } else if (action === "set-tab") {
      state.agendaOpen = false;
      state.tab = target.dataset.tab;
      render();
      $("content").focus({ preventScroll: true });
    } else if (action === "fullscreen") {
      document.documentElement.requestFullscreen?.();
    } else if (action === "toggle-sound") {
      state.sound = !state.sound;
      updateChrome();
    } else if (action === "timer-start") {
      startTimer();
    } else if (action === "timer-pause") {
      stopTimer();
      playTone(330, 0.05, "square", 0.03);
      render();
    } else if (action === "timer-reset") {
      stopTimer();
      resetTimerForActivity();
      render();
    } else if (action === "prev-activity") {
      setActivity(state.activityIndex - 1);
    } else if (action === "next-activity") {
      setActivity(state.activityIndex + 1);
    } else if (action === "mark-used") {
      state.usedPrompts.add(`${state.day}-${state.activityIndex}`);
      playTone(720, 0.06, "square", 0.035);
      render();
    } else if (action === "show-hint") {
      showHint();
    } else if (action === "show-agenda") {
      state.agendaOpen = true;
      render();
    } else if (action === "hide-agenda") {
      state.agendaOpen = false;
      render();
    } else if (action === "open-sheet") {
      state.agendaOpen = false;
      state.selectedSheet = target.dataset.sheet;
      state.tab = "prep";
      render();
    } else if (action === "select-sheet") {
      state.selectedSheet = target.dataset.sheet;
      render();
    } else if (action === "print-all") {
      buildPrintArea();
      window.print();
    } else if (action === "shorten-activity") {
      state.remainingSeconds = Math.min(state.remainingSeconds, 5 * 60);
      syncTimerDisplay();
      render();
    } else if (action === "set-energy") {
      state.roomEnergy = target.dataset.energy;
      playTone(state.roomEnergy === "red" ? 220 : state.roomEnergy === "yellow" ? 440 : 660, 0.06, "square", 0.03);
      render();
    } else if (action === "hide-break") {
      hideBreak();
    } else if (action === "set-squad") {
      state.game.activeSquad = target.dataset.squad;
      render();
    } else if (action === "game-choice") {
      handleGameChoice(Number(target.dataset.choice));
    } else if (action === "next-game-stage") {
      nextGameStage();
    } else if (action === "set-game-stage") {
      setGameStage(Number(target.dataset.stage));
    } else if (action === "download-metrics") {
      downloadMetrics();
    } else if (action === "restart-game") {
      restartGame();
    } else if (action === "download-debrief") {
      const value = document.querySelector("[data-role='debrief']")?.value || defaultDebriefText();
      state.debriefText = value;
      downloadText(`steven_week2_group_${state.group}_day_${state.day}_debrief.txt`, value);
    } else if (action === "copy-debrief") {
      const value = document.querySelector("[data-role='debrief']")?.value || defaultDebriefText();
      state.debriefText = value;
      navigator.clipboard?.writeText(value);
      playTone(720, 0.06, "square", 0.035);
    }
  }

  document.addEventListener("click", (event) => {
    const tunerTarget = event.target.closest("[data-tuner-action]");
    if (tunerTarget) {
      event.preventDefault();
      handleLayoutTunerAction(tunerTarget.dataset.tunerAction);
      return;
    }

    const actionTarget = event.target.closest("[data-action]");
    if (!actionTarget) {
      return;
    }
    if (actionTarget.dataset.action === "hide-agenda" && event.target.closest(".agenda-modal") && !event.target.closest("button")) {
      return;
    }
    const action = actionTarget.dataset.action;
    if (action !== "confidence") {
      event.preventDefault();
      handleAction(actionTarget);
    }
  });

  document.addEventListener("input", (event) => {
    const target = event.target;
    if (target.matches("[data-tuner]")) {
      handleLayoutTunerInput(target);
      return;
    }
    if (target.matches("[data-action='confidence']")) {
      state.game.confidence = Number(target.value);
      const output = $("confidenceValue");
      if (output) {
        output.textContent = `${state.game.confidence}/5`;
      }
    }
    if (target.matches("[data-role='debrief']")) {
      state.debriefText = target.value;
    }
  });

  hydrateIcons(document);
  buildPrintArea();
  render();
  renderLayoutTuner();
})();
