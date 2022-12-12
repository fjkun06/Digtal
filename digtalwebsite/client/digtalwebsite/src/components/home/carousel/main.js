import { Navigation, Pagination, Scrollbar, A11y,EffectFade,Autoplay} from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Carousel,CarouselTwo,CarouselTree,CarouselFour } from './config';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import 'swiper/css/effect-fade';
import './styles/pagination.css'

// eslint-disable-next-line import/no-anonymous-default-export
export default function SwiperCarousel(){
  return (
    <Swiper
      modules={[Navigation, Pagination, Scrollbar, A11y,EffectFade,Autoplay]}
      effect="fade"
      autoplay={{
        delay:5000
      }}
      spaceBetween={2}
      slidesPerView={1}
      pagination={{ 
        clickable: true,
        renderBullet:(index,className)=>{
          return '<span class="' + className + '">' + '</span>'
        }
       }}
      onSwiper={(swiper) => console.log(swiper)}
      onSlideChange={() => console.log('slide change')}
      className="w-full h-full"
    >
      <SwiperSlide>
        <CarouselTwo />
      </SwiperSlide>
      <SwiperSlide>
        <Carousel />
      </SwiperSlide>
      <SwiperSlide>
        <CarouselTree />
      </SwiperSlide>
      <SwiperSlide>
        <CarouselFour />
      </SwiperSlide>
    </Swiper>
  );
};
