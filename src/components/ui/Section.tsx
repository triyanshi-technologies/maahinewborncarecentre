import type { ComponentProps, ReactNode } from "react";
import { cn } from "@/lib/cn";
import { Eyebrow, Heading } from "./Typography";

const tones = {
  default: "",
  white: "bg-white",
  sky: "bg-sky",
} as const;

type SectionProps = ComponentProps<"section"> & {
  tone?: keyof typeof tones;
  /** Fade/slide the section in when scrolled into view (see `ScrollReveal`). */
  reveal?: boolean;
};

/** Page section with the shared 40px vertical rhythm. */
export function Section({ tone = "default", reveal = true, className, ...props }: SectionProps) {
  return (
    <section
      data-reveal={reveal ? "" : undefined}
      className={cn(
        "py-10",
        tones[tone],
        reveal &&
          "transition-[opacity,translate] duration-600 ease-out data-[reveal=hidden]:translate-y-4 data-[reveal=hidden]:opacity-0",
        className,
      )}
      {...props}
    />
  );
}

type SectionHeaderProps = {
  eyebrow: string;
  title: ReactNode;
  description?: ReactNode;
  /** Right-hand content on split headers (text, a button, or both). */
  aside?: ReactNode;
  align?: "split" | "center";
  tone?: "dark" | "light";
  className?: string;
};

export function SectionHeader({
  eyebrow,
  title,
  description,
  aside,
  align = "split",
  tone = "dark",
  className,
}: SectionHeaderProps) {
  const eyebrowTone = tone === "light" ? "light" : "default";

  if (align === "center") {
    return (
      <div className={cn("mb-13 flex flex-col items-center gap-4.5 text-center", className)}>
        <Eyebrow tone={eyebrowTone} className="self-center">
          {eyebrow}
        </Eyebrow>
        <Heading tone={tone}>{title}</Heading>
        {description && (
          <p className={cn("max-w-170 text-lg", tone === "light" ? "text-on-navy" : "text-muted")}>
            {description}
          </p>
        )}
      </div>
    );
  }

  return (
    <div
      className={cn(
        "mb-13 flex flex-col items-start gap-10 md:flex-row md:items-end md:justify-between",
        className,
      )}
    >
      <div className="flex max-w-180 flex-col gap-4.5">
        <Eyebrow tone={eyebrowTone}>{eyebrow}</Eyebrow>
        <Heading tone={tone}>{title}</Heading>
      </div>
      {aside}
    </div>
  );
}

/** Muted text column that sits beside a split section header. */
export function SectionHeaderAside({ className, ...props }: ComponentProps<"div">) {
  return (
    <div
      className={cn("flex max-w-105 flex-col items-start gap-4.5 text-muted", className)}
      {...props}
    />
  );
}
