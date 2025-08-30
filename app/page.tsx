import { Megaphone, Calendar, Swords, Map, Calculator as ToolsIcon, NotebookTabs } from 'lucide-react';
import Link from 'next/link';

function Card({ icon, title, desc, href }: { icon: React.ReactNode; title: string; desc: string; href: string }) {
  return (
    <Link href={href} className="rounded-xl border p-5 hover:shadow-sm transition bg-white/60 dark:bg-slate-900/60">
      <div className="flex items-center gap-2 text-brand-600 mb-2">
        {icon}
        <span className="font-semibold">{title}</span>
      </div>
      <p className="opacity-80 text-sm">{desc}</p>
    </Link>
  );
}

export default function Home() {
  return (
    <div className="space-y-10">
      <section className="rounded-2xl border p-6 bg-gradient-to-br from-brand-50 to-white dark:from-slate-900 dark:to-slate-950">
        <h1 className="text-3xl md:text-4xl font-bold mb-2">Welcome to Kingshot Hub</h1>
        <p className="opacity-80 max-w-2xl">
          Quick, accurate guides and ready-to-paste alliance messages for events, heroes, mechanics, and territory. Stay up to date and grow your power!
        </p>
      </section>
      <section className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        <Card icon={<Megaphone className="size-5" />} title="Events" href="/events/bear-hunt" desc="Bear Hunt, Viking Vengeance, Terrors and more" />
        <Card icon={<Swords className="size-5" />} title="Rally Rules" href="/mechanics/rally-rules" desc="Leaders vs joiners, Lethality vs Attack, timing" />
        <Card icon={<Map className="size-5" />} title="Territory" href="/territory/fertile-lands" desc="Why move, expansion priorities, map control" />
        <Card icon={<ToolsIcon className="size-5" />} title="Tools" href="/tools" desc="Ratio & promotion calculators (interactive)" />
        <Card icon={<NotebookTabs className="size-5" />} title="Notices" href="/alliance-notices" desc="Ready-to-paste alliance templates" />
        <Card icon={<Calendar className="size-5" />} title="Heroes" href="/heroes/chenko" desc="Hero guides and pairings" />
      </section>
    </div>
  );
}