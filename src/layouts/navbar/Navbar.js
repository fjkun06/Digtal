import React, { useEffect, useState } from "react";

import logoHalfPNG from "../../assets/images/digtal_logo@0.5x.png";

import { ThemeProvider } from "@mui/system";
import languageSwitcher from "../../i18n/languageSwitcher";

import { useLocation, useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import ExpandLessOutlinedIcon from "@mui/icons-material/ExpandLessOutlined";

import { useMediaQuery, Grid } from "@mui/material";
//importing configuration
import { theme, Gridd, flagItems, selectDropdownItems } from "./navbar_config";
import { ExpandMoreOutlined, KeyboardArrowRight } from "@mui/icons-material";
import { switchTheme } from "./theme";
import { EnglandIcon } from "../../assets/svg/EnglandIcon";
import { FranceIcon } from "../../assets/svg/FranceIcon";
import { GermanyIcon } from "../../assets/svg/GermanyIcon";
import { DarkModeIcon } from "../../assets/svg/DarkModeIcon";
import { LightModeIcon } from "../../assets/svg/LightModeIcon";

import MobileNavbarBody from "../../components/navbar/MobileNavbarBody";
import MobileNavbarIconHandler from "../../components/navbar/MobileNavbarIconHandler";
import Search from "../../assets/svg/Search";
import { icons } from "./../footer/footer_config";
import { ActiveNavLink } from "../../components/reusables/ReusableNavLink";

export default function Navbar({
  language,
  setLanguage,
  setMobileSelectState,
  mobileSelectState,
  toggleMobileSelect,
  showFlagDropdown,
  setshowFlagDropdown,
  setThemeCookie,
  cookie
}) {
  //initialising states
  const [showMobileMenu, setShowMobileMenu] = useState(false);

  const [mobileCross, setMobileCross] = useState("");
  const [mobileMenu, setMobileMenu] = useState("");
  // const [showFlagDropdown, setshowFlagDropdown] = useState(false);
  const [flagId, setFlagId] = useState("");
  const navigate = useNavigate();

  //language settings
  const { t } = useTranslation(["navbar", "form", "pageend"]);
  let location = useLocation();

  //manage mobile menu icon
  useEffect(() => {
    setMobileCross(document.getElementsByClassName("mobile-navbar-cross"));
    setMobileMenu(document.getElementsByClassName("mobile-navbar-menu"));
  }, []);

  //language flasg
  const allFlags = Array.from(
    document.querySelectorAll(".mobile-select--flag")
  );
  const bordered = "flag--bordered";

  //language switching function
  async function switchLanguage(name) {
    if (location.pathname.slice(0, 3) === name) {
    } else {
      await setLanguage(name);
      setTimeout(
        () =>
          navigate(
            name + location.pathname.slice(3 - location.pathname.length)
          ),
        300
      );
      languageSwitcher(name);
      toggleFlagDropdown();
    }
  }

  React.useEffect(() => {
    //navbar

    function testState(id) {
      return allFlags
        .filter(flag => flag.classList.contains(bordered))
        .some(elt => elt.id === id);
    }

    function removeBorderFromOtherElements(id) {
      allFlags.forEach(flag => {
        if (flag.id !== id) {
          flag.classList.remove(bordered);
        } else {
          flag.classList.add(bordered);
        }
      });
    }

    //setting default flag mobile
    allFlags.forEach(flag => {
      if (flag.name === location.pathname.slice(0, 3)) {
        flag.classList.add(bordered);
        setFlagId(flag.id !== flagId ? flag.id : flagId);
      } else {
        flag.classList.remove(bordered);
      }
    });

    allFlags.forEach(elt => {
      elt.addEventListener("click", e => {
        //hanling border on click
        if (testState(e.target.id)) {
        } else {
          removeBorderFromOtherElements(e.target.id);
        }
      });
    });
  }, [language, location, setLanguage, navigate, allFlags, flagId]);

  //media query
  const min769 = useMediaQuery("(min-width:769px)");

  function toggleFlagDropdown() {
    setshowFlagDropdown(showFlagDropdown === true ? false : true);
    setMobileSelectState(false)
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
            zIndex: 100
          }}
        >
          <Grid
            item
            container
            className="main-nav-sub"
            height={
              showMobileMenu
                ? "99.5vh"
                : mobileSelectState && min769
                ? "30rem"
                : "7rem"
            }
          >
            {/* <Grid item container className="main-nav-sub" height={showMobileMenu ? "99.5vh" : outletState && mobileSelectState && min769 ? "30rem" : "7rem"}> */}
            {/* navbar logo */}

            <Grid item className="main-nav-sub-logo" id="navlogo">
              <Gridd item className="logo">
                <img src={logoHalfPNG} alt="Digtal Logo" />
              </Gridd>
            </Grid>

            {/* Desktop navbar */}
            <Grid container item className="main-nav-sub-links">
              <Gridd item className="main-nav-sub-links--item">
                <ActiveNavLink
                  to={language + "/"}
                  text={t("home")}
                  toggleMobile={setMobileSelectState}
                />
              </Gridd>

              <Gridd item className="main-nav-sub-links--item">
                <ActiveNavLink
                  to={language + "/enterprise"}
                  text={t("enterprise")}
                  toggleMobile={setMobileSelectState}
                />
              </Gridd>

              {/* <Gridd item className="main-nav-sub-links--item">
                <ActiveNavLink to={language + "/services/"} text={t("services")} />
              </Gridd> */}
              <Grid
                item
                className="main-nav-sub-links--item"
                id={"laptop-services"}
              >
                <span
                  onClick={toggleMobileSelect}
                  id="services"
                  className="navbar__services"
                >
                  {t("services")}
                </span>
                {!mobileSelectState ? (
                  // {!outletState && !mobileSelectState ? (
                  <ExpandMoreOutlined
                    onClick={() => {
                      toggleMobileSelect();
                      setshowFlagDropdown(false);
                    }}
                    sx={{ fontSize: 24, marginTop: "-5px" }}
                    className="services__arrow"
                  />
                ) : (
                  <ExpandLessOutlinedIcon
                    onClick={() => {
                      toggleMobileSelect();

                    }}
                    sx={{ fontSize: 24, marginTop: "-5px" }}
                    className="services__arrow"
                  />
                )}
              </Grid>

              <Gridd item className="main-nav-sub-links--item">
                <ActiveNavLink
                  to={language + "/about-us"}
                  text={t("about")}
                  toggleMobile={setMobileSelectState}
                />
              </Gridd>

              <Gridd item className="main-nav-sub-links--item">
                <ActiveNavLink
                  to={language + "/contact-us"}
                  text={t("contact")}
                  toggleMobile={setMobileSelectState}
                />
              </Gridd>

              {/* <Grid item className="main-nav-sub-links--item"></Grid> */}

              <Gridd
                item
                className="main-nav-sub-links--itemx"
                id="theme-switcher"
              >
                <Search />

                {/* language handler*/}
                <Grid sx={{ width: "fit-content" }}>
                  {flagId === "0" ? (
                    <EnglandIcon
                      className="navbar-theme-dark main-nav-sub-links--country"
                      sx={{ fontSize: 25 }}
                      toggleDropdown={toggleFlagDropdown}
                    />
                  ) : (
                    ""
                  )}
                  {flagId === "1" ? (
                    <FranceIcon
                      className="navbar-theme-dark main-nav-sub-links--country"
                      sx={{ fontSize: 25 }}
                      toggleDropdown={toggleFlagDropdown}
                    />
                  ) : (
                    ""
                  )}
                  {flagId === "2" ? (
                    <GermanyIcon
                      className="navbar-theme-dark main-nav-sub-links--country"
                      sx={{ fontSize: 25 }}
                      toggleDropdown={toggleFlagDropdown}
                    />
                  ) : (
                    ""
                  )}
                  <Grid
                    className="flags--off"
                    id="flags"
                    style={{ display: !showFlagDropdown ? "none" : "grid" }}
                  >
                    {flagItems.map(flag => (
                      <div key={flag.id}>
                        <img
                          src={flag.src}
                          alt={flag.alt}
                          name={flag.route}
                          route={flag.route}
                          id={flag.id}
                          className="mobile-select--flag"
                          onClick={() => switchLanguage(flag.route)}
                        />
                      </div>
                    ))}
                  </Grid>
                </Grid>

                {/* theme switcher */}
                {cookie === "dark" ? (
                  <LightModeIcon
                    className="navbar-theme-light"
                    handler={() => {
                      switchTheme("light");
                      setThemeCookie("light");
                    }}
                  />
                ) : (
                  <DarkModeIcon
                    className="navbar-theme-dark"
                    handler={() => {
                      switchTheme("dark");

                      setThemeCookie("dark");
                    }}
                  />
                )}
              </Gridd>
            </Grid>
            <Grid
              container
              item
              className="main-nav-sub-services"
              style={{ display: mobileSelectState && min769 ? "grid" : "none" }}
            >
              {/* <Grid container item className="main-nav-sub-services" style={{ display: outletState && mobileSelectState && min769 ? "grid" : "none" }}> */}
              {/* services dropdown */}

              <div className="service-list">
                {selectDropdownItems.map(item => (
                  <Grid item key={item.textIndex}>
                    <KeyboardArrowRight className={"services__arrow"} />
                    <ActiveNavLink
                      to={language + item.route}
                      text={t(item.textIndex, { ns: "form" })}
                      toggleMobile={setMobileSelectState}
                    />
                  </Grid>
                ))}
              </div>
              <div className="service-icons">
                <div>
                  {icons.map(icon => (
                    <a
                      key={icon.url}
                      href={icon.url}
                      target="_blank"
                      rel=" noreferrer"
                    >
                      {icon.icon}
                    </a>
                  ))}
                </div>
              </div>
            </Grid>
            {/* mobile navbar */}
            <MobileNavbarIconHandler
              mobileCross={mobileCross}
              mobileMenu={mobileMenu}
              setShowMobileMenu={setShowMobileMenu}
              showMobileMenu={showMobileMenu}
            />

            {/* mobile navbar body */}
            <MobileNavbarBody
              language={language}
              showMobileMenu={showMobileMenu}
              setShowMobileMenu={setShowMobileMenu}
              toggleMobileSelect={toggleMobileSelect}
              mobileSelectState={mobileSelectState}
              t={t}
              switchLanguage={switchLanguage}
            />
          </Grid>
        </Grid>
      </ThemeProvider>
    </>
  );
}
