import React from "react";
import "./Sidebar.css";

function Sidebar({ name, subtext, icon, nav }) {
  return (
    <div className="card-sidebar">
      <span className="icon">
        <img src={icon} alt="" />
      </span>

      <div className="title">{name}</div>

      <div className="subtext">{subtext}</div>

      <span className="nav-right">
        <img src={nav} alt="" />
      </span>
    </div>
  );
}

export default Sidebar;
