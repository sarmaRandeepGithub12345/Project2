import React from "react";
import { IoIosArrowForward } from "react-icons/io";

function RightCard({ details }) {
  return (
    //<div className="1024:w-[880px] 1024:h-[580px] bg-white 768:w-[710px] 640:w-[320px] 640:h-[400px] 768:h-[580px] w-[350px]  768:flex justify-center border-2  rounded-2xl 1024:flex">
    <div className="1024:items-center 1024:justify-center 1024:w-[360px] 768:w-[360px] w-[250px] h-full 768:flex 768:p-3 1024:m-0 1024:flex items-center justify-center flex-col border-[#DEDEDE] hidden border-r-[1px] ">
      {details.map((item, index) => (
        <div
          key={index}
          className="768:h-[81px] 768:mt-[2px] 768:w-[340px] gap-3 768:gap-0 1024:gap-0 flex items-center 1024:ml-4  rounded-md hover:bg-[#F6F9FB]"
        >
          <div>
            <img
              className="ml-3 h-[18px] w-[18px] 1024:w-[24px] 1024:h-[24px] "
              src={item.ImageUrl}
              height="24px"
              width="24px"
              alt="name"
            />
          </div>

          {/* text */}
          <div className="flex flex-col ml-5 w-[270px]">
            <p className="text-sm 1024:text-base text-[#333333] font-normal">
              {item.Heading}
            </p>
            <p className="768:text-xs 1024:text-sm 768:block 1024:block hidden font-normal text-[#999999]">
              {item.para}
            </p>
          </div>

          <div className=" ml-3 flex justify-end items-center">
            <div className="">
              <IoIosArrowForward size={14} className="text-[#999999]" />
            </div>
          </div>
        </div>
      ))}
      <div className=" 1024:pl-9 pl-9 ml-2  w-full text-[#E74D3D] font-medium mt-3 cursor-pointer">
        Logout
      </div>
    </div>
    // </div>
  );
}

export default RightCard;
