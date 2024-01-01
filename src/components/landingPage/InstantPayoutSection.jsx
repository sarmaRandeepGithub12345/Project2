import React from "react";
import pic from "../../pictures/videoPost.png";
const InstantPayoutSection = () => {
  const topItems = [
    {
      heading :"Instant payouts",
      body:"No payment cycle, no fuss, withdraw directly to your account",
      color:"#7FC2EB"
    },
    {
      heading :"AI assist",
      body:"Automate profile building, service and content creation",
      color:"#DBD1FC"
    },

  ]
  return (
    <div className="w-[100%] flex flex-row">
      <div>
        <img src={pic} alt="" className="object-center object cover" />
      </div>

      <div className="flex flex-col">
        <div className="flex flex-row">
         {
          topItems.map((item,id)=>(
            <div className={`bg-[${item.color}]`}>
              <p>{item.heading}</p>
              <p>{item.body}</p>
            </div>
          ))
         }</div>
      </div>
    </div>
  );
};

export default InstantPayoutSection;
