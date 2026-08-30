export const SITE_URL = "https://nourab.dev";
export const SITE_NAME = "Nour.dev";

export const SITE_DESCRIPTION =
  "Nour Aboushawish — Full-stack developer and cybersecurity master's student based in Norway. Next.js, React, TypeScript, Tailwind CSS.";

/**
 * Builds page metadata with a matching Open Graph block.
 *
 * Next merges metadata shallowly, so a page that sets `openGraph` replaces the
 * layout's entirely — without this helper, subpages silently inherit the home
 * page's og:title, og:description and og:url.
 */
export function pageMetadata({ title, description, path, noindex = false }) {
  return {
    title,
    description,
    alternates: { canonical: path },
    ...(noindex && { robots: { index: false } }),
    openGraph: {
      type: "website",
      title: title ? `${title} — ${SITE_NAME}` : SITE_NAME,
      description,
      url: path,
      images: ["/og-image.jpg"],
    },
  };
}
