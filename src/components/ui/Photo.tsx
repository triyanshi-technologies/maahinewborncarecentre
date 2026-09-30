import Image from "next/image";
import { cn } from "@/lib/cn";

type PhotoProps = {
  src: string;
  alt: string;
  /** Sizing/rounding classes for the frame, e.g. `h-[420px]`. */
  className?: string;
  /** Responsive `sizes` hint for the optimiser. */
  sizes?: string;
  /** Preload above-the-fold imagery (LCP). */
  preload?: boolean;
  tone?: "light" | "dark";
};

/** Rounded, cover-fitted image frame with a subtle zoom on hover. */
export function Photo({
  src,
  alt,
  className,
  sizes = "(min-width: 961px) 50vw, 100vw",
  preload = false,
  tone = "light",
}: PhotoProps) {
  return (
    <div
      className={cn(
        "group/photo relative min-h-50 overflow-hidden rounded-lg",
        tone === "dark" ? "bg-navy-soft" : "bg-sky-strong",
        className,
      )}
    >
      <Image
        src={src}
        alt={alt}
        fill
        sizes={sizes}
        preload={preload}
        className="object-cover transition-[scale,filter] duration-350 ease-out group-hover/photo:scale-[1.025] group-hover/photo:saturate-[1.04]"
      />
    </div>
  );
}
