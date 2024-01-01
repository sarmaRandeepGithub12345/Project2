import React from "react";

const PortfolioParent = ({ profileUser }) => {
  return (
    <div className="w-[95%] h-fit 600:w-[90%] pb-[30px]">
      <div className="bg-[white] mt-[30px] w-[100%] Card text-[13px] 500:text-[18px] 700:text-[20px] 950:text-[25px] rounded-[15px] p-[50px] shadow-[3px_3px_3px_-1px_rgba(0,0,0,0.3)] font-[300]">
        <div className="w-[100%] flex flex-col 600:flex-row mb-[15px]">
          <div className="600:w-[50%] w-[100%] 600:mb-[0px] mb-[15px] ">
            <p className="text-[#a8a8a8] font-normal text-[18px] ">
              COMPANY DETAILS
            </p>
            <p className="text-[20px] font-semibold">{profileUser?.company}</p>
          </div>
          <div className="600:w-[50%] w-[100%] ">
            <p className="text-[#a8a8a8] font-normal text-[18px] ">I AM</p>
            <p className="text-[20px] font-semibold">
              {profileUser?.specialization}
            </p>
          </div>
        </div>
        <hr className="mb-10" />
        <div className="w-[100%] flex flex-col 600:flex-row mb-[15px]">
          <div className="600:w-[50%] w-[100%] 600:mb-[0px] mb-[15px]">
            <p className="text-[#a8a8a8] font-normal text-[18px] ">
              SPECIALISED IN
            </p>
            <p className="text-[20px] font-semibold">{profileUser?.iam}</p>
          </div>
          <div className="600:w-[50%] w-[100%]">
            <p className="text-[#a8a8a8] font-normal text-[18px] ">LOCATION</p>
            <p className="text-[20px] font-semibold">
              {profileUser?.user_detail_list[0].location}
            </p>
          </div>
        </div>
        <hr className="mb-10" />
        <div>
          <p className="text-[#a8a8a8] font-normal text-[18px] ">DESCRIPTION</p>
          <p className="h-fit w-[100%] break-words text-[20px] font-semibold">
            {profileUser?.user_detail_list[0].description}
          </p>
        </div>
      </div>
    </div>
  );
};

export default PortfolioParent;
