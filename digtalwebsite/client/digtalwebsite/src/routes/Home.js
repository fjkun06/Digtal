import { Grid } from "@mui/material";
import React from "react";

export default function Home() {
  return (
    <>
      <Grid className="home">
        <Grid className="home-header">
          <Grid item>
            <div id="title">
              <div class="header-1">
                <div class="header-arrow-1"></div>
              </div>
              <div class="header-2">
                <div class="header-arrow-2"></div>
              </div>
              <div class="header-3">
                <div class="header-arrow-3"></div>
              </div>
              <div class="header-4">
                <div class="header-arrow-4"></div>
              </div>
            </div>
          </Grid>
          <Grid item>
            <a href="#hbody" className="link">
              Go to content
            </a>
          </Grid>
        </Grid>

        <Grid className="home-body" id="hbody"></Grid>
      </Grid>
    </>
  );
}
