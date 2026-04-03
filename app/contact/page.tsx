import type { Metadata } from "next";

import { ContactPageContent } from "@/components/marketing/ContactPageContent";

export const metadata: Metadata = {
  title: "Contact",
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
    <>
      {/* Warm up JotForm's servers before the iframe src resolves */}
      <link rel="preconnect" href="https://form.jotform.com" crossOrigin="" />
      <link rel="preconnect" href="https://cdn.jotfor.ms" crossOrigin="" />
      <link rel="dns-prefetch" href="https://form.jotform.com" />
      <link rel="dns-prefetch" href="https://cdn.jotfor.ms" />
      <div className="marketing-root">
        <ContactPageContent />
      </div>
    </>
  );
}
