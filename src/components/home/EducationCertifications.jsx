import { useEffect, useState, useRef } from "react";
import sanityClient from "../../lib/client";

const TYPE_LABELS = {
  degree: "Degree",
  certification: "Certification",
};

export default function EducationCertifications() {
  const [credentials, setCredentials] = useState(null);
  const mountedRef = useRef(true);

  useEffect(() => {
    mountedRef.current = true;
    sanityClient
      .fetch(`*[_type == "credential"] | order(order asc){
        title, type, institution, period, description
      }`)
      .then((data) => {
        if (mountedRef.current) setCredentials(data);
      })
      .catch(() => {});

    return () => {
      mountedRef.current = false;
    };
  }, []);

  if (!credentials || credentials.length === 0) return null;

  return (
    <section className="max-w-6xl mx-auto px-4 md:px-8 py-14 md:py-20 border-t border-line">
      <div className="text-center max-w-2xl mx-auto mb-10 md:mb-14">
        <span className="inline-block bg-accent/10 text-accent text-xs font-semibold uppercase tracking-widest px-4 py-1.5 rounded-full mb-4">
          Education &amp; Certifications
        </span>
        <h2 className="font-display text-2xl sm:text-3xl md:text-4xl font-extrabold text-ink tracking-tight">
          The foundation behind the work
        </h2>
      </div>

      <div className="max-w-3xl mx-auto divide-y divide-line border-t border-b border-line">
        {credentials.map((item) => (
          <div key={item.title} className="py-6 sm:py-7">
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
          </div>
        ))}
      </div>
    </section>
  );
}
