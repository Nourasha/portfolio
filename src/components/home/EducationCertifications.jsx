import sanityClient from "@/lib/client";
import SectionHeading from "../SectionHeading";

const TYPE_LABELS = {
  degree: "Degree",
  certification: "Certification",
};

export default async function EducationCertifications() {
  const credentials = await sanityClient.fetch(
    `*[_type == "credential"] | order(order asc){
      _id, title, type, institution, period, description
    }`
  );

  if (!credentials || credentials.length === 0) return null;

  return (
    <section className="max-w-6xl mx-auto px-4 md:px-8 py-14 md:py-20 border-t border-line">
      <SectionHeading eyebrow="Education & Certifications" title="The foundation behind the work" />

      <ul className="max-w-3xl mx-auto divide-y divide-line border-t border-b border-line">
        {credentials.map((item) => (
          <li key={item._id} className="py-6 sm:py-7">
            <div className="flex items-center gap-3 flex-wrap mb-2">
              {item.type && (
                <span className="text-xs font-semibold uppercase tracking-widest text-accent bg-accent/10 px-2.5 py-1 rounded-full">
                  {TYPE_LABELS[item.type] ?? item.type}
                </span>
              )}
              {item.period && (
                <span className="text-xs text-muted">{item.period}</span>
              )}
            </div>
            <h3 className="font-display font-bold text-ink text-lg mb-1">{item.title}</h3>
            {item.institution && (
              <p className="text-sm text-muted mb-2">{item.institution}</p>
            )}
            {item.description && (
              <p className="text-muted text-sm leading-relaxed">{item.description}</p>
            )}
          </li>
        ))}
      </ul>
    </section>
  );
}
