import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Sword, Target, Users, Star } from 'lucide-react';
import PageHeader from '@/components/PageHeader';
import CopyableNotice from '@/components/CopyableNotice';
import VoteWidget from "@/components/VoteWidget";
import Comments from "@/components/Comments";
import EditBar from "@/components/EditBar";

export default function ChenkoPage() {
  return (
    <div className="space-y-8">
      <PageHeader 
        title="Chenko" 
        description="The must-have hero for Bear Hunt and other PvE bosses. Her Lethality-focused kit makes her essential for maximizing boss damage."
        badge="S-Tier Hero"
        icon={<Sword className="h-8 w-8" />}
      />

      <div className="grid gap-6">
        <Card>
          <CardHeader>
            <div className="flex items-center gap-3">
              <div className="flex items-center gap-2">
                <Star className="h-5 w-5 text-yellow-500" />
                <CardTitle>S-Tier for Bear and Terrors</CardTitle>
              </div>
              <Badge variant="secondary">Lethality Focus</Badge>
            </div>
          </CardHeader>
          <CardContent className="space-y-4">
            <p className="text-muted-foreground">
              Chenko is widely regarded as the <strong>must‑have hero</strong> for Bear Hunt and other PvE bosses because her kit revolves around <strong>Lethality</strong>, the stat that has the biggest impact on boss damage.
            </p>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="bg-muted/50 p-4 rounded-lg">
                <div className="flex items-center gap-2 mb-2">
                  <Badge variant="secondary">Leader</Badge>
                </div>
                <p className="text-sm text-muted-foreground">
                  As a rally leader, all of Chenko's skills apply, giving the rally massive Lethality scaling. Pair her with capacity heroes like Diana or Jabel.
                </p>
              </div>
              <div className="bg-primary/5 p-4 rounded-lg">
                <div className="flex items-center gap-2 mb-2">
                  <Badge variant="default">Joiner</Badge>
                </div>
                <p className="text-sm text-muted-foreground">
                  Only the slot‑1 hero's top‑right skill applies for joiners. Chenko's top skill adds a stacking Lethality buff, making her the best joiner hero — if everyone uses Chenko in slot 1, the rally damage skyrockets.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <div className="flex items-center gap-2">
              <Users className="h-5 w-5 text-primary" />
              <CardTitle>Recommended Pairings</CardTitle>
            </div>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-4">
              <div>
                <div className="flex items-center gap-2 mb-2">
                  <Badge variant="secondary">Leaders</Badge>
                  <span className="font-medium">Chenko + Diana (or Jabel)</span>
                </div>
                <p className="text-sm text-muted-foreground">
                  For rally size. In PvP rallies, you might swap Chenko out for Diana/Quinn.
                </p>
              </div>
              <div>
                <div className="flex items-center gap-2 mb-2">
                  <Badge variant="outline">Joiners</Badge>
                  <span className="font-medium">Chenko + Lethality Heroes</span>
                </div>
                <p className="text-sm text-muted-foreground">
                  Chenko works best alongside other Lethality heroes like <strong>Yeonwoo</strong> and <strong>Amadeus</strong>, or the more accessible <strong>Amane</strong>.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <div className="flex items-center gap-2">
              <Target className="h-5 w-5 text-primary" />
              <CardTitle>Hero Stats</CardTitle>
            </div>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <div className="text-center p-3 bg-muted/50 rounded-lg">
                <div className="text-sm font-medium text-muted-foreground">Role</div>
                <div className="text-lg font-semibold">Rally/Joiner</div>
              </div>
              <div className="text-center p-3 bg-muted/50 rounded-lg">
                <div className="text-sm font-medium text-muted-foreground">Troop Type</div>
                <div className="text-lg font-semibold">Archer</div>
              </div>
              <div className="text-center p-3 bg-muted/50 rounded-lg">
                <div className="text-sm font-medium text-muted-foreground">Best For</div>
                <div className="text-lg font-semibold">Bear/Terrors</div>
              </div>
              <div className="text-center p-3 bg-muted/50 rounded-lg">
                <div className="text-sm font-medium text-muted-foreground">Tier</div>
                <div className="text-lg font-semibold text-yellow-600">S-Tier</div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      <CopyableNotice copyText="Join with Chenko slot‑1 (or Yeonwoo/Amadeus). Wrong hero lowers rally damage for everyone.">
        <div className="space-y-2">
          <p className="font-medium">Quick Alliance Line:</p>
          <p>Join with <strong>Chenko slot‑1</strong> (or Yeonwoo/Amadeus). Wrong hero lowers rally damage for everyone.</p>
        </div>
      </CopyableNotice>
      <VoteWidget slug="chenko" />
      <Comments />
      <EditBar filePath="app/heroes/chenko/page.tsx" title="Chenko" />
    </div>
  );
}
