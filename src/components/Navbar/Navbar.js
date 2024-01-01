import React from 'react'
import logo from '../../pictures/Helpert Logo Rounded.png'
import {BsArrowLeft} from 'react-icons/bs'
import avatar from '../../pictures/Avatar.png'
import {BsBellFill} from 'react-icons/bs'
import {IoMdArrowDropdownCircle} from 'react-icons/io'
function Navbar() {
  return (
    <div className='flex flex-row w-[100%] h-[70px] justify-between items-center z-10 bg-white'>
        <div className="left flex flex-row ml-8 w-[20vw]">
            <img src={logo} alt="" className='rounded-full' />
            <h3 className='ml-2 font-semibold pt-1'>Helpert</h3>
        </div>
        <div className="middle flex flex-row w-[25vw] h-[40px] rounded-lg pt-1 bg-slate-100">
            <BsArrowLeft className='mt-1.5 text-lg w-[15%] ' />
            <h3 className='mt-1 ml-[5%] w-[30%] pl-20 font-semibold'>Profile</h3>
        </div>
        <div className="right flex flex-row">
            <div className="profile flex flex-row w-[10vw]">
                <img src={avatar} alt="" />
                <h3 className='font-semibold pt-3 pl-2'>Yondu</h3>
            </div>
            <div className="notification rounded-full bg-slate-100 w-[45px] mr-5 flex items-center justify-center absolute"><BsBellFill size={18} className='' /></div>
            <div className="setting rounded-full bg-slate-100 w-[45px] mr-5 flex items-center justify-center top-[0] relative"><IoMdArrowDropdownCircle size={21} /></div>
        </div>
    </div>
  )
}

export default Navbar