import {
  MdFace,
  MdFactCheck,
  MdOutlinePayment,
  MdSubscriptions,
} from "react-icons/md";
import MyClients from "../components/settingsComp/settingsRight/MyClients";
import { IoIosNotifications, IoMdLock } from "react-icons/io";
import { GoDotFill } from "react-icons/go";

import SecurityAccess from "../components/settingsComp/settingsRight/SecurityAccess";
import Notifications from "../components/settingsComp/settingsRight/Notifications";
import MyEarnings from "../pages/MyEarnings";

export const backendBase =
  process.env.REACT_APP_BACKEND || "http://localhost:8000/";
export const frontendBase = "";
export const getmonths = {
  0: "January",
  1: "February",
  2: "March",
  3: "April",
  4: "May",
  5: "June",
  6: "July",
  7: "August",
  8: "September",
  9: "October",
  10: "November",
  11: "December",
};

export const EachDiv = ({ heading, children }) => {
  return (
    <div className="my-[10px] ">
      <p className="text-[#777777] font-[500] text-[20px] 768:text-[23px] 1000:text-[25px] mb-[10px]">
        {heading}
      </p>
      {children}
    </div>
  );
};
export const ListBulletPt = ({ arr }) => {
  return (
    <div className="my-[10px]">
      {arr.map((item, id) => (
        <div className="flex flex-row " key={id}>
          <div className="w-[30px] h-[30px] mt-[5px]">
            <GoDotFill className="text-[15px] mr-[20px]" />
          </div>
          <p className="">{item}</p>
        </div>
      ))}
    </div>
  );
};
export const commonClass = "my-[10px] font-[300]";

export const objItems = [
  {
    icon: <MdFactCheck color="blue" size="28px" />,
    heading: "My Appointment",
    body: "Show your saved appointment",
    link: "/appointment",
    itemToShow: <></>,
  },
  {
    icon: <MdFace color="blue" size="28px" />,
    heading: "My Clients",
    body: "Show your clients",
    link: "my-clients",
    itemToShow: <MyClients />,
  },
  {
    icon: <MdSubscriptions color="blue" size="28px" />,
    heading: "Subscription Setting",
    body: "Show your clients",
    link: "subsciptions",
    itemToShow: <></>,
  },
  {
    icon: <IoMdLock color="blue" size="28px" />,
    heading: "Security Access",
    body: "Show your saved appointment",
    link: "security-access",
    itemToShow: <SecurityAccess />,
  },
  {
    icon: <IoIosNotifications color="blue" size="28px" />,
    heading: "Notifications Settings",
    body: "Change your notification settings",
    link: "notifications",
    itemToShow: <Notifications />,
  },

  {
    icon: <MdOutlinePayment color="blue" size="28px" />,
    heading: "Payment Settings",
    body: "Change your payment settings",
    link: "payment-settings",
    itemToShow: <></>,
  },
  {
    icon: <MdOutlinePayment color="blue" size="28px" />,
    heading: "My Earnings",
    body: "Change your earnings' settings",
    link: "my-earnings",
    itemToShow: <MyEarnings />,
  },
];
