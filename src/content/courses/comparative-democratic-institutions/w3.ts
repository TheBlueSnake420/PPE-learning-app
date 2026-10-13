import type { WeekContent } from '../../types';

// Week 3 - Government and Patterns of Democracy
// Sources: Week 3 lecture + seminar slides (Strom's delegation and accountability model).

export const w3: WeekContent = {
  topic: {
    id: 'w3-government',
    week: 3,
    title: 'Government and Patterns of Democracy',
    summary:
      'Parliamentary, presidential and semi-presidential government; divided government and coalitions; majoritarian versus consensus democracy; multilevel government; and accountability chains.',
    keyPoints: [
      'Directly elected president? No: parliamentary. Yes, and government needs parliament\'s confidence: semi-presidential. Yes, and it does not: presidential.',
      'Presidential systems risk divided government and deadlock, because of multiple veto players.',
      'In parliamentary systems the government depends on parliament but usually dominates it.',
      'Coalitions can be minimal winning (most common), oversized or minority.',
      'Majoritarian democracy (UK) is decisive but volatile; consensus democracy (NL) is broadly supported but slower.',
      'Authority is increasingly dispersed above and below the state (multilevel governance); federalism combines self-rule and shared rule.',
      'Strom: democracy is a chain of delegation from voters (principals) to agents, with problems of adverse selection and moral hazard.',
    ],
    sections: [
      {
        heading: 'What is government?',
        paragraphs: [
          'In a broad sense, government means all public institutions that make or implement political decisions. In the narrow sense used here it is the central political executive that rules the country (e.g. the Dutch cabinet). Democratic government is connected to the electoral process and constitutionally constrained.',
        ],
      },
      {
        heading: 'Parliamentary, presidential and semi-presidential',
        paragraphs: [
          'Parliamentary systems originated in European monarchies. The head of government (prime minister) is indirectly elected via parliament, the head of state is a different person (a monarch or president), early elections are possible, and the government is accountable to the legislature.',
          'Presidential systems originated in the United States. The president is directly elected, is both head of state and head of government, serves a fixed term, and is not accountable to the legislature (separation of powers). In the US, the government serves "at the pleasure of the president".',
          'Two questions classify a system. (1) Is there a directly elected president? If not, it is parliamentary. (2) If so, does the government depend on parliament for its survival? If not, it is presidential; if it does, it is semi-presidential. Semi-presidential systems combine a directly elected president with a prime minister accountable to parliament. Some, like Ireland and Austria, work much like parliamentary systems with weak presidents.',
        ],
      },
      {
        heading: 'Divided government in presidential systems',
        paragraphs: [
          'Government is divided when the president and the majority in one or both chambers belong to different parties. Because president and chambers are elected separately (and voters may split their ticket even on the same day), there is no automatic majority for the president. Each can check the others; presidents can veto bills, sometimes line by line.',
          'Veto players are actors whose agreement is needed for a decision (president, House, Senate). The more veto players, the higher the risk of deadlock. Ways out: negotiate a compromise better than the status quo, buy support from individual legislators with pork-barrel spending in their districts, or get out of each other\'s way: the president uses discretionary powers to bypass parliament, or parliament creates independent agencies outside presidential control. Senator Joe Manchin, a Democrat from a strongly Republican state, frustrated parts of Biden\'s climate agenda.',
        ],
      },
      {
        heading: 'Parliamentary government and coalitions',
        paragraphs: [
          'Formally the government depends on a parliamentary majority, but in practice it dominates parliament: ministers drive legislation and government MPs vote with them. Party leaders join the cabinet for prestige, but governing carries an incumbency cost (likely vote losses at the next election). Prime ministers cannot always control coalition partners\' ministers, and politics has become "presidentialised" in governing and campaigning.',
          'Single-party governments have conflicts mainly within the party and need a strong leader. Coalition governments see conflicts between parties.',
          'Coalition types: minimal-winning coalitions contain only parties needed for a majority (most coalitions are like this: why share posts or compromise with parties you do not need?). Oversized (surplus) coalitions include unnecessary parties, useful for constitutional reforms needing supermajorities, for representing communities in divided societies, or to continue a successful coalition; the superfluous party is in a weak position. Minority governments lack a majority; they survive through issue-by-issue package deals with opposition parties, by ensuring there is no majority against them, and by occupying the centre (the median legislator). The Netherlands has experimented with a minority government.',
        ],
      },
      {
        heading: 'Majoritarian versus consensus democracy',
        paragraphs: [
          'If democracy is government by and for the people, who should govern when the people disagree? The majoritarian answer: the majority. The consensus answer: as many people as possible (the "patterns of democracy" framework).',
          'Majoritarian model: disproportional electoral system, two-party system, single-party government, executive dominance over parliament, unitary state, unicameral legislature, flexible constitution, weak or no judicial review, and a central bank dependent on the executive. The UK is the key example: single-party majority governments, weak opposition, no written constitution, and a de facto unicameral parliament (a weak House of Lords).',
          'Consensus model: proportional elections, multiparty system, coalition government, balanced executive-legislative power, federalism, bicameralism, a rigid constitution, strong judicial review and an independent central bank. The Netherlands is the key example, with coalition (sometimes minority) governments, a strong parliamentary opposition, PR and two chambers.',
          'Majoritarian policy-making is decisive but volatile; consensus policy-making is broadly supported and stable, but time-consuming.',
        ],
      },
      {
        heading: 'Multilevel government',
        paragraphs: [
          'Hooghe, Marks and Schakel define multilevel governance as the dispersion of authority to jurisdictions within or beyond the state: regions below and the EU or other supranational bodies above. Three explanations: functionalist (each policy has its optimal spatial scale), economic (jurisdictions reflect the self-interest of rulers, groups and voters) and identity (territorial identity and demands for self-rule).',
          'This "hollows out" the state: the EU makes policy without being a full polity, national politics risks becoming politics without policy, and regions and the EU may produce policy without politics.',
          'Unitary states increasingly empower lower levels, for functional reasons or because of regional identities, but can recentralise unilaterally (as with UK devolution). Federal states balance self-rule and shared rule: they combine a central authority with constitutionally defined autonomy for territorial units, which therefore do not depend on the centre\'s consent. Reasons for federalism: smaller states joining forces while keeping autonomy (a confederation, where each unit keeps its own constitution, or a federation with one constitution); adding veto players to protect citizens from tyranny; and granting autonomy to territorially concentrated groups to reduce conflict.',
          "Belgium shows the implications. State reforms from 1970 created three language communities (Flemish, French, German-speaking) and three regions (Flanders, Wallonia, Brussels), with direct regional elections since 1995. The traditional parties split along linguistic lines (Christian democrats 1968, liberals 1971, socialists 1978). Multilevel governance can get complicated: when the EU-Canada trade agreement (CETA) needed every member state's approval, Wallonia and Brussels objected, so Belgium could not sign.",
        ],
      },
      {
        heading: 'Delegation and accountability (Strom)',
        paragraphs: [
          'Strom describes parliamentary democracy as a chain of delegation and accountability, modelled as principal-agent relationships. The principal delegates authority; the agent acts on the principal\'s behalf and is accountable to it. In democracies voters are the ultimate principals: voters to MPs, MPs to the prime minister and cabinet, ministers to civil servants.',
          'Agency problems arise when agents act against their principals\' interests. Adverse selection: the agent has hidden information before being chosen. Moral hazard: the agent has hidden information or actions after being chosen. Ex ante controls (contract design, screening and selection of candidates) help principals pick good agents; ex post controls (monitoring, reporting requirements, institutional checks and extra veto players) reduce the risk that agents misbehave afterwards.',
        ],
      },
    ],
    keyTerms: [
      { term: 'Parliamentary system', definition: 'Government emerges from and is accountable to parliament; head of state is a separate person.' },
      { term: 'Presidential system', definition: 'Directly elected president with a fixed term who heads both state and government; not accountable to the legislature.' },
      { term: 'Semi-presidential system', definition: 'Directly elected president plus a prime minister and cabinet accountable to parliament.' },
      { term: 'Divided government', definition: 'President and the majority in one or both chambers come from different parties.' },
      { term: 'Veto player', definition: 'An actor whose agreement is necessary to change policy.' },
      { term: 'Pork-barrel politics', definition: 'Buying legislators\' support with spending in their districts.' },
      { term: 'Minimal-winning coalition', definition: 'A majority coalition in which every party is needed for the majority.' },
      { term: 'Oversized coalition', definition: 'A coalition with more parties than needed for a majority.' },
      { term: 'Minority government', definition: 'A government without a parliamentary majority, surviving through deals.' },
      { term: 'Majoritarian democracy', definition: 'Concentrates power in the majority: SMP, two parties, single-party cabinets (UK).' },
      { term: 'Consensus democracy', definition: 'Shares power widely: PR, multiparty coalitions, federalism, bicameralism (NL).' },
      { term: 'Multilevel governance', definition: 'Dispersion of authority to jurisdictions within or beyond the state.' },
      { term: 'Federalism', definition: 'Constitutionally guaranteed self-rule for territorial units combined with shared rule at the centre.' },
      { term: 'Adverse selection', definition: 'Agency problem from hidden information before the agent is chosen.' },
      { term: 'Moral hazard', definition: 'Agency problem from hidden information or actions after the agent is chosen.' },
    ],
    readings: [
      'Strom (2002), on parliamentary democracy as delegation and accountability (seminar reading).',
      'Caramani, Comparative Politics (course textbook).',
    ],
  },

  basics: {
    id: 'w3-basics',
    title: 'Forms of government',
    description: 'Week 3 · Executives, coalitions, patterns of democracy',
    lessons: [
      {
        id: 'w3-b1',
        title: 'Parliament or president?',
        topicId: 'w3-government',
        exercises: [
          {
            id: 'w3b1-01',
            type: 'choice',
            prompt: 'In a parliamentary system, how is the head of government chosen?',
            options: [
              'Indirectly, through parliament, to which it is accountable',
              'Directly, in a separate popular election for prime minister',
              'By the monarch alone, without any role for parliament',
              'By the highest court, after checking the election results',
            ],
            answer: 0,
          },
          {
            id: 'w3b1-02',
            type: 'truefalse',
            statement: 'In a presidential system, the president is both head of state and head of government.',
            answer: true,
          },
          {
            id: 'w3b1-03',
            type: 'choice',
            prompt:
              'A country has a directly elected president, and its government can be dismissed by parliament. What kind of system is it?',
            options: ['Semi-presidential', 'Presidential', 'Parliamentary', 'Federal'],
            answer: 0,
          },
          {
            id: 'w3b1-04',
            type: 'match',
            prompt: 'Match the feature to the system',
            pairs: [
              ['Fixed terms, no confidence vote', 'Presidential'],
              ['Government needs confidence of parliament', 'Parliamentary'],
              ['Elected president + accountable PM', 'Semi-presidential'],
            ],
          },
          {
            id: 'w3b1-05',
            type: 'choice',
            prompt: 'Ireland and Austria are examples of...',
            options: [
              'Semi-presidential systems that work much like parliamentary ones',
              'Presidential systems in which the president heads the government',
              'Parliamentary systems in which the monarch is head of state',
              'Semi-presidential systems in which the president dominates',
            ],
            answer: 0,
          },
          {
            id: 'w3b1-06',
            type: 'fill',
            text: 'In presidential systems, the separation of ___ means the government is not accountable to the legislature.',
            options: ['powers', 'church and state', 'parties', 'levels'],
            answer: 'powers',
          },
          {
            id: 'w3b1-07',
            type: 'choice',
            prompt: 'Where did parliamentary and presidential systems originate?',
            options: [
              'Parliamentary in European monarchies; presidential in the US',
              'Parliamentary in the US; presidential in European monarchies',
              'Parliamentary in Britain; presidential in revolutionary France',
              'Both in the Dutch Republic of the 17th century',
            ],
            answer: 0,
          },
        ],
      },
      {
        id: 'w3-b2',
        title: 'Deadlock and coalitions',
        topicId: 'w3-government',
        exercises: [
          {
            id: 'w3b2-01',
            type: 'choice',
            prompt: 'What is divided government?',
            options: [
              'President and a parliamentary majority from different parties',
              'A coalition government of two or more parties',
              'Power divided between the central state and the regions',
              'A cabinet whose ministers come from different factions',
            ],
            answer: 0,
          },
          {
            id: 'w3b2-02',
            type: 'choice',
            prompt: 'What is a veto player?',
            options: [
              'An actor whose agreement is necessary for a decision',
              'A party that votes against every government proposal',
              'An actor who may delay, but never block, a decision',
              'The president, in any system of government',
            ],
            answer: 0,
          },
          {
            id: 'w3b2-03',
            type: 'truefalse',
            statement: 'More veto players make deadlock less likely.',
            answer: false,
          },
          {
            id: 'w3b2-04',
            type: 'match',
            prompt: 'Match the government type to its description',
            pairs: [
              ['Minimal winning', 'Every party needed'],
              ['Oversized', 'More parties than needed'],
              ['Minority', 'No majority in parliament'],
              ['Single-party', 'No coalition partners'],
            ],
          },
          {
            id: 'w3b2-05',
            type: 'choice',
            prompt: 'Why are most coalitions minimal winning?',
            options: [
              'Parties avoid sharing posts with partners they do not need',
              'Most constitutions require the smallest possible majority',
              'Voters punish parties that form large coalitions',
              'Minority governments are not allowed in most democracies',
            ],
            answer: 0,
          },
          {
            id: 'w3b2-06',
            type: 'choice',
            prompt: 'How can a minority government survive?',
            options: [
              'Making deals with different opposition parties issue by issue',
              'Suspending parliament until a majority can be found',
              'Asking the head of state to pass laws by decree',
              'Refusing to negotiate with any opposition party',
            ],
            answer: 0,
            explanation: 'They also survive by making sure no majority forms against them and by occupying the centre (the median legislator).',
          },
          {
            id: 'w3b2-07',
            type: 'choice',
            prompt: 'What is pork-barrel politics?',
            options: [
              "Buying legislators' support with spending in their districts",
              'Government subsidies for farmers in rural districts',
              'Buying votes directly from citizens on election day',
              'Giving ministerial posts to coalition partners',
            ],
            answer: 0,
          },
        ],
      },
      {
        id: 'w3-b3',
        title: 'Majoritarian vs consensus',
        topicId: 'w3-government',
        exercises: [
          {
            id: 'w3b3-01',
            type: 'choice',
            prompt: 'Which feature belongs to the consensus model of democracy?',
            options: [
              'Proportional electoral system',
              'Single-party government',
              'Flexible constitution',
              'Unicameral legislature',
            ],
            answer: 0,
          },
          {
            id: 'w3b3-02',
            type: 'choice',
            prompt: 'Which country is the key example of the majoritarian model?',
            options: ['United Kingdom', 'Netherlands', 'Belgium', 'Switzerland'],
            answer: 0,
          },
          {
            id: 'w3b3-03',
            type: 'truefalse',
            statement: 'In the majoritarian model, the central bank is typically independent of the executive.',
            answer: false,
            explanation: 'An independent central bank is a consensus feature.',
          },
          {
            id: 'w3b3-04',
            type: 'choice',
            prompt: 'What basic question separates the two models?',
            options: [
              'Should government follow the majority, or as many people as possible?',
              'Should the head of state be a monarch or an elected president?',
              'Should citizens vote directly on laws, or elect representatives?',
              'Should the government be accountable to parliament or to voters?',
            ],
            answer: 0,
          },
          {
            id: 'w3b3-05',
            type: 'fill',
            text: 'Majoritarian policy-making is decisive but ___.',
            options: ['volatile', 'slow', 'consensual', 'illegitimate'],
            answer: 'volatile',
            explanation: 'Consensus policy-making is broadly supported but time-consuming.',
          },
          {
            id: 'w3b3-06',
            type: 'choice',
            prompt: 'Why is the UK described as de facto unicameral?',
            options: [
              'The House of Lords is weak and the Commons dominates',
              'It has only one chamber according to its constitution',
              'The Lords and the Commons always vote together',
              'Scotland and Wales have their own parliaments',
            ],
            answer: 0,
          },
        ],
      },
      {
        id: 'w3-b4',
        title: 'Levels and accountability',
        topicId: 'w3-government',
        exercises: [
          {
            id: 'w3b4-01',
            type: 'choice',
            prompt: 'How do Hooghe, Marks and Schakel define multilevel governance?',
            options: [
              'Dispersion of authority to jurisdictions within or beyond the state',
              'Government by a coalition of parties from different regions',
              'A parliament with two chambers representing different levels',
              'Cooperation between national ministries on shared policies',
            ],
            answer: 0,
          },
          {
            id: 'w3b4-02',
            type: 'match',
            prompt: 'Match the explanation of multilevel government to its logic',
            pairs: [
              ['Functionalist', 'Optimal scale per policy'],
              ['Economic', 'Self-interest of rulers'],
              ['Identity', 'Demand for self-rule'],
            ],
          },
          {
            id: 'w3b4-03',
            type: 'choice',
            prompt: 'What defines a federal state?',
            options: [
              'Constitutional autonomy for regions, plus shared rule at the centre',
              'Regions with powers that the centre can take back at any time',
              'A head of state who is elected by the regional parliaments',
              'Membership of a supranational union such as the EU',
            ],
            answer: 0,
          },
          {
            id: 'w3b4-04',
            type: 'truefalse',
            statement: 'A unitary state cannot transfer powers to regions.',
            answer: false,
            explanation: 'It can (e.g. UK devolution), but it can also take them back unilaterally.',
          },
          {
            id: 'w3b4-05',
            type: 'choice',
            prompt: "Belgium's three communities are based on...",
            options: ['Language', 'Religion', 'Social class', 'Territory only'],
            answer: 0,
            explanation: 'Flemish, French and German-speaking communities; the three regions are territorial.',
          },
          {
            id: 'w3b4-06',
            type: 'choice',
            prompt: "In Strom's model, who are the ultimate principals in a democracy?",
            options: ['Voters', 'Prime ministers', 'Civil servants', 'Judges'],
            answer: 0,
          },
          {
            id: 'w3b4-07',
            type: 'match',
            prompt: 'Match the principal-agent term to its meaning',
            pairs: [
              ['Adverse selection', 'Hidden info before choice'],
              ['Moral hazard', 'Hidden action after choice'],
              ['Ex ante control', 'Screening candidates'],
              ['Ex post control', 'Monitoring and reporting'],
            ],
          },
        ],
      },
    ],
  },

  advanced: {
    id: 'w3-advanced',
    title: 'Government: analysis',
    description: 'Week 3 · Classify systems, design institutions',
    lessons: [
      {
        id: 'w3-a1',
        title: 'Designing institutions',
        topicId: 'w3-government',
        exercises: [
          {
            id: 'w3a1-01',
            type: 'choice',
            prompt:
              'A directly elected president serves a fixed five-year term, appoints ministers who serve at the president\'s pleasure, and the legislature cannot dismiss the government. Which system is this?',
            options: ['Presidential', 'Semi-presidential', 'Parliamentary', 'Consensus'],
            answer: 0,
          },
          {
            id: 'w3a1-02',
            type: 'choice',
            prompt:
              'You advise a new democracy deeply divided along language lines that wants to protect minorities. Which design fits best?',
            options: [
              'Consensus features: PR, coalition government, federalism, bicameralism',
              'Majoritarian features: SMP and single-party government',
              'A strong presidency with decree powers',
              'A unitary state with a flexible constitution',
            ],
            answer: 0,
          },
          {
            id: 'w3a1-03',
            type: 'choice',
            prompt: 'Why might parties form an oversized coalition?',
            options: [
              'To pass a constitutional reform that needs a supermajority',
              'Because it is always cheaper',
              'To give the superfluous party a strong bargaining position',
              'Because minority governments are not allowed',
            ],
            answer: 0,
            explanation: 'Other reasons: representing communities in a divided society, or continuing a successful coalition.',
          },
          {
            id: 'w3a1-04',
            type: 'choice',
            prompt: 'How does split-ticket voting affect presidential systems?',
            options: [
              'It makes divided government more likely',
              'It guarantees the president a majority',
              'It removes veto players',
              'It has no effect',
            ],
            answer: 0,
          },
          {
            id: 'w3a1-05',
            type: 'truefalse',
            statement: 'In parliamentary systems, government formally depends on parliament but usually dominates it in practice.',
            answer: true,
          },
          {
            id: 'w3a1-06',
            type: 'choice',
            prompt: 'A president facing a hostile Congress issues executive orders. Which deadlock strategy is this?',
            options: [
              'Using discretionary powers to bypass parliament',
              'Pork-barrel politics to win over individual legislators',
              'Creating independent agencies outside presidential control',
              'Negotiating a compromise better than the status quo',
            ],
            answer: 0,
          },
        ],
      },
      {
        id: 'w3-a2',
        title: 'Accountability chains',
        topicId: 'w3-government',
        exercises: [
          {
            id: 'w3a2-01',
            type: 'choice',
            prompt:
              'A candidate hides a serious conflict of interest during the campaign and is elected. Which agency problem is this?',
            options: ['Adverse selection', 'Moral hazard', 'Divided government', 'Deadlock'],
            answer: 0,
          },
          {
            id: 'w3a2-02',
            type: 'choice',
            prompt: 'Once appointed, a minister quietly pursues a personal agenda against the cabinet line. Which problem is this?',
            options: ['Moral hazard', 'Adverse selection', 'Incumbency cost', 'Hollowing out'],
            answer: 0,
          },
          {
            id: 'w3a2-03',
            type: 'choice',
            prompt: 'Which of these is an ex post control?',
            options: [
              'Parliamentary questions and committee hearings',
              'Candidate screening by parties',
              'Writing a coalition agreement before taking office',
              'Primary elections',
            ],
            answer: 0,
          },
          {
            id: 'w3a2-04',
            type: 'choice',
            prompt: 'What does the CETA episode in Belgium illustrate?',
            options: [
              'Multilevel governance adds veto players, such as a regional parliament',
              'Belgium is a unitary state in which the centre decides everything alone',
              'The EU can sign trade treaties without asking its member states',
              'Federal states ratify treaties faster than unitary states do',
            ],
            answer: 0,
          },
          {
            id: 'w3a2-05',
            type: 'truefalse',
            statement: 'Federalism adds veto players, which can protect citizens from tyranny but also slow decisions.',
            answer: true,
          },
          {
            id: 'w3a2-06',
            type: 'choice',
            prompt: 'What does "politics without policy" at the national level refer to?',
            options: [
              'Parties compete nationally while key powers sit with the EU and regions',
              'National parliaments meet less often because the EU has replaced them',
              'National elections are held without any political parties taking part',
              'Regions make policy, but their politicians are appointed, not elected',
            ],
            answer: 0,
          },
        ],
      },
    ],
  },
};
