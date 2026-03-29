import type { Metadata } from "next";

import { ContactPageContent } from "@/components/marketing/ContactPageContent";

export const metadata: Metadata = {
  title: "Contact | Renton Prep",
  description:
    "Phone and address for Renton Prep Christian School in Renton, WA.",
  openGraph: {
    title: "Contact | Renton Prep",
    description:
      "Phone and address for Renton Prep Christian School in Renton, WA.",
  },
};

export default function ContactPage() {
  return (
    <div className="marketing-root">
      <ContactPageContent />
    </div>
  );
}
