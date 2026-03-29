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
    label: "Christ-centered & technology-enhanced micro-school",
  },
  {
    label: "First U.S. K–12 school selected as a Microsoft Flagship School",
  },
  {
    label: "First Cognia STEM–certified K–12 school in Washington",
  },
  {
    label: "Microsoft Educator Community micro-school; personalized & adaptive learning",
  },
] as const;

export const featuredNews = [
  {
    date: "September 25, 2025",
    title: "Renton Prep: Pioneering AI Integration in Education",
    href: "/blog",
  },
  {
    date: "March 26, 2025",
    title: "Celebrating our 6 Year Cognia STEM Certification Renewal",
    href: "/blog",
  },
  {
    date: "March 26, 2025",
    title: "Renton Prep’s Accreditation Renewal",
    href: "/blog",
  },
] as const;
