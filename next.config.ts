import type { NextConfig } from "next";

const securityHeaders = [
  { key: "X-Content-Type-Options", value: "nosniff" },
  { key: "X-Frame-Options", value: "SAMEORIGIN" },
  { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
  { key: "Permissions-Policy", value: "camera=(), microphone=(), geolocation=()" },
];

const nextConfig: NextConfig = {
  poweredByHeader: false,
  images: {
    formats: ["image/avif", "image/webp"],
    qualities: [75, 85],
  },
  async headers() {
    return [{ source: "/:path*", headers: securityHeaders }];
  },
  // Keep links to the old static `.html` URLs working (and passing SEO equity).
  async redirects() {
    return [
      { source: "/index.html", destination: "/", permanent: true },
      { source: "/404.html", destination: "/", permanent: true },
      { source: "/:page.html", destination: "/:page", permanent: true },
      { source: "/services/:slug.html", destination: "/services/:slug", permanent: true },
      { source: "/news/:slug.html", destination: "/news/:slug", permanent: true },
    ];
  },
};

export default nextConfig;
