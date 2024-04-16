
import React from "react";
import {LearningData} from "../../constant/images";
import LearningMethodTemplate from "./LearningMethodTemplate";
const LearningMethod = () => {
  return (
    <div className="flex flex-row gap-5 mb-5">
      {LearningData.map(item=><LearningMethodTemplate data={item} key={item?.title}/>)}
    </div>
  );
};
export default LearningMethod;



