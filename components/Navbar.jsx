import React from 'react'
import { TypeAnimation } from 'react-type-animation';
import ButtonForNav from './ButtonForNav';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

function Navbar({id,skills}) {
  useGSAP(()=>{
    let tl=gsap.timeline()
    tl.to(".moving_line",{
      width:"8vw",
      opacity:0,
      left:"90%",
      repeat:-1,
      yoyo:true,
      duration:2,
      backgroundColor:"white"

    })
  })

  return (
    <>
    <div className='w-full h-[6%] z-[99] flex justify-between items-center fixed mix-blend-difference text-white px-20'>
          <h1>
          <TypeAnimation
  sequence={[
    'Code',
    500,
    'Code Sico', //  Continuing previous Text
    500,
    'Code',
    '',
    500,
  ]}
  style={{ fontSize: '1.2em' }}
  repeat={Infinity}
/>
      </h1>
        <nav className='space-x-20' >
          <ButtonForNav buttonName={"home"}  />
          <ButtonForNav buttonName={"About Me"} id={id}  />
          <ButtonForNav buttonName={"Skills"} id={id} />
          <ButtonForNav buttonName={"Project"} id={skills} />
          <ButtonForNav buttonName={"contact us"} />
            <button className='bg-[#ffffff] text-black font-semibold py-1 px-3 rounded-sm hover:bg-transparent hover:border animate-bounce  hover:text-white hover:duration-300 relative'> <div className='w-[10px] rounded-full h-[10px] right-[-5px] top-[-5px] animate-ping bg-[#ab60da] absolute'></div><a className='text-[18px] uppercase ' href="" >Hire me</a></button>

            
        </nav>

    </div>
    <div className='w-[0] h-[1px] moving_line  bg-[#ab60da] absolute left-0 top-[3.5vw]'></div>
    </>
  )
}

export default Navbar