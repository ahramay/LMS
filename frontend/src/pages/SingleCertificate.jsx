import React, { useEffect } from 'react'
import SingleCertificateHero from '../components/singlecertification/SingleCertificateHero'
import { certificationDetails ,certificationCards } from '../constant/certificationdata'
import CertificateLogo from '../components/singlecertification/CertificateLogo'
import Ourmembers from '../components/landingpage/Ourmembers'
import Eligibility from '../components/singlecertification/Eligibility';
import RecertificationVideos from '../components/singlecertification/RecertificationVideos'

import blueprintimg from "../assets/choice_ISEA_2023-20231204-202109_-1024x681.jpg"
import { useLocation } from 'react-router-dom'

const SingleCertificate = () => {

  const location = useLocation();

  useEffect(()=>{
    window.scrollTo(0,0)
  },[location])

  return (
    <div>
      <SingleCertificateHero/>
      <div className='pt-10 pb-10 px-5  lg:pt-20 lg:px-20 bg-light-gray'>
            <h2 className='text-4xl text-dark-blue md:text-6xl font-bold mb-5 text-center'>{certificationDetails[0]?.title}</h2>
            <p className='text-center text-2xl pb-5'>{certificationDetails[0]?.Details}</p>
                <ul>
                    {
                        certificationDetails[0]?.subList.map(item=>
                            <li className='text-xl list-disc list-inside pb-2'>{item?.listItem}</li>
                        )
                    }
                </ul>
        </div>
        <Ourmembers/>
        <CertificateLogo />
        <Eligibility/>
      <div className="py-5 px-5 bg-dark-blue flex-col md:flex md:flex-row lg:py-20 lg:px-20 ">
        <div className="w-full md:w-1/2 flex flex-col justify-center mb-5 md:mb-0">
          <h2 className="text-4xl text-white  md:text-6xl font-bold mb-5 ">
            CSHM Blueprint
          </h2>

          <h5 className="text-white  text-xl mb-10">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s <br /><br />
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s 
          </h5>
          <a className="font-bold bg-theme-green text-white w-fit cursor-pointer  rounded-full border-solid border-0 hover:bg-white hover:text-theme-green  px-3 py-2 md:px-5 md:py-2 "> Download</a>
   
        </div>
        <div className="w-full md:w-1/2">
        <img src={blueprintimg} className="w-full " alt="" />
        </div>
      </div>
        <RecertificationVideos/>
    </div>

  )
}

export default SingleCertificate