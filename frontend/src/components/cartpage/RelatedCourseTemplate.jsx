
import React, { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import thambnailForCourse from "../../assets/unsplash-web.jpg";
import { PiGraduationCap } from "react-icons/pi";
import { CiDollar } from "react-icons/ci";
import { MdMenuBook } from "react-icons/md";


const RelatedCourseTemplate = ({data}) => {
  const navigation = useNavigate();

  const location = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);
  return (
    <div
    className="flex  cursor-pointer flex-col border hover:shadow-2xl rounded-md justify-start w-full"
    onClick={() => navigation(`/singlecoursesp/${data?._id}`)}
  >
    <div className="overflow-hidden">
      <img
        decoding="async"
        className="w-full htransition duration-300 ease-in-out hover:scale-110 h-48 rounded-t-md"
        src={data?.image ? data?.image : thambnailForCourse}
        alt="text"
      />
    </div>

    <div className="p-5">
      <div className="flex flex-row justify-between  ">
        <h6 className="text-3xs  text-black mb-2">Charles</h6>
        <h6 className="text-3xs font-bold text-dark-blue mb-2">(500)</h6>
      </div>
      <h2 className="text-xl line-clamp-1 font-bold text-dark-blue mb-5 ">
        {data?.title}
      </h2>
      <h4 className="text-lg  text-black mb-4 ">{data?.topic}</h4>
      <div className="flex  justify-between  flex-wrap xl:flex-nowrap">
        <h6 className="text-3xs flex flex-row w-fit xl:w-full flex-nowrap items-center text-theme-green mb-2">
          <PiGraduationCap className="text-xl mr-1  " /> 5-8 Years
        </h6>
        <h6 className="text-3xs  flex flex-row justify-end  xl:justify-center w-fit xl:w-full items-center text-theme-green mb-2">
          <CiDollar className="mr-1 text-xl" /> {data?.duration}
        </h6>
        <h6 className="text-3xs  flex flex-row w-fit xl:w-full justify-start  xl:justify-end items-center text-theme-green line-clamp-1 mb-2">
          <MdMenuBook className="mr-1 text-xl " />
          <p className="line-clamp-1">{data?.modality}</p>
        </h6>
      </div>
    </div>
  </div>
  )
}
export default RelatedCourseTemplate



