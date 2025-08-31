import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Sword, Users, Zap, Heart, Target } from 'lucide-react';
import PageHeader from '@/components/PageHeader';
import CopyableNotice from '@/components/CopyableNotice';
import VoteWidget from "@/components/VoteWidget";
import Comments from "@/components/Comments";
import EditBar from "@/components/EditBar";

export default function TerrorsPage() {
  return (
    <div className="space-y-8">
      <PageHeader 
        title="Terrors (PvE Boss)" 
        description="Roaming bosses on the map that alliances can rally for rewards. Maximize damage and avoid needless troop losses."
        badge="Event Guide"
        icon={<Sword className="h-8 w-8" />}
      />

      <div className="grid gap-6">
        <Card>
          <CardHeader>
            <div className="flex items-center gap-2">
              <Target className="h-5 w-5 text-primary" />
              <CardTitle>Rally vs Solo Strategy</CardTitle>
            </div>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="bg-muted/50 p-4 rounded-lg">
              <p className="text-sm font-medium mb-2">Key Rule:</p>
              <p className="text-sm text-muted-foreground">
                <strong>Always rally</strong> if possible. Solo hits waste stamina and risk troop losses. 10 stamina for marches, 25 for rallies.
              </p>
            </div>
            <div className="bg-destructive/5 border border-destructive/20 p-3 rounded-lg">
              <p className="text-sm font-medium mb-2">Exception:</p>
              <p className="text-sm text-muted-foreground">
                Only solo low‑level Terrors when you're sure you can defeat them without heavy losses.
              </p>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <div className="flex items-center gap-2">
              <Users className="h-5 w-5 text-primary" />
              <CardTitle>Hero Setup</CardTitle>
            </div>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-3">
              <div>
                <div className="flex items-center gap-2 mb-2">
                  <Badge variant="secondary">Leaders</Badge>
                  <span className="font-medium">Chenko / Yeonwoo / Amadeus</span>
                </div>
                <p className="text-sm text-muted-foreground">
                  Use these heroes to maximise <strong>Lethality</strong>. Add <strong>Diana/Jabel</strong> for rally capacity.
                </p>
              </div>
              <div>
                <div className="flex items-center gap-2 mb-2">
                  <Badge variant="outline">Joiners</Badge>
                  <span className="font-medium">Chenko / Yeonwoo / Amadeus / Amane</span>
                </div>
                <p className="text-sm text-muted-foreground">
                  Slot‑1 hero only; otherwise no hero. Only the slot‑1 top‑right skill applies to the rally.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <div className="flex items-center gap-2">
              <Zap className="h-5 w-5 text-primary" />
              <CardTitle>Troop Mix & Stamina</CardTitle>
            </div>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid grid-cols-3 gap-4 mb-4">
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
            <div className="space-y-3">
              <p className="text-sm text-muted-foreground">
                Ideal mix is similar to Bear: <strong>10% Infantry / 10% Cavalry / 80% Archers</strong>. Send what you have; full rallies matter more.
              </p>
              <div className="bg-destructive/5 border border-destructive/20 p-3 rounded-lg">
                <p className="text-sm font-medium mb-2">Important:</p>
                <p className="text-sm text-muted-foreground">
                  Stamina is <strong>not refunded</strong> on failed attacks. Make sure you have enough stamina and infirmary space before starting a rally.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <div className="flex items-center gap-2">
              <Heart className="h-5 w-5 text-primary" />
              <CardTitle>Injuries & Rewards</CardTitle>
            </div>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-3">
              <div className="bg-destructive/5 border border-destructive/20 p-4 rounded-lg">
                <p className="text-sm font-medium mb-2">Rally Failures:</p>
                <p className="text-sm text-muted-foreground">
                  If a rally fails, <strong>both leader and joiners</strong> have their troops <strong>injured</strong> (sent to infirmary). Injuries count towards your infirmary space; if full, you'll lose troops permanently.
                </p>
              </div>
              <div className="bg-muted/50 p-4 rounded-lg">
                <p className="text-sm font-medium mb-2">Partial Rewards:</p>
                <p className="text-sm text-muted-foreground">
                  You still get <strong>partial rewards</strong> based on the damage you dealt – including resources, speedups, and shards.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      <CopyableNotice copyText="👹 Terror Rally Alert: Rally Terrors instead of soloing. Leaders use Chenko/Yeonwoo/Amadeus, joiners slot‑1 Chenko/Yeonwoo/Amadeus/Amane. Check stamina and infirmary space before rallying – stamina isn't refunded and troops get injured on fails.">
        <div className="space-y-2">
          <p className="font-medium">Quick Tips:</p>
          <p>Rally Terrors instead of solo; use Chenko/Yeonwoo/Amadeus as leaders; joiners slot‑1 the same heroes or send no hero; check stamina and infirmary space before rallying.</p>
        </div>
      </CopyableNotice>
      <VoteWidget slug="terrors" />
      <Comments />
      <EditBar filePath="app/events/terrors/page.tsx" title="Terrors" />
    </div>
  );
}
