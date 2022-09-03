import { Grid, Typography } from "@mui/material";
import React, { Suspense, useCallback, useRef, useState } from "react";
import { homeCards } from "./config/home-config";
import HomeCard from "./reusables/HomeCard";
import { useIntersection } from "./useIntersection";
import Arrow from "./Arrow";
import { useTranslation } from "react-i18next";
import HomeSkeleton from "./skeletons/HomeSkeleton";

import SwipeableTextMobileStepper, { HeaderCarousel } from "./HeaderCarousel";

export default function Home() {
  const ref = useRef();

  // const inViewport = useIntersection(ref, '0px'); // Trigger as soon as the element becomes visible
  const condition = window.location.pathname === "/en/" || "/fr/" || "/de/";

  const inViewport = useIntersection(ref || null, "-200px");

  const { t } = useTranslation(["pageend,form"]);
  const [visible, setVisible] = useState(false);

  //scroll element
  const [scroller, setScroller] = useState(null);
  const handleScroll = () => scroller.scrollIntoView();

  //scroll arrow
  const [scrollArrow, setScrollArrow] = useState(null);

  React.useEffect(() => {
    //setting scroller
    setScroller(document?.getElementById("hbody"));

    //setting scroll arrow
    setScrollArrow(document?.getElementById("harrow"));

    const id1 = document.getElementById("hcard1");
    const id2 = document.getElementById("hcard2");
    const id3 = document.getElementById("hcard3");

    if (inViewport && condition) {
      console.log("in viewport:", ref.current);
      callback();
    }
    function callback() {
      console.log("callbackkkkk");
      setTimeout(() => {
        setVisible(true);
        console.log("set visible:", visible);
        setTimeout(() => {
          id1.style.animation = "scalar 1.5s ease-in-out 1";
          id2.style.animation = " scalar 1.5s ease-in-out 0.75s 1";
          id3.style.animation = " scalar 1.5s ease-in-out 1.5s 1";
        }, 1800);
      }, 100);
    }
  }, [visible, inViewport, condition]);
  // }, [visible, inViewport, condition, carouselElement, nextCarousel, carouselPosition,prev]);

  return (
    <>
      <Suspense fallback={<HomeSkeleton />}>
        <Grid className="home">
          <Grid className="home-header" id="hheader">
            <HeaderCarousel />
            <Grid item className="home-header-arrow-container" id="harrow" onClick={handleScroll}>
                {/* <Button>Zoom</Button> */}
                <Arrow onClick={handleScroll} text={t("content", { ns: "pageend" })}/>
            </Grid>
          </Grid>

          <Grid className="home-body" id="hbody">
            <Grid className="home-body-header">
              <Typography variant="h3" className="home-body-header-title">
                {t("nos-services.title", { ns: "pageend" })}
              </Typography>
              <Typography variant="subtitle1" className="home-body-header-para">
                {t("nos-services.text", { ns: "pageend" })}
              </Typography>
            </Grid>
            <Grid className="home-body-inner" id="hinner" ref={ref}>
              {/* <Waypoint topOffset="20%" onEnter={() => func()} /> */}

              {homeCards.map((card, index) => (
                <HomeCard key={card.heading} logo={card.logo} path={card.path} text={t(card.text, { ns: "pageend" })} heading={t(card.heading, { ns: "form" })} id={"hcard" + (index + 1)} cname={"home-card-" + (index + 1)} visible={visible} appear={index + 1} buttonText={t("card-button", { ns: "pageend" })} />
              ))}
              {homeCards.map((card, index) => (
                <HomeCard key={card.heading} logo={card.logo} path={card.path} text={t(card.text, { ns: "pageend" })} heading={t(card.heading, { ns: "form" })} id={"hcard" + (index + 1)} cname={"home-card-" + (index + 1)} visible={visible} appear={index + 1} buttonText={t("card-button", { ns: "pageend" })} />
              ))}
              {/* <HomeCard/>
          <HomeCard/> */}
            </Grid>
          </Grid>
        </Grid>
      </Suspense>
    </>
  );
}
