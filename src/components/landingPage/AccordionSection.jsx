import React, { useEffect, useState } from "react";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";

const AccordionSection = () => {
  const accordionItems = [
    {
      title: "Offer 1:1 Video Call Appointment",
      content:
        "Mentorship sessions, consultations, discovery calls - do what you do best. We take care of everything else",
      image: "appointment.png",
      bgColor: "bg-blue-700",
    },
    {
      title: "Add your Experience",
      content:
        "Showcase your expertise and add your experiences. Let your followers know where you can assist them.",
      image: "experience.png",
      bgColor: "bg-red-300",
    },
    {
      title: "Create Content",
      content:
        "We allow experts to upload 30- and 60-second videos, enabling them to create content and establish their own brand",
      image: "content.png",
      bgColor: "bg-red-400",
    },
    {
      title: "Set Your Price",
      content:
        "Set your price and allow others to compensate you for the time and knowledge you share.",
      image: "price.png",
      bgColor: "bg-[#4F91FF]",
    },
    {
      title: "Instant Settlement",
      content:
        "Receive instant settlement to your bank account upon successful completion of an appointment.",
      image: "settlement.png",
      bgColor: "bg-yellow-300",
    },
  ];

  const handleAccordionClick = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const [openIndex, setOpenIndex] = useState(0);

  const [isSmallScreen, setIsSmallScreen] = useState(true);

  useEffect(() => {
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth <= 768);
    };

    handleResize(); // Initial check
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <section
      className={`flex 750:flex-row flex-col w-full h-auto justify-center items-stretch mt-8 mb-10 `}
    >
      {/* Left Column (Image) */}
      <div className=" order-[2] 1000:w-[45%]  w-[100%] 750:w-[40%]  flex items-center justify-center ">
        <div
          className={` flex justify-center items-center  border-4 w-600  pt-8 pb-4 border-white px-14 rounded-3xl relative  ${
            openIndex != null
              ? accordionItems[openIndex].bgColor
              : accordionItems[0].bgColor
          }`}
          // style={{ width: "60%" }}
        >
          <img
            src={
              openIndex != null
                ? require(`../../pictures/images/${accordionItems[openIndex].image}`)
                : require("../../pictures/images/appointment.png")
            }
            alt="Left Image"
            className="  rounded-3xl aspect-square"
          />
        </div>
      </div>

      {/* Right Column (Accordion) */}
      <div className="order-[1] 1000:w-[55%]  w-[100%]  750:w-[60%] 750:justify-start flex flex-col justify-center  pl-4 pt-4 pr-8">
        {accordionItems.map((item, index) => (
          <div
            key={index}
            className={` mb-[10px] border-b rounded-lg border-gray-300 text-sm 600:text-[20px] 767:text-lg text-left ${
              openIndex === index ? "selected-accordion" : ""
            }`}
            style={{ paddingTop: "15px" }}
          >
            <div
              className={`flex transform  duration-300 items-center pb-[10px] ] cursor-pointer ${
                openIndex === index
                  ? "text-blue-500 font-semibold  text-sm 600:text-[20px]  767:text-lg"
                  : ""
              }`}
              onClick={() => handleAccordionClick(index)}
            >
              <div className="text-sm 600:text-[20px] 767:text-[14px] font-semibold mr-3">
                {`${index + 1 < 10 ? "0" : ""}${index + 1}`}
              </div>
              <div className="flex-1">{item.title}</div>
              <div className="ml-2 transform duration-300">
             <IoIosArrowUp className={`transform duration-300 ${openIndex===index?"rotate-[180deg]":""}`} />
              </div>
            </div>
            {openIndex === index && (
              <div className="mt-2">
                <p className="text-sm 310:text-xs  mb-5">{item.content}</p>
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default AccordionSection;
