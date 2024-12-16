// src/components/ProgressBar.js
import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { useGSAP } from '@gsap/react';

const ProgressBar = ({ progress }) => {
  const progressRef = useRef(null);

  
 useGSAP(()=>{
  let tl=gsap.timeline({
    scrollTrigger:{
        trigger:".skillSection",
        markers:false,
        start:"20% 50%",
        end:"50% 50%",
        scrub:3
    }
})
tl.to(progressRef.current, {
  width: `${progress}%`,
  delay:1,
  duration: 4 ,
  ease: 'power2.out',
  stagger:1
});
tl.to(".percentage",{
  delay:2,
  opacity:1,
  duration:1,
  stagger:".3"
})
 })
  

  return (

    <div className="w-[80%] mr-6 bg-gray-700 h-1 rounded-full ">
      <h1 className='absolute percentage top-2 left-[55%] text-[.6vw] text-[#ffffff48] font-semibold opacity-0'>{`${progress}%`}</h1>
      <div
        ref={progressRef}
        className="bg-white h-full"
        style={{ width: '0%' }}
      ></div>
    </div>
  );
};

export default ProgressBar;
