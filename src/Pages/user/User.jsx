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

    user = await axios.post("https://test-deploy-production-3b4b.up.railway.app/user/one", {email: userId})
    setData(user.data)
    console.log(data);
  }

  useEffect(() => {

    getUser();

  }, [])

  if(data){
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
                  <label>Username</label>
                  <input
                    type="text"
                    placeholder={data.name}
                    className="userUpdateInput"
                  />
                </div>
                <div className="userUpdateItem">
                  <label>Full Name</label>
                  <input
                    type="text"
                    placeholder={data.first_name + ' ' + data.last_name}
                    className="userUpdateInput"
                  />
                </div>
                <div className="userUpdateItem">
                  <label>Email</label>
                  <input
                    type="text"
                    placeholder={data.email}
                    className="userUpdateInput"
                  />
                </div>
                <div className="userUpdateItem">
                  <label>Phone</label>
                  <input
                    type="text"
                    placeholder={data.phone_number}
                    className="userUpdateInput"
                  />
                </div>
                <div className="userUpdateItem">
                  <label>Address</label>
                  <input
                    type="text"
                    placeholder={data.address}
                    className="userUpdateInput"
                  />
                </div>
              </div>
              <div className="userUpdateRight">
                <div className="userUpdateUpload">
                  <img
                    src={data.picture}
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
  }else{
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
                  <label>Full Name</label>
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
