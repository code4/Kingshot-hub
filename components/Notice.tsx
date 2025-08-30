export default function Notice({ children }: { children: React.ReactNode }) {
  return (
    <div className="my-4 rounded-lg border-l-4 border-brand-600 bg-brand-50/60 dark:bg-slate-900 p-4 text-sm">
      {children}
    </div>
  );
}