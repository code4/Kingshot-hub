// components/EditBar.tsx
import Link from "next/link";

export default function EditBar({ filePath, title }: { filePath?: string; title?: string }) {
  const repo = "code4/Kingshot-hub";
  // Pre-fill issue title and body with page URL
  const issueUrl = `https://github.com/${repo}/issues/new?title=${encodeURIComponent(
    `Correction: ${title ?? ""}`
  )}&body=${encodeURIComponent(
    `**Page:** ${typeof window !== "undefined" ? window.location.href : ""}\n\n**Describe the correction:**\n- `
  )}`;
  const editUrl = filePath
    ? `https://github.com/${repo}/edit/main/${filePath}`
    : `https://github.com/${repo}`;

  return (
    <div className="mt-6 flex flex-wrap gap-3 text-sm">
      <Link
        href={issueUrl}
        className="rounded-md border px-3 py-2 hover:bg-black/5 dark:hover:bg-white/10"
      >
        Suggest a correction
      </Link>
    </div>
  );
}
