import React from "react";
import {
  BarChart,
  Bar,
  Tooltip,
  Legend,
  ResponsiveContainer,
  XAxis,
  YAxis,
} from "recharts";

const data = [
  { name: "Page A", uv: -2, pv: 3.8, amt: 1 },
  { name: "Page B", uv: -1, pv: 3.6, amt: 1 },
  { name: "Page C", uv: -2.5, pv: 4.7, amt: 1 },
  { name: "Page D", uv: -1.7, pv: 4.7, amt: 1 },
  { name: "Page E", uv: -0.7, pv: 2.4, amt: 1 },
  { name: "Page F", uv: -2, pv: 2.8, amt: 1 },
];

export default function StackedBarChart() {
  return (
    <ResponsiveContainer width="100%" height="100%">
      <BarChart data={data}>
        <Tooltip />{" "}
        <Bar dataKey="pv" stackId="a" fill="#7599FF" barSize={12} radius={16} />
        <Bar dataKey="uv" stackId="a" fill="#64C7FE" radius={[0, 0, 16, 16]} />
      </BarChart>
    </ResponsiveContainer>
  );
}
