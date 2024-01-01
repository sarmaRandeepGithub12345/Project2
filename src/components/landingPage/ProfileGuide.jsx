import React, { useEffect, useState } from "react";
import { GoArrowRight } from "react-icons/go";

const ProfileGuide = () => {
  const [isSmallScreen, setIsSmallScreen] = useState(true);

  useEffect(() => {
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth <= 750); // Adjust the breakpoint as needed
    };

    handleResize(); // Initial check
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div
      className={`flex ${
        isSmallScreen ? "flex-col items-center" : "flex-row justify-between"
      } w-full h-auto justify-center items-center  p-2 450:p-6  `}
    >
      {/* Left Column */}
      <div
        className={`w-full md:w-1/2 ${
          isSmallScreen ? "pr-0" : "pr-8"
        } w-[100%] 600:w-[85%] 600:ml-[40px] `}
      >
        <h2 className="font-roboto text-black text-left text-[25px] 450:text-[30px]  750:text-[25px] 900:text-[30px] 1100:text-[40px] font-semibold 450:font-semibold">
          Create your{" "}
          <span className="text-[#0261FE] font-semibold">
            Helpert
          </span>
          <br /> profile in{" "}
          <span className="text-[#FFA273]  font-semibold">
            seconds
          </span>
        </h2>
        <p className="text-lg mb-10 mt-[20px] 750:mt-10 text-left 450:text-[20px]">
          Start earning the moment you finish reading our website.
        </p>
        <div className="flex flex-col items-center ">
          <button className="bg-blue-500 text-white py-4 px-8 rounded flex items-center ">
            Get Started Free
            <GoArrowRight className="ml-2" />
          </button>
        </div>
      </div>

      {/* Right Column */}
      <div className="w-full md:w-3/4  flex items-center justify-center ">
        <img
          src={require("../../../src/pictures/images/ProfileGuide.png")} // Replace with your image source
          alt="Profile Guide"
          className="w-600 h-auto md:w-500 md:h-449  mt-[30px] "
        />
      </div>
    </div>
  );
};

export default ProfileGuide;
