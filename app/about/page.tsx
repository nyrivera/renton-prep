import type { Metadata } from "next";

import { AboutSchoolContent } from "@/components/marketing/AboutSchoolContent";

export const metadata: Metadata = {
  title: "About Us: Our Story",
  description:
    "From Holy Cross Lutheran School (1962) to Renton Prep today. Christian education, research-informed learning, and one campus in downtown Renton.",
  openGraph: {
    title: "About Renton Prep | Our Story",
    description:
      "From Holy Cross Lutheran School (1962) to Renton Prep today. Christian education, research-informed learning, and one campus in downtown Renton.",
  },
};

export default function AboutPage() {
  return (
    <div className="marketing-root">
      <AboutSchoolContent />
    </div>
  );
}
