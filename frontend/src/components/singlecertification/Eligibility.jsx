import React from "react";
import {eligibilityData} from "../../constant/images";
import MembershipbenifitTemplate from "../membership/MembershipbenifitTemplate";

const Eligibility = () => {
    return(
        <>
        <div className="py-5 px-5  lg:py-20 lg:px-20 ">
   
   <div className="flex flex-col items-center">
     
   <h2 className='text-4xl text-dark-blue md:text-6xl font-bold mb-5 text-center'>
   Eligibility
       </h2>
       
       <h5 className="text-black w-full lg:w-3/4 text-xl mb-10  text-center">
       Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s
       </h5>
       <div className="w-full xl:w-full mb-2 lg:mb-10 grid grid-cols-1 md:grid-cols-3 gap-5  ">
   {eligibilityData.map(item=><MembershipbenifitTemplate data={item} key={item?.title}/>)}
 </div>
 <a className="font-bold flex items-center bg-theme-green text-white  cursor-pointer  rounded-full border-solid border-0 hover:bg-dark-blue  px-3 py-2 md:px-5 md:py-2 ">View  Eligibility</a>
      
     </div>
 </div>
        </>
    )
}
export default Eligibility;