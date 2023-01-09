import { EffectFade, Autoplay } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import { giveRandomImageLocation } from "./section";
import "swiper/css";
import "swiper/css/effect-fade";

function SwiperBrands() {
  return (
    <Swiper
      slidesPerView={6}
      spaceBetween={30}
      slidesPerGroup={3}
      loop={true}
      loopFillGroupWithBlank={true}
      className="mySwiper my-16 py-8"
      modules={[Autoplay, EffectFade]}
      autoplay={{
        delay: 1500
      }}
    >
      <SwiperSlide>
        <img src={giveRandomImageLocation()} alt="" />
      </SwiperSlide>
      <SwiperSlide>
        <img src={giveRandomImageLocation()} alt="" />
      </SwiperSlide>
      <SwiperSlide>
        <img src={giveRandomImageLocation()} alt="" />
      </SwiperSlide>
      <SwiperSlide>
        <img src={giveRandomImageLocation()} alt="" />
      </SwiperSlide>
      <SwiperSlide>
        <img src={giveRandomImageLocation()} alt="" />
      </SwiperSlide>
      <SwiperSlide>
        <img src={giveRandomImageLocation()} alt="" />
      </SwiperSlide>
      <SwiperSlide>
        <img src={giveRandomImageLocation()} alt="" />
      </SwiperSlide>
      <SwiperSlide>
        <img src={giveRandomImageLocation()} alt="" />
      </SwiperSlide>
      <SwiperSlide>
        <img src={giveRandomImageLocation()} alt="" />
      </SwiperSlide>
      <SwiperSlide>
        <img src={giveRandomImageLocation()} alt="" />
      </SwiperSlide>
      <SwiperSlide>
        <img src={giveRandomImageLocation()} alt="" />
      </SwiperSlide>
      <SwiperSlide>
        <img src={giveRandomImageLocation()} alt="" />
      </SwiperSlide>
      <SwiperSlide>
        <img src={giveRandomImageLocation()} alt="" />
      </SwiperSlide>
      <SwiperSlide>
        <img src={giveRandomImageLocation()} alt="" />
      </SwiperSlide>
      <SwiperSlide>
        <img src={giveRandomImageLocation()} alt="" />
      </SwiperSlide>
    </Swiper>
  );
}

export default SwiperBrands
