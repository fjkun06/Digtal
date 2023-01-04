import { PauseIcon } from "src/assets/svg/PauseIcon";
import { PlayIcon } from "src/assets/svg/PlayIcon";
import React from "react";

import slideOne from "src/assets/images/carousel/noir11.jpg";
import slideTwo from "src/assets/images/carousel/noir12.jpg";
import slideThree from "src/assets/images/carousel/noir13.jpg";
import slideFive from "src/assets/images/carousel/noir15.jpg";
import { useTranslation } from "react-i18next";

import { useMediaQuery } from "@material-ui/core";

export default function SwiperCarousel() {
  const slides = React.useRef([]);
  const buttons = React.useRef([]);
  const [playState, setPlayState] = React.useState("playing");
  const canceler = React.useRef(null);
  const resumeAnimation = React.useRef();
  const { t } = useTranslation("home");
  const max480 = useMediaQuery("(max-width:480px)");
  const min480 = useMediaQuery("(min-width:481px)");

  React.useEffect(() => {
    let slideIndex = 1;
    showDivs(slideIndex);
    function raf(func, ms) {
      let start = performance.now();
      const loop = curr => {
        if (curr - start >= ms) {
          func(curr);
          start = curr;
        }

        canceler.current = requestAnimationFrame(loop);
      };
      canceler.current = requestAnimationFrame(loop);
    }

    function showDivs(n) {
      var i;
      //mkx carousel 360
      if (slides.current.length > 0) {
        if (n > slides.current.length) {
          slideIndex = 1;
        }
        if (n < 1) {
          slideIndex = slides.current.length;
        }

        for (i = 0; i < slides.current.length; i++) {
          slides.current[i].style.display = "none";
        }
        for (i = 0; i < buttons.current.length; i++) {
          buttons.current[i].style.background = "none";
          buttons.current[i].style.border = "3px solid white";
          buttons.current[i].style.filter = "blur(1.5px)";
        }
        slides.current[slideIndex - 1].style.display = "block";

        buttons.current[slideIndex - 1].style.background =
          "var(--navbar-bb-light)";
        buttons.current[slideIndex - 1].style.border = "none";
        buttons.current[slideIndex - 1].style.filter = "blur(0)";
      }
    }

    function gameLoop(timestamp) {
      slideIndex++;

      showDivs(slideIndex);
    }

    function currentDiv(n) {
      showDivs((slideIndex = n));
    }

    for (let i = 0; i < buttons.current.length; i++) {
      buttons.current[i].addEventListener("click", () => {
        currentDiv(i + 1);
      });
    }

    raf(gameLoop, 5000);

    resumeAnimation.current?.addEventListener("click", () => {
      raf(gameLoop, 5000);
    });

    return () => cancelAnimationFrame(canceler.current);
  }, []);

  return (
    <div id="home-carousel">
      <div
        className="mySlide"
        ref={element => {
          slides.current[0] = element;
        }}
      >
        <img src={slideOne} alt="slide one" />
        <div
          className="mainHolder holder1"
          style={{ display: max480 ? "" : "none" }}
        >
          <div className="tb">
            <div>{t("carousel.mobile.slide1.one")}</div>
          </div>
          <div className="tb">
            <div>{t("carousel.mobile.slide1.two")}</div>
          </div>
          <div className="tb">
            <div>{t("carousel.mobile.slide1.three")}</div>
          </div>
          <div className="tb">
            <div>{t("carousel.mobile.slide1.four")}</div>
          </div>
        </div>
        <div
          className="laptopHolder big1"
          style={{ display: min480 ? "" : "none" }}
        >
          <div className="tb">
            <div>{t("carousel.laptop.slide1.one")}</div>
          </div>
          <div className="tb">
            <div>{t("carousel.laptop.slide1.two")}</div>
          </div>
        </div>
      </div>
      <div
        ref={element => {
          // slides.current[0] = element;
          slides.current[3] = element;
        }}
        className="mySlide"
      >
        <img src={slideTwo} alt="slide two" />
        <div
          className="mainHolder holder2"
          style={{ display: max480 ? "" : "none" }}
        >
          <div className="tb">
            <div>{t("carousel.mobile.slide4.one")}</div>
          </div>
          <div className="tb">
            <div>{t("carousel.mobile.slide4.two")}</div>
          </div>
          <div className="tb">
            <div>{t("carousel.mobile.slide4.three")}</div>
          </div>
        </div>
        <div
          className="laptopHolder big2"
          style={{ display: min480 ? "" : "none" }}
        >
          <div className="tb">
            <div>{t("carousel.laptop.slide4.one")}</div>
          </div>
          <div className="tb">
            <div>{t("carousel.laptop.slide4.two")}</div>
          </div>
        </div>
      </div>

      <div
        ref={element => {
          // slides.current[0] = element;
          slides.current[2] = element;
        }}
        className="mySlide"
      >
        <img src={slideThree} alt="slide three" />
        <div
          className="mainHolder holder3"
          style={{ display: max480 ? "" : "none" }}
        >
          <div className="tb">
            <div>{t("carousel.mobile.slide3.one")}</div>
          </div>
          <div className="tb">
            <div>{t("carousel.mobile.slide3.two")}</div>
          </div>
          <div className="tb">
            <div>{t("carousel.mobile.slide3.three")}</div>
          </div>
        </div>
        <div
          className="laptopHolder big3"
          style={{ display: min480 ? "" : "none" }}
        >
          <div className="tb">
            <div>{t("carousel.laptop.slide3.one")}</div>
          </div>
          <div className="tb">
            <div>{t("carousel.laptop.slide3.two")}</div>
          </div>
        </div>
      </div>

      <div
        ref={element => {
          // slides.current[0] = element;
          slides.current[1] = element;
        }}
        className="mySlide"
      >
        <img src={slideFive} alt="slide four" />
        <div
          className="mainHolder holder4"
          style={{ display: max480 ? "" : "none" }}
        >
          <div className="tb">
            <div>{t("carousel.mobile.slide2.one")}</div>
          </div>
          <div className="tb">
            <div>{t("carousel.mobile.slide2.two")}</div>
          </div>
          <div className="tb">
            <div>{t("carousel.mobile.slide2.three")}</div>
          </div>
        </div>
        <div
          className="laptopHolder big4"
          style={{ display: min480 ? "" : "none" }}
        >
          <div className="tb">
            <div>{t("carousel.laptop.slide2.one")}</div>
          </div>
          <div className="sub-tb">
            <div className="tb">
              <div>{t("carousel.laptop.slide2.two")}</div>
            </div>
            <div className="tb">
              <div>{t("carousel.laptop.slide2.three")}</div>
            </div>
            <div className="tb">
              <div>{t("carousel.laptop.slide2.four")}</div>
            </div>
          </div>
        </div>
      </div>

      <div className="btns">
        {[1, 2, 3, 4].map((button, index) => (
          <button
            key={index}
            ref={element => {
              buttons.current[index] = element;
            }}
            type="button"
          ></button>
        ))}
      </div>
      <div className="icons">
        <PauseIcon
          handler={() => {
            cancelAnimationFrame(canceler.current);
            setPlayState("paused");
          }}
          state={playState}
        />

        <PlayIcon
          state={playState}
          ref={resumeAnimation}
          handler={() => {
            setPlayState("playing");
          }}
        />
      </div>
    </div>
  );
}
