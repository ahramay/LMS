import React from "react";
import {IoIosArrowDroprightCircle} from "react-icons/io"
const Herobanner = () => {
  return (
      <div className="relative h-[100vh] md:h-[80vh] py-20">
          <div className="absolute inset-0 overflow-hidden">
              <video className="w-full h-full object-cover" autoPlay muted loop src="https://assets.mixkit.co/videos/preview/mixkit-set-of-plateaus-seen-from-the-heights-in-a-sunset-26070-large.mp4"></video>
          </div>
          <div className="absolute inset-0 flex items-center justify-center py-20">
              <div className="text-white text-center">
                  <h1 className="text-6xl font-bold">
                  Lorem Ipsum
                  </h1>
                  <p className="text-xl mt-4">
                  Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                  </p>
                  <div className="mt-6 pt-4 flex flex-col gap-4 justify-center align-middle items-center md:flex-row">
                      <a className="font-bold flex items-center bg-theme-green text-white  cursor-pointer  rounded-full border-solid border-0 hover:bg-dark-blue  px-3 py-2 md:px-5 md:py-2 ">Learn More <IoIosArrowDroprightCircle className="ml-5" size="1.5rem"/></a>
                      <a className="font-bold flex items-center text-black  bg-white cursor-pointer  rounded-full border-solid border-0 hover:bg-theme-green hover:text-white px-3 py-2 md:px-5 md:py-2">Read More<IoIosArrowDroprightCircle className="ml-5" size="1.5rem" /></a>
                  </div>
              </div>
          </div>
      </div>
  );
};
export default Herobanner;