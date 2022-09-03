import * as React from "react";
import { useEffect } from "react";
import { useRef } from "react";

import SwipeableViews from "react-swipeable-views";
import { autoPlay } from "react-swipeable-views-utils";
import CustomImage from "../components/ReusableImage";
import original from "../assets/images/digtal_ui.png";
import original2 from "../assets/images/digtal ui_shadow_v2.png";
import original3 from "../assets/images/digtal_ui_shadow_v3.png";
import { useState } from "react";
const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

export const HeaderCarousel = () => {
  const [index, setIndex] = useState(0);
  const [autoplay, setAutoplay] = useState(true);
  const slide1 = useRef(null);
  const slide2 = useRef(null);
  const slide3 = useRef(null);

  useEffect(() => {
    if (index === 0) {
      slide1.current.style.backgroundColor = "red";
    } else {
      slide1.current.style.backgroundColor = "transparent";
    }
    if (index === 1) {
      slide2.current.style.backgroundColor = "red";
    } else {
      slide2.current.style.backgroundColor = "transparent";
    }
    if (index === 2) {
      slide3.current.style.backgroundColor = "red";
    } else {
      slide3.current.style.backgroundColor = "transparent";
    }
    return () => {
      // slide1.current.style.backgroundColor = "none";
      // slide2.current.style.backgroundColor = "none";
      // slide3.current.style.backgroundColor = "none";
      console.log('im the cleanr')

    };
  }, [index]);



  const handleChangeIndex = (index) => {
    setIndex(index);
    console.log(index);


  };

  const resetIndex = () => {
    setIndex(0);
    // console.log(index);
  };
  const resetIndex1 = () => {
    setIndex(1);
    // console.log(index);
  };
  const resetIndex2 = () => {
    setIndex(2);
    // console.log(index);
  };
  const decrementIndex = () => {
    if (index > 0 && index < 3) setIndex(index - 1);
  };
  const incrementIndex = () => {
    if (index >= 0 && index < 2) setIndex(index + 1);
    // console.log(index);
  };

  return (
    <div style={{width:"100vw", height:"100vh"}}>
            <button onClick={decrementIndex} disabled={index === 0 ? true : false}>
        left arrow
      </button>

      <button onClick={resetIndex} ref={slide1}>
        set 0
      </button>
      <button onClick={resetIndex1} ref={slide2}>
        set 1
      </button>
      <button onClick={resetIndex2} ref={slide3}>
        set 2
      </button>

      <button onClick={incrementIndex} disabled={index === 2 ? true : false}>
        right arrow
      </button>

      <button onClick={() => setAutoplay(autoplay? false: true)}  >
        {autoplay ? "pause" : "play"}
      </button>
      <AutoPlaySwipeableViews index={index} onChangeIndex={handleChangeIndex} interval={3000} autoplay={autoplay}>
      <CustomImage image={original} alt="hello" classes="home-header-image" />
            <CustomImage image={original2} alt="hello" classes="home-header-image" />
            <CustomImage image={original3} alt="hello" classes="home-header-image" />
      </AutoPlaySwipeableViews>


      {/* <Pagination dots={3} index={index} onChangeIndex={this.handleChangeIndex} /> */}
    </div>
  );
};
