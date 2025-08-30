import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Copy, Check, Sword, Users, Target, Clock } from 'lucide-react';
import PageHeader from '@/components/PageHeader';
import CopyableNotice from '@/components/CopyableNotice';

export default function BearHuntPage() {
  return (
    <div className="space-y-8">
      <PageHeader 
        title="Bear Hunt (PvE)" 
        description="Maximize damage per rally with optimal hero setup and troop ratios."
        badge="Event Guide"
        icon={<Target className="h-8 w-8" />}
      />

      <div className="grid gap-6">
        <Card>
          <CardHeader>
            <div className="flex items-center gap-2">
              <Sword className="h-5 w-5 text-primary" />
              <CardTitle>Rally Leaders (Starters)</CardTitle>
            </div>
          </CardHeader>
          <CardContent className="space-y-3">
            <div className="flex items-center gap-2">
              <Badge variant="secondary">Primary</Badge>
              <span className="font-medium">Chenko / Yeonwoo / Amadeus</span>
            </div>
            <p className="text-sm text-muted-foreground">
              Rally leaders: their full kit applies, providing huge <strong>Lethality</strong> buffs for damage.
            </p>
            <div className="flex items-center gap-2">
              <Badge variant="outline">Secondary</Badge>
              <span className="font-medium">Diana / Jabel</span>
            </div>
            <p className="text-sm text-muted-foreground">
              Secondary heroes to expand rally size.
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <div className="flex items-center gap-2">
              <Users className="h-5 w-5 text-primary" />
              <CardTitle>Joiners</CardTitle>
            </div>
          </CardHeader>
          <CardContent className="space-y-3">
            <div className="bg-muted/50 p-3 rounded-lg">
              <p className="text-sm font-medium mb-2">Important Rule:</p>
              <p className="text-sm text-muted-foreground">
                <strong>Only the slot‑1 hero's top‑right skill applies</strong> for joiners. Always put <strong>Chenko / Yeonwoo / Amadeus / Amane</strong> in slot 1.
              </p>
            </div>
            <p className="text-sm text-muted-foreground">
              If you don't have one of these heroes, <strong>leave slot 1 empty</strong> (better than the wrong hero).
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Troop Mix</CardTitle>
            <CardDescription>Optimal troop composition for maximum damage</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-3 gap-4">
              <div className="text-center p-3 bg-muted/50 rounded-lg">
                <div className="text-2xl font-bold text-blue-600">10%</div>
                <div className="text-sm font-medium">Infantry</div>
              </div>
              <div className="text-center p-3 bg-muted/50 rounded-lg">
                <div className="text-2xl font-bold text-green-600">10%</div>
                <div className="text-sm font-medium">Cavalry</div>
              </div>
              <div className="text-center p-3 bg-muted/50 rounded-lg">
                <div className="text-2xl font-bold text-red-600">80%</div>
                <div className="text-sm font-medium">Archers</div>
              </div>
            </div>
            <p className="text-sm text-muted-foreground mt-3">
              Archers deal the most damage vs. Bear. Don't worry if you can't match this – send what you have. It's more important to <strong>fill rallies fully and quickly</strong>.
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <div className="flex items-center gap-2">
              <Clock className="h-5 w-5 text-primary" />
              <CardTitle>Timing & Strategy</CardTitle>
            </div>
          </CardHeader>
          <CardContent>
            <ol className="space-y-3 text-sm">
              <li className="flex gap-3">
                <Badge variant="outline" className="shrink-0">1</Badge>
                <div>
                  <strong>Start with the closest leaders</strong> to the pit. They open 5‑minute rallies first.
                </div>
              </li>
              <li className="flex gap-3">
                <Badge variant="outline" className="shrink-0">2</Badge>
                <div>
                  <strong>Stagger rally launches</strong> – keep at least one rally marching at all times. When one is half way, the next leader launches.
                </div>
              </li>
              <li className="flex gap-3">
                <Badge variant="outline" className="shrink-0">3</Badge>
                <div>
                  <strong>Final push</strong> – when Bear HP is low, concentrate on the fastest marching leader so it doesn't despawn.
                </div>
              </li>
            </ol>
          </CardContent>
        </Card>
      </div>

      <CopyableNotice copyText="🐻 Bear Hunt at 23:00 UTC – rally leaders use Chenko/Yeonwoo/Amadeus. Joiners slot‑1 Chenko/Yeonwoo/Amadeus/Amane (or no hero). Aim for 10/10/80 troop mix if possible.">
        <div className="space-y-2">
          <p className="font-medium">Alliance Ping:</p>
          <p>Bear Hunt at <strong>23:00 UTC</strong> – rally leaders use Chenko/Yeonwoo/Amadeus. Joiners slot‑1 Chenko/Yeonwoo/Amadeus/Amane (or no hero). Aim for 10/10/80 troop mix if possible.</p>
        </div>
      </CopyableNotice>
    </div>
  );
}
