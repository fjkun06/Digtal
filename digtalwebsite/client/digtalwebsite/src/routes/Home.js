import { Grid, Typography, useMediaQuery } from "@mui/material";
import React, { Suspense, useRef, useState } from "react";
import { homeCards } from "./config/home-config";
import HomeCard from "./reusables/HomeCard";
import { useIntersection } from "./useIntersection";
import Arrow from "./Arrow";
import { useTranslation } from "react-i18next";
import HomeSkeleton from "./skeletons/HomeSkeleton";

import { HeaderCarousel } from "./HeaderCarousel";
import { useMemo } from "react";
import ReactVisibilitySensor from "react-visibility-sensor";
import VisibilitySensor from "react-visibility-sensor";
import { useCallback } from "react";
import Headings from "./reusables/Headings";

export default function Home() {
  // const VisibilitySensor = require("react-visibility-sensor");

  const ref = useRef();
  let cards = useMemo(() => [], []);

  // const inViewport = useIntersection(ref, '0px'); // Trigger as soon as the element becomes visible
  const condition = window.location.pathname === "/en/" || "/fr/" || "/de/";

  const { t } = useTranslation(["pageend,form"]);
  const [visible, setVisible] = useState(false);
  const [hasScrolled, setHasScrolled] = useState(false);

  //animate on scroll
  const inViewport = useIntersection(ref, "-500px");
  const match480Down = useMediaQuery("(max-width:480px)");
  const match480Up = useMediaQuery("(min-width:480px)");

  //scroll element
  const [scroller, setScroller] = useState(null);
  const handleScroll = () => scroller.scrollIntoView();

  React.useEffect(() => {
    //setting scroller
    setScroller(document?.getElementById("hinner"));
    // setScroller(document?.getElementById("hbody"));

    if (condition) {
      cards[0] = document.getElementById("hcard1");
      cards[1] = document.getElementById("hcard2");
      cards[2] = document.getElementById("hcard3");
    }

    // mobile animation
    if (condition && inViewport && match480Down) {
      console.log("small screen");
      // callback();
    } else {
      console.log("big screen");
    }
  }, [condition, cards, inViewport, match480Down]);

  React.useEffect(() => {
    //scroll..
    window.addEventListener("scroll", () => {
      const sc = ref?.current?.getBoundingClientRect()?.y;
      // const scb = document.getElementById('hinner')?.getBoundingClientRect()?.bottom;
      const scb = ref?.current?.getBoundingClientRect()?.bottom;
      const sch = ref?.current?.getBoundingClientRect()?.height;
      const ch = document?.documentElement?.clientHeight;

      // console.log(sc);

      //   if(window.scrollY > -200){
      //   console.log(window.scrollY);

      //   }

      //   if( window.scrollTop + window.innerHeight >= document.body.scrollHeight ){
      //     console.log("knnjnnmnm")
      //   }

      // if(ch> sc){
      //   // console.log(sc,ch,scb);

      // }
    });
    //  (document.body).on('touchmove', onScroll);
    document.addEventListener("scroll", () => {
      const sc = ref?.current?.getBoundingClientRect()?.y;
      // const scb = document.getElementById('hinner')?.getBoundingClientRect()?.bottom;
      const scb = ref?.current?.getBoundingClientRect()?.bottom;
      const sch = ref?.current?.getBoundingClientRect()?.height;
      const ch = document?.documentElement?.clientHeight;

      // console.log(sc);
      console.log(window.pageYOffset);
      console.log(window.innerHeight);
      console.log(document.body.scrollHeight);

      if (window.pageYOffset + window.innerHeight + 500 <= document.body.scrollHeight && match480Down) {
        console.log("bellingham");
      }
    });
  }, []);

  //text animation controller
  const callback = useCallback(() => {
    setTimeout(() => {
      setVisible(true);
      setTimeout(() => {
        cards[0].style.animation = "scalar 1.5s ease-in-out 1";
        cards[1].style.animation = " scalar 1.5s ease-in-out 0.75s 1";
        cards[2].style.animation = " scalar 1.5s ease-in-out 1.5s 1";
      }, 1800);
    }, 100);
  }, [cards]);

  // React.useEffect(() => {

  //   const outlet = document.getElementById("hheader");

  //   const sticky = condition ? outlet?.offsetTop : "";
  //   // const sticky = condition ? outlet.offsetTop : "";

  //   const threshold = 0;
  //   let lastScrollY = window.pageYOffset;
  //   let ticking = false;

  //   const updateScrollDir = () => {
  //     const scrollY = window.pageYOffset;

  //     if (Math.abs(scrollY - lastScrollY) < threshold) {
  //       ticking = false;
  //       return;
  //     }
  //     if (lastScrollY >= sticky) {
  //       setHasScrolled(scrollY > lastScrollY ? false : true);
  //      console.log("Ticking scrolling to sticky");
  //     } else {
  //       setHasScrolled(scrollY > lastScrollY ? false : false);
  //     }
  //     lastScrollY = scrollY > 0 ? scrollY : 0;
  //     ticking = false;
  //   };

  //   const onScroll = () => {
  //     if (condition)        console.log("ghgahgsdgdhs Ticking scrolling to sticky");

  //     if (!ticking) {
  //       window.requestAnimationFrame(updateScrollDir);
  //       ticking = true;
  //     }
  //   };

  //   window.addEventListener("scroll", onScroll);

  //   // console.log(scrollDir);

  //   return () => {
  //     window.removeEventListener("scroll", onScroll);
  //     // mainNav.classList.remove("fix");
  //   };
  // }, [ condition]);

  return (
    <>
      <Suspense fallback={<HomeSkeleton />}>
        <Grid className="home">
          <Grid className="home-header" id="hheader">
            <HeaderCarousel />
            <Grid
              item
              className="home-header-arrow-container"
              id="harrow"
              onClick={() => {
                handleScroll();
                callback();
              }}
            >
              {/* <Button>Zoom</Button> */}
              <Arrow onClick={handleScroll} text={t("content", { ns: "home" })} />
            </Grid>
          </Grid>

          <Grid className="home-body" id="hbody">
            {/* <Grid className="home-body-header">
              <Typography variant="h3" className="home-body-header-title">
                {t("nos-services.title", { ns: "home" })}
              </Typography>
              <Typography variant="subtitle1" className="home-body-header-para">
                {t("nos-services.text", { ns: "home" })}
              </Typography>
            </Grid> */}
            <Headings heading={t("nos-services.title", { ns: "home" })} subHeading={t("nos-services.text", { ns: "home" })} />

            <Grid className="home-body-inner" id="hinner" ref={ref}>
              {/* handle animation based on visibility */}
              <div>
                <VisibilitySensor>
                  {/* <VisibilitySensor delayedCall={true} partialVisibility offset={{ top: 750 }} scrollCheck={true}> */}
                  {({ isVisible }) => {
                    console.log("im ", !isVisible);
                    if (isVisible) {
                      console.log(isVisible ? "hello" : "world");
                      callback();
                    }
                    return <Grid className="home-body-inner-animator">{/* <Grid>hello world</Grid> */}</Grid>;
                  }}
                </VisibilitySensor>
              </div>

              {homeCards.map((card, index) => (
                <HomeCard key={card.heading} logo={card.logo} path={card.path} text={t(card.text, { ns: "home" })} heading={t(card.heading, { ns: "form" })} id={"hcard" + (index + 1)} cname={"home-card-" + (index + 1)} visible={visible} appear={index + 1} buttonText={t("card-button", { ns: "home" })} icon={card.icon} />
              ))}
            </Grid>

            <Grid className="home-body-methodology">
              <Headings heading={t("our-process.title", { ns: "home" })} subHeading={t("our-process.text", { ns: "home" })} />

              <Grid className={"home-body-methodology-sub"}>
                {["one", "two", "three", "four", "five", "six", "seven", "eight"].map((child) => (
                  <div key={child} className={"home-body-methodology-sub-" + child}>

                  <div key={child} className={"home-body-methodology-sub-" + child + "-child"}></div>

                  </div>
                ))}
              </Grid>

              {/* <div className="home-body-methodology-one"></div>
              <div className="home-body-methodology-two"></div>
              <div className="home-body-methodology-three"></div>
              <div className="home-body-methodology-four"></div> */}
            </Grid>
          </Grid>
        </Grid>
      </Suspense>
    </>
  );
}
