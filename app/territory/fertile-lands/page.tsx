import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Map, Target, Users, Zap, Shield } from 'lucide-react';
import PageHeader from '@/components/PageHeader';
import CopyableNotice from '@/components/CopyableNotice';

export default function FertileLandsPage() {
  return (
    <div className="space-y-8">
      <PageHeader 
        title="Fertile Lands Territory Guide" 
        description="Premium territory providing significant advantages for resource gathering and alliance growth. Moving here should be a priority for active alliances."
        badge="Territory Guide"
        icon={<Map className="h-8 w-8" />}
      />

      <div className="grid gap-6">
        <Card>
          <CardHeader>
            <div className="flex items-center gap-2">
              <Target className="h-5 w-5 text-primary" />
              <CardTitle>Why Move to Fertile Lands?</CardTitle>
            </div>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid md:grid-cols-2 gap-4">
              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <Badge variant="secondary" className="shrink-0">T8+</Badge>
                  <div>
                    <p className="text-sm font-medium">T8+ Resource Tiles</p>
                    <p className="text-sm text-muted-foreground">
                      Access to higher-tier resources that provide more materials per gather
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Badge variant="secondary" className="shrink-0">50%</Badge>
                  <div>
                    <p className="text-sm font-medium">Faster Gathering</p>
                    <p className="text-sm text-muted-foreground">
                      50% faster gathering speed compared to regular territories
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Badge variant="secondary" className="shrink-0">⭐</Badge>
                  <div>
                    <p className="text-sm font-medium">Prestige Buffs</p>
                    <p className="text-sm text-muted-foreground">
                      Alliance members inside Fertile Lands receive prestige bonuses
                    </p>
                  </div>
                </div>
              </div>
              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <Badge variant="outline" className="shrink-0">🎯</Badge>
                  <div>
                    <p className="text-sm font-medium">Strategic Position</p>
                    <p className="text-sm text-muted-foreground">
                      Central location for coordinating rallies and events
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Badge variant="outline" className="shrink-0">🏆</Badge>
                  <div>
                    <p className="text-sm font-medium">Competitive Advantage</p>
                    <p className="text-sm text-muted-foreground">
                      Only strong alliances can maintain positions here
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <div className="flex items-center gap-2">
              <Zap className="h-5 w-5 text-primary" />
              <CardTitle>Expansion Strategy</CardTitle>
            </div>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-3">
              <div className="flex items-start gap-3">
                <Badge variant="outline" className="shrink-0">1</Badge>
                <div>
                  <p className="text-sm font-medium">Scout the Area</p>
                  <p className="text-sm text-muted-foreground">
                    Identify available spots near your alliance's current position
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Badge variant="outline" className="shrink-0">2</Badge>
                <div>
                  <p className="text-sm font-medium">Coordinate Movement</p>
                  <p className="text-sm text-muted-foreground">
                    Use alliance teleport to move members together
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Badge variant="outline" className="shrink-0">3</Badge>
                <div>
                  <p className="text-sm font-medium">Establish Banners</p>
                  <p className="text-sm text-muted-foreground">
                    Set up alliance banners to claim territory
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Badge variant="outline" className="shrink-0">4</Badge>
                <div>
                  <p className="text-sm font-medium">Defend Position</p>
                  <p className="text-sm text-muted-foreground">
                    Be prepared to defend against other alliances
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Badge variant="outline" className="shrink-0">5</Badge>
                <div>
                  <p className="text-sm font-medium">Expand Gradually</p>
                  <p className="text-sm text-muted-foreground">
                    Move more members as you secure your position
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
              <CardTitle>Resource Priorities</CardTitle>
            </div>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <div className="text-center p-3 bg-muted/50 rounded-lg">
                <div className="text-2xl mb-1">⚒️</div>
                <div className="text-sm font-medium">Iron</div>
                <div className="text-xs text-muted-foreground">Most valuable</div>
              </div>
              <div className="text-center p-3 bg-muted/50 rounded-lg">
                <div className="text-2xl mb-1">🪨</div>
                <div className="text-sm font-medium">Stone</div>
                <div className="text-xs text-muted-foreground">Essential</div>
              </div>
              <div className="text-center p-3 bg-muted/50 rounded-lg">
                <div className="text-2xl mb-1">🪵</div>
                <div className="text-sm font-medium">Logs</div>
                <div className="text-xs text-muted-foreground">Needed</div>
              </div>
              <div className="text-center p-3 bg-muted/50 rounded-lg">
                <div className="text-2xl mb-1">🍞</div>
                <div className="text-sm font-medium">Bread</div>
                <div className="text-xs text-muted-foreground">Basic</div>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <div className="flex items-center gap-2">
              <Users className="h-5 w-5 text-primary" />
              <CardTitle>Alliance Coordination</CardTitle>
            </div>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid md:grid-cols-2 gap-4">
              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <Badge variant="secondary" className="shrink-0">🚀</Badge>
                  <div>
                    <p className="text-sm font-medium">Teleport Together</p>
                    <p className="text-sm text-muted-foreground">
                      Use alliance teleport to move as a group
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Badge variant="secondary" className="shrink-0">🏴</Badge>
                  <div>
                    <p className="text-sm font-medium">Banner Placement</p>
                    <p className="text-sm text-muted-foreground">
                      Strategic banner placement maximizes territory control
                    </p>
                  </div>
                </div>
              </div>
              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <Badge variant="outline" className="shrink-0">👥</Badge>
                  <div>
                    <p className="text-sm font-medium">Member Count</p>
                    <p className="text-sm text-muted-foreground">
                      More members inside = bigger bonuses for everyone
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Badge variant="outline" className="shrink-0">🛡️</Badge>
                  <div>
                    <p className="text-sm font-medium">Defense Coordination</p>
                    <p className="text-sm text-muted-foreground">
                      Work together to defend against rival alliances
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      <CopyableNotice copyText="🌾 Moving to Fertile Lands: We're expanding banners into Fertile! Please use alliance teleport to move next to the leader. Don't miss out on T8+ resource tiles, faster gathering, and prestige buffs. More members inside = bigger bonuses for everyone.">
        <div className="space-y-2">
          <p className="font-medium">Alliance Notice:</p>
          <p>We're expanding into Fertile Lands! Use alliance teleport to move next to the leader. Don't miss out on T8+ resources, faster gathering, and prestige buffs. More members inside = bigger bonuses for everyone.</p>
        </div>
      </CopyableNotice>
    </div>
  );
}
