import { X } from "src/assets/svg/home/infinite-carousel/X";
import React from "react";
import css from "src/assets/svg/home/infinite-carousel/css.svg";
import { line1, line2, line3 } from "./config";
import HomeHeading from "src/components/reusables/HomeHeading";
import { useMediaQuery } from "@mui/material";
export default function BrandSection() {
  let images = [];
  let images22 = [];
  let images3 = [];
  const [noSlides, setNoSlides] = React.useState(2);
  const desktop = useMediaQuery("(min-width:1500.1px)");
  const laptop = useMediaQuery("(min-width:600.1px)");

  React.useEffect(() => {
    if (desktop) {
      setNoSlides(8);
    } else if (laptop) {
      setNoSlides(8);
    } else {
      setNoSlides(2);
    }
    if (desktop) console.log("desktop: ", noSlides);

    return () => {};
  }, [desktop, noSlides,laptop]);

  for (let i = 0; i < noSlides; i++) {
    // for (let i = 0; i < 3; i++) {
    // for (let i = 0; i < 6; i++) {
    images[i] = (
      <div class="slide">
        <img src={line1[0]} alt="CSS3" />
        <img src={line1[1]} alt="CSS3" />
        <img src={line1[2]} alt="CSS3" />
        <img src={line1[3]} alt="CSS3" />
        <img src={line1[4]} alt="CSS3" />
        <img src={line1[5]} alt="CSS3" />
      </div>
    );
    images22[i] = (
      <div class="slide2">
        {/* <div class="slide2"> */}
        <img src={line2[0]} alt="CSS3" />
        <img src={line2[1]} alt="CSS3" />
        <img src={line2[2]} alt="CSS3" />
        <img src={line2[3]} alt="CSS3" />
        <img src={line2[4]} alt="CSS3" />
        <img src={line2[5]} alt="CSS3" />

        {/* <img src={line2[0]} alt="CSS3" /> */}
      </div>
    );
    images3[i] = (
      <div class="slide">
        <img src={line3[0]} alt="CSS3" />
        <img src={line3[1]} alt="CSS3" />
        <img src={line3[2]} alt="CSS3" />
        <img src={line3[3]} alt="CSS3" />
        <img src={line3[4]} alt="CSS3" />
        <img src={line3[5]} alt="CSS3" />
      </div>
    );
  }

  return (
    <div class="home__technologies">
      <HomeHeading section={"service"} />
      {/* <div className="right"> */}
      <X classN={"right"} />
      <X classN={"left"} />
      {/* </div> */}

      <div class="infinite-carousel">
        <div class="slider">
          <div class="slide-track">{images.map(img => img)}</div>
          {/* <div class="slide-track">{images22.map(img => img)}</div> */}
          <div class="slide-track">{images22.map(img => img)}</div>
          {/* <div class="slide-track">{images3.map(img => img)}</div> */}
          <div class="slide-track">{images3.map(img => img)}</div>
        </div>
      </div>
    </div>
  );
}
