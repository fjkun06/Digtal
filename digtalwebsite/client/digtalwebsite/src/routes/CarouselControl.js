import React from "react";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import PauseIcon from "@mui/icons-material/Pause";
import { useMediaQuery } from "@mui/material";

export const CarouselControl = ({ autoplay, match870, setIndex, setAutoplay, currentIndex }) => {
  const match480 = useMediaQuery("(max-width:480px)");

  return (
    <div className="carousel">
      {[0, 1, 2, 3].map((elt, index) => (match480 ? <button onClick={() => setIndex(elt)} className="carousel-button" style={{ backgroundColor: index !== currentIndex ? "" : "rgba(0, 208, 255, 0.302)" }}></button> : <button onClick={() => setIndex(elt)} className="carousel-button" style={{ height: index === currentIndex ? "8px" : "" }}></button>))}
      {/* <button onClick={resetIndex} ref={slide1}>
            set 0
          </button>
          <button onClick={resetIndex1} ref={slide2}>
            set 1
          </button>
          <button onClick={resetIndex2} ref={slide3}>
            set 2
          </button> */}

      {autoplay ? <PauseIcon onClick={() => setAutoplay(false)} fontSize={!match870 ? "large" : "medium"} className="carousel-icon" /> : <PlayArrowIcon onClick={() => setAutoplay(true)} fontSize={!match870 ? "large" : "medium"} className="carousel-icon" />}
    </div>
  );
};
