import type { Metadata, Viewport } from "next";
import { DM_Sans, Libre_Baskerville } from "next/font/google";
import Script from "next/script";
import type { ReactNode } from "react";

import { SchoolJsonLd } from "@/components/marketing/SchoolJsonLd";
import { defaultSiteDescription } from "@/lib/site";

import "./globals.css";

function resolveSiteUrl(): string {
  const raw = process.env.NEXT_PUBLIC_SITE_URL ?? "";
  try {
    const parsed = new URL(raw);
    if (parsed.protocol !== "http:" && parsed.protocol !== "https:") {
      throw new Error("Invalid protocol");
    }
    return raw;
  } catch {
    if (process.env.NODE_ENV === "production") {
      console.error(
        "[layout] NEXT_PUBLIC_SITE_URL is missing or invalid — metadata canonical URLs will " +
          "point to localhost. Set this env var in your deployment environment.",
      );
    }
    return "http://localhost:3000";
  }
}

const siteUrl = resolveSiteUrl();

// GA4 measurement IDs have the format G-XXXXXXXXXX.
// UA (Universal Analytics) was shut down July 2024 — only G- format accepted.
// Any other value is rejected to prevent script injection.
const GA_ID_RE = /^G-[A-Z0-9]+$/;
const rawGaId = process.env.NEXT_PUBLIC_GA_ID?.trim() ?? "";
const gaId = GA_ID_RE.test(rawGaId) ? rawGaId : undefined;

const libre = Libre_Baskerville({
  weight: ["400", "700"],
  style: ["normal", "italic"],
  subsets: ["latin"],
  variable: "--font-libre",
  display: "swap",
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-dm",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Renton Prep | A Premier Microsoft Showcase School",
    template: "%s | Renton Prep",
  },
  description: defaultSiteDescription,
  openGraph: {
    siteName: "Renton Prep Christian School",
    type: "website",
    description: defaultSiteDescription,
  },
  twitter: {
    card: "summary_large_image",
    description: defaultSiteDescription,
  },
};

// Sets <meta name="theme-color"> so mobile browsers show the brand dark
// color in the browser chrome instead of white.
export const viewport: Viewport = {
  themeColor: "#1a1c3a",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" className={`${libre.variable} ${dmSans.variable}`}>
      <body className={`${dmSans.className} m-0 min-h-dvh`}>
        <a
          href="#main-content"
          className="fixed left-4 top-4 z-[100] -translate-y-[150%] rounded-md bg-white px-4 py-2 text-sm font-medium text-[#18212b] shadow-md transition-transform focus:translate-y-0 focus:outline focus:outline-2 focus:outline-offset-2 focus:outline-[#625bc4]"
        >
          Skip to main content
        </a>
        <SchoolJsonLd siteUrl={siteUrl} />
        {children}

        {gaId ? (
          <>
            <Script
              src={`https://www.googletagmanager.com/gtag/js?id=${gaId}`}
              strategy="afterInteractive"
            />
            <Script id="google-analytics" strategy="afterInteractive">
              {`
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
                gtag('config', '${gaId}');
              `}
            </Script>
          </>
        ) : null}
      </body>
    </html>
  );
}
