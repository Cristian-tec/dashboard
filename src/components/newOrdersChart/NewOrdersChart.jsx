import React from "react";
import "./newOrdersChart.css";
import { productData } from "../../dummyData";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

export default function NewOrdersChart() {
  return (
    <div className="newOrdersChart">
      <h3 className="newOrdersChartTitle">New Orders </h3>
      <ResponsiveContainer width="100%" aspect={3}>
        <BarChart
          width={500}
          height={300}
          data={productData}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="Sales" fill="#E49F36" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}
