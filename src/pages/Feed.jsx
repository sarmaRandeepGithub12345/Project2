import React from "react";
import FeedHeader from "../components/feedComp/FeedHeader";
import FeedBody from "../components/feedComp/FeedBody";

const Feed = () => {
  return (
    <div className="w-[100%] min-h-[100vh] bg-[#F6F9FB]">
      <FeedHeader />
      <FeedBody/>
    </div>
  );
};

export default Feed;
