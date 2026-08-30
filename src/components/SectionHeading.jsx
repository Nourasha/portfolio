import Eyebrow from "./Eyebrow";

export default function SectionHeading({ eyebrow, title, dark = false }) {
  return (
    <div className="text-center max-w-2xl mx-auto mb-10 md:mb-14">
      <Eyebrow dark={dark}>{eyebrow}</Eyebrow>
      <h2
        className={`font-display text-2xl sm:text-3xl md:text-4xl font-extrabold tracking-tight
          ${dark ? "text-white" : "text-ink"}`}
      >
        {title}
      </h2>
    </div>
  );
}
