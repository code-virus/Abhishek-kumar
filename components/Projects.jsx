import React from 'react'
import VideoHoverPlay from './VideoPlayer'
import gsap from 'gsap'
import { ScrollTrigger } from "gsap/all";
import { useGSAP } from '@gsap/react';
import AOS from 'aos';
import 'aos/dist/aos.css';
gsap.registerPlugin(useGSAP)
gsap.registerPlugin(ScrollTrigger)


function Projects() {
  // useGSAP(()=>{
  //   let tl =gsap.timeline({scrollTrigger:{
  //       trigger:".mainDIv",
  //       markers:true,
  //       start:"40% 50%",
  //       end:"70% 0%",
  //   scrub:3,
  //   pin:true
  //   }})
  //   tl.to('.startPoint',{
  //     duration:30,
  //       marginTop:"-30%",
      
  //   })
    
  //   })
  AOS.init();
  return (
    <div className='w-full mainDIv h-[400vh]  flex  bg-zinc-950'>
   
    <div className='w-[50%] pt-[30vw]  h-[100%] startPoint flex flex-col gap-[10vw]  '>
   
    
       <div data-aos="fade-up"
     data-aos-duration="3000">
      <VideoHoverPlay
      video1={"fiveProject.mp4"}
      videoSrc={"fivePro.png"}
       />
</div>

<div data-aos="fade-up"
     data-aos-duration="3000">
       <VideoHoverPlay
      video1={"firstProject.mp4"}
      videoSrc={"firstPro.png"}
       />
      </div>
      
     <div data-aos="fade-up"
     data-aos-duration="3000">
        <VideoHoverPlay
      video1={"sixProject.mp4"}
      videoSrc={"sixPro.png"}
       />
      </div>


      <div data-aos="fade-up"
     data-aos-duration="3000">
      
      <VideoHoverPlay
      video1={"secondProject.mp4"}
      videoSrc={"secondPro.png"}
       />
      </div>


      <div data-aos="fade-up"
     data-aos-duration="3000">
       <VideoHoverPlay
      video1={"threeProject.mp4"}
      videoSrc={"threePro.png"}
       />
      </div>


      <div data-aos="fade-up"
     data-aos-duration="3000">
       
       <VideoHoverPlay
      video1={"forProject.mp4"}
      videoSrc={"forPro"}
       />
      </div>
    

    
    
    
     
       </div>
       <div className='w-[50%]   h-[100%] text-white flex justify-center items-start'>
      <h1 className='text-[4.5vw] sticky top-[40%] mb-8 font-semibold'>Projects</h1>
      <h1 className='text-[6.5vw] sticky top-[40%]  opacity-10 font-bold '>Projects</h1>
    </div>
    </div>
  )
}

export default Projects