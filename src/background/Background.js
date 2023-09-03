import React from "react";
import "../styles/background.css";
import video from "../assets/bg-vending-machines.mp4";

const Background = () => {
    return (
        <>
        <div className="shadow-overlay"></div>
            <video 
                playsInline 
                autoPlay 
                muted 
                loop 
                preload="auto" 
                id="bg" 
            >
                <source src={video} type="video/mp4" />
            </video>
        </>
    );
};

export default Background;