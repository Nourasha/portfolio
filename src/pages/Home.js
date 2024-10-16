import React, { useEffect, useState } from "react";
import sanityClient from "../lib/client";
import BlockText from "../components/BlockContent";
import Title from "../components/Title";
import HeaderContent from "../components/HeaderContent";

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
    <main className="flex justify-between items-start min-h-screen w-auto">
      {mainPost.map((post) => (
        <div key={post._id} className="container mx-auto md:flex md:justify-between md:items-center">
          <section className="mobile-flex">
            <span className="text-6xl text-black font-bold cursive mx-6 mb-4">
              <Title title={post.title} />
            </span>
            <div className="ml-6 text-blck flex">
              <BlockText blocks={post.body} />
            </div>
          </section>
          <section>
            {post.mainImage?.asset && (
              <img
                src={post.mainImage.asset.url}
                alt={post.title}
                className="img-mobile rounded-full h-60 w-60 my-6 mr-10"
              />
            )}
          </section>
        </div>
      ))}
    </main>
    </>
  );
}
