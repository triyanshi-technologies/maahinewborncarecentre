import { outcomes } from "@/content/home";
import { cn } from "@/lib/cn";

/** Key outcomes on a horizontal thread (vertical on mobile). */
export function OutcomesTimeline() {
  return (
    <dl
      className={cn(
        "relative grid gap-6 rounded-xl border border-line bg-white px-6 py-8 sm:grid-cols-4 sm:gap-4 sm:py-[clamp(36px,5vw,56px)] lg:gap-6 lg:px-[clamp(24px,4vw,48px)]",
        // Connecting thread through the marker centres
        "before:absolute before:bg-line",
        "max-sm:before:top-9.5 max-sm:before:bottom-9.5 max-sm:before:left-7.5 max-sm:before:w-px",
        "sm:before:inset-x-[clamp(64px,8vw,112px)] sm:before:top-[calc(clamp(36px,5vw,56px)+6px)] sm:before:h-px",
      )}
    >
      {outcomes.map(({ value, label, accent }) => (
        <div
          key={label}
          className={cn(
            "relative z-1 flex min-w-0 flex-col items-start pl-7 text-left sm:items-center sm:px-4 sm:text-center",
            "before:size-3 before:rounded-full before:border-3 before:border-white",
            "max-sm:before:absolute max-sm:before:top-0 max-sm:before:left-0 sm:before:mb-4",
            accent
              ? "before:bg-pink before:shadow-[0_0_0_1px_var(--color-pink)]"
              : "before:bg-navy before:shadow-[0_0_0_1px_var(--color-navy)]",
          )}
        >
          <dt
            className={cn(
              "font-display text-display-lg leading-none font-bold",
              accent ? "text-pink" : "text-navy",
            )}
          >
            {value}
          </dt>
          <dd className="mt-3 text-sm leading-[1.45] text-muted">{label}</dd>
        </div>
      ))}
    </dl>
  );
}
