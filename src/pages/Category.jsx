import React, { useEffect } from "react";
import profilePic from "../pictures/userDefault.jpeg";

import ExpertCard from "../components/categoryComp/ExpertCard";

import FilterIcon from "../pictures/icons/FilterIcon.svg";
import NavbarProfile from "../components/profileComp/NavbarProfile";
import Footer from "../components/footers/Footer";
import RatingIcon from "../pictures/icons/RatingIcon.svg";
import CommentIcon from "../pictures/icons/CommentsIcon.svg";
import VerifiedIcon from "../pictures/icons/VerifiedIcon.svg";
import axiosClient from "../utils/axios-client";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import useCommonItems from "../hooks/useCommonItems";
import Filter from "../components/filters/Filter";
import MenuPop from "../components/menuPop/MenuPop";
const Category = () => {
  const [arr, setArr] = useState([]);
  const [users, setUsers] = useState([]);
  const [op, setop] = useState({
    id: 0,
    name: "Category",
  });
  const { visible, setvisible, handleClose } = useCommonItems();

  const [priceVariable, setPriceVariable] = useState(null);
  const [rating, setRating] = useState(null);
  const [experienceVar, setExperienceVar] = useState(null);
  const [highLow, setHighLow] = useState(null);
  const fetchUsersfromDB = async () => {
    //e.preventDefault()

    if (visible) handleClose();

    const pri = "=" + priceVariable;

    try {
      const res = await axiosClient.post(
        `production/api/v1.0.1/specialist/${op.id}`,
        {
          price: priceVariable ? pri : priceVariable,
          sorting: highLow,
          rating,
        }
      );

      //console.log(res)
      setUsers(res.data.data);
    } catch (error) {}
    setPriceVariable(null);
    setExperienceVar(null);
    setRating(null);
    setHighLow(null);
  };
  useEffect(() => {
    fetchUsersfromDB();
  }, [op]);

  //console.log(priceVariable,experienceVar,rating,highLow)

  const navigate = useNavigate();
  return (
    <div className="overflow-y-scroll  bg-slate-50 flex flex-col h-[100vh]">
      <NavbarProfile
        op={op}
        setop={setop}
        arr={arr}
        setArr={setArr}
        setUsers={setUsers}
      />
      <div className="h-[100%] flex flex-col justify-between ">
        <div className="mb-[20px]">
        <div className="flex flex-col 600:flex-row px-1 400:px-5  600:px-8 800:px-12 600:items-center ">
          <div className="flex grow basis-[0%] flex-col items-stretch ">
            <div className="text-black text-[20px] 500:text-[23px] 700:text-4xl font-bold leading-10 whitespace-nowrap  mt-[20px]">
              {op.id === 0 ? "Expert" : `${op.name}`}
            </div>
            <div className="justify-center text-black text-[17px] 500:text-[18px]  700:text-xl leading-10 ">
              {users?.length} {users?.length > 1 ? "Experts" : "Expert"}
            </div>
          </div>
          <div
            onClick={(e) => {
              e.preventDefault();
              setvisible(true);
            }}
            className="justify-center h-min items-center w-fit border flex gap-2.5 px-2 py-2 cursor-pointer rounded-lg shadow-[1px_1px_3px_0px_rgba(0,0,0,0.3)] bg-[white]"
          >
            <img loading="lazy" src={FilterIcon} className="w-6" />
            <div className="text-zinc-800 text-center text-[15px]  bg-[white]">
              Filters
            </div>
          </div>
        </div>
        <div className="grid grid-cols-1 900:grid-cols-2 gap-7 px-1 400:px-5 600:px-8 800:px-12 py-2.5 justify-items-center mt-[20px]">
          {users?.map((item, id) => {
            const imgUrl = `${process.env.REACT_APP_BACKEND}${item.image}`;

            return (
              <div
                key={id}
                className="flex flex-col w-[100%] rounded-[10px]  h-fit shadow-[1px_1px_3px_0px_rgba(0,0,0,0.3)] cursor-pointer bg-[white]"
                onClick={(e) => {
                  e.preventDefault();
                  navigate(`/profile?user_id=${item.doctor_id}`);
                }}
              >
                <div className="flex flex-row ">
                  <div className="One flex justify-center items-center min-h-[100%] ">
                    <img
                      src={item.image ? imgUrl : profilePic}
                      className="w-[70px] h-[70px] 450:w-[90px] 450:h-[90px] 500:w-[130px] 500:h-[130px] 900:w-[100px] 900:h-[100px] 1000:w-[130px] 1000:h-[130px] m-3 rounded-[10px] object-cover object-center"
                      alt=""
                    />
                  </div>
                  <div className="Two w-[calc(100%-70px)] 450:w-[calc(100%-90px)] 500:w-[calc(100%-130px)] 900:w-[calc(100%-100px)] 1000:w-[calc(100%-130px)] py-3 pr-3 text-[13px] 900:text-[15px] flex flex-col justify-between">
                    <div className="flex flex-row w-[100%] justify-between">
                      <p className="Name 700:text-[15px] 900:text-[18px] font-[600]">
                        {item.first_name} {item.last_name}
                      </p>
                      <p className="from">from</p>
                    </div>
                    <div className="flex flex-row w-[100%] justify-between">
                      <p className="Profession">{item.specializaton}</p>
                      <p className="Cost font-[600]">Rs. {item.session_rate}</p>
                    </div>
                    <div className="flex flex-row w-[100%] justify-between items-center">
                      <div className="flex flex-row">
                        <img src={RatingIcon} alt="" />
                        <p className="ml-2">{item.rating}</p>
                        <img className="ml-4" src={CommentIcon} alt="" />
                        <p className="ml-2">{item.consultations}</p>
                      </div>
                      <div className=" text-[11px] 1000:text-[13px]">
                        per appointment
                      </div>
                    </div>
                    <div className="w-[100%] text-[13px] h-fit hidden 500:block 900:hidden 1000:block break-words">
                      {item.description.length > 35 ? (
                        <>{item.description.slice(0, 35)}...</>
                      ) : (
                        item.description
                      )}
                    </div>
                  </div>
                </div>
                <p className="block 500:hidden 900:block pb-3 px-3 1000:hidden text-[13px] 900:text-[15px]  break-words">
                  {item.description.length > 35 ? (
                    <>{item.description.slice(0, 35)}...</>
                  ) : (
                    item.description
                  )}
                </p>
              </div>
            );
          })}
        </div>
        </div>
        <Footer />
      </div>

      <MenuPop
        visible={visible}
        onClose={handleClose}
        values="flex justify-center items-center"
        item={
          <Filter
            priceVariable={priceVariable}
            setPriceVariable={setPriceVariable}
            rating={rating}
            setRating={setRating}
            experienceVar={experienceVar}
            setExperienceVar={setExperienceVar}
            highLow={highLow}
            setHighLow={setHighLow}
            handleSearch={fetchUsersfromDB}
            handleClose={handleClose}
          />
        }
      />
    </div>
  );
};

export default Category;
