import { XAxisProps, YAxisProps } from 'recharts';

const baseAxisConfig = {
  stroke: "#888888",
  tickLine: false,
  axisLine: false,
  fontSize: 12,
  fontFamily: "inherit"
};

export const xAxisConfig: Partial<XAxisProps> = {
  ...baseAxisConfig,
  padding: { left: 10, right: 10 }
};

export const yAxisConfig: Partial<YAxisProps> = {
  ...baseAxisConfig,
  width: 40,
  tickFormatter: (value: number) => `${value}`
};