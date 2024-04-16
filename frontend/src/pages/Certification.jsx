import React from 'react'

import Certificationphero from '../components/certification/CertificationHero'
import { certificationDetails  } from '../constant/certificationdata'
import Team from '../components/certification/Team'
import certifiedimg from "../assets/certified.jpg";
import LearningMethod from "../components/certification/LearningMethod"
import CertificationSlider from "../components/certification/CertificationSlider"
import CertificationCard from "../components/certification/CertificationCard"
import { FaAnglesRight } from "react-icons/fa6";
const Certification = () => {
    
  return (
    <div>
        <Certificationphero/>
        
        <CertificationCard />
    
        <div className="py-10 px-5 md:py-20 md:px-20 gap-10 flex flex-col lg:flex-row">
        <div>
          <a href="/" className="flex h-full justify-center items-center">
            <img src={certifiedimg} className=" " alt=" Logo" />
          </a>
        </div>
        <div className="flex flex-col">
          <h2 className="text-4xl text-dark-blue md:text-6xl font-bold mb-5 ">
            What is Lorem Ipsum
          </h2>
          <p className=" text-2xl pb-5">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry.
          </p>
          <LearningMethod />
          <LearningMethod />
          <LearningMethod />
        </div>
      </div>
        <div className='pt-10 pb-10 px-5  md:pt-20 md:px-20 bg-light-gray'>
            <h2 className='text-4xl text-dark-blue md:text-6xl font-bold mb-5 text-center'>{certificationDetails[0]?.title}</h2>
            <p className='text-center text-2xl pb-5'>{certificationDetails[0]?.Details}</p>
                <ul>
                    {
                        certificationDetails[0]?.subList.map((item,index)=>
                            <li  key={index} className='text-xl list-disc list-inside pb-2'>{item?.listItem}</li>
                        )
                    }
                </ul>
        </div>
        <CertificationSlider />
        <section>
    <div className="relative isolate overflow-hidden bg-white px-6 py-24 sm:py-32 lg:overflow-visible lg:px-0">
      <div className="absolute inset-0 -z-10 overflow-hidden">
    
      </div>
      <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 lg:mx-0 lg:max-w-none lg:grid-cols-2 lg:items-start lg:gap-y-10">
        <div className="lg:col-span-2 lg:col-start-1 lg:row-start-1 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8">
          <div className="lg:pr-4">
            <div className="lg:max-w-lg">
              <p className="text-base font-semibold leading-7 text-indigo-600">Lorem, ipsum.</p>
              <h1 className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Lorem, ipsum dolor.</h1>
              <p className="mt-6 text-xl leading-8 text-gray-700">
               Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati fugit temporibus pariatur eius harum modi, iure consequatur consequuntur expedita laboriosam?
              </p>
            </div>
          </div>
        </div>
        <div className="-ml-12 -mt-12 p-12 lg:sticky lg:top-4 lg:col-start-2 lg:row-span-2 lg:row-start-1 lg:overflow-hidden">
        <img src={certifiedimg} className=" " alt=" Logo" />
        </div>
        <div className="lg:col-span-2 lg:col-start-1 lg:row-start-2 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8">
          <div className="lg:pr-4">
            <div className="max-w-xl text-base leading-7 text-gray-700 lg:max-w-lg">
              <p>
               Lorem ipsum, dolor sit amet consectetur adipisicing elit. 
               Aliquam unde laborum quae rerum? Omnis ipsum expedita amet, 
               inventore repellendus deleniti, autem debitis animi consequuntur aperiam vero sunt placeat 
               suscipit ipsa tenetur quibusdam ipsam magnam rem.
              </p>
              <ul role="list" className="mt-8 space-y-8 text-gray-600">
                <li className="flex gap-x-3">
                  <FaAnglesRight  className="mt-1 h-5 w-5 flex-none text-indigo-600" aria-hidden="true" />
                  <span>
                    <strong className="font-semibold text-gray-900">Lorem, ipsum dolor.</strong> Lorem ipsum, dolor sit amet
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit, laborum at architecto culpa 
                  placeat temporibus? Dolores, consequuntur? Velit, quae amet.
                  </span>
                </li>
                <li className="flex gap-x-3">
                  <FaAnglesRight  className="mt-1 h-5 w-5 flex-none text-indigo-600" aria-hidden="true" />
                  <span>
                    <strong className="font-semibold text-gray-900">Lorem, ipsum.</strong>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Perspiciatis consectetur vero deleniti aspernatur, assumenda ullam corrupti error ipsa quod fugit.
                  </span>
                </li>
                <li className="flex gap-x-3">
                  <FaAnglesRight  className="mt-1 h-5 w-5 flex-none text-indigo-600" aria-hidden="true" />
                  <span>
                    <strong className="font-semibold text-gray-900">Lorem, ipsum.</strong> Lorem ipsum dolor sit.
                  
                  </span>
                </li>
              </ul>
              <p className="mt-8">
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ratione deserunt quia impedit consectetur cum praesentium tempore. 
                    Nostrum maiores voluptatibus voluptas veritatis atque corrupti assumenda earum.
              </p>
              <h2 className="mt-16 text-2xl font-bold tracking-tight text-gray-900">Lorem ipsum dolor sit.</h2>
              <p className="mt-6">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                Consequatur consectetur impedit sunt, quia minima minus 
                ipsa laborum itaque, eaque nihil fugiat quae aliquid 
                assumenda similique deserunt excepturi sint, 
                odit corrupti dicta nostrum quasi suscipit aperiam?
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
</section>
        <Team/>
    </div>
  )
}

export default Certification