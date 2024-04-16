import React from "react";
import { IoIosArrowDroprightCircle } from "react-icons/io";
import firstimg from "../../assets/choice_ISEA_2023-20231204-202109_-1024x681.jpg";
import secondimg from "../../assets/Boardroom_Image.webp";
import thirdimg from "../../assets/heat-clothes-off.jpg";
import fourthimg from "../../assets/dark-tab.webp";
import fifthimg from "../../assets/people.jpg";


const Industrynews = () => {
  return (
    <div className="py-10 px-5 md:py-20 md:px-20 ">
      <h1 className="text-4xl text-dark-blue md:text-6xl font-bold mb-20">
      What is Lorem Ipsum?
      </h1>
      <div className="m-8 grid grid-cols-1 xl:grid-cols-4 gap-10  ">
        <div className="w-full flex flex-col justify-evenly gap-y-5">
          <div className="w-full">
            <a href="https://flowbite.com" className="flex items-center">
              <img
                src={firstimg}
                className="w-full rounded-lg mb-5"
                alt=" Logo"
              />
            </a>
            <h5 className=" text-sm w-fit font-bold mb-2 text-theme-green px-4 py-1 bg-light-gray rounded-full">
            Lorem Ipsum
            </h5>
            <h2 className="text-2xl text-dark-blue font-bold  ">
            Lorem Ipsum is simply dummy text of the printing and typesetting industry.
            </h2>

            
          </div>
          <div className="w-full">
            <a href="https://flowbite.com" className="flex items-center">
              <img
                src={secondimg}
                className="w-full rounded-lg mb-5"
                alt=" Logo"
              />
            </a>
            <h5 className=" text-sm w-fit font-bold mb-2 text-theme-green px-4 py-1 bg-light-gray rounded-full">
            Lorem Ipsum
            </h5>
            <h2 className="text-2xl text-dark-blue font-bold  ">
            Lorem Ipsum is simply dummy text of the printing and typesetting industry.
            </h2>

            
          </div>
        </div>
        <div className="w-full rounded-lg col-start-0 col-end-0 xl:col-start-2 xl:col-end-4 ">
        <a href="https://flowbite.com" className="flex items-center">
              <img
                src={thirdimg}
                className="w-full h-full object-cover rounded-lg mb-5"
                alt=" Logo"
              />
            </a>
            <h5 className=" text-sm w-fit font-bold mb-2 text-theme-green px-4 py-1 bg-light-gray rounded-full">
            Lorem Ipsum
            </h5>
            <h2 className="text-2xl text-dark-blue font-bold  ">
            Lorem Ipsum is simply dummy text of the printing and typesetting industry.
            </h2>

         
        </div>
        <div className="w-full flex flex-col justify-evenly gap-y-5">
        <div className="w-full">
            <a href="https://flowbite.com" className="flex items-center">
              <img
                src={fourthimg}
                className="w-full rounded-lg mb-5"
                alt=" Logo"
              />
            </a>
            <h5 className=" text-sm w-fit font-bold mb-2 text-theme-green px-4 py-1 bg-light-gray rounded-full">
            Lorem Ipsum
            </h5>
            <h2 className="text-2xl text-dark-blue font-bold  ">
            Lorem Ipsum is simply dummy text of the printing and typesetting industry.
            </h2>

           
          </div>
          <div className="w-full">
            <a href="https://flowbite.com" className="flex items-center">
              <img
                src={fifthimg}
                className="w-full rounded-lg mb-5"
                alt=" Logo"
              />
            </a>
            <h5 className=" text-sm w-fit font-bold mb-2 text-theme-green px-4 py-1 bg-light-gray rounded-full">
            Lorem Ipsum
            </h5>
            <h2 className="text-2xl text-dark-blue font-bold  ">
            Lorem Ipsum is simply dummy text of the printing and typesetting industry.
            </h2>

          </div>
        </div>
      </div>
    </div>
  );
};

export default Industrynews;
