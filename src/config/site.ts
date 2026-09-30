export const siteConfig = {
  name: "MAAHI Newborn Care Centre",
  shortName: "MAAHI",
  legalName: "Medical Academy and Advanced Healthcare Institute",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.maahinewborncarecentre.com",
  description:
    "Rajkot's first exclusive neonatal centre since 2015: 42-bed Level III NICU, 4 neonatologists 24x7 and NICU on Wheels across Saurashtra & Kutch.",
  ogImage: "/images/hero-mother-newborn.jpg",
  foundingYear: 2015,
  themeColor: "#123F6E",
  locale: "en_IN",
  phone: {
    display: "+91 78787 85108",
    href: "tel:+917878785108",
    e164: "+917878785108",
  },
  email: "maahinicu2015@gmail.com",
  address: {
    street: "Goverdhan Society, near Golden Super Market, Pandit Dindayal Upadhyay Marg",
    landmark: "Amin Marg",
    city: "Rajkot",
    region: "Gujarat",
    postalCode: "360005",
    country: "IN",
    short: "Pandit Dindayal Upadhyay Marg, Rajkot",
  },
  areaServed: ["Rajkot", "Saurashtra", "Kutch"],
  social: {
    facebook: "https://www.facebook.com/maahinicu/",
  },
  directionsUrl: "https://maps.google.com/?q=MAAHI+Newborn+Care+Centre+Rajkot",
  mapEmbedUrl:
    "https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d18170.792405770146!2d70.782088!3d22.283916!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3959ca3bf1d3735b%3A0xef6e3de4ef219c4!2sMAAHI%20Newborn%20Care%20Center!5e1!3m2!1sen!2sus!4v1790743370067!5m2!1sen!2sus",
  reviewsWidgetId: "01a0d29c97e87000835d3db0c1c2393f35b7",
} as const;

export const mailtoHref = `mailto:${siteConfig.email}`;
