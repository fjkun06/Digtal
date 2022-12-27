// import {
//   Navigation,
//   Pagination,
//   Scrollbar,
//   A11y,
//   EffectFade,
//   Autoplay
// } from "swiper";
// import { Swiper, SwiperSlide } from "swiper/react";
// import { Carousel, CarouselTwo, CarouselTree, CarouselFour } from "./config";
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
// import slideOne from "@assets/images/carousel/noir33.jpg";
// import slideOne from "src/assets/images/carousel/noir3.jpg";

// eslint-disable-next-line import/no-anonymous-default-export
export default function SwiperCarousel() {
  const carouselArray = [];

  const [carousels, setCarousels] = React.useState(null);
  const [mainIndex, setMain] = React.useState(1);
  const [current, setCurrent] = React.useState(null);
  const [next, setNext] = React.useState(null);
  const [one, setOne] = React.useState(null);
  const [two, setTwo] = React.useState(null);
  const [three, setThree] = React.useState(null);
  const [four, setFour] = React.useState(null);
  const [five, setFive] = React.useState(null);

  React.useEffect(() => {
    Array.from(document.querySelectorAll(".home-images")).forEach(slide => {
      if (slide?.id && Number(slide?.id) === mainIndex) {
        slide.style.display = "block";
        // console.log(mainIndex);

        setCurrent(Number(slide.id));
        setNext(Number(slide.id) + 1);
      }
    });
  }, [mainIndex]);

  React.useEffect(() => {
    let number = 0;
    let request;
    let t = 0;
    let k = 0;
    let s = 0;


    Array.from(document.querySelectorAll(".home-images")).forEach(slide => {
      console.log(mainIndex, current, next);
      if(next === 6){
        setNext(1);
      }

      if (Number(slide.id) === current && Number(slide.id) !== 6) {
        timer(slide);
        // console.log(mainIndex);
      }
      
      if (Number(slide.id) === next && Number(slide.id) <= 5) {
        killer(slide);

        showNextElement(slide);
      }
    });

    function timer(slide) {
      // setTimeout(() => {
      //   slide?.classList?.toggle("disappear");
      // }, 3500);

      // function startAnimation() {
      //   let i = 0;
      //   i++;
      //   if (i === 3500) {
      //     console.log("here: ", i)
      //     slide?.classList?.toggle("disappear");
      //   }

      //   if (i < 3500) {
      //     request = requestAnimationFrame(startAnimation);
      //   }
      // }
      function paint() {
        t++;
        //   box.style.opacity = 0.0002 * number;

         if (t === 1500) {
          console.log("here: ", t)
          slide?.classList?.toggle("disappear");
        }
         if (t === 1700) {
          // console.log("here: ", t)
          // slide?.classList?.toggle("disappear");
          slide.style.display = "none";

        }

        if (t < 1700) {
          request = requestAnimationFrame(paint);
        }
      }
      requestAnimationFrame(paint);
      // requestAnimationFrame(startAnimation);
    }

    function killer(slide) {
      // function startAnimation() {
      //   let i = 0;
      //   i++;
      //   if (i === 3400) {
      //     slide?.classList?.toggle("appear");
      //   }

      //   if (i < 3400) {
      //     request = requestAnimationFrame(startAnimation);
      //   }
      //   // requestAnimationFrame(startAnimation);
      // }
      // requestAnimationFrame(startAnimation);
      function paint() {
        k++;
        //   box.style.opacity = 0.0002 * number;

        if (k === 1000) {
          console.log(slide)
          slide.style.display = "block";
          slide.style.opacity = "0";
        }
         if (k === 1400) {
        //  if (k === 1400) {
          slide?.classList?.toggle("appear");
          console.log("here: ", k)

        // }
        }

        if (k < 1400) {
          request = requestAnimationFrame(paint);
        }
      }
      requestAnimationFrame(paint);

      // setTimeout(() => {
      //   slide?.classList?.toggle("appear");

      //   // if (slide) slide.style.display = "none";
      // }, 3900);
    }

    function showNextElement(slide) {
      // function startAnimation() {
      //   let i = 0;
      //   i++;
      //   if (i === 3495) {
      //     if (current === 5) {
      //       setMain(1);
      //     } else {
      //       setMain(mainIndex + 1);
      //     }
      //   }

      //   if (i < 3495) {
      //     request = requestAnimationFrame(startAnimation);
      //   }
      //   // requestAnimationFrame(startAnimation);
      // }
      // requestAnimationFrame(startAnimation);
      // setTimeout(() => {
      //   // slide.style.display = "block";
      //   if (current === 5) {
      //     setMain(1);
      //   } else {
      //     setMain(mainIndex + 1);
      //   }
      // }, 3495);

      function paint() {
        k++;
        //   box.style.opacity = 0.0002 * number;
        if (k === 1495) {
          if (current === 5) {
            setMain(1);
          } else {
            setMain(mainIndex + 1);
          }
        }

        if (k < 1495) {
          request = requestAnimationFrame(paint);
        }
      
      }
      requestAnimationFrame(paint);
    }
  });

  //interval useffect
  React.useEffect(() => {
    // setCarousels(document.querySelectorAll(".home-images"));
    // setCarousels(carouselArray)
    // document.querySelector(".img-one").style.display = "block";
    // console.log(carousels)
    return () => {
      // second
    };
  });

  return (
    <div id="home-carousel">
      {/* hello */}

      <div className="img-one home-images" id={1}>
        <img src={slideOne} alt="slide one" />
      </div>
      <div className="img-two home-images" id={2}>
        <img src={slideTwo} alt="slide one" />
      </div>
      <div className="img-three home-images" id={3}>
        <img src={slideThree} alt="slide one" />
      </div>
      <div className="img-four home-images" id={4}>
        <img src={slideFour} alt="slide one" />
      </div>
      <div className="img-five home-images" id={5}>
        <img src={slideFive} alt="slide one" />
      </div>
    </div>
  );
}
