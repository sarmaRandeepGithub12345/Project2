import React, { useRef, useState } from "react";
import Eye from "../../../pictures/icons/Eye.svg";
function SecurityAccess() {
  const [currpassword, setCurrPassword] = useState("");
  const [newPass, setNewPass] = useState("");
  const [confirmPass, setConfirmPass] = useState("");

  const [showCurrPass, setShowCurrPass] = useState(false);
  const [showNewPass, setShowNewPass] = useState(false);
  const [showConfirmPass, setShowConfirmPass] = useState(false);
  const [active, setActive] = useState(false);
  const inputref = useRef(null);
  const ref2 = useRef(null);
  const ref3 = useRef(null);
  const handleClick = (ref) => {
    setActive(true);
    ref.current.focus();
  };
  return (
    <div className="bg-white my-6 mx-0 w-[40%] py-4 px-2 rounded-xl justify-center items-center max-[768px]:w-[70%] max-[768px]:h-[85vh] max-[768px]:mx-[10px] max-[768px]:my-[10px]">
      <p className="text-center text-2xl font-bold">Security Access</p>
      <p className="text-[#999] mt-4 text-center text-sm font-normal leading-normal">
        Set your security password
      </p>
      <div
        className={`flex flex-row mx-auto mt-[32px]  bg-[#f4f4f4] active:bg-white justify-between items-center w-[436px] h-[56px] cursor-pointer rounded-lg max-[768px]:w-[300px] `}
        onClick={() => handleClick(inputref)}
      >
        <div className="ml-2 flex flex-col content-between cursor-pointer">
          <label className="text-[#999] text-xs font-normal">
            Current Password
          </label>
          <input
            ref={inputref}
            onFocus={() => setActive(true)}
            onBlur={() => setActive(false)}
            onChange={(e) => {
              setCurrPassword(e.target.value);
            }}
            value={currpassword}
            className="mt-1 w-[100%] bg-inherit border-none hover:cursor-pointer"
            type={showCurrPass ? "text" : "password"}
          />
        </div>
        <img
          onClick={() => setShowCurrPass(!showCurrPass)}
          className="w-6 h-6 cursor-pointer mr-1"
          src={Eye}
          alt=""
        />
      </div>
      <div
        className={`flex flex-row mx-auto mt-[32px]  bg-[#f4f4f4] justify-between items-center w-[436px] h-[56px] cursor-pointer rounded-lg max-[768px]:w-[300px]`}
        onClick={() => handleClick(ref2)}
      >
        <div className="flex flex-col content-between cursor-pointer ml-2">
          <label className="text-[#999] text-xs font-normal">
            Set new password
          </label>
          <input
            ref={ref2}
            onFocus={() => setActive(true)}
            onBlur={() => setActive(false)}
            onChange={(e) => {
              setNewPass(e.target.value);
            }}
            value={newPass}
            className="mt-1 w-[100%] bg-inherit hover:cursor-pointer"
            type={showNewPass ? "text" : "password"}
          />
        </div>
        <img
          onClick={() => setShowNewPass(!showNewPass)}
          className="w-6 h-6 cursor-pointer mr-1"
          src={Eye}
          alt=""
        />
      </div>
      <div
        className={`flex flex-row mx-auto mt-[32px] bg-[#f4f4f4] justify-between items-center w-[436px] h-[56px] cursor-pointer rounded-lg max-[768px]:w-[300px]`}
        onClick={() => handleClick(ref3)}
      >
        <div className="flex flex-col content-between cursor-pointer ml-2 ">
          <label className="text-[#999] text-xs font-normal">
            Confirm new password
          </label>
          <input
            ref={ref3}
            onFocus={() => setActive(true)}
            onBlur={() => setActive(false)}
            onChange={(e) => {
              setConfirmPass(e.target.value);
            }}
            value={confirmPass}
            className="mt-1 w-[100%] bg-inherit hover:cursor-pointer "
            type={showConfirmPass ? "text" : "password"}
          />
        </div>
        <img
          onClick={() => setShowConfirmPass(!showConfirmPass)}
          className="w-6 h-6 cursor-pointer mr-1"
          src={Eye}
          alt=""
        />
      </div>
      <button className=" bg-[#0160FE] text-white flex justify-center align-middle items-center w-[80%] h-[44px] rounded-[8px]  mx-auto my-auto mt-9">
        Save
      </button>
    </div>
  );
}

export default SecurityAccess;
