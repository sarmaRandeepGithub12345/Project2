import React from 'react'
import NavbarProfile from '../components/profileComp/NavbarProfile'
import Footer from '../components/footers/Footer'
import BecomeExpertChild from '../components/BecomesExperts/BecomeExpertChild'

const BecomeAnExpert = () => {
  return (
    <div className='w-[100%] overflow-y-scroll h-[100vh]'>
        <NavbarProfile op={{
          id: 0,
          name: "Category",
        }}/>
        <BecomeExpertChild/>
        <Footer/>
    </div>
  )
}

export default BecomeAnExpert