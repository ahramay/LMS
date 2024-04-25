import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchBlogs } from "../redux/slice/blogSlice";

import Singlecourseheroimg from "../assets/singlecourse.png";
import NewsBlogTemplate from "../components/newspage/NewsBlogTemplate";
import NewsSidebar from "../components/newspage/NewsSidebar";

import BlogSkeleton from "../components/BlogSkeleton";
import { useParams } from "react-router-dom";
import useFetch from "../hooks/useFetch";

function News() {
  const dispatch = useDispatch();
  const { blogs, loading, error } = useSelector((state) => state.blog);


  useEffect(() => {
    dispatch(fetchBlogs());
  }, [dispatch]);

  return (
    <>
      <div className="flex justify-center">
        <div
          className="w-full  py-14 px-5 md:py-20 md:px-20  p-5   bg-center bg-no-repeat bg-cover flex flex-col items-center"
          style={{ backgroundImage: `url(${Singlecourseheroimg})` }}
        >
          <h2 className="text-3xl text-center lg:text-6xl font-bold text-white ">
            News
          </h2>
        </div>
      </div>

      <div className="flex flex-col lg:flex-row  py-10 px-5 gap-8 xl:py-20 xl:px-20">
        <div className=" w-full lg:w-3/4 flex flex-wrap md:flex-col">
          {loading === "loading" ? (
            <BlogSkeleton count={7} />
          ) : (
            blogs &&
            blogs?.map((item) => (
              <NewsBlogTemplate data={item} key={item?._id} />
            ))
          )}
        </div>
        <div className="w-full lg:w-1/4">
          <NewsSidebar />
        </div>
      </div>
    </>
  );
}

export default News;
