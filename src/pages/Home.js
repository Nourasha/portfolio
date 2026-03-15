import { useEffect, useState, useRef } from "react";
import sanityClient from "../lib/client";
import BlockText from "../components/BlockContent";
import profilePhoto from "../image/nour-photo.jpg"; // legg bildet ditt her

export default function Home() {
  const [mainPost, setMainPost] = useState(null);
  const mountedRef = useRef(true);

  useEffect(() => {
    mountedRef.current = true;
    sanityClient
      .fetch(`*[_type == "mainPost"] | order(_createdAt asc){
        title,
        _id,
        mainImage{ asset->{ _id, url } },
        body,
      }`)
      .then((data) => {
        if (mountedRef.current) setMainPost(data);
      })
      .catch((error) => {
        if (mountedRef.current) console.error(error);
      });

    return () => {
      mountedRef.current = false;
    };
  }, []);

  if (!mainPost) return (
    <div className="flex items-center justify-center h-screen">
      <p className="text-gray-400 text-sm">Loading...</p>
    </div>
  );

  return (
    <>
      {/* ── HERO ── */}
      <section className="max-w-5xl mx-auto px-8 py-20 grid md:grid-cols-2 gap-12 items-center">

        {/* Left: text */}
        <div>
          {/* Available badge */}
          <span className="inline-flex items-center gap-2 bg-gray-100 border border-gray-200 rounded-full px-4 py-1.5 text-xs font-medium text-gray-600 mb-8">
            <span className="w-2 h-2 rounded-full bg-green-500"></span>
            Available for work
          </span>

          <h1 className="font-serif text-5xl md:text-6xl text-gray-900 leading-tight tracking-tight mb-6">
            Hi, I'm Nour.<br />
            <span className="text-gray-400 italic">I build for the web.</span>
          </h1>

          <p className="text-gray-500 text-lg leading-relaxed mb-10 font-light">
            Full-stack developer based in Norway. I create clean, fast, and
            accessible digital experiences — from pixel-perfect interfaces
            to well-structured backends.
          </p>

          <div className="flex gap-3 flex-wrap">
            <a
              href="/project"
              className="no-underline bg-gray-900 text-white text-sm font-medium px-6 py-3 rounded-full hover:bg-gray-700 transition-colors duration-150"
            >
              See my projects
            </a>
            <a
              href="/about"
              className="no-underline border border-gray-300 text-gray-700 text-sm font-normal px-6 py-3 rounded-full hover:border-gray-500 hover:text-gray-900 transition-colors duration-150"
            >
              About me
            </a>
          </div>
        </div>

        {/* Right: profile photo */}
        <div className="flex justify-center md:justify-end">
          <div className="relative w-72 h-80">
            <div className="absolute inset-0 bg-gray-100 rounded-3xl border border-gray-200" />
            <img
              src={profilePhoto}
              alt="Nour Aboushawish"
              className="relative w-full h-full object-cover object-top rounded-3xl"
            />
            {/* Name tag */}
            <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 bg-white border border-gray-200 rounded-full px-4 py-2 text-xs font-medium text-gray-600 whitespace-nowrap shadow-sm">
              Nour Aboushawish · Developer
            </div>
          </div>
        </div>
      </section>

 {/* ── SKILLS GRID ── */}
<section className="max-w-5xl mx-auto px-4 md:px-8 py-16 border-t border-gray-100">
  <p className="text-xs font-semibold text-gray-400 uppercase tracking-widest mb-3">Skills</p>
  <h2 className="font-serif text-3xl text-gray-900 tracking-tight mb-10">Tech stack</h2>

  <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 gap-3">
    {[
      { name: "React",        level: "Frontend",        bg: "bg-blue-50",   icon: "⚛️" },
      { name: "JavaScript",   level: "Language",        bg: "bg-yellow-50", icon: "🟨" },
      { name: "Next.js",      level: "Frontend",        bg: "bg-gray-100",  icon: "▲"  },
      { name: "TypeScript",   level: "Language",        bg: "bg-blue-50",   icon: "🔷" },
      { name: "Prisma",       level: "ORM",             bg: "bg-teal-50",   icon: "◆"  },
      { name: "SQL",          level: "Database",        bg: "bg-orange-50", icon: "🗄️" },
      { name: "Tailwind CSS", level: "Styling",         bg: "bg-teal-50",   icon: "🎨" },
      { name: "Sanity CMS",   level: "CMS",             bg: "bg-orange-50", icon: "📝" },
      { name: "Node.js",      level: "Backend",         bg: "bg-green-50",  icon: "🟢" },
      { name: "Git",          level: "Version control", bg: "bg-gray-100",  icon: "🔀" },
      { name: "REST APIs",    level: "Backend",         bg: "bg-purple-50", icon: "🔌" },
      { name: "Netlify",      level: "Deployment",      bg: "bg-teal-50",   icon: "🚀" },
    ].map((skill) => (
      <div
        key={skill.name}
        className="bg-white border border-gray-200 rounded-xl p-3 flex flex-col items-center gap-1.5 hover:border-gray-400 hover:-translate-y-0.5 transition-all duration-150"
      >
        <div className={`w-9 h-9 ${skill.bg} rounded-lg flex items-center justify-center text-base`}>
          {skill.icon}
        </div>
        <span className="text-xs font-medium text-gray-800 text-center leading-tight">{skill.name}</span>
        <span className="text-xs text-gray-400 text-center leading-tight hidden sm:block">{skill.level}</span>
      </div>
    ))}
  </div>
</section>

      <div className="border-t border-gray-100" />

      {/* ── BIOGRAPHY ── */}
      <main className="max-w-5xl mx-auto px-8 py-20">
        <p className="text-xs font-semibold text-gray-400 uppercase tracking-widest mb-3">Background</p>
        <h2 className="font-serif text-4xl text-gray-900 tracking-tight mb-14">My story</h2>

        {mainPost.map((post) => (
          <div key={post._id} className="grid md:grid-cols-3 gap-12 items-start mb-16">
            {/* Image */}
            {post.mainImage?.asset && (
              <div className="hidden md:block">
                <img
                  src={post.mainImage.asset.url}
                  alt={post.title}
                  className="w-full aspect-square object-cover rounded-2xl border border-gray-100"
                />
              </div>
            )}
            {/* Text */}
            <div className={post.mainImage?.asset ? "md:col-span-2" : "md:col-span-3"}>
              <div className="prose prose-sm prose-gray max-w-none
                prose-headings:font-serif prose-headings:font-normal prose-headings:tracking-tight
                prose-h1:text-3xl prose-h1:text-gray-900
                prose-p:text-gray-500 prose-p:leading-relaxed prose-p:font-light">
                <BlockText blocks={post.body} />
              </div>
            </div>
          </div>
        ))}
      </main>
    </>
  );
}