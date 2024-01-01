import React, { useEffect, useState } from "react";
import profileLogo from "../../pictures/helpert.png";
import { FiSearch } from "react-icons/fi";
import HamburgerIcon from "../../pictures/icons/HamburgerIcon.svg";
import { useNavigate } from "react-router-dom";
import axiosClient from "../../utils/axios-client";
import { TiArrowSortedUp } from "react-icons/ti";
import useCommonItems from "../../hooks/useCommonItems";
import MenuPop from "../menuPop/MenuPop";
import SiteUnderConst from "../landingPage/SiteUnderConst";
const OptionMenuItem =({arr,setop,handleClose})=>{
   return (
    <div className="w-fit h-fit p-2 bg-[white] rounded-[10px] mt-[50px] 700:mt-[60px] 1000:mt-[70px] ml-[20px] 280:ml-[30px] 350:ml-[60px] 1000:ml-[130px]">
    <div className="text-[15px] w-[250px] h-[300px] overflow-y-auto bg-[white]  p-2 CategoryMenu">
       {
        arr?.map((item,id)=>(
          <p  key={id} onClick={e=>{
           
            e.preventDefault()
            
            setop(item)
            handleClose()
          }} className="shadow-[1px_1px_3px_0px_rgba(0,0,0,0.3)] py-2 hover:bg-blue-600 hover:text-[white] pl-2 rounded-[10px] mb-2 cursor-pointer text-blue-600 ">
           {item.name}
          </p>
        ))
       }
    </div>
    </div>
   )
}
const NavbarProfile = ({ op, setop, arr, setArr, setUsers }) => {
  const navigate = useNavigate();

  const [checkRouteOfPage, setCheckRouteOfPage] = useState(false);
  useEffect(() => {
    setCheckRouteOfPage(window.location.href.toString().includes("category"));
  }, []);
  const handleClick = (e) => {
    e.preventDefault();
    navigate("/");
  };
  const [arrowController, setarrowController] = useState(false);
  const {visible , setvisible , handleClose} = useCommonItems()
  const {visible:visible2 , setvisible:setvisible2 , handleClose:handleClose2} = useCommonItems()
  const [searchText, setSearchText] = useState("");
  const handleSearchCategories = async (e) => {
    e.preventDefault();
    setvisible(true)
    if(arrowController){
      setarrowController(false)
      return;
    }
    if (window.location.href.toString().includes("category")) {
      setarrowController(true)
      try {
        const res = await axiosClient.get(
          "production/api/v1.0.1/specializations"
        );
        setArr([{
          id: 0,
          name: "Category",
        },...Array.from(res.data.data)]);
      } catch (error) {
        console.log(error);
      }
    } else {
      navigate("/category");
    }
  };
  const handleSearchText = async (e) => {
    e.preventDefault();

    try {
      const res = await axiosClient.get(
        `production/api/v1.0.1/specialist?q=${searchText}`
      );
      setUsers(res.data.data);
    } catch (error) {}
  };
  return (
    <div className="sticky bg-[white] top-[0] z-[10] w-[100%] flex flex-row items-center py-[8px] 1000:p-3 shadow-[1px_1px_3px_0px_rgba(0,0,0,0.3)] justify-between ">
      <div className="First flex flex-row items-center ">
        <img
          src={profileLogo}
          alt=""
          className="1000:w-[40px] 1000:h-[40px] w-[30px] mx-[10px] cursor-pointer"
          onClick={handleClick}
        />
        <p
          className="font-semibold text-[17px] 1000:text-[20px] cursor-pointer"
          onClick={handleClick}
        >
          Helpert
        </p>
        {/* {checkRouteOfPage ? (
          <select
            defaultValue={JSON.stringify(op)}
            name="countries"
            id="countries"
            className="font-[300] text-[13px] 1000:text-[15px] p-1 ml-[10px] cursor-pointer 350:w-fit w-[80px] appearance-none border rounded px-3 py-2 focus:outline-none focus:shadow-outline-blue focus:border-blue-300"
            onClick={handleSearchCategories}
            onChange={(e) => {
              setop(JSON.parse(e.target.value));
              //setop(e.target.value)
            }}
          >
            <option
              value={JSON.stringify({
                id: 0,
                name: "Category",
              })}
              className=""
            >
              {op.name}
            </option>
            {arr?.map((item, id) => (
              <option className="" key={id} value={JSON.stringify(item)}>
                {item.name}
              </option>
            ))}
          </select>
        ) : (
          <p
            className="font-[300] text-[13px] 1000:text-[15px] ml-[20px] cursor-pointer"
            onClick={(e) => {
              e.preventDefault();
              navigate("/category");
            }}
          >
            Category
          </p>
        )} */}
        <div
          className="font-[300] text-[9px] 400:text-[13px] flex flex-row items-center ml-[20px] cursor-pointer relative text-[#0261FE]"
          onClick={handleSearchCategories}
        >
          <span className="font-[500]">{op.name}</span>
          <span>
            <TiArrowSortedUp className={` transform duration-300 ml-[5px] text-[20px] 400:text-[25px] ${visible?"rotate-[180deg]":""}`} />
          </span>
        </div>
      </div>
      <div
        className="Second bg-[#ebebeb] 700:flex flex-row items-center justify-between w-[30%] 1000:w-[40%] p-3 hidden rounded-[10px]"
        onClick={async (e) => {
          e.preventDefault();
          if (!window.location.href.toString().includes("category"))
            navigate("/category");
          else {
            if (op.id !== 0) {
              setop({
                id: 0,
                name: "Category",
              });
            }
          }
        }}
      >
        <input
          type="text"
          className="bg-[#ebebeb]  outline-none  text-[12px] w-[100%]"
          placeholder="Looking for Specialists"
          onChange={(e) => {
            e.preventDefault();
            setSearchText(e.target.value.toLowerCase());
            handleSearchText(e);
          }}
          //onKeyPress={handleSearchText}
          value={searchText}
        />
        <FiSearch className="text-[grey] mx-2 cursor-pointer" />
      </div>
      <div className="mr-[4px] 500:mr-[8px] 700:mr-[0px] flex flex-row items-center gap-2 500:gap-3 900:gap-4 text-[13px] 1000:text-[15px] font-[500] 900:font-semibold ">
        <input
          type="button"
          value="Login"
          onClick={e=>{
            e.preventDefault()
            setvisible2(true)
          }}
          className="text-blue-600 cursor-pointer text-center h-fit  450:block hidden items-center border bg-white self-stretch grow px-[10px] py-[7px] 1000:px-5 1000:py-2.5 rounded-lg border-solid border-blue-600"
        />
        <input
          type="button"
          value="Sign Up"
          onClick={e=>{
            e.preventDefault()
            setvisible2(true)
          }}
          className="text-white cursor-pointer text-center h-fit  450:block hidden items-center border bg-blue-600 self-stretch grow px-[10px] py-[7px] 1000:px-5 1000:py-2.5 rounded-lg border-solid border-blue-600"
        />
        <img
          loading="lazy"
          src={HamburgerIcon}
          className="aspect-square object-contain object-center w-6 overflow-hidden self-center block 450:hidden max-w-full"
        />
      </div>
      <MenuPop 
      visible={visible} 
      onClose={handleClose} 
       
      values=""
      item={<OptionMenuItem handleClose={handleClose} setop={setop} arr={arr}/>}
      />
      <MenuPop
        visible={visible2}
        onClose={handleClose2}
        values="flex justify-center items-center"
        item={<SiteUnderConst onClose={handleClose2} />}
      />
    </div>
  );
};

export default NavbarProfile;
