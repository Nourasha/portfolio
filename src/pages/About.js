import React, { useEffect, useState } from "react";
import sanityClient from "../lib/client";
import ImageUrlBuilder from "@sanity/image-url";
import BlockContent from "@sanity/block-content-to-react";
import profilePhoto from "../image/nour-photo.jpg";

const builder = ImageUrlBuilder(sanityClient);
function urlFor(source) {
  return builder.image(source);
}

const SKILLS = [
  "React", "JavaScript", "Tailwind CSS",
  "Sanity CMS", "Node.js", "Git & GitHub",
  "REST APIs", "Netlify",
];

export default function About() {
  const [author, setAuthor] = useState(null);

  useEffect(() => {
    sanityClient
      .fetch(`*[_type == "author"]{
        name,
        bio,
        "authorImage": image.asset->url
      }`)
      .then((data) => setAuthor(data[0]))
      .catch(console.error);
  }, []);

  if (!author)
    return (
      <div className="flex items-center justify-center h-screen">
        <p className="text-gray-400 text-sm">Loading...</p>
      </div>
    );

  return (
    <main className="max-w-5xl mx-auto px-8 py-20">

      {/* Eyebrow */}
      <p className="text-xs font-semibold text-gray-400 uppercase tracking-widest mb-3">About me</p>
      <h1 className="font-serif text-4xl text-gray-900 tracking-tight mb-16">
        The person behind the code
      </h1>

      {/* Main grid: photo left, text right */}
      <div className="grid md:grid-cols-5 gap-16 items-start mb-20">

        {/* Photo column */}
        <div className="md:col-span-2 flex flex-col gap-4">
          <div className="relative">
            <img
              src={profilePhoto}
              alt={author.name}
              className="w-full aspect-[3/4] object-cover object-top rounded-3xl border border-gray-200"
            />
          </div>
          <p className="text-sm text-gray-400 text-center">Based in Norway · Open to remote</p>

          {/* Social links */}
          <div className="flex gap-3 justify-center mt-2">
            <a
              href="https://github.com/Nourasha"
              target="_blank"
              rel="noopener noreferrer"
              className="no-underline border border-gray-200 text-gray-600 text-xs font-medium px-4 py-2 rounded-full hover:border-gray-500 hover:text-gray-900 transition-colors"
            >
              GitHub
            </a>
            <a
              href="https://www.linkedin.com/in/nour-aboushawish-8130357b/"
              target="_blank"
              rel="noopener noreferrer"
              className="no-underline border border-gray-200 text-gray-600 text-xs font-medium px-4 py-2 rounded-full hover:border-gray-500 hover:text-gray-900 transition-colors"
            >
              LinkedIn
            </a>
          </div>
        </div>

        {/* Text column */}
        <div className="md:col-span-3">
          <h2 className="font-serif text-3xl text-gray-900 tracking-tight mb-2">
            Hey, I'm{" "}
            <span className="italic text-gray-500">{author.name}</span>
          </h2>
          <p className="text-xs text-gray-400 uppercase tracking-widest font-medium mb-8">
            Full-stack Developer
          </p>

          <div className="prose prose-sm prose-gray max-w-none
            prose-p:text-gray-500 prose-p:leading-relaxed prose-p:font-light
            prose-h3:font-serif prose-h3:font-normal prose-h3:text-gray-900
            prose-strong:text-gray-700 prose-strong:font-medium mb-10">
            <BlockContent blocks={author.bio} />
          </div>

          {/* Skills */}
          <div className="border-t border-gray-100 pt-8">
            <p className="text-xs font-semibold text-gray-400 uppercase tracking-widest mb-4">Skills & tools</p>
            <div className="flex flex-wrap gap-2">
              {SKILLS.map((skill) => (
                <span
                  key={skill}
                  className="bg-gray-100 border border-gray-200 rounded-lg px-3 py-1.5 text-xs font-medium text-gray-600"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* CTA */}
      <div className="bg-gray-50 border border-gray-200 rounded-3xl p-12 text-center">
        <h2 className="font-serif text-3xl text-gray-900 tracking-tight mb-4">
          Want to work together?
        </h2>
        <p className="text-gray-500 text-base leading-relaxed mb-8 max-w-md mx-auto font-light">
          I'm open to freelance projects and full-time positions. Let's build something great.
        </p>
        <a
          href="mailto:din@epost.no"
          className="no-underline inline-block bg-gray-900 text-white text-sm font-medium px-8 py-3 rounded-full hover:bg-gray-700 transition-colors"
        >
          Send me an email
        </a>
      </div>

    </main>
  );
}