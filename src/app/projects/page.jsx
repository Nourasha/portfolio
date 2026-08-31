import PageHeader from "@/components/PageHeader";
import PageStatus from "@/components/PageStatus";
import ProjectCard from "@/components/ProjectCard";
import sanityClient from "@/lib/client";
import { pageMetadata } from "@/lib/site";

export const revalidate = 3600;

export const metadata = pageMetadata({
  title: "Projects",
  description:
    "Selected projects by Nour Aboushawish — a collection of things I've built, from personal tools to full web applications.",
  path: "/projects",
});

export default async function Project() {
  const projectData = await sanityClient.fetch(
    // coalesce: a project created in Studio without touching the "featured"
    // toggle has no such field, and an undefined value does not sort reliably.
    `*[_type == "project"] | order(coalesce(featured, false) desc, date desc) {
      _id, title, date, place, description,
      projectType, githublink, link, tags,
      featured
    }`
  );

  if (!projectData?.length) {
    return <PageStatus>Failed to load content. Please try again later.</PageStatus>;
  }

  // Safety net for a production symptom where the featured project did not come
  // back first. The coalesce above is the likely fix; this could not be
  // reproduced afterwards, so the guard stays until it has survived a while.
  const projects = [...projectData].sort((a, b) => (b.featured ? 1 : 0) - (a.featured ? 1 : 0));

  return (
    <main className="max-w-6xl mx-auto px-8 py-20">
      <PageHeader
        eyebrow="Work"
        title="Selected Projects"
        intro="A collection of things I've built — from personal tools to full web applications."
      />

      <div className="grid md:grid-cols-2 gap-6">
        {projects.map((project) => (
          <ProjectCard key={project._id} project={project} />
        ))}
      </div>
    </main>
  );
}
