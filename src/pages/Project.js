import {useState, useEffect} from "react";
import sanityClient from "../lib/client";


export default function Project() {
  const [projectData, setProject] = useState(null);

  useEffect(() => {
    sanityClient
      .fetch(`*[_type == "project"]{
        title,
        date,
        place,
        description,
        projectType,
        githublink,
        link,
        tags
      }`)
      .then((data) => setProject(data))
      .catch(console.error);
  }, []);

  return (
    <main className="min-h-screen p-12">
      <section className="container mx-auto">
        <h1 className="text-5xl flex justify-center cursive">My Projects</h1>
        <h2 className="text-lg text-gray-600 flex justify-center mb-12 mt-6">Welcome to my projects page!</h2>
        <section className="grid md:grid-cols-2 gap-8">
          {projectData && projectData.map((project) => (

          <article className="rounded-lg shadow-xl bg-white p-16">
            <h3 className="text-gray-800 text-3xl font-bold mb-2 hover:text-red-700">
              <a
                href={project.link}
                alt={project.title}
                target="_blank"
                rel="noopener noreferrer"
              >{project.title}</a>
            </h3>
            <div className="text-gray-500 text-xs items-start md:space-x-4">
              <span>
                <strong className="font-bold">Finished on</strong>:{" "}
                {new Date(project.date).toLocaleDateString()}
              </span>
              <span>
              <strong className="font-bold">Company</strong>:{" "}
              {project.place}
              </span>
              <span>
              <strong className="font-bold">Type</strong>:{" "}
              {project.projectType}
              </span>
              <p className="my-6 text-lg text-gray-700 leading-relaxed">
                {project.description}
              </p>
              <a href={project.githublink} rel="noopener noreferrer" target="_blank" className="text-red-500 font-bold hover:underline hover:text-red-400 text-xl"
              >
                View The Projects code on GitHub{" "}
                <span role="img" aria-label="right pointer">👉</span>
              </a>
            </div>
          </article>
          ))}
        </section>
      </section>
    </main>
  )
}