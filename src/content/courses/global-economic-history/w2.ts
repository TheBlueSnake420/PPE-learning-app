import type { WeekContent } from '../../types';

// Week 2 - The Great Divergence in Health and Wealth
// Sources: Week 2 lecture + seminar; Allen, Global Economic History (VSI), ch. 1-2; Deaton (2013) ch. 2.

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
      'Deaton: the fall in mortality after 1850 came mainly from public health (clean water, sanitation, the germ theory), not from medicine or food alone; new knowledge first widens health gaps, then spreads.',
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
      {
        heading: 'Why did the West rise? Fundamentals versus immediate causes',
        paragraphs: [
          "Allen divides the last 500 years into three eras: the mercantilist era (1500-1800), when states used colonies, tariffs and wars to capture trade and precious metals; 19th-century catch-up, when Western Europe and the US copied Britain with the standard development model; and the 20th century, when only countries that made a planned 'Big Push' closed the gap.",
          'Explanations of the divergence often start from "fundamentals". Geography affects farming, transport costs (landlocked countries pay more to trade) and disease, and indirectly shapes institutions (for example, where settlers could survive and where land was abundant but labour scarce, which encouraged slavery). Institutions are the rules of the game: formal ones such as laws, constitutions and property rights, and informal ones such as traditions and norms. Culture covers learned behaviour such as trust and openness to trade.',
          "Allen is sceptical of some popular versions. Weber's Protestant ethic looked plausible in 1905 but the ranking it relied on has not held. Poor peasants are not irrational traditionalists: they respond to prices and adopt new methods when these pay. And while economists credit representative government (England after 1688) with growth, historians find that many absolutist states and empires kept the peace and let trade and regional specialisation grow (\"Smithian growth\"). His conclusion: geography, institutions and culture lurk in the background, but technological change, globalisation and economic policy were the immediate causes of unequal development. He does single out widespread literacy and numeracy as necessary conditions for success since the 17th century.",
        ],
      },
      {
        heading: "Engel's law and the demographic transition",
        paragraphs: [
          "Engel's law: the poorer a household, the larger the share of its income it spends on food. As incomes rise, the food share falls and spending shifts to better food (white bread, meat, beer) and to new goods such as tea, sugar and books, which is what London labourers did in the 18th century.",
          'The demographic transition model (from student notes) describes four stages: (1) high birth and death rates, so population barely grows (the Malthusian world); (2) death rates fall with better food, sanitation and medicine while birth rates stay high, so population booms; (3) birth rates fall too, as urbanisation and lower child mortality mean fewer children are needed; (4) low birth and death rates and a stable population.',
        ],
      },
      {
        heading: 'Reading: measuring life and death (Deaton, The Great Escape, ch. 2)',
        paragraphs: [
          "Life expectancy at birth is a period measure: it assumes that today's risk of dying at each age will apply for the rest of a newborn's life. A one-year epidemic such as the 1918 flu therefore makes it collapse for that year, and when death rates keep falling, today's figure understates how long babies will actually live. US life expectancy rose from about 47 in 1900 to 78 in 2006.",
          'Death rates by age follow a typical curve, which Deaton compares to a "swoosh": high in infancy, lowest in the early teens, then rising steadily with age. Where many children die, the average is not the typical lifespan: people who survive childhood go on to live much longer. In England, life expectancy at age 15 was higher than at birth until about 1900.',
          'Because saving a baby adds far more years than saving an old person, life expectancy weighs deaths of the young much more heavily. Choosing it as the yardstick of progress is therefore an ethical judgement, not a neutral fact: by this measure the US did better before 1950 than after, and poor countries, whose gains come mostly among children, seem to be catching up.',
          'The epidemiological transition, or "ageing of death": as infectious diseases recede, deaths shift from children to old people dying of chronic diseases such as heart disease and cancer. Measuring all this requires a complete vital registration system (every birth and death recorded) plus censuses, which is itself a sign of state capacity. Sweden had one in the 18th century; many poor countries still do not, and surveys of mothers fill the gap.',
        ],
      },
      {
        heading: 'Reading: foragers, farmers and the first inequalities (Deaton)',
        paragraphs: [
          'For most of human history people lived as hunter-gatherers. They ate a varied diet and walked a lot, but life expectancy was only about 20-30 years. Bands were remarkably equal: without ways to store food, sharing a big kill worked as insurance, and Deaton suggests our strong sense of fairness may go back to this. It was no paradise, though: violence within and between groups was common.',
          'The Neolithic revolution, the switch to farming about 10,000 years ago, was less a step up than an adaptation to harder foraging as large game ran out. Farming allowed food storage, property, rulers and priests, and with them inequality. Crowded settlements and domesticated animals brought new infectious diseases such as smallpox, measles and tuberculosis, and sanitation became harder. Life expectancy did not rise for thousands of years: higher productivity meant more people, not longer lives (the Malthusian equilibrium).',
          'The lesson Deaton draws: wellbeing has not improved steadily or for everyone, and inequality is largely a product of civilisation.',
        ],
      },
      {
        heading: 'Reading: why did people start living longer? (Deaton)',
        paragraphs: [
          'From 1550 to 1750 English ducal families lived no longer than ordinary people, although they ate far more: disease, not food, set the limit. After 1750 a health gradient (the better-off living longer) opened up, reaching nearly 20 years by 1850. The elite were the first to use new and expensive knowledge, such as variolation (deliberate infection with smallpox material to give a mild case and lifelong immunity; the safer vaccination followed around 1800), quinine and other imported remedies. The general pattern: new knowledge first creates health inequalities, then spreads and gets cheaper so that everyone gains.',
          'Between 1850 and 1950 life expectancy in England and Wales rose from about 40 to almost 70, mostly because fewer children died. Medicine cannot explain this: death rates from many diseases were already falling before effective treatments existed. The McKeown thesis concluded that better nutrition and living standards were the cause. A related nutrition argument describes a trap in which small, underfed workers could not work enough to buy more food, until rising incomes and better diets set off a virtuous circle of bigger, healthier and more productive people.',
          'Deaton argues food alone is not enough. The timing is wrong: child mortality fell almost at the same time across north-western Europe, although economic growth started at different dates; and well-fed aristocrats and monks did not outlive others in earlier centuries. What matters is net nutrition, what the body keeps after fighting disease. The main credit goes to public health: first sanitation and clean water, then measures based on the germ theory of disease, such as vaccination and hygiene.',
          'Early industrial cities were deadlier than the countryside because drinking water was contaminated with sewage (the faecal-oral route of infection). The sanitary movement worked from the wrong "miasma" theory (foul smells cause disease) but still cleaned up cities. In the London cholera outbreak of 1854, deaths could be compared between households served by two water companies, one drawing water below the sewage outlets: an early natural experiment showing that cholera spreads through water.',
          'Knowledge was free, but using it was not. Water supplies and sewers cost money and needed engineering, monitoring and state capacity, and politics decided who got them: in British industrial cities the factory owners who paid the taxes had little interest in clean water for workers, and it came only after the Reform Acts gave working men the vote. Behaviour also had to change (hand-washing, safe handling of food and waste), which took decades. Science itself responded to need: the deadly industrial cities created both the demand for the germ theory and the conditions to discover it.',
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
      {
        term: 'Mercantilism',
        definition: 'Policy of the 1500-1800 era: using colonies, tariffs and war to capture trade, run export surpluses and accumulate bullion.',
      },
      {
        term: 'Smithian growth',
        definition: 'Growth from wider markets and regional specialisation, without fundamental technological change.',
      },
      {
        term: 'Formal and informal institutions',
        definition: 'Formal: written rules such as laws, constitutions and property rights. Informal: traditions and unwritten norms.',
      },
      { term: "Engel's law", definition: 'As income rises, the share of income spent on food falls.' },
      {
        term: 'Demographic transition',
        definition: 'Shift from high to low birth and death rates, with a population boom in between when deaths fall first.',
      },
      {
        term: 'Period life expectancy',
        definition: "Life expectancy calculated as if today's death risk at each age will last for a newborn's whole life.",
      },
      {
        term: 'Epidemiological transition',
        definition: 'Shift from infectious diseases killing mostly children to chronic diseases killing mostly old people.',
      },
      {
        term: 'Vital registration',
        definition: 'Complete official recording of all births and deaths; a marker of state capacity.',
      },
      { term: 'Neolithic revolution', definition: 'The switch from foraging to settled farming, from about 10,000 years ago.' },
      { term: 'Health gradient', definition: 'The pattern that richer, higher-status people have better health and live longer.' },
      {
        term: 'Variolation',
        definition: 'Deliberate infection with smallpox material to cause a mild case and lasting immunity; older than vaccination.',
      },
      {
        term: 'McKeown thesis',
        definition: 'Mortality fell before effective medicine existed, so better nutrition and living standards must explain it.',
      },
      { term: 'Net nutrition', definition: 'The nutrition the body actually keeps after losses to disease and fever.' },
      { term: 'Germ theory of disease', definition: 'Micro-organisms cause infectious diseases; it replaced the miasma theory.' },
      { term: 'Miasma theory', definition: 'The mistaken belief that foul smells and bad air cause disease.' },
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
      {
        id: 'w2-b4',
        title: 'Roots of the divergence',
        topicId: 'w2-divergence-health-wealth',
        exercises: [
          {
            id: 'w2b4-01',
            type: 'match',
            prompt: "Match the period to Allen's era",
            pairs: [
              ['1500-1800', 'Mercantilist era'],
              ['19th century', 'Catch-up via standard model'],
              ['20th century', 'Big Push industrialisation'],
            ],
          },
          {
            id: 'w2b4-02',
            type: 'choice',
            prompt: 'What was mercantilism?',
            options: [
              'Using colonies, tariffs and wars to capture trade and bullion',
              'A free-trade policy that lowered tariffs across Europe',
              'Investing state revenues in mass education and railways',
              'A system of merchant guilds that fixed prices in cities',
            ],
            answer: 0,
          },
          {
            id: 'w2b4-03',
            type: 'choice',
            prompt: 'What is "Smithian growth"?',
            options: [
              'Growth from wider markets and regional specialisation',
              'Growth from new machines invented by scientists',
              'Growth from a rising population working more land',
              'Growth from government planning of heavy industry',
            ],
            answer: 0,
            explanation: 'Allen notes that peaceful empires, not only representative states, could deliver it.',
          },
          {
            id: 'w2b4-04',
            type: 'truefalse',
            statement: "Allen accepts Weber's argument that Protestantism explains why northern Europe became rich.",
            answer: false,
            explanation: 'He calls it no longer tenable. Even for literacy, Catholic Belgium and north-eastern France matched Protestant England and the Netherlands.',
          },
          {
            id: 'w2b4-05',
            type: 'choice',
            prompt: "What does Engel's law say?",
            options: [
              'As income rises, the share spent on food falls',
              'As income rises, people buy less food in total',
              'Food prices rise faster than wages in growing cities',
              'Poor households save a larger share of their income',
            ],
            answer: 0,
          },
          {
            id: 'w2b4-06',
            type: 'order',
            prompt: 'Put the stages of the demographic transition in order',
            items: [
              'High birth and death rates',
              'Death rate falls; population booms',
              'Birth rate falls as well',
              'Low birth and death rates',
            ],
          },
          {
            id: 'w2b4-07',
            type: 'multi',
            prompt: 'Which of these does Allen treat as background "fundamentals" rather than immediate causes?',
            options: ['Geography', 'Institutions', 'Culture', 'Technological change', 'Globalisation', 'Economic policy'],
            answers: [0, 1, 2],
            explanation: 'Technology, globalisation and policy were, in his view, the immediate causes of unequal development.',
          },
        ],
      },
      {
        id: 'w2-b5',
        title: 'Reading: the escape from early death',
        topicId: 'w2-divergence-health-wealth',
        exercises: [
          {
            id: 'w2b5-01',
            type: 'choice',
            prompt: 'US life expectancy at birth collapsed in 1918 because of the flu. Why does this overstate the risk for babies born that year?',
            options: [
              "It assumes the epidemic's death rates last a lifetime",
              'It only counts the deaths of adults over age 65',
              'It leaves out babies who were born in hospitals',
              "It is based on the previous decade's census data",
            ],
            answer: 0,
            explanation: 'Period measures freeze the death risks of one year. The epidemic lasted about a year, so most of these babies never faced it again.',
          },
          {
            id: 'w2b5-02',
            type: 'truefalse',
            statement: 'Where many children die, most adults die at an age close to life expectancy at birth.',
            answer: false,
            explanation: 'Those who survive childhood live much longer than the average suggests. In England, life expectancy at 15 was higher than at birth until about 1900.',
          },
          {
            id: 'w2b5-03',
            type: 'fill',
            text: 'The shift from infectious diseases killing children to chronic diseases killing old people is the ___ transition.',
            options: ['epidemiological', 'demographic', 'industrial', 'nutritional'],
            answer: 'epidemiological',
          },
          {
            id: 'w2b5-04',
            type: 'choice',
            prompt: 'Why is using life expectancy as THE measure of progress an ethical choice rather than a neutral one?',
            options: [
              'It weighs deaths of the young far more than deaths of the old',
              'It only counts deaths caused by infectious diseases',
              'It ignores the differences between men and women',
              'It relies on surveys of mothers instead of death records',
            ],
            answer: 0,
            explanation: 'Saving a baby adds many more years than saving an old person. By this yardstick the US did better before 1950 than after.',
          },
          {
            id: 'w2b5-05',
            type: 'multi',
            prompt: 'What came with the switch from foraging to farming (the Neolithic revolution)?',
            options: [
              'Food storage and property',
              'More inequality within communities',
              'New crowd diseases such as smallpox',
              'A lasting rise in life expectancy',
              'Equal sharing of every large kill',
            ],
            answers: [0, 1, 2],
            explanation: 'Life expectancy did not rise for thousands of years; equal sharing was typical of foragers, who could not store food.',
          },
          {
            id: 'w2b5-06',
            type: 'choice',
            prompt: 'From 1550 to 1750 English dukes lived no longer than ordinary people, although they ate far more. What does this suggest?',
            options: [
              'Disease, not food, limited life expectancy',
              'Aristocrats ate an unhealthy amount of meat',
              'Parish records exaggerated commoners\' deaths',
              'Wealth only mattered once hospitals existed',
            ],
            answer: 0,
          },
          {
            id: 'w2b5-07',
            type: 'match',
            prompt: 'Match the concept to its meaning',
            pairs: [
              ['Health gradient', 'The better-off live longer'],
              ['Net nutrition', 'Food kept after fighting disease'],
              ['Variolation', 'Inoculation with smallpox matter'],
              ['Miasma theory', 'Foul smells cause disease'],
            ],
          },
          {
            id: 'w2b5-08',
            type: 'choice',
            prompt: 'According to the reading, what deserves most credit for the fall in child mortality after 1850?',
            options: [
              'Public health: clean water, sanitation, germ theory',
              'New medicines such as antibiotics and sulfa drugs',
              'Higher food intake from rising wages on its own',
              'More hospitals and more trained family doctors',
            ],
            answer: 0,
            explanation: 'Mortality was falling before effective drugs existed, and food alone cannot explain the timing.',
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
      {
        id: 'w2-a4',
        title: 'Reading: explaining the mortality decline',
        topicId: 'w2-divergence-health-wealth',
        exercises: [
          {
            id: 'w2a4-01',
            type: 'choice',
            prompt: 'Deaths from a disease were falling long before an effective drug existed, and kept falling at the same pace afterwards. What does this suggest?',
            options: [
              'Something other than the drug drove the decline',
              'The drug was the main cause of the whole decline',
              'Death records from before the drug are worthless',
              'The disease grew more dangerous after the drug',
            ],
            answer: 0,
            explanation: 'This is the evidence behind the McKeown thesis.',
          },
          {
            id: 'w2a4-02',
            type: 'choice',
            prompt: 'Child mortality fell almost simultaneously across north-western Europe, although economic growth began at different dates. Which explanation does this weaken?',
            options: [
              'Rising incomes and better food as the main cause',
              'Public health measures spreading across Europe',
              'The spread of the germ theory of disease',
              'Better statistics from vital registration',
            ],
            answer: 0,
          },
          {
            id: 'w2a4-03',
            type: 'truefalse',
            statement: 'Because the germ theory was free knowledge, cities could put it into practice as soon as it was known.',
            answer: false,
            explanation: 'Water supplies and sewers cost money, needed engineering, monitoring and state capacity, and depended on politics; behaviour took decades to change.',
          },
          {
            id: 'w2a4-04',
            type: 'choice',
            prompt: 'In British industrial cities, clean drinking water for workers came only after the Reform Acts. Why?',
            options: [
              'Working men could now vote, shifting the political balance',
              'The Acts made pipes and sewers much cheaper to build',
              'Factory owners stopped needing river water for power',
              'Doctors had only then proved cholera spread by water',
            ],
            answer: 0,
            explanation: 'Factory owners paid the taxes and had little interest in clean water for workers. Removing one inequality (no vote) helped remove another (no clean water).',
          },
          {
            id: 'w2a4-05',
            type: 'choice',
            prompt: "In 1854 two London water companies supplied the same streets, one drawing water below the sewage outlets. Why was comparing their customers' cholera deaths so convincing?",
            options: [
              'Similar households differed mainly in their water',
              "One company's customers were all much richer",
              'Cholera deaths had never been counted before',
              'The miasma theory predicted the same result',
            ],
            answer: 0,
            explanation: 'It was a natural experiment. Even so, other explanations (such as one company serving richer customers) had to be ruled out.',
          },
          {
            id: 'w2a4-06',
            type: 'multi',
            prompt: 'What did it take to turn the germ theory into lower death rates?',
            options: [
              'Money for water supplies and sewers',
              'Engineering skills and monitoring',
              'State capacity and competent officials',
              'Changes in everyday behaviour',
              'Effective antibiotics for cholera',
              'A shift of people back to the countryside',
            ],
            answers: [0, 1, 2, 3],
          },
          {
            id: 'w2a4-07',
            type: 'open',
            prompt: 'Deaton argues that "escapes make for inequality". Explain this with examples from England after 1750 and from Europe after 1850. Is such inequality a bad sign?',
            modelAnswer:
              'New knowledge and techniques (variolation, imported medicines, later the germ theory) first reach those who are rich and well informed, so they pull ahead. English aristocrats gained nearly 20 years of life expectancy over commoners between 1750 and 1850, and after 1850 north-western Europe pulled ahead of southern and eastern Europe and the rest of the world. Over time the knowledge spreads, gets cheaper and leads to measures for everyone (vaccination, sanitation), so gaps narrow: Italy and Portugal caught up with England in the 20th century. New inequality can therefore signal that general improvement is coming, but diffusion is not automatic: it needs money, state capacity and political will.',
            keyPoints: [
              'New knowledge reaches the rich and informed first',
              'Example: aristocrats versus commoners in England after 1750',
              'Example: leading versus lagging countries after 1850',
              'Gaps narrow as knowledge spreads and gets cheaper',
              'Diffusion needs money, state capacity and politics',
            ],
          },
        ],
      },
      {
        id: 'w2-a3',
        title: 'Think it through',
        topicId: 'w2-divergence-health-wealth',
        exercises: [
          {
            id: 'w2a3-01',
            type: 'choice',
            prompt:
              'In the 1790s a London gardener earned £37.75 a year; keeping his family at bare-bones subsistence cost just under £10. What was his welfare ratio, roughly?',
            options: ['About 4', 'About 1', 'About 10', 'About 0.25'],
            answer: 0,
            explanation: '37.75 / 10 ≈ 3.8: typical of London, where labourers earned about four times subsistence.',
          },
          {
            id: 'w2a3-02',
            type: 'choice',
            prompt: 'In a village, half of all babies die at birth and everyone else lives to exactly 60. What is life expectancy at birth?',
            options: ['30', '60', '45', '15'],
            answer: 0,
            explanation: '(0.5 × 0) + (0.5 × 60) = 30. Yet nobody actually dies at 30.',
          },
          {
            id: 'w2a3-03',
            type: 'open',
            prompt: 'Why does Allen call bare-bones subsistence a "poverty trap"? Explain how high wages helped cause the Industrial Revolution.',
            modelAnswer:
              'Where wages are at subsistence, labour is so cheap that firms have no reason to invent or adopt machines that save labour, so productivity and wages stay low: a trap. In Britain, commercial success (trade, urbanisation) had pushed wages well above subsistence and high relative to the cost of capital and energy, so labour-saving, coal-using machines became profitable to invent and use. High wages also supported better nutrition, health and schooling, raising literacy and skills. Hence the Industrial Revolution was a result of high wages, not just their cause.',
            keyPoints: [
              'Cheap labour removes the incentive to mechanise',
              'British wages were high relative to capital and energy',
              'That made labour-saving machines profitable to invent and adopt',
              'High wages supported nutrition, health and schooling',
              'The high wages themselves came from commercial success',
            ],
          },
          {
            id: 'w2a3-04',
            type: 'open',
            prompt: 'Evaluate GDP per head as a measure of living standards in the past. When would you use real wages instead?',
            modelAnswer:
              'GDP per head is a useful summary of output but misses unpaid and informal work, ignores environmental costs and says nothing about distribution; before about 1950 it is a reconstruction with wide margins of error. Real wages (welfare ratios) show what an ordinary labourer could actually buy and allow comparisons across cities and centuries, so they are the better choice when national accounts are missing or when you care about the typical worker. But they cover only urban wage earners, miss the self-employed, women and children, and keep the basket fixed. Combining measures, including health indicators such as life expectancy and height, gives the fullest picture.',
            keyPoints: [
              'GDP misses unpaid/informal work, environmental costs and distribution',
              'Historical GDP before ~1950 is a reconstruction',
              'Real wages show what a typical worker could buy, comparable across places',
              'Real wages miss the self-employed, women, children and rural areas',
              'Best to combine measures, including health',
            ],
          },
          {
            id: 'w2a3-05',
            type: 'multi',
            prompt: 'Which of these are Malthusian positive checks?',
            options: ['Famine', 'Epidemic disease', 'War', 'Late marriage', 'Contraception', 'Celibacy'],
            answers: [0, 1, 2],
            explanation: 'Positive checks raise deaths; preventive checks (the other three) lower births.',
          },
          {
            id: 'w2a3-06',
            type: 'choice',
            prompt: "Household A spends 70% of its income on food, household B 25%. What does Engel's law suggest?",
            options: [
              'Household A is almost certainly the poorer one',
              'Household B eats far less food in total',
              'Household A lives in a country with cheaper food',
              'Both households have the same real income',
            ],
            answer: 0,
          },
        ],
      },
    ],
  },
};
