import React from 'react'
import LoginLeft from '../components/loginFolder/LoginLeft'
import LoginRight from '../components/loginFolder/LoginRight'
import RegisterRight from '../components/registerFolder/RegisterRight'

const Register = () => {
  return (
    <div className='w-[100%] flex flex-row'>
      <LoginLeft/>
      <RegisterRight num={1} />
    </div>
  )
}

export default Register