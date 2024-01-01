import React from 'react'
import FeedPageProfileWidget from './FeedPageProfileWidget'
import FeedThreeSecond from './FeedThreeSecond'

const FeedBodyThree = () => {
  return (
    <div className='w-[23%] flex items-center flex-col'>
        <FeedPageProfileWidget/>
        <FeedThreeSecond/>

    </div>
  )
}

export default FeedBodyThree