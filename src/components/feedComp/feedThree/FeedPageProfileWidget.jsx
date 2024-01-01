import React from "react";
import profile from "../../../pictures/Avatar.png";
const FeedPageProfileWidget = () => {
  
  return (
    <div className="w-[90%] h-fit mt-[20px] rounded-[15px] bg-[white] shadowClass">
      <div className="flex justify-center my-[20px]">
        <img src={profile} alt="" srcset="" className="w-[60px]" />
      </div>
      <div className="flex justify-center">
        <p className="text-[15px] font-semibold">Yandu Dudu</p>
      </div>
      <div className="flex flex-row  justify-center text-[#999999] text-[12px]">
        <p>
            <span>Joined,</span>
            <span>June,2021</span>
        </p>
      </div>
      <div className="text-[13px] flex flex-row justify-around my-[20px] font-semibold">
        <p>
            <span className="">500</span>
            <span className="text-[#a8a8a8]"> Followers</span>
        </p>
        <p><span>120</span>
        <span className="text-[#a8a8a8]"> Following</span></p>
      </div>
      <div className="flex justify-center mb-[20px]">
        <p className="w-[80%] text-[white] bg-[#0261FE] p-[15px] rounded-[10px] text-[15px] flex justify-center">
            Become a Specialist
        </p>
      </div>
    </div>
  );
};

export default FeedPageProfileWidget;
