import axios from "axios";
import appConfig from "../config/appConfig";



const fetchDataFromApi = async(url,token)=>{

    const BASE_URL = appConfig.baseUrl

    const headers = {
        Authorization: token,
    };
    
    try{
        const {data}=await axios.get(`${BASE_URL}${url}`,{headers});
        return data;
    }catch (error){
        console.log(error);
    }
}

export default fetchDataFromApi;