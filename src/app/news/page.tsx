import Link from "next/link";
import { articles, posts } from "@/content/news";
import { createMetadata } from "@/lib/seo";
import { CtaBand } from "@/components/sections/CtaBand";
import { PageHero } from "@/components/sections/PageHero";
import { Icon } from "@/components/ui/Icon";
import { Photo } from "@/components/ui/Photo";
import { Section } from "@/components/ui/Section";
import { Eyebrow, Heading, Stack } from "@/components/ui/Typography";

export const metadata = createMetadata({
  title: "News & Parent Guides | MAAHI Newborn Care Centre",
  description:
    "NICU milestones, preemie success stories and practical newborn-care advice from Team MAAHI, Rajkot.",
  path: "/news",
});

export default function NewsPage() {
  const [featured] = articles;

  return (
    <>
      <PageHero
        title="News, stories & parent guides"
        description="Milestones from our NICU, updates from Team MAAHI and practical advice for new parents."
        breadcrumbs={[{ label: "News & Stories" }]}
        image={{ src: "/images/team-2.jpg", alt: "Team MAAHI celebrating a discharge" }}
      />

      {featured && (
        <Section>
          <div className="container">
            <Link
              href={`/news/${featured.slug}`}
              className="grid items-center gap-7 rounded-xl border border-line bg-white p-5 text-ink no-underline hover:text-ink md:grid-cols-2 md:gap-14 md:pr-14"
            >
              <Photo src={featured.image.src} alt={featured.image.alt} className="h-70 sm:h-110" />
              <Stack>
                <Eyebrow>Featured announcement</Eyebrow>
                <Heading size="md">{featured.featured.title}</Heading>
                <p>{featured.featured.excerpt}</p>
                <span className="inline-flex items-center gap-2 text-md font-bold text-pink">
                  Read the full story
                  <Icon name="arrow-right" size={16} />
                </span>
              </Stack>
            </Link>
          </div>
        </Section>
      )}

      <Section>
        <div className="container grid gap-6 sm:grid-cols-2 md:grid-cols-3">
          {posts.map((post) => (
            <Link
              key={post.title}
              href={post.href}
              className="flex flex-col gap-3.5 rounded-lg border border-line bg-white px-3.5 pt-3.5 pb-6.5 text-ink no-underline hover:text-ink"
            >
              <Photo
                src={post.image.src}
                alt={post.image.alt}
                sizes="(min-width: 961px) 33vw, (min-width: 641px) 50vw, 100vw"
                className="mb-1 h-60 rounded-[20px]"
              />
              <span className="mx-3 self-start rounded-full bg-pink-tint px-3 py-1.5 text-xs font-bold text-pink">
                {post.category}
              </span>
              <h3 className="mx-3 text-2xl leading-[1.3]">{post.title}</h3>
              <p className="mx-3 text-md text-muted">{post.excerpt}</p>
              <span className="mx-3 inline-flex items-center gap-2 text-md font-bold text-navy">
                Read article
                <Icon name="arrow-right" size={16} />
              </span>
            </Link>
          ))}
        </div>
      </Section>

      <CtaBand />
    </>
  );
}
