"use client";

import { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Calculator, TrendingUp, Zap } from 'lucide-react';
import PageHeader from '@/components/PageHeader';

export default function ToolsPage() {
  return (
    <div className="space-y-10">
      <PageHeader 
        title="Tools & Calculators" 
        description="Interactive tools to help optimize your Kingshot gameplay and resource management."
        badge="Interactive"
        icon={<Calculator className="h-8 w-8" />}
      />
      
      <div className="grid gap-8">
        <RatioCalculator />
        <PromotionCalculator />
      </div>
    </div>
  );
}

function RatioCalculator() {
  const [inf, setInf] = useState(0);
  const [cav, setCav] = useState(0);
  const [arch, setArch] = useState(0);

  const total = inf + cav + arch;
  const infPct = total ? (inf / total) * 100 : 0;
  const cavPct = total ? (cav / total) * 100 : 0;
  const archPct = total ? (arch / total) * 100 : 0;

  let recommendation = '';
  let recommendationColor = 'text-green-600';
  if (total > 0) {
    if (archPct < 75) {
      recommendation = 'You need more Archers – aim for at least 80%.';
      recommendationColor = 'text-red-600';
    } else if (infPct < 8) {
      recommendation = 'Train or promote more Infantry to reach ~10%.';
      recommendationColor = 'text-yellow-600';
    } else if (cavPct < 8) {
      recommendation = 'Train or promote more Cavalry to reach ~10%.';
      recommendationColor = 'text-yellow-600';
    } else {
      recommendation = 'Great! Your ratios are close to 10/10/80.';
      recommendationColor = 'text-green-600';
    }
  }

  return (
    <Card>
      <CardHeader>
        <div className="flex items-center gap-2">
          <TrendingUp className="h-5 w-5 text-primary" />
          <CardTitle>Troop Ratio Calculator</CardTitle>
        </div>
        <CardDescription>
          Enter your current troop counts to see how close you are to the ideal 10% INF / 10% CAV / 80% ARCH ratio for Bear/Terror rallies.
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="grid grid-cols-3 gap-4">
          <div className="space-y-2">
            <Label htmlFor="infantry">Infantry</Label>
            <Input
              id="infantry"
              type="number"
              value={inf || ''}
              onChange={e => setInf(Number(e.target.value))}
              min={0}
              placeholder="0"
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="cavalry">Cavalry</Label>
            <Input
              id="cavalry"
              type="number"
              value={cav || ''}
              onChange={e => setCav(Number(e.target.value))}
              min={0}
              placeholder="0"
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="archers">Archers</Label>
            <Input
              id="archers"
              type="number"
              value={arch || ''}
              onChange={e => setArch(Number(e.target.value))}
              min={0}
              placeholder="0"
            />
          </div>
        </div>
        
        {total > 0 && (
          <div className="space-y-2">
            <div className="flex gap-4 text-sm">
              <Badge variant="outline">Infantry: {infPct.toFixed(1)}%</Badge>
              <Badge variant="outline">Cavalry: {cavPct.toFixed(1)}%</Badge>
              <Badge variant="outline">Archers: {archPct.toFixed(1)}%</Badge>
            </div>
            <p className={`text-sm font-medium ${recommendationColor}`}>{recommendation}</p>
          </div>
        )}
      </CardContent>
    </Card>
  );
}

function PromotionCalculator() {
  const [quantity, setQuantity] = useState(100);
  // Costs per 100 troops based on L1 → L5 promotion vs training L5 direct (approx values from research)
  const directCosts = { bread: 15600, logs: 11700, stone: 2700, iron: 600 };
  const promoCosts = { bread: 12000, logs: 9000, stone: 2000, iron: 400 };
  const trainL1Costs = { bread: 3600, logs: 2700, stone: 700, iron: 200 };
  // compute totals
  const scaledDirect = scaleCosts(directCosts, quantity / 100);
  const scaledPromo = scaleCosts(promoCosts, quantity / 100);
  const scaledTrainL1 = scaleCosts(trainL1Costs, quantity / 100);

  return (
    <Card>
      <CardHeader>
        <div className="flex items-center gap-2">
          <Zap className="h-5 w-5 text-primary" />
          <CardTitle>L5 Training vs Promotion Calculator</CardTitle>
        </div>
        <CardDescription>
          Compare the resources needed to train L5 troops directly or promote existing L1 troops to L5.
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="space-y-2">
          <Label htmlFor="quantity">Number of troops (multiples of 100)</Label>
          <Input
            id="quantity"
            type="number"
            value={quantity || ''}
            onChange={e => setQuantity(Number(e.target.value))}
            min={100}
            step={100}
            placeholder="100"
          />
        </div>
        
        <div className="grid md:grid-cols-2 gap-6">
          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Train L5 Directly</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-sm">
                <li className="flex justify-between">
                  <span>Bread:</span>
                  <Badge variant="secondary">{scaledDirect.bread.toLocaleString()}</Badge>
                </li>
                <li className="flex justify-between">
                  <span>Logs:</span>
                  <Badge variant="secondary">{scaledDirect.logs.toLocaleString()}</Badge>
                </li>
                <li className="flex justify-between">
                  <span>Stone:</span>
                  <Badge variant="secondary">{scaledDirect.stone.toLocaleString()}</Badge>
                </li>
                <li className="flex justify-between">
                  <span>Iron:</span>
                  <Badge variant="secondary">{scaledDirect.iron.toLocaleString()}</Badge>
                </li>
              </ul>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Promote L1 → L5</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-sm">
                <li className="flex justify-between">
                  <span>Bread:</span>
                  <Badge variant="secondary">{scaledPromo.bread.toLocaleString()}</Badge>
                </li>
                <li className="flex justify-between">
                  <span>Logs:</span>
                  <Badge variant="secondary">{scaledPromo.logs.toLocaleString()}</Badge>
                </li>
                <li className="flex justify-between">
                  <span>Stone:</span>
                  <Badge variant="secondary">{scaledPromo.stone.toLocaleString()}</Badge>
                </li>
                <li className="flex justify-between">
                  <span>Iron:</span>
                  <Badge variant="secondary">{scaledPromo.iron.toLocaleString()}</Badge>
                </li>
              </ul>
            </CardContent>
          </Card>
        </div>
        
        <div className="text-sm text-muted-foreground bg-muted/50 p-3 rounded-lg">
          <strong>Note:</strong> Both methods take roughly the same time. Promotion is cheaper only if you already have L1 troops. Otherwise, train L5 directly.
        </div>
      </CardContent>
    </Card>
  );
}

function scaleCosts(costs: { [key: string]: number }, factor: number) {
  return {
    bread: Math.round(costs.bread * factor),
    logs: Math.round(costs.logs * factor),
    stone: Math.round(costs.stone * factor),
    iron: Math.round(costs.iron * factor)
  };
}