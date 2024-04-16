import React from "react";
import singlecertificateheroimg from "../../assets/group_28.png"


const SingleCertificateHero = () => {
  return (
    <div className="">
   
      <div className="flex justify-center">
        <div className="w-full  py-10 px-5   lg:py-24 lg:px-20  p-5   bg-center bg-no-repeat bg-cover flex flex-col items-center" style={{backgroundImage: `url(${singlecertificateheroimg})`,}}>
          <h2 className="text-3xl text-center lg:text-6xl font-bold text-white mb-10">
          What is Lorem Ipsum?
          </h2>
    
          <h5 className="text-white text-xl text-center mb-3 lg:w-3/4 ">
          Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s
          </h5>
          <h5 className="text-white text-xl text-center mb-3   lg:w-3/4">
          Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s
          </h5>
          <h5 className="text-white text-xl text-center mb-3  lg:w-3/4 ">
          Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s
          </h5>
          
        </div>
        </div>
    </div>
  );
};

export default SingleCertificateHero;
