import PostCards from "../components/PostCards";

export default function FilterSearch({ event, search }) {
  const inputData = event?.filter((post) =>
    post.title.toLowerCase().includes(search.toLowerCase())
  );

  if (!inputData?.length) {
    return (
      <p className="text-sm text-gray-400 py-4">
        No posts match "{search}"
      </p>
    );
  }

  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
      {inputData
        .sort((a, b) => (a.publishedAt < b.publishedAt ? 1 : -1))
        .map((post) => {
          const { title, slug, publishedAt, mainImage, _id, authorName, categories } = post;
          return (
            <PostCards
              key={_id}
              title={title}
              slug={slug}
              publishedAt={publishedAt}
              mainImage={mainImage}
              authorName={authorName}
              categories={categories}
            />
          );
        })}
    </div>
  );
}