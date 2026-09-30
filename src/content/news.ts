export type ArticleBlock =
  | { type: "paragraph"; text: string }
  | { type: "heading"; text: string }
  | { type: "quote"; text: string };

export type Article = {
  slug: string;
  category: string;
  breadcrumbLabel: string;
  title: string;
  /** ISO date. Leave undefined until the publish date is confirmed. */
  publishedAt?: string;
  readingTime: string;
  image: { src: string; alt: string };
  seo: { title: string; description: string };
  featured: { title: string; excerpt: string };
  body: ArticleBlock[];
};

export type PostCard = {
  category: string;
  title: string;
  excerpt: string;
  image: { src: string; alt: string };
  /** Target article. Posts without a page yet link to "#". */
  href: string;
};

export const articles: Article[] = [
  {
    slug: "nicu-on-wheels-launch",
    category: "Announcement",
    breadcrumbLabel: "NICU on Wheels",
    title: "Launching NICU on Wheels - our third neonatal ambulance",
    readingTime: "3 min read",
    image: { src: "/images/nicu-on-wheels-ambulance.jpg", alt: "NICU on Wheels ambulance" },
    seo: {
      title: "NICU on Wheels Launched in Rajkot | MAAHI News",
      description:
        "MAAHI launches NICU on Wheels, its third neonatal ambulance, with a neonatologist on board 24x7 for newborn transfers across Saurashtra and Kutch.",
    },
    featured: {
      title: "Launching NICU on Wheels - expert newborn care from the very first mile",
      excerpt:
        "Our third neonatal ambulance is dedicated exclusively to newborn transfers across Saurashtra and Kutch, with a neonatologist on board 24×7.",
    },
    body: [
      {
        type: "paragraph",
        text: "We are proud to announce the launch of NICU on Wheels at MAAHI Newborn Care Centre, Rajkot - our third neonatal ambulance and a further step in our commitment to advanced newborn care.",
      },
      { type: "heading", text: "Dedicated to newborns, and only newborns" },
      {
        type: "paragraph",
        text: "This state-of-the-art neonatal ambulance is used exclusively for the safe transfer of newborns across Saurashtra and Kutch, so that critically ill babies receive expert care from the very first mile of their journey.",
      },
      { type: "heading", text: "A neonatologist on board, 24×7" },
      {
        type: "paragraph",
        text: "NICU on Wheels is the only neonatal ambulance in the region with a neonatologist available around the clock during transport. Stabilisation begins at the referring hospital and continues all the way to our Level III NICU.",
      },
      { type: "quote", text: "Because every newborn deserves the best chance at life." },
      { type: "heading", text: "Part of a 42-bed Level III NICU" },
      {
        type: "paragraph",
        text: "NICU on Wheels extends the reach of our 42-bed Level III nursery - expanding access to timely, specialised and life-saving neonatal care wherever it is needed.",
      },
    ],
  },
];

export const posts: PostCard[] = [
  {
    category: "Success story",
    title: "26 weeks, 850 grams: an intact survival without sepsis",
    excerpt:
      "How Team MAAHI supported an extremely low birth weight baby through a 52-day NICU stay.",
    image: {
      src: "/images/team.jpg",
      alt: "26 weeks, 850 grams: an intact survival without sepsis",
    },
    href: "#",
  },
  {
    category: "Parent guide",
    title: "Free breastfeeding counselling for every MAAHI family",
    excerpt: "What our breastfeeding counsellors offer and how to book a session.",
    image: {
      src: "/images/hero-mother-newborn.jpg",
      alt: "Free breastfeeding counselling for every MAAHI family",
    },
    href: "#",
  },
  {
    category: "Technology",
    title: "Inhaled nitric oxide: why it matters for sick newborns",
    excerpt: "MAAHI was the first centre in the region to offer this therapy.",
    image: {
      src: "/images/nicu-image.jpg",
      alt: "Inhaled nitric oxide: why it matters for sick newborns",
    },
    href: "#",
  },
];

export const recentStories = [
  "26 weeks, 850 grams: an intact survival without sepsis",
  "Free breastfeeding counselling for every family",
  "Inhaled nitric oxide: why it matters",
];

export function getArticle(slug: string) {
  return articles.find((article) => article.slug === slug);
}
