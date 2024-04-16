import { useParams } from "react-router-dom";
import React from "react";
import thankyouimg from "../assets/start-online.jpg";

const Thankyou = () => {
  return (
    <>
      <div className="flex   justify-center">
        <div
          className="w-full h-[100vh] py-10 px-5 lg:py-24 lg:px-20  p-5  justify-center  bg-center bg-no-repeat bg-cover flex flex-col items-center"
          style={{ backgroundImage: `url(${thankyouimg})` }}
        >
          <div className="w-full md:w-3/4 lg:w-3/4 xl:w-1/2 bg-gray-100 flex flex-col items-center p-16 shadow-2xl">
            <h2 className="text-3xl text-center lg:text-6xl font-bold text-dark-blue mb-10">
              Thank You!
            </h2>

            <h5 className="text-dark-blue text-xl text-center mb-10  ">
              Get started with Course
            </h5>
            <a
              href="/"
              className="hover:shadow-2xl w-fit font-bold flex justify-center bg-theme-green text-white cursor-pointer  rounded-full border-solid border-0 hover:bg-dark-blue  mb-5 px-3 py-3 md:px-5 md:py-2 "
            >
              Visit Website
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Thankyou;
