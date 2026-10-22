/* Conflict in Teams (postgraduate series): content and activities. */
window.SERIES = window.SERIES || [];
window.SERIES.push({
  id: 'cit',
  title: 'Conflict in Teams',
  level: 'Postgraduate',
  levelNote: '7 short videos',
  tagline: 'What the research really says about silence, emotion, mindfulness, leaders and diversity in team conflict, with Caribbean teams as the case studies.',
  setting: 'The organizations and characters in these videos are fictional.',
  accent: 'indigo',
  episodes: [
    /* ------------------------------------------------------------ 1 */
    {
      title: 'Conflict Debt: Why Polite Teams Pay Later',
      yt: 'XGCwxNS7hmU',
      length: '3:57',
      warmup: 'Have you ever left a meeting where everyone agreed, and then heard what people really thought in the corridor or the car park?',
      key: [
        '<b>Organizational silence</b> (Morrison & Milliken, 2000): employees hold back concerns because speaking up seems pointless or risky.',
        '<b>Conflict debt</b> (Davey, 2019): the build-up of issues a team hasn\'t discussed or resolved. Like financial debt, it gathers interest.',
        'Davey\'s moves: make built-in tensions explicit; give rare perspectives a duty to speak; agree ground rules for disagreement.',
        'Nemeth et al. (2001): <b>genuine dissent</b> sparked more original thinking than role-played devil\'s advocacy.',
        'Move from <b>permission</b> to disagree to an <b>obligation</b> to disagree, while still not tolerating personal attacks.'
      ],
      refs: [
        'Davey, L. (2019). <i>The good fight: Use productive conflict to get your team and organization back on track</i>. Page Two.',
        'de Wit, F. R. C., Greer, L. L., & Jehn, K. A. (2012). The paradox of intragroup conflict: A meta-analysis. <i>Journal of Applied Psychology, 97</i>(2), 360–390.',
        'Morrison, E. W., & Milliken, F. J. (2000). Organizational silence: A barrier to change and development in a pluralistic world. <i>Academy of Management Review, 25</i>(4), 706–725.',
        'Nemeth, C., Brown, K., & Rogers, J. (2001). Devil\'s advocate versus authentic dissent: Stimulating quantity and quality. <i>European Journal of Social Psychology, 31</i>(6), 707–720.'
      ],
      acts: [
        { type: 'mcq', title: 'Quick check', qs: [
          { q: 'What is "conflict debt"?',
            o: ['Money a team loses through badly run meetings', 'The build-up of issues a team hasn\'t discussed or resolved', 'Unpaid time spent arguing after work', 'A record of past arguments between team members'],
            a: 1, why: 'Davey describes it as issues a team hasn\'t discussed or resolved, which sit between it and real progress.' },
          { q: 'At the hotel, why is it a sign of health if Natalie (sales) and Kwame (operations) sometimes frustrate each other?',
            o: ['Their roles are built to pull in different directions', 'They dislike each other personally', 'Frustration always improves performance', 'Kwame is naturally negative'],
            a: 0, why: 'Sales is paid to say yes, operations to protect consistency. If they never clash, one of them probably isn\'t doing their job.' },
          { q: 'What did Nemeth and colleagues find about dissent?',
            o: ['Role-played dissent was as effective as genuine dissent', 'Dissent of any kind reduced original thinking', 'Genuine dissent sparked more original thinking than role-played dissent', 'Teams ignored all forms of dissent'],
            a: 2, why: 'In their experiments, people engaged more with someone who actually believed what they were saying.' }
        ]},
        { type: 'dilemma', title: 'The conflict debt meter', meter: 'Conflict debt', good: 'low',
          intro: 'You are Kwame, operations manager at a small hotel in Tobago. You think the 300-guest wedding expo is a bad idea: there aren\'t enough staff. Every choice changes your team\'s conflict debt.',
          rounds: [
            { s: 'Mrs Baptiste asks: "So, we\'re all agreed? We\'ll host the expo next month?" Everyone is nodding.',
              c: [
                { t: 'Nod along. It\'s not worth the awkwardness.', d: 30, f: 'Silence feels safe, but the staffing worry is now on the books, gathering interest.' },
                { t: '"Before we vote: our current roster covers about 180 guests. What would we need for 300?"', d: 0, f: 'Raised early, while it\'s still cheap. Specific, about the work, and framed as a question.' },
                { t: '"Sure, if we can clone the staff by then."', d: 15, f: 'You raised it, but as a jab. Sarcasm makes it easier for others to hear negativity rather than information.' }
              ]},
            { s: 'Ten minutes later, in the car park, Natalie from sales says: "Great meeting! This expo is going to be amazing."',
              c: [
                { t: 'Vent to her: "We\'ll never pull it off. Nobody thought this through."', d: 20, f: 'This is the meeting after the meeting. The concern is now gossip, not a decision input.' },
                { t: 'Ask Mrs Baptiste for ten minutes tomorrow to revisit staffing.', d: -15, f: 'Paying down the debt. The issue goes back where it can actually be decided.' },
                { t: 'Smile and say nothing.', d: 10, f: 'Interest keeps accruing.' }
              ]},
            { s: 'The expo is over. The team is exhausted, and the debrief is starting to feel tense.',
              c: [
                { t: '"Sales always overpromises."', d: 25, f: 'Now it\'s personal. Relationship conflict is the kind most consistently linked with worse team outcomes.' },
                { t: 'Propose a ground rule: before any vote, the team asks operations, "What worries you about this?"', d: -20, f: 'This makes productive conflict part of the job: an expectation, not an invitation.' },
                { t: 'Stay quiet so the debrief ends on time.', d: 10, f: 'The same pattern will repeat at the next big event.' }
              ]}
          ],
          end: [
            { max: 10, t: 'Low debt. You kept disagreement about the work, and raised it while it was cheap.' },
            { max: 40, t: 'Moderate debt. Some concerns got raised, some went to the car park.' },
            { max: 999, t: 'High debt. The real meetings happened outside the boardroom, and the team paid for it with interest.' }
          ]},
        { type: 'sort', title: 'Right friction, wrong friction', prompt: 'Normalizing conflict means normalizing disagreement about the work, not personal attacks. Sort each line.',
          buckets: ['Productive (about the work)', 'Unproductive (about the person)'],
          items: [
            { t: '"Our current roster can\'t cover 300 guests."', b: 0 },
            { t: '"Operations is always so negative."', b: 1 },
            { t: '"What worries you about this plan?"', b: 0 },
            { t: '"Typical Kwame, killing every good idea."', b: 1 },
            { t: '"If we take this on, which event do we drop?"', b: 0 },
            { t: 'Rolling your eyes whenever sales speaks.', b: 1 }
          ]},
        { type: 'mcq', title: 'Think it through', qs: [
          { q: 'Why does Davey argue that giving people <i>permission</i> to disagree isn\'t enough?',
            o: ['Permission is legally risky', 'Permission to do something uncomfortable rarely gets used, so productive conflict has to become an expectation', 'People already disagree too much', 'Only leaders should disagree'],
            a: 1, why: 'Productive conflict has to become part of the job: an expectation, not an invitation.' },
          { q: 'Your team appoints a devil\'s advocate for every decision. Based on Nemeth\'s research, what is the most accurate caution?',
            o: ['It will harm the team\'s creativity', 'It can help, but people seem to engage more with someone who genuinely believes the dissenting view', 'It is identical in effect to genuine dissent', 'It should only be used by the leader'],
            a: 1, why: 'An assigned critic can still help, but genuine dissent sparked more original thinking in their experiments.' }
        ]},
        { type: 'reflect', title: 'Your turn', prompt: 'What is one issue a team you belong to is "paying interest" on right now? What would it take to raise it at the next meeting, and how could you frame it so it stays about the work?',
          model: 'A strong answer names a specific, unspoken issue; explains how its cost is growing (the "interest"); identifies why it hasn\'t been raised (pointlessness, risk, norms of politeness); and proposes a framing that is specific, about the work and early, for example inviting a quiet role to answer "what worries you about this?"' }
      ]
    },
    /* ------------------------------------------------------------ 2 */
    {
      title: 'When Disagreement Gets Personal',
      yt: 'fc15wZMCe8k',
      length: '3:39',
      warmup: '"Task conflict good, relationship conflict bad." You may have learned this rule. Do you think it holds up?',
      key: [
        'De Dreu & Weingart (2003): <b>both</b> task and relationship conflict were linked with lower team performance.',
        'de Wit, Greer & Jehn (2012), 116 studies: relationship conflict reliably harmful; task conflict on average neither clearly good nor bad, but more beneficial when <b>weakly tied</b> to relationship conflict.',
        'Simons & Peterson (2000): the slide happens through <b>misattribution</b>, inferring a hidden motive behind a challenge. <b>Trust</b> weakens the link.',
        '<b>Team psychological safety</b> (Edmondson, 1999): a shared belief that the team is safe for interpersonal risk-taking. Related to trust, but not the same.',
        'Bradley et al. (2012), 117 student teams: task conflict was linked with better performance <b>only when psychological safety was high</b>.'
      ],
      refs: [
        'Bradley, B. H., Postlethwaite, B. E., Klotz, A. C., Hamdani, M. R., & Brown, K. G. (2012). Reaping the benefits of task conflict in teams: The critical role of team psychological safety climate. <i>Journal of Applied Psychology, 97</i>(1), 151–158.',
        'De Dreu, C. K. W., & Weingart, L. R. (2003). Task versus relationship conflict, team performance, and team member satisfaction: A meta-analysis. <i>Journal of Applied Psychology, 88</i>(4), 741–749.',
        'de Wit, F. R. C., Greer, L. L., & Jehn, K. A. (2012). The paradox of intragroup conflict: A meta-analysis. <i>Journal of Applied Psychology, 97</i>(2), 360–390.',
        'Edmondson, A. (1999). Psychological safety and learning behavior in work teams. <i>Administrative Science Quarterly, 44</i>(2), 350–383.',
        'Simons, T. L., & Peterson, R. S. (2000). Task conflict and relationship conflict in top management teams: The pivotal role of intragroup trust. <i>Journal of Applied Psychology, 85</i>(1), 102–111.'
      ],
      acts: [
        { type: 'mcq', title: 'Quick check', qs: [
          { q: 'How did the video define team psychological safety?',
            o: ['Members trust their leader\'s decisions', 'A shared belief that the team is safe for interpersonal risk-taking', 'A team that avoids all conflict', 'Protection from being fired for mistakes'],
            a: 1, why: 'That is Edmondson\'s definition. Trust is about giving someone else the benefit of the doubt. Safety is believing the team will give it to you.' },
          { q: 'At Bayside Design, when does the atrium disagreement start to slide into relationship conflict?',
            o: ['When Marcus says the span is too wide for the budget', 'When Ms Persad puts the calculations on screen', 'When Aaliyah proposes the open atrium', 'When Aaliyah hears "design ignores physics" as "He thinks I\'m careless"'],
            a: 3, why: 'Misattribution: inferring a hidden motive turns a disagreement about steel and money into one about each other.' },
          { q: 'In Bradley and colleagues\' study of 117 student project teams, when was task conflict linked with better final performance?',
            o: ['When psychological safety was high', 'When relationship conflict was also high', 'When the team had a strong leader', 'Never: it always hurt performance'],
            a: 0, why: 'With high psychological safety, task conflict helped. When safety was low, the benefit disappeared.' }
        ]},
        { type: 'spot', title: 'Spot the misattribution', prompt: 'A postgraduate project group is discussing their research design. Click the line where misattribution happens.',
          lines: [
            { who: 'Anika', side: 'l', t: 'I think our sample is too small to support that claim.' },
            { who: 'Ravi', side: 'r', t: 'We could add the responses from the second cohort.' },
            { who: 'Anika', side: 'l', t: 'That would delay the analysis by about a week.' },
            { who: 'Ravi (thinking)', side: 'r', think: true, t: 'She just wants to look cleverer than me in front of the supervisor.' },
            { who: 'Ravi', side: 'r', t: 'Fine. Whatever you say.' }
          ],
          a: 3, why: 'Anika\'s comments are all about the sample and the timeline. Ravi infers a hidden motive (status), and from that moment the disagreement is about each other, not the design. His curt reply is the symptom; the inference is the cause.' },
        { type: 'sort', title: 'Trust or psychological safety?', prompt: 'They overlap, but they are not the same. Is each statement mainly about trust (how I read you) or team psychological safety (how I expect the team to treat me)?',
          buckets: ['Trust', 'Psychological safety'],
          items: [
            { t: 'I give Marcus the benefit of the doubt when he challenges my design.', b: 0 },
            { t: 'I believe the team won\'t embarrass me if I admit a mistake.', b: 1 },
            { t: 'I assume your comment is about the budget, not about me.', b: 0 },
            { t: 'I feel I can raise a half-formed idea in our team meeting.', b: 1 },
            { t: 'I believe that if I speak up, the team will give me the benefit of the doubt.', b: 1 },
            { t: 'I read your challenge as being about the work.', b: 0 }
          ]},
        { type: 'tf', title: 'Check the evidence', prompt: 'True or false, based on the studies in the video?',
          cards: [
            { t: 'De Dreu and Weingart (2003) found both task and relationship conflict were linked with lower team performance.', a: true, why: 'That is what made the "task conflict is good" rule look shaky.' },
            { t: 'de Wit et al. (2012) found task conflict was, on average, clearly beneficial.', a: false, why: 'On average it was neither clearly good nor clearly bad.' },
            { t: 'Task conflict looked more beneficial when it was only weakly tied to relationship conflict.', a: true, why: 'So the problem may be how easily task conflict slides into the other kind.' },
            { t: 'Simons and Peterson found the task-to-relationship conflict link was weaker in high-trust teams.', a: true, why: 'If I trust you, I\'m more likely to read your challenge as being about the work.' },
            { t: 'Bradley et al. found task conflict helped performance regardless of psychological safety.', a: false, why: 'The benefit appeared only when psychological safety was high.' }
          ]},
        { type: 'multi', title: 'What can leaders do?', prompt: 'Which of these does the video suggest can stop challenges from feeling like threats? Select all that apply.',
          o: ['Invite dissent explicitly', 'Ban disagreement in meetings to keep the peace', 'Meet bad news with curiosity rather than blame', 'Step in early when the language shifts from "the design" to "you"', 'Let people sort it out privately afterwards', 'Bring the discussion back to shared evidence, like the span calculations'],
          a: [0, 2, 3, 5], why: 'Leaders work on two fronts at once: encouraging challenge, and building the conditions that stop challenge from feeling like a threat.' },
        { type: 'reflect', title: 'Your turn', prompt: 'Think of a work disagreement that turned personal. What was the moment it stopped being about the work? What hidden motive did someone infer?',
          model: 'A strong answer pinpoints the turning point (often a word like "you", "always" or "typical"), identifies the inferred motive (status, turf, disrespect), and considers whether trust or team psychological safety would have changed how the challenge was read.' }
      ]
    },
    /* ------------------------------------------------------------ 3 */
    {
      title: 'Arguing Well Is an Emotional Skill',
      yt: 'R15NLdV6ZeU',
      length: '3:45',
      warmup: 'It\'s 11:47 p.m. Someone has just criticised your work, and your reply is already typed. What do you do in the next ten seconds?',
      key: [
        'A challenge can feel like a threat. Strong negative emotion <b>narrows attention</b> and uses up the resources needed for careful thinking.',
        'Jiang, Zhang & Tjosvold (2013), 39 bank teams: where members were good at <b>emotion regulation</b>, task conflict had a stronger positive link with performance and the usual harm from relationship conflict disappeared. One survey study: association, not proof of cause.',
        'Gross: <b>reappraisal</b> acts early (change the interpretation); <b>suppression</b> acts late (hold back the expression).',
        'Suppression can stop a bad email, but as a habit it carries costs. Reappraisal tends to be the healthier long-term habit.',
        '<b>Name the emotion precisely</b> (Susan David). Lieberman et al. (2007): putting feelings into words reduced amygdala responses.'
      ],
      refs: [
        'David, S. (2016). 3 ways to better understand your emotions. <i>Harvard Business Review</i>.',
        'Gross, J. J. (1998). The emerging field of emotion regulation: An integrative review. <i>Review of General Psychology, 2</i>(3), 271–299.',
        'Jiang, J. Y., Zhang, X., & Tjosvold, D. (2013). Emotion regulation as a boundary condition of the relationship between team conflict and performance: A multi-level examination. <i>Journal of Organizational Behavior, 34</i>(5), 714–734.',
        'Lieberman, M. D., Eisenberger, N. I., Crockett, M. J., Tom, S. M., Pfeifer, J. H., & Way, B. M. (2007). Putting feelings into words: Affect labeling disrupts amygdala activity in response to affective stimuli. <i>Psychological Science, 18</i>(5), 421–428.'
      ],
      acts: [
        { type: 'mcq', title: 'Quick check', qs: [
          { q: 'What is reappraisal?',
            o: ['Holding back the expression of a feeling you still have', 'Asking a colleague to review your work again', 'Changing how you interpret the situation', 'Venting the emotion to a friend'],
            a: 2, why: 'Reappraisal acts early by changing the interpretation. Suppression acts later by holding back the expression.' },
          { q: 'Priya rereads Jerome\'s comment and decides she\'s not angry. What does she decide she feels instead?',
            o: ['Embarrassed, and worried about the deadline', 'Bored and tired', 'Proud of the proposal', 'Jealous of Jerome'],
            a: 0, why: 'Naming the feeling precisely lets her delete the reply and ask to go through the budget together at nine.' },
          { q: 'In Jiang, Zhang and Tjosvold\'s study of 39 bank teams, what happened in teams whose members were good at emotion regulation?',
            o: ['Task conflict disappeared completely', 'Task conflict had a stronger positive link with performance, and the usual harm from relationship conflict disappeared', 'Relationship conflict improved performance', 'Performance fell because people hid their feelings'],
            a: 1, why: 'The pattern held for whole teams. It was a single survey study, so it shows an association, not proof of cause.' }
        ]},
        { type: 'sort', title: 'Early or late?', prompt: 'Is each response reappraisal (changing the interpretation) or suppression (holding back the expression)?',
          buckets: ['Reappraisal', 'Suppression'],
          items: [
            { t: '"Jerome isn\'t attacking me. His job is to stop us sending a budget the donor will reject."', b: 0 },
            { t: 'Smiling through the meeting while seething inside.', b: 1 },
            { t: 'Biting your tongue so the midnight email doesn\'t get sent.', b: 1 },
            { t: 'Reading a harsh review as a sign the reviewer read your work closely.', b: 0 },
            { t: 'Keeping a neutral face while your manager criticises your slides.', b: 1 },
            { t: 'Reminding yourself the client\'s anger is about the delay, not about you.', b: 0 }
          ]},
        { type: 'order', title: 'Priya\'s ten seconds', prompt: 'Put Priya\'s response in the order the video recommends.',
          items: ['Reads Jerome\'s comment, and a reply is already typed', 'Pauses and names the feeling precisely: embarrassed, and worried about the deadline', 'Reinterprets the comment: Jerome\'s job is to protect the bid', 'Deletes the reply', 'Writes: "Can we go through the budget together at nine?"'],
          why: 'Naming the emotion is the useful first step before either strategy. Reappraisal then changes what the comment means, so there is less to suppress.' },
        { type: 'multi', title: 'Name it precisely', open: true, prompt: 'A teammate presents your idea in a meeting as if it were theirs. "Angry" is a broad label. Which words might describe it more precisely? Pick up to three that feel right to you.',
          o: ['Overlooked', 'Resentful', 'Embarrassed', 'Anxious about my reputation', 'Disappointed', 'Betrayed', 'Confused', 'Competitive'],
          max: 3, why: 'There\'s no single right answer here. The point is granularity: "overlooked" points to a different conversation than "betrayed". People who describe their emotions in finer detail tend to handle negative emotions more effectively.' },
        { type: 'tf', title: 'Read the fine print', prompt: 'True or false?',
          cards: [
            { t: 'The 39-team bank study proves that emotion regulation causes better team performance.', a: false, why: 'It was a single survey study, so it shows an association, not proof of cause.' },
            { t: 'In Lieberman\'s brain-imaging study, putting feelings into words reduced amygdala responses to emotional images.', a: true, why: 'That is the lab evidence behind "name it to tame it".' },
            { t: 'Suppression is generally the healthier long-term habit.', a: false, why: 'Suppression has its uses, but as a habit it carries costs. Reappraisal tends to be healthier.' },
            { t: 'Other people can often sense when someone is suppressing a feeling.', a: true, why: 'That is one reason habitual suppression can harm the conversation itself.' }
          ]},
        { type: 'reflect', title: 'Your turn', prompt: 'Recall a comment that stung. What word would describe the feeling more precisely than "angry" or "upset"? Write one reappraisal of the other person\'s comment.',
          model: 'A strong answer uses a specific emotion word (for example, "dismissed", "embarrassed", "anxious about the deadline") and a reappraisal that offers a plausible, work-related reason for the other person\'s comment, without excusing genuinely bad behaviour.' }
      ]
    },
    /* ------------------------------------------------------------ 4 */
    {
      title: 'The Mindful Team',
      yt: 'GSR1Y6LBzWA',
      length: '3:35',
      warmup: 'A coach asked basketball\'s biggest stars to sit quietly and breathe. They won six championships. Is that evidence that mindfulness works?',
      key: [
        'A great story (the Bulls) is an <b>anecdote</b>, not evidence: those teams also had extraordinary talent.',
        '<b>Team mindfulness</b> (Yu & Zellmer-Bruhn, 2018): a shared belief that team interactions involve present-focused attention and non-judgmental processing. A <b>climate</b>, not a meditation habit.',
        'The slide: <b>task conflict → relationship conflict → social undermining</b> (gossip, the cold shoulder, letting a colleague fail).',
        'Mindful teams had less relationship conflict and less spillover at each step, even after accounting for individual mindfulness.',
        'Limits: correlational studies; "a few members modelling it may be enough" is a <b>proposal</b>, not a tested result.'
      ],
      refs: [
        'Brown, K. W., Ryan, R. M., & Creswell, J. D. (2007). Mindfulness: Theoretical foundations and evidence for its salutary effects. <i>Psychological Inquiry, 18</i>(4), 211–237.',
        'Yu, L., & Zellmer-Bruhn, M. E. (2018). Introducing team mindfulness and considering its safeguard role against conflict transformation and social undermining. <i>Academy of Management Journal, 61</i>(1), 324–347.'
      ],
      acts: [
        { type: 'mcq', title: 'Quick check', qs: [
          { q: 'How did Yu and Zellmer-Bruhn define team mindfulness?',
            o: ['A team that meditates together every day', 'Every member scoring high on a mindfulness test', 'A team that avoids disagreement', 'A shared belief that team interactions involve present-focused attention and non-judgmental processing'],
            a: 3, why: 'The video describes it as a team climate, not a meditation habit.' },
          { q: 'In the newsroom, what does Shanice do that shows team mindfulness?',
            o: ['She cancels Andre\'s piece', 'She takes one breath, then asks which part of the piece matters most', 'She asks a manager to decide', 'She ignores the timing problem'],
            a: 1, why: 'Noticing before reacting keeps the task disagreement about the task, so they cut it together.' },
          { q: 'What did Yu and Zellmer-Bruhn\'s field studies find in teams higher in team mindfulness?',
            o: ['More task conflict and more undermining', 'Effects that vanished once individual mindfulness was accounted for', 'Less relationship conflict, and less spillover from task conflict to relationship conflict to undermining', 'Proof that mindfulness training causes better teamwork'],
            a: 2, why: 'The effects held after accounting for each member\'s own mindfulness. The studies were correlational, so they don\'t prove that training causes the benefits.' }
        ]},
        { type: 'sort', title: 'Story or evidence?', prompt: 'Is each one an anecdote or systematic evidence?',
          buckets: ['Anecdote', 'Systematic evidence'],
          items: [
            { t: 'The Bulls meditated and went on to win six championships.', b: 0 },
            { t: 'Field studies measured team mindfulness and conflict in MBA project teams and in a health care organization.', b: 1 },
            { t: 'My cousin\'s team started yoga and their arguments stopped.', b: 0 },
            { t: 'The effects held after statistically accounting for each member\'s own mindfulness.', b: 1 },
            { t: 'A famous CEO says meditation made her company successful.', b: 0 }
          ]},
        { type: 'order', title: 'The slide', prompt: 'Put the sequence that team mindfulness helps interrupt in order.',
          items: ['Task conflict ("Your piece is too long")', 'Relationship conflict ("She always cuts my work")', 'Social undermining (gossip, the cold shoulder, letting a colleague fail)'],
          why: 'Mindful teams were less likely to move from each step to the next.' },
        { type: 'breathe', title: 'Try the pause', seconds: 15, prompt: 'For the next fifteen seconds, don\'t think about work. Notice your breathing, without changing it. Notice where your body touches the chair. If a thought arrives, notice it, and let it go.',
          after: 'That\'s the basic move: noticing before reacting.' },
        { type: 'tf', title: 'Read the fine print', prompt: 'True or false?',
          cards: [
            { t: 'Team mindfulness means everyone on the team meditates.', a: false, why: 'It\'s a shared belief about how the team interacts: a climate.' },
            { t: 'The studies prove mindfulness training causes better teamwork.', a: false, why: 'They were correlational.' },
            { t: 'The idea that a few members modelling mindfulness may be enough is a proposal, not a tested result.', a: true, why: 'The authors suggest it because team climates spread through everyday interaction.' },
            { t: 'Meetings that gather facts before judging are one place to look for team mindfulness.', a: true, why: 'So are leaders who notice when a discussion turns personal and steer it back to the task.' }
          ]},
        { type: 'reflect', title: 'Your turn', prompt: 'Rewrite this heated message using "noticing before reacting": "Your section is way too long AGAIN. I\'m cutting it."',
          model: 'A strong rewrite separates the task issue from the person, acknowledges the work, states the constraint, and invites joint problem solving, much like Shanice: "Your section is strong. We\'re over the word limit by 400 words. Which part matters most to keep?"' }
      ]
    },
    /* ------------------------------------------------------------ 5 */
    {
      title: 'The Leader Sets the Temperature',
      yt: 'rl9leR4qlhk',
      length: '3:49',
      warmup: 'Have you ever felt a leader\'s mood change a whole room before anyone said a word?',
      key: [
        'Barsade (2002): a trained actor expressed different moods in groups, and members tended to catch them. Pleasant mood: more cooperation, less reported conflict. The <b>ripple effect</b>.',
        'de Jong, Song & Song (2013), 323 young tech ventures: lead founder\'s <b>Big Five</b> personality linked with team conflict and later performance.',
        'Neuroticism → more relationship conflict. Openness → more task, less relationship. Conscientiousness → less of both. Extraversion → less relationship. Agreeableness → more task.',
        'Task conflict linked with better venture performance; relationship conflict with worse, and it weakened task conflict\'s benefits.',
        'Fine print: same-source ratings, young tech firms, no causal claim. A personality score is <b>information</b>, not a verdict.'
      ],
      refs: [
        'Barsade, S. G. (2002). The ripple effect: Emotional contagion and its influence on group behavior. <i>Administrative Science Quarterly, 47</i>(4), 644–675.',
        'de Jong, A., Song, M., & Song, L. Z. (2013). How lead founder personality affects new venture performance: The mediating role of team conflict. <i>Journal of Management, 39</i>(7), 1825–1854.'
      ],
      acts: [
        { type: 'mcq', title: 'Quick check', qs: [
          { q: 'What is neuroticism, as defined in the video?',
            o: ['The tendency to experience negative emotions like anxiety and irritability', 'A preference for structure and clear rules', 'Openness to new ideas', 'Enjoying social attention'],
            a: 0, why: 'It\'s one of the Big Five traits. Founders higher in it led teams with more relationship conflict.' },
          { q: 'Kiran scores high on neuroticism. What does the video suggest she do with that result?',
            o: ['Step down as lead founder', 'Hide it from her co-founders', 'Treat it as information, notice when her anxiety leaks into the room, and build a team that balances it', 'Avoid all difficult conversations'],
            a: 2, why: '"That isn\'t a verdict on her as a leader. It\'s information."' },
          { q: 'In de Jong, Song and Song\'s study, what pattern did founders higher in openness show?',
            o: ['More relationship conflict and less task conflict', 'Less of both types of conflict', 'More task conflict but less relationship conflict', 'No link with conflict'],
            a: 2, why: 'The video calls this close to the ideal combination. Conscientious founders had less of both.' }
        ]},
        { type: 'sort', title: 'Traits and conflict', prompt: 'Match each lead-founder trait to the conflict pattern found in the study.',
          buckets: ['More relationship conflict', 'More task, less relationship', 'Less of both', 'Less relationship conflict', 'More task conflict'],
          items: [
            { t: 'Neuroticism', b: 0 },
            { t: 'Openness', b: 1 },
            { t: 'Conscientiousness', b: 2 },
            { t: 'Extraversion', b: 3 },
            { t: 'Agreeableness', b: 4, why: 'Possibly because agreeable founders delegate and let people voice their views.' }
          ]},
        { type: 'dilemma', title: 'Set the temperature', meter: 'Room temperature', good: 'low',
          intro: 'You are Kiran, lead founder of LimeBox, a food-delivery start-up. It\'s Monday. Each choice heats or cools the room.',
          rounds: [
            { s: 'You walk into the Monday meeting after a stressful weekend of investor emails.',
              c: [
                { t: 'Keep scrolling your phone, sigh, and answer in single words.', d: 30, f: 'Nobody mentions conflict, but moods travel. Within ten minutes, the room tenses up.' },
                { t: 'Arrive five minutes early, put your phone away, and open with: "What\'s the hardest problem on your plate this week?"', d: -10, f: 'You set a calmer temperature before anyone speaks.' }
              ]},
            { s: 'Your co-founder challenges your expansion plan in front of the team.',
              c: [
                { t: '"Not now. We\'ve already decided."', d: 25, f: 'You shut down task conflict, the kind linked with better venture performance, and invite resentment.' },
                { t: '"Say more. What are you seeing that I\'m not?"', d: -10, f: 'You keep the challenge about the work, which is where task conflict pays off.' }
              ]},
            { s: 'You feel your anxiety rising before a hard conversation about missed delivery targets.',
              c: [
                { t: 'Have it right now, while you\'re wound up, to get it over with.', d: 20, f: 'Your emotional state isn\'t private. In a small team, it becomes everyone\'s working conditions.' },
                { t: 'Schedule it for when you feel settled, and ask a co-founder to signal if the room starts to tense up.', d: -10, f: 'This is the self-knowledge the authors recommend: notice when anxiety leaks into the room, and build a team that balances it.' }
              ]}
          ],
          end: [
            { max: 0, t: 'Cool and steady. You set the temperature before anyone spoke.' },
            { max: 40, t: 'Warm. Some of your mood leaked into the room.' },
            { max: 999, t: 'Overheated. The team caught your mood, and conflict turned personal.' }
          ]},
        { type: 'tf', title: 'Read the fine print', prompt: 'True or false, based on the cautions in the video?',
          cards: [
            { t: 'Founders rated both their own personality and their team\'s conflict.', a: true, why: 'So part of the pattern may reflect how founders see things.' },
            { t: 'The study proves founder personality causes team conflict.', a: false, why: 'The authors are careful not to claim cause and effect.' },
            { t: 'The findings clearly apply to department heads in large, established organizations.', a: false, why: 'That\'s an open question. The sample was young tech ventures, where founders\' influence is unusually strong.' },
            { t: 'In Barsade\'s experiment, the mood came from a trained actor placed in the group.', a: true, why: 'Group members tended to catch the actor\'s mood.' }
          ]},
        { type: 'reflect', title: 'Your turn', prompt: 'Describe a leader (or yourself) whose mood changed a room. What did they do? What is one concrete habit a leader who "runs hot" could adopt?',
          model: 'A strong answer describes observable behaviour (sighs, curt replies, phone use) and its ripple through the group, then proposes specific habits: timing hard conversations, asking a colleague to flag rising tension, opening meetings with a question, or balancing the team with calm co-leaders who welcome debate.' }
      ]
    },
    /* ------------------------------------------------------------ 6 */
    {
      title: 'Does Diversity Help Teams? The Honest Answer',
      yt: 'P6QASEhVpK0',
      length: '4:03',
      warmup: '"Diverse teams perform better." You\'ve heard it many times. What would it take for that claim to be true?',
      key: [
        'Mannix & Neale (2005): two lenses. <b>Information</b> (different knowledge, networks, perspectives) vs <b>social categorization</b> (similarity attraction, "us and them").',
        'On balance, the evidence leaned toward the pessimistic lens: the promise and the reality of diversity often differ.',
        '<b>Surface-level</b> (age, gender, ethnicity) vs <b>deep-level</b> (attitudes, values, beliefs). Harrison et al. (1998): over time, surface effects fade and deep-level differences matter more.',
        '<b>Faultlines</b> (Lau & Murnighan, 1998): hypothetical lines splitting a group when several attributes line up.',
        'Thatcher et al. (2024), 168 studies: <b>dormant</b> faultlines didn\'t directly predict lower performance; damage came when they were <b>activated</b>.'
      ],
      refs: [
        'Harrison, D. A., Price, K. H., & Bell, M. P. (1998). Beyond relational demography: Time and the effects of surface- and deep-level diversity on work group cohesion. <i>Academy of Management Journal, 41</i>(1), 96–107.',
        'Lau, D. C., & Murnighan, J. K. (1998). Demographic diversity and faultlines: The compositional dynamics of organizational groups. <i>Academy of Management Review, 23</i>(2), 325–340.',
        'Mannix, E., & Neale, M. A. (2005). What differences make a difference? The promise and reality of diverse teams in organizations. <i>Psychological Science in the Public Interest, 6</i>(2), 31–55.',
        'Thatcher, S. M. B., Meyer, B., Kim, Y., & Patel, P. C. (2024). A meta-analytic integration of the faultlines literature. <i>Organizational Psychology Review, 14</i>(2), 238–281.'
      ],
      acts: [
        { type: 'mcq', title: 'Quick check', qs: [
          { q: 'What is a faultline in a team?',
            o: ['A mistake that causes a project to fail', 'A hypothetical line that splits a group into subgroups based on several attributes at once', 'Any single difference between two members', 'A disagreement about the team\'s goals'],
            a: 1, why: 'Lau and Murnighan\'s term. The trouble starts when differences line up.' },
          { q: 'At the mas camp, what does Ms Joseph do to reduce the faultline?',
            o: ['Removes the older wire-benders', 'Lets each subgroup work separately', 'Pairs one craftsperson with one digital designer to lead each costume section, toward a shared deadline', 'Hires more marketing graduates'],
            a: 2, why: 'Mixing subgroups on purpose and working toward one goal (parade day) bridges the dividing line.' },
          { q: 'What did the 2024 meta-analysis led by Sherry Thatcher find about dormant faultlines?',
            o: ['They directly predicted lower performance', 'They always become activated', 'They didn\'t directly predict lower performance. The damage came when faultlines were activated', 'They only matter in short-term teams'],
            a: 2, why: 'Harm came when people began to see themselves and act as separate camps. Once activation was accounted for, dormant faultlines were even linked with more sharing of information.' }
        ]},
        { type: 'sort', title: 'Two lenses', prompt: 'Which lens does each statement belong to?',
          buckets: ['Information lens (optimistic)', 'Social categorization lens (pessimistic)'],
          items: [
            { t: 'Different backgrounds bring different knowledge and networks.', b: 0 },
            { t: 'We tend to be attracted to people who seem similar to us.', b: 1 },
            { t: 'People quickly sort others into "us" and "them".', b: 1 },
            { t: 'A diverse team should solve problems more creatively.', b: 0 },
            { t: 'Stereotypes, weaker cohesion and more conflict.', b: 1 },
            { t: 'Several perspectives on the same problem.', b: 0 }
          ]},
        { type: 'sort', title: 'Surface or deep?', prompt: 'Is each characteristic surface-level or deep-level diversity?',
          buckets: ['Surface-level', 'Deep-level'],
          items: [
            { t: 'Age', b: 0 }, { t: 'Values about work-life balance', b: 1 }, { t: 'Ethnicity', b: 0 },
            { t: 'Beliefs about what good design looks like', b: 1 }, { t: 'Gender', b: 0 }, { t: 'Attitudes toward risk', b: 1 }
          ]},
        { type: 'mcq', title: 'Spot the faultline', qs: [
          { q: 'Two mas-camp teams have the same four people\'s ages and roles, arranged differently. Which team has the stronger faultline?',
            html: true,
            o: [
              '<b>Team A</b><table class="mini"><tr><td>62</td><td>Wire-bender</td></tr><tr><td>65</td><td>Wire-bender</td></tr><tr><td>24</td><td>Digital designer</td></tr><tr><td>23</td><td>Marketing</td></tr></table>',
              '<b>Team B</b><table class="mini"><tr><td>62</td><td>Wire-bender</td></tr><tr><td>65</td><td>Digital designer</td></tr><tr><td>24</td><td>Wire-bender</td></tr><tr><td>23</td><td>Marketing</td></tr></table>',
              'Both are the same: they have identical amounts of diversity'
            ],
            a: 0, why: 'In Team A, age and role line up: the older members are the craftspeople, the younger members are digital and marketing. That creates a natural dividing line. In Team B the attributes cut across each other, so no clean split appears, even though the team is just as diverse.' },
          { q: 'Which of these suggests the mas-camp faultline has been <i>activated</i>?',
            o: ['The team includes people of different ages', 'The wire-benders eat lunch separately and call the others "the computer crowd"', 'The team has a shared deadline', 'One member has a marketing degree'],
            a: 1, why: 'Activation is when people actually begin to see themselves, and act, as separate camps.' }
        ]},
        { type: 'multi', title: 'Promise into reality', prompt: 'According to Mannix and Neale, which conditions help diversity deliver on its promise? Select all that apply.',
          o: ['Exploratory tasks that need new ideas', 'Routine tasks where speed matters most', 'Shared goals and values', 'Minority voices with real influence', 'Token seats for under-represented members', 'Keeping subgroups working separately to avoid friction'],
          a: [0, 2, 3], why: 'Diversity tends to help most on exploratory tasks, when shared goals bridge differences, and when minority voices have real influence, not token seats.' },
        { type: 'reflect', title: 'Your turn', prompt: 'Does a team you belong to have a faultline, where several differences line up? Is it dormant or activated? What is one thing that could bridge it?',
          model: 'A strong answer identifies two or more attributes that align (for example, department and age, or nationality and role), uses behavioural evidence to judge whether the faultline is dormant or activated, and proposes a bridge such as cross-subgroup pairings, a shared goal, or giving minority perspectives real influence.' }
      ]
    },
    /* ------------------------------------------------------------ 7 */
    {
      title: 'Where Diversity Works',
      yt: 'PR9j8gqdb9g',
      length: '4:01',
      warmup: 'If the average effect of diversity on team performance is almost exactly zero, does diversity matter?',
      key: [
        'Joshi & Roh (2009): the average diversity–performance correlation was almost exactly <b>zero</b>, but an average can hide strong effects pulling in opposite directions.',
        '<b>Relations-oriented</b> diversity (gender, ethnicity, age) vs <b>task-oriented</b> diversity (function, education, tenure). Functional background had the most positive link.',
        'Context flips the sign: balanced vs dominated occupations, service vs manufacturing vs high-tech industries, short- vs long-term teams. Effects remained modest.',
        'Jang (2017): teams were more creative with at least one <b>cultural broker</b>. <b>Insiders</b> combine ideas from cultures they know; <b>outsiders</b> ask questions that draw knowledge out.',
        'A better question than "does diversity help?" is <b>where, when and how</b>?'
      ],
      refs: [
        'Jang, S. (2017). Cultural brokerage and creative performance in multicultural teams. <i>Organization Science, 28</i>(6), 993–1009.',
        'Joshi, A., & Roh, H. (2009). The role of context in work team diversity research: A meta-analytic review. <i>Academy of Management Journal, 52</i>(3), 599–627.'
      ],
      acts: [
        { type: 'mcq', title: 'Quick check', qs: [
          { q: 'In Joshi and Roh\'s terms, which of these is task-oriented diversity?',
            o: ['Differences in function, education and tenure', 'Differences in gender, ethnicity and age', 'Differences in personality', 'Differences in nationality only'],
            a: 0, why: 'Task-oriented diversity covers job-related characteristics. Functional background had the most positive link with performance.' },
          { q: 'Kenji keeps asking, "How would customers in your market see this?" What type of cultural broker is he?',
            o: ['A cultural insider who combines ideas from cultures he knows', 'A cultural outsider who draws others\' knowledge out with questions', 'A team leader assigning roles', 'Not a broker, because he isn\'t from the region'],
            a: 1, why: 'Outsiders have multicultural experience from elsewhere and tend to ask questions. Daniela, who blends ideas, is the insider.' },
          { q: 'According to Joshi and Roh, how did relations-oriented diversity relate to performance in short-term vs long-term teams?',
            o: ['Negative in both', 'Positive in long-term teams, negative in short-term teams', 'No difference by team lifespan', 'Positive in short-term teams, negative in long-term teams'],
            a: 3, why: 'A deadline may push short-term teams to use their differences, while long-standing teams have more time for divisions to harden.' }
        ]},
        { type: 'average', title: 'How can zero hide something?', prompt: 'Drag the two sliders to show diversity having a strong effect in each setting, while the overall average stays at zero.',
          labels: ['Setting A', 'Setting B'],
          why: 'Strong positive effects in some contexts and strong negative effects in others can average to nothing, like one foot in ice water and the other in hot water. Once Joshi and Roh accounted for context, diversity\'s effects doubled or tripled in size (though they stayed modest).' },
        { type: 'sort', title: 'Which kind of diversity?', prompt: 'Relations-oriented or task-oriented?',
          buckets: ['Relations-oriented', 'Task-oriented'],
          items: [
            { t: 'Gender', b: 0 }, { t: 'Functional background', b: 1 }, { t: 'Ethnicity', b: 0 },
            { t: 'Education', b: 1 }, { t: 'Age', b: 0 }, { t: 'Tenure', b: 1 }
          ]},
        { type: 'sort', title: 'Context flips the sign', prompt: 'In Joshi and Roh\'s meta-analysis, was relations-oriented diversity linked with better or worse team performance in each context?',
          buckets: ['Linked with better performance', 'Linked with worse performance'],
          items: [
            { t: 'Occupations with a more balanced mix of people', b: 0 },
            { t: 'Occupations dominated by one group', b: 1 },
            { t: 'Service industries', b: 0, why: 'Slightly better, perhaps because teams serve diverse customers.' },
            { t: 'Manufacturing', b: 1, why: 'Slightly worse.' },
            { t: 'High-technology settings', b: 1, why: 'Clearly worse.' },
            { t: 'Short-term teams', b: 0 },
            { t: 'Long-term teams (more than about two years)', b: 1 }
          ]},
        { type: 'sort', title: 'Insider or outsider?', prompt: 'Is each person more likely to act as a cultural insider or a cultural outsider broker?',
          buckets: ['Cultural insider', 'Cultural outsider'],
          items: [
            { t: 'Daniela grew up between Caracas and San Fernando, and blends ideas across the Venezuelan and Trinidadian engineers.', b: 0 },
            { t: 'Kenji has lived in Japan and Canada, and keeps asking, "How would customers in your market see this?"', b: 1 },
            { t: 'Someone raised in Kingston and Port of Spain combines Jamaican and Trinidadian marketing ideas on a Jamaican–Trinidadian team.', b: 0 },
            { t: 'Someone who has lived in Ghana and Germany asks a Caribbean team, "What would your customers expect here?"', b: 1 }
          ]},
        { type: 'reflect', title: 'Your turn', prompt: 'Rewrite "Does diversity help our team?" as a better question about where, when and how. Who plays (or could play) the cultural broker role on your team?',
          model: 'A strong answer specifies the context (occupation, industry, team lifespan), the type of diversity (relations- vs task-oriented), and the mechanism (for example, "Under our six-month deadline, how do we draw on our functional differences?"). It identifies a potential broker and whether they would act as an insider or an outsider, noting that psychological safety helps brokerage emerge.' }
      ]
    }
  ],
  final: {
    title: 'Final challenge: Conflict in Teams',
    blurb: 'Eight mixed questions that ask you to connect ideas across the series.',
    acts: [
      { type: 'mcq', title: 'Mixed review', qs: [
        { q: 'Across the series, which finding appears most consistently?',
          o: ['Task conflict reliably improves performance', 'Relationship conflict is linked with worse team outcomes', 'Diversity reliably improves performance', 'Mindfulness training causes less conflict'],
          a: 1, why: 'Meta-analyses consistently link relationship conflict with worse outcomes. The others are either contested or not causal claims.' },
        { q: 'Psychological safety (Ep 2), emotion regulation (Ep 3) and team mindfulness (Ep 4) all appear to do what?',
          o: ['Eliminate task conflict', 'Help keep task conflict from sliding into relationship conflict', 'Replace the need for leaders', 'Increase relationship conflict in the short term'],
          a: 1, why: 'Each acts as a condition under which task conflict is less likely to turn personal, or more likely to pay off.' },
        { q: 'A team never disagrees in meetings, but complains in private afterwards. Which concept fits best?',
          o: ['An activated faultline', 'Conflict debt', 'Emotional contagion', 'Cultural brokerage'],
          a: 1, why: 'Unraised issues accumulate and gather interest.' },
        { q: 'Ravi infers that Anika is challenging his idea to look cleverer. This is…',
          o: ['reappraisal', 'misattribution', 'suppression', 'authentic dissent'],
          a: 1, why: 'Inferring a hidden motive behind a challenge is how task conflict turns personal (Simons & Peterson).' },
        { q: 'Several studies in the series share which limitation?',
          o: ['They used only student samples', 'They are correlational or single-survey designs, so they show associations rather than proof of cause', 'They were all conducted in the Caribbean', 'They measured only task conflict'],
          a: 1, why: 'Emotion regulation, team mindfulness and founder personality studies were all careful not to claim cause.' },
        { q: 'A founder high in neuroticism might "set the temperature" through which mechanism suggested by the authors?',
          o: ['Faultline activation', 'Emotional contagion', 'Misattribution', 'Cultural brokerage'],
          a: 1, why: 'Moods travel through a team, as in Barsade\'s ripple effect.' },
        { q: 'Which statement best captures Episodes 6 and 7 together?',
          o: ['Diversity always helps teams', 'Diversity always hurts teams', 'Diversity is a potential, and context and team process shape whether it helps', 'Only deep-level diversity matters'],
          a: 2, why: 'What a team does with its differences, and where it works, matter more than how many differences it has.' },
        { q: 'Which leader action draws on ideas from at least three episodes at once?',
          o: ['Banning disagreement to protect relationships', 'Before each decision, inviting a quiet role to say "what worries you?", meeting the answer with curiosity, and keeping your own mood settled', 'Assigning a devil\'s advocate and leaving the room', 'Splitting the team into separate subgroups by expertise'],
          a: 1, why: 'It pays down conflict debt (Ep 1), builds psychological safety (Ep 2) and sets a calmer temperature (Ep 5).' }
      ]}
    ]
  }
});
