
import { Link } from "react-router-dom";

export default function PostCards({ title, slug, mainImage }) {
  return (

        <article className="mobile-post">
          <Link to={"/post/" + slug.current} key={slug.current}>
          <span className="block h-64 relative rounded shadow leading-snug bg-white border-l-8 border-green-400">
            <img
              src={mainImage.asset.url}
              alt={mainImage.alt}
              className="w-full h-full rounded-r object-cover absolute"
                />
            <span className="relative h-full flex justify-start items-end md:justify-end md:items-end pr-4 pb-4">
              <h3 className="text-lg font-bold px-3 py-4 bg-yellow-200 text-red-800 bg-opacity-75 rounded">
                {title}
              </h3>
            </span>
          </span>
            </Link>
          </article>
  )
}