import { X } from "src/assets/svg/home/infinite-carousel/X";
import React from "react";
import css from "src/assets/svg/home/infinite-carousel/CSS3.svg";
export default function BrandSection() {
  let images = [];
  // React.useEffect(() => {
  //   const el = document.querySelector(".infinite-carousel--box__one");
  //   const e2 = document.querySelector(".infinite-carousel--box__two");

  //   // window.addEventListener("click", (e) => console.log(e));

  //   let i = 0;
  //   let j = 0;
  //   let end;

  //   function run() {
  //     i++;
  //     j++;

  //     if (el.offsetLeft === el.parentElement.clientWidth) {
  //       i = 0 - el.clientWidth * 4;
  //     }
  //     if (e2.offsetLeft === el.parentElement.clientWidth) {
  //       j = 0;
  //     }
  //     if (el.offsetLeft < el.parentElement.clientWidth + 1) {
  //       el.style.marginLeft = `${i * 0.25}px`;
  //     }
  //     if (e2.offsetLeft < el.parentElement.clientWidth * 2 + 1) {
  //       e2.style.marginLeft = `${j * 0.25 - el.parentElement.clientWidth}px`;
  //     }

  //     requestAnimationFrame(run);
  //   }

  //   end = requestAnimationFrame(run);
  //   return () => {
  //     cancelAnimationFrame(end);
  //   };
  // }, []);

  for (let i = 0; i < 12; i++) {
    images[i] = (
      <div class="slide">
        <img
          src={css}
          
          alt="CSS3"
        />
        <img
          src={css}
          
          alt="CSS3"
        />
        <img
          src={css}
          
          alt="CSS3"
        />
      </div>
    );
  }

  return (
    // <div className="infinite-carousel">
    //   <div className="infinite-carousel--box">
    //     <div className="infinite-carousel--box__one">
    //       {/* {images.map(img => img)} */}
    //     </div>
    //     <div className="infinite-carousel--box__two">
    //       {/* {images.map(img => img)} */}
    //     </div>
    //   </div>
    //   {/* <div className="leftblur"></div>
    //     <div className="rightblur"></div> */}
    // </div>

    <div class="infinite-carousel">
      <div class="slider">
        <div class="slide-track">
        {images.map(img => img)}

          </div>
        {/* <div class="slide-track">
        {images.map(img => img)}

          </div>
        <div class="slide-track">
        {images.map(img => img)}

          </div> */}
      </div>
    </div>
  );
}
