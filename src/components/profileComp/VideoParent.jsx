import React, { useEffect, useState } from 'react'
import VideoComponent from '../videoComp/VideoComponent'
import axiosClient from '../../utils/axios-client'
import { useLocation } from 'react-router-dom'
const VideoParent = () => {
  const [videos, setVideos] = useState([])
  let { search } = useLocation();
  const query = new URLSearchParams(search);
  useEffect(() => {
    const fetchData=async()=>{
      try {
        const resp = await axiosClient.post(
          "api/new-specific-user-video-bot",
          {
            user_id: query.get("user_id"),
          }
        );
        setVideos(resp.data.data.videos_list);
        //setprofileUser(resp.data.data);
      } catch (error) {

      }
    }
    fetchData()
  }, [])
  
  return (
    <div className={`w-[90%] ${videos?.length>0?"grid grid-flow-row grid-cols-1 450:grid-cols-2 1000:grid-cols-3 justify-items-center pb-[30px]":"pb-[20px]"} `}>
      { videos?.length>0?
        videos?.map((item,id)=>(
          <VideoComponent key={id} videoDetails={item} />
        ))
        : <div className='w-[100%]  flex justify-center font-[300]  items-center  text-[13px] 500:text-[18px] 700:text-[20px] 950:text-[25px] mt-[20px]'>
          Has not uploaded video yet
        </div>
      }
    </div>
  )
}

export default VideoParent