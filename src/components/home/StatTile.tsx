import { Icon } from "@/components/ui/Icon";

/** Decorative "500 g" highlight card in the About collage. */
export function StatTile() {
  return (
    <div className="relative isolate flex flex-col gap-3 overflow-hidden rounded-lg bg-[radial-gradient(circle_at_100%_0%,rgba(194,58,107,0.45),transparent_55%),radial-gradient(circle_at_0%_100%,rgba(207,226,243,0.18),transparent_50%),linear-gradient(150deg,var(--color-navy)_0%,var(--color-navy-dark)_100%)] px-7 pt-7 pb-5.5 text-white shadow-[0_18px_40px_-18px_rgba(11,42,74,0.6)]">
      {/* Dotted texture */}
      <div
        aria-hidden="true"
        className="absolute inset-0 -z-1 bg-[radial-gradient(rgba(255,255,255,0.12)_1px,transparent_1.4px)] mask-[linear-gradient(200deg,#000_0%,transparent_65%)] bg-size-[14px_14px]"
      />
      {/* Soft rings */}
      <div
        aria-hidden="true"
        className="absolute -top-22.5 -right-22.5 -z-1 size-55 rounded-full border border-white/14 shadow-[0_0_0_26px_rgba(255,255,255,0.03),0_0_0_27px_rgba(255,255,255,0.1)]"
      />
      {/* Baby footprints */}
      <svg
        aria-hidden="true"
        viewBox="0 0 120 120"
        fill="currentColor"
        className="absolute right-3.5 bottom-7.5 -z-1 size-23 -rotate-8 text-white/8"
      >
        <ellipse cx="38" cy="62" rx="15" ry="24" transform="rotate(-12 38 62)" />
        <circle cx="22" cy="30" r="6" />
        <circle cx="34" cy="26" r="5" />
        <circle cx="45" cy="27" r="4.5" />
        <circle cx="54" cy="31" r="4" />
        <circle cx="61" cy="37" r="3.5" />
        <ellipse cx="86" cy="86" rx="13" ry="21" transform="rotate(10 86 86)" />
        <circle cx="74" cy="58" r="5.2" />
        <circle cx="84" cy="54" r="4.4" />
        <circle cx="93" cy="55" r="4" />
        <circle cx="101" cy="59" r="3.5" />
        <circle cx="107" cy="65" r="3" />
      </svg>

      <div className="flex items-center gap-3.5">
        <span
          aria-hidden="true"
          className="grid size-11 flex-none place-items-center rounded-full bg-pink text-white shadow-[0_0_0_6px_rgba(194,58,107,0.22)]"
        >
          <Icon name="heart" size={20} />
        </span>
        <strong className="font-display text-7xl leading-none">500 g</strong>
      </div>
      <span className="max-w-[26ch] text-md text-on-dark">
        Babies as small as 500 grams cared for by our team
      </span>
      <svg
        aria-hidden="true"
        viewBox="0 0 240 36"
        fill="none"
        stroke="currentColor"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
        preserveAspectRatio="none"
        className="mt-1 block h-7.5 w-full text-white/35"
      >
        <path d="M0 20h78l7-10 8 20 10-28 9 30 7-12h121" />
      </svg>
    </div>
  );
}
