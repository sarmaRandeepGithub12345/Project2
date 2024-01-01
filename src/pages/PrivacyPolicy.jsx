import React from 'react'
import PrivacyPolicyComponent from '../components/privacyPolicycomp/PrivacyPolicyComponent'
import NavbarProfile from '../components/profileComp/NavbarProfile'
import Footer from '../components/footers/Footer'

const PrivacyPolicy = () => {
  return (
    <div className='w-[100%] overflow-y-scroll h-[100vh]'>
      <NavbarProfile op={{
          id: 0,
          name: "Category",
        }}/>
      <PrivacyPolicyComponent/>
      <Footer/>
    </div>
  )
}

export default PrivacyPolicy