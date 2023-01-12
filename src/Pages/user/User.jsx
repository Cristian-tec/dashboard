import React from "react";
import "./user.css";
import { useState, useEffect } from "react";
import axios from 'axios'


import {
  CalendarTodayOutlined,
  LocationSearchingOutlined,
  MailOutlined,
  PermIdentityOutlined,
  PhoneAndroidOutlined,
  PublishOutlined,
} from "@mui/icons-material";
import { Link } from "react-router-dom";
import { useParams } from 'react-router-dom'

export default function User(props) {

  const { userId } = useParams();

  console.log(userId);

  const [data, setData] = useState();
  let user;

  const getUser = async () => {

    user = await axios.post("https://test-deploy-production-3b4b.up.railway.app/user/one", { email: userId })
    setData(user.data)
    console.log(data);
  }

  useEffect(() => {

    getUser();

  }, [])

  const updateUser = async (e) => {
    e.preventDefault();
    let first_name = document.getElementById('first_name').value;
    let last_name = document.getElementById('last_name').value;
    let address = document.getElementById('address').value;
    let phone_number = document.getElementById('phone_number').value;
    let password = document.getElementById('password').value;

    if (!first_name || !address || !phone_number || !last_name || !password) {
      alert("Debes llenar todos los campos!");
    } else {
      //console.log(first_name, last_name, address, phone_number, password);
      let dat = {
        email: data.email,
        first_name: first_name,
        last_name: last_name,
        address: address,
        phone_number: phone_number,
        password: password
      };
      const update = await axios.put("https://test-deploy-production-3b4b.up.railway.app/user", dat)
      console.log(update);
    }

  }

  if (data) {
    return (
      <div className="user">
        <div className="userTitleContainer">
          <h1 className="userTitle">Edit User</h1>
          <Link to="/newUser">
            <button className="userAddButton">Create</button>
          </Link>
        </div>
        <div className="userContainer">
          <div className="userShow">
            <div className="userShowTop">
              <img
                src={data.picture}
                alt=""
                className="userShowImg"
              />
              <div className="userShowTopTitle">
                <span className="userShowUsername">{data.first_name}</span>
                <span className="userShowUserTitle">Full Stack</span>
              </div>
            </div>
            <div className="userShowButton">
              <span className="userShowTitle">Account Details</span>
              <div className="userShowInfo">
                <PermIdentityOutlined className="userShowIcon" />
                <span className="userShowInfoTitle">{data.name}</span>
              </div>
              <div className="userShowInfo">
                <CalendarTodayOutlined className="userShowIcon" />
                <span className="userShowInfoTitle">--/--/----</span>
              </div>
              <span className="userShowTitle">Contact Details</span>
              <div className="userShowInfo">
                <PhoneAndroidOutlined className="userShowIcon" />
                <span className="userShowInfoTitle">{data.phone_number}</span>
              </div>
              <div className="userShowInfo">
                <MailOutlined className="userShowIcon" />
                <span className="userShowInfoTitle">{data.email}</span>
              </div>
              <div className="userShowInfo">
                <LocationSearchingOutlined className="userShowIcon" />
                <span className="userShowInfoTitle">{data.address}</span>
              </div>
            </div>
          </div>
          <div className="userUpdate">
            <span className="userUpdateTitle">Edit</span>
            <form className="userUpdateForm">
              <div className="userUpdateLeft">
                <div className="userUpdateItem">
                  <label>First Name</label>
                  <input
                    type="text"
                    placeholder={data.first_name}
                    className="userUpdateInput"
                    id="first_name"
                  />
                </div>
                <div className="userUpdateItem">
                  <label>Last Name</label>
                  <input
                    type="text"
                    placeholder={data.last_name}
                    className="userUpdateInput"
                    id='last_name'
                  />
                </div>
                <div className="userUpdateItem">
                  <label>Password</label>
                  <input
                    type="password"
                    //placeholder={data.email}
                    className="password"
                    /* value={data.email} */
                    id='password'
                  />
                </div>
                <div className="userUpdateItem">
                  <label>Phone</label>
                  <input
                    type="text"
                    placeholder={data.phone_number}
                    className="userUpdateInput"
                    id='phone_number'
                  />
                </div>
                <div className="userUpdateItem">
                  <label>Address</label>
                  <input
                    type="text"
                    placeholder={data.address}
                    className="userUpdateInput"
                    id='address'
                  />
                </div>
              </div>
              <div className="userUpdateRight">
                <div className="userUpdateUpload">
                  <img
                    src={data.picture}
                    alt="image"
                    className="userUpdateImg"
                  />
                  <label htmlFor="file">
                    {/*    <PublishOutlined className="userUpdateIcon" /> */}
                  </label>
                  <input type="file" id="file" style={{ display: "none" }} />
                </div>
                <button onClick={updateUser} className="userUpdateButton">Update</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  } else {
    return (
      <div className="user">
        <div className="userTitleContainer">
          <h1 className="userTitle">Edit User</h1>
          <Link to="/newUser">
            <button className="userAddButton">Create</button>
          </Link>
        </div>
        <div className="userContainer">
          <div className="userShow">
            <div className="userShowTop">
              <img
                src=""
                alt=""
                className="userShowImg"
              />
              <div className="userShowTopTitle">
                <span className="userShowUsername">Loading...</span>
                <span className="userShowUserTitle">Loading...</span>
              </div>
            </div>
            <div className="userShowButton">
              <span className="userShowTitle">Account Details</span>
              <div className="userShowInfo">
                <PermIdentityOutlined className="userShowIcon" />
                <span className="userShowInfoTitle">Loading...</span>
              </div>
              <div className="userShowInfo">
                <CalendarTodayOutlined className="userShowIcon" />
                <span className="userShowInfoTitle">Loading...</span>
              </div>
              <span className="userShowTitle">Loading...</span>
              <div className="userShowInfo">
                <PhoneAndroidOutlined className="userShowIcon" />
                <span className="userShowInfoTitle">Loading...</span>
              </div>
              <div className="userShowInfo">
                <MailOutlined className="userShowIcon" />
                <span className="userShowInfoTitle">Loading...</span>
              </div>
              <div className="userShowInfo">
                <LocationSearchingOutlined className="userShowIcon" />
                <span className="userShowInfoTitle">Loading...</span>
              </div>
            </div>
          </div>
          <div className="userUpdate">
            <span className="userUpdateTitle">Edit</span>
            <form className="userUpdateForm">
              <div className="userUpdateLeft">
                <div className="userUpdateItem">
                  <label>Username</label>
                  <input
                    type="text"
                    placeholder="Loading..."
                    className="userUpdateInput"
                  />
                </div>
                <div className="userUpdateItem">
                  <label>First Name</label>
                  <input
                    type="text"
                    placeholder="Loading..."
                    className="userUpdateInput"
                  />
                </div>
                <div className="userUpdateItem">
                  <label>Email</label>
                  <input
                    type="text"
                    placeholder="Loading..."
                    className="userUpdateInput"
                  />
                </div>
                <div className="userUpdateItem">
                  <label>Phone</label>
                  <input
                    type="text"
                    placeholder="Loading..."
                    className="userUpdateInput"
                  />
                </div>
                <div className="userUpdateItem">
                  <label>Address</label>
                  <input
                    type="text"
                    placeholder="Loading..."
                    className="userUpdateInput"
                  />
                </div>
              </div>
              <div className="userUpdateRight">
                <div className="userUpdateUpload">
                  <img
                    src="https://media.tenor.com/On7kvXhzml4AAAAj/loading-gif.gif"
                    alt=""
                    className="userUpdateImg"
                  />
                  <label htmlFor="file">
                    <PublishOutlined className="userUpdateIcon" />
                  </label>
                  <input type="file" id="file" style={{ display: "none" }} />
                </div>
                <button className="userUpdateButton">Update</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  }

}
