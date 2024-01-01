import React, { useState } from "react";
import avatar from "../pictures/Avatar.png";
import { BsPersonPlus } from "react-icons/bs";
import { AiOutlineArrowLeft } from "react-icons/ai";
const SignInGoogle = () => {
  const [arr, setarr] = useState([
    {
      picurl: { avatar },
      name: "Joy Deep",
      email: "joy@gmail.com",
    },
    {
      picurl: { avatar },
      name: "Deep Nar",
      email: "joyNar@gmail.com",
    },
    {
      picurl: { avatar },
      name: "Rahul Roy",
      email: "rahulroy@gmail.com",
    },
  ]);
  return (
    <div className="flex flex-col items-center  w-[100%] bg-[white] min-h-[100vh]">
      <div className="w-[100%] flex justify-start my-[20px] pl-[15px]">
        <AiOutlineArrowLeft className="text-[25px] font-semibold"/>
      </div>
      <div className="shadowClass flex flex-col items-center w-[100%] 450:w-[450px] h-fit py-[20px] mt-[10px]">
        <p className="text-[20px] text-[#4a4a4a] font-semibold">
          Choose an Account
        </p>
        <p className="text-[12px] text-[grey]">
          to continue to <span className="text-[#0261FE]">Helpert</span>
        </p>
        {arr.map((item, id) => {
          return (
            <>
              <div
                className={`w-[85%] border-b-[1px] border-[grey]  p-[15px] flex flex-row ${
                  id === arr.length - 1 ? "" : ""
                }  `}
              >
                <div className="">
                  <img src={avatar} alt="" className="rounded-full w-[50px]" />
                </div>
                <div className="ml-[10px]">
                  <p className="text-[15px] font-semibold">Joni Deep</p>
                  <p className="text-[12px] mt-[5px]  text-[grey]">
                    joyedeep@gmail.com
                  </p>
                </div>
              </div>
            </>
          );
        })}
        <div className="w-[85%] p-[15px] flex flex-row items-center border-b-[1px] border-[grey]">
          <div className=" p-[10px] rounded-full  w-fit h-fit ">
            <BsPersonPlus className="  text-[30px] text-[grey] " />
          </div>

          <p className="text-[15px] font-semibold ml-[15px]">
            Add another account
          </p>
        </div>
        <div className="text-[12px] text-[grey] p-[15px]">
          <p>Untuk melanjutkan, Google akan membagikan </p>
          <p>nama, alamat, email, dan gambar profil Anda ke</p>
          <p>Zahir Online. Sebelum menggunakan aplikasi</p>
          <p>ini, tinjau kebijakan privasi dan persyaratan layanan-nya.</p>
        </div>
      </div>
    </div>
  );
};

export default SignInGoogle;
