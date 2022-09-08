import { useMediaQuery } from "@mui/material";
import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useTranslation } from "react-i18next";
import MovingText from "react-moving-text";

export default function CarouselConsultingCaption({ index, pos, text }) {
  const [disp, setDisp] = useState("none");
  const [topBorder, setTopBorder] = useState(null);
  const { t } = useTranslation("home");
  const match670Down = useMediaQuery("(max-width: 670px)");
  const match320Down = useMediaQuery("(max-width: 6320px)");
  const match670Up = useMediaQuery("(min-width: 670px)");
  const match400Up = useMediaQuery("(min-width: 400px)");
  const match540Down = useMediaQuery("(max-width: 540px)");

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
  }, [index, pos]);

  //animated border
  let i = 0;

  const animateWidth = (screenSize,width,delay) => {
    if (screenSize) {
      const timer = setInterval(() => {
        topBorder?.style?.setProperty("--carousel-caption-overline-width", `${i}rem`);

        if (i === (width + 1)) {
          clearInterval(timer);
        } else {
          i++;
        }
      }, delay);
    }
  }

  if (index === pos) {

    animateWidth(match670Down,45,45);
    animateWidth(match670Up,60,40);
    animateWidth(match320Down,32,33);
    animateWidth(match400Up && match540Down,35,36);
  //   if (match670Down) {
  //     const timer = setInterval(() => {
  //       topBorder?.style?.setProperty("--carousel-caption-overline-width", `${i}rem`);

  //       if (i === 46) {
  //         clearInterval(timer);
  //       } else {
  //         i++;
  //       }
  //     }, 45);
  //   }
  // } else if (match670Up) {
  //   const timer = setInterval(() => {
  //     topBorder?.style?.setProperty("--carousel-caption-overline-width", `${i}rem`);

  //     if (i === 61) {
  //       clearInterval(timer);
  //     } else {
  //       i++;
  //     }
  //   }, 40);
  // } else if (match320Down) {
  //   const timer = setInterval(() => {
  //     topBorder?.style?.setProperty("--carousel-caption-overline-width", `${i}rem`);

  //     if (i === 33) {
  //       clearInterval(timer);
  //     } else {
  //       i++;
  //     }
  //   }, 33);
  }

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
