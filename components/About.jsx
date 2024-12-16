import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/all'
import React, { useEffect } from 'react'
gsap.registerPlugin(useGSAP)
gsap.registerPlugin(ScrollTrigger)

function About({id}) {
    useGSAP(()=>{
        let tl = gsap.timeline()
        tl.to (".line1",{
            left:"70%",
            top:"30vw",
            duration:5,
            width:"0",
            repeat:-1,
            yoyo:true,
            ease: "back.out(1.7)",
            delay:.2,
        y: -250,
        opacity:1
          },"is")
          tl.to (".line2",{
            left:"-33%",
            top:"40vw",
            duration:3,
            width:"5vw",
            repeat:-1,
            yoyo:true,
            ease: "back.out(1.7)",
        
        opacity:1
          },"is")
          tl.from (".line3",{
            left:"-56%",
            duration:3,
            width:"3vw",
            repeat:-1,
            yoyo:true,
            ease: "circ.out",
        opacity:0
          },"is")
    })
 
    useGSAP(()=>{
        let tl=gsap.timeline({
            scrollTrigger:{
                trigger:".aboutSection",
                markers:false,
                start:"0% 50%",
                end:"60% 70%",
                scrub:3
            }
        })
        tl.from("#abhi",{
            x:"-500",
            opacity:0,
        
        },"same")
        tl.from(".solidAbout,.smallSummary",{
            x:400,
            opacity:0,
            stagger:.3
        },"same")
        tl.to(".opacityAbout",{
            opacity:.1,
            delay:"-.4"
        },"same")
        tl.from(".aboutMe",{
            opacity:"0"
        })
        tl.from(".projects",{
            x:300,
            opacity:0
        })

        
       
    })

   

    
  return (
      <div id={id} className='w-full aboutSection h-screen overflow-hidden bg-zinc-950 text-white flex'>
  

        <div className='w-[50%] overflow-hidden h-screen flex justify-end items-center  flex-col'><img id='abhi' className='w-[23vw]' src="file.png" alt="" /></div>
        <div className='w-[50%] h-screen py-[8vw] relative'>
            <h1 className='text-[5vw] z-[90] solidAbout'>About Me</h1>
            <h1 className='text-[6.2vw] absolute font-extrabold opacity-[0] top-[10vw] left-[-5vw] opacityAbout'>About Me</h1>
            <p className=' w-[80%] mb-[2vw] opacity-[.5] smallSummary'>Passionate and detail-oriented Frontend Developer with experience in creating user-friendly websites and applications. Proficient in HTML, CSS, JavaScript,</p>
            <div className='w-[40%] h-[15vw] flex  my-[4vw] aboutMe'>
                <div className='w-[40%] h-screen font-extrabold flex flex-col gap-[1.5vw]'>
                    <h1>Name:</h1>
                    <h1>Date of Birth:</h1>
                    <h1>Address:</h1>
                    <h1>Pin Code: </h1>
                    <h1>Email:</h1>
                        <h1>Phone: </h1>
                   
                     </div>

                <div className='w-[60%] h-screen flex flex-col opacity-[.8] gap-[1.5vw]'> 
                    <h1>Abhishek Kumar</h1>
                    <h1>18/10/2001</h1>
                    <h1>74,Dev Nagar, Tonk Road, Jaipur</h1>
                    <h1>302018</h1>
                    <h1>abhikumar902453@gamil.com</h1>
                    <h1>+91 75687 94781</h1>
                </div>
            </div>
            <span className="w-[6vw] line1 h-[1px] bg-[#ab60da] top-[20vw] opacity-0 absolute"></span>
<span className="w-[3vw] line2 h-[1px] bg-[#ab60da] top-[40vw] opacity-0 absolute"></span>
<div className="w-[10vw] line3 h-[1px] bg-[#ab60da] top-[51.3vw]  absolute"></div>
            <h1 className='text-[1.2vw] projects'><span className='text-[1.9vw] text-[#ab60da]' > 38</span> Project Complete</h1>
        </div>
       
    </div>
  )
}

export default About