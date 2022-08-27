import { Button, Grid, TextField, Typography } from "@mui/material";
import { Box, StyledEngineProvider } from "@mui/system";
import React from "react";
import { useTranslation } from "react-i18next";

export default function Footer() {
  const { t } = useTranslation("pageend");

  return (
    <>
      <StyledEngineProvider injectFirst>
        <Box className="footer">
          <Grid item className="footer-subscribe">
            <Grid item className="footer-subscribe-text">
              <Typography className="footer-subscribe-text-typ">{t("subscribe")}</Typography>
            </Grid>
            <Grid item className="footer-subscribe-item">
              <Grid item>
                {/* <TextField id="subscribe-input" size="small" /> */}
                <input type="text"  id="subscribe-input" placeholder={t("placeholder" )}/>
              </Grid>
              <Grid item>
                <Button className="footer-subscribe-item-button" variant="contained" sx={{}}>
                  {t("subs-button")}
                </Button>
              </Grid>
            </Grid>
          </Grid>
          <Grid item className="footer-menu">
            major
          </Grid>
          <Grid item className="footer-policy">
            major
          </Grid>
        </Box>
      </StyledEngineProvider>
    </>
  );
}
