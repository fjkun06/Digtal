import { PauseIcon } from "src/assets/svg/PauseIcon";
import { PlayIcon } from "src/assets/svg/PlayIcon";
import React from "react";

import slideOne from "src/assets/images/carousel/noir11.jpg";
import slideTwo from "src/assets/images/carousel/noir12.jpg";
import slideThree from "src/assets/images/carousel/noir13.jpg";
import slideFour from "src/assets/images/carousel/noir14.jpg";
import slideFive from "src/assets/images/carousel/noir15.jpg";

export default function SwiperCarousel() {
  const slides = React.useRef([]);
  const buttons = React.useRef([]);
  const [playState, setPlayState] = React.useState("playing");
  const canceler = React.useRef(null);
  const resumeAnimation = React.createRef();

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
        // showDivs((slideIndex = i + 1));
        currentDiv(i + 1);
      });
    }

    raf(gameLoop, 5000);

    resumeAnimation.current?.addEventListener("click", () => {
      raf(gameLoop, 5000);
    });

    return () => cancelAnimationFrame(canceler.current);
  }, []);

  // console.log("currentBTS: " + bts.current);

  // if (slides.current.length > 0) {
  // }

  return (
    <div id="home-carousel">
      <img
        className="mySlide"
        ref={element => {
          slides.current[0] = element;
        }}
        src={slideOne}
        alt="slide one"
      />

      <img
        className="mySlide"
        src={slideTwo}
        ref={element => {
          slides.current[1] = element;
        }}
        alt="slide one"
      />

      <img
        className="mySlide"
        src={slideThree}
        ref={element => {
          slides.current[2] = element;
        }}
        alt="slide one"
      />

      <img
        className="mySlide"
        src={slideFour}
        ref={element => {
          slides.current[3] = element;
        }}
        alt="slide one"
      />

      <img
        className="mySlide"
        src={slideFive}
        ref={element => {
          slides.current[4] = element;
        }}
        alt="slide one"
      />

      <div className="btns">
        <button
          ref={element => {
            buttons.current[0] = element;
          }}
          type="button"
          data-text="btn"
        ></button>
        <button
          ref={element => {
            buttons.current[1] = element;
          }}
          type="button"
          data-text="btn"
        ></button>
        <button
          ref={element => {
            buttons.current[2] = element;
          }}
          type="button"
          data-text="btn"
        ></button>
        <button
          ref={element => {
            buttons.current[3] = element;
          }}
          type="button"
          data-text="btn"
        ></button>
        <button
          ref={element => {
            buttons.current[4] = element;
          }}
          type="button"
          data-text="btn"
        ></button>

        {/* resume
        </PlayIc> */}
      </div>
      <div className="icons">
        <PauseIcon
          handler={() => {
            cancelAnimationFrame(canceler.current);
            setPlayState("paused");
          }}
          state={playState}
        />
        {/* pause
        </PauseIcon> */}
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
