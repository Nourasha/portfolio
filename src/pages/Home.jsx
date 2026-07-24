import Seo from "../components/Seo";
import Hero from "../components/home/Hero";
import WhatIDo from "../components/home/WhatIDo";
import FeaturedWork from "../components/home/FeaturedWork";
import HowIBuild from "../components/home/HowIBuild";
import TechStack from "../components/home/TechStack";
import ClosingCTA from "../components/home/ClosingCTA";

export default function Home() {
  return (
    <main>
      <Seo
        title="Home"
        description="Nour Aboushawish — Full-stack developer and cybersecurity master's student based in Norway. React, Node.js, TypeScript, Tailwind CSS."
        path="/"
      />

      <Hero />
      <WhatIDo />
      <FeaturedWork />
      <HowIBuild />
      <TechStack />
      <ClosingCTA />
    </main>
  );
}
