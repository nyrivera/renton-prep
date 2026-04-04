import type { Metadata } from "next";

import { AdmissionsHubContent } from "@/components/marketing/AdmissionsHubContent";

export const metadata: Metadata = {
  title: "Admissions",
  description:
    "Tuition, financial assistance, uniforms, and extended care | Renton Prep Christian School.",
  openGraph: {
    title: "Admissions | Renton Prep",
    description:
      "Tuition, financial assistance, uniforms, and extended care | Renton Prep Christian School.",
  },
};

export default function AdmissionsPage() {
  return (
    <div className="marketing-root">
      <AdmissionsHubContent />
    </div>
  );
}
