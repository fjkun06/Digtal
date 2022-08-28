import { Button, Grid, Link, Typography } from "@mui/material";
import { Box, StyledEngineProvider } from "@mui/system";
import React from "react";
import { useTranslation } from "react-i18next";
import ActiveNavLink from "../routes/ReusableNavLink";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";
import YouTubeIcon from "@mui/icons-material/YouTube";
import FooterLink from "../routes/FooterLink";

export default function Footer({ language }) {
  const { t } = useTranslation("pageend");
  const links = [
    { label: "link.about", route: "/about" },
    { label: "link.contact", route: "/contact" },
    { label: "link.legal", route: "/legal-notice" },
    { label: "link.news", route: "/news" },
  ];

  const policy = [
    { label: "terms", route: "/terms-of-use" },
    { label: "policy", route: "/privacy-policy" },
  ];

  const icons = [
    { url: "https://www.facebook.com", icon: <FacebookIcon fontSize="large" /> },
    { url: "https://www.twitter.com", icon: <TwitterIcon fontSize="large" /> },
    { url: "https://www.instagram.com", icon: <InstagramIcon fontSize="large" /> },
    { url: "https://www.youtube.com", icon: <YouTubeIcon fontSize="large" /> },
  ];

  console.log("langggg: ", language);

  return (
    <>
      <StyledEngineProvider injectFirst>
        {/* <Grid alignContent={"center"} justifyContent={"center"} sx={{ display: "grid",width:"100vw",backgroundColor:"green" }} > */}
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
                  <a key={icon.url} href={icon.url} target="_blank" rel=" noreferrer">
                    {icon.icon}
                  </a>
                ))}
              </Grid>
            </Grid>
            <Grid item className="footer-policy">
              <Typography>© 2022 Digtal  Tous droits réservés</Typography>
              <Grid item className="footer-policy-link-text">
                {policy.map((link) => (
                  <FooterLink key={link.label} to={language + link.route} text={t(link.label)} className="footer-policy-link-text-item" sx={{ color: "red" }} />
                ))}
              </Grid>
            </Grid>
          </Box>
        {/* </Grid> */}
      </StyledEngineProvider>
    </>
  );
}
