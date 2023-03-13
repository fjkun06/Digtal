import React from "react";
import BrandSection from "../components/home/brands/main";
import SwiperCarousel from "../components/home/carousel/main";
import ServiceSection from "../components/home/services/main";
import ProcessSection from "src/components/home/process/main";

const Home = () => {
  return (
    <>
      <SwiperCarousel />
      <ServiceSection />
      

      <ProcessSection />
      {/* <MobileProcess /> */}

      <BrandSection heading={"service"}/>
    </>
  );
};

export default Home;
