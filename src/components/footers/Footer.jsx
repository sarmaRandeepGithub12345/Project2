import React from "react";
import logo from "./logo.png";
import { RiInstagramFill } from "react-icons/ri";
import { FaFacebookSquare } from "react-icons/fa";

import { FaLinkedin } from "react-icons/fa";

import { Link, useNavigate } from "react-router-dom";

const Footer = () => {

  const navigate = useNavigate();
  const handleClick = (e, str) => {
    e.preventDefault();
    navigate(`${str}`);
  };
  const mainArr = [
    {
      path: "/",
      text: "Featured Experts",
    },
    {
      path: "/become-expert",
      text: "Become an Expert",
    },
    {
      path: "/community-guidelines",
      text: "Community Guidelines",
    },
    {
      path: "https://play.google.com/store/apps/details?id=com.ratankhan.helpert",
      text: "Download App",
    },
  ];
  const infoArr = [
    {
      path: "/about",
      text: "About",
    },
    // {
    //   path: "/",
    //   text: "FAQ",
    // },
    {
      path: "/privacypolicy",
      text: "Privacy Policy",
    },
    {
      path: "/terms-of-service",
      text: "Terms & Conditions",
    },
    {
      path: "/cancellation-and-refund-policy",
      text:"Cancel and Refund Policy"
    }
   
  ];
  const bottomIconClass = "text-[20px] mx-[4px] text-[white] cursor-pointer";
  const bottomIcons = [
    {
      link: "https://www.facebook.com/helperts?mibextid=ZbWKwL",
      icon: <FaFacebookSquare className={`${bottomIconClass}`} />,
      name:"Facebook Profile"
    },
    {
      link: "https://www.instagram.com/helperts/?hl=en",
      icon: <RiInstagramFill className={`${bottomIconClass}`} />,
      name:"Instagram Profile"
    },
    {
      link: "https://www.linkedin.com/company/helperts/mycompany/verification/",
      icon: <FaLinkedin className={`${bottomIconClass}`} />,
      name:"Linkedin Profile"
    },
  ];
  return (
    <div className=" flex flex-col w-[100%] bg-blue-600 font-[300]">
      <div className="500:justify-between items-start flex 500:flex-row flex-col gap-5 mt-8 px-[20px] pb-8 w-[100%]   text-white 800:text-lg 600:text-[15px]">
        <div className="items-start 700:flex gap-5 self-start  hidden">
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/42ff89b3-b0a4-49f9-8320-9cd5f3fbfc4c?"
            className="aspect-square object-contain object-center w-[60px] overflow-hidden self-stretch max-w-full"
          />
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/1dba809a-cb66-433c-881f-b88030c78168?"
            className="aspect-[3.57] object-contain object-center w-[100px] fill-white overflow-hidden self-center max-w-full my-auto"
          />
        </div>
        <div className="items-start flex flex-col self-start ">
          <div className="text-white text-2xl font-semibold leading-5 self-stretch whitespace-nowrap">
            Main
          </div>
          <div className="items-start self-stretch flex grow flex-col mt-[10px]">
            {mainArr.map((item, id) => {
              if (id === mainArr.length - 1) {
                
                return <a 
                href={`${item.path}`} 
                key={id}
                target="blank"
                className="leading-6 self-stretch whitespace-nowrap mt-[10px] cursor-pointer hover:font-semibold"
                >
                  {item.text}
                </a>;
              } else {
               return <div
                  onClick={(e) => handleClick(e, item.path)}
                  key={id}
                  
                  className="leading-6 self-stretch whitespace-nowrap mt-[10px] cursor-pointer hover:font-semibold"
                >
                  {item.text}
                </div>;
              }
            })}
          </div>
        </div>
        <div className="items-start flex flex-col self-start">
          <div className="text-white text-2xl font-semibold leading-5 self-stretch whitespace-nowrap">
            Info
          </div>
          <div className="items-start self-stretch flex grow flex-col mt-[10px]">
            {infoArr.map((item, id) => (
              <div
                key={id}
                className="leading-6 self-stretch whitespace-nowrap mt-[10px] cursor-pointer hover:font-semibold"
                onClick={(e) => handleClick(e, item.path)}
              >
                {item.text}
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="text-white w-[100%] flex justify-center items-center text-base py-[5px]  whitespace-nowrap 600:relative flex-col">
        <div className="600:absolute flex w-fit flex-row left-[20px] pb-4 600:pb-[0px]">
          {bottomIcons.map((item, id) => (
            <a target="blank" href={item.link} className="" key={id} alt={item.name}>
              {item.icon}
            </a>
          ))}
        </div>
        <p>Copyright 2023 © Helpert</p>
      </div>
    </div>
  );
};

export default Footer;
