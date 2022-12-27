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
  const [one, setOne] = React.useState(null);
  const [mainIndex, setMain] = React.useState(1);
  const allSlides = [
    ".img-one",
    ".img-two",
    ".img-three",
    ".img-four",
    ".img-five"
  ];
  //interval useffect
  React.useEffect(() => {
    // setOne(document.querySelector(".img-one"));
    allSlides.forEach(slide => {
      setOne(document.querySelector(slide));
      if (document.querySelector(slide).id === mainIndex) {
        document.querySelector(slide).style.display = "block";
      }
    });
    // document.querySelector(".img-one").style.display = "block";

    // i1.classList.add("disappear");
    timer();
    killer();
    showNextElement();
    // console.log(i1)
  });

  // window.onload = () =>
  const timer = React.useCallback(
    () =>
      setTimeout(() => {
        console.log("lll : ", one?.id);

        one?.classList?.toggle("disappear");
      }, 3500),
    [one?.classList, one?.id]
  );
  const killer = React.useCallback(
    () =>
      setTimeout(() => {
       one.style.display = "none";
        // document.querySelector(".img-one").style.display = "none";
      }, 3501),
    []
  );
  const showNextElement = React.useCallback(
    () =>
      setTimeout(() => {
        document.querySelector(".img-two").style.display = "block";
      }, 3495),
    []
  );

  return (
    <div id="home-carousel">
      {/* hello */}
      <div className="img-one" id={1}>
        <img src={slideOne} alt="slide one" />
      </div>
      <div className="img-two" id={2}>
        <img src={slideTwo} alt="slide one" />
      </div>
      <div className="img-three" id={3}>
        <img src={slideThree} alt="slide one" />
      </div>
      <div className="img-four" id={4}>
        <img src={slideFour} alt="slide one" />
      </div>
      <div className="img-five" id={5}>
        <img src={slideFive} alt="slide one" />
      </div>
    </div>
  );
}
