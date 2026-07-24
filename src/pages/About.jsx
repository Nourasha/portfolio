import { useEffect, useState, useRef } from "react";
import sanityClient from "../lib/client";
import BlockText from "../components/BlockContent";
import profilePhoto from "../assets/images/nour-photo.jpg";
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
        <p className="text-muted text-sm">Failed to load content. Please try again later.</p>
      </div>
    );

  if (!author)
    return (
      <div className="flex items-center justify-center h-screen">
        <p className="text-muted text-sm">Loading...</p>
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
              className="w-full aspect-[3/4] object-cover object-top rounded-2xl border border-line shadow-sm"
            />
          </div>
          <p className="text-sm text-muted text-center">Based in Norway · Open to remote</p>

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
          <h2 className="font-display text-3xl font-extrabold text-ink tracking-tight mb-2">
            Hey, I'm <span className="text-accent">{author.name}</span>
          </h2>
          <p className="text-xs text-muted uppercase tracking-widest font-semibold mb-8">
            Full-stack developer · Cybersecurity master's student
          </p>

          <div className="prose prose-sm max-w-none
            prose-p:text-muted prose-p:leading-relaxed
            prose-h3:font-display prose-h3:font-bold prose-h3:text-ink
            prose-strong:text-ink prose-strong:font-semibold mb-10">
            <BlockText blocks={author.bio} />
          </div>
        </div>
      </div>

      {/* CTA */}
      <div className="bg-navy rounded-2xl p-12 text-center">
        <h2 className="font-display text-3xl font-extrabold text-white tracking-tight mb-4">
          Want to work together?
        </h2>
        <p className="text-navy-muted text-base leading-relaxed mb-8 max-w-md mx-auto">
          I'm open to freelance projects and full-time positions. Let's build something great.
        </p>
        <Button href="mailto:nour.abshawish@outlook.com" size="lg">
          Send me an email
        </Button>
      </div>

    </main>
  );
}
