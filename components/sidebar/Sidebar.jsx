import React from "react";
import "./sidebar.css";
import { Link } from "react-router-dom";
import {
  LineStyle,
  Timeline,
  TrendingUp,
  Storefront,
  AttachMoneySharp,
  BarChartSharp,
  MailOutlined,
  DynamicFeed,
  ChatBubbleOutlineOutlined,
  WorkOutlineOutlined,
  ReportGmailerrorredOutlined,
  PersonOutlined,
} from "@mui/icons-material";

export default function Sidebar() {
  return (
    <div className="sidebar">
      <div className="sidebarWraper">
        <div className="sidebarMenu">
          <h3 className="sidebarTitle">Dashboard</h3>
          <ul className="sidebarList">
            <li className="sidebarListItem active">
              <LineStyle className="sidebarIcon" />
              <Link to="/">Home</Link>
            </li>
            <li className="sidebarListItem">
              <Timeline className="sidebarIcon" />
              Analytics
            </li>
            <li className="sidebarListItem">
              <TrendingUp className="sidebarIcon" />
              Sales
            </li>
          </ul>
        </div>
        <div className="sidebarMenu">
          <h3 className="sidebarTitle">Quick Menu</h3>
          <ul className="sidebarList">
            <li className="sidebarListItem">
              <PersonOutlined className="sidebarIcon" />
              <Link to="/users">Users</Link>
            </li>
            <li className="sidebarListItem">
              <Storefront className="sidebarIcon" />
              <Link to="/products">Products</Link>
            </li>
            <li className="sidebarListItem">
              <AttachMoneySharp className="sidebarIcon" />
              Transactions
            </li>
            <li className="sidebarListItem">
              <BarChartSharp className="sidebarIcon" />
              Reports
            </li>
          </ul>
        </div>
        <div className="sidebarMenu">
          <h3 className="sidebarTitle">Notifications</h3>
          <ul className="sidebarList">
            <li className="sidebarListItem">
              <MailOutlined className="sidebarIcon" />
              Mail
            </li>
            <li className="sidebarListItem">
              <DynamicFeed className="sidebarIcon" />
              Feedback
            </li>
            <li className="sidebarListItem">
              <ChatBubbleOutlineOutlined className="sidebarIcon" />
              Messages
            </li>
          </ul>
        </div>
        <div className="sidebarMenu">
          <h3 className="sidebarTitle">Staff</h3>
          <ul className="sidebarList">
            <li className="sidebarListItem">
              <WorkOutlineOutlined className="sidebarIcon" />
              Manage
            </li>
            <li className="sidebarListItem">
              <Timeline className="sidebarIcon" />
              Analytics
            </li>
            <li className="sidebarListItem">
              <ReportGmailerrorredOutlined className="sidebarIcon" />
              Reports
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
