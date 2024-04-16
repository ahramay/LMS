import React, { useEffect } from "react";
import parse from "html-react-parser";
import { IoMdTime } from "react-icons/io";
import { FaUserEdit } from "react-icons/fa";
import { FaArrowLeft } from "react-icons/fa";
import { FaArrowRight } from "react-icons/fa";

const SingleNewsTemplate = ({ data }) => {
  const formattedDate = new Date(data?.createdAt).toLocaleString();

  return (
    <>
      <div className="flex flex-col  p-5 w-full">
        <div>
          <img
            decoding="async"
            className="w-full md:h-80 lg:h-96 rounded-md relative "
            src={data?.cover_image}
            alt="text"
          />
          <h6 className=" text-white bg-theme-green p-2 rounded-md absolute -mt-14 ml-4">
            {data?.category}
          </h6>
        </div>
        <div className="flex py-5 gap-5">
          <h6 className=" text-gray-600 flex ">
            <FaUserEdit className="m-1 text-base" />
            {data?.author?.name}
          </h6>
          <h6 className=" text-gray-600 flex ">
            <IoMdTime className="m-1 text-base" />
            {formattedDate}
          </h6>
        </div>
        <div>
          <h2 className="text-4xl font-bold text-dark-blue mb-3">
            {data?.title}
          </h2>
          <p className="text-sm  text-black mb-5">{data?.meta_description}</p>
          <p className="text-lg">{parse(data?.content)}</p>
        </div>
        <div className="flex justify-between items-center">
          <h5 className="text-md flex items-center gap-4 font-semibold text-black mb-5">
            <FaArrowLeft />
            Prev
          </h5>
          <h5 className="text-md flex items-center gap-4  font-semibold text-black mb-5">
            Next <FaArrowRight />
          </h5>
        </div>
      </div>
    </>
  );
};
export default SingleNewsTemplate;
