import { siteConfig } from "@/config/site";
import { ButtonLink } from "@/components/ui/Button";
import { Icon } from "@/components/ui/Icon";
import { IconTile } from "@/components/ui/IconTile";

/** Compact pink emergency card used in sidebars. */
export function EmergencyCard() {
  return (
    <div className="flex flex-col gap-3.5 rounded-lg bg-pink p-8 text-white">
      <IconTile icon="phone" iconSize={24} tone="glass" />
      <h2 className="text-3xl text-white">Newborn emergency?</h2>
      <p className="text-md text-on-pink">
        Neonatologists and NICU on Wheels are available 24 × 7 × 365.
      </p>
      <a
        href={siteConfig.phone.href}
        className="font-display text-4xl font-bold text-white no-underline hover:text-white"
      >
        {siteConfig.phone.display}
      </a>
    </div>
  );
}

/** Larger variant with a call button, used on the contact page. */
export function EmergencyCallout() {
  return (
    <div className="flex flex-col gap-3.5 rounded-xl bg-pink p-10 text-white">
      <Icon name="ambulance" size={36} />
      <h2 className="text-4xl text-white">Newborn emergency or transfer?</h2>
      <p className="text-md text-on-pink">
        Skip the form. Call now and speak to a neonatologist - NICU on Wheels is ready 24 × 7.
      </p>
      <ButtonLink
        href={siteConfig.phone.href}
        variant="white"
        className="self-start text-pink hover:text-pink"
      >
        <Icon name="phone" size={18} />
        {siteConfig.phone.display}
      </ButtonLink>
    </div>
  );
}
