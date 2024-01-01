import React from 'react'
import NavbarProfile from '../components/profileComp/NavbarProfile'
import sadiqImage from "../pictures/sadiqImage.png"
import { FaArrowUp } from "react-icons/fa";
import shrihariImage from "../pictures/aboutPage/shrihari.png"
import nikhilImage from "../pictures/aboutPage/nikhilAnand.png"
import UrvishImage from "../pictures/aboutPage/Urvish.png"
import SaranshImage from "../pictures/aboutPage/saransh.png"
import AshokImage from "../pictures/aboutPage/ashok.png"
import { FaArrowRight } from "react-icons/fa6";
import Footer from '../components/footers/Footer';

const About = () => {
  const paraGraph = [
    "Less than 0.5% of India's 100+ million experts earn more than Rs 15,000 per month.",
    `"Yes, while it's now easier than ever to become an expert, the growing competition has made monetisation increasingly challenging. We strongly believe this situation needs to change./"`,
    "That's why we're building Helpert - to empower experts from various fields like you to pursue your passion. Helpert enables you to leverage your personal brand, share your expertise across disciplines, and monetise your time"
  ]
  const ImageArray = [
    {
      src:shrihariImage,
      name:"Shrihari",
      occupation:"Operations"
    },
    {
      src:  nikhilImage,
      name:"Nikhil",
      occupation:"Marketing"
    },
   
    {
      src:  UrvishImage,
      name:"Urvish",
      occupation:"Technology"
    },
    {
      src:  SaranshImage,
      name:"Saransh",
      occupation:"Design"
    },

    {
      src:  AshokImage,
      name:"Ashok",
      occupation:"Technology"
    }
  ]
  return (
    <div className='w-[100%] overflow-y-auto h-[100vh]'>
      <NavbarProfile op={{
          id: 0,
          name: "Category",
        }}></NavbarProfile>
      <div className='w-[100%] my-[30px] items-center flex flex-col 800:my-[50px] text-[15px] 450:text-[20px] 600:text-[25px] 700:text-[30px] 900:text-[40px] 1100:text-[50px]'>
         <p>Everyone has something important to say, </p>
         <p>and we're here to make sure they can </p>
         <p>share it easily</p>
      </div>
      <div className='Public Letter  flex flex-col 800:flex-row 800:items-start items-center w-[100%] bg-blue-600 text-white 800:py-[50px] 1000:py-[80px]'>
        <div className='flex flex-col items-center 800:w-[40%] w-fit mt-[50px]'>
          <p className='text-[30px] font-semibold  mt-[40px] 700:mt-[10px] mb-[20px] 800:mb-[30px] 1000:mb-[40px] 600:my-[30px]'>Public letter</p>
          <img src={sadiqImage} alt="" className='800:w-[180px] 1000:w-[210px]' />
        </div>
        <div className='w-[90%] mt-[40px] text-[16px] 400:text-[21px]  500:w-[85%] 600:mt-[50px] 600:text-[25px] break-words 800:w-[60%]  1000:px-[60px] 1200:px-[70px] 800:text-[19px] 1000:text-[21px] 1200:text-[25px]'>
          {
            paraGraph.map((item,id)=>(
              <p key={id} className='mb-[20px] font-[300]'>
                {item}
              </p>
            ))
          }
          <p className='text-[12px] '>
            <span>Sadiq RatanKhan </span>
            <span>CEO & Founder of Helpert</span>
          </p>
          <div className='text-[12px] font-[300] mb-[40px] flex flex-row'>Book a Appointment 
           
          <p className='bg-[#5082f5] h-fit p-1 rounded-[5px] ml-1'><FaArrowUp className=' rotate-[45deg]' /></p></div>
        </div>

      </div>
      <div className='flex flex-col items-center mt-[40px] mb-[40px] '>
        <p className='Team text-[30px] 600:text-[35px] 700:text-[40px] 900:text-[50px] font-semibold ' >Team</p>
        <div className='grid 400:grid-cols-2 600:grid-cols-3 750:grid-cols-4 grid-flow-row justify-items-center 400:w-[93%]  600:w-[90%] 750:w-[96%] 900:w-[90%] 1100:w-[80%]  mb-[40px]'>
          {
            ImageArray.map((item,id)=>(
            <div key={id} className='bg-[#D0EAFF] w-fit h-fit p-3 flex flex-col items-center rounded-[10px]  mt-[50px]'>
              <img src={item.src} alt="" className='w-[140px] h-[150px] rounded-[10px] object-center object-cover aspect-square' />
              <p className='text-[20px] mt-[20px]'>{item.name}</p>
              <p className='text-[15px] font-[300]'>{item.occupation}</p>
            </div>
            ))
          }
        </div>
      </div>
      <div className='bg-[#D0EAFF] flex flex-col items-center 700:items-start 700:flex-row text-[#303030] w-[100%] py-[50px]'>
        <div className='700:w-[50%] flex flex-col 700:pl-[120px] 900:pl-[130px] 1100:pl-[200px] w-[80%]'>
          <div className='text-[25px] mb-[30px] font-semibold'>
            <p>Together, we're on </p>
            <p>a journey to</p> 
            <p>victory for all.</p>
          </div>
          <button className='flex flex-row bg-[#4897EE] text-[white] items-center rounded-[8px] p-3 w-[200px] justify-between'>
            <p>Start today</p>
            <FaArrowRight/>
          </button>
        </div>
        <div className='w-[80%] 700:w-[50%] 700:px-[55px] 900:px-[70px] 1100:px-[80px] font-[300] text-[13px] 700:text-[16px] 700:mt-[15px] mt-[40px]'>
        "We believe everyone possesses valuable insights to share. That's why Helpert empowers you to share your knowledge with your followers through genuine human connections. Our mission is to support you in earning a living by pursuing your passions."
        </div>
        
      </div>
      <div className='bg-[#F8B64C] flex flex-col items-center 400:items-start pb-[50px]'>
        <div className='text-[25px] font-semibold 700:w-[50%] flex flex-col 400:ml-[44px] 500:ml-[50px] 700:ml-[120px] 900:ml-[130px] 1100:ml-[200px]   w-[80%] pt-[50px]'>Let's Connect</div>

        <div className='text-[16px] font-[300] border-[2px] border-[#4897EE] rounded-[15px]   bg-[white] mt-[30px] w-[90%] 400:w-[300px]  500:w-[400px] 400:ml-[44px] 500:ml-[50px] 700:ml-[120px] 900:ml-[130px] 1100:ml-[200px] h-[150px] flex flex-col pt-[30px] pl-[30px]'>
          <p className='text-[#4897EE] font-semibold'>Reach out</p>
          <p className='text-[#008060]'>support@helperts.com</p>
        </div>
      </div>
      <Footer/>
    </div>
  )
}

export default About