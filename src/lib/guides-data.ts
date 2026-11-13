import type { Guide } from './guides';

const D = '2026-11-13';

/** Data, units, numbers, text, time and picture how-to guides. */
export const DATA_GUIDES: readonly Guide[] = [
  {
    slug: 'how-to-convert-csv-to-json',
    title: 'How to convert CSV to JSON',
    description: 'Turn a CSV table into a JSON array in your browser, with the first row as keys and numbers kept as numbers.',
    category: 'Data & documents',
    intro:
      'To convert CSV to JSON, paste your CSV or drop the file into the CSV to JSON converter. The first row becomes the keys and every other row becomes an object, so a table of names and ages turns into a list of records.',
    steps: [
      'Make sure the first row of your CSV holds the column names.',
      'Open CSV to JSON and paste the text, or drop the file onto the box. Try the example first if you want to see the shape.',
      'Read the JSON that appears on the right as you type.',
      'Press Download .json, or Copy to paste it into your code or an API tool.',
    ],
    sections: [
      {
        heading: 'What the result looks like',
        paragraphs: [
          'A CSV with the columns name, age and city becomes an array of objects such as {"name": "Asha", "age": 29, "city": "Pune"}. Plain numbers and the words true and false become real JSON numbers and booleans. Values such as 01234 stay as text so leading zeros in codes and postcodes are not lost.',
        ],
      },
      {
        heading: 'Commas, quotes and other separators',
        paragraphs: [
          'Fields can be wrapped in double quotes when they contain a comma or a line break, and a quote inside a field is written as two quotes. The converter understands all of that. It also reads semicolon, tab and pipe separated files by looking at the first line, which matters for files exported from spreadsheets in countries that use a decimal comma.',
        ],
      },
    ],
    faqs: [
      { q: 'What if a column has no heading?', a: 'It is named column1, column2 and so on, so no data is dropped.' },
      { q: 'Can I go back to CSV?', a: 'Yes, with JSON to CSV, which turns an array of objects into rows.' },
      { q: 'Is my data uploaded?', a: 'No. The conversion happens in your browser as you type.' },
    ],
    tools: ['csv-to-json', 'json-to-csv', 'csv-to-excel'],
    published: D,
    updated: D,
  },
  {
    slug: 'how-to-convert-json-to-csv',
    title: 'How to convert JSON to CSV for Excel',
    description: 'Flatten a JSON array into a CSV table you can open in Excel or Google Sheets, including nested objects.',
    category: 'Data & documents',
    intro:
      'To convert JSON to CSV, paste an array of objects into the JSON to CSV converter. Each object becomes a row and each key becomes a column, and nested objects are flattened into dotted column names like address.city.',
    steps: [
      'Check your JSON is an array of objects, such as [{"a":1},{"a":2}]. A single object also works and gives one row.',
      'Open JSON to CSV and paste the JSON or drop the .json file in.',
      'Look at the CSV on the right. Columns are collected from every object.',
      'Download the .csv and open it in Excel, or use CSV to Excel for a proper spreadsheet.',
    ],
    sections: [
      {
        heading: 'Nested data and missing keys',
        paragraphs: [
          'JSON can nest objects inside objects, but a table has only rows and columns. The converter flattens each nested key into a column named with a dot, so {"address": {"city": "Pune"}} becomes a column called address.city. Lists inside a value are kept as JSON text in a single cell.',
          'If objects have different keys, every key found anywhere becomes a column, and the cells with no value are left empty.',
        ],
      },
      {
        heading: 'Opening the result in Excel',
        paragraphs: ['Excel can misread plain CSV, dropping leading zeros or changing long numbers. For a spreadsheet you will keep working in, convert the CSV on to XLSX with the CSV to Excel converter, which keeps codes as text.'],
      },
    ],
    faqs: [
      { q: 'What if my JSON is invalid?', a: 'The page shows an error message instead of a result. Check for missing quotes or commas.' },
      { q: 'Can I convert a huge file?', a: 'Large files work but take longer, because your browser does the work. Files of a few megabytes are fine.' },
      { q: 'Is it uploaded?', a: 'No. Everything runs on your device.' },
    ],
    tools: ['json-to-csv', 'csv-to-excel', 'csv-to-json'],
    published: D,
    updated: D,
  },
  {
    slug: 'how-to-save-an-excel-sheet-as-csv-with-accents',
    title: 'How to save Excel as CSV and keep accents correct',
    description: 'Convert an Excel sheet to CSV and keep accents, Turkish letters and symbols right with a UTF-8 marker.',
    category: 'Data & documents',
    intro:
      'To convert Excel to CSV, drop your .xlsx file into the Excel to CSV converter and keep the UTF-8 marker ticked. Each sheet becomes its own CSV, and the marker tells Excel the file is UTF-8 so accents and non-English letters stay correct.',
    steps: [
      'Open Excel to CSV and drop your .xlsx, .xls or .ods file in.',
      'Keep the box ticked to add a UTF-8 marker if you will open the CSV in Excel again. Untick it for databases and scripts that dislike the marker.',
      'Press Convert.',
      'Download the CSV. A workbook with several sheets gives one CSV per sheet, named after the sheet.',
    ],
    sections: [
      {
        heading: 'Why accents break',
        paragraphs: [
          'CSV is plain text, and text can be stored in different encodings. Excel guesses when you open a CSV. If the file is UTF-8 but Excel assumes an older Windows encoding, letters like é, ü, ş or ı appear as strange characters. A tiny marker at the start of the file removes the guess.',
        ],
      },
      {
        heading: 'What CSV leaves out',
        paragraphs: [
          'CSV holds values only: no formulas, colours, charts or formatting. You get the values the sheet shows, with dates and numbers written the way Excel displays them. Password-protected workbooks cannot be opened. If you need the formatting, keep the XLSX.',
        ],
      },
    ],
    faqs: [
      { q: 'Which separator is used?', a: 'A comma, with quotes around any value that contains a comma, a quote or a line break.' },
      { q: 'My CSV still shows wrong letters. What now?', a: 'The file may be in another encoding. Use the TXT encoding fixer to read it with the right one and save a clean UTF-8 copy.' },
      { q: 'Is the workbook uploaded?', a: 'No. It is read and converted inside your browser tab.' },
    ],
    tools: ['excel-to-csv', 'csv-to-excel', 'text-encoding-fixer'],
    published: D,
    updated: D,
  },
  {
    slug: 'how-to-convert-yaml-to-json-and-back',
    title: 'How to convert YAML to JSON and back',
    description: 'Move config between YAML and JSON in your browser, and avoid the usual indentation and comment pitfalls.',
    category: 'Data & documents',
    intro:
      'To convert YAML to JSON, paste the YAML into the YAML to JSON converter and copy the pretty-printed JSON. For the other direction, paste JSON into JSON to YAML. The data stays the same; only the writing style changes.',
    steps: [
      'Paste your YAML into the YAML to JSON converter, or drop a .yaml or .yml file in.',
      'If you see an error, check the indentation. YAML uses spaces, never tabs, to show nesting.',
      'Copy or download the JSON.',
      'For the reverse, paste JSON into JSON to YAML to get readable two-space YAML.',
    ],
    sections: [
      {
        heading: 'What gets lost',
        paragraphs: [
          'Comments exist in YAML but not in JSON, so they are dropped when you convert to JSON and cannot be brought back. Anchors and aliases (the &name and *name shortcuts) are expanded into plain repeated values.',
          'The converter reads one YAML document. If a file has several documents separated by three dashes, convert each one on its own.',
        ],
      },
      {
        heading: 'Why people switch formats',
        paragraphs: ['YAML is easier to read and edit by hand, which is why configuration files use it. JSON is stricter and is what APIs and most programming languages parse natively. Converting lets you check a config in a JSON tool or turn an API response into a readable file.'],
      },
      {
        heading: 'Checking the result',
        paragraphs: ['After converting, look at values that YAML may read as numbers. An unquoted version like 1.10 is read as the number 1.1, and a code such as 08 may lose its zero, so wrap version strings and codes in quotes in the YAML. The converter shows exactly what a YAML parser sees, which makes it a quick way to find that kind of surprise before it reaches a real system.'],
      },
    ],
    faqs: [
      { q: 'Why does my YAML give an error?', a: 'The most common cause is a tab used for indentation, or inconsistent indentation. Use spaces and keep nested items aligned.' },
      { q: 'Will numbers and booleans be typed correctly?', a: 'Yes. Values such as 42, 3.5, true and null become real JSON types.' },
      { q: 'Is anything uploaded?', a: 'No. The conversion runs in your browser tab.' },
    ],
    tools: ['yaml-to-json', 'json-to-yaml', 'json-to-xml'],
    published: D,
    updated: D,
  },
  {
    slug: 'how-to-convert-markdown-to-html',
    title: 'How to convert Markdown to HTML',
    description: 'Turn Markdown notes and README text into clean HTML you can paste into a web page or a CMS.',
    category: 'Data & documents',
    intro:
      'To convert Markdown to HTML, paste your Markdown into the Markdown to HTML converter. You get the HTML for headings, paragraphs, lists, links, tables and code, ready to paste into a page or a content system.',
    steps: [
      'Write or paste your Markdown, or press Try an example to see the pieces.',
      'Open Markdown to HTML and paste it into the left box.',
      'Read the HTML on the right. It is the content only, with no html or body tags.',
      'Copy it or download it, and place it inside your own page template.',
    ],
    sections: [
      {
        heading: 'What is supported',
        paragraphs: [
          'Standard Markdown (headings with #, bold with **, lists, links, images, blockquotes and code blocks) plus the common GitHub extras: tables, task lists and strikethrough. Raw HTML inside the Markdown passes through unchanged.',
        ],
      },
      {
        heading: 'A safety note',
        paragraphs: [
          'The output is a plain conversion. If the Markdown came from someone else, it could contain scripts hidden as raw HTML. Run the result through your own HTML sanitiser before publishing it on a site where other people\'s content appears.',
        ],
      },
      {
        heading: 'Common Markdown mistakes',
        paragraphs: ['A list needs a blank line before it, and paragraphs are separated by blank lines. A heading needs a space after the hash marks, so write # Title and not #Title. To force a line break inside a paragraph, end the line with two spaces. A table needs a header row followed by a separator row of dashes. If the HTML looks wrong, the cause is almost always one of these.'],
      },
    ],
    faqs: [
      { q: 'Can I go back from HTML to Markdown?', a: 'Yes, with HTML to Markdown. Styling and layout are lost, but headings, lists, links and bold text carry over.' },
      { q: 'Does it add styles?', a: 'No. You get unstyled HTML that picks up the styles of the page you place it in.' },
      { q: 'Is my text uploaded?', a: 'No. It is converted in your browser tab.' },
    ],
    tools: ['markdown-to-html', 'html-to-markdown', 'text-case-converter'],
    published: D,
    updated: D,
  },
  {
    slug: 'how-to-fix-garbled-text-and-wrong-encoding',
    title: 'How to fix garbled text and wrong encoding',
    description: 'Repair text files that show strange characters like Ã© by choosing the right encoding and saving clean UTF-8.',
    category: 'Data & documents',
    intro:
      'To fix a garbled text file, drop it into the TXT encoding fixer, choose the encoding it was written in (try Windows-1252 first), check the preview and download the UTF-8 copy. Garbled text means the file was read with the wrong encoding.',
    steps: [
      'Open the TXT encoding fixer and drop your file in.',
      'Look at the preview. If accents look like Ã© or é, the file is probably Windows-1252.',
      'Pick another encoding from the list until the preview reads correctly. Windows-1251 covers Cyrillic; Shift_JIS, GBK and Big5 cover Japanese and Chinese.',
      'Press Convert and download the UTF-8 copy. Your original stays untouched.',
    ],
    sections: [
      {
        heading: 'What is going on',
        paragraphs: [
          'A text file is just numbers. An encoding is the table that says which letter each number means. UTF-8 can write every language, while older tables such as Windows-1252 cover one region. If a file is written with one table and read with another, characters turn into nonsense such as Ã© instead of é.',
        ],
      },
      {
        heading: 'Why UTF-8 is the one to keep',
        paragraphs: ['UTF-8 is understood by nearly every program, website and database today. Saving your text in UTF-8 means it opens the same way everywhere. If a CSV still looks wrong in Excel after fixing, convert it with CSV to Excel, which reads UTF-8 correctly.'],
      },
    ],
    faqs: [
      { q: 'How do I know which encoding to pick?', a: 'Try the likely ones and watch the preview. The right one makes every letter readable. Look at where the file came from: old Windows exports are often Windows-1252.' },
      { q: 'Why do I see question marks or boxes?', a: 'Those characters were already lost before you opened the file. Choosing another encoding cannot bring back what was replaced.' },
      { q: 'Is my file uploaded?', a: 'No. It is read and converted inside your browser.' },
    ],
    tools: ['text-encoding-fixer', 'csv-to-excel', 'excel-to-csv'],
    published: D,
    updated: D,
  },
  {
    slug: 'how-to-convert-celsius-to-fahrenheit',
    title: 'How to convert Celsius to Fahrenheit (and back)',
    description: 'The formula, a quick mental shortcut and a converter for Celsius, Fahrenheit and Kelvin.',
    category: 'Units',
    intro:
      'To convert Celsius to Fahrenheit, multiply by 9, divide by 5 and add 32. So 100 °C is 212 °F and 0 °C is 32 °F. To go back, subtract 32, multiply by 5 and divide by 9.',
    steps: [
      'Write down the temperature with its unit, for example 25 °C.',
      'Multiply by 9: 25 × 9 = 225.',
      'Divide by 5: 225 ÷ 5 = 45.',
      'Add 32: 45 + 32 = 77 °F.',
      'Or open the Temperature converter, type 25, choose Celsius to Fahrenheit and read the answer.',
    ],
    sections: [
      {
        heading: 'A mental shortcut',
        paragraphs: [
          'For a rough answer, double the Celsius number and add 30. That gives 80 for 25 °C, close to the true 77. It works best between 0 and 30 °C and drifts further off in extremes. For cooking, medicine and science, use the exact formula.',
        ],
      },
      {
        heading: 'Why you cannot just multiply',
        paragraphs: [
          'Most unit conversions are a single multiplication. Temperature scales start at different zero points: 0 °C is 32 °F. That is why the formula has an add-or-subtract step, and why doubling a Celsius temperature does not double the Fahrenheit one.',
          'Kelvin uses the same size of degree as Celsius but starts at absolute zero: add 273.15 to a Celsius value to get Kelvin. The two scales cross at -40, where Celsius and Fahrenheit are equal.',
        ],
      },
    ],
    faqs: [
      { q: 'What is 37 °C in Fahrenheit?', a: 'About 98.6 °F, normal human body temperature.' },
      { q: 'What oven temperature is 180 °C?', a: '356 °F, usually rounded to 350 °F in recipes.' },
      { q: 'How do I convert Fahrenheit to Celsius?', a: 'Subtract 32, multiply by 5, divide by 9. 212 °F gives 100 °C.' },
    ],
    tools: ['temperature-converter', 'length-converter', 'weight-converter'],
    published: D,
    updated: D,
  },
  {
    slug: 'how-to-convert-bigha-gaj-and-acre-to-square-feet',
    title: 'How to convert bigha, gaj and acre to square feet',
    description: 'Convert Indian land units to square feet, with the figures that stay fixed and the ones that change by state.',
    category: 'Units',
    intro:
      'To convert Indian land units, open the Indian land converter, type the number and choose the unit. A gaj is 9 square feet and an acre is 43,560 square feet, but a bigha differs by state, so always check the local record before buying or selling.',
    steps: [
      'Decide which unit your document uses. If it says bigha, note the state, because the size changes.',
      'Open the Indian land converter and type the area.',
      'Choose the unit you have under From and square feet (or acre) under To.',
      'Read the answer and the note about the state. Check it against your revenue record.',
    ],
    sections: [
      {
        heading: 'Fixed units',
        paragraphs: [
          'A gaj is a square yard, which is 9 square feet. An acre is 43,560 square feet, or about 4,047 square metres. A hectare is 10,000 square metres, about 2.47 acres or roughly 107,639 square feet. These are the same everywhere.',
        ],
      },
      {
        heading: 'Units that change by state',
        paragraphs: [
          'A bigha is not one size. It is about 27,000 square feet in Uttar Pradesh, about 17,400 in Gujarat and 14,400 in West Bengal and Assam, and it can differ by district and by whether the local custom is the pucca or kachha bigha. Biswa, katha, guntha and cent also vary by region.',
          'Because of this, treat any conversion of a local unit as an estimate and use the figure in the official revenue document for anything legal.',
        ],
      },
    ],
    faqs: [
      { q: 'How many square feet are in a bigha?', a: 'It depends on the state, from about 14,400 to about 27,000 square feet in the places listed here. Use the converter and its note, then confirm locally.' },
      { q: 'How many gaj are in an acre?', a: '4,840 gaj, since an acre is 43,560 square feet and a gaj is 9.' },
      { q: 'Is this safe for legal use?', a: 'No. It is a calculator for estimates. Property documents must use the figures in the official record.' },
    ],
    tools: ['indian-land-converter', 'area-converter', 'length-converter'],
    published: D,
    updated: D,
  },
  {
    slug: 'how-many-mb-in-a-gb',
    title: 'How many MB are in a GB? 1000 or 1024 explained',
    description: 'Why a gigabyte is 1000 MB on a phone plan but 1024 MiB in some systems, and how to convert KB, MB, GB and TB.',
    category: 'Units',
    intro:
      'A gigabyte is 1,000 megabytes in the decimal (SI) system used by drive makers and phone plans, and a gibibyte is 1,024 mebibytes in the binary system some operating systems use. To convert, pick the right system and multiply or divide by 1,000 or 1,024.',
    steps: [
      'Decide which system you need. Storage sold in shops, network speeds and data plans use 1,000.',
      'Open the Data size converter and type the amount.',
      'Choose KB, MB, GB or TB for the 1,000 system, or KiB, MiB, GiB and TiB for the 1,024 system.',
      'Read the result in the unit you want.',
    ],
    sections: [
      {
        heading: 'Where the two systems come from',
        paragraphs: [
          'Computers work in powers of two, and 1,024 (2 to the power of 10) is close to 1,000. Early software used KB for 1,024 bytes, while hardware makers used the metric 1,000. To end the confusion, the names KiB, MiB and GiB were created for 1,024-based units. In everyday use both still appear under the plain name.',
        ],
      },
      {
        heading: 'Why a drive shows less space',
        paragraphs: [
          'A drive sold as 1 TB holds 1,000,000,000,000 bytes. A system that shows sizes in 1,024-based units reports that as about 931 GiB, so the number looks smaller even though nothing is missing. The same effect makes a 128 GB phone show a little less than 128 in some menus.',
        ],
      },
    ],
    faqs: [
      { q: 'Which is right, 1,000 or 1,024?', a: 'Both are right in their own system. KB, MB and GB are officially 1,000-based; KiB, MiB and GiB are 1,024-based.' },
      { q: 'How many MB is 1 GB on my data plan?', a: 'Plans use 1,000, so 1 GB is 1,000 MB. Check your provider if the exact figure matters.' },
      { q: 'How many bytes are in a megabyte?', a: '1,000,000 in the decimal system and 1,048,576 in a mebibyte.' },
    ],
    tools: ['data-size-converter', 'compress-video', 'length-converter'],
    published: D,
    updated: D,
  },
  {
    slug: 'how-to-write-an-amount-in-words-for-a-cheque',
    title: 'How to write an amount in words for a cheque',
    description: 'Write rupee and dollar amounts in words the way cheques and invoices expect, with lakh and crore or million and billion.',
    category: 'Numbers & text',
    intro:
      'To write an amount in words for a cheque, open the Number to words converter, type the amount, choose Indian or international style and pick rupees and paise or dollars and cents. 1250.50 becomes "Rupees One Thousand Two Hundred Fifty and Paise Fifty Only".',
    steps: [
      'Type the amount in figures. Commas are fine, and decimals give paise or cents.',
      'Choose Indian style (thousand, lakh, crore) or international style (thousand, million, billion).',
      'Under Write as, pick rupees and paise or dollars and cents.',
      'Copy the words and compare them with the figures before you write the cheque.',
    ],
    sections: [
      {
        heading: 'Indian and international styles',
        paragraphs: [
          'In the Indian system, 1,00,000 is one lakh and 1,00,00,000 is one crore. In the international system, 1,000,000 is one million and 1,000,000,000 is one billion. The same figure is spelled differently: 12,50,000 is twelve lakh fifty thousand in Indian style and one million two hundred fifty thousand in international style.',
        ],
      },
      {
        heading: 'Why "Only" at the end',
        paragraphs: [
          'Cheques end the words with "Only" so nothing can be added afterwards. Banks also expect the words and the figures to match. If they differ, the bank can refuse the cheque or follow the words. Always check the result against your bank\'s own rules before signing.',
        ],
      },
      {
        heading: 'Filling in the cheque',
        paragraphs: ['Write the words starting at the very left of the line, and draw a line through any unused space after "Only" so nothing can be added. Make sure the words and the figures match exactly. If you make a mistake, ask your bank how to correct or cancel the cheque, because overwriting can get it rejected. This tool helps with the spelling, but the bank\'s rules always apply.'],
      },
    ],
    faqs: [
      { q: 'Does it handle paise and cents?', a: 'Yes. The two digits after the point become paise or cents, written after "and".' },
      { q: 'How big a number can it write?', a: 'International style goes to sextillions and Indian style keeps counting in crores, so any real amount works.' },
      { q: 'Is the amount sent anywhere?', a: 'No. The words are made in your browser as you type.' },
    ],
    tools: ['number-to-words', 'number-base-converter', 'roman-numeral-converter'],
    published: D,
    updated: D,
  },
  {
    slug: 'how-to-convert-binary-hex-and-decimal',
    title: 'How to convert binary, hex and decimal',
    description: 'Convert between binary, octal, decimal and hexadecimal by hand and with a converter, with worked examples.',
    category: 'Numbers & text',
    intro:
      'To convert between number bases, type your number into any box of the Number bases converter and read the others. By hand, binary 1010 is 10 in decimal and hex FF is 255. Hex is just a shorter way to write binary, four bits at a time.',
    steps: [
      'Open the Number bases converter.',
      'Click the box for the base you have (binary, octal, decimal or hex) and type the number.',
      'Read the other three boxes, which update straight away.',
      'Press Copy next to the one you need.',
    ],
    sections: [
      {
        heading: 'How binary to decimal works',
        paragraphs: [
          'Each binary place is a power of two, from the right: 1, 2, 4, 8, 16 and so on. For 1010, add the places that hold a 1: 8 + 2 = 10. A byte is eight bits, so it goes up to 11111111, which is 255.',
        ],
      },
      {
        heading: 'Why programmers use hex',
        paragraphs: [
          'Hexadecimal has 16 digits, 0 to 9 and A to F. One hex digit is exactly four bits, so a byte is always two hex digits: FF is 11111111, which is 255. That makes hex a compact way to write binary data, memory addresses and colour codes. A prefix of 0x marks a hex number in many programming languages.',
          'The converter uses exact whole-number maths, so very long numbers convert without rounding.',
        ],
      },
      {
        heading: 'Practice examples',
        paragraphs: ['Binary 1111 is 15, and 101010 is 42. Hex 1A is 26, and decimal 255 is FF in hex and 11111111 in binary. Octal is rarely used now, but Unix file permissions are written in it: octal 755 is 493 in decimal, and each octal digit is exactly three bits, so 7 is 111 and 5 is 101. Try each of these in the converter to see the other boxes fill in.'],
      },
    ],
    faqs: [
      { q: 'Can it convert negative numbers?', a: 'Yes, with a minus sign. It does not show two\'s complement bit patterns.' },
      { q: 'Does it accept 0x or 0b prefixes?', a: 'Yes. 0xFF in the hex box is read as 255.' },
      { q: 'Does it handle fractions?', a: 'No. It is for whole numbers.' },
    ],
    tools: ['number-base-converter', 'color-code-converter', 'roman-numeral-converter'],
    published: D,
    updated: D,
  },
  {
    slug: 'how-to-read-and-write-roman-numerals',
    title: 'How to read and write Roman numerals',
    description: 'Learn the seven Roman numeral letters, the subtraction rule and the 3999 limit, and convert numbers both ways.',
    category: 'Numbers & text',
    intro:
      'To write a number in Roman numerals, break it into thousands, hundreds, tens and ones and write each with I, V, X, L, C, D and M. 1994 is MCMXCIV. The Roman numeral converter does it both ways, for numbers from 1 to 3999.',
    steps: [
      'Learn the seven letters: I is 1, V is 5, X is 10, L is 50, C is 100, D is 500 and M is 1000.',
      'Split the number: 1994 is 1000 + 900 + 90 + 4.',
      'Write each part: M, CM, XC and IV.',
      'Join them: MCMXCIV. Or type the number into the converter and copy the result.',
    ],
    sections: [
      {
        heading: 'The subtraction rule',
        paragraphs: [
          'A smaller letter before a larger one is subtracted: IV is 4, IX is 9, XL is 40, XC is 90, CD is 400 and CM is 900. A smaller letter after a larger one is added: VI is 6. A letter is repeated at most three times in a row, so 4 is IV and not IIII.',
        ],
      },
      {
        heading: 'Limits and quirks',
        paragraphs: [
          'Standard Roman numerals have no zero and no symbol above M, so the biggest number is MMMCMXCIX, which is 3999. Clock faces often print 4 as IIII, but this converter accepts only the standard form so it can catch typing mistakes. Roman numerals are still used for film years, book chapters, kings and queens and some building dates.',
        ],
      },
    ],
    faqs: [
      { q: 'How do I read MCMXCIV?', a: 'M is 1000, CM is 900, XC is 90 and IV is 4, so 1994.' },
      { q: 'Why is there no zero?', a: 'The Romans had no symbol for zero, so the converter starts at 1.' },
      { q: 'Does it work on a phone?', a: 'Yes, and it runs entirely in your browser.' },
    ],
    tools: ['roman-numeral-converter', 'number-to-words', 'number-base-converter'],
    published: D,
    updated: D,
  },
  {
    slug: 'how-to-change-text-case-camel-snake-title',
    title: 'How to change text case: camel, snake and Title Case',
    description: 'Change text between upper, lower, Title, sentence, camelCase, snake_case and kebab-case in one click.',
    category: 'Numbers & text',
    intro:
      'To change text case, paste your text into the Text case converter and press the case you want: upper, lower, Title, sentence, camelCase, PascalCase, snake_case, kebab-case or CONSTANT_CASE. Copy the result with one click.',
    steps: [
      'Open the Text case converter and paste your text.',
      'Press the case button you need. The result appears below.',
      'Check it. Title Case is mechanical and will capitalise small words too.',
      'Press Copy and paste it where you need it.',
    ],
    sections: [
      {
        heading: 'Cases for writing',
        paragraphs: [
          'UPPER CASE is for emphasis or acronyms, and lower case for clean, informal text. Title Case capitalises the first letter of every word, as in a book title. Sentence case capitalises only the first word of each sentence, as in normal writing, and is easier to read for long headings.',
        ],
      },
      {
        heading: 'Cases for code and URLs',
        paragraphs: [
          'Programmers join words without spaces. camelCase (helloWorld) is common for variables, PascalCase (HelloWorld) for class names, snake_case (hello_world) in Python and databases, kebab-case (hello-world) in web addresses and file names, and CONSTANT_CASE for fixed values. The converter splits words on spaces, punctuation and capital letters, so it can change one style into another.',
        ],
      },
    ],
    faqs: [
      { q: 'Does it follow style-guide rules for titles?', a: 'No. Title Case here capitalises every word. Style guides leave small words like "of" and "the" lowercase, so adjust those by hand if you need to.' },
      { q: 'Does it work with accents?', a: 'Yes for letters with an upper and lower case, such as é, ü and Cyrillic. Turkish dotted and dotless i follow standard rules and may need a manual fix.' },
      { q: 'Is my text sent anywhere?', a: 'No. It is changed in your browser as you type.' },
    ],
    tools: ['text-case-converter', 'markdown-to-html', 'number-to-words'],
    published: D,
    updated: D,
  },
  {
    slug: 'how-to-convert-hex-to-rgb-and-hsl',
    title: 'How to convert HEX colours to RGB and HSL',
    description: 'Convert colour codes between HEX, RGB and HSL for CSS and design work, with a live swatch.',
    category: 'Numbers & text',
    intro:
      'To convert a colour code, type a HEX, RGB or HSL value into the Colour codes converter. The other two update and you see the colour. #FFD23F is rgb(255, 210, 63), and hsl(45, 100%, 62%) is the same colour.',
    steps: [
      'Open the Colour codes converter.',
      'Type a HEX code in the first box, with or without the #, or use the colour picker.',
      'Read the RGB and HSL values and look at the swatch to check it.',
      'Press Copy next to the code your CSS or design tool needs.',
    ],
    sections: [
      {
        heading: 'How HEX and RGB relate',
        paragraphs: [
          'A HEX code is three pairs of base-16 digits for red, green and blue. #FFD23F is FF (255) red, D2 (210) green and 3F (63) blue. RGB writes the same three numbers in decimal. A three-digit code such as #F80 is shorthand that doubles each digit, so it equals #FF8800.',
        ],
      },
      {
        heading: 'When HSL helps',
        paragraphs: [
          'HSL describes a colour by hue (position on the colour wheel from 0 to 360), saturation (how vivid) and lightness (how light or dark). That makes it easy to make a lighter or darker version of a brand colour by changing only the lightness, which is awkward in HEX. Round trips through HSL can shift a value by one because HSL is rounded to whole numbers; HEX and RGB stay exact.',
        ],
      },
    ],
    faqs: [
      { q: 'What does 8-digit HEX mean?', a: 'It adds an alpha (transparency) pair at the end. This converter handles six-digit and three-digit codes.' },
      { q: 'How do I make a colour darker?', a: 'Lower the lightness in HSL, then copy the matching HEX or RGB.' },
      { q: 'Is anything uploaded?', a: 'No. It is all calculated in your browser.' },
    ],
    tools: ['color-code-converter', 'number-base-converter', 'text-case-converter'],
    published: D,
    updated: D,
  },
  {
    slug: 'how-to-convert-time-zones-for-a-meeting',
    title: 'How to convert time zones for a meeting (IST, EST, GMT)',
    description: 'Find the right meeting time across India, the US, the UK and more, and avoid the daylight saving trap.',
    category: 'Time & money',
    intro:
      'To convert a meeting time, pick the date, the time and your starting zone in the Time zone converter, then add the cities you want. It handles daylight saving for the exact date. India (IST) is UTC+05:30 all year and never changes its clocks.',
    steps: [
      'Open the Time zone converter and pick the meeting date.',
      'Type the time and choose the zone it is written in, for example India (Kolkata).',
      'Add the cities of the other people. Each row shows its local time and date.',
      'Look for "next day" or "previous day" labels, then share the times with everyone.',
    ],
    sections: [
      {
        heading: 'The daylight saving trap',
        paragraphs: [
          'The gap between two places can change during the year. The United States moves its clocks on different dates from the United Kingdom and Europe, so for a few weeks in spring and autumn the gap between New York and London is an hour different from the rest of the year. India and many other countries do not change clocks at all, so the gap to them changes whenever the other side does.',
          'Always convert for the exact date of the meeting, not for today. The converter does this using your browser\'s built-in time zone data.',
        ],
      },
      {
        heading: 'Date lines and late meetings',
        paragraphs: ['A late evening in India is the same morning or night in the United States, and early morning in Japan is the previous evening in India. When the date differs, it is easy to book the wrong day, so check the date column and write the full date in the invitation.'],
      },
    ],
    faqs: [
      { q: 'What is IST in New York time?', a: 'India is 10 hours 30 minutes ahead of New York in winter (EST) and 9 hours 30 minutes ahead in summer (EDT), because India does not change its clocks. The converter shows the exact figure for your date.' },
      { q: 'Does it use my location?', a: 'Only to pick a starting zone. Your browser supplies its time zone and nothing is sent anywhere.' },
      { q: 'What if my city is not listed?', a: 'Choose a city in the same time zone.' },
    ],
    tools: ['time-zone-converter', 'date-format-converter', 'time-unit-converter'],
    published: D,
    updated: D,
  },
  {
    slug: 'how-to-write-dates-without-confusion',
    title: 'How to write dates without confusion: DD/MM vs MM/DD',
    description: 'Why 04/03/2026 means different dates in India and the US, and how to write dates so nobody misreads them.',
    category: 'Time & money',
    intro:
      'To write a date without confusion, use the ISO format 2026-03-04 or spell out the month, for example 4 March 2026. The numeric date 04/03/2026 means 4 March in India and the UK but 3 April in the United States.',
    steps: [
      'Decide who will read the date. If they may use a different order, avoid the all-numbers form.',
      'Use ISO 8601 (YYYY-MM-DD) for forms, file names and data. It sorts in date order.',
      'Or write the month as a word: 4 March 2026 or March 4, 2026.',
      'Use the Date format converter to see one date in every common format and copy the one you need.',
    ],
    sections: [
      {
        heading: 'Three orders in use',
        paragraphs: [
          'Day-month-year (DD/MM/YYYY) is used in India, the United Kingdom and most of the world. Month-day-year (MM/DD/YYYY) is used in the United States. Year-month-day (YYYY/MM/DD) is used in Japan, China and Korea, and is the basis of ISO 8601. Dates where the day is 13 or higher are unambiguous, but 04/03 and 05/06 are not.',
        ],
      },
      {
        heading: 'Why ISO 8601 is safer',
        paragraphs: [
          'ISO 8601 writes the largest unit first, so 2026-03-04 can only be read one way, and a list of ISO dates sorts correctly as plain text. Databases, programmers and international forms prefer it. For friendly writing, a spelled-out month removes any doubt for human readers.',
        ],
      },
    ],
    faqs: [
      { q: 'How do I enter a date the converter reads correctly?', a: 'Type it and tell the converter whether it is day first, month first or year first. It then shows every other format.' },
      { q: 'Does it accept two-digit years?', a: 'Yes. A two-digit year such as 26 is read as 2026.' },
      { q: 'Why does it say my date is not real?', a: 'Either the day does not exist (31 February) or the order is wrong (a month of 25).' },
    ],
    tools: ['date-format-converter', 'time-zone-converter', 'time-unit-converter'],
    published: D,
    updated: D,
  },
  {
    slug: 'how-to-convert-tiff-to-jpg',
    title: 'How to convert TIFF to JPG',
    description: 'Turn TIFF scans and photos into small JPG files that open everywhere, including multi-page TIFFs.',
    category: 'Images',
    intro:
      'To convert TIFF to JPG, drop your TIFF files into the converter, choose a quality (90 is a good default) and press Convert. Each page of a multi-page TIFF becomes its own JPG, and you can download them all as a ZIP.',
    steps: [
      'Open TIFF to JPG and drop your .tif or .tiff files in.',
      'Choose a quality. 90 keeps most detail; lower values make smaller files.',
      'Press Convert.',
      'Download the JPG, or a ZIP if there are several pages or files.',
    ],
    sections: [
      {
        heading: 'Why people convert TIFF',
        paragraphs: [
          'TIFF is a high-quality format used by scanners, fax software and professional photography. Files are large, and most web browsers (apart from Safari), email clients and forms cannot show or accept them. JPG is much smaller and works nearly everywhere.',
        ],
      },
      {
        heading: 'What to expect',
        paragraphs: [
          'JPG is lossy, so a little detail is traded for a far smaller file. At quality 90 or higher it is hard to see. JPG has no transparency, so any see-through areas become white. Rare TIFF variants, such as some 16-bit or CMYK files, may fail to open; the page shows a message when that happens. Keep the TIFF if you may print or edit the picture later.',
        ],
      },
      {
        heading: 'Scanned documents',
        paragraphs: ['For a scanned document at 200 to 300 dpi, JPG at quality 90 keeps small print readable and cuts the file size dramatically. Very low quality settings make the edges of letters fuzzy, so do not go below about 70 for text. If a page is nothing but black text on white, check the result at full size before throwing the TIFF away.'],
      },
    ],
    faqs: [
      { q: 'Will a multi-page scan keep its order?', a: 'Yes. Pages are named page1, page2 and so on.' },
      { q: 'Can I make a PDF instead?', a: 'PDF conversions live on iDuckPDF, a sister site, which can turn pictures into a PDF.' },
      { q: 'Is my scan uploaded?', a: 'No. It is converted in your browser tab.' },
    ],
    tools: ['tiff-to-jpg', 'webp-to-gif', 'heic-to-jpg'],
    published: D,
    updated: D,
  },
  {
    slug: 'how-to-convert-webp-to-gif',
    title: 'How to convert WEBP to GIF',
    description: 'Turn WEBP pictures into GIF files for chat apps and forums that refuse WEBP, and keep the file small.',
    category: 'Images',
    intro:
      'To convert WEBP to GIF, drop the file into the WEBP to GIF converter, optionally pick a largest width, and press Convert. In this version a still WEBP becomes a one-frame GIF, and an animated WEBP keeps only its first frame.',
    steps: [
      'Open WEBP to GIF and drop your .webp files in.',
      'Choose a largest width if the picture is big. GIF files grow quickly.',
      'Press Convert.',
      'Download the GIF, or a ZIP for several files.',
    ],
    sections: [
      {
        heading: 'When this helps',
        paragraphs: [
          'WEBP is a modern picture format from Google that makes small files, and many websites now serve it. Some older chat apps, forums and email programs still do not accept it, but nearly all accept GIF.',
        ],
      },
      {
        heading: 'What you give up',
        paragraphs: [
          'GIF is an older format limited to 256 colours, so photographs can look slightly grainy, and the files are usually larger than the WEBP. Transparent areas stay transparent, but soft semi-transparent edges become fully solid or fully clear, because GIF has only on and off transparency. If the picture is a photo and the site accepts it, JPG or PNG may suit better; picture conversions to those formats are on iDuckIMG.',
        ],
      },
      {
        heading: 'Keeping the GIF small',
        paragraphs: ['Use a largest width of 320 to 480 pixels for stickers and avatars. Flat colours, logos and simple drawings compress well as GIF, while photographs do not, because only 256 colours are available. If the GIF is much larger than you expected, a smaller width is the quickest fix.'],
      },
    ],
    faqs: [
      { q: 'Does an animated WEBP stay animated?', a: 'Not yet. Only the first frame is kept in this version, and the page says so.' },
      { q: 'Why is my GIF bigger than the WEBP?', a: 'GIF compresses less well. Choosing a smaller width reduces it.' },
      { q: 'Is it uploaded?', a: 'No. It is converted inside your browser tab.' },
    ],
    tools: ['webp-to-gif', 'gif-to-mp4', 'tiff-to-jpg'],
    published: D,
    updated: D,
  },
];
