import { MarketingHome } from "@/components/marketing/MarketingHome";
import { SiteFooter } from "@/components/marketing/SiteFooter";
import { SiteHeader } from "@/components/marketing/SiteHeader";

export default function Page() {
  return (
    <div className="marketing-root">
      <SiteHeader />
      <main id="main-content">
        <MarketingHome />
      </main>
      <SiteFooter />
    </div>
  );
}
