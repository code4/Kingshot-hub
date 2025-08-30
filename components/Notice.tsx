export default function Notice({ children }: { children: React.ReactNode }) {
  return (
    <div className="my-6 rounded-lg border-l-4 border-primary bg-primary/5 p-4 text-sm">
      {children}
    </div>
  );
}