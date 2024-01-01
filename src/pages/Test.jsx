import React, { useState } from 'react'
import SliderCarousel from '../components/slider/SliderCarousel'
import Filter from '../components/filters/Filter'

const Test = () => {
    const [videoUrl, setVideoUrl] = useState()
    const handleChange=(e)=>{
        setVideoUrl(e.target.value)

    }
  return (
    <div className=''>
       <Filter/>
    </div>
  )
}

export default Test