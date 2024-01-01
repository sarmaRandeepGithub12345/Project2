import React, { useState } from 'react'

import LeftImage from "../../pictures/landing/LeftImage.png";
import RightImage from "../../pictures/landing/RightImage.png";
import CentreImage from "../../pictures/landing/CentreImage.png";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from 'react-slick';
const Images = [
  {
    id: 1,
    src: LeftImage,
    alt: "Image 1",
    title: "Lamborghini Huracan Performante",
    description:
      "The Huracán Performante has reworked the concept of super sports cars and taken the notion of performance to levels never seen before.",
  },
  {
    id: 2,
    src: CentreImage,
    alt: "Image 1",
    title: "Lamborghini Huracan Performante",
    description:
      "The Huracán Performante has reworked the concept of super sports cars and taken the notion of performance to levels never seen before.",
  },
];
const imgCarousel = [LeftImage, CentreImage, RightImage,LeftImage, CentreImage, RightImage];


const SliderCarousel = () => {
  const [imageIndex, setImageIndex] = useState(0);

  const settings = {
    dots: false,
    infinite: true,
    speed: 1000,
    slidesToShow: 3,
    slidesToScroll: 1,
    
    
    autoplay: true,
    autoplaySpeed: 500,
    prevArrow: <CustomPrevArrow />,
    nextArrow: <CustomNextArrow />,
    beforeChange: (current, next) => setImageIndex(next),

  };
  function CustomPrevArrow(props) {
    const { onClick } = props;
    return (
      <button className=" carousel-arrow carousel-arrow-prev text-[#000000] text-[90px] absolute top-[30%] z-[1] box-border border-2 border-[black]  font-bold border-dashed " onClick={onClick}>
        {'<'}
      </button>
    );
  }

  function CustomNextArrow(props) {
    const { onClick } = props;
    return (
      <button className="carousel-arrow carousel-arrow-next text-[black] text-[90px] absolute top-[30%] right-[0%] box-border border-2 border-[#000000] border-dashed drop-shadow-xl " onClick={onClick}>
        {'>'}
      </button>
    );
  }

  return (
    <div className="carousel-container transition-smooth z-[1] w-[100%] box-border  h-[265px] 600:h-[300px]  900:h-[500px] ">
      <Slider {...settings}>
        {imgCarousel.map((item, index) => (
          <div key={index} className={`cursor-pointer transform duration-300   box-border ${index !== (imageIndex+1)%6 ?"my-[80px]":""}`}>
            <img className={`m-auto  box-border  rounded-[5px]  transform duration-700 ${index === (imageIndex+1)%6 ?" h-[265px] 600:h-[300px] w-[150px] 900:h-[500px] 900:w-[260px]":"h-[120px] w-[70px] 900:w-[150px] 900:h-[310px]"}`}  src={item} alt={`Slide ${index}`}  />
          </div>
        ))}
      </Slider>

      <style >{`
        .carousel-container {
          position: relative;
        }

        .carousel-arrow {
          position: absolute;
          top: 50%;
          transform: translateY(-50%);
          background-color: transparent;
          color: #fff;
          border: none;
          font-size: 18px;
          cursor: pointer;
          z-index: 1;
        }

        .carousel-arrow-prev {
          left: 10px;
          
        }

        .carousel-arrow-next {
          right: 10px;
        }
      `}</style>
    </div>
  );
}

export default SliderCarousel;