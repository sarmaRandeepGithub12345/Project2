import { useEffect, useState } from "react";
import NavbarProfile from "../components/profileComp/NavbarProfile";
import { TabPanelComp } from "../components/tabpanel/TabPanelComp";
import portfolioLight from "../components/profileComp/pictures/portfolioLight.png";
import portfolioBlue from "../components/profileComp/pictures/portfolioBlue.png";
import reviewsBlue from "../components/profileComp/pictures/reviewsBlue.png";
import reviewsLight from "../components/profileComp/pictures/reviewsLight.png";
import videoBlue from "../components/profileComp/pictures/videoBlue.png";
import videoLight from "../components/profileComp/pictures/videoLight.png";
import PortfolioParent from "../components/profileComp/PortfolioParent";
import VideoParent from "../components/profileComp/VideoParent";
import ReviewsParent from "../components/profileComp/ReviewsParent";
import Footer from "../components/footers/Footer";
import { useLocation } from "react-router-dom";
import BasicInfo from "../components/profileComp/commonPro/BasicInfo";
import axiosClient from "../utils/axios-client";
import Loader from "../components/helpertLoad/Loader";
const Profile = () => {
  let { search } = useLocation();
  const query = new URLSearchParams(search);
  const [loading, setLoading] = useState(false);
  const [profileUser, setprofileUser] = useState(null);
  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const resp = await axiosClient.post(
          "production/api/v1.0.1/specific-user-profile",
          {
            user_id: query.get("user_id"),
          }
        );
        //console.log(resp.data.data);
        setprofileUser(resp.data.data);
      } catch (error) {}
      setLoading(false);
    };
    fetchData();
  }, []);
  useEffect(() => {
    document.title = "Profile";
  }, []);

  const options = [
    {
      text: "Portfolio",
      iconLight: portfolioLight,
      iconBlue: portfolioBlue,
      childComp: <PortfolioParent profileUser={profileUser} />,
    },
    {
      text: "Videos",
      iconLight: videoLight,
      iconBlue: videoBlue,
      childComp: <VideoParent />,
    },
    {
      text: "Reviews",
      iconLight: reviewsLight,
      iconBlue: reviewsBlue,
      childComp: <ReviewsParent />,
    },
  ];
 
  return (
    <div className="w-[100%] bg-[#f1f6ff] overflow-y-scroll h-[100vh] flex flex-col items-center">
      <NavbarProfile
        op={{
          id: 0,
          name: "Category",
        }}
      />
      {loading ? (
        <Loader />
      ) : (
        <BasicInfo
          loading={loading}
          profileUser={profileUser}
          loadingComp={loading}
        />
      )}
      {loading ? <Loader /> : <TabPanelComp num={1} options={options} />}

      <Footer />
    </div>
  );
};
export default Profile;
