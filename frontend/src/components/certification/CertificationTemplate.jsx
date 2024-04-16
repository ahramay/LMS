import React from 'react'
import { useNavigate } from 'react-router-dom'
import {IoIosArrowDroprightCircle} from "react-icons/io"
const CertificationTemplate = ({data}) => {
    const navigate=useNavigate();
  return (
        <div  onClick={()=>navigate(`/certification/${data?.id}`)} className="max-w-sm p-6 bg-theme-green border text-black border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 hover:drop-shadow-2xl cursor-pointer">
            <div>
                <h5 className="mb-2 text-2xl text-center font-bold tracking-tight text-gray-900 dark:text-white">{data?.name}</h5>
            </div>
            <p className="mb-3   font-normal">{data?.createdAt}</p>
                <div className="text-center flex justify-center">

            <a className="font-bold flex items-center bg-white text-black  cursor-pointer  rounded-full border-solid border-0 hover:bg-dark-blue   hover:text-white px-3 py-2 md:px-5 md:py-2  transition-all">Read More<IoIosArrowDroprightCircle className="ml-5" size="1.5rem" /></a>

                </div>
           
        </div>
  )
}

export default CertificationTemplate

