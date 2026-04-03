import type { Metadata } from "next";

import { TbdPage } from "@/components/marketing/TbdPage";

const PLACEHOLDER =
  "This page is being updated. Please contact us directly for help.";

export const metadata: Metadata = {
  title: "Legal & Privacy",
  description: PLACEHOLDER,
  robots: { index: false, follow: false },
  openGraph: {
    title: "Legal & Privacy | Renton Prep",
    description: PLACEHOLDER,
  },
};

export default function LegalPage() {
  return (
    <div className="marketing-root">
      <TbdPage title="Legal & privacy" description={PLACEHOLDER} />
    </div>
  );
}
