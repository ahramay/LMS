import React from 'react'
const ProtectingSlide = ({data}) => {
  return (
    <div className="container px-5">
            <img
              decoding="async"
              className="w-full h-40 p-5 shadow-sm rounded-xl bg-white"
              src={data?.url}
              alt="text"
            />
            <h3 className="font-bold text-xl text-black  cursor-pointer    px-3 py-2 md:px-5 md:py-2">
              {data?.title}
            </h3>
    </div>
  )
}
export default ProtectingSlide