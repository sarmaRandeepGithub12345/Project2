import React from 'react';
import { useNavigate } from "react-router-dom";
import profileLogo from "../../../pictures/logo.svg";
import { FaArrowLeftLong } from "react-icons/fa6";
import { IoIosNotifications } from "react-icons/io";
import { GrInstallOption } from "react-icons/gr";
import icon from "../messageNav/icon.jpg";


function MessageNav() {
  const navigate = useNavigate()
  const handleClick = (e)=>{
    e.preventDefault()
    navigate('/')
  }

  return (
    <div className="sticky bg-[white] top-[0] z-[10] w-[100%] flex flex-row items-center py-[8px] 1000:p-3 shadowClass justify-between 700:justify-around">
    <div className="First flex flex-row items-center ml-[10px] 700:ml-[0px]">
      <img src={profileLogo} alt="" className="1000:w-[40px] 1000:h-[40px] 1000:mx-[20px] w-[30px] mr-[10px] cursor-pointer" onClick={handleClick} />
      <p className="font-bold text-[17px] 1000:text-[20px] cursor-pointer" onClick={handleClick}>Helpert</p>
    </div>
    <div className= "flex items-center bg-[rgb(196,196,196)] flex justify-around 1000:w-2/5 rounded-[10px] 1000:py-[10px] ">
      <FaArrowLeftLong color="rgb(85, 85, 85)" size="20px" />
      <p className="font-bold 1000:text-[17px]">Settings</p>
    </div>
    <div className="flex items-center 700:w-[18%]">
      <div className="flex items-center">
        <img src={icon} alt='icon' className="h-[50px] cursor-pointer"/>
        <p className="font-bold 1000:text-[17px] ">Yondu</p>
      </div>
      <div className="bg-[rgb(196,196,196)] 1000:ml-3 rounded-[50%] 1000:p-2">
        <IoIosNotifications color="rgb(85, 85, 85)" size="25px" className="cursor-pointer"/>
      </div>
      <div className="bg-[rgb(196,196,196)] ml-2.5 rounded-[50%] 1000:p-2">
        <GrInstallOption color="rgb(85, 85, 85)" size="25px" className="cursor-pointer"/>
      </div>
    </div>
  </div> 
  )
}

export default MessageNav