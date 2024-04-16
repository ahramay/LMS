import React from "react";
import RelatedCourseTemplate from "./RelatedCourseTemplate";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


const RelaedCours = ({filterData}) => {
 
  return (
    <>
    <div className="py-5 lg:py-10">
        
      <h2 className="font-bold text-3xl text-dark-blue mb-5 ">Some More Courses For You</h2>
      <div className="grid grid-cols-1  m-auto  gap-8 md:grid-cols-4 xl:grid-cols-4">
      {!!filterData && filterData?.map(item=><RelatedCourseTemplate data={item} key={item}/>) } 
      </div>
      </div>
     
    </>
    
  );
}
export default RelaedCours;