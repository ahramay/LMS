import React from 'react'
const BrandlogoTemplate = ({data}) => {
  return (
    <div className="container px-5">
           
            <img decoding="async"  className="w-32 h-20"  src={data?.url}  />
    </div>
  )
}
export default BrandlogoTemplate;