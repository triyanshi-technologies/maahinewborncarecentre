import { cn } from "@/lib/cn";
import { Icon } from "./Icon";

type Tone = "dark" | "light";

function CheckMark({ tone = "dark" }: { tone?: Tone }) {
  return (
    <span
      className={cn(
        "mt-px inline-flex size-6.5 shrink-0 items-center justify-center rounded-full",
        tone === "light" ? "bg-white/14 text-white" : "bg-sky text-navy",
      )}
    >
      <Icon name="check" size={15} />
    </span>
  );
}

type ChecklistProps = { items: string[]; tone?: Tone };

/** Vertical list of ticked items. */
export function Checklist({ items, tone = "dark" }: ChecklistProps) {
  return (
    <ul className="flex flex-col gap-3.5">
      {items.map((item) => (
        <li
          key={item}
          className={cn("flex items-start gap-3 text-body", tone === "light" && "text-white")}
        >
          <CheckMark tone={tone} />
          <span>{item}</span>
        </li>
      ))}
    </ul>
  );
}

/** Two-column grid of ticked items rendered as small cards. */
export function PointGrid({ items }: { items: string[] }) {
  return (
    <ul className="grid gap-3.5 sm:grid-cols-2">
      {items.map((item) => (
        <li
          key={item}
          className="flex items-start gap-3 rounded-[18px] border border-line bg-white p-4.5 text-base leading-normal"
        >
          <CheckMark />
          <span>{item}</span>
        </li>
      ))}
    </ul>
  );
}
