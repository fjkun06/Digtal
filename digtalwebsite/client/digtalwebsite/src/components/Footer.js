import { Button, Grid, Typography } from "@mui/material";
import { Box, StyledEngineProvider } from "@mui/system";
import React from "react";
import { useTranslation } from "react-i18next";
import ActiveNavLink from "../routes/ReusableNavLink";

import FooterLink from "../routes/FooterLink";
import { links, policy, icons } from "./config/footer_config";

export default function Footer({ language }) {
  const { t } = useTranslation("pageend");

  console.log(new Date().getFullYear())

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
                <input type="text" id="subscribe-input" placeholder={t("placeholder")} />
              </Grid>
              <Grid item>
                <Button className="footer-subscribe-item-button" variant="contained">
                  {t("subs-button")}
                </Button>
              </Grid>
            </Grid>
          </Grid>
          <Grid item className="footer-menu">
            <Grid item className="footer-menu-link-text">
              {links.map((link) => (
                <ActiveNavLink key={link.label} to={language + link.route} text={t(link.label)} />
              ))}
            </Grid>
            <Grid item className="footer-menu-link-image">
              {icons.map((icon) => (
                <a key={icon.url} href={icon.url} target="_blank" rel=" noreferrer">
                  {icon.icon}
                </a>
              ))}
            </Grid>
          </Grid>
          <Grid item className="footer-policy">
            <Typography>© {new Date().getFullYear()} Digtal  Tous droits réservés</Typography>
            <Grid item className="footer-policy-link-text">
              {policy.map((link) => (
                <FooterLink key={link.label} to={language + link.route} text={t(link.label)} className="footer-policy-link-text-item" sx={{ color: "red" }} />
              ))}
            </Grid>
          </Grid>
        </Box>
      </StyledEngineProvider>
    </>
  );
}
