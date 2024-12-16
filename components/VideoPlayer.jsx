import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import React, { useRef } from "react";
gsap.registerPlugin(useGSAP)
gsap.registerPlugin(ScrollTrigger)


const VideoHoverPlay = ({video1,videoSrc}) => {


  const videoRef = useRef(null);

  const handleMouseEnter = () => {
    videoRef.current?.play();
  };

  const handleMouseLeave = () => {
    videoRef.current?.pause();
  };

  return (
    <div
      className="startPoint  relative my-6 max-w-2xl h-[20vw] mx-[2vw] overflow-hidden rounded-lg border border-gray-300 shadow-md cursor-pointer"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div className="w-[100%] startPoint1 h-[20vw] ">
        <img className="w-full  imgHidden absolute h-full  top-0 object-cover " src={videoSrc} alt="" />
      <video
        ref={videoRef}
        muted
        className="w-full h-full object-cover hoverVideo"
      >
        <source src={video1} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      </div>
    </div>
  );
};

export default VideoHoverPlay;
