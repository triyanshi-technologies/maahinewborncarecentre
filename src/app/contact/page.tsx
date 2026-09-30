import { mailtoHref, siteConfig } from "@/config/site";
import { createMetadata } from "@/lib/seo";
import { AppointmentForm } from "@/components/contact/AppointmentForm";
import { EmergencyCallout } from "@/components/sections/EmergencyCard";
import { PageHero } from "@/components/sections/PageHero";
import { ButtonLink } from "@/components/ui/Button";
import { Icon, type IconName } from "@/components/ui/Icon";
import { IconTile } from "@/components/ui/IconTile";
import { Section } from "@/components/ui/Section";
import { Eyebrow, Heading } from "@/components/ui/Typography";

export const metadata = createMetadata({
  title: "Contact MAAHI | Book OPD or Neonatal Transfer, Rajkot",
  description:
    "Call +91 78787 85108 (24x7) or book an OPD appointment. Goverdhan Society, Pandit Dindayal Upadhyay Marg, Rajkot.",
  path: "/contact",
});

type ContactItem = { icon: IconName; label: string; value: string; href?: string };

const contactItems: ContactItem[] = [
  {
    icon: "phone",
    label: "Call 24×7",
    value: siteConfig.phone.display,
    href: siteConfig.phone.href,
  },
  { icon: "mail", label: "Email us", value: siteConfig.email, href: mailtoHref },
  { icon: "map-pin", label: "Visit us", value: siteConfig.address.short, href: "#map" },
  // TODO: replace the placeholder with the confirmed OPD timings.
  { icon: "clock", label: "OPD hours", value: "[Add OPD timings] · Emergency 24×7" },
];

const contactCardClass =
  "flex flex-col gap-3.5 rounded-[26px] border border-line bg-white p-7 text-ink no-underline hover:text-ink";

function ContactCard({ icon, label, value, href }: ContactItem) {
  const content = (
    <>
      <IconTile icon={icon} iconSize={24} />
      <span className="text-sm font-bold text-pink">{label}</span>
      <span className="font-display text-xl leading-[1.35] font-semibold wrap-break-word">
        {value}
      </span>
    </>
  );

  return href ? (
    <a href={href} className={contactCardClass}>
      {content}
    </a>
  ) : (
    <div className={contactCardClass}>{content}</div>
  );
}

export default function ContactPage() {
  const { address } = siteConfig;

  return (
    <>
      <PageHero
        title="Contact & appointments"
        description="Book an OPD visit, request a neonatal transfer or ask our team a question - we respond around the clock."
        breadcrumbs={[{ label: "Contact" }]}
        image={{ src: "/images/reception.jpg", alt: "MAAHI reception desk" }}
      />

      <Section>
        <div className="container grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {contactItems.map((item) => (
            <ContactCard key={item.label} {...item} />
          ))}
        </div>
      </Section>

      <Section>
        <div className="container grid items-start gap-10 md:grid-cols-[7fr_5fr]">
          <div className="flex flex-col gap-6 rounded-xl border border-line bg-white p-[clamp(28px,4vw,52px)]">
            <Eyebrow>Book an appointment</Eyebrow>
            <Heading size="md">Request an OPD appointment</Heading>
            <p className="text-base text-muted">
              Share a few details and our team will call you back to confirm a time. For
              emergencies, please call {siteConfig.phone.display}.
            </p>
            <AppointmentForm />
          </div>

          <div className="flex flex-col gap-5.5">
            <EmergencyCallout />
            <div className="flex flex-col gap-4 rounded-xl border border-line bg-white p-9">
              <h2 className="text-xl">Address</h2>
              <address className="leading-[1.7] text-muted not-italic">
                {siteConfig.name}
                <br />
                Goverdhan Society, near Golden Super Market,
                <br />
                Pandit Dindayal Upadhyay Marg ({address.landmark}),
                <br />
                {address.city}, {address.region} {address.postalCode}
              </address>
              <ButtonLink href={siteConfig.directionsUrl} variant="outline" className="self-start">
                Get directions
                <Icon name="map-pin" size={18} />
              </ButtonLink>
            </div>
          </div>
        </div>
      </Section>

      <Section id="map" className="scroll-mt-40">
        <div className="container">
          <div className="h-110 overflow-hidden rounded-xl bg-sky-strong">
            <iframe
              src={siteConfig.mapEmbedUrl}
              title="MAAHI Newborn Care Centre on Google Maps"
              loading="lazy"
              allowFullScreen
              referrerPolicy="strict-origin-when-cross-origin"
              className="size-full border-0"
            />
          </div>
        </div>
      </Section>
    </>
  );
}
