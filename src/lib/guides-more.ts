import type { Guide } from './guides';

const D = '2026-11-13';

/** Everyday unit conversions and a few more format guides. */
export const MORE_GUIDES: readonly Guide[] = [
  {
    slug: 'how-to-convert-kg-to-pounds',
    title: 'How to convert kg to pounds (and pounds to kg)',
    description: 'Convert kilograms to pounds, ounces and stone with the exact factor, a mental shortcut and a converter.',
    category: 'Units',
    intro:
      'To convert kilograms to pounds, multiply by 2.20462. So 70 kg is about 154.3 lb. To go the other way, multiply pounds by 0.45359237. The Weight converter does both instantly and also covers ounces, stone, grams and tonnes.',
    steps: [
      'Write the weight with its unit, for example 70 kg.',
      'Multiply by 2.20462: 70 × 2.20462 = 154.32 lb.',
      'For pounds to kilograms, multiply by 0.45359237: 154 lb × 0.45359237 = 69.85 kg.',
      'Or open the Weight converter, type the number and choose the two units.',
    ],
    sections: [
      {
        heading: 'A quick shortcut',
        paragraphs: [
          'For a rough answer, double the kilograms and add a tenth of the result: 70 kg doubled is 140, plus 14 is 154 lb. Going the other way, halve the pounds and take off a tenth: 154 lb is 77, minus 7.7 is about 69.3 kg. It is close enough for everyday use, but use the exact factor for cooking, shipping and medicine.',
        ],
      },
      {
        heading: 'Pounds, ounces and stone',
        paragraphs: [
          'A pound is 16 ounces. A stone, used in the UK and Ireland for body weight, is 14 pounds or about 6.35 kg. A baby weighing 7 lb 8 oz is 7.5 pounds, which is about 3.4 kg. The tonne used here is the metric one, 1,000 kg, which differs from the US short ton of 2,000 pounds.',
        ],
      },
      {
        heading: 'Luggage and body weight',
        paragraphs: ['Airline baggage limits are a common reason to convert. A 23 kg checked bag is about 50.7 pounds, and a 50 pound limit is about 22.7 kg, so a bag that is fine in one unit may be just over in the other. For body weight, remember that stone is used in the UK: 11 stone is 154 pounds, or about 69.9 kg.'],
      },
    ],
    faqs: [
      { q: 'How many pounds is 1 kg?', a: 'About 2.20462 pounds.' },
      { q: 'How many kg is 150 pounds?', a: 'About 68 kg.' },
      { q: 'Is a tonne the same as a ton?', a: 'No. A metric tonne is 1,000 kg, a US ton is 2,000 pounds and a UK ton is 2,240 pounds.' },
    ],
    tools: ['weight-converter', 'length-converter', 'temperature-converter'],
    published: D,
    updated: D,
  },
  {
    slug: 'how-to-convert-miles-to-kilometres',
    title: 'How to convert miles to kilometres (and back)',
    description: 'Convert miles to km with the exact factor, a quick mental trick and a converter that also does feet and yards.',
    category: 'Units',
    intro:
      'To convert miles to kilometres, multiply by 1.609344. So 10 miles is 16.09 km. To go back, divide kilometres by 1.609344 or multiply by 0.621371. The Length converter also handles feet, inches, yards and nautical miles.',
    steps: [
      'Write the distance with its unit, for example 26.2 miles.',
      'Multiply by 1.609344: 26.2 × 1.609344 = 42.16 km, a marathon.',
      'For kilometres to miles, multiply by 0.621371: 5 km × 0.621371 = 3.11 miles.',
      'Or use the Length converter and swap the units with the arrow button.',
    ],
    sections: [
      {
        heading: 'A mental trick',
        paragraphs: [
          'Consecutive numbers in the Fibonacci sequence (1, 1, 2, 3, 5, 8, 13, 21) are close to a mile-to-kilometre pair: 5 miles is about 8 km, 8 miles is about 13 km and 13 miles is about 21 km. For other numbers, multiply miles by 1.6, which is accurate to within a fraction of a percent.',
        ],
      },
      {
        heading: 'Other miles and speeds',
        paragraphs: [
          'A nautical mile, used at sea and in the air, is exactly 1,852 metres, about 1.15 statute miles. Speeds convert the same way: 60 miles per hour is about 96.6 km/h, and 100 km/h is about 62.1 mph. The Speed converter handles those and knots.',
        ],
      },
      {
        heading: 'Running and cycling',
        paragraphs: ['A 5K race is about 3.1 miles, a 10K is 6.2 miles, a half marathon is 13.1 miles (21.1 km) and a marathon is 26.2 miles (42.2 km). Paces convert by dividing: a pace of 8 minutes per mile is about 4 minutes 58 seconds per kilometre, so the same run reads as a faster number in kilometres.'],
      },
    ],
    faqs: [
      { q: 'How many km is 5 miles?', a: 'About 8.05 km.' },
      { q: 'How many miles is 10 km?', a: 'About 6.21 miles.' },
      { q: 'Is a mile always the same?', a: 'The statute mile used in the US and UK is always 1,609.344 metres. A nautical mile is different at 1,852 metres.' },
    ],
    tools: ['length-converter', 'speed-converter', 'weight-converter'],
    published: D,
    updated: D,
  },
  {
    slug: 'how-to-convert-feet-and-inches-to-cm',
    title: 'How to convert feet and inches to cm (height)',
    description: 'Convert a height like 5 ft 7 in to centimetres, and inches to cm with the exact 2.54 factor.',
    category: 'Units',
    intro:
      'To convert feet and inches to centimetres, turn the height into inches (feet × 12, plus the inches) and multiply by 2.54. So 5 ft 7 in is 67 inches, which is 170.18 cm. The Length converter does it in one step for any single unit.',
    steps: [
      'Write the height: 5 ft 7 in.',
      'Turn feet into inches: 5 × 12 = 60, then add 7 to get 67 inches.',
      'Multiply by 2.54: 67 × 2.54 = 170.18 cm.',
      'To check, type 67 into the Length converter with inches as From and centimetres as To.',
    ],
    sections: [
      {
        heading: 'The exact factor',
        paragraphs: [
          'One inch is defined as exactly 2.54 centimetres, so inches to cm is exact, not an approximation. One foot is therefore exactly 30.48 cm. These definitions have been fixed since 1959, so the conversion never changes.',
        ],
      },
      {
        heading: 'Going from cm back to feet',
        paragraphs: [
          'Divide centimetres by 2.54 to get inches, then divide by 12 for feet and keep the remainder as inches. For 175 cm: 175 ÷ 2.54 is 68.9 inches, which is 5 ft 8.9 in, usually written 5 ft 9 in. Heights on forms are often needed in one unit only, so check which one the form wants.',
        ],
      },
      {
        heading: 'A mental estimate',
        paragraphs: ['Each foot is about 30.5 cm and each inch about 2.5 cm, so 5 ft 7 in is roughly 152 plus 18, or about 170 cm. That is close enough for a quick check. For passports, medical forms and job applications, use the exact figure and round to the whole centimetre only if the form asks for it.'],
      },
    ],
    faqs: [
      { q: 'How tall is 6 feet in cm?', a: '182.88 cm.' },
      { q: 'How many cm is 5 ft 4 in?', a: '162.56 cm.' },
      { q: 'Does it round the answer?', a: 'It shows up to 10 significant digits, so you can round to the whole centimetre yourself.' },
    ],
    tools: ['length-converter', 'weight-converter', 'area-converter'],
    published: D,
    updated: D,
  },
  {
    slug: 'how-to-convert-square-feet-to-square-metres',
    title: 'How to convert square feet to square metres',
    description: 'Convert sq ft to sq m for flats and plots, with the exact factor and the area units used in property listings.',
    category: 'Units',
    intro:
      'To convert square feet to square metres, divide by 10.7639, or multiply by 0.092903. So a 1,000 sq ft flat is about 92.9 square metres. The Area converter also handles acres, hectares, square yards and square kilometres.',
    steps: [
      'Write the area with its unit, for example 1,200 sq ft.',
      'Multiply by 0.092903: 1,200 × 0.092903 = 111.5 square metres.',
      'For square metres to square feet, multiply by 10.7639.',
      'Or open the Area converter and choose square foot and square metre.',
    ],
    sections: [
      {
        heading: 'Why you cannot just use the length factor',
        paragraphs: [
          'A foot is 0.3048 metres, so a square foot is 0.3048 × 0.3048 = 0.092903 square metres. The conversion factor for area is the square of the length factor. A common mistake is to multiply by 0.3048 and get an answer more than three times too big.',
        ],
      },
      {
        heading: 'Carpet area and built-up area',
        paragraphs: [
          'Property ads in India quote carpet area, built-up area or super built-up area, and they differ for the same flat. The conversion to square metres is the same for all of them, but make sure you compare like with like. Larger land is often in acres (43,560 sq ft) or hectares (10,000 square metres, about 2.47 acres).',
        ],
      },
      {
        heading: 'Worked examples',
        paragraphs: ['A 900 sq ft flat is about 83.6 square metres. A plot measuring 30 by 40 feet is 1,200 sq ft, about 111.5 square metres. One acre is 43,560 sq ft, about 4,047 square metres. Working through two or three of these in the converter is a good way to get a feel for the sizes before you compare listings in different units.'],
      },
    ],
    faqs: [
      { q: 'How many sq ft in a square metre?', a: 'About 10.7639.' },
      { q: 'How many square metres is 500 sq ft?', a: 'About 46.45 square metres.' },
      { q: 'Does it include Indian plot units?', a: 'Yes, the Indian land converter adds gaj, bigha, guntha and more, with a note that some vary by state.' },
    ],
    tools: ['area-converter', 'indian-land-converter', 'length-converter'],
    published: D,
    updated: D,
  },
  {
    slug: 'how-to-convert-litres-to-gallons-us-and-uk',
    title: 'How to convert litres to gallons (US vs UK)',
    description: 'Convert litres to US and UK gallons, and why miles per gallon differ between the two countries.',
    category: 'Units',
    intro:
      'To convert litres to US gallons, divide by 3.78541. To convert to UK (imperial) gallons, divide by 4.54609. So 10 litres is about 2.64 US gallons or 2.20 UK gallons. The Volume converter has both and also covers cups, pints and millilitres.',
    steps: [
      'Decide which gallon you need. US recipes and fuel prices use the US gallon; British ones use the imperial gallon.',
      'Divide litres by 3.78541 for US gallons, or by 4.54609 for UK gallons.',
      'For gallons to litres, multiply by the same numbers.',
      'Or open the Volume converter and pick Gallon (US) or Gallon (UK).',
    ],
    sections: [
      {
        heading: 'Why two gallons exist',
        paragraphs: [
          'The US gallon descends from the old wine gallon of 231 cubic inches. The UK gallon was defined in 1824 as the volume of ten pounds of water and is now fixed at exactly 4.54609 litres, about 20 percent bigger. The pint, quart and cup follow the same split, so a UK pint is larger than a US pint.',
        ],
      },
      {
        heading: 'Fuel economy',
        paragraphs: [
          'Because the gallons differ, miles per gallon do too. A car rated 30 mpg in the UK does about 25 mpg by US measure. If you compare fuel economy from two countries, convert to litres per 100 km instead, which is the same everywhere. Cooking cups used here are the US cup of about 236.6 ml.',
        ],
      },
      {
        heading: 'Cooking and fuel',
        paragraphs: ['A US pint is 473 ml but a UK pint is 568 ml, so a recipe from one country can go wrong in the other. For fuel, a 50 litre tank holds about 13.2 US gallons or about 11 UK gallons. When a recipe or a car manual does not say which gallon or pint it means, check the country it was written for.'],
      },
    ],
    faqs: [
      { q: 'How many litres are in a US gallon?', a: '3.78541 litres.' },
      { q: 'How many litres are in a UK gallon?', a: '4.54609 litres.' },
      { q: 'How many ml are in a cup?', a: 'About 236.6 ml for the US cup used here.' },
    ],
    tools: ['volume-converter', 'weight-converter', 'speed-converter'],
    published: D,
    updated: D,
  },
  {
    slug: 'how-to-convert-km-h-to-mph',
    title: 'How to convert km/h to mph (and knots)',
    description: 'Convert kilometres per hour to miles per hour, metres per second and knots, with a quick way to estimate.',
    category: 'Units',
    intro:
      'To convert km/h to mph, divide by 1.609344, or multiply by 0.621371. So 100 km/h is about 62.1 mph. The Speed converter also gives metres per second, feet per second, knots and Mach.',
    steps: [
      'Write the speed with its unit, for example 120 km/h.',
      'Multiply by 0.621371: 120 × 0.621371 = 74.6 mph.',
      'For mph to km/h, multiply by 1.609344: 60 mph is 96.6 km/h.',
      'Or use the Speed converter and choose the two units.',
    ],
    sections: [
      {
        heading: 'Quick estimates',
        paragraphs: [
          'To turn km/h into mph in your head, multiply by 0.6: 100 km/h is about 60 mph, a little low but good for judging a speed limit. To go the other way, multiply mph by 1.6, or halve it and add a bit more than half. Road signs in the UK and US use mph, and most other countries use km/h.',
        ],
      },
      {
        heading: 'Metres per second and knots',
        paragraphs: [
          'Divide km/h by 3.6 to get metres per second: 36 km/h is 10 m/s. A knot is one nautical mile per hour, which is exactly 1.852 km/h, so 20 knots is about 37 km/h. Ships and aircraft use knots, and weather reports sometimes give wind in them.',
        ],
      },
      {
        heading: 'Common speed limits',
        paragraphs: ['A 30 mph limit is about 48 km/h, and 50 km/h is about 31 mph. A 70 mph limit is about 113 km/h, while a 120 km/h motorway limit is about 75 mph and 130 km/h is about 81 mph. Knowing a few of these helps when you drive a hire car in another country and the dial shows only one unit.'],
      },
    ],
    faqs: [
      { q: 'What is 60 mph in km/h?', a: 'About 96.6 km/h.' },
      { q: 'What is 100 km/h in mph?', a: 'About 62.1 mph.' },
      { q: 'What is Mach 1?', a: 'About 340 m/s at sea level, which is what the converter uses. It changes with temperature and altitude.' },
    ],
    tools: ['speed-converter', 'length-converter', 'time-unit-converter'],
    published: D,
    updated: D,
  },
  {
    slug: 'how-to-convert-psi-to-bar-tyre-pressure',
    title: 'How to convert psi to bar for tyre pressure',
    description: 'Convert psi to bar, kPa and atmospheres, with typical car tyre pressures and a note on checking your own.',
    category: 'Units',
    intro:
      'To convert psi to bar, divide by 14.5038. So 32 psi is about 2.2 bar. To go back, multiply bar by 14.5038. The Pressure converter also handles pascals, kilopascals, atmospheres and mmHg.',
    steps: [
      'Write the pressure with its unit, for example 32 psi.',
      'Divide by 14.5038: 32 ÷ 14.5038 = 2.21 bar.',
      'For kPa, multiply psi by 6.895: 32 psi is about 220.6 kPa.',
      'Or open the Pressure converter and choose the two units.',
    ],
    sections: [
      {
        heading: 'Tyre pressures',
        paragraphs: [
          'Car tyres are commonly filled to about 30 to 35 psi, which is roughly 2.1 to 2.4 bar or 210 to 240 kPa. Always use the figure on the sticker in the driver\'s door frame or in the manual, because it depends on the car and the load. Pressures should be checked when the tyres are cold.',
        ],
      },
      {
        heading: 'How the units relate',
        paragraphs: [
          'One bar is 100,000 pascals, or 100 kPa, and is close to normal atmospheric pressure. One standard atmosphere is 101,325 pascals, about 1.013 bar or 14.7 psi. Weather and blood pressure use millimetres of mercury, where 760 mmHg is one standard atmosphere.',
        ],
      },
      {
        heading: 'Other places pressure shows up',
        paragraphs: ['Road bicycle tyres are commonly pumped to around 80 to 130 psi, which is roughly 5.5 to 9 bar, while mountain bikes use far less. Always check the maximum printed on the tyre sidewall. Spare tyres and some vans and loaded cars need different pressures from the usual car figure, so read the sticker for your vehicle.'],
      },
    ],
    faqs: [
      { q: 'How many psi is 2 bar?', a: 'About 29 psi.' },
      { q: 'Is bar or kPa more common on pumps?', a: 'It varies by country. Many garage pumps show psi, bar and kPa side by side.' },
      { q: 'Is gauge pressure different?', a: 'Tyre gauges show pressure above the air around you. The converter changes units only and does not add or remove atmospheric pressure.' },
    ],
    tools: ['pressure-converter', 'temperature-converter', 'energy-converter'],
    published: D,
    updated: D,
  },
  {
    slug: 'how-to-convert-calories-to-kilojoules',
    title: 'How to convert calories to kilojoules and kWh',
    description: 'Convert food calories (kcal) to kilojoules and electricity units, and learn why a Calorie is not a calorie.',
    category: 'Units',
    intro:
      'To convert kilocalories to kilojoules, multiply by 4.184. So 2,000 kcal is 8,368 kJ. The kcal figure on a food label is what people call a Calorie. The Energy converter also gives joules, watt-hours, kilowatt-hours and BTU.',
    steps: [
      'Find the energy on the label. Many labels give both kcal and kJ.',
      'Multiply kcal by 4.184 to get kJ: 250 kcal × 4.184 = 1,046 kJ.',
      'Divide kJ by 4.184 to get kcal.',
      'Or open the Energy converter and choose the two units.',
    ],
    sections: [
      {
        heading: 'Calorie versus kilocalorie',
        paragraphs: [
          'A small calorie is the energy to warm one gram of water by one degree Celsius, about 4.184 joules. Food energy is counted in kilocalories, 1,000 small calories, and written Calorie with a capital C or simply kcal. When a label says 250 calories, it means 250 kcal. The Energy converter lists both, so choose kcal for food.',
        ],
      },
      {
        heading: 'Electricity',
        paragraphs: [
          'A kilowatt-hour, the unit on an electricity bill, is exactly 3.6 million joules, or 3,600 kJ. That is about 860 kcal. A 1,000-watt heater running for an hour uses one kWh. BTU, common for air conditioners and heaters, is about 1,055 joules.',
        ],
      },
      {
        heading: 'Reading food labels',
        paragraphs: ['Labels may show energy per 100 grams and per serving, so compare the same basis. Many countries print both kJ and kcal, and the usual daily reference intake is about 2,000 kcal, which is roughly 8,400 kJ. If you are tracking food, stick to one unit so numbers from different packets add up properly.'],
      },
    ],
    faqs: [
      { q: 'How many kJ is 100 kcal?', a: '418.4 kJ.' },
      { q: 'How many kcal is 1 kWh?', a: 'About 860 kcal.' },
      { q: 'Is a kilojoule the same as a kilocalorie?', a: 'No. A kilocalorie is about 4.18 times larger than a kilojoule.' },
    ],
    tools: ['energy-converter', 'pressure-converter', 'weight-converter'],
    published: D,
    updated: D,
  },
  {
    slug: 'how-to-convert-avi-to-mp4',
    title: 'How to convert AVI to MP4',
    description: 'Make old AVI videos from cameras and downloads play on phones and TVs by converting them to MP4 in your browser.',
    category: 'Video',
    intro:
      'To convert AVI to MP4, drop the video into the AVI to MP4 converter and press Convert. AVI is a format from the 1990s that many phones, TVs and apps no longer open, while MP4 plays nearly everywhere.',
    steps: [
      'Open AVI to MP4 and drop your file onto the box.',
      'Press Convert. The first time, your browser downloads the converter engine (about 30 MB) and caches it.',
      'Wait for the progress bar to finish.',
      'Download the MP4 and check it plays on the device that rejected the AVI.',
    ],
    sections: [
      {
        heading: 'Why AVI causes trouble',
        paragraphs: [
          'AVI was introduced by Microsoft in the early 1990s. It is only a container, and the video inside can be one of many older codecs. Some AVI files play perfectly and others show a black screen or no sound on modern devices, because the codec inside is no longer supported. Converting rewrites the video in the standard H.264 and AAC combination used by MP4.',
        ],
      },
      {
        heading: 'Old camera clips',
        paragraphs: ['Older digital cameras, camcorders and screen recorders saved AVI. Those files are often large and low in resolution. After converting, try Compress video if you want a smaller file to send, and keep the original AVI as the master copy.'],
      },
      {
        heading: 'Subtitles and separate files',
        paragraphs: ['Some AVI downloads come with a separate subtitle file. Converting the video does not merge them, and the MP4 will not pick up the subtitles on its own. Keep the subtitle file in the same folder with the same name as the new MP4, which is what most desktop players look for.'],
      },
    ],
    faqs: [
      { q: 'Will it work on any AVI?', a: 'Most. A damaged file or an unusual codec may fail, and the page shows a clear message when it cannot read a file.' },
      { q: 'Will the picture quality improve?', a: 'No. Converting cannot add detail that the original did not have.' },
      { q: 'Is it uploaded?', a: 'No. It is converted in your browser tab.' },
    ],
    tools: ['avi-to-mp4', 'avi-to-webm', 'compress-video'],
    published: D,
    updated: D,
  },
  {
    slug: 'how-to-convert-mp3-to-wav',
    title: 'How to convert MP3 to WAV (and what it will not fix)',
    description: 'Turn MP3 files into WAV for editors, CD burning and hardware that wants uncompressed audio.',
    category: 'Audio',
    intro:
      'To convert MP3 to WAV, drop your MP3 files into the MP3 to WAV converter and press Convert. The WAV is about ten times bigger and does not sound better, but some editors, samplers and CD burning tools want WAV.',
    steps: [
      'Open MP3 to WAV and drop your files in.',
      'Press Convert. There are no quality settings, because WAV is uncompressed.',
      'Download the WAV, or a ZIP for several files.',
      'Use it in your editor or burning software.',
    ],
    sections: [
      {
        heading: 'What it can and cannot do',
        paragraphs: [
          'An MP3 has already lost detail to make it small, and that detail cannot be recovered. A WAV made from an MP3 sounds exactly like the MP3, only stored without compression. The point of converting is compatibility and editing, not quality.',
        ],
      },
      {
        heading: 'Why editors prefer WAV',
        paragraphs: [
          'Editing compressed audio repeatedly and saving it as MP3 each time adds more loss with every save. Working in WAV avoids that, and you encode to MP3 once at the end. WAV is also the format many audio-for-video tools, game engines and hardware samplers expect.',
          'A minute of stereo WAV is about 10 MB, so a long recording makes a very large file. We suggest keeping files under about 500 MB on a computer.',
        ],
      },
      {
        heading: 'Sample rate and bit depth',
        paragraphs: ['The WAV keeps the sample rate of the MP3, commonly 44.1 or 48 kHz, and is written as 16-bit sound, which is what CDs use. Higher settings such as 24-bit would not add anything, because the MP3 never contained that extra information. If your tool asks for a specific sample rate, resample it in the editor rather than guessing here.'],
      },
    ],
    faqs: [
      { q: 'Will my CD sound better from a WAV?', a: 'No. It will sound the same as the MP3, because the original detail is gone.' },
      { q: 'What WAV settings are used?', a: '16-bit PCM at the same sample rate as the MP3, the most widely accepted kind.' },
      { q: 'Is it uploaded?', a: 'No. It is converted inside your browser tab.' },
    ],
    tools: ['mp3-to-wav', 'wav-to-mp3', 'wav-to-flac'],
    published: D,
    updated: D,
  },
  {
    slug: 'how-to-convert-mp4-to-webm-for-websites',
    title: 'How to convert MP4 to WEBM for a website',
    description: 'Make small WEBM copies of MP4 videos for your own site, and when to keep the MP4 as well.',
    category: 'Video',
    intro:
      'To convert MP4 to WEBM, drop the video into the MP4 to WEBM converter and press Convert. WEBM is an open format built for the web that plays in every major browser and is usually small, which makes it handy for videos on your own site.',
    steps: [
      'Open MP4 to WEBM and drop your video in.',
      'Press Convert and wait for the progress bar. Video work is heavy, so keep clips short.',
      'Download the WEBM.',
      'On your page, list the WEBM and the original MP4 as two sources inside one video tag so every browser finds one it can play.',
    ],
    sections: [
      {
        heading: 'Why offer two formats',
        paragraphs: [
          'Chrome, Firefox and Edge play WEBM. Some Apple software and many devices play MP4 more reliably. A video tag can list both files and the browser picks the first one it supports, so offering both is the safest choice for a public site.',
        ],
      },
      {
        heading: 'What this converter makes',
        paragraphs: ['It writes WEBM with VP8 video and Vorbis audio, which every browser that supports WEBM can play. The encoder is chosen for speed, so files are fast to make rather than the smallest possible. For tiny files, shorten the clip or lower its size first with Compress video.'],
      },
      {
        heading: 'A simple embed',
        paragraphs: ['In your page, write a video tag with controls and two source tags, the WEBM first with type video/webm and the MP4 second with type video/mp4. Browsers use the first source they can play. Add the muted and playsinline attributes if the video should start by itself, since browsers only allow autoplay for muted video.'],
      },
    ],
    faqs: [
      { q: 'Is WEBM better than MP4?', a: 'Neither is better everywhere. WEBM is open and small; MP4 is accepted by far more apps and devices.' },
      { q: 'Does it keep the sound?', a: 'Yes, as Vorbis audio.' },
      { q: 'Is the video uploaded?', a: 'No. It is converted in your browser tab.' },
    ],
    tools: ['mp4-to-webm', 'webm-to-mp4', 'compress-video'],
    published: D,
    updated: D,
  },
  {
    slug: 'how-to-convert-json-to-xml-and-xml-to-json',
    title: 'How to convert JSON to XML and XML to JSON',
    description: 'Move data between JSON and XML for old systems and feeds, and what happens to attributes and lists.',
    category: 'Data & documents',
    intro:
      'To convert JSON to XML, paste the JSON into the JSON to XML converter. To go the other way, paste XML into XML to JSON. Keys become tags, arrays become repeated tags, and XML attributes appear as keys starting with @.',
    steps: [
      'Paste your JSON or XML, or drop the file in.',
      'Read the result on the right. Fix the input if an error message appears.',
      'Press Download or Copy.',
      'Check the structure in the system that will read it, especially lists and attributes.',
    ],
    sections: [
      {
        heading: 'Where the formats differ',
        paragraphs: [
          'XML has attributes and tag text; JSON has only keys and values. An XML tag like <book id="1">Quack</book> becomes an object with "@id" and "#text". A JSON array has no tag name of its own, so each item is written as a repeated tag. XML also needs exactly one root tag, so a JSON array on its own is wrapped in a root with item tags.',
        ],
      },
      {
        heading: 'Text stays text',
        paragraphs: ['When reading XML the converter keeps every value as text, so codes and zip codes with leading zeros are not damaged. If you need real numbers or true and false values, convert them in your own code after reading.'],
      },
      {
        heading: 'Names that cause trouble',
        paragraphs: ['XML tag names cannot contain spaces and cannot start with a digit, but JSON keys can. If a JSON key is something like "first name" or "2026", rename it to first_name or year2026 before converting, or the XML will be invalid. Going the other way, namespaces and processing instructions are kept as ordinary keys, so check unusual files by eye.'],
      },
    ],
    faqs: [
      { q: 'What about XML comments?', a: 'JSON has no comments, so they are dropped.' },
      { q: 'Are special characters escaped?', a: 'Yes. Characters such as & and < are escaped so the XML is valid.' },
      { q: 'Is the data uploaded?', a: 'No. It is converted in your browser tab.' },
    ],
    tools: ['json-to-xml', 'xml-to-json', 'json-to-yaml'],
    published: D,
    updated: D,
  },
  {
    slug: 'how-to-convert-html-to-markdown',
    title: 'How to convert HTML to Markdown',
    description: 'Turn a web page or HTML snippet into clean Markdown for notes, READMEs and documentation.',
    category: 'Data & documents',
    intro:
      'To convert HTML to Markdown, paste the HTML into the HTML to Markdown converter. Headings, paragraphs, lists, links, images, bold and code carry over, while styling and layout are dropped.',
    steps: [
      'Copy the HTML source of the part you want. The article is better than the whole page.',
      'Open HTML to Markdown and paste it into the left box.',
      'Read the Markdown on the right and tidy any odd spacing.',
      'Press Copy or Download .md and paste it into your notes or repository.',
    ],
    sections: [
      {
        heading: 'What is kept and what is lost',
        paragraphs: [
          'Markdown describes structure, not looks. Headings become hash marks, lists become dashes, links become [text](address) and emphasis becomes asterisks. Colours, fonts, columns, scripts and layout tables have no Markdown equivalent, so they are dropped. Complex tables may come out as plain text.',
        ],
      },
      {
        heading: 'Cleaning up a whole page',
        paragraphs: ['A full web page contains menus, adverts and footers, and those turn into noise. Copy only the article element, or delete the extra parts first. Check relative image and link addresses afterwards: they point to the original site, so they may need the full address to work elsewhere.'],
      },
      {
        heading: 'Code, links and images',
        paragraphs: ['Code blocks become fenced blocks with three backticks and inline code is wrapped in single backticks. Links keep their address and images keep their source. Nested lists are indented with spaces. Look over the result once, because unusual HTML such as inline styles on every element can leave stray text that you will want to delete.'],
      },
    ],
    faqs: [
      { q: 'Can I turn the Markdown back into HTML?', a: 'Yes, with Markdown to HTML.' },
      { q: 'Does it keep tables?', a: 'Simple structure is kept as text. Complex tables are not rebuilt as Markdown tables.' },
      { q: 'Is my HTML uploaded?', a: 'No. It is converted in your browser.' },
    ],
    tools: ['html-to-markdown', 'markdown-to-html', 'text-case-converter'],
    published: D,
    updated: D,
  },
];
