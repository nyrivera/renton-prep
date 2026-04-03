"use client";

import { useEffect, useRef } from "react";

/**
 * Embeds a JotForm via a direct <iframe> — no loader script, no inject-and-wait.
 * JotForm sends postMessage events to resize the iframe; we listen and apply
 * the height directly so the form never clips or double-scrolls.
 *
 * CSP requirements: frame-src must allow https://form.jotform.com.
 */
export function JotForm({ formId }: { formId: string }) {
  const iframeRef = useRef<HTMLIFrameElement>(null);

  useEffect(() => {
    const onMessage = (e: MessageEvent) => {
      if (e.origin !== "https://form.jotform.com") return;
      if (typeof e.data !== "string") return;
      try {
        const data = JSON.parse(e.data) as {
          action?: string;
          args?: unknown[];
        };
        if (
          data.action === "setHeight" &&
          Array.isArray(data.args) &&
          typeof data.args[0] === "number" &&
          iframeRef.current
        ) {
          iframeRef.current.style.height = `${data.args[0]}px`;
        }
      } catch {
        // not JSON — ignore
      }
    };
    window.addEventListener("message", onMessage);
    return () => window.removeEventListener("message", onMessage);
  }, []);

  return (
    <iframe
      ref={iframeRef}
      src={`https://form.jotform.com/${formId}`}
      className="jotform-embed"
      title="Contact form"
      loading="eager"
      allow="geolocation; camera; microphone"
      style={{ border: "none" }}
    />
  );
}
