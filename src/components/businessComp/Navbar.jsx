import Logo from "../../akanshaAssets/Group 889.png";
import ArrowLeft from "../../akanshaAssets/Vector.png";
import Avatar from "../../akanshaAssets/Avatar.png";
import { BsBellFill } from "react-icons/bs";
import { IoMdArrowDropdownCircle } from "react-icons/io";
import { RxHamburgerMenu } from "react-icons/rx";

function Navbar() {
  return (
    <div className="bg-white w-full h-[89px] flex sticky top-0">
      <div
        id="logo"
        className="w-[900px] 768:w-[400px] cursor-pointer justify-center items-center flex"
      >
        <img src={Logo} height="15px" width={"150px"} alt="logo" />
      </div>
      <div
        id="logo"
        className=" flex items-center justify-center px-5 w-[660px]"
      >
        <div className="relative 1024:w-[400px] 1024:h-[50px] 728:h-[50px] 728:w-[300px] rounded-xl 728:flex 640:hidden hidden 768:justify-center 768:items-center  bg-[#F6F9FB] 1024:flex items-center justify-center">
          <div className="ml-3 absolute left-2">
            <img src={ArrowLeft} alt="Arrowleft" />
          </div>
          <h3 className="text-center font-bold"> Settings </h3>
        </div>
      </div>

      <div
        id="avatar"
        className="hidden  items-center p-5 justify-between 768:flex 640:hidden w-[400px]"
      >
        <div className="w-[160px] flex items-center gap-3">
          <div className="h-[46px] w-[46px] cursor-pointer  rounded-xl">
            <img src={Avatar} width={"46px"} alt="" />
          </div>
          <h3 className="font-bold cursor-pointer">Yondu</h3>
        </div>
        <div className="flex gap-2">
          <div className="h-[57px] w-[57px] 640:flex items-center justify-center rounded-full bg-[#F6F9FB] cursor-pointer  ">
            <BsBellFill />
          </div>
          <div className="h-[57px] w-[57px] 640:flex items-center justify-center cursor-pointer rounded-full bg-[#F6F9FB] ">
            <IoMdArrowDropdownCircle />
          </div>
        </div>
      </div>
      <div className="flex justify-center items-center  768:hidden 640:flex pr-8">
        <RxHamburgerMenu className="block text-center " size={44} />
      </div>
    </div>
  );
}

export default Navbar;
