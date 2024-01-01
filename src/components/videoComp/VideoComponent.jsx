import React, { useEffect, useRef, useState } from "react";
import video from "./video.mp4";
import profile from "./hawkeye.png";

import styles from "./videoComp.module.css"
import Hls from "hls.js";
// import HlsPlayer from 'react-hls-player'
const VideoComponent = ({ videoDetails }) => {
  const [playButton, setplayButton] = useState(false);
  const videoRef = useRef(null);

  //console.log(videoDetails.video);
  useEffect(() => {
    
      
    const hls = new Hls();
    hls.loadSource(videoDetails.video);
    hls.attachMedia(videoRef.current);
    hls.on(Hls.Events.MEDIA_ATTACHED, ()=>{
      videoRef.current.play();
    });
    

    
    return () => {
      
      hls.destroy();
    }
    
  }, [playButton===true])

  return (
    <div
      className="rounded-[10px] my-4 bg-[black] 1000:w-[90%] h-[450px] 450:h-[400px] w-[95%] 450:w-[80%] 600:h-[440px] 800:h-[480px] 1100:w-[80%] 1000:h-[450px] 1100:h-[480px] shadow-[5px_5px_3px_-1px_rgba(0,0,0,0.3)] flex justify-center items-center"
      onMouseEnter={(e) => {
        e.preventDefault();
        setplayButton(true);
        
      }}
      onMouseLeave={(e) => {
        e.preventDefault();
        setplayButton(false);
      }}
    >

      {playButton ? (
       <>
       <video autoPlay controls ref={videoRef} className={`cursor-pointer ${styles.videoClass}`} />
        {/* <HlsPlayer 
         src={videoDetails.video}
         autoPlay
         width="100%"
         
         controls
         className={`${styles.videoClass}`}
        /> */}
       </> 
      ) : (
        <img src={videoDetails.image} alt="" className="rounded-[10px] h-[100%] w-[100%]" />
      )} 
    </div>
  );
};

export default VideoComponent;
