import * as React from "react";
import { Grid, Typography, useMediaQuery } from "@mui/material";
import picture from "../assets/images/image.png";
import pictureSM from "../assets/images/image2.png";
import CustomImage from "./ReusableImage";
// import { useState } from "react";
import { useTranslation } from "react-i18next";

import ContactFormFields from "./ContactFormFields";

export default function Contact() {
  //the hook for the form
  // const [contact, setContact] = useState({});

  //   //media queries
  const matchesSM = useMediaQuery("(max-width:900px)");
  const cmd = useMediaQuery("(min-width:900px)");
  const cxs = useMediaQuery("(max-width:599px)");
  const matchesMDAndAbove = useMediaQuery("(min-width:901px)");

  //   //setting up language translator
  const { t } = useTranslation(["form", "formerror"]);


  // const onSubmit = (data) => {
  //   console.log("onSubmit", data);

  //   setContact(data);
  // };

  return (
    <Grid
      container
      component="form"
      m = {4}
      id="form1"
      alignItems={"center"}
      justifyContent="center"
      direction="row"
      pl={{ xs: 1 }}
      pr={{ xs: 1 }}
      sx={{
        "& .MuiTextField-root": { mt: 5 },
        padding: "1rem",
      }}
      noValidate
      autoComplete="off"
      //   onSubmit={handleSubmit(onSubmit)}
    >
      {/* <Grid item container pl={{ xs: 1, sm: 4 }}>
        <Grid item container>
          <Typography variant="h3" gutterBottom component="div">
            {t("contact-section.contact")}
          </Typography>
        </Grid>
        <Grid item container pl={1}>
          <Typography variant="subtitle1" gutterBottom component="div">
            {t("contact-section.our")}
          </Typography>
        </Grid>
      </Grid> */}

      <Grid container sx={{ display: { xs: "none", sm: "block", md: "block" } }} item md={4.5} sm={5} className="contact-getintouch">
        {/* {matchesSM && <CustomImage image={pictureSM} alt="background" />}

        {matchesMDAndAbove && <CustomImage image={picture} />} */}
      </Grid>
      <ContactFormFields t={t} cxs={cxs} cmd={cmd} />

    </Grid>
  );
}
