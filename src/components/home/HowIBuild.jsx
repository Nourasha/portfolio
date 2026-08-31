import sanityClient from "@/lib/client";
import SectionHeading from "../SectionHeading";

export default async function HowIBuild() {
  const processSteps = await sanityClient.fetch(
    `*[_type == "processStep"] | order(order asc){ _id, title, description }`
  );

  return (
    <section className="max-w-6xl mx-auto px-4 md:px-8 py-14 md:py-20">
      <SectionHeading eyebrow="How I build" title="A simple process, followed consistently" />

      <ol className="grid grid-cols-2 lg:grid-cols-4 gap-5 md:gap-6">
        {processSteps?.map((item, index) => (
          <li key={item._id} className="text-center">
            <div className="w-12 h-12 rounded-full bg-accent text-white font-display font-bold flex items-center justify-center mx-auto mb-4">
              {String(index + 1).padStart(2, "0")}
            </div>
            <h3 className="font-display font-bold text-ink text-base mb-2">{item.title}</h3>
            <p className="text-muted text-sm leading-relaxed">{item.description}</p>
          </li>
        ))}
      </ol>
    </section>
  );
}
