import { LineProps } from 'recharts';

export const defaultLineConfig: Partial<LineProps> = {
  type: "monotone",
  strokeWidth: 2,
  dot: { fill: "hsl(var(--primary))" },
  activeDot: { r: 6, fill: "hsl(var(--primary))" },
  stroke: "hsl(var(--primary))"
};