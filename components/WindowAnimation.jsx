import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import React from 'react'

function WindowAnimation() {
    useGSAP(()=>{
        let tl =gsap.timeline({
            scrollTrigger:{
                trigger:".pageAnimation",
                markers:false,
                start:"50% 50%",
                end:"130% 120%",
                scrub:3,
                
                
            }
        })
        tl.to(".page1",{
            top:"-50%",
            duration:1
        },"same")
        tl.to(".page2",{
            bottom:"-50%",
            duration:2
        },"same")
    })
  return (
    <div className='w-full text-white z-10  pageAnimation h-screen absolute overflow-hidden'>
        <div className='w-full h-[50%] page1 absolute flex justify-center items-end bg-zinc-950 overflow-hidden'><h1 className='text-[9vw] font-bold relative  bottom-[-5.42vw]'>Skills</h1> </div>
        <div className='w-full overflow-hidden page2 flex justify-center  bottom-0 h-[50%] absolute bg-zinc-950'> <h1 className='text-[9vw]  font-bold relative top-[-8.1vw]'>Skills</h1> </div>
    </div>
  )
}

export default WindowAnimation