import React from "react";
import "./Navbar.css";
// import KeyboardBackspaceIcon from "@mui/icons-material/KeyboardBackspace";
import helpert from "../icons/helpert.svg";
import navLeftTop from "../icons/nav-left-top.svg";
import { IoIosNotifications } from "react-icons/io";
import { IoIosArrowDropdownCircle } from "react-icons/io";
import notif from "../icons/notif.svg";
import dropdown from "../icons/dropdown.svg";
function Navbar() {
  return (
    <div className="w-[100%] bg-red-300">
      {/* Navbar */}
      <div className="navbar">
        {/* Logo */}
        <div className="logo">
          {/* Insert Helpert Icon Here */}
          <span style={{ fontSize: "6px" }}>
            <img src={helpert} alt="" />
          </span>
        </div>

        {/* Centre  */}
        <div className="centre">
          <span className="arrow">
            <img src={navLeftTop} alt="" />
          </span>

          <span className="setting">Settings</span>
        </div>
        <div className="right">
          <span className="profile">Profile</span>
          <span className="notification">
            <img src={notif} alt="" />
          </span>
          <span className="dropdown">
            <img src={dropdown} alt="" />
          </span>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
