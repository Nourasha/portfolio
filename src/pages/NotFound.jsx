import Button from "../components/Button";
import Seo from "../components/Seo";

export default function NotFound() {
  return (
    <main className="max-w-5xl mx-auto px-8 py-40 text-center">
      <Seo title="Page not found" path="/404" noindex />

      <p className="text-xs font-semibold text-gray-500 uppercase tracking-widest mb-4">404</p>
      <h1 className="font-serif text-5xl text-gray-900 tracking-tight mb-4">Page not found</h1>
      <p className="text-gray-500 text-base font-light mb-10">
        The page you're looking for doesn't exist.
      </p>
      <Button to="/">Go home</Button>
    </main>
  );
}
