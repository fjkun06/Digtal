import { Grid, Typography } from "@mui/material";
import React from "react";
import mapIcon from "../assets/svg/map-pin.svg";
import telIcon from "../assets/svg/telephone.svg";

const ContactFormSubLocation = ({ country, town, street, tel }) => {
  return (
    <Grid item container md={6}>
      <Typography variant="h4" component={"h4"} className="contact-getintouch-country">
        {country}
      </Typography>
      <Grid item container direction={"row"} spacing={0}>
        <Grid item container pl={0.1} md={1.5}>
          <img src={mapIcon} alt="svg" />
        </Grid>

        <Grid
          item
          container
          pl={0}
          direction={"column"}
          md={10}
          // sx={{ border: "1px solid red" }}
        >
          <Typography variant="h5" component={"h5"}>
            {town}
          </Typography>
          <Typography variant="h5" component={"h5"}>
            {country}
          </Typography>
          <Typography variant="h5" component={"h5"}>
            {street}
          </Typography>
        </Grid>
      </Grid>
      <Grid item container direction={"row"} spacing={0} pt={3}>
        <Grid item container pl={0.1} md={1.5}>
          <img src={telIcon} alt="tel" />
        </Grid>

        <Grid item container direction={"column"} md={10}>
          <Typography variant="h5" component={"h5"}>
            {tel}
          </Typography>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default ContactFormSubLocation;
