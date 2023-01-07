import React from "react";
import { Autoplay, FreeMode } from "swiper";
import { SwiperSlide, Swiper } from "swiper/react";
import { shuffle, range } from "lodash";

import "swiper/scss/autoplay";
import "swiper/scss/free-mode";
import "swiper/scss";

import angular from "@assets/images/technology/angular.png";
import bootstrap from "@assets/images/technology/bootstrap.png";
import css from "@assets/images/technology/css.png";
import django from "@assets/images/technology/django.png";
import html from "@assets/images/technology/html.png";
import javascript from "@assets/images/technology/javascript.png";
import mongoDB from "@assets/images/technology/mongoDB.png";
import mui from "@assets/images/technology/mui.png";
import mysql from "@assets/images/technology/mysql.png";
import nextjs from "@assets/images/technology/nextjs.png";
import nodejs from "@assets/images/technology/nodejs.png";
import php from "@assets/images/technology/php.png";
import postgreSQL from "@assets/images/technology/postgreSQL.png";
import python from "@assets/images/technology/python.png";
import react from "@assets/images/technology/react.png";
import sass from "@assets/images/technology/sass.png";
import typescript from "@assets/images/technology/typescript.png";

function Carousel() {
  const images = [
    angular,
    bootstrap,
    css,
    django,
    html,
    javascript,
    mongoDB,
    mui,
    mysql,
    nextjs,
    nodejs,
    php,
    postgreSQL,
    python,
    react,
    sass,
    typescript
  ];
  return (
    <div className="space-y-4 laptop:space-x-8 relative before:absolute before:inset-y-0 before:left-0 before:z-10 before:from-white before:bg-gradient-to-r before:to-transparent before:w-32 after:absolute after:inset-y-0 after:right-0 after:z-10 after:from-white after:to-transparent after:bg-gradient-to-l after:w-32 container mx-auto">
      {range(3).map(n => (
        <Swiper
          modules={[Autoplay, FreeMode]}
          centeredSlides={false}
          slidesPerView={"auto"}
          freeMode={true}
          speed={500}
          grabCursor={true}
          spaceBetween={50}
          autoplay={{
            delay: 0,
            reverseDirection: false,
            disableOnInteraction: false
          }}
          loop
          className="[&_.swiper-wrapper]:ease-linear"
        >
          {shuffle(images).map(current => (
            <SwiperSlide className="!w-auto" key={current}>
              <img src={current} alt={current} className="h-36" />
            </SwiperSlide>
          ))}
        </Swiper>
      ))}
    </div>
  );
}

export default Carousel;
