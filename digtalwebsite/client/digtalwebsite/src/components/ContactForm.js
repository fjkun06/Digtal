import * as React from "react";
import { Button, FormControl, FormHelperText, Grid, InputLabel, MenuItem, Select, Typography, useMediaQuery } from "@mui/material";
import picture from "../assets/images/image.png";
import pictureSM from "../assets/images/image2.png";
import { purple } from "@mui/material/colors";
import CustomTextField from "./ReusableTextField";
import CustomImage from "./ReusableImage";
import { useState } from "react";
import Telephone from "./Telephone";
import { Controller, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useTranslation } from "react-i18next";

import schema from "../schemas/yupSchema";
import ContactFormFields from "./ContactFormFields";

export default function Contact() {
  //the hook for the form
  const [contact, setContact] = useState({});

  //   //media queries
  const matchesSM = useMediaQuery("(max-width:900px)");
  const cmd = useMediaQuery("(min-width:900px)");
  const cxs = useMediaQuery("(max-width:599px)");
  const matchesMDAndAbove = useMediaQuery("(min-width:901px)");

  //   //setting up language translator
  const { t, i18n, ready } = useTranslation(["form", "formerror"]);


  // const [loading, setLoading] = React.useState(false);


  //loading state
  // function handleClick() {
  //   setLoading(true);
  //   // setError(error ? false : true);
  // }

  

  const onSubmit = (data) => {
    console.log("onSubmit", data);

    setContact(data);
  };

  return (
    <Grid
      container
      component="form"
      id="form1"
      alignItems={"center"}
      justifyContent="center"
      direction="row"
      pl={{ xs: 1 }}
      pr={{ xs: 1 }}
      sx={{
        "& .MuiTextField-root": { mt: 5 },
        padding: "1rem",
        // width:"100vw"
      }}
      noValidate
      autoComplete="off"
      //   onSubmit={handleSubmit(onSubmit)}
    >
      <Grid item container pl={{ xs: 1, sm: 4 }}>
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
      </Grid>
      <ContactFormFields t={t} cxs={cxs} cmd={cmd} />
  
      <Grid container sx={{ display: { xs: "none", sm: "block", md:"block" } }} item md={6} sm={7}>
        {/* conditional rendering images based on breakpoints */}
        {matchesSM && <CustomImage image={pictureSM} alt="background" />}

        {matchesMDAndAbove && <CustomImage image={picture} />}
      </Grid>
    </Grid>
  );
}
