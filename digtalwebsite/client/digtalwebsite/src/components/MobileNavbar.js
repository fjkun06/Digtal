import { ExpandMoreOutlined } from "@mui/icons-material";
import { Grid } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import { NavLink } from "react-router-dom";
import MobileActiveNavLink from "../routes/ReusableMobileNavLink";
import { toggleLanguage, toggleMobileServicesDropdown } from "./config/navbar_config";

export default function MobileNavbar({ language, mobileServicesDropdown, mobileSpecial,specialLanguage }) {
  return (
    <>
      <Grid className="mobile-nav-bar mobile-navbar-reveal">
        <Grid item className="mobile-nav-bar-item">
          <MobileActiveNavLink to={language + "/home"} text={t("home")} />
        </Grid>
        <Grid item className="mobile-nav-bar-item">
          <MobileActiveNavLink to={language + "/enterprise"} text={t("enterprise")} />
        </Grid>
        <Grid item className="mobile-nav-bar-item" onClick={() => toggleMobileServicesDropdown(mobileServicesDropdown, mobileSpecial)}>
          <MobileActiveNavLink to={language + "/services/"} text={t("services")} />
          <ExpandMoreOutlined sx={{ fontSize: 24 }} className="select-item-sub-arrow" />
        </Grid>

        <Grid item className="mobile-nav-bar-item special-navbar-item">
          <Box className="select-item-sub mobile-services-dropdown">
            <Box className="select-item-sub-container">
              <NavLink to={language + "/services/web-development"} className="select-item-dropdown-text">
                {" "}
                {t("subject.op2", { ns: "form" })}
              </NavLink>
            </Box>
            <Box className="select-item-sub-container">
              <NavLink to={language + "/services/digital-marketing"} className="select-item-dropdown-text">
                {" "}
                {t("subject.op3", { ns: "form" })}
              </NavLink>
            </Box>
            <Box className="select-item-sub-container">
              <NavLink to={language + "/services/consulting"} className="select-item-dropdown-text">
                {" "}
                {t("subject.op4", { ns: "form" })}
              </NavLink>
            </Box>
          </Box>
        </Grid>
        <Grid item className="mobile-nav-bar-item">
          <MobileActiveNavLink to={language + "/contact"} text={t("contact")} />
        </Grid>
        <Grid item className="mobile-nav-bar-item" onClick={() => toggleLanguage(specialLanguage)}>
          <img src={region} alt="france-flag" className="language-image" />
          <ExpandMoreOutlined sx={{ fontSize: 24 }} className="lselect-item-sub-arrow" />
        </Grid>
        <Grid item className="mobile-nav-bar-item special-language">
          <LanguageDropdown location={location} language={language} setRegion={setRegion} setLanguage={setLanguage} classes={"language-dropdown"} />
        </Grid>
      </Grid>
    </>
  );
}
