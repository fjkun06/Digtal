import { Grid, Typography } from "@mui/material";
import React, { useRef, useState } from "react";
import { homeCards } from "./config/home-config";
import HomeCard from "./reusables/HomeCard";
import { useIntersection } from "./OnScreen";
import Arrow from "./Arrow";
import { useTranslation } from "react-i18next";

export default function Home() {
  const ref = useRef();
  // const inViewport = useIntersection(ref, '0px'); // Trigger as soon as the element becomes visible
  const inViewport = useIntersection(ref, "-200px");
  const { t } = useTranslation("pageend");

  React.useEffect(() => {
    const id1 = document.getElementById("hcard1");
    const id2 = document.getElementById("hcard2");
    const id3 = document.getElementById("hcard3");

    if (inViewport) {
      console.log("in viewport:", ref.current);
      callback();
    }
    function callback() {
      console.log("callbackkkkk");
      setTimeout(() => {
        id1.style.animation = "scalar 1.5s ease-in-out 1";
        id2.style.animation = " scalar 1.5s ease-in-out 0.75s 1";
        id3.style.animation = " scalar 1.5s ease-in-out 1.5s 1";
      }, 1000);
    }
  }, [inViewport]);

  return (
    <>
      <Grid className="home">
        <Grid className="home-header">
          <Grid item>
            <Arrow />
          </Grid>
          <Grid item>
            <a href="#hbody" className="link">
              {t("content")}
            </a>
          </Grid>
        </Grid>
        {/* <div ref={ref}>{isVisible && `Yep, I'm on screen`}</div> */}
        {/* {isVisible && console.log("div className")} */}

        <Grid className="home-body" id="hbody">
          <Grid className="home-body-header">
            <Typography variant="h3" className="home-body-header-title">
              Nos Services
            </Typography>
            <Typography variant="subtitle1" className="home-body-header-para">
              Profitez du savoir faire de notre jeune et dynamique équipe regroupant
               plus de 10 experts <br/> du développement web & mobile, du IT Consulting et
                du Marketing Digital.
            </Typography>
          </Grid>
          <Grid className="home-body-inner" id="hinner" ref={ref}>
            {/* <Waypoint topOffset="20%" onEnter={() => func()} /> */}

            {homeCards.map((card, index) => (
              <HomeCard key={card.heading} logo={card.logo} text={card.text} heading={card.heading} id={"hcard" + (index + 1)} cname={"home-card-" + (index + 1)} />
            ))}
            {/* <HomeCard/>
          <HomeCard/> */}
          </Grid>
        </Grid>
      </Grid>
    </>
  );
}
