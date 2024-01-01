import React, { useEffect, useState } from "react";
import pic1 from "../../../pictures/Avatar.png";
import medal from "../../../pictures/medal.svg";
import { BsDot } from "react-icons/bs";
import { AiOutlinePlus } from "react-icons/ai";
const CommonObjects = ({ heading }) => {
  const [arrObj, setarrObj] = useState([])
  useEffect(() => {
    const fetchItems=async()=>{
        try {
            setarrObj([
                {
                  picUrl : pic1,
                  name : "Donny Junior",
                  occupation:'Farmer',
                  country:'India'      
                },
                {
                    picUrl : pic1,
                    name : "Rebel Walker",
                    occupation:'Engineer',
                    country:'USA'      
                  },
                  {
                    picUrl : pic1,
                    name : "Xing Sai Long",
                    occupation:'MakeUP artist',
                    country:'China'      
                  },
            ])
        } catch (error) {
            
        }
    }
    fetchItems()
  }, [])
  
  return (
    <div className=" w-[90%] text-[15px] ">
      <p className="my-[15px] font-semibold">{heading}</p>
      <div className="grid grid-flow-row grid-cols-3 ">
        {
            arrObj.map((item,key)=>{

                return <div key={key} className=" shadowClass rounded-[15px] mx-3 py-4 bg-[white] flex flex-col items-center">
                <div className="flex flex-row  justify-between items-center w-[88%] ">
                  <div className="">
                    <img src={item.picUrl} alt="" className="" />
                  </div>
                  <div className="flex flex-col ">
                    <div className="flex flex-row items-center">
                      <p className="text-[12px] font-semibold">
                       {item.name}
                      </p>
                      <img
                        src={medal}
                        alt=""
                        srcset=""
                        className="ml-[5px] w-[15px] h-[15px]"
                      />
                    </div>
                    <div className="text-[10px] flex flex-row items-center">
                      <p className="text-[#0261FE]">{item.occupation} </p>
                      <span>
                        <BsDot className="text-[#999999] text-[12px] font-bold" />
                      </span>
                      <p className="text-[#999999]"> {item.country}</p>
                    </div>
                  </div>
                </div>
      
                <p className="w-[88%] py-3 text-[12px] flex justify-center items-center text-[#999999]">
                  Has proved his skills and with great expierence.
                </p>
      
                <div className="bg-[#0261FE] p-2 rounded-[10px] w-[90%] text-[white] flex flex-row items-center justify-center">
                  <div className="mr-[2px] font-semibold">
                    <AiOutlinePlus className="font-bold" />
                  </div>
                  <p>Follow</p>
                </div>
              </div>
            })
        }
        
      </div>
    </div>
  );
};

export default CommonObjects;
