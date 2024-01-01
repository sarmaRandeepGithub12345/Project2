import React from 'react'
import LoginLeft from '../components/loginFolder/LoginLeft'
import LoginRight from '../components/loginFolder/LoginRight'

const Login = () => {
  return (
    <div className='w-[100%] flex flex-row'>
      <LoginLeft/>
      <LoginRight num={1} />
    </div>
  )
}

export default Login