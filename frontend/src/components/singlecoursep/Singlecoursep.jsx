import React from "react";
import SinglecoursepTemplate from "./SinglecoursepTemplate";
import { useParams } from "react-router-dom";
import useFetch from "../../hooks/useFetch";

const Singlecoursep = () => {
    const query=useParams();
    const {data,loading}=useFetch(`/api/course/${query?.id}`); 
  return (
    <div className="  grid grid-cols-1 m-auto  gap-8 ">
      {!!data && <SinglecoursepTemplate data={data} key={data?._id} /> } 

    </div>
  );
  
};
export default Singlecoursep;