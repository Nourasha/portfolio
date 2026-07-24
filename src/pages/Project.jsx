import { useState, useEffect, useRef } from "react";
import sanityClient from "../lib/client";
import PageHeader from "../components/PageHeader";
import Seo from "../components/Seo";

export default function Project() {
  const [projectData, setProject] = useState(null);
  const [error, setError] = useState(false);
  const mountedRef = useRef(true);

  useEffect(() => {
    mountedRef.current = true;
    sanityClient
      .fetch(`*[_type == "project"] | order(featured desc, date desc) {
        title, date, place, description,
        projectType, githublink, link, tags,
        featured
      }`)
      .then((data) => {
        if (mountedRef.current) setProject(data);
      })
      .catch(() => {
        if (mountedRef.current) setError(true);
      });

    return () => {
      mountedRef.current = false;
    };
  }, []);

  if (error)
    return (
      <div className="flex items-center justify-center h-screen">
        <p className="text-muted text-sm">Failed to load content. Please try again later.</p>
      </div>
    );

  if (!projectData)
    return (
      <div className="flex items-center justify-center h-screen">
        <p className="text-muted text-sm">Loading...</p>
      </div>
    );

  return (
    <main className="max-w-6xl mx-auto px-8 py-20">
      <Seo
        title="Projects"
        description="Selected projects by Nour Aboushawish — a collection of things I've built, from personal tools to full web applications."
        path="/project"
      />

      <PageHeader
        eyebrow="Work"
        title="Selected Projects"
        intro="A collection of things I've built — from personal tools to full web applications."
      />

      <div className="grid md:grid-cols-2 gap-6">
        {projectData.map((project) => (
          <article
            key={project.title}
            className={`border rounded-2xl p-8 transition-all duration-200 hover:-translate-y-0.5 hover:shadow-md
              ${project.featured
                ? "md:col-span-2 bg-white border-accent shadow-sm"
                : "bg-white border-line"
              }`}
          >
            {/* Top meta */}
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-3">
                {project.featured && (
                  <span className="text-xs font-semibold bg-accent text-white px-2.5 py-0.5 rounded-full">
                    Featured
                  </span>
                )}
                <span className="text-xs font-semibold uppercase tracking-widest text-muted">
                  {project.projectType === "personal" ? "Personal"
                    : project.projectType === "client" ? "Client"
                    : project.projectType === "school" ? "School"
                    : "Project"}
                </span>
              </div>
              {project.date && (
                <span className="text-xs text-muted">
                  {new Date(project.date).getFullYear() || ""}
                </span>
              )}
            </div>

            {/* Title */}
            <h2 className="font-display text-2xl font-bold tracking-tight mb-2 text-ink">
              {project.link ? (
                <a href={project.link} target="_blank" rel="noopener noreferrer"
                  className="no-underline hover:text-accent transition-colors">
                  {project.title}
                </a>
              ) : (
                project.title
              )}
            </h2>

            {/* Company */}
            {project.place && (
              <p className="text-xs font-medium mb-4 text-muted">
                {project.place}
              </p>
            )}

            {/* Description */}
            <p className="text-sm leading-relaxed mb-6 text-muted">
              {project.description}
            </p>

            {/* Footer */}
            <div className="flex items-center justify-between pt-4 border-t border-line">

              {/* Tags */}
              <div className="flex gap-2 flex-wrap">
                {project.tags?.map((tag) => (
                  <span key={tag}
                    className="text-xs font-medium px-2.5 py-1 rounded-full bg-accent/10 text-accent">
                    {tag}
                  </span>
                ))}
              </div>

              {/* GitHub link */}
              {project.githublink && (
                <a
                  href={project.githublink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="no-underline text-xs font-semibold text-muted hover:text-accent transition-colors duration-150 whitespace-nowrap ml-4"
                >
                  View code →
                </a>
              )}
            </div>
          </article>
        ))}
      </div>
    </main>
  );
}
