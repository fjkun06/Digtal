import React from "react";
import BrandSection from "../components/home/brands/main";
import SwiperCarousel from "../components/home/carousel/main";
import ProcSection from "../components/home/process/main";
import ServiceSection from "../components/home/services/main";

const Home = () => {
  return (
    <>
      <SwiperCarousel />
      <ServiceSection />
      <ProcSection />
      <BrandSection />
    </>
  );
};

export default Home;
