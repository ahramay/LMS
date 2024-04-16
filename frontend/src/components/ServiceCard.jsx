import React from 'react'
import profilePic from "../assets/contact-us-img.webp"
const ServiceCard = () => {
  return (
    <div className="flex gap-4 md:gap-6 hover:shadow-xl p-2 rounded-lg cursor-pointer border">
        <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg text-white shadow-lg md:h-14 md:w-14 md:rounded-xl">
          <img src={profilePic} alt="profile pic" className='h-full w-full object-cover object-center' />
        </div>
        <div>
          <h3 className="mb-2 text-lg font-semibold md:text-xl">lorem</h3>
          <p className="mb-2 text-gray-500">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Architecto, provident.</p>
          <a href="/" className="font-bold text-black transition duration-100 hover:text-theme-green">More</a>
        </div>
      </div>
  )
}

export default ServiceCard