import { Grid, Typography } from "@mui/material";
import React from "react";

export default function Headings({heading,subHeading}) {
  return (
    <Grid className="home-body-header">
      <Typography variant="h3" className="home-body-header-title">
        {heading}
      </Typography>
      <Typography variant="subtitle1" className="home-body-header-para">
        {subHeading}
      </Typography>
    </Grid>
  );
}
