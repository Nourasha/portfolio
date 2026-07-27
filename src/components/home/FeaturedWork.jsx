import useSanityQuery from "../../lib/useSanityQuery";
import SectionHeading from "../SectionHeading";

export default function FeaturedWork() {
  const { data: projects, error } = useSanityQuery(
    `*[_type == "project" && showOnHome == true] | order(date desc) {
      title, date, description, link, tags, featured
    }`
  );

  const isSingle = projects?.length === 1;

  return (
    <section className="bg-navy">
      <div className="max-w-6xl mx-auto px-4 md:px-8 py-14 md:py-20">
        <SectionHeading dark eyebrow="Featured work" title="Built, shipped, and in use" />

        {error && <p className="text-navy-muted text-sm text-center">Failed to load projects.</p>}

        {projects && (
          <div className={isSingle ? "flex justify-center" : "grid md:grid-cols-3 gap-4 md:gap-5"}>
            {projects.map((project) => (
              <article
                key={project.title}
                className={`bg-white/5 border border-white/10 rounded-2xl p-6 md:p-7 ${isSingle ? "w-full max-w-md" : ""}`}
              >
                {project.featured && (
                  <span className="inline-block bg-accent/20 text-accent-light text-xs font-semibold uppercase tracking-widest px-2.5 py-1 rounded-full mb-4">
                    Featured
                  </span>
                )}
                <h3 className="font-display font-bold text-white text-lg mb-2">{project.title}</h3>
                <p className="text-navy-muted text-sm leading-relaxed mb-5">{project.description}</p>
                <div className="flex gap-2 flex-wrap mb-5">
                  {project.tags?.map((tag) => (
                    <span key={tag} className="text-xs text-navy-muted bg-white/5 border border-white/10 rounded-full px-2.5 py-1">
                      {tag}
                    </span>
                  ))}
                </div>
                {project.link && (
                  <a href={project.link} target="_blank" rel="noopener noreferrer" className="no-underline text-sm font-semibold text-accent-light hover:text-white transition-colors">
                    View project →
                  </a>
                )}
              </article>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
