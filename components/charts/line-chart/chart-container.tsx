"use client";

import { ReactNode } from 'react';
import { Card } from '@/components/ui/card';

interface ChartContainerProps {
  title?: string;
  height?: number;
  children: ReactNode;
}

export function ChartContainer({ title, height = 300, children }: ChartContainerProps) {
  return (
    <Card className="p-6 bg-white/80 dark:bg-black/20 backdrop-blur-sm">
      {title && <h2 className="text-lg font-semibold mb-4">{title}</h2>}
      <div style={{ height }}>{children}</div>
    </Card>
  );
}