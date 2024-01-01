import React from 'react'
import NavbarProfile from '../components/profileComp/NavbarProfile'
import Footer from '../components/footers/Footer'
import ExpertSearch from '../components/expertSearchComp/ExpertSearch'

const SearchExperts = () => {
  return (
    <>
      <NavbarProfile op={{
          id: 0,
          name: "Category",
        }}/>
    <ExpertSearch/>
      <Footer/>
    </>
  )
}

export default SearchExperts