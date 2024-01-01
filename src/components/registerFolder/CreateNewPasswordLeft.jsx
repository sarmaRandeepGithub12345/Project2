import React from 'react'
import { AiOutlineArrowLeft } from 'react-icons/ai'

const CreateNewPasswordLeft = () => {
  return (
    <div className="w-[45%] h-[100vh] text-[black] flex flex-col pt-[50px] items-center">
      <div className="w-[100%] flex justify-start">
        <AiOutlineArrowLeft className="text-[30px] ml-[30px]" />
      </div>
      <div className="text-[20px] mb-[10px] font-bold mt-[8px] w-[60%]  flex justify-start ">
        Create New Password
      </div>
      <div className="w-[60%] text-[12px] text-[#858585] mb-[15px]">
        <p>Yay! Your password was Reset. And now you can</p>
        <p>create a new password</p>
      </div>
      <input
        type="text"
        className="box-border w-[60%] bg-[#F4F4F4] text-[#525252] h-[50px] placeholder:text-[#666666] rounded-[10px] pl-[15px] mb-[20px]"
        placeholder="Set new password"
      />
      <input
        type="text"
        className="box-border w-[60%] bg-[#F4F4F4] text-[#525252] h-[50px] placeholder:text-[#666666] rounded-[10px] pl-[15px] mb-[300px]"
        placeholder="Confirm Password"
      />

      <div className="w-[60%] flex justify-center items-center bg-[#0261FE] text-[#525252] h-[50px] rounded-[10px] mb-[20px]">
        <p className="text-[white]">Create a new password</p>
      </div>
    </div>
    
  )
}

export default CreateNewPasswordLeft