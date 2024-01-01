import RatingIcon from "../../pictures/icons/RatingIcon.svg";
import CommentIcon from "../../pictures/icons/CommentsIcon.svg";
import VerifiedIcon from "../../pictures/icons/VerifiedIcon.svg";
import { useNavigate } from "react-router-dom";
import person from "../../pictures/defaultProfileNoBG.png";
import profilePic from "../../pictures/userDefault.jpeg";
const ExpertCard = ({ expertInfo }) => {
  const navigate = useNavigate();
  //console.log(expertInfo)
  const handleClick = (e) => {
    e.preventDefault();
    navigate(`/profile?user_id=${expertInfo.doctor_id}`);
  };

  return (
    <div
      className="cursor-pointer 
        w-[90%] text-[12px] 450:text-[15px] 900:text-[18px] 1100:text-[25px] font-[300] mb-[20px]"
      onClick={handleClick}
    >
      <img
        //loading="lazy"
        src={
          expertInfo.image != null
            ? `${process.env.REACT_APP_BACKEND}${expertInfo?.image}`
            : profilePic
        }
        alt={expertInfo.first_name}
        className="aspect-square   justify-center items-center overflow-hidden w-[100%] object-center object-cover rounded-[20px]"
      />
      <div className="mt-[10px]">
        <h3 className="font-[500] 900:font-semibold text-[18px] 1100:text-[25px]">
          {expertInfo.first_name} {expertInfo.last_name}
        </h3>
        <h5 className="text-[15px] 1100:text-[20px]">
          {expertInfo?.specializaton}{" "}
        </h5>
      </div>
      <div className="flex gap-4 items-center ">
        <div className="flex items-center gap-0.5">
          <img src={RatingIcon} alt="" className="w-[30px]" />
          <p className="text-[20px]">{expertInfo.rating}</p>
        </div>
        <div className="flex items-center gap-0.5">
          <img src={CommentIcon} alt="" className="w-[25px]" />
          <p className="text-[20px]">{expertInfo.consultations}</p>
        </div>
      </div>
    </div>
  );
};

export default ExpertCard;
