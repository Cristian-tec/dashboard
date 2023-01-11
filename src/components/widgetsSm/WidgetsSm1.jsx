import React from "react";
import "./widgetsSm.css";
import { Visibility } from "@mui/icons-material";

export default function WidgetsSm() {
  return (
    <div className="widgetSm">
      <span className="widgetSmTitle">New Join Members</span>
      <ul className="widgetSmList">
        <li className="widgetSmListItem">
          <img
            src="https://res.cloudinary.com/dqdrtbtuv/image/upload/v1671987169/Dashboard/900rostronatural1_ccmbp6.webp"
            alt="imagen de perfil"
            className="widgetSmImg"
          />
          <div className="widgetSmUser">
            <span className="widgetSmUserName">Anna Keller</span>
            <span className="widgetSmUserTitle">Software Engineer</span>
          </div>
          <button className="widgetSmButton">
            <Visibility className="widgetSmIcon" />
            Display
          </button>
        </li>
        <li className="widgetSmListItem">
          <img
            src="https://res.cloudinary.com/dqdrtbtuv/image/upload/v1671987169/Dashboard/900rostronatural1_ccmbp6.webp"
            alt="imagen de perfil"
            className="widgetSmImg"
          />
          <div className="widgetSmUser">
            <span className="widgetSmUserName">Anna Keller</span>
            <span className="widgetSmUserTitle">Software Engineer</span>
          </div>
          <button className="widgetSmButton">
            <Visibility className="widgetSmIcon" />
            Display
          </button>
        </li>
        <li className="widgetSmListItem">
          <img
            src="https://res.cloudinary.com/dqdrtbtuv/image/upload/v1671987169/Dashboard/900rostronatural1_ccmbp6.webp"
            alt="imagen de perfil"
            className="widgetSmImg"
          />
          <div className="widgetSmUser">
            <span className="widgetSmUserName">Anna Keller</span>
            <span className="widgetSmUserTitle">Software Engineer</span>
          </div>
          <button className="widgetSmButton">
            <Visibility className="widgetSmIcon" />
            Display
          </button>
        </li>
        <li className="widgetSmListItem">
          <img
            src="https://res.cloudinary.com/dqdrtbtuv/image/upload/v1671987169/Dashboard/900rostronatural1_ccmbp6.webp"
            alt="imagen de perfil"
            className="widgetSmImg"
          />
          <div className="widgetSmUser">
            <span className="widgetSmUserName">Anna Keller</span>
            <span className="widgetSmUserTitle">Software Engineer</span>
          </div>
          <button className="widgetSmButton">
            <Visibility className="widgetSmIcon" />
            Display
          </button>
        </li>
        <li className="widgetSmListItem">
          <img
            src="https://res.cloudinary.com/dqdrtbtuv/image/upload/v1671987169/Dashboard/900rostronatural1_ccmbp6.webp"
            alt="imagen de perfil"
            className="widgetSmImg"
          />
          <div className="widgetSmUser">
            <span className="widgetSmUserName">Anna Keller</span>
            <span className="widgetSmUserTitle">Software Engineer</span>
          </div>
          <button className="widgetSmButton">
            <Visibility className="widgetSmIcon" />
            Display
          </button>
        </li>
      </ul>
    </div>
  );
}
