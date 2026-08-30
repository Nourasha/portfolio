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
    `*[_type == "project"] | order(featured desc, date desc) {
      title, date, place, description,
      projectType, githublink, link, tags,
      featured
    }`
  );

  if (!projectData?.length) {
    return <PageStatus>Failed to load content. Please try again later.</PageStatus>;
  }

  // GROQ's boolean ordering has not been reliable in production — sort again here.
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
          <ProjectCard key={project.title} project={project} />
        ))}
      </div>
    </main>
  );
}
