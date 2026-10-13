import type { WeekContent } from '../../types';

// Week 2 - The Great Divergence in Health and Wealth
// Sources: Week 2 lecture + seminar; Allen, Global Economic History (VSI), ch. 1-2.

export const w2: WeekContent = {
  topic: {
    id: 'w2-divergence-health-wealth',
    week: 2,
    title: 'The Great Divergence in Health and Wealth',
    summary:
      'How economic historians measure wealth and health over time, why most of history was stuck in a Malthusian economy, and when the West pulled ahead.',
    keyPoints: [
      'GDP can be computed three ways (production, expenditure, income); PPP adjusts it for price differences between countries.',
      'GDP misses unpaid work, environmental costs and distribution, so historians also use real wages.',
      "Allen's welfare ratio compares a labourer's full-time earnings with the cost of keeping a family at bare-bones subsistence.",
      'Income gaps were small in 1500; by 1820 Europe was richest and since then the gaps have widened (the Great Divergence).',
      'Before c. 1800 life expectancy was 30-40, mainly because so many infants died.',
      'In the Malthusian economy, extra output led to more people rather than richer people.',
      'Gradual farming advances (new crops, rotation, enclosure) and then the Industrial Revolution broke the Malthusian trap.',
    ],
    sections: [
      {
        heading: 'Measuring wealth: GDP and PPP',
        paragraphs: [
          'GDP is the value of all final goods and services an economy produces. It can be measured three ways that should give the same answer: adding up value added in production (counting only what each stage adds, to avoid double counting), adding up expenditure (consumption + investment + government spending + exports - imports), or adding up incomes (wages, profits, rents, interest).',
          'To compare countries, GDP is converted with purchasing power parity (PPP) exchange rates, which correct for the fact that the same basket of goods costs different amounts in different countries. At market exchange rates the US had about 88 times the GDP per head of Chad in 2024; at PPP the gap shrinks to about 31 times, because goods and services are much cheaper in Chad.',
          'Historical GDP series are reconstructions. Simon Kuznets pioneered national accounts for the US (1870-1960); Angus Maddison, and later Bolt and van Zanden, built comparative global series. For the Netherlands there is an annual series back to 1350.',
        ],
      },
      {
        heading: 'Pitfalls of GDP',
        paragraphs: [
          'GDP is market-based, so it leaves out unpaid household work, volunteering and informal or black-market activity. Some GDP growth adds nothing to welfare, and environmental costs such as CO2 emissions are not subtracted. Income and happiness are closely linked only up to a threshold (the "end of materialism" hypothesis predicts the link weakens as societies get richer). GDP also says nothing about how income is distributed within a country.',
          'Even so, GDP remains one of the most useful indicators for comparing national welfare over time and space.',
        ],
      },
      {
        heading: 'Real wages and bare-bones subsistence (Allen)',
        paragraphs: [
          "Robert Allen measures living standards with real wages: what a labourer's earnings can buy. His yardstick is the cost of 'bare-bones subsistence', the cheapest way to stay alive: a near-vegetarian diet of the cheapest local grain (oats, maize, millet or rice) giving about 1,940 calories a day, plus tiny amounts of cloth, fuel, soap and candles. The welfare ratio is full-time earnings divided by what a family needs at that level.",
          'In the 15th century labourers across Europe earned roughly four times subsistence. By the 18th century living standards on the continent had collapsed to about subsistence (Florentine workers moved from bread to maize polenta), while London and Amsterdam stayed at about four times subsistence, so workers there ate white bread, beef and beer and could buy sugar, tea and the odd book.',
          'Real wages have advantages: they avoid averaging rich and poor, can be compared across cities and centuries, and wage and price records exist when GDP data do not. But they cover only urban wage earners, miss the self-employed and the incomes of women and children, ignore non-monetary exchange, and keep the basket fixed even when preferences change.',
          'Allen draws a striking conclusion: subsistence wages are a poverty trap, because cheap labour gives firms no reason to mechanise. "The Industrial Revolution was the result of high wages, and not just their cause."',
        ],
      },
      {
        heading: 'When did the divergence happen?',
        paragraphs: [
          'Allen argues that income differences in 1500 were small. By 1820 Europe was the richest continent: the Netherlands led (about $1,838 per head in 1990 dollars), followed by Britain ($1,706), while Africa was poorest ($415, barely above subsistence). Since 1820 the gaps have widened: the regions that were richest grew the most. The main exception is East Asia (Japan, then South Korea and Taiwan, and China today).',
          'Industrialisation and de-industrialisation drove much of this. In 1750 China produced about 33% and India about 25% of world manufacturing; by 1913 their shares had collapsed to 4% and 1%, as mechanised Western producers drove their textile and metal industries out of business.',
          'Today the picture also includes a "South-South divergence": since the late 20th century parts of the developing world, especially in Asia, have pulled away from others.',
        ],
      },
      {
        heading: 'Health in the past',
        paragraphs: [
          'Before the 19th century, life expectancy at birth in Western Europe fluctuated between about 30 and 40 years (Roman Egypt: about 27-28). Infant and child deaths pulled the average down: Queen Anne had 17 pregnancies but none of her children outlived early childhood. Life expectancy at birth is therefore a tricky measure: a value of 35 does not mean most people died at 35. If half of all babies died at birth and the rest lived to 50, life expectancy at birth would be 25.',
          'Early improvements (such as variolation and vaccination against smallpox) reached aristocrats first. Knowledge of germs came slowly: in 1846 Ignaz Semmelweis introduced hand-washing in a Vienna maternity ward while miasma theory still dominated; Simpson introduced chloroform anaesthesia; Pasteur and Koch founded bacteriology; Lister applied germ theory to surgery with carbolic acid. Piped water and sanitation followed.',
          'Life expectancy rose fast in the first half of the 20th century, mostly because child mortality fell (vaccination, antibiotics, public health). After the 1920s progress slowed in rich countries: with child deaths already low, further gains came among the elderly, which raises life expectancy at birth much less.',
        ],
      },
      {
        heading: 'The Malthusian economy',
        paragraphs: [
          'Thomas Malthus argued that population tends to grow exponentially while food supply grows only linearly. Because land is fixed, adding more workers runs into diminishing marginal returns: people farm the best land first, then poorer soils, and output per worker falls.',
          'In this world a new technology (say, iron ploughs) briefly raises incomes, more children survive and population grows, food prices rise, and living standards sink back to the old level. Technology produces a larger population, not a richer one. Population is kept in check by preventive checks that lower births (late marriage, celibacy, abstinence, contraception) and positive checks that raise deaths (famine, epidemics, war).',
          'The Black Death (1347-51), bubonic plague spread by infected fleas, killed an estimated 35-60% of Europeans. In England between 1209 and 1750, population and real wages moved in opposite directions: after the plague, the survivors earned more.',
        ],
      },
      {
        heading: 'Breaking out of the trap',
        paragraphs: [
          'There was no single silver bullet. Agriculture improved gradually: crops from the Columbian exchange (maize, potatoes, sugar), crop rotation, manure, horses and iron tools, Jethro Tull\'s seed drill (1701), and enclosure of common land, which gave farmers an incentive to invest.',
          'The potato yields about 10,900 kg per acre against 650 kg for wheat; half an acre could feed a family for a year. Nunn and Qian (2010) estimate the potato explains about a quarter of Old World population growth and urbanisation.',
          'Higher farm productivity let more people move to cities. The Industrial Revolution finally ended the Malthusian economy, something Malthus himself could not foresee when he wrote his essay in 1798.',
        ],
      },
    ],
    keyTerms: [
      {
        term: 'Purchasing power parity (PPP)',
        definition:
          'Exchange rate at which a basket of goods costs the same in two countries; used to compare incomes adjusted for price levels.',
      },
      {
        term: 'Bare-bones subsistence',
        definition:
          "Allen's cheapest survival basket: about 1,940 calories a day from the cheapest local grain plus minimal non-food items.",
      },
      {
        term: 'Welfare ratio',
        definition: "A labourer's full-time earnings divided by the cost of supporting a family at bare-bones subsistence.",
      },
      {
        term: 'Great Divergence',
        definition:
          'The widening gap between north-western Europe (and its offshoots) and the rest of the world, mainly after c. 1800.',
      },
      {
        term: 'Malthusian trap',
        definition:
          'Rising output leads to population growth that pushes living standards back to subsistence, so there is no sustained growth per head.',
      },
      {
        term: 'Preventive checks',
        definition: 'Ways of lowering births to keep population in line with resources: late marriage, celibacy, abstinence, contraception.',
      },
      {
        term: 'Positive checks',
        definition: 'Events that raise deaths and cut population: famine, epidemics, war.',
      },
      {
        term: 'Diminishing marginal returns',
        definition: 'Each extra worker on a fixed amount of land adds less output than the previous one.',
      },
      {
        term: 'Life expectancy at birth',
        definition: 'Average lifespan of newborns; heavily pulled down by infant mortality, so it is not the typical age at death.',
      },
      {
        term: 'Columbian exchange',
        definition: 'Transfer of crops, animals and diseases between the Americas and the Old World after 1492.',
      },
    ],
    readings: [
      'Allen, R. C. (2011). Global Economic History: A Very Short Introduction, ch. 1. Oxford University Press.',
      'Deaton, A. (2013). The Great Escape, ch. 2. Princeton University Press.',
    ],
  },

  basics: {
    id: 'w2-basics',
    title: 'Health and wealth',
    description: 'Week 2 · Measuring the Great Divergence',
    lessons: [
      {
        id: 'w2-b1',
        title: 'Measuring wealth',
        topicId: 'w2-divergence-health-wealth',
        exercises: [
          {
            id: 'w2b1-01',
            type: 'choice',
            prompt: 'What does a purchasing power parity (PPP) exchange rate correct for?',
            options: [
              'Differences in price levels between countries',
              'Differences in population size',
              'Inflation within one country over time',
              'Differences in the size of the informal sector',
            ],
            answer: 0,
            explanation: 'PPP converts incomes so that the same basket of goods costs the same everywhere.',
          },
          {
            id: 'w2b1-02',
            type: 'fill',
            text: 'In 2024 US GDP per head was about 88 times that of Chad at market exchange rates, but only about ___ at PPP.',
            options: ['31 times', '88 times', '2 times', '150 times'],
            answer: '31 times',
            explanation: 'Goods and services are much cheaper in Chad, so PPP shrinks the gap.',
          },
          {
            id: 'w2b1-03',
            type: 'match',
            prompt: 'Match each way of computing GDP to what it adds up',
            pairs: [
              ['Production approach', 'Value added'],
              ['Expenditure approach', 'C + I + G + (X - M)'],
              ['Income approach', 'Wages, profits, rents'],
            ],
          },
          {
            id: 'w2b1-04',
            type: 'choice',
            prompt:
              'A farmer sells wheat to a baker for $100; the baker sells bread for $150. How much do they add to GDP?',
            options: ['$150', '$250', '$100', '$50'],
            answer: 0,
            explanation: 'Value added: farmer $100 + baker $50. Counting $250 would double count the wheat.',
          },
          {
            id: 'w2b1-05',
            type: 'truefalse',
            statement: 'GDP includes unpaid household work such as cooking and childcare.',
            answer: false,
            explanation: 'GDP is market-based, so non-monetised work is left out.',
          },
          {
            id: 'w2b1-06',
            type: 'choice',
            prompt: "What is Allen's 'bare-bones subsistence' basket?",
            options: [
              'The cheapest diet that keeps a person alive: about 1,940 kcal a day of local grain',
              'The diet of a London labourer around 1750: white bread, beef and beer',
              'A standard European basket of bread, meat and beer used for every city',
              'The World Bank poverty line of $10 a day, converted into grain',
            ],
            answer: 0,
            explanation: 'The grain differs by region (oats, maize, millet, rice), but the calories are fixed.',
          },
          {
            id: 'w2b1-07',
            type: 'truefalse',
            statement:
              'In the 18th century, labourers in London and Amsterdam still earned about four times bare-bones subsistence, while workers on much of the continent had fallen to around subsistence.',
            answer: true,
          },
          {
            id: 'w2b1-08',
            type: 'choice',
            prompt: 'Which is a drawback of using urban real wages to measure living standards?',
            options: [
              'They miss the self-employed and the earnings of women and children',
              'They average the incomes of the rich and the poor together',
              'They cannot be compared between cities or across centuries',
              'They depend on GDP data, which is missing for most past societies',
            ],
            answer: 0,
            explanation: 'They also only cover cities and the monetised economy.',
          },
        ],
      },
      {
        id: 'w2-b2',
        title: 'When did the West pull ahead?',
        topicId: 'w2-divergence-health-wealth',
        exercises: [
          {
            id: 'w2b2-01',
            type: 'truefalse',
            statement: 'According to Allen, differences in income between countries were already large in 1500.',
            answer: false,
            explanation: 'Allen argues they were small; the big divide emerged after da Gama and Columbus, especially after 1800.',
          },
          {
            id: 'w2b2-02',
            type: 'choice',
            prompt: "Which country had the highest GDP per head in 1820 in Allen's figures?",
            options: ['The Netherlands', 'Great Britain', 'China', 'The United States'],
            answer: 0,
            explanation: 'The Netherlands ($1,838) just ahead of Britain ($1,706).',
          },
          {
            id: 'w2b2-03',
            type: 'fill',
            text: 'In 1750, ___ produced about a third of the world\'s manufactures.',
            options: ['China', 'India', 'Britain', 'the Netherlands'],
            answer: 'China',
            explanation: 'China 33%, India 25%. By 1913 their shares were 4% and 1%.',
          },
          {
            id: 'w2b2-04',
            type: 'order',
            prompt: 'Put these in chronological order',
            items: [
              'Vasco da Gama reaches India',
              'The British Industrial Revolution begins',
              'Napoleon is defeated at Waterloo',
              "China's share of world manufacturing falls to 4%",
            ],
            explanation: '1498, c. 1760, 1815, 1913.',
          },
          {
            id: 'w2b2-05',
            type: 'choice',
            prompt: 'Which region bucked the trend of widening income gaps in the 20th century?',
            options: ['East Asia', 'South Asia', 'Sub-Saharan Africa', 'The Middle East'],
            answer: 0,
            explanation: 'Japan first, then South Korea and Taiwan, and China today.',
          },
          {
            id: 'w2b2-06',
            type: 'choice',
            prompt: 'Allen writes that the Industrial Revolution was "the result of high wages, and not just their cause". What does he mean?',
            options: [
              'Expensive labour made it profitable to invent labour-saving machines',
              'Workers used their high wages to buy shares in the new factories',
              'Industrialisation raised wages first, and only then did invention start',
              'Governments raised wages by law to force firms to modernise',
            ],
            answer: 0,
            explanation: 'Where labour is cheap, firms have no incentive to mechanise: a poverty trap.',
          },
          {
            id: 'w2b2-07',
            type: 'truefalse',
            statement:
              'Allen finds that the rise of literacy in north-western Europe is mainly explained by the Protestant Reformation.',
            answer: false,
            explanation:
              'Catholic areas such as Belgium and north-eastern France were just as literate. Allen credits the high-wage, commercial economy.',
          },
        ],
      },
      {
        id: 'w2-b3',
        title: 'Health and the Malthusian trap',
        topicId: 'w2-divergence-health-wealth',
        exercises: [
          {
            id: 'w2b3-01',
            type: 'choice',
            prompt: 'What was life expectancy at birth in Western Europe before the 19th century?',
            options: ['About 30-40 years', 'About 50-60 years', 'About 15-20 years', 'About 65-70 years'],
            answer: 0,
          },
          {
            id: 'w2b3-02',
            type: 'truefalse',
            statement: 'A life expectancy at birth of 35 means that most people died at around age 35.',
            answer: false,
            explanation: 'High infant mortality drags the average down; those who survived childhood often lived much longer.',
          },
          {
            id: 'w2b3-03',
            type: 'match',
            prompt: 'Match the pioneer to the breakthrough',
            pairs: [
              ['Semmelweis', 'Hand-washing (1846)'],
              ['Lister', 'Antiseptic surgery'],
              ['Koch', 'Microbes cause disease'],
              ['Simpson', 'Chloroform anaesthesia'],
            ],
          },
          {
            id: 'w2b3-04',
            type: 'choice',
            prompt: 'According to Malthus, how do population and food production grow?',
            options: [
              'Population exponentially, food linearly',
              'Population linearly, food exponentially',
              'Both exponentially',
              'Both linearly',
            ],
            answer: 0,
          },
          {
            id: 'w2b3-05',
            type: 'choice',
            prompt: 'Which of these is a preventive check in Malthus\' theory?',
            options: ['Late marriage', 'Famine', 'An epidemic', 'War'],
            answer: 0,
            explanation: 'Preventive checks lower births; the others are positive checks that raise deaths.',
          },
          {
            id: 'w2b3-06',
            type: 'fill',
            text: 'The Black Death (1347-51) was bubonic plague, transmitted to humans by the bites of infected ___.',
            options: ['fleas', 'ticks', 'mosquitoes', 'lice'],
            answer: 'fleas',
            explanation: 'It killed an estimated 35-60% of Europe\'s population.',
          },
          {
            id: 'w2b3-07',
            type: 'truefalse',
            statement: 'In England between 1209 and 1750, population and real wages tended to move in opposite directions.',
            answer: true,
            explanation: 'The Malthusian pattern: after the Black Death, wages of the survivors rose.',
          },
          {
            id: 'w2b3-08',
            type: 'choice',
            prompt: 'Why was the potato so important for Europe\'s population?',
            options: [
              'It yields far more calories per acre than wheat, barley or oats',
              'It could be stored for years without rotting, which ended famines',
              'It was the only crop that grew in the cold north of Europe',
              'It could be exported to Asia in exchange for silver and spices',
            ],
            answer: 0,
            explanation:
              'Half an acre could feed a family for a year. Nunn & Qian credit it with about a quarter of Old World population growth.',
          },
        ],
      },
    ],
  },

  advanced: {
    id: 'w2-advanced',
    title: 'Health and wealth: analysis',
    description: 'Week 2 · Apply the Malthusian model, judge the evidence',
    lessons: [
      {
        id: 'w2-a1',
        title: 'Thinking like Malthus',
        topicId: 'w2-divergence-health-wealth',
        exercises: [
          {
            id: 'w2a1-01',
            type: 'choice',
            prompt:
              'A pre-industrial village adopts iron ploughs and bread output rises by 20%. What does the Malthusian model predict for the long run?',
            options: [
              'Population grows until bread per person is back at its old level',
              'Bread per person stays 20% higher, because the gain is permanent',
              'Population falls, because richer families choose fewer children',
              'Wheat prices fall permanently, so everyone can afford more bread',
            ],
            answer: 0,
            explanation: 'Technology yields a larger, not a richer, population.',
          },
          {
            id: 'w2a1-02',
            type: 'choice',
            prompt: 'An epidemic kills a third of the population. What happens to the real wages of the survivors in a Malthusian economy?',
            options: [
              'They rise, because there is more land per worker',
              'They fall, because demand for goods collapses',
              'They stay the same, because prices adjust fully',
              'They fall, because fewer workers produce less food',
            ],
            answer: 0,
            explanation: 'This is what happened in England after the Black Death.',
          },
          {
            id: 'w2a1-03',
            type: 'order',
            prompt: 'Put the steps of a Malthusian cycle in order',
            items: [
              'Farming productivity improves',
              'Income per head rises',
              'More children survive and population grows',
              'Pressure on land pushes up food prices',
              'Living standards fall back to subsistence',
            ],
          },
          {
            id: 'w2a1-04',
            type: 'choice',
            prompt: 'Which observation is hardest to square with a Malthusian economy?',
            options: [
              'Population and real wages rising together for decades',
              'Wages rising after a plague',
              'Famine following a run of population growth',
              'Wheat prices rising as population grows',
            ],
            answer: 0,
            explanation: 'Sustained joint growth is exactly what Britain achieved after c. 1800, escaping the trap.',
          },
          {
            id: 'w2a1-05',
            type: 'truefalse',
            statement:
              'Diminishing returns arise partly because farmers settle the most fertile land first and must later cultivate poorer soils.',
            answer: true,
          },
          {
            id: 'w2a1-06',
            type: 'choice',
            prompt: "Why did Malthus' gloomy prediction fail after 1800?",
            options: [
              'Technological change raised output faster than population grew',
              'Population growth stopped completely after the Napoleonic Wars',
              'Europe started importing nearly all of its food from Asia',
              'Governments banned early marriage across most of Europe',
            ],
            answer: 0,
            explanation: 'Mechanisation, new crops and later the Green Revolution enhanced food supply.',
          },
        ],
      },
      {
        id: 'w2-a2',
        title: 'Judging the measures',
        topicId: 'w2-divergence-health-wealth',
        exercises: [
          {
            id: 'w2a2-01',
            type: 'choice',
            prompt: 'You want to compare living standards in Delhi and London around 1700. There are no GDP figures. What is the best approach?',
            options: [
              'Compare welfare ratios built from wage and price records',
              'Compare the number of palaces and churches in each city',
              'Take 1950 GDP figures and project them back in time',
              "Compare how fast each city's population was growing",
            ],
            answer: 0,
          },
          {
            id: 'w2a2-02',
            type: 'choice',
            prompt: 'Why does the welfare-ratio method struggle to capture changing tastes?',
            options: [
              'The consumption basket must stay fixed to keep comparisons valid',
              'It only records the price of grain, not of any other goods',
              'It only uses data from after 1900, when tastes had settled',
              'It averages rich and poor households into one number',
            ],
            answer: 0,
            explanation: 'Londoners upgraded to white bread, beef and beer, but the yardstick remains the oatmeal basket.',
          },
          {
            id: 'w2a2-03',
            type: 'truefalse',
            statement:
              'Cutting infant mortality raises life expectancy at birth more than an equal fall in mortality among the elderly.',
            answer: true,
            explanation: 'Each saved infant gains a whole lifetime of years; life expectancy is more sensitive to early-life deaths.',
          },
          {
            id: 'w2a2-04',
            type: 'choice',
            prompt: 'Why did gains in life expectancy slow in Western countries after the 1920s?',
            options: [
              'Child mortality was already low, so gains shifted to the elderly',
              'Vaccination campaigns were stopped after the First World War',
              'Antibiotics stopped working because of resistance',
              'Rapid urbanisation brought back the urban penalty',
            ],
            answer: 0,
          },
          {
            id: 'w2a2-05',
            type: 'choice',
            prompt: 'What does the "end of materialism" hypothesis predict?',
            options: [
              'The link between income and happiness weakens as societies get richer',
              'Rich societies stop buying material goods once basic needs are met',
              'GDP growth always raises happiness by the same amount',
              'People in poor countries care more about leisure than income',
            ],
            answer: 0,
            explanation: 'Going from $2,000 to $5,000 transforms lives; $50,000 to $100,000 adds far less.',
          },
          {
            id: 'w2a2-06',
            type: 'choice',
            prompt: 'Why did the first gains in life expectancy (before 1850) reach aristocrats before the rest of the population?',
            options: [
              'The elite were the first to adopt variolation and inoculation',
              'Aristocrats ate more potatoes than the rest of the population',
              'Aristocrats lived in cities with piped water and sewers',
              'Aristocrats had fewer children, so each got more care',
            ],
            answer: 0,
            explanation: 'This point comes from the seminar discussion of Deaton (2013).',
          },
        ],
      },
    ],
  },
};
