import { useEffect, useState, useRef } from "react";
import sanityClient from "../../lib/client";

export default function FeaturedWork() {
  const [projects, setProjects] = useState(null);
  const [error, setError] = useState(false);
  const mountedRef = useRef(true);

  useEffect(() => {
    mountedRef.current = true;
    sanityClient
      .fetch(`*[_type == "project" && showOnHome == true] | order(date desc) {
        title, date, description, link, tags, featured
      }`)
      .then((data) => {
        if (mountedRef.current) setProjects(data);
      })
      .catch(() => {
        if (mountedRef.current) setError(true);
      });

    return () => {
      mountedRef.current = false;
    };
  }, []);

  return (
    <section className="bg-navy">
      <div className="max-w-6xl mx-auto px-4 md:px-8 py-14 md:py-20">
        <div className="text-center max-w-2xl mx-auto mb-10 md:mb-14">
          <span className="inline-block bg-white/10 text-white text-xs font-semibold uppercase tracking-widest px-4 py-1.5 rounded-full mb-4">
            Featured work
          </span>
          <h2 className="font-display text-2xl sm:text-3xl md:text-4xl font-extrabold text-white tracking-tight">
            Built, shipped, and in use
          </h2>
        </div>

        {error && <p className="text-navy-muted text-sm text-center">Failed to load projects.</p>}

        {projects && (
          <div className="grid md:grid-cols-3 gap-4 md:gap-5">
            {projects.map((project) => (
              <div key={project.title} className="bg-white/5 border border-white/10 rounded-2xl p-6 md:p-7">
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
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
