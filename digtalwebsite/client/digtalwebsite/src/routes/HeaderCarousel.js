import * as React from "react";
import { useEffect } from "react";

import SwipeableViews from "react-swipeable-views";
import { autoPlay } from "react-swipeable-views-utils";
import CustomImage from "../components/ReusableImage";
import originalBig from "../assets/images/digtal ui_shadow.png";
import original870 from "../assets/images/digtal ui_shadow_small_trema.png";
import original2 from "../assets/images/digtal ui_shadow_v2.png";
import original3 from "../assets/images/digtal_ui_shadow_v3.png";
import { useState } from "react";
import { HeaderVideo } from "./HeaderVideo";
import HeaderLoader from "./HeaderLoader";
import {  useMediaQuery } from "@mui/material";
import WhoWeAre from "./WhoWeAre";

import { CarouselControl } from "./CarouselControl";
import { LeftArrow } from "./LeftArrow";
import { RightArrow } from "./RightArrow";
const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

export const HeaderCarousel = () => {
  const [index, setIndex] = useState(0);
  const [interval, setInterval] = useState(11500);
  const [autoplay, setAutoplay] = useState(true);
  

  const match870 = useMediaQuery("(max-width:870px)");

  useEffect(() => {
  

    //adjusting ingterval
    if (index === 1) {
      setInterval(5000);
      console.log("1: ", interval);
    }
    if (index === 0) {
      setInterval(11500);
      console.log("2: ", interval);
    }

  }, [index, interval]);

  const handleChangeIndex = (index) => {
    setIndex(index);
    console.log(index);
  };

  const decrementIndex = () => {
    if (index > 0) setIndex(index - 1);
  };
  const incrementIndex = () => {
    if (index >= 0) setIndex(index + 1);
  };

  return (
    <>
      <div style={{ width: "100vw", height: "90vh",backgroundColor:"red",marginTop: "0" }}>
       

      {/* left arrow here */}
      <LeftArrow index={index} decrementIndex={decrementIndex}/>

      {/* right arrow here */}
      <RightArrow index={index} incrementIndex={incrementIndex}/>

       
{/* animated text */}
        <WhoWeAre state={index} />

        {/* carousel buttons */}
        <CarouselControl autoplay={autoplay} match870={match870} setIndex={setIndex} setAutoplay={setAutoplay} currentIndex={index}/>


        <AutoPlaySwipeableViews index={index} onChangeIndex={handleChangeIndex} interval={interval} autoplay={autoplay} style={{ transition: "all 0.5s ease-in-out" }}>
          {!match870 ? <CustomImage image={originalBig} alt="Digtal Cover photo" classes="home-header-image" /> : <CustomImage image={original870} alt="Digtal Cover photo" classes="home-header-image" />}

          <HeaderVideo />
          <CustomImage image={originalBig} alt="Digtal Cover photo" classes="home-header-image" />
          <HeaderLoader />
        </AutoPlaySwipeableViews>

      </div>
    </>
  );
};
