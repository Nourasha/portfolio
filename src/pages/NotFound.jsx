import { Link } from "react-router";

export default function NotFound() {
  return (
    <div className="max-w-5xl mx-auto px-8 py-40 text-center">
      <p className="text-xs font-semibold text-gray-400 uppercase tracking-widest mb-4">404</p>
      <h1 className="font-serif text-5xl text-gray-900 tracking-tight mb-4">Page not found</h1>
      <p className="text-gray-500 text-base font-light mb-10">
        The page you're looking for doesn't exist.
      </p>
      <Link
        to="/"
        className="no-underline inline-block bg-gray-900 text-white text-sm font-medium px-6 py-3 rounded-full hover:bg-gray-700 transition-colors duration-150"
      >
        Go home
      </Link>
    </div>
  );
}
