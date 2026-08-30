import Button from "@/components/Button";
import Eyebrow from "@/components/Eyebrow";

export const metadata = {
  title: "Page not found",
  robots: { index: false },
};

export default function NotFound() {
  return (
    <main className="max-w-5xl mx-auto px-8 py-40 text-center">
      <Eyebrow>404</Eyebrow>
      <h1 className="font-display text-5xl font-extrabold text-ink tracking-tight mb-4">Page not found</h1>
      <p className="text-muted text-base mb-10">
        The page you're looking for doesn't exist.
      </p>
      <Button to="/">Go home</Button>
    </main>
  );
}
