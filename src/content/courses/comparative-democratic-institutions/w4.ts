import type { WeekContent } from '../../types';

// Week 4 - Electoral Systems and Representation
// Sources: Week 4 lecture slides.

export const w4: WeekContent = {
  topic: {
    id: 'w4-electoral-systems',
    week: 4,
    title: 'Electoral Systems and Representation',
    summary:
      'How votes become seats: majoritarian, proportional and mixed systems, the dimensions along which they vary, and their consequences for party systems and representation.',
    keyPoints: [
      'An electoral system is the set of rules for how votes are cast and converted into offices.',
      'Majoritarian systems use single-member districts: SMP (first-past-the-post), Alternative Vote and two-round systems.',
      'PR uses multi-member districts: list systems (closed or open) and STV.',
      'Mixed systems combine a district vote and a list vote, either unlinked (Japan) or linked (Germany).',
      'Three key dimensions: district magnitude, intra-party choice, legal thresholds.',
      "Duverger: SMP tends towards two parties and PR towards multiparty systems, through mechanical and psychological effects.",
      'Pitkin: descriptive representation ("standing for") vs substantive representation ("acting for").',
    ],
    sections: [
      {
        heading: 'Why elections matter',
        paragraphs: [
          'Elections are almost universal, even in non-democracies. In liberal democracies they are the central link between people and representatives and the start of Strom\'s chain of delegation. Citizens use them to select representatives and governments (prospective voting), punish incumbents (retrospective voting), influence policy, and vote for change or the status quo.',
          'Representatives can be seen as delegates, who follow the views of their constituents, or as trustees, who use their own judgement and govern for all.',
        ],
      },
      {
        heading: 'Majoritarian systems',
        paragraphs: [
          'Single-member plurality (SMP, first-past-the-post): each district elects one representative; each voter has one vote; the candidate with the most votes (a plurality, not necessarily a majority) wins. The UK elects 650 MPs in 650 constituencies, and the system spread with British influence. Pros: very simple, a clear link between an MP and a constituency, and usually single-party majority governments. Cons: it encourages strategic voting, favours large parties, produces disproportional results (it can turn a minority of votes into a majority of seats, as in the UK in 2019 and 2024) and may let local interests dominate.',
          'Alternative Vote (AV, preferential voting) repairs SMP\'s strategic-voting problem: voters rank the candidates, and preferences are transferred until a candidate has a majority. It is used almost only in Australia. Pros: voters can reveal their true preferences, and parties must appeal beyond their base. Cons: not a "genuine" majority, complicated and costly.',
          'Two-round systems (2RS): if no candidate wins a majority in round one, a second round is held between the top two or all candidates above a threshold. Used in more than 20 countries, including France, and widely for presidents. Pros: more choice, voters can change their minds, less strategic voting, and finalists must reach out to other groups (in France in 2002, Chirac beat Le Pen 82.2% to 17.8% in the runoff). Cons: very costly and bad for minority representation.',
        ],
      },
      {
        heading: 'Proportional and mixed systems',
        paragraphs: [
          'PR aims to give each group its fair share: X% of votes should mean X% of seats. Pros: better minority representation, more influential opposition parties, fairer outcomes for small parties and higher turnout. Cons: harder to hold politicians accountable, coalition governments with long formation periods, and disproportionate power for small pivotal parties.',
          'Almost all PR systems use party lists. Parties win seats in proportion to their votes within each constituency; sometimes the whole country is one constituency (the Netherlands, Israel, Slovakia). Lists can be closed (the party fixes the order of candidates) or open (voters influence the order: a little in Norway, a lot in Finland).',
          'Single transferable vote (STV) applies the logic of AV to multi-member districts: voters rank as many candidates as they like, and candidates need a quota of votes to be elected. It does not presuppose parties and personalises politics; it is used for national elections in only a few countries (for example Ireland).',
          'Mixed systems give voters two votes: one for a district MP and one for a party list, so split-ticket voting is possible. The votes can be unlinked (Japan) or linked (Germany). In the linked system, the list vote determines each party\'s share of seats, and district winners fill those seats first; if they do not add up, extra seats are added to keep proportions intact.',
        ],
      },
      {
        heading: 'Three dimensions of variation',
        paragraphs: [
          'District magnitude (DM) is the number of seats per district. DM = 1 means single-member (majoritarian) districts. The higher the DM, the fewer votes needed per seat and the more proportional the result. Examples: the Netherlands has one district of 150 seats, Portugal 22 districts for 230 seats, North Macedonia 6 districts for 120 seats. DM can also vary within a country (in Belgium it averages about 15.8 in Flanders and 9.8 in Wallonia).',
          'Intra-party choice: none for voters in majoritarian systems or closed lists (so the party "selectorate" is powerful); real choice with open lists and STV.',
          'Legal thresholds: a minimum vote share before a party gets any seats. High thresholds mean more disproportional results, fewer parties and easier government formation. In the Netherlands the threshold is about 0.67%, the vote share for one seat out of 150; Bulgaria uses 4% and Turkey 7%. Had the Netherlands used a 3% threshold in 2023, seven fewer parties would have entered parliament and 18 seats would have gone to larger parties.',
        ],
      },
      {
        heading: 'Consequences: Duverger and Pitkin',
        paragraphs: [
          "Duverger's laws: majoritarian (SMP) systems tend to produce two-party systems; PR tends to produce multiparty systems. Mechanically, SMP turns votes into seats in a way that punishes small parties. Psychologically, parties merge under SMP and split under PR (supply side), and voters vote strategically under SMP and sincerely under PR (demand side). The effect holds only if parties are nationalised: regionally concentrated parties can still win many seats under SMP.",
          'Hanna Pitkin (1967) distinguished descriptive representation (the MP "stands for" voters by resembling them, e.g. in gender or ethnicity) from substantive representation (the MP "acts for" voters in policy-making).',
          "Substantive representation can be measured with Gallagher's disproportionality index (how distorted is the translation of votes into seats?), vote-seat equality across voters (rural voters are often over-represented, e.g. in the US Senate), and ideological congruence (how close representatives are to voters on a left-right scale; higher congruence means more substantive representation).",
          'Electoral systems are the cogs that keep the wheels of democracy turning (Farrell). They must balance often contradictory goals (legitimacy, reflecting voters\' wishes, strong and stable government, qualified representatives) and shape government type, the party system, turnout, the representation of women and other groups, and MPs\' behaviour.',
        ],
      },
    ],
    keyTerms: [
      { term: 'Electoral system', definition: 'The rules for how votes are cast and converted into the allocation of offices.' },
      { term: 'Single-member plurality (SMP)', definition: 'One seat per district; the candidate with the most votes wins (first-past-the-post).' },
      { term: 'Alternative Vote (AV)', definition: 'Voters rank candidates in a single-member district; preferences transfer until someone has a majority.' },
      { term: 'Two-round system (2RS)', definition: 'A runoff is held if no candidate wins a majority in the first round.' },
      { term: 'List PR', definition: 'Parties present candidate lists and win seats in proportion to their votes.' },
      { term: 'Closed / open list', definition: 'Closed: party fixes candidate order. Open: voters influence which candidates win.' },
      { term: 'Single transferable vote (STV)', definition: 'Ranked voting in multi-member districts; candidates need a quota.' },
      { term: 'Mixed system', definition: 'Combines a district vote (majoritarian) and a list vote (PR); linked or unlinked.' },
      { term: 'District magnitude', definition: 'The number of seats in a district; higher DM means more proportional results.' },
      { term: 'Legal threshold', definition: 'Minimum vote share a party needs to win any seats.' },
      { term: "Duverger's law", definition: 'SMP tends to produce two-party systems; PR tends to produce multiparty systems.' },
      { term: 'Mechanical effect', definition: 'How the seat-allocation rules themselves under-reward small parties.' },
      { term: 'Psychological effect', definition: 'Voters and parties anticipate the mechanical effect (strategic voting, party mergers).' },
      { term: 'Descriptive representation', definition: 'Representatives resemble those they represent ("standing for").' },
      { term: 'Substantive representation', definition: 'Representatives act in the interests of those they represent ("acting for").' },
      { term: 'Gallagher index', definition: 'Measures how disproportional the translation of votes into seats is.' },
      { term: 'Delegate vs trustee', definition: 'Delegates follow constituents\' views; trustees use their own judgement.' },
    ],
    readings: ['Pitkin, H. (1967). The Concept of Representation. University of California Press.', 'Caramani, Comparative Politics (course textbook).'],
  },

  basics: {
    id: 'w4-basics',
    title: 'Electoral systems',
    description: 'Week 4 · How votes become seats',
    lessons: [
      {
        id: 'w4-b1',
        title: 'Majoritarian systems',
        topicId: 'w4-electoral-systems',
        exercises: [
          {
            id: 'w4b1-01',
            type: 'choice',
            prompt: 'How does single-member plurality (first-past-the-post) work?',
            options: [
              'One seat per district; the candidate with the most votes wins',
              'One seat per district; the winner needs over 50% of the votes',
              'Several seats per district, shared in proportion to the votes',
              'One seat per district; voters rank the candidates in order',
            ],
            answer: 0,
          },
          {
            id: 'w4b1-02',
            type: 'fill',
            text: 'The UK House of Commons has 650 MPs elected in ___ constituencies.',
            options: ['650', '1', '12', '150'],
            answer: '650',
          },
          {
            id: 'w4b1-03',
            type: 'truefalse',
            statement: 'Single-member plurality encourages strategic voting.',
            answer: true,
            explanation: 'Voters may abandon their favourite to avoid "wasting" their vote.',
          },
          {
            id: 'w4b1-04',
            type: 'choice',
            prompt: 'What do voters do under the Alternative Vote?',
            options: [
              'Rank the candidates in order of preference',
              'Vote twice, in two rounds',
              'Vote for a party list',
              'Cast one vote for a district and one for a list',
            ],
            answer: 0,
          },
          {
            id: 'w4b1-05',
            type: 'choice',
            prompt: 'When does a second round take place in a two-round system?',
            options: [
              'When no candidate wins a majority in the first round',
              'Always, between the two strongest candidates',
              'When turnout in the first round is below 50%',
              'When the winner has less than 10 points of lead',
            ],
            answer: 0,
          },
          {
            id: 'w4b1-06',
            type: 'match',
            prompt: 'Match the electoral system to where it is used',
            pairs: [
              ['SMP', 'UK House of Commons'],
              ['Alternative Vote', 'Australia'],
              ['Two-round system', 'French presidency'],
              ['Nationwide list PR', 'Netherlands'],
            ],
          },
          {
            id: 'w4b1-07',
            type: 'choice',
            prompt: 'What is a disadvantage of two-round systems?',
            options: [
              'They are very costly and bad for minority representation',
              'They force voters to vote strategically in round one',
              'They always produce coalition governments',
              'They require party lists',
            ],
            answer: 0,
          },
        ],
      },
      {
        id: 'w4-b2',
        title: 'Proportional and mixed systems',
        topicId: 'w4-electoral-systems',
        exercises: [
          {
            id: 'w4b2-01',
            type: 'choice',
            prompt: 'What is the goal of proportional representation?',
            options: [
              'X% of the votes should give X% of the seats',
              'One MP per district',
              'A clear majority for the largest party',
              'Equal seats for every party',
            ],
            answer: 0,
          },
          {
            id: 'w4b2-02',
            type: 'choice',
            prompt: 'What is district magnitude?',
            options: [
              'The number of seats per district',
              'The number of voters per district',
              'The geographical size of a district',
              'The number of candidates per list',
            ],
            answer: 0,
          },
          {
            id: 'w4b2-03',
            type: 'truefalse',
            statement: 'The higher the district magnitude, the more proportional the system.',
            answer: true,
          },
          {
            id: 'w4b2-04',
            type: 'fill',
            text: 'The Dutch effective threshold is about 0.67% because the Tweede Kamer has ___ seats.',
            options: ['150', '100', '75', '650'],
            answer: '150',
          },
          {
            id: 'w4b2-05',
            type: 'choice',
            prompt: 'What is the difference between open and closed lists?',
            options: [
              "With open lists, voters influence which of a party's candidates win",
              'With closed lists, independent candidates can also be elected',
              'With open lists, voters can vote for several parties at once',
              'With closed lists, voters rank the parties in order of preference',
            ],
            answer: 0,
          },
          {
            id: 'w4b2-06',
            type: 'choice',
            prompt: 'How does the single transferable vote (STV) work?',
            options: [
              'Voters rank candidates in multi-member districts; winners need a quota',
              'Voters rank candidates in single-member districts; the winner needs 50%',
              'Voters pick one party list; leftover votes transfer to the next party',
              'Voters have two votes: one for a candidate and one for a party list',
            ],
            answer: 0,
          },
          {
            id: 'w4b2-07',
            type: 'choice',
            prompt: "How does Germany's linked mixed system allocate seats?",
            options: [
              'List votes set each party\'s seat share; district winners fill those seats first',
              'District seats and list seats are counted completely separately',
              'District votes set each party\'s seat share; list votes break ties',
              'Only list votes count; district votes are advisory for the parties',
            ],
            answer: 0,
            explanation:
              "If a party wins more districts than its share allows, extra seats are added to keep proportions intact. Japan's system is unlinked: the two parts are counted separately.",
          },
        ],
      },
      {
        id: 'w4-b3',
        title: 'Duverger and Pitkin',
        topicId: 'w4-electoral-systems',
        exercises: [
          {
            id: 'w4b3-01',
            type: 'choice',
            prompt: "What does Duverger's law state?",
            options: [
              'SMP tends to produce two parties; PR tends to produce many',
              'PR tends to produce two parties; SMP tends to produce many',
              'All electoral systems end up with two large parties',
              'Party systems shape electoral systems, not the reverse',
            ],
            answer: 0,
          },
          {
            id: 'w4b3-02',
            type: 'match',
            prompt: "Match the effect to its meaning",
            pairs: [
              ['Mechanical effect', 'Rules under-reward small parties'],
              ['Psychological (voters)', 'Strategic voting'],
              ['Psychological (parties)', 'Merging or splitting'],
            ],
          },
          {
            id: 'w4b3-03',
            type: 'choice',
            prompt: "Duverger's prediction for SMP holds only if parties are...",
            options: ['Nationalised', 'Regional', 'Very small', 'Funded by the state'],
            answer: 0,
            explanation: 'Regionally concentrated parties can survive and win seats under SMP.',
          },
          {
            id: 'w4b3-04',
            type: 'match',
            prompt: "Match Pitkin's concepts",
            pairs: [
              ['Descriptive representation', 'Standing for: resemblance'],
              ['Substantive representation', 'Acting for: policy'],
            ],
          },
          {
            id: 'w4b3-05',
            type: 'choice',
            prompt: "What does Gallagher's index measure?",
            options: [
              'How disproportional the translation of votes into seats is',
              'How many voters turned out compared with the last election',
              'How many parties effectively compete in the system',
              'How far apart the parties are on the left-right scale',
            ],
            answer: 0,
          },
          {
            id: 'w4b3-06',
            type: 'choice',
            prompt: 'How does a trustee differ from a delegate?',
            options: [
              'A trustee uses their own judgement and governs for all',
              'A trustee follows constituents\' instructions exactly',
              'A trustee is appointed, not elected',
              'There is no difference',
            ],
            answer: 0,
          },
          {
            id: 'w4b3-07',
            type: 'truefalse',
            statement: 'Rural voters are often over-represented relative to urban voters, as in the US Senate.',
            answer: true,
          },
        ],
      },
    ],
  },

  advanced: {
    id: 'w4-advanced',
    title: 'Electoral systems: analysis',
    description: 'Week 4 · Translate votes into seats, choose a system',
    lessons: [
      {
        id: 'w4-a1',
        title: 'From votes to seats',
        topicId: 'w4-electoral-systems',
        exercises: [
          {
            id: 'w4a1-01',
            type: 'choice',
            prompt: 'In an SMP district, candidate A gets 40%, B 35% and C 25%. What happens?',
            options: [
              'A wins the seat, though 60% voted for someone else',
              'A runoff is held between A and B two weeks later',
              "C drops out and C's votes are transferred to A or B",
              'No one wins, because nobody has an absolute majority',
            ],
            answer: 0,
          },
          {
            id: 'w4a1-02',
            type: 'choice',
            prompt: 'Same votes (A 40%, B 35%, C 25%) under a top-two runoff system. What happens?',
            options: [
              "A runoff between A and B, in which C's voters can tip the result",
              'A wins outright, because A has the most votes in round one',
              "A runoff between B and C, because A's lead is too large to contest",
              'All three candidates go to a second round to find a majority',
            ],
            answer: 0,
          },
          {
            id: 'w4a1-03',
            type: 'choice',
            prompt: 'Under pure list PR in a 10-seat district, how many seats would a party with 40% of the vote get?',
            options: ['About 4', '10', '0', 'About 6'],
            answer: 0,
          },
          {
            id: 'w4a1-04',
            type: 'choice',
            prompt: 'What would a 3% threshold have done in the 2023 Dutch election, according to the lecture?',
            options: [
              'Seven fewer parties, with 18 seats going to larger parties',
              'Two fewer parties, with 3 seats going to larger parties',
              'No change, because all parties already passed 3%',
              'A single-party majority for the largest party',
            ],
            answer: 0,
          },
          {
            id: 'w4a1-05',
            type: 'choice',
            prompt: 'A party wins about a third of the vote but a large majority of seats. What is this an example of?',
            options: [
              'SMP turning a minority of votes into a majority of seats',
              'PR rewarding the largest party with bonus seats',
              'A minority government supported by other parties',
              'Strategic voters deliberately over-electing one party',
            ],
            answer: 0,
            explanation: 'The lecture uses the UK elections of 2019 and 2024.',
          },
          {
            id: 'w4a1-06',
            type: 'choice',
            prompt: 'Why can a regional party win many seats under SMP despite Duverger\'s law?',
            options: [
              'Its votes are concentrated, so it wins pluralities in its region',
              'SMP gives regional parties a set number of bonus seats',
              'Regional parties are exempt from the national threshold',
              'Voters in other regions vote for it strategically',
            ],
            answer: 0,
          },
        ],
      },
      {
        id: 'w4-a2',
        title: 'Choosing a system',
        topicId: 'w4-electoral-systems',
        exercises: [
          {
            id: 'w4a2-01',
            type: 'choice',
            prompt:
              'A reformer values a clear link between each MP and a constituency, and stable single-party government. Which system fits?',
            options: ['Single-member plurality', 'Nationwide list PR', 'STV', 'Closed-list PR with a low threshold'],
            answer: 0,
          },
          {
            id: 'w4a2-02',
            type: 'choice',
            prompt: 'A reformer values minority representation and a fair translation of votes into seats. Which design fits?',
            options: [
              'List PR with high district magnitude and a low threshold',
              'Single-member plurality with small constituencies',
              'A two-round system with a runoff between the top two',
              'List PR with small districts and a 10% threshold',
            ],
            answer: 0,
          },
          {
            id: 'w4a2-03',
            type: 'choice',
            prompt: 'A country wants to keep PR but give voters a say over individual candidates. What could it adopt?',
            options: ['Open lists or STV', 'Closed lists', 'SMP', 'A higher threshold'],
            answer: 0,
          },
          {
            id: 'w4a2-04',
            type: 'truefalse',
            statement: 'Under the Alternative Vote, the winner always had a majority of first preferences.',
            answer: false,
            explanation: 'The majority is reached only after transfers, which is why critics say it is not a "genuine" majority.',
          },
          {
            id: 'w4a2-05',
            type: 'choice',
            prompt: 'What does high ideological congruence between voters and representatives indicate?',
            options: [
              'High substantive representation',
              'High descriptive representation',
              'A disproportional system',
              'Low turnout',
            ],
            answer: 0,
          },
          {
            id: 'w4a2-06',
            type: 'choice',
            prompt: 'In 2002 Chirac beat Le Pen 82.2% to 17.8% in the French runoff. Which feature of two-round systems does this show?',
            options: [
              'Voters of eliminated candidates can rally behind a finalist',
              'Two-round systems produce proportional results in the end',
              'The first-round leader always wins the second round easily',
              'Small parties usually win the second round in France',
            ],
            answer: 0,
          },
        ],
      },
    ],
  },
};
