import React from "react";
import { FaThumbsUp } from "react-icons/fa";

const ShowEarning = () => {
  return (
    <section className="flex flex-col items-center p-10 md:p-20 bg-white">
           <h2 className="text-black text-center text-[23px] 450:text-[29px] 700:text-[33px] 900:text-[59px] font-normal self-center whitespace-nowrap mb-8">

        Expert’s on Helpert earn <span className="text-[#0261FE]">75%</span> more
      </h2>
      <div className="flex flex-col md:flex-row w-full gap-6">
        {/* Left Column */}
        <div className="flex flex-col w-full md:w-[60%]">
          {/* First Inner Row */}
          <div className="flex flex-col md:flex-row mb-4">
          <div className="flex flex-col justify-between w-full md:w-[40%] h-[90%] bg-[#F8B64C] p-6 md:mr-6 rounded-3xl">
              <div className="mb-4">
                <img src={require("../../pictures/images/thumb.png")} alt="" />
              </div>
              <div className="px-4 mt-4">
                <p className="flex justify-end text-5xl font-extrabold">17%</p>
                <p className="flex justify-end text-right text-xl font-normal">
                  Uplift in repeat bookings
                  <br />
                  with buy again suggestions{" "}
                </p>
              </div>
            </div>

            <div className="flex flex-col justify-between w-full md:w-[55%] h-[90%] bg-[#EB9481] p-4 md:ml-4 rounded-3xl">
              <div>
                <img
                  src={require("../../pictures/images/testtimonial1.png")}
                  style={{
                    width: 200,
                    height: "auto",
                    objectFit: "contain",
                  }}
                />
                <img
                  src={require("../../pictures/images/testtimonial2.png")}
                  style={{
                    width: 200,
                    height: "auto",
                    objectFit: "contain",
                    position: "relative",
                    bottom: 35,
                    left: 40,
                  }}
                />
              </div>
              <div className="px-4">
                <p className="flex justify-end text-5xl font-extrabold relative bottom-10">
                  40%
                </p>
                <p className="flex justify-end text-right text-xl relative bottom-10">
                  Increase in conversion
                  <br />
                  with testimonial showcase{" "}
                </p>
              </div>
            </div>
          </div>
          {/* Second Inner Row */}
          <div className="flex flex-col md:flex-row">
          <div className="w-full md:w-[60%] h-[100%] flex flex-col justify-between bg-[#FFEDEF] p-5 rounded-3xl">
              <div className="mb-4 mt-5">
                <img src={require("../../pictures/images/heart.png")} alt="" />
              </div>
              <div className="px-4 mt-4 mb-5">
                <p className="flex justify-end text-5xl font-extrabold">25%</p>
                <p className="flex justify-end text-right text-xl font-normal">
                  more earnings with pay what you want,
                  <br />
                  easiest way to start earning
                </p>
              </div>
            </div>
            <div className="w-full md:w-[40%] bg-[#EEF4FF] p-4 md:ml-4 rounded-3xl">
              <div className="mb-5 mt-5">
                <img src={require("../../pictures/images/cart.png")} alt="" />
              </div>
              <div className="px-4 mt-4">
                <p className="flex justify-end text-5xl font-extrabold">13%</p>
                <p className="flex justify-end text-right text-xl font-normal">
                  uplift in bookings with,
                  <br />
                  abandon cart emails
                </p>
              </div>
            </div>
          </div>
        </div>
        {/* Right Column */}
        <div className="w-full md:w-[35%] h-[50%] bg-[#489DFF] p-0 m-0 rounded-3xl">
          <div className="m-">
            <img
              src={require("../../pictures/images/earth.png")}
              style={{
                // width: "100%",
                // height: "100%",
                objectFit: "contain",
              }}
              className="m-0 p-0"
            />
          </div>
          <div className="cursor-pointer">
            <img
              src={require("../../pictures/images/usaPrice.png")}
              style={{
                width: "100%",
                height: "auto",
              }}
            />
          </div>
          <div className="cursor-pointer">
            <img
              src={require("../../pictures/images/indiaPrice.png")}
              style={{
                width: "100%",
                height: "auto",
              }}
            />
          </div>
          <div className="px-8">
            <p className="flex justify-end text-5xl font-extrabold relative bottom-10 mb-3">
              Upto 4X
            </p>
            <p className="flex justify-end text-right text-xl relative bottom-10">
              Your earnings with country
              <br />
              based pricing
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ShowEarning;
