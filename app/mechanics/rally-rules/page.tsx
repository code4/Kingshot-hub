import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Sword, Users, Target, Zap, CheckCircle, XCircle } from 'lucide-react';
import PageHeader from '@/components/PageHeader';
import CopyableNotice from '@/components/CopyableNotice';
import VoteWidget from "@/components/VoteWidget";
import Comments from "@/components/Comments";
import EditBar from "@/components/EditBar";

export default function RallyRulesPage() {
  return (
    <div className="space-y-8">
      <PageHeader 
        title="Rally Rules & Mechanics" 
        description="Understanding rally mechanics is critical for maximising damage and minimising troop losses. Here are the key principles to follow for Kingshot rallies."
        badge="Game Mechanics"
        icon={<Sword className="h-8 w-8" />}
      />

      <div className="grid gap-6">
        <Card>
          <CardHeader>
            <div className="flex items-center gap-2">
              <Users className="h-5 w-5 text-primary" />
              <CardTitle>Starters vs Joiners</CardTitle>
            </div>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-4">
              <div>
                <div className="flex items-center gap-2 mb-2">
                  <Badge variant="secondary">Leaders</Badge>
                  <span className="font-medium">All Hero Skills Apply</span>
                </div>
                <p className="text-sm text-muted-foreground mb-2">
                  All three of their heroes' skills apply to the rally. Choose heroes that boost rally size and damage.
                </p>
                <div className="space-y-1 text-sm">
                  <p><strong>Bear/Terrors:</strong> Chenko / Yeonwoo / Amadeus + Diana/Jabel for capacity</p>
                  <p><strong>PvP Rallies:</strong> Diana / Quinn to balance attack and defence</p>
                </div>
              </div>
              <div>
                <div className="flex items-center gap-2 mb-2">
                  <Badge variant="outline">Joiners</Badge>
                  <span className="font-medium">Slot-1 Hero Only</span>
                </div>
                <p className="text-sm text-muted-foreground mb-2">
                  Only the <strong>slot‑1 hero's top‑right skill</strong> applies.
                </p>
                <div className="space-y-1 text-sm">
                  <p><strong>Bear/Terrors:</strong> Chenko / Yeonwoo / Amadeus / Amane in slot 1</p>
                  <p><strong>PvP:</strong> Heroes that boost your troop type (e.g. Diana, Quinn)</p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <div className="flex items-center gap-2">
              <Target className="h-5 w-5 text-primary" />
              <CardTitle>Myth vs Fact</CardTitle>
            </div>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-3">
              <div className="flex items-start gap-3">
                <XCircle className="h-5 w-5 text-destructive shrink-0 mt-0.5" />
                <div>
                  <p className="text-sm font-medium text-destructive">Myth</p>
                  <p className="text-sm text-muted-foreground">
                    Four random joiner heroes apply their bonuses to a rally.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="h-5 w-5 text-green-600 shrink-0 mt-0.5" />
                <div>
                  <p className="text-sm font-medium text-green-600">Fact</p>
                  <p className="text-sm text-muted-foreground">
                    Only the <strong>slot‑1 hero's top‑right skill</strong> from each joiner applies. Filling other hero slots doesn't matter.
                  </p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <div className="flex items-center gap-2">
              <Zap className="h-5 w-5 text-primary" />
              <CardTitle>Attack vs Lethality</CardTitle>
            </div>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid md:grid-cols-2 gap-4">
              <div className="bg-muted/50 p-4 rounded-lg">
                <div className="flex items-center gap-2 mb-2">
                  <Badge variant="secondary">Attack</Badge>
                </div>
                <p className="text-sm text-muted-foreground">
                  Increases your damage output. It's useful in PvP and general rallies.
                </p>
              </div>
              <div className="bg-primary/5 p-4 rounded-lg">
                <div className="flex items-center gap-2 mb-2">
                  <Badge variant="default">Lethality</Badge>
                </div>
                <p className="text-sm text-muted-foreground">
                  Reduces the enemy's effective HP. For PvE bosses like Bear and Terrors, Lethality scaling is far more important than raw attack — which is why Chenko/Yeonwoo/Amadeus are so strong.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Quick Rules for Alliance</CardTitle>
            <CardDescription>Essential guidelines for rally coordination</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-3">
              <div className="flex items-start gap-3">
                <Badge variant="outline" className="shrink-0">1</Badge>
                <div>
                  <p className="text-sm font-medium">Leaders</p>
                  <p className="text-sm text-muted-foreground">
                    Choose heroes with the right buffs for the event (Lethality for PvE; balanced attack/defence for PvP; HP/Defence for defensive rallies).
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Badge variant="outline" className="shrink-0">2</Badge>
                <div>
                  <p className="text-sm font-medium">Joiners</p>
                  <p className="text-sm text-muted-foreground">
                    Slot 1 hero = <strong>Chenko / Yeonwoo / Amadeus / Amane</strong>; if you don't have them, send no hero.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Badge variant="outline" className="shrink-0">3</Badge>
                <div>
                  <p className="text-sm font-medium">Fill Rallies</p>
                  <p className="text-sm text-muted-foreground">
                    Fill rallies fully; don't send half marches. Use 10/10/80 mix if possible.
                  </p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      <CopyableNotice copyText="⚔️ Rally Reminder: Leaders apply all hero skills; joiners only apply slot‑1 top‑right skill. For PvE bosses: slot‑1 Chenko/Yeonwoo/Amadeus/Amane. If you don't have them → send no hero. Fill rallies fully; no solos.">
        <div className="space-y-2">
          <p className="font-medium">Remember:</p>
          <p>Joiners contribute only slot‑1 top‑right skill; leaders contribute all their heroes' skills. Use Chenko/Yeonwoo/Amadeus for Bear/Terrors; Diana/Quinn for PvP; Gordon/Howard for defence.</p>
        </div>
      </CopyableNotice>
      <VoteWidget slug="rally-rules" />
      <Comments />
      <EditBar filePath="app/mechanics/rally-rules/page.tsx" title="Rally Rules & Mechanics" />
    </div>
  );
}
