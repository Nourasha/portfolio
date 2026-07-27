export default function Logo({ light = false }) {
  return (
    <div className="flex items-center gap-2">
      <span className="w-8 h-8 rounded-lg bg-accent text-white flex items-center justify-center font-display font-extrabold text-sm">
        N
      </span>
      <span className={`font-display text-lg font-extrabold tracking-tight ${light ? "text-white" : "text-ink"}`}>
        Nour.dev
      </span>
    </div>
  );
}
