import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Megaphone, Copy } from 'lucide-react';
import PageHeader from '@/components/PageHeader';
import CopyableNotice from '@/components/CopyableNotice';

const notices = [
  {
    id: 'bear-hunt',
    title: 'Bear Hunt',
    emoji: '🐻',
    description: 'Rally coordination and hero setup for Bear Hunt events',
    content: `🐻 Bear Hunt Tonight – 23:00 UTC

Closest cities = rally leaders. Leaders use Chenko/Yeonwoo/Amadeus + Diana/Jabel. Joiners slot‑1 Chenko/Yeonwoo/Amadeus/Amane (or no hero). Aim for 10% INF / 10% CAV / 80% ARCH if possible. Check infirmary space. Fill rallies fast!`
  },
  {
    id: 'vikings',
    title: 'Viking Vengeance',
    emoji: '🪓',
    description: 'Event strategy and reinforcement tips for Vikings',
    content: `🪓 Viking Vengeance Starting Soon

Split troops into 4 squads. Buddy up with 4–5 people and reinforce each other. Don't heal during the event. Burn once → extinguish, burn twice → you're out. Infantry‑heavy reinforcements with Chenko/Yeonwoo/Amadeus/Amane in slot 1. HQ waves are 10 & 20; assigned defenders only.`
  },
  {
    id: 'fertile-lands',
    title: 'Fertile Lands',
    emoji: '🌾',
    description: 'Territory expansion coordination',
    content: `🌾 Moving to Fertile Lands

We're expanding banners into Fertile! Please use alliance teleport to move next to the leader. Don't miss out on T8+ resource tiles, faster gathering, and prestige buffs. More members inside = bigger bonuses for everyone.`
  },
  {
    id: 'rally-reminder',
    title: 'Rally Rules',
    emoji: '⚔️',
    description: 'General rally mechanics reminder',
    content: `⚔️ Rally Reminder

Leaders apply all hero skills; joiners only apply slot‑1 top‑right skill. For PvE bosses: slot‑1 Chenko/Yeonwoo/Amadeus/Amane. If you don't have them → send no hero. Fill rallies fully; no solos.`
  },
  {
    id: 'terrors',
    title: 'Terror Rallies',
    emoji: '👹',
    description: 'Boss fight coordination for Terrors',
    content: `👹 Terror Rally Alert

Rally Terrors instead of soloing. Leaders use Chenko/Yeonwoo/Amadeus, joiners slot‑1 Chenko/Yeonwoo/Amadeus/Amane. Check stamina and infirmary space before rallying – stamina isn't refunded and troops get injured on fails. Don't forget to heal after the kill.`
  }
];

export default function AllianceNoticesPage() {
  return (
    <div className="space-y-8">
      <PageHeader 
        title="Alliance Notices & Templates" 
        description="Ready-to-paste messages for alliance chat. Customize dates and names as needed."
        badge="Templates"
        icon={<Megaphone className="h-8 w-8" />}
      />

      <Tabs defaultValue="bear-hunt" className="space-y-6">
        <TabsList className="grid w-full grid-cols-5">
          {notices.map((notice) => (
            <TabsTrigger key={notice.id} value={notice.id} className="flex items-center gap-2">
              <span>{notice.emoji}</span>
              <span className="hidden sm:inline">{notice.title}</span>
            </TabsTrigger>
          ))}
        </TabsList>

        {notices.map((notice) => (
          <TabsContent key={notice.id} value={notice.id} className="space-y-4">
            <Card>
              <CardHeader>
                <div className="flex items-center gap-3">
                  <span className="text-2xl">{notice.emoji}</span>
                  <div>
                    <CardTitle>{notice.title} Notice</CardTitle>
                    <CardDescription>{notice.description}</CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="bg-muted/50 p-4 rounded-lg">
                  <pre className="text-sm whitespace-pre-wrap font-mono">{notice.content}</pre>
                </div>
                
                <CopyableNotice copyText={notice.content}>
                  <div className="space-y-2">
                    <p className="font-medium">Ready to copy:</p>
                    <p className="text-sm text-muted-foreground">
                      Click the copy button above to copy this notice to your clipboard for alliance chat.
                    </p>
                  </div>
                </CopyableNotice>
              </CardContent>
            </Card>
          </TabsContent>
        ))}
      </Tabs>

      <Card>
        <CardHeader>
          <CardTitle>Quick Tips</CardTitle>
        </CardHeader>
        <CardContent className="space-y-3">
          <div className="flex items-start gap-3">
            <Badge variant="outline" className="shrink-0">💡</Badge>
            <p className="text-sm">Customize the time and date in the notices before copying</p>
          </div>
          <div className="flex items-start gap-3">
            <Badge variant="outline" className="shrink-0">💡</Badge>
            <p className="text-sm">Add your alliance name or specific instructions as needed</p>
          </div>
          <div className="flex items-start gap-3">
            <Badge variant="outline" className="shrink-0">💡</Badge>
            <p className="text-sm">Use the copy button for quick pasting into game chat</p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
