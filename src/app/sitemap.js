import { SITE_URL } from "@/lib/site";

export default function sitemap() {
  return [
    { url: SITE_URL, priority: 1.0 },
    { url: `${SITE_URL}/projects`, priority: 0.8 },
    { url: `${SITE_URL}/about`, priority: 0.8 },
  ];
}
