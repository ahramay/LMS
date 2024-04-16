
import { FaFacebookF } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import React, { useState } from 'react';
import thambnailForCourse from "../../assets/unsplash-web.jpg"


const Instructor = ({ data }) => {
  
  return (
    <> 
  
        <div className="m-8 flex flex-col md:flex-row gap-20 ">
        <div className="w-full md:w-1/3 flex flex-col gap-y-5  lg:col-span-1">
         <img
              decoding="async"
              className="w-full htransition duration-300 ease-in-out  h-56 rounded-md"
              src={data?.image ? data?.image : thambnailForCourse}
              alt="text"
            /> 
          </div>
      <div className="flex flex-col w-full md:w-2/3 justify-start ">
      <h3 className=" text-xl font-semibold text-dark-blue mb-2" >Marvin McKinney</h3>
      <p className="flex flex-row flex-nowrap items-center text-md text-dark-blue mb-3">Web Designer, Researcher, Instructor at Tork</p>
      <p className="flex flex-row flex-nowrap items-center text-md text-dark-blue mb-5"> Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
      <div className="flex  flex-wrap lg:flex-nowrap">
            <FaFacebookF className="p-2 m-2 text-4xl bg-black text-white rounded-full hover:bg-theme-green"/>
            <FaInstagram className="p-2 m-2 text-4xl bg-black text-white rounded-full hover:bg-theme-green" />
            <FaTwitter className="p-2 m-2 text-4xl bg-black text-white rounded-full hover:bg-theme-green" />
            </div>
        </div>
        
          </div>
       
       
    </>
  );
};
export default Instructor;
