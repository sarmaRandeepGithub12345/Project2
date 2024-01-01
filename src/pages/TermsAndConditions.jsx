import React from 'react'
import NavbarProfile from '../components/profileComp/NavbarProfile'
import Footer from '../components/footers/Footer'
import Terms from '../components/termsComp/Terms'

const TermsAndConditions = () => {
  return (
    <div className='w-[100%] overflow-y-scroll h-[100vh]'>
      <NavbarProfile op={{
          id: 0,
          name: "Category",
        }}/>
      <Terms/>
      <Footer/>
    </div>
  )
}

export default TermsAndConditions