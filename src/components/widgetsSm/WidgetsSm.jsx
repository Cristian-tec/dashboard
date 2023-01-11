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
            <span className="widgetSmUserName">Susana Álvarez</span>
          </div>
        </li>
        <li className="widgetSmListItem">
          <img
            src="https://res.cloudinary.com/dqdrtbtuv/image/upload/v1671988547/Dashboard/8._screen-shot-2019-02-15-at-19-16-58_jkwe3k.jpg"
            alt="imagen de perfil"
            className="widgetSmImg"
          />
          <div className="widgetSmUser">
            <span className="widgetSmUserName">Luis Cárdenas</span>
          </div>
        </li>
        <li className="widgetSmListItem">
          <img
            src="https://res.cloudinary.com/dqdrtbtuv/image/upload/v1671988548/Dashboard/5._esta-persona-no-existe-8_znthui.jpg"
            alt="imagen de perfil"
            className="widgetSmImg"
          />
          <div className="widgetSmUser">
            <span className="widgetSmUserName">Martina Gutierrez</span>
          </div>
        </li>
        <li className="widgetSmListItem">
          <img
            src="https://res.cloudinary.com/dqdrtbtuv/image/upload/v1671988547/Dashboard/4._CWBTJ7EEAJFPBLBZG7DJP24LUI_diwe2r.jpg"
            alt="imagen de perfil"
            className="widgetSmImg"
          />
          <div className="widgetSmUser">
            <span className="widgetSmUserName">Jorge Ceballos</span>
          </div>
        </li>
        <li className="widgetSmListItem">
          <img
            src="https://res.cloudinary.com/dqdrtbtuv/image/upload/v1671988547/Dashboard/7._Persona-1-445x445_sxgudu.jpg"
            alt="imagen de perfil"
            className="widgetSmImg"
          />
          <div className="widgetSmUser">
            <span className="widgetSmUserName">Luiz González</span>
          </div>
        </li>
      </ul>
    </div>
  );
}
