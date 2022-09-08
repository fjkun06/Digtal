import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react';
import MovingText from "react-moving-text";

export default function CarouselConsultingCaption({index}) {
  const [disp, setDisp] = useState("none");

  useEffect(() => {
  index ===2? setTimeout(() => {setDisp("inline-flex")}, 2000): console.log("setDisp");
   
  }, [index]);
  return (
    <div className="carousel-consulting-caption">
    <div className="carousel-consulting-caption-sub">
    <div>I love you</div>

    <div style={{ display: index === 2? "inline-flex": "none" }}>
      {["l", " _", "l", "o", "v", "e", " _", "y", "o", "u", "."].map((letter, index) => (
        <span>
          <MovingText type="blur" duration="2000ms" delay={`${index * 100}ms`} direction="normal" timing="ease" iteration="1" fillMode="none">
            {letter}
          </MovingText>
        </span>
      ))}
    </div>

    <div style={{ display: disp }}>
    {/* <div style={{ display: index === 2? "inline-flex": "none" }}> */}
      {[..."hello_bae"].map((letter, index) => (
        <span>
          <MovingText type="blur" duration="2000ms" delay={`${index * 100}ms`} direction="normal" timing="ease-in-out" iteration="1" fillMode="none">
            {letter}
          </MovingText>
        </span>
      ))}
    </div>
    </div>

  </div>
  )
}
