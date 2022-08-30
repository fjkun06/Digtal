import { Grid } from "@mui/material";
import React from "react";
import { homeCards } from "./config/home-config";
import HomeCard from "./reusables/HomeCard";


export default function Home() {
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

        <Grid className="home-body" id="hbody">
          <Grid className="home-body-inner"> 
          {homeCards.map((card, index) => 
          <HomeCard key={card.heading} logo={card.logo} text={card.text} heading={card.heading} cname={"home-card" + (index + 1)}/>
            
            )}
          {/* <HomeCard/>
          <HomeCard/> */}
           </Grid>
        </Grid>
      </Grid>
    </>
  );
}
