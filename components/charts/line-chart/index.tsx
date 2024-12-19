"use client";

import { ResponsiveContainer, LineChart as RechartsLineChart, Line, XAxis, YAxis, Tooltip, CartesianGrid } from 'recharts';
import { ChartContainer } from './chart-container';
import { ChartTooltip } from './chart-tooltip';
import { xAxisConfig } from './axis-config';
import { yAxisConfig } from './axis-config';
import { defaultLineConfig } from './line-config';

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
    <ChartContainer title={title} height={height}>
      <ResponsiveContainer width="100%" height="100%">
        <RechartsLineChart 
          data={data}
          margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
          style={{ userSelect: 'none' }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis 
            dataKey={xKey} 
            {...xAxisConfig}
          />
          <YAxis {...yAxisConfig} />
          <Tooltip content={<ChartTooltip />} />
          <Line
            dataKey={yKey}
            {...defaultLineConfig}
          />
        </RechartsLineChart>
      </ResponsiveContainer>
    </ChartContainer>
  );
}