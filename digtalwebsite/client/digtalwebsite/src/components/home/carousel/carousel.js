import CarouselLayout from "./layout"
import { Carousel } from "./config"
import SwiperCarousel from "./main"

export default function CarouselSection(){
    return (
        <CarouselLayout>
            <SwiperCarousel />
        </CarouselLayout>
    )
}
