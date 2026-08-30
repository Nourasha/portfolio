import Link from "next/link";
import { notFound } from "next/navigation";
import BlockText from "@/components/BlockContent";
import sanityClient from "@/lib/client";
import { urlFor } from "@/lib/image";

export const revalidate = 3600;

const POST_QUERY = `*[_type == "post" && slug.current == $slug][0]{
  title,
  _id,
  slug,
  mainImage{ asset->{ _id, url } },
  body,
  "authorName": author->name,
  "authorImage": author->image.asset->url,
  publishedAt,
  categories[]->{ title }
}`;

export async function generateStaticParams() {
  const slugs = await sanityClient.fetch(
    `*[_type == "post" && defined(slug.current)].slug.current`
  );
  return slugs.map((slug) => ({ slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const post = await sanityClient.fetch(POST_QUERY, { slug });

  if (!post) return {};

  return {
    title: post.title,
    alternates: { canonical: `/post/${slug}` },
  };
}

export default async function SinglePost({ params }) {
  const { slug } = await params;
  const singlePost = await sanityClient.fetch(POST_QUERY, { slug });

  if (!singlePost) notFound();

  return (
    <main className="max-w-3xl mx-auto px-8 py-16">

      {/* Back link */}
      <Link
        href="/post"
        className="no-underline inline-flex items-center gap-2 text-sm text-gray-500 hover:text-gray-900 transition-colors duration-150 mb-12"
      >
        ← Back to posts
      </Link>

      <article>
        {/* Header */}
        <header className="mb-12">
          {/* Categories */}
          {singlePost.categories?.length > 0 && (
            <div className="flex gap-2 mb-4">
              {singlePost.categories.map((cat) => (
                <span
                  key={cat.title}
                  className="text-xs font-medium uppercase tracking-widest text-gray-500"
                >
                  {cat.title}
                </span>
              ))}
            </div>
          )}

          {/* Title */}
          <h1 className="font-serif text-4xl md:text-5xl text-gray-900 tracking-tight leading-tight mb-8">
            {singlePost.title}
          </h1>

          {/* Author + date */}
          <div className="flex items-center gap-3 pb-8 border-b border-gray-100">
            {singlePost.authorImage && (
              <img
                src={urlFor(singlePost.authorImage).width(40).height(40).url()}
                alt={singlePost.authorName}
                className="w-10 h-10 rounded-full object-cover border border-gray-200"
              />
            )}
            <div>
              <p className="text-sm font-medium text-gray-800">
                {singlePost.authorName}
              </p>
              {singlePost.publishedAt && (
                <p className="text-xs text-gray-500">
                  {new Date(singlePost.publishedAt).toLocaleDateString("no-NO", {
                    year: "numeric",
                    month: "long",
                    day: "numeric",
                  })}
                </p>
              )}
            </div>
          </div>
        </header>

        {/* Hero image */}
        {singlePost.mainImage?.asset?.url && (
          <div className="mb-12 -mx-8 md:-mx-0">
            <img
              src={singlePost.mainImage.asset.url}
              alt={singlePost.title}
              className="w-full object-cover rounded-2xl"
              style={{ maxHeight: "480px" }}
            />
          </div>
        )}

        {/* Body */}
        <div className="prose prose-lg prose-gray max-w-none
          prose-headings:font-serif prose-headings:font-normal prose-headings:tracking-tight
          prose-h1:text-3xl prose-h2:text-2xl prose-h3:text-xl
          prose-p:text-gray-600 prose-p:leading-relaxed prose-p:font-light
          prose-strong:text-gray-800 prose-strong:font-medium
          prose-a:text-gray-900 prose-a:underline prose-a:underline-offset-2
          prose-blockquote:border-l-2 prose-blockquote:border-gray-200
          prose-blockquote:text-gray-500 prose-blockquote:font-light prose-blockquote:not-italic">
          <BlockText blocks={singlePost.body} />
        </div>
      </article>
    </main>
  );
}
