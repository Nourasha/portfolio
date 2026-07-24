function Cube({ size, style, className = "", light = "#9d93f5", mid = "#5b4fe0", dark = "#3c34a0" }) {
  return (
    <div className={`absolute ${className}`} style={{ width: size, height: size, ...style }}>
      <div
        className="absolute inset-0 [clip-path:polygon(50%_0%,100%_25%,50%_50%,0%_25%)]"
        style={{ background: light }}
      />
      <div
        className="absolute inset-0 [clip-path:polygon(0%_25%,50%_50%,50%_100%,0%_75%)]"
        style={{ background: mid }}
      />
      <div
        className="absolute inset-0 [clip-path:polygon(50%_50%,100%_25%,100%_75%,50%_100%)]"
        style={{ background: dark }}
      />
    </div>
  );
}

function Sphere({ size, style, className = "" }) {
  return (
    <div
      className={`absolute rounded-full shadow-xl ${className}`}
      style={{
        width: size,
        height: size,
        background: "radial-gradient(circle at 32% 28%, #b3a9ff, #5b4fe0 55%, #362d8f 100%)",
        ...style,
      }}
    />
  );
}

export default function HeroGraphic() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden="true">
      {/* Ambient glow */}
      <div className="absolute top-1/2 right-[10%] -translate-y-1/2 w-[60vw] max-w-[420px] h-[60vw] max-h-[420px] rounded-full bg-accent/25 blur-3xl" />

      {/* Always-visible core shapes, sized fluidly for any viewport */}
      <Cube
        style={{ width: "clamp(90px, 16vw, 150px)", height: "clamp(90px, 16vw, 150px)", top: "8%", right: "6%" }}
        className="rotate-6 animate-float"
      />
      <Sphere
        style={{ width: "clamp(40px, 8vw, 70px)", height: "clamp(40px, 8vw, 70px)", bottom: "12%", right: "10%" }}
        className="animate-float-delay"
      />

      {/* Supplementary shapes — richer composition on wider screens */}
      <Cube
        size={90}
        style={{ top: "40%", right: "30%" }}
        className="-rotate-12 animate-float-delay hidden md:block"
        light="#7c72ea"
        mid="#4a3fd0"
        dark="#332a8c"
      />
      <Cube
        size={64}
        style={{ bottom: "6%", right: "42%" }}
        className="rotate-12 animate-float-slow hidden lg:block"
      />

      <Sphere size={48} style={{ top: "14%", right: "38%" }} className="animate-float hidden sm:block" />
      <Sphere size={28} style={{ top: "26%", right: "56%" }} className="animate-float-slow hidden lg:block" />
      <Sphere size={54} style={{ bottom: "22%", right: "52%" }} className="animate-float hidden lg:block" />

      {/* Tilted ring */}
      <div
        className="absolute w-28 h-28 rounded-full border-[8px] border-accent-light/40 animate-float-slow hidden lg:block"
        style={{ top: "16%", right: "62%", transform: "scaleY(0.45) rotate(-18deg)" }}
      />

      {/* Scrim so text on the left always stays legible */}
      <div className="absolute inset-0 bg-gradient-to-r from-navy via-navy/85 to-navy/25" />
    </div>
  );
}
