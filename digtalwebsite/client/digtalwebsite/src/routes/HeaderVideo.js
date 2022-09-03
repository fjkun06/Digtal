import React from 'react';
import video from '../assets/videos/vid.mp4';

export const HeaderVideo = () => {
  return (
    <div className="slider">
    <video src={video} type="video/mp4" muted autoPlay loop></video>
    <div className="sliderc">
        <h1>We are Web Developers</h1>
        <p>We just love to design some websites and while doing that we just need some coffee</p>
        <div className="cta">Contact Us</div>
    </div>
</div>
  );
}

