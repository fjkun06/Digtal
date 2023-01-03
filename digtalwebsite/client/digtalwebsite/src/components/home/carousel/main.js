import React from "react";
// import PlayArrowIcon from '@mui/icons-material/PlayArrow';
// import "swiper/css";
// import "swiper/css/navigation";
// import "swiper/css/pagination";
// import "swiper/css/scrollbar";
// import "swiper/css/effect-fade";
// import "./styles/pagination.css";
import slideOne from "src/assets/images/carousel/noir11.jpg";
import slideTwo from "src/assets/images/carousel/noir12.jpg";
import slideThree from "src/assets/images/carousel/noir13.jpg";
import slideFour from "src/assets/images/carousel/noir14.jpg";
import slideFive from "src/assets/images/carousel/noir15.jpg";
// import slideOne from "src/assets/images/carousel/noir1.webp";
// import slideTwo from "src/assets/images/carousel/noir2.webp";
// import slideThree from "src/assets/images/carousel/noir3.webp";
// import slideFour from "src/assets/images/carousel/noir4.webp";
// import slideFive from "src/assets/images/carousel/noir5.webp";

export default function SwiperCarousel() {
  const slides = React.useRef([]);
  const buttons = React.useRef([]);
  // const [buttons, setButtons] = React.useState(null);
  const [playState, setPlayState] = React.useState("playing");
  const requestRef = React.useRef();
  const canceler = React.useRef(null);
  const resumeAnimation = React.useRef(null);

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
      // const slides = document.getElementsByClassName("mySlides");

      //mkx carousel 360
      if (slides.current.length > 0) {
        if (n > slides.current.length) {
          slideIndex = 1;
        }
        if (n < 1) {
          slideIndex = slides.current.length;
        }
        // slides.current.forEach(slide => (slide.style.display = "none"));
        // buttons.current.forEach(button => {
        //   button.style.backgroundColor = "#663399";
        //   button.style.color = "white";
        // });

        for (i = 0; i < slides.current.length; i++) {
          // slides[i].style.opacity = "0";
          slides.current[i].style.display = "none";
        }
        for (i = 0; i < buttons.current.length; i++) {
          // buttons.current[i].style.backgroundColor = "#663399";
          // buttons.current[i].style.color = "white";
        }
        // slides[slideIndex - 1].style.opacity = "1";
        slides.current[slideIndex - 1].style.display = "block";
        // buttons.current[slideIndex - 1].style.backgroundColor = "white";
        // buttons.current[slideIndex - 1].style.color = "#663399";
      }
    }

    // raf(gameLoop, 5000);

    function gameLoop(timestamp) {
      slideIndex++;

      showDivs(slideIndex);
    }

    // buttons.current.forEach((button, index) =>
    //   button.addEventListener("click", () => {
    //     showDivs((slideIndex = index + 1));
    //     console.log("hell")
    //     // currentDiv(index + 1);
    //   })
    // );

    function currentDiv(n) {
      showDivs((slideIndex = n));
    }

    for (let i = 0; i < buttons.current.length; i++) {
      buttons.current[i].addEventListener("click", () => {
        // showDivs((slideIndex = i + 1));
        console.log("hell");
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
        >
          
        </button>
        <button
          ref={element => {
            buttons.current[1] = element;
          }}
          type="button"
          data-text="btn"
        >
          
        </button>
        <button
          ref={element => {
            buttons.current[2] = element;
          }}
          type="button"
          data-text="btn"
        >
          
        </button>
        <button
          ref={element => {
            buttons.current[3] = element;
          }}
          type="button"
          data-text="btn"
        >
          
        </button>
        <button
          ref={element => {
            buttons.current[4] = element;
          }}
          type="button"
          data-text="btn"
        >
          
        </button>

        {/* <button
          // onClick={() => setReset(false)}
          style={{ display: playState === "playing" ? "inline-block" : "none" }}
          onClick={() => {
            cancelAnimationFrame(canceler.current);
            setPlayState("paused");
          }}
          type="button"
        >
          pause
        </button>
        <button
          style={{
            display: playState === "paused" ? "inline-block" : "none"
          }}
          type="button"
          ref={resumeAnimation}
          onClick={() => {
            setPlayState("playing");
          }}
        >
          resume
        </button> */}
        
      </div>
    </div>
  );
}
