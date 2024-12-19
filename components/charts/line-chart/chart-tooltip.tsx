"use client";

import { Card } from '@/components/ui/card';

interface ChartTooltipProps {
  active?: boolean;
  payload?: Array<{
    value: number;
    name?: string;
  }>;
  label?: string;
}

export function ChartTooltip({ active, payload, label }: ChartTooltipProps) {
  if (!active || !payload?.length) {
    return null;
  }

  return (
    <Card className="bg-white/90 dark:bg-black/90 backdrop-blur-sm p-2 border shadow-lg">
      <p className="text-sm font-medium">{label}</p>
      {payload.map((item, index) => (
        <p key={index} className="text-sm text-muted-foreground">
          {item.value} {item.name}
        </p>
      ))}
    </Card>
  );
}