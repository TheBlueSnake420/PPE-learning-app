import type { WeekContent } from '../../types';

// Week 2 - The State, Democracy and Dictatorship
// Sources: Week 2 lecture + seminar slides (Clark, Golder & Golder 2018; Caramani).

export const w2: WeekContent = {
  topic: {
    id: 'w2-state-democracy',
    week: 2,
    title: 'The State, Democracy and Dictatorship',
    summary:
      'What a state is (and is not), how political scientists define and measure democracy and dictatorship, and why countries democratise.',
    keyPoints: [
      'Weber: the state successfully claims the monopoly of legitimate physical violence within a territory.',
      'State is not the same as nation-state or government; a nation is an "imagined political community" (Anderson).',
      'Autocracies have (almost) no executive turnover, yet can be very durable, partly by holding elections.',
      'Minimalist definitions focus on procedures (Dahl: contestation + inclusion); substantive ones add rights and outcomes.',
      'Measures: DD (dichotomous), Polity IV (-10 to +10), Freedom House (rights and liberties). Reliability vs validity.',
      'Transitions: structural explanations (modernisation, survival, civilisation, class, geography) vs agency (values, elite choices).',
    ],
    sections: [
      {
        heading: 'What is a state?',
        paragraphs: [
          "Max Weber (1919) defined the state as the human community that successfully claims a monopoly on the legitimate use of physical violence within a given territory. Its defining features: that monopoly, a territory, sovereignty, plurality (many states exist side by side, in 'anarchy' internationally), a regime (a relation between the political elite and state institutions on one side and the population on the other), and an administrative legal order (constitution, laws, rights, policies).",
          'Caramani defines a state as a polity with a clearly demarcated territory and a single centre of authority, with a permanent population, sovereignty and a monopoly on legitimate violence.',
          'The state is not the same as the government (which runs the state at a given moment) nor the same as the nation-state.',
        ],
      },
      {
        heading: 'Nation and nation-state',
        paragraphs: [
          "A nation-state adds a political community to the state: citizenship, a legal relationship between subject and state, equality before the law, and nationhood. Nationhood shifted from 'blood' to what Benedict Anderson (1991) called an 'imagined political community'. A nation is a group of people who believe they share a cultural identity that makes them deserve self-rule; nationalism is the belief that nation and state should coincide.",
          "\"We have made Italy, now we must make Italians\" (Massimo d'Azeglio, 1861) captures how states often had to build their nations after the fact.",
          'The modern state system goes back to the Peace of Westphalia (1648): each state is sovereign over its territory and domestic affairs ("cuius regio, eius religio"), there is no interference in internal affairs, and states are equal in international law. Popular sovereignty came with social contract theory, American independence (1776) and the French Revolution (1789).',
          'Failed states (e.g. Somalia, Libya, Sudan, Chad) have weak, competing or non-existent governments that cannot control their territory: no monopoly on violence means no security and no legitimacy. The Fund for Peace publishes a Fragile States Index.',
        ],
      },
      {
        heading: 'Autocracies',
        paragraphs: [
          'Autocratic regimes have no (or hardly any) executive turnover. Barbara Geddes distinguishes monarchies, military regimes, one-party states and personalist dictatorships. Fully authoritarian regimes have declined over time, but they can be remarkably durable.',
          'Autocrats stay in power through repression, building legitimacy, co-opting groups and elites (which can backfire if they misjudge the strength of the opposition), elections, and international relations.',
          'Why hold elections? Democratic-looking institutions prolong authoritarian rule (Gandhi & Przeworski 2007). Elections can scare the opposition with a landslide, channel opposition into less violent forms, divide it (allow party A but ban parties B-F, as in Iran), reveal which groups and areas are discontented so they can be bribed or punished, and spread ideology and perks through a ruling party. Such "electoral autocracies" challenge minimalist definitions of democracy.',
        ],
      },
      {
        heading: 'Defining democracy',
        paragraphs: [
          'We need an operational definition precise enough to classify real countries in particular periods, for example to test whether democracies grow faster, invest more in health and education, or experience less political violence.',
          'Minimalist (procedural) definitions look only at institutions and procedures of electoral competition, not outcomes. Substantive definitions also require outcomes such as freedoms, rights, absence of corruption, independent courts and fair trials.',
          "Robert Dahl's polyarchy is minimalist with two dimensions: contestation (procedures of democratic competition) and inclusion (who may participate). Saudi Arabia scores low on both; apartheid South Africa had contestation but very limited inclusion; Switzerland before 1971 (no national vote for women) lacked full inclusion; the Netherlands today is a polyarchy. V-Dem's liberal democracy index adds civil liberties and rights to polyarchy.",
        ],
      },
      {
        heading: 'Measuring democracy',
        paragraphs: [
          'DD (Democracy-Dictatorship; Przeworski et al. 2000): democracies are regimes in which government offices are filled through contested elections. Four criteria: (1) the chief executive is elected, (2) the legislature is elected, (3) more than one party competes (with ex ante uncertainty, ex post irreversibility and repeatability), and (4) an alternation in power has taken place under identical electoral rules. DD is dichotomous: a country is either a democracy or a dictatorship.',
          'Polity IV scores countries from -10 (most autocratic) to +10 (most democratic) on five attributes: competitiveness and openness of executive recruitment, constraints on the executive, and regulation and competitiveness of political participation.',
          'Freedom House rates civil liberties (15 questions in four sub-categories: expression and belief, associational rights, rule of law, personal autonomy) and political rights (10 questions in three sub-categories: electoral process, pluralism and participation, functioning of government). It is substantive.',
          'Dichotomous measures put each regime in one of two categories; continuous measures treat democracy as a matter of degree (Polity, Freedom House, V-Dem). Reliability: fewer and more objective criteria give more consistent results (DD is very reliable). Validity: does the measure capture what we mean by democracy? Too few or purely objective criteria may miss important aspects; too many or overly strict criteria may exclude countries most would call democracies. Which to choose depends on your research goal and concept.',
        ],
      },
      {
        heading: 'Why do countries democratise?',
        paragraphs: [
          'Huntington (1991) described waves of democratisation; the number of democracies rose sharply around 1990. Explanations divide into structure and agency.',
          "Modernisation theory (Lipset 1959): economic development (industrialisation, urbanisation, wealth, education) forms one major factor whose political correlate is democracy. These are requisites, necessary but not sufficient conditions, not causes. Democratic survival theory instead predicts that wealth makes democracies more likely to survive, but not more likely to emerge. The evidence presented in the lecture (Clark, Golder & Golder 2018) favours modernisation theory.",
          'Civilisation (Huntington 1993): all countries may modernise, but they democratise only if they Westernise, and Western promotion of its values may provoke a clash of civilisations. Class (Barrington Moore): the size of the middle class decides whether modernising countries become democratic, fascist or communist: "no bourgeoisie, no democracy". A large bourgeoisie on which the government depends for taxes, and which can threaten to move its mobile assets, can demand democracy. Geography: transitions cluster (Spain and Portugal in the 1970s, Central and Eastern Europe after 1989, the Arab Spring).',
          'Agency: civic values (Welzel & Inglehart 2008): development gives people material and cognitive resources, which fosters self-expression values, and people with those values seek democracy. Elite misjudgement: rulers with incomplete information may try to co-opt an opposition they think is weak; if it is stronger, liberalisation can turn into revolution.',
        ],
      },
    ],
    keyTerms: [
      {
        term: 'State (Weber)',
        definition: 'A community that successfully claims the monopoly of legitimate physical violence within a territory.',
      },
      { term: 'Nation', definition: 'A group believing it shares a cultural identity deserving self-rule; an "imagined political community" (Anderson).' },
      { term: 'Nationalism', definition: 'The belief that nation and state should coincide.' },
      { term: 'Sovereignty', definition: 'Supreme authority over a territory and its domestic affairs, free from outside interference.' },
      { term: 'Failed state', definition: 'A state whose government cannot control its territory or population: no monopoly on violence.' },
      {
        term: 'Minimalist definition',
        definition: 'Classifies regimes by institutions and procedures of electoral competition only.',
      },
      {
        term: 'Substantive definition',
        definition: 'Also requires democratic outcomes such as rights, rule of law and absence of corruption.',
      },
      { term: 'Polyarchy', definition: 'Dahl: a regime with high contestation and high inclusion.' },
      { term: 'DD measure', definition: 'Dichotomous measure: elected executive and legislature, multiple parties, and alternation under the same rules.' },
      { term: 'Polity IV', definition: 'Continuous democracy score from -10 to +10 based on five attributes.' },
      { term: 'Freedom House', definition: 'Substantive measure rating political rights and civil liberties.' },
      { term: 'Reliability', definition: 'Whether a measure gives consistent results when applied repeatedly or by different people.' },
      { term: 'Validity', definition: 'Whether a measure actually captures the concept it is meant to measure.' },
      {
        term: 'Modernisation theory',
        definition: 'Economic development makes democracy more likely to emerge and survive (Lipset).',
      },
      {
        term: 'Democratic survival theory',
        definition: 'Development helps democracies survive but does not make transitions more likely.',
      },
    ],
    readings: [
      'Clark, W., Golder, M. & Golder, S. N. (2018). Principles of Comparative Politics, 3rd ed. SAGE/CQ Press.',
      'Lipset, S. M. (1959). Some Social Requisites of Democracy. American Political Science Review 53(1): 69-105.',
      'Welzel, C. & Inglehart, R. (2008). The Role of Ordinary People in Democratization. Journal of Democracy 19(1): 126-140.',
    ],
  },

  basics: {
    id: 'w2-basics',
    title: 'State and regime',
    description: 'Week 2 · States, democracy and dictatorship',
    lessons: [
      {
        id: 'w2-b1',
        title: 'What is a state?',
        topicId: 'w2-state-democracy',
        exercises: [
          {
            id: 'w2b1-01',
            type: 'fill',
            text: 'Weber: the state successfully claims the monopoly of legitimate physical ___ within a territory.',
            options: ['violence', 'taxation', 'authority', 'trade'],
            answer: 'violence',
          },
          {
            id: 'w2b1-02',
            type: 'truefalse',
            statement: 'The state and the government are the same thing.',
            answer: false,
            explanation: 'The government runs the state at a given time; the state outlasts governments.',
          },
          {
            id: 'w2b1-03',
            type: 'choice',
            prompt: 'How did Benedict Anderson define the nation?',
            options: [
              'An imagined political community',
              'A community of shared blood',
              'A territory with fixed borders',
              'A group sharing one religion',
            ],
            answer: 0,
          },
          {
            id: 'w2b1-04',
            type: 'choice',
            prompt: 'What is nationalism?',
            options: [
              'The belief that nation and state should coincide',
              'Loyal support for the government of the day',
              'The belief that every state needs one official religion',
              'The legal status of being a citizen of a state',
            ],
            answer: 0,
          },
          {
            id: 'w2b1-05',
            type: 'choice',
            prompt: 'Which principle comes from the Peace of Westphalia (1648)?',
            options: [
              "States are sovereign and stay out of each other's internal affairs",
              'All states must be governed by elected representatives',
              'Citizens have the right to overthrow an unjust ruler',
              'Large empires may protect smaller states in their sphere',
            ],
            answer: 0,
          },
          {
            id: 'w2b1-06',
            type: 'choice',
            prompt: 'What makes a state a "failed state"?',
            options: [
              'Its government cannot control its territory or population',
              'It has lost a war and part of its territory',
              'Its public debt is larger than its annual GDP',
              'It is an autocracy without free elections',
            ],
            answer: 0,
          },
          {
            id: 'w2b1-07',
            type: 'choice',
            prompt: '"We have made Italy, now we must make Italians" (1861). What does this illustrate?',
            options: [
              'States often had to build a national identity after the fact',
              'Italy was a united nation long before it became a state',
              'Nations always exist before the states that represent them',
              'Italy was a failed state that needed foreign help',
            ],
            answer: 0,
          },
        ],
      },
      {
        id: 'w2-b2',
        title: 'Democracy and autocracy',
        topicId: 'w2-state-democracy',
        exercises: [
          {
            id: 'w2b2-01',
            type: 'choice',
            prompt: 'What is the key feature of an autocratic regime?',
            options: [
              'Little or no turnover of the executive',
              'No elections of any kind are held',
              'There is no written constitution',
              'A monarch serves as head of state',
            ],
            answer: 0,
            explanation: 'Many autocracies hold elections; monarchies can be democratic.',
          },
          {
            id: 'w2b2-02',
            type: 'match',
            prompt: 'Match the concept to its meaning',
            pairs: [
              ['Minimalist', 'Procedures and elections'],
              ['Substantive', 'Also rights and outcomes'],
              ['Dichotomous', 'Democracy or not'],
              ['Continuous', 'A matter of degree'],
            ],
          },
          {
            id: 'w2b2-03',
            type: 'fill',
            text: "Dahl's polyarchy has two dimensions: contestation and ___.",
            options: ['inclusion', 'liberty', 'equality', 'stability'],
            answer: 'inclusion',
          },
          {
            id: 'w2b2-04',
            type: 'choice',
            prompt: 'Where would apartheid South Africa sit on Dahl\'s two dimensions?',
            options: [
              'Some contestation, but very low inclusion',
              'High inclusion, but no contestation',
              'High on both dimensions',
              'Low on both dimensions',
            ],
            answer: 0,
          },
          {
            id: 'w2b2-05',
            type: 'truefalse',
            statement: 'Authoritarian regimes never hold elections.',
            answer: false,
            explanation: 'More and more autocracies hold elections because it helps them stay in power.',
          },
          {
            id: 'w2b2-06',
            type: 'choice',
            prompt: 'Which tool keeps autocrats in power but can backfire if they misjudge the opposition\'s strength?',
            options: ['Co-opting groups and elites', 'Repression', 'International alliances', 'Censorship'],
            answer: 0,
          },
          {
            id: 'w2b2-07',
            type: 'choice',
            prompt: 'Which is NOT one of Geddes\' types of autocracy?',
            options: ['Federal republic', 'Monarchy', 'Military regime', 'Personalist dictatorship'],
            answer: 0,
            explanation: 'The fourth type is the one-party state.',
          },
        ],
      },
      {
        id: 'w2-b3',
        title: 'Measuring democracy',
        topicId: 'w2-state-democracy',
        exercises: [
          {
            id: 'w2b3-01',
            type: 'choice',
            prompt: 'What kind of measure is the Democracy-Dictatorship (DD) measure?',
            options: ['Dichotomous', 'Continuous from -10 to +10', 'A 1-100 index', 'A survey of citizens'],
            answer: 0,
          },
          {
            id: 'w2b3-02',
            type: 'choice',
            prompt: 'Which is NOT one of the four DD criteria?',
            options: [
              'Civil liberties are protected',
              'The chief executive is elected',
              'More than one party competes',
              'Power has alternated under identical electoral rules',
            ],
            answer: 0,
            explanation: 'The fourth criterion is an elected legislature. DD is minimalist.',
          },
          {
            id: 'w2b3-03',
            type: 'fill',
            text: 'Polity IV scores countries from -10 to ___.',
            options: ['+10', '+100', '+7', '0'],
            answer: '+10',
          },
          {
            id: 'w2b3-04',
            type: 'choice',
            prompt: 'What does Freedom House rate?',
            options: [
              'Political rights and civil liberties',
              'Only whether elections took place',
              'Economic growth',
              'Government stability',
            ],
            answer: 0,
          },
          {
            id: 'w2b3-05',
            type: 'truefalse',
            statement: 'Measures based on fewer, more objective criteria tend to be more reliable.',
            answer: true,
          },
          {
            id: 'w2b3-06',
            type: 'choice',
            prompt: 'What does it mean for a measure of democracy to be valid?',
            options: [
              'It captures what we actually mean by democracy',
              'Different researchers get the same score',
              'It is published by an official body',
              'It covers all countries',
            ],
            answer: 0,
            explanation: 'Getting the same score repeatedly is reliability.',
          },
          {
            id: 'w2b3-07',
            type: 'choice',
            prompt: 'In a library search, what does the Boolean operator AND do?',
            options: [
              'Narrows the search: all terms must appear',
              'Broadens the search: any term may appear',
              'Excludes a term',
              'Searches for an exact phrase',
            ],
            answer: 0,
          },
        ],
      },
      {
        id: 'w2-b4',
        title: 'Why democratise?',
        topicId: 'w2-state-democracy',
        exercises: [
          {
            id: 'w2b4-01',
            type: 'choice',
            prompt: 'What does modernisation theory (Lipset 1959) claim?',
            options: [
              'Development makes democracy more likely to emerge and survive',
              'Democracy is the main cause of economic growth',
              'Only countries with Western values can democratise',
              'Democracy emerges mainly through violent revolutions',
            ],
            answer: 0,
          },
          {
            id: 'w2b4-02',
            type: 'choice',
            prompt: 'What does democratic survival theory claim?',
            options: [
              'Wealth helps democracies survive, but not emerge',
              'Wealth helps democracies emerge, but not survive',
              'Once established, democracies always survive',
              'Wealth makes dictatorships more likely to collapse',
            ],
            answer: 0,
          },
          {
            id: 'w2b4-03',
            type: 'match',
            prompt: 'Match the author to the explanation',
            pairs: [
              ['Lipset', 'Modernisation'],
              ['Barrington Moore', 'No bourgeoisie, no democracy'],
              ['Huntington (1993)', 'Clash of civilisations'],
              ['Welzel & Inglehart', 'Self-expression values'],
            ],
          },
          {
            id: 'w2b4-04',
            type: 'truefalse',
            statement: 'Lipset saw development as a requisite of democracy: a necessary condition that guarantees democracy.',
            answer: false,
            explanation: 'Necessary but not sufficient. Conditions are not causes.',
          },
          {
            id: 'w2b4-05',
            type: 'choice',
            prompt: 'Which is an example of geographic clustering of democratic transitions?',
            options: [
              'Central and Eastern Europe after 1989',
              'The American Revolution of 1776',
              'The Glorious Revolution in Britain, 1688',
              'Indian independence in 1947',
            ],
            answer: 0,
          },
          {
            id: 'w2b4-06',
            type: 'order',
            prompt: 'Put the causal chain of Welzel & Inglehart (2008) in order',
            items: [
              'Economic development',
              'More material and cognitive resources',
              'Self-expression values',
              'Demand for democratic institutions',
            ],
          },
        ],
      },
    ],
  },

  advanced: {
    id: 'w2-advanced',
    title: 'Regimes: analysis',
    description: 'Week 2 · Classify regimes, weigh explanations',
    lessons: [
      {
        id: 'w2-a1',
        title: 'Classifying regimes',
        topicId: 'w2-state-democracy',
        exercises: [
          {
            id: 'w2a1-01',
            type: 'choice',
            prompt:
              'A country holds competitive elections for president and parliament with several parties, but the same party has won every election since independence under unchanged rules. How does DD classify it?',
            options: [
              'As a dictatorship, because power has never alternated',
              'As a democracy, because the elections are competitive',
              'As a hybrid regime, halfway between the two categories',
              'It cannot, because DD only covers presidential systems',
            ],
            answer: 0,
            explanation: 'The alternation rule is strict: without it DD cannot be sure the incumbent would ever hand over power.',
          },
          {
            id: 'w2a1-02',
            type: 'choice',
            prompt:
              'Country X holds free elections but censors the press and persecutes minorities. Which measure would rate it worse?',
            options: ['Freedom House', 'DD', 'Both equally', 'Neither'],
            answer: 0,
            explanation: 'Freedom House is substantive; DD looks only at elections and alternation.',
          },
          {
            id: 'w2a1-03',
            type: 'choice',
            prompt:
              'You want to test whether democracies protect human rights better. Why might a minimalist measure be the better choice?',
            options: [
              'A substantive measure already includes rights, so the test would be circular',
              'Minimalist measures are always more valid than substantive ones',
              'Substantive measures only exist for a handful of Western countries',
              'Minimalist measures give continuous scores, which suit statistics better',
            ],
            answer: 0,
          },
          {
            id: 'w2a1-04',
            type: 'choice',
            prompt:
              'A regime lets opposition party A run but bans parties B to F. Which function of authoritarian elections is this?',
            options: [
              'Dividing the opposition',
              'Gathering information on discontent',
              'Distributing perks through a party',
              'Signalling an unbeatable landslide',
            ],
            answer: 0,
          },
          {
            id: 'w2a1-05',
            type: 'truefalse',
            statement: 'On a continuous measure, a regime can be partly democratic.',
            answer: true,
          },
          {
            id: 'w2a1-06',
            type: 'choice',
            prompt: 'What is the trade-off in adding many substantive criteria to a democracy measure?',
            options: [
              'Possibly more valid, but less reliable and at risk of being too strict',
              'More reliable, but less valid because it ignores what voters think',
              'Cheaper to collect, but only usable for a dichotomous classification',
              'More objective, but it can no longer distinguish between democracies',
            ],
            answer: 0,
          },
        ],
      },
      {
        id: 'w2-a2',
        title: 'Explaining transitions',
        topicId: 'w2-state-democracy',
        exercises: [
          {
            id: 'w2a2-01',
            type: 'choice',
            prompt:
              'A modernising country has a small middle class and a powerful landed elite. What does Barrington Moore predict?',
            options: [
              'A non-democratic path, such as fascism or communism',
              'Rapid democratisation led by the landed elite',
              'A stable democracy, because landowners pay most taxes',
              'A failed state without any central authority',
            ],
            answer: 0,
          },
          {
            id: 'w2a2-02',
            type: 'choice',
            prompt: 'Which evidence would help decide between modernisation theory and survival theory?',
            options: [
              'Whether richer dictatorships are more likely to democratise',
              'Whether rich democracies are less likely to break down',
              'Whether democracies are richer than dictatorships on average',
              'Whether poor democracies grow faster than poor dictatorships',
            ],
            answer: 0,
            explanation: 'Both theories expect rich democracies to survive; they disagree on emergence.',
          },
          {
            id: 'w2a2-03',
            type: 'choice',
            prompt: 'What is the "elite misjudgement" explanation of democratisation?',
            options: [
              'Rulers co-opt an opposition they think is weak, and it turns out to be strong',
              'Elites misjudge how much voters value democracy and grant it voluntarily',
              'Foreign governments misjudge a regime and impose democracy from outside',
              'Voters misjudge which party will win and elect the opposition by accident',
            ],
            answer: 0,
          },
          {
            id: 'w2a2-04',
            type: 'choice',
            prompt: "What does Huntington's civilisational argument imply for democratisation?",
            options: [
              'Countries democratise only if they Westernise, which can provoke clashes',
              'All countries democratise once they modernise, whatever their culture',
              'Culture has no effect on regime type; only wealth does',
              'Democracy spreads fastest in non-Western civilisations',
            ],
            answer: 0,
          },
          {
            id: 'w2a2-05',
            type: 'truefalse',
            statement: 'Structural explanations of democratisation focus on the choices of individual actors.',
            answer: false,
            explanation: 'That is agency. Structural explanations stress conditions such as wealth, class or culture.',
          },
          {
            id: 'w2a2-06',
            type: 'choice',
            prompt: 'Why might a large bourgeoisie push for democracy, in the class-based explanation?',
            options: [
              'The state needs their taxes, and they can move their assets abroad',
              'They want to abolish private property and share wealth equally',
              'They are always the largest group of voters in society',
              'They control the army and can threaten a coup',
            ],
            answer: 0,
          },
        ],
      },
    ],
  },
};
