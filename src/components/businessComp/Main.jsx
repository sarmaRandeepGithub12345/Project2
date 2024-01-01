import MainBody from "./MainBody";
import appointment from "../AshishAssets/Images/appointment.png";
import Audio from "../AshishAssets/Images/Audio.png";
import Frame1 from "../AshishAssets/Images/Frame 1 (1).png";
import Group from "../../akanshaAssets/Group.png";
import Schedule from "../../akanshaAssets/Notification.png";
import { TabPanelComp } from "../tabpanel/TabPanelComp";
import { IoIosArrowForward } from "react-icons/io";
import RightCard from "./RightCard";

function Main() {
  const options = [
    {
      text: "Availability",
    },
    {
      text: "Unavailability",
    },
  ];

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

  return (
    <div className="w-full h-full bg-[#F6F9FB] flex justify-around items-start pt-8 768:pt-8 ">
      <div className="1024:w-[880px] 1024:h-[580px] bg-white 768:w-[710px] 640:w-[320px] 640:h-[400px] 768:h-[580px] w-[350px] 768:flex justify-center border-2  rounded-2xl 1024:flex">
        <div className="768:pl-11">
          <RightCard details={details} />
        </div>
        <div className="1024:w-[590px] 768:w-[400px] 768:h-full 768:flex 768:justify-center 768:items-center 768:pr-10 640:w-full w-full h-[450px] 640:justify-center 640:items-center flex flex-col items-center">
          <p className="font-bold mb-3 text-black text-center text-base 768:text  640:text-base pb-5">
            Set Time Availability
          </p>
          <div className="flex flex-col items-center justify-start w-full 768:w-[80%]">
            <div className="flex flex-row items-center justify-center w-full font-medium text-sm">
              <TabPanelComp options={options} className="font-medium text-sm" />
            </div>
            <div className="w-[70%] 1024:w-[420px] ml-4">
              <MainBody day="Monday" />
            </div>
          </div>
          <div className="sm:w-full flex justify-center ">
            <button className="w-[270px] 1024:w-[400px] 768:w-[300px] 768:pr-11 cursor-pointer bg-blue-600 text-white px-25 py-2 rounded-lg font-semibold leading-[normal] text-base text-center">
              Next
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Main;
