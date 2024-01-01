import appointment from "../Images/appointment.png";
import action from "../Images/Action.png";
import action1 from "../Images/Action (1).png";
import Audio from "../Images/Audio.png";
import Frame1 from "../Images/Frame 1 (1).png";
import Social from "../Images/Social.png";
import { IoIosArrowForward } from "react-icons/io";

const Card = () => {
    const details = [
        {
            index: 1,
            ImageUrl: appointment,
            Heading: "My Appointment",
            para: "Show your saved appointment.",
        },
        {
            index: 2,
            ImageUrl: Frame1,
            Heading: "My Clients",
            para: "Show your clients.",
        },
        {
            index: 3,
            ImageUrl: Audio,
            Heading: "Subscription Setting",
            para: "Manage your price.",
        },
        {
            index: 4,
            ImageUrl: action,
            Heading: "Security Access",
            para: "Show your saved appointment.",
        },
        {
            index: 5,
            ImageUrl: Social,
            Heading: "Notification Settings",
            para: "Change yout notification settings.",
        },
        {
            index: 6,
            ImageUrl: action1,
            Heading: "Payment Settings",
            para: "Change your payment settings.",
        },
    ];
    return (
        <div className="w-full h-full bg-[#F6F9FB] flex justify-center items-start pt-8 768:pt-8 ">
            <div className="1024:w-[880px] 1024:h-[580px] bg-white 768:w-[710px] 640:w-[320px] 640:h-[400px] 768:h-[580px] w-[350px]  768:flex justify-center border-2  rounded-2xl 1024:flex">
                <div className="1024:items-center  1024:justify-center  1024:pr-4 1024:w-[450px] 768:w-[450px] w-[250px] h-full 768:flex 768:p-2 1024:m-0 1024:flex items-center justify-center flex-col border-[#DEDEDE] hidden border-r-[1px] ">
                    {details.map((item, index) => (
                        <div
                            key={index}
                            className="768:h-[81px] 768:mt-[2px] 768:w-[370px] gap-3 768:gap-0 1024:gap-0 flex items-center 1024:ml-8  rounded-md hover:bg-[#F6F9FB]"
                        >
                            <div>
                                <img
                                    className="ml-3 h-[18px] w-[18px] 1024:w-[24px] 1024:h-[24px] "
                                    src={item.ImageUrl}
                                    height="24px"
                                    width="24px"
                                    alt="name"
                                />
                            </div>

                            {/* text */}
                            <div className="flex flex-col ml-5  w-[270px]">
                                <p className="text-sm 1024:text-base text-[#333333] font-normal">
                                    {item.Heading}
                                </p>
                                <p className="768:text-xs 1024:text-sm 768:block 1024:block hidden font-normal text-[#999999]">
                                    {item.para}
                                </p>
                            </div>

                            <div className=" ml-3 flex justify-end items-center">
                                <div className="">
                                    <IoIosArrowForward size={14} className="text-[#999999]" />
                                </div>
                            </div>
                        </div>
                    ))}
                    <div className=" 1024:pl-9 pl-9 ml-2  w-full text-[#E74D3D] font-medium mt-3 cursor-pointer">
                        Logout
                    </div>
                </div>

                {/* Right Side */}


                <div className="1024:w-[590px] 768:w-[400px] 768:h-full 768:flex 768:justify-center 768:items-center 768:p-3 640:w-full w-full h-[380px] 640:justify-center 640:items-center flex flex-col items-center">
                    <div className=" h-full w-full flex flex-col items-center">
                        <div className=" text-center mt-5">
                            <h1 className="font-bold text-base 768:text-lg">
                                Subscription Setting
                            </h1>
                        </div>

                        <div className="1024:w-[295px] text-xl 1024:h-[66px] 640:text-xl mt-5 768:w-[205px] 768:h-[66px] 1024:mt-6 768:mt-6 768:p-6 1024:p-6 flex 1024:text-[44px] 768:text-[35px] font-semibold h-[30px] items-center justify-center text-[#A61B1B] ">
                            $25
                        </div>

                        <div className="flex justify-center 768:h-[300px] text-xs 1024:h-[300px] 640:text-xs 1024:w-[436px] text-center">
                            <div className="flex">
                                <h4 className="text-black">weekly</h4>
                                <h4 className="text-[#999999] ml-1">&#183; 2 appointments</h4>
                            </div>
                        </div>

                        <div className="768:w-[280px] 1024:w-[366px] 1024:h-[44px] 768:h-[44px] h-[40px]  w-[280px] mt-[200px]  rounded-lg 640:mt-[200px] 1024:mt-[50px] 768:mt-[45px] cursor-pointer 640:w-[250px] text-white bg-[#A61B1B] flex items-center justify-center">
                            <p className="text-sm text-semibold">Edit Price</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Card;
