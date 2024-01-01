import React, { useState } from 'react';
import LeftImage from "../../pictures/Consulting-cuate 1.svg";
import RightImage from "../../pictures/Online Review-cuate 1.svg";
import CentreImage from "../../pictures/Typing-cuate 1.svg";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from 'react-slick';
import "./LoginCarousel.module.css"
const imgCarousel = [LeftImage, CentreImage, RightImage];

const SliderCarousel = () => {
  const [imageIndex, setImageIndex] = useState(0);

  const settings = {
    dots: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    initialSlide: 1,
    autoplay: true,
    autoplaySpeed: 5000, 
    beforeChange: (current, next) => setImageIndex(next),
    customPaging: (i) => (
        <div
          style={{
            width: i === imageIndex % 6 ? '28px' : '8px',
            height: '8px',
            borderRadius:i === imageIndex % 6 ? '20px' :'50%' ,
            background: i === imageIndex % 6 ? '#fff' : '#004BC7', 
            marginRight: '5px', 
          }}
        ></div>
      ),
  };

  return (
    <div className="carousel-container transition-smooth z-[1] w-[100%] box-border 900:h-[500px] h-[250px] 600:h-[300px] ">
      <Slider {...settings}>
        {imgCarousel.map((item, index) => (
          <div key={index} className={`cursor-pointer transform duration-300   box-border ${index !== (imageIndex + 1) % 3 ? "my-[80px]" : ""}`}>
            <img
              className={`m-auto  box-border  rounded-[5px]  transform duration-300 ${index === (imageIndex + 1) % 3 ? "h-[420px] w-[420px]" : "h-[100px] w-[50px] 900:w-[420px] 900:h-[310px]"}`}
              src={item}
              alt={`Slide ${index}`}
            />
          </div>
        ))}
      </Slider>

      <style>{`
        .carousel-container {
          position: relative;
        }

        
      `}</style>
    </div>
  );
}

export default SliderCarousel;
