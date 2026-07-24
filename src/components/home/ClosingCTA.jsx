import Button from "../Button";

export default function ClosingCTA() {
  return (
    <section className="bg-navy">
      <div className="max-w-3xl mx-auto px-4 md:px-8 py-14 md:py-20 text-center">
        <h2 className="font-display text-2xl sm:text-3xl md:text-4xl font-extrabold text-white tracking-tight mb-4">
          Let's build something <span className="text-accent-light">great</span>
        </h2>
        <p className="text-navy-muted text-base leading-relaxed mb-8 md:mb-10 max-w-md mx-auto">
          Open to freelance projects and full-time roles. Reach out and let's talk about what you're building.
        </p>
        <div className="flex gap-3 justify-center flex-wrap">
          <Button href="mailto:nour.abshawish@outlook.com">Hire me</Button>
          <Button to="/project" variant="secondary" className="!text-white !border-white/30 hover:!border-white">
            See my work
          </Button>
        </div>
      </div>
    </section>
  );
}
