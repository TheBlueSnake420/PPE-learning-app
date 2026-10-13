import type { WeekContent } from '../../types';

// Week 7 - Interest Groups and Challenges to Party Government (not lectured yet)
// Sources: revision notes by last year's students (their "week 6"), incl. the
// populism/technocracy/party government table from Caramani (2017).

export const w7: WeekContent = {
  fromNotes: true,
  topic: {
    id: 'w7-interest-groups',
    week: 7,
    title: 'Interest Groups and Challenges to Party Government',
    summary:
      'What interest groups are and how they act, why people join them, how democracies should treat them, and how dealignment, populism and technocracy challenge party government.',
    keyPoints: [
      'Interest groups try to influence government without contesting elections.',
      'Repertoires: inside lobbying, outside lobbying (protest), political exchange and private interest government.',
      'Collective action problem (Olson): rational individuals free-ride, so groups need selective incentives.',
      'Three normative views: republican (Rousseau), pluralist (Tocqueville, Dahl) and neo-corporatist (Schmitter).',
      'Voters are dealigning and more volatile; party systems are fragmenting.',
      'Populism (will) and technocracy (reason) both reject party government, but in opposite ways (Caramani).',
    ],
    sections: [
      {
        heading: 'What are interest groups?',
        paragraphs: [
          'Classic definitions see interest groups as associations that make claims on other groups in society (Bentley 1908; Truman 1951). A narrower definition: membership organisations that try to influence government but do not take part in elections (Wilson 1990). Examples: trade unions, employers\' associations, Greenpeace, medical associations, the NRA.',
          'Typical properties: voluntary membership, an organisational (bureaucratic) structure, and the representation of interests. The line with parties is not always sharp: where union density is low, unions may be weak or state-controlled, and groups can claim to serve a public interest or defend a private one.',
        ],
      },
      {
        heading: 'What interest groups do',
        paragraphs: [
          'Direct (inside) lobbying: personal access to decision-makers, e.g. business lobbyists in Brussels or Washington.',
          'Contentious politics (outside lobbying): public campaigns and demonstrations, as social movements do.',
          'Political exchange: groups trade information, support and resources for influence on policy, e.g. unions and employers negotiating the minimum wage with the government.',
          'Private interest government: groups take on public functions themselves, e.g. self-governing bodies in agriculture that regulate the quality and quantity of production.',
        ],
      },
      {
        heading: 'Why join? The collective action problem',
        paragraphs: [
          'If a group wins a policy, everyone with that interest benefits, members or not. So why pay to join? Mancur Olson (The Logic of Collective Action, 1965) argued that rational individuals free-ride, and that only selective incentives (benefits available to members alone) overcome this. A famous example is the Ghent system, in which unions administer unemployment insurance, so membership brings a personal benefit; union density is high where it exists.',
          'People also join for other reasons: a sense of community, finding participation meaningful in itself, overestimating the cost of not joining, and groups can draw on funding beyond membership fees.',
          'Representation is unequal: some interests have far more money, some are more concentrated and easier to organise, and some are easier for governments to understand and deal with.',
        ],
      },
      {
        heading: 'Good or bad for democracy? Three views',
        paragraphs: [
          'Republican (unitarist) view, Rousseau: interest associations promote sectional interests and undermine the general will of the people.',
          'Liberal (pluralist) view, Tocqueville and Dahl: conflicting interests are normal, and freely competing groups are a source of liberty and a counterweight to dominant interests and to government.',
          'Neo-corporatist view, Schmitter: between the two. Society is seen as an organic whole in which a limited number of hierarchically organised groups (peak associations of employers and unions) cooperate structurally with the state. The structural involvement of the social partners in Dutch socio-economic policy is an example.',
        ],
      },
      {
        heading: 'Pressures on party government',
        paragraphs: [
          'Demand side (voters): dealignment means voting is less tied to cleavage identities such as class, religion or region; preferences become more individual, weakening the link between parties and voters. Volatility, the extent to which voters switch parties between elections, rises, and switches increasingly happen within the left or right bloc. A standard measure is the Pedersen index: half the sum of all parties\' absolute changes in vote share. Satisfaction with democracy depends on economic performance, which party is in power, the quality of governance (corruption) and voters\' age and education; dissatisfied citizens vote less.',
          'Supply side (parties and elites): fragmentation, i.e. more parties, depending on the age of the democracy, the electoral system and how much power parliament has. Many new parties are splinters of established ones, some are built around a personality rather than an ideology (the PVV is a Dutch example), and some fill an ideological gap; new parties often lack the organisation to last. Causes include rapid social change since the war and established parties having shaped the rules that kept them in power. Catch-all and cartel parties also weakened ties to voters.',
        ],
      },
      {
        heading: 'Will versus reason: populism, technocracy, party government',
        paragraphs: [
          'Caramani (2017) contrasts two critiques of party government. Populism claims political action should follow the will of the people; technocracy claims it should follow expertise, identifying objective solutions through rational and scientific procedures. Technocracy grew out of the organisational revolution of industrialisation (scientific management, specialisation) and the bureaucratisation of state and market.',
          'They share a lot: both are anti-political and anti-party, assume one common good for society, reject pluralism and ideology, want unmediated representation, and offer no real mechanism of accountability, ignoring checks and balances.',
          'They differ in how they identify the common good (the people or the leader versus experts), in legitimacy (will versus rational speculation), in their relation to voters (direct, continuous mobilisation versus excluding the masses), in representation (populists act as delegates and stress descriptive and symbolic representation; technocrats act as trustees with weak descriptive representation) and in focus (responsiveness versus responsibility).',
          'Party government, by contrast, assumes a pluralist society with subjective interests, mediates them through competing parties, gains legitimacy from competition and mandates, aggregates by compromise and is held accountable vertically (voters) and horizontally (other institutions). The notes conclude that populists and technocrats tend to converge: populists in office need expertise, and technocrats cannot ignore voters.',
        ],
      },
    ],
    keyTerms: [
      { term: 'Interest group', definition: 'Membership organisation that seeks to influence government without contesting elections.' },
      { term: 'Inside lobbying', definition: 'Seeking influence through direct, personal access to decision-makers.' },
      { term: 'Outside lobbying', definition: 'Seeking influence through public campaigns and protest (contentious politics).' },
      { term: 'Political exchange', definition: 'Groups trade information, support and resources for policy influence.' },
      { term: 'Private interest government', definition: 'Interest groups carrying out public functions themselves, such as self-regulation.' },
      { term: 'Collective action problem', definition: 'Individuals can enjoy a group\'s gains without contributing, so they free-ride.' },
      { term: 'Selective incentives', definition: 'Benefits only members receive, which make joining rational (Olson).' },
      { term: 'Ghent system', definition: 'Unemployment insurance run by trade unions, which boosts union membership.' },
      { term: 'Pluralism', definition: 'View that many freely competing groups protect liberty and balance power.' },
      { term: 'Neo-corporatism', definition: 'Structured cooperation between the state and a few peak associations of employers and unions.' },
      { term: 'Dealignment', definition: 'Weakening of the link between social cleavage identities and voting.' },
      { term: 'Electoral volatility', definition: 'The extent to which voters switch parties between elections (e.g. Pedersen index).' },
      { term: 'Populism', definition: 'Representation claiming that politics must follow the will of the people.' },
      { term: 'Technocracy', definition: 'Representation claiming that experts should identify and implement objective solutions.' },
      { term: 'Party government', definition: 'Parties represent competing interests and govern on the basis of mandates and accountability.' },
    ],
    readings: [
      'Olson, M. (1965). The Logic of Collective Action. Harvard University Press.',
      'Caramani, D. (2017). Will vs. Reason: The Populist and Technocratic Forms of Political Representation and Their Critique to Party Government. American Political Science Review 111(1).',
    ],
  },

  basics: {
    id: 'w7-basics',
    title: 'Groups and challengers',
    description: 'Week 7 · Interest groups, populism, technocracy',
    lessons: [
      {
        id: 'w7-b1',
        title: 'Interest groups',
        topicId: 'w7-interest-groups',
        exercises: [
          {
            id: 'w7b1-01',
            type: 'choice',
            prompt: 'What distinguishes an interest group from a political party?',
            options: [
              'It seeks to influence government but does not contest elections',
              'It contests elections but never joins a government',
              'It represents only business interests, never workers',
              'It is always funded and controlled by the state',
            ],
            answer: 0,
          },
          {
            id: 'w7b1-02',
            type: 'match',
            prompt: 'Match the repertoire to its description',
            pairs: [
              ['Inside lobbying', 'Direct access to decision-makers'],
              ['Outside lobbying', 'Protests and public campaigns'],
              ['Political exchange', 'Support traded for influence'],
              ['Private interest government', 'Groups perform public tasks'],
            ],
          },
          {
            id: 'w7b1-03',
            type: 'choice',
            prompt: 'Unions and employers negotiate the minimum wage with the government. Which repertoire is this?',
            options: ['Political exchange', 'Outside lobbying', 'Private interest government', 'Contentious politics'],
            answer: 0,
          },
          {
            id: 'w7b1-04',
            type: 'choice',
            prompt: 'Which is an example of private interest government?',
            options: [
              'A farmers\' board regulating the quality of food production',
              'A union organising a national strike against pension cuts',
              'A lobbyist meeting an MEP in Brussels',
              'An NGO petition with a million signatures',
            ],
            answer: 0,
          },
          {
            id: 'w7b1-05',
            type: 'multi',
            prompt: 'Which of these are interest groups?',
            options: ['A trade union', 'Greenpeace', 'A medical association', 'The NRA', 'A political party', 'A government ministry'],
            answers: [0, 1, 2, 3],
          },
          {
            id: 'w7b1-06',
            type: 'truefalse',
            statement: 'Voluntary membership is one of the typical properties of an interest group.',
            answer: true,
          },
        ],
      },
      {
        id: 'w7-b2',
        title: 'Why join? Who wins?',
        topicId: 'w7-interest-groups',
        exercises: [
          {
            id: 'w7b2-01',
            type: 'choice',
            prompt: 'What is the collective action problem?',
            options: [
              'People can enjoy a group\'s gains without joining, so they free-ride',
              'Groups with many members cannot agree on a common position',
              'Governments refuse to talk to groups that are too large',
              'Members always vote against their group\'s leaders',
            ],
            answer: 0,
          },
          {
            id: 'w7b2-02',
            type: 'fill',
            text: 'Olson (1965): only ___ incentives, benefits available to members alone, make it rational to join a large group.',
            options: ['selective', 'collective', 'moral', 'fiscal'],
            answer: 'selective',
          },
          {
            id: 'w7b2-03',
            type: 'choice',
            prompt: 'What is the Ghent system?',
            options: [
              'Unions run unemployment insurance, so joining brings a personal benefit',
              'A law making union membership compulsory for every worker in Belgium',
              'A rule letting employers choose which union they will bargain with',
              "A tax on non-members that is used to fund the unions' activities",
            ],
            answer: 0,
          },
          {
            id: 'w7b2-04',
            type: 'multi',
            prompt: 'Besides selective incentives, why do people join interest groups?',
            options: [
              'A sense of community',
              'Participation feels meaningful in itself',
              'Overestimating the cost of not joining',
              'It is legally required in all democracies',
              'Membership guarantees that the group wins',
            ],
            answers: [0, 1, 2],
          },
          {
            id: 'w7b2-05',
            type: 'match',
            prompt: 'Match the thinker to the view of interest groups',
            pairs: [
              ['Rousseau', 'Republican (unitarist)'],
              ['Tocqueville and Dahl', 'Liberal (pluralist)'],
              ['Schmitter', 'Neo-corporatist'],
            ],
          },
          {
            id: 'w7b2-06',
            type: 'choice',
            prompt: 'Which is an example of neo-corporatism?',
            options: [
              'Structural involvement of unions and employers in Dutch socio-economic policy',
              'Thousands of small groups competing for attention in Washington',
              'A government banning all interest groups to protect the general will',
              'Citizens deciding policy directly in referendums',
            ],
            answer: 0,
          },
          {
            id: 'w7b2-07',
            type: 'choice',
            prompt: 'Why are some interests better represented than others?',
            options: [
              'They have more money, more concentrated stakes or easier access to government',
              'They have more members, so they always win in pluralist systems',
              'Governments are legally obliged to favour the largest groups',
              'Diffuse interests are always better organised than concentrated ones',
            ],
            answer: 0,
          },
        ],
      },
      {
        id: 'w7-b3',
        title: 'Party government under pressure',
        topicId: 'w7-interest-groups',
        exercises: [
          {
            id: 'w7b3-01',
            type: 'choice',
            prompt: 'What is dealignment?',
            options: [
              'Voting becomes less tied to cleavage identities like class or religion',
              'Parties drop out of coalitions before the end of their term',
              'Voters move steadily towards the extremes of the left-right scale',
              'Parties stop aligning their programmes with their members',
            ],
            answer: 0,
          },
          {
            id: 'w7b3-02',
            type: 'choice',
            prompt: 'What does electoral volatility measure?',
            options: [
              'How much voters switch parties between elections',
              'How often governments fall between elections',
              'How much turnout varies between regions',
              'How quickly parties change their leaders',
            ],
            answer: 0,
          },
          {
            id: 'w7b3-03',
            type: 'match',
            prompt: 'Match the form of representation to its source of legitimacy',
            pairs: [
              ['Populism', 'Will of the people'],
              ['Technocracy', 'Expertise and reason'],
              ['Party government', 'Competition and mandates'],
            ],
          },
          {
            id: 'w7b3-04',
            type: 'multi',
            prompt: 'According to Caramani, what do populism and technocracy have in common?',
            options: [
              'They assume a single common good for society',
              'They reject pluralism and party competition',
              'They lack real mechanisms of accountability',
              'They both rely on expert knowledge',
              'They both mobilise the masses continuously',
            ],
            answers: [0, 1, 2],
          },
          {
            id: 'w7b3-05',
            type: 'choice',
            prompt: 'In terms of the mandate, how do populists and technocrats differ?',
            options: [
              'Populists act as delegates; technocrats as trustees',
              'Populists act as trustees; technocrats as delegates',
              'Both act as delegates of the people',
              'Both act as trustees using their own judgement',
            ],
            answer: 0,
          },
          {
            id: 'w7b3-06',
            type: 'choice',
            prompt: 'On what does party-system fragmentation depend, according to the notes?',
            options: [
              'The age of the democracy, the electoral system and the power of parliament',
              'The size of the country, its climate and its dominant religion',
              'The number of interest groups and the size of their membership',
              'The popularity of the head of state and the length of their term',
            ],
            answer: 0,
          },
          {
            id: 'w7b3-07',
            type: 'truefalse',
            statement: 'Many new parties are splinters of established parties.',
            answer: true,
          },
        ],
      },
    ],
  },

  advanced: {
    id: 'w7-advanced',
    title: 'Groups and challengers: analysis',
    description: 'Week 7 · Free riders, pluralism and populism',
    lessons: [
      {
        id: 'w7-a1',
        title: 'Analysing groups and parties',
        topicId: 'w7-interest-groups',
        exercises: [
          {
            id: 'w7a1-01',
            type: 'choice',
            prompt:
              'A farmers\' union stops organising tractor protests and instead joins a board that sets food-quality standards. Which shift is this?',
            options: [
              'From outside lobbying to private interest government',
              'From inside lobbying to contentious politics',
              'From political exchange to outside lobbying',
              'From pluralism to the republican model',
            ],
            answer: 0,
          },
          {
            id: 'w7a1-02',
            type: 'choice',
            prompt:
              'A climate NGO wins a law that benefits everyone, members or not. What would Olson expect a rational non-member to do?',
            options: [
              'Enjoy the benefit without joining, unless offered a members-only perk',
              'Join immediately, because the group has proven it is effective',
              'Start a rival group to claim credit for the law',
              'Lobby the government to repeal the law',
            ],
            answer: 0,
          },
          {
            id: 'w7a1-03',
            type: 'choice',
            prompt: "What is the republican (Rousseau) objection to interest groups?",
            options: [
              'Sectional interests undermine the general will of the people',
              'Groups are too weak to counter the power of the state',
              'Groups should be integrated into the state as partners',
              'Groups make elections unnecessary',
            ],
            answer: 0,
          },
          {
            id: 'w7a1-04',
            type: 'choice',
            prompt: "Party vote shares go from A 30%, B 25%, C 45% to A 20%, B 35%, C 45%. What is the Pedersen volatility index?",
            options: ['10', '20', '5', '45'],
            answer: 0,
            explanation: 'Half the sum of absolute changes: (10 + 10 + 0) / 2 = 10.',
          },
          {
            id: 'w7a1-05',
            type: 'choice',
            prompt: 'Why is the claim that there is one objective common good a challenge to party government?',
            options: [
              'Party government assumes legitimate competing interests settled by competition and compromise',
              'Party government assumes that experts should decide what is best for society',
              'Party government assumes that the leader embodies the will of the people',
              'Party government assumes that only one party should exist',
            ],
            answer: 0,
          },
          {
            id: 'w7a1-06',
            type: 'choice',
            prompt: 'Why might populists and technocrats converge over time, according to the notes?',
            options: [
              'Populists in office need expertise, and technocrats cannot ignore voters',
              'Both are banned from forming parties, so they merge',
              'Voters stop distinguishing between them after a few elections',
              'Both lose interest in power once they enter government',
            ],
            answer: 0,
          },
        ],
      },
      {
        id: 'w7-a2',
        title: 'Think it through',
        topicId: 'w7-interest-groups',
        exercises: [
          {
            id: 'w7a2-01',
            type: 'open',
            prompt: 'Are interest groups good or bad for democracy? Use the republican, pluralist and neo-corporatist views.',
            modelAnswer:
              'The republican view (Rousseau) sees groups as factions that put sectional interests above the general will. The pluralist view (Tocqueville, Dahl) sees freely competing groups as a source of liberty and a counterweight to concentrated power and to government. The neo-corporatist view (Schmitter) sees a few organised peak associations working with the state as a way to make and implement policy consensually, as with the Dutch social partners. A balanced answer adds that representation is unequal: money, concentrated stakes and the collective action problem (Olson) favour some interests, so the democratic value of groups depends on how open and balanced the system is.',
            keyPoints: [
              'Republican: sectional interests undermine the general will',
              'Pluralist: competing groups protect liberty and balance power',
              'Neo-corporatist: structured partnership with the state (e.g. NL)',
              'Representation is unequal (resources, collective action problem)',
              'A reasoned verdict that depends on how balanced the system is',
            ],
          },
          {
            id: 'w7a2-02',
            type: 'open',
            prompt: 'Compare populism and technocracy as critiques of party government.',
            modelAnswer:
              'Both reject party government: they assume one common good, deny pluralism, want unmediated representation and offer no real accountability. They differ in how the common good is found: populism through the will of the people (often voiced by a leader), technocracy through expertise and rational procedures. Populists mobilise the people continuously and act as delegates with strong descriptive and symbolic representation; technocrats exclude the masses, act as trustees and stress responsibility over responsiveness. Party government instead accepts conflicting interests, aggregates them through competition and compromise, and is held accountable by voters and institutions.',
            keyPoints: [
              'Shared: one common good, anti-pluralist, anti-party',
              'Shared: unmediated, with no real accountability',
              'Populism: will of the people, mobilisation, delegate',
              'Technocracy: expertise, excluding the masses, trustee',
              'Contrast with party government: pluralism, competition, accountability',
            ],
          },
          {
            id: 'w7a2-03',
            type: 'multi',
            prompt: 'Which of these are demand-side (voter) trends in party systems?',
            options: [
              'Dealignment',
              'Rising volatility',
              'Declining satisfaction with democracy',
              'Party-system fragmentation',
              'Splinter parties',
              'Personality-based parties',
            ],
            answers: [0, 1, 2],
            explanation: 'The last three are supply-side (party) trends.',
          },
          {
            id: 'w7a2-04',
            type: 'choice',
            prompt: 'In country Z, union membership is compulsory and the unions are controlled by the state. Why are they hard to classify as interest groups?',
            options: [
              'They lack voluntary membership and independence from the state',
              'They represent workers rather than businesses',
              'They do not contest elections',
              'They use outside lobbying rather than inside lobbying',
            ],
            answer: 0,
          },
        ],
      },
    ],
  },
};
