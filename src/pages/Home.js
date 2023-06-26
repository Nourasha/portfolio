import React, {useEffect, useState} from "react";
import sanityClient from "../lib/client"
import Fade from "react-reveal/Fade";
import BlockText from "../components/BlockContent";
import Title from "../components/Title";


export default function Home() {
  const [mainPost, setMainPost] = useState(null);

  useEffect(() => {
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
      .then((data) => setMainPost(data))
      .catch(console.error);
  }, []);

  if (!mainPost) return <div>Loading...</div>;

  return (
    <main className="flex-col justify-between items-center min-h-screen w-auto">
      {mainPost && mainPost.map((post, index) =>(
        <Fade left big>
          <div className="container mx-auto md:flex md:justify-between md:items-center">
            <section className="mobile-flex">
              <span className="text-6xl text-green-300 font-bold cursive mx-6 mb-4">
                <Title title={post.title} />
              </span>
              <div className="ml-6 text-cyan-800">
                <BlockText blocks={post.body} />
              </div>
            </section>
            <section>
                <img src={post.mainImage.asset.url} alt={post.title}
                  className="img-mobile rounded-full h-60 w-60 my-6 mr-10" />
              </section>
          </div>
        </Fade>
      ))}
    </main>
  )
}