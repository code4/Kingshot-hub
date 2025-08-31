// components/VoteWidget.tsx
"use client";
import { useEffect, useState } from "react";
import { createClient } from "@supabase/supabase-js";

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
);

export default function VoteWidget({ slug }: { slug: string }) {
  const [up, setUp] = useState(0);
  const [down, setDown] = useState(0);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    (async () => {
      const { data } = await supabase.from("page_votes").select("*").eq("slug", slug).maybeSingle();
      if (data) {
        setUp(data.up);
        setDown(data.down);
      }
      setLoading(false);
    })();
  }, [slug]);

  async function vote(kind: "up" | "down") {
    const next = { up: kind === "up" ? up + 1 : up, down: kind === "down" ? down + 1 : down };
    setUp(next.up);
    setDown(next.down);
    await supabase.from("page_votes").upsert({ slug, ...next });
  }

  if (loading) return null;
  return (
    <div className="mt-6 flex items-center gap-3 text-sm">
      <button
        onClick={() => vote("up")}
        className="rounded-md border px-3 py-2 hover:bg-black/5 dark:hover:bg-white/10"
      >
        👍 {up}
      </button>
      <button
        onClick={() => vote("down")}
        className="rounded-md border px-3 py-2 hover:bg-black/5 dark:hover:bg-white/10"
      >
        👎 {down}
      </button>
      <span className="opacity-70">Was this helpful?</span>
    </div>
  );
}
