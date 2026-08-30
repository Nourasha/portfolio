// 'unsafe-inline' in script-src: Next inlines its RSC bootstrap payload in the HTML.
// Tightening this requires a per-request nonce from middleware, which opts pages
// out of static rendering.
const CSP = [
  "default-src 'self'",
  "script-src 'self' 'unsafe-inline'",
  "style-src 'self' 'unsafe-inline' https://fonts.googleapis.com",
  "font-src 'self' https://fonts.gstatic.com",
  "img-src 'self' data: https://cdn.sanity.io",
  "connect-src 'self' https://*.sanity.io",
  "object-src 'none'",
  "base-uri 'self'",
  "frame-ancestors 'self'",
].join("; ");

// netlify.toml only applies headers to static CDN assets, not to responses the
// Next runtime generates — so the same set is declared here for every route.
const SECURITY_HEADERS = [
  { key: "Content-Security-Policy", value: CSP },
  { key: "X-Frame-Options", value: "SAMEORIGIN" },
  { key: "X-Content-Type-Options", value: "nosniff" },
  { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
  { key: "Permissions-Policy", value: "camera=(), microphone=(), geolocation=()" },
];

/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [{ protocol: 'https', hostname: 'cdn.sanity.io' }],
  },
  async headers() {
    return [{ source: "/:path*", headers: SECURITY_HEADERS }];
  },
  async redirects() {
    // /project was the URL until 2026-08-30; keep links in sent applications alive.
    return [{ source: "/project", destination: "/projects", permanent: true }];
  },
};

export default nextConfig;
