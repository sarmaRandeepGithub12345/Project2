import React from "react";

function EarningHistory({ earningDetails }) {
  return (
    <div className=" 1024:pr-4 768:w-[436px] w-[250px] h-full 768:flex 1024:m-0 1024:flex items-center justify-center flex-col">
      {earningDetails.map((item, index) => (
        <div
          key={index}
          className="768:h-[81px] 768:mt-[2px] 768:w-[436px] gap-3 768:gap-0 1024:gap-0 640:w-[300px] flex items-center w-[250px] rounded-md hover:bg-[#F6F9FB] overflow-auto"
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
          <div className="flex flex-col ml-5 w-[270px] ">
            <p className="text-sm 1024:text-base text-[#333333] font-normal">
              {item.Heading}
            </p>
            <p className="768:text-xs 1024:text-sm 768:block 1024:block font-normal text-xs text-[#999999]">
              {item.para}
            </p>
          </div>
          <div className=" flex justify-end items-center">
            <p className="text-[#999999] font-normal text-xs 768:text-sm">
              June 01, 2021
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default EarningHistory;
