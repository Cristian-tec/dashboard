import React from "react";
import "./newUsersChart.css";
import { userData } from "../../dummyData";
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

export default function NewUsersChart() {
  return (
    <div className="newUsersChart">
      <h3 className="newUserChartTitle">New Users </h3>
      <ResponsiveContainer width="100%" aspect={3}>
        <BarChart
          width={500}
          height={300}
          data={userData}
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
          <Bar dataKey="Active User" fill="#E49F36" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}
