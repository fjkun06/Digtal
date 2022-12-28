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
  const slides = React.useRef([]);

  const [carousels, setCarousels] = React.useState(null);
  const [mainIndex, setMain] = React.useState(1);
  const [current, setCurrent] = React.useState(null);
  const [next, setNext] = React.useState(null);
  const [one, setOne] = React.useState(null);
  const [two, setTwo] = React.useState(null);
  const [three, setThree] = React.useState(null);
  const [four, setFour] = React.useState(null);
  const [five, setFive] = React.useState(null);

  // React.useEffect(() => {
  //   document.querySelector(".img-one").style.display = "block";
  // }, []);

  // React.useEffect(() => {
  //   let number = 0;
  //   let request;
  //   let request2;
  //   let t = 0;
  //   let k = 0;
  //   let s = 0;
  //   console.log(mainIndex, current);

  //   slides.current.forEach(slide => {
  //     if (mainIndex === 6) {
  //       // setNext(2);
  //       setCurrent(1);
  //       setMain(1);
  //     }

  //     if (Number(slide.id) === mainIndex && Number(slide.id) !== 6) {
  //       timer(slide);
  //       console.log("in here?: ", mainIndex);
  //     }

  //     if (Number(slide.id) - 1 === mainIndex && Number(slide.id) <= 5) {
  //       killer(slide);

  //       // showNextElement(slide);
  //     }
  //   });

  //   function timer(slide) {
  //     console.log("in timer?: ", mainIndex);
  //     let start = Date.now();

  //     function paint() {
  //       t = Date.now() - start;
  //       // console.log("tithee: ", t);

  //       if (t === 3500) {
  //         console.log("here: ", slide);
  //         slide?.classList?.toggle("disappear");

  //         // if (current === 5) {
  //         //   setMain(mainIndex => mainIndex );
  //         // } else {
  //         console.log("in timer?: ", mainIndex);

  //         setMain(mainIndex + 1);
  //         // }
  //       }
  //       if (t === 3700) {
  //         slide.style.display = "none";
  //         console.log("in timer22?: ", mainIndex);
  //       }

  //       if (t < 3700) {
  //         request = requestAnimationFrame(paint);
  //       }
  //     }
  //     requestAnimationFrame(paint);
  //   }

  //   function killer(slide) {
  //     let start = Date.now();

  //     function paint() {
  //       k = Date.now() - start;

  //       if (k === 3500) {
  //         slide?.classList?.toggle("appear");
  //         console.log("here: ", k);
  //         // console.log("slide2");
  //       }

  //       if (k === 3500) {
  //         // console.log("slide2");
  //         // console.log(slide);
  //         // slide.style.display = "block";
  //         // slide.style.opacity = "0";
  //       }

  //       if (k < 3500) {
  //         request2 = requestAnimationFrame(paint);
  //       }
  //     }
  //     requestAnimationFrame(paint);
  //   }

  //   // function showNextElement(slide) {
  //   //   function paint() {
  //   //     s++;
  //   //     if (s === 349) {
  //   //       // if (s === 495) {
  //   //       if (current === 5) {
  //   //         setMain(mainIndex => mainIndex);
  //   //       } else {
  //   //         setMain(mainIndex => mainIndex + 1);
  //   //       }
  //   //     }

  //   //     if (s < 495) {
  //   //       request = requestAnimationFrame(paint);
  //   //     }
  //   //   }
  //   //   requestAnimationFrame(paint);
  //   // }

  //   // return () => {
  //   //   // cancelAnimationFrame(request);
  //   //   // cancelAnimationFrame(request2);
  //   // };
  // }, [current, mainIndex]);

  // //interval useffect
//   React.useEffect(() => {
//     let t, request;
//     let start = Date.now();
//     // function timer(slide) {
//     //   console.log("in timer?: ", mainIndex);
//     //   let start = Date.now();

//     //   function paint() {
//     //     t = Date.now() - start;
//     //     // console.log("tithee: ", t);

//     //     if (t === 3500) {
//     //       console.log("here: ", slide);
//     //       slide?.classList?.toggle("disappear");

//     //       // if (current === 5) {
//     //       //   setMain(mainIndex => mainIndex );
//     //       // } else {
//     //       console.log("in timer?: ", mainIndex);

//     //       setMain(mainIndex + 1);
//     //       // }
//     //     }
//     //     if (t === 3700) {
//     //       slide.style.display = "none";
//     //       console.log("in timer22?: ", mainIndex);
//     //     }

//     //     if (t < 3700) {
//     //       request = requestAnimationFrame(paint);
//     //     }
//     //   }
//     //   requestAnimationFrame(paint);
//     // }
// function animate(){
//   function paintIN() {
//     t = Date.now() - start;
//     console.log("tithee: ", t);

//     if (t > 0 && t < 3700) {
//       console.log("here: ", slides.current[0]);
//       // slides.current[0]?.classList?.toggle("disappear");
//       // slides.current[0].style.opacity = 3001/t - 0.31;

//       // if (current === 5) {
//       //   setMain(mainIndex => mainIndex );
//       // } else {
//       console.log("in timer?: ", mainIndex);

//       setMain(mainIndex + 1);
//       } 
//       if(t === 3700){
//         console.log("here2: ", slides.current[0]);
//       slides.current[0].style.opacity = 0;


//       } 
//       if(t < 3700){
//         request = requestAnimationFrame(paintIN);

//       }
      
//     }
//     requestAnimationFrame(paintIN);

// }
//     animate();
//       // if (t === 3750) {
//       //   slides.current[0].style.display = "none";
//       //   console.log("in timer22?: ", mainIndex);
//       // }

//       // if (t < 3700) {
//       //   request = requestAnimationFrame(paintIN);
//       // }
//     // }

//     return () => {
//       // second
//       // cancelAnimationFrame(request);

//     };
//   }, []);

  console.log(slides);

  return (
    <div id="home-carousel">
      {/* hello */}

      <div
        ref={element => {
          slides.current[0] = element;
        }}
        className="img-one home-images"
        id={1}
      >
        <img src={slideOne} alt="slide one" />
      </div>
      <div
        ref={element => {
          slides.current[1] = element;
        }}
        className="img-two home-images"
        id={2}
      >
        <img src={slideTwo} alt="slide one" />
      </div>
      <div
        ref={element => {
          slides.current[2] = element;
        }}
        className="img-three home-images"
        id={3}
      >
        <img src={slideThree} alt="slide one" />
      </div>
      <div
        ref={element => {
          slides.current[3] = element;
        }}
        className="img-four home-images"
        id={4}
      >
        <img src={slideFour} alt="slide one" />
      </div>
      <div
        ref={element => {
          slides.current[4] = element;
        }}
        className="img-five home-images"
        id={5}
      >
        <img src={slideFive} alt="slide one" />
      </div>
    </div>
  );
}
