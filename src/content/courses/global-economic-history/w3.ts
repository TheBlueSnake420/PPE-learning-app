import type { WeekContent } from '../../types';

// Week 3 - The British Industrial Revolution
// Sources: Week 3 lecture + seminar (Allen ch. 4, Pomeranz 2000, Van Zanden 2009); Allen VSI ch. 2-4.

export const w3: WeekContent = {
  topic: {
    id: 'w3-industrial-revolution',
    week: 3,
    title: 'The British Industrial Revolution',
    summary:
      'What changed in Britain between 1700 and 1870, why it happened there first, who paid the price, and how industrialisation spread.',
    keyPoints: [
      'Between 1700 and 1870 British GDP grew about tenfold, population fourfold and GDP per head roughly doubled; crucially, growth was sustained.',
      'Preconditions: commercialisation and an industrious revolution, capitalist agriculture, secure institutions after 1688, and a booming London.',
      "London's growth caused a timber crisis that pushed Britain onto coal; the steam engine was invented to drain coal mines.",
      'Cotton was transformed by the jenny, water frame, mule and power loom.',
      'Allen: high wages and cheap energy made labour-saving machines profitable in Britain. Mokyr: an Enlightenment "culture of growth". Pomeranz: coal and colonies.',
      "Workers' real wages lagged behind GDP until about 1850 (Engels' pause); cities carried an urban health penalty.",
      'Others caught up with a standard package: national market, protective tariffs, banks, mass education.',
    ],
    sections: [
      {
        heading: 'A new kind of growth',
        paragraphs: [
          'Between 1700 and 1870 the British economy grew about tenfold. Population quadrupled and GDP per head roughly doubled, defying the Malthusian logic. Growth of around 1.5% a year looks slow next to modern growth miracles, but Britain was pushing out the technological frontier rather than copying. What mattered most was that growth was sustained, with no stagnation or reversal.',
        ],
      },
      {
        heading: 'Preconditions',
        paragraphs: [
          'Commercialisation: households moved from making what they consumed to earning money to buy it. Jan de Vries calls this the industrious revolution: families worked longer hours for the market to afford new goods such as tea, coffee, sugar, tobacco and ready-made clothes. Around 1800, roughly 10% of an English working-class budget went on sugar, tea and coffee.',
          'Capitalist agriculture: enclosures created larger, individually controlled farms and encouraged investment (drainage, livestock, rotation). New crops, the seed drill and the Norfolk four-course rotation ended the fallow year. Higher farm productivity freed labour and fed growing cities.',
          'Institutions: after the Glorious Revolution of 1688 Parliament was supreme, property rights were protected and the investment climate improved. This cannot explain the wave of innovation on its own. Allen adds a twist: Parliament could also override property owners to push through enclosures, canals and turnpikes, something French kings could not do.',
          "London grew from about 50,000-70,000 people in 1550 to about 575,000 by 1700 (some 10% of the population), becoming Britain's main market for coal, wool, finance and overseas trade.",
        ],
      },
      {
        heading: 'From wood to coal',
        paragraphs: [
          "Before 1700 wood and charcoal were the main fuels. As London grew, firewood had to be hauled from ever further away, and after 1550 charcoal cost about twice as much as coal. Switching was not trivial: coal smoke made open-hearth medieval houses uninhabitable, so a new style of house with enclosed fireplaces and tall chimneys had to be developed.",
          "Coal production rose about 23-fold between 1700 and 1850. Britain moved from an organic energy economy (wood, muscle, wind and water) to fossil fuel: coal became 'subterranean forests'.",
        ],
      },
      {
        heading: 'The steam engine',
        paragraphs: [
          'Deeper coal mines flooded. In 1712 Thomas Newcomen built a practical steam engine to pump them out, using atmospheric pressure to drive a piston. The science (atmospheric pressure, vacuums) was pan-European, but the engine was developed in Britain because that is where there were many mines and coal was cheap enough to feed an engine that burned huge quantities of it.',
          'A long series of micro-inventions, notably by James Watt, cut coal use per horsepower-hour from 44 pounds in the 1730s to one pound by the late 19th century. Efficient engines could leave the coalfields and power Lancashire textile mills, railways (Stockton-Darlington, 1825) and ships. Steam is a general-purpose technology: it paid off decades after its invention, accounting for about half of British labour-productivity growth in the mid-19th century.',
        ],
      },
      {
        heading: 'Cotton',
        paragraphs: [
          "Before the Industrial Revolution, spinning and weaving were done by hand in rural households, often for urban merchants (proto-industrialisation). Indian cotton dominated world markets: in 1750 Bengal spun about 85 million pounds of cotton a year against Britain's 3 million.",
          "Hargreaves' spinning jenny (1764) spun many threads at once by hand. Arkwright's water frame (1769) used water-powered rollers. Crompton's mule (1779) combined both and spun finer yarn. Cartwright's power loom (1785) mechanised weaving. These machines owed little to science; they took years of trial and error.",
        ],
      },
      {
        heading: 'Why Britain? Three explanations',
        paragraphs: [
          'Robert Allen: a high-wage, cheap-energy economy. British wages were high relative to the price of capital and of energy, so machines that saved labour by using more capital and coal were profitable only there. In the 1780s an Arkwright mill earned about 40% in England, 9% in France and under 1% in India; about 20,000 jennies were installed in England, 900 in France and none in India. Technological change was directed by factor prices.',
          'Joel Mokyr: an "enlightened economy". The Scientific Revolution and Enlightenment created a culture of growth in which useful knowledge was collected, tested and shared through scientific societies (the Royal Society, 1660), journals, a reliable postal system and patents. This connected propositional knowledge ("what is true") with prescriptive knowledge ("how to make it work"). Allen looks at proximate incentives; Mokyr at the cultural and institutional background.',
          'Kenneth Pomeranz: coal and colonies (see the debate section below).',
        ],
      },
      {
        heading: 'Costs of industrialisation',
        paragraphs: [
          "GDP per head rose, but many workers saw no real-wage gains until after 1850: Engels' pause. Fast population growth kept wages down while output per worker rose through machines, coal and capital. After 1870 productivity growth accelerated, population growth slowed and unions organised.",
          'Towns grew fast with crowded, damp, poorly built housing and little sanitation. This urban penalty, lower life expectancy in cities than in the countryside, was driven by contagious disease and coal smoke and disappeared only with sanitation reforms. Child labour was widespread. Britain also became the largest emitter of CO2.',
          'Britain became the workshop of the world: from importing Indian textiles it became the dominant textile exporter.',
        ],
      },
      {
        heading: 'Catching up: the standard model',
        paragraphs: [
          'After 1815 Western Europe and the US followed Britain. Allen describes a standard development package (promoted by Friedrich List): (1) a national market by abolishing internal tariffs and building transport; (2) an external tariff to protect infant industries from British competition; (3) banks to stabilise the currency and finance industry; (4) mass education. Germany is the model case, with Prussian primary schooling, a customs union (Zollverein), railways and big investment banks. Investment banks played no role in Britain itself.',
          'Continental countries adopted British technology only when it became profitable for them: improved cotton machinery after the 1820s and coke-fired blast furnaces in the 1860s, since France had cheap charcoal and dear coal.',
          'In the Second Industrial Revolution (from about 1850-1870) science and technology "married": chemistry, physics and medicine produced direct economic payoffs. The US and Germany overtook Britain; Japan began industrialising around 1870.',
        ],
      },
      {
        heading: 'Debate: Pomeranz and the Little Divergence',
        paragraphs: [
          "Pomeranz (2000) argues that the most commercialised regions of China (the Yangzi delta) and Europe were similar around 1750 and faced the same land constraints. Britain escaped thanks to (1) cheap coal close to its industrial centres (China's coal lay in the north-west, about 700 km from the textile regions) and (2) access to land-intensive goods (sugar, cotton, timber) and silver from its American colonies. He sees no European advantage in institutions. His method is a reciprocal comparison: asking the same questions of both regions instead of treating Europe as the norm.",
          'Allen shares the stress on coal but adds wages: in Britain labour was dear relative to fuel, in China the reverse. He doubts that Yangzi incomes matched England\'s.',
          'The Little Divergence (Van Zanden 2009) is the divergence within Europe: from the early modern period the North Sea area (England, the Low Countries) pulled ahead of southern and eastern Europe. Explanations include human capital (book production after the printing press, literacy), the European marriage pattern and labour markets, institutions, and trade. The skill premium, the wage of skilled relative to unskilled workers, is used as an indicator of how well a society accumulates skills.',
        ],
      },
      {
        heading: 'Steam in numbers',
        paragraphs: [
          "The lecture's table of stationary power in Britain (Crafts 2004, from Kanefsky) shows how slowly steam spread. In 1760 steam supplied about 5,000 horsepower out of 85,000 (6%); in 1800, 35,000 of 170,000 (about 20%); in 1830, 160,000 of 340,000, the same as water power; in 1870, about 90%; and in 1907, 98%. Almost a century after Newcomen, water still drove most factories: a classic general-purpose technology whose payoff came late.",
        ],
      },
      {
        heading: 'Extra: living standards beyond wages (from student notes)',
        paragraphs: [
          "Kuznets curve: Simon Kuznets argued that inequality first rises and then falls as an economy industrialises (an inverted U). Agrarian economies are poor but fairly equal; early industrialisation concentrates gains among capital owners and urban workers; later, as more people move into industry and education and welfare spread, inequality falls.",
          'Household allocation: living standards depend not only on what a household earns but on how resources are shared within it. Main earners had more bargaining power, so women and children could receive less food, health care and schooling than wages or GDP per head suggest.',
          'Other measures: adult height reflects nutrition and disease in childhood, so historians use heights (for example of soldiers or prisoners) to track living standards. Age heaping, the tendency of people who do not know their exact age to round it to a number ending in 0 or 5, is used to measure numeracy: the more heaping, the less numerate a population.',
        ],
      },
      {
        heading: 'Extra: explaining the Little Divergence (from student notes)',
        paragraphs: [
          'Van Zanden stresses human capital. The printing press (mid-15th century) cut the cost of books dramatically; book production and literacy rose fastest around the North Sea. The European marriage pattern (late marriage, many people never marrying, young women working for wages before marriage) is linked to more investment in skills and to well-functioning labour markets (De Moor & Van Zanden). One argument in the notes is that the Black Death raised wages, which made education more affordable and valuable. A low skill premium suggests skills were relatively abundant.',
          "Allen offers a different reading: literacy rose because the high-wage, commercial economy of north-western Europe made reading, writing and numeracy valuable and affordable. Globalisation spurred the north while American silver inflated Spain's prices and made its farms and workshops uncompetitive.",
        ],
      },
    ],
    keyTerms: [
      {
        term: 'Industrious revolution',
        definition: 'De Vries: households worked longer for the market to buy new consumer goods, before and alongside industrialisation.',
      },
      { term: 'Enclosure', definition: 'Consolidating open fields and common land into privately owned, fenced farms.' },
      {
        term: 'High-wage economy',
        definition: "Allen: Britain's dear labour and cheap coal and capital made labour-saving technology profitable there first.",
      },
      {
        term: 'Directed technological change',
        definition: 'Innovation is steered by relative factor prices towards saving the expensive input.',
      },
      {
        term: 'Culture of growth',
        definition: "Mokyr: the Enlightenment belief that useful knowledge should be gathered, tested and shared, linking science and craft.",
      },
      {
        term: 'Propositional vs prescriptive knowledge',
        definition: 'Mokyr: knowing "what is true" about nature versus knowing "how to do" something in practice.',
      },
      {
        term: 'General-purpose technology',
        definition: 'A technology with many uses (steam, electricity, computers) whose payoff arrives decades after invention.',
      },
      {
        term: "Engels' pause",
        definition: 'Period (to about 1850) when British GDP per head rose but real wages stagnated.',
      },
      {
        term: 'Urban penalty',
        definition: 'Lower life expectancy in industrial cities due to crowding, poor sanitation, contagious disease and coal smoke.',
      },
      {
        term: 'Standard development model',
        definition: 'National market, protective tariffs, investment banks and mass education: how the West caught up with Britain.',
      },
      {
        term: 'Little Divergence',
        definition: 'North-western Europe pulling ahead of southern and eastern Europe in the early modern period.',
      },
      {
        term: 'Reciprocal comparison',
        definition: 'Pomeranz: comparing Europe and Asia with the same questions both ways, instead of treating Europe as the norm.',
      },
      {
        term: 'Skill premium',
        definition: 'Wage of skilled relative to unskilled labour; an indicator of how well a society builds up skills.',
      },
      {
        term: 'Kuznets curve',
        definition: 'Inequality first rises and then falls as an economy industrialises (an inverted U).',
      },
      {
        term: 'Age heaping',
        definition: 'Rounding ages to numbers ending in 0 or 5; a historical measure of (in)numeracy.',
      },
      {
        term: 'European marriage pattern',
        definition: 'Late marriage, many never marrying and young women working for wages before marriage, typical of north-western Europe.',
      },
    ],
    readings: [
      'Allen, R. C. (2011). Global Economic History: A Very Short Introduction, ch. 3-4. Oxford University Press.',
      'Pomeranz, K. (2000). The Great Divergence. Princeton University Press.',
      'Van Zanden, J. L. (2009). The Long Road to the Industrial Revolution. Brill.',
    ],
  },

  basics: {
    id: 'w3-basics',
    title: 'The Industrial Revolution',
    description: 'Week 3 · Coal, steam, cotton',
    lessons: [
      {
        id: 'w3-b1',
        title: 'Before the machines',
        topicId: 'w3-industrial-revolution',
        exercises: [
          {
            id: 'w3b1-01',
            type: 'choice',
            prompt: 'Roughly how much did the British economy (GDP) grow between 1700 and 1870?',
            options: ['About tenfold', 'About doubled', 'About fiftyfold', 'It barely grew'],
            answer: 0,
            explanation: 'Population grew about fourfold and GDP per head roughly doubled.',
          },
          {
            id: 'w3b1-02',
            type: 'choice',
            prompt: 'What did Jan de Vries call the "industrious revolution"?',
            options: [
              'Households working longer for the market to buy new consumer goods',
              'Factories replacing household production of cloth and beer',
              'Workers organising in unions to win shorter working hours',
              'Government workhouses that put the poor to work for the market',
            ],
            answer: 0,
            explanation: 'Tea, sugar and coffee took about 10% of working-class budgets around 1800.',
          },
          {
            id: 'w3b1-03',
            type: 'choice',
            prompt: 'What was the key change brought by the Norfolk four-course rotation?',
            options: ['No more fallow year', 'Farming without horses', 'Growing only wheat', 'Farming on common land'],
            answer: 0,
          },
          {
            id: 'w3b1-04',
            type: 'fill',
            text: 'After the Glorious Revolution of ___, Parliament became supreme in England.',
            options: ['1688', '1649', '1776', '1815'],
            answer: '1688',
            explanation: 'James II fled and Parliament gave the crown to William and Mary.',
          },
          {
            id: 'w3b1-05',
            type: 'choice',
            prompt: 'Why did Londoners switch from wood to coal?',
            options: [
              'As London grew, wood had to come from further away and became dearer than coal',
              'Coal burned more cleanly than wood, so it was healthier for city dwellers',
              'Parliament banned cutting trees to save timber for the navy',
              'Cheap coal began arriving from new mines in the colonies',
            ],
            answer: 0,
          },
          {
            id: 'w3b1-06',
            type: 'truefalse',
            statement: 'Switching to coal was easy: households simply burned coal in their existing open hearths.',
            answer: false,
            explanation: 'Coal smoke made medieval houses uninhabitable; enclosed fireplaces and chimneys had to be developed.',
          },
          {
            id: 'w3b1-07',
            type: 'truefalse',
            statement: 'Higher agricultural productivity was a precondition for urbanisation, because cities need a food surplus.',
            answer: true,
          },
        ],
      },
      {
        id: 'w3-b2',
        title: 'Steam and cotton',
        topicId: 'w3-industrial-revolution',
        exercises: [
          {
            id: 'w3b2-01',
            type: 'choice',
            prompt: 'Why was the steam engine originally invented?',
            options: [
              'To pump water out of coal mines',
              'To power textile machines',
              'To drive railway locomotives',
              'To generate electricity',
            ],
            answer: 0,
          },
          {
            id: 'w3b2-02',
            type: 'fill',
            text: 'Thomas ___ built the first practical steam engine in 1712.',
            options: ['Newcomen', 'Watt', 'Arkwright', 'Trevithick'],
            answer: 'Newcomen',
            explanation: 'Watt later made the engine far more fuel-efficient.',
          },
          {
            id: 'w3b2-03',
            type: 'match',
            prompt: 'Match the invention to the inventor',
            pairs: [
              ['Spinning jenny', 'Hargreaves'],
              ['Water frame', 'Arkwright'],
              ['Spinning mule', 'Crompton'],
              ['Power loom', 'Cartwright'],
            ],
          },
          {
            id: 'w3b2-04',
            type: 'order',
            prompt: 'Put these inventions in chronological order',
            items: ['Newcomen steam engine', 'Spinning jenny', 'Water frame', 'Spinning mule', 'Power loom'],
            explanation: '1712, 1764, 1769, 1779, 1785.',
          },
          {
            id: 'w3b2-05',
            type: 'truefalse',
            statement: 'Early Newcomen engines were fuel-efficient and quickly spread far beyond the coalfields.',
            answer: false,
            explanation: 'They burned vast amounts of coal, so they paid only at the mines.',
          },
          {
            id: 'w3b2-06',
            type: 'choice',
            prompt: 'What is a general-purpose technology?',
            options: [
              'A technology with many uses whose payoff comes decades after invention',
              'A simple machine that any worker can operate without training',
              'A technology developed and paid for by the government',
              'A technology that is used in the same way in every country',
            ],
            answer: 0,
            explanation: 'Steam, electricity and computers are classic examples.',
          },
          {
            id: 'w3b2-07',
            type: 'choice',
            prompt: 'Which spinning machine combined the jenny and the water frame to spin very fine yarn?',
            options: ["Crompton's mule", "Cartwright's power loom", "Hargreaves' jenny", "Newcomen's engine"],
            answer: 0,
          },
        ],
      },
      {
        id: 'w3-b3',
        title: 'Why Britain?',
        topicId: 'w3-industrial-revolution',
        exercises: [
          {
            id: 'w3b3-01',
            type: 'match',
            prompt: 'Match the scholar to their argument',
            pairs: [
              ['Allen', 'High wages, cheap energy'],
              ['Mokyr', 'Culture of growth'],
              ['Pomeranz', 'Coal and colonies'],
              ['De Vries', 'Industrious revolution'],
            ],
          },
          {
            id: 'w3b3-02',
            type: 'choice',
            prompt: 'In the 1780s an Arkwright mill earned about 40% a year in England. What did it earn in India?',
            options: ['Under 1%', 'About 9%', 'About 40%', 'Over 60%'],
            answer: 0,
            explanation: 'France: about 9%. That is why about 150 mills were built in Britain, 4 in France and none in India.',
          },
          {
            id: 'w3b3-03',
            type: 'choice',
            prompt: 'In Mokyr\'s terms, "water boils at 100°C at sea level" is an example of...',
            options: ['Propositional knowledge', 'Prescriptive knowledge', 'Tacit knowledge', 'A patent'],
            answer: 0,
            explanation: 'Propositional = what is true. Prescriptive = how to make something work.',
          },
          {
            id: 'w3b3-04',
            type: 'truefalse',
            statement: 'Mokyr sees scientific societies such as the Royal Society (1660) as institutions that spread useful knowledge.',
            answer: true,
          },
          {
            id: 'w3b3-05',
            type: 'choice',
            prompt: "What is \"Engels' pause\"?",
            options: [
              'A period when GDP per head rose but real wages stagnated',
              'A period when invention slowed down after the first machines',
              'A wave of strikes that stopped factory work in the 1840s',
              'A period when population growth paused because of cholera',
            ],
            answer: 0,
          },
          {
            id: 'w3b3-06',
            type: 'choice',
            prompt: 'What caused the "urban penalty" in industrialising England?',
            options: [
              'Contagious disease, crowding, poor sanitation and coal smoke',
              'Higher food prices in cities than in the countryside',
              'Factory accidents, which killed most urban workers',
              'Migrants bringing malaria from the colonies to the ports',
            ],
            answer: 0,
          },
          {
            id: 'w3b3-07',
            type: 'fill',
            text: 'Pomeranz asks the same questions of Europe and China in both directions: a ___ comparison.',
            options: ['reciprocal', 'Eurocentric', 'counterfactual', 'quantitative'],
            answer: 'reciprocal',
          },
        ],
      },
      {
        id: 'w3-b4',
        title: 'Catching up',
        topicId: 'w3-industrial-revolution',
        exercises: [
          {
            id: 'w3b4-01',
            type: 'choice',
            prompt: "Which policy was NOT part of the 'standard model' others used to catch up with Britain?",
            options: [
              'Unilateral free trade with Britain',
              'Abolishing internal tariffs and building transport',
              'External tariffs to protect infant industries',
              'Mass education',
            ],
            answer: 0,
            explanation: 'The fourth element was creating banks to stabilise the currency and finance industry.',
          },
          {
            id: 'w3b4-02',
            type: 'truefalse',
            statement: 'Investment banks were central to financing the British Industrial Revolution.',
            answer: false,
            explanation: 'Allen: they played no role in Britain but were prominent on the continent (e.g. Crédit Mobilier).',
          },
          {
            id: 'w3b4-03',
            type: 'choice',
            prompt: 'What is the "Little Divergence"?',
            options: [
              'North-western Europe pulling ahead of southern and eastern Europe',
              'Western Europe pulling ahead of China and India after 1800',
              'The growing gap between rich and poor within Britain',
              'Southern Europe pulling ahead of the north in the Renaissance',
            ],
            answer: 0,
          },
          {
            id: 'w3b4-04',
            type: 'choice',
            prompt: 'What set the Second Industrial Revolution apart from the first?',
            options: [
              'Innovations drew directly on science, such as chemistry and physics',
              'It happened only in Britain, which kept its technological lead',
              'It relied on water power rather than steam',
              'Innovations came from craftsmen with no links to science',
            ],
            answer: 0,
          },
          {
            id: 'w3b4-05',
            type: 'order',
            prompt: 'Put these industrialisation waves in order',
            items: [
              'Britain',
              'Western Europe and the United States',
              'Japan',
              'South Korea and the other Asian tigers',
            ],
            explanation: 'c. 1760, after 1815, around 1870, 1960s.',
          },
          {
            id: 'w3b4-06',
            type: 'choice',
            prompt: 'What is the skill premium?',
            options: [
              'The wage of skilled workers relative to unskilled workers',
              'The share of workers who completed an apprenticeship',
              'A bonus paid by guilds to their most skilled members',
              'The extra output a skilled worker produces per day',
            ],
            answer: 0,
          },
        ],
      },
      {
        id: 'w3-b5',
        title: 'Inequality, heights and numeracy',
        topicId: 'w3-industrial-revolution',
        fromNotes: true,
        exercises: [
          {
            id: 'w3b5-01',
            type: 'choice',
            prompt: 'What does the Kuznets curve describe?',
            options: [
              'Inequality first rising, then falling as an economy industrialises',
              'Inequality falling steadily as an economy industrialises',
              'Population first rising, then falling as incomes grow',
              'Wages rising faster than GDP during industrialisation',
            ],
            answer: 0,
          },
          {
            id: 'w3b5-02',
            type: 'order',
            prompt: 'Put the stages behind the Kuznets curve in order',
            items: [
              'Poor, agrarian and fairly equal',
              'Early industry: gains go to capital owners and cities',
              'Industry, schooling and welfare spread',
              'Inequality falls again',
            ],
          },
          {
            id: 'w3b5-03',
            type: 'choice',
            prompt: 'Why can household income hide inequality?',
            options: [
              'Resources were not shared equally: main earners got more than women and children',
              'Households hid part of their income from tax collectors and surveys',
              'Household income is always measured before taxes are paid',
              'Children usually earned more than their parents in factories',
            ],
            answer: 0,
          },
          {
            id: 'w3b5-04',
            type: 'choice',
            prompt: 'What does the average adult height of a population tell historians?',
            options: [
              'How well people were fed and how healthy they were as children',
              'How much physical labour people did as adults',
              'How large the share of immigrants in the population was',
              'How much meat the richest households could afford',
            ],
            answer: 0,
          },
          {
            id: 'w3b5-05',
            type: 'choice',
            prompt: 'What is age heaping, and what is it used to measure?',
            options: [
              'Rounding ages to numbers ending in 0 or 5; a measure of numeracy',
              'Adding years to your age to get a job; a measure of child labour',
              'Ageing populations heaping up in cities; a measure of urbanisation',
              'Old people moving in with their children; a measure of poverty',
            ],
            answer: 0,
          },
          {
            id: 'w3b5-06',
            type: 'choice',
            prompt: 'What characterises the European marriage pattern?',
            options: [
              'Late marriage, many never marrying, women working for wages before marriage',
              'Early marriage arranged by parents, with large extended households',
              'Universal marriage in the teens and very high fertility',
              'Marriage only allowed after inheriting land from one\'s parents',
            ],
            answer: 0,
          },
        ],
      },
    ],
  },

  advanced: {
    id: 'w3-advanced',
    title: 'Industrial Revolution: debates',
    description: 'Week 3 · Weigh Allen, Mokyr and Pomeranz',
    lessons: [
      {
        id: 'w3-a1',
        title: 'Allen vs Mokyr vs Pomeranz',
        topicId: 'w3-industrial-revolution',
        exercises: [
          {
            id: 'w3a1-01',
            type: 'choice',
            prompt:
              'A new machine halves the labour needed per pound of yarn but doubles the capital needed. Where is it most likely to be adopted first?',
            options: [
              'Where wages are high relative to the cost of capital',
              'Where wages are low and capital is expensive',
              'Wherever the inventor happens to live',
              'Where population is growing fastest',
            ],
            answer: 0,
            explanation: "That is Allen's logic for 18th-century England versus France and India.",
          },
          {
            id: 'w3a1-02',
            type: 'choice',
            prompt: 'Which fact best supports Allen over a purely cultural explanation of the Industrial Revolution?',
            options: [
              'Steam science was known across Europe, but engines were built where coal was cheap',
              'Britain had the Royal Society, which spread useful knowledge among inventors',
              'British workers were more literate than workers anywhere else in Europe',
              "Newton was English, and inventors were inspired by his laws of motion",
            ],
            answer: 0,
          },
          {
            id: 'w3a1-03',
            type: 'choice',
            prompt:
              "Pomeranz's counterfactual: if Britain had its coal but no access to the Americas, what would have held it back?",
            options: [
              'Land constraints on food, cotton and timber',
              'A shortage of workers willing to mine coal',
              'A lack of the science needed for steam',
              'High interest rates on factory loans',
            ],
            answer: 0,
            explanation: 'The New World supplied land-intensive goods that relieved pressure on English land.',
          },
          {
            id: 'w3a1-04',
            type: 'truefalse',
            statement: "Allen's and Pomeranz's explanations are fully incompatible.",
            answer: false,
            explanation:
              'Both stress coal. Allen even concludes that the California School is right that Britain industrialised because of coal and commerce, but he adds high wages.',
          },
          {
            id: 'w3a1-05',
            type: 'choice',
            prompt: "Why couldn't the Yangzi delta simply follow Britain onto coal?",
            options: [
              "China's coal lay far from the textile regions, and fuel was dear relative to labour",
              'Chinese law banned coal mining to protect the forests and the farmland',
              'China had almost no coal, so it had to keep burning wood and charcoal',
              'Chinese spinners destroyed every machine, as the Luddites did in England',
            ],
            answer: 0,
          },
          {
            id: 'w3a1-06',
            type: 'choice',
            prompt: 'How does Mokyr\'s approach differ from Allen\'s?',
            options: [
              'Mokyr looks at culture and institutions; Allen at the price incentives for innovators',
              'Mokyr looks at wages and energy prices; Allen at culture and scientific societies',
              'Mokyr denies that Britain was first; Allen says it started in the Netherlands',
              'They make the same argument but use different data for different countries',
            ],
            answer: 0,
          },
        ],
      },
      {
        id: 'w3-a2',
        title: 'Spread and costs',
        topicId: 'w3-industrial-revolution',
        exercises: [
          {
            id: 'w3a2-01',
            type: 'choice',
            prompt: "Why did British engineers end up 'undoing' Britain's advantage?",
            options: [
              'They made machines efficient enough to pay where coal was dear or labour cheap',
              'They emigrated to the US and took their knowledge with them',
              'They refused to patent their inventions, so anyone could copy them',
              'They moved British factories to India to use its cheap labour',
            ],
            answer: 0,
            explanation: 'Coal use per horsepower-hour fell from 44 lb to 1 lb, so steam paid almost everywhere.',
          },
          {
            id: 'w3a2-02',
            type: 'choice',
            prompt: 'Why did France keep smelting iron with charcoal long after Britain switched to coke?',
            options: [
              'France had cheap charcoal from forests and expensive coal',
              'French law banned coke because of the smoke it produced',
              'French engineers did not know how coke smelting worked',
              'Charcoal iron was stronger and needed for French cannons',
            ],
            answer: 0,
            explanation: 'Coke furnaces only beat charcoal there after further improvements, in the 1860s.',
          },
          {
            id: 'w3a2-03',
            type: 'truefalse',
            statement: 'Most key inventions of the First Industrial Revolution relied directly on new scientific discoveries.',
            answer: false,
            explanation:
              'Cotton machines were the product of years of trial-and-error engineering. Science-based innovation is typical of the Second Industrial Revolution.',
          },
          {
            id: 'w3a2-04',
            type: 'choice',
            prompt: "What explains Engels' pause?",
            options: [
              'Fast population growth held wages down while machines raised output',
              'Wars with France destroyed factories and cut output per worker',
              'Workers refused to use machines, so productivity did not rise',
              'Coal became so expensive that factories had to cut wages',
            ],
            answer: 0,
          },
          {
            id: 'w3a2-05',
            type: 'choice',
            prompt:
              "A referee reviews Van Zanden's work on literacy. Which criticism concerns measurement?",
            options: [
              'Signing your name may not mean you can really read and write',
              'The Netherlands is too small a country to draw conclusions from',
              'Printing presses were too expensive to explain book production',
              'Literacy has nothing to do with income or economic growth',
            ],
            answer: 0,
          },
        ],
      },
      {
        id: 'w3-a3',
        title: 'Think it through',
        topicId: 'w3-industrial-revolution',
        exercises: [
          {
            id: 'w3a3-01',
            type: 'choice',
            prompt:
              'In 1800 British steam engines supplied 35,000 of 170,000 horsepower of stationary power, nearly a century after Newcomen. What does this illustrate?',
            options: [
              'A general-purpose technology pays off slowly, after many improvements',
              'Steam engines were banned from most factories until 1830',
              'British inventors had lost interest in steam by 1800',
              'Water power was always more efficient than steam power',
            ],
            answer: 0,
            explanation: "That's about 20%; steam only matched water power around 1830 and reached 98% by 1907.",
          },
          {
            id: 'w3a3-02',
            type: 'multi',
            prompt: 'According to Allen, what made it pay to develop the steam engine in Britain rather than in France or China?',
            options: [
              'Britain had far more coal mines that needed draining',
              'Coal at the pithead was cheap enough to feed wasteful engines',
              'Labour was expensive relative to energy',
              'Only British scientists understood atmospheric pressure',
              'British workers were cheaper than Chinese workers',
            ],
            answers: [0, 1, 2],
            explanation: 'The science was pan-European; the incentives were British.',
          },
          {
            id: 'w3a3-03',
            type: 'open',
            prompt: 'Why did the Industrial Revolution happen in Britain rather than China? Use both Allen and Pomeranz.',
            modelAnswer:
              "Pomeranz argues that the Yangzi delta and England were broadly similar around 1750 and both faced land constraints; Britain escaped because it had cheap coal close to its industrial regions (China's lay far away in the north-west) and because the Americas supplied land-intensive goods such as cotton, sugar and timber, plus silver. Allen agrees that coal mattered but adds factor prices: British wages were high relative to the cost of capital and energy, so labour-saving machines paid in Britain (an Arkwright mill earned about 40% there, under 1% in India), and Britain's large mining industry made the steam engine worth developing. Allen doubts that Yangzi incomes really matched England's. Both reject purely cultural or institutional explanations of the timing.",
            keyPoints: [
              'Pomeranz: Yangzi delta and England similar around 1750 (reciprocal comparison)',
              'Pomeranz: accessible coal in Britain, far from industry in China',
              'Pomeranz: New World land-intensive goods and silver relieved land constraints',
              'Allen: high wages relative to capital and energy made machines profitable',
              'Allen: big coal-mining sector made the steam engine worth developing',
            ],
          },
          {
            id: 'w3a3-04',
            type: 'open',
            prompt: 'Was the Industrial Revolution good for British workers? Weigh the evidence.',
            modelAnswer:
              "In the short run, much less than GDP suggests. During Engels' pause (to about the 1840s) output per worker rose while real wages stagnated, as rapid population growth held wages down and gains went to capital owners (consistent with the rising part of a Kuznets curve). Cities carried an urban penalty of disease and coal smoke, child labour was widespread and housing was poor. In the long run, however, the Industrial Revolution broke the Malthusian trap: after about 1850 real wages and life expectancy rose steadily, and sustained growth eventually made workers far richer than any earlier generation. The answer depends on the time horizon and on which workers you mean.",
            keyPoints: [
              "Engels' pause: output rose but real wages stagnated until about the 1840s",
              'Population growth held wages down; gains went to capital first',
              'Urban penalty, child labour, pollution and poor housing',
              'After about 1850 real wages and health improved',
              'Long run: escape from the Malthusian trap',
            ],
          },
          {
            id: 'w3a3-05',
            type: 'choice',
            prompt:
              'Van Zanden links the Little Divergence to human capital; some link literacy to Protestant Bible reading. What evidence does Allen use against the religious explanation?',
            options: [
              'Catholic Belgium and north-eastern France were as literate as Protestant regions',
              'Protestant Prussia had the lowest literacy rate in Europe around 1800',
              'Literacy in England fell sharply after the Reformation began',
              'Most books printed in the 16th century were about science, not religion',
            ],
            answer: 0,
            explanation: 'Allen attributes the rise in literacy to the high-wage, commercial economy instead.',
          },
        ],
      },
    ],
  },
};
