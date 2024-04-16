import React from 'react'
import thambnailForCourse from "../../assets/unsplash-web.jpg";
import { FaTag } from "react-icons/fa6";

const Checkoutitemcart = ({data}) => {

  return (
    <div className="flex flex-row items-center mb-2">
            <img
              decoding="async"
              className="w-fit mr-5 h-12"
              src={thambnailForCourse}
              alt=""
            />
            <div className="w-full">
              <h5 className="text-sm font-bold text-dark-blue mb-1">
                {data?.course?.title} 
              </h5>
            </div>
            <div className="">
              <h5 className="text-sm flex flex-row  items-center font-bold text-dark-blue mb-1">
              ${data?.course?.duration} <FaTag className="ml-2" />
              </h5>
            </div>
          </div>
  )
}

export default Checkoutitemcart