import React from 'react'

const MembershippackageTemplate = ({data}) => {
  return (
    <div className="flex flex-col items-center border-white bg-gray-200  mb-10 hover:shadow-2xl hover:shadow-gray-400 rounded-lg w-full px-3 py-3 lg:px-5 lg:py-5">
      <img className="w-1/4 mb-2" src={data?.url} alt="" />
        <h2 className="text-3xl font-bold text-black mb-3">
         {data?.title}
        </h2>
          <h3 className=" text-center">{data?.description}</h3>
    </div>
  )
}
export default MembershippackageTemplate