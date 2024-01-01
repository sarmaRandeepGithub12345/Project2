/* eslint-disable react/prop-types */
//import { Switch } from "@mui/material";
import { MdDelete } from "react-icons/md";
import ToogleBtn from "./ToogleButton";

function MainBody({ day }) {
  return (
    <div className="flex flex-col gap-5 items-center justify-end py-[19px] w-full ">
      <div className="bg-white-A700 flex flex-col items-start justify-start pr-4 py-4 rounded-[16px] shadow-bs w-full">
        <div className="flex flex-col gap-[18px] items-end justify-start w-full ">
          <div className="flex sm:flex-col flex-row sm:gap-5 items-start justify-start mr-1 w-full">
            <div className="font-semibold flex flex-row justify-between ml-4 sm:ml-[0] sm:mt-0 mt-1.5 text-base text-black-900 w-full">
              <p className="pl-4 border-l-4 border-l-blue-600 text-base">
                {day}
              </p>
              <ToogleBtn />
            </div>
          </div>
          <div className="flex flex-col flex-wrap gap-2 items-center justify-evenly w-full 768:justify-around">
            <div className="flex flex-row w-[140px]  items-center justify-around space-x-1 768:w-full">
              <select className="bg-slate-200 px-2 py-1  rounded-lg text-blue-500 cursor-pointer items-center">
                <option className="text-black">01:00</option>
              </select>
              <span className="px-2 py-1"> To </span>
              <select className="bg-slate-200 px-2 py-1 rounded-lg text-blue-500 cursor-pointer">
                <option className="">02:00</option>
              </select>
              <MdDelete className=" text-red-600 cursor-pointer" />
            </div>
            <button className=" bg-slate-200 rounded-lg px-3 py-2 768:py-3  text-blue-600 768:my-1 cursor-pointer font-semibold leading-[normal] w-full 768:[400px] text-center text-xs">
              + Add Hours
            </button>
          </div>

          <div className="font-semibold flex flex-row justify-between ml-4 768:my-3 640:ml-[0] 640:mt-0 mt-1.5 text-base text-black-900 w-full">
            <p className="pl-4  border-l-4 border-l-blue-600">Tuesday</p>
            <ToogleBtn />
          </div>

          <div className="font-semibold flex flex-row justify-between ml-4 768:my-3 640:ml-[0] 640:mt-0 mt-1.5 text-base text-black-900 w-full">
            <p className="pl-4  border-l-4 border-l-blue-600">Wednesday</p>
            <ToogleBtn />
          </div>
        </div>
      </div>
    </div>
  );
}

export default MainBody;
