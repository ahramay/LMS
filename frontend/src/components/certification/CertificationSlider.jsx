import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import CertificationTestimonial from "./CertificationTestimonial";
import {testimonialSliderContent} from "../../constant/certificationdata"
import Singlecourseheroimg from "../../assets/singlecourse.png"



  

function CertificationSlider() {
  
    var settings = {
        dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 3,
      slidesToScroll: 1,
     
      responsive: [
        {
          breakpoint: 1280,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 1,
          },
        },
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
          },
        },
        {
          breakpoint: 640,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
          },
        },
      ],
    };
    return (
        // <div className="w-full  py-10 px-5   lg:py-24 lg:px-20  p-5  >
         
      <div className="w-full  overflow-hidden py-10 md:py-20  bg-center bg-no-repeat bg-cover" style={{backgroundImage: `url(${Singlecourseheroimg})`,}}>
         <h2 className="text-4xl text-white text-center md:text-6xl font-bold mb-5 ">
            What is Lorem Ipsum?
          </h2>
          <p className=" text-2xl text-white text-center pb-20">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry.
          </p>
        <Slider {...settings} className="flex items-center mx-0 px-0 lg:px-20">
          {
            testimonialSliderContent.map(item=><CertificationTestimonial  data={item} key={item?.name}/>)
          }
        </Slider>
      </div>
    );
  }

export default CertificationSlider;
