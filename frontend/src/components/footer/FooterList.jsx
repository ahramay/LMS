import React from "react";
import {footerData} from "../../constant/images";
import FooterListTemplate from "./FooterListTemplate";
const FooterList = () => {
  return (
    <div className=" mb-5 ">
      {footerData.map(item=><FooterListTemplate data={item} key={item?.title}/>)}
    </div>
  );
};
export default FooterList;
