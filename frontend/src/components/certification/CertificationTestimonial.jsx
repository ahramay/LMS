import React from 'react'
import { FaStar } from "react-icons/fa";
const CertificationTestimonial = ({data}) => {
  return (
    <div className="container px-5">
        <div className="flex flex-row gap-5 mb-5 p-5 rounded-xl bg-white">
            <div className="w-full flex justify-center">
            <img
              decoding="async"
              className="w-full  cover shadow-sm "
              src={data?.url}
              alt="text"
            />
            </div>
            <div className='w-auto'>
            <h3 className="font-bold text-xl text-black  cursor-pointer   ">
              {data?.name}
            </h3>
              <h4 className="text-lg font-semibold text-black mb-2">
              {data?.expert}
              </h4>
              <h5 className="text-black text-md  ">
              {data?.review}
              </h5>
              <div className="flex flex-row gap-2 py-3 ">
              <FaStar className='text-yellow-400' /> <FaStar className='text-yellow-400' /> <FaStar className='text-yellow-400' /> <FaStar className='text-yellow-400' /> <FaStar className='text-yellow-400' />
                </div>
            </div>
          </div>
          
           
    </div>
  )
}
export default CertificationTestimonial