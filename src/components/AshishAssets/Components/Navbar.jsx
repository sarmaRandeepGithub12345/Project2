import social from "../Images/Social (1).png";
import Navigation from "../Images/Navigation.png";
import logo from "../Images/Group 889.png";
import avatar from "../Images/Avatar.png";

import { FaArrowLeftLong } from "react-icons/fa6";
import { RxHamburgerMenu } from "react-icons/rx";

const Navbar = () => {
    return (
        <div className="bg-white w-full h-[89px] flex ">
            <div id="logo" className="w-[900px] 768:w-[400px] cursor-pointer justify-center items-center flex">
                <img src={logo} height="15px" width={"150px"} alt="logo" />
            </div>
            <div
                id="logo"
                className=" flex items-center justify-center px-5 w-[660px]"
            >
                <div className="relative 1024:w-[400px] 1024:h-[50px] 768:h-[50px] 768:w-[300px] rounded-xl 768:flex 640:hidden hidden 768:justify-center 768:items-center  bg-[#F6F9FB] 1024:flex items-center justify-center">
                    <div className="ml-3 absolute left-2">
                        <FaArrowLeftLong size={18} />
                    </div>
                    <h3 className="text-center font-bold">Settings</h3>
                </div>
            </div>

            <div
                id="avatar"
                className="hidden 1024:flex items-center p-5 justify-between 768:flex 640:hidden w-[400px]"
            >
                <div className="w-[160px] flex items-center gap-3">
                    <div className="h-[46px] w-[46px] cursor-pointer  rounded-xl">
                        <img src={avatar} width={"46px"} alt="" />
                    </div>
                    <h3 className="font-bold cursor-pointer">Yondu</h3>
                </div>
                <div className="flex gap-2">
                    <div className="h-[57px] w-[57px] 640:flex items-center justify-center cursor-pointer bg-[#F6F9FB] rounded-full hidden">
                        <img src={social} width={"24px"} alt=""></img>
                    </div>
                    <div className="h-[57px] w-[57px] 640:flex items-center justify-center cursor-pointer bg-[#F6F9FB] rounded-full hidden">
                        <img src={Navigation} width={"24px"} alt=""></img>
                    </div>
                </div>
            </div>
            <div className="flex justify-center items-center 1024:hidden 768:hidden 640:flex pr-8">
                <RxHamburgerMenu className="block text-center " size={44} />
            </div>

        </div>
    );
};

export default Navbar;
