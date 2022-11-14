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
          <span>I am interested in . . .</span>
        </Grid>
        <Grid item container className="contact-formoptions--pills">
          <h5 component={"span"} sx={{ fontFamily: "Poppins" }} className="contact-formoptions--pills-pill">
            {t("subject.op2")}
          </h5>
          <h5 className="contact-formoptions--pills-pill">{t("subject.op1")}</h5>
          <h5 className="contact-formoptions--pills-pill">{t("subject.op4")}</h5>
          <h5 className="contact-formoptions--pills-pill">{t("subject.op3")}</h5>
        </Grid>
      </Grid>
    </StyledEngineProvider>
  );
};

export default ContactFormOptions;
