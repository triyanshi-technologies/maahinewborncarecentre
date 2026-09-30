"use client";

import { useEffect, useRef } from "react";

/**
 * Jotform's embed script renders into its container once, when it executes.
 * Injecting it on mount (instead of via next/script, which dedupes) keeps the
 * widget working after client-side navigation back to the page.
 */
export function JotformWidget({ widgetId }: { widgetId: string }) {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const script = document.createElement("script");
    script.src = `https://www.jotform.com/website-widgets/embed/${widgetId}`;
    script.async = true;
    container.after(script);

    return () => {
      script.remove();
      container.replaceChildren();
    };
  }, [widgetId]);

  return <div ref={containerRef} id={`JFWebsiteWidget-${widgetId}`} />;
}
