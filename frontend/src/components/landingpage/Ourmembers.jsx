import React from "react";
import { IoIosArrowDroprightCircle } from "react-icons/io";



const Ourmembers = () => {
  return (
    <div className="py-10 px-5 md:py-20 md:px-20 ">
      <h2 className="text-4xl text-dark-blue md:text-6xl font-bold mb-5">
      What is <br></br>
      <span className="text-4xl text-theme-green md:text-6xl font-bold ">Lorem Ipsum?</span>
      </h2>
      <p className="text-xl mb-10">
      Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                  </p>
                  <div className="flex flex-wrap md:flex-nowrap">
                  <a className="font-bold flex items-center w-fit text-theme-green bg-light-gray cursor-pointer  rounded-full border-solid border-0 hover:text-white hover:bg-dark-blue  px-3 py-2 md:px-5 md:py-2 ">Read More<IoIosArrowDroprightCircle className="ml-1" /> </a>
                      <a className="font-bold flex items-center w-fit text-black  cursor-pointer  rounded-full border-solid border-0  hover:text-theme-green px-3 py-2 md:px-5 md:py-2">Learn More<IoIosArrowDroprightCircle className="ml-1" /></a>
                      </div>   
    </div>
  );
};

export default Ourmembers;
