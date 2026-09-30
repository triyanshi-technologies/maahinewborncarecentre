import type { ComponentProps, ElementType, ReactNode } from "react";
import { cn } from "@/lib/cn";

type EyebrowProps = ComponentProps<"p"> & { tone?: "default" | "light" };

/** Small pill label with a dot, shown above section headings. */
export function Eyebrow({ tone = "default", className, ...props }: EyebrowProps) {
  return (
    <p
      className={cn(
        "inline-flex items-center gap-2 self-start rounded-full px-4 py-2 text-sm font-bold",
        "before:size-2 before:rounded-full before:bg-current",
        tone === "light" ? "bg-white/12 text-white" : "bg-pink-tint text-pink",
        className,
      )}
      {...props}
    />
  );
}

type HeadingProps = {
  as?: ElementType;
  size?: "lg" | "md";
  tone?: "dark" | "light";
  className?: string;
  id?: string;
  children: ReactNode;
};

/** Section heading. `lg` is the default section size, `md` is used for secondary headings. */
export function Heading({
  as: Tag = "h2",
  size = "lg",
  tone = "dark",
  className,
  ...props
}: HeadingProps) {
  return (
    <Tag
      className={cn(
        size === "lg" ? "text-h1" : "text-h2",
        tone === "light" ? "text-white" : "text-ink",
        className,
      )}
      {...props}
    />
  );
}

/** Vertical rhythm container. Unstyled paragraphs inside it get the muted body treatment. */
export function Stack({ className, ...props }: ComponentProps<"div">) {
  return (
    <div
      className={cn(
        "flex flex-col gap-5.5 [&>p:not([class])]:text-lg [&>p:not([class])]:text-muted",
        className,
      )}
      {...props}
    />
  );
}
