import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { siteConfig } from "@/config/site";
import { articles, getArticle, recentStories, type ArticleBlock } from "@/content/news";
import { articleSchema } from "@/lib/schema";
import { createMetadata } from "@/lib/seo";
import { Breadcrumbs } from "@/components/sections/Breadcrumbs";
import { CtaBand } from "@/components/sections/CtaBand";
import { JsonLd } from "@/components/seo/JsonLd";
import { ButtonLink } from "@/components/ui/Button";
import { Icon } from "@/components/ui/Icon";
import { Photo } from "@/components/ui/Photo";
import { Section } from "@/components/ui/Section";
import { Eyebrow } from "@/components/ui/Typography";

type ArticlePageProps = PageProps<"/news/[slug]">;

export const dynamicParams = false;

export function generateStaticParams() {
  return articles.map(({ slug }) => ({ slug }));
}

export async function generateMetadata({ params }: ArticlePageProps): Promise<Metadata> {
  const { slug } = await params;
  const article = getArticle(slug);
  if (!article) return {};

  return createMetadata({
    ...article.seo,
    path: `/news/${article.slug}`,
    image: article.image.src,
    type: "article",
  });
}

function ArticleBlockView({ block }: { block: ArticleBlock }) {
  switch (block.type) {
    case "heading":
      return <h2 className="mt-2.5 text-5xl">{block.text}</h2>;
    case "quote":
      return (
        <blockquote className="my-2 rounded-lg bg-sky px-9 py-8 font-display text-4xl leading-[1.4] font-medium text-navy">
          {block.text}
        </blockquote>
      );
    case "paragraph":
      return <p className="text-lg leading-[1.75] text-muted">{block.text}</p>;
  }
}

export default async function ArticlePage({ params }: ArticlePageProps) {
  const { slug } = await params;
  const article = getArticle(slug);
  if (!article) notFound();

  return (
    <>
      <JsonLd data={articleSchema(article)} />

      <Section className="pt-18 pb-0 text-center">
        <div className="container flex max-w-225 flex-col items-center gap-5.5">
          <Breadcrumbs
            tone="dark"
            items={[
              { label: "Home", href: "/" },
              { label: "News & Stories", href: "/news" },
              { label: article.breadcrumbLabel },
            ]}
          />
          <Eyebrow className="self-center">{article.category}</Eyebrow>
          <h1 className="text-display-lg leading-[1.1]">{article.title}</h1>
          <p className="text-md text-muted">
            By Team MAAHI ·{" "}
            {article.publishedAt ? (
              <time dateTime={article.publishedAt}>
                {new Date(article.publishedAt).toLocaleDateString("en-IN", { dateStyle: "long" })}
              </time>
            ) : (
              "[Publish date]"
            )}{" "}
            · {article.readingTime}
          </p>
        </div>
      </Section>

      <Section className="container pt-12 pb-0">
        <Photo
          src={article.image.src}
          alt={article.image.alt}
          preload
          sizes="(min-width: 1280px) 1200px, 100vw"
          className="h-70 rounded-xl sm:h-140"
        />
      </Section>

      <Section>
        <div className="container grid items-start gap-12 md:grid-cols-[8fr_4fr]">
          <article className="flex max-w-190 flex-col gap-5.5">
            {article.body.map((block, index) => (
              <ArticleBlockView key={index} block={block} />
            ))}
            <div className="flex flex-wrap gap-3.5">
              <ButtonLink href={siteConfig.phone.href}>
                <Icon name="phone" size={18} />
                Request a transfer
              </ButtonLink>
              <ButtonLink href="/news" variant="outline">
                Back to all stories
                <Icon name="arrow-right" size={18} />
              </ButtonLink>
            </div>
          </article>

          <aside className="flex flex-col gap-6 max-md:order-2 md:sticky md:top-39">
            <div className="rounded-lg border border-line bg-white p-7">
              <h2 className="pb-4 text-xl">Recent stories</h2>
              <ul className="flex flex-col gap-4.5">
                {recentStories.map((title) => (
                  <li key={title}>
                    <Link
                      href="/news"
                      className="flex items-center gap-3.5 text-md leading-[1.4] font-semibold text-ink no-underline"
                    >
                      <span
                        aria-hidden="true"
                        className="h-16 w-19 shrink-0 rounded-sm bg-sky-strong"
                      />
                      <span>{title}</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div className="flex flex-col gap-3 rounded-lg bg-navy p-7.5 text-white">
              <Icon name="ambulance" />
              <h2 className="text-2xl text-white">Need a neonatal transfer?</h2>
              <p className="text-md text-on-dark">
                Call our 24×7 line and a neonatologist will guide you immediately.
              </p>
              <a
                href={siteConfig.phone.href}
                className="font-display text-3xl font-bold text-white no-underline hover:text-white"
              >
                {siteConfig.phone.display}
              </a>
            </div>
          </aside>
        </div>
      </Section>

      <CtaBand />
    </>
  );
}
