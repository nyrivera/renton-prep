"use client";

import { useEffect, useRef } from "react";

/**
 * Embeds a JotForm by dynamically appending the jsform script into a container
 * div. Using useEffect ensures this only runs on the client and avoids React
 * hydration issues from third-party DOM mutations.
 */
export function JotForm({ formId }: { formId: string }) {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const script = document.createElement("script");
    script.src = `https://form.jotform.com/jsform/${formId}`;
    script.type = "text/javascript";
    container.appendChild(script);

    return () => {
      script.remove();
    };
  }, [formId]);

  return <div ref={containerRef} />;
}
