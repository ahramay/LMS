import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css"; 

 class CertificateLogo extends Component {

    
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
              <div className="container px-5">
              <img decoding="async"  className="w-32 h-20 " src="https://safetyequipment.org/wp-content/uploads/2022/10/kimberly-clark-1.svg" alt="kimberly-clark" />
              </div>
              <div className="container px-5">
              <img decoding="async"  className="w-32 h-20" src="https://safetyequipment.org/wp-content/uploads/2022/10/Group-312.svg" alt="Group 312" />
              </div>
              <div className="container px-5">
              <img decoding="async"  className="w-32 h-20" src="https://safetyequipment.org/wp-content/uploads/2022/10/svgxmlbase64PHN2ZyB3aWR0aD0iMTgwIiBoZWlnaHQ9IjQ2IiB2aWV3Qm94PSIwIDAgMTgwIDQ2IiBmaWxsPSJub25lIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPjxwYXR-1.svg" alt="svg+xml;base64,PHN2ZyB3aWR0aD0iMTgwIiBoZWlnaHQ9IjQ2IiB2aWV3Qm94PSIwIDAgMTgwIDQ2IiBmaWxsPSJub25lIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPjxwYXR" />
              </div>
              <div className="container px-5">
              <img decoding="async" className="w-32 h-20" src="https://safetyequipment.org/wp-content/uploads/2022/11/magdin.svg" alt="magdin" />
              </div>
              <div className="container px-5">
              <img decoding="async" className="w-32 h-20" src="https://safetyequipment.org/wp-content/uploads/2022/10/Group-259.svg" alt="Group 259" />
              </div>
              <div className="container px-5">
              <img decoding="async" className="w-32 h-20" src="https://safetyequipment.org/wp-content/uploads/2022/10/Group-295.svg" alt="Group 295" />
              </div>
              <div className="container px-5">
              <img decoding="async" className="w-32 h-20" src="https://safetyequipment.org/wp-content/uploads/2022/10/Group-262.svg" alt="Group 262" />
              </div>
              <div className="container px-5">
              <img decoding="async" className="w-32 h-20" src="https://safetyequipment.org/wp-content/uploads/2022/10/layer1.svg" alt="layer1" />
              </div>
            </Slider>
          
            
          </div>
        );
      };
    };

    export default CertificateLogo;
