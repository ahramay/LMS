import React, { useEffect } from "react";
import { newsData } from "../../constant/news";
import NewsBlogTemplate from "./NewsBlogTemplate";
import NewsSidebar from "./NewsSidebar";

const NewsBlog = () => {
  return (
    <>
      <div className="flex flex-col lg:flex-row  py-10 px-5 gap-8 xl:py-20 xl:px-20">
        <div className=" w-full lg:w-3/4 flex flex-wrap md:flex-col">
          {newsData.map((item) => (
            <NewsBlogTemplate data={item} key={item?.title} />
          ))}
        </div>
        <div className="w-full lg:w-1/4">
       
            <NewsSidebar />
         
        </div>
      </div>
    </>
  );
};
export default NewsBlog;
