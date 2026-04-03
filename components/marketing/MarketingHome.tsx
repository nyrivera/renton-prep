import { CommunitySection } from "@/components/marketing/CommunitySection";
import { CtaSection } from "@/components/marketing/CtaSection";
import { FaqSection } from "@/components/marketing/FaqSection";
import { FeaturesSection } from "@/components/marketing/FeaturesSection";
import { GenesisSection } from "@/components/marketing/GenesisSection";
import { HeroSection } from "@/components/marketing/HeroSection";
import { HiringSection } from "@/components/marketing/HiringSection";
import { MetricsSection } from "@/components/marketing/MetricsSection";
import { MissionSection } from "@/components/marketing/MissionSection";
import { NewsSection } from "@/components/marketing/NewsSection";
import { ResearchSection } from "@/components/marketing/ResearchSection";
import { TestimonialsSection } from "@/components/marketing/TestimonialsSection";
import { WhyChooseSection } from "@/components/marketing/WhyChooseSection";

/** Primary home content only — header and footer live in `app/page.tsx` (matches `MarketingShell`). */
export function MarketingHome() {
  return (
    <>
      <HeroSection />
      <MetricsSection />
      <WhyChooseSection />
      <MissionSection />
      <FeaturesSection />
      <GenesisSection />
      <ResearchSection />
      <TestimonialsSection />
      <CtaSection />
      <CommunitySection />
      <FaqSection />
      <HiringSection />
      <NewsSection />
    </>
  );
}
