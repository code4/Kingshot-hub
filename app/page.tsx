import { Megaphone, Calendar, Swords, Map, Calculator as ToolsIcon, NotebookTabs } from 'lucide-react'
import Link from 'next/link'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'

function FeatureCard({
  icon,
  title,
  desc,
  href,
}: {
  icon: React.ReactNode
  title: string
  desc: string
  href: string
}) {
  return (
    <Link href={href} className="group block h-full">
      <Card className="h-full card-hover border shadow-sm transition-transform">
        <CardHeader className="pb-2">
          <div className="flex items-center gap-2 text-primary">
            <span className="rounded-md border p-2 bg-secondary/60 group-hover:bg-secondary transition-colors">
              {/* icon sized for visibility */}
              <span className="[&>svg]:h-4 [&>svg]:w-4 sm:[&>svg]:h-5 sm:[&>svg]:w-5">{icon}</span>
            </span>
            <CardTitle className="text-base sm:text-lg">{title}</CardTitle>
          </div>
        </CardHeader>
        <CardContent className="pt-0">
          <CardDescription className="text-sm sm:text-[0.95rem] leading-relaxed">
            {desc}
          </CardDescription>
        </CardContent>
      </Card>
    </Link>
  )
}

export default function Home() {
  return (
    <div className="space-y-10">
      {/* HERO */}
      <section className="relative overflow-hidden rounded-2xl border p-6 sm:p-8 card-hover">
        {/* subtle gaming glow */}
        <div
          aria-hidden
          className="pointer-events-none absolute -inset-20 bg-[radial-gradient(900px_300px_at_50%_-20%,hsl(var(--primary)/.20),transparent_60%)]"
        />
        <div className="relative">
          <div className="mb-3 flex items-center gap-3">
            <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold leading-tight">
              <span className="brand-gradient">Welcome to Kingshot Hub</span>
            </h1>
            <Badge variant="secondary" className="text-[10px] sm:text-xs">Fan Site</Badge>
          </div>
          <p className="max-w-2xl text-base sm:text-lg text-muted-foreground leading-relaxed">
            Fast lineups, rally timings, and copy-ready alliance messages for events, heroes, mechanics, and territory.
          </p>

          {/* primary CTAs */}
          <div className="mt-5 flex flex-wrap gap-2">
            <Button asChild className="btn-arcade">
              <Link href="/events/bear-hunt">Bear Hunt Guide</Link>
            </Button>
            <Button asChild variant="secondary" className="btn-arcade">
              <Link href="/mechanics/rally-rules">Rally Rules</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* FEATURES */}
      <section className="grid gap-4 sm:gap-6 md:grid-cols-2 lg:grid-cols-3">
        <FeatureCard
          icon={<Megaphone />}
          title="Events"
          href="/events/bear-hunt"
          desc="Bear Hunt, Viking Vengeance, Terrors, and more."
        />
        <FeatureCard
          icon={<Swords />}
          title="Rally Rules"
          href="/mechanics/rally-rules"
          desc="Leaders vs joiners, correct slot-1, timing windows."
        />
        <FeatureCard
          icon={<Map />}
          title="Territory"
          href="/territory/fertile-lands"
          desc="Why move, expansion priorities, map control."
        />
        <FeatureCard
          icon={<ToolsIcon />}
          title="Tools"
          href="/tools"
          desc="Ratios, promotions, and quick calculators."
        />
        <FeatureCard
          icon={<NotebookTabs />}
          title="Notices"
          href="/alliance-notices"
          desc="Copy-ready alliance templates that read well in chat."
        />
        <FeatureCard
          icon={<Calendar />}
          title="Heroes"
          href="/heroes/chenko"
          desc="Hero guides and pairings that actually work."
        />
      </section>
    </div>
  )
}
