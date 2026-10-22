/* Conflict at Work (undergraduate series): content and activities.
   Edit text here; the engine in app.js renders it. */
window.SERIES = window.SERIES || [];
window.SERIES.push({
  id: 'caw',
  title: 'Conflict at Work',
  level: 'Undergraduate',
  levelNote: '5 short videos',
  tagline: 'A small hot-sauce company, a launch date nobody can agree on, and everything organizational behaviour can tell us about it.',
  setting: 'Bonnet & Co. and its staff are fictional.',
  accent: 'coral',
  episodes: [
    /* ------------------------------------------------------------ 1 */
    {
      title: 'Is Conflict Bad for Teams?',
      yt: 'j9Gh3laPqu0',
      length: '3:59',
      warmup: 'Think of a team or group you have been in that "never argued". Was it really healthy, or were people keeping quiet?',
      key: [
        'Conflict is a <b>process</b> in which one party <b>perceives</b> that its interests are being opposed or negatively affected by another party. It can start in people\'s heads before anyone acts.',
        'Three views: <b>traditional</b> (all conflict is harmful), <b>human relations</b> (conflict is natural and inevitable), <b>interactionist</b> (some conflict is necessary).',
        'The "optimal conflict" curve is appealing, but it treats all conflict as one thing.',
        '<b>Task</b> conflict is about the work. <b>Relationship</b> conflict is about the people. <b>Process</b> conflict is about who does what.',
        'Evidence: relationship and process conflict are consistently linked with worse outcomes. Task conflict is, on average, neither reliably good nor reliably bad, and it easily slides into relationship conflict.'
      ],
      refs: [
        'De Dreu, C. K. W., & Weingart, L. R. (2003). Task versus relationship conflict, team performance, and team member satisfaction: A meta-analysis. <i>Journal of Applied Psychology, 88</i>(4), 741–749.',
        'de Wit, F. R. C., Greer, L. L., & Jehn, K. A. (2012). The paradox of intragroup conflict: A meta-analysis. <i>Journal of Applied Psychology, 97</i>(2), 360–390.',
        'McShane, S. L., & Von Glinow, M. A. <i>Organizational Behavior</i> (conflict chapter).'
      ],
      acts: [
        { type: 'mcq', title: 'Quick check', qs: [
          { q: 'In the definition of conflict, why does the word <i>perceives</i> matter?',
            o: ['Conflict only begins when someone raises their voice', 'Conflict starts in people\'s heads and can exist before anyone acts', 'Both parties must agree that a conflict exists', 'Only managers can identify conflict'],
            a: 1, why: 'Conflict is perceived, so two colleagues can be in conflict without the other person even knowing.' },
          { q: 'Emma says, "Production always finds a reason to say no." What type of conflict is this?',
            o: ['Task conflict', 'Process conflict', 'Relationship conflict', 'Optimal conflict'],
            a: 2, why: 'The issue has become the people. It\'s an attack on the other side\'s competence, with strong emotion attached.' },
          { q: 'What did the 2012 review of more than a hundred studies find about task conflict, on average?',
            o: ['It reliably improved team performance', 'It reliably harmed team performance', 'It was neither reliably good nor reliably bad', 'It only mattered in large teams'],
            a: 2, why: 'It looked more helpful when it stayed separate from relationship conflict, in top management teams, and when the outcome was decision quality.' }
        ]},
        { type: 'sort', title: 'Sort the conflict', prompt: 'Which type of conflict is each one? Tap a card, then tap the box it belongs in.',
          buckets: ['Task', 'Relationship', 'Process'],
          items: [
            { t: 'Emma argues the promotion won\'t wait. Dev argues a rushed batch could fail quality checks.', b: 0 },
            { t: '"Production always finds a reason to say no."', b: 1 },
            { t: 'Nobody knows who gets to set launch dates.', b: 2 },
            { t: 'Two group members disagree about whether the report should focus on cost or on customers.', b: 0 },
            { t: '"You only care about getting your name on it."', b: 1 },
            { t: 'Your group argues over who compiles the final slides and who presents.', b: 2 },
            { t: '"Sales promises things it doesn\'t understand."', b: 1 },
            { t: 'The team debates whether Mango Fire should target supermarkets or online buyers.', b: 0 }
          ]},
        { type: 'spot', title: 'Spot the moment', prompt: 'Click the line where the disagreement stops being about the work and starts being about the people.',
          lines: [
            { who: 'Emma', side: 'l', t: 'The supermarket wants Mango Fire in six weeks. The promotion won\'t wait.' },
            { who: 'Dev', side: 'r', t: 'Ten weeks is the minimum. A rushed batch could fail quality checks.' },
            { who: 'Emma', side: 'l', t: 'Production always finds a reason to say no.' },
            { who: 'Dev', side: 'r', t: 'Sales promises things it doesn\'t understand.' }
          ],
          a: 2, why: 'The first two lines are task conflict: each side argues about the launch. Emma\'s third line attacks production\'s competence, and Dev fires straight back. That is the slide from task conflict into relationship conflict.' },
        { type: 'tf', title: 'True or false?', prompt: 'Flip through the cards. Is each statement true or false, based on the video?',
          cards: [
            { t: 'The traditional view saw all conflict as harmful.', a: true, why: 'It wastes time, fuels office politics and drives good people away, or so the traditional view held.' },
            { t: 'The interactionist view says some conflict is actually necessary.', a: true, why: 'It questions assumptions and sparks better ideas.' },
            { t: 'Research shows task conflict reliably improves team performance.', a: false, why: 'On average it was neither reliably good nor reliably bad. The 2003 review even linked it with lower performance.' },
            { t: 'Relationship and process conflict were consistently linked with worse outcomes.', a: true, why: 'That was the clear pattern in the 2012 review of more than a hundred studies.' },
            { t: 'The main problem with the "optimal conflict" curve is that it treats all conflict as one thing.', a: true, why: 'It ignores the difference between conflict about the work and conflict about the people.' }
          ]},
        { type: 'reflect', title: 'Your turn', prompt: 'Think of a disagreement in a group project or team you have been part of. Was it task, relationship or process conflict (or a mix)? What is one norm that could have kept it about the work?',
          model: 'A strong answer names the type(s) of conflict with a specific example, notices whether task conflict slid into relationship conflict, and proposes a concrete norm such as "challenge the idea, not the person", agreeing roles early (to prevent process conflict), or pausing to restate the other person\'s point before disagreeing.' }
      ]
    },
    /* ------------------------------------------------------------ 2 */
    {
      title: 'Where Does Conflict at Work Come From?',
      yt: 'kg1YyEQJDHQ',
      length: '3:43',
      warmup: 'When two people at work keep clashing, is it usually their personalities? Hold on to your answer.',
      key: [
        'If conflict survives a change of people, its sources are probably <b>structural</b>.',
        'The conflict process: <b>sources</b> lead people to <b>perceive and feel</b> conflict, which shows up in <b>behaviour</b>, which produces <b>outcomes</b>. Each episode can feed the next: the <b>escalation cycle</b>.',
        'Six structural sources: <b>incompatible goals, differentiation, interdependence, scarce resources, ambiguous rules, communication problems</b>.',
        'Structural fixes: a <b>superordinate goal</b> (valued by both, reachable by neither alone), clearer rules, reduced interdependence, better communication.',
        'Caution: putting very different groups in a room to "talk it out" can backfire. Reducing differences first, through shared experiences, often works better.'
      ],
      refs: [
        'Sherif, M., Harvey, O. J., White, B. J., Hood, W. R., & Sherif, C. W. (1961). <i>Intergroup conflict and cooperation: The Robbers Cave experiment</i>. University of Oklahoma.',
        'McShane, S. L., & Von Glinow, M. A. <i>Organizational Behavior</i> (conflict chapter).'
      ],
      acts: [
        { type: 'mcq', title: 'Quick check', qs: [
          { q: 'Grace replaces Emma and Dev, and the new pair argue about exactly the same things. What does this suggest?',
            o: ['The new managers were badly chosen', 'The conflict comes from how the work is structured', 'Personality clashes are contagious', 'Conflict always gets worse over time'],
            a: 1, why: 'When the conflict survives a change of people, its sources are structural.' },
          { q: 'Nobody at Bonnet & Co. knows who decides launch dates. Which source of conflict is this?',
            o: ['Differentiation', 'Scarce resources', 'Ambiguous rules', 'Interdependence'],
            a: 2, why: 'When the rules are unclear, people fill the gap with politics.' },
          { q: 'What is a superordinate goal?',
            o: ['A goal set by senior management', 'A goal both sides value but neither can reach alone', 'The most important goal in a department', 'A goal that replaces individual targets'],
            a: 1, why: 'Winning the supermarket contract needs both sales and production, just as the Robbers Cave groups had to work together to restore the camp\'s water supply.' }
        ]},
        { type: 'order', title: 'Build the process', prompt: 'Put the stages of the conflict process in order, from first to last.',
          items: ['Sources of conflict (for example, incompatible goals)', 'People perceive and feel the conflict (frustration, irritation)', 'Conflict shows up in behaviour (a sharp email, a refusal to help)', 'Outcomes, which can be positive or negative'],
          why: 'And the middle is a loop: behaviour feeds new perceptions and emotions. Emma\'s sharp email gets a sharper reply, copied to Grace. That is the escalation cycle.' },
        { type: 'sort', title: 'Name the source', prompt: 'Match each situation to one of the six structural sources of conflict.',
          buckets: ['Incompatible goals', 'Differentiation', 'Interdependence', 'Scarce resources', 'Ambiguous rules', 'Communication problems'],
          items: [
            { t: 'Emma is rewarded for sales. Dev is rewarded for quality and low waste.', b: 0 },
            { t: 'Emma came from an advertising agency. Dev trained as a food engineer.', b: 1 },
            { t: 'Dev can\'t plan production without Emma\'s orders.', b: 2 },
            { t: 'One bottling line. One marketing budget.', b: 3 },
            { t: 'Nobody knows who decides launch dates.', b: 4 },
            { t: 'Sales and production work in different buildings and mostly talk by email.', b: 5 },
            { t: 'In your group project, nobody can start the analysis until one member finishes the survey.', b: 2 },
            { t: 'Two student clubs both want the only free room on Friday evening.', b: 3 }
          ]},
        { type: 'sort', title: 'Fix the structure', prompt: 'Grace makes four changes. Which source of conflict does each one mainly target?',
          buckets: ['Incompatible goals', 'Ambiguous rules', 'Interdependence', 'Communication problems'],
          items: [
            { t: 'Rallying everyone around winning the supermarket contract', b: 0 },
            { t: 'Launch dates are now agreed jointly and signed off by Grace', b: 1 },
            { t: 'A small stock buffer, so one late order doesn\'t stall the line', b: 2 },
            { t: 'A weekly joint meeting between sales and production', b: 3 }
          ]},
        { type: 'mcq', title: 'Think it through', qs: [
          { q: 'Two departments with very different cultures keep clashing. Their manager plans a big "let\'s talk it out" session. What caution does the video raise?',
            o: ['It always works, so do it as soon as possible', 'When differences are large, talking it out can backfire. Reducing the differences first, through shared experiences, often works better', 'Talking is pointless; only a reorganisation will help', 'The manager should pick a side first'],
            a: 1, why: 'With little shared ground, contact can just confirm stereotypes ("production always says no"). Shared experiences can build that ground first.' }
        ]},
        { type: 'reflect', title: 'Your turn', prompt: 'Think about a place you have worked or studied. Which of the six sources shows up most often? Describe one structural change (not a personality change) that might reduce it.',
          model: 'A strong answer picks one source and gives a concrete example (for example, two units rewarded on conflicting targets), then proposes a structural fix that targets that source: a shared goal or shared reward, clearer decision rights, a buffer to reduce interdependence, or more regular face-to-face contact.' }
      ]
    },
    /* ------------------------------------------------------------ 3 */
    {
      title: 'Five Ways People Handle Conflict',
      yt: 'nrMkfTaYqZg',
      length: '3:02',
      warmup: 'The last time someone wanted something that got in the way of what you wanted, what did you do? Push, give in, change the subject, meet halfway, or find something that worked for both of you?',
      key: [
        'Two dimensions (Blake & Mouton; Thomas): <b>assertiveness</b> (concern for your own interests) and <b>cooperativeness</b> (concern for the other party\'s).',
        '<b>Forcing</b>: high assertive, low cooperative (win-lose). <b>Yielding</b>: the reverse. <b>Avoiding</b>: low on both. <b>Compromising</b>: the middle. <b>Problem solving</b>: high on both (win-win).',
        'Compromise divides what\'s already on the table. Problem solving looks for an option that wasn\'t there yet.',
        'The key ingredient for problem solving is <b>information</b>: each side shares what it actually needs.',
        'Most people gravitate to one or two preferred styles, shaped by personality, cultural values and experience.'
      ],
      refs: [
        'Blake, R. R., & Mouton, J. S. (1964). <i>The managerial grid</i>. Gulf.',
        'Thomas, K. W. (1976). Conflict and conflict management. In M. D. Dunnette (Ed.), <i>Handbook of industrial and organizational psychology</i>. Rand McNally.'
      ],
      acts: [
        { type: 'mcq', title: 'Quick check', qs: [
          { q: 'Which two dimensions define the five conflict-handling styles?',
            o: ['Power and trust', 'Assertiveness and cooperativeness', 'Speed and quality', 'Emotion and logic'],
            a: 1, why: 'Assertiveness is concern for your own interests. Cooperativeness is concern for the other party\'s.' },
          { q: 'Emma goes over Dev\'s head and gets the six-week date imposed. Which style is this?',
            o: ['Forcing', 'Compromising', 'Avoiding', 'Problem solving'],
            a: 0, why: 'It\'s high assertiveness and low cooperativeness, a win-lose approach.' },
          { q: 'How is problem solving different from compromising?',
            o: ['It\'s faster', 'Each side gives up something', 'It looks for a new option by sharing what each side really needs', 'A manager makes the final decision'],
            a: 2, why: 'Compromise divides what\'s already on the table. Problem solving found the six-week flagship batch, which nobody had proposed.' }
        ]},
        { type: 'grid', title: 'Place it on the grid', prompt: 'Read each response and click where it sits on the grid.',
          items: [
            { t: 'Emma stops answering Dev\'s emails and hopes the problem sorts itself out.', a: 'avoiding' },
            { t: 'They split the difference at eight weeks.', a: 'compromising' },
            { t: 'Emma gives in and tells the supermarket it will be ten weeks.', a: 'yielding' },
            { t: 'A groupmate says, "We\'re doing my topic. I\'ll take it to the lecturer if I have to."', a: 'forcing' },
            { t: 'You and a groupmate each explain what you really need from the topic, and find a third topic that covers both.', a: 'problem' },
            { t: 'Your flatmate wants to host friends every night; you want quiet. You agree they can host on Fridays only.', a: 'compromising' }
          ]},
        { type: 'multi', title: 'Find the win-win', prompt: 'Emma wants six weeks. Dev wants ten. Which two pieces of information unlocked the problem-solving solution? Select two.',
          o: ['The supermarket only needs stock in its ten flagship stores at the start of the promotion', 'Grace would prefer the six-week date', 'Dev\'s real worry is the full production run, not a small first batch', 'Emma\'s bonus depends on the supermarket deal', 'The bottling line is booked in week eight'],
          a: [0, 2], why: 'Once both interests were on the table, a new option appeared: a small, carefully made flagship batch in six weeks, with the full rollout at ten.' },
        { type: 'selfcheck', title: 'What\'s your default?', prompt: 'How true is each statement of you when you disagree with someone? This is an informal reflection tool, not a validated test, and there are no right answers.',
          styles: ['Forcing', 'Yielding', 'Avoiding', 'Compromising', 'Problem solving'],
          items: [
            { t: 'When I\'m sure I\'m right, I push hard to get my way.', s: 0 },
            { t: 'I usually give way so the other person is happy.', s: 1 },
            { t: 'I would rather change the subject than have an argument.', s: 2 },
            { t: 'I look for a middle point where we each give a little.', s: 3 },
            { t: 'I try to get both sides\' real concerns out in the open.', s: 4 },
            { t: 'I\'ll go to someone with authority if that\'s what it takes to win.', s: 0 },
            { t: 'If it matters more to them than to me, I let them have it.', s: 1 },
            { t: 'I leave disagreements alone and hope they sort themselves out.', s: 2 },
            { t: 'Splitting the difference usually seems fairest to me.', s: 3 },
            { t: 'I look for a new option that fully meets what we both need.', s: 4 }
          ],
          after: 'Your default may not be the one you expected. Next episode asks a harder question: is the top-right corner always the right answer?' },
        { type: 'reflect', title: 'Your turn', prompt: 'Describe a recent disagreement (at work, university or home). Which style did you use? What information would the two of you have needed to share to problem-solve instead?',
          model: 'A strong answer identifies the style using both dimensions (how much you pushed for your interests, how much you cared about theirs), then names the underlying needs on each side that were not shared, and sketches an option that might have met both.' }
      ]
    },
    /* ------------------------------------------------------------ 4 */
    {
      title: 'Is Collaboration Always Best?',
      yt: 'ftS87kIJOFc',
      length: '3:35',
      warmup: 'Imagine a full problem-solving session about which day the staff lunch happens. Is win-win always worth it?',
      key: [
        'Preference view: your style is a personal habit, and collaboration is the ideal. <b>Contingency view</b>: the best style depends on the situation (Thomas, 1977).',
        'Read three things: how <b>critical</b> the issue is (to you and to them) and how much <b>time</b> there is; the balance of <b>power</b>; how <b>aggressive or cooperative</b> the other party seems.',
        'Every style has a cost. Forcing risks relationship conflict; yielding can raise expectations; avoiding leaves issues unresolved; compromise leaves gains on the table; problem solving takes time and exposes information.',
        'Third-party approaches: <b>mediation</b> (manager guides, parties decide), <b>arbitration</b> (manager decides after hearing both), <b>inquisition</b> (manager controls everything).',
        'Managers lean toward inquisition, but it\'s usually the least effective and seen as less fair. Mediation tends to bring the most satisfaction.'
      ],
      refs: [
        'Thomas, K. W. (1977). Toward multi-dimensional values in teaching: The example of conflict behaviors. <i>Academy of Management Review, 2</i>(3), 484–490.',
        'Callanan, G. A., & Perri, D. F. (2006). Teaching conflict management using a scenario-based approach. <i>Journal of Education for Business, 81</i>(3), 131–139.',
        'Sheppard, B. H. (1984). Third party conflict intervention: A procedural framework. <i>Research in Organizational Behavior, 6</i>, 141–190.'
      ],
      acts: [
        { type: 'mcq', title: 'Quick check', qs: [
          { q: 'What does the contingency perspective say about conflict styles?',
            o: ['Everyone should be trained to collaborate', 'The best style depends on the situation', 'Your style is fixed by personality', 'Compromise is the safest default'],
            a: 1, why: 'All five styles are useful skills in the right circumstances.' },
          { q: 'Grace wants her tagline on the label. It matters a lot to her, little to Emma, and Grace is the boss. Which style fits?',
            o: ['Forcing', 'Avoiding', 'Yielding', 'Problem solving'],
            a: 2, why: 'Low stakes for Emma, high for the other party, and a power imbalance all point to yielding.' },
          { q: 'Which third-party approach tends to bring the most satisfaction with both the process and the outcome?',
            o: ['Inquisition', 'Arbitration', 'Mediation', 'Avoidance'],
            a: 2, why: 'In mediation the parties make the decision themselves. Managers often lean toward inquisition, but it\'s usually the least effective and is seen as less fair.' }
        ]},
        { type: 'sort', title: 'You make the call', prompt: 'New situations. Read the stakes, the time, the power and the other party, then choose the style that fits best.',
          buckets: ['Forcing', 'Yielding', 'Avoiding', 'Compromising', 'Problem solving'],
          items: [
            { t: 'The event starts in 20 minutes. A supplier wants to cut a safety step to save time. You\'re in charge and it\'s not negotiable.', b: 0, why: 'High stakes, no time, and a non-negotiable issue.' },
            { t: 'A teammate wants the slides in blue, not green. You don\'t care much; it matters to them.', b: 1, why: 'Low stakes for you, higher for them. Yielding builds goodwill cheaply.' },
            { t: 'Two colleagues bicker about which radio station to play. You have a major deadline today.', b: 2, why: 'Trivial issue, bigger fires to fight. Avoid it, for now.' },
            { t: 'You and another unit must split a fixed travel budget before 5 p.m. You have equal say.', b: 3, why: 'Fixed resource, time pressure, equal power.' },
            { t: 'Your group must design a semester-long project plan. Both sides have important, different needs, and you trust each other.', b: 4, why: 'Complex, high stakes for both, time available, and enough trust to share information.' }
          ]},
        { type: 'sort', title: 'Every style has a cost', prompt: 'Match each style to its main risk.',
          buckets: ['Forcing', 'Yielding', 'Avoiding', 'Compromising', 'Problem solving'],
          items: [
            { t: 'Can turn task conflict into relationship conflict', b: 0 },
            { t: 'Can raise the other side\'s expectations next time', b: 1 },
            { t: 'Usually leaves the issue unresolved', b: 2 },
            { t: 'Can leave mutual gains on the table', b: 3 },
            { t: 'Takes time, and means sharing information the other side could use against you', b: 4 }
          ]},
        { type: 'sort', title: 'When managers step in', prompt: 'Which third-party approach does each statement describe?',
          buckets: ['Mediation', 'Arbitration', 'Inquisition'],
          items: [
            { t: 'The manager guides the process, but the parties make the decision.', b: 0 },
            { t: 'Each side presents its case, and the manager decides.', b: 1 },
            { t: 'The manager asks the questions, chooses what information counts, and imposes a decision.', b: 2 },
            { t: 'Managers naturally lean toward it, but it\'s usually the least effective.', b: 2 },
            { t: 'Tends to bring the most satisfaction with process and outcome.', b: 0 },
            { t: 'A sensible fallback when mediation fails.', b: 1 }
          ]},
        { type: 'reflect', title: 'Your turn', prompt: 'Describe a time when forcing, yielding or avoiding turned out to be the right call. Use the three things to read (stakes and time, power, the other party) to explain why.',
          model: 'A strong answer names the style, then explicitly reads the situation: how critical the issue was to each side and how much time there was, who held more power, and whether the other party was cooperative. It also acknowledges the cost of the style chosen.' }
      ]
    },
    /* ------------------------------------------------------------ 5 */
    {
      title: 'Why Negotiators Leave Value on the Table',
      yt: '3OT0UipcjDE',
      length: '3:45',
      warmup: 'Two teams need the same rare oranges, and only three thousand exist. What would you do?',
      key: [
        'A <b>position</b> is what you say you want. An <b>interest</b> is why you want it (Fisher & Ury, <i>Getting to Yes</i>).',
        'Many negotiators assume the other side\'s interests are completely opposed: the <b>fixed-pie assumption</b>.',
        '<b>Distributive</b> negotiation is win-lose (fixed pie). <b>Integrative</b> negotiation is win-win (expandable pie).',
        'Bargaining zone: each side has an <b>initial offer</b>, a <b>target</b> and a <b>resistance point</b>. A deal is possible where the resistance points overlap.',
        '<b>Claiming value</b>: know your BATNA, make a strong first offer (anchoring), watch deadlines. <b>Creating value</b>: ask questions, find interests, put several issues on the table.'
      ],
      refs: [
        'Fisher, R., & Ury, W. (1981). <i>Getting to yes: Negotiating agreement without giving in</i>. Houghton Mifflin.',
        'Thompson, L., & Hastie, R. (1990). Social perception in negotiation. <i>Organizational Behavior and Human Decision Processes, 47</i>(1), 98–123.',
        'Galinsky, A. D., & Mussweiler, T. (2001). First offers as anchors. <i>Journal of Personality and Social Psychology, 81</i>(4), 657–669.'
      ],
      acts: [
        { type: 'mcq', title: 'Quick check', qs: [
          { q: '"We need the rind" is an example of…',
            o: ['a position', 'an interest', 'a BATNA', 'a resistance point'],
            a: 1, why: '"We need all three thousand oranges" is the position. The rind is the interest behind it.' },
          { q: 'Emma won\'t go below $95 and Ms Clarke won\'t go above $110. Where is a deal possible?',
            o: ['Anywhere between $85 and $120', 'Only at $105', 'Between $95 and $110', 'Nowhere, because the opening offers are too far apart'],
            a: 2, why: 'The bargaining zone is where the two resistance points overlap.' },
          { q: 'What is Emma\'s BATNA?',
            o: ['Her $120 opening offer', 'The second retailer that\'s interested', 'Six-week flagship delivery', 'The end-of-aisle display'],
            a: 1, why: 'A BATNA is your best alternative to a negotiated agreement, and it\'s what lets Emma walk away if she has to.' }
        ]},
        { type: 'sort', title: 'Position or interest?', prompt: 'Is each statement a position (what someone demands) or an interest (why they want it)?',
          buckets: ['Position', 'Interest'],
          items: [
            { t: '"We need all three thousand oranges."', b: 0 },
            { t: '"We need the rind."', b: 1 },
            { t: '"I want a $10,000 raise."', b: 0 },
            { t: '"I need to cover my new childcare costs."', b: 1 },
            { t: '"The launch must be in six weeks."', b: 0 },
            { t: '"The buyer needs stock on flagship shelves for the promotion."', b: 1 },
            { t: '"I\'m not moving to the night shift."', b: 0 },
            { t: '"I need my evenings free for my evening classes."', b: 1 }
          ]},
        { type: 'zone', title: 'Find the bargaining zone', prompt: 'Drag the two handles to mark the range where a deal between Emma and Ms Clarke is possible.',
          min: 80, max: 125, unit: '$',
          parties: [
            { who: 'Emma (seller)', color: 'coral', initial: 120, target: 105, resist: 95 },
            { who: 'Ms Clarke (buyer)', color: 'sage', initial: 85, target: 98, resist: 110 }
          ],
          a: [95, 110], why: 'Emma won\'t go below $95 and Ms Clarke won\'t go above $110, so anything from $95 to $110 works for both. Where exactly it lands depends on how well each side negotiates. The final package came in at $106 a case.' },
        { type: 'sort', title: 'Claim or create?', prompt: 'Is each tactic mainly about claiming value (a better slice for you) or creating value (a bigger pie)?',
          buckets: ['Claiming value', 'Creating value'],
          items: [
            { t: 'Knowing your BATNA before you walk in', b: 0 },
            { t: 'Making a strong first offer', b: 0 },
            { t: 'Using a deadline', b: 0 },
            { t: 'Asking what matters most to the other side', b: 1 },
            { t: 'Putting several issues on the table at once', b: 1 },
            { t: 'Looking for the interests behind positions', b: 1 }
          ]},
        { type: 'mcq', title: 'Think it through', qs: [
          { q: 'Why did the six-week flagship batch become Emma\'s strongest bargaining chip?',
            o: ['It was the cheapest option for Bonnet & Co.', 'It met Ms Clarke\'s top interest (the promotion), so Emma could trade it for what Bonnet & Co. cared about: price and shelf space', 'It let Emma avoid talking about price', 'It forced Ms Clarke to accept the opening offer'],
            a: 1, why: 'Integrative deals work by trading on issues the two sides value differently. The final package: flagship delivery in six weeks for $106 a case plus an end-of-aisle display.' },
          { q: 'Research on first offers suggests that…',
            o: ['the side that speaks second always wins', 'first offers tend to anchor where the final deal lands', 'first offers have no effect if the other side is experienced', 'you should never make the first offer'],
            a: 1, why: 'First offers act as anchors (Galinsky & Mussweiler, 2001).' }
        ]},
        { type: 'reflect', title: 'Your turn', prompt: 'Think of a negotiation you have been in (a price, a deadline, a shift swap, a group project role). What was the other side\'s position? What might their interest have been? Could a package of several issues have worked better?',
          model: 'A strong answer separates the position ("I want X") from the interest ("because Y"), considers whether the fixed-pie assumption was at work, and proposes a package that trades issues the two sides valued differently.' }
      ]
    }
  ],
  final: {
    title: 'Final challenge: Bonnet & Co.',
    blurb: 'Eight mixed questions across the whole series. Finish all five episodes first, or try it cold.',
    acts: [
      { type: 'mcq', title: 'Mixed review', qs: [
        { q: 'The Sweet Heat team never argued, and the sauce flopped. According to the video, what did the team really need?',
          o: ['More conflict of every kind', 'No conflict at all', 'The right kind of conflict (about the work), and a way to stop it getting personal', 'A stronger manager to make decisions alone'],
          a: 2, why: 'The useful question isn\'t how much conflict a team has. It\'s what the conflict is about.' },
        { q: 'Sales is rewarded for speed; production for quality and low waste. This is…',
          o: ['differentiation', 'incompatible goals', 'process conflict', 'a superordinate goal'],
          a: 1, why: 'Each goal makes sense on its own. Together, they collide.' },
        { q: 'Which change would most directly reduce conflict caused by ambiguous rules?',
          o: ['A team-building retreat', 'Clarifying who decides launch dates', 'A bigger marketing budget', 'Moving sales and production into one building'],
          a: 1, why: 'Ambiguous rules are fixed by clarifying the rules. Grace made launch dates a joint decision she signs off.' },
        { q: 'Splitting the difference at eight weeks is an example of…',
          o: ['problem solving', 'compromising', 'yielding', 'avoiding'],
          a: 1, why: 'Each side gives something up, and the promotion is still missed.' },
        { q: 'A manager hears both sides of a dispute and then makes a binding decision. This is…',
          o: ['mediation', 'arbitration', 'inquisition', 'negotiation'],
          a: 1, why: 'In arbitration, the parties present their cases; the manager decides.' },
        { q: 'Which statement best reflects the contingency perspective?',
          o: ['Problem solving is always best', 'Each person has one fixed style', 'All five styles are useful in the right circumstances', 'Avoiding should never be used'],
          a: 2, why: 'The skill is having all five styles and knowing when to reach for each.' },
        { q: 'If the seller\'s resistance point is $95 and the buyer\'s is $90, then…',
          o: ['the deal will land at $92.50', 'there is no bargaining zone on price alone', 'the buyer must accept $95', 'the seller\'s BATNA is $90'],
          a: 1, why: 'The resistance points don\'t overlap. Adding other issues (delivery dates, display space) might still create a deal.' },
        { q: 'Which question is most likely to turn a distributive negotiation into an integrative one?',
          o: ['"What\'s your final price?"', '"Why do you want what you\'re asking for?"', '"Can we split the difference?"', '"Who has the authority to decide?"'],
          a: 1, why: 'Asking about interests is how the orange teams discover that one needs the juice and the other the rind.' }
      ]}
    ]
  }
});
