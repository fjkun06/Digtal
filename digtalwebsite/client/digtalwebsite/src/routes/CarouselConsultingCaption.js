import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import MovingText from "react-moving-text";

export default function CarouselConsultingCaption({ index }) {
  const [disp, setDisp] = useState("none");
  const [topBorder, setTopBorder] = useState(null);
  let [counter, setCounter] = useState(0);

  useEffect(() => {
    index === 3
      ? setTimeout(() => {
          setDisp("inline-flex");
        }, 2000)
      : console.log("setDisp");

    //custom animated border
    let root = document.documentElement;

    const body = window.getComputedStyle(root);

    const width = body.getPropertyValue("--carousel-caption-overline-width");
    setTopBorder(root);
    console.log("width: ", width);
  }, [index]);

//animated border
  let i = 0;
  const timer = setInterval(() => {
    topBorder?.style?.setProperty("--carousel-caption-overline-width", `${i}vw`);

      if(i === 40){
          clearInterval(timer);
      } else{        
          i++;
      }
  }, 50);


  return (
    <div className="carousel-consulting-caption" style={{ display: index === 3 ? "grid" : "none" }}>
      <div className="carousel-consulting-caption-sub" style={{}}>
        <MovingText type="fadeInFromBottom" duration="500ms" delay="1s" direction="normal" timing="ease-in-out" iteration="1" fillMode="backwards">
         IT Consulting Made Easy.
        </MovingText>
      </div>
    </div>
  );
}
