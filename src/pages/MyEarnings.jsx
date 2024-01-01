import Main from "../components/MyEarningsComp/Main";
import Navbar from "../components/businessComp/Navbar";
import React from 'react'

function MyEarnings() {
  return (
    <div className="w-full h-[100vh] bg-gray-50 ">
      <Navbar />
      <Main />
    </div>
  );
}

export default MyEarnings;
