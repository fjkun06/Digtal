import { Typography } from "@material-ui/core";
import { Grid } from "@mui/material";
import { StyledEngineProvider } from "@mui/system";
import React from "react";
import { useTranslation } from "react-i18next";

const ContactFormOptions = () => {
  const { t, i18n } = useTranslation("form");
  return (
    <StyledEngineProvider injectFirst>
      <Grid container className="contact-formoptions">
        <Grid item container className="contact-formoptions-heading">
          <Typography variant="h4">I am interested in...</Typography>
        </Grid>
        <Grid item container className="contact-formoptions--pills">
          <Typography variant="h5" sx={{ fontFamily: "Poppins" }} className="contact-formoptions--pills-pill">
            {t("subject.op2")}
          </Typography>
          <Typography variant="h5" className="contact-formoptions--pills-pill">
            {t("subject.op1")}
          </Typography>
          <Typography variant="h5" className="contact-formoptions--pills-pill">
            {t("subject.op4")}
          </Typography>
          <Typography variant="h5" className="contact-formoptions--pills-pill">
            {t("subject.op3")}
          </Typography>
        </Grid>
      </Grid>
    </StyledEngineProvider>
  );
};

export default ContactFormOptions;
