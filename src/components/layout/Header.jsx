import SearchIcon from "../../pictures/icons/SearchIcon.svg";
import HamburgerIcon from "../../pictures/icons/HamburgerIcon.svg";
import CaretDownIcon from "../../pictures/icons/CaretDownIcon.svg";
import HelpertLogoCircleWithName from "../../pictures/HelpertLogoCircleWithName.svg";
import InputWithIcon from "../global/InputWithIcon.jsx";

const Header = () => {
  return (
    <div className="justify-between items-center flex px-12 py-2.5">
      <div className="flex items-center gap-5">
        <img src={HelpertLogoCircleWithName} />
        <div className="flex items-center gap-1.5">
          <div className="text-black text-center text-base font-semibold">
            Categories
          </div>
          <img src={CaretDownIcon} />
        </div>
      </div>
      <InputWithIcon
        iconPath={SearchIcon}
        placeholder="Looking for Specialists"
      />
      <div className="items-start flex gap-5">
        <div className="text-blue-600 cursor-pointer text-center text-base font-semibold self-stretch whitespace-nowrap items-center border bg-white w-[98px] max-w-full px-6 py-2.5 rounded-lg border-solid border-blue-600 max-md:px-5">
          Log In
        </div>
        <div className="text-white cursor-pointer text-center text-base font-semibold self-stretch whitespace-nowrap items-center bg-blue-600 w-[98px] max-w-full px-5 py-2.5 rounded-lg">
          Sign Up
        </div>
        <img
          loading="lazy"
          src={HamburgerIcon}
          className="aspect-square object-contain object-center w-6 overflow-hidden self-center max-w-full my-auto"
        />
      </div>
    </div>
  );
};

export default Header;
