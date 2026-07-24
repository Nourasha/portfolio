import { useEffect, useState, useRef } from "react";
import sanityClient from "../../lib/client";

const ICON_COLORS = {
  icon1: "bg-icon1",
  icon2: "bg-icon2",
  icon3: "bg-icon3",
  icon4: "bg-icon4",
  icon5: "bg-icon5",
  icon6: "bg-icon6",
};

const BORDER_COLORS = {
  icon1: "border-t-icon1",
  icon2: "border-t-icon2",
  icon3: "border-t-icon3",
  icon4: "border-t-icon4",
  icon5: "border-t-icon5",
  icon6: "border-t-icon6",
};

export default function WhatIDo() {
  const [whatIDo, setWhatIDo] = useState(null);
  const mountedRef = useRef(true);

  useEffect(() => {
    mountedRef.current = true;
    sanityClient
      .fetch(`*[_type == "service"] | order(order asc){ title, description, color }`)
      .then((data) => {
        if (mountedRef.current) setWhatIDo(data);
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
          What I do
        </span>
        <h2 className="font-display text-2xl sm:text-3xl md:text-4xl font-extrabold text-ink tracking-tight">
          Everywhere from data model to <span className="text-accent">deployed product</span>
        </h2>
      </div>

      <div className="grid grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4 md:gap-5">
        {whatIDo?.map((item) => (
          <div
            key={item.title}
            className={`bg-white border border-line rounded-2xl p-4 sm:p-6 md:p-7 shadow-sm border-t-4 md:border-t md:border-t-line ${BORDER_COLORS[item.color] ?? "border-t-icon1"}`}
          >
            <div className={`hidden md:block w-11 h-11 rounded-xl ${ICON_COLORS[item.color] ?? "bg-icon1"} mb-5`} />
            <h3 className="font-display font-bold text-ink text-base sm:text-lg mb-2">{item.title}</h3>
            <p className="text-muted text-sm leading-relaxed">{item.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
