import React from 'react'
import LoginCarousel from "../slider/LoginCarousel"

const RegistrationLeft = () => {
  return (
    <div className="box-border w-[55%] bg-[#0261FE] min-h-[100vh] hidden 800:flex flex-col items-center">
      
    <LoginCarousel/>
     <>
      <div className="w-[65%] mt-[-10px]">
       
      </div>
      <div className="h-[5vh] w-[100%] bg-[#0261FE]"></div>
      <div className="flex flex-col items-center w-[60%] justify-center">
        <p className="text-[white] font-semibold text-[28px] mb-[10px]">
          Welcome to Helpert!
        </p>
        <p className="text-[white]  text-[18px] bg-[#0261FE]  flex items-center">
          Helpert help’s you to find and
        </p>
        <p className="text-[white]  text-[18px] bg-[#0261FE]  flex items-center">
          connect with experts/specialists in
        </p>
        <p className="text-[white]  text-[18px] bg-[#0261FE]  flex items-center">
          various fields.
        </p>
      </div>
    </> 

  </div>
);
};
  

export default RegistrationLeft