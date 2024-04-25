import React from "react";
import LatestNews from "./LatestNews";
import { newsData } from "../../constant/news";
import useFetch from "../../hooks/useFetch";
import Skeleton from "react-loading-skeleton";
import { useNavigate, useNavigation } from "react-router-dom";

const NewsSidebar = ({blogId}) => {
  const { data, loading } = useFetch("/api/categories");
  const { data:blogData, loading:lodingState } = useFetch(`/api/articles/${blogId}/others`);
 
    
    
  return (
    <>
      <div className="flex p-5 cursor-pointer flex-col border rounded-md justify-start mb-10 w-full">
        <h2 className="text-xl font-bold text-black mb-2">Latest Post</h2>
        <hr className="w-full text-light border-t-1 " />
        {
          blogData?.popularArticle && blogData?.popularArticle?.map((item) => (
            <LatestNews data={item} key={item?._id} />
          ))
        }
      </div>
      <div className="flex p-5  flex-col border rounded-md mb-10 justify-start w-full">
        <h2 className="text-xl font-bold text-black mb-2">Categories</h2>
        <hr className="w-full text-light border-t-1 mb-5" />
        <ul>
          {!data ? (
            <li className="py-1 cursor-pointer hover:text-theme-green">
              <Skeleton count={2} />
            </li>
          ) : (
            !!data &&
            data?.map((item) => (
              <li
                key={item?._id}
                className="py-1 px-5 mb-1 cursor-pointer text-lg hover:text-theme-green border  bg-theme-green text-white rounded-lg hover:bg-dark-blue transition-all"
              >
                {item?.value}
              </li>
            ))
          )}
        </ul>
      </div>
      <div className="flex p-5 cursor-pointer flex-col border mb-10 rounded-md justify-start w-full">
        <h2 className="text-xl font-bold text-black mb-2">Tags</h2>
        <hr className="w-full text-light border-t-1 mb-5" />
        <ul className="flex flex-wrap gap-5">
          <li className="p-2 hover:bg-gray-200 rounded-md">Social</li>
          <li className="p-2  hover:bg-gray-200 rounded-md">Science</li>
          <li className="p-2 hover:bg-gray-200 rounded-md">Social</li>
          <li className="p-2 hover:bg-gray-200 rounded-md">Phychology</li>
          <li className="p-2  hover:bg-gray-200 rounded-md">Social</li>
          <li className="p-2  hover:bg-gray-200 rounded-md">Science</li>
        </ul>
      </div>
    </>
  );
};

export default NewsSidebar;
