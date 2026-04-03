import type { Metadata } from "next";

import { ContactPageContent } from "@/components/marketing/ContactPageContent";

export const metadata: Metadata = {
  title: "Request Information",
  description:
    "Request information about Renton Prep Christian School in Renton, WA. We will be in touch during school business hours.",
  openGraph: {
    title: "Request Information | Renton Prep",
    description:
      "Request information about Renton Prep Christian School in Renton, WA. We will be in touch during school business hours.",
  },
};

export default function RequestInformationPage() {
  return (
    <div className="marketing-root">
      <ContactPageContent />
    </div>
  );
}
