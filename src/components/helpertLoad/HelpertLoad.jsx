import React from "react";
import logo from "../../pictures/helpert.png";
import styles from "./helpertload.module.css";
const HelpertLoad = () => {
  return (
    <div className="w-[100vw] h-[100vh] flex flex-col justify-center items-center">
        <img src={logo} alt="" srcSet="" className="w-[120px] h-[120px]"/>
    
      <div className={`${styles.loader}`}>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </div>
  );
};

export default HelpertLoad;
