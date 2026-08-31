import { EMAIL, GITHUB_URL, LINKEDIN_URL } from "@/lib/constants";
import { SITE_URL } from "@/lib/site";

const PERSON = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Nour Aboushawish",
  url: SITE_URL,
  email: `mailto:${EMAIL}`,
  jobTitle: "Full-stack developer",
  description:
    "Full-stack developer and cybersecurity master's student based in Norway.",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Rakkestad",
    addressCountry: "NO",
  },
  alumniOf: {
    "@type": "CollegeOrUniversity",
    name: "Østfold University College",
  },
  knowsLanguage: ["no", "en", "ar"],
  sameAs: [GITHUB_URL, LINKEDIN_URL],
};

export default function PersonSchema() {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(PERSON) }}
    />
  );
}
