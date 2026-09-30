import { siteConfig } from "@/config/site";
import { ButtonLink } from "@/components/ui/Button";
import { Icon } from "@/components/ui/Icon";
import { Heading } from "@/components/ui/Typography";
import { Section } from "@/components/ui/Section";

/** Closing call-to-action shown at the bottom of most pages. */
export function CtaBand() {
  return (
    <Section>
      <div className="container">
        <div className="grid items-center gap-12 rounded-xl bg-pink px-[clamp(28px,5vw,72px)] py-[clamp(32px,5vw,64px)] md:grid-cols-2">
          <div className="flex flex-col gap-4.5">
            <Heading size="md" tone="light">
              Expert newborn care, from the very first hour
            </Heading>
            <p className="text-lg text-on-pink">
              Four full-time neonatologists, a 42-bed Level III NICU and NICU on Wheels transport -
              ready for your baby 24×7×365.
            </p>
          </div>
          <div className="flex flex-col items-start gap-3.5 md:items-end">
            <ButtonLink href="/contact" variant="white">
              Book an OPD appointment
              <Icon name="arrow-right" size={18} />
            </ButtonLink>
            <ButtonLink href={siteConfig.phone.href} variant="outline-light">
              <Icon name="phone" size={18} />
              24×7 Emergency: {siteConfig.phone.display}
            </ButtonLink>
          </div>
        </div>
      </div>
    </Section>
  );
}
