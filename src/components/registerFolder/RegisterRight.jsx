import React, { useState } from "react";
import logo from "../../pictures/Helpert Logo Rounded.png";
import facebook from "../../pictures/bx_bxl-facebook.svg";
import google from "../../pictures/flat-color-icons_google.svg";
import { useNavigate } from "react-router-dom";
const RegisterRight = () => {
    const navigate=useNavigate()
  return (
    <div className="w-[45%] h-[100vh] text-[black] flex flex-col justify-center items-center">
      <div>
        <img src={logo} alt="" srcset="" />
      </div>
      <p className="text-[17px] mb-[29px] font-bold mt-[8px]">Helpert</p>
      <input
        type="text"
        className="box-border w-[60%] bg-[#F4F4F4] text-[#525252] h-[50px] placeholder:text-[#666666] rounded-[10px] pl-[12px] mb-[15px]"
        placeholder="Email"
      />
       <input
        type="text"
        className="box-border w-[60%] bg-[#F4F4F4] text-[#525252] h-[50px] placeholder:text-[#666666] rounded-[10px] pl-[12px] mb-[15px]"
        placeholder="Username"
      />
      <input
        type="password"
        className="box-border w-[60%] bg-[#F4F4F4] text-[#525252] h-[50px] placeholder:text-[#666666] rounded-[10px] pl-[12px] mb-[15px]"
        placeholder="Password"
      />
      <input
        type="password"
        className="box-border w-[60%] bg-[#F4F4F4] text-[#525252] h-[50px] placeholder:text-[#666666] rounded-[10px] pl-[12px] mb-[15px]"
        placeholder="Confirm Password"
      />
      <div className="w-[60%] flex justify-end mb-[20px]">
        <p className="font-semibold text-[#0261FE] text-[14px] cursor-pointer border-b-[1px] hover:border-[black] border-[white]">
          Forgot Password ?
        </p>
      </div>
      <div className="w-[60%] flex justify-center items-center bg-[#0261FE] text-[#525252] h-[50px] rounded-[10px] mb-[20px]">
        <p className="text-[white]">Create an account</p>
      </div>
      <div className="text-[10px]  w-[60%] text-[#555555] mb-[20px]">
        <p className="flex justify-center">
          By signing in you confirm that you are 13 years of age or above and
        </p>
        <p className="flex justify-center">
          agree to our
          <span className="text-[#0261fe] ">
            &nbsp; Terms and Conditions &nbsp;
          </span>{" "}
          and{" "}
          <span className="text-[#0261fe]"> &nbsp;Privacy Policy&nbsp;</span>.
        </p>
      </div>
      <div className="w-[60%] flex flex-row justify-between items-center mb-[20px]">
        <div className="w-[35%] bg-[#8f8f8f] h-[0.5px]"></div>
        <p className="text-[#8f8f8f] text-[15px]">or Sign In with</p>
        <div className="w-[35%] bg-[#8f8f8f] h-[0.5px]"></div>
      </div>
      <div className="flex flex-row mb-[20px]">
        <div className="rounded-full border-[1px] border-[#bcbcbc] p-2">
          <img src={facebook} alt="" />
        </div>
        <div className="rounded-full border-[1px] border-[#bcbcbc] p-2 ml-[20px]">
          <img src={google} alt="" />
        </div>
      </div>
      <div className="w-[60%] text-[14px] font-semibold text-[#a1a1a1] flex justify-center">
        <p className="">I already have an account <span className="text-[#0261fe] cursor-pointer"
        onClick={(e)=>{
            e.preventDefault();
            navigate('/')
        }}
        >Sign in</span></p>
      </div>
    </div>
  );
};

export default RegisterRight;
