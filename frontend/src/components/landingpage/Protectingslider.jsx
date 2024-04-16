import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ProtectingSlide from "./ProtectingSlide";
import {protectingSliderContent} from "../../constant/images"
function Arrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
       
        style={{ ...style, display: "block", background: "red" }}
        onClick={onClick}>
            
      </div>
    );
  }  

function Protectingslider() {
  
    var settings = {
        dots: false,
        nextArrow: <Arrow />,
      prevArrow: <Arrow />,
      infinite: true,
      speed: 500,
      slidesToShow: 7,
      slidesToScroll: 1,
      initialSlide: 0,
     
      responsive: [
        {
          breakpoint: 1280,
          settings: {
            slidesToShow: 5,
            slidesToScroll: 1,
          },
        },
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 4,
            slidesToScroll: 1,
          },
        },
        {
          breakpoint: 640,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
          },
        },
      ],
    };
    return (
      <div className="w-full bg-light-gray overflow-hidden py-10 md:py-20 ">
        <Slider {...settings} className="flex items-center -mx-10">
          {
            protectingSliderContent.map(item=><ProtectingSlide data={item} key={item?.title}/>)
          }
        </Slider>
      </div>
    );
  }

export default Protectingslider;
