import React from "react";
import { AiFillStar } from "react-icons/ai";
import verified from "../../pictures/verify.svg";
import communication from "../../pictures/Communication2.jpg";
import profilePic from "../../pictures/defaultProfileNoBG.svg";

const ExpertSearch = () => {
  return (
    <div className="w-[100vw] flex flex-col items-center">
      <div className="w-[90%]">
        <p className="text-[30px] mt-[20px] font-[600]">Business</p>
        <div className="w-[100%] flex flex-row items-center justify-between">
          <p className="text-[18px] font-[500] mt-[15px]">112 experts</p>

          <select
            id="large"
            class="block w-[150px]  h-[25px] text-base text-gray-900 border-[2px] border-blue-500 rounded-[40px] bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-blue-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          >
            <option selected>Filter :</option>
            <option value="US">Admin</option>
            <option value="CA">Manager</option>
            <option value="FR">Accountant</option>
            <option value="DE">Student</option>
          </select>
        </div>
        <div className="w-[100%] pb-[20px] grid grid-flow-row grid-cols-2 justify-items-between mt-[20px] ">
          <div className=" flex flex-row w-[80%]  p-2 shadow-[0px_0px_10px_2px_rgba(0,0,0,0.3)]  rounded-[10px]">
            <img src={profilePic} alt="" className="w-[30%]" />
            <div>
                <p className="text-[18px] font-[500]">Dr Mensah T</p>
                <p className="text-[14px] font-[500]">Oncologist</p>
                <div className="flex flex-row mt-[10px] items-center">
                    <AiFillStar className="text-[orange]"/>
                    <p className="ml-[4px]">4.3</p>
                    <img className="ml-[4px]" src={communication} alt="" />
                    <p>200</p>
                </div>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet, enim dolorum veritatis nemo similique aliquid!</p>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
};

export default ExpertSearch;
