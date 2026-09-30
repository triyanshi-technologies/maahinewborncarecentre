import Link from "next/link";
import type { ComponentProps } from "react";
import { cn } from "@/lib/cn";

const variants = {
  pink: "bg-pink text-white hover:bg-pink-dark hover:text-white",
  navy: "bg-navy text-white hover:bg-navy-dark hover:text-white",
  white: "bg-white text-navy hover:bg-sky hover:text-navy",
  outline: "border-navy text-navy hover:bg-navy hover:text-white",
  "outline-light": "border-white/75 text-white hover:bg-white hover:text-navy",
} as const;

export type ButtonVariant = keyof typeof variants;

export function buttonClasses(variant: ButtonVariant = "pink", className?: string) {
  return cn(
    "inline-flex min-h-13 cursor-pointer items-center justify-center gap-2.5 rounded-full border-[1.5px] border-transparent px-6.5 font-sans text-base leading-none font-semibold whitespace-nowrap no-underline transition-colors duration-200 hover:no-underline focus-visible:no-underline",
    "max-sm:w-full max-sm:px-5.5 max-sm:py-3 max-sm:text-center max-sm:whitespace-normal",
    variants[variant],
    className,
  );
}

type LinkButtonProps = Omit<ComponentProps<"a">, "href"> & {
  href: string;
  variant?: ButtonVariant;
};

/** Anchor styled as a button. Internal paths use `next/link`; tel:, mailto: and external URLs use `<a>`. */
export function ButtonLink({ href, variant, className, ...props }: LinkButtonProps) {
  const classes = buttonClasses(variant, className);
  if (href.startsWith("/")) return <Link href={href} className={classes} {...props} />;
  return <a href={href} className={classes} {...props} />;
}

type ButtonProps = ComponentProps<"button"> & { variant?: ButtonVariant };

export function Button({ variant, className, type = "button", ...props }: ButtonProps) {
  return <button type={type} className={buttonClasses(variant, className)} {...props} />;
}
