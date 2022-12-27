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
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "swiper/css/effect-fade";
import "./styles/pagination.css";
import slideOne from "@assets/images/carousel/noir3.webp";
// import slideOne from "@assets/images/carousel/noir3.jpg";
// import slideOne from "src/assets/images/carousel/noir3.jpg";

// eslint-disable-next-line import/no-anonymous-default-export
export default function SwiperCarousel() {
  return (
    <div id="home-carousel">
      {/* hello */}
      <div className="img-one">
        <img src={slideOne} alt="slide one" />
      </div>
      <div className="img-two">
        <img src={slideOne} alt="slide one" />
      </div>
      <div className="img-three">
        <img src={slideOne} alt="slide one" />
      </div>
      <div className="img-four">
        <img src={slideOne} alt="slide one" />
      </div>
      <div className="img-five">
        <img src={slideOne} alt="slide one" />
      </div>
    </div>
  );
}
