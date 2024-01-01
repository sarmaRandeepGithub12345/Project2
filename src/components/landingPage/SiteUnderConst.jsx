import React from "react";
import logo from "../../pictures/logo.svg";
import rocket from "../../pictures/images/rocket.png";
import PlayStoreIcon from "../../pictures/icons/PlayStoreIcon.svg";
import AppleIcon from "../../pictures/icons/AppleIcon.svg";

const SiteUnderConst = ({onClose}) => {
  const bottomItem = [
    {
      icon: AppleIcon,
      upperText: "Download on the",
      lowerText: "App Store",
      linkToDirect:
        "https://apps.apple.com/in/app/helpert-connect-with-experts/id6444900117",
    },
    {
      icon: PlayStoreIcon,
      upperText: " Get it on",
      lowerText: "Google Play",
      linkToDirect:
        "https://play.google.com/store/apps/details?id=com.ratankhan.helpert",
    },
  ];
  return (
    <div className="">
      <div className=" text-[white] flex justify-end">
        <div className="border-[2px] rounded-full w-[35px] h-[35px] flex justify-center items-center text-[22px] font-[500] cursor-pointer" onClick={onClose}>
          X
        </div>
      </div>
    <div className="bg-[white] w-[100vw] 400:w-[400px]  flex flex-col items-center  rounded-[10px] font-[500] py-[20px]">
      <div className="flex flex-row justify-center  w-[100%]">
        <p className=" text-[20px]  font-[600]">
          We are working on website
        </p>
      </div>
      <div className="my-3">
        <img src={rocket} className="w-[40px]" />
      </div>
      <div>
        <p className="text-[#000]">Meanwhile you can download App</p>
      </div>

      {/* Download Buttons */}
      <div className="flex 400:flex-row flex-col  400:justify-between items-center  400:items-start 400:px-[17px] w-[100%] mt-5 400:gap-[17px]">
        {bottomItem.map((item, id) => (
          <a
            key={id}
            className="justify-center 400:justify-between items-center bg-neutral-800 400:mb-[0px] mb-[15px] p-[6px] flex rounded-lg  py-[16px] cursor-pointer w-fit 400:w-[50%]"
            href={`${item.linkToDirect}`}
            target="blank"
          >
            <img
              loading="lazy"
              className="w-[30px] mx-[6px]"
              src={item.icon}
            />
            <div className="flex flex-col">
              <div
                className="text-white 
            text-[13px] leading-5 whitespace-nowrap font-[300]"
              >
                {item.upperText}
              </div>
              <div
                className="text-white text-[18px]  leading-5 self-stretch whitespace-nowrap font-[400]"
              >
                {item.lowerText}
              </div>
            </div>
          </a>
        ))}
      </div>
    </div>
    </div>
  );
};

export default SiteUnderConst;
