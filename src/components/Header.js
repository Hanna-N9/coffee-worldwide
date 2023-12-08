import React, { useEffect, useRef } from "react";
import { useLocation } from "react-router-dom";
import Gif from "../images/BeanThere.mp4";

function Header() {
  const videoRef = useRef(null);
  const location = useLocation();

  useEffect(() => {
    if(videoRef.current.currentTime === 0){
      videoRef.current.play()
    } else {
      videoRef.current.pause()
      videoRef.current.currentTime = 0
      videoRef.current.play()
    }

    return () => {
      if (videoRef.current) {
          videoRef.current.pause();
      }
    };
  }, [location]);
  
  return (
    <div className="header-container">
      <video
        className="logo"
        height="500"
        muted
        ref={videoRef}
      >
        <source src={Gif} type="video/mp4" />
      </video>
    </div>
  );
  
}

export default Header;