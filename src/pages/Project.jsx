import useSanityQuery from "../lib/useSanityQuery";
import PageHeader from "../components/PageHeader";
import PageStatus from "../components/PageStatus";
import ProjectCard from "../components/ProjectCard";
import Seo from "../components/Seo";

export default function Project() {
  const { data: projectData, error } = useSanityQuery(
    `*[_type == "project"] | order(featured desc, date desc) {
      title, date, place, description,
      projectType, githublink, link, tags,
      featured
    }`
  );

  if (error) return <PageStatus>Failed to load content. Please try again later.</PageStatus>;
  if (!projectData) return <PageStatus>Loading...</PageStatus>;

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
          <ProjectCard key={project.title} project={project} />
        ))}
      </div>
    </main>
  );
}
