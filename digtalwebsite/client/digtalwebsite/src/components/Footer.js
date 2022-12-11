import { Button, Grid, Typography } from "@mui/material";
import { Box, StyledEngineProvider } from "@mui/system";
import React from "react";
import { useTranslation } from "react-i18next";
import ActiveNavLink from "../routes/ReusableNavLink";
import logoMobile from "../assets/images/logo2.png";
import FooterLink from "../routes/FooterLink";
import { links, policy, icons, enterprise, services } from "./config/footer_config";
import KeepItIcon from "../assets/svg/KeepItIcon";

export default function Footer({ language }) {
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
                <input type="text" id="subscribe-input" placeholder={t("placeholder")} />
              </Grid>
              <Grid item>
                <Button className="footer-subscribe-item-button" variant="contained">
                  {t("subs-button")}
                </Button>
              </Grid>
            </Grid>
          </Grid>
          <Grid item className="footer-body">
            <Grid item className="footer-body-nav">
              <img src={logoMobile} alt="Digtal Logo" />
              <KeepItIcon />
            </Grid>
            <Grid item className="footer-body-items">
              <div className="enterprise">
                <span className="heading">Enterprise</span>
                <div className="links">
                  {enterprise.map((link) => (
                    <FooterLink key={link.label} to={language + link.route} text={t(link.label)} className="footer-policy-link-text-item" sx={{ color: "red" }} />
                  ))}
                </div>
              </div>
              <div className="enterprise">
                <span className="heading">Services</span>
                <div className="links">
                  {services.map((link) => (
                    <FooterLink key={link.label} to={language + link.route} text={t(link.label)} className="footer-policy-link-text-item" sx={{ color: "red" }} />
                  ))}
                </div>
              </div>
            </Grid>
            <Grid item className="footer-body-icons">
              {icons.map((icon) => (
                <a key={icon.url} href={icon.url} target="_blank" rel=" noreferrer">
                  {icon.icon}
                </a>
              ))}
            </Grid>
          </Grid>
          <Grid item className="footer-policy">
            <Grid item className="footer-policy-link-text">
              {policy.map((link) => (
                <FooterLink key={link.label} to={language + link.route} text={t(link.label)} className="footer-policy-link-text-item" sx={{ color: "red" }} />
              ))}
            </Grid>
            <Typography component={"span"}>
              © {new Date().getFullYear()} DIGTAL {t("rights")}
            </Typography>
          </Grid>
        </Box>
      </StyledEngineProvider>
    </>
  );
}
