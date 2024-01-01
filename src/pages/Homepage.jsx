import SearchIcon from "../pictures/icons/SearchIcon.svg";
import HamburgerIcon from "../pictures/icons/HamburgerIcon.svg";
import CaretDownIcon from "../pictures/icons/CaretDownIcon.svg";
import CaretLeftIcon from "../pictures/icons/CaretLeftIcon.svg";
import CaretRightIcon from "../pictures/icons/CaretRightIcon.svg";
import HelpertLogoCircleWithName from "../pictures/HelpertLogoCircleWithName.svg";
import AppleIcon from "../pictures/icons/AppleIcon.svg";
import PlayStoreIcon from "../pictures/icons/PlayStoreIcon.svg";

import LeftImage from "../pictures/landing/LeftImage.png";
import RightImage from "../pictures/landing/RightImage.png";
import CentreImage from "../pictures/landing/CentreImage.png";

import ExpertCard from "../components/landingPage/ExpertCard";
import InputWithIcon from "../components/global/InputWithIcon";
import { useEffect, useState } from "react";
import axiosClient from "../utils/axios-client";
import axios from "axios";
import NavbarProfile from "../components/profileComp/NavbarProfile";
import Footer from "../components/footers/Footer";
import Loader from "../components/helpertLoad/Loader";
import { Link, useNavigate } from "react-router-dom";
import ProfileGuide from "../components/landingPage/ProfileGuide";
import AccordionSection from "../components/landingPage/AccordionSection";
import SliderCarousel from "../components/slider/SliderCarousel";
import ShowEarning from "../components/landingPage/ShowEarning";
import InstantPayoutSection from "../components/landingPage/InstantPayoutSection";

const Homepage = () => {
  const [experts, setExperts] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    document.title = "Home";
  }, []);
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
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchFunct = async () => {
      setLoading(true);
      try {
        const resp = await axiosClient.get("production/api/v1.0.1/specialist");
        // const resp = await axios({
        //   method:'GET',
        //   url:'https://helppert.com/production/api/v1.0.1/specialist',
        //   headers:{
        //     'Content-Type': 'application/json',
        //     'Access-Control-Allow-Origin': '*',

        //   }
        // })

        //console.log(resp)
        setExperts(resp.data.data.slice(0, 6));
      } catch (error) {}
      setLoading(false);
    };
    fetchFunct();
  }, []);

  //console.log(experts)
  return (
    <div className="items-center bg-white flex flex-col w-[100%] overflow-y-auto h-[100vh]">
      <NavbarProfile
        op={{
          id: 0,
          name: "Category",
        }}
      />

      <section
        id="sectionOne"
        className=" items-center justify-center gap-5 bg-white flex w-[100%] flex-col py-5 700:py-8 "
      >
        <div className="font-roboto text-black text-center text-[23px] 450:text-[29px]  700:text-[33px] 900:text-[38px] font-semibold self-center whitespace-nowrap mt-[20px]">
          Browse Featured Experts
        </div>
        {loading ? (
          <Loader />
        ) : (
          <div className="w-[100%] grid   grid-cols-1  450:grid-cols-2 850:grid-cols-3 grid-flow-row mx-[50px] justify-items-center 850:px-[45px] 850:gap-[30px] 450:px-[25px] 450:gap-[10px]">
            {experts.map((item, idx) => (
              <ExpertCard expertInfo={item} key={idx} />
            ))}
          </div>
        )}
      </section>

      {/*Profile Guide Section */}

      <ProfileGuide />
      <AccordionSection />

      {/* <ShowEarning /> */}
      {/* <InstantPayoutSection/> */}

      <div className="w-[100%] h-fit">
        <div className="text-black text-center text-[23px] mb-[20px] 450:text-[29px]  700:text-[33px] 900:text-[38px]  font-semibold self-center whitespace-nowrap">
          Helpert On The Go
        </div>

        <SliderCarousel />
      </div>
      <div className="text-black text-center 450:text 700:text-[23px] mx-[5px]  leading-6 self-center max-w-[630px] mt-5 max-md:max-w-full font-[300]">
        Connect with experts using 1:1 video consulting
      </div>

      <div className="justify-center items-start flex w-[100%] gap-3 700:gap-4 900:gap-5 mt-5 pb-5">
        {bottomItem.map((item, id) => (
          <a
            key={id}
            className="justify-between items-center bg-neutral-800 p-[12px] flex 450:p-[15px] 700:p-[20px] 900:p-5 rounded-lg gap-2 800:gap-5 cursor-pointer"
            href={`${item.linkToDirect}`}
            target="blank"
          >
            <img
              
              className="w-[25px] 700:w-[28px] 900:w-[35px]"
              src={item.icon}
            />
            <div className="flex flex-col">
              <div
                className="text-white 
                  text-[10px]
                  450:text-[13px] 900:text-[20px] leading-6 whitespace-nowrap"
              >
                {item.upperText}
              </div>
              <div
                className="text-white text-[16px] 
                  450:text-[18px] 900:text-[24px]  font-semibold leading-6 self-stretch whitespace-nowrap"
              >
                {item.lowerText}
              </div>
            </div>
          </a>
        ))}
      </div>

      <Footer />
    </div>
  );
};

export default Homepage;
