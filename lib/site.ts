/**
 * Canonical school information and first-party routes for this site.
 * Optional: set NEXT_PUBLIC_APPLY_URL to an external application portal (e.g. FACTS).
 */

const applyHref =
  typeof process.env.NEXT_PUBLIC_APPLY_URL === "string" &&
  process.env.NEXT_PUBLIC_APPLY_URL.trim().length > 0
    ? process.env.NEXT_PUBLIC_APPLY_URL.trim()
    : "/admissions#start-application";

export const site = {
  name: "Renton Prep Christian School",
  legalName: "Renton Preparatory Christian School",
  tagline: "A Premier Microsoft Showcase School",
  address: {
    lines: ["200 Mill Ave S Ste 110", "Renton, WA 98057"] as const,
    mapQuery: "200 Mill Ave S Ste 110, Renton, WA 98057",
  },
  phone: {
    display: "(206) 723-5526",
    tel: "+12067235526",
  },
  urls: {
    contact: "/request-information",
    apply: applyHref,
    donate: "/donate",
    blog: "/blog",
    careers: "/careers",
    awards: "/awards",
    mission: "/#mission",
    about: "/about",
    admissions: "/admissions",
    howToApply: "/admissions#how-to-apply",
    tuition: "/admissions#tuition-fees",
    financialAid: "/admissions#financial-assistance",
    uniforms: "/admissions#uniforms",
    handbook: "/admissions#student-handbook",
    extendedCare: "/admissions#extended-school-care",
    academics: "/academics",
    technology: "/academics#technology",
    elementary: "/academics#elementary",
    supplyLists: "/academics#supply-lists",
    events: "/events",
    schoolHours: "/events#school-hours",
    calendar: "/events#calendar",
    testimonials: "/about/testimonials",
    studentStories: "/about/student-stories",
    schwabe: "/about#moments",
    privacy: "/legal",
    instagram: "https://www.instagram.com/rentonprep/",
    newsletter: "/request-information",
    genesisTechnology: "/#genesis",
    genesisProject: "/about/genesis",
  },
};

export const missionVisionAction = {
  mission:
    "To create a community inspired by Jesus Christ's teachings, where learners develop their voice, embrace curiosity, learn from failure, and make meaningful contributions, supported by technology.",
  vision:
    "To inspire a passion for teaching, learning, and critical thinking, shaping responsible citizens who share hope and build a legacy of wisdom and compassion together.",
  action:
    "We advance our mission and vision by inspiring curiosity, resilience, and learning from failure while cultivating learners' wisdom and abilities to contribute meaningfully in an ever\u2011changing, complex world.",
} as const;

export const recognitions = [
  {
    label: "Christ-centered from the classroom to the culture. Faith shapes how we teach, how we relate, and how we learn",
  },
  {
    label: "Internationally and state accredited, held to rigorous academic standards across K–12",
  },
  {
    label: "Washington's first Cognia STEM–certified K–12 school",
  },
  {
    label: "Personalized, research-informed learning in a school small enough to know every student",
  },
] as const;

export const microcopy = {
  noCommitment: "No commitment. Takes about 2 minutes.",
  noCommitmentFull:
    "No commitment. Takes about 2 minutes. We will guide you through each step.",
} as const;

export const featuredNews = [
  {
    date: "March 2026",
    title: "Renton Prep: Pioneering AI Integration in Education",
    href: "/about/genesis",
  },
  {
    date: "March 2026",
    title: "Celebrating our 6 Year Cognia STEM Certification Renewal",
    href: "/awards",
  },
  {
    date: "March 2026",
    title: "Renton Prep’s Accreditation Renewal",
    href: "/awards",
  },
] as const;
