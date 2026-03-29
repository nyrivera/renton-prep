import type { Metadata } from "next";
import { DM_Sans, Libre_Baskerville } from "next/font/google";
import Script from "next/script";
import type { ReactNode } from "react";

import "./globals.css";

const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL?.startsWith("http") === true
    ? process.env.NEXT_PUBLIC_SITE_URL
    : "http://localhost:3000";

const gaId = process.env.NEXT_PUBLIC_GA_ID?.trim();

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
  title: "Renton Prep | A Premier Microsoft Showcase School",
  description:
    "Christ-centered, technology-enabled education in Renton, WA — including the Genesis Project for AI literacy, Cognia STEM certification, and Microsoft Showcase recognition.",
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
