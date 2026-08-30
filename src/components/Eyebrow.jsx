export default function Eyebrow({ children, dark = false }) {
  return (
    <span
      className={`inline-block text-xs font-semibold uppercase tracking-widest px-4 py-1.5 rounded-full mb-4
        ${dark ? "bg-white/10 text-white" : "bg-accent/10 text-accent"}`}
    >
      {children}
    </span>
  );
}
