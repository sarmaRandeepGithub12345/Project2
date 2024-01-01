import React from 'react'
import Navbar from '../components/Navbar/Navbar'
import avatar from '../../src/pictures/Avatar.png'
import {AiFillCamera} from 'react-icons/ai'
import {BiSolidUser} from 'react-icons/bi'
import {BiSolidUserCircle} from 'react-icons/bi'
import {IoMdMail} from 'react-icons/io'
import {MdOutlineCalendarMonth} from 'react-icons/md'
import './editProfile.css'
export function EditProfile() {


    const style = { color: "rgba(41,95,295,1)" }

  return (
    
    <div className='bg-slate-100 h-[100vh] w-[100vw]'>
        <Navbar />
        <div className="edit bg-white w-[60%] h-[80%] mt-[2.5%] ml-[20%] flex flex-col items-center rounded-lg max-lg:w-[80vw] main">
            <h3 className="font-semibold mt-10">User Profile</h3>
            <form action="">
                <div className="photo flex flex-col items-center">
                    <img src={avatar} alt="" className='h-[80px] w-[80px] ml-auto mr-auto mt-3 mb-3' />
                    <div className='bg-white rounded-full w-[30px] h-[30px] absolute top-[250px] items-center pb-50'>

                    <AiFillCamera size={21} className='ml-auto mr-auto mt-1' />
                    </div>
                </div>
                <div>
                    <div className='flex flex-row items-center bg-zinc-100 w-[25vw] h-[50px] rounded-md mt-5'>
                        <BiSolidUser size={21} className='ml-4' style={style} />
                        <div className="flex flex-col">
                        <label htmlFor="" className='text-slate-400 text-sm mt-1 ml-2'>First Name</label>
                        <input type="text" className='bg-zinc-100 ml-2 focus:outline-none w-[20vw]' /></div>
                    </div>
                    <div className='flex flex-row items-center bg-zinc-100 w-[25vw] h-[50px] rounded-md mt-5'>
                        <BiSolidUser size={21} className='ml-4' style={style} />
                        <div className="flex flex-col">
                        <label htmlFor="" className='text-slate-400 text-sm mt-1 ml-2'>Last Name</label>
                        <input type="text" className='bg-zinc-100 ml-2 focus:outline-none w-[20vw]' /></div>
                    </div>
                    <div className='flex flex-row items-center bg-zinc-100 w-[25vw] h-[50px] rounded-md mt-5'>
                        <IoMdMail size={21} className='ml-4' style={style} />
                        <div className="flex flex-col">
                        <label htmlFor="" className='text-slate-400 text-sm mt-1 ml-2'>Type your Email</label>
                        <input type="email" className='bg-zinc-100 ml-2 focus:outline-none w-[20vw]' /></div>
                    </div>
                    <div className='flex flex-row items-center bg-zinc-100 w-[25vw] h-[50px] rounded-md mt-5'>
                        <BiSolidUserCircle size={21} className='ml-4' style={style} />
                        <div className="flex flex-col">
                        <label htmlFor="" className='text-slate-400 text-sm mt-1 ml-2'>Type your Username</label>
                        <input type="text" className='bg-zinc-100 ml-2 focus:outline-none w-[20vw]' /></div>
                    </div>
                    <div className='flex flex-row items-center bg-zinc-100 w-[25vw] h-[50px] rounded-md mt-5'>
                        <MdOutlineCalendarMonth size={21} className='ml-4' style={style} />
                        <div className="flex flex-col">
                        <label htmlFor="" className='text-slate-400 text-sm mt-1 ml-2'>What's your birthday?</label>
                        <input type="date" className='bg-zinc-100 ml-2 focus:outline-none w-[20vw]' /></div>
                    </div>
                </div>
                <button className='w-[100%] rounded-lg bg-blue-600 text-white mt-5 h-[40px]'>Save</button>
            </form>
        </div>
    </div>
  )
}

export default EditProfile