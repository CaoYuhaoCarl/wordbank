import { CategoricalChartProps } from 'recharts';

export const defaultChartConfig: Partial<CategoricalChartProps> = {
  margin: { top: 10, right: 30, left: 0, bottom: 0 },
  style: { userSelect: 'none' }
};

export const axisConfig = {
  xAxis: {
    stroke: "#888888",
    tickLine: false,
    axisLine: false,
    fontSize: 12,
    fontFamily: "inherit",
    padding: { left: 10, right: 10 }
  },
  yAxis: {
    stroke: "#888888",
    tickLine: false,
    axisLine: false,
    fontSize: 12,
    fontFamily: "inherit",
    width: 40
  }
};