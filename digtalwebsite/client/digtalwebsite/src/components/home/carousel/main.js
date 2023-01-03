
import React from "react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "swiper/css/effect-fade";
import "./styles/pagination.css";
// import slideOne from "@assets/images/carousel/noir1.webp";
// import slideTwo from "@assets/images/carousel/noir2.webp";
// import slideThree from "@assets/images/carousel/noir3.webp";
// import slideFour from "@assets/images/carousel/noir4.webp";
// import slideFive from "@assets/images/carousel/noir5.webp";

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



  return ;
    // <div id="home-carousel">
    //   {/* hello */}

    //   <div
    //     ref={element => {
    //       slides.current[0] = element;
    //     }}
    //     className="img-one home-images"
    //     id={1}
    //   >
    //     <img src={slideOne} alt="slide one" />
    //   </div>
    //   <div
    //     ref={element => {
    //       slides.current[1] = element;
    //     }}
    //     className="img-two home-images"
    //     id={2}
    //   >
    //     <img src={slideTwo} alt="slide one" />
    //   </div>
    //   <div
    //     ref={element => {
    //       slides.current[2] = element;
    //     }}
    //     className="img-three home-images"
    //     id={3}
    //   >
    //     <img src={slideThree} alt="slide one" />
    //   </div>
    //   <div
    //     ref={element => {
    //       slides.current[3] = element;
    //     }}
    //     className="img-four home-images"
    //     id={4}
    //   >
    //     <img src={slideFour} alt="slide one" />
    //   </div>
    //   <div
    //     ref={element => {
    //       slides.current[4] = element;
    //     }}
    //     className="img-five home-images"
    //     id={5}
    //   >
    //     <img src={slideFive} alt="slide one" />
    //   </div>
    // </div>
  
}
