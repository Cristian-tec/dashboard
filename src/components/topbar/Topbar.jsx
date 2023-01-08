import React from "react";
import "./topbar.css";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import LanguageIcon from "@mui/icons-material/Language";
import SettingsIcon from "@mui/icons-material/Settings";
import logo from '../../images/logo-iconmb.png'

export default function Topbar() {
  return (
    <div className="topbar">
      <div className="topbarWraper">
        <div className="topLeft">
          <span className="logo">| Mc Burger Admin |</span>
        </div>
        <div className="topRight">
       {/*    <div className="topbarIconContainer">
            <NotificationsNoneIcon />
            <span className="topIconBadge">2</span>
          </div> */}
          <div className="topbarIconContainer">
            <LanguageIcon />
          </div>
          <div className="topbarIconContainer">
            <SettingsIcon />
          </div>
          <img
            src={logo}
            alt=""
            className="topAvatar"
          />
        </div>
      </div>
    </div>
  );
}
