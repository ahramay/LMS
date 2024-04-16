
import { useEffect, useState } from "react";
import fetchDataFromApi from "../utils/api";
import { useSelector } from "react-redux";



const useFetch =(url)=>{
    const[loading,setLoading]=useState(null);
    const[error,setError]=useState(null);
    const [data,SetData]=useState("");
    const token =useSelector(state=>state.auth.user.token);


    useEffect(()=>{
        SetData(null);
        setLoading(true);
        setError(null);
   
        fetchDataFromApi(url,token).then((res)=>{
            setLoading(false)
            SetData(res);
        }).catch((error)=>{
            setLoading(false);
            setError(error);
            console.log(error);
        })
    },[url])

    return {data,loading,error};

}

export default useFetch;