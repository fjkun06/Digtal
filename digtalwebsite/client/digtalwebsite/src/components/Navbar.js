import React, { useEffect, useState } from "react";
import ActiveNavLink from "../routes/ReusableNavLink";
import logo from "../assets/images/logoo.png";
import logoMobile from "../assets/images/logo2.png";
import { ThemeProvider } from "@mui/system";
import languageSwitcher from "../i18n/languageSwitcher";

import { useLocation, useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import ExpandLessOutlinedIcon from "@mui/icons-material/ExpandLessOutlined";

import { useMediaQuery, Grid } from "@mui/material";
//importing configuration
import { theme, Gridd, flagItems, selectDropdownItems } from "./config/navbar_config";
import { DarkMode, ExpandMoreOutlined, KeyboardArrowRight, LightMode } from "@mui/icons-material";
import { switchTheme } from "./config/theme";
import { EnglandIcon } from "../assets/svg/EnglandIcon";
import { FranceIcon } from "../assets/svg/FranceIcon";
import { GermanyIcon } from "../assets/svg/GermanyIcon";

import MobileNavbarBody from "./MobileNavbarBody";
import MobileNavbarIconHandler from "./MobileNavbarIconHandler";
import Search from "../assets/svg/Search";
import SearchDesktop from "../assets/svg/SearchDesktop";

export default function Navbar({ language, setLanguage }) {
  //theme configuration
  const [websiteTheme, setWebsiteTheme] = useState("dark");

  //initialising states
  const [showMobileMenu, setShowMobileMenu] = useState(false);
  const [mobileSelectState, setMobileSelectState] = useState(false);

  const [mobileCross, setMobileCross] = useState("");
  const [mobileMenu, setMobileMenu] = useState("");
  const [showFlagDropdown, setshowFlagDropdown] = useState(false);
  const [flagId, setFlagId] = useState("");
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
      toggleFlagDropdown();
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

    //setting default flag mobile
    allFlags.forEach((flag) => {
      if (flag.name === location.pathname.slice(0, 3)) {
        flag.classList.add(bordered);
        setFlagId(flag.id !== flagId ? flag.id : flagId);
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
  }, [language, location, setLanguage, navigate, allFlags, flagId]);

  //media query
  const max480 = useMediaQuery("(max-width:480px)");
  const min769 = useMediaQuery("(min-width:769px)");

  function toggleMobileSelect() {
    setMobileSelectState(mobileSelectState === true ? false : true);
  }

  function toggleFlagDropdown() {
    setshowFlagDropdown(showFlagDropdown === true ? false : true);
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
          <Grid item container className="main-nav-sub" height={showMobileMenu ? "99.5vh" : ( mobileSelectState && min769? "40rem" : "7rem") }>
            {/* navbar logo */}

            <Grid item className="main-nav-sub-logo" id="navlogo">
              <Gridd item className="logo">
                {max480 ? <img src={logoMobile} alt="Digtal Logo" /> : <img src={logo} alt="Digtal Logo" />}
              </Gridd>
            </Grid>

            {/* Desktop navbar */}
            <Grid container item className="main-nav-sub-links">
              <Gridd item className="main-nav-sub-links--item">
                <ActiveNavLink to={language + "/"} text={t("home")} />
              </Gridd>

              <Gridd item className="main-nav-sub-links--item">
                <ActiveNavLink to={language + "/enterprise"} text={t("enterprise")} />
              </Gridd>

              {/* <Gridd item className="main-nav-sub-links--item">
                <ActiveNavLink to={language + "/services/"} text={t("services")} />
              </Gridd> */}
              <Grid item className="main-nav-sub-links--item" id={"laptop-services"}>
                <span onClick={toggleMobileSelect} id="services">
                  {t("services")}
                </span>
                {!mobileSelectState ? (
                  <ExpandMoreOutlined onClick={toggleMobileSelect} sx={{ fontSize: 24, marginTop: "-5px" }} className="select-item-sub-arrow" />
                ) : (
                  <ExpandLessOutlinedIcon onClick={toggleMobileSelect} sx={{ fontSize: 24, marginTop: "-5px" }} className="select-item-sub-arrow" />
                )}
              </Grid>

              <Gridd item className="main-nav-sub-links--item">
                <ActiveNavLink to={language + "/about-us"} text={t("about")} />
              </Gridd>

              <Gridd item className="main-nav-sub-links--item">
                <ActiveNavLink to={language + "/contact-us"} text={t("contact")} />
              </Gridd>

              {/* <Grid item className="main-nav-sub-links--item"></Grid> */}

              <Gridd item className="main-nav-sub-links--itemx" id="theme-switcher">
                <span>
                  <SearchDesktop />
                </span>

                <Grid sx={{ width: "fit-content" }} className="language-item">
                  {flagId === "0" ? <EnglandIcon className="navbar-theme-dark main-nav-sub-links--country" sx={{ fontSize: 25 }} toggleDropdown={toggleFlagDropdown} /> : ""}
                  {flagId === "1" ? <FranceIcon className="navbar-theme-dark main-nav-sub-links--country" sx={{ fontSize: 25 }} toggleDropdown={toggleFlagDropdown} /> : ""}
                  {flagId === "2" ? <GermanyIcon className="navbar-theme-dark main-nav-sub-links--country" sx={{ fontSize: 25 }} toggleDropdown={toggleFlagDropdown} /> : ""}
                  <Grid className="language-item flags--off" id="flags" style={{ display: !showFlagDropdown ? "none" : "grid" }}>
                    {flagItems.map((flag) => (
                      <div key={flag.id}>
                        <img src={flag.src} alt={flag.alt} name={flag.route} route={flag.route} id={flag.id} className="mobile-select--flag" onClick={() => switchLanguage(flag.route)} />
                      </div>
                    ))}
                  </Grid>
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
            <Grid container item className="main-nav-sub-services"style={{display: mobileSelectState && min769? "grid": "none"}}>
              <div className="service-list">
                {selectDropdownItems.map((item) => (
                  <Grid item key={item.textIndex}>
                    <KeyboardArrowRight/>
                    <ActiveNavLink to={language + item.route} text={t(item.textIndex, { ns: "form" })} />
                  </Grid>
                ))}
              </div>
              <div className="service-icons">hello</div>
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
