// components/Comments.tsx
"use client";
import Giscus from "@giscus/react";

export default function Comments() {
  const repoId = process.env.NEXT_PUBLIC_GISCUS_REPO_ID;
  const categoryId = process.env.NEXT_PUBLIC_GISCUS_CATEGORY_ID;

  // Hide if env vars are missing
  if (!repoId || !categoryId) return null;

  return (
    <div className="mt-10">
      <Giscus
        id="comments"
        repo="code4/Kingshot-hub"   // owner/repo
        repoId={repoId}             // from giscus.app
        category="Comments"         // the category NAME
        categoryId={categoryId}     // from giscus.app
        mapping="pathname"
        reactionsEnabled="1"
        emitMetadata="0"
        inputPosition="top"
        theme="preferred_color_scheme"
        lang="en"
      />
    </div>
  );
}
