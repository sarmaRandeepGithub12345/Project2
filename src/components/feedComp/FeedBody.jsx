import React from 'react'

import FeedBodyTwo from './feedTwo/FeedBodyTwo'
import FeedBodyThree from './feedThree/FeedBodyThree'
import FeedBodyOne from './feedOne/FeedBodyOne'

const FeedBody = () => {
  return (
    <div className='flex flex-row'>
        <FeedBodyOne />
        <FeedBodyTwo />
        <FeedBodyThree />
    </div>
  )
}

export default FeedBody