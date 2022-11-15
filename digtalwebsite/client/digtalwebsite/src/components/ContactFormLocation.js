import { Grid, Typography } from "@mui/material";
import React from "react";

const ContactFormLocation = () => {
  return (
    <Grid
      container
      item
      xs={12}
      sm={5}
      pl={{ xs: 1, sm: 4, md: 5 }}
      pr={{ xs: 1, sm: 4, md: 5 }}
      md={5}
      sx={{
        padding: { xs: "8px" },
      }}
      alignItems="center"
      justifyContent={"center"}
      className="contact-getintouch"
    >
      <Grid item container>
        <Typography variant="h1" component={"h1"}>Get in Touch</Typography>
      </Grid>
      <Grid item container>
        image{" "}
      </Grid>
      <Grid item container>
        location{" "}
      </Grid>
    </Grid>
  );
};

export default ContactFormLocation;
