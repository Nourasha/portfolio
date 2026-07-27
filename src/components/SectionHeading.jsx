export default function SectionHeading({ eyebrow, title, dark = false }) {
  return (
    <div className="text-center max-w-2xl mx-auto mb-10 md:mb-14">
      <span
        className={`inline-block text-xs font-semibold uppercase tracking-widest px-4 py-1.5 rounded-full mb-4
          ${dark ? "bg-white/10 text-white" : "bg-accent/10 text-accent"}`}
      >
        {eyebrow}
      </span>
      <h2
        className={`font-display text-2xl sm:text-3xl md:text-4xl font-extrabold tracking-tight
          ${dark ? "text-white" : "text-ink"}`}
      >
        {title}
      </h2>
    </div>
  );
}
