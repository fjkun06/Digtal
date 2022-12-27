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

  //interval useffect
  React.useEffect(() => {
    // setCarousels(document.querySelectorAll(".home-images"));
    // setCarousels(carouselArray)
    // document.querySelector(".img-one").style.display = "block";
    // console.log(carousels)
  });

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
    Array.from(document.querySelectorAll(".home-images")).forEach(slide => {
      console.log(mainIndex, current, next);

      if (Number(slide.id) === current && Number(slide.id) !== 6) {
        timer(slide);
        killer(slide);
        // console.log(mainIndex);
      }
      if (Number(slide.id) === next || Number(slide.id) === 5) {
        showNextElement(slide);
      }
    });

    function timer(slide) {
      setTimeout(() => {
        slide?.classList?.toggle("disappear");
      }, 3500);
    }

    function killer(slide) {
      setTimeout(() => {
        slide?.classList?.toggle("appear");

        // if (slide) slide.style.display = "none";
      }, 3900);
    }

    function showNextElement(slide) {
      setTimeout(() => {
        // slide.style.display = "block";
        if (current === 5) {
          setMain(1);
        } else {
          setMain(mainIndex + 1);
        }
      }, 3495);
    }
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
