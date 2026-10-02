import type { CSSProperties } from "react";
import { outcomes } from "@/content/home";
import { cn } from "@/lib/cn";

/** Gap between each outcome lighting up; the thread fill reaches each marker on this beat. */
const REVEAL_STAGGER_MS = 600;

/** Figure and label fade up together on their marker's beat (transitions only towards "visible"). */
const FADE_UP =
  "group-data-[reveal=hidden]:translate-y-3 group-data-[reveal=hidden]:opacity-0 group-data-[reveal=visible]:transition-[opacity,translate] group-data-[reveal=visible]:delay-(--reveal-delay) group-data-[reveal=visible]:duration-500 group-data-[reveal=visible]:ease-out";

/**
 * Key outcomes on a horizontal thread (vertical on mobile).
 * Once scrolled into view (`data-reveal`, see `ScrollReveal`) the thread fills in and each
 * marker lights up, with its figure and label, as the fill reaches it.
 */
export function OutcomesTimeline() {
  return (
    <dl
      data-reveal=""
      style={{ "--fill-duration": `${(outcomes.length - 1) * REVEAL_STAGGER_MS}ms` } as CSSProperties}
      className={cn(
        "group relative grid gap-6 rounded-xl border border-line bg-white px-6 py-8 sm:grid-cols-4 sm:gap-4 sm:py-[clamp(36px,5vw,56px)] lg:gap-6 lg:px-[clamp(24px,4vw,48px)]",
        // Connecting thread through the marker centres
        "before:absolute before:bg-line",
        "max-sm:before:top-9.5 max-sm:before:bottom-9.5 max-sm:before:left-7.5 max-sm:before:w-px",
        "sm:before:inset-x-[clamp(64px,8vw,112px)] sm:before:top-[calc(clamp(36px,5vw,56px)+6px)] sm:before:h-px",
        // Fill along the same thread, linear so it meets each marker on its beat.
        // Transitions only run towards "visible": hiding must snap, or a refresh while in view
        // (hidden then visible ~15ms later) just reverses a barely-started fade and nothing plays.
        "after:absolute after:from-navy after:to-pink",
        "data-[reveal=visible]:after:transition-[scale] data-[reveal=visible]:after:duration-(--fill-duration) data-[reveal=visible]:after:ease-linear",
        "max-sm:after:top-9.5 max-sm:after:bottom-9.5 max-sm:after:left-7.5 max-sm:after:w-px",
        "max-sm:after:origin-top max-sm:after:bg-linear-to-b max-sm:data-[reveal=hidden]:after:scale-y-0",
        "sm:after:inset-x-[clamp(64px,8vw,112px)] sm:after:top-[calc(clamp(36px,5vw,56px)+6px)] sm:after:h-px",
        "sm:after:origin-left sm:after:bg-linear-to-r sm:data-[reveal=hidden]:after:scale-x-0",
      )}
    >
      {outcomes.map(({ value, label, accent }, index) => (
        <div
          key={label}
          style={{ "--reveal-delay": `${index * REVEAL_STAGGER_MS}ms` } as CSSProperties}
          className={cn(
            "relative z-1 flex min-w-0 flex-col items-start pl-7 text-left sm:items-center sm:px-4 sm:text-center",
            "before:size-3 before:rounded-full before:border-3 before:border-white",
            "max-sm:before:absolute max-sm:before:top-0 max-sm:before:left-0 sm:before:mb-4",
            "before:bg-(--dot) before:shadow-[0_0_0_1px_var(--dot)]",
            accent ? "[--dot:var(--color-pink)]" : "[--dot:var(--color-navy)]",
            // Marker waits muted, flares when the fill arrives, then settles to normal
            "group-data-[reveal=hidden]:before:scale-75 group-data-[reveal=hidden]:before:bg-line group-data-[reveal=hidden]:before:shadow-[0_0_0_1px_var(--color-line)]",
            "group-data-[reveal=visible]:before:animate-dot-ping",
          )}
        >
          <dt
            className={cn(
              "font-display text-display-lg leading-none font-bold",
              FADE_UP,
              accent ? "text-pink" : "text-navy",
            )}
          >
            {value}
          </dt>
          <dd className={cn("mt-3 text-sm leading-[1.45] text-muted", FADE_UP)}>{label}</dd>
        </div>
      ))}
    </dl>
  );
}
