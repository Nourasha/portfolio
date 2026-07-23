import { useState, useEffect } from "react";
import sanityClient from "../lib/client";
import FilterSearch from "../components/FilterSearch";
import PageHeader from "../components/PageHeader";

export default function Post() {
  const [postData, setPost] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    sanityClient
      .fetch(`*[_type == "post"] | order(publishedAt desc) {
        title,
        _id,
        body,
        slug,
        publishedAt,
        "authorName": author->name,
        categories[]->{ title },
        mainImage{
          asset->{ _id, url },
          alt
        }
      }`)
      .then((data) => setPost(data))
      .catch(console.error);
  }, []);

  if (postData.length === 0)
    return (
      <div className="flex items-center justify-center h-screen">
        <p className="text-gray-500 text-sm">Nothing here yet.</p>
      </div>
    );

  return (
    <main className="max-w-5xl mx-auto px-8 py-20">

      <PageHeader
        eyebrow="Blog"
        title="Posts & writing"
        intro="Thoughts on development, tools, and things I've learned along the way."
      />

      {/* Search */}
      <div className="mb-10">
        <input
          type="search"
          data-testid="search"
          id="search"
          name="search"
          placeholder="Search posts..."
          onChange={(e) => setSearch(e.target.value)}
          className="w-full max-w-xs bg-gray-50 border border-gray-200 rounded-xl px-4 py-2.5
            text-sm text-gray-700 placeholder-gray-400
            focus:border-gray-400 transition-colors duration-150"
        />
      </div>

      {/* Results */}
      <FilterSearch event={postData} search={search} />
    </main>
  );
}