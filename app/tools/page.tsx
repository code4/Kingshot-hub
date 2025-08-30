"use client";

import { useState } from 'react';

export default function ToolsPage() {
  return (
    <div className="space-y-10">
      <h1 className="text-3xl font-bold mb-4">Tools & Calculators</h1>
      <RatioCalculator />
      <PromotionCalculator />
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
  if (total > 0) {
    if (archPct < 75) {
      recommendation = 'You need more Archers – aim for at least 80%.';
    } else if (infPct < 8) {
      recommendation = 'Train or promote more Infantry to reach ~10%.';
    } else if (cavPct < 8) {
      recommendation = 'Train or promote more Cavalry to reach ~10%.';
    } else {
      recommendation = 'Great! Your ratios are close to 10/10/80.';
    }
  }

  return (
    <section className="border rounded-xl p-6 bg-white/60 dark:bg-slate-900/60">
      <h2 className="text-xl font-semibold mb-3">Troop Ratio Calculator</h2>
      <p className="text-sm mb-4">Enter your current troop counts to see how close you are to the ideal 10 % INF / 10 % CAV / 80 % ARCH ratio for Bear/Terror rallies.</p>
      <div className="grid grid-cols-3 gap-4 mb-4">
        <label className="flex flex-col text-sm">
          Infantry
          <input type="number" className="mt-1 p-1 rounded border dark:bg-slate-800" value={inf || ''} onChange={e => setInf(Number(e.target.value))} min={0} />
        </label>
        <label className="flex flex-col text-sm">
          Cavalry
          <input type="number" className="mt-1 p-1 rounded border dark:bg-slate-800" value={cav || ''} onChange={e => setCav(Number(e.target.value))} min={0} />
        </label>
        <label className="flex flex-col text-sm">
          Archers
          <input type="number" className="mt-1 p-1 rounded border dark:bg-slate-800" value={arch || ''} onChange={e => setArch(Number(e.target.value))} min={0} />
        </label>
      </div>
      {total > 0 && (
        <div className="text-sm">
          <p>Infantry: {infPct.toFixed(1)} % • Cavalry: {cavPct.toFixed(1)} % • Archers: {archPct.toFixed(1)} %</p>
          <p className="mt-2 font-medium">{recommendation}</p>
        </div>
      )}
    </section>
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
    <section className="border rounded-xl p-6 bg-white/60 dark:bg-slate-900/60">
      <h2 className="text-xl font-semibold mb-3">L5 Training vs Promotion Calculator</h2>
      <p className="text-sm mb-4">Compare the resources needed to train L5 troops directly or promote existing L1 troops to L5.</p>
      <label className="flex flex-col text-sm max-w-xs mb-4">
        Number of troops (multiples of 100)
        <input type="number" className="mt-1 p-1 rounded border dark:bg-slate-800" value={quantity || ''} onChange={e => setQuantity(Number(e.target.value))} min={100} step={100} />
      </label>
      <div className="grid md:grid-cols-2 gap-6 text-sm">
        <div>
          <h3 className="font-semibold mb-2">Train L5 Directly</h3>
          <ul className="list-disc pl-5 space-y-1">
            <li>Bread: {scaledDirect.bread.toLocaleString()}</li>
            <li>Logs: {scaledDirect.logs.toLocaleString()}</li>
            <li>Stone: {scaledDirect.stone.toLocaleString()}</li>
            <li>Iron: {scaledDirect.iron.toLocaleString()}</li>
          </ul>
        </div>
        <div>
          <h3 className="font-semibold mb-2">Promote L1 → L5</h3>
          <ul className="list-disc pl-5 space-y-1">
            <li>Bread: {scaledPromo.bread.toLocaleString()}</li>
            <li>Logs: {scaledPromo.logs.toLocaleString()}</li>
            <li>Stone: {scaledPromo.stone.toLocaleString()}</li>
            <li>Iron: {scaledPromo.iron.toLocaleString()}</li>
          </ul>
        </div>
      </div>
      <p className="mt-4 text-sm">
        Note: Both methods take roughly the same time. Promotion is cheaper only if you already have L1 troops. Otherwise, train L5 directly.
      </p>
    </section>
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