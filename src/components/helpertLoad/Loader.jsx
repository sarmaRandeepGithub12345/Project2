import React from "react";
import styles from "./loading.module.css";

const Loader = () => {
  return (
    <div className="w-[100%] h-[100vh] flex flex-col justify-center items-center">
      <div className={`${styles.ldsSpinner}`}>
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

export default Loader;
