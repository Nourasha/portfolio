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

      {/* ── SKILLS STRIP ── */}
      <div className="bg-gray-900 py-4 overflow-x-auto">
        <div className="flex gap-8 px-8 items-center min-w-max">
          <span className="text-xs font-semibold text-white uppercase tracking-widest">Tech stack</span>
          {["React", "JavaScript","NextJS","TypeScript", "Prisma", "SQL", "Database", "Tailwind CSS", "Sanity CMS", "Node.js", "Git", "REST APIs", "Netlify"].map((s) => (
            <span key={s} className="text-xs font-medium text-gray-500 uppercase tracking-wider">{s}</span>
          ))}
        </div>
      </div>

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