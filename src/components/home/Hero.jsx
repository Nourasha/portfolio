import Button from "../Button";
import HeroGraphic from "./HeroGraphic";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-navy">
      <HeroGraphic />

      <div className="relative z-10 max-w-6xl mx-auto px-4 md:px-8 py-16 md:py-28">
        <div className="max-w-xl">
          <span className="inline-block bg-white border border-line rounded-full px-4 py-1.5 text-xs font-semibold text-accent shadow-sm mb-6 md:mb-8">
            ● Open for work
          </span>

          <h1 className="font-display text-4xl sm:text-5xl md:text-6xl font-extrabold text-white leading-tight tracking-tight mb-5 md:mb-6">
            I build <span className="text-accent-light">secure</span><br />
            products for the web.
          </h1>

          <p className="text-navy-muted text-base sm:text-lg leading-relaxed mb-8 md:mb-10 max-w-lg">
            Full-stack developer and cybersecurity master's student based in Norway. I build clean, fast, and accessible web applications — and think about how they get attacked while I build them.
          </p>

          <div className="flex gap-3 flex-wrap">
            <Button to="/project">See my projects</Button>
            <Button to="/about" variant="secondary" className="!text-white !border-white/30 hover:!border-white">
              About me
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
