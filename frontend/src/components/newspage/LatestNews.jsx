import React from "react";
import { IoMdTime } from "react-icons/io";

const LatestNews = ({ data }) => {
  return (
    <div className="flex flex-row gap-4 py-5">
      <div className="w-2/6">
        <img
          decoding="async"
          className="w-full  h-24 rounded-md"
          src={data?.url}
          alt="text"
        />
      </div>

      <div className="w-4/6 ">
        <h2 className="text-md line-clamp-3 cursor-pointer font-bold text-dark-blue mb-5 ">
          {data?.title}
        </h2>
        <a className=" text-gray-600 flex ">
          <IoMdTime className="m-1 text-base" />
          {data?.date}
        </a>
      </div>
    </div>
  );
};
export default LatestNews;
