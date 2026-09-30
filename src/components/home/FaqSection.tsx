import { faqs } from "@/content/faqs";
import { faqSchema } from "@/lib/schema";
import { JsonLd } from "@/components/seo/JsonLd";
import { ButtonLink } from "@/components/ui/Button";
import { Icon } from "@/components/ui/Icon";
import { Section } from "@/components/ui/Section";
import { Eyebrow, Heading, Stack } from "@/components/ui/Typography";
import { FaqAccordion } from "./FaqAccordion";

export function FaqSection() {
  return (
    <Section>
      <JsonLd data={faqSchema(faqs)} />
      <div className="container grid gap-8 md:grid-cols-[5fr_1fr_6fr] md:gap-0">
        <Stack>
          <Eyebrow>FAQ</Eyebrow>
          <Heading>Questions parents often ask</Heading>
          <p>Can&apos;t find your answer? Our team is available around the clock.</p>
          <div>
            <ButtonLink href="/contact" variant="navy">
              Contact us
              <Icon name="arrow-right" size={18} />
            </ButtonLink>
          </div>
        </Stack>
        <div className="md:col-start-3">
          <FaqAccordion faqs={faqs} />
        </div>
      </div>
    </Section>
  );
}
