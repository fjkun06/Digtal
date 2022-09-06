import * as React from "react";
import { useEffect } from "react";

import SwipeableViews from "react-swipeable-views";
import { autoPlay } from "react-swipeable-views-utils";
import CustomImage from "../components/ReusableImage";
import digtalBig from "../assets/images/digtal ui_shadow.png";
import digtal870 from "../assets/images/digtal ui_shadow_small_trema.png";
import web1080 from "../assets/images/web-1080.jpg";
import web870 from "../assets/images/web-870.png";
import marketing1080 from "../assets/images/digital-marketing-1080.jpg";
import marketing870 from "../assets/images/digital-marketing-870.jpg";
import consulting1080 from "../assets/images/it-consulting-1080.jpg";
import consulting870 from "../assets/images/it-consulting-870.jpg";
import { useState } from "react";
import { HeaderVideo } from "./HeaderVideo";
import HeaderLoader from "./HeaderLoader";
import { useMediaQuery } from "@mui/material";
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
    }
    if (index === 0) {
      setInterval(11500);
    }
  }, [index, interval]);

  const handleChangeIndex = (index) => {
    setIndex(index);
  };

  const decrementIndex = () => {
    if (index > 0) setIndex(index - 1);
  };
  const incrementIndex = () => {
    if (index >= 0) setIndex(index + 1);
  };

  return (
    <>
      <div style={{ width: "100vw", height: "90vh", backgroundColor: "red", marginTop: "0" }}>
        {/* left arrow here */}
        <LeftArrow index={index} decrementIndex={decrementIndex} />

        {/* right arrow here */}
        <RightArrow index={index} incrementIndex={incrementIndex} />

        {/* animated text */}
        <WhoWeAre state={index} />

        {/* carousel buttons */}
        <CarouselControl autoplay={autoplay} match870={match870} setIndex={setIndex} setAutoplay={setAutoplay} currentIndex={index} />

        <AutoPlaySwipeableViews index={index} onChangeIndex={handleChangeIndex} interval={interval} autoplay={autoplay} style={{ transition: "all 0.5s ease-in-out" }}>
          {!match870 ? <CustomImage image={digtalBig} alt="Digtal Cover photo" classes="home-header-image" /> : <CustomImage image={digtal870} alt="Digtal Cover photo" classes="home-header-image" />}

          {/* <HeaderVideo /> */}
          {!match870 ? <CustomImage image={web1080} alt="Digtal Cover photo" classes="home-header-image" /> : <CustomImage image={web870} alt="Digtal Cover photo" classes="home-header-image" />}
          {!match870 ? <CustomImage image={marketing1080} alt="Digtal Cover photo" classes="home-header-image" /> : <CustomImage image={marketing870} alt="Digtal Cover photo" classes="home-header-image" />}
          {!match870 ? <CustomImage image={consulting1080} alt="Digtal Cover photo" classes="home-header-image" /> : <CustomImage image={consulting870} alt="Digtal Cover photo" classes="home-header-image" />}
          
          {/* <CustomImage image={web1080} alt="Web Design Cover photo" classes="home-header-image" /> */}
          {/* <CustomImage image={marketing1080} alt="Marketing Cover photo" classes="home-header-image" /> */}
          {/* <HeaderLoader /> */}
        </AutoPlaySwipeableViews>
      </div>
    </>
  );
};
