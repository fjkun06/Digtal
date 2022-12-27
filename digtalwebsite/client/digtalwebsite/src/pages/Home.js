import React from "react";
import BrandSection from "../components/home/brands/main";
import SwiperCarousel from "../components/home/carousel/main";
import ProcSection from "../components/home/process/main";
import ServiceSection from "../components/home/services/main";
import { ProcessSection } from "src/components/home/process2/makeprocess";

const Home = () => {
  return (
    <>
      <SwiperCarousel />
      <ServiceSection />
      <ProcessSection />
      <BrandSection />
    </>
  );
};

export default Home;
