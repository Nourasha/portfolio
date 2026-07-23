export default function PageHeader({ eyebrow, title, intro }) {
  return (
    <>
      <p className="text-xs font-semibold text-gray-500 uppercase tracking-widest mb-3">{eyebrow}</p>
      <h1 className={`font-serif text-4xl md:text-5xl text-gray-900 tracking-tight ${intro ? "mb-4" : "mb-16"}`}>
        {title}
      </h1>
      {intro && (
        <p className="text-gray-500 text-base font-light mb-16 max-w-lg">{intro}</p>
      )}
    </>
  );
}
