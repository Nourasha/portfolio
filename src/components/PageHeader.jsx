import Eyebrow from "./Eyebrow";

export default function PageHeader({ eyebrow, title, intro }) {
  return (
    <>
      <Eyebrow>{eyebrow}</Eyebrow>
      <h1 className={`font-display text-4xl md:text-5xl font-extrabold text-ink tracking-tight ${intro ? "mb-4" : "mb-16"}`}>
        {title}
      </h1>
      {intro && (
        <p className="text-muted text-base mb-16 max-w-lg">{intro}</p>
      )}
    </>
  );
}
