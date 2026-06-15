import { useEffect, useState, useRef } from "react";
import { Link } from "react-router-dom";
import sanityClient from "../lib/client";
import BlockText from "../components/BlockContent";
import profilePhoto from "../assets/images/nour-photo.jpg";
import SectionIcon from "../components/SectionIcon"
import Skills from "../components/Skills";



export default function Home() {
  const [mainPost, setMainPost] = useState(null);
  const [error, setError] = useState(false);
  const mountedRef = useRef(true);

  useEffect(() => {
    mountedRef.current = true;
    sanityClient
      .fetch(`*[_type == "mainPost"] | order(_createdAt asc){
        title,
        _id,
        body,
      }`)
      .then((data) => {
        if (mountedRef.current) setMainPost(data);
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
        <p className="text-gray-400 text-sm">Failed to load content. Please try again later.</p>
      </div>
    );

  if (!mainPost)
    return (
      <div className="flex items-center justify-center h-screen">
        <p className="text-gray-400 text-sm">Loading...</p>
      </div>
    );

  return (
    <>
      {/* ── HERO ── */}
      <section className="max-w-5xl mx-auto px-4 md:px-8 py-16 md:py-20 grid md:grid-cols-2 gap-12 items-center">

        {/* Left: text */}
        <div>
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
            <Link
              to="/project"
              className="no-underline bg-gray-900 text-white text-sm font-medium px-6 py-3 rounded-full hover:bg-gray-700 transition-colors duration-150"
            >
              See my projects
            </Link>
            <Link
              to="/about"
              className="no-underline border border-gray-300 text-gray-700 text-sm font-normal px-6 py-3 rounded-full hover:border-gray-500 hover:text-gray-900 transition-colors duration-150"
            >
              About me
            </Link>
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
      <Skills />
      </div>
      </section>

      {/* ── BIOGRAPHY ── */}
      <main className="max-w-5xl mx-auto px-4 md:px-8 py-16 border-t border-gray-100">
        <p className="text-xs font-semibold text-gray-400 uppercase tracking-widest mb-3">Background</p>
        <h2 className="font-serif text-4xl text-gray-900 tracking-tight mb-14">My story</h2>

        {mainPost.map((post) => (
          <div
            key={post._id}
            className="grid md:grid-cols-[56px_1fr] gap-8 items-start mb-14"
          >
            <div className="hidden md:flex w-14 h-14 rounded-2xl bg-gray-50 border border-gray-200 items-center justify-center flex-shrink-0">
              <SectionIcon title={post.title} />
            </div>

            <div className="prose prose-sm prose-gray max-w-none
              prose-headings:font-serif prose-headings:font-normal prose-headings:tracking-tight
              prose-h1:text-2xl prose-h1:text-gray-900
              prose-h2:text-xl prose-h2:text-gray-900
              prose-h3:text-lg prose-h3:text-gray-900
              prose-p:text-gray-500 prose-p:leading-relaxed prose-p:font-light
              prose-strong:text-gray-700 prose-strong:font-medium
              prose-li:text-gray-500 prose-li:font-light">
              <BlockText blocks={post.body} />
            </div>
          </div>
        ))}
      </main>
    </>
  );
}