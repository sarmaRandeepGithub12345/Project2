import React, { useState } from "react";
import CheckBox from "../CheckBox";

const Filter = ({handleSearch,priceVariable,setPriceVariable,rating,setRating,experienceVar,setExperienceVar,highLow,setHighLow}) => {
  const PriceArray = ["100", "300", "1000", "2000"];
  //const [priceVariable, setPriceVariable] = useState(null);

  const ratingArray = ["2", "3", "4", "5"];
  //const [rating, setRating] = useState(null)

  //const [experienceVar, setExperienceVar] = useState(null)
  const ExperienceArray = ["5 Years", "8 Years", "10 Years and more"];
  
  //const [highLow, setHighLow] = useState(null)
  const highLowArray = [
    {
      value: "price_high_to_low",
      name: "High to Low",
    },
    {
      value: "price_low_to_high",
      name: "Low to High",
    },
  ];
  const headingClass = "text-[20px] text-blue-600 font-semibold";
  const inputClass =
    "mr-[15px] border-[2px] font-[300] w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600 accent-blue-600 ";
  const parentCaseClass = "border-b-[2px] border-blue-600 mb-[20px] pb-[20px]";
  return (
    <div className="450:w-[450px] w-[95vw]  p-[20px] rounded-[20px] bg-[white] overflow-y-auto">
    <div className="grid grid-flow-row grid-cols-1 450:grid-cols-2">
      <div className={`Price ${parentCaseClass} `}>
        <p className={`${headingClass}`}>Price</p>
        {PriceArray.map((item, id) => (
          <div
          className=""
          key={id}>
         <CheckBox
           value={item}
           id={`${item}`}
           name={item}
           className={inputClass}
           checked={priceVariable===item?true:false}
           onChange={(e) => {
             setPriceVariable(item);
           }}
         />
         <label htmlFor={item}>{item}</label>
       </div>
        ))}
      </div>
      <div className={`Rating ${parentCaseClass}`}>
        <p className={`${headingClass}`}>Rating</p>
        {ratingArray.map((item, id) => (
           <div
           className=""
           key={id}>
          <CheckBox
            value={item}
            id={`${item}`}
            name={item}
            className={inputClass}
            checked={rating===item?true:false}
            onChange={(e) => {
              setRating(item);
            }}
          />
          <label htmlFor={item}>{item}</label>
        </div>
        ))}
      </div>
      <div
        className={`Experience border-b-[2px] border-blue-600 450:border-[white] mb-[20px] pb-[20px] 450:mb-[0px] 450:pb-[0px]`}
      >
        <p className={` ${headingClass}`}>Experience</p>
        {ExperienceArray.map((item, id) => (
           <div
           className=""
           key={id}>
          <CheckBox
            value={item}
            id={`${item}`}
            name={item}
            className={inputClass}
            checked={experienceVar===item?true:false}
            onChange={(e) => {
              setExperienceVar(item);
            }}
          />
          <label htmlFor={item}>{item}</label>
        </div>
        ))}
      </div>
      <div className={``}>
        <p className={`${headingClass}`}>Sort By</p>
        {highLowArray.map((item, id) => (
          <div
          className=""
          key={id}>
         <CheckBox
           value={item.value}
           id={`${item.value}`}
           name={item.value}
           className={inputClass}
           checked={highLow===item.value?true:false}
           onChange={(e) => {
             setHighLow(item.value);
           }}
         />
         <label htmlFor={item.value}>{item.name}</label>
       </div>
        ))}
      </div>
    </div>
    <button onClick={handleSearch} className="bg-blue-600 text-[white] font-semibold text-[13px] p-3 rounded-[10px] mt-[20px]">Apply Filters</button>
    </div>
  );
};

export default Filter;
