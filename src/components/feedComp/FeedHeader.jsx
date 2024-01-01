import React, { useState } from "react";
import logo from "../../pictures/Helpert Logo Rounded.png";
import { AiFillCompass, AiFillHome } from "react-icons/ai";
import { BsFillPersonFill } from "react-icons/bs";
import messages from "../../pictures/Communication.svg";
import person from "../../pictures/person.svg"
import {IoMdSettings} from "react-icons/io"
import defaultImage from "../../pictures/Avatar.png";
import notification from "../../pictures/Social.svg";
import social from "../../pictures/Navigation.svg";
const FeedHeader = () => {
  const [open, setopen] = useState(false)
  return (
    <div className="sticky top-[0] z-[1] shadowClass w-[100%] h-[70px] bg-[#ffffff] flex flex-row items-center justify-between ">
      <div className="flex flex-row items-center ml-10">
        <img src={logo} alt="" className="w-[25px]" />
        <p className="ml-[5px] font-semibold text-[14px]">Helpert</p>
      </div>
      <div className="bg-[#F6F9FB]  rounded-full  flex flex-row text-[#999999] p-2 justify-around items-center w-[40%] h-[70%]">
        <div>
          <AiFillHome className="text-[20px] " />
        </div>
        <div>
          <AiFillCompass className="text-[20px]" />
        </div>
        <div>
          <img src={messages} alt="" />
        </div>
        <div>
          <BsFillPersonFill className="text-[20px]" />
        </div>
      </div>
      <div className="flex flex-row items-center">
        <div className="flex flex-row p-2 items-center mr-4">
          <img src={defaultImage} alt="" className="w-[35px]" />

          <p className="font-bold ml-2">Yandu</p>
        </div>
        <div className="bg-[#F6F9FB] p-2 rounded-full">
          <img src={notification} alt="" srcset="" />
        </div>
        <div className="relative bg-[#F6F9FB] p-2 rounded-full mx-3">
          <img src={social} alt="" srcset="" />
        </div>
        <div className="absolute shadowClass bg-[white] w-[150px] top-[80px] right-[0] rounded-[10px]">
          <div className="flex flex-row p-[10px]">
           <img src={person} alt="" className="pr-[10px] w-[35px]" />
           <p className="text-[18px]">Profile</p>

          </div>
           <div className="flex flex-row p-[10px]">
            <IoMdSettings className="text-[25px] "></IoMdSettings>
            <p className ="pl-[10px] text-[18px]">Settings</p>
           </div>
           <p className="w-[100%] flex justify-center p-[10px] text-[18px] items-center text-[red]">Logout</p>
        </div>
      </div>
    </div>
  );
};

export default FeedHeader;
