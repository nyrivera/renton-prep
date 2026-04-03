import type { Metadata } from "next";

import { GenesisProjectContent } from "@/components/marketing/GenesisProjectContent";

export const metadata: Metadata = {
  title: "The Genesis Project",
  description:
    "Renton Prep's long-term learning and research initiative — responsible AI integration, personalized learning, academic rigor, and human flourishing.",
  openGraph: {
    title: "The Genesis Project | Renton Prep",
    description:
      "Renton Prep's long-term learning and research initiative — responsible AI integration, personalized learning, academic rigor, and human flourishing.",
  },
};

export default function GenesisProjectPage() {
  return (
    <div className="marketing-root">
      <GenesisProjectContent />
    </div>
  );
}
