import React from "react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "swiper/css/effect-fade";
import "./styles/pagination.css";
import slideOne from "src/assets/images/carousel/noir1.webp";
import slideTwo from "src/assets/images/carousel/noir2.webp";
import slideThree from "src/assets/images/carousel/noir3.webp";
import slideFour from "src/assets/images/carousel/noir4.webp";
import slideFive from "src/assets/images/carousel/noir5.webp";

export default function SwiperCarousel() {
  const slides = React.useRef([]);
  const [counter, setCounter] = React.useState(0);
  const [reset, setReset] = React.useState(false);
  const requestRef = React.useRef();
  const animeRef = React.useRef();
  console.log("COUNTER: ", counter);

  function counterLoop(timestamp) {
    setCounter(counter => counter + 1);
  }

  function gameLoop(timestamp) {
    animeRef.current = requestAnimationFrame(gameLoop);
    let tt = 0;
    // tt = timestamp;
    // if (timer < 6000) {
    console.log("calls: ", tt);

    if (timestamp % 11790 === 0) {
      tt++;
      // cancelAnimationFrame(animeRef.current);
      console.log("ssssssssssssssssssssssssszzzzzzzzzzzzzzzzzzzzzzzzzzzzz");
    }
    // console.log(timer/1200);
    // }
  }

  React.useEffect(() => {
    const func = gameLoop;
    const func2 = counterLoop;
    // raf(func, func2, 5000, requestRef);
    const nestedRef = requestRef.current;
    console.log("I was running: ", reset, "x");
    return () => {
      cancelAnimationFrame(nestedRef);
    };
  }, [reset]);

  if (counter === 5) {
    cancelAnimationFrame(requestRef.current);
    setCounter(0);
    setReset(reset => (reset ? false : true));

    // raf(gameLoop, 3500, requestRef);
  }

  // console.log("")

  return (
    <div id="home-carousel">
      {/* hello */}

      <img className="mySlide"
        ref={element => {
          slides.current[0] = element;
        }}
        src={slideOne}
        alt="slide one"
      />

      <img className="mySlide"
        src={slideTwo}
        ref={element => {
          slides.current[1] = element;
        }}
        alt="slide one"
      />

      <img className="mySlide"
        src={slideThree}
        ref={element => {
          slides.current[2] = element;
        }}
        alt="slide one"
      />

      <img className="mySlide"
        src={slideFour}
        ref={element => {
          slides.current[3] = element;
        }}
        alt="slide one"
      />

      <img className="mySlide"
        src={slideFive}
        ref={element => {
          slides.current[4] = element;
        }}
        alt="slide one"
      />
    </div>
  );
}
