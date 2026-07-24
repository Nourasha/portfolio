import Button from "../components/Button";
import Seo from "../components/Seo";

export default function NotFound() {
  return (
    <main className="max-w-5xl mx-auto px-8 py-40 text-center">
      <Seo title="Page not found" path="/404" noindex />

      <span className="inline-block bg-accent/10 text-accent text-xs font-semibold uppercase tracking-widest px-4 py-1.5 rounded-full mb-4">404</span>
      <h1 className="font-display text-5xl font-extrabold text-ink tracking-tight mb-4">Page not found</h1>
      <p className="text-muted text-base mb-10">
        The page you're looking for doesn't exist.
      </p>
      <Button to="/">Go home</Button>
    </main>
  );
}
