import { useState, useEffect } from "react";
import sanityClient from "../lib/client";

export default function Project() {
  const [projectData, setProject] = useState(null);

  useEffect(() => {
    sanityClient
      .fetch(`*[_type == "project"] | order(featured desc, date desc) {
        title, date, place, description,
        projectType, githublink, link, tags,
        featured
      }`)
      .then((data) => {
        const sorted = [...data].sort((a, b) => (b.featured ? 1 : 0) - (a.featured ? 1 : 0));
        setProject(sorted);
      })
      .catch(console.error);
  }, []);

  if (!projectData)
    return (
      <div className="flex items-center justify-center h-screen">
        <p className="text-gray-400 text-sm">Loading...</p>
      </div>
    );

  return (
    <main className="max-w-5xl mx-auto px-8 py-20">

      {/* Header */}
      <p className="text-xs font-semibold text-gray-400 uppercase tracking-widest mb-3">Work</p>
      <h1 className="font-serif text-4xl text-gray-900 tracking-tight mb-4">
        Selected projects
      </h1>
      <p className="text-gray-500 text-base font-light mb-16 max-w-lg">
        A collection of things I've built — from personal tools to full web applications.
      </p>

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
                <span className={`text-xs font-medium uppercase tracking-widest
                  ${project.featured ? "text-gray-500" : "text-gray-400"}`}>
                  {project.projectType === "personal" ? "Personal"
                    : project.projectType === "client" ? "Client"
                    : project.projectType === "school" ? "School"
                    : "Project"}
                </span>
              </div>
              {project.date && (
                <span className={`text-xs ${project.featured ? "text-gray-600" : "text-gray-400"}`}>
                  {new Date(project.date).getFullYear() || ""}
                </span>
              )}
            </div>

            {/* Title */}
            <h2 className={`font-serif text-2xl tracking-tight mb-2
              ${project.featured ? "text-white" : "text-gray-900"}`}>
              {project.link ? (
                <a href={project.link} target="_blank" rel="noopener noreferrer"
                  className={`no-underline hover:opacity-70 transition-opacity
                    ${project.featured ? "text-white" : "text-gray-900"}`}>
                  {project.title}
                </a>
              ) : project.title}
            </h2>

            {/* Company */}
            {project.place && (
              <p className={`text-xs font-medium mb-4
                ${project.featured ? "text-gray-500" : "text-gray-400"}`}>
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
                    className={`text-xs font-medium px-2.5 py-1 rounded-md
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
                  className={`no-underline text-xs font-medium transition-colors whitespace-nowrap ml-4
                    ${project.featured
                      ? "text-gray-500 hover:text-white"
                      : "text-gray-400 hover:text-gray-900"}`}
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