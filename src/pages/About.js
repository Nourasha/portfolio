import React, {useEffect, useState} from "react";
import sanityClient from "../lib/client";
import ImageUrlBuilder from "@sanity/image-url";
import BlockContent from "@sanity/block-content-to-react";

const builder = ImageUrlBuilder(sanityClient);
function urlFor(source) {
  return builder.image(source)
}

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

  if (!author) return <div>Loadin...</div>

  return (
    <main>
      <div className="lg:p-10 lg:48 container mx-auto relative">
        <section className=" bg-blue-800 rounded-lg shadow-2xl lg:flex md:p-20">
          <img src={urlFor(author.authorImage).url()} className="rounded w-screen h-50 md:w-64 md:h-64 md:mr-8" alt={author.name} />
          <div className="text-lg flex flex-col justify-center">
            <h1 className="cursive text-6xl text-green-300 mb-4">
              Hey there. I'm{" "}
              <span className="text-green-100">{author.name}</span>
            </h1>
            <div className="prose m-2 text-center md:text-left lg:prose-xl text-white">
              <BlockContent blocks={author.bio} />
            </div>
          </div>
        </section>
      </div>
    </main>
  )
}