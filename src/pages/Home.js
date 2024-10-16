import React, { useEffect, useState } from "react";
import sanityClient from "../lib/client";
import BlockText from "../components/BlockContent";
import Title from "../components/Title";
import HeaderContent from "../components/HeaderContent";
import Image from "../images/arrow.png"
import Project from "./Project";

export default function Home() {
  const [mainPost, setMainPost] = useState(null);

  useEffect(() => {
    let isMounted = true; // Ensure component is still mounted
    sanityClient
      .fetch(`*[_type == "mainPost"]{
        title,
        _id,
        slug,
        mainImage{
          asset->{
            _id,
            url
          }
        },
        body,
      }`)
      .then((data) => {
        if (isMounted) {
          setMainPost(data); // Update state only if mounted
        }
      })
      .catch(console.error);

    return () => {
      isMounted = false; // Cleanup on unmount
    };
  }, []);

  if (!mainPost) return <div>Loading...</div>;

  return (
    <>
    <HeaderContent />
    <main className="flex flex-col justify-between items-start h-auto w-auto">
    <span className="md:text-6xl text-black font-bold cursive mx-6 mb-4">
              <h1>My Background</h1>
            </span>
      {mainPost.map((post) => (
        <div key={post._id} className="container mx-auto md:flex md:justify-between md:items-center">
          <section className="mobile-flex">

            <div className="ml-6 pt-6 text-blck flex flex-row-reverse justify-start items-start">
              <div className="prose prose-h1:text-red-600 pt-11 md:pl-3 prose-h3:text-black items-start ">
              <BlockText blocks={post.body} className="" />
              </div>
          <section>
            {post.mainImage?.asset && (
              <img
                src={post.mainImage.asset.url}
                alt={post.title}
                className="h-20 w-20"
              />
            )}
          </section>
          </div>
          </section>
        </div>
      ))}
    </main>
    <Project/>
    </>
  );
}
