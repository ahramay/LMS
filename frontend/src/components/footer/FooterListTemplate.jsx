import React from 'react'

const FooterListTemplate = ({data}) => {
  return (
    <div className="flex flex-col justify-start w-full">
       
        <h2 className="text-2xl font-semibold text-white mb-1">
         {data?.title}
        </h2>
      <p className='block text-base font-normal text-light-gray mt-0'>{data?.list}</p>
      <p className='block text-base font-normal text-light-gray mt-0'>{data?.list}</p>
      <p className='block text-base font-normal text-light-gray mt-0'>{data?.list}</p> 
       <p className='block text-base font-normal text-light-gray mt-0'>{data?.list}</p>
    </div>
  )
}
export default FooterListTemplate