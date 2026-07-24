import { useEffect, useState, useRef } from "react";
import sanityClient from "../../lib/client";

export default function HowIBuild() {
  const [processSteps, setProcessSteps] = useState(null);
  const mountedRef = useRef(true);

  useEffect(() => {
    mountedRef.current = true;
    sanityClient
      .fetch(`*[_type == "processStep"] | order(order asc){ title, description }`)
      .then((data) => {
        if (mountedRef.current) setProcessSteps(data);
      })
      .catch(() => {});

    return () => {
      mountedRef.current = false;
    };
  }, []);

  return (
    <section className="max-w-6xl mx-auto px-4 md:px-8 py-14 md:py-20">
      <div className="text-center max-w-2xl mx-auto mb-10 md:mb-14">
        <span className="inline-block bg-accent/10 text-accent text-xs font-semibold uppercase tracking-widest px-4 py-1.5 rounded-full mb-4">
          How I build
        </span>
        <h2 className="font-display text-2xl sm:text-3xl md:text-4xl font-extrabold text-ink tracking-tight">
          A simple process, followed consistently
        </h2>
      </div>

      <div className="grid grid-cols-2 lg:grid-cols-4 gap-5 md:gap-6">
        {processSteps?.map((item, index) => (
          <div key={item.title} className="text-center">
            <div className="w-12 h-12 rounded-full bg-accent text-white font-display font-bold flex items-center justify-center mx-auto mb-4">
              {String(index + 1).padStart(2, "0")}
            </div>
            <h3 className="font-display font-bold text-ink text-base mb-2">{item.title}</h3>
            <p className="text-muted text-sm leading-relaxed">{item.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
