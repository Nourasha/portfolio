import sanityClient from "@/lib/client";
import SectionHeading from "../SectionHeading";

const BORDER_COLORS = {
  icon1: "border-t-icon1",
  icon2: "border-t-icon2",
  icon3: "border-t-icon3",
  icon4: "border-t-icon4",
  icon5: "border-t-icon5",
  icon6: "border-t-icon6",
};

export default async function WhatIDo() {
  const whatIDo = await sanityClient.fetch(
    `*[_type == "service"] | order(order asc){ title, description, color }`
  );

  return (
    <section className="max-w-6xl mx-auto px-4 md:px-8 py-14 md:py-20">
      <SectionHeading
        eyebrow="What I do"
        title={<>Everywhere from data model to <span className="text-accent">deployed product</span></>}
      />

      <ul className="grid grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4 md:gap-5">
        {whatIDo?.map((item) => (
          <li
            key={item.title}
            className={`bg-white border border-line rounded-2xl p-4 sm:p-6 md:p-7 shadow-sm border-t-4 ${BORDER_COLORS[item.color] ?? "border-t-icon1"}`}
          >
            <h3 className="font-display font-bold text-ink text-base sm:text-lg mb-2">{item.title}</h3>
            <p className="text-muted text-sm leading-relaxed">{item.description}</p>
          </li>
        ))}
      </ul>
    </section>
  );
}
