import React from 'react'

const MegaMenuLink = ({data}) => {
  return (
    <li className='flex justify-end bg-white'>
      <a href={ data && data?.url} className=" text-[#00303c] hover:text-[#6eb43f] text-md cursor-pointer">
        {data && data?.title}
        </a>
    </li>
  )
}

export default MegaMenuLink