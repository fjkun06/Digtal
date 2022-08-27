import { Button, Grid, Typography } from "@mui/material";
import { Box, StyledEngineProvider } from "@mui/system";
import React from "react";
import { useTranslation } from "react-i18next";
import ActiveNavLink from "../routes/ReusableNavLink";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";
import YouTubeIcon from "@mui/icons-material/YouTube";

export default function Footer({ language }) {
  const { t } = useTranslation("pageend");
  const links = [
    { label: "link.about", route: "/about" },
    { label: "link.contact", route: "/contact" },
    { label: "link.legal", route: "/legal-police" },
    { label: "link.news", route: "/news" },
  ];

  const icons = [
     { url: "facebook.com", icon: <FacebookIcon fontSize="large"/> },
    { url: "twitter.com", icon: <TwitterIcon fontSize="large"/> },
    { url: "instagram.com", icon: <InstagramIcon fontSize="large"/> },
    { url: "youtube.com", icon: <YouTubeIcon fontSize="large"/> },
  ];

  console.log("langggg: ", language);

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
                <ActiveNavLink key={icon.url} to={icon.url} text={icon.icon} />
              ))}
            </Grid>
          </Grid>
          <Grid item className="footer-policy">
            major
          </Grid>
        </Box>
      </StyledEngineProvider>
    </>
  );
}
