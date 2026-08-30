import PageHeader from "@/components/PageHeader";
import PostSearch from "@/components/PostSearch";
import sanityClient from "@/lib/client";

export const revalidate = 3600;

export const metadata = {
  title: "Posts",
  description: "Thoughts on development, tools, and things I've learned along the way.",
  alternates: { canonical: "/post" },
};

export default async function Posts() {
  const postData = await sanityClient.fetch(`*[_type == "post"] | order(publishedAt desc) {
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
  }`);

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

      <PostSearch posts={postData} />
    </main>
  );
}
