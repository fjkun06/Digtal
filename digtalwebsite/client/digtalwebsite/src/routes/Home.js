import { Grid, Typography } from "@mui/material";
import React, { Suspense, useRef, useState } from "react";
import { homeCards } from "./config/home-config";
import HomeCard from "./reusables/HomeCard";
import { useIntersection } from "./useIntersection";
import Arrow from "./Arrow";
import { useTranslation } from "react-i18next";
import HomeSkeleton from "./skeletons/HomeSkeleton";

import { HeaderCarousel } from "./HeaderCarousel";
import { useMemo } from "react";

export default function Home() {
  const ref = useRef();
  let cards = useMemo(() => [], []);

  // const inViewport = useIntersection(ref, '0px'); // Trigger as soon as the element becomes visible
  const condition = window.location.pathname === "/en/" || "/fr/" || "/de/";

  const { t } = useTranslation(["pageend,form"]);
  const [visible, setVisible] = useState(false);

  //scroll element
  const [scroller, setScroller] = useState(null);
  const handleScroll = () => scroller.scrollIntoView();

  //scroll arrow

  React.useEffect(() => {
    //setting scroller
    setScroller(document?.getElementById("hbody"));

    if (condition) {
      cards[0] = document.getElementById("hcard1");
      cards[1] = document.getElementById("hcard2");
      cards[2] = document.getElementById("hcard3");
    }
  }, [condition, cards]);

  //text animation controller
  function callback() {
    console.log("callbackkkkk");
    setTimeout(() => {
      setVisible(true);
      console.log("set visible:", visible);
      setTimeout(() => {
        cards[0].style.animation = "scalar 1.5s ease-in-out 1";
        cards[1].style.animation = " scalar 1.5s ease-in-out 0.75s 1";
        cards[2].style.animation = " scalar 1.5s ease-in-out 1.5s 1";
      }, 1800);
    }, 100);
  }

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

          <Grid className="home-body" id="hbody" onMouseEnter={() => {console.log("i am in/....")}} onMouseOver={() => console.log("im over.........")}>
            <Grid className="home-body-header">
              <Typography variant="h3" className="home-body-header-title">
                {t("nos-services.title", { ns: "home" })}
              </Typography>
              <Typography variant="subtitle1" className="home-body-header-para">
                {t("nos-services.text", { ns: "home" })}
              </Typography>
            </Grid>
            <Grid className="home-body-inner" id="hinner" ref={ref}>
              {/* <Waypoint topOffset="20%" onEnter={() => func()} /> */}

              {homeCards.map((card, index) => (
                <HomeCard key={card.heading} logo={card.logo} path={card.path} text={t(card.text, { ns: "home" })} heading={t(card.heading, { ns: "form" })} id={"hcard" + (index + 1)} cname={"home-card-" + (index + 1)} visible={visible} appear={index + 1} buttonText={t("card-button", { ns: "home" })} icon={card.icon} />
              ))}

              {/* <HomeCard/>
          <HomeCard/> */}
            </Grid>
            <Grid className="home-body-methodology">
            <div className="home-body-methodology-one"></div>
            <div className="home-body-methodology-two"></div>
            <div className="home-body-methodology-three"></div>
            <div className="home-body-methodology-four"></div>
            </Grid>
          </Grid>
        </Grid>
      </Suspense>
    </>
  );
}
