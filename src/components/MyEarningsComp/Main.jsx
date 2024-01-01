import React from "react";
import appointment from "../AshishAssets/Images/appointment.png";
import Frame1 from "../AshishAssets/Images/Frame 1 (1).png";
import Audio from "../AshishAssets/Images/Audio.png";
import Group from "../../akanshaAssets/Group.png";
import RightCard from "../businessComp/RightCard";
import Schedule from "../../akanshaAssets/Notification.png";
import EarningHistory from "./EarningHistory";

function Main() {
  const details = [
    {
      index: 1,
      ImageUrl: Group,
      Heading: "My Earnings",
      para: "Show your saved appointment.",
    },
    {
      index: 2,
      ImageUrl: Schedule,
      Heading: "My Schedule",
      para: "Show your clients.",
    },
    {
      index: 3,
      ImageUrl: Schedule,
      Heading: "My Sessions",
      para: "Manage your price.",
    },
    {
      index: 4,
      ImageUrl: appointment,
      Heading: "My Appointment",
      para: "Show your saved appointment.",
    },
    {
      index: 5,
      ImageUrl: Frame1,
      Heading: "My Clients",
      para: "Change yout notification settings.",
    },
    {
      index: 6,
      ImageUrl: Audio,
      Heading: "Subscription Setting",
      para: "Change your payment settings.",
    },
  ];

  const earningDetails = [
    {
      index: 1,
      ImageUrl: Group,
      Heading: "Weekly Subscriptions",
      para: "Earn $50",
    },
    {
      index: 2,
      ImageUrl: Group,
      Heading: "Weekly Subscriptions",
      para: "Earn $50",
    },
  ];
  return (
    <div className="flex mx-auto m-0 mt-5 1024:w-[880px] 1024:h-[580px] bg-white 768:w-[850px]  640:w-[320px] 640:h-[420px] 768:h-[580px] w-[350px]  768:flex justify-center border-2  rounded-2xl 1024:flex">
      <div className="p-2">
        <RightCard details={details} />
      </div>

      {/* right side */}
      <div className="w-full h-[500px] 768:pr-11">
        <div className=" flex justify-center my-4">
          <h1 className="mx-3 font-bold">My Earnings</h1>
        </div>
        <div className="w-full flex flex-col justify-between items-center 768:w-[436px]">
          <div className="flex flex-row justify-center items-center border rounded-2xl bg-[#F4F4F4] 768:justify-center ">
            <p className="768:px-3 768:py-3 px-1 py-1 text-center text-xs text-[#999999] rounded-tl-2xl rounded-bl-2xl  hover:bg-blue-500 hover:text-white">
              This Year
            </p>
            <p className="768:px-3 768:py-3 px-1 py-1 text-center text-xs text-[#999999] hover:bg-blue-500 hover:text-white">
              This Month
            </p>
            <p className="768:px-3 768:py-3 px-1 py-1  text-center text-xs text-[#999999]  hover:bg-blue-500 hover:text-white">
              This Week
            </p>
            <p className="768:px-3 768:py-3 px-1 py-1 text-center text-xs text-[#999999] rounded-tr-2xl rounded-br-2xl  hover:bg-blue-500 hover:text-white">
              Custom
            </p>
          </div>
          <div className="flex flex-col justify-center items-center border-b-2 1024:w-[420px] 1024:h-[213px] 768:w-[350px] 768:h-[200px] 768:pr-11">
            <span className="px-8 py-5 text-center text-[#A61B1B] text-4xl font-medium">
              $250
            </span>
            <p className="text-[#999999] text-center text-sm font-normal">
              This Year earnings
            </p>
          </div>
          <div className="w-full flex flex-col px-3 ">
            <h1 className="py-4 pl-6 font-bold ">Earning History</h1>
            <div className="768:pr-11">
              <EarningHistory earningDetails={earningDetails} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Main;
