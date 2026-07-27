export default function PageStatus({ children }) {
  return (
    <div className="flex items-center justify-center h-screen">
      <p className="text-muted text-sm">{children}</p>
    </div>
  );
}
