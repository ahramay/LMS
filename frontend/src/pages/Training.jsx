import React from "react";
import Coursescard from "../components/coursescard/Coursescard"

const Training = () => {
  return (
    <>
      <div className="w-full rounded-lg px-5  lg:px-20 md:col-span-8 ">
      <h2 className="font-bold text-3xl text-dark-blue mb-5 ">Course Library</h2>
      <p className="text-xl mb-5">
       Making the workplace safer and smarter</p>
      <Coursescard/>
    </div>
    </>
  ); 
};

export default Training;

