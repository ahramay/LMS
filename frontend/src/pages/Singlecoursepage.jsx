
import Singlecoursep from "../components/singlecoursep/Singlecoursep";
import { useParams } from "react-router-dom";
import SingleQuestionTemplate from "../components/singlecoursep/SingleQuestionTemplate"
import Instructor from "../components/singlecoursep/Instructor"
import RelaedCours from "../components/cartpage/RelaedCours"
import React from "react";  
import Singlecourseheroimg from "../assets/singlecourse.png"
import useFetch from "../hooks/useFetch";

function Singlecoursepage() {
   const query=useParams();
 
  
   const{data:filterData,loading:load}=useFetch(`/api/course/related/${query?.id}?random=true&limit=4`);



  return (
    <>
      
   
      <div className="flex justify-center">
        <div className="w-full  py-10 px-5   lg:py-24 lg:px-20  p-5   bg-center bg-no-repeat bg-cover flex flex-col items-center" style={{backgroundImage: `url(${Singlecourseheroimg})`,}}>
          <h2 className="text-3xl text-center lg:text-6xl font-bold text-white mb-10">
          Course Details
          </h2>
          <h5 className="text-white text-xl text-center mb-3 lg:w-3/4 ">
          Home / Course Details
          </h5> 
        </div>
        </div>
     
        <div className="w-full rounded-lg ">
          <Singlecoursep />

        </div>
       <SingleQuestionTemplate />
       <div className="px-5 py-5 lg:px-20 lg:py-10 ">
       <h2 className="text-4xl font-bold text-dark-blue mb-3 p-2">
       Instructor
        </h2>
     <Instructor /> 
     {!! filterData && <RelaedCours filterData={filterData}/>}
     </div>
    </>
  );
}

export default Singlecoursepage;








