import Skills from "../Skills";

export default function TechStack() {
  return (
    <section className="max-w-6xl mx-auto px-4 md:px-8 py-12 md:py-16 border-t border-line">
      <p className="text-center text-xs font-semibold text-muted uppercase tracking-widest mb-6 md:mb-8">
        Technologies I work with
      </p>
      <div className="flex justify-center">
        <Skills />
      </div>
    </section>
  );
}
