import React from "react";
import styles from "./container.module.css";
import Maps from "../../sujalassets/Maps.png";
import Img from "../../sujalassets/Rectangle 285.png";
import Camera from "../../sujalassets/camera.png";

function container() {
  return (
    <>
  <div className={`flex flex-col items-center 450:w-[450px] w-[100%] rounded-[10px] bg-[white] shadow-[5px_5px_15px_3px_rgba(0,0,0,0.3)] mt-[40px] font-[600]`}>
      <p className="mt-[20px] font-[600]">Complete Detail info</p>
      <div className={styles.inside}>
        <div style={{ paddingLeft: 10 }} className={styles.location}>
          <img src={Maps} />
          <div style={{ paddingLeft: 10 }}>
            <p style={{ marginBottom: 0 }} className={`${styles.yourcountry}`}>
              Your Country
            </p>
            <p style={{ marginTop: 0 }}>Indonesia</p>
          </div>
        </div>
        <p>Verify your documents</p>
        <p className={`${styles.subhead}`}>
          Upload your ID and relevant Educational certifications
        </p>
        
        <div className={`${styles.link}`}>
         <input type="text" placeholder="National ID Card"></input> <img src={Img} />
        </div>
        <div className={`${styles.link}`}>
        <input type="text" placeholder="Certificate of being a specialist"></input>   <img src={Camera} />
        </div>
        <div className={`${styles.link}`}>
        <input type="text" placeholder="Add Linkedin profile link"></input> 
        </div>
        <button className={`bg-[#5656f5] text-[white] w-[100%] mt-[20px] h-[50px] rounded-[10px] font-[600] text-[20px]`}>Save</button>
      </div>
  </div> 
    </>
  );
}

export default container;
