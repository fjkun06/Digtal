import * as React from "react";
import { Grid, useMediaQuery } from "@mui/material";
import { useForm } from "react-hook-form";
// import { useState } from "react";
import { useTranslation } from "react-i18next";

import ContactFormFields from "./ContactFormFields";
import ContactFormLocation from "./ContactFormLocation";

export default function Contact() {
  //the hook for the form
  // const [contact, setContact] = useState({});

  //   //media queries
  // const matchesSM = useMediaQuery("(max-width:900px)");
  const cmd = useMediaQuery("(min-width:900px)");
  const cxs = useMediaQuery("(max-width:599px)");
  // const matchesMDAndAbove = useMediaQuery("(min-width:901px)");

  //   //setting up language translator
  const { t } = useTranslation(["form", "formerror"]);
  const { handleSubmit } = useForm();

  return (
    <Grid
      container
      component="form"
      m={4}
      ml={1}
      mt={10}
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
      onSubmit={handleSubmit((data) => console.log(data))}
    >
      <ContactFormLocation />
      <ContactFormFields t={t} cxs={cxs} cmd={cmd} />
    </Grid>
  );
}
