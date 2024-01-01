import React, { useState } from "react";

const FeedThreeSecond = () => {
  const [arrObj, setarrObj] = useState([
    "Sports",
    "Healthy Food",
    "Diets",
    "Sports",
  ]);
  return (
    <div className="bg-[white] rounded-[15px] w-[90%] mt-[25px] shadowClass">
      <p className="text-[15px] ml-[20px] font-semibold mt-[20px]">
        Specialists by Sector
      </p>
      {
       arrObj.map((item,id)=>{
        return  (
        <div className="flex flex-col items-center">
        <div className="flex flex-row items-center justify-between my-[30px] w-[100%]">
        <div className="flex flex-col text-[13px] ml-6">
          <p className="font-semibold">{item}</p>
          <p className="text-[12px] text-[#7e7e7e]">
            All about <span>{item}</span>
          </p>
        </div>
        <div className="text-[13px] h-fit w-fit text-[#0261FE] font-semibold border-[#969696] border-[2px] rounded-[10px] p-[8px] mr-4">
            Follow
        </div>
        
        </div>
        {id===arrObj.length-1?<></>:<div className="w-[90%] h-[2px] bg-[#b3b3b3]"></div>}
        
      </div>)
       }) 
      }
     
      
    </div>
  );
};

export default FeedThreeSecond;
