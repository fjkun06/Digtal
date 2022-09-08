import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useTranslation } from "react-i18next";
import MovingText from "react-moving-text";

export default function CarouselConsultingCaption({ index, pos ,text}) {
  const [disp, setDisp] = useState("none");
  const [topBorder, setTopBorder] = useState(null);
  let [counter, setCounter] = useState(0);
  const { t } = useTranslation("home");


  useEffect(() => {
    index === pos
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
  }, [index,pos]);

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
    <div className="carousel-consulting-caption" style={{ display: index === pos ? "grid" : "none" }}>
      <div className="carousel-consulting-caption-sub" style={{}}>
        <MovingText type="fadeInFromBottom" duration="500ms" delay="1s" direction="normal" timing="ease-in-out" iteration="1" fillMode="backwards">
        {t(text)}
        </MovingText>
      </div>
    </div>
  );
}
