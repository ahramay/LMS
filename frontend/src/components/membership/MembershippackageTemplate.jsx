import React from 'react'

const MembershippackageTemplate = ({data}) => {
  return (
    <div className="flex flex-col items-center border-white hover:bg-gray-100   hover:shadow-2xl hover:shadow-gray-400 rounded-lg w-full px-5 py-5 lg:px-16 lg:py-10">
      <img className="w-1/2 cursor-pointer" src={data?.url} alt="" />
        <h2 className="text-3xl font-bold text-black mb-2 cursor-pointer">
         {data?.title}
        </h2>
        <hr className="w-full   font-bold border-gray-200 border-t-2 mb-5"></hr>
          <h3 className=" text-center">{data?.description}</h3>
    </div>
  )
}
export default MembershippackageTemplate