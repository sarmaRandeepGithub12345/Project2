import React, { useState } from "react";

// import "./completeprofile.css";
import { useNavigate } from "react-router-dom";
import { AiOutlineArrowLeft } from "react-icons/ai";
const input = (
  <input
    type="date"
    style={{
      display: "flex",
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "space-between",
    }}
  />
);
const CompleteProfileRegister = () => {
  const navigate = useNavigate();
  return (
      <div className="w-[45%] h-[100vh] text-[black] flex flex-col pt-[50px] items-center">
        <div className="w-[100%] flex justify-start">
          <AiOutlineArrowLeft className="text-[30px] ml-[30px]" />
        </div>
        <div className="text-[20px] mb-[10px] font-bold mt-[8px] w-[60%]  flex justify-start ">
          Complete your profile
        </div>
        <div className="w-[60%] text-[12px] text-[#858585] mb-[15px]">
          <p>Tell us about yourself & don’t worry, your</p>
          <p> information is safe & secure.</p>
        </div>
        <input
          type="text"
          className="box-border w-[60%] bg-[#F4F4F4] text-[#525252] h-[50px] placeholder:text-[#666666] rounded-[10px] pl-[15px] mb-[15px]"
          placeholder="First name"
        />
        <input
          type="text"
          className="box-border w-[60%] bg-[#F4F4F4] text-[#525252] h-[50px] placeholder:text-[#666666] rounded-[10px] pl-[15px] mb-[15px]"
          placeholder="Last name"
        />
        
        <div className="w-[60%] flex justify-center items-center bg-[#0261FE] text-[#525252] h-[50px] rounded-[10px] mb-[20px]">
          <p className="text-[white]">Complete your profile</p>
        </div>
      </div>
    
  );
};

export default CompleteProfileRegister;
