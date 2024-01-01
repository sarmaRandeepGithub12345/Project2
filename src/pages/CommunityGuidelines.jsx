import React from 'react';
import NavbarProfile from '../components/profileComp/NavbarProfile';
import Footer from '../components/footers/Footer';
import Guidelines from '../components/communityGuidelinesComp/Guidelines';

function CommunityGuidelines() {
  return (
    <div className='w-[100%] overflow-y-scroll h-[100vh]'>
      <NavbarProfile op={{
          id: 0,
          name: "Category",
        }}/>
      <Guidelines/>
      <Footer/>
  </div>
  )
}

export default CommunityGuidelines