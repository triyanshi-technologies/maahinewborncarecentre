import { siteConfig } from "@/config/site";
import { nicuOnWheelsHighlights } from "@/content/home";
import { ButtonLink } from "@/components/ui/Button";
import { Checklist } from "@/components/ui/Checklist";
import { Icon } from "@/components/ui/Icon";
import { Photo } from "@/components/ui/Photo";
import { Section } from "@/components/ui/Section";
import { Eyebrow, Heading, Stack } from "@/components/ui/Typography";

export function NicuOnWheelsBand() {
  return (
    <Section>
      <div className="container">
        <div className="grid items-center gap-[clamp(40px,6vw,72px)] rounded-[40px] bg-navy p-[clamp(32px,5vw,72px)] md:grid-cols-2">
          <Stack>
            <Eyebrow tone="light">New: NICU on Wheels</Eyebrow>
            <Heading tone="light">A neonatologist on board, from the very first mile</Heading>
            <p className="text-on-navy">
              Our third neonatal ambulance, NICU on Wheels, is dedicated exclusively to transferring
              newborns across Saurashtra and Kutch. It is the only neonatal ambulance in the region
              with a neonatologist available 24×7 during transport - so critically ill babies
              receive expert care before they even reach our NICU.
            </p>
            <Checklist items={nicuOnWheelsHighlights} tone="light" />
            <div className="flex flex-wrap gap-3.5">
              <ButtonLink href={siteConfig.phone.href}>
                <Icon name="phone" size={18} />
                Request a transfer
              </ButtonLink>
              <ButtonLink href="/services/nicu-on-wheels" variant="outline-light">
                About NETS
                <Icon name="arrow-right" size={18} />
              </ButtonLink>
            </div>
          </Stack>
          <Photo
            src="/images/nicu-on-wheels-ambulance.jpg"
            alt="NICU on Wheels neonatal ambulance"
            tone="dark"
            className="h-70 sm:h-125"
          />
        </div>
      </div>
    </Section>
  );
}
