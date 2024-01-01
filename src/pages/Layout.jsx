import React, { useEffect, useState } from 'react'
import { Outlet } from 'react-router-dom';
import HelpertLoad from '../components/helpertLoad/HelpertLoad';

const Layout = () => {
    const [loading, setloading] = useState(false);

    useEffect(() => {
      window.onload=()=>{
        setloading(true)
        setTimeout(() => {
         
          setloading(false)
        }, 3000); 
      }
    }, []) 
    
   
  return (
    <>
        {loading ? <HelpertLoad />:<Outlet/>}
    </>
  )
}

export default Layout