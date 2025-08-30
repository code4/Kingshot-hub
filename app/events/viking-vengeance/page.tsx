import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Shield, Users, Flame, Target, Clock } from 'lucide-react';
import PageHeader from '@/components/PageHeader';
import CopyableNotice from '@/components/CopyableNotice';

export default function VikingVengeancePage() {
  return (
    <div className="space-y-8">
      <PageHeader 
        title="Viking Vengeance" 
        description="Defend against 20 waves of NPC Vikings. Coordinate with allies, reinforce strategically, and maximize points through teamwork."
        badge="Event Guide"
        icon={<Shield className="h-8 w-8" />}
      />

      <div className="grid gap-6">
        <Card>
          <CardHeader>
            <div className="flex items-center gap-2">
              <Users className="h-5 w-5 text-primary" />
              <CardTitle>Setup & Coordination</CardTitle>
            </div>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="bg-muted/50 p-4 rounded-lg">
              <p className="text-sm font-medium mb-2">Key Strategy:</p>
              <p className="text-sm text-muted-foreground">
                <strong>Split your troops into 4 squads</strong> and form groups of 4–5 players to reinforce each other throughout the event.
              </p>
            </div>
            <div className="space-y-3">
              <div className="flex items-start gap-3">
                <Badge variant="outline" className="shrink-0">1</Badge>
                <div>
                  <p className="text-sm font-medium">Split Troops</p>
                  <p className="text-sm text-muted-foreground">
                    Example: 120k troops → four marches of 30k each. These should go to different allies.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Badge variant="outline" className="shrink-0">2</Badge>
                <div>
                  <p className="text-sm font-medium">Form Groups</p>
                  <p className="text-sm text-muted-foreground">
                    Groups of 4–5 players – you'll reinforce each other throughout the event.
                  </p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <div className="flex items-center gap-2">
              <Flame className="h-5 w-5 text-primary" />
              <CardTitle>Event Rules</CardTitle>
            </div>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-3">
              <div className="flex items-start gap-3">
                <Badge variant="destructive" className="shrink-0">⚠️</Badge>
                <div>
                  <p className="text-sm font-medium">Do Not Heal</p>
                  <p className="text-sm text-muted-foreground">
                    Healing brings your own troops back to your city and steals kills from reinforcements.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Badge variant="outline" className="shrink-0">1st</Badge>
                <div>
                  <p className="text-sm font-medium">First Burn</p>
                  <p className="text-sm text-muted-foreground">
                    Put out fires via <strong>Extinguish</strong> in the Guard Station and keep going.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Badge variant="outline" className="shrink-0">2nd</Badge>
                <div>
                  <p className="text-sm font-medium">Second Burn</p>
                  <p className="text-sm text-muted-foreground">
                    Your city is out – you won't get targeted again. You can still reinforce others.
                  </p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <div className="flex items-center gap-2">
              <Target className="h-5 w-5 text-primary" />
              <CardTitle>Reinforcement Tips</CardTitle>
            </div>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-3">
              <div className="bg-muted/50 p-3 rounded-lg">
                <p className="text-sm font-medium mb-2">Troop Strategy:</p>
                <p className="text-sm text-muted-foreground">
                  Send <strong>infantry-heavy reinforcements</strong>; they soak damage and maximise kills for points.
                </p>
              </div>
              <div className="space-y-2">
                <p className="text-sm font-medium">Hero Setup:</p>
                <p className="text-sm text-muted-foreground">
                  Slot‑1 hero = <strong>Chenko / Yeonwoo / Amadeus / Amane</strong> – their buffs boost reinforcement damage. If you don't have them, send no hero.
                </p>
              </div>
              <div className="bg-destructive/5 border border-destructive/20 p-3 rounded-lg">
                <p className="text-sm font-medium mb-2">Offline Strategy:</p>
                <p className="text-sm text-muted-foreground">
                  If you're <strong>offline</strong> during Vikings, empty your city so friends can reinforce you. Don't send reinforcements yourself – you can't adjust them mid-event.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <div className="flex items-center gap-2">
              <Clock className="h-5 w-5 text-primary" />
              <CardTitle>HQ Waves</CardTitle>
            </div>
          </CardHeader>
          <CardContent>
            <div className="bg-muted/50 p-4 rounded-lg">
              <p className="text-sm font-medium mb-2">Critical Defense:</p>
              <p className="text-sm text-muted-foreground">
                <strong>Wave 10 and Wave 20</strong> target your Alliance HQ. Assign specific defenders to recall their best march and hold the HQ.
              </p>
            </div>
          </CardContent>
        </Card>
      </div>

      <CopyableNotice copyText="🪓 Vikings tonight! Split troops into four marches; buddy up with 4–5 mates; don't heal mid-event; first burn extinguish, second burn out. Reinforcement heroes: Chenko/Yeonwoo/Amadeus/Amane.">
        <div className="space-y-2">
          <p className="font-medium">Alliance Ping:</p>
          <p>Vikings tonight! Split troops into four marches; buddy up with 4–5 mates; don't heal mid-event; first burn extinguish, second burn out. Reinforcement heroes: Chenko/Yeonwoo/Amadeus/Amane.</p>
        </div>
      </CopyableNotice>
    </div>
  );
}
