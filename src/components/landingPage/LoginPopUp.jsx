import React from "react";
import logo from "../../pictures/logo.svg"
const LoginPopUp = () => {
  const classVal =
    "h-[40px] mb-[20px] pl-[5px] outline-blue-600 text-[black] rounded-[8px] border-[2px] border-blue-600";
  const parentClass = "flex flex-col w-[90%]";
  return (
    <div className="bg-[white] w-[100%] 450:w-[450px] flex flex-col items-center py-[40px] rounded-[10px] text-blue-600 font-[500]">
       <div className="flex flex-row items-center">
        <img src={logo} alt="" className="w-[40px]" />
        <p className="text-[#3b3b3b] text-[20px] ml-[7px] font-[600]">Helpert</p>
       </div>
      <div className={parentClass}>
        <label htmlFor="email">Email</label>
        <input type="email" id="email" name="email" className={classVal} />
      </div>
      <div className={parentClass}>
        <label htmlFor="password">Password</label>
        <input
          type="password"
          id="password"
          name="password"
          className={classVal}
        />
      </div>
      <p>Forgot password</p>
      <button className="mt-[20px] bg-blue-600 text-[white] text-[20px] font-[500]  w-[90%] h-[50px] rounded-[10px]  900:text-[25px]">
        Login
      </button>
    </div>
  );
};

export default LoginPopUp;
