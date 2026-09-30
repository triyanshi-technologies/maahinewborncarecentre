import type { ReactNode, SVGProps } from "react";
import { cn } from "@/lib/cn";

const PHONE_PATH =
  "M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.1 4.2 2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1.9.4 1.8.7 2.7a2 2 0 0 1-.5 2.1L8 9.8a16 16 0 0 0 6 6l1.3-1.3a2 2 0 0 1 2.1-.4c.9.3 1.8.6 2.7.7a2 2 0 0 1 1.7 2z";
const HEART_PATH =
  "M19 14c1.5-1.5 3-3.2 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.8 0-3 .5-4.5 2-1.5-1.5-2.7-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4 3 5.5l7 7z";
const LUNGS_PATH =
  "M12 3v9M12 12c-2 0-4 1-5 3l-2 5c-.4 1 .3 2 1.4 2C9 22 11 20 11 17M12 12c2 0 4 1 5 3l2 5c.4 1-.3 2-1.4 2C15 22 13 20 13 17";
const DROPLET_PATH = "M12 2.7s-6 6.6-6 11.3a6 6 0 0 0 12 0c0-4.7-6-11.3-6-11.3z";
const PULSE_PATH = "M2 12h3l3-8 4 16 3-10 2 2h5";

const icons = {
  "arrow-right": <path d="M5 12h14M13 6l6 6-6 6" />,
  ambulance: (
    <>
      <path d="M10 17h4V5H2v12h3" />
      <path d="M20 17h2v-3.3a1 1 0 0 0-.2-.6L18.5 9H14v8h1" />
      <circle cx="7.5" cy="17.5" r="2.5" />
      <circle cx="17.5" cy="17.5" r="2.5" />
      <path d="M6 8v4M4 10h4" />
    </>
  ),
  book: (
    <path d="M2 4h7a3 3 0 0 1 3 3v14a2 2 0 0 0-2-2H2zM22 4h-7a3 3 0 0 0-3 3v14a2 2 0 0 1 2-2h8z" />
  ),
  calendar: (
    <>
      <rect x="3" y="4" width="18" height="18" rx="2" />
      <path d="M16 2v4M8 2v4M3 10h18" />
    </>
  ),
  chart: (
    <>
      <path d="M3 3v18h18" />
      <path d="m7 15 4-4 3 3 5-6" />
    </>
  ),
  check: <path d="M20 6 9 17l-5-5" />,
  clock: (
    <>
      <circle cx="12" cy="12" r="10" />
      <path d="M12 6v6l4 2" />
    </>
  ),
  "clock-small": (
    <>
      <circle cx="12" cy="12" r="8" />
      <path d="M12 8v4l2.8 1.8" />
    </>
  ),
  cross: <path d="M9 3h6v6h6v6h-6v6H9v-6H3V9h6z" />,
  doctor: (
    <>
      <circle cx="12" cy="7" r="3" />
      <path d="M5.5 20a6.5 6.5 0 0 1 13 0M19 5v4M17 7h4" />
    </>
  ),
  droplet: <path d={DROPLET_PATH} />,
  facebook: <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />,
  heart: <path d={HEART_PATH} />,
  "heart-pulse": (
    <>
      <path d="M20.8 4.7a5.5 5.5 0 0 0-7.8 0L12 5.8l-1.1-1.1a5.5 5.5 0 0 0-7.8 7.8L12 21l8.9-8.5a5.5 5.5 0 0 0-.1-7.8Z" />
      <path d="M4.5 12h3l1.5-3 2.2 6 1.6-3h3.7" />
    </>
  ),
  lungs: <path d={LUNGS_PATH} />,
  mail: (
    <>
      <rect x="2" y="4" width="20" height="16" rx="2" />
      <path d="m22 7-10 6L2 7" />
    </>
  ),
  "map-pin": (
    <>
      <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0z" />
      <circle cx="12" cy="10" r="3" />
    </>
  ),
  menu: <path d="M3 6h18M3 12h18M3 18h18" />,
  monitor: (
    <>
      <rect x="2" y="3" width="20" height="14" rx="2" />
      <path d="M8 21h8M12 17v4M6 10h3l2-3 2 6 2-3h3" />
    </>
  ),
  nurse: (
    <>
      <circle cx="12" cy="8" r="3" />
      <path d="M6 20c.7-3.4 2.7-5 6-5s5.3 1.6 6 5M4 11h2M18 11h2" />
    </>
  ),
  phone: <path d={PHONE_PATH} />,
  pulse: <path d={PULSE_PATH} />,
  "shield-check": (
    <>
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
      <path d="m9 12 2 2 4-4" />
    </>
  ),
  snowflake: <path d="M12 2v20M4.9 4.9l14.2 14.2M2 12h20M4.9 19.1 19.1 4.9" />,
  star: <path d="m12 2 3.1 6.3 6.9 1-5 4.9 1.2 6.8L12 17.8 5.8 21l1.2-6.8-5-4.9 6.9-1z" />,
  stethoscope: (
    <>
      <path d="M5 2H4a2 2 0 0 0-2 2v5a6 6 0 0 0 12 0V4a2 2 0 0 0-2-2h-1" />
      <path d="M8 15v1a6 6 0 0 0 12 0v-4" />
      <circle cx="20" cy="10" r="2" />
    </>
  ),
  syringe: (
    <path d="m18 2 4 4M17 7l3-3M19 9 8.7 19.3a2.4 2.4 0 0 1-3.4 0l-.6-.6a2.4 2.4 0 0 1 0-3.4L15 5M9 11l4 4M5 19l-3 3" />
  ),
} satisfies Record<string, ReactNode>;

export type IconName = keyof typeof icons;

type IconProps = Omit<SVGProps<SVGSVGElement>, "name"> & {
  name: IconName;
  size?: number;
};

export function Icon({ name, size = 24, className, ...props }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.8}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      focusable="false"
      className={cn("shrink-0", className)}
      {...props}
    >
      {icons[name]}
    </svg>
  );
}
