import { useEffect, useState, useRef } from "react";
import sanityClient from "../lib/client";
import BlockText from "../components/BlockContent";
import profilePhoto from "../assets/images/nour-photo.jpg";
import skills from "../data/skills";
import Button from "../components/Button";
import PageHeader from "../components/PageHeader";
import Seo from "../components/Seo";

export default function About() {
  const [author, setAuthor] = useState(null);
  const [error, setError] = useState(false);
  const mountedRef = useRef(true);

  useEffect(() => {
    mountedRef.current = true;
    sanityClient
      .fetch(`*[_type == "author"]{
        name,
        bio,
        "authorImage": image.asset->url
      }`)
      .then((data) => {
        if (mountedRef.current) setAuthor(data[0]);
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

  if (!author)
    return (
      <div className="flex items-center justify-center h-screen">
        <p className="text-gray-500 text-sm">Loading...</p>
      </div>
    );

  return (
    <main className="max-w-5xl mx-auto px-8 py-20">
      <Seo
        title="About"
        description="About Nour Aboushawish — full-stack developer and cybersecurity master's student based in Norway."
        path="/about"
      />

      <PageHeader eyebrow="About me" title="The person behind the code" />

      {/* Main grid: photo left, text right */}
      <div className="grid md:grid-cols-5 gap-16 items-start mb-20">

        {/* Photo column */}
        <div className="md:col-span-2 flex flex-col gap-4">
          <div className="relative">
            <img
              src={profilePhoto}
              alt={author.name}
              className="w-full aspect-[3/4] object-cover object-top rounded-2xl border border-gray-200"
            />
          </div>
          <p className="text-sm text-gray-500 text-center">Based in Norway · Open to remote</p>

          {/* Social links */}
          <div className="flex gap-3 justify-center mt-2">
            <Button href="https://github.com/Nourasha" variant="secondary" size="sm">
              GitHub
            </Button>
            <Button href="https://www.linkedin.com/in/nour-aboushawish-8130357b/" variant="secondary" size="sm">
              LinkedIn
            </Button>
          </div>
        </div>

        {/* Text column */}
        <div className="md:col-span-3">
          <h2 className="font-serif text-3xl text-gray-900 tracking-tight mb-2">
            Hey, I'm{" "}
            <span className="italic text-gray-500">{author.name}</span>
          </h2>
          <p className="text-xs text-gray-500 uppercase tracking-widest font-medium mb-8">
            FULL-STACK DEVELOPER · CYBERSECURITY MASTER'S STUDENT
          </p>

          <div className="prose prose-sm prose-gray max-w-none
            prose-p:text-gray-500 prose-p:leading-relaxed prose-p:font-light
            prose-h3:font-serif prose-h3:font-normal prose-h3:text-gray-900
            prose-strong:text-gray-700 prose-strong:font-medium mb-10">
            <BlockText blocks={author.bio} />
          </div>

          {/* Skills */}
          <div className="border-t border-gray-100 pt-8">
            <p className="text-xs font-semibold text-gray-500 uppercase tracking-widest mb-4">Skills & tools</p>
            <div className="flex flex-wrap gap-2">
              {skills.map((skill) => (
                <span
                  key={skill.name}
                  className="bg-gray-100 border border-gray-200 rounded-full px-3 py-1.5 text-xs font-medium text-gray-600"
                >
                  {skill.name}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* CTA */}
      <div className="bg-gray-50 border border-gray-200 rounded-2xl p-12 text-center">
        <h2 className="font-serif text-3xl text-gray-900 tracking-tight mb-4">
          Want to work together?
        </h2>
        <p className="text-gray-500 text-base leading-relaxed mb-8 max-w-md mx-auto font-light">
          I'm open to freelance projects and full-time positions. Let's build something great.
        </p>
        <Button href="mailto:nour.abshawish@outlook.com" size="lg">
          Send me an email
        </Button>
      </div>

    </main>
  );
}
