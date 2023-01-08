import React from "react";
import "./userList.css";
import { DataGrid, GridColDef, GridValueGetterParams } from "@mui/x-data-grid";
import { DeleteOutlined } from "@mui/icons-material";
//import { userRows } from "../../dummyData";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from 'axios'

export default function UserList() {

  const userRows = [{
    id: '',
    email:'loading...',
    address:'loading...',
    picture: 'https://media.tenor.com/On7kvXhzml4AAAAj/loading-gif.gif'
  }]

  const [data, setData] = useState(userRows);

  let usersLog;
  const userRegisters = async () => {

    usersLog = await axios.get("https://test-deploy-production-3b4b.up.railway.app/user")
    console.log(usersLog.data);
    setData(usersLog.data)
  }


  /* const [data, setData] = useState(userRows); */

  const handleDelete = (email) => {
    setData(data.filter((a) => a.email !== email));
  };

  useEffect(() => {
 
      userRegisters();

  }, [])

  const columns = [
    { field: "id", headerName: "ID", width: 70 },
    {
      field: "username",
      headerName: "User Name",
      width: 200,
      renderCell: (params) => {
        return (
          <div className="userListUser">
            <img className="userListImg" src={params.row.picture} alt="" />
            {params.row.name}
          </div>
        );
      },
    },
    { field: "email", headerName: "Email", width: 200 },
    {
      field: "phone_number",
      headerName: "Phone",
      width: 120,
    },
    {
      field: "address",
      headerName: "Address",
      width: 200,
    },
    {
      field: "action",
      headerName: "Action",
      width: 150,
      renderCell: (params) => {
        return (
          <>
            <Link to={"/user/" + params.row.email}>
              <button className="userListEdit">Edit</button>
            </Link>
            <DeleteOutlined
              className="userListDelete"
              onClick={() => handleDelete(params.row.email)}
            />
          </>
        );
      },
    },
  ];

  return (
    <div className="userList">
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
