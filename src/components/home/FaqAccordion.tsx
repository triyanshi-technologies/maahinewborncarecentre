"use client";

import { useRef, type MouseEvent, type TransitionEvent } from "react";
import type { Faq } from "@/content/faqs";

function FaqItem({ faq, defaultOpen }: { faq: Faq; defaultOpen: boolean }) {
  const detailsRef = useRef<HTMLDetailsElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const animating = useRef(false);

  // Animates height while keeping native <details> semantics (and no-JS behaviour).
  function handleToggle(event: MouseEvent<HTMLElement>) {
    event.preventDefault();
    const details = detailsRef.current;
    const content = contentRef.current;
    if (!details || !content || animating.current) return;

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      details.open = !details.open;
      content.style.height = "";
      return;
    }

    animating.current = true;
    if (!details.open) {
      details.open = true;
      content.style.height = "0px";
      void content.offsetHeight;
      content.style.height = `${content.scrollHeight}px`;
    } else {
      content.style.height = `${content.scrollHeight}px`;
      void content.offsetHeight;
      content.style.height = "0px";
    }
  }

  function handleTransitionEnd(event: TransitionEvent<HTMLDivElement>) {
    const details = detailsRef.current;
    const content = event.currentTarget;
    if (event.propertyName !== "height" || !details) return;

    if (content.style.height === "0px") details.open = false;
    else content.style.height = "auto";
    animating.current = false;
  }

  return (
    <details
      ref={detailsRef}
      open={defaultOpen}
      className="group rounded-[20px] border border-line bg-white transition-[border-color,box-shadow] duration-250 open:border-sky-strong open:shadow-[0_10px_24px_rgba(18,63,110,0.06)] hover:border-sky-strong"
    >
      <summary
        onClick={handleToggle}
        className="flex min-h-16 cursor-pointer list-none items-center justify-between gap-4 px-6 py-5 font-display text-xl font-semibold [&::-webkit-details-marker]:hidden"
      >
        {faq.question}
        <span
          aria-hidden="true"
          className="relative size-8 shrink-0 rounded-full bg-sky group-open:bg-pink before:absolute before:top-1/2 before:left-1/2 before:h-0.5 before:w-3 before:-translate-1/2 before:bg-navy group-open:before:bg-white after:absolute after:top-1/2 after:left-1/2 after:h-0.5 after:w-3 after:-translate-1/2 after:rotate-90 after:bg-navy after:transition-[rotate] after:duration-200 group-open:after:rotate-0 group-open:after:bg-white"
        />
      </summary>
      <div
        ref={contentRef}
        onTransitionEnd={handleTransitionEnd}
        className="overflow-hidden transition-[height] duration-280 ease-in-out"
      >
        <p className="px-6 pb-5.5 text-base text-muted">{faq.answer}</p>
      </div>
    </details>
  );
}

export function FaqAccordion({ faqs }: { faqs: Faq[] }) {
  return (
    <div className="flex flex-col gap-3.5">
      {faqs.map((faq, index) => (
        <FaqItem key={faq.question} faq={faq} defaultOpen={index === 0} />
      ))}
    </div>
  );
}
