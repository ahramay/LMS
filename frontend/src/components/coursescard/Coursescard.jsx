import { useEffect, useState } from "react";
import React from "react";
import ReactPaginate from "react-paginate";
import { useLocation } from "react-router-dom";
import CoursescardTemplate from "./CoursescardTemplate";
import fetchDataFromApi from "../../utils/api";
import Skeleton from "../skeleton/Skeleton";

const Coursescard = () => {
  const [courses, setcourses] = useState();
  const [currentPage, setCurrentPage] = useState(1);
  const [paginationData,setPaginationData]=useState();
  const [loading,setLoading]=useState(null);



  const location=useLocation();

  const paginate = ({ selected }) => {
    setCurrentPage(selected + 1);
  };

  useEffect(()=>{
    window.scrollTo(0,0);
  },[location])

  useEffect(()=>{
    getCourseDataPagination();
  },[currentPage])

  function getCourseDataPagination(){
    setLoading(true);

        fetchDataFromApi(`/api/course/all?page=${currentPage}`).then(
          (res)=>{
            setcourses(res?.data)
            setLoading(false)
            setPaginationData(res?.pagination)
            setCurrentPage(res?.pagination?.currentPage)
          }).catch(
            (error)=>{
          console.log(error) })
 }
  return (
    <>
       <div className=" grid grid-cols-1 m-auto  gap-8 md:grid-cols-3 xl:grid-cols-4">
        {!!loading ? (<><Skeleton /> <Skeleton/><Skeleton/><Skeleton/><Skeleton/><Skeleton/><Skeleton/> <Skeleton/></>): (courses?.map((item) => (
          <CoursescardTemplate data={item} key={item?._id} />
        )))}
      </div> 
      <div className="py-5 ">
        <ReactPaginate
          onPageChange={paginate}
          pageCount={paginationData?.totalPages}
          previousLabel={"Prev "}
          nextLabel={"Next"}
          containerClassName={"pagination  flex gap-5 justify-center "}
          pageLinkClassName={"page-number "}
          previousLinkClassName={
            "page-number bg-theme-green font-sans text-white font-semibold py-2 px-4 ml-2 rounded-full hover:bg-dark-blue"
          }
          nextLinkClassName={
            "page-number bg-theme-green font-sans text-white font-semibold py-2 px-4 ml-2 rounded-full hover:bg-dark-blue"
          }
          activeLinkClassName={
            "active  text-white bg-theme-green  p-2 rounded-full"
          }
        />
      </div>
    </>
  );
};
export default Coursescard;
