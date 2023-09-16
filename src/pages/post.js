import  React, { useState, useEffect } from "react";
import sanityClient  from "../lib/client";
import FilterSearch from "../components/FilterSerch";

export default function Post() {
  const [postData, setPost] = useState([]);
  const [search, setSearch] = useState('')


  useEffect(() => {
    sanityClient
      .fetch(`*[_type == "post"] {
        title,
        _id,
        slug,
        publishedAt,
        mainImage{
          asset->{
            _id,
            url
          },
          alt
        }
      }`)
      .then((data) => setPost(data))
      .catch(console.error)
    }, []);

  return (
    <main className="min-h-screen md:p-12 w-auto">
      <section className="container mx-auto">
        <h1 className="text-5xl flex md:justify-center cursive">Blog Posts Page</h1>
        <h2 className="text-lg text-gray-600 flex justify-center mb-12 mt-6">Welcome to my page of blog posts</h2>
        <div>
          <h2 className="md:ml-10 mb-5 mt-10 text-2xl font-bold">All Posts</h2>
          <label className="md:ml-10">
            <input
              className="rounded-md h-auto w-auto text-xl shadow-[0_0.5rem_0.5rem_0]"
              data-testid="search"
              id="search"
              name="search"
              type="search"
              placeholder="Search Blog"
              onChange={(event) => setSearch(event.target.value)}
            />
          </label>
        </div>
        <section className="mt-6">
          <FilterSearch event={postData} search={search} />
        </section>
      </section>
    </main>
  )
}