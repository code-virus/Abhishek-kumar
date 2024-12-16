import React from 'react'

function ButtonForNav({buttonName,id}) {
  
  console.log(`#${id}`);
  
  return (
    <a className='text-[18px] uppercase before:content-[""] before:absolute before:w-[0%] hover:before:w-full  hover:before:left-0 before:duration-300 before:left-[-10px] before:bottom-[-1px] before:h-[2%] before:bg-[#ab60da]  relative' href={`#${id}`}>{buttonName}</a>
  )
}

export default ButtonForNav