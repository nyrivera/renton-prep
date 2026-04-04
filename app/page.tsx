import type { Metadata } from "next";

import { MarketingHome } from "@/components/marketing/MarketingHome";
import { MarketingShell } from "@/components/marketing/MarketingShell";
import { defaultSiteDescription } from "@/lib/site";

const ogTitle = "Renton Prep a Microsoft Showcase School";

export const metadata: Metadata = {
  title: {
    absolute: ogTitle,
  },
  description: defaultSiteDescription,
  openGraph: {
    title: ogTitle,
    description: defaultSiteDescription,
    url: "/",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: ogTitle,
    description: defaultSiteDescription,
  },
};

export default function Page() {
  return (
    <div className="marketing-root">
      <MarketingShell>
        <MarketingHome />
      </MarketingShell>
    </div>
  );
}
