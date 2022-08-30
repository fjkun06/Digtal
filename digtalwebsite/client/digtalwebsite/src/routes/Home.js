import { Grid } from "@mui/material";
import React, { useRef, useState } from "react";
import { homeCards } from "./config/home-config";
import HomeCard from "./reusables/HomeCard";
import { Waypoint } from "react-waypoint";
import useOnScreen from "./OnScreen";

export default function Home() {
  const ref = useRef();
  const isVisible = useOnScreen(ref);
  const [func, setFunc] = useState(() => "hello");

  React.useEffect(() => {
    const id1 = document.getElementById("hcard1");
    const id2 = document.getElementById("hcard2");
    const id3 = document.getElementById("hcard3");
    const boxes = document.getElementById("hbody");

    if (isVisible) {
      callback();
    }
    function callback() {
      console.log("callback");
      setTimeout(() => {
      id1.style.animation = "scalar 1s ease-in-out 1";
      id2.style.animation = " scalar 1s ease-in-out 0.5s 1";
      id3.style.animation = " scalar 1s ease-in-out 1s 1";
      }, 1000);
    }
  }, [isVisible]);

  return (
    <>
      <Grid className="home">
        <Grid className="home-header">
          <Grid item>
            <div id="title">
              <div className="header-1">
                <div className="header-arrow-1"></div>
              </div>
              <div className="header-2">
                <div className="header-arrow-2"></div>
              </div>
              <div className="header-3">
                <div className="header-arrow-3"></div>
              </div>
              <div className="header-4">
                <div className="header-arrow-4"></div>
              </div>
            </div>
          </Grid>
          <Grid item>
            <a href="#hbody" className="link">
              Go to content
            </a>
          </Grid>
        </Grid>
        {/* <div ref={ref}>{isVisible && `Yep, I'm on screen`}</div> */}
        {isVisible && console.log("div className")}

        <Grid className="home-body" id="hbody">
          <Grid className="home-body-inner" id="hinner"  ref={ref}>
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
