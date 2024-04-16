import React from "react";
import {ourServicesData} from "../../constant/images";
import OusserviceTemplate from "./OusserviceTemplate";
const Ourservices = () => {
  return (
    <div className="bg-dark-blue py-10 flex flex-wrap m-auto  px-5 gap-8 lg:py-20 lg:px-20 md:flex-nowrap">
      {ourServicesData.map(item=><OusserviceTemplate data={item} key={item?.title}/>)}
    </div>
  );
};
export default Ourservices;
