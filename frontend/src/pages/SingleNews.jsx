import React from "react";
import Singlecourseheroimg from "../assets/singlecourse.png";
import SingleNewsTemplate from "../components/newspage/SingleNewsTemplate";
import { useParams } from "react-router-dom";
import RelaedNews from "../components/newspage/RelatedNews";
import NewsSidebar from "../components/newspage/NewsSidebar";
import useFetch from "../hooks/useFetch";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
const SingleNews = () => {
  const query = useParams();

  const { data, loading } = useFetch(`/api/articles/${query.id}`);

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
      {loading ? (
        <>
          <div className="flex flex-col lg:flex-row  py-10 px-5 gap-16 xl:py-20 xl:px-20">
            <div className=" w-full lg:w-4/6 flex flex-wrap md:flex-col">
            <div className="flex flex-col  p-5 w-full">
        <div>
        <Skeleton width={800} height={350} />
          <h6 className=" text-white bg-theme-green p-2 rounded-md absolute -mt-14 ml-4">
          <Skeleton/>
          </h6>
        </div>
        <div className="flex py-5 gap-5">
          <h6 className=" text-gray-600 flex ">
          <Skeleton/>
          </h6>
          <h6 className=" text-gray-600 flex ">
          <Skeleton/>
          </h6>
        </div>
        <div>
          <h2 className="text-4xl font-bold text-dark-blue mb-3 p-2">
          <Skeleton/>
          </h2>
          <p className="text-sm  text-black mb-5"><Skeleton/></p>
          <p className="text-lg"><Skeleton/></p>
        </div>
        <div className="flex justify-between items-center">
          <h5 className="text-md flex items-center gap-4 font-semibold text-black mb-5">
          <Skeleton count={2}/>
          </h5>
          
        </div>
      </div>
            </div>
            <div className="w-full lg:w-2/6">
              <Skeleton count={10} style={{marginBottom:"1rem"}} />
            </div>
          </div>
          <div className="px-5 pb-10 lg:pb-10 lg:px-20">
            <Skeleton count={5} />
          </div>
        </>
      ) : (
        <>
          <div className="flex flex-col lg:flex-row  py-10 px-5 gap-16 xl:py-20 xl:px-20">
            <div className=" w-full lg:w-4/6 flex flex-wrap md:flex-col">
              {data && <SingleNewsTemplate data={data} />}
            </div>
            <div className="w-full lg:w-2/6">
              {data && <NewsSidebar blogId={query.id} />}
            </div>
          </div>
          <div className="px-5 pb-10 lg:pb-10 lg:px-20">
            {data && <RelaedNews blogId={query.id} />}
          </div>
        </>
      )}
    </>
  );
};

export default SingleNews;
