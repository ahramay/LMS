import React from 'react'
import {IoIosArrowDroprightCircle} from "react-icons/io"

const OusserviceTemplate = ({data}) => {
  return (
    <div className="flex flex-col justify-start w-full">
        <hr className="w-1/6 text-theme-green font-semibold border-t-2 mb-5"></hr>
        <h2 className="text-3xl font-bold text-white mb-2">
         {data?.title}
        </h2>
        {
            data?.eventDateBool && (
                <h5 className="text-lg font-bold text-white mb-5">
                   {data?.eventDate}
                </h5>
            )
        }
        <div className="flex text-theme-green items-center">
          <a className="font-semibold">{data?.subTitle}</a>
          <IoIosArrowDroprightCircle className="ml-1" />
        </div>
    </div>
  )
}
export default OusserviceTemplate