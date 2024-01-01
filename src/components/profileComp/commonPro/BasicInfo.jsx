import React, { useState } from "react";
import profilePic from "../../../pictures/userDefault.jpeg";
import headphone from "../../../pictures/headphone.png";
import verified from "../../../pictures/verify.png";
import { AiFillStar } from "react-icons/ai";
import { BsFillPersonCheckFill, BsFillShareFill } from "react-icons/bs";
import communication from "../../../pictures/Communication2.jpg";
import calender from "../../../pictures/calendersymbol.svg";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import axiosClient from "../../../utils/axios-client";
import styles from "./basic.module.css";
import useCommonItems from "../../../hooks/useCommonItems";
import LoginPopUp from "../../landingPage/LoginPopUp";
import MenuPop from "../../menuPop/MenuPop";
import SiteUnderConst from "../../landingPage/SiteUnderConst";
const BasicInfo = ({ profileUser, loadingComp, loading }) => {
  const imgUrl = `${process.env.REACT_APP_BACKEND}${profileUser?.image}`;
  const { visible, setvisible, handleClose } = useCommonItems();
  const commonClass =" rounded-[8px] w-[130px] justify-center h-[40px] text-[16px] mr-2 350:mr-4 450:w-[150px] 450:h-[55px] 450:text-[19px] 1000:w-[170px] 1000:h-[65px] 1000:text-[23px]";
  return (
    <div className=" w-[95%] 450:w-[90%] mb-[40px]">
      <div className="flex flex-col 700:flex-row font-[300] mt-[40px]">
        <div className="relative flex flex-col 700:justify-start items-center 700:mb-[0] mb-[15px]">
          <img
            src={profileUser?.image ? imgUrl : profilePic}
            alt=""
            className="bg-[white]  object-center object-cover  700:h-[250px] 700:w-[250px] 950:w-[400px] rounded-[20px] 950:h-[400px] w-[98%] 400:w-[90%] 500:w-[80%] aspect-square "
          />

          <img
            src={verified}
            alt=""
            className="w-[25px] 350:w-[30px] 950:w-[50px] top-2 right-3 350:right-3 400:right-8 500:right-14 600:right-16 700:right-[8px]  absolute 500:w-[30px] 700:w-[36px]"
          />
        </div>
        <div
          className="flex flex-col justify-around
         700:pl-[25px] 1000:pl-[50px] text-[14px] 450:text-[18px] 600:text-[16px]  700:text-[20px] 900:text-[22px] 1000:text-[25px] 950:mt-[23px] "
        >
          <div className="flex flex-row items-center  justify-between">
            <p className="font-semibold text-[18px] 450:text-[30px] 600:text-[40px]">
              {profileUser?.first_name} {profileUser?.last_name}
            </p>
            <div className="flex flex-row items-center">
              <div className="border-[2px] border-[#0261FE] mr-[10px] 350:hidden block rounded-[5px] p-1 bg-[white]">
                <img src={communication} className="   w-[18px]  " alt="" />
              </div>

              <BsFillShareFill className="600:hidden block w-[18px]" />
            </div>
          </div>
          <p>{profileUser?.specialization}</p>
          <div className="flex flex-row  text-[grey]">
            <div className="flex flex-row items-center mr-4">
              <AiFillStar className="text-[#ffdc2b] 700:text-[35px] 450:text-[20px] text-[15px] mr-[3px]  700:mr-[7px]" />
              <p className="mr-[20px]">{profileUser?.rating}</p>
            </div>
            <div className="flex flex-row items-center">
              <img
                src={headphone}
                alt=""
                className="w-[15px] 700:w-[20px] mr-[3px]  700:mr-[7px]"
              />
              <p>{profileUser?.consultations} Consultations</p>
            </div>
          </div>
          <p>{profileUser?.location}</p>
          <div className="flex flex-row 1000:font-semibold my-[10px] ">
            <button
              className={`bg-[#0261FE] text-[white] justify-center ${commonClass}`}
              onClick={(e) => {
                e.preventDefault();
                setvisible(true);
              }}
            >
              Book a Call
            </button>
            <button
              className={`text-[#0261FE] flex flex-row items-center bg-[white] border-[2px] border-[#0261FE] ${commonClass}`}
              onClick={(e) => {
                e.preventDefault();
                setvisible(true);
              }}
            >
              <BsFillPersonCheckFill />
              <p className="ml-1">Follow</p>
            </button>
            <button
              className="border-[2px] border-[#0261FE] bg-[white] hidden 350:flex justify-center items-center rounded-[8px] w-[40px] h-[40px]  450:w-[55px] 450:h-[55px]  1000:w-[65px] 1000:h-[65px] "
              onClick={(e) => {
                e.preventDefault();
                setvisible(true);
              }}
            >
              <img
                src={communication}
                alt=""
                className="w-[20px] 450:w-[27px]"
              />
            </button>
          </div>
          <div className="flex flex-row items-center ">
            <p className="font-semibold">₹ {profileUser?.session_rate}</p>
            <p className=" ml-[15px] mb-[3px]">per appointment</p>
          </div>
        </div>
      </div>
      <div className="mt-[20px] 600:mt-[28px] 950:mt-[40px] flex flex-row items-center justify-between font-[300]">
        <div className="flex flex-row w-[100%] 600:w-[80%]  text-[12px] 350:text-[14px] 450:text-[18px] 600:text-[16px]  700:text-[20px] 900:text-[22px] 1000:text-[25px] 600:justify-start justify-between ">
          <p className="flex flex-col items-center 600:flex-row 600:mr-[50px]">
            <span className=" 600:mr-[5px] 700:mr-[10px] font-[500]">
              {profileUser?.followers}
            </span>
            <span>Followers</span>
          </p>
          <p className="flex flex-col items-center 600:flex-row  600:mr-[50px]">
            <span className="font-semibold 600:mr-[5px] 700:mr-[10px]">
              {profileUser?.following}
            </span>
            <span>Following</span>
          </p>
          <div className="flex flex-col 600:flex-row items-center">
            <div className="flex flex-row items-center 600:order-[1] order-[2]">
              <img
                src={calender}
                alt=""
                className="w-[13px] 400:w-[20px]  600:mr-[5px] 700:mr-[10px]"
              />
              <span>Joined</span>
            </div>
            <p className="flex flex-row items-center 600:order-[2] order-[1]">
              &nbsp;{profileUser?.joining_date}
            </p>
          </div>
        </div>
        <BsFillShareFill className="700:text-[25px] text-[18px] hidden 600:block" />
      </div>
      <div className="mt-[15px] 450:mt-[20px] 600:mt-[25px] 900:mt-[30px] 1000:mt-[35px] 1100:mt-[40px]">
        <p className="font-semibold text-[15px] 350:text-[18px] 450:text-[30px] 600:text-[40px] mb-[10px] 500:mb-[20px]">
          About me
        </p>
        <p className="text-[13px] break-words  450:text-[20px] 600:text-[30px] h-fit font-[300]">
          {profileUser?.description}
        </p>
      </div>
      <div className="mt-[15px] 450:mt-[20px] 600:mt-[25px] 900:mt-[30px] 1000:mt-[35px] 1100:mt-[40px]">
        <p className="font-semibold text-[15px] 350:text-[18px] 450:text-[30px] 600:text-[40px] mb-[10px] 500:mb-[20px]">
          Where I can Help!
        </p>
        <div className="w-[100%] grid grid-flow-row 1000:grid-cols-5 700:grid-cols-4 450:grid-cols-3 280:grid-cols-2 grid-cols-1  justify-items-center">
          {profileUser?.interests.map((item, id) => (
            <p
              key={id}
              className="mt-[10px]  flex justify-center bg-[white] h-fit w-[80%] text-[12px] 600:text-[15px] 900:text-[20px] p-2 font-[300] rounded-[14px] shadow-[1px_1px_2px_0px_rgba(0,0,0,0.3)] break-words"
            >
              {item?.name}
            </p>
          ))}
        </div>
      </div>
      <div
        className="mt-[40px] flex  flex-row justify-between font-semibold text-[10px] 450:text-[15px] 600:text-[20px] bg-[#ccdfff] rounded-[10px]
       px-[15px] py-[10px] text-[#414141]"
      >
        <div className="flex flex-col">
          <p className="text-[#0261FE] text-[15px] 450:text-[20px] 600:text-[25px]">
            ₹{profileUser?.session_rate}
          </p>
          <p className="">Session rate</p>
        </div>
        <div>
          <p className="text-[#0261FE] text-[15px] 450:text-[20px] 600:text-[25px]">
            {profileUser?.happy_clients}
          </p>
          <p>Happy Clients</p>
        </div>
        <div>
          <p className="text-[#0261FE] text-[15px] 450:text-[20px] 600:text-[25px]">
            {profileUser?.booked}
          </p>
          <p>Booked</p>
        </div>
      </div>
      <MenuPop
        visible={visible}
        onClose={handleClose}
        values="flex justify-center items-center"
        item={<SiteUnderConst onClose={handleClose} />}
      />
    </div>
  );
};

export default BasicInfo;
