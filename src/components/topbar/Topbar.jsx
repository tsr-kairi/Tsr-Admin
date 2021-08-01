import {
  GraphicEq,
  LanguageOutlined,
  NotificationsNone,
  Settings,
} from "@material-ui/icons";
import React from "react";
import "./topbar.css";

export default function Topbar() {
  return (
    <div className="topbar">
      <div className="topbarWrapper">
        <div className="topLeft">
          <span className="logo">
            <GraphicEq /> TSR
          </span>
        </div>
        <div className="topRight">
          <div className="topBarIconContainer">
            <NotificationsNone />
            <span className="topIconBadge">2</span>
          </div>
          <div className="topBarIconContainer">
            <LanguageOutlined />
            <span className="topIconBadge">2</span>
          </div>
          <div className="topBarIconContainer">
            <Settings />
          </div>
          <img
            className="topAvatar"
            src="https://scontent.fdel1-4.fna.fbcdn.net/v/t1.6435-9/126332046_1521662581556231_1851045468235641034_n.jpg?_nc_cat=102&ccb=1-3&_nc_sid=174925&_nc_ohc=GseaL5xxEPwAX_ZgJaA&tn=DSRAxCOZvODYHwME&_nc_ht=scontent.fdel1-4.fna&oh=76138369c521b840e60af0351ca07b42&oe=6129C18F"
            alt=""
          />
        </div>
      </div>
    </div>
  );
}
