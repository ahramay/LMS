import React from "react";
import { IoIosArrowDroprightCircle } from "react-icons/io";
import workerimg1 from "../../assets/Mask-Group-1.svg"
import workerimg2 from "../../assets/unsplash-web.jpg"
import workerimg3 from "../../assets/engineer-servicing.jpg"

const Protectworker = () => {
  return (
    <div className="py-10 px-5 bg-light-gray md:py-20 md:px-20 ">
      <div className=" text-center">
        <h1 className="text-4xl md:text-6xl font-bold mb-20">
      
        What is <br></br>
        Lorem Ipsum?
        </h1>
      </div>
      <div className="flex flex-wrap justify-center gap-5 xl:flex-nowrap">
        <div className="w-full p-10 pt-52 bg-dark-blue xl:p-10 rounded-lg bg-top bg-no-repeat bg-cover flex flex-col justify-end" style={{backgroundImage: `url(${workerimg1})`,}}>
          <h2 className="text-3xl font-bold text-white mb-5">
          What is Lorem Ipsum?
          </h2>
          <h5 className="text-white text-lg  ">
          Lorem Ipsum is simply dummy text of the printing and typesetting industry.
          </h5>
          <div className="flex text-theme-green items-center">
            <a className="font-semibold">Read More</a>
            <IoIosArrowDroprightCircle className="ml-1" />
          </div>
        </div>
        <div className="w-full flex flex-col gap-y-5">
          <div className="flex  justify-center gap-5 h-64">
            <div className=" w-full rounded-lg h-64 bg-top bg-no-repeat bg-cover"style={{backgroundImage: `url(${workerimg2})`,}}>
              <div className="w-full p-1 sm:p-6 h-64 rounded-lg bg-black/40 flex flex-col justify-end">
              <h2 className="text-2xl font-bold text-white ">
              What is Lorem Ipsum?
              </h2>

              <div className="flex text-white items-center">
                <a className="font-semibold">Learn More</a>
                <IoIosArrowDroprightCircle className="ml-1" />
              </div>
              </div>
            </div>
            <div className="w-full bg-theme-green p-1 sm:p-6 rounded-lg flex flex-col justify-end">
              <h2 className="text-2xl font-bold text-white">
              What is Lorem Ipsum?
              </h2>
              <h5 className="text-white hidden text-lg mb-1 lg:mb-10 sm:block">
              Lorem Ipsum is simply dummy text of the printing and typesetting industry.
              </h5>
              <div className="flex text-white items-center">
                <a className="font-semibold">Learn More</a>
                <IoIosArrowDroprightCircle className="ml-1" />
              </div>
            </div>
          </div>
          <div className=" w-full rounded-lg h-72 bg-center bg-no-repeat bg-cover"style={{backgroundImage: `url(${workerimg3})`,}}>
          <div className="relative  w-full p-10 h-72 rounded-lg bg-black/40 flex flex-col justify-end">
            <h2 className="text-2xl font-bold text-white ">
            What is Lorem Ipsum?
            </h2>
            <h5 className="text-white text-lg mb-6">
            Lorem Ipsum is simply dummy text of the printing and typesetting industry.
            </h5>
            <div className="flex text-white items-center">
              <a className="font-semibold">Read More</a>
              <IoIosArrowDroprightCircle className="ml-1" />
            </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Protectworker;
