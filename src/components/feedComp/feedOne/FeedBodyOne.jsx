import React from 'react'
import specialist from "../../../pictures/specialist.svg"
const FeedBodyOne = () => {
  return (
    <div className='w-[23%] flex  justify-center pt-[20px] rounded-[5px]'>
        <div className='w-[90%] shadowClass bg-[white] rounded-[15px] h-fit '>
         <div className=''>
            <p className='text-[15px] pl-[20px] font-semibold mt-[20px]'>Your Specialist</p>
         </div>
         <div className='flex justify-center items-center my-[20px]'>
            <img src={specialist} alt="" srcset="" />
         </div>
         <div className='flex justify-center '>
            <p className='text-[20px] font-semibold'>Let's Follow Specialist</p>
         </div>
         <div className='flex flex-col items-center text-[14px] justify-center text-[#999999] my-[25px]'>
            <p className='flex justify-center'>Search and find best match</p>
            <p>of Expert for your problems.</p>
            <p> Or you can see Recommendation.</p>

         </div>
        </div>

    </div>
  )
}

export default FeedBodyOne