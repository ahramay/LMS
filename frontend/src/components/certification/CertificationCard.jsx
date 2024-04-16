import React  from "react";
import CertificationTemplate from "./CertificationTemplate";
import { useParams } from "react-router-dom";
import useFetch from "../../hooks/useFetch";

const CertificationCard = () => {
     const query=useParams();
     const {data,loading}=useFetch(`/api/certificate`)
  return (
    <>
       <div className=" grid grid-cols-1 m-auto  gap-8 md:grid-cols-2 xl:grid-cols-3 pt-10 px-5 md:pt-20 md:px-20 ">
       {!!data && data.map(item=> <CertificationTemplate data={item} key={item?._id} />) } 
         
       
      </div> 
     
    </>
  );
};
export default CertificationCard;