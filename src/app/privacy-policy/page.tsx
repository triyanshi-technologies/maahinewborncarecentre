import { createMetadata } from "@/lib/seo";
import { Section } from "@/components/ui/Section";

export const metadata = createMetadata({
  title: "Privacy Policy | MAAHI Newborn Care Centre",
  description:
    "How MAAHI Newborn Care Centre collects and uses information submitted through this website.",
  path: "/privacy-policy",
});

export default function PrivacyPolicyPage() {
  return (
    <Section>
      <div className="container max-w-225">
        <h1 className="mb-6 text-8xl">Privacy Policy</h1>
        {/* TODO: replace with MAAHI's approved privacy policy. */}
        <p className="text-lg text-muted">
          [Add MAAHI&apos;s privacy policy here - how appointment-form details are collected, used
          and stored, and who to contact.]
        </p>
      </div>
    </Section>
  );
}
