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
        <p className="text-gray-500 text-sm">Failed to load content. Please try again later.</p>
      </div>
    );

  if (!projectData)
    return (
      <div className="flex items-center justify-center h-screen">
        <p className="text-gray-500 text-sm">Loading...</p>
      </div>
    );

  return (
    <main className="max-w-5xl mx-auto px-8 py-20">
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

      {/* Cards */}
      <div className="grid md:grid-cols-2 gap-5">
        {projectData.map((project) => (
          <article
            key={project.title}
            className={`border rounded-2xl p-8 transition-all duration-200 hover:-translate-y-0.5 hover:shadow-sm
              ${project.featured
                ? "md:col-span-2 bg-gray-900 border-gray-800"
                : "bg-white border-gray-200 hover:border-gray-400"
              }`}
          >
            {/* Top meta */}
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-3">
                {project.featured && (
                  <span className="text-xs font-medium bg-white text-gray-900 px-2.5 py-0.5 rounded-full">
                    Featured
                  </span>
                )}
                <span className="text-xs font-medium uppercase tracking-widest text-gray-500">
                  {project.projectType === "personal" ? "Personal"
                    : project.projectType === "client" ? "Client"
                    : project.projectType === "school" ? "School"
                    : "Project"}
                </span>
              </div>
              {project.date && (
                <span className={`text-xs ${project.featured ? "text-gray-600" : "text-gray-500"}`}>
                  {new Date(project.date).getFullYear() || ""}
                </span>
              )}
            </div>

            {/* Title */}
            <h2 className={`font-serif text-2xl tracking-tight mb-2
              ${project.featured ? "text-white" : "text-gray-900"}`}>
              {project.link ? (
                <a href={project.link} target="_blank" rel="noopener noreferrer"
                  className={`inline-block no-underline border-b-2 pb-1 transition-all duration-300 ease-out hover:pb-0
                    ${project.featured
                      ? "text-white border-gray-700 hover:border-white"
                      : "text-gray-900 border-gray-300 hover:border-gray-900"}`}>
                  {project.title}
                </a>
              ) : (
                <span className={`inline-block border-b-2 pb-1
                  ${project.featured ? "border-gray-800" : "border-gray-200"}`}>
                  {project.title}
                </span>
              )}
            </h2>

            {/* Company */}
            {project.place && (
              <p className="text-xs font-medium mb-4 text-gray-500">
                {project.place}
              </p>
            )}

            {/* Description */}
            <p className={`text-sm leading-relaxed mb-6 font-light
              ${project.featured ? "text-gray-400" : "text-gray-500"}`}>
              {project.description}
            </p>

            {/* Footer */}
            <div className={`flex items-center justify-between pt-4 border-t
              ${project.featured ? "border-gray-800" : "border-gray-100"}`}>

              {/* Tags */}
              <div className="flex gap-2 flex-wrap">
                {project.tags?.map((tag) => (
                  <span key={tag}
                    className={`text-xs font-medium px-2.5 py-1 rounded-full
                      ${project.featured
                        ? "bg-gray-800 text-gray-400"
                        : "bg-gray-100 text-gray-500"}`}>
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
                  className={`no-underline text-xs font-medium transition-colors duration-150 whitespace-nowrap ml-4
                    ${project.featured
                      ? "text-gray-500 hover:text-white"
                      : "text-gray-500 hover:text-gray-900"}`}
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
