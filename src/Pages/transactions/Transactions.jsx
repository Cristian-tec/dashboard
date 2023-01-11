import React, { useEffect } from "react";
import "./transactions.css";
import { DataGrid } from "@mui/x-data-grid";
import { DeleteOutlined } from "@mui/icons-material";
import { productRows } from "../../dummyData";
import { Link } from "react-router-dom";
import { useState } from "react";
import axios from "axios";

export default function Transactions() {
  const orderRows = [
    {
      id: "",
      shippingAddress: "",
      billingAddress: "",
      orderDate: "",
      quantity: "",
      totalPrice: "",
      image: "https://media.tenor.com/On7kvXhzml4AAAAj/loading-gif.gif",
    },
  ];

  const [data, setData] = useState(orderRows);

  let ordersLog;

  const ordersRegisters = async () => {
    ordersLog = await axios.get(
      "https://test-deploy-production-3b4b.up.railway.app/orders"
    );
    console.log(ordersLog.data);
  };

  const handleDelete = (id) => {
    setData(data.filter((item) => item.id !== id));
  };

  useEffect(() => {
    ordersRegisters();
  }, []);

  const columns = [
    { field: "id", headerName: "ID", width: 70 },
    {
      field: "shippingAddress",
      headerName: "Shipping Address",
      width: 200,
    },
    {
      field: "billingAddress",
      headerName: "Billing Address",
      width: 120,
    },
    {
      field: "orderDate",
      headerName: "Order Date",
      width: 200,
    },
    {
      field: "quantity",
      headerName: "Order Date",
      width: 200,
    },
    {
      field: "totalPrice",
      headerName: "Total Price",
      width: 200,
    },
  ];

  return (
    <div className="transactionsList">
      <DataGrid
        rows={data}
        disableSelectionOnClick
        columns={columns}
        pageSize={8}
        rowsPerPageOptions={[5]}
        checkboxSelection
      />
    </div>
  );
}
