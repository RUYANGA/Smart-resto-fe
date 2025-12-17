"use client";
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer } from "recharts";

// Define a type for the chart data
type MealStatsChartData = {
  date: string;
  meals: number;
};

export function MealStatsChart({ data }: { data: MealStatsChartData[] }) {
  return (
    <ResponsiveContainer width="100%" height={300}>
      <BarChart data={data}>
        <XAxis dataKey="date" />
        <YAxis />
        <Tooltip />
        <Bar dataKey="meals" fill="#06b6d4" />
      </BarChart>
    </ResponsiveContainer>
  );
}
