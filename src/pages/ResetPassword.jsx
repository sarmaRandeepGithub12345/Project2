import React from 'react'
import LoginLeft from '../components/loginFolder/LoginLeft'
import ResetPasswordPage from '../components/registerFolder/ResetPasswordPage'

const ResetPassword = () => {
  return (
    <div className='w-[100%] flex flex-row'>
      <LoginLeft/>
      <ResetPasswordPage num={1} />
    </div>
  )
}

export default ResetPassword