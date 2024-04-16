import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css"; 
import BrandlogoTemplate from "./BrandlogoTemplate";
import {brandlogoData} from "../../constant/images"
import {brandlogoData1} from "../../constant/images"
import {brandlogoData2} from "../../constant/images"

 class Brandlogos extends Component {
      render() {
        const settings = {
          dots: false,
          infinite: true,
          slidesToShow: 7,
          slidesToScroll: 1,
          autoplay: true,
          speed: 8000,
          autoplaySpeed: 500,
          cssEase: "linear",
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
        const settings1 = {
            dots: false,
            infinite: true,
            slidesToShow: 7,
            slidesToScroll: 1,
            autoplay: true,
            speed: 10000,
            autoplaySpeed: 500,
            cssEase: "linear",
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
          const settings2 = {
            dots: false,
            infinite: true,
            slidesToShow: 7,
            slidesToScroll: 1,
            autoplay: true,
            speed: 12000,
            autoplaySpeed: 500,
            cssEase: "linear",
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
          <div className="w-full overflow-hidden">
            <Slider {...settings} className="flex items-center">
          {
            brandlogoData.map(item=><BrandlogoTemplate data={item} key={item?.id}/>)
          }
        </Slider>
            <Slider {...settings1} className="flex items-center py-12">
            {
            brandlogoData1.map(item=><BrandlogoTemplate data={item} key={item?.id}/>)
          }
             
            </Slider>
            <Slider {...settings2} className="flex items-center">
            {
            brandlogoData2.map(item=><BrandlogoTemplate data={item} key={item?.id}/>)
          }
            </Slider>
          </div>
        );
      };
    };

    export default Brandlogos;
