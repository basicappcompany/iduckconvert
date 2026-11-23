import type { ToolGroup } from '../lib/tools';

/**
 * Every string a translated page needs. English (en.ts) is the source: a unit test fails when a language is
 * missing a key, leaves one empty, drops a {placeholder}, or still reads like English.
 * Where a string names a button, it uses the translated button label (the run buttons are translated).
 * The options inside each converter are still English in phase 1, and the pages say so.
 */
export interface Dict {
  // Page chrome
  skipToTool: string;
  siteMenu: string;
  homeAria: string;
  searchPlaceholder: string;
  searchAria: string;
  openSearch: string;
  /** The Ctrl K window. paletteOnSite contains {site}; paletteEmpty contains {q}. */
  paletteSearchPlaceholder: string;
  paletteDialog: string;
  paletteInputAria: string;
  paletteResults: string;
  paletteMove: string;
  paletteOpen: string;
  paletteClose: string;
  paletteTools: string;
  palettePages: string;
  paletteActions: string;
  paletteOnSite: string;
  palettePage: string;
  paletteGuide: string;
  paletteGuides: string;
  paletteAction: string;
  paletteEmpty: string;
  paletteTheme: string;
  openMenu: string;
  themeToggle: string;
  support: string;
  supportAria: string;
  language: string;
  navHome: string;
  navHelper: string;
  navConverters: string;
  navGuides: string;
  convertersLabel: string;
  communityLabel: string;
  alsoFrom: string;
  /** Names of the community pages, keyed by slug. Those pages are English for now. */
  community: Record<'roadmap' | 'request' | 'feedback' | 'donate' | 'settings' | 'about', string>;
  popularLabel: string;
  popularAria: string;
  footerAllConverters: string;
  footerGuides: string;
  footerAbout: string;
  footerHow: string;
  footerPrivacy: string;
  footerTerms: string;
  footerFeedback: string;
  /** Contains {date}. */
  footerLine: string;
  /** Says the page is machine-translated and what is still English. */
  machineNote: string;
  /** A short form for pages that are fully translated, such as a guide. */
  machineShort: string;
  guidesPageTitle: string;
  /** Contains {n}. */
  guidesPageDescription: string;
  guidesHeadingBefore: string;
  /** The highlighted word of the guides heading. */
  guidesHeadingMark: string;
  guidesHeadingAfter: string;
  guidesTopics: string;
  guidesHomeIntro: string;
  /** Contains {n}. */
  guidesAll: string;
  /** Contains {date}. */
  guideUpdated: string;
  guideQuick: string;
  guideSteps: string;
  guideTryIt: string;
  guideQuestions: string;
  guideMore: string;
  /** Contains {title}. */
  readGuide: string;

  // Converter pages
  breadcrumbHome: string;
  runsInBrowser: string;
  noSignup: string;
  noWatermark: string;
  noAds: string;
  filesNeverLeave: string;
  answerLabel: string;
  converterLabel: string;
  /** Contains {group}. */
  moreIn: string;
  /** Contains {name}. */
  titleTool: string;
  /** Contains {summary}. */
  descFiles: string;
  /** Contains {summary}. */
  descNoFiles: string;
  /** Says the options inside the converter are English for now. */
  controlsEnglish: string;
  /** Contains {name}. The headings of the steps, the explanation and the questions under a converter. */
  pageStepsHeading: string;
  pageAboutHeading: string;
  pageFaqHeading: string;
  /** Unit pair pages (cm to inches) and the unit facts under a unit converter. */
  pairHeading: string;
  pairTitle: string;
  pairDesc: string;
  pairSummary: string;
  unitFactorHeading: string;
  unitFactorHeadingPair: string;
  unitTableHeading: string;
  unitTableCaption: string;
  unitSourceHeading: string;
  unitReference: string;
  unitPopular: string;
  bighaHeading: string;
  bighaState: string;
  bighaSqft: string;
  bighaPerAcre: string;

  // Home page
  homeTitle: string;
  homeDescription: string;
  heroBefore: string;
  heroMark: string;
  heroAfter: string;
  /** Contains {n} and {m}. */
  heroSub: string;
  heroSearch: string;
  searchHint: string;
  helperTitle: string;
  helperText: string;
  helperButton: string;
  popularHeading: string;
  /** Contains {n}. */
  allHeading: string;
  pickGroup: string;
  filterAria: string;
  /** Contains {n}. */
  everything: string;
  sisterHeading: string;
  sisterText: string;
  pdfTitle: string;
  pdfText: string;
  /** Contains {site}. */
  onSite: string;
  why: { title: string; text: string }[];
  faqHeading: string;
  faqs: { q: string; a: string }[];
  supportTitle: string;
  supportText: string;
  supportButton: string;
  groups: Record<ToolGroup, string>;
}

export interface ToolText {
  name: string;
  summary: string;
  quick: string;
}

/**
 * Text for the tools that are made from a pattern: audio and video pairs (MP3 to WAV...) and the tools that live
 * on a sister site. {f} and {t} are the two format names, {run} is the translated run button, {name} and {site}
 * name the tool and the sister site.
 */
export interface ToolTemplates {
  pairName: string;
  audioSummary: string;
  audioQuick: string;
  videoSummary: string;
  videoQuick: string;
  /** Contains {name} and {site}. */
  linkSummary: string;
  /** Contains {name} and {site}. */
  linkQuick: string;
}

/** The words the shared file controls and the run buttons use. */
export interface UiText {
  dropMany: string;
  dropOne: string;
  paste: string;
  chooseMany: string;
  chooseOne: string;
  takePhoto: string;
  /** {names} is a comma separated list of file names. */
  skippedOne: string;
  skippedMany: string;
  /** {n} is the number of files. */
  selectedOne: string;
  selectedMany: string;
  clear: string;
  working: string;
  cancel: string;
  download: string;
  /** {n} is the number of files. */
  downloadAll: string;
  preparingZip: string;
  /** {before} and {after} are sizes such as "1.2 MB". */
  sizes: string;
  couldNotProcess: string;
  // Run buttons
  runConvert: string;
  runExtractMp3: string;
  runMakeGif: string;
  runCompress: string;
  runTrim: string;
  runMerge: string;
}

/** One language: its dictionary and the text of every tool. The shared control text lives in ui.ts, which is small enough for the browser. */
export interface LocaleData {
  dict: Dict;
  templates: ToolTemplates;
  /** Keyed by tool slug: every tool that is not made from a pattern. */
  tools: Record<string, ToolText>;
}
