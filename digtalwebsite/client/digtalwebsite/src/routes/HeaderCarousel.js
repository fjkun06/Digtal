import * as React from "react";
import { useEffect } from "react";

import SwipeableViews from "react-swipeable-views";
import { autoPlay } from "react-swipeable-views-utils";
import CustomImage from "../components/ReusableImage";
import digtalBig from "../assets/images/digtal ui_shadow.png";
import digtal870 from "../assets/images/digtal ui_shadow_small_trema.png";
import web1080 from "../assets/images/web-1080.png";
import web870 from "../assets/images/web-870.png";
import marketing1080 from "../assets/images/digital-marketing-1080.png";
import marketing870 from "../assets/images/digital-marketing-870.png";
import consulting1080 from "../assets/images/it-consulting-1080.png";
import consulting870 from "../assets/images/it-consulting-870.png";
import { useState } from "react";
import { HeaderVideo } from "./HeaderVideo";
import HeaderLoader from "./HeaderLoader";
import { useMediaQuery } from "@mui/material";

import WhoWeAre from "./WhoWeAre";

import { CarouselControl } from "./CarouselControl";
import { LeftArrow } from "./LeftArrow";
import { RightArrow } from "./RightArrow";
import CarouselConsultingCaption from "./CarouselConsultingCaption";
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
      <div className="home-header-carousel">
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
          
          <div>
          <CarouselConsultingCaption index={index} pos={1} text={'over-text.web'}/>

          {/* <HeaderVideo /> */}
          <CustomImage image={web1080} alt="Digtal Cover photo" classes="home-header-image" />
          </div>

          {/* {!match870 ? <CustomImage image={web1080} alt="Digtal Cover photo" classes="home-header-image" /> : <CustomImage image={web870} alt="Digtal Cover photo" classes="home-header-image" />} */}
          {/* {!match870 ? <CustomImage image={marketing1080} alt="Digtal Cover photo" classes="home-header-image" /> : <CustomImage image={marketing870} alt="Digtal Cover photo" classes="home-header-image" />} */}
          <div>
            {/* carousel consulting caption here */}
            <CarouselConsultingCaption index={index} pos={2} text={'over-text.consulting'}/>

            <CustomImage image={consulting1080} alt="Digtal Cover photo" classes="home-header-image" />
          </div>
          <div>
            {/* carousel consulting caption here */}
            <CarouselConsultingCaption index={index} pos={3} text={'over-text.marketing'}/>

            <CustomImage image={marketing1080} alt="Marketing Cover photo" classes="home-header-image" />

            {/* <CustomImage image={consulting1080} alt="Digtal Cover photo" classes="home-header-image" /> */}
          </div>
          {/* {!match870 ? <CustomImage image={consulting1080} alt="Digtal Cover photo" classes="home-header-image" /> : <CustomImage image={consulting870} alt="Digtal Cover photo" classes="home-header-image" />} */}

          {/* <CustomImage image={web1080} alt="Web Design Cover photo" classes="home-header-image" /> */}
          {/* <CustomImage image={marketing1080} alt="Marketing Cover photo" classes="home-header-image" /> */}
          {/* <HeaderLoader /> */}
        </AutoPlaySwipeableViews>
      </div>
    </>
  );
};
