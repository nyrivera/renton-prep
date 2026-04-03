/**
 * Tuition rates and school-year label.
 * Update this file each year instead of editing component JSX directly.
 */
export const tuition = {
  schoolYear: "2026 – 2027",
  programs: [
    {
      name: "Kindergarten Prep – 5th Grade",
      annual: "$16,750*",
      monthly: "$1,396* per month",
    },
  ],
  footnote: "* Finance charge (3%) will apply.",
  extendedCareRate: "$21/hour",
} as const;
