
import React from 'react'
import {BiSearch} from "react-icons/bi"
const FeedSearch = () => {
  return (
    <div className='w-[90%] h-fit shadowClass flex flex-row p-2 rounded-[10px] mt-[20px] bg-[white]'>
        
        <input 
        type="text" 
        className="w-[100%] outline-none"
        placeholder='Looking For Specialists'
        />

    </div>
  )
}

export default FeedSearch