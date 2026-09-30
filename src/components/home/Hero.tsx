import { siteConfig } from "@/config/site";
import { cn } from "@/lib/cn";
import { ButtonLink } from "@/components/ui/Button";
import { Icon, type IconName } from "@/components/ui/Icon";
import { IconTile } from "@/components/ui/IconTile";
import { Photo } from "@/components/ui/Photo";
import { Section } from "@/components/ui/Section";
import { Eyebrow } from "@/components/ui/Typography";

const careTeamAvatars: { icon: IconName; className: string }[] = [
  { icon: "doctor", className: "bg-sky-strong" },
  { icon: "heart-pulse", className: "bg-[#b9d3ec]" },
  { icon: "nurse", className: "bg-[#a6c6e6]" },
  { icon: "clock-small", className: "bg-navy text-white" },
];

function CareTeam() {
  return (
    <div className="flex items-center gap-4 text-md leading-[1.4] text-muted">
      <div aria-hidden="true" className="flex">
        {careTeamAvatars.map(({ icon, className }) => (
          <span
            key={icon}
            className={cn(
              "-ml-3 flex size-11 items-center justify-center rounded-full border-3 border-ground text-navy first:ml-0",
              className,
            )}
          >
            <Icon name={icon} size={20} />
          </span>
        ))}
      </div>
      <p>
        <strong className="text-ink">5 neonatologists</strong>
        <br />
        on call 24 × 7 × 365
      </p>
    </div>
  );
}

export function Hero() {
  return (
    <Section>
      <div className="container grid items-center gap-14 md:grid-cols-2">
        <div className="flex flex-col gap-6.5">
          <Eyebrow>Rajkot&apos;s exclusive neonatal centre</Eyebrow>
          <h1 className="text-display-xl leading-[1.04] tracking-tight">
            Advanced Level III NICU &amp; <span className="text-pink">newborn care</span> in Rajkot
          </h1>
          <p className="text-xl text-muted">
            Since 2015, MAAHI has been the first dedicated neonatal centre of Saurashtra and Kutch -
            a 42-bed Level III NICU where five full-time neonatologists care for premature and
            critically ill babies around the clock.
          </p>
          <div className="flex flex-wrap gap-3.5">
            <ButtonLink href="/contact">
              Book OPD appointment
              <Icon name="calendar" size={18} />
            </ButtonLink>
            <ButtonLink href={siteConfig.phone.href} variant="outline">
              <Icon name="phone" size={18} />
              Call 24x7 emergency
            </ButtonLink>
          </div>
          <CareTeam />
        </div>

        <div className="relative">
          <Photo
            src="/images/hero-mother-newborn.jpg"
            alt="Mother and newborn at MAAHI NICU"
            preload
            className="h-95 rounded-[40px] sm:h-115 md:h-155"
          />
          <div className="absolute right-4 bottom-4 z-2 flex items-center gap-3.5 rounded-md bg-white px-5.5 py-4.5 shadow-[0_18px_40px_rgba(18,63,110,0.14)] max-sm:px-3.5 max-sm:py-3 md:-right-9 md:bottom-14 xl:-right-14">
            <IconTile icon="cross" iconSize={24} tone="pink" size="sm" />
            <div>
              <strong className="block font-display text-xl">Level III NICU</strong>
              <span className="text-sm text-muted">42 beds, state-of-the-art</span>
            </div>
          </div>
          <div className="absolute top-3 left-3 z-2 flex items-center gap-3.5 rounded-md bg-navy px-5.5 py-4.5 text-white shadow-[0_18px_40px_rgba(18,63,110,0.14)] max-sm:px-3.5 max-sm:py-3 sm:top-8 sm:left-7 md:-left-9 xl:-left-14">
            <Icon name="ambulance" size={26} />
            <div>
              <strong className="block text-base">NICU on Wheels</strong>
              <span className="text-xs text-on-dark">Neonatologist on board 24×7</span>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
}
