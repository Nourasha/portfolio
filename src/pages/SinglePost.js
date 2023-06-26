import React, {useEffect, useState} from "react"
import { useParams } from "react-router-dom"
import sanityClient from "../lib/client"
import ImageUrlBuilder from "@sanity/image-url";
import BlockText from "../components/BlockContent";
import Title from "../components/Title";

const builder = ImageUrlBuilder(sanityClient);
function urlFor(source) {
  return builder.image(source)
}

export default function SinglePost() {
  const [singlePost, setSinglePost] = useState(null);
  const {slug} = useParams();

  useEffect(() => {
    sanityClient
      .fetch(`*[slug.current == "${slug}"]{
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
        "name": author->name,
        "authorImage": author->image,
        publishedAt
      }`)
      .then((data) => setSinglePost(data[0]))
      .catch(console.error);
  }, [slug]);

  if (!singlePost) return <div>Loading...</div>;

  return (
    <main className="bg-gray-200 min-h-screen md:p-12 w-auto">
      <article className="container shadow-lg mx-auto bg-green-100 rounded-lg">
        <header className="relative">
          <div className="absolute h-full w-full flex items-center justify-center lg:p-8">
            <div className="bg-white bg-opacity-75 rounded p-12">
              <span className="cursive text-3xl lg:text-6xl mb-4">
                <Title title={singlePost.title} />
              </span>
              <div className="flex justify-center items-center text-gray-800 m-4">
                <img src={urlFor(singlePost.authorImage).url()}
                alt={singlePost.name}
                className="w-10 h-10 rounded-full"
                />
                <p className="cursive flex items-center pl-2 text-2xl">
                  {singlePost.name}
                </p>
              </div>
              <p className="cursive text-center text-lg mt-4">{singlePost.publishedAt}</p>
            </div>
          </div>
          <img src={singlePost.mainImage.asset.url} alt={singlePost.title} className="w-full object-cover rounded-t" style={{height: "400px"}} />
        </header>
        <div className="px-16 lg:px-48 py-12 lg:py-20 prose lg:prose-xl max-w-full">
          <BlockText blocks={singlePost.body} />
        </div>
      </article>
    </main>
  )
}