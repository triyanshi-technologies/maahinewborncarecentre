"use client";

import { useEffect, useRef, useState } from "react";
import type { Stat } from "@/content/home";
import { cn } from "@/lib/cn";

const DIGIT_HEIGHT_EM = 1.12;
/** Each reel holds 0-9 three times so every digit spins through at least two full cycles. */
const REEL = Array.from({ length: 30 }, (_, index) => index % 10);

function Odometer({ value, rolling }: { value: number; rolling: boolean }) {
  return (
    <span aria-hidden="true" className="inline-flex h-[1.12em] overflow-hidden tracking-normal">
      {String(value)
        .split("")
        .map((char, index) => (
          <span
            key={index}
            className="inline-block h-[1.12em] w-[0.62em] flex-[0_0_0.62em] overflow-hidden text-center"
          >
            <span
              className="block transition-transform duration-1250 ease-[cubic-bezier(0.16,1,0.3,1)] will-change-transform"
              style={{
                transform: `translateY(${rolling ? -(20 + Number(char)) * DIGIT_HEIGHT_EM : 0}em)`,
                transitionDelay: `${index * 90}ms`,
              }}
            >
              {REEL.map((digit, position) => (
                <span key={position} className="block h-[1.12em] leading-[1.12]">
                  {digit}
                </span>
              ))}
            </span>
          </span>
        ))}
    </span>
  );
}

/** Key metrics that roll up like an odometer once they scroll into view. */
export function StatsStrip({ stats }: { stats: Stat[] }) {
  const listRef = useRef<HTMLDListElement>(null);
  const [phase, setPhase] = useState<"idle" | "mounted" | "rolling">("idle");

  useEffect(() => {
    const list = listRef.current;
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (!list || reduceMotion || !("IntersectionObserver" in window)) return;

    const start = () => setPhase("mounted");

    if (list.getBoundingClientRect().top < window.innerHeight) {
      const timeout = window.setTimeout(start, 250);
      return () => window.clearTimeout(timeout);
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry?.isIntersecting) return;
        start();
        observer.disconnect();
      },
      { threshold: 0.35 },
    );
    observer.observe(list);
    return () => observer.disconnect();
  }, []);

  // Paint the reels at zero before starting the transition.
  useEffect(() => {
    if (phase !== "mounted") return;
    let frame = requestAnimationFrame(() => {
      frame = requestAnimationFrame(() => setPhase("rolling"));
    });
    return () => cancelAnimationFrame(frame);
  }, [phase]);

  return (
    <dl
      ref={listRef}
      className="grid grid-cols-2 rounded-lg border border-line bg-white sm:grid-cols-3 lg:grid-cols-5"
    >
      {stats.map(({ label, value, suffix = "" }) => (
        <div
          key={label}
          className={cn(
            "flex flex-col gap-1.5 border-line p-5.5 sm:px-7 sm:py-8",
            "max-sm:nth-[n+3]:border-t",
            "sm:not-first:border-l sm:max-lg:nth-4:border-l-0 sm:max-lg:nth-[n+4]:border-t",
          )}
        >
          <dt className="order-2 text-md text-muted">{label}</dt>
          <dd
            aria-label={`${value}${suffix}`}
            className="order-1 font-display text-5xl font-bold tracking-[-0.02em] whitespace-nowrap text-navy tabular-nums sm:text-6xl"
          >
            {phase === "idle" ? (
              `${value}${suffix}`
            ) : (
              <>
                <Odometer value={value} rolling={phase === "rolling"} />
                {suffix && <span aria-hidden="true">{suffix}</span>}
              </>
            )}
          </dd>
        </div>
      ))}
    </dl>
  );
}
