import type { NextConfig } from "next";

const isDev = process.env.NODE_ENV === "development";

const securityHeaders = [
  // Prevent the page from being embedded in an iframe (clickjacking defense).
  { key: "X-Frame-Options", value: "DENY" },
  // Stop browsers from MIME-sniffing the content type.
  { key: "X-Content-Type-Options", value: "nosniff" },
  // Force HTTPS for 1 year, including subdomains.
  {
    key: "Strict-Transport-Security",
    value: "max-age=31536000; includeSubDomains",
  },
  // Don't send referrer when navigating to a different origin.
  { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
  // Restrict browser features this site doesn't need.
  {
    key: "Permissions-Policy",
    value: "camera=(), microphone=(), geolocation=(), interest-cohort=()",
  },
  // Prevent cross-origin window.opener access (Spectre / tab-napping mitigation).
  { key: "Cross-Origin-Opener-Policy", value: "same-origin" },
  // Prevent other origins from loading this site's resources.
  { key: "Cross-Origin-Resource-Policy", value: "same-origin" },
  // Disallow Flash/Silverlight cross-domain policy files.
  { key: "X-Permitted-Cross-Domain-Policies", value: "none" },
  // Content Security Policy.
  // next/script with strategy="afterInteractive" injects inline scripts, so
  // 'unsafe-inline' is required for script-src until nonce-based CSP is adopted.
  // Next.js self-hosts Google Fonts, so no external font src is needed.
  {
    key: "Content-Security-Policy",
    value: [
      "default-src 'self'",
      // 'unsafe-eval' is required by React in development mode for call-stack
      // reconstruction. It is intentionally omitted in production.
      `script-src 'self' 'unsafe-inline'${isDev ? " 'unsafe-eval'" : ""} https://www.googletagmanager.com https://form.jotform.com`,
      "style-src 'self' 'unsafe-inline'",
      "font-src 'self' https://form.jotform.com",
      "img-src 'self' data: https://www.googletagmanager.com https://www.google-analytics.com https://*.jotform.com",
      "connect-src 'self' https://www.google-analytics.com https://analytics.google.com https://www.googletagmanager.com https://submit.jotform.com https://form.jotform.com https://api.jotform.com",
      "frame-src https://form.jotform.com",
      "frame-ancestors 'none'",
      "base-uri 'self'",
      "form-action 'self' https://submit.jotform.com",
      // Force HTTP sub-resources to upgrade to HTTPS in production.
      ...(!isDev ? ["upgrade-insecure-requests"] : []),
    ].join("; "),
  },
];

const nextConfig: NextConfig = {
  async headers() {
    return [
      {
        source: "/:path*",
        headers: securityHeaders,
      },
    ];
  },
};

export default nextConfig;
