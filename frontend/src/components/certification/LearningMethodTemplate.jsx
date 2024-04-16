import React from 'react'
import { FaCertificate } from "react-icons/fa";

const LearningMethodTemplate = ({data}) => {
  return (
    <div className="flex flex-row gap-5 ">
            <div className="w-1/12 flex justify-center">
              <FaCertificate className="p-2 bg-theme-green text-white text-4xl rounded-md" />
            </div>
            <div>
              <h2 className="text-xl font-bold text-black mb-2">
              {data?.title}
              </h2>
              <h5 className="text-black text-lg  ">
              {data?.description}
              </h5>
            </div>
          </div>
  
  )
}
export default LearningMethodTemplate
                             