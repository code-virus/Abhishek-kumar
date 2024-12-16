import { useEffect, useRef, useState } from "react";
import Navbar from "./Navbar";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
// import Typewriter from "./Typewriter";

const App = ({id,skills}) => {
useGSAP(()=>{
  let tl =gsap.timeline()


  tl.to(".four",{
    left:"10.2vw",
    duration:1,
    opacity:1
    
  },"is")
  tl.to(".five",{
    right:"-13.5vw",
    duration:1,
    opacity:1
    
  },"is")

  tl.to(".three",{
    left:"7.5vw",
    duration:1,
    opacity:1
    
  },"fs")
  tl.to(".six",{
    right:"-16.3vw",
    duration:1,
    opacity:1
    
  },"fs")
  tl.to(".second",{
    left:"4.6vw",
    duration:1,
    opacity:1
    
  },"ss")
  tl.to(".seven",{
    right:"-18.8vw",
    duration:1,
    opacity:1
    
  },"ss")

  tl.to(".first",{
    left:"1.5vw",
    duration:1,
    opacity:1
    
  },"ss")
  tl.to(".eight",{
    right:"-21vw",
    duration:1,
    opacity:1
    
  },"ss")

  tl.to(".eight",{
    right:"-21vw",
    duration:1,
    opacity:1,
    rotate:"-20deg",
    top:"-1vw",
    repeat:-1,
    yoyo:true
    
  })
  tl.to (".line1",{
    left:"100%",
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
    left:"83%",
    top:"40vw",
    duration:3,
    width:"5vw",
    repeat:-1,
    yoyo:true,
    ease: "back.out(1.7)",

opacity:1
  },"is")
  tl.from (".line3",{
    left:"76%",
    duration:3,
    width:"4vw",
    repeat:-1,
    yoyo:true,
    ease: "circ.out",
opacity:1
  },"is")
  tl.to(".butterfly",{
    left:"85vw",
    top:"25%",
    duration:8,
    rotate:"10deg"
    
  })
  tl.to(".butterfly",{
    scaleY:"-1",
    rotate:"170deg",
    left:"89vw",
    top:"45%",
    duration:4
  })


})
  
  const handleMouseMoves = (event) => {

    const mouseX = event.clientX;
    const mouseY = event.clientY;

    const windowWidth = window.innerWidth;
    const windowHeight = window.innerHeight;

    const xPos = (mouseX / windowWidth) * 100;
    const yPos = (mouseY / windowHeight) * 100;

    


    gsap.to('.icons', {
      x:xPos,
      y: yPos , 
      
      scale:"1.02",
      duration:.6,
      ease: "slow(0.7,0.7,false)",

      
      
    });
  };
  useEffect(() => {
    window.addEventListener('mousemove', handleMouseMoves);

    return () => {
      window.removeEventListener('mousemove', handleMouseMoves);
    };
  }, []);

// const SocialDiv =useRef(null)

// const social=()=>{
//   useGSAP(()=>{
//    let tl=gsap.timeline()
// tl.to(SocialDiv.current,{
//   width:"100%"
// })

    
//   })

// }

const boxRef = useRef(null);

const handleClick = () => {
  let tl = gsap.timeline()
  tl.to(boxRef.current, {
    height:"5vh", // Move 100px to the right // Rotate 360 degrees
    duration: 2,
    width:"30%", // Animation duration in seconds
    ease: "power2.out", // Easing function
  },"same");
  tl.to(".up",{
    display:"none",
    delay:-.4
  },"same")
  tl.to(".down",{
    display:"block",
    delay:.5,
    duration:.8
  },"same")
  tl.to(".animated_lines",{
    left:"73.4%",
    duration:1
  })
  tl.to(".animated_lines",{
    left:"74.4%",
    duration:.0,
    width:"0",
    rotate:"-90deg"
  })
  tl.to(".animated_lines",{
    left:"74.4%",
    duration:.0,
    width:"30px",
    rotate:"-90deg"
  })
  tl.to(".animated_lines",{
    left:"74.4%",
    top:"10px",
    duration:1,
    width:"20px",
    rotate:"-90deg"
  })
  tl.to(".animated_lines",{
    left:"73.4%",
    top:"0px",
    duration:.0,
    width:"0px",
    rotate:"-180deg",
    repeat:-1,
  })
  tl.to(".animated_lines",{
    left:"73.4%",
    duration:.0,
    width:"30px",
    rotate:"-180deg",
    repeat:-1,
  })
  tl.to(".animated_lines",{
    left:"25%",
    duration:2,
    width:"30px",
    rotate:"-180deg",
    repeat:-1,
    yoyo:true
  
  })
};



const handledownClick = () => {
  let tl = gsap.timeline()
  tl.to(boxRef.current, {
    height:"0vh", // Move 100px to the right // Rotate 360 degrees
    duration: 2,
    width:"10%", // Animation duration in seconds
    ease: "power2.out", // Easing function
  });
  tl.to(".down",{
    display:"none"
  })
  tl.to(".up",{
    display:"block"
  })
  tl.to(".animated_lines",{
    left:"25%",
    duration:2,
    width:"30px",
    rotate:"-180deg",
   display:"none"
  
  })
 

};


  return (
    <div className="w-full h-screen page1 text-white bg-slate-950 overflow-hidden">
    
      <Navbar id={id} id={skills} />
      <div className="w-full h-screen text-white bg-zinc-950 flex">
<div className="w-[50%] h-screen py-[10vw] px-[4.5vw] ">

    

  <h1 className="text-[5vw] absolute top-[25vw] capitalize flex">hi, i'<span className="text-[2vw] top-[3.5vw] relative inline-block">m</span> 
  
  <h1 className="flex normal-case fullname  text-[#ab60da]  relative">
    <span className="first absolute left-[-20vw] opacity-0">A</span>
    <span className="second absolute left-[-20vw] opacity-0">b</span>
    <span className="three absolute left-[-20vw] opacity-0">h</span>
    <span className="four  absolute left-[-20vw] opacity-0">i</span>
    <span className="five absolute right-[-80vw] opacity-0 ">s</span>
    <span className="six absolute right-[-80vw] opacity-0">h</span>
    <span className="seven absolute right-[-80vw] opacity-0">e</span>
    <span className="eight absolute right-[-80vw] opacity-0">k</span>
    </h1> 
  
  </h1>
  <h2 className="relative top-[22vw] capitalize text-[1.5vw]">Front - end Developer, UI Designer</h2>
  <p className="relative top-[22.5vw] text-[1vw] text-[#5e5e5e]"> I am a frontend web developer. i can provide clean code and pixel perfect design. i also make website more & more interactive with web animations </p>

  <a className="relative top-[80%] bg-[#ab60da] py-[.7vw] px-8 rounded-lg" href="#" download={"Abhishek Kumar.pdf"} ><button className=" animate-bounce mt-[10px]">Download CV</button></a>
</div>



<div className="w-[50%] flex justify-end items-end h-screen "> 
  <img className="w-[25vw] absolute z-20  "  src="file.png" alt="" />

</div>

<span className="w-[6vw] line1 h-[1px] bg-[#ab60da] top-[20vw] opacity-0 absolute"></span>
<span className="w-[3vw] line2 h-[1px] bg-[#ab60da] top-[40vw] opacity-0 absolute"></span>
<div className="w-[10vw] line3 h-[1px] bg-[#ab60da] top-[51.3vw]  absolute"></div>

<h1 className='icons p-[1vw] opacity-30 rounded-[15px] absolute left-[5vw] top-[10vw] bg-[#3e3e3e]'><svg width={"25px"} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" stroke="#]#ADACAE"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path fill-rule="evenodd" clip-rule="evenodd" d="M0 0H24V24H0V0ZM18.3467 20.1196C17.2343 20.1196 16.6053 19.5394 16.1219 18.7501L14.2891 19.8149C14.9512 21.123 16.3044 22.1211 18.3989 22.1211C20.5409 22.1211 22.136 21.0088 22.136 18.9783C22.136 17.0949 21.0541 16.2571 19.1379 15.4354L18.5741 15.1939C17.6065 14.7749 17.1874 14.501 17.1874 13.8244C17.1874 13.277 17.6061 12.8579 18.2667 12.8579C18.9143 12.8579 19.3314 13.131 19.7181 13.8244L21.4743 12.6968C20.7314 11.3901 19.7006 10.891 18.2667 10.891C16.2526 10.891 14.9638 12.1787 14.9638 13.8701C14.9638 15.7063 16.0449 16.5749 17.6724 17.2682L18.2362 17.5101C19.2648 17.96 19.8781 18.2339 19.8781 19.0072C19.8781 19.6526 19.2811 20.1196 18.3467 20.1196ZM9.60647 20.1055C8.83161 20.1055 8.50933 19.5741 8.15504 18.9455L6.31923 20.057C6.85104 21.1825 7.89676 22.117 9.70247 22.117C11.7009 22.117 13.0701 21.0541 13.0701 18.7189V11.0198H10.8149V18.6884C10.8149 19.8156 10.3474 20.1055 9.60647 20.1055Z" fill="#ADACAE"></path> </g></svg></h1>



   
    <h1 className='icons opacity-25 p-[1vw] rounded-[15px] absolute left-[70vw] top-[10vw] bg-[#3e3e3e]'><svg width={"28px"} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path fill-rule="evenodd" clip-rule="evenodd" d="M4.98488 2C3.61546 2 2.60217 3.19858 2.64753 4.49844C2.69105 5.74725 2.63451 7.36461 2.22732 8.68359C1.81892 10.0064 1.1282 10.8444 0 10.952V12.1666C1.1282 12.2742 1.81892 13.1122 2.22732 14.4351C2.63451 15.754 2.69105 17.3714 2.64753 18.6202C2.60217 19.9199 3.61546 21.1186 4.98508 21.1186H19.0169C20.3864 21.1186 21.3995 19.9201 21.3541 18.6202C21.3106 17.3714 21.3671 15.754 21.7743 14.4351C22.1829 13.1122 22.8718 12.2742 24 12.1666V10.952C22.8718 10.8444 22.1829 10.0064 21.7743 8.68359C21.3671 7.36481 21.3106 5.74725 21.3541 4.49844C21.3995 3.19878 20.3864 2 19.0169 2H4.98468H4.98488ZM16.2712 13.7687C16.2712 15.5586 14.9361 16.6441 12.7206 16.6441H8.94915C8.84127 16.6441 8.7378 16.6012 8.66152 16.5249C8.58523 16.4486 8.54237 16.3452 8.54237 16.2373V6.88136C8.54237 6.77347 8.58523 6.67001 8.66152 6.59372C8.7378 6.51743 8.84127 6.47458 8.94915 6.47458H12.6991C14.5464 6.47458 15.7588 7.47525 15.7588 9.01166C15.7588 10.09 14.9433 11.0555 13.9041 11.2245V11.2809C15.3187 11.4361 16.2712 12.4156 16.2712 13.7687ZM12.3094 7.76407H10.1589V10.8015H11.9701C13.3702 10.8015 14.1423 10.2377 14.1423 9.2299C14.1423 8.28556 13.4784 7.76407 12.3094 7.76407ZM10.1589 12.0068V15.3542H12.3885C13.8462 15.3542 14.6184 14.7692 14.6184 13.6699C14.6184 12.5704 13.8246 12.0066 12.2947 12.0066H10.1589V12.0068Z" fill="#000000"></path> </g></svg></h1>



    <h1 className='icons opacity-20 p-[1vw] rounded-[15px] absolute left-[50vw] top-[5vw] bg-[#3e3e3e]'><svg width={"25px"} viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M7.50006 2.5C6.47409 2.5 5.59203 2.77691 4.89966 3.37037C4.21227 3.95956 3.76259 4.81729 3.51314 5.88638C3.45869 6.1197 3.57742 6.35885 3.79619 6.45654C4.01496 6.55423 4.27228 6.483 4.40967 6.28672C4.7263 5.8344 5.04244 5.56261 5.3462 5.42313C5.64038 5.28805 5.95748 5.26068 6.32069 5.35797C6.68723 5.45615 6.97097 5.74369 7.41643 6.22816L7.43082 6.24382C7.76661 6.60905 8.17623 7.0546 8.73649 7.40028C9.31785 7.75898 10.0413 7.99999 11.0001 7.99999C12.026 7.99999 12.9081 7.72307 13.6005 7.12962C14.2878 6.54043 14.7375 5.6827 14.987 4.61361C15.0414 4.38029 14.9227 4.14114 14.7039 4.04345C14.4852 3.94576 14.2278 4.01698 14.0904 4.21326C13.7738 4.66559 13.4577 4.93737 13.1539 5.07686C12.8597 5.21194 12.5426 5.23931 12.1794 5.14202C11.8129 5.04384 11.5291 4.7563 11.0837 4.27182L11.0693 4.25616C10.7335 3.89093 10.3239 3.44538 9.76362 3.09971C9.18227 2.74101 8.45883 2.5 7.50006 2.5Z" fill="#000000"></path> <path d="M4.00006 6.99999C2.97409 6.99999 2.09203 7.2769 1.39966 7.87036C0.712271 8.45955 0.262592 9.31727 0.0131365 10.3864C-0.0413057 10.6197 0.0774162 10.8588 0.296186 10.9565C0.514956 11.0542 0.772276 10.983 0.909673 10.7867C1.2263 10.3344 1.54244 10.0626 1.8462 9.92312C2.14038 9.78804 2.45747 9.76067 2.82069 9.85796C3.18723 9.95614 3.47097 10.2437 3.91643 10.7282L3.93082 10.7438C4.2666 11.109 4.67624 11.5546 5.23649 11.9003C5.81785 12.259 6.54128 12.5 7.50006 12.5C8.52602 12.5 9.40808 12.2231 10.1005 11.6296C10.7878 11.0404 11.2375 10.1827 11.487 9.1136C11.5414 8.88027 11.4227 8.64113 11.2039 8.54343C10.9852 8.44574 10.7278 8.51697 10.5904 8.71325C10.2738 9.16558 9.95768 9.43736 9.65391 9.57684C9.35974 9.71192 9.04264 9.7393 8.67942 9.64201C8.31289 9.54383 8.02915 9.25628 7.58369 8.77181L7.56929 8.75615C7.23351 8.39092 6.82388 7.94537 6.26362 7.59969C5.68227 7.241 4.95883 6.99999 4.00006 6.99999Z" fill="#000000"></path> </g></svg></h1>


    
    <h1 className='icons opacity-10 p-[1vw] rounded-[15px] absolute left-[20vw] top-[37vw] bg-[#3e3e3e]'><svg width={"35px"} fill="#AFAEAF" viewBox="0 -1.5 27 27" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"><path d="m15.902 11.974c0 1.331-1.079 2.41-2.41 2.41s-2.41-1.079-2.41-2.41 1.079-2.41 2.41-2.41 2.41 1.079 2.41 2.41z"></path><path d="m13.491 17.494c-.201.005-.438.008-.676.008-2.811 0-5.522-.425-8.073-1.214l.193.051c-1.351-.436-2.522-1.079-3.541-1.903l.021.016c-.789-.571-1.32-1.455-1.41-2.467l-.001-.013c0-1.594 1.747-3.154 4.681-4.172 2.512-.827 5.403-1.304 8.405-1.304.139 0 .278.001.417.003h-.021c.116-.002.252-.003.389-.003 2.965 0 5.82.469 8.496 1.337l-.195-.055c1.305.424 2.438 1.036 3.433 1.814l-.024-.018c.775.546 1.298 1.404 1.386 2.387l.001.013c0 1.656-1.954 3.332-5.103 4.374-2.363.729-5.08 1.149-7.895 1.149-.17 0-.339-.002-.508-.005h.025zm0-9.84c-.106-.002-.232-.002-.358-.002-2.881 0-5.656.452-8.259 1.289l.191-.053c-2.698.941-3.908 2.228-3.908 3.087 0 .893 1.301 2.3 4.153 3.274 2.249.697 4.834 1.099 7.513 1.099.235 0 .469-.003.702-.009l-.034.001c.146.003.318.005.49.005 2.684 0 5.274-.4 7.715-1.143l-.187.049c2.96-.984 4.32-2.391 4.32-3.28-.102-.638-.462-1.176-.966-1.515l-.008-.005c-.866-.674-1.876-1.217-2.97-1.574l-.07-.02c-2.368-.766-5.093-1.208-7.92-1.208-.142 0-.283.001-.424.003h.021z"></path><path d="m8.023 23.986c-.016 0-.035.001-.053.001-.453 0-.878-.119-1.245-.327l.013.007c-1.378-.8-1.858-3.092-1.28-6.141.697-3.128 1.827-5.894 3.344-8.4l-.069.124c1.499-2.655 3.31-4.926 5.425-6.872l.02-.018c.923-.844 2.003-1.537 3.187-2.028l.073-.027c.407-.196.885-.31 1.39-.31.501 0 .976.113 1.4.314l-.02-.008c1.435.826 1.911 3.36 1.238 6.606-.72 2.967-1.818 5.58-3.262 7.959l.07-.123c-1.452 2.63-3.209 4.882-5.266 6.819l-.014.013c-.958.877-2.083 1.59-3.321 2.082l-.074.026c-.46.181-.992.292-1.549.305h-.006zm1.205-14.447.499.288c-1.381 2.28-2.465 4.926-3.106 7.74l-.034.18c-.533 2.809-.019 4.498.72 4.926.191.102.417.161.657.161.02 0 .041 0 .061-.001h-.003c.955 0 2.458-.605 4.196-2.122 1.976-1.867 3.654-4.023 4.972-6.404l.068-.135c1.318-2.156 2.371-4.653 3.025-7.307l.038-.182c.629-3.058.086-4.93-.686-5.378-.238-.094-.514-.148-.802-.148-.364 0-.708.087-1.012.24l.013-.006c-1.118.465-2.078 1.086-2.907 1.846l.007-.006c-2.041 1.881-3.772 4.057-5.136 6.468l-.069.132z"></path><path d="m18.96 24c-1.306 0-2.96-.787-4.69-2.276-2.175-1.983-4.017-4.282-5.464-6.834l-.072-.137c-1.43-2.349-2.551-5.075-3.215-7.975l-.036-.185c-.162-.709-.255-1.522-.255-2.357 0-.527.037-1.044.108-1.551l-.007.058c.085-.998.608-1.858 1.372-2.399l.01-.007c1.43-.83 3.865.024 6.342 2.228 2.022 1.914 3.748 4.113 5.118 6.54l.072.138c1.428 2.297 2.557 4.961 3.242 7.798l.038.186c.163.709.257 1.524.257 2.36 0 .577-.044 1.143-.13 1.696l.008-.062c-.103 1.022-.644 1.901-1.429 2.456l-.011.007c-.348.199-.764.316-1.207.316-.018 0-.036 0-.054-.001h.003zm-9.228-9.823c1.458 2.571 3.217 4.771 5.271 6.656l.02.018c2.166 1.863 3.884 2.266 4.628 1.834.773-.446 1.339-2.276.754-5.233-.702-2.89-1.787-5.434-3.219-7.741l.065.112c-1.379-2.456-3.027-4.562-4.948-6.384l-.012-.011c-2.334-2.074-4.225-2.54-4.998-2.094-.473.385-.784.952-.825 1.593v.007c-.055.39-.086.84-.086 1.298 0 .757.086 1.493.248 2.201l-.013-.066c.673 2.952 1.747 5.559 3.182 7.924l-.066-.117z"></path></g></svg></h1>
    
    <h1 className='icons opacity-20 p-[1vw] rounded-[15px] absolute left-[40vw] top-[20vw] bg-[#3e3e3e]'><svg width={"25px"} viewBox="-1 0 20 20" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" fill="#000000"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <title>html [#124]</title> <desc>Created with Sketch.</desc> <defs> </defs> <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd"> <g id="Dribbble-Light-Preview" transform="translate(-61.000000, -7639.000000)" fill="#000000"> <g id="icons" transform="translate(56.000000, 160.000000)"> <path d="M19.4350881,7485 L19.4279481,7485 L10.8119794,7485 L11.0180201,7487 L19.2300674,7487 C19.109707,7488.752 18.7455658,7492.464 18.6119454,7494.153 L13.99949,7495.451 L13.99949,7495.455 L13.98929,7495.46 L9.37377458,7493.836 L9.05757353,7490 L11.3199411,7490 L11.4800816,7492.063 L13.99337,7493 L13.99949,7493 L16.5086984,7492.1 L16.7667592,7489 L8.95659319,7489 C8.91885306,7488.599 8.43333144,7483.392 8.34867116,7483 L19.6370488,7483 C19.5738086,7483.66 19.5095484,7484.338 19.4350881,7485 L19.4350881,7485 Z M5,7479 L6.63812546,7497.148 L13.98929,7499 L21.3598345,7497.111 L23,7479 L5,7479 Z" id="html-[#124]"> </path> </g> </g> </g> </g></svg></h1>
    
    <h1 className='icons opacity-30 p-[1vw] rounded-[15px] absolute left-[30vw] top-[0vw] bg-[#3e3e3e]'><svg width={"30px"} viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path fill-rule="evenodd" clip-rule="evenodd" d="M0 0H15V15H0V0ZM10 6C8.89543 6 8 6.89543 8 8C8 9.10457 8.89543 10 10 10H11C11.5523 10 12 10.4477 12 11C12 11.5523 11.5523 12 11 12H10C9.44772 12 9 11.5523 9 11H8C8 12.1046 8.89543 13 10 13H11C12.1046 13 13 12.1046 13 11C13 9.89543 12.1046 9 11 9H10C9.44772 9 9 8.55228 9 8C9 7.44772 9.44772 7 10 7H11.1667C11.6269 7 12 7.3731 12 7.83333V8H13V7.83333C13 6.82081 12.1792 6 11.1667 6H10ZM3 6H8V7H6V13H5V7H3V6Z" fill="#B0AFB0"></path> </g></svg></h1>



    
    <h1 className='icons opacity-30 p-[1vw] rounded-[15px] absolute left-[70vw] top-[30vw] bg-[#3e3e3e]'><svg width={"30px"} fill="#ADACAD" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 512 512" enable-background="new 0 0 512 512" xml:space="preserve" stroke="#ADACAD"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <g id="5151e0c8492e5103c096af88a51e8d81"> <path display="inline" d="M193.918,208.369c-4.729-10.456-6.849-22.652-3.236-33.731c3.612-11.327,11.703-20.413,19.794-28.878 c22.525-22.531,50.285-39.085,72.316-61.986c12.197-12.573,22.278-27.634,25.762-44.937c2.864-12.695,1.496-25.764-1.117-38.337 c11.7,13.319,15.559,32.363,12.197,49.541c-3.608,19.292-14.316,36.344-26.886,51.031c-10.081,11.827-21.659,22.282-33.731,31.993 c-14.065,11.327-27.88,23.524-36.716,39.457c-7.472,12.943-9.215,28.876-4.11,42.942c8.341,24.146,27.756,42.071,38.338,64.848 c-11.703-10.332-23.152-21.036-33.86-32.361C211.471,236.001,200.889,223.307,193.918,208.369z M257.398,189.448 c-2.115,19.792,8.213,38.462,20.539,53.151c5.972,6.596,11.076,14.687,11.323,23.899c0.251,12.318-6.716,23.774-15.684,31.861 c2.119-0.246,3.612-2.115,5.355-3.11c13.443-8.589,26.385-19.418,32.982-34.227c4.357-10.083,3.362-22.034-2.362-31.371 c-6.724-10.953-15.559-20.662-20.786-32.61c-2.867-6.721-3.862-14.562-1.496-21.657c3.114-9.583,9.834-17.426,16.93-24.272 c19.54-18.544,43.189-31.743,65.844-46.179c-28.629,8.214-56.883,19.542-81.03,37.343 C273.702,153.727,259.515,169.658,257.398,189.448z M393.447,283.052c13.568,0.748,26.882,10.704,29.374,24.397 c2.366,11.825-3.358,23.524-10.705,32.485c-12.075,14.438-28.382,24.771-44.807,33.609c-1.622,0.991-2.99,2.237-4.235,3.608 c21.659-5.478,43.314-13.689,60.867-27.756c9.705-8.091,18.294-18.799,20.163-31.619c1.743-11.076-2.86-22.528-11.077-29.871 c-9.96-9.09-24.021-12.448-37.218-10.704c-7.593,0.995-15.931,2.613-21.158,8.961C380.877,284.921,386.971,282.429,393.447,283.052 z M123.22,318.647c16.303,4.357,33.108,5.603,49.787,6.724c14.936,0.995,29.875,1.246,44.937,1.12 c38.833-0.619,77.916-3.236,116.003-11.699c3.608-0.87,7.593-1.493,10.833-3.733c6.347-4.11,13.313-7.347,20.162-10.583 c-30.995,4.979-62.113,9.215-93.478,11.205c-31.74,1.991-63.731,3.236-95.593,1.121c-9.086-0.87-18.423-1.371-26.886-4.858 c-1.994-0.87-4.733-2.609-3.738-5.227c1.869-3.361,5.603-4.977,8.839-6.72c13.694-6.473,28.629-10.081,43.193-14.313 c-25.021-0.376-49.916,5.971-72.814,15.806c-5.105,2.491-10.83,4.481-14.936,8.714c-1.622,1.739-1.622,4.732,0.247,6.222 C113.511,315.787,118.487,317.28,123.22,318.647z M324.864,352.88c-21.784,3.859-43.694,7.472-65.726,8.589 c-24.147,1.618-48.294,0.247-72.191-2.241c-4.604-0.623-9.211-1.368-13.317-3.483c-2.116-1.246-4.231-3.236-4.106-5.854 c0.247-4.106,3.73-6.967,6.222-9.956c-7.715,2.739-15.434,5.599-21.906,10.708c-2.742,2.116-5.478,5.474-4.733,9.208 c1.125,4.356,5.356,6.97,9.09,8.96c9.208,4.733,19.54,6.846,29.625,8.714c25.511,4.11,51.527,4.235,77.167,2.488 c27.141-2.115,54.148-6.594,80.411-14.313C337.932,362.342,330.836,358.479,324.864,352.88z M188.068,395.951 c-6.97,1.99-14.066,4.357-19.79,8.957c-2.868,2.241-5.105,6.104-3.734,9.713c1.743,4.604,6.1,7.347,10.203,9.705 c10.708,5.854,22.78,8.589,34.604,10.708c26.765,4.229,54.27,3.608,80.908-1.12c15.806-2.989,31.615-7.221,46.301-13.815 c-9.584-3.984-18.917-8.467-27.878-13.693c-15.559,2.738-31.246,5.603-47.178,6.598c-21.032,1.618-42.319-0.125-63.355-2.738 c-4.98-1.121-11.202-1.618-14.563-5.976C181.847,400.677,185.828,398.063,188.068,395.951z M358.345,475.982 c17.424-3.604,34.977-7.719,50.908-15.806c4.976-2.867,11.076-5.979,12.698-11.95c0.87-5.725-5.105-8.714-9.337-11.08 c2.613,2.993,4.356,7.347,1.74,10.83c-4.357,5.853-11.821,8.091-18.42,10.332c-20.66,5.85-42.072,8.216-63.355,10.582 c-56.385,5.102-113.146,6.348-169.528,1.618c-18.92-1.994-38.217-4.109-56.264-10.829c-2.86-1.246-7.217-2.492-7.217-6.352 c1.117-3.354,4.357-5.227,7.217-6.845c12.945-6.595,27.384-10.207,41.822-11.077c-4.228-2.491-9.208-2.738-14.062-2.613 c-12.076,0.373-23.9,3.483-35.349,7.347c-9.834,3.604-19.916,7.59-27.76,14.811c-3.111,2.735-5.971,7.962-2.739,11.699 c4.98,5.353,12.699,6.72,19.54,8.338c38.338,6.599,77.171,10.328,116.011,11.699C255.781,488.184,307.684,485.942,358.345,475.982z M409.378,482.706c-23.402,7.468-47.672,11.574-71.822,14.936c-41.696,5.227-83.769,6.845-125.716,5.603 c-25.515-0.995-51.03-2.738-76.176-6.974c5.85,3.984,13.071,5.227,19.794,7.096c28.257,5.976,57.255,7.096,86.01,7.966 c42.19,0.748,84.387-0.87,125.962-7.468c19.669-3.48,39.459-7.715,57.13-16.927c9.215-4.854,18.552-12.326,20.163-23.152 C435.391,473.741,421.951,478.349,409.378,482.706z"> </path> </g> </g></svg></h1>






    <h1 className='icons opacity-30 p-[1vw] rounded-[15px] absolute left-[85vw] top-[10vw] bg-[#3e3e3e]'><svg width={"25px"} fill="#000000" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 512 512" enable-background="new 0 0 512 512" xml:space="preserve"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <g id="c133de6af664cd4f011a55de6b001a2b"> <path display="inline" d="M204.064,46.682v22.018h-56.302V0.501h56.302v24.13h-32.172v22.051H204.064z M261.941,24.631h22.492 V0.501h-56.308c0,0,0,12.112,0,24.13c7.533,7.533,11.461,11.139,22.356,22.034c-6.369,0-22.356,0.022-22.356,0.021v22.014h56.308 V46.682L261.941,24.631z M341.746,24.631h22.49V0.501H307.93c0,0,0,12.112,0,24.13c7.531,7.533,11.461,11.139,22.355,22.034 c-6.365,0-22.355,0.022-22.355,0.021v22.014h56.307V46.682L341.746,24.631z M438.395,101.112l-34.203,370.486l-148.193,39.9 l-148.196-39.9L73.605,101.112H438.395z M369.477,176.444H255.865h-115.62l5.529,44.739h110.091h6.184l-6.184,2.574 l-106.067,44.177l3.518,43.73l102.549,0.333l54.963,0.175l-3.521,58.311l-51.442,14.484v-0.046l-0.422,0.116l-49.684-12.542 l-3.015-36.195h-0.164h-46.085h-0.162l6.032,69.876l93.5,27.649v-0.05l0.168,0.05l93-27.146L361.1,267.935H255.865h-0.26 l0.26-0.112l109.086-46.639L369.477,176.444z"> </path> </g> </g></svg></h1>


    <div className='w-[3vw] iconsh-[3vw] rounded-[13px] border border-[#ffffff1e] absolute top-[10vw] left-[20vw]'></div>
<div className='icons w-[2.5vw] h-[2.5vw] rounded-[13px] bg-[#3d3d3d34] absolute top-[2vw] left-[24vw]'></div>
<div className='icons w-[3vw] h-[3vw] rounded-[13px] border border-[#ffffff1e] absolute top-[10vw] left-[20vw]'></div>
<div className='w-[3vw] icons h-[3vw] rounded-[13px] border border-[#ffffff1e] absolute top-[10vw] left-[20vw]'></div>
<div className='w-[3vw] h-[3vw] icons rounded-[13px] border border-[#ffffff1e] absolute top-[10vw] left-[20vw]'></div>

<img className="w-[4vw] h-[4vw] z-50 absolute top-[46.5%] butterfly transform   left-[3vw] rotate-[-10deg]" src="butterfly-unscreen.gif"></img>
      </div>
      <div className=" absolute bottom-0 w-full h-[5vh] flex justify-center items-center   text-white">
      <div
        ref={boxRef}
        className="w-[10vw] h-[0vh] bottom-[.0vw] overflow-hidden absolute items-center  flex justify-around"
      >
        <a href="https://www.instagram.com/"><i class="fa-brands fa-instagram text-[30px]"></i></a>
        <a href="https://www.linkedin.com/"> <i class="fa-brands fa-linkedin text-[30px]"></i></a>
       <a href="https://www.facebook.com/?_rdr"><i class="fa-brands fa-facebook text-[30px]"></i></a>
        
       <a href="https://web.telegram.org/k/"> <i class="fa-brands fa-telegram text-[30px]"></i></a>
       <a href="https://mail.google.com/"><i class="fa-brands fa-square-google-plus text-[30px]"></i></a>
        
      </div>
      <button className="absolute  up animate-bounce text-[13px]" onClick={handleClick}>Social Account</button>
      <button className="absolute top-[-3.8vw] animate-bounce bg-zinc-900 px-[1vw] py-[.5vw] rounded-full down hidden text-[1vw]" onClick={handledownClick}>↓</button>
        <div className="absolute animated_lines w-[30px] bottom-0  h-[1px] bg-white">
        
        </div>
    </div>
  
    </div>
  );
};

export default App;