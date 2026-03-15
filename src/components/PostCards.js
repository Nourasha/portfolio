import { Link } from "react-router-dom";

export default function PostCards({ title, slug, publishedAt, mainImage, authorName, categories }) {
  return (
    <article>
      <Link
        to={"/post/" + slug.current}
        className="no-underline block group"
      >
        {/* Image */}
        <div className="relative overflow-hidden rounded-2xl bg-gray-100 border border-gray-200 mb-4"
          style={{ height: "220px" }}>
          {mainImage?.asset?.url ? (
            <img
              src={mainImage.asset.url}
              alt={mainImage.alt || title}
              className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
            />
          ) : (
            <div className="w-full h-full bg-gray-100 flex items-center justify-center">
              <span className="text-gray-300 text-sm">No image</span>
            </div>
          )}
        </div>

        {/* Meta */}
        <div className="flex items-center gap-3 mb-2">
          {categories?.length > 0 && (
            <span className="text-xs font-medium uppercase tracking-widest text-gray-400">
              {categories[0].title}
            </span>
          )}
          {publishedAt && (
            <span className="text-xs text-gray-300">·</span>
          )}
          {publishedAt && (
            <span className="text-xs text-gray-400">
              {new Date(publishedAt).toLocaleDateString("no-NO", {
                year: "numeric",
                month: "short",
                day: "numeric",
              })}
            </span>
          )}
        </div>

        {/* Title */}
        <h3 className="font-serif text-xl text-gray-900 tracking-tight leading-snug
          group-hover:text-gray-600 transition-colors duration-150 mb-1">
          {title}
        </h3>

        {/* Author */}
        {authorName && (
          <p className="text-xs text-gray-400 font-light">{authorName}</p>
        )}
      </Link>
    </article>
  );
}