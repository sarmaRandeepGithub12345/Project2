import React from 'react'
import LoginLeft from '../components/loginFolder/LoginLeft'
import CompleteProfileRegister from '../components/registerFolder/CompleteProfileRegister'

const CompleteProfile = () => {
  return (
    <div className='w-[100%] flex flex-row'>
      <LoginLeft/>
      <CompleteProfileRegister num={1} />
    </div>
  )
}

export default CompleteProfile