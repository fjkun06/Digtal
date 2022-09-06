import * as React from "react";
import { useEffect } from "react";
import { useRef } from "react";

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
import { IconButton, useMediaQuery } from "@mui/material";
import WhoWeAre from "./WhoWeAre";

import KeyboardDoubleArrowLeftIcon from "@mui/icons-material/KeyboardDoubleArrowLeft";
import { KeyboardDoubleArrowLeft, KeyboardDoubleArrowRight } from "@mui/icons-material";
import { CarouselControl } from "./CarouselControl";
const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

export const HeaderCarousel = () => {
  const [index, setIndex] = useState(0);
  const [interval, setInterval] = useState(11500);
  const [autoplay, setAutoplay] = useState(true);
  const slide1 = useRef(null);
  const slide2 = useRef(null);
  const slide3 = useRef(null);

  const match870 = useMediaQuery("(max-width:870px)");

  useEffect(() => {
    // if (index === 0) {
    //   slide1.current.style.backgroundColor = "red";
    // } else {
    //   slide1.current.style.backgroundColor = "transparent";
    // }
    // if (index === 1) {
    //   slide2.current.style.backgroundColor = "red";
    // } else {
    //   slide2.current.style.backgroundColor = "transparent";
    // }
    // if (index === 2) {
    //   slide3.current.style.backgroundColor = "red";
    // } else {
    //   slide3.current.style.backgroundColor = "transparent";
    // }

    //adjusting ingterval
    if (index === 1) {
      setInterval(5000);
      console.log("1: ", interval);
    }
    if (index === 0) {
      setInterval(11500);
      console.log("2: ", interval);
    }

    return () => {
      // slide1.current.style.backgroundColor = "none";
      // slide2.current.style.backgroundColor = "none";
      // slide3.current.style.backgroundColor = "none";
      console.log("im the cleanr");
    };
  }, [index, interval]);

  const handleChangeIndex = (index) => {
    setIndex(index);
    console.log(index);
  };

  const decrementIndex = () => {
    if (index > 0) setIndex(index - 1);
    // if (index > 0 && index < 3) setIndex(index - 1);
  };
  const incrementIndex = () => {
    if (index >= 0) setIndex(index + 1);
    // if (index >= 0 && index < 2) setIndex(index + 1);
  };

  return (
    <>
      <div style={{ width: "100vw", height: "90vh",backgroundColor:"red",marginTop: "0" }}>
        <div className="carousel-arrow-left">
          {index === 0 ? (
            <IconButton aria-label="swipe left" onClick={decrementIndex} disabled disableRipple >
              <KeyboardDoubleArrowLeft onClick={decrementIndex} />
            </IconButton>
          ) : (
            <IconButton aria-label="swipe left" onClick={decrementIndex}  disableRipple className="carousel-arrow-left-icon">
              <KeyboardDoubleArrowLeft onClick={decrementIndex} />
            </IconButton>
          )}
        
        </div>

      

        <div className="carousel-arrow-right">
          {index === 3 ? (
            <IconButton aria-label="swipe left" onClick={incrementIndex} disabled disableRipple >
              <KeyboardDoubleArrowRight onClick={incrementIndex} />
            </IconButton>
          ) : (
            <IconButton aria-label="swipe left" onClick={incrementIndex}  disableRipple className="carousel-arrow-right-icon">
              <KeyboardDoubleArrowRight onClick={incrementIndex} />
            </IconButton>
          )}
        
        </div>

       
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

        {/* <Pagination dots={3} index={index} onChangeIndex={this.handleChangeIndex} /> */}
      </div>
    </>
  );
};
