import React from 'react'
import FeedSearch from './FeedSearch'
import CommonObjects from './CommonObjects'

const FeedBodyTwo = () => {
  return (
    <div className='w-[54%] flex flex-col items-center'>
      <FeedSearch/>
      <div className='bg-[#999999] w-[90%] mt-[25px] h-[1px]'></div>
      <CommonObjects heading="Recommended Experts" />
      <CommonObjects heading="Top Experts near you" />
    </div>
  )
}

export default FeedBodyTwo