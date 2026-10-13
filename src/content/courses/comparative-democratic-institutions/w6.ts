import type { WeekContent } from '../../types';

// Week 6 - Parties and Party Systems (week 5 was pitch week, no lecture)
// Sources: Week 6 lecture slides (incl. median voter intermezzo).

export const w6: WeekContent = {
  topic: {
    id: 'w6-parties',
    week: 6,
    title: 'Parties and Party Systems',
    summary:
      'What parties are and do, how party types evolved, how Downs explains party competition, the four types of party systems, and the cleavages behind them.',
    keyPoints: [
      'Definitions range from Burke (a body united on a principle) to Schumpeter and Downs (teams competing for power).',
      'Parties coordinate, structure electoral competition, recruit personnel and represent groups.',
      'Party types evolved: cadre, mass, catch-all, cartel, anti-cartel.',
      "Downs' median voter theorem: in two-party competition parties converge on the centre; in PR systems they differentiate.",
      'Four party systems: dominant-party, two-party, multiparty, bipolar.',
      'Lipset & Rokkan: party systems reflect historical cleavages and "froze" in the 1920s.',
      'New cleavages: materialism vs post-materialism (GAL vs TAN) and winners vs losers of globalisation.',
    ],
    sections: [
      {
        heading: 'Defining parties',
        paragraphs: [
          'Schattschneider (1942) argued that political parties created democracy and that modern democracy is unthinkable without them. Parties are everywhere, yet their definition is contested and their motives, organisation and behaviour vary widely.',
          "Edmund Burke (1770) defined a party as a body of men united to promote the national interest on some particular principle they all agreed on. Joseph Schumpeter rejected this: a party is a group whose members act together in the competitive struggle for political power. Minimal definitions centre on office: Sartori (any group with an official label that can place candidates in public office through elections), Janda (an organisation seeking to place its representatives in government) and Downs (a team seeking to control the governing apparatus by winning elections).",
          'Huckshorn combines four common elements: the objective (gaining control over governmental power), methods (nominating candidates, contesting elections, organising government), competition (contesting elections) and autonomy (independent competitors), plus an implicit element: enough coherence to coordinate and keep an identity.',
        ],
      },
      {
        heading: 'What parties do',
        paragraphs: [
          'Coordination: within government (among officials) and within society (among citizens with shared preferences), linking the two worlds. Structuring electoral competition: parties are central in elections and supply the candidates and issues voters choose between. Recruitment: selecting candidates for elections and for appointed office. Representation: of social groups and ideological positions, moving from interest articulation to aggregation to rule-making.',
          'An ideology is a system of ideas about what society is like (descriptive), what it should be like (normative), and how to get there. A party family is a group of parties in different countries with similar ideologies and programmes, usually rooted in the same cleavage and founding era.',
        ],
      },
      {
        heading: 'Party types over time',
        paragraphs: [
          'Cadre (elite) parties, second half of the 19th century: formed inside parliament, claim to represent the national interest, only elites as members (quality over quantity). Examples: conservatives and liberals.',
          'Mass parties, first half of the 20th century: formed outside parliament (e.g. from trade unions), represent a particular group such as a social class, with a large and homogeneous membership. Example: socialist parties.',
          'Catch-all parties, 1950s onwards: existing parties de-emphasise their class base to win broader support; membership matters less and professionals more. Examples: CDU and SPD, Labour. The SPD\'s Bad Godesberg programme (1959), after disappointing results in 1953 and 1957, dropped Marxism, accepted the market economy and pluralism, and recognised the church: "Go with the times, go with the SPD".',
          'Cartel parties, 1970s onwards: mainstream governing parties focus on governing rather than representing; party loyalty and membership erode sharply, and their reference point becomes the policies of the state, banks and the EU.',
          'Anti-cartel parties, 1990s onwards: formed outside parliament, built around ideas rather than social groups, often with more committed members. Examples: UKIP, the Five Star Movement, Podemos, FvD.',
        ],
      },
      {
        heading: "Downs' median voter theorem",
        paragraphs: [
          "Anthony Downs (An Economic Theory of Democracy, 1957) applied rational choice to politics. Assumptions: rationality (parties maximise votes, voters choose the party closest to their preferences) and full information. Voters and parties sit on one left-right line, with most voters near the centre. The median voter splits the electorate 50/50.",
          'With two parties, each moves towards the median voter to maximise votes, until their programmes largely overlap (the US and UK). This helps explain why parties sometimes drop core ideology, as the SPD did.',
          'The model was built for majoritarian systems with high thresholds and no risk of new parties. If a third party can emerge to capture fringe voters, convergence becomes risky. In multiparty PR systems competition does not centre on the median: parties seek distinct positions, and ideological distance increases.',
          'Criticism: parties also care about policy and ideology, voters vote out of tradition, identity, habit or protest, and neither side is fully informed. Still, the model helps show how competition for voters shapes ideology.',
        ],
      },
      {
        heading: 'Types of party systems',
        paragraphs: [
          'Party systems differ in the number of parties and their relative size. Dominant-party: one party with more than an absolute majority, one-party government, no alternation (India 1947-75, Japan 1955-93, South Africa since 1994). Two-party: two large parties with together about 80-90% of votes and seats, one-party government, alternation between them (UK, US, Malta, Costa Rica, Austria until 2000). Multiparty: several or many parties, none near 50%, coalition government, alternation through changing coalitions (Belgium, Denmark, Finland, the Netherlands, Colombia). Bipolar: two large blocs of several parties each with 40-50% of the vote, coalition government, alternation between blocs (France, Portugal).',
          "Duverger's law links these to electoral systems: SMP tends towards two-party systems and PR towards multiparty systems, through the mechanical effect and psychological effects on parties (merging or splitting) and voters (strategic or sincere voting).",
        ],
      },
      {
        heading: 'Cleavages',
        paragraphs: [
          'Schattschneider (The Semisovereign People) called politics a "conflict of conflicts": of the countless potential conflicts in a society only a few become politically significant, and every party must decide which battle it most wants to win.',
          'Lipset and Rokkan (Party Systems and Voter Alignments, 1967) traced party systems to cleavages produced by two revolutions. The national revolution produced centre-periphery and church-state conflicts (regionalist and ethnic parties; Christian democrats, conservatives and liberals). The industrial revolution produced land-industry (urban-rural) and owner-worker conflicts (agrarian parties; socialist and labour parties).',
          'Industrialisation drew workers to cities in poor conditions; trade unions mobilised them with socialism as a unifying ideology, and many socialist and labour parties grew out of unions. After the Russian Revolution (1917), the left split between communists (revolution) and socialists (gradualism through elections). The labour-capital conflict structured 20th-century left-right politics.',
          'Freezing hypothesis: the party systems of the 1960s reflected the cleavage structures of the 1920s, and many parties were older than most of their voters. The class cleavage became salient just as (male) suffrage was extended in the 1910s-20s, so no untapped electorate was left for new parties and barriers to entry became too high.',
          "A textbook overview (Bale) maps cleavages to party families: land-industry to liberals and conservatives; owner-worker to socialists and social democrats; urban-rural to agrarians; centre-periphery to regionalists; church-state to Christian democrats; revolution-gradualism to communists; democracy-totalitarianism to fascists; materialism-postmaterialism to greens; and multiculturalism-homogeneity to the far right.",
        ],
      },
      {
        heading: 'New cleavages',
        paragraphs: [
          'Materialism vs post-materialism (Inglehart, The Silent Revolution, 1977): an intergenerational cleavage in which younger cohorts prioritise post-material values (third-world solidarity, gender and racial equality, sexual freedom, fair trade) over bread-and-butter issues such as security, authority and full employment. New social movements followed (feminism in the 1970s, environmentalism in the 1980s, anti-globalisation in the 1990s), as did new left and green parties from the 1980s. The new dimension is often labelled GAL (green-alternative-libertarian) versus TAN (traditional-authoritarian-nationalist).',
          'The globalisation cleavage (Kriesi et al. 2012) divides the winners and losers of globalisation. Economically, some sectors profit from new markets and cheap labour (e.g. ICT) while others suffer (low-skilled industry, agriculture); culturally, growing diversity is perceived by some as a threat. Winners are mainly the higher educated, losers mainly the lower educated, producing competition between a new left and a new right.',
        ],
      },
      {
        heading: 'Extra: mapping parties in two dimensions (from student notes)',
        paragraphs: [
          "Today's party competition is often mapped on two dimensions: an economic left-right axis and a cultural GAL-TAN axis. Huib Pellikaan's confrontational method places parties by scoring their positions on a limited set of policy statements that divide them: each item scores -1, 0 or +1, adding up to a position between -10 and +10 on each dimension.",
          "Last year's Dutch map placed GL, PvdA, SP and PvdD on the left and GAL side; D66 on the GAL side, slightly right of centre; the VVD on the right, slightly TAN; CDA and ChristenUnie right of centre and somewhat TAN; the PVV near the economic centre but on the TAN side; and the SGP furthest towards TAN.",
          'Kriesi et al. add the globalisation conflict as a dimension of integration (cosmopolitan) versus demarcation (nationalist). Greens and Social Democrats sit in the interventionist-cosmopolitan corner; Liberals, Christian Democrats and Conservatives (with business) in the neoliberal-cosmopolitan corner; right-wing populists mobilise the losers of globalisation on the demarcation side, increasingly combining nationalism with interventionist economic positions.',
        ],
      },
    ],
    keyTerms: [
      { term: 'Political party (minimal)', definition: 'A group that presents candidates at elections to place them in public office.' },
      { term: 'Party family', definition: 'Parties in different countries with similar ideologies and programmes.' },
      { term: 'Ideology', definition: 'Ideas about what society is, what it should be, and how to get there.' },
      { term: 'Cadre party', definition: '19th-century elite party formed in parliament.' },
      { term: 'Mass party', definition: 'Early 20th-century party formed outside parliament to represent a group such as a class, with a large membership.' },
      { term: 'Catch-all party', definition: 'Post-1950s party appealing beyond its original class base.' },
      { term: 'Cartel party', definition: 'Mainstream governing party oriented to the state rather than to representing society.' },
      { term: 'Anti-cartel party', definition: 'Challenger party, often idea-based, opposing the mainstream "cartel".' },
      { term: 'Median voter', definition: 'The voter in the exact middle of the distribution, splitting the electorate 50/50.' },
      { term: 'Dominant-party system', definition: 'One party wins an absolute majority for long periods without alternation, despite elections.' },
      { term: 'Bipolar party system', definition: 'Two large blocs of parties alternate in government.' },
      { term: 'Cleavage', definition: 'A deep, lasting social division that structures party competition.' },
      { term: 'Freezing hypothesis', definition: 'Lipset & Rokkan: 1960s party systems reflected the cleavages of the 1920s.' },
      { term: 'Post-materialism', definition: 'Priority on self-expression, equality and the environment over material security (Inglehart).' },
      { term: 'GAL / TAN', definition: 'Green-alternative-libertarian vs traditional-authoritarian-nationalist.' },
      {
        term: 'Confrontational method',
        definition: "Pellikaan: placing parties by scoring them -1, 0 or +1 on a set of dividing policy statements.",
      },
      {
        term: 'Integration vs demarcation',
        definition: 'Kriesi et al.: the cultural conflict between cosmopolitan openness and national closure created by globalisation.',
      },
    ],
    readings: [
      'Lipset, S. M. & Rokkan, S. (eds.) (1967). Party Systems and Voter Alignments. Free Press.',
      'Downs, A. (1957). An Economic Theory of Democracy. Harper & Row.',
      'Bale, T. (2015). European Politics: A Comparative Introduction. Macmillan International Higher Education.',
    ],
  },

  basics: {
    id: 'w6-basics',
    title: 'Parties',
    description: 'Week 6 · Parties, party systems, cleavages',
    lessons: [
      {
        id: 'w6-b1',
        title: 'What parties are for',
        topicId: 'w6-parties',
        exercises: [
          {
            id: 'w6b1-01',
            type: 'match',
            prompt: 'Match the author to their definition of a party',
            pairs: [
              ['Burke', 'United on a shared principle'],
              ['Schumpeter', 'Competitive struggle for power'],
              ['Downs', 'Team seeking office via elections'],
            ],
          },
          {
            id: 'w6b1-02',
            type: 'choice',
            prompt: "Which is NOT one of Huckshorn's four elements of a party?",
            options: ['Ideology', 'Objective', 'Methods', 'Autonomy'],
            answer: 0,
            explanation: 'The four are objective, methods, competition and autonomy (plus implicit coherence).',
          },
          {
            id: 'w6b1-03',
            type: 'choice',
            prompt: 'Which list gives the main functions of political parties?',
            options: [
              'Coordination, structuring competition, recruitment, representation',
              'Legislation, adjudication, law enforcement and auditing government',
              'Lobbying, fundraising, mobilising protests and running media outlets',
              'Taxation, defence, providing justice and organising public education',
            ],
            answer: 0,
          },
          {
            id: 'w6b1-04',
            type: 'fill',
            text: 'Schattschneider: modern democracy is unthinkable save in terms of the ___.',
            options: ['parties', 'courts', 'media', 'unions'],
            answer: 'parties',
          },
          {
            id: 'w6b1-05',
            type: 'choice',
            prompt: 'What is a party family?',
            options: [
              'Parties in different countries with similar ideologies and programmes',
              'All the parties that together form one governing coalition',
              'A party together with its youth wing and affiliated trade union',
              'Parties in one country that split off from the same original party',
            ],
            answer: 0,
          },
          {
            id: 'w6b1-06',
            type: 'choice',
            prompt: 'What does an ideology contain?',
            options: [
              'A view of how society is, how it should be, and how to get there',
              "A party's concrete promises for the coming election only",
              'A set of rules for how a party selects its leaders',
              "A description of a party's typical voters and members",
            ],
            answer: 0,
          },
        ],
      },
      {
        id: 'w6-b2',
        title: 'Party types',
        topicId: 'w6-parties',
        exercises: [
          {
            id: 'w6b2-01',
            type: 'order',
            prompt: 'Put the party types in the order they emerged',
            items: ['Cadre party', 'Mass party', 'Catch-all party', 'Cartel party', 'Anti-cartel party'],
          },
          {
            id: 'w6b2-02',
            type: 'match',
            prompt: 'Match the party type to its description',
            pairs: [
              ['Cadre', 'Elite members, born in parliament'],
              ['Mass', 'Class-based, large membership'],
              ['Catch-all', 'Appeals beyond its class'],
              ['Cartel', 'Focused on governing'],
              ['Anti-cartel', 'Challenges the mainstream'],
            ],
          },
          {
            id: 'w6b2-03',
            type: 'choice',
            prompt: "What did the SPD's Bad Godesberg programme (1959) do?",
            options: [
              'Dropped Marxism and accepted the market economy',
              'Committed the party to a socialist revolution',
              'Ended the alliance between the SPD and the unions',
              'Restricted party membership to industrial workers',
            ],
            answer: 0,
            explanation: 'A move towards the catch-all model after poor results in 1953 and 1957.',
          },
          {
            id: 'w6b2-04',
            type: 'truefalse',
            statement: 'Mass parties typically originated outside parliament, for example from trade unions.',
            answer: true,
          },
          {
            id: 'w6b2-05',
            type: 'choice',
            prompt: 'Which are examples of anti-cartel parties?',
            options: [
              'UKIP, Five Star Movement, Podemos, FvD',
              'CDU, SPD, Labour',
              'Conservatives and liberals of the 19th century',
              'Communist parties after 1917',
            ],
            answer: 0,
          },
          {
            id: 'w6b2-06',
            type: 'choice',
            prompt: 'What has happened to party membership in the cartel era?',
            options: ['It has declined strongly', 'It has grown fast', 'It has stayed stable', 'It became compulsory'],
            answer: 0,
          },
        ],
      },
      {
        id: 'w6-b3',
        title: 'Systems and cleavages',
        topicId: 'w6-parties',
        exercises: [
          {
            id: 'w6b3-01',
            type: 'match',
            prompt: 'Match the party system to an example',
            pairs: [
              ['Dominant-party', 'Japan 1955-1993'],
              ['Two-party', 'United States'],
              ['Multiparty', 'Netherlands'],
              ['Bipolar', 'Portugal'],
            ],
          },
          {
            id: 'w6b3-02',
            type: 'choice',
            prompt: 'What characterises a bipolar party system?',
            options: [
              'Two blocs of several parties, each with 40-50%, alternating in power',
              'Two single parties that together hold about 80-90% of the seats',
              'One dominant party facing one united opposition bloc',
              'Many parties, none near 50%, in shifting coalitions',
            ],
            answer: 0,
          },
          {
            id: 'w6b3-03',
            type: 'choice',
            prompt: "What is Lipset and Rokkan's freezing hypothesis?",
            options: [
              "The 1960s party systems reflected the cleavages of the 1920s",
              'Party membership stopped growing after the Second World War',
              'New parties cannot enter parliament in PR systems',
              'Individual voters never switch to a different party',
            ],
            answer: 0,
          },
          {
            id: 'w6b3-04',
            type: 'choice',
            prompt: 'Why did party systems freeze, according to Lipset and Rokkan?',
            options: [
              'Voters were mobilised as suffrage expanded, leaving none for newcomers',
              'Governments banned new parties to protect the established ones',
              'Television and newspapers only covered the established parties',
              'Most countries switched to SMP, which blocks new parties',
            ],
            answer: 0,
          },
          {
            id: 'w6b3-05',
            type: 'match',
            prompt: 'Match the cleavage to the party family it produced',
            pairs: [
              ['Owner-worker', 'Social democrats'],
              ['Church-state', 'Christian democrats'],
              ['Centre-periphery', 'Regionalists'],
              ['Urban-rural', 'Agrarians'],
              ['Materialism-postmaterialism', 'Greens'],
            ],
          },
          {
            id: 'w6b3-06',
            type: 'choice',
            prompt: 'What do GAL and TAN stand for?',
            options: [
              'Green-alternative-libertarian vs traditional-authoritarian-nationalist',
              'Global-active-liberal vs territorial-agrarian-national',
              'Green-agrarian-left vs trade-and-nation',
              'General-assembly-left vs tax-and-nationalise',
            ],
            answer: 0,
          },
          {
            id: 'w6b3-07',
            type: 'choice',
            prompt: 'Who are mainly the "losers" in the globalisation cleavage (Kriesi et al.)?',
            options: [
              'Mainly the lower educated, in exposed sectors',
              'Mainly the higher educated, working in ICT',
              'Mainly pensioners living on fixed incomes',
              'Mainly owners of export-oriented firms',
            ],
            answer: 0,
          },
        ],
      },
      {
        id: 'w6-b4',
        title: 'Mapping parties',
        topicId: 'w6-parties',
        fromNotes: true,
        exercises: [
          {
            id: 'w6b4-01',
            type: 'choice',
            prompt: 'Which two dimensions are commonly used to map parties today?',
            options: [
              'Economic left-right and cultural GAL-TAN',
              'Urban-rural and centre-periphery',
              'Government-opposition and old-new',
              'Federal-unitary and presidential-parliamentary',
            ],
            answer: 0,
          },
          {
            id: 'w6b4-02',
            type: 'choice',
            prompt: "How does Pellikaan's confrontational method place parties?",
            options: [
              'By scoring them -1, 0 or +1 on a set of policy statements that divide them',
              'By asking voters where they think each party stands',
              'By counting how often parties mention each issue in their manifestos',
              'By looking at which parties have governed together in coalitions',
            ],
            answer: 0,
          },
          {
            id: 'w6b4-03',
            type: 'match',
            prompt: 'Match the Dutch party to its position on last year\'s map',
            pairs: [
              ['GroenLinks', 'Left and GAL'],
              ['D66', 'Just right of centre, GAL'],
              ['VVD', 'Right, slightly TAN'],
              ['SGP', 'Strongly TAN'],
            ],
          },
          {
            id: 'w6b4-04',
            type: 'choice',
            prompt: 'Where did last year\'s map place the PVV?',
            options: [
              'Near the economic centre, on the TAN side',
              'Far right economically, on the GAL side',
              'Far left economically, on the GAL side',
              'In the exact centre on both dimensions',
            ],
            answer: 0,
          },
          {
            id: 'w6b4-05',
            type: 'choice',
            prompt: 'In Kriesi et al.\'s space, where do right-wing populists mobilise?',
            options: [
              'On the demarcation (nationalist) side, among the losers of globalisation',
              'In the neoliberal-cosmopolitan corner, with business',
              'In the interventionist-cosmopolitan corner, with the Greens',
              'In the centre, competing for the median voter',
            ],
            answer: 0,
          },
        ],
      },
    ],
  },

  advanced: {
    id: 'w6-advanced',
    title: 'Parties: analysis',
    description: 'Week 6 · Apply Downs, explain party system change',
    lessons: [
      {
        id: 'w6-a1',
        title: 'The median voter',
        topicId: 'w6-parties',
        exercises: [
          {
            id: 'w6a1-01',
            type: 'choice',
            prompt: 'In a two-party system with most voters near the centre, what does Downs predict?',
            options: [
              'Both parties converge towards the median voter',
              'Both parties move apart to mobilise their bases',
              'The smaller party disappears within a few elections',
              'Each party stays at its original ideological position',
            ],
            answer: 0,
          },
          {
            id: 'w6a1-02',
            type: 'choice',
            prompt: 'How does competition differ in multiparty PR systems?',
            options: [
              'Parties seek distinct positions, and ideological distance increases',
              'All parties converge on the median voter, even more than with two',
              'Only the two largest parties compete; the rest support coalitions',
              'Parties compete on personalities rather than on ideological positions',
            ],
            answer: 0,
          },
          {
            id: 'w6a1-03',
            type: 'choice',
            prompt: 'Why might two parties NOT converge on the median if a new party can easily emerge?',
            options: [
              'Moving to the centre leaves fringe voters free for a new party',
              'The median voter usually abstains, so the centre is not worth it',
              'New parties always win the median voter in their first election',
              'Parties only care about votes when there are exactly two of them',
            ],
            answer: 0,
          },
          {
            id: 'w6a1-04',
            type: 'choice',
            prompt: 'Which is a common criticism of the median voter model?',
            options: [
              'Voters vote out of identity or habit, and parties care about policy',
              'It assumes that there are many parties in every system',
              'It ignores the left-right dimension of political competition',
              'It was designed for PR systems and fails in two-party systems',
            ],
            answer: 0,
          },
          {
            id: 'w6a1-05',
            type: 'choice',
            prompt: 'A party loses two elections, then drops its founding doctrine to appeal to centrist voters. Which ideas explain this best?',
            options: [
              "Downs' vote-maximisation and the shift to a catch-all party",
              "Lipset and Rokkan's freezing hypothesis about cleavages",
              'The rise of a cartel party that stops representing voters',
              "Duverger's psychological effect on strategic voters",
            ],
            answer: 0,
            explanation: "The SPD's Bad Godesberg programme (1959) is the lecture's example.",
          },
          {
            id: 'w6a1-06',
            type: 'choice',
            prompt: 'What does Schattschneider mean by "a conflict of conflicts"?',
            options: [
              'Of countless potential conflicts only a few become political',
              'Parties always fight each other on every possible issue',
              'Conflicts inside parties matter more than conflicts between them',
              'International conflicts end up dominating domestic politics',
            ],
            answer: 0,
            explanation: 'Every party has to decide which battle it most wants to win; unity is the price of victory.',
          },
        ],
      },
      {
        id: 'w6-a2',
        title: 'Explaining change',
        topicId: 'w6-parties',
        exercises: [
          {
            id: 'w6a2-01',
            type: 'choice',
            prompt: 'What explains the rise of green parties since the 1980s?',
            options: [
              'Younger cohorts putting post-material values first',
              'The extension of suffrage to all adult men',
              'The split on the left after the Russian Revolution',
              'Farmers leaving agrarian parties for new ones',
            ],
            answer: 0,
            explanation: "Inglehart's materialism-postmaterialism cleavage, also seen in new social movements such as environmentalism.",
          },
          {
            id: 'w6a2-02',
            type: 'choice',
            prompt: 'A country switches from SMP to list PR. What would Duverger lead you to expect?',
            options: [
              'More parties and more coalition governments',
              'Fewer parties and single-party governments',
              'No change',
              'A dominant-party system',
            ],
            answer: 0,
          },
          {
            id: 'w6a2-03',
            type: 'choice',
            prompt: 'What split the left after the Russian Revolution of 1917?',
            options: [
              'Revolution (communists) versus gradual change through elections',
              'Religious workers versus secular workers in the trade unions',
              'Urban industrial workers versus rural agricultural labourers',
              'Support for versus opposition to national independence',
            ],
            answer: 0,
          },
          {
            id: 'w6a2-04',
            type: 'choice',
            prompt: 'Why might the cartel party model open space for anti-cartel challengers?',
            options: [
              'Cartel parties focus on governing rather than representing groups',
              'Cartel parties have too many members to agree on a programme',
              'Cartel parties refuse to enter government, leaving a vacuum',
              'Cartel parties only compete in regional, not national, elections',
            ],
            answer: 0,
          },
          {
            id: 'w6a2-05',
            type: 'truefalse',
            statement:
              'The globalisation cleavage cuts across the old economic left-right divide, producing competition between a new left and a new right.',
            answer: true,
          },
          {
            id: 'w6a2-06',
            type: 'choice',
            prompt: 'How does a dominant-party system differ from a one-party dictatorship?',
            options: [
              'Competitive elections are held, but one party keeps winning a majority',
              'There are no elections at all, but several parties are allowed to exist',
              'The dominant party must always govern in a coalition with smaller ones',
              'Only the dominant party may nominate candidates for parliament',
            ],
            answer: 0,
          },
        ],
      },
      {
        id: 'w6-a3',
        title: 'Think it through',
        topicId: 'w6-parties',
        exercises: [
          {
            id: 'w6a3-01',
            type: 'open',
            prompt:
              'Use Lipset and Rokkan to explain the main 20th-century party families in a country like the Netherlands, and explain why its party system has fragmented since.',
            modelAnswer:
              'Lipset and Rokkan trace party families to cleavages created by the national and industrial revolutions: church-state conflict produced Christian democratic parties, the owner-worker conflict produced socialist/social democratic parties versus liberals, and the land-industry conflict shaped conservatives and liberals. Because these cleavages were mobilised as suffrage expanded around the 1910s-20s, the party systems "froze". Since then new cleavages (materialist versus post-materialist values, GAL-TAN, globalisation winners versus losers) have produced green, new-left, liberal-progressive and right-populist parties, and with a very low effective threshold under Dutch PR (Duverger) new parties enter parliament easily, so the system has fragmented.',
            keyPoints: [
              'Cleavages from the national and industrial revolutions',
              'Church-state gave Christian democrats; owner-worker gave socialists vs liberals',
              'Freezing: cleavages mobilised as suffrage expanded',
              'New cleavages: post-materialism, GAL-TAN, globalisation',
              'Low threshold under PR lets new parties enter (Duverger)',
            ],
          },
          {
            id: 'w6a3-02',
            type: 'open',
            prompt: "Does Downs's median voter theorem explain party competition in the Netherlands? Why or why not?",
            modelAnswer:
              "Downs assumes rational, fully informed voters and vote-maximising parties on a single left-right line, and predicts that in a two-party system both parties converge on the median voter. The Netherlands is a multiparty PR system with a low threshold: new parties can enter easily, so established parties risk losing their flanks if they move to the centre, and parties seek distinct positions instead. Competition also runs on two dimensions (left-right and GAL-TAN), so there is no single median. The theory partly fits large parties courting the centre, but voters often vote on identity, habit or protest. Overall it fits majoritarian systems better than Dutch politics.",
            keyPoints: [
              'Assumptions: rationality, full information, one dimension',
              'Prediction: convergence on the median in two-party systems',
              'PR with a low threshold: parties differentiate instead',
              'Two dimensions mean no single median voter',
              'Partial fit; identity and protest voting violate the assumptions',
            ],
          },
          {
            id: 'w6a3-03',
            type: 'multi',
            prompt: 'Which of these describe cartel parties?',
            options: [
              'Oriented towards the state and governing',
              'Declining membership and party loyalty',
              'Mainstream parties that alternate in power',
              'Formed outside parliament by trade unions',
              'Represent a single social class',
              'Idea-based challengers of the mainstream',
            ],
            answers: [0, 1, 2],
            explanation: 'The last three describe mass parties and anti-cartel parties.',
          },
          {
            id: 'w6a3-04',
            type: 'choice',
            prompt: 'A party wants generous welfare spending but strict limits on immigration. Where does it sit on the two-dimensional map?',
            options: [
              'Economically left and culturally TAN',
              'Economically right and culturally GAL',
              'Economically left and culturally GAL',
              'Economically right and culturally TAN',
            ],
            answer: 0,
            explanation: 'In Kriesi et al.\'s terms, the interventionist-nationalist corner.',
          },
          {
            id: 'w6a3-05',
            type: 'choice',
            prompt:
              'With the confrontational method, a party scores +1 on 6 statements, -1 on 2 and 0 on 2 (10 statements in all). What is its position on the -10 to +10 scale?',
            options: ['+4', '+6', '+8', '-4'],
            answer: 0,
            explanation: '6 × (+1) + 2 × (-1) + 2 × 0 = +4.',
          },
          {
            id: 'w6a3-06',
            type: 'choice',
            prompt: 'A green party wins seats under PR with a low threshold but would win none under SMP with the same national vote share. Why?',
            options: [
              "Duverger's mechanical and psychological effects punish spread-out small parties",
              'SMP systems legally ban parties founded after the Second World War',
              'Green voters are always concentrated in a few rural districts',
              'PR systems hand small parties extra bonus seats on top of their share',
            ],
            answer: 0,
          },
        ],
      },
    ],
  },
};
