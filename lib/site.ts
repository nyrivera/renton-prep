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
    contact: "/contact",
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
    newsletter: "/contact",
    genesisTechnology: "/#genesis",
    genesisProject: "/about/genesis",
  },
};

export const missionVisionAction = {
  mission:
    "To inspire a passion for harnessing emerging technology for teaching, learning, critical thinking and sharing the hope of becoming responsible and productive citizens, whose legacy will leave the world a better place.",
  vision:
    "By providing a well-rounded, technology-enabled Christ-centered education.",
  action:
    "To offer a secure and technology-enabled Christ-centered school where students learn to use their voice to contribute solutions to the challenges of our global community.",
} as const;

export const recognitions = [
  {
    label: "Christ-centered from the classroom to the culture — faith shapes how we teach, how we relate, and how we learn",
  },
  {
    label: "Internationally and state accredited — held to rigorous academic standards across K–12",
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
    href: "/about",
  },
  {
    date: "March 2026",
    title: "Celebrating our 6 Year Cognia STEM Certification Renewal",
    href: "/about",
  },
  {
    date: "March 2026",
    title: "Renton Prep’s Accreditation Renewal",
    href: "/about",
  },
] as const;
