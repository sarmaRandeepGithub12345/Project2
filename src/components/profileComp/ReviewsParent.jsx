import React, { useEffect, useState } from 'react'
import {AiFillStar} from "react-icons/ai"
import { useLocation } from "react-router-dom";
import axiosClient from '../../utils/axios-client';
import { getmonths } from '../../utils/commonObjects';
import { MdOutlineStarPurple500,MdOutlineStarHalf ,MdOutlineStarOutline } from "react-icons/md";

const ReviewsParent = () => {
  let { search } = useLocation();
  const query = new URLSearchParams(search);

  const [reviews, setReviews] = useState(null);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const resp = await axiosClient.post(
          "api/getRating",
          {
            user_id: query.get("user_id"),
          }
        );
        //const date = new Date(resp.data.data[0].created_at);
        //console.log(date.getMonth())
        setReviews(resp.data.data);
      } catch (error) {}
    };
    fetchData();
  }, []);
  return (
    <div className={`600:w-[90%] w-[100%]  ${reviews?.length?"grid grid-flow-row grid-cols-1 900:grid-cols-2 justify-items-center pb-[30px]":"pb-[20px]"} `}>
    {
      reviews?.length>0? reviews?.map((item,id)=>{
          if(item.user_id!==Number(query.get("user_id"))){
            
            return null;
          }
          const date = new Date(item?.created_at);
          const day = date.getDate();
          const month = getmonths[String(date.getMonth())] 
          const year = date.getFullYear()
          let arr = []
          //console.log(item?.rating)
          let rate = item.rating
          for(let i=1;i<=5;i++){
            if(i<=rate){
              arr.push(<MdOutlineStarPurple500 className='text-[#ffc400]'/>)
            }else if(i>rate){
              if((i-rate)>=1){
                arr.push(<MdOutlineStarOutline className='text-[#ffc400]'/>)
              }else{
                arr.push(<MdOutlineStarHalf className='text-[#ffc400]'/>)
              }
            }
          }
          return(
         
          <div key={id} className='bg-[white] p-[15px] rounded-[18px] shadow-[1px_1px_3px_0px_rgba(0,0,0,0.3)] w-[96%]    mt-[20px] text-[13px] 500:text-[15px] 700:text-[20px] font-[300]'>
            <p className='mb-[10px] text-[18px] 500:text-[20px] 700:text-[25px] font-[500]'>{item?.user?.first_name} {item?.user?.last_name}</p>
            <div className='flex flex-row justify-between items-center mb-[10px]'>
              <div className='flex flex-row'>
                {
                  arr.map((starItem,starId)=>(
                    <div key={starId}>
                    {starItem}
                    </div>
                  ))
                }
    
              </div>
              <p className='text-[grey] '>{month} {day},{year}</p>
            </div>
            <p className='  h-fit'>{item?.comments}</p>
          </div>
        )}):
        <div className='w-[100%] h-[100%] flex justify-center font-[300] items-center text-[13px] 500:text-[18px] 700:text-[20px] 950:text-[25px] mt-[20px]'>
          No reviews yet
        </div>
    }
   
   </div>
    
  )
}

export default ReviewsParent