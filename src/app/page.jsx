import Hero from "@/components/home/Hero";
import WhatIDo from "@/components/home/WhatIDo";
import FeaturedWork from "@/components/home/FeaturedWork";
import HowIBuild from "@/components/home/HowIBuild";
import EducationCertifications from "@/components/home/EducationCertifications";
import TechStack from "@/components/home/TechStack";
import ClosingCTA from "@/components/home/ClosingCTA";
import { pageMetadata, SITE_DESCRIPTION, SITE_NAME } from "@/lib/site";

export const revalidate = 3600;

export const metadata = {
  ...pageMetadata({
    title: "Home",
    description: SITE_DESCRIPTION,
    path: "/",
  }),
  // The root layout's title template does not apply to its own segment.
  title: { absolute: `Home — ${SITE_NAME}` },
  openGraph: {
    type: "website",
    title: "Nour Aboushawish — Developer & Security",
    description: SITE_DESCRIPTION,
    url: "/",
    images: ["/og-image.jpg"],
  },
};

export default function Home() {
  return (
    <main>
      <Hero />
      <WhatIDo />
      <FeaturedWork />
      <HowIBuild />
      <EducationCertifications />
      <TechStack />
      <ClosingCTA />
    </main>
  );
}
