import React from "react";
import "./analytics.css";
import UsersChart from "../../components/newUsersChart/NewUsersChart";
import OrdersChart from "../../components/newOrdersChart/NewOrdersChart";

export default function Analytics() {
  return (
    <div className="analytics">
      <UsersChart />
      <OrdersChart />
    </div>
  );
}
