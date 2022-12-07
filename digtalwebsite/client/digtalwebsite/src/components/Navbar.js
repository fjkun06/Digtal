import React, { useEffect, useState } from "react";
import ActiveNavLink from "../routes/ReusableNavLink";
import logo from "../assets/images/logoo.png";
import logoMobile from "../assets/images/logo2.png";
import { ThemeProvider } from "@mui/system";
import languageSwitcher from "../i18n/languageSwitcher";

import { useLocation, useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";

import { useMediaQuery, Grid } from "@mui/material";
//importing configuration
import { theme, Gridd } from "./config/navbar_config";
import { DarkMode, LightMode } from "@mui/icons-material";
import { switchTheme } from "./config/theme";
import { EnglandIcon } from "../assets/svg/EnglandIcon";
import { FranceIcon } from "../assets/svg/FranceIcon";
import { GermanyIcon } from "../assets/svg/GermanyIcon";

import MobileNavbarBody from "./MobileNavbarBody";
import MobileNavbarIconHandler from "./MobileNavbarIconHandler";

export default function Navbar({ language, setLanguage }) {
  //theme configuration
  const [websiteTheme, setWebsiteTheme] = useState("dark");

  //initialising states
  const [showMobileMenu, setShowMobileMenu] = useState(false);
  const [mobileSelectState, setMobileSelectState] = useState(false);

  const [mobileCross, setMobileCross] = useState("");
  const [mobileMenu, setMobileMenu] = useState("");
  const navigate = useNavigate();

  //language settings
  const { t } = useTranslation(["navbar", "form", "pageend"]);
  let location = useLocation();

  //theme configuration
  useEffect(() => {
    //setting default color scheme
    document.documentElement.className = "light";
    setWebsiteTheme(document.documentElement.className);
  }, []);

  //manage mobile menu icon
  useEffect(() => {
    setMobileCross(document.getElementsByClassName("mobile-navbar-cross"));
    setMobileMenu(document.getElementsByClassName("mobile-navbar-menu"));
  }, []);

  //navigation
  useEffect(() => {
    if (location.pathname === "/") navigate(language + "/");
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [language, location.pathname, navigate]);

  //language flasg
  const allFlags = Array.from(document.querySelectorAll(".mobile-select--flag"));
  const bordered = "flag--bordered";

  //language switching function
  async function switchLanguage(name) {
    if (location.pathname.slice(0, 3) === name) {
    } else {
      await setLanguage(name);
      setTimeout(() => navigate(name + location.pathname.slice(3 - location.pathname.length)), 300);
      languageSwitcher(name);
    }
  }

  React.useEffect(() => {
    function testState(id) {
      return allFlags.filter((flag) => flag.classList.contains(bordered)).some((elt) => elt.id === id);
    }

    function removeBorderFromOtherElements(id) {
      allFlags.forEach((flag) => {
        if (flag.id !== id) {
          flag.classList.remove(bordered);
        } else {
          flag.classList.add(bordered);
        }
      });
    }

    //setting default flag
    allFlags.forEach((flag) => {
      if (flag.name === location.pathname.slice(0, 3)) {
        flag.classList.add(bordered);
      } else {
        flag.classList.remove(bordered);
      }
    });

    allFlags.forEach((elt) => {
      elt.addEventListener("click", (e) => {
        //hanling border on click
        if (testState(e.target.id)) {
        } else {
          removeBorderFromOtherElements(e.target.id);
        }
      });
    });
  }, [language, location, setLanguage, navigate, allFlags]);

  //media query
  const max480 = useMediaQuery("(max-width:480px)");

  function toggleMobileSelect() {
    setMobileSelectState(mobileSelectState === true ? false : true);
  }

  return (
    <>
      <ThemeProvider theme={theme}>
        <Grid
          component={"nav"}
          container
          alignItems={"center"}
          className="main-nav"
          id="scroll-nav"
          direction="row"
          sx={{
            position: "sticky",
            zIndex: 100,
          }}
        >
          <Grid item container className="main-nav-sub" height={showMobileMenu ? "99.5vh" : "9vh"}>
            {/* navbar logo */}

            <Grid
              item
              justifyContent="flex-start"
              className="main-nav-sub-logo"
              id="navlogo"
              // bs={3}
              // md={3}
              // xs={4}
            >
              <Gridd
                item
                className="logo"
                // sx={{
                //   width: {
                //     md: "50%",
                //     sm: "70%",
                //     xs: "100%",
                //   },
                // }}
                // ml={{ xs: 6 }}
              >
                {max480 ? <img src={logoMobile} alt="Digtal Logo" /> : <img src={logo} alt="Digtal Logo" />}
              </Gridd>
            </Grid>

            {/* Desktop navbar */}
            <Grid
              // md={8}
              // sm={9}
              // bs={9}
              container
              item
              // sx={{ display: max793 ? "none" : "", border: "1px solid red", backgroundColor: "red" }}
              alignItems={"center"}
              justifyContent="end"
              columnGap={{ bs: 3, w893: 5, md: 4, lg: 8 }}
              className="main-nav-sub-links"

              // pl={5}
              // pr={5}
            >
              <Gridd item className="main-nav-sub-links--item">
                {/* <Gridd item md={location.pathname === "/fr/" ? 0.7 : "/de/" ? 0.5 : 0.3}> */}
                <ActiveNavLink to={language + "/"} text={t("home")} />
              </Gridd>

              <Gridd item className="main-nav-sub-links--item">
                {/* <Gridd item md={window?.location?.pathname === "/de/" ? 1.5 : "/fr/" ? 1.0 : 0.5} lg={location.pathname === "/de/" ? 1.5 : "/fr/" ? 1.6 : 0.5} sx={{ border: "1px solid blue" }}> */}
                <ActiveNavLink to={language + "/enterprise"} text={t("enterprise")} />
              </Gridd>

              <Gridd item className="main-nav-sub-links--item">
                <ActiveNavLink to={language + "/services/"} text={t("services")} />
              </Gridd>

              <Gridd item className="main-nav-sub-links--item">
                {/* <Gridd item md={1.1} sx={{ width: "fit-content", border: "1px solid red" }}> */}
                <ActiveNavLink to={language + "/about-us"} text={t("about")} />
              </Gridd>

              <Gridd item className="main-nav-sub-links--item">
                {/* <Gridd item md={1.1} sx={{ width: "fit-content", border: "1px solid red" }}> */}
                <ActiveNavLink to={language + "/contact-us"} text={t("contact")} />
              </Gridd>

              <Grid
                item
                // className="language-item"
                className="main-nav-sub-links--item"
                sx={
                  {
                    // border: "1px solid red",
                  }
                }
              ></Grid>

              <Gridd item className="main-nav-sub-links--itemx" id="theme-switcher">
                <Grid sx={{ width: "fit-content" }} className="language-item">
                  <EnglandIcon className="navbar-theme-dark main-nav-sub-links--country" sx={{ fontSize: 25 }} />
                </Grid>

                <DarkMode
                  className="navbar-theme-dark"
                  sx={{ fontSize: 25, display: websiteTheme === "dark" ? "none" : "block" }}
                  onClick={() => {
                    switchTheme("dark");
                    setWebsiteTheme("dark");
                    console.log("hello: ", websiteTheme);
                  }}
                />
                <LightMode
                  className="navbar-theme-light"
                  sx={{ fontSize: 25, display: websiteTheme === "light" ? "none" : "block" }}
                  onClick={() => {
                    switchTheme("light");
                    setWebsiteTheme("light");
                  }}
                />
              </Gridd>
            </Grid>
            {/* mobile navbar */}
            <MobileNavbarIconHandler mobileCross={mobileCross} mobileMenu={mobileMenu} setShowMobileMenu={setShowMobileMenu} />

            {/* mobile navbar body */}
            <MobileNavbarBody language={language} showMobileMenu={showMobileMenu} toggleMobileSelect={toggleMobileSelect} mobileSelectState={mobileSelectState} t={t} switchLanguage={switchLanguage} />
          </Grid>
        </Grid>
      </ThemeProvider>
    </>
  );
}
