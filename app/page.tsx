import { Megaphone, Calendar, Swords, Map, Calculator as ToolsIcon, NotebookTabs } from 'lucide-react';
import Link from 'next/link';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

function FeatureCard({ icon, title, desc, href }: { icon: React.ReactNode; title: string; desc: string; href: string }) {
  return (
    <Link href={href}>
      <Card className="h-full hover:shadow-md transition-all duration-200 hover:scale-[1.02] group">
        <CardHeader className="pb-3">
          <div className="flex items-center gap-2 text-primary mb-1">
            {icon}
            <CardTitle className="text-lg">{title}</CardTitle>
          </div>
        </CardHeader>
        <CardContent>
          <CardDescription className="text-sm leading-relaxed">{desc}</CardDescription>
        </CardContent>
      </Card>
    </Link>
  );
}

export default function Home() {
  return (
    <div className="space-y-10">
      <section className="rounded-2xl border bg-gradient-to-br from-primary/5 to-background p-8">
        <div className="flex items-center gap-3 mb-4">
          <h1 className="text-3xl md:text-4xl font-bold">Welcome to Kingshot Hub</h1>
          <Badge variant="secondary" className="text-xs">Fan Site</Badge>
        </div>
        <p className="text-muted-foreground max-w-2xl text-lg leading-relaxed">
          Quick, accurate guides and ready-to-paste alliance messages for events, heroes, mechanics, and territory. Stay up to date and grow your power!
        </p>
      </section>
      
      <section className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        <FeatureCard 
          icon={<Megaphone className="size-5" />} 
          title="Events" 
          href="/events/bear-hunt" 
          desc="Bear Hunt, Viking Vengeance, Terrors and more" 
        />
        <FeatureCard 
          icon={<Swords className="size-5" />} 
          title="Rally Rules" 
          href="/mechanics/rally-rules" 
          desc="Leaders vs joiners, Lethality vs Attack, timing" 
        />
        <FeatureCard 
          icon={<Map className="size-5" />} 
          title="Territory" 
          href="/territory/fertile-lands" 
          desc="Why move, expansion priorities, map control" 
        />
        <FeatureCard 
          icon={<ToolsIcon className="size-5" />} 
          title="Tools" 
          href="/tools" 
          desc="Ratio & promotion calculators (interactive)" 
        />
        <FeatureCard 
          icon={<NotebookTabs className="size-5" />} 
          title="Notices" 
          href="/alliance-notices" 
          desc="Ready-to-paste alliance templates" 
        />
        <FeatureCard 
          icon={<Calendar className="size-5" />} 
          title="Heroes" 
          href="/heroes/chenko" 
          desc="Hero guides and pairings" 
        />
      </section>
    </div>
  );
}