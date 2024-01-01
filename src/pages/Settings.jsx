import { useState } from "react";
// import reactLogo from "./assets/react.svg";
// import viteLogo from "/vite.svg";
import "./Settings.css";
//Icons
import navigateRight from "../icons/nav-right.svg";
import appointment from "../icons/appointment.svg";
import mastercard from "../icons/mastercard.png";
import clients from "../icons/clients.svg";
import audio from "../icons/Audio & Video.svg";
// import dropdown from "./icons/Navigation.svg";
import navigateLeft from "../icons/nav-left.svg";
import pprofile from "../icons/pprofile.svg";
import payment from "../icons/payment.svg";
import social from "../icons/Social.svg";
import security from "../icons/security.svg";
//Components
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";

function Settings() {
  // const [count, setCount] = useState(0);

  return (
    <div className="container w-[100%] ">
      <Navbar />
      <div className="card">
        <div className="sidebar">
          <Sidebar
            name={"My Appointment"}
            subtext={"Show your saved appointment. "}
            icon={appointment}
            nav={navigateRight}
          />

          <Sidebar
            name={"My Clients"}
            subtext={"Show your Clients."}
            icon={clients}
            nav={navigateRight}
          />

          <Sidebar
            name={"Subscription Setting"}
            subtext={"Manage your price."}
            icon={audio}
            nav={navigateRight}
          />
          <Sidebar
            name={"Security Access"}
            subtext={"Show your saved appointment."}
            icon={security}
            nav={navigateRight}
          />
          <Sidebar
            name={"Notification Settings"}
            subtext={"Change your notification settings."}
            icon={social}
            nav={navigateRight}
          />
          <Sidebar
            name={"Payment Settings"}
            subtext={"Change your payment settings."}
            icon={payment}
            nav={navigateRight}
          />

          <button className="btn-logout">Logout</button>
        </div>
        <div className="line"></div>

        <div className="screen">
          <span className="nav-left">
            <img src={navigateLeft} alt="" />
          </span>

          <div className="screen-title">Add Payment Card</div>
          <div className="mid-screen">
            <div className="elements">
              <span className="mid-icon">
                <img src={pprofile} alt="" />
              </span>
              <div className="content">
                <span className="mid-default">Name on Card</span>
                <span className="mid-titles">James Bond</span>
              </div>
            </div>
            <div className="elements">
              <span className="mid-icon">
                <img src={payment} alt="" />
              </span>
              <div className="content">
                <span className="mid-default">Card Number</span>
                <span className="mid-titles">1234-5678-9015-8979</span>
              </div>
              <span className="mastercard">
                <img src={mastercard} alt="" />
              </span>
            </div>
          </div>
          <button className="save-btn">Save</button>
        </div>
      </div>
    </div>
  );
}

export default Settings;
