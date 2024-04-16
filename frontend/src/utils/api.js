import axios from "axios";


const BASE_URL="http://localhost:5151"

const fetchDataFromApi = async(url,token)=>{

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