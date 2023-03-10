import React from "react";
import "./productList.css";
import { DataGrid } from "@mui/x-data-grid";
import { DeleteOutlined, LineAxisOutlined } from "@mui/icons-material";
//import { productRows } from "../../dummyData";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";

export default function ProductList() {
  const productRows = [
    {
      id: "",
      product: "loading...",
      stock: "loading...",
      price: "loading...",
      image: "https://media.tenor.com/On7kvXhzml4AAAAj/loading-gif.gif",
    },
  ];

  const [data, setData] = useState(productRows);

  let productsLog;
  const productsRegisters = async () => {
    productsLog = await axios.get(
      "https://test-deploy-production-3b4b.up.railway.app/products"
    );
    console.log(productsLog.data);
    setData(productsLog.data);
  };

  const handleDelete = (id) => {
    setData(data.filter((item) => item.id !== id));
  };

  useEffect(() => {
    productsRegisters();
  }, []);

  const columns = [
    { field: "id", headerName: "ID", width: 70 },
    {
      field: "product",
      headerName: "Product",
      width: 200,
      renderCell: (params) => {
        return (
          <div className="productListItem">
            <img className="productListImg" src={params.row.image} alt="" />
            {params.row.name}
          </div>
        );
      },
    },
    {
      field: "stock",
      headerName: "Stock",
      width: 200,
    },
    {
      field: "price",
      headerName: "Price",
      width: 200,
    },
    {
      field: "action",
      headerName: "Action",
      width: 150,
      renderCell: (params) => {
        return (
          <>
            <Link to={"/product/" + params.row.id}>
              <button className="productListEdit">Edit</button>
            </Link>
            <DeleteOutlined
              className="productListDelete"
              onClick={() => handleDelete(params.row.id)}
            />
          </>
        );
      },
    },
  ];

  return (
    <div className="productList">
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
