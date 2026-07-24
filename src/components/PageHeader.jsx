export default function PageHeader({ eyebrow, title, intro }) {
  return (
    <>
      <span className="inline-block bg-accent/10 text-accent text-xs font-semibold uppercase tracking-widest px-4 py-1.5 rounded-full mb-4">
        {eyebrow}
      </span>
      <h1 className={`font-display text-4xl md:text-5xl font-extrabold text-ink tracking-tight ${intro ? "mb-4" : "mb-16"}`}>
        {title}
      </h1>
      {intro && (
        <p className="text-muted text-base mb-16 max-w-lg">{intro}</p>
      )}
    </>
  );
}
