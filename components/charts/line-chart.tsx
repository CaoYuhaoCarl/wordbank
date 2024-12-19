"use client";

import { ResponsiveContainer, LineChart as RechartsLineChart, Line, XAxis, YAxis, Tooltip, CartesianGrid } from 'recharts';
import { Card } from '@/components/ui/card';

interface LineChartProps {
  data: any[];
  xKey: string;
  yKey: string;
  title?: string;
  height?: number;
}

export function LineChart({ 
  data, 
  xKey, 
  yKey, 
  title, 
  height = 300 
}: LineChartProps) {
  return (
    <Card className="p-6">
      {title && <h3 className="text-lg font-semibold mb-4">{title}</h3>}
      <div style={{ height }}>
        <ResponsiveContainer width="100%" height="100%">
          <RechartsLineChart data={data}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis 
              dataKey={xKey} 
              stroke="#888888"
              tickLine={false}
              axisLine={false}
            />
            <YAxis
              stroke="#888888"
              tickLine={false}
              axisLine={false}
              tickFormatter={(value) => `${value}`}
            />
            <Tooltip />
            <Line
              type="monotone"
              dataKey={yKey}
              stroke="hsl(var(--primary))"
              strokeWidth={2}
              dot={{ fill: "hsl(var(--primary))" }}
              activeDot={{ r: 6, fill: "hsl(var(--primary))" }}
            />
          </RechartsLineChart>
        </ResponsiveContainer>
      </div>
    </Card>
  );
}