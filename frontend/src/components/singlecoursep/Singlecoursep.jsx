import React, { useEffect, useState } from "react";
import SinglecoursepTemplate from "./SinglecoursepTemplate";
import { useParams } from "react-router-dom";
import useFetch from "../../hooks/useFetch";
import { useSelector } from "react-redux";
import axios from "axios";

const Singlecoursep = () => {
    const query=useParams();
    const [data,setData]=useState()
    const token =useSelector(state=>state.auth.user.token);
    // const {data,loading}=useFetch(`/api/course/${query?.id}`); 
      const fetchDataFromApi = async(url,token)=>{
        const headers = {
            Authorization: token,
        };
        
        try{
            const {data}=await axios.get({url},{headers});
            return data;
        }catch (error){
            console.log(error);
        }
      }

      useEffect(()=>{
        const data = fetchDataFromApi(`https://dev.hsma.org/api/course/${query?.id}`,token)
        setData(data)

      },[query])


  return (
    <div className="  grid grid-cols-1 m-auto  gap-8 ">
      {!!data && <SinglecoursepTemplate data={data} key={data?._id} /> } 

    </div>
  );
  
};
export default Singlecoursep;