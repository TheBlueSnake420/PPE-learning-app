import type { WeekContent } from '../../types';

// Week 8 - Beyond the State: The European Union (not lectured yet)
// Sources: revision notes by last year's students (their "week 7"), incl. their
// diagrams of the EU chain of delegation and the trilogue triangle.

export const w8: WeekContent = {
  fromNotes: true,
  topic: {
    id: 'w8-european-union',
    week: 8,
    title: 'Beyond the State: The European Union',
    summary:
      'How the EU grew from coal and steel to Lisbon, who does what in Brussels, how laws and votes work, why EU elections are "second-order", and which theories explain integration.',
    keyPoints: [
      'From the ECSC (1951) via Rome (1957), the Single European Act (1986) and Maastricht (1992) to Lisbon (in force 2009).',
      'Three logics: technocratic (Commission, Court), diplomatic (European Council, Council) and representative (European Parliament).',
      'The Commission proposes; the Parliament and the Council amend and adopt, often agreed informally in trilogues.',
      'Qualified majority: at least 55% of member states representing at least 65% of the EU population; blocking needs at least four states.',
      'European Parliament elections are second-order: lower turnout, governing and large parties lose.',
      'Integration theories: intergovernmentalism, neofunctionalism (spillover) and supranationalism. Critics point to a democratic deficit.',
    ],
    sections: [
      {
        heading: 'From coal and steel to Lisbon',
        paragraphs: [
          '1951: the European Coal and Steel Community (ECSC). Belgium, France, (West) Germany, Italy, Luxembourg and the Netherlands placed their coal and steel industries under a supranational High Authority, with a Council of Ministers as a check. This followed the Monnet method: start with limited, technical sectors and expand integration step by step.',
          '1957: the Treaties of Rome created the European Economic Community (EEC): a common market with a customs union and a common external tariff. 1962: the Common Agricultural Policy, the first big supranational spending programme. 1986: the Single European Act, which amended the treaties to complete the single market and formalised European political cooperation.',
          '1992: the Treaty of Maastricht created the European Union with three pillars (the European Communities; a Common Foreign and Security Policy; cooperation in Justice and Home Affairs) and the path to Economic and Monetary Union and the euro. 2009: the Treaty of Lisbon came into force, extending the Parliament\'s legislative powers and giving the EU full legal personality.',
          'The EU\'s purpose, as the notes put it, is to represent the interests of member states, citizens and the Union itself in decision-making, so that decisions are taken consensually with the support of all interested parties.',
        ],
      },
      {
        heading: 'Who does what',
        paragraphs: [
          'European Commission: represents the interests of the EU as a whole; holds the right of initiative (proposes legislation but does not pass it), monitors implementation and represents the EU externally. Court of Justice: interprets and enforces EU law. These follow a technocratic logic of efficiency.',
          'European Council: the heads of state or government; gives political leadership, sets the agenda, decides in crises, nominates the Commission President and revises the treaties. Council of the EU (Council of Ministers): national ministers by policy area; co-legislates with the Parliament, coordinates policy and concludes international agreements. These follow a diplomatic logic of member-state control and are the intergovernmental institutions.',
          'European Parliament: represents citizens and is directly elected; amends and passes (but does not initiate) legislation in most areas and approves the budget, the Commission, new member states and international treaties. It follows a representative logic of democratic legitimacy. Together with the Commission and the Court it is usually counted among the supranational institutions.',
        ],
      },
      {
        heading: 'The EU chain of delegation',
        paragraphs: [
          'Voters delegate along two routes. One runs through European Parliament elections (and EU-level parties) to the Parliament, which approves the Commission. The other runs through national parliaments and governments to the European Council and the Council, which nominate the Commission and co-legislate. Commissioners are not directly elected: their legitimacy comes indirectly from national elections and from the Parliament\'s approval.',
        ],
      },
      {
        heading: 'Making laws and voting',
        paragraphs: [
          'Legislation starts with a Commission proposal; the Parliament and the Council each amend and approve it. Much is settled in trilogues: informal three-way negotiations between the Commission, the Council and the Parliament, so that decisions are largely made before the official votes.',
          'In the Council, decisions are taken by unanimity (all must agree) or by qualified majority voting (QMV): at least 55% of member states (in an EU of 27, at least 15) representing at least 65% of the EU population. A blocking minority must include at least four member states. Without that rule, a few large states could block alone: Germany, France and one more state would already exceed 35% of the population.',
        ],
      },
      {
        heading: 'Elections, parties and lobbying',
        paragraphs: [
          'European Parliament elections are second-order elections (Reif & Schmitt 1980): voters see less at stake, so turnout is much lower than in national elections (the notes mention 20-30 points), large and governing parties tend to lose and opposition and smaller parties gain, as voters vote sincerely or to punish national governments.',
          'European political parties and the Parliament\'s political groups structure choices and aggregate interests only to some extent; they do not recruit candidates (national parties do that) and do not form a government, and their link between state and society is very limited.',
          'Lobbying is intense (the notes cite some 11,000 groups and 30,000 lobbyists). The EU\'s multilevel structure shapes it: inside lobbying (talking directly to policy-makers) dominates over outside lobbying, expertise counts for more than money because campaign finance matters less, and most protests (about 95% of EU-related ones in the notes) target domestic issues.',
        ],
      },
      {
        heading: 'Why integrate? Three theories',
        paragraphs: [
          'Intergovernmentalism: integration is driven by member states, which have good collective reasons to hand power to the EU. Critique: how does it explain the European Parliament gaining power at the member states\' expense?',
          'Neofunctionalism: integration in one sector creates pressure for integration in others to reach the original goal ("spillover"), driven by social, political and economic forces beyond the states. Critique: are these forces strong enough to force states to integrate?',
          'Supranationalism: EU institutions and non-state actors such as interest groups have good reasons to want, and push for, more integration. Critique: why has integration repeatedly stalled or reversed, as with Brexit?',
          'Democratic deficit: the idea that EU institutions are less democratically accountable than national ones, because the Commission is appointed rather than elected and Council decision-making is not very transparent.',
        ],
      },
    ],
    keyTerms: [
      { term: 'ECSC', definition: 'European Coal and Steel Community (1951): six states pooling coal and steel under a supranational authority.' },
      { term: 'Monnet method', definition: 'Integrating step by step, starting with limited technical sectors.' },
      { term: 'Supranational vs intergovernmental', definition: 'EU-level bodies acting for the Union (Commission, Court) versus bodies of member states (Councils).' },
      { term: 'European Council', definition: 'Heads of state or government; sets political direction and nominates the Commission President.' },
      { term: 'Council of the EU', definition: 'National ministers by policy area; co-legislates with the European Parliament.' },
      { term: 'Right of initiative', definition: "The Commission's (near-)exclusive power to propose EU legislation." },
      { term: 'Trilogue', definition: 'Informal negotiation between Commission, Council and Parliament to agree legislation.' },
      { term: 'Qualified majority voting (QMV)', definition: 'At least 55% of member states representing at least 65% of the population; blocking needs four states.' },
      { term: 'Second-order election', definition: 'An election seen as less important: low turnout, losses for governing and large parties.' },
      { term: 'Spillover', definition: 'Integration in one area creating pressure to integrate in others (neofunctionalism).' },
      { term: 'Democratic deficit', definition: 'The claim that EU decision-making is less democratically accountable than national politics.' },
    ],
    readings: ['Reif, K. & Schmitt, H. (1980). Nine Second-Order National Elections. European Journal of Political Research 8(1).'],
  },

  basics: {
    id: 'w8-basics',
    title: 'The European Union',
    description: 'Week 8 · Treaties, institutions, votes',
    lessons: [
      {
        id: 'w8-b1',
        title: 'Building Europe',
        topicId: 'w8-european-union',
        exercises: [
          {
            id: 'w8b1-01',
            type: 'order',
            prompt: 'Put these steps of European integration in order',
            items: [
              'European Coal and Steel Community',
              'Treaties of Rome (EEC)',
              'Single European Act',
              'Treaty of Maastricht',
              'Treaty of Lisbon',
            ],
            explanation: '1951, 1957, 1986, 1992, 2009 (in force).',
          },
          {
            id: 'w8b1-02',
            type: 'choice',
            prompt: 'What is the Monnet method?',
            options: [
              'Integrating step by step, starting with limited technical sectors',
              'Creating a full federal state in a single treaty',
              'Letting each member state decide which EU laws to apply',
              'Integrating only through majority votes of the citizens',
            ],
            answer: 0,
          },
          {
            id: 'w8b1-03',
            type: 'multi',
            prompt: 'Which of these were founding members of the ECSC?',
            options: ['France', 'The Netherlands', 'Italy', 'Belgium', 'The United Kingdom', 'Spain'],
            answers: [0, 1, 2, 3],
            explanation: 'The six founders were Belgium, France, (West) Germany, Italy, Luxembourg and the Netherlands.',
          },
          {
            id: 'w8b1-04',
            type: 'choice',
            prompt: 'What did the European Economic Community (1957) create?',
            options: [
              'A common market with a customs union and common external tariff',
              'A single currency managed by a European central bank',
              'A common foreign and defence policy with a joint army',
              'A directly elected European government',
            ],
            answer: 0,
          },
          {
            id: 'w8b1-05',
            type: 'choice',
            prompt: 'What did the Treaty of Maastricht (1992) introduce?',
            options: [
              'The European Union with three pillars and the path to the euro',
              'The European Coal and Steel Community',
              'Full legal personality and more powers for Parliament',
              'The Common Agricultural Policy',
            ],
            answer: 0,
          },
          {
            id: 'w8b1-06',
            type: 'truefalse',
            statement: 'The Treaty of Lisbon gave the EU full legal personality.',
            answer: true,
          },
          {
            id: 'w8b1-07',
            type: 'choice',
            prompt: 'What was the Common Agricultural Policy (1962)?',
            options: [
              'The first big supranational spending programme',
              'A ban on agricultural imports from outside Europe',
              'A national subsidy scheme run by each member state',
              'A treaty creating the single market for services',
            ],
            answer: 0,
          },
        ],
      },
      {
        id: 'w8-b2',
        title: 'Who does what?',
        topicId: 'w8-european-union',
        exercises: [
          {
            id: 'w8b2-01',
            type: 'match',
            prompt: 'Match the institution to its role',
            pairs: [
              ['European Commission', 'Proposes legislation'],
              ['European Parliament', 'Represents citizens'],
              ['Council of the EU', 'Ministers co-legislate'],
              ['European Council', 'Leaders set direction'],
            ],
          },
          {
            id: 'w8b2-02',
            type: 'choice',
            prompt: 'Which institution has the right of initiative?',
            options: ['The European Commission', 'The European Parliament', 'The Council of the EU', 'The Court of Justice'],
            answer: 0,
          },
          {
            id: 'w8b2-03',
            type: 'truefalse',
            statement: 'The European Parliament can initiate legislation on its own.',
            answer: false,
            explanation: 'It amends and passes legislation, but proposals come from the Commission.',
          },
          {
            id: 'w8b2-04',
            type: 'match',
            prompt: 'Match the logic to the institutions',
            pairs: [
              ['Technocratic', 'Commission and Court'],
              ['Diplomatic', 'Council and European Council'],
              ['Representative', 'European Parliament'],
            ],
          },
          {
            id: 'w8b2-05',
            type: 'choice',
            prompt: 'Where does the legitimacy of the Commissioners come from?',
            options: [
              "Indirectly, via national governments and the Parliament's approval",
              'Directly, from their own Europe-wide elections every five years',
              'From the Court of Justice, which appoints and supervises them',
              'From national referendums held in each of the member states',
            ],
            answer: 0,
          },
          {
            id: 'w8b2-06',
            type: 'choice',
            prompt: 'What is a trilogue?',
            options: [
              'Informal negotiation between Commission, Council and Parliament',
              'A treaty that is signed by three member states at the same time',
              'A vote in the Council that requires three-quarters of the states',
              'A summit of the three largest member states before each Council',
            ],
            answer: 0,
          },
          {
            id: 'w8b2-07',
            type: 'choice',
            prompt: 'Which are the intergovernmental institutions?',
            options: [
              'The European Council and the Council of the EU',
              'The Commission and the Court of Justice',
              'The European Parliament and the Commission',
              'The Court of Justice and the European Parliament',
            ],
            answer: 0,
          },
        ],
      },
      {
        id: 'w8-b3',
        title: 'Votes, parties and theories',
        topicId: 'w8-european-union',
        exercises: [
          {
            id: 'w8b3-01',
            type: 'choice',
            prompt: 'What does a qualified majority in the Council require?',
            options: [
              'At least 55% of member states representing at least 65% of the population',
              'At least two-thirds of member states, regardless of population',
              'A simple majority of states and of the European Parliament',
              'All member states except at most one',
            ],
            answer: 0,
          },
          {
            id: 'w8b3-02',
            type: 'fill',
            text: 'A blocking minority under QMV must include at least ___ member states.',
            options: ['four', 'two', 'ten', 'fourteen'],
            answer: 'four',
          },
          {
            id: 'w8b3-03',
            type: 'multi',
            prompt: 'Which are typical features of second-order elections?',
            options: [
              'Lower turnout than national elections',
              'Governing parties tend to lose',
              'Opposition and smaller parties tend to gain',
              'Higher turnout than national elections',
              'Large parties tend to gain',
            ],
            answers: [0, 1, 2],
          },
          {
            id: 'w8b3-04',
            type: 'match',
            prompt: 'Match the theory to its driver of integration',
            pairs: [
              ['Intergovernmentalism', 'Member states'],
              ['Neofunctionalism', 'Spillover between sectors'],
              ['Supranationalism', 'EU bodies and non-state actors'],
            ],
          },
          {
            id: 'w8b3-05',
            type: 'choice',
            prompt: 'Which party function do European political parties NOT perform?',
            options: [
              'Recruiting candidates for election',
              'Structuring political choice to some extent',
              'Aggregating interests to some extent',
              'Grouping like-minded national parties',
            ],
            answer: 0,
            explanation: 'National parties recruit the candidates; European parties also do not form governments.',
          },
          {
            id: 'w8b3-06',
            type: 'choice',
            prompt: 'What is the "democratic deficit"?',
            options: [
              'EU decisions are less democratically accountable than national ones',
              'The EU budget is in deficit because voters reject new taxes',
              'Too few member states are democracies',
              'The European Parliament has more power than national parliaments',
            ],
            answer: 0,
          },
          {
            id: 'w8b3-07',
            type: 'choice',
            prompt: 'What characterises lobbying at the EU level?',
            options: [
              'Inside lobbying dominates, and expertise counts for more than money',
              'Mass protests in Brussels are the main form of influence',
              'Campaign donations to MEPs are the key currency',
              'Lobbying is banned, so groups work only nationally',
            ],
            answer: 0,
          },
        ],
      },
    ],
  },

  advanced: {
    id: 'w8-advanced',
    title: 'The EU: analysis',
    description: 'Week 8 · QMV maths, integration theories, legitimacy',
    lessons: [
      {
        id: 'w8-a1',
        title: 'Applying the rules',
        topicId: 'w8-european-union',
        exercises: [
          {
            id: 'w8a1-01',
            type: 'choice',
            prompt: 'In an EU of 27, 16 member states support a proposal, but together they hold only 60% of the EU population. Does it pass by QMV?',
            options: [
              'No: enough states, but below the 65% population threshold',
              'Yes: more than 55% of the states support it',
              'Yes: a majority of the population supports it',
              'No: QMV always requires unanimity',
            ],
            answer: 0,
          },
          {
            id: 'w8a1-02',
            type: 'choice',
            prompt: 'Germany, France and Italy hold about 47% of the EU population. Can these three block a QMV decision on their own?',
            options: [
              'No: a blocking minority needs at least four states',
              'Yes: together they hold more than 35% of the population',
              'Yes: any three large states can always block',
              'No: QMV decisions can never be blocked',
            ],
            answer: 0,
            explanation: 'The four-state rule stops the largest states from blocking alone, even though they exceed 35% of the population.',
          },
          {
            id: 'w8a1-03',
            type: 'choice',
            prompt: 'A single currency creates pressure for common banking supervision. Which theory predicts this?',
            options: ['Neofunctionalism (spillover)', 'Intergovernmentalism', 'Supranationalism', 'Second-order election theory'],
            answer: 0,
          },
          {
            id: 'w8a1-04',
            type: 'choice',
            prompt: 'What is the main critique of intergovernmentalism?',
            options: [
              'It cannot explain why the European Parliament gained power at the states\' expense',
              'It cannot explain why integration ever stalls or reverses',
              'It assumes social forces are strong enough to force states to integrate',
              'It ignores the role of national governments',
            ],
            answer: 0,
          },
          {
            id: 'w8a1-05',
            type: 'choice',
            prompt: 'Which event best challenges supranationalism?',
            options: [
              'Brexit: integration can stall or reverse',
              'The creation of the euro and the European Central Bank',
              'The Single European Act and the single market',
              'The rapid growth of EU lobbying in Brussels',
            ],
            answer: 0,
          },
          {
            id: 'w8a1-06',
            type: 'choice',
            prompt: 'Why do governing parties tend to lose European Parliament elections?',
            options: [
              'Voters see less at stake, so they vote sincerely or punish national governments',
              'Governing parties are not allowed to run in European elections',
              'European elections use majoritarian rules that favour the opposition',
              'Voters know far more about EU issues than about national ones',
            ],
            answer: 0,
          },
        ],
      },
      {
        id: 'w8-a2',
        title: 'Think it through',
        topicId: 'w8-european-union',
        exercises: [
          {
            id: 'w8a2-01',
            type: 'open',
            prompt: 'Does the EU suffer from a democratic deficit? Argue both sides.',
            modelAnswer:
              'Yes: the Commission, which holds the right of initiative, is appointed rather than elected; Council deliberations are not very transparent and much is agreed informally in trilogues; European Parliament elections are second-order, with low turnout and campaigns about national issues; and European parties are weak links between citizens and decisions. No (or less than claimed): legitimacy runs through two channels, since national governments in the Council are accountable to national parliaments and the directly elected Parliament co-legislates in most areas and approves the Commission and budget, with powers that grew under Lisbon; and delegating some tasks to technocratic bodies can be legitimate. A good answer weighs these and reaches a reasoned verdict.',
            keyPoints: [
              'Appointed Commission with the right of initiative',
              'Limited transparency: Council, trilogues',
              'Second-order European elections and weak EU parties',
              'Counter: dual legitimacy via national governments and a directly elected Parliament',
              'Counter: Parliament\'s powers grew (Lisbon); a reasoned verdict',
            ],
          },
          {
            id: 'w8a2-02',
            type: 'open',
            prompt: 'Which theory best explains European integration from the ECSC to Lisbon?',
            modelAnswer:
              'Neofunctionalism explains the sequence well: coal and steel spilled over into a common market, then a single market, then monetary union, as each step created pressure for the next. Intergovernmentalism fits the big treaty moments, which were bargains between member states requiring unanimity, but struggles to explain why states let the Parliament gain power. Supranationalism captures the active role of the Commission, the Court and organised interests, but cannot explain stalls and reversals such as Brexit. A strong answer combines them: spillover and supranational actors push, member states decide.',
            keyPoints: [
              'Neofunctionalism: spillover from coal and steel to market and money',
              'Intergovernmentalism: treaties as bargains between states',
              'Supranationalism: Commission, Court and lobbies push integration',
              "Each theory's weakness (Parliament's power; Brexit; strength of spillover)",
              'A combined or reasoned conclusion',
            ],
          },
          {
            id: 'w8a2-03',
            type: 'multi',
            prompt: 'Which features make the EU unlike a national parliamentary democracy?',
            options: [
              'The executive (Commission) is not formed from a parliamentary majority',
              'Two co-legislators, one representing citizens and one the member states',
              'Votes in the Council weigh states and population',
              'European parties do not form a government',
              'It has a directly elected parliament',
              'It has a court that interprets the law',
            ],
            answers: [0, 1, 2, 3],
            explanation: 'National democracies also have elected parliaments and courts.',
          },
          {
            id: 'w8a2-04',
            type: 'choice',
            prompt: "Why is the EU's chain of delegation more complex than Strøm's parliamentary chain?",
            options: [
              'Voters delegate along two routes, via the Parliament and via national governments',
              'Voters elect the Commission directly, bypassing parliaments',
              'The Court of Justice appoints both the Council and the Parliament',
              'There is no chain at all: EU officials are unaccountable to anyone',
            ],
            answer: 0,
          },
        ],
      },
    ],
  },
};
