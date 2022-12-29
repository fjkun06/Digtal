import React from "react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "swiper/css/effect-fade";
import "./styles/pagination.css";
import slideOne from "@assets/images/carousel/noir1.webp";
import slideTwo from "@assets/images/carousel/noir2.webp";
import slideThree from "@assets/images/carousel/noir3.webp";
import slideFour from "@assets/images/carousel/noir4.webp";
import slideFive from "@assets/images/carousel/noir5.webp";

export default function SwiperCarousel() {
  const slides = React.useRef([]);
  const [counter, setCounter] = React.useState(0);
  const [reset, setReset] = React.useState(false);
  const requestRef = React.useRef();
  const animeRef = React.useRef();
  console.log("COUNTER: ", counter);

  function raf(func, func2, ms, handler) {
    let start = performance.now();
    let timer = 0;

    const loop = curr => {
      timer++;

      if (timer < 6000) {
        // console.log(timer);
        // console.log(timer/1200);
      }
      // if (timer === 2362) {
      //   console.log("be");
      // }

      if (curr - start >= ms) {
        func(curr);
        start = curr;
        console.log("start: ", curr - start);
        console.log("refreshRate: ", timer / 25);
        animeRef.current = requestAnimationFrame(func2);
      }
      handler.current = requestAnimationFrame(loop);
    };
    handler.current = requestAnimationFrame(loop);
  }

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
    raf(func, func2, 5000, requestRef);
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

      <div
        ref={element => {
          slides.current[0] = element;
        }}
        className={
          counter === 0 ? "img-one home-images appear" : "img-one home-images"
        }
        id={1}
      >
        <img src={slideOne} alt="slide one" />
      </div>
      <div
        ref={element => {
          slides.current[1] = element;
        }}
        className={
          counter === 1 ? "img-one home-images appear" : "img-one home-images"
        }
        id={2}
      >
        <img src={slideTwo} alt="slide one" />
      </div>
      <div
        ref={element => {
          slides.current[2] = element;
        }}
        className={
          counter === 2 ? "img-one home-images appear" : "img-one home-images"
        }
        id={3}
      >
        <img src={slideThree} alt="slide one" />
      </div>
      <div
        ref={element => {
          slides.current[3] = element;
        }}
        className={
          counter === 3 ? "img-one home-images appear" : "img-one home-images"
        }
        id={4}
      >
        <img src={slideFour} alt="slide one" />
      </div>
      <div
        ref={element => {
          slides.current[4] = element;
        }}
        className={
          counter === 4 ? "img-one home-images appear" : "img-one home-images"
        }
        id={5}
      >
        <img src={slideFive} alt="slide one" />
      </div>
    </div>
  );
}
