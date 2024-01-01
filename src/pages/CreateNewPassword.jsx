import React from 'react'
import LoginLeft from '../components/loginFolder/LoginLeft'
import CreateNewPasswordLeft from '../components/registerFolder/CreateNewPasswordLeft'

const CreateNewPassword = () => {
  return (
    <div className='w-[100%] flex flex-row'>
      <LoginLeft/>
      <CreateNewPasswordLeft num={1} />
    </div>
  )
}

export default CreateNewPassword